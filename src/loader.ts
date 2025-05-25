import { LitElement, html, css, type PropertyValues, nothing } from "lit";
import { IS_APP, wrapCss } from "./misc";
import rwpLogo from "~assets/brand/replaywebpage-icon-color.svg";
import rwpLogoAnimated from "~assets/brand/replaywebpage-icon-color-animated.svg";

import prettyBytes from "pretty-bytes";

import { property } from "lit/decorators.js";
import type { LoadInfo } from "./item";
import { ifDefined } from "lit/directives/if-defined.js";
import { serviceWorkerActivated } from "./swmanager";
import { registerWT } from "./wt";

// ===========================================================================
/**
 * @fires coll-load-cancel
 */
type LoadingState =
  | "started"
  | "waiting"
  | "googledrive"
  | "errored"
  | "permission_needed";

const NO_ANIM_STATES: LoadingState[] = [
  "errored",
  "googledrive",
  "permission_needed",
];

declare let window: Window & {
  electron?: {
    getFileLoadUrl: (sourceUrl: string) => string;
  };
};

class Loader extends LitElement {
  @property({ type: String }) sourceUrl?: string;
  @property({ type: Object }) loadInfo: LoadInfo | null = null;
  @property({ type: String }) state: LoadingState = "waiting";
  @property({ type: Number }) progress = 0;
  @property({ type: Number }) percent = 0;
  @property({ type: Number }) currentSize = 0;
  @property({ type: Number }) totalSize = 0;
  @property({ type: String }) error?: string;
  @property({ type: Number }) total = 0;
  @property({ type: String }) status?: string;
  @property({ type: String }) coll = "";
  @property({ type: String }) embed?: string;
  @property({ type: Boolean }) tryFileHandle = !!window.showOpenFilePicker;
  @property({ type: Boolean }) errorAllowRetry = false;
  @property({ type: String }) extraMsg?: string;
  @property({ type: String }) swName?: string;

  pingInterval: number | NodeJS.Timeout = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- requestPermission() type mismatch
  fileHandle: any = null;
  noWebWorker = false;
  worker?: Worker | null;

  // Google Drive
  _gdWait?: Promise<LoadInfo>;
  _gdResolve!: (value: LoadInfo | PromiseLike<LoadInfo>) => void;

  firstUpdated() {
    this.initMessages();
    //this.doLoad();
  }

  initMessages() {
    this.noWebWorker = true; //Boolean(this.loadInfo && this.loadInfo.noWebWorker);

    if (!this.noWebWorker) {
      this.worker = new Worker(this.swName!);
    } else {
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!navigator.serviceWorker) {
        return;
      }

      // TODO figure out if this is okay?
      this.worker = navigator.serviceWorker as unknown as Worker;
    }

