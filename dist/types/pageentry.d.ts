import { LitElement, type PropertyValues } from "lit";
import "keyword-mark-element/lib/keyword-mark.js";
import type { URLResource } from "./types";
declare class PageEntry extends LitElement {
    query: string;
    textSnippet: string | null;
    page: URLResource | null;
    replayPrefix: string;
    deleting: boolean;
    selected: boolean;
    editable: boolean;
    index: number;
    isCurrent: boolean;
    isSidebar: boolean;
    thumbnailValid: boolean;
    iconValid: boolean;
    static get styles(): import("lit").CSSResultGroup;
    static sidebarStyles(prefix?: import("lit").CSSResult): import("lit").CSSResult;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
    private renderPageIcon;
    private renderFavicon;
    updateSnippet(): void;
    onReplay(event: Event, reload?: boolean): boolean;
    onReload(event: Event): boolean;
    sendChangeEvent(data: any, reload: boolean): void;
    onSendDeletePage(): void;
    onSendSelToggle(event: any): void;
}
export { PageEntry };
//# sourceMappingURL=pageentry.d.ts.map