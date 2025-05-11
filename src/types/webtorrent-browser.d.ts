declare module "webtorrent" {
  import type { TorrentOptions, Torrent, TorrentFile } from "webtorrent/types";

  export default class WebTorrent {
    constructor(options?: any);

    add(
      torrentId: string,
      options: TorrentOptions | undefined,
      cb: (torrent: Torrent) => void,
    ): Torrent;

    add(torrentId: string, cb: (torrent: Torrent) => void): Torrent;

    seed(
      input: File | File[] | Blob | Blob[] | string | Buffer,
      cb?: (torrent: Torrent) => void,
    ): Torrent;

    destroy(cb?: () => void): void;
  }
}
