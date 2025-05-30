import {
  LitElement,
  html,
  css,
  type CSSResultGroup,
  type TemplateResult,
  type PropertyValues,
} from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  wrapCss,
  IS_APP,
  VERSION,
  clickOnSpacebarPress,
  updateFaviconLinks,
} from "./misc";

import brandLockupColor from "~assets/brand/replaywebpage-lockup-color.svg";
import rwpLogo from "~assets/brand/replaywebpage-icon-color.svg";

import fasHelp from "@fortawesome/fontawesome-free/svgs/solid/question-circle.svg";
import fasArrowLeft from "@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg";
import fasArrowRight from "@fortawesome/fontawesome-free/svgs/solid/arrow-right.svg";
import { SWManager } from "./swmanager";
import "./item";
import "./item-index";
import "./chooser";
import { type LoadInfo } from "./item";
import type { FavIconEventDetail } from "./types";

// ===========================================================================
@customElement("replay-app-main")
export class ReplayWebApp extends LitElement {
  @property({ type: Boolean })
  inited = false;

  @property({ type: Object })
  pageParams: URLSearchParams = new URLSearchParams();

  @property({ type: String })
  sourceUrl: string | null = null;

  @property({ type: Boolean })
  navMenuShown = false;

  @property({ type: Boolean })
  showAbout = false;

  @property({ type: Boolean })
  showFileDropOverlay = false;

  @property({ type: String })
  collTitle: string | null = null;

  @property({ type: Object })
  loadInfo: LoadInfo | null = null;

  @property({ type: String })
  embed: string | null = null;

  @property({ type: String })
  collPageUrl = "";

  @property({ type: String })
  pageTitle = "";

  @property({ type: Boolean })
  pageReplay = false;

  @property({ type: String })
  source: string | null = null;

  @property({ type: Boolean })
  skipRuffle = false;

  @property({ type: String })
  swErrorMsg: TemplateResult<1> | string | null = null;

  protected swName?: string;
  protected swmanager: SWManager | null;
  private useRuffle = false;

  private droppedFile: File | null = null;

  constructor(swName = __SW_NAME__) {
    super();

    this.swName = swName;
    this.swmanager = null;

    this.skipRuffle = false;
    this.useRuffle = false;

    this.safariKeyframes();

    this.addEventListener("dragenter", (dragEvent) => {
      this.maybeStartFileDrop(dragEvent);
    });

    this.addEventListener("dragover", (dragEvent) => {
      this.maybeStartFileDrop(dragEvent);
    });

    this.addEventListener("dragleave", () => {
      this.showFileDropOverlay = false;
    });

    this.addEventListener("dragend", () => {
      this.showFileDropOverlay = false;
    });

    this.addEventListener("drop", (dragEvent) => {
      this.droppedFile = dragEvent.dataTransfer?.files[0] || null;
      this.showFileDropOverlay = false;
      dragEvent.preventDefault();
    });
  }

  private readonly maybeStartFileDrop = (dragEvent: DragEvent) => {
    if (this.sourceUrl) {
      // A source is already loaded. Don't allow dropping a file.
      return;
    }
    this.showFileDropOverlay = true;
    dragEvent.preventDefault();
  };

  get appName() {
    return "ReplayWeb.page";
  }

  get homeUrl() {
    return window.location.pathname;
  }

  static get styles() {
    return wrapCss(ReplayWebApp.appStyles);
  }

