import { protocol, session } from "electron";

import fetchToHandler from "fetch-to-electron-protocol-handler";
import makeIPFSFetch from "js-ipfs-fetch";
import { create as createIPFSClient } from "ipfs-http-client";

import { execFile } from "child_process";



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

export async function registerHandler(ipfsRepoPath, ipfsBinPath) {
  const handler = await createHandler(ipfsRepoPath, ipfsBinPath);
  protocol.registerStreamProtocol("ipfs", handler);
  protocol.registerStreamProtocol("ipns", handler);
  protocol.registerStreamProtocol("ipld", handler);
}

export function createHandler (ipfsRepoPath, ipfsBinPath) {
  const {handler} = fetchToHandler(async () => {

    await launchIPFS(ipfsRepoPath, ipfsBinPath);

    const ipfs = await createIPFSClient(new URL("http://localhost:5033"));

    const fetch = await makeIPFSFetch({ ipfs });

    return fetch;

  }, session.defaultSession);

  return handler;
}

async function launchIPFS(ipfsRepoPath, ipfsBinPath) {
  console.log(`Launching IPFS: ${ipfsBinPath} ${ipfsRepoPath}`);

  execFile(ipfsBinPath, ["daemon", "--init", "--api", "/ip4/127.0.0.1/tcp/5033", "--repo-dir", ipfsRepoPath], {silent: false}, (error, stdout, stderr) => {
    console.log("launch error");
    if (error) {
      throw error;
    }
  });

  while (true) {
    try {
      const resp = await fetch("http://localhost:5033/api/v0/version", {method: "POST"});
      console.log(await resp.text());
      break;
    } catch (e) {
      console.log("Error connecting to IPFS, retrying...");
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }
}
