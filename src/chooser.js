import { LitElement, html, css } from "lit";
import { IS_APP, wrapCss } from "./misc";

import fasUpload from "@fortawesome/fontawesome-free/svgs/solid/upload.svg";


// ===========================================================================
class Chooser extends LitElement
{
  constructor() {
    super();

    this.fileDisplayName = "";
    this.file = null;

    this.hasNativeFS = !!window.showOpenFilePicker && !IS_APP;

    this.newFullImport = false;

    this.noHead = false;
  }

  static get properties() {
    return {
      fileDisplayName: { type: String },
      newFullImport: { type: Boolean },
      noHead: { type: Boolean }
    };
  }

  onChooseFile(event) {
    if (event.currentTarget.files.length === 0) {
      return;
    }

    this.file = event.currentTarget.files[0];
    // file.path only available in electron app
    this.fileDisplayName = "file://" + (this.file.path || this.file.name);
  }

  async onChooseNativeFile() {
    if (!this.hasNativeFS) {
      return;
    }

    const options = {
      types: [
        {
          description: "WARC, WACZ, HAR and WBN Files",
          accept: {
            "application/warc": [".warc", ".gz"],
            "application/har": [".har"],
            "application/wacz": [".wacz"],
            "application/wbn": [".wbn"],
            "application/json": [".json"],
          }
        }
      ]
    };

    const [fileHandle] = await window.showOpenFilePicker(options);
    this.fileHandle = fileHandle;

    this.file = await fileHandle.getFile();
    this.fileDisplayName = "file://" + fileHandle.name;
  }

  randomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  onStartLoad(event) {
    event.preventDefault();

    const loadInfo = {sourceUrl: this.fileDisplayName};

    if (this.file) {
      loadInfo.isFile = true;
      // file.path only available in electron app
      if (this.file.path) {
        // eslint-disable-next-line no-undef
        loadInfo.loadUrl = "file2://" + this.file.path;
        loadInfo.noCache = true;
      } else if (this.fileHandle) {
        loadInfo.loadUrl = this.fileDisplayName;
        loadInfo.extra = {fileHandle: this.fileHandle};
        loadInfo.noCache = false;
      } else {
        loadInfo.loadUrl = URL.createObjectURL(this.file);
        loadInfo.blob = this.file;
        loadInfo.noCache = false;
      }
      loadInfo.size = this.file.size;
      loadInfo.name = this.fileDisplayName;
    }

    loadInfo.newFullImport = this.newFullImport;

    this.dispatchEvent(new CustomEvent("load-start", {bubbles: true, composed: true, detail: loadInfo}));

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
      min-width: 0;
    }
    .extra-padding {
      padding: 1.5em;
    }
    .less-padding {
      padding-top: 1.0em;
      padding-bottom: 1.0em;
    }
    div.field.has-addons {
      flex: auto;
    }
    .panel-heading {
      background-color: #cff3ff;
    }
    .message-header {
      background-color: #cff3ff;
      color: black;
    }
    .heading-size {
      font-size: 0.85rem;
    }
    form {
      flex-grow: 1;
      flex-shrink: 0;
      margin-bottom: 0;
    }
    p.control.is-expanded {
      width: min-content;
    }
    input.input.file-name:invalid {
      border: 1px dashed red;
    }
    input.input.file-name {
      border-width: 1px;
      margin-left: -1px;
      max-width: 100%;
    }
    @media screen and (max-width: 1023px) {
      .file-icon {
        margin-right: 0px;
      }
    }

    @media screen and (max-width: 768px) {
      #filename {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
      }
    }
  `);
  }

  render() {
    return html`
    <section class="section ${this.noHead ? "is-paddingless" : "less-padding"}">
      <div class="${this.noHead ? "" : "panel"}">
        <div class="${this.noHead ? "is-hidden" : "panel-heading"} heading-size">${this.newFullImport ? "Import Existing" : "Load"} Web Archive</div>
        <div class="${this.noHead ? "" : "panel-body extra-padding"} file has-name">
          <form class="is-flex" @submit="${this.onStartLoad}">
            <label class="file-label">
              ${!this.hasNativeFS ? html`
              <input class="file-input"
                @click="${(e) => e.currentTarget.value = null}"
                @change=${this.onChooseFile} type="file" id="fileupload" name="fileupload">` : ""}
              <span class="file-cta" @click="${this.onChooseNativeFile}">
                <span class="file-icon">
                  <fa-icon size="0.9em" .svg=${fasUpload} aria-hidden="true"></fa-icon>
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
                pattern="((file|http|https|ipfs|s3):\/\/.*\.(warc|warc.gz|zip|wacz|har|wbn|json))|(googledrive:\/\/.+)|(ssb:\/\/.+)"
                .value="${this.fileDisplayName}"
                @input="${this.onInput}"
                autocomplete="off"
                placeholder="${this.newFullImport ? "Click 'Choose File' to select a local archive to import" : "Enter a URL or click 'Choose File' to select a WARC, WACZ, HAR or WBN archive source"}">
              </p>
              <div class="control">
                <button type="submit" class="button is-hidden-mobile is-primary">${this.newFullImport ? "Import" : "Load"}</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>`;
  }
}

customElements.define("wr-chooser", Chooser);

export { Chooser };