  static get appStyles(): CSSResultGroup {
    return css`
      #wrlogo {
        max-height: 1rem;
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
        padding: 0 0.5rem 0 0;

        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
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
      wr-item {
        flex: 1 1 auto;
        overflow: hidden;
      }
      .navbar {
        padding: 0 0.5em;
      }

      div.navbar-menu fa-icon {
        vertical-align: sub;
      }
      .tagline {
        margin-top: 1rem;
      }

      .drop-file-overlay {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        inset: 0;
        z-index: 50;
        font-weight: bold;
        font-size: 1.5rem;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(2px);
      }

      .drop-file-overlay:after {
        pointer-events: none;
        content: " ";
        position: absolute;
        inset: 0;
        border: 5px dashed #aaa;
        margin: 15px;
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
          padding: 0 1em;
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
    return rwpLogo as string;
  }

  renderNavBrand() {
    return html` <fa-icon
      .svg="${brandLockupColor}"
      size=""
      width="9.5rem"
      height="1.25rem"
      aria-hidden="true"
    ></fa-icon>`;
  }

  renderNavBar() {
    return html` <a
        href="#skip-main-target"
        @click=${this.skipMenu}
        class="skip-link"
        >Skip main navigation</a
      >
      <nav class="navbar" aria-label="main">
        <div class="navbar-brand">
          ${!this.embed
            ? html`
                <a
                  href="${this.homeUrl}"
                  class="navbar-item wr-logo-item"
                  aria-label="ReplayWeb.page Home"
                >
                  ${this.renderNavBrand()}
                </a>
                ${this.collTitle
                  ? html`
                      <a
                        href="${this.collPageUrl}"
                        class="no-wrap is-size-6 has-text-black"
                        >/&nbsp;&nbsp;<i>${this.collTitle}</i></a
                      >
                      <span class="no-wrap is-size-6"
                        >&nbsp;&nbsp;/&nbsp;
                        ${this.pageReplay
                          ? html`<i>${this.pageTitle}</i>`
                          : this.pageTitle}
                      </span>
                    `
                  : ""}
              `
            : html`
                <span class="navbar-item wr-logo-item">
                  <fa-icon
                    id="wrlogo"
                    size="1.0rem"
                    .svg=${this.mainLogo}
                    aria-hidden="true"
                  ></fa-icon>
                </span>
              `}
          <a
            href="#"
            role="button"
            id="menu-button"
            @click="${this.onNavMenu}"
            @keyup="${clickOnSpacebarPress}"
            class="navbar-burger burger ${this.navMenuShown ? "is-active" : ""}"
            aria-label="main menu"
            aria-haspopup="true"
            aria-expanded="${this.navMenuShown}"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        ${!this.sourceUrl
          ? html` <div
              class="navbar-menu ${this.navMenuShown ? "is-active" : ""}"
            >
              <div class="navbar-start">
                ${IS_APP
                  ? html`
                      <a
                        role="button"
                        href="#"
                        class="navbar-item arrow-button"
                        title="Go Back"
                        @click="${() => window.history.back()}"
                        @keyup="${clickOnSpacebarPress}"
                      >
                        <fa-icon
                          size="1.0rem"
                          .svg="${fasArrowLeft}"
                          aria-hidden="true"
                        ></fa-icon
                        ><span class="menu-only is-size-7">&nbsp;Go Back</span>
                      </a>
                      <a
                        role="button"
                        href="#"
                        class="navbar-item arrow-button"
                        title="Go Forward"
                        @click="${() => window.history.forward()}"
                        @keyup="${clickOnSpacebarPress}"
                      >
                        <fa-icon
                          size="1.0rem"
                          .svg="${fasArrowRight}"
                          aria-hidden="true"
                        ></fa-icon
                        ><span class="menu-only is-size-7"
                          >&nbsp;Go Forward</span
                        >
                      </a>
                    `
                  : ""}
              </div>
              ${!this.embed
                ? html` <div class="navbar-end">${this.renderNavEnd()}</div>`
                : html``}
            </div>`
          : html``}
      </nav>
      <p id="skip-main-target" tabindex="-1" class="is-sr-only">Skipped</p>`;
  }

  renderNavEnd() {
    return html` <a href="/docs" target="_blank" class="navbar-item is-size-6">
        <fa-icon .svg="${fasHelp}" aria-hidden="true"></fa-icon
        ><span>&nbsp;User Docs</span>
      </a>
      <!--
    -- NB: the About modal is currently inaccessible to people using keyboards or screen readers.
    --  Should all the JS and infrastructure for accessible modals be added, or should About be a normal page?
    -->
      <a
        href="?terms"
        @click="${(e: Event) => {
          e.preventDefault();
          this.showAbout = true;
        }}"
        class="navbar-item is-size-6"
        >About
      </a>`;
  }

  renderColl() {
    return html` <wr-item
      .loadInfo="${this.loadInfo}"
      sourceUrl="${this.sourceUrl || ""}"
      embed="${ifDefined(this.embed === null ? undefined : this.embed)}"
      appName="${this.appName}"
      swName="${ifDefined(this.swName)}"
      @replay-favicons=${this.onFavIcons}
      @update-title=${this.onTitle}
      @coll-loaded=${this.onCollLoaded}
      @coll-load-cancel=${this.onCollLoadCancel}
      @about-show=${() => (this.showAbout = true)}
    ></wr-item>`;
  }

  renderHomeIndex() {
    return html` <wr-item-index>
      ${!IS_APP
        ? html`
            <p slot="header" class="tagline is-size-5 has-text-centered">
              Explore and Replay Interactive Archived Webpages Directly in your
              Browser.
              <i
                ><a
                  target="_blank"
                  href="https://webrecorder.net/replaywebpage/"
                  >(Learn More)</a
                ></i
              >
            </p>
          `
        : ""}
      <wr-chooser
        slot="header"
        .droppedFile=${this.droppedFile}
        @did-drop-file="${() => (this.droppedFile = null)}"
        @load-start=${this.onStartLoad}
      ></wr-chooser>
    </wr-item-index>`;
  }

  render() {
    if (!this.inited) {
      return html``;
    }

    if (this.embed && this.swErrorMsg) {
      return this.swErrorMsg;
    }

    return html`
      ${!this.embed || this.embed === "full" ? this.renderNavBar() : ""}
      ${this.sourceUrl ? this.renderColl() : this.renderHomeIndex()}
      ${this.showAbout ? this.renderAbout() : ""}
      ${this.showFileDropOverlay ? this.renderDropFileOverlay() : ""}
    `;
  }

  firstUpdated() {
    this.initRoute();

    // service worker name
    let name = this.swName;

    const qp = new URLSearchParams();
    let query = "";
    if (this.useRuffle) {
      qp.set("injectScripts", "ruffle/ruffle.js");
      qp.set("allowProxyPaths", "ruffle/");
    }
    if (this.embed) {
      qp.set("serveIndex", "1");
    }
    query = qp.toString();
    if (query.length) {
      name += "?" + query;
    }

    this.swmanager = new SWManager({ name, appName: this.appName });
    this.swmanager.register().catch(
      () =>
        // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
        (this.swErrorMsg = this.swmanager?.renderErrorReport()),
    );

    window.addEventListener("popstate", () => {
      this.initRoute();
    });
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("sourceUrl")) {
      this.collTitle = null;
    }
  }

  onFavIcons(event: CustomEvent<FavIconEventDetail>) {
    updateFaviconLinks(event.detail);
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'event' implicitly has an 'any' type.
  skipMenu(event) {
    // This is a workaround, since this app's routing doesn't permit normal
    // following of in-page anchors.
    event.preventDefault();
    this.renderRoot.querySelector<HTMLElement>("#skip-main-target")?.focus();
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'event' implicitly has an 'any' type.
  onNavMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    this.navMenuShown = !this.navMenuShown;

    if (this.navMenuShown) {
      // Since this menu can be large and obscure significant page content,
      // dismiss like a modal, returning keyboard focus to the
      // menu button on dismissal.
      document.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          this.navMenuShown = false;
          this.renderRoot.querySelector<HTMLElement>("#menu-button")?.focus();
        },
        { once: true },
      );
      document.addEventListener(
        "keypress",
        (event) => {
          if (event.key == "Escape") {
            event.preventDefault();
            this.navMenuShown = false;
            this.renderRoot.querySelector<HTMLElement>("#menu-button")?.focus();
          }
        },
        { once: true },
      );
    }
  }

  initRoute() {
    this.inited = true;
    this.pageParams = new URLSearchParams(window.location.search);

    // Google Drive
    const state = this.pageParams.get("state");
    type State = {
      ids?: string[];
      userId?: string;
      action?: string;
    };
    if (state) {
      try {
        const parsedState: State = JSON.parse(state);
        if (
          parsedState.ids instanceof Array &&
          parsedState.userId &&
          parsedState.action === "open"
        ) {
          this.pageParams.set("source", "googledrive://" + parsedState.ids[0]);
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

    if (!this.embed) {
      this.useRuffle = !this.skipRuffle;
    } else {
      this.useRuffle = this.pageParams.get("ruffle") === "1";
    }

    if (this.pageParams.has("terms")) {
      this.showAbout = true;
    }

    if (this.pageParams.has("embed")) {
      if (!this.loadInfo) {
        this.loadInfo = {};
      }
    }

    if (this.pageParams.get("config")) {
      try {
        this.loadInfo!.extraConfig = JSON.parse(
          this.pageParams.get("config") || "",
        );
      } catch (e) {
        console.log("invalid config: " + e);
      }
    }

    if (this.pageParams.get("baseUrlSourcePrefix")) {
      this.loadInfo!.extraConfig = this.loadInfo!.extraConfig || {};
      this.loadInfo!.extraConfig.baseUrlSourcePrefix = this.pageParams.get(
        "baseUrlSourcePrefix",
      );
    }

    if (this.pageParams.get("basePageUrl")) {
      this.loadInfo!.extraConfig = this.loadInfo!.extraConfig || {};
      this.loadInfo!.extraConfig.baseUrl = this.pageParams.get("basePageUrl");
    }

    if (this.pageParams.get("adblockUrl")) {
      this.loadInfo!.extraConfig = this.loadInfo!.extraConfig || {};
      this.loadInfo!.extraConfig.adblockUrl = this.pageParams.get("adblockUrl");
    }

    if (this.pageParams.get("customColl")) {
      this.loadInfo!.customColl = this.pageParams.get("customColl");
    }

    if (this.pageParams.get("noWebWorker") === "1") {
      this.loadInfo!.noWebWorker = true;
    }

    if (this.pageParams.get("noCache") === "1") {
      this.loadInfo!.noCache = true;
    }

    if (this.pageParams.get("hideOffscreen") === "1") {
      this.loadInfo!.hideOffscreen = true;
    }

    if (this.pageParams.get("loading") === "eager") {
      this.loadInfo!.loadEager = true;
    }

    if (this.pageParams.get("swName")) {
      this.swName = this.pageParams.get("swName") || undefined;
    }

    // if (IS_APP && this.sourceUrl.startsWith("file://")) {
    //   this.loadInfo = {
    //     sourceUrl: this.sourceUrl,
    //     loadUrl: this.sourceUrl.replace("file://", "file2://"),
    //   };
    // }
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'event' implicitly has an 'any' type.
  onStartLoad(event) {
    // just redirect right away?
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'event' implicitly has an 'any' type.
  onCollLoaded(event) {
    this.loadInfo = null;
    if (event.detail.collInfo) {
      this.collTitle =
        event.detail.collInfo.name || event.detail.collInfo.title;
    }

    if (event.detail.alreadyLoaded) {
      //this.sourceLoaded = true;
      return;
    }

    //this.initRoute();

    if (event.detail.sourceUrl !== this.sourceUrl) {
      // TODO: Fix this the next time the file is edited.
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.pageParams.set("source", event.detail.sourceUrl);
      window.location.search = this.pageParams.toString();
    }
  }

  private onCollLoadCancel() {
    this.sourceUrl = null;
    this.loadInfo = null;
    window.history.pushState({}, "", new URL(window.location.href).origin);
  }

  // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'event' implicitly has an 'any' type.
  onTitle(event) {
    if (event.detail.title) {
      this.pageTitle = event.detail.title;
      this.pageReplay = event.detail.replayTitle;

      document.title =
        (event.detail.replayTitle ? "Archive of " : "") +
        this.pageTitle +
        " | " +
        this.appName;
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
              <p class="modal-card-title">About ReplayWeb.page ${
                IS_APP ? "App" : ""
              }</p>
              <button class="delete" aria-label="close" @click="${
                this.onAboutClose
              }"></button>
            </header>
            <section class="modal-card-body">
              <div class="container">
                <div class="content">
                  <div style="display: flex">
                    <div class="has-text-centered" style="width: 220px">
                      <fa-icon
                        size="3rem"
                        .svg=${rwpLogo}
                        aria-label="ReplayWeb.page Logo"
                        role="img"
                      ></fa-icon>
                      <div style="font-size: smaller; margin-bottom: 1em">${
                        IS_APP ? "App" : ""
                      } v${VERSION}</div>
                    </div>

                    ${
                      IS_APP
                        ? html`
                            <p>
                              ReplayWeb.page App is a standalone app for Mac,
                              Windows and Linux that loads web archive files
                              provided by the user and renders them for replay.
                            </p>
                          `
                        : html` <p>
                            <a href="https://replayweb.page" target="_blank"
                              >ReplayWeb.page</a
                            >
                            is a browser-based viewer that loads web archive
                            files provided by the user and renders them for
                            replay in the browser.
                          </p>`
                    }
                  </div>

                  <p>Full source code is available 
                    <a href="https://github.com/webrecorder/replayweb.page" target="_blank">on GitHub</a>.
                  </p>

                  <p>See the <a target="_blank" href="./docs">documentation</a> for more info on how it works.</p>

                  <p>ReplayWeb.page is developed by <a href="https://webrecorder.net/" target="_blank">Webrecorder</a>.</p>

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
                    INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.</p>
                  </details>
                  <div class="has-text-centered">
                    <a class="button is-warning" href="#" @click="${
                      this.onAboutClose
                    }">Close</a>
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

  renderDropFileOverlay() {
    return html`
      <div class="drop-file-overlay">Drop to load web archive</div>
    `;
  }
}
