import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg';
import { styleMap } from 'lit-html/directives/style-map';

import { initSW, digestMessage, getTS } from './pageutils';

import prettyBytes from 'pretty-bytes';
import marked from 'marked';

import '../scss/main.scss';

//import 'fa-icons';
//import '@fortawesome/fontawesome-free/sprites/solid.svg';
import fasArrowLeft from '@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg';
import farListAlt from '@fortawesome/fontawesome-free/svgs/solid/list-alt.svg';
import fasSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg';
import farPlayCircle from '@fortawesome/fontawesome-free/svgs/regular/play-circle.svg';
import fabGoogleDrive from '@fortawesome/fontawesome-free/svgs/brands/google-drive.svg';


// ===========================================================================
class AppMain extends LitElement
{

  constructor() {
    super();
    this.sourceUrl = null;
    this.pageParams = {};
  }

  static get properties() {
    return {
      pageParams: { type: Object },
      sourceUrl: { type: String },
    }
  }

  static get styles() {
    return css`
    #logo {
      max-height: 2.5rem;
      margin-right: 8px;
    }
    .has-allcaps {
      font-variant-caps: all-small-caps;
    }
    `;
  }

  render() {
    return html`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <div class="container" style="display: sticky">
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item has-text-weight-bold is-size-5 has-allcaps " href="/">
        <img id="logo" src="/static/logo.svg"/>
        <span class="has-text-primary">replay</span>
        <span class="has-text-info">web.page</span>
      </a>
      <a class="navbar-item" href="https://webrecorder.net/">
      <span class=""><small>A <span class="font-ssp">Webrecorder</span> Project</small></span>
      </a>
    </div>
  </nav>
  </div>
    ${this.sourceUrl ? html`
      <wr-coll sourceUrl="${this.sourceUrl}"></wr-coll>
    ` : this.sourceUrl === "" ? html`<wr-index></wr-index>` : html``}
    `;
  }

  firstUpdated() {
    this.initRoute();
  }

  initRoute() {
    this.pageParams = new URLSearchParams(window.location.search);

    // Google Drive
    let state = this.pageParams.get("state");
    if (state) {
      try {
        state = JSON.parse(state);
        if ((state.ids instanceof Array) && state.userId && state.action === "open") {
          this.pageParams.set("source", "googledrive://" + state.ids[0]);
          this.pageParams.delete("state");
          window.location.search = this.pageParams.toString();
          return;
        }
      } catch (e) {
        console.log(e);
      }
    }

    this.sourceUrl = this.pageParams.get("source") || "";
  }
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

    this.worker = new Worker("./dist/dbworker.js");
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
            this.percent = event.data.percent;
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
    let sourceUrl = this.sourceUrl;
    let source = null;

    // custom protocol handlers here...
    try {
      const sup = new URL(this.sourceUrl);
      let firstSlash = null;

      if (!sup.host) {
        firstSlash = sup.pathname.indexOf("/", 2);
      }

      switch (sup.protocol) {
        case "googledrive:":
          this.state = "googledrive";
          if (firstSlash < 0) {
            firstSlash = undefined;
          }
          this.fileId = sup.pathname.slice(2, firstSlash);
          source = await this.googledriveInit();
          break;

        case "s3:":
          sourceUrl = `https://${sup.pathname.slice(2, firstSlash)}.s3.amazonaws.com${sup.pathname.slice(firstSlash)}`;
          source = {sourceUrl,
                    sourceId: this.sourceUrl,
                    name: this.sourceUrl};
          break;

      }
    } catch (e) {}

