export interface Coll {
  filename: string;
  sourceUrl: string;
  replayPrefix: string;
  apiPrefix: string;
  coll?: string;
  name?: string;
  title?: string;
  loadUrl?: string;
  desc?: string;
  description?: string;
  resources?: { path: string; name: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO fixme
  verify?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO fixme
  onDemand?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO fixme
  pages?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO fixme
  lists?: any[];
}
