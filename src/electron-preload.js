/*eslint-env node */

import { CollectionLoader } from "@webrecorder/wabac/src/loaders";

const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", { IS_APP: true });

const dbs = {};

const loader = new CollectionLoader();

async function getColl(name) {
  if (!dbs[name]) {
    dbs[name] = await loader.loadColl(name);
    await dbs[name].initing;
  }

  return dbs[name];
}

async function getDB(name) {
  const coll = await getColl(name);
  return coll.store;
}

async function getResponse(event, request, coll, ts, channel) {
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
