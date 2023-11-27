export interface Item {
  filename: string;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO fixme
  pages?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO fixme
  lists?: any[];
  ctime?: string;
  totalSize?: unknown;
  size?: number | string;
}
