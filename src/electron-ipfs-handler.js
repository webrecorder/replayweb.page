import { protocol, session } from "electron";

import fetchToHandler from "fetch-to-electron-protocol-handler";
import makeIPFSFetch from "js-ipfs-fetch";
import * as IPFS from "ipfs-core";

export const PROTOCOL_PERMISSIONS = {
  standard: true,
  secure: true,
  allowServiceWorkers: true,
  supportFetchAPI: true,
  bypassCSP: false,
  corsEnabled: true,
  stream: true
};

export function registerPrivileges(privileges = PROTOCOL_PERMISSIONS) {
  protocol.registerSchemesAsPrivileged([
    {scheme: "ipfs", privileges},
    {scheme: "ipns", privileges},
    {scheme: "ipld", privileges}
  ]);
}

export function registerHandler(ipfsRepoPath) {
  const handler = createHandler(ipfsRepoPath);
  protocol.registerStreamProtocol("ipfs", handler);
  protocol.registerStreamProtocol("ipns", handler);
  protocol.registerStreamProtocol("ipld", handler);
}

export function createHandler (ipfsRepoPath) {
  const {handler} = fetchToHandler(async () => {
    const ipfs = await IPFS.create({
      repo: ipfsRepoPath
    });

    const fetch = await makeIPFSFetch({ ipfs });

    return fetch;
  }, session.defaultSession);

  return handler;
}