    if (!source) {
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
    <link href="./dist/frontend.css" rel="stylesheet"/>
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
          <progress class="progress is-primary is-large" data-percent="${this.percent}" value="${this.percent}" max="100" style="max-width: 400px"/>`;

      case "waiting":
      default:
        return html`<progress class="progress is-primary is-large" style="max-width: 400px"/>`;
    }
  }
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

    const index = Number(event.currentTarget.getAttribute("data-coll-index"));
    const coll = this.colls[index];
    if (!coll || coll.deleting) {
      return;
    }
    this.colls[index].deleting = true;

    const resp = await fetch(`/wabac/api/${coll.id}`, {method: 'DELETE'});
    if (resp.status === 200) {
      const json = await resp.json();
      this.colls = json.colls;
    }
    return false;
  }

  static get styles() {
    return css`
    .size {
      margin-right: 20px;
    }
    `;
  }

  render() {
    return html`
    <link href="./dist/frontend.css" rel="stylesheet"/>
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
                  <span class="size">Size: ${prettyBytes(Number(coll.size || 0))}</span>
                  <a data-coll-index="${i}" @click="${this.deleteColl}" class="delete"></a>
              </div>
          </div>
        `)}
      </nav>
    </section>
    `;
  }
}

// ===========================================================================
class WrColl extends LitElement
{
  constructor() {
    super();
    this.sourceUrl = null;

    this.baseApiPrefix = "/wabac/api";
    this.baseReplayPrefix = "/wabac";
    this.apiPrefix = "";
    this.replayPrefix = "";

    this.coll = "";

    this.collInfo = null;

    this.hasCurated = false;

    this.tabData = {};
  }

  static get properties() {
    return {
      sourceUrl: { type: String },

      collInfo: { type: Object },
      coll: { type: String },

      hasCurated: { type: Boolean },

      tabData: { type: Object }
    }
  }

  firstUpdated() {
    window.addEventListener("hashchange", (event) => this.onHashChange(event));

    this.doUpdateInfo().then(() => this.onHashChange());
  }

  async sourceToId(url) {
    try {
      url = new URL(url, window.location.origin).href;
    } catch(e) {}

    const digest = await digestMessage(url, 'SHA-256');
    const coll = "id-" + digest.slice(0, 12);
    return {url, coll};
  }

  updated(changedProperties) {
    if (changedProperties.get("sourceUrl")) {
      this.doUpdateInfo();
    }
    if (changedProperties.get("tabData")) {
      this._manualHash = true;
      // don't add empty params to shorten query
      Object.keys(this.tabData).
        forEach(key => !this.tabData[key] && delete this.tabData[key]);
      window.location.hash = "#" + new URLSearchParams(this.tabData).toString();
    }
  }

  async doUpdateInfo() {
    const {url, coll} = await this.sourceToId(this.sourceUrl);

    this.coll = coll;

    const apiPrefix = this.baseApiPrefix + "/" + coll;
    const replayPrefix = this.baseReplayPrefix + "/" + coll;

    const resp = await fetch(apiPrefix);

    if (resp.status != 200) {
      this.collInfo = {};
      this.hasCurated = false;
      return;
    }

    const json = await resp.json();

    this.collInfo = {apiPrefix, replayPrefix, coll, ...json};

    if (!this.collInfo.title) {
      this.collInfo.title = "Archive from " + this.collInfo.displayName;
    }

    this.hasCurated = (this.collInfo.lists && this.collInfo.lists.length);
  }

  onCollLoaded(event) {
    this.doUpdateInfo();
  }

  onHashChange(event) {
    if (this._manualHash) {
      this._manualHash = false;
      return;
    }
    const hash = window.location.hash;
    if (hash) {
      this.tabData = Object.fromEntries(new URLSearchParams(hash.slice(1)).entries());
    }
    if (!this.tabData.currTab) {
      this.tabData = {...this.tabData, currTab: this.hasCurated ? "curated" : "resources"};
    }
  }

  onTabClick(event) {
    event.preventDefault();
    const hash = event.currentTarget.getAttribute("href");
    this.tabData = {...this.tabData, currTab: hash.slice(1)};
    return false;
  }

  onCollTabNav(event) {
    console.log(event.currentTarget);
    this.tabData = {...this.tabData, ...event.detail};
  }

  static get styles() {
    return css`
    .icon {
      vertical-align: text-top;
    }
    .back fa-icon {
      width: 1.5em;
      vertical-align: bottom;
      line-height: 0.5em;
    }
    .is-active {
      font-weight: bold;
    }
    .header-info {
      font-size: initial;
      font-weight: initial;
      margin-right: 20px;
    }
    `;
  }

  render() {
    return html`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    ${this.renderColl()}
    `;
  }

