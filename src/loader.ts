import { LitElement, html, css } from "lit";
import { wrapCss } from "./misc";

import prettyBytes from "pretty-bytes";

import { parseURLSchemeHostPath } from "./pageutils";

// ===========================================================================
class Loader extends LitElement {
  constructor() {
    super();
    // @ts-expect-error - TS2551 - Property 'progress' does not exist on type 'Loader'. Did you mean 'onprogress'?
    this.progress = 0;
    // @ts-expect-error - TS2339 - Property 'total' does not exist on type 'Loader'.
    this.total = 0;
    // @ts-expect-error - TS2339 - Property 'percent' does not exist on type 'Loader'.
    this.percent = 0;
    // @ts-expect-error - TS2339 - Property 'coll' does not exist on type 'Loader'.
    this.coll = "";
    // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'Loader'.
    this.state = "waiting";
    // @ts-expect-error - TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
    this.loadInfo = null;

    // @ts-expect-error - TS2339 - Property 'currentSize' does not exist on type 'Loader'.
    this.currentSize = 0;
    // @ts-expect-error - TS2339 - Property 'totalSize' does not exist on type 'Loader'.
    this.totalSize = 0;

    // @ts-expect-error - TS2339 - Property 'tryFileHandle' does not exist on type 'Loader'. | TS2339 - Property 'showOpenFilePicker' does not exist on type 'Window & typeof globalThis'.
    this.tryFileHandle = !!window.showOpenFilePicker;

    // @ts-expect-error - TS2339 - Property 'fileHandle' does not exist on type 'Loader'.
    this.fileHandle = null;

    // @ts-expect-error - TS2339 - Property 'errorAllowRetry' does not exist on type 'Loader'.
    this.errorAllowRetry = false;

    // @ts-expect-error - TS2339 - Property 'pingInterval' does not exist on type 'Loader'.
    this.pingInterval = 0;

    // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type 'Loader'.
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
      error: { type: String },
      total: { type: Number },
      status: { type: String },
      coll: { type: String },
      embed: { type: String },
      tryFileHandle: { type: Boolean },
      errorAllowRetry: { type: Boolean },
      extraMsg: { type: String },
      swName: { type: String },
    };
  }

  firstUpdated() {
    this.initMessages();
    //this.doLoad();
  }

  initMessages() {
    // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type 'Loader'. | TS2339 - Property 'loadInfo' does not exist on type 'Loader'. | TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
    this.noWebWorker = this.loadInfo && this.loadInfo.noWebWorker;

    // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type 'Loader'.
    if (!this.noWebWorker) {
      // @ts-expect-error - TS2339 - Property 'worker' does not exist on type 'Loader'. | TS2339 - Property 'swName' does not exist on type 'Loader'.
      this.worker = new Worker(this.swName);
    } else {
      if (!navigator.serviceWorker) {
        return;
      }

      // @ts-expect-error - TS2339 - Property 'worker' does not exist on type 'Loader'.
      this.worker = navigator.serviceWorker;
    }

    // @ts-expect-error - TS2339 - Property 'worker' does not exist on type 'Loader'.
    this.worker.addEventListener("message", (event) => {
      switch (event.data.msg_type) {
        case "collProgress":
          // @ts-expect-error - TS2339 - Property 'coll' does not exist on type 'Loader'.
          if (event.data.name === this.coll) {
            // @ts-expect-error - TS2339 - Property 'percent' does not exist on type 'Loader'.
            this.percent = event.data.percent;
            if (event.data.error) {
              // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'Loader'.
              this.error = event.data.error;
              // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'Loader'.
              this.state = "errored";
              // @ts-expect-error - TS2339 - Property 'errorAllowRetry' does not exist on type 'Loader'.
              this.errorAllowRetry = true;
              // @ts-expect-error - TS2339 - Property 'fileHandle' does not exist on type 'Loader'.
              this.fileHandle = event.data.fileHandle;
              // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'Loader'.
              if (this.error === "missing_local_file") {
                // @ts-expect-error - TS2339 - Property 'tryFileHandle' does not exist on type 'Loader'.
                this.tryFileHandle = false;
              } else if (
                // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'Loader'.
                this.error === "permission_needed" &&
                event.data.fileHandle
              ) {
                // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'Loader'.
                this.state = "permission_needed";
                break;
              }
            }
            if (event.data.currentSize && event.data.totalSize) {
              // @ts-expect-error - TS2339 - Property 'currentSize' does not exist on type 'Loader'.
              this.currentSize = event.data.currentSize;
              // @ts-expect-error - TS2339 - Property 'totalSize' does not exist on type 'Loader'.
              this.totalSize = event.data.totalSize;
            }
            // @ts-expect-error - TS2339 - Property 'extraMsg' does not exist on type 'Loader'.
            this.extraMsg = event.data.extraMsg;
          }
          break;

        case "collAdded":
          // @ts-expect-error - TS2339 - Property 'coll' does not exist on type 'Loader'.
          if (event.data.name === this.coll) {
            // @ts-expect-error - TS2339 - Property 'total' does not exist on type 'Loader'.
            if (!this.total) {
              // @ts-expect-error - TS2339 - Property 'total' does not exist on type 'Loader'.
              this.total = 100;
            }
            // @ts-expect-error - TS2551 - Property 'progress' does not exist on type 'Loader'. Did you mean 'onprogress'? | TS2339 - Property 'total' does not exist on type 'Loader'.
            this.progress = this.total;
            // @ts-expect-error - TS2339 - Property 'percent' does not exist on type 'Loader'.
            this.percent = 100;
            this.dispatchEvent(
              new CustomEvent("coll-loaded", { detail: event.data }),
            );

            // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type 'Loader'.
            if (!this.noWebWorker) {
              // @ts-expect-error - TS2339 - Property 'worker' does not exist on type 'Loader'.
              this.worker.terminate();
            } else {
              // @ts-expect-error - TS2339 - Property 'pingInterval' does not exist on type 'Loader'.
              if (this.pingInterval) {
                // @ts-expect-error - TS2339 - Property 'pingInterval' does not exist on type 'Loader'.
                clearInterval(this.pingInterval);
              }
            }
            // @ts-expect-error - TS2339 - Property 'worker' does not exist on type 'Loader'.
            this.worker = null;
          }
          break;
      }
    });
  }

  async doLoad() {
    // @ts-expect-error - TS2339 - Property 'sourceUrl' does not exist on type 'Loader'.
    let sourceUrl = this.sourceUrl;
    let source = null;

    // @ts-expect-error - TS2339 - Property 'percent' does not exist on type 'Loader'. | TS2339 - Property 'currentSize' does not exist on type 'Loader'. | TS2339 - Property 'totalSize' does not exist on type 'Loader'.
    this.percent = this.currentSize = this.totalSize = 0;

    // const noSWError = getSWErrorMsg();

    // @ts-expect-error - TS2339 - Property 'loadInfo' does not exist on type 'Loader'. | TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
    if (this.loadInfo && this.loadInfo.swError) {
      // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'Loader'.
      this.state = "errored";
      // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'Loader'. | TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
      this.error = this.loadInfo.swError;
      // @ts-expect-error - TS2339 - Property 'errorAllowRetry' does not exist on type 'Loader'.
      this.errorAllowRetry = false;
      return;
    }

    // custom protocol handlers here...
    try {
      const { scheme, host, path } = parseURLSchemeHostPath(sourceUrl);

      switch (scheme) {
        case "googledrive":
          // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'Loader'.
          this.state = "googledrive";
          source = await this.googledriveInit();
          break;

        case "s3":
          // @ts-expect-error - TS2322 - Type '{ sourceUrl: any; loadUrl: string; name: any; }' is not assignable to type 'null'.
          source = {
            sourceUrl,
            loadUrl: `https://${host}.s3.amazonaws.com${path}`,
            // @ts-expect-error - TS2339 - Property 'sourceUrl' does not exist on type 'Loader'.
            name: this.sourceUrl,
          };
          break;

        case "file":
          // @ts-expect-error - TS2339 - Property 'loadInfo' does not exist on type 'Loader'. | TS2339 - Property 'tryFileHandle' does not exist on type 'Loader'.
          if (!this.loadInfo && !this.tryFileHandle) {
            // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'Loader'.
            this.state = "errored";
            // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'Loader'.
            this.error = `\
File URLs can not be entered directly or shared.
You can select a file to upload from the main page by clicking the 'Choose File...' button.`;
            // @ts-expect-error - TS2339 - Property 'errorAllowRetry' does not exist on type 'Loader'.
            this.errorAllowRetry = false;
            return;
          }

          // @ts-expect-error - TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
          source = this.loadInfo;
          break;

        case "proxy":
          sourceUrl = "proxy:" + sourceUrl.slice("proxy://".length);
          break;
      }
    } catch (e) {
      console.log(e);
    }

    if (!source) {
      // @ts-expect-error - TS2322 - Type '{ sourceUrl: any; }' is not assignable to type 'null'.
      source = { sourceUrl };
    }

    // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'Loader'.
    this.state = "started";

    let type = undefined;
    let extraConfig = undefined;

    // @ts-expect-error - TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
    if (this.loadInfo) {
      // @ts-expect-error - TS2531 - Object is possibly 'null'. | TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
      source.newFullImport = this.loadInfo.newFullImport;
      // @ts-expect-error - TS2531 - Object is possibly 'null'. | TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
      source.loadEager = this.loadInfo.loadEager;
      // @ts-expect-error - TS2531 - Object is possibly 'null'. | TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
      source.noCache = this.loadInfo.noCache;

      // @ts-expect-error - TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
      if (this.loadInfo.extraConfig) {
        // @ts-expect-error - TS2339 - Property 'loadInfo' does not exist on type 'Loader'.
        extraConfig = this.loadInfo.extraConfig;
      }
      // todo: too special case?
      if (
        sourceUrl.startsWith("proxy:") &&
        extraConfig &&
        // @ts-expect-error - TS2339 - Property 'recording' does not exist on type 'never'.
        extraConfig.recording
      ) {
        // @ts-expect-error - TS2322 - Type '"recordingproxy"' is not assignable to type 'undefined'.
        type = "recordingproxy";
      }
    }

    const msg = {
      msg_type: "addColl",
      // @ts-expect-error - TS2339 - Property 'coll' does not exist on type 'Loader'.
      name: this.coll,
      extraConfig,
      type,
      skipExisting: true,
      file: source,
    };

    if (!navigator.serviceWorker.controller) {
      await new Promise((resolve) => {
        navigator.serviceWorker.addEventListener("controllerchange", () =>
          // @ts-expect-error - TS2794 - Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?
          resolve(),
        );
      });
    }

    // @ts-expect-error - TS2339 - Property 'worker' does not exist on type 'Loader'.
    if (this.worker) {
      // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type 'Loader'.
      if (!this.noWebWorker) {
        // @ts-expect-error - TS2339 - Property 'worker' does not exist on type 'Loader'.
        this.worker.postMessage(msg);
      } else {
        // @ts-expect-error - TS2531 - Object is possibly 'null'.
        navigator.serviceWorker.controller.postMessage(msg);

        // ping service worker with messages to avoid shutdown while loading
        // (mostly for Firefox)
        // @ts-expect-error - TS2339 - Property 'pingInterval' does not exist on type 'Loader'.
        this.pingInterval = setInterval(() => {
          // @ts-expect-error - TS2531 - Object is possibly 'null'.
          navigator.serviceWorker.controller.postMessage({ msg_type: "ping" });
        }, 15000);
      }
    }
  }

  googledriveInit() {
    // @ts-expect-error - TS2339 - Property '_gdWait' does not exist on type 'Loader'. | TS2339 - Property '_gdResolve' does not exist on type 'Loader'.
    this._gdWait = new Promise((resolve) => (this._gdResolve = resolve));
    // @ts-expect-error - TS2339 - Property '_gdWait' does not exist on type 'Loader'.
    return this._gdWait;
  }

  async onLoadReady(event) {
    // @ts-expect-error - TS2339 - Property '_gdResolve' does not exist on type 'Loader'.
    if (this._gdResolve) {
      //const digest = await digestMessage(url, 'SHA-256');
      //this.coll = "id-" + digest.slice(0, 12);

      // @ts-expect-error - TS2339 - Property '_gdResolve' does not exist on type 'Loader'.
      this._gdResolve(event.detail);
    }
  }

  onCancel() {
    // @ts-expect-error - TS2339 - Property 'worker' does not exist on type 'Loader'.
    if (!this.worker) {
      return;
    }

    // @ts-expect-error - TS2339 - Property 'coll' does not exist on type 'Loader'.
    const msg = { msg_type: "cancelLoad", name: this.coll };

    // @ts-expect-error - TS2339 - Property 'noWebWorker' does not exist on type 'Loader'.
    if (!this.noWebWorker) {
      // @ts-expect-error - TS2339 - Property 'worker' does not exist on type 'Loader'.
      this.worker.postMessage(msg);
      return;
    }

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(msg);
      // @ts-expect-error - TS2339 - Property 'pingInterval' does not exist on type 'Loader'.
      if (this.pingInterval) {
        // @ts-expect-error - TS2339 - Property 'pingInterval' does not exist on type 'Loader'.
        clearInterval(this.pingInterval);
      }
    }
  }

  updated(changedProperties) {
    if (
      // @ts-expect-error - TS2339 - Property 'sourceUrl' does not exist on type 'Loader'.
      (this.sourceUrl && changedProperties.has("sourceUrl")) ||
      changedProperties.has("tryFileHandle")
    ) {
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
          <wr-anim-logo class="logo" size="96px"></wr-anim-logo>
        </div>
        ${
          // @ts-expect-error - TS2339 - Property 'embed' does not exist on type 'Loader'.
          !this.embed
            ? html` <div class="level">
                <p class="level-item">
                  Loading&nbsp;<b>${
                    // @ts-expect-error - TS2339 - Property 'sourceUrl' does not exist on type 'Loader'.
                    this.sourceUrl
                  }</b>...
                </p>
              </div>`
            : ""
        }
        <div class="level">
          <div class="level-item has-text-centered">
            ${this.renderContent()}
          </div>
        </div>
      </section>
    `;
  }

  renderContent() {
    // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'Loader'.
    switch (this.state) {
      case "googledrive":
        return html`<wr-gdrive
          .sourceUrl=${
            // @ts-expect-error - TS2339 - Property 'sourceUrl' does not exist on type 'Loader'.
            this.sourceUrl
          }
          @load-ready=${this.onLoadReady}
        ></wr-gdrive>`;

      case "started":
        return html` <div class="progress-div">
          <progress
            id="progress"
            class="progress is-primary is-large"
            value="${
              // @ts-expect-error - TS2339 - Property 'percent' does not exist on type 'Loader'.
              this.percent
            }"
            max="100"
          ></progress>
          <label class="progress-label" for="progress"
            >${
              // @ts-expect-error - TS2339 - Property 'percent' does not exist on type 'Loader'.
              this.percent
            }%</label
          >

          ${
            // @ts-expect-error - TS2339 - Property 'currentSize' does not exist on type 'Loader'. | TS2339 - Property 'totalSize' does not exist on type 'Loader'.
            this.currentSize && this.totalSize
              ? html` <div class="loaded-prog">
                  Loaded
                  <b
                    >${
                      // @ts-expect-error - TS2339 - Property 'currentSize' does not exist on type 'Loader'.
                      prettyBytes(this.currentSize)
                    }</b
                  >
                  of

                  <b
                    >${
                      // @ts-expect-error - TS2339 - Property 'totalSize' does not exist on type 'Loader'.
                      prettyBytes(this.totalSize)
                    }</b
                  >

                  ${
                    // @ts-expect-error - TS2339 - Property 'extraMsg' does not exist on type 'Loader'.
                    this.extraMsg &&
                    // @ts-expect-error - TS2339 - Property 'extraMsg' does not exist on type 'Loader'.
                    html` <p class="extra-msg">(${this.extraMsg})</p> `
                  }
                </div>`
              : html``
          }
          ${
            // @ts-expect-error - TS2339 - Property 'embed' does not exist on type 'Loader'.
            !this.embed
              ? html` <button
                  @click="${this.onCancel}"
                  class="button is-danger"
                >
                  Cancel
                </button>`
              : ""
          }
        </div>`;

      case "errored":
        return html` <div class="has-text-left">
          <div class="error has-text-danger">
            ${
              // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'Loader'.
              this.error
            }
          </div>
          <div>
            ${
              // @ts-expect-error - TS2339 - Property 'errorAllowRetry' does not exist on type 'Loader'.
              this.errorAllowRetry
                ? html` <a
                    class="button is-warning"
                    @click=${() => window.parent.location.reload()}
                    >Try Again</a
                  >`
                : ""
            }
            ${
              // @ts-expect-error - TS2339 - Property 'embed' does not exist on type 'Loader'.
              this.embed
                ? html``
                : html` <a href="/" class="button is-warning">Back</a>`
            }
          </div>
        </div>`;

      case "permission_needed":
        return html` <div class="has-text-left">
          <div class="">
            Permission is needed to reload the archive file. (Click
            <i>Cancel</i> to cancel loading this archive.)
          </div>
          <button @click="${this.onAskPermission}" class="button is-primary">
            Show Permission
          </button>
          <a href="/" class="button is-danger">Cancel</a>
        </div>`;

      case "waiting":
      default:
        return html`<progress
          class="progress is-primary is-large"
          style="max-width: 400px"
        ></progress>`;
    }
  }

  async onAskPermission() {
    // @ts-expect-error - TS2339 - Property 'fileHandle' does not exist on type 'Loader'.
    const result = await this.fileHandle.requestPermission({ mode: "read" });
    if (result === "granted") {
      this.doLoad();
    }
  }
}

customElements.define("wr-loader", Loader);

export { Loader };
