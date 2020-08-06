import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import fasSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg';


// ===========================================================================
class URLResources extends LitElement
{
  static get filters() {
    return [
      {name: "HTML", filter: ""}, //default
      {name: "Images", filter: "image/"},
      {name: "Audio/Video", filter: "audio/,video/"},
      {name: "PDF", filter: "application/pdf"},
      {name: "Javascript", filter: "application/javascript,application/x-javascript"},
      {name: "CSS", filter: "text/css"},
      {name: "Fonts", filter: "font/,application/font-woff"},
      {name: "Plain Text", filter: "text/plain"},
      {name: "JSON", filter: "application/json"},
      {name: "DASH/HLS", filter: "application/dash+xml,application/x-mpegURL,application/vnd.apple.mpegurl"},
      {name: "All URLs", filter: "all"}
    ];
  }

  static get sortKeys() {
    return [
      {
        "key": "url",
        "name": "URL"
      },
      {
        "key": "ts",
        "name": "Date"
      },
      {
        "key": "mime",
        "name": "Mime Type",
      },
      {
        "key": "status",
        "name": "Status"
      }
    ];
  }

  constructor() {
    super();
    this.collInfo = null;

    this.currMime = "";
    this.query = "";
    this.urlSearchType = "";

    this.filteredResults = [];
    this.sortedResults = [];

    this.results = [];

    this.newQuery = null;

    this.tryMore = false;
    this.loading = false;

    this.sortKey = "url";
    this.sortDesc = false;
  }

  static get properties() {
    return {
      collInfo: { type: Object },
      currMime: { type: String },
      query: { type: String },
      urlSearchType: { type: String },
      filteredResults: { type: Array },
      sortedResults: { type: Array },
      loading: { type: Boolean },
      sortKey: { type: String },
      sortDesc: { type: Boolean }
    }
  }

  firstUpdated() {
    //this.doLoadResources();
  }

