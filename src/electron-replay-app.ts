/* eslint-env node */

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

import { ArchiveRequest, ArchiveResponse, Rewriter } from "@webrecorder/wabac";

import { announceList } from "create-torrent";

import { Readable } from "stream";

import { autoUpdater } from "electron-updater";
import log from "electron-log";

import WebTorrent, { type TorrentFile, type Torrent } from "webtorrent";

import crypto from "crypto";

import mime from "mime-types";
import url from "url";

import minimist from "minimist";

//global.Headers = Headers;
//global.fetch = fetch;

const STATIC_PREFIX = "http://localhost:5471/";

const REPLAY_PREFIX = STATIC_PREFIX + "w/";

const FILE_PROTO = "file2";
const MAGNET_PROTO = "magnet";

const URL_RX = /([^/]+)\/([\d]+)(?:\w\w_)?\/(.*)$/;

const peerId = Buffer.from(
  "-RP2400-" + crypto.randomBytes(9).toString("base64"),
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).WEBTORRENT_ANNOUNCE = (announceList as string[][]).map(
  (x) => x[0],
);

type RealTorrentFile = TorrentFile & {
  stream: ({ start, end }: { start?: number; end?: number }) => ReadableStream;
};

// ============================================================================
class ElectronReplayApp {
  pluginPath = "";

  client: WebTorrent.Instance | null = null;

  appPath = app.getAppPath();

  projPath = path.join(this.appPath, "../");

  staticContentPath = "./";

  profileName = "";

  proxyColl: string | null = null;

  proxyTS: string | null = null;

  mainWindow: BrowserWindow | null = null;

  openNextFile: string | null = null;

  screenSize = { width: 1024, height: 768 };

  origUA: string | null = null;

  constructor({ staticPath = "./", profileName = "" } = {}) {
    this.staticContentPath = staticPath;
    this.profileName = profileName;
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
      app.on("second-instance", (_, commandLine) => {
        // Just create a new window in case of second instance request
        this.createMainWindow(commandLine);
      });
    }