  renderColl() {
    if (this.collInfo && !this.collInfo.coll) {
      return html`<wr-loader .coll="${this.coll}" .sourceUrl="${this.sourceUrl}" @coll-loaded=${this.onCollLoaded}></wr-loader>`;
    } else if (this.collInfo) {
      return html`
      <nav class="panel is-light">
        <div class="panel-heading">
          <a href="/" class="back">
            <fa-icon size="1.3em" .svg="${fasArrowLeft}"></fa-icon>
          </a>
          <span>${this.collInfo.title}</span>
          <a @click="${this.deleteColl}" class="is-pulled-right delete"></a>
          <span class="header-info is-pulled-right">Size: ${prettyBytes(Number(this.collInfo.size || 0))}</span>
        </div>
        <p class="panel-tabs is-boxed">
          ${this.hasCurated ? html`
            <a @click="${this.onTabClick}" href="#curated"
            class="is-size-6 ${this.tabData.currTab === 'curated' ? 'is-active' : ''}">
            <span class="icon"><fa-icon .svg="${farListAlt}"></fa-icon></span>
            Curated Pages</a>
          ` : ``}

          <a @click="${this.onTabClick}" href="#resources"
          class="is-size-6 ${this.tabData.currTab === 'resources' ? 'is-active' : ''}">
          <span class="icon"><fa-icon .svg="${fasSearch}"></fa-icon></span>URL Resources</a>

          ${this.tabData.replayUrl ? html`
            <a @click="${this.onTabClick}" href="#replay"
            class="is-size-6 ${this.tabData.currTab === 'replay' ? 'is-active' : ''}">
            <span class="icon"><fa-icon .svg="${farPlayCircle}"></fa-icon></fa-icon></span>Replay!</a>
          ` : ``}

        </p>
        ${this.renderCollTabs()}
      </nav>`;
    } else {
      return html``;
    }
  }

  renderCollTabs() {
    return html`
    <wr-coll-curated .collInfo="${this.collInfo}"
    currList="${this.tabData.currList || 0}"
    @coll-tab-nav="${this.onCollTabNav}" id="curated" class="panel-block ${this.tabData.currTab === 'curated' ? '' : 'is-hidden'}">
    </wr-coll-curated>

    <wr-coll-resources .collInfo="${this.collInfo}"
    urlSearch="${this.tabData.urlSearch || ""}"
    urlSearchType="${this.tabData.urlSearchType || ""}"
    currMime="${this.tabData.currMime || "text/html,text/xhtml"}"
    @coll-tab-nav="${this.onCollTabNav}" id="resources" class="panel-block is-paddingless ${this.tabData.currTab === 'resources' ? '' : 'is-hidden'}">
    </wr-coll-resources>

    ${this.tabData.currTab === "replay" ? html`
    <wr-replay-page .collInfo="${this.collInfo}" replayUrl="${this.tabData.replayUrl}" replayTS="${this.tabData.replayTS}">
    </wr-replay-page>
    ` : ``}
    `;
  }
}


// ===========================================================================
class WrCuratedPages extends LitElement
{
  constructor() {
    super();

    this.collInfo = null;

    this.currList = 0;

    this.curatedPages = {};

    this.offset = 0;
    this.lastST = 0;
    this.clickTime = 0;
  }

  static get properties() {
    return {
      collInfo: { type: Object },

      curatedPages: { type: Object },
      currList: { type: Number },
    }
  }

  firstUpdated() {
    this.doLoadCurated();
  }

  updated(changedProperties) {
    if (changedProperties.get("collInfo")) {
      this.doLoadCurated();
    }
  }

  async doLoadCurated() {
    this.curatedPages = {};

    const resp = await fetch(`${this.collInfo.apiPrefix}/curatedPages?offset=${this.offset}`);
    const json = await resp.json();

    this.total = json.total;

    for (const curated of json.curatedPages) {
      if (!this.curatedPages[curated.list]) {
        this.curatedPages[curated.list] = [];
      }
      this.curatedPages[curated.list].push(curated);
    }

    if (this.currList) {
      this.scrollToList(this.currList);
    }
  }

  static get styles() {
    return css`
    .column {
      max-height: calc(100vh - 145px);
    }

    #content {
      margin-top: 10px;
      max-height: calc(100vh - 155px);
    }
    `;
  }

