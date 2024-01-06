import { LitElement, html, css, type PropertyValues } from "lit";
import { IS_APP, wrapCss } from "./misc";

import fasUpload from "@fortawesome/fontawesome-free/svgs/solid/upload.svg";
import { customElement, property } from "lit/decorators.js";

export interface FileWithPath extends File {
  readonly path: string;
}

// ===========================================================================
@customElement("wr-chooser")
export class Chooser extends LitElement {
  @property({ type: String })
  fileDisplayName = "";

  @property({ attribute: false })
  file: FileWithPath | null = null;

  @property({ attribute: false })
  droppedFile: FileWithPath | null = null;

  @property({ type: Boolean })
  hasNativeFS = !!window.showOpenFilePicker && !IS_APP;

  @property({ type: Object })
  showOpenFilePickerOptions = {
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

  @property({ type: Boolean })
  newFullImport = false;

  @property({ type: Boolean })
  noHead = false;

  fileHandle?: FileSystemFileHandle;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("droppedFile") && this.droppedFile) {
      this.onDropFile();
    }
  }

  onDropFile() {
    const allowedFileExtensions = this.showOpenFilePickerOptions.types
      .map((type) => type.accept)
      .map(Object.values)
      .flat(2);

    const fileHasAllowedExtension = allowedFileExtensions.some(
      (extension) => this.droppedFile?.name.endsWith(extension),
    );

    if (fileHasAllowedExtension) {
      if (this.droppedFile === null) return;
      this.setFile(this.droppedFile);
      this.dispatchEvent(
        new CustomEvent("did-drop-file", { bubbles: true, composed: true }),
      );
      this.onStartLoad(); // Automatically load the file
    }
  }

  onChooseFile(event) {
    if (event.currentTarget.files.length === 0) {
      return;
    }
    this.setFile(event.currentTarget.files[0]);
  }

  setFile(file: FileWithPath) {
    this.file = file;
    // file.path only available in electron app
    this.fileDisplayName = "file://" + (file.path || file.name);
  }

  async onChooseNativeFile() {
    if (!this.hasNativeFS) {
      return;
    }

    const [fileHandle] = await window.showOpenFilePicker(
      this.showOpenFilePickerOptions,
    );

    this.fileHandle = fileHandle;

    this.file = (await fileHandle.getFile()) as FileWithPath;

    this.fileDisplayName = "file://" + fileHandle.name;
  }

  randomId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  onStartLoad(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    type LoadInfo = {
      sourceUrl: string;
      isFile?: boolean;
      loadUrl?: string;
      noCache?: boolean;
      extra?: { fileHandle: FileSystemFileHandle };
      blob?: Blob;
      size?: number;
      name?: string;
      newFullImport: boolean;
    };

    const loadInfo: LoadInfo = {
      sourceUrl: this.fileDisplayName,
      newFullImport: this.newFullImport,
    };

    if (this.file) {
      loadInfo.isFile = true;
      // file.path only available in electron app
      if (this.file.path) {
        loadInfo.loadUrl = "file2://" + this.file.path;
        loadInfo.noCache = true;
      } else if (this.fileHandle) {
        loadInfo.loadUrl = this.fileDisplayName;
        loadInfo.extra = { fileHandle: this.fileHandle };
        loadInfo.noCache = false;
      } else {
        loadInfo.loadUrl = URL.createObjectURL(this.file);
        loadInfo.blob = this.file;
        loadInfo.noCache = false;
      }
      loadInfo.size = this.file.size;
      loadInfo.name = this.fileDisplayName;
    }

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
    this.fileDisplayName = event.currentTarget.value;

    if (
      this.file &&
      this.fileDisplayName &&
      this.fileDisplayName.startsWith("file://")
    ) {
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
      class="section ${this.noHead ? "is-paddingless" : "less-padding"}"
    >
      <div class="${this.noHead ? "" : "panel"}">
        <div
          class="${this.noHead ? "is-hidden" : "panel-heading"} heading-size"
        >
          ${this.newFullImport ? "Import Existing" : "Load"} Web Archive
        </div>
        <div
          class="${this.noHead ? "" : "panel-body extra-padding"} file has-name"
        >
          <form class="is-flex" @submit="${this.onStartLoad}">
            <label class="file-label">
              ${!this.hasNativeFS
                ? html` <input
                    class="file-input"
                    @click="${(e) => (e.currentTarget.value = null)}"
                    @change=${this.onChooseFile}
                    type="file"
                    id="fileupload"
                    name="fileupload"
                  />`
                : ""}
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
                  .value="${this.fileDisplayName}"
                  @input="${this.onInput}"
                  autocomplete="off"
                  placeholder="${this.newFullImport
                    ? "Click 'Choose File' to select a local archive to import"
                    : "Enter a URL or click 'Choose File' to select a WARC, WACZ, HAR or WBN archive source"}"
                />
              </p>
              <div class="control">
                <button
                  type="submit"
                  class="button is-hidden-mobile is-primary"
                >
                  ${this.newFullImport ? "Import" : "Load"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>`;
  }
}
