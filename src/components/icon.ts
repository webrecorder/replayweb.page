import { css, LitElement } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { customElement, property } from "lit/decorators.js";

/**
 * Based on `<sl-icon>` but uses inline SVG.
 */
@customElement("wr-icon")
export class Icon extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 1em;
      height: 1em;
      box-sizing: content-box !important;
    }

    svg {
      display: block;
      height: 100%;
      width: 100%;
    }
  `;

  /**
   * Raw SVG string
   */
  @property({ type: String })
  svg?: string;

  render() {
    if (!this.svg) {
      return;
    }

    return unsafeSVG(this.svg);
  }
}
