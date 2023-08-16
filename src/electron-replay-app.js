/*eslint-env node */

import fetch from "node-fetch";
import { Headers } from "node-fetch";

import {
  app,
  session,
  BrowserWindow,
  ipcMain,
  protocol,
  screen,
  shell,
} from "electron";

import path from "path";
import fs from "fs";

import { ArchiveResponse, Rewriter } from "@webrecorder/wabac/src/rewrite";

import { PassThrough, Readable } from "stream";

import { autoUpdater } from "electron-updater";
import log from "electron-log";

import mime from "mime-types";
import url from "url";

global.Headers = Headers;
global.fetch = fetch;

const STATIC_PREFIX = "http://localhost:5471/";

const REPLAY_PREFIX = STATIC_PREFIX + "w/";

const FILE_PROTO = "file2";

const URL_RX = /([^/]+)\/([\d]+)(?:\w\w_)?\/(.*)$/;

// ============================================================================
class ElectronReplayApp {
  constructor({ staticPath = "./", profileName = "" } = {}) {
    this.pluginPath = "";

    this.appPath = app.getAppPath();

    this.projPath = path.join(this.appPath, "../");

    this.staticContentPath = staticPath;

    this.profileName = profileName;

    this.proxyColl = null;
    this.proxyTS = null;

    this.mainWindow = null;

    this.openNextFile = null;

    this.screenSize = { width: 1024, height: 768 };

    this.origUA = null;
  }

  get mainWindowWebPreferences() {
    return {
      plugins: true,
      preload: path.join(__dirname, "preload.js"),
      nativeWindowOpen: true,
      contextIsolation: true,
      enableRemoteModule: false,
      sandbox: false,
      nodeIntegration: false,
    };
  }

  get mainWindowUrl() {
    return "index.html";
  }

