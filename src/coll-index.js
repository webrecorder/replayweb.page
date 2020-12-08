import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import prettyBytes from 'pretty-bytes';

import fasCopy from '@fortawesome/fontawesome-free/svgs/regular/copy.svg';

import fasArrowUp from '@fortawesome/fontawesome-free/svgs/solid/angle-double-up.svg';
import fasArrowDown from '@fortawesome/fontawesome-free/svgs/solid/angle-double-down.svg';

import fasSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg';


// ===========================================================================
class WrCollIndex extends LitElement
{
  constructor() {
    super();

    this.colls = [];
    this.filteredColls = [];
    this.sortedColls = [];

    this.query = "";

    this.hideHeader = localStorage.getItem("index:hideHeader") === "1";

    this._deleting = {};

    this.dateName = "Date Loaded";
    this.headerName = "Loaded Archives";
  }

  get sortKeys() {
    return [
      {key: "title",
       name: "Title"},

      {key: "sourceUrl",
       name: "Source"},

      {key: "ctime",
       name: this.dateName},

      {key: "size",
       name: "Total Size"}
    ];
  }

  static get properties() {
    return {
      colls: { type: Array },

      query: { type: String },

      filteredColls: { type: Array },

      sortedColls: { type: Array },

      hideHeader: { type: Boolean },

      _deleting: { type: Object },

      dateName: { type: String },
      headerName: { type: String }
    }
  }

  firstUpdated() {
    this.loadColls();
  }

  updated(changedProperties) {
    if (changedProperties.has("hideHeader")) {
      localStorage.setItem("index:hideHeader", this.hideHeader ? "1" : "0");
    }
    if (changedProperties.has("colls") || changedProperties.has("query")) {
      this.filter();
    }
  }

  filter() {
    if (!this.query) {
      this.filteredColls = this.colls;
      return;
    }

    this.filteredColls = [];

    for (const coll of this.colls) {
      if (coll.sourceUrl.indexOf(this.query) >= 0 ||
          coll.filename.indexOf(this.query) >= 0 ||
          (coll.title && coll.title.indexOf(this.query) >= 0)) {
            this.filteredColls.push(coll);
      }
    }
  }

  async loadColls() {
    const resp = await fetch("./wabac/api/index");
    try {
      const json = await resp.json();
      this.colls = json.colls.map((coll) => {
        coll.title = coll.title || coll.filename;
        return coll;
      });
    } catch (e) {
      // likely no sw registered yet
    }

    this._deleting = {};
  }

  async onDeleteColl(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!this.sortedColls) {
      return;
    }

    const index = Number(event.currentTarget.getAttribute("data-coll-index"));

    const coll = this.sortedColls[index];

    if (!coll || this._deleting[coll.sourceUrl]) {
      return;
    }

    this._deleting[coll.sourceUrl] = true;
    this.requestUpdate();

    const resp = await fetch(`./wabac/api/${coll.id}`, {method: 'DELETE'});
    if (resp.status === 200) {
      const json = await resp.json();
      this.colls = json.colls;
    }
    return false;
  }

  static get styles() {
    return wrapCss(css`
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
      padding-top: 1.0em;
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
    .copy {
      color: black;
      margin: 0px;
      margin: 0;
      line-height: 0.4em;
      padding: 6px;
      border-radius: 10px;
      display: none;
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
    .delete {
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
    `);
  }

  render() {
    const hasHeader = this.childElementCount > 0;

    return html`
    <header class="${this.hideHeader ? 'closed' : ''}">
      <slot name="header"></slot>
    </header>
    <section class="section no-top-padding">
      <div class="sort-header is-small">
        ${hasHeader ? html`
        <button @click=${(e) => this.hideHeader = !this.hideHeader} class="collapse button is-small">
          <span class="icon"><fa-icon .svg=${this.hideHeader ? fasArrowDown : fasArrowUp}></span>
          <span>${this.hideHeader ? 'Show ' : 'Hide'} <span class="is-sr-only">Header</span></span>
        </button>` : ``}
      </div>
      <div class="panel is-light">
        <h2 class="panel-heading"><span>${this.headerName}</span>
        </h2>

        ${this.colls.length ? html`
        <div class="panel-block sort-header is-small">
          <div class="control has-icons-left">
            <input type="text" class="input is-small" @input="${(e) => this.query = e.currentTarget.value}" .value="${this.query}" type="text"
            placeholder="Search by Archive Title or Source">
            <span class="icon is-left is-small"><fa-icon .svg="${fasSearch}"/></span>
          </div>
          <wr-sorter id="index"
          sortKey="ctime"
          ?sortDesc="${true}"
          .sortKeys="${this.sortKeys}"
          .data="${this.filteredColls}"
          @sort-changed="${(e) => this.sortedColls = e.detail.sortedData}">
          </wr-sorter>
        </div>

        <div class="coll-list">
          ${this.sortedColls.map((coll, i) => html`
            <div class="coll-block panel-block">
              ${this.renderCollInfo(coll)}
              ${!this._deleting[coll.sourceUrl] ? html`
              <button class="delete" aria-label="Unload Collection" title="Unload Collection" data-coll-index="${i}" @click="${this.onDeleteColl}"></button>
              ` : html`
              <span class="button delete is-loading is-static">Deleting</span`}
            </div>
          `)}
        </div>

        ` : html`

        <div class="panel-block extra-padding">
          <i>No Archives so far! Archives loaded in the section above will appear here.</i>
        </div>
        `}
      </div>
    </section>
    `;
  }

  renderCollInfo(coll) {
    return html`<wr-coll-info .coll=${coll}></wr-coll-info>`;
  }
}


