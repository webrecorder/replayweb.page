"use strict";

import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import { getTS } from './pageutils';

import FlexSearch from 'flexsearch';
import "keyword-mark-element/lib/keyword-mark.js";
//const FlexSearch = Object;

import fasSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg';


// ===========================================================================
class Pages extends LitElement
{
  constructor() {
    super();
    this.pages = [];
    this.filteredPages = [];
    this.sortedPages = [];
    this.query = "";
    this.flex = null;
    this.newQuery = null;
    this.loading = false;

    this.active = false;
    this.changeNeeded = false;
  }

  static get sortKeys() {
    return [
      {
        "key": "title",
        "name": "Title"
      },
      {
        "key": "ts",
        "name": "Date"
      }
    ];
  }

  static get properties() {
    return {
      active: { type: Boolean},

      collInfo: { type: Object },
      pages: { type: Array },
      filteredPages: { type: Array },
      sortedPages: { type: Array },
      query: { type: String },
      loading: { type: Boolean },
    }
  }

  firstUpdated() {
    //this._ival = window.setInterval(() => {

    //}, 10000);
  }

  _timedUpdate() {
    if (this.newQuery !== null) {
      this.query = this.newQuery;
      this.newQuery = null;
      this.filter();
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("collInfo")) {
      this.doUpdate();
    } else if (changedProperties.has("query")) {
      this.filter();
    }
    if (changedProperties.has("active") && this.active) {
      if (this.changeNeeded) {
        this.filter();
      }
    }
  }

  async doUpdate() {
    const result = await fetch(`${this.collInfo.apiPrefix}/pages`);
    const json = await result.json();
    this.pages = json.pages || [];

    this.updateTextSearch();
    this.filter();
  }

  onChangeQuery(event) {
    this.newQuery = event.currentTarget.value;
    //this.loading = true;
    if (this._ival) {
      window.clearTimeout(this._ival);
    }
    this._ival = window.setTimeout(() => this._timedUpdate(), 250);
  }

  async filter() {
    if (this.loading) {
      return;
    }
    if (!this.active) {
      this.changeNeeded = true;
    }
    this.loading = true;
    if (this.flex && this.query) {
      const result = await this.flex.search(this.query);
      this.filteredPages = result;
    } else {
      this.filteredPages = this.pages;
    }
    this.loading = false;
    this.changeNeeded = false;
    const data = {query: this.query};
    this.sendChangeEvent(data);
  }

  sendChangeEvent(data) {
    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {data}}));
  }

  updateTextSearch() {
    this.flex = new FlexSearch({
      doc: {
        id: "id",
        field: ["url", "title", "text"],
      },
      async: true
    });

    this.flex.add(this.pages);
  }

  static get styles() {
    return wrapCss(css`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 0.75rem 0.75rem 0;
      }

      .scroller {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        flex: auto;
        height: 100%;
      }

      .panel-block:last-child {
        border-bottom: 1px solid rgb(237, 237, 237);
      }
      .panel-block {
        border-left: 1px solid rgb(237, 237, 237);
        border-right: 1px solid rgb(237, 237, 237);
      }
      .panel-block.status {
        justify-content: space-between;
      }
      nav.panel {
        box-shadow: none;
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
      }
      .light-blue {
        background-color:  #43daff;
      }
    `);
  }

  render() {
    return html`
    <nav class="panel">
      <div class="panel-heading light-blue">Pages for: ${this.collInfo.title}</div>
      <div class="panel-block">
        <div class="control has-icons-left ${this.loading ? 'is-loading' : ''}">
          <input type="text" class="input" @input="${this.onChangeQuery}" .value="${this.query}" type="text"
          placeholder="Search by Page URL, Title or Text">
          <span class="icon is-left"><fa-icon .svg="${fasSearch}"/></span>
        </div>
      </div>
      <div class="panel-block status">
        <span class="num-results">${this.formatResults()}</span>
        <wr-sorter id="pages"
        .sortKeys="${Pages.sortKeys}"
        .data="${this.filteredPages}"
        @sort-changed="${(e) => this.sortedPages = e.detail.sortedData}"
        class="${this.filteredPages.length ? '' : 'is-hidden'}">
        </wr-sorter>
      </div>
      <div class="scroller" @scroll="${this.onScroll}">
      ${this.sortedPages.map((p) => html`
      <div class="panel-block"><wr-page-entry query="${this.query}" .page="${p}"></wr-page-entry></div>`)}
      </div>
    </nav>
    `;
  }

  formatResults() {
    if (!this.collInfo || !this.collInfo.numPages) {
      return html`No Pages defined this archive. Check out <a href="#view=resources">Page Resources</a> to search by URL.`;
    }

    if (this.loading) {
      return "Searching...";
    }

    if (!this.sortedPages.length) {
      return "No Pages Found."
    } else if (this.sortedPages.length === 1) {
      return "1 Page";
    } else {
      return `${this.sortedPages.length} Pages`;
    }
  }

  onScroll(event) {
    const element = event.currentTarget;
    const diff = (element.scrollHeight - element.scrollTop) - element.clientHeight;
    if (diff < 40) {
      const sorter = this.renderRoot.querySelector("wr-sorter");
      if (sorter) {
        sorter.getMore();
      }
    }
  }
}

