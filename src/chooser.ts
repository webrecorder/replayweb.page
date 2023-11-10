import { LitElement, html, css } from "lit";
import { IS_APP, wrapCss } from "./misc";

import fasUpload from "@fortawesome/fontawesome-free/svgs/solid/upload.svg";

// ===========================================================================
class Chooser extends LitElement {
  constructor() {
    super();

    // @ts-expect-error - TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
    this.fileDisplayName = "";
    // @ts-expect-error - TS2339 - Property 'file' does not exist on type 'Chooser'.
    this.file = null;
    // @ts-expect-error - TS2339 - Property 'droppedFile' does not exist on type 'Chooser'.
    this.droppedFile = null;

    // @ts-expect-error - TS2339 - Property 'hasNativeFS' does not exist on type 'Chooser'. | TS2339 - Property 'showOpenFilePicker' does not exist on type 'Window & typeof globalThis'.
    this.hasNativeFS = !!window.showOpenFilePicker && !IS_APP;

    // @ts-expect-error - TS2339 - Property 'newFullImport' does not exist on type 'Chooser'.
    this.newFullImport = false;

    // @ts-expect-error - TS2339 - Property 'noHead' does not exist on type 'Chooser'.
    this.noHead = false;

    // @ts-expect-error - TS2339 - Property 'showOpenFilePickerOptions' does not exist on type 'Chooser'.
    this.showOpenFilePickerOptions = {
      types: [
        {
          description: "WARC, WACZ, HAR and WBN Files",
          accept: {
            "application/warc": [".warc", ".gz"],
            "application/har": [".har"],
            "application/wacz": [".wacz"],
            "application/wbn": [".wbn"],
            "application/json": [".json"],
          },
        },
      ],
    };
  }

  static get properties() {
    return {
      fileDisplayName: { type: String },
      /** @type File */
      droppedFile: { attribute: false },
      newFullImport: { type: Boolean },
      noHead: { type: Boolean },
    };
  }

  updated(changedProperties) {
    // @ts-expect-error - TS2339 - Property 'droppedFile' does not exist on type 'Chooser'.
    if (changedProperties.has("droppedFile") && this.droppedFile) {
      this.onDropFile();
    }
  }

  onDropFile() {
    // @ts-expect-error - TS2339 - Property 'showOpenFilePickerOptions' does not exist on type 'Chooser'.
    const allowedFileExtensions = this.showOpenFilePickerOptions.types
      .map((type) => type.accept)
      .map(Object.values)
      .flat(2);

    const fileHasAllowedExtension = allowedFileExtensions.some((extension) =>
      // @ts-expect-error - TS2339 - Property 'droppedFile' does not exist on type 'Chooser'.
      this.droppedFile.name.endsWith(extension),
    );

    if (fileHasAllowedExtension) {
      // @ts-expect-error - TS2339 - Property 'droppedFile' does not exist on type 'Chooser'.
      this.setFile(this.droppedFile);
      this.dispatchEvent(
        new CustomEvent("did-drop-file", { bubbles: true, composed: true }),
      );
      // @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
      this.onStartLoad(); // Automatically load the file
    }
  }

  onChooseFile(event) {
    if (event.currentTarget.files.length === 0) {
      return;
    }
    this.setFile(event.currentTarget.files[0]);
  }

  setFile(file) {
    // @ts-expect-error - TS2339 - Property 'file' does not exist on type 'Chooser'.
    this.file = file;
    // file.path only available in electron app
    // @ts-expect-error - TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'. | TS2339 - Property 'file' does not exist on type 'Chooser'. | TS2339 - Property 'file' does not exist on type 'Chooser'.
    this.fileDisplayName = "file://" + (this.file.path || this.file.name);
  }

