export interface Coll {
  coll: string;
  filename: string;
  sourceUrl: string;
  replayPrefix: string;
  apiPrefix: string;
  name?: string;
  title?: string;
  loadUrl?: string;
  desc?: string;
  description?: string;
  resources?: { path: string; name: string }[];
  verify?: any;
  onDemand?: any;
  pages?: any[];
}
