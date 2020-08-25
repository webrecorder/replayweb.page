import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import prettyBytes from 'pretty-bytes';

import { parseURLSchemeHostPath, initDBWorker } from './pageutils';


// ===========================================================================
class Loader extends LitElement
{
  constructor() {
    super();
    this.progress = 0;
    this.total = 0;
    this.percent = 0;
    this.coll = "";
    this.state = "waiting";
    this.loadInfo = null;

    this.currentSize = 0;
    this.totalSize = 0;

    this.dbworker = initDBWorker();
  }

  static get properties() {
    return {
      sourceUrl: { type: String },
      loadInfo: { type: Object },
      state: { type: String },
      progress: { type: Number },
      percent: { type: Number },
      currentSize: { type: Number },
      totalSize: { type: Number },
      error: { type: String},
      total: { type: Number },
      status: { type: String },
      coll: { type: String },
      embed: { type: String }
    }
  }

  firstUpdated(props) {
    this.initMessages();
    //this.doLoad();
  }

  initMessages() {
    this.dbworker.addEventListener("message", (event) => {
      switch (event.data.msg_type) {
        case "collProgress":
          if (event.data.name === this.coll) {
            this.percent = event.data.percent;
            if (event.data.error) {
              this.error = event.data.error;
              this.state = "errored";
            }
            if (event.data.currentSize && event.data.totalSize) {
              this.currentSize = event.data.currentSize;
              this.totalSize = event.data.totalSize;
            }
          }
          break;

        case "collAdded":
          if (event.data.name === this.coll) {
            if (!this.total) {
              this.total = 100;
            }
            this.progress = this.total;
            this.percent = 100;
            this.dispatchEvent(new CustomEvent("coll-loaded", {detail: event.data}));
          }
          break;
      }
    });
  }

  async doLoad() {
    let sourceUrl = this.sourceUrl;
    let source = null;

    this.percent = this.currentSize = this.totalSize = 0;

    if (!navigator.serviceWorker) {
      this.state = "errored";
      this.error = "Sorry, this browser is not supported. Please try a different browser\n(If you're using Firefox, try without Private Mode)";
      return;
    }

    // custom protocol handlers here...
    try {
      const {scheme, host, path} = parseURLSchemeHostPath(sourceUrl);

      switch (scheme) {
        case "googledrive":
          this.state = "googledrive";
          source = await this.googledriveInit();
          break;

        case "s3":
          source = {sourceUrl,
                    loadUrl: `https://${host}.s3.amazonaws.com${path}`,
                    name: this.sourceUrl};
          break;

        case "file":
          if (!this.loadInfo) {
            this.state = "errored";
            this.error = `\
File URLs can not be entered directly or shared.
You can select a file to upload from the main page by clicking the \'Choose File...\' button.`;
            return;
          }

          source = this.loadInfo;
          break;
      }
    } catch (e) {}

    if (!source) {
      source = {sourceUrl};
    }

    this.state = "started";

    const msg = {"msg_type": "addColl", "name": this.coll, skipExisting: true, file: source};

    if (this.loadInfo && this.loadInfo.extraConfig) {
      msg.extraConfig = this.loadInfo.extraConfig;
    }

    this.dbworker.postMessage(msg);
  }

  googledriveInit() {
    this._gdWait = new Promise((resolve) => this._gdResolve = resolve);
    return this._gdWait;
  }

  async onLoadReady(event) {
    if (this._gdResolve) {
      //const digest = await digestMessage(url, 'SHA-256');
      //this.coll = "id-" + digest.slice(0, 12);

      this._gdResolve(event.detail);
    }
  }

  onCancel() {
    this.dbworker.postMessage({"msg_type": "cancelLoad", "name": this.coll});
  }

  updated(changedProperties) {
    if (this.sourceUrl && changedProperties.has("sourceUrl")) {
      this.doLoad();
    }
  }

  static get styles() {
    return wrapCss(css`
      :host {
        height: 100%;
        display: flex;
      }

      .logo {
        width: 96px;
        height: 96px;
        margin: 1em;
        flex-grow: 1;
      }

      .progress-div {
        position: relative;
        width: 400px !important;
      }

      .progress-label {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: calc(1.5rem / 1.5);
        line-height: 1.5rem;
      }

      .loaded-prog {
        margin-bottom: 1em;
      }

      .error {
        white-space: pre-wrap;
        margin-bottom: 2em;
      }

      section.container {
        margin: auto;
      }
    `);
  }

  render() {
    return html`
    <section class="container">
      <div class="has-text-centered is-flex">
        <wr-anim-logo class="logo" size="96px"/>
      </div>
      ${!this.embed ? html`
      <div class="level">
        <p class="level-item">Loading&nbsp;<b>${this.sourceUrl}</b>...</p>
      </div>` : ``}
      <div class="level">
        <div class="level-item has-text-centered">
        ${this.renderContent()}
        </div>
      </div>
    </section>
    `;
  }

  renderContent() {
    switch (this.state) {
      case "googledrive":
        return html`<wr-gdrive .sourceUrl=${this.sourceUrl} @load-ready=${this.onLoadReady}/>`

      case "started":
        return html`
          <div class="progress-div">
            <progress id="progress" class="progress is-primary is-large" 
            value="${this.percent}" max="100"></progress>
            <label class="progress-label" for="progress">${this.percent}%</label>
            ${this.currentSize && this.totalSize ? html`
              <p class="loaded-prog">Loaded <b>${prettyBytes(this.currentSize)}</b> of <b>${prettyBytes(this.totalSize)}</b></p>` : html``}

            ${!this.embed ? html`
            <button @click="${this.onCancel}" class="button is-danger">Cancel</button>` : ``}
          </div>`;

      case "errored":
        return html`
          <div class="has-text-left">
          <div class="error  has-text-danger">${this.error}</div>
          <div>
          ${this.embed ? html`
          <a class="button is-warning" @click=${(e) => window.parent.location.reload()}>Try Again</a>` : html`
          <a href="/" class="button is-warning">Back</a>`}
          </div>`;

      case "waiting":
      default:
        return html`<progress class="progress is-primary is-large" style="max-width: 400px"/>`;

    }
  }
}

customElements.define("wr-loader", Loader);

export { Loader };