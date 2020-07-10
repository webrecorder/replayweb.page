import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import fasUpload from '@fortawesome/fontawesome-free/svgs/solid/upload.svg';


// ===========================================================================
class Chooser extends LitElement
{
  constructor() {
    super();

    this.fileDisplayName = "";
    this.file = null;
  }

  onChooseFile(event) {
    if (event.currentTarget.files.length === 0) {
      return;
    }

    this.file = event.currentTarget.files[0];
    // file.path only available in electron app
    this.fileDisplayName = "file://" + (this.file.path || this.file.name);
    this.requestUpdate();
  }

  onStartLoad(event) {
    event.preventDefault();

    const loadInfo = {sourceUrl: this.fileDisplayName};

    if (this.file) {
      loadInfo.isFile = true;
      // file.path only available in electron app
      if (this.file.path) {
        const url = new URL(__APP_FILE_SERVE_PREFIX__);
        url.searchParams.set("filename", this.file.path);
        loadInfo.loadUrl = url.href;
      } else {
        loadInfo.loadUrl = URL.createObjectURL(this.file);
        loadInfo.blob = this.file;
      }
      loadInfo.size = this.file.size;
      loadInfo.noCache = this.file.path !== undefined;
      loadInfo.name = this.fileDisplayName;
    }
                
    this.dispatchEvent(new CustomEvent("load-start", {detail: loadInfo}));
    
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
    .extra-padding {
      padding: 2em;
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
    form {
      flex-grow: 1;
      flex-shrink: 0;
    }
    input.input.file-name:invalid {
      border: 1px dashed red;
    }
    input.input.file-name {
      max-width: 100%;
      border-width: 1px;
      margin-left: -1px;
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
  };

  render() {
    return html`
    <section class="section less-padding">
      <nav class="panel">
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
                pattern="((file|http|https|s3):\/\/.*\.(warc|warc.gz|zip|wacz|har|wbn))|(googledrive:\/\/.+)"
                .value="${this.fileDisplayName}"
                @input="${this.onInput}"
                autocomplete="off"
                placeholder="Enter a URL or click 'Choose File' to select a WARC, WACZ, HAR or WBN archive source">
              </p>
              <div class="control">
                <button type="submit" class="button is-hidden-mobile is-primary">Load</button>
              </div>
            </div>

          </form>
        </div>
      </nav>
    </section>`;
  }
}

customElements.define("wr-chooser", Chooser);

export { Chooser };