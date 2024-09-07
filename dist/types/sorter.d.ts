import { LitElement, type PropertyValues } from "lit";
declare class Sorter<T = unknown> extends LitElement {
    sortedData: T[];
    data: T[];
    id: string;
    pageResults: number;
    numResults: number;
    sortKey: string | null;
    sortDesc: boolean | null;
    sortKeys?: {
        key: string;
        name: string;
    }[];
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    sortData(): void;
    sendSortChanged(): void;
    getMore(more?: number): void;
    static get styles(): import("lit").CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
export { Sorter };
//# sourceMappingURL=sorter.d.ts.map