  _timedUpdate() {
    if (this.newQuery !== null) {
      this.query = this.newQuery;
      this.newQuery = null;
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("query") || 
        changedProperties.has("urlSearchType") ||
        changedProperties.has("currMime")) {

      this.doLoadResources();
      const data = {
        query: this.query,
        urlSearchType: this.urlSearchType,
        currMime: this.currMime
      };
      const replaceLoc = !changedProperties.has("currMime") && !changedProperties.has("urlSearchType");
      this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {replaceLoc, data}}));
    }

    if (changedProperties.has("sortKey") || changedProperties.has("sortDesc")) {
      this.filter();
    }
  }

  async doLoadResources(isMore = false) {
    const count = 100;

    if (isMore && (!this.tryMore || !this.results.length)) {
      return;
    }

    if (this.loading) {
      return;
    }

    this.loading = true;
    let url = (this.urlSearchType !== "" ? this.query : "");
    const prefix = url && this.urlSearchType === "prefix" ? 1 : 0;

    // optimization: if not starting with http, likely won't have a match here, so just add https://
    if (url && !url.startsWith("http")) {
      url = "https://" + url;
    }

    let mime;

    switch (this.currMime) {
      case "all":
        mime = "";
        break;

      case "":
        mime = "text/html,text/xhtml";
        break;

      default:
        mime = this.currMime;
    }

    const params = new URLSearchParams({
      mime,
      url,
      prefix,
      count
    });

    if (isMore) {
      const last = this.results[this.results.length - 1];
      params.set("fromMime", last.mime);
      params.set("fromUrl", last.url);
      params.set("fromTs", new Date(last.date).getTime());
    }

    let resp = await fetch(`${this.collInfo.apiPrefix}/urls?${params.toString()}`);
    resp = await resp.json();
    this.results = isMore ? this.results.concat(resp.urls) : resp.urls;
    // can be more than count if multiple mimes
    this.tryMore = (resp.urls.length >= count);
    this.filter();

    this.loading = false;
  }

  onChangeTypeSearch(event) {
    this.currMime = event.currentTarget.value;
  }

  onChangeQuery(event) {
    this.newQuery = event.currentTarget.value;
    if (this._ival) {
      window.clearTimeout(this._ival);
    }
    this._ival = window.setTimeout(() => this._timedUpdate(), 250);
  }

  onClickUrlType(event) {
    this.urlSearchType = event.currentTarget.value;
  }

  filter() {
    const filteredResults = [];
    const filterText = (this.urlSearchType === "" ? this.query : "");
    for (const result of this.results) {
      if (!filterText || result.url.indexOf(filterText) >= 0) {
        filteredResults.push(result);
      }
    }

    this.filteredResults = filteredResults;
  }

  onScroll(event) {
    const element = event.currentTarget;
    const diff = (element.scrollHeight - element.scrollTop) - element.clientHeight;
    if (this.tryMore && diff < 40) {
      this.doLoadResources(true);
    }
  }

  static get styles() {
    return wrapCss(css`
    :host {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .notification {
      width: 100%;
    }
    .all-results {
      margin: 0 0 0 0.5em;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
    .main-scroll {
      flex-grow: 1;
    }
    .minihead {
      font-size: 10px;
      font-weight: bold;
    }
    .columns {
      margin: 0px;
    }   
    .result {
      border-bottom: 1px #dbdbdb solid;
    }
    .results-head {
      border-bottom: 2px #dbdbdb solid;
      margin-right: 16px;
    }
    .results-head a {
      color: black;
    }
    .all-results .column {
      word-break: break-word;
    }
    div.sort-header {
      padding: 10px;
      margin-bottom: 0px !important;
    }
    .flex-auto {
      flex: auto;
    }
    .asc:after {
      content: "▼";
      font-size: 0.75em;
    }
    .desc:after {
      content: "▲";
      font-size: 0.75em;
    }
    .num-results {
      margin-left: 1em;
      font-style: italic;
    }
    `);
  }

  render() {
    return html`
    <div class="notification level is-marginless">
      <div class="level-left flex-auto">
        <div class="level-item flex-auto">
          <span>Search:&nbsp;&nbsp;</span>
          <div class="select">
            <select @change="${this.onChangeTypeSearch}">
            ${URLResources.filters.map((filter) => html`
            <option value="${filter.filter}"
            ?selected="${filter.filter === this.currMime}">
            ${filter.name}
            </option>
            `)}
            </select>
          </div>
          <div class="field flex-auto">
            <div class="control has-icons-left ${this.loading ? 'is-loading' : ''}">
              <input type="text" class="input" @input="${this.onChangeQuery}" .value="${this.query}" type="text" placeholder="Enter URL to Search">
              <span class="icon is-left"><fa-icon .svg="${fasSearch}"/></span>
            </div>
          </div>
        </div>
      </div>
      <div class="control level-right">
        <div style="margin-left: 1em" class="control">
          <label class="radio has-text-left"><input type="radio" name="urltype" value="" ?checked="${this.urlSearchType === ''}" @click="${this.onClickUrlType}">&nbsp;Contains</label>
          <label class="radio has-text-left"><input type="radio" name="urltype" value="prefix" ?checked="${this.urlSearchType === 'prefix'}" @click="${this.onClickUrlType}">&nbsp;Prefix</label>
          <label class="radio has-text-left"><input type="radio" name="urltype" value="exact" ?checked="${this.urlSearchType === 'exact'}" @click="${this.onClickUrlType}">&nbsp;Exact</label>
          <span class="num-results" is-pulled-right">${this.filteredResults.length} Result(s)</span>
        </div>
      </div>
    </div>

    <div class="sort-header is-hidden-tablet">
      <wr-sorter id="urls"
        defaultKey="url"
        .sortKey="${this.sortKey}"
        .sortDesc="${this.sortDesc}"
        .sortKeys="${URLResources.sortKeys}"
        .data="${this.filteredResults}"
        @sort-changed="${this.onSortChanged}">
      </wr-sorter>
    </div>
    
    <div class="all-results">
      <div class="columns results-head has-text-weight-bold">
        <a @click="${this.onSort}" data-key="url" class="column col-url is-6 is-hidden-mobile ${this.sortKey === "url" ? (this.sortDesc ? "desc" : "asc") : ''}">URL</a>
        <a @click="${this.onSort}" data-key="ts" class="column col-ts is-2 is-hidden-mobile ${this.sortKey === "ts" ? (this.sortDesc ? "desc" : "asc") : ''}">Date</a>
        <a @click="${this.onSort}" data-key="mime" class="column col-mime is-3 is-hidden-mobile ${this.sortKey === "mime" ? (this.sortDesc ? "desc" : "asc") : ''}">Mime Type</a>
        <a @click="${this.onSort}" data-key="status" class="column col-status is-1 is-hidden-mobile ${this.sortKey === "status" ? (this.sortDesc ? "desc" : "asc") : ''}">Status</a>
      </div>

      <div class="main-scroll" @scroll="${this.onScroll}">
      ${this.sortedResults.length ? 
        this.sortedResults.map((result) => html`
          <div class="columns result">
            <div class="column col-url is-6"><p class="minihead is-hidden-tablet">URL</p><a @click="${this.onReplay}" data-url="${result.url}" data-ts="${result.ts}" href="#">${result.url}</a></div>
            <div class="column col-ts is-2"><p class="minihead is-hidden-tablet">Date</p>${new Date(result.date).toLocaleString()}</div>
            <div class="column col-mime is-3"><p class="minihead is-hidden-tablet">Mime Type</p>${result.mime}</div>
            <div class="column col-status is-1"><p class="minihead is-hidden-tablet">Status</p>${result.status}</div>
          </div>
        `) : html`<div class="section"><i>No Results Found.</i></div>`}
      </div>
    </div>
    `;
  }

  onSort(event) {
    event.preventDefault();

    const key = event.currentTarget.getAttribute("data-key");
    if (key === this.sortKey) {
      this.sortDesc = !this.sortDesc;
    } else {
      this.sortDesc = false;
      this.sortKey = key;
    }
  }

  onSortChanged(event) {
    this.sortedResults = event.detail.sortedData;
    this.sortKey = event.detail.sortKey;
    this.sortDesc = event.detail.sortDesc;
  }

  onReplay(event) {
    event.preventDefault();
    const data = {
      url: event.currentTarget.getAttribute("data-url"),
      ts: event.currentTarget.getAttribute("data-ts"),
      view: "replay"
    };

    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {data}}));
    return false;
  }
}

customElements.define("wr-coll-resources", URLResources);

export { URLResources };
