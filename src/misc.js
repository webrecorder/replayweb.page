"use strict";

import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg';
import { styleMap } from 'lit-html/directives/style-map';

import allCssRaw from '../assets/main.scss';

import rwpLogo from '../assets/logo.svg';


// ===========================================================================
const allCss = unsafeCSS(allCssRaw);
function wrapCss(custom) {
  return [allCss, custom];
}

const IS_APP = window.electron && window.electron.IS_APP || window.matchMedia('(display-mode: standalone)').matches;


// ===========================================================================
class FaIcon extends LitElement
{
  constructor() {
    super();
    this.size = "1.1em";
  }

  static get properties() {
    return {
      svg: { type: String },
      size: { type: String }
    }
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

    const styles = {width: this.size, height: this.size};

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

customElements.define("fa-icon",  FaIcon);
customElements.define("wr-anim-logo", AnimLogo);

export { wrapCss, IS_APP, rwpLogo, FaIcon, AnimLogo };