import { LitElement, html, css, customElement } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import { styleMap } from 'lit-html/directives/style-map';

import { initSW, digestMessage, getTS } from './pageutils';

import marked from 'marked';

import '../scss/main.scss';

import 'fa-icons';


// ===========================================================================
class AppMain extends LitElement
{

  constructor() {
    super();
    this.coll = "";
    this.collInfo = {};
    this.loadInfo = {};
    this.updateRoute();
  }


  static get properties() {
    return {
      pageState: { type: String },
      pageParams: { type: Object },
      coll: { type: String },
      collInfo: { type: Object }
    }
  }

  async updateRoute() {
    this.pageParams = new URLSearchParams(window.location.search);
    const source = this.pageParams.get("source");
    if (source) {
      const {url, coll} = await this.sourceToId(source);

      this.coll = coll;

      const resp = await fetch(`/wabac/api/${coll}`);
      if (resp.status != 200) {
        this.sourceUrl = source;
        this.pageState = "load";
      } else {
        const json = await resp.json();
        this.collInfo = json;
        this.pageState = "coll";      
      }
      return;
    }

    // Google Drive
    let state = this.pageParams.get("state");
    if (state) {
      try {
        state = JSON.parse(state);
        if ((state.ids instanceof Array) && state.userId && state.action === "open") {
          //this.pageState = "gdriveLoad";
          //this.loadInfo = state;
          this.pageParams.set("source", "googledrive://" + state.ids[0]);
          this.pageParams.delete("state");
          window.location.search = this.pageParams.toString();
          //window.history.pushState({}, document.title, )
          return;
        }
      } catch (e) {
        console.log(e);
      }
    }


    this.pageState = "index";
  }

  async sourceToId(url) {
    try {
      url = new URL(url, window.location.origin).href;
    } catch(e) {}

    const digest = await digestMessage(url, 'SHA-256');
    const coll = "id-" + digest.slice(0, 12);
    return {url, coll};
  }

  onCollLoaded(event) {
    this.updateRoute();
  }

  render() {
    return html`
    <link href="./frontend.css" rel="stylesheet"/>
    <section class="section">
      <div class="level">
        <h1 class="level-item has-text-centered title is-1 is-family-sans-serif has-text-weight-bold">Webrecorder Viewer</h1>
      </div>
    </section>
    ${this.renderContent()}
    `;
  }

  renderContent() {
    switch (this.pageState) {
      case "load":
        return html`<wr-loader .coll="${this.coll}" .sourceUrl="${this.sourceUrl}" @coll-loaded=${this.onCollLoaded}></wr-loader>`;

      case "coll":
        return html`<wr-coll style="flex: 1" .coll="${this.coll}" .collInfo="${this.collInfo}"></wr-coll>`;

      case "index":
        return html`<wr-index style="flex: 1" .coll="${this.coll}" .collInfo="${this.collInfo}"></wr-index>`;

      default:
        return html``;
    }
  }

  //createRenderRoot() { return this; }
}

// ===========================================================================
class WrLoader extends LitElement
{
  constructor() {
    super();
    this.progress = 0;
    this.total = 0;
    this.percent = 0;
    this.coll = "";
    this.state = "waiting";

    this.worker = new Worker("dbworker.js");
  }

  static get properties() {
    return {
      sourceUrl: { type: String },
      state: { type: String },
      progress: { type: Number },
      percent: { type: Number },
      total: { type: Number },
      status: { type: String },
      coll: { type: String },
    }
  }

  firstUpdated(props) {
    this.initMessages();
    this.doLoad();
  }

  initMessages() {
    this.worker.addEventListener("message", (event) => {
      switch (event.data.msg_type) {
        case "collProgress":
          if (event.data.name === this.coll) {
            this.progress = event.data.progress;
            this.total = event.data.total;
            this.percent = Math.round(this.progress / this.total * 100);
          }
          break;

        case "collAdded":
          if (event.data.name === this.coll) {
            if (!this.total) {
              this.total = 100;
            }
            this.progress = this.total;
            this.percent = 100;
            this.dispatchEvent(new CustomEvent("coll-loaded", {detail: event.data}));
          }
          break;
      }
    });
  }

