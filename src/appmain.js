import { LitElement, html, css } from "lit";
import { wrapCss, rwpLogo, IS_APP, VERSION, clickOnSpacebarPress } from "./misc";

import { registerSW } from "./pageutils";

import fasHelp from "@fortawesome/fontawesome-free/svgs/solid/question-circle.svg";
import fasArrowLeft from "@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg";
import fasArrowRight from "@fortawesome/fontawesome-free/svgs/solid/arrow-right.svg";


// ===========================================================================
class ReplayWebApp extends LitElement
{
  // eslint-disable-next-line no-undef
  constructor(swName = __SW_NAME__) {
    super();
    this.sourceUrl = null;
    this.collTitle = null;
    this.showAbout = false;
    this.pageParams = new URLSearchParams();

    this.inited = false;
    this.navMenuShown = false;

    this.collPageUrl = "";
    this.pageTitle = "";
    this.pageReplay = false;

    this.loadInfo = null;

    if (swName) {
      registerSW(swName);
    }

    this.safariKeyframes();
  }

  get appName() {
    return "ReplayWeb.page";
  }

  get homeUrl() {
    return window.location.pathname;
  }

  static get properties() {
    return {
      inited: { type: Boolean },
      pageParams: { type: Object },
      sourceUrl: { type: String },
      navMenuShown: { type: Boolean },
      showAbout: { type: Boolean },
      collTitle: { type: String },
      loadInfo: { type: Object },
      embed: { type: String },
      collPageUrl: { type: String },
      pageTitle: { type: String },
      pageReplay: { type: Boolean },
      source: { type: String }
    };
  }

  static get styles() {
    return wrapCss(ReplayWebApp.appStyles);
  }

  static get appStyles() {
    return css`
    #wrlogo {
      max-height: 1.0rem;
    }
    .navbar {
      height: 1.5rem;
    }
    .navbar-brand {
      height: 1.5rem;
      display: flex;
      align-items: center;
    }
    .wr-logo-item {
      padding: 0 8px 0 0;
    }
    .no-wrap {
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
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
        margin-left: 6px;
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

    `;
  }

  get mainLogo() {
    return rwpLogo;
  }

  renderNavBrand() {
    return html`
      <span id="home" class="logo-text has-text-weight-bold is-size-6 has-allcaps wide-only">
      <span class="has-text-primary">replay</span>
      <span class="has-text-link">web.page</span>
      <span class="is-sr-only">Home</span>
    </span>`;
  }

  renderNavBar() {
    return html`
    <a href="#skip-main-target" @click=${this.skipMenu} class="skip-link">Skip main navigation</a>
    <nav class="navbar has-background-info" aria-label="main">
      <div class="navbar-brand">
        ${!this.embed ? html`
          <a href="${this.homeUrl}" class="navbar-item wr-logo-item" aria-labelledby="home">
            <fa-icon id="wrlogo" size="1.0rem" .svg=${this.mainLogo} aria-hidden="true"></fa-icon>
            ${this.renderNavBrand()}
          </a>
          ${this.collTitle ? html`
          <a href="${this.collPageUrl}" class="no-wrap is-size-6 has-text-black">/&nbsp;&nbsp;<i>${this.collTitle}</i></a>
          <span class="no-wrap is-size-6">&nbsp;&nbsp;/&nbsp;
          ${this.pageReplay ? html`<i>${this.pageTitle}</i>` : this.pageTitle}
          </span>
          ` : ""}
          `: html`
          <span class="navbar-item wr-logo-item">
            <fa-icon id="wrlogo" size="1.0rem" .svg=${this.mainLogo} aria-hidden="true"></fa-icon>
          </span>
        `}
        <a href="#" role="button" id="menu-button" @click="${this.onNavMenu}" @keyup="${clickOnSpacebarPress}"
          class="navbar-burger burger ${this.navMenuShown ? "is-active" : ""}" aria-label="main menu" aria-haspopup="true" aria-expanded="${this.navMenuShown}">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      ${!this.sourceUrl ? html`
      <div class="navbar-menu ${this.navMenuShown ? "is-active" : ""}">
        <div class="navbar-start">
          ${IS_APP ? html`
            <a role="button" href="#" class="navbar-item arrow-button" title="Go Back" @click="${() => window.history.back()}" @keyup="${clickOnSpacebarPress}">
              <fa-icon size="1.0rem" .svg="${fasArrowLeft}" aria-hidden="true"></fa-icon><span class="menu-only is-size-7">&nbsp;Go Back</span>
            </a>
            <a role="button" href="#" class="navbar-item arrow-button" title="Go Forward" @click="${() => window.history.forward()}" @keyup="${clickOnSpacebarPress}">
              <fa-icon size="1.0rem" .svg="${fasArrowRight}" aria-hidden="true"></fa-icon><span class="menu-only is-size-7">&nbsp;Go Forward</span>
            </a>
          ` : ""}
        </div>
        ${!this.embed ? html`
        <div class="navbar-end">
          ${this.renderNavEnd()}
        </div>` : html``}
      </div>` : html``}
    </nav>
    <p id="skip-main-target" tabindex="-1" class="is-sr-only">Skipped</p>`;
  }

