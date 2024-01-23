/*eslint-env node */

import { CollectionLoader } from "@webrecorder/wabac/src/loaders";

const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", { IS_APP: true });

const dbs = {};

const loader = new CollectionLoader();

async function getColl(name: string) {
  if (!dbs[name]) {
    dbs[name] = await loader.loadColl(name);
    await dbs[name].initing;
  }

  return dbs[name];
}

async function getDB(name: string) {
  const coll = await getColl(name);
  return coll.store;
}

async function getResponse(
  event: Electron.IpcRendererEvent,
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

  const headers = Object.fromEntries(result.headers.entries());

  const buffer = await result.getBuffer();

  ipcRenderer.send(channel, result.status, headers, buffer);
}

ipcRenderer.on("getresponse", getResponse);

export { getDB, getColl, loader };
