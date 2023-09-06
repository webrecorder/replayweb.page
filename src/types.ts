export interface Coll {
  filename: string;
  sourceUrl: string;
  name?: string;
  title?: string;
  loadUrl?: string;
  desc?: string;
  description?: string;
  resources?: { path: string; name: string }[];
  verify?: any;
  onDemand?: any;
  coll?: any;
}