  render() {
    return html`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <div class="columns">
      <div class="column is-one-third">
        <div class="menu" style="overflow-y: auto; height: 100%;">
          <ul class="menu-list">
            <li>
              <a href="#list-0" class="${!this.currList ? 'is-active' : ''}"
                @click=${this.onClickScroll}>${this.collInfo.title}</a>
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
      <div id="content" @scroll=${this.onScroll} class="column main-scroll">
        <section id="list-0" class="container">
          <h2 class="title is-3">${this.collInfo.title}</h2>
          ${this.collInfo.desc ? unsafeHTML(marked(this.collInfo.desc)) : ''}
        </section>
        ${this.renderContent()}
      </div>
    </div>
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
            ${this.curatedPages[list.id] ? this.curatedPages[list.id].map((p) => html`
              <li><article class="media">
                <div class="media-content">
                  <a @click="${this.onReplay}" data-url="${p.url}" data-ts="${getTS(p.date)}" href="#">
                    <p>${p.title}</p>
                    <p>${p.url}</p>
                  </a>
                  <p>${p.date}</p>
                  <p>${p.desc}</p>
                </div>
              </article></li>
            `) : html``}
          </ol>
        </div>
      </article>
      `)}
    `;
  }

  onReplay(event) {
    event.preventDefault();
    const detail = {replayUrl: event.currentTarget.getAttribute("data-url"),
                    replayTS: event.currentTarget.getAttribute("data-ts"),
                    currTab: "replay"
                   }
    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail}));
    return false;
  }

  onClickScroll(event) {
    event.preventDefault();
    this.scrollToList(event.currentTarget.getAttribute("data-list"));
    return false;
  }

  scrollToList(id) {
    this.currList = Number(id);
    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {currList: this.currList || undefined}}));
    const opts = {behavior: "smooth", block: "nearest", inline: "nearest"};
    this.clickTime = new Date().getTime();
    this.renderRoot.getElementById("list-" + this.currList).scrollIntoView(opts);
  }

  onScroll(event) {
    const scrollable = event.currentTarget;
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
        this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {currList: this.currList}}));
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
}

// ===========================================================================
class WrResources extends LitElement
{
  constructor() {
    super();
    this.collInfo = null;

    this.currMime = "text/html,text/xhtml";
    this.urlSearch = "";
    this.urlSearchType = "";

    this.filteredResults = [];

    this.results = [];

    this.tryMore = false;
    this.loading = false;

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
      collInfo: { type: Object },
      currMime: { type: String },
      urlSearch: { type: String },
      urlSearchType: { type: String },
      filteredResults: { type: Array },
    }
  }

  firstUpdated() {
    this.doLoadResources();
  }

  async doLoadResources() {
    const count = 100;
    const url = (this.urlSearchType !== "contains" ? this.urlSearch : "");
    const prefix = url && this.urlSearchType === "prefix" ? 1 : 0;

    const detail = {urlSearch: this.urlSearch,
                    currMime: this.currMime,
                    urlSearchType: this.urlSearchType};

    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail}));

    const params = new URLSearchParams({
      mime: this.currMime,
      url,
      prefix,
      count
    }).toString();

    let resp = await fetch(`${this.collInfo.apiPrefix}/urls?${params}`);
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

    let resp = await fetch(`${this.collInfo.apiPrefix}/urls?${params}`);
    resp = await resp.json();
    this.results = this.results.concat(resp.urls);
    console.log(resp.urls.length);
    this.tryMore = (resp.urls.length === count);
    this.filter();
    this.loading = false;
  }

  onChangeTypeSearch(event) {
    this.currMime = event.currentTarget.value;
    this.doLoadResources();
  }

  onChangeUrlSearch(event) {
    this.urlSearch = event.currentTarget.value;
    this.doLoadResources();
  }

  onClickUrlType(event) {
    this.urlSearchType = event.currentTarget.value;
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
    const element = event.currentTarget;
    const diff = (element.scrollHeight - element.scrollTop) - element.clientHeight;
    if (this.tryMore && diff < 40) {
      this.doLoadMore();
    }
  }

  static get styles() {
    return css`
    :host {
      display: flex;
      flex-direction: column;
    }
    .notification {
      width: 100%;
    }
    .main-scroll {
      max-height: calc(100vh - 255px);
      width: 100vw;
    }
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
    `;
  }

  render() {
    return html`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <div class="notification level is-marginless">
      <div class="control level-left">
        <div>
          <input type="text" style="width: 400px" class="input level-item" @input="${this.onChangeUrlSearch}" value="${this.urlSearch}" type="text" placeholder="Search URL">
          <div class="control">
            <label class="radio has-text-left"><input type="radio" name="urltype" value="exact" ?checked="${this.urlSearchType === ''}" @click="${this.onClickUrlType}">&nbsp;Exact</label>
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
          @click="${this.onChangeTypeSearch}"
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
            <th class="col-mime">Mime</th>
            <th class="col-status">Status</th>
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
    </div>
    `;
  }

  onReplay(event) {
    event.preventDefault();
    const detail = {replayUrl: event.currentTarget.getAttribute("data-url"),
                    replayTS: event.currentTarget.getAttribute("data-ts"),
                    currTab: "replay"
                   }
    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail}));
    return false;
  }
}

// ===========================================================================
class WrReplayPage extends LitElement
{
  static get properties() {
    return {
      collInfo: {type: Object },

      replayUrl: { type: String },
      replayTS: { type: String }
    }
  }

  static get styles() {
    return css`
      host: {
        display: flex;
      }

      iframe {
        width: 100vw;
        height: calc(100vh - 150px);
      }
    `;
  }

  render() {
    return html`
    <iframe src="${this.collInfo.replayPrefix}/${this.replayTS || ""}mp_/${this.replayUrl}"></iframe>
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
    <p>Connecting to Google Drive...</p>
    ` : html`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <button class="button is-primary is-rounded" @click="${this.onClickAuth}">
    <span class="icon"><fa-icon .svg="${fabGoogleDrive}"></fa-icon></span>
    <span>Authorize Google Drive</span>
    </button>
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
class WrCollProxy extends LitElement
{
  constructor() {
    super();
    this.currTab = "replay";
    this.replayTS = "";
  }

