import { LitElement, html, css } from 'lit-element';
import { wrapCss, IS_APP } from './misc';

import { sourceToId } from './pageutils';

import farListAlt from '@fortawesome/fontawesome-free/svgs/solid/list-alt.svg';
import fasPage from '@fortawesome/fontawesome-free/svgs/solid/file-alt.svg';
import fasSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg';
import farPlayCircle from '@fortawesome/fontawesome-free/svgs/regular/play-circle.svg';


// ===========================================================================
class Coll extends LitElement
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

    wr-coll-replay, wr-coll-resources, wr-coll-curated, wr-coll-pages {
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
                <span class="tab-label" title="Curated Lists">Curated Lists</span>
              </a>
            </li>
          ` : ``}

            <li class="${this.tabData.view === 'pages' ? 'is-active' : ''}">
              <a @click="${this.onTabClick}" href="#pages" class="is-size-6">
                <span class="icon"><fa-icon .svg="${fasPage}"></fa-icon></span>
                <span class="tab-label" title="Pages">Pages</span>
              </a>
            </li>

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

    <wr-coll-pages .collInfo="${this.collInfo}"
    @coll-tab-nav="${this.onCollTabNav}" id="pages"
    class="${this.tabData.view === 'pages' ? '' : 'is-hidden'}">
    </wr-coll-pages>

    <wr-coll-resources .collInfo="${this.collInfo}"
    urlSearch="${this.tabData.urlSearch || ""}"
    urlSearchType="${this.tabData.urlSearchType || ""}"
    .currMime="${this.tabData.currMime || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="resources"
    class="is-paddingless ${this.tabData.view === 'resources' ? '' : 'is-hidden'}">
    </wr-coll-resources>

    ${this.tabData.view === 'replay' ? html`
    <wr-coll-replay .collInfo="${this.collInfo}"
    sourceUrl="${this.sourceUrl}"
    embed="${this.embed}"
    url="${this.tabData.url || ""}"
    ts="${this.tabData.ts || ""}"
    @coll-tab-nav="${this.onCollTabNav}" id="replay"
    class="${this.tabData.view === 'replay' ? '' : 'is-hidden'}">
    </wr-coll-replay>
    ` : ``}
    `;
  }
}

customElements.define("wr-coll", Coll);

export { Coll };