  async doLoad() {
    const sourceUrl = this.sourceUrl;
    let source = null;

    if (sourceUrl.startsWith("googledrive://")) {
      this.state = "googledrive";
      this.fileId = sourceUrl.slice("googledrive://".length);
      source = await this.googledriveInit();
    } else {
      source = {sourceUrl};
    }

    this.state = "started";

    const msg = {"msg_type": "addColl", "name": this.coll, skipExisting: true, file: source};

    this.worker.postMessage(msg);
  }

  googledriveInit() {
    this._gdWait = new Promise((resolve) => this._gdResolve = resolve);
    return this._gdWait;
  }

  async onLoadReady(event) {
    console.log(event);
    if (this._gdResolve) {
      //const digest = await digestMessage(url, 'SHA-256');
      //this.coll = "id-" + digest.slice(0, 12);

      this._gdResolve(event.detail);
    }
  }

  updated(changedProperties) {
    if (changedProperties.get("sourceUrl")) {
      this.doLoad();
    }
  }

  render() {
    return html`
    <link href="./frontend.css" rel="stylesheet"/>
    <section class="container">
      <div class="level">
        <p class="level-item">Loading&nbsp;<b>${this.sourceUrl}</b>...</p>
      </div>
      <div class="level">
        <div class="level-item has-text-centered">
        ${this.renderContent()}
        </div>
      </div>
    </section>
    `;
  }

  renderContent() {
    switch (this.state) {
      case "googledrive":
        return html`<wr-gdrive .fileId=${this.fileId} @load-ready=${this.onLoadReady}/>`

      case "started":
        return html`
          <progress class="progress is-primary is-large" data-percent="${this.percent}" value="${this.progress}" max="${this.total}" style="max-width: 400px"/>`;

      case "waiting":
      default:
        return html`<progress class="progress is-primary is-large" style="max-width: 400px"/>`;
    }
  }

  //createRenderRoot() { return this; }
}

// ===========================================================================
class WrIndex extends LitElement
{
  constructor() {
    super();
    this.colls = [];
  }

  static get properties() {
    return {
      colls: { type: Array },
    }
  }

  static get styles() {
    return css`
    fa-icon {
      cursor: pointer;
      display: inline-flex;
    }

    fa-icon.fa-spin {
      -webkit-animation: fa-spin 2s infinite linear;
              animation: fa-spin 2s infinite linear; }
    }
    
    @-webkit-keyframes fa-spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg); }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg); } }
    
    @keyframes fa-spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg); }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg); } }
    `;
  }

  firstUpdated() {
    this.loadColls();
  }

  async loadColls() {
    const resp = await fetch("/wabac/api/index");
    const json = await resp.json();
    this.colls = json.colls;
  }

  async deleteColl(event) {
    event.preventDefault();

    const index = Number(event.target.getAttribute("data-coll-index"));
    const coll = this.colls[index];
    if (!coll || coll.deleting) {
      return;
    }
    this.colls[index].deleting = true;

    //event.target.setAttribute("class", "fas fa-cog fa-spin");
    //event.target.iClass = "fas fa-cog fa-spin";
    //event.target.firstUpdated();
    //event.target.requestUpdate();

    const resp = await fetch(`/wabac/api/${coll.id}`, {method: 'DELETE'});
    if (resp.status === 200) {
      const json = await resp.json();
      this.colls = json.colls;
    }
    return false;
  }

