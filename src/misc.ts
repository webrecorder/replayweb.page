"use strict";

import { LitElement, html, css, unsafeCSS, type CSSResultGroup } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

import allCssRaw from "~assets/main.scss";

import type { FavIconEventDetail } from "./types";
import { FaIcon } from "./components/icon";

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

customElements.define("wr-modal", WrModal);

export {
  wrapCss,
  IS_APP,
  VERSION,
  clickOnSpacebarPress,
  FaIcon,
  WrModal,
  LitElement,
  html,
  css,
  unsafeCSS,
  unsafeSVG,
  apiPrefix,
  replayPrefix,
};
