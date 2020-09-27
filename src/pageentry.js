import prettyBytes from 'pretty-bytes';

import { LitElement, html, css, unsafeCSS } from 'lit-element';

import "keyword-mark-element/lib/keyword-mark.js";

import { getPageDateTS, getReplayLink } from './pageutils';

import { wrapCss } from './misc';


// ===========================================================================
class PageEntry extends LitElement
{
  constructor() {
    super();
    this.query = "";
    this.textSnippet = "";
    this.page = null;
    this.replayPrefix = "";
    this.deleting = false;
    this.editable = false;
    this.iconValid = false;
    this.index = 0;
    this.isCurrent = false;
    this.isSidebar = false;

    this.timestamp = "";
    this.date = null;
  }

  static get properties() {
    return {
      query: { type: String },
      textSnippet: { type: String },
      page: { type: Object },
      replayPrefix: { type: String },
      deleting: { type: Boolean },
      selected: { type: Boolean },
      editable: { type: Boolean },
      iconValid: { type: Boolean },
      index: { type: Number },
      isCurrent: { type: Boolean },
      isSidebar: { type: Boolean },
      timestamp: { type: String },
      date: { type: Object }
    }
  }

  static get styles() {
    return wrapCss(css`
      :host {
        min-height: min-content;
        width: 100%;
        word-break: break-all;
        position: relative;
        display: flex;
        flex-direction: row;
        background: transparent;
      }

      :host(.sidebar) .column {
        width: unset !important;
      }

      :host(.sidebar) {
        width: 100%;
      }

      .check-select {
        padding: 0 1.0em 0 0.5em;
        height: 100%;
        margin: auto 0 auto 0;
      }

      .columns {
        width: 100%;
      }

      /* Overrde Bulma to add the tiniest margin, so the focus indicator isn't obscured */
      .columns {
        margin-top: calc(-0.75rem + 2px);
      }
      .columns:last-child {
        margin-bottom: calc(-0.75rem + 2px);
      }


      .favicon {
        width: 24px !important;
        height: 24px !important;
        display: inline-block;
        vertical-align: text-bottom;
      }
      img.favicon {
        filter: drop-shadow(1px 1px 2px grey);
      }

      .media-left {
        align-self: center;
      }

      .delete {
        position: absolute;
        top: 8px;
        right: 8px;
      }

      .delete:hover {
        background-color: rgb(241, 70, 104);
      }

      @media screen and (max-width: 768px) {
        ${PageEntry.sidebarStyles()}
      }

      ${PageEntry.sidebarStyles(unsafeCSS`:host(.sidebar)`)}

      .current a {
        background-color: rgb(207, 243, 255);
        font-style: italic;
        display: block;
      }

      .current .curr-page {
        font-style: italic;
        font-size: 9px;
        color: black;
      }

      .is-inline-date {
        display: none;
      }

      .media-content a {
        display: block;
      }
    `);
  }

