import { LitElement, html, css } from 'lit-element';
import { wrapCss, IS_APP } from './misc';

import { sourceToId } from './pageutils';

import fasBook from '@fortawesome/fontawesome-free/svgs/solid/book.svg';

import farListAlt from '@fortawesome/fontawesome-free/svgs/regular/list-alt.svg';
import farResources from '@fortawesome/fontawesome-free/svgs/regular/file-code.svg';
import farPlayCircle from '@fortawesome/fontawesome-free/svgs/regular/play-circle.svg';


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

    this.tabNames = ["pages", "story", "resources", "replay"];

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

      replayUrl: { type: String },
      replayTS: { type: String },

      embed: { type: String },
      editable: { type: Boolean }
    }
  }

  firstUpdated() {
    //this.doUpdateInfo();
    this.inited = true;
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
    `);
  }

  render() {
    if (!this.inited) return html``;

    if (this.collInfo && !this.collInfo.coll) {
      return html`
      <wr-loader .loadInfo="${this.loadInfo}" 
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
        ${this.renderCollTabs()}
      </nav>`;
    } else {
      return html``;
    }
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
}

customElements.define("wr-coll", Coll);

export { Coll };