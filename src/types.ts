export type URLResource = {
  id: number;
  title: string;
  url: string;
  mime: string;
  status: string;
  date: Date;
  ts: string;
  desc?: string;
  timestamp?: string;
  size: number;
  favIconUrl: string;
  text?: string;
  waczhash?: string;
};

export type Page = URLResource & {
  isSeed?: boolean;
};

export type ItemType = {
  filename?: string;
  sourceUrl: string;
  replayPrefix: string;
  apiPrefix: string;

  /**
   * Archived Item ID
   */
  coll?: string;
  // TODO(emma) is `id` the same as `coll`? should they be merged?
  id?: string;
  name?: string;
  title?: string;
  loadUrl?: string;
  desc?: string;
  description?: string;
  resources?: { path: string; name: string }[];
  verify?: {
    numValid?: number;
    numInvalid?: number;
    domain?: string;
    certFingerprint?: string;
    datapackageHash?: string;
    publicKey?: string;
    software?: string;
  };
  onDemand?: boolean;
  pages: Page[];
  curatedPages: (URLResource & { list: string })[];
  lists: URLResource[];
  ctime?: string;
  totalSize?: unknown;
  size?: number | string;
  canQueryPages?: boolean;
};

export type FavIconEventDetail = {
  icons: {
    rel: string;
    href: string;
  }[];
};
