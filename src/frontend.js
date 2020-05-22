import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg';
import { styleMap } from 'lit-html/directives/style-map';

import { getTS, tsToDate, sourceToId, parseURLSchemeHostPath } from './pageutils';
import { register } from 'register-service-worker';

import prettyBytes from 'pretty-bytes';
import marked from 'marked';

import allCssRaw from '../assets/main.scss';
import rwpLogo from '../assets/logo.svg';

import fasArrowLeft from '@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg';
import fasArrowRight from '@fortawesome/fontawesome-free/svgs/solid/arrow-right.svg';

import fasCopy from '@fortawesome/fontawesome-free/svgs/regular/copy.svg';

import fasInfoIcon from '@fortawesome/fontawesome-free/svgs/solid/info-circle.svg';

import fasRefresh from '@fortawesome/fontawesome-free/svgs/solid/redo-alt.svg';
import fasFullscreen from '@fortawesome/fontawesome-free/svgs/solid/desktop.svg';
import fasUnfullscreen from '@fortawesome/fontawesome-free/svgs/solid/compress-arrows-alt.svg';
import fasHelp from '@fortawesome/fontawesome-free/svgs/solid/question-circle.svg';
import farListAlt from '@fortawesome/fontawesome-free/svgs/solid/list-alt.svg';
import fasSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg';
import farPlayCircle from '@fortawesome/fontawesome-free/svgs/regular/play-circle.svg';

import fabGoogleDrive from '@fortawesome/fontawesome-free/svgs/brands/google-drive.svg';
import fasUpload from '@fortawesome/fontawesome-free/svgs/solid/upload.svg'


// ===========================================================================
const allCss = unsafeCSS(allCssRaw);
function wrapCss(custom) {
  return [allCss, custom];
}

const IS_APP = window.electron && window.electron.IS_APP;

const dbworker = new Worker(__SW_PATH__);


// ===========================================================================
class AppMain extends LitElement
{

  constructor() {
    super();
    this.sourceUrl = null;
    this.collInfo = null;
    this.showTerms = false;
    this.pageParams = {};
  }

  static get properties() {
    return {
      pageParams: { type: Object },
      sourceUrl: { type: String },
      navMenuShown: { type: Boolean },
      showTerms: { type: Boolean },
      collInfo: { type: Object },
      loadInfo: { type: Object },
      embed: { type: String },
    }
  }

  static get styles() {
    return wrapCss(css`
    #wrlogo {
      max-height: 2.5rem;
    }
    .wr-logo-item {
      padding-right: 8px;
    }
    .has-allcaps {
      font-variant-caps: small-caps;
    }
    :host {
      position: fixed;
      left: 0px;
      top: 0px;
      bottom: 0px;
      right: 0px;
      display: flex;
      flex-direction: column;
    }
    wr-coll {
      height: 100%;
    }
    .navbar {
      padding: 0 0.5em;
    }

    div.navbar-menu fa-icon {
      vertical-align: sub;
    }
    
    @media screen and (min-width: 800px) {
      .menu-only {
        display: none;
      }

      a.arrow-button {
        padding-left: 4px;
        padding-right: 4px;
      }

      .info-menu {
        padding: 0 1.0em;
      }

      .logo-text {
        padding-left: 0px;
      }

      .logo-text:hover {
        background-color: unset;
      }
    }

    @media screen and (max-width: 800px) {
      .wide-only {
        display: none;
      }
    }

    `);
  }

