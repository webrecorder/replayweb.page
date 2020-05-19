import { LitElement, html, css } from 'lit-element';


// ===========================================================================
class EmbedRWP extends LitElement
{
  constructor() {
    super();
    this.replayBase = "http://localhost:9990/";
    this.view = "replay";
    this.ts = "";
    this.url = "";
    this.config = "";
    this.coll = "";
    this.paramString = null;
    this.deepLink = false;
  }

  static get properties() {
    return {
      url: { type: String },
      ts: { type: String },
      source: { type: String },
      replayBase: { type: String },

      title: { type: String },

      coll: { type: String },
      config: { type: String },

      paramString: { type: String },
      hashString: { type: String },

      deepLink: { type: Boolean }
    }
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

      this.paramString = new URLSearchParams({
        source: this.source,
        customColl: this.coll,
        config: this.config,
        embed: "true"
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
    ${this.paramString && this.hashString ? html`
      <iframe src="${this.replayBase}?${this.paramString}#${this.hashString}" allow="autoplay *; fullscreen"></iframe>
      ` : html``}
    `;
  }
}

// ===========================================================================
async function main() {
  customElements.define("replay-web-page", EmbedRWP);
}


main();