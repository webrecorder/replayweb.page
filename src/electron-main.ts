/*eslint-env node */

import { ElectronReplayApp } from "./electron-replay-app";
import path from "path";

// ============================================================================
const replayApp = new ElectronReplayApp({
  staticPath: path.join(__dirname, "../"),
  profileName: "replaywebpage",
});

replayApp.init(true);
