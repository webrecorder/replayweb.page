import { LitElement, html, css } from 'lit-element';

import { registerSW } from './pageutils';


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

    this.doRegister();
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

      deepLink: { type: Boolean }
    }
  }

  async doRegister() {
    await registerSW(this.swName, this.replayBase);

    this.swInited = true;
  }

  firstUpdated() {
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
        this.embed = this.url ? "replayonly" : "";
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
    return css`
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
    `;
  }

  render() {
    return html`
    ${this.paramString && this.hashString && this.swInited ? html`
      <iframe @load="${this.onLoad}" src="${this.replayBase}?${this.paramString}#${this.hashString}" allow="autoplay *; fullscreen"></iframe>
      ` : html``}
    `;
  }

  onLoad(event) {
    if (this.injected) {
      return;
    }
    if (event.target.contentWindow.customElements.get("replay-app-main")) {
      return;
    }
    const script = event.target.contentDocument.createElement("script");
    //const script = event.target.contentDocument.querySelector("script");
    script.src = scriptSrc;
    event.target.contentDocument.head.appendChild(script);
    this.injected = true;
  }
}

// ===========================================================================
async function main() {
  customElements.define("replay-web-page", Embed);
}


main();