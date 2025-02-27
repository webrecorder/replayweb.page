import { LitElement, html, css, nothing } from "lit";
import { property } from "lit/decorators.js";
import { wrapCss } from "./misc";
import { map } from "lit/directives/map.js";
import prettyBytes from "pretty-bytes";

import type { ItemType } from "./types";

import "./components/labeled-field";
import { dateTimeFormatter } from "./utils/dateTimeFormatter";

// ===========================================================================
class ItemInfo extends LitElement {
  @property({ type: Object })
  item: ItemType | Record<string, never> | null = null;

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
        flex: 1 1 auto;
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

  renderSource(showItemID = true) {
    const item = this.item;
    return html`
      <wr-labeled-field
        label="Source"
        copy="${item!.sourceUrl}"
        class="column is-4"
        >${item!.sourceUrl &&
        (item!.sourceUrl.startsWith("http://") ||
          item!.sourceUrl.startsWith("https://"))
          ? html` <a href="${item!.sourceUrl}">${item!.sourceUrl}</a> `
          : html` ${item!.sourceUrl}`}
        ${item!.sourceUrl && item!.sourceUrl.startsWith("googledrive://")
          ? html` <i>(${item!.filename})</i>`
          : nothing}
      </wr-labeled-field>
      ${showItemID
        ? html`<wr-labeled-field
            label="Archived Item ID"
            .copy=${item!.coll}
            class="column"
          >
            ${item!.coll || "No ID"}
          </wr-labeled-field>`
        : nothing}
      <wr-labeled-field label="Date Loaded" class="column is-2">
        ${item!.ctime
          ? dateTimeFormatter.format(new Date(item!.ctime))
          : nothing}
      </wr-labeled-field>
      <wr-labeled-field label="Total Size" class="column is-2">
        ${prettyBytes(Number(item!.totalSize || item!.size || 0))}
      </wr-labeled-field>
    `;
  }

  renderSummaryView() {
    const item = this.item;

    return html` <div class="columns">
      <div class="column col-title is-4">
        <span class="subtitle has-text-weight-bold">
          <a href="?source=${encodeURIComponent(item!.sourceUrl)}"
            >${item!.name || item!.title || item!.filename}</a
          >
        </span>
      </div>
      ${this.renderSource(false)}
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
    } = this.item!.verify || {};

    const certFingerprintUrl = certFingerprint
      ? `https://crt.sh/?q=${certFingerprint}`
      : "";

    return html` <div class="columns">
      ${item!.name || item!.title
        ? html`<wr-labeled-field label="Title" class="column">
            ${item!.name || item!.title}
          </wr-labeled-field>`
        : nothing}
      <wr-labeled-field label="Filename" class="column">
        ${item!.filename}
      </wr-labeled-field>
      ${item!.resources
        ? html`<wr-labeled-field label="Files" class="column">
            <ol style="padding: revert">
              ${map(
                item!.resources,
                (resource) =>
                  html`<li>
                    <a href="${resource.path}">${resource.name + "\n"}</a>
                  </li>`,
              )}
            </ol>
          </wr-labeled-field>`
        : nothing}
      ${this.renderSource()}
      ${domain
        ? html`
            <wr-labeled-field label="Observed By" class="column">
              <p>${domain}</p>
              ${certFingerprintUrl
                ? html`<span
                    ><a target="_blank" href="${certFingerprintUrl}"
                      >&nbsp;View Certificate</a
                    ></span
                  >`
                : nothing}
            </wr-labeled-field>
          `
        : nothing}
      ${software
        ? html`
            <wr-labeled-field label="Created With" class="column">
              ${software || "Unknown"}
            </wr-labeled-field>
          `
        : nothing}

      <wr-labeled-field label="Validation" class="column">
        ${numValid > 0 || numInvalid > 0
          ? html` <p>
              ${numValid} hashes
              verified${numInvalid ? html`, ${numInvalid} invalid` : nothing}
            </p>`
          : html` Not Available`}
      </wr-labeled-field>

      <wr-labeled-field
        label="Package Hash"
        class="column"
        .copy=${datapackageHash}
      >
        ${datapackageHash || "Not Available"}
      </wr-labeled-field>

      <wr-labeled-field
        label="Observer Public Key"
        class="column"
        .copy=${publicKey}
      >
        ${publicKey || "Not Available"}
      </wr-labeled-field>

      <wr-labeled-field label="Loading Mode" class="column">
        ${item!.onDemand ? "Download On-Demand" : "Fully Local"}
      </wr-labeled-field>
    </div>`;
  }

  render() {
    return this.detailed ? this.renderDetailed() : this.renderSummaryView();
  }

  onCopy(event: Event, text: string | undefined) {
    event.preventDefault();
    event.stopPropagation();
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (text) navigator.clipboard.writeText(text);
    return false;
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'reload' implicitly has an 'any' type.
  onPurge(reload) {
    const detail = { reload };
    this.dispatchEvent(new CustomEvent("item-purge", { detail }));
  }
}

customElements.define("wr-item-info", ItemInfo);

export { ItemInfo };
