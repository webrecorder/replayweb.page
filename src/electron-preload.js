"use strict";

import { CollectionLoader } from 'wabac/src/loaders';

const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {'IS_APP': true});

const dbs = {};

const loader = new CollectionLoader();

async function getDB(name) {
  if (!dbs[name]) {
    dbs[name] = await loader.loadColl(name);
    console.log(dbs[name]);
  }

  return dbs[name].store;
}

async function getResponse(event, request, coll, ts, channel) {
  const db = await getDB(coll);
  await db.initing;

  const req = {request, url: request.url, timestamp: ts};

  const result = await db.getResource(req, "", {request});

  if (!result) {
    ipcRenderer.send(channel, 404);
    return;
  }

  const headers = Object.fromEntries(result.headers.entries());

  const buffer = await result.getBuffer();

  ipcRenderer.send(channel, result.status, headers, buffer);
}

ipcRenderer.on('getresponse', getResponse);




