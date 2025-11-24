import type { URLResource } from "./types";

// ===========================================================================
async function digestMessage(message: string, hashtype: AlgorithmIdentifier) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest(hashtype, msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

// ===========================================================================
function tsToDate(ts: string | null | undefined) {
  if (!ts) {
    return "";
  }

  if (ts.length < 14) {
    ts += "00000101000000".substr(ts.length);
  }

  const datestr =
    ts.substring(0, 4) +
    "-" +
    ts.substring(4, 6) +
    "-" +
    ts.substring(6, 8) +
    "T" +
    ts.substring(8, 10) +
    ":" +
    ts.substring(10, 12) +
    ":" +
    ts.substring(12, 14) +
    "-00:00";

  return new Date(datestr);
}

// ===========================================================================
function getDateFromTS(ts: string | number) {
  let date: Date | null = null;
  date = new Date(ts);
  const timestamp =
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    date && date instanceof Date ? getTS(date.toISOString()) : "";
  return timestamp;
}

// ===========================================================================
function getPageDateTS(page: URLResource) {
  let date: Date | null = null;
  try {
    date = new Date(page.ts || page.date);
  } catch (e) {
    // leave date unchanged in case of error
  }

  const timestamp =
    date && date instanceof Date ? getTS(date.toISOString()) : "";
  return { date, timestamp };
}

// ===========================================================================
function getTS(iso: string) {
  return iso.replace(/[-:T]/g, "").slice(0, 14);
}

// ===========================================================================
function getReplayLink(
  view: string,
  url: string,
  ts: string,
  waczhash?: string,
) {
  const params = new URLSearchParams();
  params.set("view", view);
  params.set("url", url);
  params.set("ts", ts);
  if (waczhash) {
    params.set("waczhash", waczhash);
  }
  return "#" + params.toString();
}

// ===========================================================================
function getDownloadLink(
  replayPrefix: string,
  url: string,
  ts: string,
  waczhash?: string,
) {
  return `${replayPrefix}/${waczhash ? `:${waczhash}/` : ""}${
    ts || ""
  }dl_/${url}`;
}

// ===========================================================================
async function sourceToId(url: string) {
  try {
    new URL(url);
  } catch (e) {
    // if source is not a valid url, resolve as relative filename to current URL
    url = new URL(url, document.baseURI).href;
  }

  const digest = await digestMessage(url, "SHA-256");
  const item = "id-" + digest.slice(0, 12);
  return { url, item };
}

// ===========================================================================
// simple parse of scheme, host, rest of path
// not using URL due to different browser behavior
function parseURLSchemeHostPath(url: string) {
  let inx = url.indexOf(":");
  let hostInx = 0;
  let scheme = "";
  let host = "";
  let path = "";

  if (inx >= 0) {
    scheme = url.slice(0, inx);
    url = url.slice(inx + 1);
    inx += 1;
  }
  if (url.startsWith("//")) {
    inx += 2;
  }

  hostInx = url.indexOf("/", inx);
  if (hostInx > 0) {
    host = url.slice(inx, hostInx);
    path = url.slice(hostInx);
  } else {
    host = url.slice(inx);
    path = "";
  }

  return { scheme, host, path };
}

export {
  digestMessage,
  tsToDate,
  getTS,
  getPageDateTS,
  getDateFromTS,
  getReplayLink,
  getDownloadLink,
  sourceToId,
  parseURLSchemeHostPath,
};
