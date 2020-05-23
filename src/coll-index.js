import { LitElement, html, css } from 'lit-element';
import { wrapCss, IS_APP } from './misc';

import prettyBytes from 'pretty-bytes';

import fasUpload from '@fortawesome/fontawesome-free/svgs/solid/upload.svg';
import fasCopy from '@fortawesome/fontawesome-free/svgs/regular/copy.svg';


// ===========================================================================
class CollIndex extends LitElement
{
  constructor() {
    super();
    this.colls = [];

    this.sortedColls = [];
    this.sortKey = "title";
    this.sortDesc = false;

    this.fileDisplayName = "";
    this.file = null;

    this._deleting = {};
  }

  static get properties() {
    return {
      colls: { type: Array },

      sortedColls: { type: Array },
      sortKey: { type: String },
      sortDesc: { type: Boolean },

      fileDisplayName: { type: String },
      _deleting: { type: Object }
    }
  }

  firstUpdated() {
    this.loadColls();
  }

  updated(changedProperties) {
    if (changedProperties.has("colls") || 
        changedProperties.has("sortKey") ||
        changedProperties.has("sortDesc")) {
      this.sortColls();
    }
  }

  sortColls() {
    this.sortedColls = [];

    this.colls.forEach((coll) => {
      coll.title = coll.title || coll.filename;
      this.sortedColls.push(coll);
    });

    this.sortedColls.sort((first, second) => {
      if (first[this.sortKey] === second[this.sortKey]) {
        return 0;
      }

      return (this.sortDesc == (first[this.sortKey] < second[this.sortKey])) ? 1 : -1;
    });
  }

  async loadColls() {
    const resp = await fetch("./wabac/api/index");
    try {
      const json = await resp.json();
      this.colls = json.colls;
    } catch (e) {
      // likely no sw registered yet
    }

    this._deleting = {};
  }

  async onDeleteColl(event) {
    event.preventDefault();
    event.stopPropagation();

    const index = Number(event.currentTarget.getAttribute("data-coll-index"));
    const coll = this.sortedColls[index];

    if (!coll || this._deleting[coll.sourceUrl]) {
      return;
    }

    this._deleting[coll.sourceUrl] = true;
    this.requestUpdate();

    const resp = await fetch(`./wabac/api/${coll.id}`, {method: 'DELETE'});
    if (resp.status === 200) {
      const json = await resp.json();
      this.colls = json.colls;
    }
    return false;
  }

  onChooseFile(event) {
    if (event.currentTarget.files.length === 0) {
      return;
    }

    this.file = event.currentTarget.files[0];
    this.fileDisplayName = "file://" + (this.file.path || this.file.name);
    this.requestUpdate();
  }

  onStartLoad(event) {
    event.preventDefault();

    const detail = {sourceUrl: this.fileDisplayName};

    if (this.file) {
      detail.isFile = true;
      detail.loadUrl = this.file.path ? __APP_FILE_SERVE_PREFIX__ + this.file.path : URL.createObjectURL(this.file);
      detail.name = this.fileDisplayName;
    }
                
    this.dispatchEvent(new CustomEvent("load-start", {detail}));
    
    return false;
  }

  onInput(event) {
    this.fileDisplayName = event.currentTarget.value;

    if (this.file && this.fileDisplayName && this.fileDisplayName.startsWith("file://")) {
      this.file = null;
      this.fileDisplayName = "";
    }
  }

  static get styles() {
    return wrapCss(css`
    :host {
      overflow-y: auto;
    }
    .size {
      margin-right: 20px;
    }
    .extra-padding {
      padding: 2em;
    }
    .no-top-padding {
      padding-top: 1.0em;
    }
    div.field.has-addons {
      flex: auto;
    }
    form, .level {
      flex-grow: 1;
    }
    button.is-loading {
      line-height: 1.5em;
      height: 1.5em;
      border: 0px;
      background-color: transparent !important;
      width: auto;
    }
    nav.panel.is-light {
      margin-bottom: 2em;
    }
    input.input.file-name:invalid {
      border: 1px dashed red;
    }
    input.input.file-name {
      max-width: 100%;
      border-width: 1px;
      margin-left: -1px;
    }


    table tr {
      cursor: pointer;
    }
    tbody tr:hover {
      background-color: aliceblue;
    }
    fa-icon {
      vertical-align: middle;
    }
    .asc:after {
      content: "▼";
      font-size: 0.75em;
    }
    .desc:after {
      content: "▲";
      font-size: 0.75em;
    }
    .copy {
      color: black;
      margin: 0px;
      margin: 0;
      line-height: 0.4em;
      padding: 6px;
      border-radius: 10px;
      display: none;
      position: absolute;
    }
    .copy:active {
      background-color: lightgray;
    }
    .col-source {
      word-break: break-word;
      position: relative;
    }
    .col-source:hover > .copy, .source-text:hover + .copy, .copy:hover {
      display: inline;
    }
    `);
  }