  render() {
    return html`
    ${!this.embed ? html`
      <nav class="navbar has-background-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item wr-logo-item" title="ReplayWeb.page" href="/">
          <fa-icon id="wrlogo" size="2.5rem" .svg=${rwpLogo}></fa-icon>
        </a>
        <a role="button" @click="${this.onNavMenu}"
        class="navbar-burger burger ${this.navMenuShown ? 'is-active' : ''}" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu ${this.navMenuShown ? 'is-active' : ''}">
      <div class="navbar-start">
      <a class="navbar-item logo-text has-text-weight-bold is-size-5 has-allcaps" href="/">
      <span class="has-text-primary">replay</span>
      <span class="has-text-link">web.page</span>
      </a>
      ${IS_APP ? html`
        <a class="navbar-item arrow-button" title="Go Back" @click="${(e) => window.history.back()}">
          <fa-icon .svg="${fasArrowLeft}"></fa-icon><span class="menu-only">&nbsp;Go Back</span>
        </a>
        <a class="navbar-item arrow-button" title="Go Forward" @click="${(e) => window.history.forward()}">
          <fa-icon .svg="${fasArrowRight}"></fa-icon><span class="menu-only">&nbsp;Go Forward</span>
        </a>
      ` : ``}
      ${this.sourceUrl && this.collInfo ? html`
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="info-menu navbar-link is-arrowless"><fa-icon size="1.2em" .svg="${fasInfoIcon}"></fa-icon>
          <span class="menu-only">About this Archive</span>
          </a>
          <div class="navbar-dropdown">
            <div class="navbar-item wide-only"><i>About this Archive</i></div>
            <hr class="navbar-divider">
            <div class="navbar-item">
              Source:&nbsp;<b>${this.sourceUrl}</b>
            </div>
            <div class="navbar-item">
              Filename:&nbsp;<b>${this.collInfo.filename}</b>
            </div>
            <div class="navbar-item">
              Total Size:&nbsp;<b>${prettyBytes(Number(this.collInfo.size || 0))}</b>
            </div>
            <div class="navbar-item">
              Loading Mode:&nbsp;<b>${this.collInfo.onDemand ? "Download On-Demand" : "Fully Local"}</b>
            </div>
            <div class="navbar-item">
              Collection Id:&nbsp;<b>${this.collInfo.coll}</b>
            </div>
          </div>
        </div>
        ` : ``}
      </div>
      <div class="navbar-end">
        <a href="/docs" target="_blank" class="navbar-item">
          <fa-icon .svg="${fasHelp}"></fa-icon><span>&nbsp;How it Works</span>
        </a>
        <a href="?terms" @click="${(e) => { e.preventDefault(); this.showTerms = true} }"class="navbar-item">Terms</a>
      </div>
    </nav>
  ` : ''}
  
  ${this.sourceUrl ? html`
  <wr-coll .loadInfo="${this.loadInfo}"
  sourceUrl="${this.sourceUrl}"
  embed="${this.embed}"
  @replay-favicons=${this.onFavIcons}
  @coll-loaded=${this.onCollLoaded}></wr-coll>
  ` : html`
  <wr-index @load-start=${this.onStartLoad}></wr-index>
  `}
  ${this.showTerms ? html`
  <div class="modal is-active">
    <div class="modal-background" @click="${(e) => this.showTerms = false}"></div>
      <div class="modal-card">
        <header class="modal-card-head">
        <p class="modal-card-title">Terms and Privacy</p>
          <button class="delete" aria-label="close" @click="${(e) => this.showTerms = false}"></button>
        </header>
        <section class="modal-card-body">
          <div class="container">
            <div class="content">
            <p>This site is a static browser-based application that loads web archive files provided by the user
            and renders them for replay in the browser.</p>
            <p>The site is operated by the <a href="https://webrecorder.net/">Webrecorder Project</a></p>
            <p>See the <a target="_blank" href="/docs">Docs</a> for more info on how it works.</p>
        
            <h3>Privacy</h3>
            <p><b>No data is uploaded anywhere and no information is collected.</b></p>
            <p>All content rendered stays directly in your browser. When loading an archive from Google Drive, 
            the site may ask for account authorization to download the specified file only.</p>
        
            <h4>Disclaimer of Warranties</h4>
            <p>The application may not always be available. No guarantees!</p>
            <p>Some legalese:</p>
            <p style="font-size: 0.8rem">DISCLAIMER OF SOFTWARE WARRANTY. WEBRECORDER SOFTWARE PROVIDES THIS SOFTWARE TO YOU "AS AVAILABLE" 
            AND WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED OR OTHERWISE, 
            INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
            </p>
            <a class="button is-warning" href="#" @click="${(e) => this.showTerms = false}">Close</a>
            </div>
          </div>
        </section>
      </div>
  </div>
  ` : ``} `
  }

  firstUpdated() {
    this.initRoute();
    window.addEventListener("popstate", (event) => {
      this.initRoute();
    });
  }

  updated(changedProperties) {
    if (changedProperties.has("sourceUrl")) {
      this.collInfo = null;
    }
  }

  onFavIcons(event) {
    const head = document.querySelector('head'); 
    const oldLinks = document.querySelectorAll("link[rel*='icon']");

    for (const link of oldLinks) { 
      head.removeChild(link); 
    } 

    for (const icon of event.detail.icons) {
      const link = document.createElement('link'); 
      link.rel = icon.rel; 
      link.href = icon.href; 
      head.appendChild(link);  
    }
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
    this.embed = this.pageParams.get("embed") || "";

    if (this.pageParams.has("terms")) {
      this.showTerms = true;
    }

    if (this.pageParams.get("config")) {
      if (!this.loadInfo) {
        this.loadInfo = {}
      }
      try {
        this.loadInfo.extraConfig = JSON.parse(this.pageParams.get("config"));
      } catch (e) {
        console.log("invalid config: " + e);
      }
    }

    if (this.pageParams.get("customColl")) {
      if (!this.loadInfo) {
        this.loadInfo = {}
      }
      this.loadInfo.customColl = this.pageParams.get("customColl");
    }
  }

  onStartLoad(event) {
    // just redirect right away?
    this.pageParams.set("source", event.detail.sourceUrl);

    if (!event.detail.isFile) {
      window.location.search = this.pageParams.toString();
      return;
    } else {
      const url = new URL(window.location.href);
      url.search = this.pageParams.toString();
      window.history.pushState({}, "", url.toString());
    }

    this.sourceUrl = event.detail.sourceUrl;
    this.loadInfo = event.detail;
  }

  onCollLoaded(event) {
    this.loadInfo = null;
    if (event.detail.collInfo) {
      this.collInfo = event.detail.collInfo;
    }

    if (event.detail.alreadyLoaded) {
      //this.sourceLoaded = true;
      return;
    }

    //this.initRoute();

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
    //this.doLoad();
  }

