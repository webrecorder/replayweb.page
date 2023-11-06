export interface Item {
  filename: string;
  sourceUrl: string;
  replayPrefix: string;
  apiPrefix: string;

  /**
   * Archived Item ID
   */
  coll?: string;
  name?: string;
  title?: string;
  loadUrl?: string;
  desc?: string;
  description?: string;
  resources?: { path: string; name: string }[];
  verify?: any;
  onDemand?: any;
  pages?: any[];
  lists?: any[];
  ctime?: string;
  totalSize?: unknown;
  size?: unknown;
}
