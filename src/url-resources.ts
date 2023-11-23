import { LitElement, html, css } from "lit";
import { wrapCss, clickOnSpacebarPress } from "./misc";

import { getReplayLink } from "./pageutils";

import fasSearch from "@fortawesome/fontawesome-free/svgs/solid/search.svg";

import "keyword-mark-element/lib/keyword-mark.js";

// ===========================================================================
/**
 * @prop {boolean | undefined} active
 */
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
    // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'URLResources'.
    this.collInfo = null;
    // @ts-expect-error - TS2339 - Property 'isSidebar' does not exist on type 'URLResources'.
    this.isSidebar = false;

    // @ts-expect-error - TS2339 - Property 'currMime' does not exist on type 'URLResources'.
    this.currMime = "";
    // @ts-expect-error - TS2339 - Property 'query' does not exist on type 'URLResources'.
    this.query = "";
    // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'.
    this.urlSearchType = "";

    // @ts-expect-error - TS2339 - Property 'filteredResults' does not exist on type 'URLResources'.
    this.filteredResults = [];
    // @ts-expect-error - TS2339 - Property 'sortedResults' does not exist on type 'URLResources'.
    this.sortedResults = [];

    // @ts-expect-error - TS2339 - Property 'results' does not exist on type 'URLResources'.
    this.results = [];

    // @ts-expect-error - TS2339 - Property 'newQuery' does not exist on type 'URLResources'.
    this.newQuery = null;

    // @ts-expect-error - TS2339 - Property 'tryMore' does not exist on type 'URLResources'.
    this.tryMore = false;
    // @ts-expect-error - TS2339 - Property 'loading' does not exist on type 'URLResources'.
    this.loading = false;

    // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'URLResources'.
    this.sortKey = "url";
    // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'URLResources'.
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
    // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'.
    if (this.urlSearchType === "") {
      // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'.
      this.urlSearchType = "prefix";
    }
  }

  _timedUpdate() {
    // @ts-expect-error - TS2339 - Property 'newQuery' does not exist on type 'URLResources'.
    if (this.newQuery !== null) {
      // @ts-expect-error - TS2339 - Property 'query' does not exist on type 'URLResources'. | TS2339 - Property 'newQuery' does not exist on type 'URLResources'.
      this.query = this.newQuery;
      // @ts-expect-error - TS2339 - Property 'newQuery' does not exist on type 'URLResources'.
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
        // @ts-expect-error - TS2339 - Property 'query' does not exist on type 'URLResources'.
        query: this.query,
        // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'.
        urlSearchType: this.urlSearchType,
        // @ts-expect-error - TS2339 - Property 'currMime' does not exist on type 'URLResources'.
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

    // @ts-expect-error - TS2339 - Property 'tryMore' does not exist on type 'URLResources'. | TS2339 - Property 'results' does not exist on type 'URLResources'.
    if (isMore && (!this.tryMore || !this.results.length)) {
      return;
    }

    // @ts-expect-error - TS2339 - Property 'loading' does not exist on type 'URLResources'.
    if (this.loading) {
      return;
    }

    // @ts-expect-error - TS2339 - Property 'loading' does not exist on type 'URLResources'.
    this.loading = true;
    // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'. | TS2339 - Property 'query' does not exist on type 'URLResources'.
    let url = this.urlSearchType !== "contains" ? this.query : "";
    // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'.
    const prefix = url && this.urlSearchType === "prefix" ? 1 : 0;

    // optimization: if not starting with http, likely won't have a match here, so just add https://
    if (url && !url.startsWith("http")) {
      url = "https://" + url;
    }

    // @ts-expect-error - TS2339 - Property 'currMime' does not exist on type 'URLResources'.
    const mime = this.currMime;

    // @ts-expect-error - TS2345 - Argument of type '{ mime: any; url: any; prefix: number; count: number; }' is not assignable to parameter of type 'string | Record<string, string> | URLSearchParams | string[][] | undefined'.
    const params = new URLSearchParams({
      mime,
      url,
      prefix,
      count,
    });

    if (isMore) {
      // @ts-expect-error - TS2339 - Property 'results' does not exist on type 'URLResources'. | TS2339 - Property 'results' does not exist on type 'URLResources'.
      const last = this.results[this.results.length - 1];
      params.set("fromMime", last.mime);
      params.set("fromUrl", last.url);
      params.set("fromStatus", last.status);
      // @ts-expect-error - TS2345 - Argument of type 'number' is not assignable to parameter of type 'string'.
      params.set("fromTs", new Date(last.date).getTime());
    }

    let resp = await fetch(
      // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'URLResources'.
      `${this.collInfo.apiPrefix}/urls?${params.toString()}`,
    );
    resp = await resp.json();
    // @ts-expect-error - TS2339 - Property 'results' does not exist on type 'URLResources'. | TS2339 - Property 'results' does not exist on type 'URLResources'. | TS2551 - Property 'urls' does not exist on type 'Response'. Did you mean 'url'? | TS2551 - Property 'urls' does not exist on type 'Response'. Did you mean 'url'?
    this.results = isMore ? this.results.concat(resp.urls) : resp.urls;
    // can be more than count if multiple mimes
    // @ts-expect-error - TS2339 - Property 'tryMore' does not exist on type 'URLResources'. | TS2551 - Property 'urls' does not exist on type 'Response'. Did you mean 'url'?
    this.tryMore = resp.urls.length >= count;
    this.filter();

    // @ts-expect-error - TS2339 - Property 'loading' does not exist on type 'URLResources'.
    this.loading = false;
  }

  onChangeTypeSearch(event) {
    // @ts-expect-error - TS2339 - Property 'currMime' does not exist on type 'URLResources'.
    this.currMime = event.currentTarget.value;
  }

  onChangeQuery(event) {
    // @ts-expect-error - TS2339 - Property 'newQuery' does not exist on type 'URLResources'.
    this.newQuery = event.currentTarget.value;
    // @ts-expect-error - TS2339 - Property '_ival' does not exist on type 'URLResources'.
    if (this._ival) {
      // @ts-expect-error - TS2339 - Property '_ival' does not exist on type 'URLResources'.
      window.clearTimeout(this._ival);
    }
    // @ts-expect-error - TS2339 - Property '_ival' does not exist on type 'URLResources'.
    this._ival = window.setTimeout(() => this._timedUpdate(), 250);
  }

  onClickUrlType(event) {
    // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'.
    this.urlSearchType = event.currentTarget.value;
  }

  filter() {
    const filteredResults = [];
    // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'. | TS2339 - Property 'query' does not exist on type 'URLResources'.
    const filterText = this.urlSearchType === "contains" ? this.query : "";
    // @ts-expect-error - TS2339 - Property 'results' does not exist on type 'URLResources'.
    for (const result of this.results) {
      if (!filterText || result.url.indexOf(filterText) >= 0) {
        // @ts-expect-error - TS2345 - Argument of type 'any' is not assignable to parameter of type 'never'.
        filteredResults.push(result);
      }
    }

    // @ts-expect-error - TS2339 - Property 'filteredResults' does not exist on type 'URLResources'.
    this.filteredResults = filteredResults;
  }

  onScroll(event) {
    const element = event.currentTarget;
    const diff =
      element.scrollHeight - element.scrollTop - element.clientHeight;
    // @ts-expect-error - TS2339 - Property 'tryMore' does not exist on type 'URLResources'.
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
      <div
        role="heading"
        aria-level="${
          // @ts-expect-error - TS2339 - Property 'isSidebar' does not exist on type 'URLResources'.
          this.isSidebar ? "2" : "1"
        }"
        class="is-sr-only"
      >
        URLs in
        ${
          // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'URLResources'.
          this.collInfo.title
        }
      </div>

      <div
        role="heading"
        aria-level="${
          // @ts-expect-error - TS2339 - Property 'isSidebar' does not exist on type 'URLResources'.
          this.isSidebar ? "3" : "2"
        }"
        class="is-sr-only"
      >
        Search and Filter
      </div>
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
                      ?selected="${
                        // @ts-expect-error - TS2339 - Property 'currMime' does not exist on type 'URLResources'.
                        filter.filter === this.currMime
                      }"
                    >
                      ${filter.name}
                    </option>
                  `,
                )}
              </select>
            </div>
            <div class="field flex-auto">
              <div
                class="control has-icons-left ${
                  // @ts-expect-error - TS2339 - Property 'loading' does not exist on type 'URLResources'.
                  this.loading ? "is-loading" : ""
                }"
              >
                <input
                  type="text"
                  class="input"
                  @input="${this.onChangeQuery}"
                  .value="${
                    // @ts-expect-error - TS2339 - Property 'query' does not exist on type 'URLResources'.
                    this.query
                  }"
                  placeholder="Enter URL to Search"
                />
                <span class="icon is-left"
                  ><fa-icon .svg="${fasSearch}"></fa-icon
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="control level-right">
          <div style="margin-left: 1em" class="control">
            <label class="radio has-text-left"
              ><input
                type="radio"
                name="urltype"
                value="contains"
                ?checked="${
                  // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'.
                  this.urlSearchType === "contains"
                }"
                @click="${this.onClickUrlType}"
              />&nbsp;Contains</label
            >
            <label class="radio has-text-left"
              ><input
                type="radio"
                name="urltype"
                value="prefix"
                ?checked="${
                  // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'.
                  this.urlSearchType === "prefix"
                }"
                @click="${this.onClickUrlType}"
              />&nbsp;Prefix</label
            >
            <label class="radio has-text-left"
              ><input
                type="radio"
                name="urltype"
                value="exact"
                ?checked="${
                  // @ts-expect-error - TS2339 - Property 'urlSearchType' does not exist on type 'URLResources'.
                  this.urlSearchType === "exact"
                }"
                @click="${this.onClickUrlType}"
              />&nbsp;Exact</label
            >
            <span
              id="num-results"
              class="num-results"
              is-pulled-right
              aria-live="polite"
              aria-atomic="true"
              >${
                // @ts-expect-error - TS2339 - Property 'filteredResults' does not exist on type 'URLResources'.
                this.filteredResults.length
              }
              Result(s)</span
            >
          </div>
        </div>
      </div>

      <div class="sort-header is-hidden-tablet">
        <wr-sorter
          id="urls"
          .sortKey="${
            // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'URLResources'.
            this.sortKey
          }"
          .sortDesc="${
            // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'URLResources'.
            this.sortDesc
          }"
          .sortKeys="${URLResources.sortKeys}"
          .data="${
            // @ts-expect-error - TS2339 - Property 'filteredResults' does not exist on type 'URLResources'.
            this.filteredResults
          }"
          @sort-changed="${this.onSortChanged}"
        >
        </wr-sorter>
      </div>

      <div
        role="heading"
        aria-level="${
          // @ts-expect-error - TS2339 - Property 'isSidebar' does not exist on type 'URLResources'.
          this.isSidebar ? "3" : "2"
        }"
        id="results-heading"
        class="is-sr-only"
      >
        Results
      </div>

      <table class="all-results" aria-labelledby="results-heading num-results">
        <thead>
          <tr class="columns results-head has-text-weight-bold">
            <th scope="col" class="column col-url is-6 is-hidden-mobile">
              <a
                role="button"
                href="#"
                @click="${this.onSort}"
                @keyup="${clickOnSpacebarPress}"
                data-key="url"
                class="${
                  // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'URLResources'.
                  this.sortKey === "url"
                    ? // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'URLResources'.
                      this.sortDesc
                      ? "desc"
                      : "asc"
                    : ""
                }"
                >URL</a
              >
            </th>
            <th scope="col" class="column col-ts is-2 is-hidden-mobile">
              <a
                role="button"
                href="#"
                @click="${this.onSort}"
                @keyup="${clickOnSpacebarPress}"
                data-key="ts"
                class="${
                  // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'URLResources'.
                  this.sortKey === "ts"
                    ? // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'URLResources'.
                      this.sortDesc
                      ? "desc"
                      : "asc"
                    : ""
                }"
                >Date</a
              >
            </th>
            <th scope="col" class="column col-mime is-3 is-hidden-mobile">
              <a
                role="button"
                href="#"
                @click="${this.onSort}"
                @keyup="${clickOnSpacebarPress}"
                data-key="mime"
                class="${
                  // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'URLResources'.
                  this.sortKey === "mime"
                    ? // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'URLResources'.
                      this.sortDesc
                      ? "desc"
                      : "asc"
                    : ""
                }"
                >Mime Type</a
              >
            </th>
            <th scope="col" class="column col-status is-1 is-hidden-mobile">
              <a
                role="button"
                href="#"
                @click="${this.onSort}"
                @keyup="${clickOnSpacebarPress}"
                data-key="status"
                class="${
                  // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'URLResources'.
                  this.sortKey === "status"
                    ? // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'URLResources'.
                      this.sortDesc
                      ? "desc"
                      : "asc"
                    : ""
                }"
                >Status</a
              >
            </th>
          </tr>
        </thead>

        <tbody class="main-scroll" @scroll="${this.onScroll}">
          ${
            // @ts-expect-error - TS2339 - Property 'sortedResults' does not exist on type 'URLResources'.
            this.sortedResults.length
              ? // @ts-expect-error - TS2339 - Property 'sortedResults' does not exist on type 'URLResources'.
                this.sortedResults.map(
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
                          <keyword-mark
                            keywords="${
                              // @ts-expect-error - TS2339 - Property 'query' does not exist on type 'URLResources'.
                              this.query
                            }"
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
    // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'URLResources'.
    if (key === this.sortKey) {
      // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'URLResources'. | TS2339 - Property 'sortDesc' does not exist on type 'URLResources'.
      this.sortDesc = !this.sortDesc;
    } else {
      // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'URLResources'.
      this.sortDesc = false;
      // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'URLResources'.
      this.sortKey = key;
    }
  }

  onSortChanged(event) {
    // @ts-expect-error - TS2339 - Property 'sortedResults' does not exist on type 'URLResources'.
    this.sortedResults = event.detail.sortedData;
    // @ts-expect-error - TS2339 - Property 'sortKey' does not exist on type 'URLResources'.
    this.sortKey = event.detail.sortKey;
    // @ts-expect-error - TS2339 - Property 'sortDesc' does not exist on type 'URLResources'.
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