  initMessages() {
    dbworker.addEventListener("message", (event) => {
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
      const {scheme, host, path} = parseURLSchemeHostPath(sourceUrl);

      switch (scheme) {
        case "googledrive":
          this.state = "googledrive";
          source = await this.googledriveInit();
          break;

        case "s3":
          source = {sourceUrl,
                    loadUrl: `https://${host}.s3.amazonaws.com${path}`,
                    name: this.sourceUrl};
          break;

        case "file":
          if (!this.loadInfo) {
            this.state = "errored";
            this.error = `\
File URLs can not be entered directly or shared.
You can select a file to upload from the main page by clicking the \'Choose File...\' button.`;
            return;
          }

          source = {
            sourceUrl: this.loadInfo.sourceUrl,
            loadUrl: this.loadInfo.loadUrl,
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

    if (this.loadInfo && this.loadInfo.extraConfig) {
      msg.extraConfig = this.loadInfo.extraConfig;
    }

    dbworker.postMessage(msg);
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

  onCancel() {
    dbworker.postMessage({"msg_type": "cancelLoad", "name": this.coll});
  }

  updated(changedProperties) {
    if (this.sourceUrl && changedProperties.has("sourceUrl")) {
      this.doLoad();
    }
  }

  static get styles() {
    return wrapCss(css`
      .logo {
        width: 96px;
        height: 96px;
        margin: 1em;
        flex-grow: 1;
      }

      .progress-div {
        position: relative;
        width: 400px !important;
      }

      .progress-label {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: calc(1.5rem / 1.5);
        line-height: 1.5rem;
      }

      .error {
        white-space: pre-wrap;
        margin-bottom: 2em;
      }
    `);
  }

  render() {
    return html`
    <section class="container">
    <div class="has-text-centered is-flex">
    <wr-anim-logo class="logo" size="96px" .svg=${rwpLogo}/>
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
        return html`<wr-gdrive .sourceUrl=${this.sourceUrl} @load-ready=${this.onLoadReady}/>`

      case "started":
        return html`
          <div class="progress-div">
            <progress id="progress" class="progress is-primary is-large" 
            value="${this.percent}" max="100"></progress>
            <label class="progress-label" for="progress">${this.percent}%</label>
            <button @click="${this.onCancel}" class="button is-danger">Cancel</button>
          </div>`;

      case "errored":
        return html`
          <div class="has-text-left">
          <div class="error  has-text-danger">${this.error}</div>
          <div><a href="/" class="button is-warning">Back</a></div>
          </div>`;

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

    this.sortedColls = [];
    this.sortKey = "title";
    this.sortDesc = false;

    this.fileDisplayName = "";
    this.file = null;

    this._deleting = {};
  }

  static get properties() {
    return {
      colls: { type: Array },

      sortedColls: { type: Array },
      sortKey: { type: String },
      sortDesc: { type: Boolean },

      fileDisplayName: { type: String },
      _deleting: { type: Object }
    }
  }

  firstUpdated() {
    this.loadColls();
  }

  updated(changedProperties) {
    if (changedProperties.has("colls") || 
        changedProperties.has("sortKey") ||
        changedProperties.has("sortDesc")) {
      this.sortColls();
    }
  }

  sortColls() {
    this.sortedColls = [];

    this.colls.forEach((coll) => {
      coll.title = coll.title || coll.filename;
      this.sortedColls.push(coll);
    });

    this.sortedColls.sort((first, second) => {
      if (first[this.sortKey] === second[this.sortKey]) {
        return 0;
      }

      return (this.sortDesc == (first[this.sortKey] < second[this.sortKey])) ? 1 : -1;
    });
  }

  async loadColls() {
    const resp = await fetch("./wabac/api/index");
    try {
      const json = await resp.json();
      this.colls = json.colls;
    } catch (e) {
      // likely no sw registered yet
    }

    this._deleting = {};
  }

  async onDeleteColl(event) {
    event.preventDefault();
    event.stopPropagation();

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

  onChooseFile(event) {
    if (event.currentTarget.files.length === 0) {
      return;
    }

    this.file = event.currentTarget.files[0];
    this.fileDisplayName = "file://" + (this.file.path || this.file.name);
    this.requestUpdate();
  }

  onStartLoad(event) {
    event.preventDefault();

    const detail = {sourceUrl: this.fileDisplayName};

    if (this.file) {
      detail.isFile = true;
      detail.loadUrl = this.file.path ? __APP_FILE_SERVE_PREFIX__ + this.file.path : URL.createObjectURL(this.file);
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
    :host {
      overflow-y: auto;
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
    div.field.has-addons {
      flex: auto;
    }
    form, .level {
      flex-grow: 1;
    }
    button.is-loading {
      line-height: 1.5em;
      height: 1.5em;
      border: 0px;
      background-color: transparent !important;
      width: auto;
    }
    nav.panel.is-light {
      margin-bottom: 2em;
    }
    input.input.file-name:invalid {
      border: 1px dashed red;
    }
    input.input.file-name {
      max-width: 100%;
      border-width: 1px;
      margin-left: -1px;
    }


    table tr {
      cursor: pointer;
    }
    tbody tr:hover {
      background-color: aliceblue;
    }
    fa-icon {
      vertical-align: middle;
    }
    .asc:after {
      content: "▼";
      font-size: 0.75em;
    }
    .desc:after {
      content: "▲";
      font-size: 0.75em;
    }
    .copy {
      color: black;
      margin: 0px;
      margin: 0;
      line-height: 0.4em;
      padding: 6px;
      border-radius: 10px;
      display: none;
    }
    .copy:active {
      background-color: lightgray;
    }
    .col-source:hover > .copy, .source-text:hover + .copy, .copy:hover {
      display: initial;
    }
    `);
  }

  render() {
    return html`
    <section class="section no-top-padding">
      ${!IS_APP ? html`
      <p class="subtitle has-text-centered">Explore and Replay Interactive Archived Webpages Directly in your Browser.</p>
      ` : ``}
      <nav class="panel is-warning">
        <p class="panel-heading">Load Web Archive</p>
        <div class="extra-padding panel-block file has-name">
          <form class="content is-flex" @submit="${this.onStartLoad}">
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
            </label>

            <div class="field has-addons">
              <p class="control is-expanded">
                <input class="file-name input" type="text"
                name="filename" id="filename"
                pattern="((file|http|https|s3):\/\/.*\.(warc|warc.gz|har|zip|wacz))|(googledrive:\/\/.+)"
                .value="${this.fileDisplayName}"
                @input="${this.onInput}"
                autocomplete="off"
                placeholder="Enter a URL or click 'Choose File' to select a (WARC, HAR, WBN, or WACZ) archive source">
              </p>
              <div class="control">
                <button type="submit" class="button is-primary">Load</button>
              </div>
            </div>

          </form>
        </div>
      </nav>
    </section>

    <section class="section no-top-padding">
      <nav class="panel is-light">
        <p class="panel-heading">Loaded Archives</p>
        <div class="coll-list">
        ${this.sortedColls.length ? html`
          <div class="panel-block">
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th @click="${this.onSort}" data-key="title"
                  class="${this.sortKey === "title" ? (this.sortDesc ? "desc" : "asc") : ''} col-title">
                  Title</th>

                  <th @click="${this.onSort}" data-key="sourceUrl"
                  class="${this.sortKey === "sourceUrl" ? (this.sortDesc ? "desc" : "asc") : ''} col-source">
                  Source URL (or Filename)</th>

                  <th @click="${this.onSort}" data-key="ctime"
                  class="${this.sortKey === "ctime" ? (this.sortDesc ? "desc" : "asc") : ''} col-ctime">
                  Date Loaded</th>

                  <th @click="${this.onSort}" data-key="size"
                  class="${this.sortKey === "size" ? (this.sortDesc ? "desc" : "asc") : ''} col-size">
                  Total Size</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${this.sortedColls.map((coll, i) => html`
                  <tr @click=${(e) => window.location.href = "?source=" + coll.sourceUrl}>
                    <td class="col-title"><span class="subtitle has-text-weight-bold">
                      <a href="?source=${coll.sourceUrl}">${coll.title || coll.filename}</a>
                    </td>
                    <td class="col-source"><span class="source-text">${coll.sourceUrl}&nbsp;</span>
                    <a @click="${(e) => this.onCopy(e, coll.sourceUrl)}" class="copy"><fa-icon .svg="${fasCopy}"/></a>
                    ${coll.sourceUrl && coll.sourceUrl.startsWith("googledrive://") ? html`
                      <p><i>(${coll.filename})</i></p>` : ''}
                    </td>
                    <td class="col-date">${coll.ctime ? new Date(coll.ctime).toLocaleString() : ""}</td>
                    <td class="col-size">${prettyBytes(Number(coll.size || 0))}</td>
                    <td class="col-delete">
                      ${!this._deleting[coll.sourceUrl] ? html`
                      <button data-coll-index="${i}" @click="${this.onDeleteColl}" class="delete"></button>
                      ` : html`
                      <button class="button is-loading is-static"></button>`}
                    </td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>` : html`
          <div class="panel-block extra-padding">
            <i>No Archives so far! Archives loaded in the section above will appear here.</i>
          </div>
        `}
        </div>
      </nav>
    </section>
    `;
  }

  onCopy(event, sourceUrl) {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(sourceUrl);
    return false;
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
}

// ===========================================================================
class WrColl extends LitElement
{
  constructor() {
    super();
    this.sourceUrl = null;

    this.baseApiPrefix = "./wabac/api";
    this.baseReplayPrefix = "./wabac";
    this.apiPrefix = "";
    this.replayPrefix = "";

    this.coll = "";

    this.collInfo = null;

    this.hasCurated = false;

    this._replaceLoc = false;
    this._locUpdateNeeded = false;

    this._locationHash = "";

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

      replayUrl: { type: String },
      replayTS: { type: String },

      embed: { type: String },
    }
  }

  firstUpdated() {
    //this.doUpdateInfo();
    window.addEventListener("hashchange", (event) => this.onHashChange(event));
  }

  updated(changedProperties) {
    if (changedProperties.has("replayUrl") || changedProperties.has("replayTS")) {
      this.tabData = {view: "replay", url: this.replayUrl, ts: this.replayTS};
    }

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

      const newHash = "#" + new URLSearchParams(this.tabData).toString();
      if (newHash !== this._locationHash) {
        this._locationHash = newHash;
        if (this._replaceLoc || Object.keys(changedProperties.get("tabData")).length === 0) {
          const newLoc = new URL(window.location.href);
          newLoc.hash = this._locationHash;
          window.history.replaceState({}, "", newLoc.href);
          this._replaceLoc = false;
        } else {
          window.location.hash = this._locationHash;
        }
      }
      this._locUpdateNeeded = false;
    }
  }

  async doUpdateInfo() {
    let coll = this.loadInfo && this.loadInfo.customColl;

    if (!coll) {
      const res = await sourceToId(this.sourceUrl);
      coll = res.coll;
    }

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
      this.collInfo.title = this.collInfo.filename;
    }

    this.hasCurated = (this.collInfo.lists && this.collInfo.lists.length);
    this.dispatchEvent(new CustomEvent("coll-loaded", {detail: {
      collInfo: this.collInfo,
      alreadyLoaded: true
    }}));

    const hash = window.location.hash;
    if (hash) {
      this.tabData = Object.fromEntries(new URLSearchParams(hash.slice(1)).entries());
    }

    if (this.collInfo.coll && !this.tabData.view) {
      this.tabData = {...this.tabData, view: this.hasCurated ? "curated" : "resources"};
      //this.replaceLoc = true;
    }
  }

  onCollLoaded(event) {
    this.doUpdateInfo();
    this.loadInfo = null;
    this.dispatchEvent(new CustomEvent("coll-loaded", {detail: {
      sourceUrl: this.sourceUrl,
      collInfo: this.collInfo,
    }}));
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
      this._replaceLoc = !this._locUpdateNeeded && event.detail.replaceLoc;
      this._locUpdateNeeded = true;
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

    .tab-label {
      display: none;
    }

    @media screen and (min-width: ${!IS_APP ? css`1024px` : css`1134px`}) {
      .tab-label {
        display: inline;
      }
    }

    @media screen and (min-width: 320px) {
      .main.tabs {
        position: absolute;
        top: 0px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        z-index: 35;
        display: flex;
        flex-direction: row;
      }
  
      .main.tabs li {
        line-height: 1.5;
        padding-top: 0.5em;
      }
    }

    .main.tabs {
      min-height: 41px;
    }

    #contents {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    wr-replay-page, wr-coll-resources, wr-coll-curated {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    `);
  }

  render() {
    if (this.collInfo && !this.collInfo.coll) {
      return html`
      <wr-loader .loadInfo="${this.loadInfo}" 
      .coll="${this.coll}" .sourceUrl="${this.sourceUrl}" @coll-loaded=${this.onCollLoaded}></wr-loader>`;
    } else if (this.collInfo) {
      return html`
      <nav id="contents" class="is-light">
      ${!this.embed ? html`
        <div class="main tabs has-background-info is-centered">
          <ul>
          ${this.hasCurated ? html`
            <li class="${this.tabData.view === 'curated' ? 'is-active' : ''}">
              <a @click="${this.onTabClick}" href="#curated" class="is-size-6">
                <span class="icon"><fa-icon .svg="${farListAlt}"></fa-icon></span>
                <span class="tab-label" title="Curated Pages">Curated Pages</span>
              </a>
            </li>
          ` : ``}

            <li class="${this.tabData.view === 'resources' ? 'is-active' : ''}">
              <a @click="${this.onTabClick}" href="#resources" class="is-size-6">
                <span class="icon"><fa-icon .svg="${fasSearch}"></fa-icon></span>
                <span class="tab-label" title="URL Resources">URL Resources</span>
              </a>
            </li>

            <li class="${this.tabData.view === 'replay' ? 'is-active' : ''}">
              <a @click="${this.onTabClick}" href="#replay" class="is-size-6">
                <span class="icon"><fa-icon .svg="${farPlayCircle}"></fa-icon></span>
                <span class="tab-label" title="Replay">Replay</span>
              </a>
            </li>
          </ul>
        </div>` : ``}
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
    class="${this.tabData.view === 'curated' ? '' : 'is-hidden'}">
    </wr-coll-curated>

    <wr-coll-resources .collInfo="${this.collInfo}"
    urlSearch="${this.tabData.urlSearch || ""}"
    urlSearchType="${this.tabData.urlSearchType || ""}"
    .currMime="${this.tabData.currMime || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="resources"
    class="is-paddingless ${this.tabData.view === 'resources' ? '' : 'is-hidden'}">
    </wr-coll-resources>

    ${this.tabData.view === 'replay' ? html`
    <wr-replay-page .collInfo="${this.collInfo}"
    sourceUrl="${this.sourceUrl}"
    embed="${this.embed}"
    url="${this.tabData.url || ""}"
    ts="${this.tabData.ts || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="replay"
    class="${this.tabData.view === 'replay' ? '' : 'is-hidden'}">
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
    //this.doLoadCurated();
  }

  updated(changedProperties) {
    if (changedProperties.has("collInfo")) {
      this.doLoadCurated();
    }
  }

  async doLoadCurated() {
    const resp = await fetch(`${this.collInfo.apiPrefix}/curatedPages?offset=${this.offset}&count=1000`);
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
    .columns {
      width: 100vw;
      display: flex;
      flex-direction: row;
      max-height: 100%
      align-items: flex-start;
      height: 100%;
    }

    .column {
      max-height: calc(100% - 70px);
    }

    #content {
      margin-top: 10px;
      max-height: calc(100% - 90px);
      display: flex;
      flex-direction: column;
      height: min-content;
    }

    ul.menu-list a.is-active {
      background-color: #55be6f;
    }

    :host {
      justify-content: flex-start;
      align-items: center;
      margin-top: 1em;
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
              <a href="#list-0" data-list="0" class="${!this.currList ? 'is-active' : ''}"
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
      <div id="content" @scroll=${this.onScroll} class="is-two-thirds column main-scroll">
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
      <article id="list-${list.id}">
        <div class="content">
          <hr/>
          <h3>${list.title}</h3>
          <p>${list.desc}</p>
          <ol style="margin-left: 30px">
            ${this.curatedPages[list.id] ? this.curatedPages[list.id].map((p) => html`
              <li>
                <div class="content">
                  <a @click="${this.onReplay}" data-url="${p.url}" data-ts="${getTS(p.date)}" href="#">
                    <p class="is-size-6 has-text-weight-bold has-text-link">${p.title || p.url}</p>
                    <p class="has-text-dark">${p.url}</p>
                  </a>
                  <p>${new Date(p.date).toLocaleString()}</p>
                  <p>${p.desc}</p>
                </div>
                <hr/>
              </li>
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

    // lists are 1 based, 0 is header, 1 is first list
    if (this.currList > this.collInfo.lists.length) {
      this.currList = 0;
    }
    
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
            ${WrResources.filters.map((filter) => html`
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

// ===========================================================================
class WrReplayPage extends LitElement
{
  constructor() {
    super();
    this.isLoading = false;
    this.replayUrl = "";
    this.replayTS = "";
    this.url = "";
    this.ts = "";
    this.title = "";

    this.showAuth = false;
    this.reauthWait = null;
  }

  static get properties() {
    return {
      collInfo: {type: Object },
      sourceUrl: { type: String },

      // external url set by parent
      url: { type: String },
      ts: { type: String },

      // actual replay url
      replayUrl: { type: String },
      replayTS: { type: String },
      title: { type: String },

      iframeUrl: { type: String },
      isLoading: { type: Boolean },

      showAuth: { type: Boolean },

      embed: { type: String },
      isFullscreen: { type: Boolean }
    }
  }

  firstUpdated() {
    window.addEventListener("message", (event) => this.onReplayMessage(event));
    navigator.serviceWorker.addEventListener("message", async (event) => {
      if (event.data.type === "authneeded" && this.collInfo && event.data.coll === this.collInfo.coll) {
        if (this.reauthWait) {
          await this.reauthWait;
        } else {
          this.showAuth = true;
        }
      }
    });

    this.addEventListener("fullscreenchange", (event) => {
      this.isFullscreen = !!document.fullscreenElement;
    });
  }

  onFullscreenToggle() {
    if (!this.isFullscreen) {
      this.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  doSetIframeUrl() {
    this.iframeUrl = this.url ? `${this.collInfo.replayPrefix}/${this.ts || ""}mp_/${this.url}` : "";
  }

  updated(changedProperties) {
    if (changedProperties.has("sourceUrl") || changedProperties.has("collInfo")) {
      this.isAuthable = (this.sourceUrl.startsWith("googledrive://") && 
        this.collInfo && this.collInfo.onDemand);

      this.reauthWait = null;
    }

    if (this.url && 
        ((this.replayUrl != this.url) || (this.replayTS != this.ts)) &&
        (changedProperties.has("url") || changedProperties.has("ts"))) {

      this.replayUrl = this.url;
      this.replayTS = this.ts;
      this.doSetIframeUrl();
    }

    if (this.iframeUrl && changedProperties.has("iframeUrl")) {
      this.isLoading = true;
    }

    if (this.replayUrl && changedProperties.has("replayUrl")) {
      const data = {
        url: this.replayUrl,
        ts: this.replayTS,
      };
  
      this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {replaceLoc: true, data}}));
    }

    if (this.embed && window.parent !== window && changedProperties.has("title")) {
      window.parent.postMessage({
        title: this.title,
        url: this.replayUrl,
        ts: this.replayTS
      }, '*');
    }
  }

  onReplayMessage(event) {
    const iframe = this.renderRoot.querySelector("iframe");

    if (iframe && event.source === iframe.contentWindow) {
      if (event.data.wb_type === "load" || event.data.wb_type === "replace-url") {
        this.replayTS = event.data.ts;
        this.replayUrl = event.data.url;
        this.title = event.data.title || this.title;
        this.isLoading = false;

        if (event.data.icons) {
          const icons = event.data.icons;
          this.dispatchEvent(new CustomEvent("replay-favicons", {bubbles: true, composed: true, detail: {icons}}));
        }
      } else if (event.data.wb_type === "title") {
        this.title = event.data.title;
      }
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const value = this.renderRoot.querySelector("input").value;
    //this.replayUrl = value;
    this.url = value;
    return false;
  }

  onRefresh(event, forceReload) {
    if (event) {
      event.preventDefault();
    }
    
    if (this.isLoading && !forceReload) {
      return;
    }

    const iframe = this.renderRoot.querySelector("iframe");

    if (iframe) {
      this.isLoading = true;
      iframe.contentWindow.location.reload();
    }
  }

  static get styles() {
    return wrapCss(css`
      host: {
        display: flex;
      }

      iframe {
        width: 100vw;
        #height: calc(100vh - 150px);
        height: 100%;
        border: 0px;
      }

      .replay-bar {
        padding: 1em;
        max-width: none;
        border-bottom: solid .1rem #97989A;
        width: 100%;
        background-color: white;
      }

      .embed-bar {
        padding: 0.25em;
        max-width: none;
        border-bottom: solid .1rem #97989A;
        text-align: center;
        height: 44px;
      }

      input#url {
        border-radius: 4px;
      }

      .intro-panel {
        min-width: 40%;
        display: flex;
        flex-direction: column;
        margin: auto;
      }

      .intro-panel .panel-heading {
        font-size: 1.0em;
      }

      .intro-panel .panel-block {
        padding: 1.0em;
      }

      #datetime {
        position: absolute;
        right: 1em;
        z-index: 10;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), #FFF 15%, #FFF);
        margin: 5px 0.75em 5px 0;
        line-height: 2;
      }

      .is-borderless {
        border: 0px;
      }

      .modal {
        top: 174px;
      }

    `);
  }

  render() {
    return html`
    ${this.embed !== "replayonly" ? html`
    <div class="replay-bar">
      <form @submit="${this.onSubmit}">
        <div class="field has-addons">
          <a id="fullscreen" class="button is-borderless" @click="${this.onFullscreenToggle}">
            <span class="icon is-small">
              <fa-icon size="1.0em" class="has-text-grey" .svg="${this.isFullscreen ? fasUnfullscreen : fasFullscreen}"></fa-icon>
            </span>
          </a>
          <a id="refresh" class="button is-borderless ${this.isLoading ? 'is-loading' : ''}" @click="${this.onRefresh}">
            <span class="icon is-small">
              ${!this.isLoading ? html`
              <fa-icon size="1.0em" class="has-text-grey" .svg="${fasRefresh}"></fa-icon>
              ` : ``}
            </span>
          </a>
          <p class="control is-expanded">
            <input id="url" class="input" type="text" .value="${this.replayUrl}" placeholder="https://... Enter a URL to replay from the archive here">
          </p>
          <p id="datetime" class="control is-hidden-mobile">${tsToDate(this.replayTS).toLocaleString()}</p>
        </div>
      </form>
    </div>` : html`
    `}

    ${this.iframeUrl ? html`
    <iframe @message="${this.onReplayMessage}" allow="autoplay 'self'; fullscreen"
    src="${this.iframeUrl}"></iframe>
    ` : html`
      <nav class="panel intro-panel">
        <p class="panel-heading">Replay Web Page</p>
        <p class="panel-block">Enter a URL above to replay it from the web archive!</p>
      </nav>
    `}

    ${this.isAuthable ? html`
    <div class="modal ${this.showAuth ? 'is-active' : ''}">
      <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
          <p class="modal-card-title">Auth Needed</p>
            <button class="delete" aria-label="close" @click="${(e) => this.showAuth = false}"></button>
          </header>
          <section class="modal-card-body">
            <div class="container has-text-centered">
            <wr-gdrive .sourceUrl=${this.sourceUrl} .state="${this.showAuth ? 'trymanual' : 'implicitonly'}" .reauth="${true}" @load-ready=${this.onReAuthed}/>
            </div>
          </section>
        </div>
    </div>
    ` : ``}
    `;
  }

  onReAuthed(event) {
    this.reauthWait = (async () => {
      const headers = event.detail.headers;

      const resp = await fetch(`/wabac/api/${this.collInfo.coll}/updateAuth`, { 
        method: 'POST',
        body: JSON.stringify({headers})
      });

      if (this.showAuth) {
        this.onRefresh(null, true);
        this.showAuth = false;
      }
    })();
  }
}

// ===========================================================================
class WrGdrive extends LitElement
{
  constructor() {
    super();
    this.state = "trypublic";
    this.sourceUrl = "";
    this.scriptLoaded = false;
    this.error = false;
  }

  static get properties() {
    return {
      state: { type: String },
      sourceUrl: { type: String },
      error: { type: Boolean },
      reauth: { type: Boolean }
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("sourceUrl")) {
      this.error = false;
      this.state = "trypublic";
      this.tryPublicAccess().then((result) => {
        if (!result) {
          this.state = "tryauto";
          this.requestUpdate();
        }
      });
    }
  }

  async tryPublicAccess() {
    try {
      const sourceUrl = this.sourceUrl;
      const fileId = sourceUrl.slice("googledrive://".length);
      const publicCheckUrl = `${__HELPER_PROXY__}/g/${fileId}`;

      let resp = null;
      try {
        resp = await fetch(publicCheckUrl);
      } catch (e) {
        return false;
      }
      const json = await resp.json();
      if (!json.url || !json.name || !json.size) {
        return false;
      }

      // only allow for small downloads that will not result in partial download
      if (json.size > 15000000) {
        return false;
      }

      const publicUrl = json.url;

      try {
        const abort = new AbortController();
        const signal = abort.signal;
        resp = await fetch(publicUrl, {signal});
        abort.abort();
        if (resp.status != 200) {
          return false;
        }
      } catch(e) {
        return false;
      }

      const name = json.name;
      const extra = {publicUrl};
      const size = Number(json.size);
  
      this.dispatchEvent(new CustomEvent("load-ready", {detail: {name, extra, size, sourceUrl}}));
      return true;

    } catch (e) {
      return false;
    }
  }

  onLoad() {
    this.scriptLoaded = true;
    this.gauth('none', (response) => {
      if (response.error === "immediate_failed") {
        if (this.state !== "implicitonly") {
          this.state = "trymanual";
        }
      } else {
        this.authed(response);
      }
    });
  }

  onClickAuth() {
    this.gauth('select_account', (response) => {
      if (!response.error) {
        this.authed(response);
      }
    });
  }

  async authed(response) {
    const sourceUrl = this.sourceUrl;
    const fileId = sourceUrl.slice("googledrive://".length);
    const metadataUrl = `https://www.googleapis.com/drive/v3/files/${fileId}`;
    const authToken = response.access_token;
    const headers = {"Authorization": `Bearer ${authToken}`};

    const resp = await fetch(metadataUrl + "?fields=name,size&supportsAllDrives=true", {headers});

    if ((resp.status === 404 || resp.status == 403)) {
      if (this.state !== "implicitonly") {
        this.state = "trymanual";
      }
      this.error = true;
      return;
    }

    this.error = false;

    const metadata = await resp.json();
    const name = metadata.name;
    const size = Number(metadata.size);

    this.dispatchEvent(new CustomEvent("load-ready", {detail: {sourceUrl, headers, size, name}}));
  }

  static get styles() {
    return wrapCss(css``);
  }

  render() {
    return html`
    ${this.script()}
    ${this.state !== "trymanual" ? html`
    <p>Connecting to Google Drive...</p>
    ` : html`
    ${this.error ? html`
    <div class="error has-text-danger">
      <p>${this.reauth ? 'Some resources are loaded on demand from Google Drive, which requires reauthorization.' :
      'Could not access this file with the current Google Drive account.'}</p>
      <p>If you have multiple Google Drive accounts, be sure to select the correct one.</p>
    </div>
    <br/>
    ` : ``}
    <button class="button is-warning is-rounded" @click="${this.onClickAuth}">
    <span class="icon"><fa-icon .svg="${fabGoogleDrive}"></fa-icon></span>
    <span>Authorize Google Drive</span>
    </button>
    `}`;
  }

  script() {
    if (this.state === "trypublic" || this.scriptLoaded) {
      return html``;
    }
    const script = document.createElement('script');
    script.onload = (() => this.onLoad());
    script.src = 'https://apis.google.com/js/platform.js';
    return script;
  }

  gauth(prompt, callback) {
    gapi.load('auth2', () => {
      gapi.auth2.authorize({
          client_id: __GDRIVE_CLIENT_ID__,
          scope: "https://www.googleapis.com/auth/drive.file",
          response_type: "token",
          prompt
      }, callback);
    });
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
class WrAnimLogo extends WrFaIcon
{
  static get styles() {
    return css`
    #wrlogo #stop5687 {
      animation: animLeft 7s linear infinite;
    }

    #wrlogo #stop5689 {
      animation: animRight 7s linear infinite;
    }

    @keyframes animLeft {
      0% {stop-color: #4876ff}
      25% {stop-color: #1b0921}
      50% {stop-color: #4876ff}
      75% {stop-color: #04cdff}
      100% {stop-color: #4876ff}
    }

    @keyframes animRight {
      0% {stop-color: #04cdff}
      25% {stop-color: #4876ff}
      50% {stop-color: #1b0921}
      75% {stop-color: #4876ff}
      100% {stop-color: #04cdff}
    }
    `;
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
    registrationOptions: { scope: './' },
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
  const swPromise = registerSW(__SW_PATH__);
  await swPromise;
  customElements.define("app-main", AppMain);
  customElements.define("wr-index", WrIndex);
  customElements.define("wr-loader", WrLoader);
  customElements.define("wr-coll", WrColl);
  customElements.define("wr-coll-resources", WrResources);
  customElements.define("wr-coll-curated", WrCuratedPages);
  customElements.define("wr-replay-page", WrReplayPage);
  customElements.define("wr-gdrive", WrGdrive);
  customElements.define("fa-icon", WrFaIcon);
  customElements.define("wr-anim-logo", WrAnimLogo);
}

main();
