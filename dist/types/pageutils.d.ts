import type { URLResource } from "./types";
declare function digestMessage(message: string, hashtype: AlgorithmIdentifier): Promise<string>;
declare function tsToDate(ts: string | null | undefined): "" | Date;
declare function getDateFromTS(ts: string | number): string;
declare function getPageDateTS(page: URLResource): {
    date: Date | null;
    timestamp: string;
};
declare function getTS(iso: string): string;
declare function getReplayLink(view: string, url: string, ts: string): string;
declare function sourceToId(url: string): Promise<{
    url: string;
    item: string;
}>;
declare function parseURLSchemeHostPath(url: string): {
    scheme: string;
    host: string;
    path: string;
};
export { digestMessage, tsToDate, getTS, getPageDateTS, getDateFromTS, getReplayLink, sourceToId, parseURLSchemeHostPath, };
//# sourceMappingURL=pageutils.d.ts.map