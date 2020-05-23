import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';


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

  constructor() {
    super();
    this.collInfo = null;

    this.currMime = "";
    this.urlSearch = "";
    this.urlSearchType = "";

    this.filteredResults = [];

    this.results = [];

    this.tryMore = false;
    this.loading = false;

    this.sortKey = "url";
    this.sortDesc = false;
  }

  static get properties() {
    return {
      collInfo: { type: Object },
      currMime: { type: String },
      urlSearch: { type: String },
      urlSearchType: { type: String },
      filteredResults: { type: Array },
      loading: { type: Boolean },

      sortKey: { type: String },
      sortDesc: { type: Boolean }
    }
  }

  firstUpdated() {
    //this.doLoadResources();
  }

  updated(changedProperties) {
    if (changedProperties.has("urlSearch") || 
        changedProperties.has("urlSearchType") ||
        changedProperties.has("currMime")) {

      this.doLoadResources();
      const data = {
        urlSearch: this.urlSearch,
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
    let url = (this.urlSearchType !== "" ? this.urlSearch : "");
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
    //this.doLoadResources();
  }

  onChangeUrlSearch(event) {
    this.urlSearch = event.currentTarget.value;
    //this.doLoadResources();
  }

  onClickUrlType(event) {
    this.urlSearchType = event.currentTarget.value;
    //this.doLoadResources();
  }

  filter() {
    const filteredResults = [];
    const filterText = (this.urlSearchType === "" ? this.urlSearch : "");
    for (const result of this.results) {
      if (!filterText || result.url.indexOf(filterText) >= 0) {
        filteredResults.push(result);
      }
    }

    this.filteredResults = filteredResults;

    if (this.sortKey && !(this.sortKey === "url" && !this.sortDesc)) {
      this.filteredResults.sort((first, second) => {
        if (first[this.sortKey] === second[this.sortKey]) {
          return 0;
        }

        return (this.sortDesc == (first[this.sortKey] < second[this.sortKey])) ? 1 : -1;
      });
    }
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
      display: flex;
      flex-direction: column;
    }
    .notification {
      width: 100%;
    }
    .main-scroll {
      height: calc(100vh - 180px);
      flex-grow: 1;
      width: 100vw;
    }
    table {
      table-layout: fixed;
      word-wrap: break-word;
      text-overflow: ellipsis;
      height: 100%;
    }
    tr > th {
      cursor: pointer;
    }
    tbody > tr {
      display: table;
      width: 100%;
    }
    .col-url {
      width: 66%;
      max-width: 66%;
      min-width: 66%;
      word-break: break-word;
    }
    .col-ts {
      width: 16%;
      max-width: 16%;
      min-width: 16%;
      word-break: break-word;
    }
    td.col-mime {
      width: 10%;
      word-break: break-word;
    }
    td.col-status {
      text-align: center;
    }
    .loading-cog {
      width: 100vw;
      display: flex;
    }
    .flex-column {
      display: flex;
      flex: auto;
      max-width: 80%;
      flex-direction: column;
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
            <div class="control ${this.loading ? 'is-loading' : ''}">
              <input type="text" class="input" @input="${this.onChangeUrlSearch}" value="${this.urlSearch}" type="text" placeholder="Enter URL search here">
            </div>
          </div>
        </div>
      </div>
      <div class="control level-right">
        <div style="margin-left: 1em" class="control">
          <label class="radio has-text-left"><input type="radio" name="urltype" value="" ?checked="${this.urlSearchType === ''}" @click="${this.onClickUrlType}">&nbsp;Contains</label>
          <label class="radio has-text-left"><input type="radio" name="urltype" value="prefix" ?checked="${this.urlSearchType === 'prefix'}" @click="${this.onClickUrlType}">&nbsp;Prefix</label>
          <label class="radio has-text-left"><input type="radio" name="urltype" value="exact" ?checked="${this.urlSearchType === 'exact'}" @click="${this.onClickUrlType}">&nbsp;Exact</label>
          <span class="is-pulled-right" style="margin-left: 1em">(${this.filteredResults.length} Results)</span>
        </div>
      </div>
    </div>
    
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th @click="${this.onSort}" data-key="url" class="${this.sortKey === "url" ? (this.sortDesc ? "desc" : "asc") : ''} col-url">URL</th>
          <th @click="${this.onSort}" data-key="ts" class="${this.sortKey === "ts" ? (this.sortDesc ? "desc" : "asc") : ''} col-ts">Timestamp</th>
          <th @click="${this.onSort}" data-key="mime" class="${this.sortKey === "mime" ? (this.sortDesc ? "desc" : "asc") : ''} col-mime">Mime</th>
          <th @click="${this.onSort}" data-key="status" class="${this.sortKey === "status" ? (this.sortDesc ? "desc" : "asc") : ''} col-status">Status</th>
        </tr>
      </thead>
      <tbody class="main-scroll" @scroll="${this.onScroll}">
      ${this.filteredResults.length ? 
        this.filteredResults.map((result) => html`
          <tr>
            <td class="col-url"><a @click="${this.onReplay}" data-url="${result.url}" data-ts="${result.ts}" href="#">${result.url}</a></td>
            <td class="col-ts">${new Date(result.date).toLocaleString()}</td>
            <td class="col-mime">${result.mime}</td>
            <td class="col-status">${result.status}</td>
          </tr>
        `) : html`<div class="section"><i>No Results Found.</i></div>`}
      </tbody>
    </table>
    `;
  }

  onSort(event) {
    const key = event.currentTarget.getAttribute("data-key");
    if (key === this.sortKey) {
      this.sortDesc = !this.sortDesc;
    } else {
      this.sortDesc = false;
      this.sortKey = key;
    }
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
