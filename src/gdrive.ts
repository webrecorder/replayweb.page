import { LitElement, html, css } from "lit";
import { wrapCss } from "./misc";

import fabGoogleDrive from "@fortawesome/fontawesome-free/svgs/brands/google-drive.svg";

// ===========================================================================
class GDrive extends LitElement {
  constructor() {
    super();
    // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'GDrive'.
    this.state = "trypublic";
    // @ts-expect-error - TS2339 - Property 'sourceUrl' does not exist on type 'GDrive'.
    this.sourceUrl = "";
    // @ts-expect-error - TS2339 - Property 'scriptLoaded' does not exist on type 'GDrive'.
    this.scriptLoaded = false;
    // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'GDrive'.
    this.error = false;
  }

  static get properties() {
    return {
      state: { type: String },
      sourceUrl: { type: String },
      error: { type: Boolean },
      reauth: { type: Boolean },
    };
  }

  updated(changedProperties) {
    if (changedProperties.has("sourceUrl")) {
      // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'GDrive'.
      this.error = false;
      // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'GDrive'.
      this.state = "trypublic";
      this.tryPublicAccess().then((result) => {
        if (!result) {
          // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'GDrive'.
          this.state = "tryauto";
          this.requestUpdate();
        }
      });
    }
  }

  async tryPublicAccess() {
    try {
      // @ts-expect-error - TS2339 - Property 'sourceUrl' does not exist on type 'GDrive'.
      const sourceUrl = this.sourceUrl;
      const fileId = sourceUrl.slice("googledrive://".length);
      const publicCheckUrl = `${__HELPER_PROXY__}/g/${fileId}`;

      let resp = null;
      try {
        // @ts-expect-error - TS2322 - Type 'Response' is not assignable to type 'null'.
        resp = await fetch(publicCheckUrl);
      } catch (e) {
        return false;
      }
      // @ts-expect-error - TS2531 - Object is possibly 'null'.
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
        // @ts-expect-error - TS2322 - Type 'Response' is not assignable to type 'null'.
        resp = await fetch(publicUrl, { signal });
        abort.abort();
        // @ts-expect-error - TS2531 - Object is possibly 'null'.
        if (resp.status != 200) {
          return false;
        }
      } catch (e) {
        return false;
      }

      const name = json.name;
      const extra = { publicUrl };
      const size = Number(json.size);

      this.dispatchEvent(
        new CustomEvent("load-ready", {
          detail: { name, extra, size, sourceUrl },
        }),
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  onLoad() {
    // @ts-expect-error - TS2339 - Property 'scriptLoaded' does not exist on type 'GDrive'.
    this.scriptLoaded = true;
    this.gauth("none", (response) => {
      if (response.error) {
        // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'GDrive'.
        if (this.state !== "implicitonly") {
          // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'GDrive'.
          this.state = "trymanual";
        }
      } else {
        this.authed(response);
      }
    });
  }

  onClickAuth() {
    this.gauth("select_account", (response) => {
      if (!response.error) {
        this.authed(response);
      }
    });
  }

  async authed(response) {
    // @ts-expect-error - TS2339 - Property 'sourceUrl' does not exist on type 'GDrive'.
    const sourceUrl = this.sourceUrl;
    const fileId = sourceUrl.slice("googledrive://".length);
    const metadataUrl = `https://www.googleapis.com/drive/v3/files/${fileId}`;
    const authToken = response.access_token;
    const headers = { Authorization: `Bearer ${authToken}` };

    const resp = await fetch(
      metadataUrl + "?fields=name,size&supportsAllDrives=true",
      { headers },
    );

    if (resp.status === 404 || resp.status == 403) {
      // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'GDrive'.
      if (this.state !== "implicitonly") {
        // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'GDrive'.
        this.state = "trymanual";
      }
      // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'GDrive'.
      this.error = true;
      return;
    }

    // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'GDrive'.
    this.error = false;

    const metadata = await resp.json();
    const name = metadata.name;
    const size = Number(metadata.size);

    this.dispatchEvent(
      new CustomEvent("load-ready", {
        detail: { sourceUrl, headers, size, name },
      }),
    );
  }

  static get styles() {
    return wrapCss(css``);
  }

  render() {
    return html` ${this.script()}
    ${
      // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'GDrive'.
      this.state !== "trymanual"
        ? html` <p>Connecting to Google Drive...</p> `
        : html`
            ${
              // @ts-expect-error - TS2339 - Property 'error' does not exist on type 'GDrive'.
              this.error
                ? html`
                    <div class="error has-text-danger">
                      <p>
                        ${
                          // @ts-expect-error - TS2339 - Property 'reauth' does not exist on type 'GDrive'.
                          this.reauth
                            ? "Some resources are loaded on demand from Google Drive, which requires reauthorization."
                            : "Could not access this file with the current Google Drive account."
                        }
                      </p>
                      <p>
                        If you have multiple Google Drive accounts, be sure to
                        select the correct one.
                      </p>
                    </div>
                    <br />
                  `
                : ""
            }
            <button
              class="button is-warning is-rounded"
              @click="${this.onClickAuth}"
            >
              <span class="icon"
                ><fa-icon .svg="${fabGoogleDrive}"></fa-icon
              ></span>
              <span>Authorize Google Drive</span>
            </button>
          `
    }`;
  }

  script() {
    // @ts-expect-error - TS2339 - Property 'state' does not exist on type 'GDrive'. | TS2339 - Property 'scriptLoaded' does not exist on type 'GDrive'.
    if (this.state === "trypublic" || this.scriptLoaded) {
      return html``;
    }
    const script = document.createElement("script");
    script.onload = () => this.onLoad();
    script.src = "https://apis.google.com/js/platform.js";
    return script;
  }

  gauth(prompt, callback) {
    // @ts-expect-error - TS2339 - Property 'gapi' does not exist on type 'Window & typeof globalThis'.
    self.gapi.load("auth2", () => {
      // @ts-expect-error - TS2339 - Property 'gapi' does not exist on type 'Window & typeof globalThis'.
      self.gapi.auth2.authorize(
        {
          client_id: __GDRIVE_CLIENT_ID__,
          scope: "https://www.googleapis.com/auth/drive.file",
          response_type: "token",
          prompt,
        },
        callback,
      );
    });
  }
}

customElements.define("wr-gdrive", GDrive);

export { GDrive };
