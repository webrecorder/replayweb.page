import { LitElement, html, css } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { wrapCss, rwpLogo } from "./misc";
import { SWManager } from "./swmanager";

// @ts-expect-error - TS2339 - Property 'src' does not exist on type 'HTMLOrSVGScriptElement'.
var scriptSrc = document.currentScript && document.currentScript.src;

var defaultReplayFile = "";

const DEFAULT_REPLAY_BASE = "https://replayweb.page/";

// ===========================================================================
class Embed extends LitElement {
  constructor() {
    super();
    // @ts-expect-error - TS2339 - Property 'replaybase' does not exist on type 'Embed'.
    this.replaybase = "./replay/";
    // @ts-expect-error - TS2339 - Property 'replayfile' does not exist on type 'Embed'.
    this.replayfile = defaultReplayFile;
    // eslint-disable-next-line no-undef
    // @ts-expect-error - TS2339 - Property 'swName' does not exist on type 'Embed'.
    this.swName = __SW_NAME__;
    // @ts-expect-error - TS2339 - Property 'mainElementName' does not exist on type 'Embed'.
    this.mainElementName = "replay-app-main";
    // @ts-expect-error - TS2339 - Property 'appName' does not exist on type 'Embed'.
    this.appName = "ReplayWeb.page";
    // @ts-expect-error - TS2339 - Property 'view' does not exist on type 'Embed'.
    this.view = "replay";
    // @ts-expect-error - TS2339 - Property 'ts' does not exist on type 'Embed'.
    this.ts = "";
    // @ts-expect-error - TS2339 - Property 'url' does not exist on type 'Embed'.
    this.url = "";
    // @ts-expect-error - TS2339 - Property 'query' does not exist on type 'Embed'.
    this.query = "";
    // @ts-expect-error - TS2339 - Property 'config' does not exist on type 'Embed'.
    this.config = "";
    // @ts-expect-error - TS2339 - Property 'customConfig' does not exist on type 'Embed'.
    this.customConfig = null;
    // @ts-expect-error - TS2339 - Property 'coll' does not exist on type 'Embed'.
    this.coll = "";
    // @ts-expect-error - TS2339 - Property 'paramString' does not exist on type 'Embed'.
    this.paramString = null;
    // @ts-expect-error - TS2339 - Property 'deepLink' does not exist on type 'Embed'.
    this.deepLink = false;
    // @ts-expect-error - TS2339 - Property 'newWindowBase' does not exist on type 'Embed'.
    this.newWindowBase = "";
    // @ts-expect-error - TS2339 - Property 'inited' does not exist on type 'Embed'.
    this.inited = false;
    // @ts-expect-error - TS2339 - Property 'embed' does not exist on type 'Embed'.
    this.embed = null;
    // @ts-expect-error - TS2339 - Property 'reloadCount' does not exist on type 'Embed'.
    this.reloadCount = 0;
    // @ts-expect-error - TS2339 - Property 'sandbox' does not exist on type 'Embed'.
    this.sandbox = false;
    // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type 'Embed'.
    this.noWebWorker = false;
    // @ts-expect-error - TS2339 - Property 'noCache' does not exist on type 'Embed'.
    this.noCache = false;
    // deprecated;
    // @ts-expect-error - TS2339 - Property 'noSandbox' does not exist on type 'Embed'.
    this.noSandbox = null;
    // @ts-expect-error - TS2339 - Property 'logo' does not exist on type 'Embed'.
    this.logo = rwpLogo;
    // @ts-expect-error - TS2339 - Property 'loading' does not exist on type 'Embed'.
    this.loading = "";
    // @ts-expect-error - TS2339 - Property 'useRuffle' does not exist on type 'Embed'.
    this.useRuffle = false;
  }

  static setDefaultReplayFile(replayfile) {
    defaultReplayFile = replayfile;
  }

