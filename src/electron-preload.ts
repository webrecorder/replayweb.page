/*eslint-env node */

import { CollectionLoader } from "@webrecorder/wabac/swlib";
import { type IpcRendererEvent } from "electron";

import { sep as pathSep } from "node:path";

import { ipcRenderer, contextBridge, webUtils } from "electron";

const FILE_SCHEME = "file://";
const CUSTOM_FILE_SCHEME = "file2://";

function rewriteLoadUrl(loadUrl: string) {
  if (pathSep !== "/") {
    // for windows, will replace such that C:\path\to\file becomes C//path/to/file
    loadUrl = loadUrl.replaceAll(pathSep, "/").replace(":", "/");
  }
  return CUSTOM_FILE_SCHEME + loadUrl;
}

contextBridge.exposeInMainWorld("electron", {
  IS_APP: true,
  getPaths(file: File) {
    const url = webUtils.getPathForFile(file);
    const sourceUrl = FILE_SCHEME + url;
    const loadUrl = rewriteLoadUrl(url);
    return { loadUrl, sourceUrl };
  },
  getFileLoadUrl(sourceUrl: string) {
    if (!sourceUrl.startsWith(FILE_SCHEME)) {
      return sourceUrl;
    }
    return rewriteLoadUrl(sourceUrl.slice(FILE_SCHEME.length));
  },
});

const dbs = {};

const loader = new CollectionLoader();

async function getColl(name: string) {
  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
  if (!dbs[name]) {
    // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
    dbs[name] = await loader.loadColl(name);
    // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
    await dbs[name].initing;
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
  // TODO: Fix this the next time the file is edited.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return dbs[name];
}

async function getDB(name: string) {
  const coll = await getColl(name);
  // TODO: Fix this the next time the file is edited.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return coll.store;
}

async function getResponse(
  event: IpcRendererEvent,
  request: Request,
  coll: string,
  ts: string,
  channel: string,
): Promise<void> {
  const db = await getDB(coll);

  const req = { request, url: request.url, timestamp: ts };

  const result = await db.getResource(req, "", { request });

  if (!result) {
    ipcRenderer.send(channel, 404);
    return;
  }

  // TODO: Fix this the next time the file is edited.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const headers = Object.fromEntries(result.headers.entries());

  const buffer = await result.getBuffer();

  ipcRenderer.send(channel, result.status, headers, buffer);
}

ipcRenderer.on("getresponse", getResponse);

export { getDB, getColl, loader };
