import { CollectionLoader } from "@webrecorder/wabac/swlib";
declare const loader: CollectionLoader;
declare function getColl(name: string): Promise<any>;
declare function getDB(name: string): Promise<any>;
export { getDB, getColl, loader };
//# sourceMappingURL=electron-preload.d.ts.map