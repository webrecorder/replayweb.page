import { LitElement, html, css } from "lit";
import { wrapCss, rwpLogo, IS_APP, VERSION, clickOnSpacebarPress, apiPrefix, replayPrefix } from "./misc";

import { sourceToId, tsToDate, getPageDateTS } from "./pageutils";

import fasBook from "@fortawesome/fontawesome-free/svgs/solid/book.svg";

import fasDownload from "@fortawesome/fontawesome-free/svgs/solid/download.svg";

import farListAlt from "@fortawesome/fontawesome-free/svgs/regular/list-alt.svg";
import farResources from "@fortawesome/fontawesome-free/svgs/solid/puzzle-piece.svg";
import farPages from "@fortawesome/fontawesome-free/svgs/regular/file-image.svg";
import fasInfoIcon from "@fortawesome/fontawesome-free/svgs/solid/info-circle.svg";
import fasSync from "@fortawesome/fontawesome-free/svgs/solid/sync-alt.svg";

import fasRefresh from "@fortawesome/fontawesome-free/svgs/solid/redo-alt.svg";
import fasFullscreen from "@fortawesome/fontawesome-free/svgs/solid/desktop.svg";
import fasUnfullscreen from "@fortawesome/fontawesome-free/svgs/solid/compress-arrows-alt.svg";

import fasLeft from "@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg";
import fasRight from "@fortawesome/fontawesome-free/svgs/solid/arrow-right.svg";
import fasMenuV from "@fortawesome/fontawesome-free/svgs/solid/ellipsis-v.svg";

import fasAngleLeft from "@fortawesome/fontawesome-free/svgs/solid/angle-left.svg";
import fasAngleRight from "@fortawesome/fontawesome-free/svgs/solid/angle-right.svg";

import Split from "split.js";


const RWP_SCHEME = "search://";


// ===========================================================================
class Coll extends LitElement
{
  constructor() {
    super();
    this.sourceUrl = null;
    this.inited = false;
    this.isLoading = false;

    this.coll = "";

    this.collInfo = null;

    this._replaceLoc = false;
    this._locUpdateNeeded = false;

    this._locationHash = "";

    this.tabData = {};
    this.url = "";
    this.ts = "";

    this.tabNames = ["pages", "story", "resources", "info"];
    this.tabLabels = {
      "pages": "Pages",
      "story": "Story",
      "resources": "URLs",
      "info": "Archive Info",
    };

    this.menuActive = false;

    this.hasStory = false;

    this.editable = false;
    this.browsable = true;

    this.showSidebar = localStorage.getItem("pages:showSidebar") === "1";
    this.splitter = null;

    this.isVisible = true;

    this.favIconUrl = "";

    this.autoUpdateInterval = 10;
    this._autoUpdater = null;

    this.appName = "ReplayWeb.page";
    this.appVersion = VERSION;
    this.appLogo = rwpLogo;
  }

  static get properties() {
    return {
      inited: { type: Boolean },

      sourceUrl: { type: String },
      loadInfo: { type: Object, attribute: false },

      showSidebar: { type: Boolean },

      collInfo: { type: Object, attribute: false },
      coll: { type: String },

      hasStory: { type: Boolean },
      isLoading: { type: Boolean },

      tabData: { type: Object, attribute: false },

      url: { type: String },
      ts: { type: String },

      isFullscreen: { type: Boolean },
      menuActive: { type: Boolean },

      embed: { type: String },
      editable: { type: Boolean },
      browsable: { type: Boolean },

      isVisible: { type: Boolean },

      favIconUrl: {type: String },

      appName: { type: String },
      appVersion: { type: String },
      appLogo: { type: String },

      autoUpdateInterval: { type: Number }
    };
  }

  firstUpdated() {
    this.inited = true;
    window.addEventListener("hashchange", (event) => this.onHashChange(event));

    this.addEventListener("fullscreenchange", () => {
      this.isFullscreen = !!document.fullscreenElement;
    });

    if (this.embed) {
      this.observer = new IntersectionObserver((entries/*, observer*/) => {
        this.isVisible = entries[0].isIntersecting;
      });

      this.observer.observe(this);
    }
  }

  async runUpdateLoop() {
    try {
      // only autoupdate if interval is set, and number of pages < 100 to avoid messing up scrolling
      while (this.editable && this.autoUpdateInterval && (!this.collInfo || this.collInfo.pages.length < 100)) {
        await new Promise(resolve => setTimeout(resolve, this.autoUpdateInterval * 1000));
        await this.doUpdateInfo(true);
      }
    } finally {
      this._autoUpdater = null;
    }
  }

