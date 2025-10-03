"use strict";

import { LitElement, html, css, unsafeCSS, type CSSResultGroup } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { styleMap } from "lit/directives/style-map.js";

import allCssRaw from "~assets/main.scss";

import type { FavIconEventDetail } from "./types";

const apiPrefix = "./w/api";
const replayPrefix = "./w";

// ===========================================================================
const allCss = unsafeCSS(allCssRaw);
function wrapCss(custom: CSSResultGroup): CSSResultGroup {
  return [allCss, custom];
}

const IS_APP =
  // @ts-expect-error - TS2339 - Property 'IS_APP' does not exist on type 'Window & typeof globalThis'.
  window.IS_APP ||
  // @ts-expect-error - TS2551 - Property 'electron' does not exist on type 'Window & typeof globalThis'. Did you mean 'Electron'? | TS2551 - Property 'electron' does not exist on type 'Window & typeof globalThis'. Did you mean 'Electron'?
  window.electron?.IS_APP ||
  window.matchMedia("(display-mode: standalone)").matches;

const VERSION = __VERSION__;

// ===========================================================================
// Buttons are expected to respond to both enter/return and spacebar.
// If using `<a>` with `role='button'`, assign this handler to keyup.
// @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'event' implicitly has an 'any' type.
function clickOnSpacebarPress(event) {
  if (event.key == " ") {
    event.preventDefault();
    event.target.click();
  }
}

// Update favicon links from an array of {rel, href} objects
// remove all existing icon links
// used by both embed and main app
export function updateFaviconLinks(data: FavIconEventDetail) {
  const head = document.querySelector("head")!;
  const oldLinks = document.querySelectorAll("link[rel*='icon']");

  for (const link of oldLinks) {
    head.removeChild(link);
  }

  for (const icon of data.icons) {
    const link = document.createElement("link");
    link.rel = icon.rel;
    link.href = icon.href;
    head.appendChild(link);
  }
}

// ===========================================================================
class FaIcon extends LitElement {
  constructor() {
    super();
    // @ts-expect-error - TS2339 - Property 'size' does not exist on type 'FaIcon'.
    this.size = "1.1em";
    // @ts-expect-error - TS2339 - Property 'width' does not exist on type 'FaIcon'.
    this.width = null;
    // @ts-expect-error - TS2339 - Property 'height' does not exist on type 'FaIcon'.
    this.height = null;
  }

  static get properties() {
    return {
      svg: { type: String },
      size: { type: String },
      width: { type: String },
      height: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
        line-height: 1em;
      }
      :host > svg {
        fill: var(--fa-icon-fill-color, currentcolor);
        width: var(--fa-icon-width, 19px);
        height: var(--fa-icon-height, 19px);
      }
    `;
  }

  render() {
    // @ts-expect-error - TS2339 - Property 'svg' does not exist on type 'FaIcon'.
    if (!this.svg) {
      return html``;
    }

    const styles = {};

    // @ts-expect-error - TS2339 - Property 'size' does not exist on type 'FaIcon'.
    if (this.size) {
      // @ts-expect-error - TS2339 - Property 'width' does not exist on type '{}'. | TS2339 - Property 'size' does not exist on type 'FaIcon'.
      styles.width = this.size;
      // @ts-expect-error - TS2339 - Property 'height' does not exist on type '{}'. | TS2339 - Property 'size' does not exist on type 'FaIcon'.
      styles.height = this.size;
    } else {
      // @ts-expect-error - TS2339 - Property 'width' does not exist on type 'FaIcon'.
      if (this.width) {
        // @ts-expect-error - TS2339 - Property 'width' does not exist on type '{}'. | TS2339 - Property 'width' does not exist on type 'FaIcon'.
        styles.width = this.width;
      }
      // @ts-expect-error - TS2339 - Property 'height' does not exist on type 'FaIcon'.
      if (this.height) {
        // @ts-expect-error - TS2339 - Property 'height' does not exist on type '{}'. | TS2339 - Property 'height' does not exist on type 'FaIcon'.
        styles.height = this.height;
      }
    }

    return html`<svg style="${styleMap(styles)}">
      <g>
        ${
          // @ts-expect-error - TS2339 - Property 'svg' does not exist on type 'FaIcon'.
          // TODO: Fix this the next time the file is edited.
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          unsafeSVG(this.svg)
        }
      </g>
    </svg>`;
  }
}

// ===========================================================================
class WrModal extends LitElement {
  constructor() {
    super();
    // eslint-disable-next-line wc/no-constructor-attributes
    this.title = "";
    // @ts-expect-error - TS2339 - Property 'bgClass' does not exist on type 'WrModal'.
    this.bgClass = "";
    // @ts-expect-error - TS2339 - Property 'noBgClose' does not exist on type 'WrModal'.
    this.noBgClose = false;
  }

  static get properties() {
    return {
      title: { type: String },
      bgClass: { type: String },
      noBgClose: { type: Boolean },
    };
  }

  static get styles() {
    return wrapCss(css`
      .modal-background {
        background-color: rgba(10, 10, 10, 0.5);
      }

      .modal-card-head {
        background-color: var(--background, #97a1ff);
      }

      .modal-card {
        width: 100%;
        max-width: var(--modal-width, 640px);
      }
    `);
  }

  render() {
    return html` <div class="modal is-active">
      <div
        class="modal-background"
        @click="${
          // @ts-expect-error - TS2339 - Property 'noBgClose' does not exist on type 'WrModal'.
          () => !this.noBgClose && this.onClose()
        }"
      ></div>
      <div class="modal-card">
        <header
          class="modal-card-head ${
            // @ts-expect-error - TS2339 - Property 'bgClass' does not exist on type 'WrModal'.
            this.bgClass
          }"
        >
          <p class="modal-card-title is-3">${this.title}</p>
          <button
            class="delete"
            aria-label="close"
            @click="${this.onClose}"
          ></button>
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

customElements.define("fa-icon", FaIcon);

customElements.define("wr-modal", WrModal);

export {
  wrapCss,
  IS_APP,
  VERSION,
  clickOnSpacebarPress,
  FaIcon,
  WrModal,
  /** @deprecated Import this directly from `lit` instead */
  LitElement,
  /** @deprecated Import this directly from `lit` instead */
  html,
  /** @deprecated Import this directly from `lit` instead */
  css,
  /** @deprecated Import this directly from `lit/directives/unsafe-css.js` instead */
  unsafeCSS,
  /** @deprecated Import this directly from `lit/directives/unsafe-svg.js` instead */
  unsafeSVG,
  apiPrefix,
  replayPrefix,
};
