"use strict";

import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import { getTS } from './pageutils';

import FlexSearch from 'flexsearch';
import "keyword-mark-element/lib/keyword-mark.js";

import fasSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg';


// ===========================================================================
class Pages extends LitElement
{
  constructor() {
    super();
    this.filteredPages = [];
    this.sortedPages = [];
    this.query = "";
    this.flex = null;
    this.newQuery = null;
    this.loading = false;

    this.currList = 0;

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
      currList: { type: Number },

      filteredPages: { type: Array },
      sortedPages: { type: Array },

      query: { type: String },

      loading: { type: Boolean },
    }
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
      this.updateTextSearch();
      this.filter();
    } else if (changedProperties.has("query") || changedProperties.has("currList")) {
      this.filter();
    }
    if (changedProperties.has("active") && this.active) {
      if (this.changeNeeded) {
        this.filter();
      }
    }
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
      this.filteredPages = this.collInfo.pages;
    }

    if (this.currList !== 0) {
      await this.filterCurated();
    }

    this.loading = false;
    this.changeNeeded = false;
    const data = {query: this.query, currList: this.currList};
    this.sendChangeEvent(data);
  }

  async filterCurated() {
    const resp = await fetch(`${this.collInfo.apiPrefix}/curated/${this.currList}`);
    const json = await resp.json();

    this.sortedPages = [];

    for (const c of json.curated) {
      for (const p of this.filteredPages) {
        if (p.id === c.page) {
          this.sortedPages.push(p);
          break;
        }
      }
    }
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

    this.flex.add(this.collInfo.pages);
  }

  static get styles() {
    return wrapCss(css`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .columns {
        width: 100%;
        justify-self: stretch;
        margin-left: 0;
      }
  
      .column.main-content {
        margin: 12px 0px 0px 0px;
        padding: 0 0.75em 0 0.75em;
        max-height: calc(100% - 0.75em);
        display: flex;
        flex-direction: column;
        height: calc(100% - 1.2em);
      }

      @media screen and (min-width: 768px) {
        .columns {
          max-height: 100%;
          height: 100%;
          margin-top: 0.75em;
        }
  
        .column.sidebar {
          max-height: 100%;
          overflow-y: auto;
        }
      }
  
      @media screen and (max-width: 767px) {
        .columns {
          position: relative;
          max-height: 100%;
          height: 100%;
        }
  
        .column.sidebar {
          max-height: 150px;
          overflow-y: auto;
          margin-top: 0.75em;
        }
  
        .column.main-content {
          position: relative;
          overflow-y: auto;
  
          border-top: 1px solid black;
          width: 100%;
          height: 100%;
          max-height: calc(100% - 150px - 0.75em);
          padding: 0px;
        }
  
        .menu {
          font-size: 0.80rem;
        }
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
        flex: auto;
        height: 100%;
      }
      .light-blue {
        background-color:  #43daff;
      }
    `);
  }

  onSelectList(event) {
    event.preventDefault();
    this.currList = Number(event.currentTarget.getAttribute("data-list"));
  }

  render() {
    const currList = this.currList;

    return html`
    <div class="columns">
      <div class="column sidebar is-one-fifth">
        <aside class="menu">
          <ul class="menu-list">
            <li>
              <a href="#list-0" data-list="0" class="${currList === 0 ? 'is-active' : ''}"
                @click=${this.onSelectList}>All Pages</a>
              ${this.collInfo.lists.length ? html`
              <p class="menu-label">Page Lists</p>
              <ul class="menu-list">${this.collInfo.lists.map(list => html`
                <li>
                  <a @click=${this.onSelectList} href="#list-${list.id}"
                  data-list="${list.id}" 
                  class="${currList === list.id ? 'is-active' : ''}">${list.title}</a>
                </li>`)}
              </ul>` : ``}
            </li>
          </ul>
        </aside>
      </div>
      <div class="column main-content">
        ${this.renderPages()}
      </div>
    </div>`
  }

  renderPages() {
    const name = this.currList === 0 ? "All Pages" : this.collInfo.lists[this.currList - 1].title;

    return html`
    <nav class="panel">
      <div class="panel-heading light-blue">${this.collInfo.title} - ${name}</div>
      <div class="panel-block">
        <div class="control has-icons-left ${this.loading ? 'is-loading' : ''}">
          <input type="text" class="input" @input="${this.onChangeQuery}" .value="${this.query}" type="text"
          placeholder="Search by Page URL, Title or Text">
          <span class="icon is-left"><fa-icon .svg="${fasSearch}"/></span>
        </div>
      </div>
      <div class="panel-block status">
        <span class="num-results">${this.formatResults()}</span>

        ${this.currList === 0 ? html`
        <wr-sorter id="pages"
        defaultKey="title"
        .sortKeys="${Pages.sortKeys}"
        .data="${this.filteredPages}"
        @sort-changed="${(e) => this.sortedPages = e.detail.sortedData}"
        class="${this.filteredPages.length ? '' : 'is-hidden'}">
        </wr-sorter>` : ``}

      </div>
      <div class="scroller" @scroll="${this.onScroll}">
      ${this.sortedPages.map((p) => html`
      <div class="panel-block"><wr-page-entry query="${this.query}" .page="${p}"></wr-page-entry></div>`)}
      </div>
    </nav>
    `;
  }

  formatResults() {
    if (!this.collInfo || !this.collInfo.pages.length) {
      return html`No Pages defined this archive. Check out <a href="#view=resources">Page Resources</a> to search by URL.`;
    }

    if (this.loading) {
      return "Searching...";
    }

    if (!this.sortedPages.length) {
      return this.query ? "No Pages Found. Try changing the search query." : "No Pages Found";
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
    let date = null;
    try {
      date = new Date(p.ts);
    } catch (e) { }

    return html`
    <div class="columns">
      <div class="column col-date is-one-fifth">
      <div>${date ? date.toLocaleDateString() : ""}</div>
      <div>${date ? date.toLocaleTimeString() : ""}</div>
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