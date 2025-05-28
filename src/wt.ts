import WebTorrent, { type TorrentFile, type Torrent } from "webtorrent";

type RealTorrentFile = TorrentFile & {
  [Symbol.asyncIterator]: ({
    start,
    end,
  }: {
    start?: number;
    end?: number;
  }) => AsyncIterable<Uint8Array>;
  stream: () => ReadableStream;
};

//import crypto from "crypto";

//import { Readable } from "stream";

//const peerId = Buffer.from("-RWP240-" + crypto.randomBytes(9).toString('base64'));

self.global = self;

// @ts-expect-error
self.global.WEBTORRENT_ANNOUNCE = [
  "udp://tracker.leechers-paradise.org:6969",
  "udp://tracker.coppersurfer.tk:6969",
  "udp://tracker.opentrackr.org:1337",
  "udp://explodie.org:6969",
  "udp://tracker.empire-js.us:1337",
  "wss://tracker.btorrent.xyz",
  "wss://tracker.openwebtorrent.com",
  "wss://tracker.webtorrent.dev",
  "wss://tracker.sciop.net/announce",
];

//(self as any).WEBTORRENT_ANNOUNCE = require('create-torrent').announceList.map((arr: string[][]) => arr[0]);

class WebtorrentClient {
  client: WebTorrent.Instance;

  constructor() {
    this.client = new WebTorrent();
  }

  async initTorrent(url: string, getStream = false) {
    const torrent = await this.add(url);
    const wacz = this.getWACZ(torrent);
    if (!wacz) {
      throw new Error("no WACZ found in torrent");
    }
    const length = wacz.length;
    let stream = null;
    if (getStream) {
      stream = (wacz as RealTorrentFile).stream();
    }
    return { length, stream };
  }

  async add(magnet: string) {
    let torrent = (await this.client.get(magnet)) as Torrent | null;

    if (!torrent) {
      const p = new Promise<Torrent>((resolve) => {
        this.client.add(magnet, (torrent: Torrent) => {
          resolve(torrent);
        });
      });
      torrent = await p;

      // deselect all files and pieces
      torrent.files.forEach((file) => file.deselect());
      torrent.deselect(0, torrent.pieces.length - 1, 1000);
    } else if (!torrent.ready) {
      const p = new Promise<void>((resolve) => {
        torrent!.on("ready", () => resolve());
      });
      await p;
    }

    return torrent;
  }

  getWACZ(torrent: Torrent) {
    const waczs = torrent.files.filter((x) => x.name.endsWith(".wacz"));
    if (!waczs.length) {
      return null;
    }
    return waczs[0];
  }

  async getRange(
    url: string,
    offset: number,
    length: number,
  ): Promise<AsyncIterable<Uint8Array>> {
    const torrent = await this.add(url);
    const wacz = this.getWACZ(torrent);
    if (!wacz) {
      throw new Error("no WACZ found in torrent");
    }

    return (wacz as RealTorrentFile)[Symbol.asyncIterator]({
      start: offset,
      end: offset + length - 1,
    });
  }
}

let webtorrent: WebtorrentClient | null = null;
let messageChannel: MessageChannel | null = null;

type MessageRequest = {
  id: string;
  type: string;
  url: string;
  head: boolean;
  offset: number;
  length: number;
};

function registerMagnetHandler() {
  if (!navigator.serviceWorker.controller) {
    return;
  }

  if (!webtorrent) {
    webtorrent = new WebtorrentClient();
  }

  if (!messageChannel) {
    messageChannel = new MessageChannel();
  }

  const streams = new Map<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { reader: AsyncIterator<Uint8Array, any, any>; count: number }
  >();

  const port = messageChannel.port1;

  port.addEventListener("message", async (event) => {
    const { id, type, url, head, offset, length } =
      event.data as MessageRequest;

    if (type === "ping") {
      port.postMessage({ type: "pong" });
      return;
    }

    const urlFull = new URL(url);

    const magnet = "magnet:" + urlFull.search;

    if (!urlFull.search) {
      port.postMessage({ id, error: "invalid magnet link" });
      return;
    }

    if (type === "initial") {
      try {
        const { length, stream } = await webtorrent!.initTorrent(magnet, !head);
        port.postMessage({ id, length, stream });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        port.postMessage({ id, error: err.toString() });
      }
    } else if (type === "range") {
      try {
        let res = streams.get(id);
        if (!res) {
          const stream = await webtorrent!.getRange(magnet, offset, length);
          const iter = stream[Symbol.asyncIterator]();
          res = { reader: iter, count: 0 };
          streams.set(id, res);
        }
        const { reader } = res;
        const readerRes = await reader.next();
        let { done } = readerRes;
        const { value } = readerRes;
        if (value) {
          res.count += value.length;
          streams.set(id, res);
        }
        if (res.count >= length) {
          done = true;
        }
        if (done) {
          streams.delete(id);
        }
        port.postMessage({ id, value, done });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        port.postMessage({ id, error: err.toString() });
      }
    }
  });

  port.start();

  navigator.serviceWorker.controller.postMessage(
    { msg_type: "registerHandler", scheme: "magnet" },
    [messageChannel.port2],
  );

  console.log("Registered magnet:// handler!");
}

export function registerWT() {
  if (navigator.serviceWorker.controller) {
    registerMagnetHandler();
  }

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    console.log("controller change");
    registerMagnetHandler();
  });

  navigator.serviceWorker.addEventListener("message", (event: MessageEvent) => {
    if (event.data && event.data.type === "readdHandlers") {
      console.log("readd handlers");
      registerMagnetHandler();
    }
  });
}
