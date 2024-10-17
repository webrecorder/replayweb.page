import {
  LitElement,
  html,
  css,
  type TemplateResult,
  type PropertyValues,
} from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { wrapCss, updateFaviconLinks } from "./misc";
import { SWManager } from "./swmanager";
import { property } from "lit/decorators.js";
import type { FavIconEventDetail } from "./types";
import type { EmbedReplayData, EmbedReplayEvent } from "./item";

type IframeMessage = MessageEvent<
  | EmbedReplayEvent
  | ({
      type: "favicons";
    } & FavIconEventDetail)
  | { loading: boolean; type: "page-loading" }
>;

const scriptSrc =
  document.currentScript && (document.currentScript as HTMLScriptElement).src;

let defaultReplayFile = "";

const DEFAULT_REPLAY_BASE = "https://replayweb.page/";

const DEFAULT_ADBLOCK_FILE = "./adblock/adblock.gz";

// ===========================================================================
class Embed extends LitElement {
  @property({ type: String }) url = "";
  @property({ type: String }) ts = "";
  @property({ type: String }) query = "";

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7008 - Member 'source' implicitly has an 'any' type.
  @property({ type: String }) source;
  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7008 - Member 'src' implicitly has an 'any' type.
  @property({ type: String }) src;

  @property({ type: String }) view = "replay";
  @property({ type: String }) embed: string | null = null;

  @property({ type: String }) replaybase = "./replay/";
  @property({ type: String }) swName = __SW_NAME__;

  @property({ type: String }) title!: string;

  @property({ type: String }) coll = "";
  @property({ type: String }) config = "";

  @property({ type: Boolean }) inited = false;

  @property({ type: String }) paramString: string | null = null;
  @property({ type: String }) hashString: string | undefined;

  @property({ type: Boolean }) deepLink = false;
  @property({ type: Boolean }) updateFavicons = false;
  @property({ type: Boolean }) sandbox = false;
  @property({ type: Boolean }) noSandbox: boolean | null = null;
  @property({ type: Boolean }) noWebWorker = false;
  @property({ type: Boolean }) noCache = false;
  @property({ type: Boolean }) hideOffscreen: boolean | undefined;

  @property({ type: Boolean }) useAdblock = false;
  @property({ type: String }) adblockRulesUrl = DEFAULT_ADBLOCK_FILE;

  @property({ type: String }) newWindowBase = "";

  @property({ type: String }) errorMessage:
    | TemplateResult<1>
    | string
    | undefined;

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7008 - Member 'requireSubdomainIframe' implicitly has an 'any' type.
  @property({ type: Boolean }) requireSubdomainIframe;

  @property({ type: String }) loading = "";

  @property({ type: Boolean }) useRuffle = false;

  replayfile = defaultReplayFile;
  mainElementName = "replay-app-main";
  appName = "ReplayWeb.page";
  customConfig: Record<string, string | boolean> | null = null;
  reloadCount = 0;

  isCrossOrigin: boolean | undefined;
  swmanager: SWManager | undefined;

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'replayfile' implicitly has an 'any' type.
  static setDefaultReplayFile(replayfile) {
    defaultReplayFile = replayfile;
  }

  async doRegister() {
    const replaybaseURL = new URL(this.replaybase, window.location.href);

    this.isCrossOrigin = replaybaseURL.origin !== window.location.origin;

    if (this.isCrossOrigin) {
      this.inited = true;
      return;
    }

    const name = this.swName + "?serveIndex=1";
    const appName = this.appName;
    const scope = this.replaybase;
    const requireSubdomainIframe = this.requireSubdomainIframe;

    this.swmanager = new SWManager({
      name,
      scope,
      requireSubdomainIframe,
      appName,
    });

    try {
      await this.swmanager.register();
      this.inited = true;
    } catch (e) {
      this.errorMessage = this.swmanager.renderErrorReport();
    }
  }