  renderNavEnd() {
    return html`
      <a href="/docs" target="_blank" class="navbar-item is-size-6">
      <fa-icon .svg="${fasHelp}" aria-hidden="true"></fa-icon><span>&nbsp;User Docs</span>
    </a>
    <!--
    -- NB: the About modal is currently inaccessible to people using keyboards or screen readers.
    --  Should all the JS and infrastructure for accessible modals be added, or should About be a normal page?
    -->
    <a href="?terms" @click="${(e) => { e.preventDefault(); this.showAbout = true;} }"class="navbar-item is-size-6">About
    </a>`;
  }

  renderColl() {
    return html`
    <wr-coll .loadInfo="${this.loadInfo}"
    sourceUrl="${this.sourceUrl}"
    embed="${this.embed}"
    appName="${this.appName}"
    .appLogo="${this.mainLogo}"
    @replay-favicons=${this.onFavIcons}
    @update-title=${this.onTitle}
    @coll-loaded=${this.onCollLoaded}
    @about-show=${() => this.showAbout = true}></wr-coll>`;
  }

  renderHomeIndex() {
    return html`
      <wr-coll-index>
      ${!IS_APP ? html`
      <p slot="header" class="tagline is-size-5 has-text-centered">Explore and Replay Interactive Archived Webpages Directly in your Browser. <i><a target="_blank" href="./docs/examples">(See Examples)</a></i></p>
      ` : ""}
      <wr-chooser slot="header" @load-start=${this.onStartLoad}></wr-chooser>
    </wr-coll-index>`;
  }

  render() {
    if (!this.inited) {
      return html``;
    }

    return html`
      ${!this.embed || this.embed === "full" ? this.renderNavBar() : ""}

      ${this.sourceUrl ? this.renderColl() : this.renderHomeIndex()}

      ${this.showAbout ? this.renderAbout() : ""}
    `;
  }

  firstUpdated() {
    this.initRoute();
    window.addEventListener("popstate", () => {
      this.initRoute();
    });
  }

  updated(changedProperties) {
    if (changedProperties.has("sourceUrl")) {
      this.collTitle = null;
    }
  }

  onFavIcons(event) {
    const head = document.querySelector("head");
    const oldLinks = document.querySelectorAll("link[rel*='icon']");

    for (const link of oldLinks) {
      head.removeChild(link);
    }

    for (const icon of event.detail.icons) {
      const link = document.createElement("link");
      link.rel = icon.rel;
      link.href = icon.href;
      head.appendChild(link);
    }
  }

  skipMenu(event){
    // This is a workaround, since this app's routing doesn't permit normal
    // following of in-page anchors.
    event.preventDefault();
    this.renderRoot.querySelector("#skip-main-target").focus();
  }

  onNavMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    this.navMenuShown = !this.navMenuShown;