  static get properties() {
    return {
      url: { type: String },
      ts: { type: String },
      query: { type: String },

      source: { type: String },
      src: { type: String },

      view: { type: String },
      embed: { type: String },

      replaybase: { type: String },
      swName: { type: String },

      title: { type: String },

      coll: { type: String },
      config: { type: String },

      inited: { type: Boolean },

      paramString: { type: String },
      hashString: { type: String },

      deepLink: { type: Boolean },
      sandbox: { type: Boolean },
      noSandbox: { type: Boolean },
      noWebWorker: { type: Boolean },
      noCache: { type: Boolean },
      hideOffscreen: { type: Boolean },

      newWindowBase: { type: String },

      errorMessage: { type: String },

      requireSubdomainIframe: { type: Boolean },

      loading: { type: String },

      useRuffle: { type: Boolean },
    };
  }

  async doRegister() {
    // @ts-expect-error - TS2339 - Property 'replaybase' does not exist on type 'Embed'.
    const replaybaseURL = new URL(this.replaybase, window.location.href);

    // @ts-expect-error - TS2339 - Property 'isCrossOrigin' does not exist on type 'Embed'.
    this.isCrossOrigin = replaybaseURL.origin !== window.location.origin;

    // @ts-expect-error - TS2339 - Property 'isCrossOrigin' does not exist on type 'Embed'.
    if (this.isCrossOrigin) {
      // @ts-expect-error - TS2339 - Property 'inited' does not exist on type 'Embed'.
      this.inited = true;
      return;
    }

    // @ts-expect-error - TS2339 - Property 'swName' does not exist on type 'Embed'.
    const name = this.swName + "?serveIndex=1";
    // @ts-expect-error - TS2339 - Property 'appName' does not exist on type 'Embed'.
    const appName = this.appName;
    // @ts-expect-error - TS2339 - Property 'replaybase' does not exist on type 'Embed'.
    const scope = this.replaybase;
    // @ts-expect-error - TS2339 - Property 'requireSubdomainIframe' does not exist on type 'Embed'.
    const requireSubdomainIframe = this.requireSubdomainIframe;

    // @ts-expect-error - TS2339 - Property 'swmanager' does not exist on type 'Embed'.
    this.swmanager = new SWManager({
      name,
      scope,
      requireSubdomainIframe,
      appName,
    });

    try {
      // @ts-expect-error - TS2339 - Property 'swmanager' does not exist on type 'Embed'.
      await this.swmanager.register();
      // @ts-expect-error - TS2339 - Property 'inited' does not exist on type 'Embed'.
      this.inited = true;
    } catch (e) {
      // @ts-expect-error - TS2339 - Property 'errorMessage' does not exist on type 'Embed'. | TS2339 - Property 'swmanager' does not exist on type 'Embed'. | TS2339 - Property 'logo' does not exist on type 'Embed'.
      this.errorMessage = this.swmanager.renderErrorReport(this.logo);
    }
  }

  handleMessage(event) {
    const iframe = this.renderRoot.querySelector("iframe");

    if (iframe && event.source === iframe.contentWindow) {
      if (!event.data.view) {
        return;
      }

      if (event.data.title) {
        this.title = event.data.title;
      }

      // @ts-expect-error - TS2339 - Property 'deepLink' does not exist on type 'Embed'.
      if (!this.deepLink) {
        return;
      }

      const currHash = new URLSearchParams(event.data);
      const url = new URL(window.location.href);
      url.hash = "#" + currHash.toString();
      window.history.replaceState({}, "", url);
    }
  }

  firstUpdated() {
    // @ts-expect-error - TS2339 - Property 'noSandbox' does not exist on type 'Embed'.
    if (this.noSandbox) {
      console.warn(
        "The noSandbox flag is deprecated. ReplayWeb.page does not add a sandbox by default. To enable sandboxing, use 'sandbox' flag instead. This may result in PDFs not loading and pages opening in new windows, but may be more secure in some situations",
      );
    }
    this.doRegister();

    window.addEventListener("message", (event) => this.handleMessage(event));

    // @ts-expect-error - TS2339 - Property 'deepLink' does not exist on type 'Embed'.
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
      window.SharedWorker === undefined
    ) {
      // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type 'Embed'.
      this.noWebWorker = true;
    }

