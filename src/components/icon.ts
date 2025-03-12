import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { type StyleInfo, styleMap } from "lit/directives/style-map.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

// ===========================================================================
@customElement("fa-icon")
export class FaIcon extends LitElement {
  @property({
    converter: (value, type) => {
      console.log(type);
      if (type === "number") {
        return `${value}px`;
      }
      return value;
    },
  })
  size = "1.1em";

  @property({ type: String })
  width: string | null = null;

  @property({ type: String })
  height: string | null = null;

  @property({ type: String })
  svg: string | null = null;

  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
        line-height: 1em;
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

    const styles: StyleInfo = {};

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

    return html`<svg style="${styleMap(styles)}">
      <g>${unsafeSVG(this.svg)}</g>
    </svg>`;
  }
}
