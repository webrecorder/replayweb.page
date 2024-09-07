import { LitElement, type PropertyValues } from "lit";
import "keyword-mark-element/lib/keyword-mark.js";
import { type ItemType } from "./types";
import { type URLResource } from "./types";
/**
 * @prop {boolean | undefined} active
 */
declare class URLResources extends LitElement {
    collInfo: ItemType | Record<string, never> | null;
    isSidebar: boolean;
    currMime: string;
    query: string;
    urlSearchType: string;
    filteredResults: URLResource[];
    sortedResults: URLResource[];
    results: URLResource[];
    newQuery: null;
    tryMore: boolean;
    loading: boolean;
    sortKey: string;
    sortDesc: boolean;
    private _ival?;
    static get filters(): {
        name: string;
        filter: string;
    }[];
    static get sortKeys(): {
        key: string;
        name: string;
    }[];
    constructor();
    static get properties(): {
        collInfo: {
            type: ObjectConstructor;
        };
        isSidebar: {
            type: BooleanConstructor;
        };
        currMime: {
            type: StringConstructor;
        };
        query: {
            type: StringConstructor;
        };
        urlSearchType: {
            type: StringConstructor;
        };
        filteredResults: {
            type: ArrayConstructor;
        };
        sortedResults: {
            type: ArrayConstructor;
        };
        loading: {
            type: BooleanConstructor;
        };
        sortKey: {
            type: StringConstructor;
        };
        sortDesc: {
            type: BooleanConstructor;
        };
    };
    firstUpdated(): void;
    _timedUpdate(): void;
    updated(changedProperties: PropertyValues<this>): void;
    doLoadResources(isMore?: boolean): Promise<void>;
    onChangeTypeSearch(event: any): void;
    onChangeQuery(event: any): void;
    onClickUrlType(event: any): void;
    filter(): void;
    onScroll(event: any): void;
    static get styles(): import("lit").CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
    onSort(event: any): void;
    onSortChanged(event: any): void;
    onReplay(event: any): boolean;
}
export { URLResources };
//# sourceMappingURL=url-resources.d.ts.map