  handleMessage(event: IframeMessage) {
    const iframe = this.renderRoot.querySelector("iframe");

    if (iframe && event.source === iframe.contentWindow) {
      switch (event.data.type) {
        case "urlchange":
          if (this.deepLink) {
            this.handleUrlChangeMessage(event.data);
          }
          this.dispatchEvent(
            new CustomEvent<EmbedReplayEvent>("rwp-url-change", {
              detail: event.data,
            }),
          );
          break;

        case "page-loading":
          this.dispatchEvent(
            new CustomEvent<{ loading: boolean }>("rwp-page-loading", {
              detail: event.data,
            }),
          );
          break;

        case "favicons":
          if (this.updateFavicons) {
            updateFaviconLinks(event.data);
          }
          break;
      }
    }
  }

  handleUrlChangeMessage(data: EmbedReplayData) {
    const { url, ts, view, query, title } = data;

    if (title) {
      this.title = title;
    }

    const params: Record<string, string> = {};

    if (url) {
      params.url = url;
    }
    if (ts) {
      params.ts = ts;
    }
    if (query) {
      params.query = query;
    }
    if (view && !url) {
      params.view = view;
    }

    const currHash = new URLSearchParams(params);

    const fullUrl = new URL(window.location.href);
    fullUrl.hash = "#" + currHash.toString();
    window.history.replaceState({}, "", fullUrl);
  }

  firstUpdated() {
    if (this.noSandbox) {
      console.warn(
        "The noSandbox flag is deprecated. ReplayWeb.page does not add a sandbox by default. To enable sandboxing, use 'sandbox' flag instead. This may result in PDFs not loading and pages opening in new windows, but may be more secure in some situations",
      );
    }
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.doRegister();

    window.addEventListener("message", (event: IframeMessage) =>
      this.handleMessage(event),
    );

    if (this.deepLink) {
      this.updateFromHash();
      window.addEventListener("hashchange", () => this.updateFromHash());
    }

    this.loadBrowserDefaults();
  }

