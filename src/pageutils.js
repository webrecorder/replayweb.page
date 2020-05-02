
async function digestMessage(message, hashtype) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest(hashtype, msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

function waitForReady() {
  return new Promise((resolve) => {
    window.addEventListener("load", () => {
      resolve();
    });

    if (document.readyState === 'complete') {
      resolve();
    }
  });
}

function initSW(relUrl = 'sw.js?replayPrefix=wabac&stats=true', path) {
  const loc = window.location;

  console.log(`Register SW: ${relUrl}`);

  if (!navigator.serviceWorker) {
    let msg = null;

    if (loc.protocol === "http:") {
      msg = 'Service workers only supported when loading via https://, but this site loaded from: ' + loc.origin;
    } else {
      msg = 'Sorry, Service workers are not supported in this browser'
    }
    return Promise.reject(msg);
  }

  // Register SW in current path scope (if not '/' use curr directory)
  if (!path) {
    path = loc.origin + loc.pathname;
  } else {
    path = new URL(path, window.location.href).href;
  }

  if (!path.endsWith("/")) {
    path = path.slice(0, path.lastIndexOf("/") + 1);
  }

  let url = new URL(relUrl, path);

  if (navigator.serviceWorker.controller && navigator.serviceWorker.controller.scriptURL === url) {
    return Promise.resolve(false);
  }

  let done = false;
  let resolve, reject;

  const pr = new Promise((res, rej) => {
    resolve = (e) => { done = true; res(e); };
    reject = (e) => { done = true; rej(e); };
  });

  window.fetch(url, { "mode": "cors" }).then(resp => {
    if (!resp.url.startsWith(path)) {
      reject("Service Worker in wrong scope!")
    }
    return resp.url;
  }).then((swUrl) => {
    navigator.serviceWorker.addEventListener('error', e => reject(null));

    setTimeout(() => {
      if (!done) {
        reject('Service Worker is not available'); 
      }
    }, 30000);

    return navigator.serviceWorker.register(swUrl, { scope: path });
  }).then((registration) => {
    console.log('Service worker registration succeeded:', registration);
    if (navigator.serviceWorker.controller) {
      resolve(true);
    }
    navigator.serviceWorker.addEventListener('controllerchange', e => resolve(true));
  }).catch((error) => {
    console.log('Service worker registration failed:', error);
    reject(error);
  });

  return pr;
}

function tsToDate(ts) {
  if (!ts) {
    return "";
  }

  if (ts.length < 14) {
    ts += "00000000000000".substr(ts.length);
  }

  const datestr = (ts.substring(0, 4) + "-" +
    ts.substring(4, 6) + "-" +
    ts.substring(6, 8) + "T" +
    ts.substring(8, 10) + ":" +
    ts.substring(10, 12) + ":" +
    ts.substring(12, 14) + "-00:00");

  return new Date(datestr);
};

function getTS(iso) {
  return iso.replace(/[-:T]/g, '').slice(0, 14);
}




export { initSW, waitForReady, digestMessage, tsToDate, getTS };
