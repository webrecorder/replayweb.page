"use strict";

import fetch from 'node-fetch';
import { Headers } from 'node-fetch';

import {app, session, BrowserWindow, ipcMain} from 'electron';

import path from 'path';
import fs from 'fs';

import { ArchiveResponse, Rewriter } from 'wabac/src/rewrite';

import { PassThrough } from 'stream';

import mime from 'mime-types';

global.Headers = Headers;

const STATIC_PREFIX = "http://localhost:5471/";

const REPLAY_PREFIX = STATIC_PREFIX + "wabac/";

const HTML_TYPE = 'text/html; charset="utf-8"';
const JS_TYPE = 'application/javascript; charset="utf-8"';

const URL_RX = /([^\/]+)\/([\d]+)(?:\w\w_)?\/(.*)$/;

const appPath = app.getAppPath();

const projPath = path.join(appPath, "../");

const staticContentPath = path.join(__dirname, "../");

let pluginPath = "";

switch (process.platform) {
  case 'win32':
    pluginPath = path.join(projPath, "plugins-win", "pepflashplayer-x86_64.dll");
    break;

  case 'darwin':
    pluginPath = path.join(projPath, "plugins-mac", "PepperFlashPlayer.plugin");
    break;

  case 'linux':
    pluginPath = path.join(projPath, "plugins-mac", "libpepflashplayer.so");
    break;

  default:
    console.log('platform unsupported: ' + process.platform);
    break;
}


console.log('app path', appPath);
console.log('dir name', __dirname);
console.log('proj path', projPath);
console.log('plugin path', pluginPath);


console.log('app data', app.getPath('appData'));

app.setPath('userData', path.join(app.getPath('appData'), 'replaywebpage'));

console.log('user data', app.getPath('userData'));

app.commandLine.appendSwitch('ppapi-flash-path', pluginPath);


var proxyColl;
var proxyTS;

var mainWindow;

// Single instance lock
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  console.log("App already running, opening new window in first instance and quitting");
  app.quit();
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Just create a new window in case of second instance request
    createWindow();
  });
}


function bufferToStream(data) {
  const rv = new PassThrough();
  rv.push(data);
  rv.push(null);
  return rv;
}




async function doIntercept(request, callback) {
  console.log(`${request.method} ${request.url} from ${request.referrer}`);

  // if local server
  if (request.url.startsWith(STATIC_PREFIX)) {
    //if replay prefix
    if (request.url.startsWith(REPLAY_PREFIX)) {
      const m = request.url.slice(REPLAY_PREFIX.length).match(URL_RX);
      if (m) {
        proxyColl = m[1];
        proxyTS = m[2];

        request.url = m[3];
        return await resolveArchiveResponse(request, callback);
      }
    } else {

      // try serve static file from app dir
      let filename = request.url.slice(STATIC_PREFIX.length).split("?", 1)[0];

      if (filename === "") {
        filename = "index.html";
      } else if (filename === "docs") {
        filename = "docs/index.html";
      }

      let ext = path.extname(filename);
      if (!ext) {
        ext = ".html";
        filename += ext;
      }

      const mimeType = mime.contentType(ext);

      if (mimeType) {
        const fullPath = path.join(staticContentPath, filename);

        console.log("fullPath: " + fullPath);

        const data = fs.createReadStream(fullPath);

        return callback({statusCode: 200, headers: {"content-type": mimeType}, data});
      }
    }
    
    return notFound(request.url, callback);
  }

  if (request.url.startsWith(__APP_FILE_SERVE_PREFIX__)) {
    const parsedUrl = new URL(request.url);
    const filename = parsedUrl.searchParams.get("filename");
    console.log("file serve:", filename);

    const stat = await fs.promises.lstat(filename);

    if (!stat.isFile()) {
      return notFound(filename, callback);
    }

    const size = stat.size;

    const headers = {"Content-Length": "" + size, "Content-Type": "application/octet-stream"};

    const reqHeaders = new Headers(request.headers);

    const {statusCode, start, end} = parseRange(reqHeaders, headers, size);

    const data = request.method === "HEAD" ? null : fs.createReadStream(filename, {start, end});

    callback({statusCode, headers, data});
    return;
  }

  // possible 'live leak' attempt, just return not found
  if (request.referrer && request.referrer.startsWith(REPLAY_PREFIX)) {
    return notFound(request.url, callback);
  }

  await proxyLive(request, callback);
}

