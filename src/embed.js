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
      hashString: { type: String }
    }
  }

  firstUpdated() {
    window.addEventListener("message", (event) => {
      const iframe = this.renderRoot.querySelector("iframe");

      if (iframe && event.source === iframe.contentWindow) {
        if (event.data.title) {
          this.title = event.data.title;
        }
      }
    });
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