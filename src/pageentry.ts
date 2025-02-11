import prettyBytes from "pretty-bytes";

import { LitElement, html, css, unsafeCSS, type PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";

import "keyword-mark-element/lib/keyword-mark.js";

import { getReplayLink } from "./pageutils";

import { wrapCss } from "./misc";
import type { URLResource } from "./types";

// ===========================================================================
class PageEntry extends LitElement {
  @property({ type: String })
  query = "";

  @property({ type: String })
  textSnippet: string | null = "";

  @property({ type: Object })
  page: URLResource | null = null;

  @property({ type: String })
  replayPrefix = "";

  @property({ type: Boolean })
  deleting = false;

  @property({ type: Boolean })
  selected = false;

  @property({ type: Boolean })
  editable = false;

  @property({ type: Number })
  index = 0;

  @property({ type: Boolean })
  isCurrent = false;

  @property({ type: Boolean })
  isSidebar = false;

  @state()
  thumbnailValid = true;

  @state()
  iconValid = true;

  static get styles() {
    return wrapCss(css`
      :host {
        min-height: min-content;
        width: 100%;
        word-break: break-all;
        position: relative;
        display: flex;
        flex-direction: row;
        background: transparent;
      }

      :host(.sidebar) .column {
        width: unset !important;
      }

      :host(.sidebar) {
        width: 100%;
      }

      .check-select {
        padding: 0 1em 0 0.5em;
        height: 100%;
        margin: auto 0 auto 0;
      }

      .columns {
        width: 100%;
      }

      /* Override Bulma to add the tiniest margin, so the focus indicator isn't obscured */
      .columns {
        margin-top: calc(-0.75rem + 2px);
      }
      .columns:last-child {
        margin-bottom: calc(-0.75rem + 2px);
      }

      .favicon {
        display: inline-block;
        vertical-align: text-bottom;
      }

      .media-left .favicon {
        width: 2rem;
        height: 2rem;
      }
      .media-left img.favicon {
        filter: drop-shadow(1px 1px 2px grey);
      }

      .media-content .favicon {
        width: 1.15rem;
        height: 1.15rem;
        margin: 0 0.25rem;
      }

      .media-left {
        width: 6rem;
        align-self: center;
        text-align: center;
      }

      .delete-button {
        position: absolute;
        top: 8px;
        right: 8px;
      }

      .delete:hover {
        background-color: rgb(241, 70, 104);
      }

      .is-loading {
        line-height: 1.5em;
        height: 1.5em;
        border: 0px;
        background-color: transparent !important;
        width: auto;
      }

      @media screen and (max-width: 768px) {
        ${PageEntry.sidebarStyles()}
      }

      ${PageEntry.sidebarStyles(unsafeCSS`:host(.sidebar)`)}

      .current a {
        background-color: rgb(207, 243, 255);
        font-style: italic;
        display: block;
      }

      .current .curr-page {
        font-style: italic;
        font-size: 9px;
        color: black;
      }

      .is-inline-date {
        display: none;
      }

      .media-content a {
        display: block;
      }
    `);
  }

  static sidebarStyles(prefix = css``) {
    return css`
      ${prefix} .col-date {
        margin-left: calc(24px + 1rem);
        display: none;
      }
      ${prefix} .col-date div {
        display: inline;
      }
      ${prefix} .col-index {
        display: none;
      }
      ${prefix} .columns {
        display: flex;
        flex-direction: column-reverse;
      }
      ${prefix} .is-inline-date {
        display: initial !important;
        font-style: italic;
      }
      ${prefix} .media-left {
        padding-left: 0.75rem;
      }
    `;
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("page") || changedProperties.has("query")) {
      this.updateSnippet();
      this.deleting = false;
    }
  }

  render() {
    const p = this.page!;
    const date = this.page!.date;

    const hasSize = typeof p.size === "number";

    const editable = this.editable && !this.isSidebar;

    return html`
      ${editable
        ? html` <div class="check-select">
            <label class="checkbox">
              <input
                @change=${this.onSendSelToggle}
                type="checkbox"
                .checked="${this.selected}"
              />
            </label>
          </div>`
        : ""}

      <div class="columns">
        ${this.index
          ? html`
              <div class="column col-index is-1 is-size-7">${this.index}.</div>
            `
          : ""}
        <div class="column col-date is-2">
          <div>
            ${
              // TODO: Fix this the next time the file is edited.
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              date ? date.toLocaleDateString() : ""
            }
          </div>
          <div>
            ${
              // TODO: Fix this the next time the file is edited.
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              date ? date.toLocaleTimeString() : ""
            }
          </div>
        </div>
        <div class="column">
          <div class="media">
            <figure class="media-left">${this.renderPageIcon()}</figure>
            <div class="media-content ${this.isCurrent ? "current" : ""}">
              <div role="heading" aria-level="${this.isSidebar ? "4" : "3"}">
                <a
                  @dblclick="${this.onReload}"
                  @click="${this.onReplay}"
                  href="${getReplayLink(
                    "pages",
                    this.page!.url,
                    this.page!.timestamp!,
                    this.page!.waczhash,
                  )}"
                >
                  <p class="is-size-6 has-text-weight-bold has-text-link text">
                    <keyword-mark keywords="${this.query}"
                      >${p.title || p.url}</keyword-mark
                    >
                  </p>
                  <p class="has-text-dark text">
                    <keyword-mark keywords="${this.query}"
                      >${p.url}</keyword-mark
                    >${this.thumbnailValid ? this.renderFavicon() : ""}
                  </p>
                  <p class="has-text-grey-dark text is-inline-date">
                    ${
                      // TODO: Fix this the next time the file is edited.
                      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                      date ? date.toLocaleString() : ""
                    }
                  </p>
                </a>
                ${this.textSnippet
                  ? html` <div class="text">
                      <keyword-mark keywords="${this.query}"
                        >${this.textSnippet}</keyword-mark
                      >
                    </div>`
                  : html``}
              </div>
              ${hasSize
                ? html` <div class="media-right" style="margin-right: 2em">
                    ${prettyBytes(p.size)}
                  </div>`
                : ""}
            </div>
          </div>
        </div>

        ${editable
          ? html` ${!this.deleting
              ? html` <button
                  @click="${this.onSendDeletePage}"
                  class="delete delete-button"
                ></button>`
              : html`
                  <button
                    class="button is-loading delete-button is-static"
                  ></button>
                `}`
          : ""}
      </div>
    `;
  }

  private getReplayPrefix() {
    const waczhash = this.page!.waczhash ? `:${this.page!.waczhash}/` : "";
    const ts = this.page!.timestamp || "";
    return this.replayPrefix + "/" + waczhash + ts + "id_";
  }

  private renderPageIcon() {
    if (!this.thumbnailValid) {
      return this.renderFavicon();
    }
    return html`<img
      class="thumbnail"
      @error=${() => (this.thumbnailValid = false)}
      src=${`${this.getReplayPrefix()}/urn:thumbnail:${this.page!.url}`}
      loading="lazy"
    />`;
  }

  private renderFavicon() {
    if (!this.iconValid || !this.page!.favIconUrl) {
      return;
    }
    return html`<img
      class="favicon"
      @error=${() => (this.iconValid = false)}
      src=${`${this.getReplayPrefix()}/${this.page!.favIconUrl}`}
      loading="lazy"
    />`;
  }

  updateSnippet() {
    const oldVal = this.textSnippet;

    if (!this.query || !this.page!.text) {
      this.textSnippet = null;
      this.requestUpdate("textSnippet", oldVal);
      return;
    }

    let textContent = this.page!.text;
    let query = this.query;

    let inx = textContent.indexOf(this.query);

    if (inx < 0) {
      const textLower = textContent.toLowerCase();
      const queryLower = query.toLowerCase();

      inx = textLower.indexOf(queryLower);

      if (inx < 0) {
        this.textSnippet = null;
        this.requestUpdate("textSnippet", oldVal);
        return;
      }

      textContent = textLower;
      query = queryLower;
    }

    //let lastInx = textContent.lastIndexOf(query);
    let lastInx = inx;

    inx = Math.max(inx - 100, 0);
    lastInx = Math.min(lastInx + 200, textContent.length);

    if (inx === 0 && lastInx === textContent.length) {
      this.textSnippet = textContent;
    } else {
      this.textSnippet = "..." + textContent.slice(inx, lastInx) + "...";
    }

    this.requestUpdate("textSnippet", oldVal);
  }

  onReplay(event: Event, reload = false) {
    event.preventDefault();

    const data = {
      url: this.page!.url,
      ts: this.page!.timestamp,
      waczhash: this.page!.waczhash,
    };
    this.sendChangeEvent(data, reload);
    return false;
  }

  onReload(event: Event) {
    return this.onReplay(event, true);
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'data' implicitly has an 'any' type.
  sendChangeEvent(data, reload: boolean) {
    this.dispatchEvent(
      new CustomEvent("coll-tab-nav", {
        bubbles: true,
        composed: true,
        detail: { data, reload },
      }),
    );
  }

  onSendDeletePage() {
    const page = this.page;
    this.dispatchEvent(new CustomEvent("delete-page", { detail: { page } }));
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'event' implicitly has an 'any' type.
  onSendSelToggle(event) {
    const page = this.page!.id;
    const selected = event.currentTarget.checked;
    this.dispatchEvent(
      new CustomEvent("sel-page", { detail: { page, selected } }),
    );
  }
}

customElements.define("wr-page-entry", PageEntry);

export { PageEntry };