  static sidebarStyles(prefix = css``) {
    return css`
    ${prefix} .col-date {
      margin-left: calc(24px + 1rem);
      display: none;
    }
    ${prefix} .col-date div {
      display: inline;
    }
    ${prefix} .col-index {
      position: absolute;
      top: 0px;
      left: 0px;
      margin-top: -0.75em;
    }
    ${prefix} .columns {
      display: flex;
      flex-direction: column-reverse;
    }
    ${prefix} .is-inline-date {
      display: initial !important;
      font-style: italic;
    }
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has("page") || changedProperties.has("query")) {
      this.updateSnippet();
      this.iconValid = !!this.page.favIconUrl;
      //this.updateFavIcon();
      this.deleting = false;

      const res = getPageDateTS(this.page);
      this.timestamp = res.timestamp;
      this.date = res.date;
    }
  }

  render() {
    const p = this.page;
    const date = this.date;

    const hasSize = typeof(p.size) === "number";

    return html`
    ${this.editable ? html`
    <div class="check-select">
      <label class="checkbox">
      <input @change=${this.onSendSelToggle} type="checkbox" .checked="${this.selected}">
      </label>
    </div>` : ``}

    <div class="columns">
      ${this.index ? html`
      <div class="column col-index is-1 is-size-7">${this.index}.</div>
      ` : ``}
      <div class="column col-date is-2">
        <div>${date ? date.toLocaleDateString() : ""}</div>
        <div>${date ? date.toLocaleTimeString() : ""}</div>
      </div>
      <div class="column">
        <div class="media">
          <figure class="media-left">
            <p class="">
            ${this.iconValid ? html`
              <img class="favicon" @error="${(e) => this.iconValid = false}" src="${this.replayPrefix}/${this.timestamp}id_/${p.favIconUrl}"/>` : html`
              <span class="favicon"></span>`}
            </p>
          </figure>
          <div class="media-content ${this.isCurrent ? 'current' : ''}">
            <div role="heading" aria-level="${this.isSidebar ? "4": "3"}">
              <a @click="${this.onReplay}" href="${getReplayLink("pages", this.page.url, this.timestamp)}">
            ${this.isCurrent ? html`<p class="curr-page is-pulled-right">Current Page</p>` : ``}
              <p class="is-size-6 has-text-weight-bold has-text-link text">
              <keyword-mark keywords="${this.query}">${p.title || p.url}</keyword-mark>
              </p>
              <p class="has-text-dark text"><keyword-mark keywords="${this.query}">${p.url}</keyword-mark></p>
              <p class="has-text-grey-dark text is-inline-date">
                ${date ? date.toLocaleString(): ""}
              </p>
            </a>
            ${this.textSnippet ? html`
              <div class="text"><keyword-mark keywords="${this.query}">${this.textSnippet}</keyword-mark></div>` : html``}
          </div>
          ${hasSize ? html`
          <div class="media-right" style="margin-right: 2em">
            ${prettyBytes(p.size)}
          </div>` : ``}
        </div>
      </div>
    </div>

    ${this.editable ? html`
      ${!this.deleting ? html`
      <button @click="${this.onSendDeletePage}" class="delete"></button>` : html`
      <button class="button delete is-loading is-static"></button>
      `}` : ''}
    `;
  }

  async updateFavIcon() {
    if (!this.page.favIconUrl)  {
      this.favIconData = null;
      return;
    }

    const resp = await fetch(`${this.replayPrefix}/${this.timestamp}id_/${this.page.favIconUrl}`);

    if (resp.status != 200) {
      this.favIconData = null;
      return;
    }

    const payload = await resp.arrayBuffer();
    const mime = resp.headers.get("content-type");

    try {
      this.favIconData = `data:${mime};base64,${btoa(String.fromCharCode.apply(null, payload))}`;
    } catch (e) {
      console.log(e);
      this.favIconData = null;
    }
  }

  updateSnippet() {
    const oldVal = this.textSnippet;

    if (!this.query || !this.page.text) {
      this.textSnippet = null;
      this.requestUpdate('textSnippet', oldVal);
      return;
    }

    let textContent = this.page.text;
    let query = this.query;

    let inx = textContent.indexOf(this.query);

    if (inx < 0) {
      let textLower = textContent.toLowerCase();
      let queryLower = query.toLowerCase();

      inx = textLower.indexOf(queryLower);

      if (inx < 0) {
        this.textSnippet = null;
        this.requestUpdate('textSnippet', oldVal);
        return;
      }

      textContent = textLower;
      query = queryLower;
    }

    //let lastInx = textContent.lastIndexOf(query);
    let lastInx = inx;

    inx = Math.max(inx - 100, 0);
    lastInx = Math.min(lastInx + 200, textContent.length);

    if (inx === 0 && lastInx === textContent.length) {
      this.textSnippet = textContent;
    } else {
      this.textSnippet = "..." + textContent.slice(inx, lastInx) + "...";
    }

    this.requestUpdate('textSnippet', oldVal);
  }

  onReplay(event) {
    event.preventDefault();

    const data = {
      url: this.page.url,
      ts: this.timestamp,
    };
    this.sendChangeEvent(data);
    return false;
  }

  sendChangeEvent(data) {
    this.dispatchEvent(new CustomEvent("coll-tab-nav", {bubbles: true, composed: true, detail: {data}}));
  }

  onSendDeletePage(event) {
    const page = this.page.id;
    this.deleting = true;
    this.dispatchEvent(new CustomEvent("delete-page", {detail: {page}}));
  }

  onSendSelToggle(event) {
    const page = this.page.id;
    const selected = event.currentTarget.checked;
    this.dispatchEvent(new CustomEvent("sel-page", {detail: {page, selected}}));
  }
}

customElements.define("wr-page-entry", PageEntry);

export { PageEntry };
