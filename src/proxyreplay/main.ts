import { addBanner } from "./banner";
import { addInit } from "./app";

if (
  navigator.serviceWorker.controller &&
  (document.currentScript as HTMLScriptElement).src.endsWith("banner=1")
) {
  addBanner();
} else {
  addInit();
}
