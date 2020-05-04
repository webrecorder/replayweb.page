import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg';
import { styleMap } from 'lit-html/directives/style-map';

import { digestMessage, getTS, tsToDate } from './pageutils';
import { register } from 'register-service-worker';

import prettyBytes from 'pretty-bytes';
import marked from 'marked';

import '../scss/base.scss';
import allCssRaw from '../scss/main.scss';

//import fasArrowLeft from '@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg';

//import fasInfo from '@fortawesome/fontawesome-free/svgs/solid/info-circle.svg';
import fasHelp from '@fortawesome/fontawesome-free/svgs/solid/question-circle.svg';
import farListAlt from '@fortawesome/fontawesome-free/svgs/solid/list-alt.svg';
import fasSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg';
import fasFile from '@fortawesome/fontawesome-free/svgs/solid/file.svg';
import farPlayCircle from '@fortawesome/fontawesome-free/svgs/regular/play-circle.svg';

import fabGoogleDrive from '@fortawesome/fontawesome-free/svgs/brands/google-drive.svg';
import fasUpload from '@fortawesome/fontawesome-free/svgs/solid/upload.svg'


// ===========================================================================
const allCss = unsafeCSS(allCssRaw);
function wrapCss(custom) {
  return [allCss, custom];
}

// ===========================================================================
class AppMain extends LitElement
{

  constructor() {
    super();
    this.sourceUrl = null;
    this.showTerms = false;
    this.pageParams = {};
  }

  static get properties() {
    return {
      pageParams: { type: Object },
      sourceUrl: { type: String },
      navMenuShown: { type: Boolean },
      showTerms: { type: Boolean }
    }
  }

  static get styles() {
    return wrapCss(css`
    #logo {
      max-height: 2.5rem;
      margin-right: 8px;
    }
    .has-allcaps {
      font-variant-caps: all-small-caps;
    }
    `);
  }

  render() {
    return html`
    <div class="container" style="display: sticky">
      <nav class="navbar breadcrumbs" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold is-size-5 has-allcaps " href="/">
          <img id="logo" src="/static/logo.svg"/>
          <span class="has-text-primary">replay</span>
          <span class="has-text-info">web.page</span>
        </a>
        <a role="button" @click="${this.onNavMenu}" class="navbar-burger burger ${this.navMenuShown ? 'is-active' : ''}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu ${this.navMenuShown ? 'is-active' : ''}">
      <div class="navbar-start">
        ${this.sourceUrl ? 
          html`
        <div class="navbar-item">Current Archive:&nbsp;<b>${this.sourceUrl}</b>
        </div>` : html``}
      </div>
      <div class="navbar-end">
        <a href="?terms" class="navbar-item">Terms</a>
        <a href="/docs" class="navbar-item">
          <fa-icon .svg="${fasHelp}"></fa-icon>&nbsp;About
        </a>
      </div>
    </nav>
  </div>
  ${this.renderContent()}
  `;
  }

  renderContent() {
    if (this.sourceUrl) {
      return html`
      <wr-coll .loadInfo="${this.loadInfo}"
      sourceUrl="${this.sourceUrl}"
      @coll-loaded=${this.onCollLoaded}></wr-coll>
      `;
    } else if (this.showTerms) {
      return html`
      <div class="container">
        <div class="content">
          <h3 class="title">Terms</h3>
          <p>This site is a static browser-based application that loads web archive files provided by the user
          and renders them for replay in the browser.</p>
          <p>The site is operated by the <a href="https://webrecorder.net/">Webrecorder Project</a></p>
          <p>See the <a href="/docs">About</a> for more info on how it works.</p>

          <h3>Privacy</h3>
          <p><b>No data is uploaded anywhere and no information is collected.</b></p>
          <p>All content rendered stays directly in your browser.</p>

          <h4>Disclaimer of Warranties</h4>
          <p>The application may not always be available. No guarantees!</p>
          <p>Some legalese:</p>
          <p style="font-size: 0.8rem">DISCLAIMER OF SOFTWARE WARRANTY. WEBRECORDER SOFTWARE PROVIDES THIS SOFTWARE TO YOU "AS AVAILABLE" 
          AND WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED OR OTHERWISE, 
          INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
          </p>
          <a class="button is-primary" href="#" @click="${(e) => window.history.back()}">Back</a>
        </div>
      </div>
      `;
    } else if (this.sourceUrl === "") {
      return html`
      <wr-index @load-start=${this.onStartLoad}></wr-index>
      `;
    }
  }

