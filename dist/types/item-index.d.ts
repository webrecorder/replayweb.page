import { LitElement, type PropertyValues } from "lit";
import type { ItemType } from "./types";
import "./item-info";
declare class ItemIndex extends LitElement {
    items: ItemType[];
    query: string;
    filteredItems: ItemType[];
    sortedItems: ItemType[];
    hideHeader: boolean;
    dateName: string;
    headerName: string;
    protected _deleting: any;
    private get typeFilter();
    private get indexParams();
    constructor();
    get sortKeys(): {
        key: string;
        name: string;
    }[];
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    filter(): void;
    loadItems(): Promise<void>;
    onDeleteItem(event: any): Promise<false | undefined>;
    static get styles(): import("lit").CSSResultGroup;
    static get compStyles(): import("lit").CSSResult;
    renderHeader(): import("lit-html").TemplateResult<1>;
    renderSearchHeader(): string;
    render(): import("lit-html").TemplateResult<1>;
    renderItemInfo(item: ItemType): import("lit-html").TemplateResult<1>;
    renderEmpty(): import("lit-html").TemplateResult<1>;
}
export { ItemIndex };
//# sourceMappingURL=item-index.d.ts.map