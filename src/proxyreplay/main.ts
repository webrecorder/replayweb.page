import { GovArchiveBanner } from "./banner";
import { addInit } from "./app";

if (
  //disable for testing
  //navigator.serviceWorker.controller &&
  (document.currentScript as HTMLScriptElement).src.endsWith("banner=1")
) {
  GovArchiveBanner.addBanner("gov-archive-banner", GovArchiveBanner);
} else {
  addInit();
}
