import { LitElement, html, css } from "lit";
import { wrapCss, clickOnSpacebarPress } from "./misc";

import { getReplayLink } from "./pageutils";

import fasSearch from "@fortawesome/fontawesome-free/svgs/solid/search.svg";

import "keyword-mark-element/lib/keyword-mark.js";

// ===========================================================================
class URLResources extends LitElement {
  static get filters() {
    return [
      { name: "HTML", filter: "text/html,text/xhtml" },
      { name: "Images", filter: "image/" },
      { name: "Audio/Video", filter: "audio/,video/" },
      { name: "PDF", filter: "application/pdf" },
      {
        name: "Javascript",
        filter: "application/javascript,application/x-javascript",
      },
      { name: "CSS", filter: "text/css" },
      { name: "Fonts", filter: "font/,application/font-woff" },
      { name: "Plain Text", filter: "text/plain" },
      { name: "JSON", filter: "application/json" },
      {
        name: "DASH/HLS",
        filter:
          "application/dash+xml,application/x-mpegURL,application/vnd.apple.mpegurl",
      },
      { name: "All URLs", filter: "" },
    ];
  }

  static get sortKeys() {
    return [
      {
        key: "url",
        name: "URL",
      },
      {
        key: "ts",
        name: "Date",
      },
      {
        key: "mime",
        name: "Mime Type",
      },
      {
        key: "status",
        name: "Status",
      },
    ];
  }

