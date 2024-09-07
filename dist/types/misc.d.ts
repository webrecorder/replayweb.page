import { LitElement, html, css, unsafeCSS, type CSSResultGroup } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import type { FavIconEventDetail } from "./types";
declare const apiPrefix = "./w/api";
declare const replayPrefix = "./w";
declare function wrapCss(custom: CSSResultGroup): CSSResultGroup;
declare const IS_APP: any;
declare const VERSION: string;
declare function clickOnSpacebarPress(event: any): void;
export declare function updateFaviconLinks(data: FavIconEventDetail): void;
declare class FaIcon extends LitElement {
    constructor();
    static get properties(): {
        svg: {
            type: StringConstructor;
        };
        size: {
            type: StringConstructor;
        };
        width: {
            type: StringConstructor;
        };
        height: {
            type: StringConstructor;
        };
    };
    static get styles(): import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare class WrModal extends LitElement {
    constructor();
    static get properties(): {
        title: {
            type: StringConstructor;
        };
        bgClass: {
            type: StringConstructor;
        };
        noBgClose: {
            type: BooleanConstructor;
        };
    };
    static get styles(): CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
    onClose(): void;
}
export { wrapCss, IS_APP, VERSION, clickOnSpacebarPress, FaIcon, WrModal, LitElement, html, css, unsafeCSS, unsafeSVG, apiPrefix, replayPrefix, };
//# sourceMappingURL=misc.d.ts.map