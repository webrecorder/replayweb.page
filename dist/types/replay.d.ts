import { LitElement, type PropertyValues } from "lit";
import type { ItemType } from "./types";
declare class Replay extends LitElement {
    collInfo: ItemType | Record<string, never> | null;
    sourceUrl: string | null;
    url: string;
    ts: string;
    replayUrl: string;
    replayTS: string;
    actualTS: string;
    title: string;
    iframeUrl: string | null;
    showAuth: boolean;
    replayNotFoundError: boolean;
    authFileHandle: any;
    private reauthWait;
    private _loadPoll;
    firstUpdated(): void;
    handleAuthMessage(event: any): Promise<void>;
    doSetIframeUrl(): void;
    updated(changedProperties: PropertyValues<this>): void;
    setDisablePointer(disable: boolean): void;
    onReplayMessage(event: MessageEvent): void;
    onReAuthed(event: any): void;
    waitForLoad(): void;
    clearLoading(iframeWin: any): void;
    setLoading(): void;
    refresh(): void;
    static get styles(): import("lit").CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
export { Replay };
//# sourceMappingURL=replay.d.ts.map