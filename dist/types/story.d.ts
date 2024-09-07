import { LitElement, type PropertyValues } from "lit";
import { type ItemType } from "./types";
declare class Story extends LitElement {
    collInfo: ItemType | Record<string, never> | null;
    curatedPageMap: Record<string, unknown[]>;
    currList: number;
    active: boolean;
    isSidebar: boolean;
    splitDirection: boolean | "vertical" | "horizontal";
    lastST: number;
    clickTime: number;
    private obs;
    private splitter;
    recalcSplitter(width: number): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    configureSplitter(): void;
    doLoadCurated(): Promise<void>;
    static get styles(): import("lit").CSSResultGroup;
    static sidebarStyles(prefix?: import("lit").CSSResult): import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    renderLists(): import("lit-html").TemplateResult<1>;
    renderCPage(p: any): import("lit-html").TemplateResult<1>;
    onReplay(event: Event): boolean;
    sendChangeEvent(data: any): void;
    onClickScroll(event: any): boolean;
    scrollToList(): void;
    onScroll(event: Event): void;
}
export { Story };
//# sourceMappingURL=story.d.ts.map