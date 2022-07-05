import { register } from "register-service-worker";

let appName = "ReplayWeb.page";

// ===========================================================================
function setAppName(newAppName) {
  appName = newAppName;
}

// ===========================================================================
function registerSW(name = "sw.js", scope = "./") {
  let resolve, reject;
  
  const p = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  const errMsg = getSWErrorMsg();

  if (errMsg) {
    console.error(errMsg);
    reject(errMsg);
  }
  
  register(scope + name, {
    registrationOptions: { scope },
    registered () {
      console.log("Service worker is registered");
      resolve();
    },

    error (error) {
      console.error("Error during service worker registration:", error);
      reject(`${appName} could not be loaded due to the following error:\n${error.toString()}`);
    }
  });

  return p;
}

function getSWErrorMsg() {
  if (navigator.serviceWorker) {
    return null;
  }
  if (window.location.protocol === "http:") {
    return `\
Sorry, the ${appName} system must be loaded from an HTTPS URL, but was loaded from: ${window.location.host}.
Please try loading this page from an HTTPS URL`;
  } else {
    return `Sorry, ${appName} won't work in this browser as Service Workers are not supported.
Please try a different browser.
(Service Workers are disabled in Firefox in Private Mode. If Using Private Mode in Firefox, try regular mode)`;
  }
}

// ===========================================================================
async function digestMessage(message, hashtype) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest(hashtype, msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join(""); // convert bytes to hex string
  return hashHex;
}


// ===========================================================================
function tsToDate(ts) {
  if (!ts) {
    return "";
  }

  if (ts.length < 14) {
    ts += "00000101000000".substr(ts.length);
  }

  const datestr = (ts.substring(0, 4) + "-" +
    ts.substring(4, 6) + "-" +
    ts.substring(6, 8) + "T" +
    ts.substring(8, 10) + ":" +
    ts.substring(10, 12) + ":" +
    ts.substring(12, 14) + "-00:00");

  return new Date(datestr);
}

// ===========================================================================
function getPageDateTS(page) {
  let date = null;
  try {
    date = new Date(page.ts || page.date);
  } catch (e) { 
    // leave date unchanged in case of error
  }

  const timestamp = (date && !isNaN(date)) ? getTS(date.toISOString()) : "";
  return {date, timestamp};
}


// ===========================================================================
function getTS(iso) {
  return iso.replace(/[-:T]/g, "").slice(0, 14);
}


// ===========================================================================
function getReplayLink(view, url, ts) {
  const params = new URLSearchParams();
  params.set("view", view);
  params.set("url", url);
  params.set("ts", ts);
  return "#" + params.toString();
}


// ===========================================================================
async function sourceToId(url) {
  const digest = await digestMessage(url, "SHA-256");
  const coll = "id-" + digest.slice(0, 12);
  return {url, coll};
}


// ===========================================================================
// simple parse of scheme, host, rest of path
// not using URL due to different browser behavior
function parseURLSchemeHostPath(url) {
  let inx = url.indexOf("://");
  let hostInx = 0;
  let scheme = "";
  let host = "";
  let path = "";

  if (inx >= 0) {
    scheme = url.slice(0, inx);
    inx += 3;
  } else {
    inx++;
    if (url.startsWith("//")) {
      inx += 2;
    }
  }

  hostInx = url.indexOf("/", inx);
  if (hostInx > 0) {
    host = url.slice(inx, hostInx);
    path = url.slice(hostInx);
  } else {
    host = url.slice(inx);
    path = "";
  }

  return {scheme, host, path};
}


export { digestMessage, tsToDate, getTS, getPageDateTS, getReplayLink, sourceToId, parseURLSchemeHostPath,
  registerSW, getSWErrorMsg, setAppName };