  async onChooseNativeFile() {
    // @ts-expect-error - TS2339 - Property 'hasNativeFS' does not exist on type 'Chooser'.
    if (!this.hasNativeFS) {
      return;
    }

    // @ts-expect-error - TS2339 - Property 'showOpenFilePicker' does not exist on type 'Window & typeof globalThis'.
    const [fileHandle] = await window.showOpenFilePicker(
      // @ts-expect-error - TS2339 - Property 'showOpenFilePickerOptions' does not exist on type 'Chooser'.
      this.showOpenFilePickerOptions,
    );
    // @ts-expect-error - TS2339 - Property 'fileHandle' does not exist on type 'Chooser'.
    this.fileHandle = fileHandle;

    // @ts-expect-error - TS2339 - Property 'file' does not exist on type 'Chooser'.
    this.file = await fileHandle.getFile();
    // @ts-expect-error - TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
    this.fileDisplayName = "file://" + fileHandle.name;
  }

  randomId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  onStartLoad(event) {
    if (event) {
      event.preventDefault();
    }

    // @ts-expect-error - TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
    const loadInfo = { sourceUrl: this.fileDisplayName };

    // @ts-expect-error - TS2339 - Property 'file' does not exist on type 'Chooser'.
    if (this.file) {
      // @ts-expect-error - TS2339 - Property 'isFile' does not exist on type '{ sourceUrl: any; }'.
      loadInfo.isFile = true;
      // file.path only available in electron app
      // @ts-expect-error - TS2339 - Property 'file' does not exist on type 'Chooser'.
      if (this.file.path) {
        // @ts-expect-error - TS2339 - Property 'loadUrl' does not exist on type '{ sourceUrl: any; }'. | TS2339 - Property 'file' does not exist on type 'Chooser'.
        loadInfo.loadUrl = "file2://" + this.file.path;
        // @ts-expect-error - TS2339 - Property 'noCache' does not exist on type '{ sourceUrl: any; }'.
        loadInfo.noCache = true;
        // @ts-expect-error - TS2339 - Property 'fileHandle' does not exist on type 'Chooser'.
      } else if (this.fileHandle) {
        // @ts-expect-error - TS2339 - Property 'loadUrl' does not exist on type '{ sourceUrl: any; }'. | TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
        loadInfo.loadUrl = this.fileDisplayName;
        // @ts-expect-error - TS2339 - Property 'extra' does not exist on type '{ sourceUrl: any; }'. | TS2339 - Property 'fileHandle' does not exist on type 'Chooser'.
        loadInfo.extra = { fileHandle: this.fileHandle };
        // @ts-expect-error - TS2339 - Property 'noCache' does not exist on type '{ sourceUrl: any; }'.
        loadInfo.noCache = false;
      } else {
        // @ts-expect-error - TS2339 - Property 'loadUrl' does not exist on type '{ sourceUrl: any; }'. | TS2339 - Property 'file' does not exist on type 'Chooser'.
        loadInfo.loadUrl = URL.createObjectURL(this.file);
        // @ts-expect-error - TS2339 - Property 'blob' does not exist on type '{ sourceUrl: any; }'. | TS2339 - Property 'file' does not exist on type 'Chooser'.
        loadInfo.blob = this.file;
        // @ts-expect-error - TS2339 - Property 'noCache' does not exist on type '{ sourceUrl: any; }'.
        loadInfo.noCache = false;
      }
      // @ts-expect-error - TS2339 - Property 'size' does not exist on type '{ sourceUrl: any; }'. | TS2339 - Property 'file' does not exist on type 'Chooser'.
      loadInfo.size = this.file.size;
      // @ts-expect-error - TS2339 - Property 'name' does not exist on type '{ sourceUrl: any; }'. | TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
      loadInfo.name = this.fileDisplayName;
    }

    // @ts-expect-error - TS2339 - Property 'newFullImport' does not exist on type '{ sourceUrl: any; }'. | TS2339 - Property 'newFullImport' does not exist on type 'Chooser'.
    loadInfo.newFullImport = this.newFullImport;

    this.dispatchEvent(
      new CustomEvent("load-start", {
        bubbles: true,
        composed: true,
        detail: loadInfo,
      }),
    );

    return false;
  }

