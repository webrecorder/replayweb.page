import { LitElement, html, css } from 'lit-element';
import { wrapCss, rwpLogo, IS_APP } from './misc';

import { registerSW, initDBWorker } from './pageutils';

import prettyBytes from 'pretty-bytes';

import fasHelp from '@fortawesome/fontawesome-free/svgs/solid/question-circle.svg';
import fasArrowLeft from '@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg';
import fasArrowRight from '@fortawesome/fontawesome-free/svgs/solid/arrow-right.svg';
import fasInfoIcon from '@fortawesome/fontawesome-free/svgs/solid/info-circle.svg';


// ===========================================================================
class App extends LitElement
{

  constructor() {
    super();
    this.sourceUrl = null;
    this.collInfo = null;
    this.showTerms = false;
    this.pageParams = {};

    this.inited = false;

    registerSW(__SW_NAME__);
    initDBWorker();
  }

  static get properties() {
    return {
      inited: { type: Boolean },
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
      min-width: 0px;
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
    .tagline {
      margin-top: 1.0rem;
    }

    @media screen and (min-width: 840px) {
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

      a.navbar-item.logo-text:hover {
        background-color: initial;
      }
    }

    @media screen and (max-width: 840px) {
      .wide-only {
        display: none !important;
      }
    }

    `);
  }

  render() {
    if (!this.inited) {
      return html``;
    }
    return html`
    ${!this.embed || this.embed === "full" ? html`
    <nav class="navbar has-background-info" aria-label="main">
      <div class="navbar-brand">
        ${!this.embed ? html `
          <a href="/" class="navbar-item wr-logo-item menu-only" aria-labelledby="home">
            <fa-icon id="wrlogo" size="2.5rem" .svg=${rwpLogo} aria-hidden="true"></fa-icon>
          </a>
          <span class="navbar-item wr-logo-item wide-only">
            <fa-icon id="wrlogo" size="2.5rem" .svg=${rwpLogo} aria-hidden="true"></fa-icon>
          </span>`: html `
          <span class="navbar-item wr-logo-item">
            <fa-icon id="wrlogo" size="2.5rem" .svg=${rwpLogo} aria-hidden="true"></fa-icon>
          </span>
        `}

        <a role="button" @click="${this.onNavMenu}"
        class="navbar-burger burger ${this.navMenuShown ? 'is-active' : ''}" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu ${this.navMenuShown ? 'is-active' : ''}">
      <div class="navbar-start">
      ${!this.embed ? html`
        <a id="home" class="navbar-item logo-text has-text-weight-bold is-size-5 has-allcaps" href="/">
          <span class="has-text-primary">replay</span>
          <span class="has-text-link">web.page</span>
          <span class="is-sr-only">Home</span>
        </a>` : ``}

      ${IS_APP && !this.collInfo ? html`
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
            <hr class="navbar-divider">
            <div class="navbar-item">
              ReplayWeb.page Version: ${__VERSION__}
            </div>
          </div>
        </div>
        ` : ``}
      </div>
      ${!this.embed ? html`
        <div class="navbar-end">
          <a href="/docs" target="_blank" class="navbar-item">
            <fa-icon .svg="${fasHelp}"></fa-icon><span>&nbsp;User Docs</span>
          </a>
          <a href="?terms" @click="${(e) => { e.preventDefault(); this.showTerms = true} }"class="navbar-item">Terms</a>
        </div>` : html``}
    </nav>
  ` : ''}

  ${this.sourceUrl ? html`

  <wr-coll .loadInfo="${this.loadInfo}"
  sourceUrl="${this.sourceUrl}"
  embed="${this.embed}"
  @replay-favicons=${this.onFavIcons}
  @coll-loaded=${this.onCollLoaded}></wr-coll>
  ` : html`

  <wr-coll-index>
  ${!IS_APP ? html`
  <p slot="header" class="tagline is-size-5 has-text-centered">Explore and Replay Interactive Archived Webpages Directly in your Browser. <i><a target="_blank" href="./docs/examples">(See Examples)</a></i></p>
  ` : ``}
    <wr-chooser slot="header" @load-start=${this.onStartLoad}></wr-chooser>
  </wr-coll-index>
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
            <p>See the <a target="_blank" href="./docs">Docs</a> for more info on how it works.</p>

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

  onNavMenu(event) {
    event.stopPropagation();
    this.navMenuShown = !this.navMenuShown;

    if (this.navMenuShown) {
      document.addEventListener("click", () => {
        this.navMenuShown = false;
      }, {once: true});
    }
  }

  initRoute() {
    this.inited = true;
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

    if (this.pageParams.get("basePageUrl")) {
      if (!this.loadInfo) {
        this.loadInfo = {extraConfig: {}}
      }
      if (!this.loadInfo.extraConfig) {
        this.loadInfo.extraConfig = {};
      }
      this.loadInfo.extraConfig.baseUrl = this.pageParams.get("basePageUrl");
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

customElements.define("replay-app-main", App);

export { App };