  static get properties() {
    return {
      replayUrl: { type: String },
      replayTS: { type: String },
      source: { type: String },

      paramString: { type: String }
    }
  }

  firstUpdated() {
    this.paramString = new URLSearchParams({
      replayUrl: this.replayUrl,
      replayTS: this.replayTS,
      source: this.source,
      currTab: this.currTab
    });
  }

  render() {
    return html`
    <iframe src="http://localhost:9990/?${this.paramString}"></iframe>
    `;
  }
}


class WrFaIcon extends LitElement
{
  constructor() {
    super();
    this.size = "1.1em";
  }

  static get properties() {
    return {
      svg: { type: String },
      size: { type: String }
    }
  }

  static get styles() {
    return css`
    :host {
      display: inline-block;
      padding: 0;
      margin: 0;
    }
    :host svg {
      fill: var(--fa-icon-fill-color, currentcolor);
      width: var(--fa-icon-width, 19px);
      height: var(--fa-icon-height, 19px);
    }
    `;
  }

  render() {
    if (!this.svg) {
      return html``;
    }

    const styles = {width: this.size, height: this.size};

    return html`<svg style="${styleMap(styles)}"><g>${unsafeSVG(this.svg)}</g></svg>`;
  }
}


// ===========================================================================
// ===========================================================================

async function main() {
  const swPromise = initSW("./swonly.js?replayPrefix=wabac&stats=true");
  await swPromise;
  customElements.define("app-main", AppMain);
  customElements.define("wr-index", WrIndex);
  customElements.define("wr-loader", WrLoader);
  customElements.define("wr-coll", WrColl);
  customElements.define("wr-coll-proxy", WrCollProxy);
  customElements.define("wr-coll-resources", WrResources);
  customElements.define("wr-coll-curated", WrCuratedPages);
  customElements.define("wr-replay-page", WrReplayPage);
  customElements.define("wr-gdrive", WrGdrive);
  customElements.define("fa-icon", WrFaIcon);
}

main();
