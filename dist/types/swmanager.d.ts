export declare class SWManager {
    name: string;
    scope: string;
    appName: string;
    requireSubdomainIframe: boolean;
    errorMsg: string | null;
    constructor({ name, scope, appName, requireSubdomainIframe, }?: {
        name?: string | undefined;
        scope?: string | undefined;
        appName?: string | undefined;
        requireSubdomainIframe?: boolean | undefined;
    });
    setAppName(newAppName: string): void;
    register(): Promise<void>;
    getCrossOriginIframeMsg(): string | null;
    isCrossOriginIframe(): boolean;
    getSWErrorMsg(): string | null;
    renderErrorReport(override?: string): import("lit-html").TemplateResult<1> | "";
}
//# sourceMappingURL=swmanager.d.ts.map