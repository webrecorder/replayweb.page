import { LitElement, css, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

import { wrapCss } from "./../misc";
import faClone from "@fortawesome/fontawesome-free/svgs/regular/clone.svg";
import faCheck from "@fortawesome/fontawesome-free/svgs/solid/check.svg";
import faX from "@fortawesome/fontawesome-free/svgs/solid/times.svg";

import { registerIconLibrary } from "@shoelace-style/shoelace/dist/utilities/icon-library.js";

import systemLibrary from "@shoelace-style/shoelace/dist/components/icon/library.system";

// disable system library to prevent loading of unused data: URLs
// allow only "x-lg" as it is needed for sl-dialog
registerIconLibrary("system", {
  resolver: (name) => {
    if (name === "x-lg") {
      return systemLibrary.resolver(name);
    }
    return "";
  },
});

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
          ? html` <sl-copy-button .value=${this.copy || ""}>
              <fa-icon
                slot="copy-icon"
                .svg=${faClone}
                aria-hidden="true"
              ></fa-icon>
              <fa-icon
                slot="success-icon"
                .svg=${faCheck}
                aria-hidden="true"
              ></fa-icon>
              <fa-icon
                slot="error-icon"
                .svg=${faX}
                aria-hidden="true"
              ></fa-icon>
            </sl-copy-button>`
          : nothing}
      </div>`;
  }
}

export { LabeledField };