  render() {
    return html`
    <link href="./frontend.css" rel="stylesheet"/>
    <section class="container">
      <nav class="panel">
        <p class="panel-heading">Local Archive Collections</p>
        ${this.colls.map((coll, i) => html`
          <div class="panel-block">
            <div class="level" style="width: 100%">
              <div class="level-left">
                <div>
                  <span class="subtitle"><a href="?source=${coll.sourceId}">${coll.title || coll.displayName}</a></span>
                  <p><i>Source: ${coll.displayName}</i></p>
                </div>
              </div>
              <div class="level-right">
                  <a data-coll-index="${i}" @click="${this.deleteColl}" class="delete"></a>
                  <!--<fa-icon data-coll-index="${i}" @click="${this.deleteColl}" class="far fa-trash-alt"/>-->
              </div>
          </div>
        `)}
      </nav>
    </section>
    `;
  }

  //createRenderRoot() { return this; }
}

// ===========================================================================
class WrColl extends LitElement
{
  constructor() {
    super();
    this.coll = "";
    this.offset = 0;
    this.currList = 0;
    this.bookmarks = {};
    this.collInfo = {lists: []};
    this.currList = null;
    this.lastST = 0;

    this.hasCurated = false;
    this.currTab = "";

    this.clickTime = 0;
  }

  static get properties() {
    return {
      hasCurated: { type: Boolean },
      collInfo: { type: Object },
      coll: { type: String },
      bookmarks: { type: Object },
      currList: { type: Number },
      currTab: { type: String }
    }
  }

  async doLoadBookmarks() {
    this.hasCurated = (this.collInfo.lists && this.collInfo.lists.length);
    this.bookmarks = {};

    if (!this.hasCurated) {
      return;
    }

    const resp = await fetch(`/wabac/api/${this.coll}/bookmarks?offset=${this.offset}`);
    const json = await resp.json();

    this.total = json.total;

    for (const bookmark of json.bookmarks) {
      if (!this.bookmarks[bookmark.list]) {
        this.bookmarks[bookmark.list] = [];
      }
      this.bookmarks[bookmark.list].push(bookmark);
    }
  }

  firstUpdated() {
    window.addEventListener("hashchange", () => this.onHashChange());

    if (!this.collInfo.title) {
      this.collInfo.title = "Archive from " + this.collInfo.displayName;
    }

    this.doLoadBookmarks().then(() => this.onHashChange());
  }

  onHashChange() {
    const hash = window.location.hash;
    if (!hash) {
      this.currTab = this.hasCurated ? "curated" : "resources";
      return;
    }

    if (hash === "#resources") {
      this.currTab = "resources";
    } else if (hash === "#curated") {
      this.currTab = "curated";
    }

    if (hash.startsWith("#list-")) {
      const id = hash.slice(6);
      this.currTab = "curated";
      this.scrollToList(id);
    }
  }

  updated(changedProperties) {
    if (changedProperties.get("lists")) {
      this.doLoadBookmarks();
    }
  }

  onTabClick(event) {
    event.preventDefault();
    const hash = event.target.getAttribute("href");
    //this.currTab = hash.slice(1);
    window.location.hash = hash;
    return false;
  }

  render() {
    return html`
    <link href="./frontend.css" rel="stylesheet"/>
    <nav class="panel is-primary">
      <div class="panel-heading">${this.collInfo.title}
      <a @click="${this.deleteColl}" class="is-pulled-right delete"></a>
      </div>
      <p class="panel-tabs is-boxed">
      ${this.hasCurated ? html`
        <a @click="${this.onTabClick}" href="#curated" class="is-size-6 ${this.currTab === 'curated' ? 'is-active' : ''}">Curated Pages</a>
      ` : ``}
        <a @click="${this.onTabClick}" href="#resources" class="is-size-6 ${this.currTab === 'resources' ? 'is-active' : ''}">URL Resources</a>
      </p>
      ${this.hasCurated ? html`
      <section id="curated" class="panel-block " style="display: ${this.currTab == 'curated' ? 'flex' : 'none'}">
        <div class="columns">
          <div class="column is-one-third" style="max-height: calc(100vh - 241px)">
            <div class="menu" style="overflow-y: auto; height: 100%;">
              <ul class="menu-list">
                <li>
                  <a href="#list-0" class="${!this.currList ? 'is-active' : ''}"
                    @click=${(e) => this.scrollToList(0)}>${this.collInfo.title}</a>
                  <ul class="menu-list">${this.collInfo.lists.map(list => html`
                    <li>
                      <a @click=${this.onClickScroll} href="#list-${list.id}"
                      data-list="${list.id}" 
                      class="${this.currList === list.id ? 'is-active' : ''}">${list.title}</a>
                    </li>`)}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div id="content" @scroll=${this.onScroll} class="column main-scroll" style="max-height: calc(100vh - 241px)">
          <section id="list-0" class="container">
          <h2 class="title is-3">${this.collInfo.title}</h2>
          ${unsafeHTML(marked(this.collInfo.desc))}
          </section>
            ${this.renderContent()}
          </div>
        </div>
      </section>
      ` : ``}
      <wr-coll-resources .coll=${this.coll} id="resources" class="panel-block is-paddingless" style="display: ${this.currTab == 'resources' ? 'initial' : 'none'}">
      </wr-coll-resources>
    </nav>
    `;
  }