  updated(changedProperties) {
    // if (changedProperties.has("url") || changedProperties.has("ts")) {
    //   if (this.url.startsWith("rwp?")) {
    //     this.tabData = Object.fromEntries(new URLSearchParams(this.url.slice(4)).entries());
    //   } else {
    //     this.tabData = {view: "replay", url: this.url, ts: this.ts};
    //   }
    // }

    if (changedProperties.has("sourceUrl")) {
      this.doUpdateInfo();
    }
    if (changedProperties.has("editable")) {
      if (this.editable && this.autoUpdateInterval && !this._autoUpdater) {
        this._autoUpdater = this.runUpdateLoop();
      }
    }
    if (changedProperties.has("tabData")) {
      if (!this.collInfo || !this.collInfo.coll) {
        return;
      }

      // don't add empty params to shorten query
      Object.keys(this.tabData).
        forEach(key => !this.tabData[key] && delete this.tabData[key]);

      const newHash = "#" + new URLSearchParams(this.tabData).toString();

      if (!this.tabData.url) {
        this.url = RWP_SCHEME + decodeURIComponent(this._paramsToString(this.tabData));
      }
      if (newHash !== this._locationHash) {
        this._locationHash = newHash;
        if (this._replaceLoc || Object.keys(changedProperties.get("tabData")).length === 0) {
          const newLoc = new URL(window.location.href);
          newLoc.hash = this._locationHash;
          window.history.replaceState({}, "", newLoc.href);
          this._replaceLoc = false;
        } else {
          window.location.hash = this._locationHash;
          if (!this.showSidebar) {
            const replay = this.renderRoot.querySelector("wr-coll-replay");
            if (replay) {
              replay.focus();
            }
          }
        }
        if (this.embed && window.parent !== window) {
          window.parent.postMessage(this.tabData, "*");
        }
      }
      this._locUpdateNeeded = false;
    }
    if (changedProperties.has("showSidebar")) {
      if (!this.embed) {
        localStorage.setItem("pages:showSidebar", this.showSidebar ? "1" : "0");
      }
    }

    if (changedProperties.has("tabData") || changedProperties.has("showSidebar")) {
      this.configureSplitter();
    }
  }

  configureSplitter() {
    if (this.tabData.url && this.showSidebar) {
      const contents = this.renderRoot.querySelector("#contents");
      const replay = this.renderRoot.querySelector("wr-coll-replay");

      if (contents && replay && !this.splitter) {
        const opts = {
          sizes: [30, 70],

          minSize: [300, 300],

          gutterSize: 4,

          onDragStart() {
            replay.setDisablePointer(true);
          },

          onDragEnd() {
            replay.setDisablePointer(false);
          }
        };

        this.splitter = Split([contents, replay], opts);
      }
    } else if (this.splitter) {
      try {
        this.splitter.destroy();
      } catch (e) {
        // ignore, remove splitter
      }
      this.splitter = null;
    }
  }

  async doUpdateInfo(autorefresh = false)
  {
    // if auto-refresh, and replay and no sidebar, than skip update
    if (autorefresh && this.tabData.url && !this.showSidebar) {
      return;
    }

    let coll = this.loadInfo && this.loadInfo.customColl;

    if (!coll) {
      const res = await sourceToId(this.sourceUrl);
      coll = res.coll;
    }

    this.coll = coll;

    const collApiPrefix = apiPrefix + "/c/" + coll;
    const collReplayPrefix = replayPrefix + "/" + coll;

    const resp = await fetch(collApiPrefix + "?all=1");

    if (resp.status != 200) {
      this.collInfo = {};
      return;
    }

    const json = await resp.json();

    this.collInfo = {
      apiPrefix: collApiPrefix,
      replayPrefix: collReplayPrefix,
      coll,
      ...json
    };

    if (!this.collInfo.title) {
      this.collInfo.title = this.collInfo.filename;
    }

    if (this.embed === "replayonly") {
      this.showSidebar = false;
    }

    this.hasStory = this.collInfo.desc || this.collInfo.lists.length;

    this.dispatchEvent(new CustomEvent("coll-loaded", {detail: {
      collInfo: this.collInfo,
      alreadyLoaded: true
    }}));

    this.onHashChange();
  }

