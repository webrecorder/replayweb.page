import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import fasSortDown from '@fortawesome/fontawesome-free/svgs/solid/sort-down.svg';
import fasSortUp from '@fortawesome/fontawesome-free/svgs/solid/sort-up.svg';

const DEFAULT_RESULTS = 100;

// ===========================================================================
class Sorter extends LitElement
{
  constructor() {
    super();
    this.sortedData = [];
    this.data = [];

    this.numResults = DEFAULT_RESULTS;

    this.sortKey = null;
    this.sortDesc = null;

    this.defaultKey = "";
    this.defaultDesc = false;
  }

  static get properties() {
    return {
      id: { type: String },

      defaultKey: {type: String },
      defaultDesc: { type: Boolean },

      //numResults: {type: Number},

      data: { type: Array },
      sortedData: { type: Array },

      sortKey: { type: String },
      sortDesc: { type: Boolean },
    }
  }

  // firstUpdated() {
  //   if (this.sortKey === null && this.defaultKey) {
  //     this.sortKey = localStorage.getItem(`${this.id}:sortKey`) || this.defaultKey;
  //   }
  //   const sortDesc = localStorage.getItem(`${this.id}:sortDesc`);
  //   if (this.sortDesc === null) {
  //     this.sortDesc = !sortDesc ? this.defaultDesc : sortDesc === "1";
  //   }
  // }

  updated(changedProperties) {
    const keyChanged = changedProperties.has("sortKey");
    const descChanged = changedProperties.has("sortDesc");
    const dataChanged = changedProperties.has("data");
    const numResultsChanged = changedProperties.has("numResults");

    if (changedProperties.has("defaultKey")) {
      this.sortKey = this.defaultKey;
    }

    if (changedProperties.has("defaultDesc")) {
      this.sortDesc = this.defaultDesc;
    }

    if (keyChanged) {
      localStorage.setItem(`${this.id}:sortKey`, this.sortKey);
    }
    if (descChanged) {
      localStorage.setItem(`${this.id}:sortDesc`, this.sortDesc ? "1" : "0");
    }
    if (keyChanged || descChanged || dataChanged) {
      this.sortData();
    }
    if (dataChanged) {

    }
    //if (numResultsChanged && !dataChanged) {
      //this.sendSortChanged();
    //}
  }

  sortData() {
    this.sortedData = [...this.data];
    this.numResults = DEFAULT_RESULTS;

    if (this.sortKey === "") {
      if (this.sortDesc) {
        this.sortedData.reverse();
      }
    } else {
      this.sortedData.sort((first, second) => {
        if (first[this.sortKey] === second[this.sortKey]) {
          return 0;
        }

        return (this.sortDesc == (first[this.sortKey] < second[this.sortKey])) ? 1 : -1;
      });
    }

    this.sendSortChanged();
  }

  sendSortChanged() {
    const detail = {
      sortKey: this.sortKey,
      sortDesc: this.sortDesc,
      sortedData: this.sortedData.slice(0, this.numResults)
    };
    this.dispatchEvent(new CustomEvent("sort-changed", {detail}));
  }

  getMore(more = 100) {
    if (this.numResults >= this.sortedData.length) {
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
      <select id="sort-select" @change=${(e) => this.sortKey = e.currentTarget.value}>
      ${this.sortKeys.map((sort) => html`
        <option value="${sort.key}" ?selected="${sort.key === this.sortKey}">Sort By: ${sort.name}
        </option>
      `)}
      </select>
    </div>
    <button @click=${(e) => this.sortDesc = !this.sortDesc} class="button is-small">
      <span>Order:</span>
      <span class="is-sr-only">${this.sortDesc ? "Ascending" : "Descending"}</span>
      <span class="icon"><fa-icon aria-hidden="true" .svg=${this.sortDesc ? fasSortUp : fasSortDown}></span>
    </button>`;
  }
}

customElements.define("wr-sorter", Sorter);

export { Sorter };