  renderContent() {
    return html`
    ${this.collInfo.lists.map((list, i) => html`
      <article id="list-${list.id}" class="media content">
        <div class="media-content">
          <div class="content"><p class="subtitle is-4">${list.title}</p></div>
          <hr/>
          <div class="content">${list.desc}</div>
          <ol style="margin-left: 30px">
            ${this.bookmarks[list.id] ? this.bookmarks[list.id].map((b) => html`
              <li><article class="media">
                <div class="media-content">
                  <a href="${this.bookmarkUrl(b)}">
                    <p>${b.title}</p>
                    <p>${b.url}</p>
                  </a>
                  <p>${b.date}</p>
                  <p>${b.desc}</p>
                </div>
              </article></li>
            `) : html``}
          </ol>
        </div>
      </article>
      `)}
    `;
  }

  onClickScroll(event) {
    this.scrollToList(event.target.getAttribute("data-list"));
  }

  scrollToList(id) {
    this.currList = Number(id);
    const opts = {behavior: "smooth", block: "start", inline: "nearest"};
    this.clickTime = new Date().getTime();
    this.renderRoot.getElementById("list-" + this.currList).scrollIntoView(opts);
  }

  onScroll(event) {
    const scrollable = event.target;//this.renderRoot.querySelector("#curated");
    const curr = this.renderRoot.getElementById("list-" + this.currList);

    if (!curr) {
      return;
    }

    let next = curr;
    const target = scrollable.offsetTop;
    const currST = scrollable.scrollTop;

    if (currST > this.lastST) {
      while (next.nextElementSibling && next.nextElementSibling.getBoundingClientRect().top < target) {
        next = next.nextElementSibling;
      }
    } else {
      while (next.previousElementSibling && next.previousElementSibling.getBoundingClientRect().bottom >= target) {
        next = next.previousElementSibling;
      }
    }
    this.lastST = currST;
    if (next && next != curr) {
      if (next.id.startsWith("list-")) {
        this.currList = Number(next.id.slice(5));
      }
    }

    if ((new Date().getTime() - this.clickTime) < 1000) {
      return;
    }

    const sel = this.renderRoot.querySelector(`a[data-list="${this.currList}"]`);
    if (sel) {
      const opts = {behavior: "smooth", block: "nearest", inline: "nearest"};
      sel.scrollIntoView(opts);
    }
  }

  bookmarkUrl(b) {
    return `/wabac/${this.coll}/${getTS(b.date)}/${b.url}`;
  }

  //createRenderRoot() { return this; }
}

// ===========================================================================
class WrResources extends LitElement
{
  constructor() {
    super();
    this.currMime = "text/html,text/xhtml";
    this.results = [];
    this.filteredResults = [];
    this.tryMore = false;
    this.loading = false;

    this.urlSearch = "";
    this.urlSearchType = "exact";

    this.filters = [
      {name: "HTML", filter: "text/html,text/xhtml"},
      {name: "Images", filter: "image/"},
      {name: "Audio/Video", filter: "audio/,video/"},
      {name: "PDF", filter: "application/pdf"},
      {name: "All", filter: ""}
    ]
  }