    if (this.navMenuShown) {
      // Since this menu can be large and obscure significant page content,
      // dismiss like a modal, returning keyboard focus to the
      // menu button on dismissal.
      document.addEventListener("click", (event) => {
        event.preventDefault();
        this.navMenuShown = false;
        this.renderRoot.querySelector("#menu-button").focus();
      }, {once: true});
      document.addEventListener("keypress", (event) => {
        if (event.key == "Escape") {
          event.preventDefault();
          this.navMenuShown = false;
          this.renderRoot.querySelector("#menu-button").focus();
        }
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

    if (this.source) {
      this.pageParams.set("source", this.source);
      const url = new URL(window.location.href);
      url.search = this.pageParams.toString();
      window.history.replaceState({}, document.title, url.href);
    }

    this.sourceUrl = this.pageParams.get("source") || "";
    this.embed = this.pageParams.get("embed") || "";

    if (this.pageParams.has("terms")) {
      this.showAbout = true;
    }

    if (this.pageParams.get("config")) {
      if (!this.loadInfo) {
        this.loadInfo = {};
      }
      try {
        this.loadInfo.extraConfig = JSON.parse(this.pageParams.get("config"));
      } catch (e) {
        console.log("invalid config: " + e);
      }
    }

    if (this.pageParams.get("basePageUrl")) {
      if (!this.loadInfo) {
        this.loadInfo = {extraConfig: {}};
      }
      if (!this.loadInfo.extraConfig) {
        this.loadInfo.extraConfig = {};
      }
      this.loadInfo.extraConfig.baseUrl = this.pageParams.get("basePageUrl");
    }

    if (this.pageParams.get("customColl")) {
      if (!this.loadInfo) {
        this.loadInfo = {};
      }
      this.loadInfo.customColl = this.pageParams.get("customColl");
    }

    if (this.pageParams.get("noWebWorker") === "1") {
      if (!this.loadInfo) {
        this.loadInfo = {};
      }
      this.loadInfo.noWebWorker = true;
    }

    if (IS_APP && this.sourceUrl.startsWith("file://")) {
      // eslint-disable-next-line no-undef
      const url = new URL(__APP_FILE_SERVE_PREFIX__);
      url.searchParams.set("filename", this.sourceUrl.slice("file://".length));
      this.loadInfo = {
        sourceUrl: this.sourceUrl,
        loadUrl: url.href,
      };
    }
  }

  onStartLoad(event) {
    // just redirect right away?
    this.pageParams.set("source", event.detail.sourceUrl);

    const url = new URL(window.location.href);
    url.search = this.pageParams.toString();
    this.collPageUrl = url.toString();

    if (!event.detail.isFile) {
      window.location.search = this.pageParams.toString();
      return;
    } else {

      window.history.pushState({}, "", this.collPageUrl);
    }

    this.sourceUrl = event.detail.sourceUrl;
    this.loadInfo = event.detail;
  }

  onCollLoaded(event) {
    this.loadInfo = null;
    if (event.detail.collInfo) {
      this.collTitle = event.detail.collInfo.title;
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

  onTitle(event) {
    if (event.detail.title) {
      this.pageTitle = event.detail.title;
      this.pageReplay = event.detail.replayTitle;

      document.title = (event.detail.replayTitle ? "Archive of " : "") + this.pageTitle + " | " + this.appName;
    }
  }

  safariKeyframes() {
    // Safari requires keyframes at the document level, add spinner keyframes here
    const css = `
    @keyframes spinAround {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    `;

    const style = document.createElement("style");
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(css));
  }

  renderAbout() {
    return html`
      <div class="modal is-active">
        <div class="modal-background" @click="${this.onAboutClose}"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">About ReplayWeb.page ${IS_APP ? "App" : ""}</p>
              <button class="delete" aria-label="close" @click="${this.onAboutClose}"></button>
            </header>
            <section class="modal-card-body">
              <div class="container">
                <div class="content">
                  <div style="display: flex">
                    <div class="has-text-centered" style="width: 220px">
                      <wr-anim-logo class="logo" size="48px"></wr-anim-logo>
                      <div style="font-size: smaller; margin-bottom: 1em">${IS_APP ? "App" : ""} v${VERSION}</div>
                    </div>

                    ${IS_APP ? html`
                    <p>ReplayWeb.page App is a standalone app for Mac, Windows and Linux that loads web archive files provided by the user
                    and renders them for replay.</p>

                    ` : html`
                    <p><a href="https://replayweb.page" target="_blank">ReplayWeb.page</a> is a browser-based viewer that loads web archive files provided by the user
                    and renders them for replay in the browser.</p>`}
                  </div>

                  <p>Full source code is available at:
                    <a href="https://github.com/webrecorder/replayweb.page" target="_blank">https://github.com/webrecorder/replayweb.page</a>
                  </p>

                  <p>See the <a target="_blank" href="./docs">User Docs</a> or the GitHub README for more info on how it works.</p>

                  <p>ReplayWeb.page is part of the <a href="https://webrecorder.net/" target="_blank">Webrecorder Project</a>.</p>

                  <h3>Privacy</h3>
                  <p><b>No data is uploaded anywhere and no information is collected.</b></p>
                  <p>All content rendered stays directly in your browser.<br/>When loading an archive from Google Drive,
                  the site may ask for account authorization to download the specified file only.</p>

                  <h4>Disclaimer of Warranties</h4>
                  <p>The application is provided "as is" without any guarantees.</p>
                  <details>
                    <summary>Legalese:</summary>
                    <p style="font-size: 0.8rem">DISCLAIMER OF SOFTWARE WARRANTY. WEBRECORDER SOFTWARE PROVIDES THIS SOFTWARE TO YOU "AS AVAILABLE"
                    AND WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED OR OTHERWISE,
                    INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
                  </details>
                  <div class="has-text-centered">
                    <a class="button is-warning" href="#" @click="${this.onAboutClose}">Close</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>`;
  }

  onAboutClose() {
    this.showAbout = false;
  }
}

customElements.define("replay-app-main", ReplayWebApp);

export { ReplayWebApp };