  render() {
    return html`
    <section class="section no-top-padding">
      ${!IS_APP ? html`
      <p class="subtitle has-text-centered">Explore and Replay Interactive Archived Webpages Directly in your Browser.</p>
      ` : ``}
      <nav class="panel is-warning">
        <p class="panel-heading">Load Web Archive</p>
        <div class="extra-padding panel-block file has-name">
          <form class="content is-flex" @submit="${this.onStartLoad}">
            <label class="file-label">
              <input class="file-input"
                @click="${(e) => e.currentTarget.value = null}"
                @change=${this.onChooseFile} type="file" id="fileupload" name="fileupload">
              <span class="file-cta">
                <span class="file-icon">
                  <fa-icon size="0.9em" .svg=${fasUpload}></fa-icon>
                </span>
                <span class="file-label is-hidden-touch">
                  Choose File...
                </span>
              </span>
            </label>

            <div class="field has-addons">
              <p class="control is-expanded">
                <input class="file-name input" type="text"
                name="filename" id="filename"
                pattern="((file|http|https|s3):\/\/.*\.(warc|warc.gz|har|zip|wacz))|(googledrive:\/\/.+)"
                .value="${this.fileDisplayName}"
                @input="${this.onInput}"
                autocomplete="off"
                placeholder="Enter a URL or click 'Choose File' to select a (WARC, HAR, WBN, or WACZ) archive source">
              </p>
              <div class="control">
                <button type="submit" class="button is-hidden-mobile is-primary">Load</button>
              </div>
            </div>

          </form>
        </div>
      </nav>
    </section>

    <section class="section no-top-padding">
      <nav class="panel is-light">
        <p class="panel-heading">Loaded Archives</p>
        <div class="coll-list">
        ${this.sortedColls.length ? html`
          <div class="panel-block">
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th @click="${this.onSort}" data-key="title"
                  class="${this.sortKey === "title" ? (this.sortDesc ? "desc" : "asc") : ''} col-title">
                  Title</th>

                  <th @click="${this.onSort}" data-key="sourceUrl"
                  class="${this.sortKey === "sourceUrl" ? (this.sortDesc ? "desc" : "asc") : ''} col-source">
                  Source URL (or Filename)</th>

                  <th @click="${this.onSort}" data-key="ctime"
                  class="${this.sortKey === "ctime" ? (this.sortDesc ? "desc" : "asc") : ''} col-ctime">
                  Date Loaded</th>

                  <th @click="${this.onSort}" data-key="size"
                  class="${this.sortKey === "size" ? (this.sortDesc ? "desc" : "asc") : ''} col-size">
                  Total Size</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${this.sortedColls.map((coll, i) => html`
                  <tr @click=${(e) => window.location.href = "?source=" + coll.sourceUrl}>
                    <td class="col-title"><span class="subtitle has-text-weight-bold">
                      <a href="?source=${coll.sourceUrl}">${coll.title || coll.filename}</a>
                    </td>
                    <td class="col-source"><span class="source-text">${coll.sourceUrl}&nbsp;</span>
                    <a @click="${(e) => this.onCopy(e, coll.sourceUrl)}" class="copy"><fa-icon .svg="${fasCopy}"/></a>
                    ${coll.sourceUrl && coll.sourceUrl.startsWith("googledrive://") ? html`
                      <p><i>(${coll.filename})</i></p>` : ''}
                    </td>
                    <td class="col-date">${coll.ctime ? new Date(coll.ctime).toLocaleString() : ""}</td>
                    <td class="col-size">${prettyBytes(Number(coll.size || 0))}</td>
                    <td class="col-delete">
                      ${!this._deleting[coll.sourceUrl] ? html`
                      <button data-coll-index="${i}" @click="${this.onDeleteColl}" class="delete"></button>
                      ` : html`
                      <button class="button is-loading is-static"></button>`}
                    </td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>` : html`
          <div class="panel-block extra-padding">
            <i>No Archives so far! Archives loaded in the section above will appear here.</i>
          </div>
        `}
        </div>
      </nav>
    </section>
    `;
  }

  onCopy(event, sourceUrl) {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(sourceUrl);
    return false;
  }

  onSort(event) {
    const key = event.currentTarget.getAttribute("data-key");
    if (key === this.sortKey) {
      this.sortDesc = !this.sortDesc;
    } else {
      this.sortDesc = false;
      this.sortKey = key;
    }
  }
}

customElements.define("wr-coll-index", CollIndex);

export { CollIndex };