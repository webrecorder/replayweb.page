import { LitElement, html, css } from 'lit-element';

import { registerSW } from './pageutils';

import { wrapCss, rwpLogo } from './misc';


var scriptSrc = document.currentScript && document.currentScript.src;


// ===========================================================================
class Embed extends LitElement
{
  constructor() {
    super();
    this.replaybase = window.location.origin + "/replay/";
    this.swName = __SW_NAME__;
    this.view = "replay";
    this.ts = "";
    this.url = "";
    this.query = "";
    this.config = "";
    this.coll = "";
    this.paramString = null;
    this.deepLink = false;
    this.swInited = false;
    this.embed = null;
    this.reloadCount = 0;
  }

  static get properties() {
    return {
      url: { type: String },
      ts: { type: String },
      query: { type: String },

      source: { type: String },
      view: { type: String },
      embed: { type: String },

      replaybase: { type: String },
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
      await registerSW(this.swName, this.replaybase);
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

        if (!this.deepLink) {
          return;
        }

        const currHash = new URLSearchParams(event.data);
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
    if (qs.has("query")) {
      this.query = qs.get("query");
    }
    if (qs.has("view")) {
      this.view = qs.get("view");
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("url") ||
        changedProperties.has("ts") ||
        changedProperties.has("query") ||
        changedProperties.has("view") ||
        changedProperties.has("source")) {

      this.embed = this.embed || "default";

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
      }
    `);
  }

  render() {
    return html`
    ${this.paramString && this.hashString && this.swInited ? html`
      <iframe sandbox="allow-downloads allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-scripts allow-same-origin allow-forms"
              @load="${this.onLoad}" src="${this.replaybase}?${this.paramString}#${this.hashString}" allow="autoplay *; fullscreen"
              title="Replay of ${this.title ? `${this.title}:` :``} ${this.url}"></iframe>

      ` : html``}

    ${this.noSW ? html`
      <section class="full-width">
        <div class="has-text-centered">
          <fa-icon class="logo" id="wrlogo" size="2.5rem" .svg=${rwpLogo} aria-hidden="true"></fa-icon>
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
    const win = event.target.contentWindow;
    const doc = event.target.contentDocument;

    if (win.navigator.serviceWorker && !win.navigator.serviceWorker.controller && this.reloadCount <= 2) {
      this.reloadCount++;
      setTimeout(() => win.location.reload(), 100);
      return;
    }

    this.reloadCount = 0;

    if (win.customElements.get("replay-app-main")) {
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
