import { LitElement, html, css } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

import { wrapCss, rwpLogo } from "./misc";
import { SWManager } from "./swmanager";


var scriptSrc = document.currentScript && document.currentScript.src;

var defaultReplayFile = "";

const DEFAULT_REPLAY_BASE = "https://replayweb.page/";


// ===========================================================================
class Embed extends LitElement
{
  constructor() {
    super();
    this.replaybase = "./replay/";
    this.replayfile = defaultReplayFile;
    // eslint-disable-next-line no-undef
    this.swName = __SW_NAME__;
    this.mainElementName = "replay-app-main";
    this.view = "replay";
    this.ts = "";
    this.url = "";
    this.query = "";
    this.config = "";
    this.customConfig = null;
    this.coll = "";
    this.paramString = null;
    this.deepLink = false;
    this.newWindowBase = "";
    this.inited = false;
    this.embed = null;
    this.reloadCount = 0;
    this.sandbox = false;
    this.noWebWorker = false;
    this.noCache = false;
    this.logo = rwpLogo;
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
      noWebWorker: { type: Boolean },
      noCache: { type: Boolean },
      hideOffscreen: { type: Boolean },

      newWindowBase: { type: String },

      errorMessage: { type: String },

      requireSubdomainIframe: {type: Boolean}
    };
  }

  async doRegister() {
    const replaybaseURL = new URL(this.replaybase, window.location.href);

    this.isCrossOrigin = replaybaseURL.origin !== window.location.origin;

    if (this.isCrossOrigin) {
      this.inited = true;
      return;
    }

    const name = this.swName;
    const scope = this.replaybase;
    const requireSubdomainIframe = this.requireSubdomainIframe;

    this.swmanager = new SWManager({name, scope, requireSubdomainIframe});

    try {
      await this.swmanager.register();
      this.inited = true;
    } catch (e) {
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
    this.doRegister();

    window.addEventListener("message", (event) => this.handleMessage(event));

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
    if (window.GestureEvent !== undefined && window.SharedWorker === undefined ){
      this.noWebWorker = true;
    }

    // if no storage manager or estimate, don't cache
    if (!navigator.storage || !navigator.storage.estimate) {
      this.noCache = true;
    }
  }

  updateFromHash() {
    const qs = new URLSearchParams(window.location.hash.slice(1));

    if (qs.has("url")) {
      this.url = qs.get("url");
    }
    if (qs.has("ts")) {
      this.ts = qs.get("ts");
    }
    if (qs.has("query")) {
      this.query = qs.get("query");
    }
    if (qs.has("view")) {
      this.view = qs.get("view");
    }
  }

  mergeConfigs() {
    if (!this.customConfig) {
      return this.config;
    }

    if (this.config) {
      const config = {...this.customConfig, ...JSON.parse(this.config)};
      return JSON.stringify(config);
    } else {
      return JSON.stringify(this.customConfig);
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("url") ||
        changedProperties.has("ts") ||
        changedProperties.has("query") ||
        changedProperties.has("view") ||
        changedProperties.has("source") ||
        changedProperties.has("src")) {

      this.embed = this.embed || "default";

      if (this.src) {
        this.source = this.src;
      }

      const source = new URL(this.source, document.baseURI);

      const config = this.mergeConfigs();

      const params = {
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

      this.paramString = new URLSearchParams(params).toString();

      this.hashString = new URLSearchParams({
        url: this.url,
        ts: this.ts,
        query: this.query,
        view: this.view
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
    ${this.paramString && this.hashString && this.inited ? html`
      <iframe sandbox="${ifDefined(this.sandbox ?
    "allow-downloads allow-modals allow-orientation-lock allow-pointer-lock\
         allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts\
         allow-same-origin allow-forms" : undefined)}"

      @load="${this.onLoad}" src="${this.replaybase}${this.replayfile}?${this.paramString}#${this.hashString}" allow="autoplay *; fullscreen"
      title="Replay of ${this.title ? `${this.title}:` :""} ${this.url}"></iframe>

      ` : html``}

    ${this.errorMessage}
    `;
  }

  onLoad(event) {
    if (this.isCrossOrigin) {
      return;
    }

    const win = event.target.contentWindow;
    const doc = event.target.contentDocument;

    if (win.navigator.serviceWorker && !win.navigator.serviceWorker.controller && this.reloadCount <= 2) {
      this.reloadCount++;
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

main();

export { Embed };