  static get properties() {
    return {
      coll: { type: String },
      currMime: { type: String },
      //filterText: { type: String },
      filteredResults: { type: Array },
      //loading: { type: Boolean }
    }
  }

  static get styles() {
    return css`

    table {
      table-layout: fixed;
      word-wrap: break-word;
      text-overflow: ellipsis;
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
      word-break: break-word;
    }
    .loading-cog {
      width: 100vw;
      display: flex;
    }
    `;
  }

  firstUpdated() {
    this.doLoadResources();
  }

  async doLoadResources() {
    const count = 100;
    const url = (this.urlSearchType !== "contains" ? this.urlSearch : "");
    const prefix = url && this.urlSearchType === "prefix" ? 1 : 0;

    const params = new URLSearchParams({
      mime: this.currMime,
      url,
      prefix,
      count
    }).toString();
    let resp = await fetch(`/wabac/api/${this.coll}/urls?${params}`);
    resp = await resp.json();
    this.results = resp.urls;
    this.tryMore = (resp.urls.length === count);
    this.filter();
  }

  async doLoadMore() {
    const count = 100;

    if (!this.tryMore || !this.results.length) {
      return;
    }
    if (this.loading) {
      return;
    }
    this.loading = true;
    
    const url = (this.urlSearchType !== "contains" ? this.urlSearch : "");
    const prefix = url && this.urlSearchType === "prefix" ? 1 : 0;

    const last = this.results[this.results.length - 1];
    const params = new URLSearchParams({
      mime: this.currMime,
      url,
      prefix,
      fromMime: last.mime,
      fromUrl: last.url,
      fromTs: new Date(last.date).getTime(),
      count
    }).toString();

    let resp = await fetch(`/wabac/api/${this.coll}/urls?${params}`);
    resp = await resp.json();
    this.results = this.results.concat(resp.urls);
    console.log(resp.urls.length);
    this.tryMore = (resp.urls.length === count);
    this.filter();
    this.loading = false;
  }

  onChangeSearch(event) {
    this.currMime = event.target.value;
    this.doLoadResources();
  }

  onChangeUrlSearch(event) {
    this.urlSearch = event.target.value;
    this.doLoadResources();
  }

  onClickUrlType(event) {
    this.urlSearchType = event.target.value;
    this.doLoadResources();
  }

  filter() {
    const filteredResults = [];
    const filterText = (this.urlSearchType === "contains" ? this.urlSearch : "");
    for (const result of this.results) {
      if (!filterText || result.url.indexOf(filterText) >= 0) {
        filteredResults.push(result);
      }
    }
    this.filteredResults = filteredResults;
  }

  onScroll(event) {
    //console.log("pos", event.target.firstElementChild.getBoundingClientRect().bottom);
    const element = event.target;
    const diff = (element.scrollHeight - element.scrollTop) - element.clientHeight;
    if (this.tryMore && diff < 40) {
      this.doLoadMore();
    }
  }

