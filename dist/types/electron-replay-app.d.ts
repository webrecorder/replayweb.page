/// <reference types="node" />
/// <reference types="node" />
import { BrowserWindow } from "electron";
import fs from "fs";
import { PassThrough } from "stream";
declare const STATIC_PREFIX = "http://localhost:5471/";
declare class ElectronReplayApp {
    pluginPath: string;
    appPath: string;
    projPath: string;
    staticContentPath: string;
    profileName: string;
    proxyColl: string | null;
    proxyTS: string | null;
    mainWindow: BrowserWindow | null;
    openNextFile: string | null;
    screenSize: {
        width: number;
        height: number;
    };
    origUA: string | null;
    constructor({ staticPath, profileName }?: {
        staticPath?: string | undefined;
        profileName?: string | undefined;
    });
    get mainWindowWebPreferences(): {
        plugins: boolean;
        preload: string;
        nativeWindowOpen: boolean;
        contextIsolation: boolean;
        enableRemoteModule: boolean;
        sandbox: boolean;
        nodeIntegration: boolean;
    };
    get mainWindowUrl(): string;
    init(): void;
    checkUpdates(): void;
    onAppReady(): void;
    doHandleFile(request: any, callback: any): Promise<void>;
    _bufferToStream(data: any): PassThrough;
    doIntercept(request: any, callback: (response: {
        statusCode: number;
        headers: Record<string, string>;
        data: fs.ReadStream;
    }) => void): Promise<void>;
    proxyLive(request: any, callback: any): Promise<void>;
    /**
     *
     * @param {string} url
     * @param {(props: {
     *    statusCode: number;
     *    headers: Record<string, string>;
     *    data: unknown;
     * }) => void} callback
     */
    notFound(url: any, callback: any): void;
    resolveArchiveResponse(request: any, callback: any): Promise<void>;
    parseRange(reqHeaders: any, headers: any, size: any): {
        statusCode: number;
        start?: undefined;
        end?: undefined;
    } | {
        statusCode: number;
        start: number;
        end: number;
    };
    createMainWindow(argv: any): BrowserWindow;
    getOpenUrl(argv: any): string;
}
export { ElectronReplayApp, STATIC_PREFIX };
//# sourceMappingURL=electron-replay-app.d.ts.map