import { html } from "lit";
import { register } from "register-service-worker";
import rwpLogo from "~assets/brand/replaywebpage-icon-color.svg";

// ===========================================================================
export class SWManager {
  name: string;
  scope: string;
  appName: string;
  requireSubdomainIframe: boolean;

  errorMsg: string | null = null;

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
  }

  setAppName(newAppName: string) {
    this.appName = newAppName;
  }

  async register(): Promise<void> {
    // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7034 - Variable 'resolve' implicitly has type 'any' in some locations where its type cannot be determined. | TS7034 - Variable 'reject' implicitly has type 'any' in some locations where its type cannot be determined.
    let resolve, reject;

    const p = new Promise<void>((res, rej) => {
      resolve = res;
      reject = rej;
    });

    this.errorMsg = this.getSWErrorMsg();

    if (this.errorMsg) {
      console.error(this.errorMsg);
      reject!(this.errorMsg);
    }

    // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7006 - Parameter 'error' implicitly has an 'any' type.
    const handleError = (error) => {
      console.error("Error during service worker registration:", error);
      this.errorMsg = this.getCrossOriginIframeMsg();
      if (!this.errorMsg) {
        this.errorMsg = `${
          this.appName
        } could not be loaded due to the following error:\n${error.toString()}`;
      }

      reject!(this.errorMsg);
    };

    // TODO: Fix this the next time the file is edited.
    register(this.scope + this.name, {
      registrationOptions: { scope: this.scope },
      registered() {
        console.log("Service worker is registered");
        // @ts-expect-error [// TODO: Fix this the next time the file is edited.] - TS7005 - Variable 'resolve' implicitly has an 'any' type.
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
      // @ts-expect-error - TS2531 - Object is possibly 'null'.
      return window.top.location.href === "";
    } catch (e) {
      return true;
    }
  }

  getSWErrorMsg() {
    // TODO: Fix this the next time the file is edited.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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

  renderErrorReport(override = "") {
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
            .svg=${rwpLogo}
            aria-hidden="true"
          ></fa-icon>
        </div>
        <div style="white-space: pre-wrap; text-align: center">${msg}</div>
      </section>
    `;
  }
}

export async function serviceWorkerActivated() {
  if (navigator.serviceWorker.controller) {
    return;
  }

  await new Promise<void>((resolve) => {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      resolve();
    });
  });
}
