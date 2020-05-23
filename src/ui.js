import { App } from './appmain';
import { CollIndex } from './coll-index';
import { Coll } from './coll';
import { CuratedList } from './curated-lists';
import { GDrive } from './gdrive';
import { Loader } from './loader';
import { Pages } from './pages';
import { Replay } from './replay';
import { URLResources } from './url-resources';

import { register } from 'register-service-worker';


// ===========================================================================
// ===========================================================================

async function main(url) {
  let resolve, reject; 
  const p = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  
  register(url, {
    registrationOptions: { scope: './' },
    ready (registration) {
      console.log('Service worker is active.');
      resolve();
    },
    error (error) {
      console.error('Error during service worker registration:', error);
      reject();
    }
  });

  await p;
}

main(__SW_PATH__);