  loadBrowserDefaults() {
    // set defaults for older browsers (eg. Safari < 16) based on recommendations from:
    // https://lil.law.harvard.edu/blog/2022/09/15/opportunities-and-challenges-of-client-side-playback/

    // likely safari < 16, don't use web workers due to issues with split storage state
    if (
      // @ts-expect-error - TS2339 - Property 'GestureEvent' does not exist on type 'Window & typeof globalThis'.
      window.GestureEvent !== undefined &&
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      window.SharedWorker === undefined
    ) {
      this.noWebWorker = true;
    }

    // if no storage manager or estimate, don't cache
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!navigator.storage?.estimate) {
      this.noCache = true;
    }
  }

  updateFromHash() {
    const qs = new URLSearchParams(window.location.hash.slice(1));

    if (qs.has("url")) {
      // @ts-expect-error - TS2339 - Property 'url' does not exist on type 'Embed'.
      this.url = qs.get("url");
    }
    if (qs.has("ts")) {
      // @ts-expect-error - TS2339 - Property 'ts' does not exist on type 'Embed'.
      this.ts = qs.get("ts");
    }
    if (qs.has("query")) {
      // @ts-expect-error - TS2339 - Property 'query' does not exist on type 'Embed'.
      this.query = qs.get("query");
    }
    if (qs.has("view")) {
      // @ts-expect-error - TS2339 - Property 'view' does not exist on type 'Embed'.
      this.view = qs.get("view");
    }
  }

  mergeConfigs() {
    if (!this.customConfig) {
      return this.config;
    }

    if (this.config) {
      const config = { ...this.customConfig, ...JSON.parse(this.config) };
      return JSON.stringify(config);
    } else {
      return JSON.stringify(this.customConfig);
    }
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      changedProperties.has("url") ||
      changedProperties.has("ts") ||
      changedProperties.has("query") ||
      changedProperties.has("view") ||
      changedProperties.has("source") ||
      changedProperties.has("src")
    ) {
      this.embed = this.embed || "default";

      if (this.src) {
        this.source = this.src;
      }

      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const source = new URL(this.source, document.baseURI);

      const config = this.mergeConfigs();

      const params: {
        source: URL;
        customColl: string;
        config: string;
        basePageUrl: string;
        baseUrlSourcePrefix: string;
        embed: string;
        noWebWorker?: "1";
        noCache?: "1";
        hideOffscreen?: "1";
        loading?: "eager";
        swName?: string;
        ruffle?: "1";
        adblockUrl?: string;
      } = {
        source,
        customColl: this.coll,
        config,
        basePageUrl: window.location.href.split("#")[0],
        baseUrlSourcePrefix: this.newWindowBase,
        embed: this.embed,
      };

      if (!this.deepLink && !params.baseUrlSourcePrefix) {
        params.baseUrlSourcePrefix = DEFAULT_REPLAY_BASE;
      }

      if (this.noWebWorker) {
        params.noWebWorker = "1";
      }

      if (this.noCache) {
        params.noCache = "1";
      }

      if (this.hideOffscreen) {
        params.hideOffscreen = "1";
      }

      if (this.loading === "eager") {
        params.loading = "eager";
      }

      if (this.swName !== __SW_NAME__) {
        params.swName = this.swName;
      }

      if (this.useRuffle) {
        params.ruffle = "1";
      }

      if (this.useAdblock && this.adblockRulesUrl) {
        params.adblockUrl = this.adblockRulesUrl;
      }

      this.paramString = new URLSearchParams(
        // Converting to unknown here so that we can ignore the URL -> string conversion necessary for the types to work out
        params as unknown as Record<string, string>,
      ).toString();

      const hashParams: Record<string, string> = {
        url: this.url,
        ts: this.ts,
        query: this.query,
      };

      if (!this.url) {
        hashParams.view = this.view;
      }

      this.hashString = new URLSearchParams(hashParams).toString();
    }
  }

  static get styles() {
    return wrapCss(css`
      .logo {
        margin: 1em;
        flex-grow: 1;
      }
      .error {
        white-space: pre-wrap;
        text-align: center;
      }
      .full-width {
        width: 100%;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: 0px;
        padding: 0px;
        margin: 0px;
      }
      :host {
        width: 100%;
        height: 100%;
        display: block;
      }
    `);
  }

  render() {
    return html`
      ${this.paramString && this.hashString && this.inited
        ? html`
            <iframe
              sandbox="${ifDefined(
                this.sandbox
                  ? "allow-downloads allow-modals allow-orientation-lock allow-pointer-lock\
         allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts\
         allow-same-origin allow-forms"
                  : undefined,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any -- the typedef for the `sandbox` attribute here is incorrect, it doesn't support multiple values
              ) as any}"
              @load="${this.onLoad}"
              src="${this.replaybase}${this.replayfile}?${this
                .paramString}#${this.hashString}"
              allow="autoplay *; fullscreen"
              title="Replay of ${this.title ? `${this.title}:` : ""} ${this
                .url}"
            ></iframe>
          `
        : html``}
      ${this.errorMessage}
    `;
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'event' implicitly has an 'any' type.
  onLoad(event) {
    if (this.isCrossOrigin) {
      return;
    }

    const win = event.target.contentWindow;
    const doc = event.target.contentDocument;

    if (
      win.navigator.serviceWorker &&
      !win.navigator.serviceWorker.controller &&
      this.reloadCount <= 2
    ) {
      this.reloadCount++;
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      setTimeout(() => win.location.reload(), 100);
      return;
    }

    this.reloadCount = 0;

    if (win.customElements.get(this.mainElementName)) {
      return;
    }

    const script = doc.createElement("script");
    //const script = event.target.contentDocument.querySelector("script");
    script.src = scriptSrc;
    doc.head.appendChild(script);
  }
}

// ===========================================================================
async function main() {
  customElements.define("replay-web-page", Embed);
}

// TODO: Fix this the next time the file is edited.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();

export { Embed };
