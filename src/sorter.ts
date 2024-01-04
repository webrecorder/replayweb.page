import { LitElement, html, css, type PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";

import { wrapCss } from "./misc";

import fasSortDown from "@fortawesome/fontawesome-free/svgs/solid/sort-down.svg";
import fasSortUp from "@fortawesome/fontawesome-free/svgs/solid/sort-up.svg";

// ===========================================================================
@customElement("wr-sorter")
class Sorter<T = unknown> extends LitElement {
  @property({ attribute: false })
  sortedData: T[] = [];

  @property({ attribute: false })
  data: T[] = [];

  @property({ type: String })
  id!: string;

  @property({ type: Number })
  pageResults = 0;

  @property({ attribute: false })
  numResults = 0;

  @property({ type: String })
  sortKey: string | null = null;

  @property({ type: Boolean })
  sortDesc: boolean | null = null;

  @property({ attribute: false })
  sortKeys?: { key: string; name: string }[];

  firstUpdated() {
    if (this.id) {
      const sortKey = localStorage.getItem(`${this.id}:sortKey`);
      if (sortKey !== null) {
        this.sortKey = sortKey;
      }
      const sortDesc = localStorage.getItem(`${this.id}:sortDesc`);
      if (sortDesc !== null) {
        this.sortDesc = sortDesc === "1";
      }
    }
  }

  updated(changedProperties: PropertyValues<this>) {
    const keyChanged = changedProperties.has("sortKey");
    const descChanged = changedProperties.has("sortDesc");
    const dataChanged = changedProperties.has("data");

    if (keyChanged && this.sortKey !== null) {
      localStorage.setItem(`${this.id}:sortKey`, this.sortKey);
    }

    if (descChanged && this.sortDesc !== null) {
      localStorage.setItem(`${this.id}:sortDesc`, this.sortDesc ? "1" : "0");
    }

    if (keyChanged || descChanged || dataChanged) {
      this.sortData();
    }
  }

  sortData() {
    this.sortedData = [...this.data];
    this.numResults = this.pageResults;

    if (this.sortKey === "") {
      if (this.sortDesc) {
        this.sortedData.reverse();
      }
    } else {
      this.sortedData.sort((first, second) => {
        if (first[this.sortKey!] === second[this.sortKey!]) {
          return 0;
        }

        return this.sortDesc == first[this.sortKey!] < second[this.sortKey!]
          ? 1
          : -1;
      });
    }

    this.sendSortChanged();
  }

  sendSortChanged() {
    const detail = {
      sortKey: this.sortKey,
      sortDesc: this.sortDesc,
      sortedData: this.numResults
        ? this.sortedData.slice(0, this.numResults)
        : this.sortedData,
    };
    this.dispatchEvent(new CustomEvent("sort-changed", { detail }));
  }

  getMore(more = 100) {
    if (this.pageResults && this.numResults >= this.sortedData.length) {
      return;
    }

    this.numResults += more;
    this.sendSortChanged();
  }

  static get styles() {
    return wrapCss(css`
      :host {
        min-width: 100px;
        box-sizing: border-box !important;
      }
      button.button.is-small {
        border-radius: 4px;
      }
    `);
  }

  render() {
    return html`
    <div class="select is-small">
      <select id="sort-select" @change=${(e) =>
        (this.sortKey = e.currentTarget.value)}>

      ${this.sortKeys?.map(
        (sort) => html`
          <option value="${sort.key}" ?selected="${sort.key === this.sortKey}">
            Sort By: ${sort.name}
          </option>
        `,
      )}
      </select>
    </div>
    <button @click=${() =>
      (this.sortDesc = !this.sortDesc)} class="button is-small">
      <span>Order:</span>
      <span class="is-sr-only">${
        this.sortDesc ? "Ascending" : "Descending"
      }</span>
      <span class="icon"><fa-icon aria-hidden="true" .svg=${
        this.sortDesc ? fasSortUp : fasSortDown
      }></span>
    </button>`;
  }
}

export { Sorter };
