import { LitElement, css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

import { wrapCss } from "./../misc";
import "@shoelace-style/shoelace/dist/components/copy-button/copy-button.js";

@customElement("wr-labeled-field")
class LabeledField extends LitElement {
  @property({ type: String })
  copy?: string;

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
        min-width: unset; /* @todo(emma, 2023-11-06) see about removing this, if the min-width set on all web components is unnecessary */
      }

      /* @todo(emma, 2023-11-06) add option for monospace treatment, rather than making everything mono. this could also be a class on the host element? */
      .col-content {
        font-family: monospace;
        font-size: 14px;
        color: #1f2937;
        display: flex;
        align-items: center;
      }
      .minihead {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 4px;
      }
    `;
  }

  render() {
    return html`${this.label
        ? html`<p class="minihead">${this.label}</p>`
        : nothing}
      <div class="col-content">
        <slot></slot>
        ${this.copy
          ? html`<sl-copy-button .value=${this.copy || ""}>
              <sl-icon slot="copy-icon" library="fa" name="far-clone"></sl-icon>
            </sl-copy-button>`
          : nothing}
      </div>`;
  }
}

export { LabeledField };
