/// <reference types="node" />
import { LitElement, type PropertyValues } from "lit";
import type { LoadInfo } from "./item";
declare class Loader extends LitElement {
    sourceUrl?: string;
    loadInfo: LoadInfo | null;
    state: string;
    progress: number;
    percent: number;
    currentSize: number;
    totalSize: number;
    error?: string;
    total: number;
    status?: string;
    coll: string;
    embed?: string;
    tryFileHandle: boolean;
    errorAllowRetry: boolean;
    extraMsg?: string;
    swName?: string;
    pingInterval: number | NodeJS.Timer;
    fileHandle: any;
    noWebWorker: boolean;
    worker?: Worker | null;
    _gdWait?: Promise<LoadInfo>;
    _gdResolve: (value: LoadInfo | PromiseLike<LoadInfo>) => void;
    firstUpdated(): void;
    initMessages(): void;
    doLoad(): Promise<void>;
    googledriveInit(): Promise<LoadInfo>;
    onLoadReady(event: CustomEvent): void;
    onCancel(): void;
    updated(changedProperties: PropertyValues<this>): void;
    static get styles(): import("lit").CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
    renderContent(): import("lit-html").TemplateResult<1>;
    onAskPermission(): Promise<void>;
}
export { Loader };
//# sourceMappingURL=loader.d.ts.map