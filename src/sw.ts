import INDEX_HTML from "../index.html";

// @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7016 - Could not find a declaration file for module '@webrecorder/wabac/src/swmain'. 'node_modules/@webrecorder/wabac/src/swmain.js' implicitly has an 'any' type.
import { SWReplay } from "@webrecorder/wabac/src/swmain";

// @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7016 - Could not find a declaration file for module '@webrecorder/wabac/src/loaders'. 'node_modules/@webrecorder/wabac/src/loaders.js' implicitly has an 'any' type.
import { WorkerLoader } from "@webrecorder/wabac/src/loaders";

type Self = Window &
  typeof globalThis & {
    registration: { scope: string };
    sw: SWReplay;
  };

// TODO: Fix this the next time the file is edited.
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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