  constructor() {
    super();
    this.collInfo = null;
    this.isSidebar = false;

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
      isSidebar: { type: Boolean },
      currMime: { type: String },
      query: { type: String },
      urlSearchType: { type: String },
      filteredResults: { type: Array },
      sortedResults: { type: Array },
      loading: { type: Boolean },
      sortKey: { type: String },
      sortDesc: { type: Boolean },
    };
  }

  firstUpdated() {
    //this.doLoadResources();
    if (this.urlSearchType === "") {
      this.urlSearchType = "prefix";
    }
  }

  _timedUpdate() {
    if (this.newQuery !== null) {
      this.query = this.newQuery;
      this.newQuery = null;
    }
  }

  updated(changedProperties) {
    if (
      changedProperties.has("query") ||
      changedProperties.has("urlSearchType") ||
      changedProperties.has("currMime")
    ) {
      this.doLoadResources();
      const data = {
        query: this.query,
        urlSearchType: this.urlSearchType,
        currMime: this.currMime,
      };
      const replaceLoc =
        !changedProperties.has("currMime") &&
        !changedProperties.has("urlSearchType");
      this.dispatchEvent(
        new CustomEvent("coll-tab-nav", { detail: { replaceLoc, data } }),
      );
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
    let url = this.urlSearchType !== "contains" ? this.query : "";
    const prefix = url && this.urlSearchType === "prefix" ? 1 : 0;

    // optimization: if not starting with http, likely won't have a match here, so just add https://
    if (url && !url.startsWith("http")) {
      url = "https://" + url;
    }

    const mime = this.currMime;

    const params = new URLSearchParams({
      mime,
      url,
      prefix,
      count,
    });

    if (isMore) {
      const last = this.results[this.results.length - 1];
      params.set("fromMime", last.mime);
      params.set("fromUrl", last.url);
      params.set("fromStatus", last.status);
      params.set("fromTs", new Date(last.date).getTime());
    }

    let resp = await fetch(
      `${this.collInfo.apiPrefix}/urls?${params.toString()}`,
    );
    resp = await resp.json();
    this.results = isMore ? this.results.concat(resp.urls) : resp.urls;
    // can be more than count if multiple mimes
    this.tryMore = resp.urls.length >= count;
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
    const filterText = this.urlSearchType === "contains" ? this.query : "";
    for (const result of this.results) {
      if (!filterText || result.url.indexOf(filterText) >= 0) {
        filteredResults.push(result);
      }
    }

    this.filteredResults = filteredResults;
  }

  onScroll(event) {
    const element = event.currentTarget;
    const diff =
      element.scrollHeight - element.scrollTop - element.clientHeight;
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
        min-width: 0px;
        flex-direction: column;
      }
      :host(.sidebar) .is-hidden-tablet {
        display: flex !important;
      }

      :host(.sidebar) .is-hidden-mobile {
        display: none !important;
      }

      :host(.sidebar) .level,
      :host(.sidebar) .level-left,
      :host(.sidebar) .level-right {
        display: block !important;
      }

      :host(.sidebar) .columns {
        display: flex !important;
        flex-direction: column;
      }

      :host(.sidebar) .column {
        width: 100% !important;
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
      thead {
        margin-bottom: 24px;
      }
      table th:not([align]) {
        text-align: left;
      }
      .result {
        border-bottom: 1px #dbdbdb solid;
        min-height: fit-content;
      }
      .results-head {
        border-bottom: 2px #dbdbdb solid;
        margin-right: 16px;
        min-height: fit-content;
        display: block;
        width: 100%;
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
        min-height: fit-content;
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
    <div role="heading" aria-level="${
      this.isSidebar ? "2" : "1"
    }" class="is-sr-only">URLs in ${this.collInfo.title}</div>

    <div role="heading" aria-level="${
      this.isSidebar ? "3" : "2"
    }" class="is-sr-only">Search and Filter</div>
    <div class="notification level is-marginless">
      <div class="level-left flex-auto">
        <div class="level-item flex-auto">
          <span class="is-hidden-mobile">Search:&nbsp;&nbsp;</span>
          <div class="select">
            <select @change="${this.onChangeTypeSearch}">
            ${URLResources.filters.map(
              (filter) => html`
                <option
                  value="${filter.filter}"
                  ?selected="${filter.filter === this.currMime}"
                >
                  ${filter.name}
                </option>
              `,
            )}
            </select>
          </div>
          <div class="field flex-auto">
            <div class="control has-icons-left ${
              this.loading ? "is-loading" : ""
            }">
              <input type="text" class="input" @input="${
                this.onChangeQuery
              }" .value="${
                this.query
              }" type="text" placeholder="Enter URL to Search">
              <span class="icon is-left"><fa-icon .svg="${fasSearch}"/></span>
            </div>
          </div>
        </div>
      </div>
      <div class="control level-right">
        <div style="margin-left: 1em" class="control">
          <label class="radio has-text-left"><input type="radio" name="urltype" value="contains" ?checked="${
            this.urlSearchType === "contains"
          }" @click="${this.onClickUrlType}">&nbsp;Contains</label>
          <label class="radio has-text-left"><input type="radio" name="urltype" value="prefix" ?checked="${
            this.urlSearchType === "prefix"
          }" @click="${this.onClickUrlType}">&nbsp;Prefix</label>
          <label class="radio has-text-left"><input type="radio" name="urltype" value="exact" ?checked="${
            this.urlSearchType === "exact"
          }" @click="${this.onClickUrlType}">&nbsp;Exact</label>
          <span id="num-results" class="num-results" is-pulled-right" aria-live="polite" aria-atomic="true">${
            this.filteredResults.length
          } Result(s)</span>
        </div>
      </div>
    </div>

    <div class="sort-header is-hidden-tablet">
      <wr-sorter id="urls"
        .sortKey="${this.sortKey}"
        .sortDesc="${this.sortDesc}"
        .sortKeys="${URLResources.sortKeys}"
        .data="${this.filteredResults}"
        @sort-changed="${this.onSortChanged}">
      </wr-sorter>
    </div>

    <div role="heading" aria-level="${
      this.isSidebar ? "3" : "2"
    }" id="results-heading" class="is-sr-only">Results</div>

    <table class="all-results" aria-labelledby="results-heading num-results">
      <thead>
        <tr class="columns results-head has-text-weight-bold">
          <th scope="col" class="column col-url is-6 is-hidden-mobile"><a role="button" href="#" @click="${
            this.onSort
          }" @keyup="${clickOnSpacebarPress}" data-key="url" class="${
            this.sortKey === "url" ? (this.sortDesc ? "desc" : "asc") : ""
          }">URL</a></th>
          <th scope="col" class="column col-ts is-2 is-hidden-mobile"><a role="button" href="#" @click="${
            this.onSort
          }" @keyup="${clickOnSpacebarPress}" data-key="ts" class="${
            this.sortKey === "ts" ? (this.sortDesc ? "desc" : "asc") : ""
          }">Date</a></th>
          <th scope="col" class="column col-mime is-3 is-hidden-mobile"><a role="button" href="#" @click="${
            this.onSort
          }" @keyup="${clickOnSpacebarPress}" data-key="mime" class="${
            this.sortKey === "mime" ? (this.sortDesc ? "desc" : "asc") : ""
          }">Mime Type</a></th>
          <th scope="col" class="column col-status is-1 is-hidden-mobile"><a role="button" href="#" @click="${
            this.onSort
          }" @keyup="${clickOnSpacebarPress}" data-key="status" class="${
            this.sortKey === "status" ? (this.sortDesc ? "desc" : "asc") : ""
          }">Status</a></th>
        </tr>
      </thead>

      <tbody class="main-scroll" @scroll="${this.onScroll}">
      ${
        this.sortedResults.length
          ? this.sortedResults.map(
              (result) => html`
                <tr class="columns result">
                  <td class="column col-url is-6">
                    <p class="minihead is-hidden-tablet">URL</p>
                    <a
                      @click="${this.onReplay}"
                      data-url="${result.url}"
                      data-ts="${result.ts}"
                      href="${getReplayLink(
                        "resources",
                        result.url,
                        result.ts,
                      )}"
                    >
                      <keyword-mark keywords="${this.query}"
                        >${result.url}</keyword-mark
                      >
                    </a>
                  </td>
                  <td class="column col-ts is-2">
                    <p class="minihead is-hidden-tablet">Date</p>
                    ${new Date(result.date).toLocaleString()}
                  </td>
                  <td class="column col-mime is-3">
                    <p class="minihead is-hidden-tablet">Mime Type</p>
                    ${result.mime}
                  </td>
                  <td class="column col-status is-1">
                    <p class="minihead is-hidden-tablet">Status</p>
                    ${result.status}
                  </td>
                </tr>
              `,
            )
          : html`<tr class="section">
              <td colspan="4"><i>No Results Found.</i></td>
            </tr>`
      }
      </tbody>
    </table>
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
    };

    this.dispatchEvent(new CustomEvent("coll-tab-nav", { detail: { data } }));
    return false;
  }
}

customElements.define("wr-coll-resources", URLResources);

export { URLResources };
