import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import fabGoogleDrive from '@fortawesome/fontawesome-free/svgs/brands/google-drive.svg';


// ===========================================================================
class GDrive extends LitElement
{
  constructor() {
    super();
    this.state = "trypublic";
    this.sourceUrl = "";
    this.scriptLoaded = false;
    this.error = false;
  }

  static get properties() {
    return {
      state: { type: String },
      sourceUrl: { type: String },
      error: { type: Boolean },
      reauth: { type: Boolean }
    }
  }

  updated(changedProperties) {
    if (changedProperties.has("sourceUrl")) {
      this.error = false;
      this.state = "trypublic";
      this.tryPublicAccess().then((result) => {
        if (!result) {
          this.state = "tryauto";
          this.requestUpdate();
        }
      });
    }
  }

  async tryPublicAccess() {
    try {
      const sourceUrl = this.sourceUrl;
      const fileId = sourceUrl.slice("googledrive://".length);
      const publicCheckUrl = `${__HELPER_PROXY__}/g/${fileId}`;

      let resp = null;
      try {
        resp = await fetch(publicCheckUrl);
      } catch (e) {
        return false;
      }
      const json = await resp.json();
      if (!json.url || !json.name || !json.size) {
        return false;
      }

      // only allow for small downloads that will not result in partial download
      if (json.size > 15000000) {
        return false;
      }

      const publicUrl = json.url;

      try {
        const abort = new AbortController();
        const signal = abort.signal;
        resp = await fetch(publicUrl, {signal});
        abort.abort();
        if (resp.status != 200) {
          return false;
        }
      } catch(e) {
        return false;
      }

      const name = json.name;
      const extra = {publicUrl};
      const size = Number(json.size);
  
      this.dispatchEvent(new CustomEvent("load-ready", {detail: {name, extra, size, sourceUrl}}));
      return true;

    } catch (e) {
      return false;
    }
  }

  onLoad() {
    this.scriptLoaded = true;
    this.gauth('none', (response) => {
      if (response.error === "immediate_failed") {
        if (this.state !== "implicitonly") {
          this.state = "trymanual";
        }
      } else {
        this.authed(response);
      }
    });
  }

  onClickAuth() {
    this.gauth('select_account', (response) => {
      if (!response.error) {
        this.authed(response);
      }
    });
  }

  async authed(response) {
    const sourceUrl = this.sourceUrl;
    const fileId = sourceUrl.slice("googledrive://".length);
    const metadataUrl = `https://www.googleapis.com/drive/v3/files/${fileId}`;
    const authToken = response.access_token;
    const headers = {"Authorization": `Bearer ${authToken}`};

    const resp = await fetch(metadataUrl + "?fields=name,size&supportsAllDrives=true", {headers});

    if ((resp.status === 404 || resp.status == 403)) {
      if (this.state !== "implicitonly") {
        this.state = "trymanual";
      }
      this.error = true;
      return;
    }

    this.error = false;

    const metadata = await resp.json();
    const name = metadata.name;
    const size = Number(metadata.size);

    this.dispatchEvent(new CustomEvent("load-ready", {detail: {sourceUrl, headers, size, name}}));
  }

  static get styles() {
    return wrapCss(css``);
  }

  render() {
    return html`
    ${this.script()}
    ${this.state !== "trymanual" ? html`
    <p>Connecting to Google Drive...</p>
    ` : html`
    ${this.error ? html`
    <div class="error has-text-danger">
      <p>${this.reauth ? 'Some resources are loaded on demand from Google Drive, which requires reauthorization.' :
      'Could not access this file with the current Google Drive account.'}</p>
      <p>If you have multiple Google Drive accounts, be sure to select the correct one.</p>
    </div>
    <br/>
    ` : ``}
    <button class="button is-warning is-rounded" @click="${this.onClickAuth}">
    <span class="icon"><fa-icon .svg="${fabGoogleDrive}"></fa-icon></span>
    <span>Authorize Google Drive</span>
    </button>
    `}`;
  }

  script() {
    if (this.state === "trypublic" || this.scriptLoaded) {
      return html``;
    }
    const script = document.createElement('script');
    script.onload = (() => this.onLoad());
    script.src = 'https://apis.google.com/js/platform.js';
    return script;
  }

  gauth(prompt, callback) {
    gapi.load('auth2', () => {
      gapi.auth2.authorize({
          client_id: __GDRIVE_CLIENT_ID__,
          scope: "https://www.googleapis.com/auth/drive.file",
          response_type: "token",
          prompt
      }, callback);
    });
  }
}

customElements.define("wr-gdrive", GDrive);

export { GDrive };