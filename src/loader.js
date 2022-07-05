import { LitElement, html, css } from "lit";
import { wrapCss, IS_APP } from "./misc";

import prettyBytes from "pretty-bytes";

import { getSWErrorMsg, parseURLSchemeHostPath } from "./pageutils";


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

    this.tryFileHandle = !!window.showOpenFilePicker;

    this.fileHandle = null;

    this.errorAllowRetry = false;

    this.pingInterval = 0;

    this.noWebWorker = false;
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
      embed: { type: String },
      tryFileHandle: { type: Boolean },
      errorAllowRetry: { type: Boolean },
      extraMsg: { type: String }
    };
  }

  firstUpdated() {
    this.initMessages();
    //this.doLoad();
  }

  initMessages() {
    this.noWebWorker = this.loadInfo && this.loadInfo.noWebWorker;

    if (!this.noWebWorker) {
      // eslint-disable-next-line no-undef
      this.worker = new Worker(__SW_NAME__);
    } else {
      if (!navigator.serviceWorker) {
        return;
      }

      this.worker = navigator.serviceWorker;
    }

    this.worker.addEventListener("message", (event) => {
      switch (event.data.msg_type) {
      case "collProgress":
        if (event.data.name === this.coll) {
          this.percent = event.data.percent;
          if (event.data.error) {
            this.error = event.data.error;
            this.state = "errored";
            this.errorAllowRetry = true;
            this.fileHandle = event.data.fileHandle;
            if (this.error === "missing_local_file") {
              this.tryFileHandle = false;
            } else if (this.error === "permission_needed" && event.data.fileHandle) {
              this.state = "permission_needed";
              break;
            }
          }
          if (event.data.currentSize && event.data.totalSize) {
            this.currentSize = event.data.currentSize;
            this.totalSize = event.data.totalSize;
          }
          this.extraMsg = event.data.extraMsg;
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

          if (!this.noWebWorker) {
            this.worker.terminate();
          } else {
            if (this.pingInterval) {
              clearInterval(this.pingInterval);
            }
          }
          this.worker = null;
        }
        break;
      }
    });
  }

  async doLoad() {
    let sourceUrl = this.sourceUrl;
    let source = null;

    this.percent = this.currentSize = this.totalSize = 0;

    const noSWError = getSWErrorMsg();

    if (noSWError) {
      this.state = "errored";
      this.error = noSWError;
      this.errorAllowRetry = false;
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
        if (!this.loadInfo && !this.tryFileHandle) {
          this.state = "errored";
          this.error = `\
File URLs can not be entered directly or shared.
You can select a file to upload from the main page by clicking the 'Choose File...' button.`;
          this.errorAllowRetry = false;
          return;
        }

        source = this.loadInfo;
        break;

      case "ipfs":
        if (IS_APP) {
          // eslint-disable-next-line no-undef
          const url = new URL(__APP_FILE_SERVE_PREFIX__);
          const hash = sourceUrl.split("#", 1)[0];
          url.searchParams.set("ipfs", hash.slice("ipfs://".length));
          source = {sourceUrl, loadUrl: url.href};
        }
        break;

      case "proxy":
        sourceUrl = "proxy:" + sourceUrl.slice("proxy://".length);
        break;
      }
    } catch (e) {
      console.log(e);
    }

    if (!source) {
      source = {sourceUrl};
    }

    source.newFullImport = (this.loadInfo && this.loadInfo.newFullImport);

    this.state = "started";

    const msg = {
      msg_type: "addColl",
      name: this.coll,
      skipExisting: true,
      file: source
    };

    if (this.loadInfo) {
      if (this.loadInfo.extraConfig) {
        msg.extraConfig = this.loadInfo.extraConfig;
      }
      // todo: too special case?
      if (sourceUrl.startsWith("proxy:") && msg.extraConfig && msg.extraConfig.recording) {
        msg.type = "recordingproxy";
      }
    }

    if (!navigator.serviceWorker.controller) {
      await new Promise((resolve) => {
        navigator.serviceWorker.addEventListener("controllerchange", () => resolve());
      });
    }

    if (this.worker) {
      if (!this.noWebWorker) {
        this.worker.postMessage(msg);
      } else {
        navigator.serviceWorker.controller.postMessage(msg);

        // ping service worker with messages to avoid shutdown while loading
        // (mostly for Firefox)
        this.pingInterval = setInterval(() => {
          navigator.serviceWorker.controller.postMessage({"msg_type": "ping"});
        }, 15000);
      }
    }
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
    if (!this.worker) {
      return;
    }

    const msg = {"msg_type": "cancelLoad", "name": this.coll};

    if (!this.noWebWorker) {
      this.worker.postMessage(msg);
      return;
    }

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(msg);
      if (this.pingInterval) {
        clearInterval(this.pingInterval);
      }
    }
  }

  updated(changedProperties) {
    if (this.sourceUrl && changedProperties.has("sourceUrl") || changedProperties.has("tryFileHandle")) {
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

      .extra-msg {
        font-size: 0.8rem;
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
      </div>` : ""}
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
      return html`<wr-gdrive .sourceUrl=${this.sourceUrl} @load-ready=${this.onLoadReady}/>`;

    case "started":
      return html`
          <div class="progress-div">
            <progress id="progress" class="progress is-primary is-large" 
            value="${this.percent}" max="100"></progress>
            <label class="progress-label" for="progress">${this.percent}%</label>
            ${this.currentSize && this.totalSize ? html`
              <div class="loaded-prog">Loaded <b>${prettyBytes(this.currentSize)}</b> of <b>${prettyBytes(this.totalSize)}</b>
              ${this.extraMsg && html`
              <p class="extra-msg">(${this.extraMsg})</p>
              `}
              </div>` : html``}

            ${!this.embed ? html`
            <button @click="${this.onCancel}" class="button is-danger">Cancel</button>` : ""}
          </div>`;

    case "errored":
      return html`
          <div class="has-text-left">
          <div class="error has-text-danger">${this.error}</div>
          <div>
          ${this.errorAllowRetry ? html`
          <a class="button is-warning" @click=${() => window.parent.location.reload()}>Try Again</a>` : ""}
          ${this.embed ? html`` : html`
          <a href="/" class="button is-warning">Back</a>`}
          </div>`;

    case "permission_needed":
      return html`
        <div class="has-text-left">
          <div class="">Permission is needed to reload the archive file. (Click <i>Cancel</i> to cancel loading this archive.)</div>
          <button @click="${this.onAskPermission}" class="button is-primary">Show Permission</button>
          <a href="/" class="button is-danger">Cancel</a>
        </div>`;

    case "waiting":
    default:
      return html`<progress class="progress is-primary is-large" style="max-width: 400px"/>`;

    }
  }

  async onAskPermission() {
    const result = await this.fileHandle.requestPermission({mode: "read"});
    if (result === "granted") {
      this.doLoad();
    }
  }
}

customElements.define("wr-loader", Loader);

export { Loader };
