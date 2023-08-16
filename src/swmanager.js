import { html } from "lit";
import { register } from "register-service-worker";

// ===========================================================================
export class SWManager {
  constructor({
    name = "sw.js",
    scope = "./",
    appName = "ReplayWeb.page",
    requireSubdomainIframe = false,
  } = {}) {
    this.name = name;
    this.scope = scope;
    this.appName = appName;
    this.requireSubdomainIframe = requireSubdomainIframe;

    this.errorMsg = null;
  }

  setAppName(newAppName) {
    this.appName = newAppName;
  }

  register() {
    let resolve, reject;

    const p = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });

    this.errorMsg = this.getSWErrorMsg();

    if (this.errorMsg) {
      console.error(this.errorMsg);
      reject(this.errorMsg);
    }

    const handleError = (error) => {
      console.error("Error during service worker registration:", error);
      this.errorMsg = this.getCrossOriginIframeMsg();
      if (!this.errorMsg) {
        this.errorMsg = `${
          this.appName
        } could not be loaded due to the following error:\n${error.toString()}`;
      }

      reject(this.errorMsg);
    };

    register(this.scope + this.name, {
      registrationOptions: { scope: this.scope },
      registered() {
        console.log("Service worker is registered");
        resolve();
      },

      error(errMsg) {
        handleError(errMsg);
      },
    });

    return p;
  }

  getCrossOriginIframeMsg() {
    if (this.isCrossOriginIframe()) {
      return `\
      Sorry, Service Workers can not be used in cross-origin iframes.
      This web archive embed is loaded from ${window.location.origin} but the top page is on a different origin.
      The embed must be loaded from the same origin or a subdomain.`;
    }

    return null;
  }

  isCrossOriginIframe() {
    if (window.parent === window) {
      return false;
    }

    try {
      return window.top.location.href === "";
    } catch (e) {
      return true;
    }
  }

  getSWErrorMsg() {
    if (navigator.serviceWorker) {
      // must be loaded from a cross-origin (eg. subdomain)
      if (this.requireSubdomainIframe && !this.isCrossOriginIframe()) {
        return `Sorry, due to security settings, this ${this.appName} embed only be viewed within a subdomain iframe.`;
      }

      return null;
    }

    // loaded from a cross-origin iframe that's *not* a subdomain
    const msg = this.getCrossOriginIframeMsg();
    if (msg) {
      return msg;
    }

    if (!window.isSecureContext) {
      return `
      Sorry, the ${this.appName} system must be loaded from an HTTPS URL (or localhost), but was loaded from: ${window.location.host}.
      Please try loading this page from an HTTPS URL`;
    }

    // Detect firefox private mode
    if ("MozAppearance" in document.documentElement.style) {
      return "Sorry, Service Workers are disabled in Firefox in Private Mode. Please try loading this page in regular mode instead.";
    }

    return `Sorry, ${this.appName} won't work in this browser as Service Workers are not supported in this window.
  Please try a different browser.`;
  }

  renderErrorReport(logo, override) {
    const msg = this.errorMsg || override;

    if (!msg) {
      return "";
    }

    return html`
      <section class="is-fullwidth">
        <div class="has-text-centered">
          <fa-icon
            style="margin: 1em;flex-grow: 1;"
            id="wrlogo"
            size="2.5rem"
            .svg=${logo}
            aria-hidden="true"
          ></fa-icon>
        </div>
        <div style="white-space: pre-wrap; text-align: center">${msg}</div>
      </section>
    `;
  }
}
