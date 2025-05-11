// src/types/webtorrent-global.d.ts

export interface TorrentFile {
  name: string;
  getBlob: (cb: (err: any, blob: Blob) => void) => void;
}

export interface Torrent {
  files: TorrentFile[];
}

export interface WebTorrentInstance {
  add(torrentId: string, callback: (torrent: Torrent) => void): void;
}

declare global {
  interface Window {
    WebTorrent: new (...args: any[]) => WebTorrentInstance;
  }
}
