import { LitElement } from "lit";
import type { ItemType } from "./types";
import "./components/labeled-field";
declare class ItemInfo extends LitElement {
    item: ItemType | Record<string, never> | null;
    detailed: boolean;
    canDelete: boolean;
    static get styles(): import("lit").CSSResultGroup;
    static get compStyles(): import("lit").CSSResult;
    renderSource(showItemID?: boolean): import("lit-html").TemplateResult<1>;
    renderSummaryView(): import("lit-html").TemplateResult<1>;
    renderDetailed(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    onCopy(event: Event, text: string | undefined): boolean;
    onPurge(reload: any): void;
}
export { ItemInfo };
//# sourceMappingURL=item-info.d.ts.map