    console.log("dir name", __dirname);
    console.log("app path", this.appPath);
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
      {
        scheme: MAGNET_PROTO,
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

    app.on("activate", () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) {
        this.mainWindow = this.createMainWindow(process.argv);
      }
    });

    void app.whenReady().then(() => this.onAppReady());

    // Quit when all windows are closed.
    app.on("window-all-closed", async () => {
      if (this.client) {
        console.log(
          "wait upto 2 seconds for all torrent to close",
          this.client.torrents.length,
        );
        await Promise.race([
          new Promise((resolve) => setTimeout(resolve, 2000)),
          new Promise<void>((resolve) => () => {
            this.client!.destroy(() => {
              //console.log("wt closed!");
              resolve();
            });
          }),
        ]);
      }
      app.quit();
    });
  }

  checkUpdates() {
    autoUpdater.logger = log;
    // @ts-expect-error - TS2339 - Property 'transports' does not exist on type 'Logger'.
    autoUpdater.logger.transports.file.level = "info";
    void autoUpdater.checkForUpdatesAndNotify();
  }

  onAppReady() {
    this.checkUpdates();

    this.screenSize = screen.getPrimaryDisplay().workAreaSize;

    app.on("web-contents-created", (event, contents) => {
      contents.setWindowOpenHandler(({ url }) => {
        // load docs in native browser for now
        if (url === STATIC_PREFIX + "docs") {
          void shell.openExternal("https://replayweb.page/docs/");
          return { action: "deny" };
        }

        // load external URLs in native browser
        if (!url.startsWith(STATIC_PREFIX)) {
          void shell.openExternal(url);
          return { action: "deny" };
        }

        return { action: "allow" };
      });
    });

    const sesh = session.defaultSession;

    sesh.protocol.handle("http", async (request: Request) =>
      this.doIntercept(request),
    );

    protocol.handle(FILE_PROTO, async (request: Request) =>
      this.doHandleFile(request),
    );

    protocol.handle(MAGNET_PROTO, async (request: Request) =>
      this.doHandleBT(request),
    );

    this.origUA = sesh.getUserAgent();

    this.mainWindow = this.createMainWindow(process.argv);
  }

  async doHandleFile(request: Request): Promise<Response> {
    //const parsedUrl = new URL(request.url);
    //const filename = parsedUrl.searchParams.get("filename");

    if (request.url === FILE_PROTO + "://localhost") {
      return new Response("", { status: 200 });
    }

    let urlStr = request.url.replace(FILE_PROTO, "file");
    if (path.sep !== "/") {
      urlStr = urlStr.replace(/(\/\/\w)(\/\/)/, "$1:/");
      urlStr = urlStr.replaceAll("/", path.sep);
    }

    const filename = url.fileURLToPath(urlStr);

    const headers = new Headers({ "Content-Type": "application/octet-stream" });
    const reqHeaders = new Headers(request.headers);

    if (filename) {
      const stat = await fs.promises.lstat(filename);

      if (!stat.isFile()) {
        return this.notFound(filename);
      }

      const size = stat.size;

      const { status, start, end } = this.parseRange(reqHeaders, headers, size);

      const data =
        request.method === "HEAD"
          ? null
          : Readable.toWeb(fs.createReadStream(filename, { start, end }));

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      return new Response(data as any, { status, headers });
    } else {
      return this.notFound("No Resource Specified");
    }
  }

  async doIntercept(request: Request): Promise<Response> {
    console.log(`${request.method} ${request.url} from ${request.referrer}`);

    // if local server
    if (request.url.startsWith(STATIC_PREFIX)) {
      //if replay prefix
      if (request.url.startsWith(REPLAY_PREFIX)) {
        const m = request.url.slice(REPLAY_PREFIX.length).match(URL_RX);
        if (m) {
          this.proxyColl = m[1];
          this.proxyTS = m[2];

          //request.url = m[3];
          return await this.resolveArchiveResponse(request, m[3]);
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

          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
          return new Response(Readable.toWeb(data) as any, {
            headers: { "content-type": mimeType },
            status: 200,
          });
        }
      }

      return this.notFound(request.url);
    }

    // possible 'live leak' attempt, return archived version, if any
    if (request.referrer.startsWith(REPLAY_PREFIX)) {
      return await this.resolveArchiveResponse(request);
    }

    return await this.proxyLive(request);
  }

  async proxyLive(request: Request): Promise<Response> {
    let headers = request.headers;
    const { method, url, body } = request;

    // const body = uploadData
    //   ? Readable.from(readBody(uploadData, session.defaultSession))
    //   : null;

    if (this.origUA) {
      headers = new Headers(headers);
      headers.set("User-Agent", this.origUA);
    }

    let response;

    try {
      response = await fetch(url, { method, headers, body });
    } catch (e) {
      console.warn("fetch failed for: " + url);
      return new Response("", { status: 502 });
    }
    const data = method === "HEAD" ? null : response.body;
    const status = response.status;

    return new Response(data, { status, headers: response.headers });
  }

  notFound(url: string) {
    console.log("not found: " + url);
    const headers = { "Content-Type": 'text/html; charset="utf-8"' };
    return new Response(
      `Sorry, the url <b>${url}</b> could not be found in this archive.`,
      { status: 404, headers },
    );
  }

  async resolveArchiveResponse(
    request: Request,
    urlOverride?: string,
  ): Promise<Response> {
    const url = urlOverride || request.url;
    const channel = `req:${new Date().getTime()}:${url}`;

    let resolve: (r: Response) => void;

    const p = new Promise<Response>((r) => (resolve = r));
    ipcMain.once(
      channel,
      async (
        event,
        status: number,
        reqHeaders: Record<string, string>,
        payload,
      ) => {
        if (status === 404 && !payload) {
          return this.notFound(url);
        } else {
          console.log("got response for: " + url);
        }

        let headers = new Headers(reqHeaders);
        const date = new Date();

        let response: ArchiveResponse = new ArchiveResponse({
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

        const arRequest = new ArchiveRequest(url, request);

        try {
          response = await rewriter.rewrite(response, arRequest);

          headers = response.headers;

          let data = await response.getBuffer();
          if (!data) {
            data = new Uint8Array();
          }

          if (status === 206 || status === 200) {
            headers = new Headers(response.headers);
            const res = this.parseRange(request.headers, headers, data.length);
            const { start, end } = res;
            status = res.status;
            if (start !== undefined) {
              data = data.slice(start, end);
            }
          }

          resolve(new Response(data, { status, headers }));
        } catch (e) {
          console.warn(e);
        }
      },
    );

    if (this.mainWindow) {
      this.mainWindow.webContents.send(
        "getresponse",
        request,
        this.proxyColl,
        this.proxyTS,
        channel,
      );
    }

    return p;
  }

  parseRange(reqHeaders: Headers, headers: Headers, size: number) {
    let status = 200;
    const range = reqHeaders.get("range");

    if (!range) {
      headers.set("content-length", "" + size);
      return { status };
    }

    const m = range.match(/bytes=(-?[\d]+)(?:-([\d]+))?/);
    if (!m) {
      return { status };
    }

    let start = Number(m[1]);
    if (start < 0) {
      start = size + start;
    }
    const end = m[2] ? Number(m[2]) : size - 1;
    status = 206;
    headers.set("content-range", `bytes ${start}-${end}/${size}`);
    headers.set("content-length", `${end - start + 1}`);
    return { status, start, end };
  }

  async doHandleBT(request: Request) {
    if (!this.client) {
      const downloads = path.join(app.getPath("downloads"), "rwp-torrents");
      console.log("downloads", downloads);
      this.client = new WebTorrent({
        peerId,
        //@ts-expect-error destoryStoreOnDestroy not in type
        destroyStoreOnDestroy: true,
        path: downloads,
      });
    }

    // special ping from wabac.js to ensure the scheme works
    if (request.url === "magnet://localhost" && request.method === "HEAD") {
      return new Response();
    }

    const url = new URL(request.url);

    const magnet = "magnet:" + url.search;

    if (!url.search) {
      return this.notFound("invalid magnet: link");
    }

    let torrent = (await this.client.get(magnet)) as Torrent | null;
    let isNew = false;

    if (!torrent) {
      const p = new Promise<Torrent>((resolve) => {
        this.client!.add(magnet, (torrent: Torrent) => {
          resolve(torrent);
        });
      });
      isNew = true;
      torrent = await p;

      // deselect all files and pieces
      torrent.files.forEach((file) => file.deselect());
      torrent.deselect(0, torrent.pieces.length - 1, 1000);
    } else if (!torrent.ready) {
      const p = new Promise<void>((resolve) => {
        torrent!.on("ready", () => resolve());
      });
      isNew = true;
      await p;
    }

    const waczs = torrent.files.filter((x: TorrentFile) =>
      x.name.endsWith(".wacz"),
    );
    if (!waczs.length) {
      return this.notFound("no WACZ found");
    }
    const wacz = waczs[0] as RealTorrentFile;
    // enable this to download full WACZ in the background
    if (isNew) {
      wacz.select();
    }

    const headers = new Headers({ "Content-Type": "application/octet-stream" });
    const reqHeaders = new Headers(request.headers);

    const { status, start, end } = this.parseRange(
      reqHeaders,
      headers,
      wacz.length,
    );

    const data = request.method === "HEAD" ? null : wacz.stream({ start, end });

    return new Response(data, { status, headers });
  }

  createMainWindow(argv: string[]) {
    const sourceString = this.getOpenUrl(argv);

    // Create the browser window.
    const theWindow = new BrowserWindow({
      width: this.screenSize.width,
      height: this.screenSize.height,
      show: false,
      webPreferences: this.mainWindowWebPreferences,
    }).once("ready-to-show", () => {
      theWindow.show();
      theWindow.maximize();
    });

    void theWindow.loadURL(STATIC_PREFIX + this.mainWindowUrl + sourceString);
    if (process.env.NODE_ENV === "development") {
      theWindow.webContents.openDevTools();
    }

    return theWindow;
  }

  getOpenUrl(argv: string[]) {
    const parsed = minimist(argv.slice(process.defaultApp ? 2 : 1));

    const filename =
      this.openNextFile ||
      parsed.filename ||
      parsed.f ||
      (parsed._.length && parsed._[0]);

    this.openNextFile = null;

    let sourceString = "";

    if (filename) {
      const sourceParams = new URLSearchParams();
      sourceParams.set("source", "file://" + filename);
      sourceString = "?" + sourceParams.toString();

      const urlParams = new URLSearchParams();

      const openUrl = parsed.url as string | undefined;

      const openTS = (parsed.ts || parsed.timestamp) as string | undefined;

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

// async function* readBody(body, session) {
//   for (const chunk of body) {
//     if (chunk.bytes) {
//       yield await Promise.resolve(chunk.bytes);
//     } else if (chunk.blobUUID) {
//       yield await session.getBlobData(chunk.blobUUID);
//     }
//   }
// }

export { ElectronReplayApp, STATIC_PREFIX };
