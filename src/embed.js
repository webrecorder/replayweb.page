import { LitElement, html, css } from 'lit-element';

import { registerSW } from './pageutils';

import { wrapCss, rwpLogo } from './misc';


var scriptSrc = document.currentScript && document.currentScript.src;


// ===========================================================================
class Embed extends LitElement
{
  constructor() {
    super();
    this.replayBase = window.location.origin + "/replay/";
    this.swName = __SW_NAME__;
    this.view = "replay";
    this.ts = "";
    this.url = "";
    this.config = "";
    this.coll = "";
    this.paramString = null;
    this.deepLink = false;
    this.swInited = false;
    this.embed = null;
  }

  static get properties() {
    return {
      url: { type: String },
      ts: { type: String },
      source: { type: String },
      view: { type: String },
      embed: { type: String },

      replayBase: { type: String },
      swName: { type: String },

      title: { type: String },

      coll: { type: String },
      config: { type: String },

      swInited: { type: Boolean },

      paramString: { type: String },
      hashString: { type: String },

      deepLink: { type: Boolean },
      noSW: { type: Boolean },
    }
  }

  async doRegister() {
    try {
      await registerSW(this.swName, this.replayBase);
      console.log("done");
      this.swInited = true;
    } catch (e) {
      console.log(e);
      this.noSW = true;
    }
  }

  firstUpdated() {
    this.doRegister();

    window.addEventListener("message", (event) => {
      const iframe = this.renderRoot.querySelector("iframe");

      if (iframe && event.source === iframe.contentWindow) {
        if (event.data.title) {
          this.title = event.data.title;
        }

        console.log(event.data);

        if (!this.deepLink) {
          return;
        }

        const currHash = new URLSearchParams({
          url: event.data.url,
          ts: event.data.ts,
        });
        const url = new URL(window.location.href);
        url.hash = "#" + currHash.toString();
        window.history.replaceState({}, "", url);
      }
    });

    if (this.deepLink) {
      this.updateFromHash();
      window.addEventListener("hashchange", (event) => this.updateFromHash());
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
  }

  updated(changedProperties) {
    if (changedProperties.has("url") || 
        changedProperties.has("ts") ||
        changedProperties.has("source")) {

      if (this.embed === null) {
        this.embed = this.url ? "replay" : "full";
      }

      this.paramString = new URLSearchParams({
        source: this.source,
        customColl: this.coll,
        config: this.config,
        basePageUrl: window.location.href.split("#")[0],
        embed: this.embed,
      }).toString();
  
      this.hashString = new URLSearchParams({
        url: this.url,
        ts: this.ts,
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
      }
    `);
  }

  render() {
    return html`
    ${this.paramString && this.hashString && this.swInited ? html`
      <iframe @load="${this.onLoad}" src="${this.replayBase}?${this.paramString}#${this.hashString}" allow="autoplay *; fullscreen"></iframe>
      ` : html``}

    ${this.noSW ? html`
      <section class="full-width">
        <div class="has-text-centered">
          <fa-icon class="logo" id="wrlogo" size="2.5rem" .svg=${rwpLogo}></fa-icon>
        </div>
        <div class="error">
Sorry, ReplayWeb.page won't work in this browser as Service Workers are not supported.
Please try a different browser.\n
(Service Workers are disabled in Firefox in Private Mode. If Using Private Mode in Firefox, try regular mode).
        </div>
      </section>
    `: ``}`;
  }

  onLoad(event) {
    if (this.injected) {
      return;
    }
    const win = event.target.contentWindow;
    const doc = event.target.contentDocument;

    if (win.navigator.serviceWorker && !win.navigator.serviceWorker.controller) {
      setTimeout(() => window.location.reload(), 100);
      return;
    }

    if (win.customElements.get("replay-app-main")) {
      return;
    }

    const script = doc.createElement("script");
    //const script = event.target.contentDocument.querySelector("script");
    script.src = scriptSrc;
    doc.head.appendChild(script);
    this.injected = true;
  }
}

// ===========================================================================
async function main() {
  customElements.define("replay-web-page", Embed);
}


main();