  onCollLoaded(event) {
    this.doUpdateInfo();
    this.loadInfo = null;
    if (event.detail.sourceUrl) {
      this.sourceUrl = event.detail.sourceUrl;
    }
    this.dispatchEvent(new CustomEvent("coll-loaded", {detail: {
      sourceUrl: this.sourceUrl,
      collInfo: this.collInfo,
    }}));
  }

  onCollUpdate(event) {
    if (!this.editable) {
      return;
    }

    this.collInfo = {...this.collInfo, ...event.detail};
  }

  onHashChange() {
    const hash = window.location.hash;
    if (hash && hash !== this._locationHash) {
      this.tabData = Object.fromEntries(new URLSearchParams(hash.slice(1)).entries());
      this._locationHash = hash;
    }

    if (this.collInfo.coll && !this.tabNames.includes(this.tabData.view)) {
      const view = this.hasStory ? "story" : (this.editable || this.collInfo.pages.length ? "pages" : "resources");

      this.tabData = {
        ...this.tabData, view
      };
    }

    if (this.tabData.url && this.tabData.url.startsWith("page:")) {
      const pageIndex = Number(this.tabData.url.slice("page:".length));
      if (!isNaN(pageIndex) && pageIndex < this.collInfo.pages.length) {
        const page = this.collInfo.pages[pageIndex];
        this.tabData.url = page.url;
        this.tabData.ts = getPageDateTS(page).timestamp;
      }
    }

    if (!this.hasStory && this.tabData.view === "story") {
      this.tabData.view = "pages";
    }

    if (this.tabData.url && this.tabData.query) {
      this.showSidebar = true;
    }
  }

  onTabClick(event) {
    event.preventDefault();
    const hash = event.currentTarget.getAttribute("href");
    this.tabData = {...this.tabData, view: hash.slice(1)};
    //this.tabData = {view: hash.slice(1)};
    return false;
  }

  onCollTabNav(event) {
    if (event.detail.reload) {
      this.onRefresh(null, true);
      return;
    }

    if (event.target.id === this.tabData.view || event.target.id === "replay" && this.tabData.url) {
      this.updateTabData(event.detail.data, event.detail.replaceLoc, false);
    } else if (this.showSidebar && this.tabData.url) {
      this.updateTabData(event.detail.data, event.detail.replaceLoc, true);
    }
  }

  updateTabData(data, replaceLoc = false/*, merge = false*/) {
    this.tabData = {...this.tabData, ...data};
    if (this.tabData.url) {
      this.url = this.tabData.url || "";
    }
    if (this.tabData.ts) {
      this.ts = this.tabData.ts || "";
    }
    this._replaceLoc = !this._locUpdateNeeded && replaceLoc;
    this._locUpdateNeeded = true;
  }

  static get styles() {
    return wrapCss(Coll.compStyles);
  }

  static get compStyles() {
    return css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-width: 0px;
    }

    .icon {
      vertical-align: text-top;
    }

    .back fa-icon {
      width: 1.5em;
      vertical-align: bottom;
      line-height: 0.5em;
    }

    li.is-active {
      font-weight: bold;
    }

    .tab-label {
      display: inline;
    }

    @media screen and (max-width: ${!IS_APP ? css`1053px` : css`1163px`}) {
      .tab-label {
        display: none;
      }

      .main.tabs span.icon {
        margin: 0px;
      }
    }

    .main.tabs {
      display: flex;
      flex-direction: row;
      margin-bottom: 0px;
    }

    .main.tabs ul {
      position: relative;
    }

    .main.tabs li {
      line-height: 1.5;
      padding: 8px 0 6px 0;
    }

    @media screen and (max-width: 319px) {
      .main.tabs li a {
        padding-right: 4px;
        padding-left: 4px;
      }
    }

    .sidebar.main.tabs li a {
      padding-right: 6px;
      padding-left: 6px;
    }

