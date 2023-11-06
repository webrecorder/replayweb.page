import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";

import fasCopy from "@fortawesome/fontawesome-free/svgs/regular/copy.svg";
import "./../misc";
import { wrapCss } from "./../misc";

class LabeledField extends LitElement {
  @property({
    converter: (value) => {
      if (value === "") return true;
      if (value == null) return false;
      return value;
    },
  })
  copy?: boolean | string = false;

  @property({ type: String })
  label?: string;

  @property({ type: String })
  class?: string;

  static get styles() {
    return wrapCss(LabeledField.compStyles);
  }

  static get compStyles() {
    return css`
      :host {
        word-break: break-word;
        position: relative;
        min-width: unset; /* @todo(emma, 2023-11-06) see about removing this, if the min-width set on all web components is unnecessary */
      }

      .copy {
        color: black;
        margin: 0px;
        margin: -4px 0 0;
        line-height: 0.4em;
        padding: 6px;
        border-radius: 10px;
        position: absolute;
        appearance: none;
        background: none;
        border: none;
        cursor: pointer;
      }
      .copy:active {
        background-color: lightgray;
      }
      .col-content {
        font-family: monospace;
        font-size: 14px;
        color: #1f2937;
      }
      .minihead {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 4px;
      }
    `;
  }

  private get _copyableContent() {
    const slot = this.shadowRoot?.querySelector("slot");
    const content =
      typeof this.copy === "string"
        ? this.copy
        : slot
            ?.assignedNodes({ flatten: true })
            .map((node) => node.textContent?.replace(/^\s+|\s+$/g, " "))
            .join("")
            .trim();
    return content;
  }

  render() {
    console.log(this.label, "copy", this.copy);
    return html`${this.label
        ? html`<p class="minihead">${this.label}</p>`
        : nothing}
      <div class="col-content">
        <slot></slot>
        ${this.copy
          ? html`<button @click="${this.onCopy}" class="copy">
              <fa-icon .svg="${fasCopy}"></fa-icon>
            </button>`
          : ""}
      </div>`;
  }

  onCopy(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const text = this._copyableContent;
    if (text) navigator.clipboard.writeText(text);
    return false;
  }
}

customElements.define("wr-labeled-field", LabeledField);

export { LabeledField };
