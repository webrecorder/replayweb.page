import { LitElement, html, css } from "lit";
import { wrapCss } from "./misc";

import fasSortDown from "@fortawesome/fontawesome-free/svgs/solid/sort-down.svg";
import fasSortUp from "@fortawesome/fontawesome-free/svgs/solid/sort-up.svg";

// ===========================================================================
class Sorter extends LitElement {
  constructor() {
    super();
    // @ts-expect-error - TS2551 - Property 'sortedData' does not exist on type 'Sorter'. Did you mean 'sortData'?
    this.sortedData = [];
    // @ts-expect-error - TS2339 - Property 'data' does not exist on type 'Sorter'.
    this.data = [];

    // @ts-expect-error - TS2339 - Property 'pageResults' does not exist on type 'Sorter'.
    this.pageResults = 0;
    // @ts-expect-error - TS2339 - Property 'numResults' does not exist on type 'Sorter'.
    this.numResults = 0;

    // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
    this.sortKey = null;
    // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'.
    this.sortDesc = null;
  }

  static get properties() {
    return {
      id: { type: String },

      pageResults: { type: Number },

      data: { type: Array },
      sortedData: { type: Array },

      sortKey: { type: String },
      sortDesc: { type: Boolean },
    };
  }

  firstUpdated() {
    if (this.id) {
      const sortKey = localStorage.getItem(`${this.id}:sortKey`);
      if (sortKey !== null) {
        // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
        this.sortKey = sortKey;
      }
      const sortDesc = localStorage.getItem(`${this.id}:sortDesc`);
      if (sortDesc !== null) {
        // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'.
        this.sortDesc = sortDesc === "1";
      }
    }
  }

  updated(changedProperties) {
    const keyChanged = changedProperties.has("sortKey");
    const descChanged = changedProperties.has("sortDesc");
    const dataChanged = changedProperties.has("data");

    // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
    if (keyChanged && this.sortKey !== null) {
      // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
      localStorage.setItem(`${this.id}:sortKey`, this.sortKey);
    }

    // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'.
    if (descChanged && this.sortDesc !== null) {
      // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'.
      localStorage.setItem(`${this.id}:sortDesc`, this.sortDesc ? "1" : "0");
    }

    if (keyChanged || descChanged || dataChanged) {
      this.sortData();
    }
  }

  sortData() {
    // @ts-expect-error - TS2551 - Property 'sortedData' does not exist on type 'Sorter'. Did you mean 'sortData'? | TS2339 - Property 'data' does not exist on type 'Sorter'.
    this.sortedData = [...this.data];
    // @ts-expect-error - TS2339 - Property 'numResults' does not exist on type 'Sorter'. | TS2339 - Property 'pageResults' does not exist on type 'Sorter'.
    this.numResults = this.pageResults;

    // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
    if (this.sortKey === "") {
      // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'.
      if (this.sortDesc) {
        // @ts-expect-error - TS2551 - Property 'sortedData' does not exist on type 'Sorter'. Did you mean 'sortData'?
        this.sortedData.reverse();
      }
    } else {
      // @ts-expect-error - TS2551 - Property 'sortedData' does not exist on type 'Sorter'. Did you mean 'sortData'?
      this.sortedData.sort((first, second) => {
        // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'Sorter'. | TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
        if (first[this.sortKey] === second[this.sortKey]) {
          return 0;
        }

        // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'. | TS2339 - Property 'sortKey' does not exist on type 'Sorter'. | TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
        return this.sortDesc == first[this.sortKey] < second[this.sortKey]
          ? 1
          : -1;
      });
    }

    this.sendSortChanged();
  }

  sendSortChanged() {
    const detail = {
      // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
      sortKey: this.sortKey,
      // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'.
      sortDesc: this.sortDesc,
      // @ts-expect-error - TS2339 - Property 'numResults' does not exist on type 'Sorter'.
      sortedData: this.numResults
        ? // @ts-expect-error - TS2551 - Property 'sortedData' does not exist on type 'Sorter'. Did you mean 'sortData'? | TS2339 - Property 'numResults' does not exist on type 'Sorter'.
          this.sortedData.slice(0, this.numResults)
        : // @ts-expect-error - TS2551 - Property 'sortedData' does not exist on type 'Sorter'. Did you mean 'sortData'?
          this.sortedData,
    };
    this.dispatchEvent(new CustomEvent("sort-changed", { detail }));
  }

  getMore(more = 100) {
    // @ts-expect-error - TS2339 - Property 'pageResults' does not exist on type 'Sorter'. | TS2339 - Property 'numResults' does not exist on type 'Sorter'. | TS2551 - Property 'sortedData' does not exist on type 'Sorter'. Did you mean 'sortData'?
    if (this.pageResults && this.numResults >= this.sortedData.length) {
      return;
    }

    // @ts-expect-error - TS2339 - Property 'numResults' does not exist on type 'Sorter'.
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
        // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
        (this.sortKey = e.currentTarget.value)}>

      ${
        // @ts-expect-error - TS2339 - Property 'sortKeys' does not exist on type 'Sorter'.
        this.sortKeys.map(
          (sort) => html`
            <option
              value="${sort.key}"
              ?selected="${
                // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'Sorter'.
                sort.key === this.sortKey
              }"
            >
              Sort By: ${sort.name}
            </option>
          `,
        )
      }
      </select>
    </div>
    <button @click=${() =>
      // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'. | TS2339 - Property 'sortDesc' does not exist on type 'Sorter'.
      (this.sortDesc = !this.sortDesc)} class="button is-small">
      <span>Order:</span>
      <span class="is-sr-only">${
        // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'.
        this.sortDesc ? "Ascending" : "Descending"
      }</span>
      <span class="icon"><fa-icon aria-hidden="true" .svg=${
        // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'Sorter'.
        this.sortDesc ? fasSortUp : fasSortDown
      }></span>
    </button>`;
  }
}

customElements.define("wr-sorter", Sorter);

export { Sorter };
