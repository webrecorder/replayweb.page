"use strict";

// Inited as Web Worker
if (self.postMessage) {
  const { WorkerLoader } = require('wabac/src/loaders');
  const loader = new WorkerLoader(self);
  console.log('ww init');
} else {
// Service Worker Init
  const { SWReplay } = require('wabac/src/swmain.js');
  self.sw = new SWReplay();
  console.log('sw init');
}


