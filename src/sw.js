import INDEX_HTML from '../index.html';

import { SWReplay } from '@webrecorder/wabac/src/swmain';

const staticData = new Map();

const prefix = self.registration.scope;

staticData.set(prefix, {type: "text/html", content: INDEX_HTML});
staticData.set(prefix + "index.html", {type: "text/html", content: INDEX_HTML});
//staticData.set(prefix + "ui.js", {type: "application/javascript", content: UI_JS});

//const { SWReplay } = require('@webrecorder/wabac/src/swmain');
self.ipfsCustomPreload = true;
self.sw = new SWReplay(staticData);

