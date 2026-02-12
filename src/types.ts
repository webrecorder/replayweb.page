export type URLResource = {
  mime: string;
  status: string;
  date: Date;
  ts: string;
  url: string;
};

export type Page = {
  id: number;
  title: string;
  text?: string;
  url: string;
  mime: string;
  status: string;
  size: number;

  ts: number;
  timestamp: string;
  date: Date | null;

  favIconUrl?: string;
  waczhash?: string;
  seed?: boolean;
  isSeed?: boolean;
  desc?: string;
};

export type URLTsChange = {
  url?: string;
  ts?: string;
  waczhash?: string;
  currList?: number;
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
  downloadUrl?: string | null;
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
  curatedPages: (Page & { list: string })[];
  lists: Page[];
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
