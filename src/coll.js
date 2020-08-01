import { LitElement, html, css } from 'lit-element';
import { wrapCss, rwpLogo, IS_APP } from './misc';

import { sourceToId } from './pageutils';

import fasBook from '@fortawesome/fontawesome-free/svgs/solid/book.svg';

import farListAlt from '@fortawesome/fontawesome-free/svgs/regular/list-alt.svg';
import farResources from '@fortawesome/fontawesome-free/svgs/regular/file-code.svg';
import farPlayCircle from '@fortawesome/fontawesome-free/svgs/regular/play-circle.svg';


import { tsToDate } from './pageutils';

import fasRefresh from '@fortawesome/fontawesome-free/svgs/solid/redo-alt.svg';
import fasSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg';
import fasFullscreen from '@fortawesome/fontawesome-free/svgs/solid/desktop.svg';
import fasUnfullscreen from '@fortawesome/fontawesome-free/svgs/solid/compress-arrows-alt.svg';

import fasLeft from '@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg';
import fasRight from '@fortawesome/fontawesome-free/svgs/solid/arrow-right.svg';
import fasMenuV from '@fortawesome/fontawesome-free/svgs/solid/ellipsis-v.svg';


const RWP_SCHEME = "rwp://";


// ===========================================================================
class Coll extends LitElement
{
  constructor() {
    super();
    this.sourceUrl = null;
    this.inited = false;

    this.baseApiPrefix = "./wabac/api";
    this.baseReplayPrefix = "./wabac";
    this.apiPrefix = "";
    this.replayPrefix = "";

    this.coll = "";

    this.collInfo = null;

    this._replaceLoc = false;
    this._locUpdateNeeded = false;

    this._locationHash = "";

    this.tabData = {};
    this.url = "";
    this.ts = "";

    this.tabNames = ["pages", "story", "resources", "replay"];

    this.menuActive = false;

    this.hasStory = false;
  }

  static get properties() {
    return {
      inited: { type: Boolean },

      sourceUrl: { type: String },
      loadInfo: { type: Object, attribute: false },

      collInfo: { type: Object, attribute: false },
      coll: { type: String },
      hasStory: { type: Boolean },

      tabData: { type: Object, attribute: false },

      url: { type: String },
      ts: { type: String },
      
      isFullscreen: { type: Boolean },
      menuActive: { type: Boolean },

      embed: { type: String },
      editable: { type: Boolean }
    }
  }

