import INDEX_HTML from "../index.html";

import { SWReplay } from "@webrecorder/wabac/src/swmain";

import { WorkerLoader } from "@webrecorder/wabac/src/loaders";

type Self = Window &
  typeof globalThis & {
    registration: { scope: string };
    sw: SWReplay;
  };

if ((self as Self).registration) {
  const staticData = new Map();

  const prefix = (self as Self).registration.scope;

  staticData.set(prefix, { type: "text/html", content: INDEX_HTML });
  staticData.set(prefix + "index.html", {
    type: "text/html",
    content: INDEX_HTML,
  });

  const sp = new URLSearchParams(self.location.search);

  const defaultConfig: { injectScripts?: string[] } = {};

  if (sp.get("ruffle") == "1") {
    defaultConfig.injectScripts = ["ruffle/ruffle.js"];
  }

  (self as Self).sw = new SWReplay({ staticData, defaultConfig });
} else {
  new WorkerLoader(self);
}