  firstUpdated() {
    this.initRoute();
  }

  onNavMenu() {
    this.navMenuShown = !this.navMenuShown;
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

    if (this.pageParams.has("terms")) {
      this.showTerms = true;
    }
  }

  onStartLoad(event) {
    // just redirect right away?
    if (!event.detail.blobUrl) {
      this.pageParams.set("source", event.detail.sourceUrl);
      window.location.search = this.pageParams.toString();
      return;
    }

    this.sourceUrl = event.detail.sourceUrl;
    this.loadInfo = event.detail;
  }

  onCollLoaded(event) {
    this.loadInfo = null;
    this.initRoute();

    if (event.detail.sourceUrl !== this.sourceUrl) {
      this.pageParams.set("source", event.detail.sourceUrl);
      window.location.search = this.pageParams.toString();
    }
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
    this.loadInfo = null;

    this.worker = new Worker(__SW_PATH__);
  }

  static get properties() {
    return {
      sourceUrl: { type: String },
      loadInfo: { type: Object },
      state: { type: String },
      progress: { type: Number },
      percent: { type: Number },
      error: { type: String},
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
            if (event.data.error) {
              this.error = event.data.error;
              this.state = "errored";
            }
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

        case "file:":
          if (!this.loadInfo) {
            this.state = "errored";
            this.error = "File URLs are local and can not be shared. You can choose a file to upload from the main page.";
            return;
          }

          source = {
            sourceUrl: this.loadInfo.blobUrl,
            sourceId: this.loadInfo.name,
            name: this.loadInfo.name
          }
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
    if (this._gdResolve) {
      //const digest = await digestMessage(url, 'SHA-256');
      //this.coll = "id-" + digest.slice(0, 12);

      this._gdResolve(event.detail);
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("sourceUrl")) {
      this.doLoad();
    }
  }

  static get styles() {
    return wrapCss(css`
      .logo {
        width: 96px;
        height: 96px;
        margin: 1em;
      }

      progress:after {
        content: attr(data-percent)'%';
        position: absolute;
        -webkit-transform: translate(-50%, -100%);
        -ms-transform: translate(-50%, -100%);
        transform: translateX(-50%, -100%);
        font-size: calc(1.5rem / 1.5);
        line-height: 1.5rem;
      }
    `);
  }

  render() {
    return html`
    <section class="container">
    <div class="level">
    <img class="level-item logo" src="/static/logo.svg"/>
  </div>
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
          <progress class="progress is-primary is-large" 
          data-percent="${this.percent}" value="${this.percent}" max="100"
          style="max-width: 400px"/>`;

      case "errored":
        return html`<div class="has-text-danger">${this.error}</div>`;

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

    this.fileDisplayName = "";
    this.file = null;
  }

  static get properties() {
    return {
      colls: { type: Array },
      fileDisplayName: { type: String }
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

  onChooseFile(event) {
    if (event.currentTarget.files.length === 0) {
      return;
    }

    this.file = event.currentTarget.files[0];
    this.fileDisplayName = "file://" + this.file.name;
    this.requestUpdate();
  }

  onStartLoad(event) {
    event.preventDefault();

    const detail = {sourceUrl: this.fileDisplayName};

    if (this.file) {
      detail.blobUrl = URL.createObjectURL(this.file);
      detail.name = this.fileDisplayName;
    }
                
    this.dispatchEvent(new CustomEvent("load-start", {detail}));
    
    return false;
  }

  onInput(event) {
    this.fileDisplayName = event.currentTarget.value;

    if (this.file && this.fileDisplayName && this.fileDisplayName.startsWith("file://")) {
      this.file = null;
      this.fileDisplayName = "";
    }
  }

  static get styles() {
    return wrapCss(css`
    .size {
      margin-right: 20px;
    }
    .extra-padding {
      padding: 2em;
    }
    .no-top-padding {
      padding-top: 1.0em;
    }
    div.field.has-addons {
      flex: auto;
    }
    `);
  }

  render() {
    return html`
    <section class="section no-top-padding">
      <div class="container">
        <nav class="panel is-info">
          <p class="panel-heading">Add Web Archive</p>
          <div class="extra-padding panel-block file has-name">
            <form class="container" @submit="${this.onStartLoad}">
              <label class="file-label">
                <input class="file-input"
                  @click="${(e) => e.currentTarget.value = null}"
                  @change=${this.onChooseFile} type="file" id="fileupload" name="fileupload">
                <span class="file-cta">
                  <span class="file-icon">
                    <fa-icon size="0.9em" .svg=${fasUpload}></fa-icon>
                  </span>
                  <span class="file-label">
                    Choose File...
                  </span>
                </span>
                <div class="field has-addons">
                  <p class="control is-expanded">
                    <input style="max-width: 100%" class="file-name input" type="text"
                    name="filename"
                    .value="${this.fileDisplayName}"
                    @input="${this.onInput}"
                    autocomplete="off"
                    placeholder="Choose a local file or enter a URL for a (WARC, HAR, WBN, or WAZ) archive">
                  </p>
                  <div class="control">
                    <button type="submit" class="button is-primary">Replay!</button>
                  </div>
                </div>
              </label>
            </form>
          </div>
        </nav>
      </div>
    </section>
    <section class="container">
      <nav class="panel">
        <p class="panel-heading">Replayable Archive Collections</p>
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

    this.replaceLoc = false;

    this.tabData = {};
  }

  static get properties() {
    return {
      sourceUrl: { type: String },
      loadInfo: { type: Object },

      collInfo: { type: Object },
      coll: { type: String },

      hasCurated: { type: Boolean },

      tabData: { type: Object },

      _locationHash: { type: String }
    }
  }

  firstUpdated() {
    this.doUpdateInfo();
    window.addEventListener("hashchange", (event) => this.onHashChange(event));
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
    if (changedProperties.has("sourceUrl")) {
      this.doUpdateInfo();
    }
    if (changedProperties.has("tabData")) {
      if (!this.collInfo || !this.collInfo.coll) {
        return;
      }

      // don't add empty params to shorten query
      Object.keys(this.tabData).
        forEach(key => !this.tabData[key] && delete this.tabData[key]);

      this._locationHash = "#" + new URLSearchParams(this.tabData).toString();
    }
    if (changedProperties.has("_locationHash")) {
      if (this.replaceLoc) {
        const newLoc = new URL(window.location.href);
        newLoc.hash = this._locationHash;
        window.history.replaceState({}, "", newLoc.href);
        this.replaceLoc = false;
      } else {
        window.location.hash = this._locationHash;
      }
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

    const hash = window.location.hash;
    if (hash) {
      this.tabData = Object.fromEntries(new URLSearchParams(hash.slice(1)).entries());
    }

    if (this.collInfo.coll && !this.tabData.view) {
      this.tabData = {...this.tabData, view: this.hasCurated ? "curated" : "resources"};
      this.replaceLoc = true;
    }
  }

  onCollLoaded(event) {
    this.doUpdateInfo();
    this.loadInfo = null;
    this.dispatchEvent(new CustomEvent("coll-loaded", {detail: {sourceUrl: this.sourceUrl}}));
  }

  onHashChange(event) {
    const hash = window.location.hash;
    if (hash && hash !== this._locationHash) {
      this.tabData = Object.fromEntries(new URLSearchParams(hash.slice(1)).entries());
      this._locationHash = hash;
    }
  }

  onTabClick(event) {
    event.preventDefault();
    const hash = event.currentTarget.getAttribute("href");
    this.tabData = {...this.tabData, view: hash.slice(1)};
    return false;
  }

  onCollTabNav(event) {
    if (event.target.id === this.tabData.view) {
      this.tabData = {view: this.tabData.view, ...event.detail.data};
      this.replaceLoc = event.detail.replaceLoc || false;
    }
  }

  static get styles() {
    return wrapCss(css`
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
    .bg-alice-blue {
      background-color: aliceblue;
    }
    `);
  }

  render() {
    if (this.collInfo && !this.collInfo.coll) {
      return html`<wr-loader .loadInfo="${this.loadInfo}" .coll="${this.coll}" .sourceUrl="${this.sourceUrl}" @coll-loaded=${this.onCollLoaded}></wr-loader>`;
    } else if (this.collInfo) {
      return html`
      <nav class="panel is-light">
        <p class="panel-tabs bg-alice-blue">
          ${this.hasCurated ? html`
            <a @click="${this.onTabClick}" href="#curated"
            class="is-size-6 ${this.tabData.view === 'curated' ? 'is-active' : ''}">
            <span class="icon"><fa-icon .svg="${farListAlt}"></fa-icon></span>
            Curated Pages</a>
          ` : ``}

          <a @click="${this.onTabClick}" href="#resources"
          class="is-size-6 ${this.tabData.view === 'resources' ? 'is-active' : ''}">
          <span class="icon"><fa-icon .svg="${fasSearch}"></fa-icon></span>URL Resources</a>

          <a @click="${this.onTabClick}" href="#replay"
          class="is-size-6 ${this.tabData.view === 'replay' ? 'is-active' : ''}">
          <span class="icon"><fa-icon .svg="${farPlayCircle}"></fa-icon></fa-icon></span>Replay!</a>
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
    @coll-tab-nav="${this.onCollTabNav}" id="curated"
    class="panel-block ${this.tabData.view === 'curated' ? '' : 'is-hidden'}">
    </wr-coll-curated>

    <wr-coll-resources .collInfo="${this.collInfo}"
    urlSearch="${this.tabData.urlSearch || ""}"
    urlSearchType="${this.tabData.urlSearchType || ""}"
    currMime="${this.tabData.currMime || "text/html,text/xhtml"}"
    @coll-tab-nav="${this.onCollTabNav}" id="resources"
    class="panel-block is-paddingless ${this.tabData.view === 'resources' ? '' : 'is-hidden'}">
    </wr-coll-resources>

    <wr-replay-page .collInfo="${this.collInfo}"
    replayUrl="${this.tabData.url || ""}"
    replayTS="${this.tabData.ts || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="replay"
    class="${this.tabData.view === 'replay' ? '' : 'is-hidden'}">
    </wr-replay-page>
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
    if (changedProperties.has("collInfo")) {
      this.doLoadCurated();
    }
  }

  async doLoadCurated() {
    const resp = await fetch(`${this.collInfo.apiPrefix}/curatedPages?offset=${this.offset}`);
    const json = await resp.json();

    this.total = json.total;

    this.curatedPages = {};

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
    return wrapCss(css`
    .column {
      max-height: calc(100vh - 145px);
    }

    #content {
      margin-top: 10px;
      max-height: calc(100vh - 155px);
    }
    `);
  }

  render() {
    return html`
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
    const data = {
      url: event.currentTarget.getAttribute("data-url"),
      ts: event.currentTarget.getAttribute("data-ts"),
      view: "replay"
    };
    this.sendChangeEvent(data);
    return false;
  }

  sendChangeEvent(data) {
    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {data}}));
  }

  onClickScroll(event) {
    event.preventDefault();
    this.scrollToList(event.currentTarget.getAttribute("data-list"));
    return false;
  }

  scrollToList(id) {
    this.currList = Number(id);
    
    this.sendChangeEvent({currList: this.currList || undefined});

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
        this.sendChangeEvent({currList: this.currList});
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
      loading: { type: Boolean }
    }
  }

  firstUpdated() {
    this.doLoadResources();
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
  }

  async doLoadResources() {
    const count = 100;
    this.loading = true;
    let url = (this.urlSearchType !== "" ? this.urlSearch : "");
    const prefix = url && this.urlSearchType === "prefix" ? 1 : 0;
    // optimization: if not starting with http, likely won't have a match here, so just add https://

    if (url && !url.startsWith("http")) {
      url = "https://" + url;
    }

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

    const data = {
      urlSearch: this.urlSearch,
      currMime: this.currMime,
      urlSearchType: this.urlSearchType
    };

    this.loading = false;
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
    
    const url = (this.urlSearchType !== "" ? this.urlSearch : "");
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
    this.tryMore = (resp.urls.length === count);
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
  }

  onScroll(event) {
    const element = event.currentTarget;
    const diff = (element.scrollHeight - element.scrollTop) - element.clientHeight;
    if (this.tryMore && diff < 40) {
      this.doLoadMore();
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
    .flex-column {
      display: flex;
      flex: auto;
      max-width: 80%;
      flex-direction: column;
    }
    .flex-auto {
      flex: auto;
    }
    `);
  }

  render() {
    return html`
    <div class="notification level is-marginless">
      <div class="level-left flex-auto">
        <div class="field flex-column">
          <div class="control ${this.loading ? 'is-loading' : ''}">
            <input type="text" class="input" @input="${this.onChangeUrlSearch}" value="${this.urlSearch}" type="text" placeholder="Search URL">
          </div>
          <div class="control">
            <label class="radio has-text-left"><input type="radio" name="urltype" value="" ?checked="${this.urlSearchType === ''}" @click="${this.onClickUrlType}">&nbsp;Contains</label>
            <label class="radio has-text-left"><input type="radio" name="urltype" value="prefix" ?checked="${this.urlSearchType === 'prefix'}" @click="${this.onClickUrlType}">&nbsp;Prefix</label>
            <label class="radio has-text-left"><input type="radio" name="urltype" value="exact" ?checked="${this.urlSearchType === 'exact'}" @click="${this.onClickUrlType}">&nbsp;Exact</label>
            <span class="is-pulled-right" style="margin-left: 1em">Showing ${this.filteredResults.length} Results</span>
          </div>
        </div>
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
    const data = {
      url: event.currentTarget.getAttribute("data-url"),
      ts: event.currentTarget.getAttribute("data-ts"),
      view: "replay"
    };

    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {data}}));
    return false;
  }
}

// ===========================================================================
class WrReplayPage extends LitElement
{
  constructor() {
    super();
    this._replaceLoc = null;
  }

  static get properties() {
    return {
      collInfo: {type: Object },

      replayUrl: { type: String },
      replayTS: { type: String },

      iframeUrl: { type: String }
    }
  }

  firstUpdated() {
    window.addEventListener("message", (event) => this.onReplayMessage(event));
    this.doSetIframeUrl();
  }

  doSetIframeUrl() {
    this.iframeUrl = this.replayUrl ? `${this.collInfo.replayPrefix}/${this.replayTS || ""}mp_/${this.replayUrl}` : "";
  }

  updated(changedProperties) {
    if (changedProperties.has("replayUrl") || 
        changedProperties.has("replayTS")) {
      this.doSetIframeUrl();

      if (this._replaceLoc === null) {
        return;
      }

      const data = {
        url: this.replayUrl,
        ts: this.replayTS,
      };
  
      this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {replaceLoc: this._replaceLoc, data}}));
      this._replaceLoc = null;
    }
  }

  onReplayMessage(event) {
    const iframe = this.renderRoot.querySelector("iframe");

    if (iframe && event.source === iframe.contentWindow) {
      if (event.data.wb_type === "load") {
        this.replayTs = event.data.ts;
        this.replayUrl = event.data.url;
        this._replaceLoc = true;
      }
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const value = this.renderRoot.querySelector("input").value;
    this.replayUrl = value;
    this._replaceLoc = false;
    return false;
  }

  static get styles() {
    return wrapCss(css`
      host: {
        display: flex;
      }

      iframe {
        width: 100vw;
        height: calc(100vh - 150px);
        border: 0px;
      }

      .replay-bar {
        padding: 1em;
        max-width: none;
        border-bottom: solid .1rem #97989A;
      }

      input#url {
        border-radius: 4px;
      }

      #datetime {
        position: absolute;
        right: 1em;
        z-index: 10;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), #FFF 15%, #FFF);
        margin: 5px 0.75em 5px 0;
        line-height: 2;
      }
    `);
  }

  render() {
    return html`
    <div class="container replay-bar">
      <form @submit="${this.onSubmit}">
        <div class="field has-addons">
          <p class="control has-icons-left is-expanded">
            <input id="url" class="input" type="text" .value="${this.replayUrl}" placeholder="https://... Enter a URL to replay from the archive here">
            <span class="icon is-left">
              <fa-icon size="1.0em" .svg="${fasFile}"></fa-icon>
            </span>
          </p>
          <p id="datetime" class="control is-hidden-mobile">${tsToDate(this.replayTS).toLocaleString()}</p>
        </div>
      </form>
    </div>
    ${this.iframeUrl ? html`
    <iframe @message="${this.onReplayMessage}"
    src="${this.iframeUrl}"></iframe>
    ` : ``}
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
    this.view = "replay";
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
      view: this.view
    });
  }

  render() {
    return html`
    <iframe src="http://localhost:9990/?${this.paramString}"></iframe>
    `;
  }
}


// ===========================================================================
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
      line-height: 1.0em;
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

function registerSW(url) {
  let resolve, reject; 
  const p = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  
  register(url, {
    registrationOptions: { scope: '/', otherOptions: 'foo' },
    ready (registration) {
      console.log('Service worker is active.');
      resolve();
    },
    error (error) {
      console.error('Error during service worker registration:', error);
      reject();
    }
  });
}

async function main() {
  //const swPromise = initSW(__SW_PATH__ + "?replayPrefix=wabac&stats=true");
  const swPromise = registerSW(__SW_PATH__ + "?replayPrefix=wabac&stats=true");
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