    // if no storage manager or estimate, don't cache
    if (!navigator.storage || !navigator.storage.estimate) {
      // @ts-expect-error - TS2339 - Property 'noCache' does not exist on type 'Embed'.
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
    // @ts-expect-error - TS2339 - Property 'customConfig' does not exist on type 'Embed'.
    if (!this.customConfig) {
      // @ts-expect-error - TS2339 - Property 'config' does not exist on type 'Embed'.
      return this.config;
    }

    // @ts-expect-error - TS2339 - Property 'config' does not exist on type 'Embed'.
    if (this.config) {
      // @ts-expect-error - TS2339 - Property 'customConfig' does not exist on type 'Embed'. | TS2339 - Property 'config' does not exist on type 'Embed'.
      const config = { ...this.customConfig, ...JSON.parse(this.config) };
      return JSON.stringify(config);
    } else {
      // @ts-expect-error - TS2339 - Property 'customConfig' does not exist on type 'Embed'.
      return JSON.stringify(this.customConfig);
    }
  }

  updated(changedProperties) {
    if (
      changedProperties.has("url") ||
      changedProperties.has("ts") ||
      changedProperties.has("query") ||
      changedProperties.has("view") ||
      changedProperties.has("source") ||
      changedProperties.has("src")
    ) {
      // @ts-expect-error - TS2339 - Property 'embed' does not exist on type 'Embed'. | TS2339 - Property 'embed' does not exist on type 'Embed'.
      this.embed = this.embed || "default";

      // @ts-expect-error - TS2339 - Property 'src' does not exist on type 'Embed'.
      if (this.src) {
        // @ts-expect-error - TS2339 - Property 'source' does not exist on type 'Embed'. | TS2339 - Property 'src' does not exist on type 'Embed'.
        this.source = this.src;
      }

      // @ts-expect-error - TS2339 - Property 'source' does not exist on type 'Embed'.
      const source = new URL(this.source, document.baseURI);

      const config = this.mergeConfigs();

      const params = {
        source,
        // @ts-expect-error - TS2339 - Property 'coll' does not exist on type 'Embed'.
        customColl: this.coll,
        config,
        basePageUrl: window.location.href.split("#")[0],
        // @ts-expect-error - TS2339 - Property 'newWindowBase' does not exist on type 'Embed'.
        baseUrlSourcePrefix: this.newWindowBase,
        // @ts-expect-error - TS2339 - Property 'embed' does not exist on type 'Embed'.
        embed: this.embed,
      };

      // @ts-expect-error - TS2339 - Property 'deepLink' does not exist on type 'Embed'.
      if (!this.deepLink && !params.baseUrlSourcePrefix) {
        params.baseUrlSourcePrefix = DEFAULT_REPLAY_BASE;
      }

      // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type 'Embed'.
      if (this.noWebWorker) {
        // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type '{ source: URL; customColl: any; config: any; basePageUrl: string; baseUrlSourcePrefix: any; embed: any; }'.
        params.noWebWorker = "1";
      }

      // @ts-expect-error - TS2339 - Property 'noCache' does not exist on type 'Embed'.
      if (this.noCache) {
        // @ts-expect-error - TS2339 - Property 'noCache' does not exist on type '{ source: URL; customColl: any; config: any; basePageUrl: string; baseUrlSourcePrefix: any; embed: any; }'.
        params.noCache = "1";
      }

      // @ts-expect-error - TS2339 - Property 'hideOffscreen' does not exist on type 'Embed'.
      if (this.hideOffscreen) {
        // @ts-expect-error - TS2339 - Property 'hideOffscreen' does not exist on type '{ source: URL; customColl: any; config: any; basePageUrl: string; baseUrlSourcePrefix: any; embed: any; }'.
        params.hideOffscreen = "1";
      }

      // @ts-expect-error - TS2339 - Property 'loading' does not exist on type 'Embed'.
      if (this.loading === "eager") {
        // @ts-expect-error - TS2339 - Property 'loading' does not exist on type '{ source: URL; customColl: any; config: any; basePageUrl: string; baseUrlSourcePrefix: any; embed: any; }'.
        params.loading = "eager";
      }

      // eslint-disable-next-line no-undef
      // @ts-expect-error - TS2339 - Property 'swName' does not exist on type 'Embed'.
      if (this.swName !== __SW_NAME__) {
        // @ts-expect-error - TS2339 - Property 'swName' does not exist on type '{ source: URL; customColl: any; config: any; basePageUrl: string; baseUrlSourcePrefix: any; embed: any; }'. | TS2339 - Property 'swName' does not exist on type 'Embed'.
        params.swName = this.swName;
      }

      // @ts-expect-error - TS2339 - Property 'useRuffle' does not exist on type 'Embed'.
      if (this.useRuffle) {
        // @ts-expect-error - TS2339 - Property 'ruffle' does not exist on type '{ source: URL; customColl: any; config: any; basePageUrl: string; baseUrlSourcePrefix: any; embed: any; }'.
        params.ruffle = "1";
      }

      // @ts-expect-error - TS2339 - Property 'paramString' does not exist on type 'Embed'. | TS2345 - Argument of type '{ source: URL; customColl: any; config: any; basePageUrl: string; baseUrlSourcePrefix: any; embed: any; }' is not assignable to parameter of type 'string | Record<string, string> | URLSearchParams | string[][] | undefined'.
      this.paramString = new URLSearchParams(params).toString();

      // @ts-expect-error - TS2339 - Property 'hashString' does not exist on type 'Embed'.
      this.hashString = new URLSearchParams({
        // @ts-expect-error - TS2339 - Property 'url' does not exist on type 'Embed'.
        url: this.url,
        // @ts-expect-error - TS2339 - Property 'ts' does not exist on type 'Embed'.
        ts: this.ts,
        // @ts-expect-error - TS2339 - Property 'query' does not exist on type 'Embed'.
        query: this.query,
        // @ts-expect-error - TS2339 - Property 'view' does not exist on type 'Embed'.
        view: this.view,
      }).toString();
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
      ${
        // @ts-expect-error - TS2339 - Property 'paramString' does not exist on type 'Embed'. | TS2339 - Property 'hashString' does not exist on type 'Embed'. | TS2339 - Property 'inited' does not exist on type 'Embed'.
        this.paramString && this.hashString && this.inited
          ? html`
              <iframe
                sandbox="${ifDefined(
                  // @ts-expect-error - TS2339 - Property 'sandbox' does not exist on type 'Embed'.
                  this.sandbox
                    ? "allow-downloads allow-modals allow-orientation-lock allow-pointer-lock\
         allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts\
         allow-same-origin allow-forms"
                    : undefined,
                )}"
                @load="${this.onLoad}"
                src="${
                  // @ts-expect-error - TS2339 - Property 'replaybase' does not exist on type 'Embed'.
                  this.replaybase
                }${
                  // @ts-expect-error - TS2339 - Property 'replayfile' does not exist on type 'Embed'.
                  this.replayfile
                }?${
                  // @ts-expect-error - TS2339 - Property 'paramString' does not exist on type 'Embed'.
                  this.paramString
                }#${
                  // @ts-expect-error - TS2339 - Property 'hashString' does not exist on type 'Embed'.
                  this.hashString
                }"
                allow="autoplay *; fullscreen"
                title="Replay of ${this.title ? `${this.title}:` : ""} ${
                  // @ts-expect-error - TS2339 - Property 'url' does not exist on type 'Embed'.
                  this.url
                }"
              ></iframe>
            `
          : html``
      }
      ${
        // @ts-expect-error - TS2339 - Property 'errorMessage' does not exist on type 'Embed'.
        this.errorMessage
      }
    `;
  }

  onLoad(event) {
    // @ts-expect-error - TS2339 - Property 'isCrossOrigin' does not exist on type 'Embed'.
    if (this.isCrossOrigin) {
      return;
    }

    const win = event.target.contentWindow;
    const doc = event.target.contentDocument;

    if (
      win.navigator.serviceWorker &&
      !win.navigator.serviceWorker.controller &&
      // @ts-expect-error - TS2339 - Property 'reloadCount' does not exist on type 'Embed'.
      this.reloadCount <= 2
    ) {
      // @ts-expect-error - TS2339 - Property 'reloadCount' does not exist on type 'Embed'.
      this.reloadCount++;
      setTimeout(() => win.location.reload(), 100);
      return;
    }

    // @ts-expect-error - TS2339 - Property 'reloadCount' does not exist on type 'Embed'.
    this.reloadCount = 0;

    // @ts-expect-error - TS2339 - Property 'mainElementName' does not exist on type 'Embed'.
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

main();

export { Embed };
