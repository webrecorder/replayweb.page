import { LitElement, html, css, type PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { wrapCss, apiPrefix } from "./misc";

import fasArrowUp from "@fortawesome/fontawesome-free/svgs/solid/angle-double-up.svg";
import fasArrowDown from "@fortawesome/fontawesome-free/svgs/solid/angle-double-down.svg";

import fasSearch from "@fortawesome/fontawesome-free/svgs/solid/search.svg";

import type { ItemType } from "./types";

import "./item-info";

// ===========================================================================
class ItemIndex extends LitElement {
  @property({ type: Array })
  items: ItemType[] = [];

  @property({ type: String })
  query = "";

  @property({ type: Array })
  filteredItems: ItemType[] = [];

  @property({ type: Array })
  sortedItems: ItemType[] = [];

  @property({ type: Boolean })
  hideHeader = false;

  @property({ type: String })
  dateName = "Date Loaded";

  @property({ type: String })
  headerName = "Loaded Archives";

  @state()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO fixme
  protected _deleting: any = {};

  private get typeFilter() {
    return "";
  }
  private get indexParams() {
    return "";
  }

  constructor() {
    super();

    this.hideHeader = localStorage.getItem("index:hideHeader") === "1";
  }

  get sortKeys() {
    return [
      { key: "title", name: "Title" },

      { key: "sourceUrl", name: "Source" },

      { key: "ctime", name: this.dateName },

      { key: "size", name: "Total Size" },
    ];
  }

  firstUpdated() {
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.loadItems();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("hideHeader")) {
      localStorage.setItem("index:hideHeader", this.hideHeader ? "1" : "0");
    }
    if (changedProperties.has("items") || changedProperties.has("query")) {
      this.filter();
    }
  }

  filter() {
    if (!this.query) {
      this.filteredItems = this.items;
      return;
    }

    this.filteredItems = [];

    for (const item of this.items) {
      if (
        item.sourceUrl.indexOf(this.query) >= 0 ||
        item.filename.indexOf(this.query) >= 0 ||
        Boolean(item.loadUrl && item.loadUrl.indexOf(this.query) >= 0) ||
        (item.title && item.title.indexOf(this.query) >= 0)
      ) {
        this.filteredItems.push(item);
      }
    }
  }

  async loadItems() {
    const resp = await fetch(`${apiPrefix}/coll-index?${this.indexParams}`);
    try {
      if (resp.status !== 200) {
        throw new Error("Invalid API Response, Retry");
      }
      const json = await resp.json();
      this.items = json.colls.map((item: ItemType) => {
        item.title = item.title ?? item.filename;
        return item;
      });

      this._deleting = {};
      this.sortedItems = [];
    } catch (e) {
      // likely no sw registered yet, or waiting for new sw to register, retry again
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      setTimeout(() => this.loadItems(), 500);
    }
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'event' implicitly has an 'any' type.
  async onDeleteItem(event) {
    event.preventDefault();
    event.stopPropagation();

    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!this.sortedItems) {
      return;
    }

    const index = Number(event.currentTarget.getAttribute("data-coll-index"));

    const item = this.sortedItems[index];

    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!item || this._deleting[item.sourceUrl]) {
      return;
    }

    this._deleting[item.sourceUrl] = true;
    this.requestUpdate();

    const resp = await fetch(`${apiPrefix}/c/${item.id}`, { method: "DELETE" });
    if (resp.status === 200) {
      const json = await resp.json();
      this.items = json.colls;
    }
    return false;
  }

  static get styles() {
    return wrapCss(ItemIndex.compStyles);
  }

  static get compStyles() {
    return css`
      :host {
        overflow-y: auto;
        min-width: 0;
      }
      .size {
        margin-right: 20px;
      }
      .extra-padding {
        padding: 2em;
      }
      .no-top-padding {
        padding-top: 1em;
      }
      .panel-heading {
        font-size: 0.85rem;
      }
      .is-loading {
        line-height: 1.5em;
        height: 1.5em;
        border: 0px;
        background-color: transparent !important;
        width: auto;
      }
      div.panel.is-light {
        margin-bottom: 2em;
      }

      fa-icon {
        vertical-align: middle;
      }

      .panel-color {
        background-color: rgb(210, 249, 214);
      }

      .copy {
        color: black;
        margin: 0px;
        margin: 0;
        line-height: 0.4em;
        padding: 6px;
        border-radius: 10px;
        position: absolute;
      }
      .copy:active {
        background-color: lightgray;
      }
      .sort-header {
        padding: 0.3rem 0.3rem 0.3rem 0;
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
      }
      .sort-header .control {
        flex: auto;

        padding-left: 0.3rem;
        width: initial;
      }
      wr-sorter {
        padding: 0.3rem;
      }
      a.button.is-small.collapse {
        border-radius: 6px;
      }
      .icon.is-left {
        margin-left: 0.5rem;
      }
      .coll-block {
        position: relative;
      }
      .delete-button {
        width: 32px;
        position: absolute;
        top: 10px;
        right: 10px;
      }
      #sort-select::after {
        display: none;
      }
      header {
        transform: translate(0px, 0px);
        transition: all 0.5s ease 0s;
        visibility: visible;
        display: flex;
        flex-direction: column;
      }
      header.closed {
        transform: translate(0, -100%);
        transition: all 0.5s ease 0s;
        visibility: visible;
        height: 269px;
        margin-top: -269px;
      }
    `;
  }

  renderHeader() {
    return html`<h2 class="panel-heading panel-color">
      <span>${this.headerName}</span>
    </h2>`;
  }

  renderSearchHeader() {
    return "";
  }

  render() {
    const hasHeader = this.childElementCount > 0;

    return html`
      <header class="${this.hideHeader ? "closed" : ""}">
        <slot name="header"></slot>
      </header>
      <section class="section no-top-padding">
        <div class="sort-header is-small">
          ${hasHeader
            ? html`
        <button @click=${() =>
          (this.hideHeader =
            !this.hideHeader)} class="collapse button is-small">
          <span class="icon"><fa-icon .svg=${
            this.hideHeader ? fasArrowDown : fasArrowUp
          }></span>
          <span>${
            this.hideHeader ? "Show " : "Hide"
          } <span class="is-sr-only">Header</span></span>
        </button>`
            : ""}
        </div>
        <div class="panel">
          ${this.renderHeader()}
          ${this.items.length
            ? html`
                <div class="panel-block sort-header is-small">
                  ${this.renderSearchHeader()}
                  <div class="control has-icons-left has-addons">
                    <input
                      type="text"
                      class="input is-small"
                      @input="${(e: Event) =>
                        (this.query = (
                          e.currentTarget as HTMLInputElement
                        ).value)}"
                      .value="${this.query}"
                      placeholder="Search by Archive Title or Source"
                    />
                    <span class="icon is-left is-small">
                      <fa-icon .svg="${fasSearch}"></fa-icon>
                    </span>
                  </div>
                  <wr-sorter
                    id="index"
                    sortKey="ctime"
                    ?sortDesc="${true}"
                    .sortKeys="${this.sortKeys}"
                    .data="${this.filteredItems}"
                    @sort-changed="${(
                      e: CustomEvent<{
                        sortKey: string | null;
                        sortDesc: boolean | null;
                        sortedData: ItemType[];
                      }>,
                    ) => (this.sortedItems = e.detail.sortedData)}"
                  >
                  </wr-sorter>
                </div>

                <div class="coll-list">
                  ${// TODO: Fix this the next time the file is edited.
                  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                  this.sortedItems?.map(
                    (item, i) => html`
                      <div class="coll-block panel-block">
                        ${this.renderItemInfo(item)}
                        ${!this._deleting[item.sourceUrl]
                          ? html`
                              <button
                                class="delete delete-button"
                                aria-label="Unload Item"
                                title="Unload Item"
                                data-coll-index="${i}"
                                @click="${this.onDeleteItem}"
                              ></button>
                            `
                          : html` <span
                              class="button delete-button is-loading is-static"
                            >
                              Deleting
                            </span>`}
                      </div>
                    `,
                  )}
                </div>
              `
            : html`
                <div class="panel-block extra-padding">
                  ${
                    // TODO: Fix this the next time the file is edited.
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    this.sortedItems === null
                      ? html`<i>Loading Archives...</i>`
                      : this.renderEmpty()
                  }
                </div>
              `}
        </div>
      </section>
    `;
  }

  renderItemInfo(item: ItemType) {
    return html`<wr-item-info .item=${item}></wr-item-info>`;
  }

  renderEmpty() {
    return html`
      <p>
        Don't have any web archives yet? Check out
        <a
          href="https://chrome.google.com/webstore/detail/webrecorder-archivewebpag/fpeoodllldobpkbkabpblcfaogecpndd"
          target="blank"
          >ArchiveWeb.page</a
        >
        to save pages as you browse the web, or
        <a href="https://browsertrix.com">sign up for Browsertrix</a> to archive
        entire websites with automated crawling!
      </p>
    `;
  }
}

customElements.define("wr-item-index", ItemIndex);

export { ItemIndex };