    #contents {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      min-height: 0px;
      flex: auto;
    }

    #tabContents {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      min-height: 0px;
      flex: auto;
    }

    ${Coll.replayBarStyles}`;
  }

  static get replayBarStyles() {
    return css`
    .breadbar {
      display: flex;
      align-items: center;
      height: 35px;
      width: 100%;
      background-color: aliceblue;
      padding: 0.5em;
    }

    .replay-bar {
      padding: 0.5em 0em 0.5em 0.5em;
      max-width: none;
      border-bottom: solid .1rem #97989A;
      width: 100%;
      background-color: white;
    }

    input#url {
      border-radius: 4px;
    }

    .favicon img {
      width: 20px;
      height: 20px;
      margin: 8px;
      /*filter: drop-shadow(1px 1px 2px grey);*/
    }

    #datetime {
      position: absolute;
      right: 1em;
      z-index: 10;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0), #FFF 15%, #FFF);
      margin: -35px 0 0 0px;
      padding-left: 3em;
      line-height: 2;
    }

    .menu-head {
      font-size: 10px;
      font-weight: bold;
      display: block;
    }
    .menu-logo {
      vertical-align: middle;
    }
    .menu-version {
      font-size: 10px;
    }
    .dropdown-item.info {
      font-style: italic;
    }

    input:focus + #datetime {
      display: none;
    }

    .grey-disabled {
      --fa-icon-fill-color: lightgrey;
      color: lightgrey;
    }

    .replay-bar .button:focus {
      box-shadow: none;
    }

    .is-borderless {
      border: 0px;
    }

    .narrow {
      padding: calc(0.5em - 1px) 0.8em;
    }

    form {
      width: 100%;
      margin: 0 0 0 0.5em;
    }

    .gutter.gutter-horizontal {
      cursor: col-resize;
      float: left;
      background-color: rgb(151, 152, 154);
    }

    .gutter.gutter-horizontal:hover {
      cursor: col-resize;
    }

    main, wr-coll-replay {
      width: 100%;
    }

    .info-bg {
      background-color: whitesmoke;
      width: 100%;
      height: 100%;
      display: flex;
    }

    .is-list {
      margin: 1.0em;
      background-color: whitesmoke;
    }

    #contents.full-pages {
      width: 100% !important;
    }

    .sidebar-nav {
      position: absolute;
      vertical-align: middle;
    }

    .sidebar-nav a {
      display: inline-block;
      border-bottom: 0px;
    }

    .sidebar-nav span.nav-hover {
      font-size: smaller;
      display: none;
    }

    .sidebar-nav:hover span.nav-hover,
    .sidebar-nav:focus-within span.nav-hover {
      display: initial;
      color: rgb(72, 118, 255);
    }

    .sidebar-nav fa-icon {
      vertical-align: bottom;
    }

    .sidebar-nav:hover fa-icon {
      color: rgb(72, 118, 255);
    }

    .sidebar-nav.left {
      left: 8px;
    }

    .sidebar-nav.right {
      right: 8px;
    }

    /* Since the replay sometimes programmatically receives keyboard focus,
       and that is visually unexpected for mouse-users, and since this won't
       particularly trip up keyboard users, just remove the focus style. */
    wr-coll-replay:focus {
      outline: none;
    }
    /* Some keyboard-users may see this replacement style */
    wr-coll-replay:focus-visible {
      outline: 1px solid rgb(72, 118, 255);
    }
    `;
  }

  render() {
    if (!this.inited) return html``;

    const isReplay = !!this.tabData.url;
    const isSidebar = isReplay && this.showSidebar;

    if (!isReplay && this.tabData && this.tabData.view){
      const detail = {title: this.tabLabels[this.tabData.view], replayTitle: false};
      this.dispatchEvent(new CustomEvent("update-title", {bubbles: true, composed: true, detail}));
    }

    if (this.collInfo && !this.collInfo.coll) {
      return html`
      <wr-loader .loadInfo="${this.loadInfo}" embed="${this.embed}"
      .coll="${this.coll}" .sourceUrl="${this.sourceUrl}" @coll-loaded=${this.onCollLoaded}></wr-loader>`;
    } else if (this.collInfo) {
      return html`
      ${this.renderLocationBar()}
      <div id="tabContents">
        <div id="contents" class="is-light ${isSidebar ? "sidebar" : (isReplay ? "is-hidden" : "full-pages")}"
             role="${isSidebar ? "complementary" : ""}" aria-label="${isSidebar ? "Browse Contents" : ""}">
          ${this.renderTabHeader(isSidebar)}
          ${isSidebar || !isReplay ? this.renderCollTabs(isSidebar) : html``}
        </div>

        ${isReplay && this.isVisible ? html`
          <wr-coll-replay
          role="main"
          tabindex="-1"
          .collInfo="${this.collInfo}"
          sourceUrl="${this.sourceUrl}"
          url="${this.tabData.url || ""}"
          ts="${this.tabData.ts || ""}"
          @coll-tab-nav="${this.onCollTabNav}" id="replay"
          @replay-loading="${(e) => this.isLoading = e.detail.loading}"
          @replay-favicons="${this.onFavIcons}"
          >
          </wr-coll-replay>
        ` : ""}
      </div>
      `;
    } else {
      return html``;
    }
  }

  renderTabHeader(isSidebar) {
    // if (this.tabData.view === "replay") {
    //   return "";
    // }

    return html`
      <nav class="main tabs is-centered ${isSidebar ? "sidebar" : ""}" aria-label="tabs">
        <ul>
          ${isSidebar ? html`
          <li class="sidebar-nav left">
            <a role="button" href="#" @click="${this.onHideSidebar}" @keyup="${clickOnSpacebarPress}" class="is-marginless is-size-6 is-paddingless">
              <fa-icon title="Hide" .svg="${fasAngleLeft}" aria-hidden="true"></fa-icon>
              <span class="nav-hover" aria-hidden="true">Hide</span>
              <span class="is-sr-only">Hide Sidebar</span>
            </a>
          </li>` : ""}

          ${this.hasStory ? html`
          <li class="${this.tabData.view === "story" ? "is-active" : ""}">
            <a @click="${this.onTabClick}" href="#story" class="is-size-6" aria-label="Story" aria-current="${this.tabData.view === "story" ? "location" : ""}">
              <span class="icon"><fa-icon .svg="${fasBook}" aria-hidden="true" title="Story"></fa-icon></span>
              <span class="tab-label ${isSidebar ? "is-hidden" : ""}" title="Story">Story</span>
            </a>
          </li>` : ""}

          <li class="${this.tabData.view === "pages" ? "is-active" : ""}">
            <a @click="${this.onTabClick}" href="#pages" class="is-size-6" aria-label="Pages" aria-current="${this.tabData.view === "pages" ? "location" : ""}">
              <span class="icon"><fa-icon .svg="${farPages}" aria-hidden="true" title="Pages"></fa-icon></span>
              <span class="tab-label ${isSidebar ? "is-hidden" : ""}" title="Pages">Pages</span>
            </a>
          </li>

          <li class="${this.tabData.view === "resources" ? "is-active" : ""}">
            <a @click="${this.onTabClick}" href="#resources" class="is-size-6" aria-label="URLs" aria-current="${this.tabData.view === "resources" ? "location" : ""}">
              <span class="icon"><fa-icon .svg="${farResources}" aria-hidden="true" title="URLs"></fa-icon></span>
              <span class="tab-label ${isSidebar ? "is-hidden" : ""}" title="URLs">URLs</span>
            </a>
          </li>

          <li class="${this.tabData.view === "info" ? "is-active" : ""}">
            <a @click="${this.onTabClick}" href="#info" class="is-size-6" aria-label="Archive Info" aria-current="${this.tabData.view === "info" ? "location" : ""}">
              <span class="icon"><fa-icon .svg="${fasInfoIcon}" aria-hidden="true" title="Archive Info"></fa-icon></span>
              <span class="tab-label ${isSidebar ? "is-hidden" : ""}" title="Archive Info">Info</span>
            </a>
          </li>

          ${isSidebar ? html`
          <li class="sidebar-nav right">
            <a role="button" href="#" @click="${this.onFullPageView}" @keyup="${clickOnSpacebarPress}" class="is-marginless is-size-6 is-paddingless">
              <span class="nav-hover" aria-hidden="true">Expand</span>
              <span class="is-sr-only">Expand Sidebar to Full View</span>
              <fa-icon title="Expand" .svg="${fasAngleRight}" aria-hidden="true"></fa-icon>
            </a>
          </li>` : ""}
        </ul>
      </nav>`;
  }

  renderLocationBar() {
    if (this.embed === "replayonly") {
      return "";
    }

    const dateStr = tsToDate(this.ts).toLocaleString();

    const isReplay = !!this.tabData.url;

    const showFavIcon = isReplay && this.favIconUrl;

    return html`
    <a class="skip-link" href="#skip-replay-target" @click="${this.skipMenu}">Skip replay navigation</a>
    <nav class="replay-bar" aria-label="replay">
      <div class="field has-addons">
        <a href="#" role="button" class="button narrow is-borderless is-hidden-touch" id="fullscreen" @click="${this.onFullscreenToggle}" @keyup="${clickOnSpacebarPress}"
                title="${this.isFullscreen ? "Exit Full Screen" : "Full Screen"}" aria-label="${this.isFullscreen ? "Exit Fullscreen" : "Fullscreen"}">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${this.isFullscreen ? fasUnfullscreen : fasFullscreen}"></fa-icon>
          </span>
        </a>
        <a href="#" role="button" class="button narrow is-borderless is-hidden-mobile" @click="${this.onGoBack}" @keyup="${clickOnSpacebarPress}"
                title="Back" aria-label="Back">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fasLeft}"></fa-icon>
          </span>
        </a>
        <a href="#" role="button" class="button narrow is-borderless is-hidden-mobile" @click="${this.onGoForward}" @keyup="${clickOnSpacebarPress}"
                title="Forward" aria-label="Forward">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fasRight}"></fa-icon>
          </span>
        </a>
        <a href="#" role="button" class="button narrow is-borderless ${this.isLoading ? "is-loading" : "is-hidden-mobile"}" id="refresh" @click="${this.onRefresh}" @keyup="${clickOnSpacebarPress}"
                title="Reload" aria-label="Reload">
          <span class="icon is-small">
            ${!this.isLoading ? html`
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fasRefresh}"></fa-icon>
            ` : ""}
          </span>
        </a>
        ${this.browsable ? html`
        <a href="#" role="button" class="button narrow is-borderless is-hidden-mobile ${!isReplay ? "grey-disabled" : ""}" @click="${this.onShowPages}" @keyup="${clickOnSpacebarPress}"
                ?disabled="${!isReplay}" title="Browse Contents" aria-label="Browse Contents" aria-controls="contents">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${farListAlt}"></fa-icon>
          </span>
        </a>` : ""}
        ${this.renderExtraToolbar(false)}
        <form @submit="${this.onSubmit}">
          <div class="control is-expanded ${showFavIcon ? "has-icons-left" : ""}">
            <input id="url" class="input" type="text" @keydown="${this.onKeyDown}" @blur="${this.onLostFocus}" .value="${this.url}" placeholder="Enter text to search or a URL to replay"/>
            ${isReplay ? html`<p id="datetime" class="control is-hidden-mobile">${dateStr}</p>` : html``}
            ${showFavIcon ? html`
            <span class="favicon icon is-small is-left">
              <img src="${this.favIconUrl}"/>
            </span>` : html``}
          </div>
        </form>

        <div class="dropdown is-right ${this.menuActive ? "is-active" : ""}" @click="${() => this.menuActive = false}">
          <div class="dropdown-trigger">
            <button class="button is-borderless" aria-haspopup="true" aria-controls="menu-dropdown" aria-expanded="${this.menuActive}" @click="${this.onMenu}"
                    aria-label="more replay controls">
              <span class="icon is-small">
                <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fasMenuV}"></fa-icon>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="menu-dropdown">
            <div class="dropdown-content">
              <a href="#" role="button" class="dropdown-item is-hidden-desktop" @click="${this.onFullscreenToggle}" @keyup="${clickOnSpacebarPress}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${this.isFullscreen ? fasUnfullscreen : fasFullscreen}"></fa-icon>
                </span>
                <span>Full Screen</span>
              </a>
              <a href="#" role="button" class="dropdown-item is-hidden-tablet" @click="${this.onGoBack}" @keyup="${clickOnSpacebarPress}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fasLeft}"></fa-icon>
                </span>
                <span>Back</span>
              </a>
              <a href="#" role="button" class="dropdown-item is-hidden-tablet" @click="${this.onGoForward}" @keyup="${clickOnSpacebarPress}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fasRight}"></fa-icon>
                </span>
                <span>Forward</span>
              </a>
              <a href="#" role="button" class="dropdown-item is-hidden-tablet" @click="${this.onRefresh}" @keyup="${clickOnSpacebarPress}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fasRefresh}"></fa-icon>
                </span>
                <span>Reload</span>
              </a>
              ${this.browsable ? html`
              <a href="#" role="button" class="dropdown-item is-hidden-tablet ${!isReplay ? "grey-disabled" : ""}" @click="${this.onShowPages}" @keyup="${clickOnSpacebarPress}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${farListAlt}"></fa-icon>
                </span>
                <span>Browse Contents</span>
              </a>` : ""}
              ${this.renderExtraToolbar(true)}
              ${!this.editable ? html`
              <hr class="dropdown-divider is-hidden-desktop">
              <a href="#" role="button" class="dropdown-item" @click="${this.onPurgeCache}" @keyup="${clickOnSpacebarPress}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fasSync}"></fa-icon>
                </span>
                <span>Purge Cache + Full Reload</span>
              </a>` : html``}
              ${!this.editable && this.sourceUrl.startsWith("http://") || this.sourceUrl.startsWith("https://") ? html`
              <hr class="dropdown-divider">
              <a href="${this.sourceUrl}" role="button" class="dropdown-item" @keyup="${clickOnSpacebarPress}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" aria-hidden="true" .svg="${fasDownload}"></fa-icon>
                </span>
                <span>Download Archive</span>
              </a>` : html``}
              ${dateStr ? html`
              <hr class="dropdown-divider is-hidden-desktop">
              <div class="dropdown-item info is-hidden-desktop">
                <span class="menu-head">Capture Date</span>${dateStr}
              </div>` : ""}
              <hr class="dropdown-divider">
              <a href="#" role="button" class="dropdown-item" @click="${this.onAbout}">
                <fa-icon class="menu-logo" size="1.0rem" aria-hidden="true" .svg=${this.appLogo}></fa-icon>
                <span>&nbsp;About ${this.appName}</span>
                <span class="menu-version">(${this.appVersion})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav><p id="skip-replay-target" tabindex="-1" class="is-sr-only">Skipped</p>`;
  }

  dragStart() {
    const replay = this.renderRoot.querySelector("wr-coll-replay");
    if (replay) {
      replay.setDisablePointer(true);
    }
  }

  dragEnd() {
    const replay = this.renderRoot.querySelector("wr-coll-replay");
    if (replay) {
      replay.setDisablePointer(false);
    }
  }

  renderCollInfo() {
    return html`
    <div class="info-bg">
      <wr-coll-info
      class="is-list"
      .coll="${this.collInfo}"
      ?detailed="${true}"
      ?canDelete="${!this.embed}"
      @coll-purge="${this.onPurgeCache}"
      ></wr-coll-info>
    </div>`;
  }

  renderExtraToolbar(/*isDropdown = false*/) {
    return "";
  }

  renderCollTabs(isSidebar) {
    const isStory = this.hasStory && this.tabData.view === "story";
    const isPages = this.tabData.view === "pages";
    const isResources = this.tabData.view === "resources";
    const isInfo = this.tabData.view === "info";

    return html`

    ${isInfo ? this.renderCollInfo() : html``}

    ${isStory ? html`
    <wr-coll-story .collInfo="${this.collInfo}"
    .active="${isStory}"
    currList="${this.tabData.currList || 0}"
    @coll-tab-nav="${this.onCollTabNav}" id="story"
    .isSidebar="${isSidebar}"
    class="${isStory ? "" : "is-hidden"} ${isSidebar ? "sidebar" : ""}"
    role="${isSidebar ? "" : "main"}"
    >
    </wr-coll-story>` : ""}

    ${isResources ? html`
    <wr-coll-resources .collInfo="${this.collInfo}"
    .active="${isResources}"
    query="${this.tabData.query || ""}"
    urlSearchType="${this.tabData.urlSearchType || ""}"
    .currMime="${this.tabData.currMime || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="resources"
    .isSidebar="${isSidebar}"
    class="is-paddingless ${isResources ? "" : "is-hidden"} ${isSidebar ? "sidebar" : ""}"
    role="${isSidebar ? "" : "main"}"
    >
    </wr-coll-resources>` : ""}

    ${isPages ? html`
    <wr-page-view
    .collInfo="${this.collInfo}"
    .active="${isPages}"
    .editable="${this.editable}"
    .isSidebar="${isSidebar}"
    currList="${this.tabData.currList || 0}"
    query="${this.tabData.query || ""}"
    .url="${this.tabData.url || ""}"
    .ts="${this.tabData.ts || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="pages"
    @coll-update="${this.onCollUpdate}"
    class="${isPages ? "" : "is-hidden"} ${isSidebar ? "sidebar" : ""}"
    role="${isSidebar ? "" : "main"}"
    >
    </wr-page-view>` : ""}
    `;
  }

  skipMenu(event){
    // This is a workaround, since this app's routing doesn't permit normal
    // following of in-page anchors.
    event.preventDefault();
    this.renderRoot.querySelector("#skip-replay-target").focus();
  }

  onKeyDown(event) {
    if (event.key === "Esc" || event.key === "Escape") {
      event.preventDefault();
      event.currentTarget.value = this.url;
    }
  }

  onMenu(event) {
    event.stopPropagation();
    this.menuActive = !this.menuActive;

    if (this.menuActive) {
      document.addEventListener("click", () => {
        this.menuActive = false;
      }, {once: true});
    }
  }

  onFullscreenToggle(event) {
    event.preventDefault();
    this.menuActive = false;
    if (!this.isFullscreen) {
      this.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  onGoBack(event) {
    event.preventDefault();
    this.menuActive = false;
    window.history.back();
  }

  onGoForward(event) {
    event.preventDefault();
    this.menuActive = false;
    window.history.forward();
  }

  onShowPages(event) {
    event.preventDefault();
    // show sidebar for tablet or wider, or hide sidebar
    if (this.showSidebar || (document.documentElement.clientWidth >= 769)) {
      this.showSidebar = !this.showSidebar;
    } else {
      // otherwise, just go to full pages view
      this.showSidebar = false;
      this.updateTabData({url: "", ts: ""});
    }
  }

  onFullPageView(event) {
    event.preventDefault();
    this.updateTabData({url: "", ts: ""});
  }

  onHideSidebar(event) {
    event.preventDefault();
    this.showSidebar = false;
  }

  async onFavIcons(event) {
    for (const icon of event.detail.icons) {
      const resp = await fetch(icon.href);
      if (resp.status === 200) {
        const ct = resp.headers.get("Content-Type");
        if (ct && !ct.startsWith("text/")) {
          this.favIconUrl = icon.href;
          return;
        }
      }
    }

    // not found
    this.favIconUrl = "";
  }

  onPurgeCache(event) {
    event.preventDefault();

    const reload = event.detail && event.detail.reload !== undefined ? event.detail.reload : true;

    this.deleteFully(reload);
  }

  async deleteFully(reload = false) {
    const deleteURL = this.collInfo.apiPrefix + (reload ? "?reload=1" : "");

    const resp = await fetch(deleteURL, {
      method: "DELETE",
    });

    if (resp.status !== 200) {
      console.warn("purge failed: " + resp.status);
    }

    if (!reload && !this.embed) {
      window.location.search = "";
      return;
    }

    //window.location.hash = "";
    window.location.reload();
  }

  onSubmit(event) {
    event.preventDefault();
    const input = this.renderRoot.querySelector("input");
    if (input.value) {
      this.navigateTo(input.value);
    } else {
      input.value = this.url;
    }
    return false;
  }

  onLostFocus(event) {
    if (!event.currentTarget.value) {
      event.currentTarget.value = this.url;
    }
  }

  navigateTo(value) {
    let data;

    if (value.startsWith("http://") || value.startsWith("https://")) {
      data = {url: value};

      if (value === this.tabData.url) {
        const replay = this.renderRoot.querySelector("wr-coll-replay");
        if (replay) {
          replay.refresh();
        }
        return;
      }

    } else {
      if (!value.startsWith(RWP_SCHEME)) {
        data = {query: value, view: "pages"};
      } else {
        data = this._stringToParams(value);
      }
    }
    this.updateTabData(data);
  }

  _stringToParams(value) {
    const q = new URLSearchParams(value.slice(RWP_SCHEME.length));
    const data = {};
    data.url = "";
    data.ts = "";

    for (const param of ["query", "view", "currList", "currMime", "urlSearchType"]) {
      if (q.has(param)) {
        data[param] = q.get(param);
      }
    }

    return data;
  }

  _paramsToString(value) {
    const q = new URLSearchParams();

    for (const param of ["query", "view", "currList", "currMime", "urlSearchType"]) {
      if (param in value) {
        q.set(param, value[param]);
      }
    }

    return q.toString();
  }

  onRefresh(event, replayOnly = false) {
    if (event) {
      event.preventDefault();
    }

    this.menuActive = false;

    if (this.tabData.url) {
      const replay = this.renderRoot.querySelector("wr-coll-replay");
      if (replay) {
        replay.refresh();
      }
    } else if (!replayOnly) {
      window.location.reload();
    }
  }

  onAbout() {
    this.dispatchEvent(new CustomEvent("about-show"));
  }
}

customElements.define("wr-coll", Coll);

export { Coll };
