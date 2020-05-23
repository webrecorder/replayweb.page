import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import { getTS } from './pageutils';


// ===========================================================================
class Pages extends LitElement
{
  constructor() {
    super();
    this.pages = [];
  }

  static get properties() {
    return {
      collInfo: { type: Object },
      pages: { type: Array }
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("collInfo")) {
      this.doUpdate();
    }
  }

  async doUpdate() {
    const result = await fetch(`${this.collInfo.apiPrefix}/pages`);
    const json = await result.json();
    console.log(json);
    this.pages = json.pages || [];
  }

  static get styles() {
    return wrapCss(css`
      .main.section {
        overflow-y: auto;
        padding: 3em;
      }
    `);
  }

  render() {
    return html`
      <div class="main section">
        ${this.pages.map((p) => html`
        <div class="columns">
          <div class="column is-one-fifth">
          ${new Date(p.date).toLocaleString()}
          </div>
          <div class="column">
            <a @click="${this.onReplay}" data-url="${p.url}" data-ts="${getTS(p.date)}" href="#">
              <p class="is-size-6 has-text-weight-bold has-text-link">${p.title || p.url}</p>
              <p class="has-text-dark">${p.url}</p>
            </a>
          </div>
        </div>`
        )}
      </div>
    `;
  }

  onReplay(event) {
    event.preventDefault();
    const data = {
      url: event.currentTarget.getAttribute("data-url"),
      ts: event.currentTarget.getAttribute("data-ts"),
      view: "replay"
    };
    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {data}}));
    return false;
  }
}

customElements.define("wr-coll-pages", Pages);

export { Pages };