  onInput(event) {
    // @ts-expect-error - TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
    this.fileDisplayName = event.currentTarget.value;

    if (
      // @ts-expect-error - TS2339 - Property 'file' does not exist on type 'Chooser'.
      this.file &&
      // @ts-expect-error - TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
      this.fileDisplayName &&
      // @ts-expect-error - TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
      this.fileDisplayName.startsWith("file://")
    ) {
      // @ts-expect-error - TS2339 - Property 'file' does not exist on type 'Chooser'.
      this.file = null;
      // @ts-expect-error - TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
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
        padding-top: 1em;
        padding-bottom: 1em;
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
    return html` <section
      class="section ${
        // @ts-expect-error - TS2339 - Property 'noHead' does not exist on type 'Chooser'.
        this.noHead ? "is-paddingless" : "less-padding"
      }"
    >
      <div
        class="${
          // @ts-expect-error - TS2339 - Property 'noHead' does not exist on type 'Chooser'.
          this.noHead ? "" : "panel"
        }"
      >
        <div
          class="${
            // @ts-expect-error - TS2339 - Property 'noHead' does not exist on type 'Chooser'.
            this.noHead ? "is-hidden" : "panel-heading"
          } heading-size"
        >
          ${
            // @ts-expect-error - TS2339 - Property 'newFullImport' does not exist on type 'Chooser'.
            this.newFullImport ? "Import Existing" : "Load"
          }
          Web Archive
        </div>
        <div
          class="${
            // @ts-expect-error - TS2339 - Property 'noHead' does not exist on type 'Chooser'.
            this.noHead ? "" : "panel-body extra-padding"
          } file has-name"
        >
          <form class="is-flex" @submit="${this.onStartLoad}">
            <label class="file-label">
              ${
                // @ts-expect-error - TS2339 - Property 'hasNativeFS' does not exist on type 'Chooser'.
                !this.hasNativeFS
                  ? html` <input
                      class="file-input"
                      @click="${(e) => (e.currentTarget.value = null)}"
                      @change=${this.onChooseFile}
                      type="file"
                      id="fileupload"
                      name="fileupload"
                    />`
                  : ""
              }
              <span class="file-cta" @click="${this.onChooseNativeFile}">
                <span class="file-icon">
                  <fa-icon
                    size="0.9em"
                    .svg=${fasUpload}
                    aria-hidden="true"
                  ></fa-icon>
                </span>
                <span class="file-label is-hidden-touch"> Choose File... </span>
              </span>
            </label>

            <div class="field has-addons">
              <p class="control is-expanded">
                <input
                  class="file-name input"
                  type="text"
                  name="filename"
                  id="filename"
                  pattern="((file|http|https|ipfs|s3)://.*.(warc|warc.gz|zip|wacz|har|wbn|json)([?#].*)?)|(googledrive://.+)|(ssb://.+)"
                  .value="${
                    // @ts-expect-error - TS2339 - Property 'fileDisplayName' does not exist on type 'Chooser'.
                    this.fileDisplayName
                  }"
                  @input="${this.onInput}"
                  autocomplete="off"
                  placeholder="${
                    // @ts-expect-error - TS2339 - Property 'newFullImport' does not exist on type 'Chooser'.
                    this.newFullImport
                      ? "Click 'Choose File' to select a local archive to import"
                      : "Enter a URL or click 'Choose File' to select a WARC, WACZ, HAR or WBN archive source"
                  }"
                />
              </p>
              <div class="control">
                <button
                  type="submit"
                  class="button is-hidden-mobile is-primary"
                >
                  ${
                    // @ts-expect-error - TS2339 - Property 'newFullImport' does not exist on type 'Chooser'.
                    this.newFullImport ? "Import" : "Load"
                  }
                </button>
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
