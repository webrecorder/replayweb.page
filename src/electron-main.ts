/*eslint-env node */

import { ElectronReplayApp } from "./electron-replay-app";
import path from "path";

// ============================================================================
const replayApp = new ElectronReplayApp({
  staticPath: path.join(__dirname, "../"),
  profileName: "replaywebpage",
});

// @ts-expect-error - TS2554 - Expected 0 arguments, but got 1.
replayApp.init(true);