    this.worker.addEventListener(
      "message",
      (
        event: MessageEvent<{
          msg_type: string;
          name: string;
          percent: number;
          error?: string;
          fileHandle: FileSystemHandle | null;
          currentSize?: number;
          totalSize?: number;
          extraMsg?: string;
        }>,
      ) => {
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
                } else if (
                  this.error === "permission_needed" &&
                  event.data.fileHandle
                ) {
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
              this.dispatchEvent(
                new CustomEvent("coll-loaded", { detail: event.data }),
              );

              if (!this.noWebWorker) {
                this.worker?.terminate();
              } else {
                if (this.pingInterval) {
                  clearInterval(this.pingInterval);
                }
              }
              this.worker = null;
            }
            break;
        }
      },
    );
  }

  async doLoad() {
    let sourceUrl = this.sourceUrl;
    let source: LoadInfo | null = null;

    this.percent = this.currentSize = this.totalSize = 0;

    // const noSWError = getSWErrorMsg();

    if (this.loadInfo?.swError) {
      this.state = "errored";
      this.error = this.loadInfo.swError;
      this.errorAllowRetry = false;
      return;
    }

    // custom protocol handlers here...
    try {
      const url = new URL(sourceUrl!);
      const scheme = url.protocol.slice(0, -1);

      switch (scheme) {
        case "googledrive":
          this.state = "googledrive";
          // TODO: Fix this the next time the file is edited.
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          source = (await this.googledriveInit()) ?? null;
          break;

        case "s3":
          source = {
            sourceUrl,
            loadUrl: `https://${url.hostname}.s3.amazonaws.com${url.href.slice(
              url.origin.length,
            )}`,
            name: this.sourceUrl,
          };
          break;

        case "file":
          if (!this.loadInfo && sourceUrl && IS_APP && window.electron) {
            const loadUrl = window.electron.getFileLoadUrl(sourceUrl);
            const name = loadUrl.slice(loadUrl.lastIndexOf("/") + 1);
            source = {
              sourceUrl,
              loadUrl,
              name,
              noCache: true,
            };
          } else {
            if (!this.loadInfo && !this.tryFileHandle) {
              this.state = "errored";
              this.error = `\
  File URLs can not be entered directly or shared.
  You can select a file to upload from the main page by clicking the 'Choose File...' button.`;
              this.errorAllowRetry = false;
              return;
            }

            source = this.loadInfo;
          }
          break;

        case "proxy":
          sourceUrl = "proxy:" + sourceUrl!.slice("proxy://".length);
          break;

        case "magnet":
          source = {
            sourceUrl,
            name: url.searchParams.get("dn") + ".wacz" || "torrent.wacz",
            loadUrl: `magnet://magnet${url.search}`,
          };
          if (!IS_APP) {
            registerWT();
          }
          break;
      }
    } catch (e) {
      console.log(e);
    }

    if (!source) {
      source = { sourceUrl };
    }

    this.state = "started";

    let type = undefined;
    let extraConfig: LoadInfo["extraConfig"] = undefined;

    if (this.loadInfo) {
      source.newFullImport = this.loadInfo.newFullImport;
      source.loadEager = this.loadInfo.loadEager;
      source.noCache = this.loadInfo.noCache;

      if (this.loadInfo.extraConfig) {
        extraConfig = this.loadInfo.extraConfig;
      }
      // todo: too special case?
      if (sourceUrl!.startsWith("proxy:") && extraConfig?.recording) {
        type = "recordingproxy";
      }
    }

    const msg = {
      msg_type: "addColl",
      name: this.coll,
      extraConfig,
      type,
      skipExisting: true,
      file: source,
    };

    await serviceWorkerActivated();

    if (this.worker) {
      if (!this.noWebWorker) {
        this.worker.postMessage(msg);
      } else {
        // @ts-expect-error - TS2531 - Object is possibly 'null'.
        navigator.serviceWorker.controller.postMessage(msg);

        // ping service worker with messages to avoid shutdown while loading
        // (mostly for Firefox)
        this.pingInterval = setInterval(() => {
          // @ts-expect-error - TS2531 - Object is possibly 'null'.
          navigator.serviceWorker.controller.postMessage({ msg_type: "ping" });
        }, 15000);
      }
    }
  }

  // TODO: Fix this the next time the file is edited.
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  googledriveInit() {
    this._gdWait = new Promise((resolve) => (this._gdResolve = resolve));
    return this._gdWait;
  }

  onLoadReady(event: CustomEvent) {
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (this._gdResolve) {
      //const digest = await digestMessage(url, 'SHA-256');
      //this.coll = "id-" + digest.slice(0, 12);

      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this._gdResolve(event.detail);
    }
  }

  async onCancel() {
    if (!this.worker) {
      return;
    }

    const msg = { msg_type: "cancelLoad", name: this.coll };

    if (!this.noWebWorker) {
      this.worker.postMessage(msg);

      await this.updateComplete;

      this.dispatchEvent(
        new CustomEvent("coll-load-cancel", {
          bubbles: true,
          composed: true,
        }),
      );

      return;
    }

    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (navigator.serviceWorker?.controller) {
      navigator.serviceWorker.controller.postMessage(msg);
      if (this.pingInterval) {
        clearInterval(this.pingInterval);
      }
    }
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      Boolean(this.sourceUrl && changedProperties.has("sourceUrl")) ||
      changedProperties.has("tryFileHandle")
    ) {
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.doLoad();
    }
  }

  static get styles() {
    return wrapCss(css`
      :host {
        height: 100%;
        display: flex;
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
        <div class="is-justify-content-center is-flex">
          <fa-icon
            size="5rem"
            style="margin-bottom: 1rem;"
            .svg=${NO_ANIM_STATES.includes(this.state)
              ? rwpLogo
              : rwpLogoAnimated}
            aria-label="ReplayWeb.page Logo"
            role="img"
          ></fa-icon>
        </div>
        ${!this.embed
          ? html` <div class="level">
              <p class="level-item">Loading&nbsp;<b>${this.sourceUrl}</b>...</p>
            </div>`
          : ""}
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
        return html`<wr-gdrive
          .sourceUrl=${this.sourceUrl!}
          @load-ready=${this.onLoadReady}
        ></wr-gdrive>`;

      case "started":
        return html` <div class="progress-div">
          ${!this.currentSize ? nothing : this.renderProgressBar()}
          ${!this.embed
            ? html` <button @click="${this.onCancel}" class="button is-danger">
                Cancel
              </button>`
            : ""}
        </div>`;

      case "errored":
        return html` <div class="has-text-left">
          <div class="error has-text-danger">${this.error}</div>
          <div>
            ${this.errorAllowRetry
              ? html` <a
                  class="button is-warning"
                  @click=${() => window.parent.location.reload()}
                  >Try Again</a
                >`
              : ""}
            ${this.embed
              ? html``
              : html` <a href="/" class="button is-warning">Back</a>`}
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
        return html``;
    }
  }

  private renderProgressBar() {
    // Calculate percentage based on currentSize and totalSize
    // if data is available before actual percent
    const percent =
      this.currentSize && this.totalSize
        ? Math.max(this.percent, (this.currentSize / this.totalSize) * 100)
        : this.percent;
    // Round up <1 percentages
    const displayPercent = percent ? Math.max(percent, 1) : undefined;

    return html`
      <progress
        id="progress"
        class="progress is-primary is-large"
        value=${ifDefined(displayPercent)}
        max="100"
      ></progress>
      ${displayPercent
        ? html`
            <label class="progress-label" for="progress"
              >${displayPercent}%</label
            >
          `
        : nothing}
      ${this.currentSize && this.totalSize
        ? html` <div class="loaded-prog">
            Loaded
            <b>${prettyBytes(this.currentSize)}</b>
            of

            <b>${prettyBytes(this.totalSize)}</b>

            ${this.extraMsg &&
            html` <p class="extra-msg">(${this.extraMsg})</p> `}
          </div>`
        : html``}
    `;
  }

  async onAskPermission() {
    const result = await this.fileHandle?.requestPermission({
      mode: "read",
    });
    if (result === "granted") {
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.doLoad();
    }
  }
}

customElements.define("wr-loader", Loader);

export { Loader };
