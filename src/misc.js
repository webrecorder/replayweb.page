"use strict";

import { LitElement, html, css, unsafeCSS } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { styleMap } from "lit/directives/style-map.js";

import allCssRaw from "../assets/main.scss";

import rwpLogo from "../assets/logo.svg";

const apiPrefix = "./w/api";
const replayPrefix = "./w";


// ===========================================================================
const allCss = unsafeCSS(allCssRaw);
function wrapCss(custom) {
  return [allCss, custom];
}

const IS_APP = window.IS_APP || window.electron && window.electron.IS_APP || window.matchMedia("(display-mode: standalone)").matches;

// eslint-disable-next-line no-undef
const VERSION = __VERSION__;

// ===========================================================================
// Buttons are expected to respond to both enter/return and spacebar.
// If using `<a>` with `role='button'`, assign this handler to keyup.
function clickOnSpacebarPress(event) {
  if (event.key == " ") {
    event.preventDefault();
    event.target.click();
  }
}


// ===========================================================================
class FaIcon extends LitElement
{
  constructor() {
    super();
    this.size = "1.1em";
    this.width = null;
    this.height = null;
  }

  static get properties() {
    return {
      svg: { type: String },
      size: { type: String },
      width: { type: String },
      height: { type: String }
    };
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

    const styles = {};

    if (this.size) {
      styles.width = this.size;
      styles.height = this.size;
    } else {
      if (this.width) {
        styles.width = this.width;
      }
      if (this.height) {
        styles.height = this.height;
      }
    }

    return html`<svg style="${styleMap(styles)}"><g>${unsafeSVG(this.svg)}</g></svg>`;
  }
}


// ===========================================================================
class AnimLogo extends FaIcon
{
  constructor() {
    super();
    this.svg = rwpLogo;
  }

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
class WrModal extends LitElement
{
  constructor() {
    super();
    this.title = "";
    this.bgClass = "";
    this.noBgClose = false;
  }

  static get properties() {
    return {
      title: { type: String },
      bgClass: { type: String },
      noBgClose: { type: Boolean }
    };
  }

  static get styles() {
    return wrapCss(css`
    .modal-background {
      background-color: rgba(10, 10, 10, 0.50);
    }

    .modal-card-head {
      background-color: var(--background, #97a1ff);
    }

    .modal-card {
      width: 100%;
      max-width: var(--modal-width, 640px)
    }
    `);
  }

  render() {
    return html`
    <div class="modal is-active">
      <div class="modal-background" @click="${() => !this.noBgClose && this.onClose()}"></div>
      <div class="modal-card">
        <header class="modal-card-head ${this.bgClass}">
          <p class="modal-card-title is-3">${this.title}</p>
          <button class="delete" aria-label="close" @click="${this.onClose}"></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
      </div>
    </div>`;
  }

  onClose() {
    this.dispatchEvent(new CustomEvent("modal-closed"));
  }
}

customElements.define("fa-icon",  FaIcon);
customElements.define("wr-anim-logo", AnimLogo);

customElements.define("wr-modal",  WrModal);

export { wrapCss, IS_APP, VERSION, clickOnSpacebarPress, rwpLogo, FaIcon, AnimLogo, WrModal,
  LitElement, html, css, unsafeCSS, unsafeSVG, apiPrefix, replayPrefix };
