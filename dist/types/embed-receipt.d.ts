import { LitElement } from "lit";
import type { ItemType } from "./types";
export declare class RWPEmbedReceipt extends LitElement {
    collInfo: ItemType | null | Record<string, never>;
    ts: string | null;
    url: string | null;
    active: boolean;
    get renderRoot(): this;
    static get embedStyles(): import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    onEmbedDrop(event: any): void;
}
//# sourceMappingURL=embed-receipt.d.ts.map