// ===========================================================================
class WrCollInfo extends LitElement
{
  constructor() {
    super();
    this.detailed = false;
    this.canDelete = false;
  }

  static get properties() {
    return {
      coll: { type: Object },
      detailed: { type: Boolean },
      canDelete: { type: Boolean }
    }
  }

  static get styles() {
    return wrapCss(css`
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
    .column:hover > .copy, .source-text:hover + .copy, .copy:hover {
      display: inline;
    }
    .copy {
      color: black;
      margin: 0px;
      margin: 0;
      line-height: 0.4em;
      padding: 6px;
      border-radius: 10px;
      display: none;
      position: absolute;
    }
    .copy:active {
      background-color: lightgray;
    }
    .minihead {
      font-size: 10px;
      font-weight: bold;
    }
    `);
  }

  render() {
    const coll = this.coll;
    const detailed = this.detailed;

    return html`
      <div class="columns">
        <div class="column col-title is-4">
          <span class="subtitle has-text-weight-bold">
            ${detailed ? html`
            ${coll.title || coll.filename}
            ` : html`
            <a href="?source=${encodeURIComponent(coll.sourceUrl)}">${coll.title || coll.filename}</a>`}
          </span>
        </div>
        ${detailed && coll.desc ? html`
          <div class="column">
            <p class="minihead">Description</p>
            ${coll.desc}
          </div>` : html`
        `}
        <div class="column is-4">
          <span class="source-text"><p class="minihead">Source</p>${coll.sourceUrl}&nbsp;</span>
          <a @click="${(e) => this.onCopy(e, coll.sourceUrl)}" class="copy"><fa-icon .svg="${fasCopy}"/></a>
          ${coll.sourceUrl && coll.sourceUrl.startsWith("googledrive://") ? html`
            <p><i>(${coll.filename})</i></p>` : ''}
        </div>
        ${detailed ? html`
        <div class="column"><p class="minihead">Filename</p>${coll.filename}</div>` : html``}

        <div class="column is-2"><p class="minihead">Date Loaded</p>${coll.ctime ? new Date(coll.ctime).toLocaleString() : ""}</div>
        <div class="column is-2"><p class="minihead">Total Size</p>${prettyBytes(Number(coll.size || 0))}</div>

        ${detailed ? html`
        <div class="column">
          <p class="minihead">Loading Mode</p>
          ${coll.onDemand ? "Download On-Demand" : "Fully Local"}
        </div>
        <div class="column">
          <p class="minihead">Collection id</p>
          ${coll.coll}
        </div>
        ` : html``}

      </div>`;
  }

  // purge + delete buttons
  //
  // <div class="column">
  //   <button @click="${(e) => this.onPurge(true)}" class="button">Purge Cache + Full Reload</button>
  // </div>

  // ${this.canDelete ? html`
  // <div class="column">
  //   <button @click="${(e) => this.onPurge(false)}" class="button is-outlined is-danger">Delete Archive</button>
  // </div>` : html``}
  //

  onCopy(event, sourceUrl) {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(sourceUrl);
    return false;
  }

  onPurge(reload) {
    const detail = {reload};
    this.dispatchEvent(new CustomEvent("coll-purge", {detail}));
  }
}

customElements.define("wr-coll-info", WrCollInfo);
customElements.define("wr-coll-index", WrCollIndex);

export { WrCollIndex, WrCollInfo };