async function proxyLive(request, callback) {
  let headers = request.headers;

  const method = request.method;
  const response = await fetch(request.url, {method, headers});
  const data = method === "HEAD" ? null : response.body;
  const statusCode = response.status;

  headers = Object.fromEntries(response.headers.entries());
  callback({statusCode, headers, data});
}

function notFound(url, callback) {
  console.log("not found: " +  url);
  const data = bufferToStream(`Sorry, the url <b>${url}</b> could not be found in this archive.`);
  callback({statusCode: 404, headers: {"Content-Type": 'text/html; charset="utf-8"'}, data});
}

async function resolveArchiveResponse(request, callback) {
  const channel = `req:${new Date().getTime()}:${request.url}`;

  ipcMain.once(channel, async (event, status, headers, payload) => {
    const url = request.url;

    if (status === 404 && !payload) {
      return notFound(url, callback);
    } else {
      console.log("got response for: " + url);
    }

    headers = new Headers(headers);
    const date = new Date();

    let response = new ArchiveResponse({payload, headers, status, date, url});

    const rewriter = new Rewriter({
      baseUrl: url,
      prefix: "",
      urlRewrite: false,
      contentRewrite: true,
      decode: true,
      useBaseRules: true
    });

    request.headers = new Headers(request.headers);

    try {
      response = await rewriter.rewrite(response, request);

      headers = Object.fromEntries(response.headers.entries());

      let data = await response.getBuffer();

      if (status === 206 || status === 200) {
        const {statusCode, start, end} = parseRange(request.headers, headers, data.length);
        if (start !== undefined) {
          data = data.slice(start, end);
        }
        status = statusCode;
      }

      data = bufferToStream(data);
  
      callback({statusCode: status, headers, data});
    } catch (e) {
      console.warn(e);
    }

  });

  mainWindow.webContents.send("getresponse", request, proxyColl, proxyTS, channel);
}

function parseRange(reqHeaders, headers, size) {
  let statusCode = 200;
  const range = reqHeaders.get("range");

  if (!range) {
    return {statusCode};
  }

  const m = range.match(/bytes=([\d]+)-([\d]*)/);
  if (!m) {
    return {statusCode};
  }

  const start = Number(m[1]);
  const end = m[2] ? Number(m[2]) : size - 1;
  statusCode = 206;
  if (headers) {
    headers["Content-Range"] = `bytes ${start}-${end}/${size}`;
  }
  return {statusCode, start, end};
}


function createWindow () {
  const sesh = session.defaultSession;

  //sesh.protocol.interceptStreamProtocol("file", doIntercept);
  sesh.protocol.interceptStreamProtocol("http", doIntercept);
  //sesh.protocol.interceptStreamProtocol("https", doIntercept);

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    isMaximized: true,
    show: false,
    webPreferences: {
      plugins: true,
      preload: path.join(__dirname, 'preload.js'),
      nativeWindowOpen: true,
      contextIsolation: true
    }
  }).once('ready-to-show', () => {

    //const sesh = session.fromPartition("persist:replay");

    //const filter = {"urls": ['*://*/*']};
    //sesh.webRequest.onBeforeRequest(filter, (request, callback) => {
    //  console.log("got onBeforeRequest");
    //  callback({cancel: false});
    //});

    //sesh.protocol.interceptStreamProtocol("http", doIntercept);
    //sesh.protocol.interceptStreamProtocol("https", doIntercept);

    mainWindow.show();
    mainWindow.maximize();
  });

  mainWindow.loadURL(STATIC_PREFIX + "index.html");
  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  //if (process.platform !== 'darwin')
  app.quit();
});

/*
app.on('web-contents-created', (event, contents) => {
  if (contents.getType() === "webview") {
    contents.openDevTools();
  } else if (contents.getType() === "window") {
    console.log("main contents set")
    mainContents = contents;
  }
});*/