  init() {
    // Single instance check
    const gotTheLock = app.requestSingleInstanceLock();

    if (!gotTheLock) {
      console.log(
        "App already running, opening new window in first instance and quitting",
      );
      app.quit();
    } else {
      app.on("second-instance", (event, commandLine /*, workingDir*/) => {
        // Just create a new window in case of second instance request
        this.createMainWindow(commandLine);
      });
    }

    console.log("app path", this.appPath);
    console.log("dir name", __dirname);
    console.log("proj path", this.projPath);

    console.log("app data", app.getPath("appData"));
    console.log("user data", app.getPath("userData"));

    if (this.profileName) {
      app.setPath(
        "userData",
        path.join(app.getPath("appData"), this.profileName),
      );
    }

    protocol.registerSchemesAsPrivileged([
      {
        scheme: FILE_PROTO,
        privileges: {
          standard: false,
          secure: true,
          bypassCSP: true,
          allowServiceWorkers: true,
          supportFetchAPI: true,
          corsEnabled: true,
          stream: true,
        },
      },
    ]);

    app.on("will-finish-launching", () => {
      app.on("open-file", (event, filePath) => {
        this.openNextFile = filePath;
        if (this.mainWindow) {
          this.createMainWindow(process.argv);
        }
      });
    });

    app.on("activate", function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) {
        this.mainWindow = this.createMainWindow(process.argv);
      }
    });

    app.whenReady().then(() => this.onAppReady());

    // Quit when all windows are closed.
    app.on("window-all-closed", function () {
      // On macOS it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      //if (process.platform !== 'darwin')
      app.quit();
    });
  }

  checkUpdates() {
    autoUpdater.logger = log;
    autoUpdater.logger.transports.file.level = "info";
    autoUpdater.checkForUpdatesAndNotify();
  }

  onAppReady() {
    this.checkUpdates();

    this.screenSize = screen.getPrimaryDisplay().workAreaSize;

    app.on("web-contents-created", (event, contents) => {
      contents.setWindowOpenHandler(({ url }) => {
        // load docs in native browser for now
        if (url === STATIC_PREFIX + "docs") {
          shell.openExternal("https://replayweb.page/docs/");
          return { action: "deny" };
        }

        // load external URLs in native browser
        if (!url.startsWith(STATIC_PREFIX)) {
          shell.openExternal(url);
          return { action: "deny" };
        }

        return { action: "allow" };
      });
    });

    const sesh = session.defaultSession;

    sesh.protocol.interceptStreamProtocol("http", (request, callback) =>
      this.doIntercept(request, callback),
    );

    protocol.registerStreamProtocol(FILE_PROTO, (request, callback) =>
      this.doHandleFile(request, callback),
    );

    this.origUA = sesh.getUserAgent();

    this.mainWindow = this.createMainWindow(process.argv);
  }

  async doHandleFile(request, callback) {
    //const parsedUrl = new URL(request.url);
    //const filename = parsedUrl.searchParams.get("filename");

    if (request.url === FILE_PROTO + "://localhost") {
      callback({ statusCode: 200, data: null });
      return;
    }

    const filename = url.fileURLToPath(request.url.replace(FILE_PROTO, "file"));

    const headers = { "Content-Type": "application/octet-stream" };
    const reqHeaders = new Headers(request.headers);

    if (filename) {
      const stat = await fs.promises.lstat(filename);

      if (!stat.isFile()) {
        return this.notFound(filename, callback);
      }

      const size = stat.size;

      const { statusCode, start, end } = this.parseRange(
        reqHeaders,
        headers,
        size,
      );

      const data =
        request.method === "HEAD"
          ? null
          : fs.createReadStream(filename, { start, end });

      callback({ statusCode, headers, data });
      return;
    } else {
      return this.notFound("No Resource Specified", callback);
    }
  }

  _bufferToStream(data) {
    const rv = new PassThrough();
    rv.push(data);
    rv.push(null);
    return rv;
  }

  async doIntercept(request, callback) {
    console.log(`${request.method} ${request.url} from ${request.referrer}`);

    // if local server
    if (request.url.startsWith(STATIC_PREFIX)) {
      //if replay prefix
      if (request.url.startsWith(REPLAY_PREFIX)) {
        const m = request.url.slice(REPLAY_PREFIX.length).match(URL_RX);
        if (m) {
          this.proxyColl = m[1];
          this.proxyTS = m[2];

          request.url = m[3];
          return await this.resolveArchiveResponse(request, callback);
        }
      } else {
        // try serve static file from app dir
        let filename = request.url.slice(STATIC_PREFIX.length).split("?", 1)[0];
        filename = filename.split("#", 1)[0];

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
          const fullPath = path.join(this.staticContentPath, filename);

          console.log("fullPath: " + fullPath);

          const data = fs.createReadStream(fullPath);

          return callback({
            statusCode: 200,
            headers: { "content-type": mimeType },
            data,
          });
        }
      }

      return this.notFound(request.url, callback);
    }

    // possible 'live leak' attempt, return archived version, if any
    if (request.referrer && request.referrer.startsWith(REPLAY_PREFIX)) {
      return await this.resolveArchiveResponse(request, callback);
    }

    await this.proxyLive(request, callback);
  }

  async proxyLive(request, callback) {
    let headers = request.headers;
    const { method, url, uploadData } = request;

    const body = uploadData
      ? Readable.from(readBody(uploadData, session.defaultSession))
      : null;

    if (this.origUA) {
      // pass UA if origUA is set
      headers["User-Agent"] = this.origUA;
    }

    let response;

    try {
      response = await fetch(url, { method, headers, body });
    } catch (e) {
      console.warn("fetch failed for: " + url);
      callback({ statusCode: 502, headers: {}, data: null });
      return;
    }
    const data = method === "HEAD" ? null : response.body;
    const statusCode = response.status;

    headers = Object.fromEntries(response.headers.entries());
    callback({ statusCode, headers, data });
  }

  notFound(url, callback) {
    console.log("not found: " + url);
    const data = this._bufferToStream(
      `Sorry, the url <b>${url}</b> could not be found in this archive.`,
    );
    callback({
      statusCode: 404,
      headers: { "Content-Type": 'text/html; charset="utf-8"' },
      data,
    });
  }

  async resolveArchiveResponse(request, callback) {
    const channel = `req:${new Date().getTime()}:${request.url}`;

    ipcMain.once(channel, async (event, status, headers, payload) => {
      const url = request.url;

      if (status === 404 && !payload) {
        return this.notFound(url, callback);
      } else {
        console.log("got response for: " + url);
      }

      headers = new Headers(headers);
      const date = new Date();

      let response = new ArchiveResponse({
        payload,
        headers,
        status,
        date,
        url,
      });

      const rewriter = new Rewriter({
        baseUrl: url,
        prefix: "",
        urlRewrite: false,
        contentRewrite: true,
        decode: true,
        useBaseRules: true,
      });

      request.headers = new Headers(request.headers);

      try {
        response = await rewriter.rewrite(response, request);

        headers = Object.fromEntries(response.headers.entries());

        let data = await response.getBuffer();

        if (status === 206 || status === 200) {
          const { statusCode, start, end } = this.parseRange(
            request.headers,
            headers,
            data.length,
          );
          if (start !== undefined) {
            data = data.slice(start, end);
          }
          status = statusCode;
        }

        data = this._bufferToStream(data);

        callback({ statusCode: status, headers, data });
      } catch (e) {
        console.warn(e);
      }
    });

    if (this.mainWindow) {
      this.mainWindow.webContents.send(
        "getresponse",
        request,
        this.proxyColl,
        this.proxyTS,
        channel,
      );
    }
  }

  parseRange(reqHeaders, headers, size) {
    let statusCode = 200;
    const range = reqHeaders.get("range");

    if (!range) {
      if (headers) {
        headers["Content-Length"] = "" + size;
      }
      return { statusCode };
    }

    const m = range.match(/bytes=([\d]+)-([\d]*)/);
    if (!m) {
      return { statusCode };
    }

    const start = Number(m[1]);
    const end = m[2] ? Number(m[2]) : size - 1;
    statusCode = 206;
    if (headers) {
      headers["Content-Range"] = `bytes ${start}-${end}/${size}`;
      headers["Content-Length"] = `${end - start + 1}`;
    }
    return { statusCode, start, end };
  }

  createMainWindow(argv) {
    const sourceString = this.getOpenUrl(argv);

    // Create the browser window.
    const theWindow = new BrowserWindow({
      width: this.screenSize.width,
      height: this.screenSize.height,
      isMaximized: true,
      show: false,
      webPreferences: this.mainWindowWebPreferences,
    }).once("ready-to-show", () => {
      theWindow.show();
      theWindow.maximize();
    });

    theWindow.loadURL(STATIC_PREFIX + this.mainWindowUrl + sourceString);
    if (process.env.NODE_ENV === "development") {
      theWindow.webContents.openDevTools();
    }

    return theWindow;
  }

  getOpenUrl(argv) {
    argv = require("minimist")(argv.slice(process.defaultApp ? 2 : 1));

    const filename =
      this.openNextFile ||
      argv.filename ||
      argv.f ||
      (argv._.length && argv._[0]);
    this.openNextFile = null;

    let sourceString = "";

    if (filename) {
      const sourceParams = new URLSearchParams();
      sourceParams.set("source", "file://" + filename);
      sourceString = "?" + sourceParams.toString();

      const urlParams = new URLSearchParams();

      const openUrl = argv.url;

      const openTS = argv.ts || argv.timestamp;

      if (openUrl) {
        urlParams.set("url", openUrl);
      }

      if (openTS) {
        urlParams.set("ts", openTS);
      }

      sourceString += "#" + urlParams.toString();

      console.log(`Opening Source: ${sourceString}`);
    }

    return sourceString;
  }
}

async function* readBody(body, session) {
  for (const chunk of body) {
    if (chunk.bytes) {
      yield await Promise.resolve(chunk.bytes);
    } else if (chunk.blobUUID) {
      yield await session.getBlobData(chunk.blobUUID);
    }
  }
}

export { ElectronReplayApp, STATIC_PREFIX };