  render() {
    return html`
    <link href="./frontend.css" rel="stylesheet"/>
    <div class="notification level is-marginless">
      <div class="control level-left">
        <div>
          <input type="text" style="width: 400px" class="input level-item" @input="${this.onChangeUrlSearch}" type="text" placeholder="Search URL">
          <div class="control">
            <label class="radio has-text-left"><input type="radio" name="urltype" value="exact" ?checked="${this.urlSearchType === 'exact'}" @click="${this.onClickUrlType}">&nbsp;Exact</label>
            <label class="radio has-text-left"><input type="radio" name="urltype" value="prefix" ?checked="${this.urlSearchType === 'prefix'}" @click="${this.onClickUrlType}">&nbsp;Prefix</label>
            <label class="radio has-text-left"><input type="radio" name="urltype" value="contains" ?checked="${this.urlSearchType === 'contains'}" @click="${this.onClickUrlType}">&nbsp;Contains</label>
          </div>
        </div>
        <p class="level-item">Showing ${this.filteredResults.length} Results</p>
      </div>
      <div class="control level-right">
        <span>Resource Type:&nbsp;&nbsp;</span>
        ${this.filters.map((filter) => html`
        <label class="radio has-text-left">
          <input type="radio" name="mime"
          value="${filter.filter}"
          @click="${this.onChangeSearch}"
          ?checked="${filter.filter === this.currMime}"
          >
          ${filter.name}
        </label>
        `)}
      </div>
    </div>
    <div class="" style="">
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th class="col-url">URL</th>
            <th class="col-ts">Timestamp</th>
            <th>Mime</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody class="main-scroll" @scroll="${this.onScroll}" style="max-height: calc(100vh - 391px); width: 100vw">
        ${this.filteredResults.length ? 
          this.filteredResults.map((result) => html`
            <tr>
              <td class="col-url"><a href="/wabac/${this.coll}/${result.ts}/${result.url}">${result.url}</a></td>
              <td class="col-ts">${new Date(result.date).toLocaleString()}</td>
              <td>${result.mime}</td>
              <td>${result.status}</td>
            </tr>
          `) : html`<div class="section"><i>No Results Found.</i></div>`}
        </tbody>
      </table>
    </div>
    `;
  }
}

// ===========================================================================
class WrGdrive extends LitElement
{
  constructor() {
    super();
    this.manual = false;
    this.fileId = "";
  }

  static get properties() {
    return {
      manual: { type: Boolean },
      fileId: { type: String }
    }
  }

  onLoad() {
    this.gauth('none', (response) => {
      if (response.error === "immediate_failed") {
        this.manual = true;
      } else {
        this.authed(response);
      }
    });
  }

  onClickAuth() {
    this.gauth(undefined, (response) => {
      if (!response.error) {
        this.authed(response);
      }
    });
  }

  async authed(response) {
    const fileId = this.fileId;
    const metadataUrl = `https://www.googleapis.com/drive/v3/files/${fileId}`;
    const authToken = response.access_token;
    const headers = {"Authorization": `Bearer ${authToken}`};

    const resp = await fetch(metadataUrl + "?fields=name", {headers});
    const metadata = await resp.json();

    const sourceId = `googledrive://${fileId}`;
    const name = metadata.name;
    const displayName = `Google Drive file: ` + metadata.name;

    const sourceUrl = metadataUrl + "?alt=media";

    this.dispatchEvent(new CustomEvent("load-ready", {detail: {name, displayName, sourceId, sourceUrl, headers}}));
  }

  render() {
    return html`
    ${this.script()}
    ${!this.manual ? html`
    <p>Authorizing Google Drive...</p>
    ` : html`
    <button @click="${this.onClickAuth}">Allow Google Drive</button>
    `}`;
  }

  script() {
    const script = document.createElement('script');
    script.onload = (() => this.onLoad());
    script.src = 'https://apis.google.com/js/platform.js';
    return script;
  }

  gauth(prompt, callback) {
    gapi.load('auth2', () => {
      gapi.auth2.authorize({
          client_id: "758792702348-kokjbpv1leqid7ac7tjq7pbp37cg05kq.apps.googleusercontent.com",
          scope: "https://www.googleapis.com/auth/drive.file",
          prompt
      }, callback);
    });
  }
}


// ===========================================================================
// ===========================================================================

async function main() {
  const swPromise = initSW("swonly.js?replayPrefix=wabac&stats=true");
  await swPromise;
  customElements.define("app-main", AppMain);
  customElements.define("wr-index", WrIndex);
  customElements.define("wr-loader", WrLoader);
  customElements.define("wr-coll", WrColl);
  customElements.define("wr-coll-resources", WrResources);
  customElements.define("wr-gdrive", WrGdrive);
}

main();
