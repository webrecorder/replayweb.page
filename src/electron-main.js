"use strict";

const {app, session, BrowserWindow, protocol, ipcMain} = require('electron');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');

const { ArchiveResponse, Rewriter } = require('wabac/src/rewrite');

const { Headers } = require('node-fetch');

global.Headers = Headers;

const { PassThrough } = require('stream');

const STATIC_PREFIX = `https://replayweb.page/`;

const REPLAY_PREFIX = STATIC_PREFIX + "wabac/";

const STATIC_PATHS = {
  'index.html': 'text/html',
  'dist/frontend.js': 'application/javascript',
  'dist/sw.js': 'application/javascript',
  'sw.js': 'application/javascript'
};

const URL_RX = /([^\/]+)\/([\d]+)(?:\w\w_)?\/(.*)$/;

const appPath = app.getAppPath();
const projPath = path.join(appPath, "../");

const pluginPath = path.join(projPath, "plugins", "PepperFlashPlayer.plugin");

console.log('app path', appPath);
console.log('proj path', projPath);
console.log('plugin path', pluginPath);


console.log('app data', app.getPath('appData'));

app.setPath('userData', path.join(app.getPath('appData'), 'replaywebpage'));

console.log('user data', app.getPath('userData'));

app.commandLine.appendSwitch('ppapi-flash-path', pluginPath);


var proxyColl;
var proxyTS;

var mainContents;


function bufferToStream(data) {
  const rv = new PassThrough();
  rv.push(data);
  rv.push(null);
  return rv;
}




async function doIntercept(request, callback) {
  console.log("request", request.url);

  if (request.url.startsWith(STATIC_PREFIX)) {
    let filename = request.url.slice(STATIC_PREFIX.length).split("?", 1)[0];
    if (filename === "") {
      filename = "index.html";
    }
    const type = STATIC_PATHS[filename];

    if (type) {
      const fullPath = path.join(__dirname, "../", filename);

      console.log("fullPath: " + fullPath);

      const data = fs.createReadStream(fullPath);

      callback({statusCode: 200, headers: {"content-type": type}, data});
      return;

    } else if (request.url.startsWith(REPLAY_PREFIX)) {
      const m = request.url.slice(REPLAY_PREFIX.length).match(URL_RX);
      if (m) {
        proxyColl = m[1];
        proxyTS = m[2];

        //const data = bufferToStream(`<html><head><script>window.location.href = "${m[3]}";</script></head></html>`);
        //const statusCode = 200;
        //const headers =  {"location": m[3], "cache-control": "no-cache"};

        //callback({statusCode, headers, data});

        request.url = m[3];
        await resolveResponse(request, callback);
        return;
      }
    }
    return notFound(request.url, callback);
  }

  if (request.url.startsWith(__APP_FILE_SERVE_PREFIX__)) {
    const filename = qs.unescape(request.url.slice(__APP_FILE_SERVE_PREFIX__.length));
    console.log("file serve:", filename);

    const stat = await fs.promises.lstat(filename);

    if (!stat.isFile()) {
      return notFound(filename, callback);
    }

    const size = stat.size;

    const headers = {"Content-Length": "" + size, "Content-Type": "application/octet-stream"};

    const reqHeaders = new Headers(request.headers);

    const {statusCode, start, end} = parseRange(reqHeaders, headers, size);

    const data = fs.createReadStream(filename, {start, end});

    callback({statusCode, headers, data});
  }

  await resolveResponse(request, callback);
}

function notFound(url, callback) {
  console.log("not found: " +  url);
  const data = bufferToStream(`Sorry, the url <b>${url}</b> could not be found in this archive.`);
  callback({statusCode: 404, headers: {"Content-Type": 'text/html; charset="utf-8"'}, data});
}

async function resolveResponse(request, callback) {
  //mainContents.once("ipc-message", async (event, channel, status, headers, payload) => {
  ipcMain.once("req:" + request.url, async (event, status, headers, payload) => {
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

    //const timestamp = proxyTS;
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

  mainContents.send("getresponse", request, proxyColl, proxyTS);
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
  //createServer();

  const sesh = session.defaultSession;
  protocol.registerStreamProtocol("filex", async (request, callback) => {
    const filename = qs.unescape(request.url.slice("filex://-".length));
    console.log("filex", filename);

    if (filename.endsWith("?redir")) {
      const newLoc = request.url.replace("?redir", "");
      console.log("redir to: " + newLoc);
      callback({statusCode: 304, headers: {"Location": newLoc}, data: bufferToStream(NOT_FOUND)});
      return;
    }


  });

  sesh.protocol.interceptStreamProtocol("http", doIntercept);
  sesh.protocol.interceptStreamProtocol("https", doIntercept);

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    isMaximized: true,
    show: false,
    webPreferences: {
      plugins: true,
      preload: path.join(__dirname, 'preload.js'),
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
  mainWindow.webContents.openDevTools();
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


app.on('web-contents-created', (event, contents) => {
  if (contents.getType() === "webview") {
    contents.openDevTools();
  } else if (contents.getType() === "window") {
    mainContents = contents;
  }
});
