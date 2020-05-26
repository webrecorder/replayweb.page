"use strict";

import INDEX_HTML from '../index.html';

if (self.registration) {
  const staticData = new Map();

  const prefix = self.registration.scope;

  staticData.set(prefix, {type: "text/html", content: INDEX_HTML});
  staticData.set(prefix + "index.html", {type: "text/html", content: INDEX_HTML});
  //staticData.set(prefix + "ui.js", {type: "application/javascript", content: UI_JS});

  const { SWReplay } = require('wabac/src/swmain');
  self.sw = new SWReplay(staticData);

} else if (self.postMessage) {
// Inited as Web Worker
  const { WorkerLoader } = require('wabac/src/loaders');
  const loader = new WorkerLoader(self);
}