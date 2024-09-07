import { LitElement, type PropertyValues } from "lit";
declare class GDrive extends LitElement {
    state: string;
    sourceUrl: string;
    scriptLoaded: boolean;
    error: boolean;
    reauth?: boolean;
    constructor();
    static get properties(): {
        state: {
            type: StringConstructor;
        };
        sourceUrl: {
            type: StringConstructor;
        };
        error: {
            type: BooleanConstructor;
        };
        reauth: {
            type: BooleanConstructor;
        };
    };
    updated(changedProperties: PropertyValues<this>): void;
    tryPublicAccess(): Promise<boolean>;
    onLoad(): void;
    onClickAuth(): void;
    authed(response: any): Promise<void>;
    static get styles(): import("lit").CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
    script(): import("lit-html").TemplateResult<1> | HTMLScriptElement;
    gauth(prompt: any, callback: any): void;
}
export { GDrive };
//# sourceMappingURL=gdrive.d.ts.map