// ===========================================================================
class PageEntry extends LitElement
{
  constructor() {
    super();
    this.query = "";
    this.textSnippet = "";
    this.page = null;
  }

  static get properties() {
    return {
      query: { type: String },
      textSnippet: { type: String },
      page: { type: Object }
    }
  }

  static get styles() {
    return wrapCss(css`
      :host {
        min-height: min-content;
        width: 100%;
        word-break: break-all;
      }

      a {
        word-break: break-all;
      }

      @media screen and (max-width: 767px) {
        .col-date div {
          display: inline;
        }

        .columns {
          display: flex;
          flex-direction: column-reverse;
        }
      }
    `);
  }

  updated(changedProperties) {
    if (changedProperties.has("page") || changedProperties.has("query")) {
      this.updateSnippet();
    }
  }

  render() {
    const p = this.page;
    const date = new Date(p.ts);

    return html`
    <div class="columns">
      <div class="column col-date is-one-fifth">
      <div>${date.toLocaleDateString()}</div>
      <div>${date.toLocaleTimeString()}</div>
      </div>
      <div class="column">
        <a @click="${this.onReplay}" data-url="${p.url}" data-ts="${getTS(date.toISOString())}" href="#">
          <p class="is-size-6 has-text-weight-bold has-text-link text">
          <keyword-mark keywords="${this.query}">${p.title || p.url}</keyword-mark>
          </p>
          <p class="has-text-dark text"><keyword-mark keywords="${this.query}">${p.url}</keyword-mark></p>
        </a>
        ${this.textSnippet ? html`
          <div class="text"><keyword-mark keywords="${this.query}">${this.textSnippet}</keyword-mark></div>` : html``}
      </div>
    </div>`;
  }

  updateSnippet() {
    const oldVal = this.textSnippet;

    if (!this.query || !this.page.text) {
      this.textSnippet = null;
      this.requestUpdate('textSnippet', oldVal);
      return;
    }

    let textContent = this.page.text;
    let query = this.query;

    let inx = textContent.indexOf(this.query);

    if (inx < 0) {
      let textLower = textContent.toLowerCase();
      let queryLower = query.toLowerCase();

      inx = textLower.indexOf(queryLower);

      if (inx < 0) {
        this.textSnippet = null;
        this.requestUpdate('textSnippet', oldVal);
        return;
      }

      textContent = textLower;
      query = queryLower;
    }

    let lastInx = textContent.lastIndexOf(query);

    inx = Math.max(inx - 100, 0);
    lastInx = Math.min(lastInx + 200, textContent.length);

    if (inx === 0 && lastInx === textContent.length) {
      this.textSnippet = textContent;
    } else {
      this.textSnippet = "..." + textContent.slice(inx, lastInx) + "...";
    }

    this.requestUpdate('textSnippet', oldVal);
  }

  onReplay(event) {
    event.preventDefault();
    const data = {
      url: event.currentTarget.getAttribute("data-url"),
      ts: event.currentTarget.getAttribute("data-ts"),
      view: "replay"
    };
    this.sendChangeEvent(data);
    return false;
  }

  sendChangeEvent(data) {
    this.dispatchEvent(new CustomEvent("coll-tab-nav", {bubbles: true, composed: true, detail: {data}}));
  }
}

customElements.define("wr-page-view", Pages);
customElements.define("wr-page-entry", PageEntry);

export { Pages, PageEntry };