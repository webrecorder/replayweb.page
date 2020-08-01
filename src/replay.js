import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';



// ===========================================================================
class Replay extends LitElement
{
  constructor() {
    super();
    this.isLoading = false;
    this.replayUrl = "";
    this.replayTS = "";
    this.url = "";
    this.ts = "";
    this.title = "";

    this.showAuth = false;
    this.reauthWait = null;
  }

  static get properties() {
    return {
      collInfo: {type: Object },
      sourceUrl: { type: String },

      // external url set from parent
      url: { type: String },
      ts: { type: String },

      // actual replay url
      replayUrl: { type: String },
      replayTS: { type: String },
      title: { type: String },

      iframeUrl: { type: String },
      isLoading: { type: Boolean },

      showAuth: { type: Boolean },
    }
  }

  firstUpdated() {
    window.addEventListener("message", (event) => this.onReplayMessage(event));
    navigator.serviceWorker.addEventListener("message", async (event) => {
      if (event.data.type === "authneeded" && this.collInfo && event.data.coll === this.collInfo.coll) {
        if (this.reauthWait) {
          await this.reauthWait;
        } else {
          this.showAuth = true;
        }
      }
    });
  }

  doSetIframeUrl() {
    this.iframeUrl = this.url ? `${this.collInfo.replayPrefix}/${this.ts || ""}mp_/${this.url}` : "";
  }

  updated(changedProperties) {
    if (changedProperties.has("sourceUrl") || changedProperties.has("collInfo")) {
      this.isAuthable = (this.sourceUrl.startsWith("googledrive://") && 
        this.collInfo && this.collInfo.onDemand);

      this.reauthWait = null;
    }

    if (this.url && 
        ((this.replayUrl != this.url) || (this.replayTS != this.ts)) &&
        (changedProperties.has("url") || changedProperties.has("ts"))) {

      this.replayUrl = this.url;
      this.replayTS = this.ts;
      this.doSetIframeUrl();
    }

    if (this.iframeUrl && changedProperties.has("iframeUrl")) {
      this.waitForLoad();
    }

    if (this.replayUrl && changedProperties.has("replayUrl")) {
      const data = {
        url: this.replayUrl,
        ts: this.replayTS,
      };
  
      this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {replaceLoc: true, data}}));
    }

    if (this.embed && window.parent !== window && changedProperties.has("title")) {
      window.parent.postMessage({
        title: this.title,
        url: this.replayUrl,
        ts: this.replayTS
      }, '*');
    }
  }

  onReplayMessage(event) {
    const iframe = this.renderRoot.querySelector("iframe");

    if (iframe && event.source === iframe.contentWindow) {
      if (event.data.wb_type === "load" || event.data.wb_type === "replace-url") {
        this.replayTS = event.data.ts;
        this.replayUrl = event.data.url;
        this.title = event.data.title || this.title;
        this.clearLoading(iframe.contentWindow);

        if (event.data.icons) {
          const icons = event.data.icons;
          this.dispatchEvent(new CustomEvent("replay-favicons", {bubbles: true, composed: true, detail: {icons}}));
        }
      } else if (event.data.wb_type === "title") {
        this.title = event.data.title;
      }
    }
  }

  waitForLoad() {
    this.isLoading = true;
    this._loadPoll = window.setInterval(() => {
      const iframe = this.renderRoot.querySelector("iframe");
      if (!iframe || !iframe.contentDocument || !iframe.contentWindow || 
        (iframe.contentDocument.readyState === "complete" && !iframe.contentWindow._WBWombat)) {
          this.clearLoading(iframe && iframe.contentWindow);
      }
    }, 5000);
  }

  clearLoading(iframeWin) {
    this.isLoading = false;
    if (this._loadPoll) {
      window.clearInterval(this._loadPoll);
      this._loadPoll = null;
    }

    if (iframeWin) {
      iframeWin.addEventListener("beforeunload", () => {
        this.isLoading = true;
      });
    }
  }

  refresh() {
    if (this.isLoading && !forceReload) {
      return;
    }

    const iframe = this.renderRoot.querySelector("iframe");

    if (iframe) {
      this.waitForLoad();
      iframe.contentWindow.location.reload();
    }
  }

  static get styles() {
    return wrapCss(css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      iframe {
        width: 100vw;
        #height: calc(100vh - 150px);
        height: 100%;
        border: 0px;
      }

      .intro-panel .panel-heading {
        font-size: 1.0em;
      }

      .intro-panel .panel-block {
        padding: 1.0em;
        flex-direction: column;
      }

      nav.intro-panel.panel {
        min-width: 40%;
        display: flex;
        flex-direction: column;
        margin: auto;
      }
    `);
  }

  render() {
    return html`

    ${this.iframeUrl ? html`
    <iframe @message="${this.onReplayMessage}" allow="autoplay 'self'; fullscreen" allowfullscreen
    src="${this.iframeUrl}"></iframe>
    ` : html`
      <nav class="panel intro-panel">
        <p class="panel-heading">Replay Web Page</p>
        <div class="panel-block">
          <p>Enter a URL above to replay it from the web archive!</p>
          <p>(Check out the <a href="#view=pages">Pages</a> or <a href="#view=resources">Page Resources</a> to find URLs in this archive.)</p>
        </div>
      </nav>
    `}

    ${this.isAuthable ? html`
    <div class="modal ${this.showAuth ? 'is-active' : ''}">
      <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
          <p class="modal-card-title">Auth Needed</p>
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <div class="container has-text-centered">
            <wr-gdrive .sourceUrl=${this.sourceUrl} .state="${this.showAuth ? 'trymanual' : 'implicitonly'}" .reauth="${true}" @load-ready=${this.onReAuthed}/>
            </div>
          </section>
        </div>
    </div>
    ` : ``}
    `;
  }
}

customElements.define("wr-coll-replay", Replay);

export { Replay };