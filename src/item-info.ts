import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { wrapCss } from "./misc";
import { map } from "lit/directives/map.js";
import prettyBytes from "pretty-bytes";
import fasCopy from "@fortawesome/fontawesome-free/svgs/regular/copy.svg";
import type { Item } from "./types";

// ===========================================================================
class ItemInfo extends LitElement {
  @property({ type: Object })
  item!: Item | Record<string, never>;

  @property({ type: Boolean })
  detailed = false;

  @property({ type: Boolean })
  canDelete = false;

  static get styles() {
    return wrapCss(ItemInfo.compStyles);
  }

  static get compStyles() {
    return css`
      .columns {
        width: 100%;
      }
      .column {
        word-break: break-word;
        position: relative;
      }

      :host {
        width: 100%;
        height: 100%;
        min-width: 0px;
      }

      :host(.is-list) .columns {
        display: flex !important;
        flex-direction: column;
      }

      :host(.is-list) .column {
        width: 100% !important;
      }

      .col-title:hover {
      }
      .col-title a {
        display: block;
        height: 100%;
      }
      .column:hover > .copy,
      .col-content:hover .copy,
      .copy:hover {
        color: inherit;
      }
      .copy {
        color: black;
        margin: 0px;
        margin: -4px 0 0;
        line-height: 0.4em;
        padding: 6px;
        border-radius: 10px;
        position: absolute;
      }
      .copy:active {
        background-color: lightgray;
      }
      .col-content {
        font-family: monospace;
        font-size: 14px;
        color: #1f2937;
      }
      .minihead {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 4px;
      }
    `;
  }

  renderSource() {
    const item = this.item;
    return html`
      <div class="column is-4">
        <p class="minihead">Source</p>
        <div class="col-content">
          ${item.sourceUrl &&
          (item.sourceUrl.startsWith("http://") ||
            item.sourceUrl.startsWith("https://"))
            ? html` <a href="${item.sourceUrl}">${item.sourceUrl}</a> `
            : html` ${item.sourceUrl}`}
          ${item.sourceUrl && item.sourceUrl.startsWith("googledrive://")
            ? html` <i>(${item.filename})</i>`
            : ""}
          <a @click="${(e) => this.onCopy(e, item.sourceUrl)}" class="copy">
            <fa-icon .svg="${fasCopy}"></fa-icon>
          </a>
        </div>
      </div>
      <div class="column">
        <p class="minihead">Archived Item ID</p>
        <div class="col-content">
          ${item.coll}
          <a @click="${(e) => this.onCopy(e, item.coll)}" class="copy">
            <fa-icon .svg="${fasCopy}"></fa-icon>
          </a>
        </div>
      </div>
      <div class="column is-2">
        <p class="minihead">Date Loaded</p>
        <div class="col-content">
          ${item.ctime ? new Date(item.ctime).toLocaleString() : ""}
        </div>
      </div>
      <div class="column is-2">
        <p class="minihead">Total Size</p>
        <div class="col-content">
          ${prettyBytes(Number(item.totalSize || item.size || 0))}
        </div>
      </div>
    `;
  }

  renderSummaryView() {
    const item = this.item;

    return html` <div class="columns">
      <div class="column col-title is-4">
        <span class="subtitle has-text-weight-bold">
          <a href="?source=${encodeURIComponent(item.sourceUrl)}"
            >${item.name || item.title || item.filename}</a
          >
        </span>
      </div>
      ${this.renderSource()}
    </div>`;
  }

  renderDetailed() {
    const item = this.item;

    const {
      numValid = 0,
      numInvalid = 0,
      domain,
      certFingerprint,
      datapackageHash,
      publicKey,
      software,
    } = this.item.verify || {};

    const certFingerprintUrl = certFingerprint
      ? `https://crt.sh/?q=${certFingerprint}`
      : "";

    return html` <div class="columns">
      ${item.name || item.title
        ? html`<div class="column">
            <p class="minihead">Title</p>
            <div class="col-content">${item.name || item.title}</div>
          </div>`
        : ""}
      <div class="column">
        <p class="minihead">Filename</p>
        <div class="col-content">${item.filename}</div>
      </div>
      ${item.resources
        ? html`<div class="column">
            <p class="minihead">Files</p>
            <ol style="padding: revert">
              ${map(
                item.resources,
                (resource: any) =>
                  html`<li>
                    <a href="${resource.path}">${resource.name + "\n"}</a>
                  </li>`,
              )}
            </ol>
          </div>`
        : ""}
      ${this.renderSource()}
      ${domain
        ? html`
            <div class="column">
              <p class="minihead">Observed By</p>
              <span class="col-content">
                <p>${domain}</p>
                ${certFingerprintUrl
                  ? html`<span
                      ><a target="_blank" href="${certFingerprintUrl}"
                        >View Certificate</a
                      ></span
                    >`
                  : ""}
              </span>
            </div>
          `
        : software
        ? html`
            <div class="column">
              <p class="minihead">Created With</p>
              <div class="col-content">${software || "Unknown"}</div>
            </div>
          `
        : ""}

      <div class="column">
        <p class="minihead">Validation</p>
        <div class="col-content">
          ${numValid > 0 || numInvalid > 0
            ? html` <p>
                ${numValid} hashes
                verified${numInvalid ? html`, ${numInvalid} invalid` : ""}
              </p>`
            : html` Not Available`}
        </div>
      </div>

      <div class="column">
        <p class="minihead">Package Hash</p>
        <div class="col-content">
          ${datapackageHash || "Not Available"}
          <a @click="${(e) => this.onCopy(e, datapackageHash)}" class="copy">
            <fa-icon .svg="${fasCopy}"></fa-icon>
          </a>
        </div>
      </div>

      <div class="column">
        <p class="minihead">Observer Public Key</p>
        <div class="col-content">
          ${publicKey || "Not Available"}
          <a @click="${(e) => this.onCopy(e, publicKey)}" class="copy">
            <fa-icon .svg="${fasCopy}"></fa-icon>
          </a>
        </div>
      </div>

      <div class="column">
        <p class="minihead">Loading Mode</p>
        <div class="col-content">
          ${item.onDemand ? "Download On-Demand" : "Fully Local"}
        </div>
      </div>
    </div>`;
  }

  render() {
    return this.detailed ? this.renderDetailed() : this.renderSummaryView();
  }

  onCopy(event: Event, text: string | undefined) {
    event.preventDefault();
    event.stopPropagation();
    if (text) navigator.clipboard.writeText(text);
    return false;
  }

  onPurge(reload) {
    const detail = { reload };
    this.dispatchEvent(new CustomEvent("item-purge", { detail }));
  }
}

customElements.define("wr-item-info", ItemInfo);

export { ItemInfo };