  firstUpdated() {
    //this.doUpdateInfo();
    this.inited = true;
    window.addEventListener("hashchange", (event) => this.onHashChange(event));

    this.addEventListener("fullscreenchange", (event) => {
      this.isFullscreen = !!document.fullscreenElement;
    });
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
    if (changedProperties.has("tabData")) {
      if (!this.collInfo || !this.collInfo.coll) {
        return;
      }

      // don't add empty params to shorten query
      Object.keys(this.tabData).
        forEach(key => !this.tabData[key] && delete this.tabData[key]);

      const newHash = "#" + new URLSearchParams(this.tabData).toString();

      if (this.tabData.view !== "replay") {
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

    const resp = await fetch(apiPrefix + "?all=1");

    if (resp.status != 200) {
      this.collInfo = {};
      return;
    }

    const json = await resp.json();

    this.collInfo = {apiPrefix, replayPrefix, coll, ...json};

    if (!this.collInfo.title) {
      this.collInfo.title = this.collInfo.filename;
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

    if (this.collInfo.coll && !this.tabNames.includes(this.tabData.view)) {
      const view = this.hasStory ? "story" : (this.collInfo.pages.length ? "pages" : "resources");

      this.tabData = {
        ...this.tabData, view
      };
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
    if (event.target.id === this.tabData.view) {
      this.updateTabData(event.detail.data, event.detail.replaceLoc);
    }
  }

  updateTabData(data, replaceLoc = false) {
    this.tabData = {view: this.tabData.view, ...data};
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
    return wrapCss(css`
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
      display: none;
    }

    @media screen and (min-width: ${!IS_APP ? css`1054px` : css`1164px`}) {
      .tab-label {
        display: inline;
      }
    }

    .main.tabs {
      position: absolute;
      top: 0px;
      left: 50%;
      min-height: 41px;
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

    @media screen and (max-width: 319px) {
      .main.tabs li a {
        padding-right: 4px;
        padding-left: 4px;
      }

      .tabs span.icon {
        margin: 0px !important;
      }
    }

    #contents {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    ${Coll.replayBarStyles}
    `);
  }

  static get replayBarStyles() {
    return css`
    .replay-bar {
      padding: 1em;
      max-width: none;
      border-bottom: solid .1rem #97989A;
      width: 100%;
      background-color: white;
    }

    input#url {
      border-radius: 4px;
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

    .replay-bar .button:focus {
      box-shadow: none;
    }

    .dropdown .button {
      padding-right: 0px;
    }

    .is-borderless {
      border: 0px;
    }

    .modal {
      top: 174px;
    }

    form {
      width: 100%;
    }
    `;
  }

  render() {
    if (!this.inited) return html``;

    if (this.collInfo && !this.collInfo.coll) {
      return html`
      <wr-loader .loadInfo="${this.loadInfo}" embed="${this.embed}"
      .coll="${this.coll}" .sourceUrl="${this.sourceUrl}" @coll-loaded=${this.onCollLoaded}></wr-loader>`;
    } else if (this.collInfo) {
      return html`
      <nav id="contents" class="is-light">
      ${!this.embed || this.embed === "full" ? html`
        <div class="main tabs has-background-info is-centered">
          <ul>
            ${this.hasStory ? html`
            <li class="${this.tabData.view === 'story' ? 'is-active' : ''}">
              <a @click="${this.onTabClick}" href="#story" class="is-size-6">
                <span class="icon"><fa-icon .svg="${fasBook}"></fa-icon></span>
                <span class="tab-label" title="Story">Story</span>
              </a>
            </li>` : ``}

            <li class="${this.tabData.view === 'pages' ? 'is-active' : ''}">
              <a @click="${this.onTabClick}" href="#pages" class="is-size-6">
                <span class="icon"><fa-icon .svg="${farListAlt}"></fa-icon></span>
                <span class="tab-label" title="Pages">Pages</span>
              </a>
            </li>

            <li class="${this.tabData.view === 'resources' ? 'is-active' : ''}">
              <a @click="${this.onTabClick}" href="#resources" class="is-size-6">
                <span class="icon"><fa-icon .svg="${farResources}"></fa-icon></span>
                <span class="tab-label" title="URL Resources">Page Resources</span>
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
        ${this.renderLocationBar()}
        ${this.renderCollTabs()}
      </nav>`;
    } else {
      return html``;
    }
  }

  renderLocationBar() {
    const dateStr = tsToDate(this.ts).toLocaleString();

    return html`
    <div class="replay-bar">
      <div class="field has-addons">
        <button id="fullscreen" class="button is-borderless is-hidden-mobile" @click="${this.onFullscreenToggle}">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" .svg="${this.isFullscreen ? fasUnfullscreen : fasFullscreen}"></fa-icon>
          </span>
        </button>
        <button class="button is-borderless is-hidden-touch" @click="${this.onGoBack}">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" .svg="${fasLeft}"></fa-icon>
          </span>
        </button>
        <button class="button is-borderless is-hidden-touch" @click="${this.onGoForward}">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" .svg="${fasRight}"></fa-icon>
          </span>
        </button>
        <button id="refresh" class="button is-borderless ${this.isLoading ? 'is-loading' : 'is-hidden-mobile'}" @click="${this.onRefresh}">
          <span class="icon is-small">
            ${!this.isLoading ? html`
            <fa-icon size="1.0em" class="has-text-grey" .svg="${fasRefresh}"></fa-icon>
            ` : ``}
          </span>
        </button>
        <button class="button is-borderless is-hidden-touch" @click="${this.onGoPages}">
          <span class="icon is-small">
            <fa-icon size="1.0em" class="has-text-grey" .svg="${farListAlt}"></fa-icon>
          </span>
        </button>
        <form @submit="${this.onSubmit}">
          <div class="control is-expanded">
            <input id="url" class="input" type="text" @keydown="${this.onKeyDown}" .value="${this.url}" placeholder="https://... Enter a URL to replay from the archive here"/>
            ${this.tabData.view === "replay" ? html`<p id="datetime" class="control is-hidden-mobile">${dateStr}</p>` : html``}
          </div>
        </form>

        <div class="dropdown is-right ${this.menuActive ? 'is-active' : ''}" @click="${(e) => this.menuActive = false}">
          <div class="dropdown-trigger">
            <button class="${this.embed ? '' : 'is-hidden-tablet'} button is-borderless" aria-haspopup="true" aria-controls="menu-dropdown" @click="${this.onMenu}">
              <span class="icon is-small">
                <fa-icon size="1.0em" class="has-text-grey" .svg="${fasMenuV}"></fa-icon>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="menu-dropdown" role="menu">
            <div class="dropdown-content">
              <a class="dropdown-item is-hidden-tablet" @click="${this.onFullscreenToggle}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" .svg="${this.isFullscreen ? fasUnfullscreen : fasFullscreen}"></fa-icon>
                </span>
                <span>Full Screen</span>
              </a>
              <a class="dropdown-item is-hidden-desktop" @click="${this.onGoBack}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" .svg="${fasLeft}"></fa-icon>
                </span>
                <span>Back</span>
              </a>
              <a class="dropdown-item is-hidden-desktop" @click="${this.onGoForward}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" .svg="${fasRight}"></fa-icon>
                </span>
                <span>Forward</span>
              </a>
              <a class="dropdown-item is-hidden-tablet" @click="${this.onRefresh}">
                <span class="icon is-small">
                  <fa-icon size="1.0em" class="has-text-grey" .svg="${fasRefresh}"></fa-icon>
                </span>
                <span>Reload</span>
              </a>
              <hr class="dropdown-divider is-hidden-desktop">
              <a class="dropdown-item" @click="${this.onPurgeCache}">
                Purge Cache + Full Reload
              </a>
              ${dateStr ? html`
              <hr class="dropdown-divider is-hidden-desktop">
              <div class="dropdown-item info is-hidden-desktop">
                <span class="menu-head">Capture Date</span>${dateStr}
              </div>` : ``}
              ${this.embed ? html`
              <hr class="dropdown-divider">
              <a href="https://replayweb.page/" target="_blank" class="dropdown-item info">
                <fa-icon class="menu-logo" size="1.0rem" .svg=${rwpLogo}></fa-icon>
                <span>&nbsp;About ReplayWeb.page</span>
                <span class="menu-version">(${__VERSION__})</span>
              </a>
              ` : ``}
            </div>
          </div>
        </div>


      </div>
    </div>`;
  }

  renderCollTabs() {
    const isStory = this.tabData.view === 'story';
    const isPages = this.tabData.view === 'pages';
    const isResources = this.tabData.view === 'resources';
    const isReplay = this.tabData.view === 'replay';

    return html`
    ${this.hasStory ? html`
    <wr-coll-story .collInfo="${this.collInfo}"
    .active="${isStory}"
    currList="${this.tabData.currList || 0}"
    @coll-tab-nav="${this.onCollTabNav}" id="story"
    class="${isStory ? '' : 'is-hidden'}">
    </wr-coll-story>` : ''}

    <wr-page-view .collInfo="${this.collInfo}"
    .active="${isPages}"
    .editable="${this.editable}"
    currList="${this.tabData.currList || 0}"
    query="${this.tabData.query || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="pages"
    class="${isPages ? '' : 'is-hidden'}">
    </wr-page-view>

    <wr-coll-resources .collInfo="${this.collInfo}"
    .active="${isResources}"
    query="${this.tabData.query || ""}"
    urlSearchType="${this.tabData.urlSearchType || ""}"
    .currMime="${this.tabData.currMime || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="resources"
    class="is-paddingless ${isResources ? '' : 'is-hidden'}">
    </wr-coll-resources>

    ${isReplay ? html`
    <wr-coll-replay .collInfo="${this.collInfo}"
    sourceUrl="${this.sourceUrl}"
    embed="${this.embed}"
    url="${this.tabData.url || ""}"
    ts="${this.tabData.ts || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="replay"
    class="${isReplay ? '' : 'is-hidden'}">
    </wr-coll-replay>
    ` : ``}
    `;
  }

  onKeyDown(event) {
    if (event.key === "Esc" || event.key === "Escape") {
      event.target.value = this.replayUrl;
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

  onFullscreenToggle() {
    this.menuActive = false;
    if (!this.isFullscreen) {
      this.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  onGoBack() {
    this.menuActive = false;
    window.history.back();
  }

  onGoForward() {
    this.menuActive = false;
    window.history.forward();
  }

  onGoPages() {
    this.navigateTo(RWP_SCHEME + "view=pages");
  }

  onReAuthed(event) {
    this.reauthWait = (async () => {
      const headers = event.detail.headers;

      const resp = await fetch(`${this.collInfo.apiPrefix}/updateAuth`, { 
        method: 'POST',
        body: JSON.stringify({headers})
      });

      if (this.showAuth) {
        this.onRefresh(null, true);
        this.showAuth = false;
      }
    })();
  }

  async onPurgeCache(event) {
    event.preventDefault();

    const resp = await fetch(`${this.collInfo.apiPrefix}`, {
      method: 'DELETE',
    });

    if (resp.status === 200 && window.parent) {
      window.parent.location.reload();
    } else {
      console.warn("purge failed: " + resp.status);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const value = this.renderRoot.querySelector("input").value;
    this.navigateTo(value);
    return false;
  }

  navigateTo(value) {
    if (value.startsWith("http://") || value.startsWith("https://")) {
      this.url = value;
      this._replaceLoc = !this._locUpdateNeeded;
      this._locUpdateNeeded = true;

    } else {
      let data;
      if (!value.startsWith(RWP_SCHEME)) {
        data = {query: value, view: "pages"};
      } else {
        data = this._stringToParams(value);
      }
      //this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {replaceLoc: false, data}}));
      this.updateTabData(data);
    }
  }

  _stringToParams(value) {
    const q = new URLSearchParams(value.slice(RWP_SCHEME.length));
    const data = {};

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

  onRefresh(event, forceReload) {
    if (event) {
      event.preventDefault();
    }

    this.menuActive = false;

    if (this.tabData.view === "replay") {
      const replay = this.renderRoot.querySelector("wr-coll-replay");
      if (replay) {
        replay.refresh();
      }
    }
  }
}

customElements.define("wr-coll", Coll);

export { Coll };