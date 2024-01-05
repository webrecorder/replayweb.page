import { LitElement, html, css, unsafeCSS, type PropertyValues } from "lit";
import { wrapCss } from "./misc";

import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { marked } from "marked";

import { getTS, getReplayLink } from "./pageutils";

import Split from "split.js";
import { ItemInfo } from "./item-info";

// ===========================================================================
class Story extends LitElement {
  collInfo: ItemInfo | Record<string, never> | null;
  curatedPageMap: Record<string, unknown[]>;
  currList: number;
  active: boolean;
  lastST: number;
  clickTime: number;
  isSidebar: boolean;
  splitDirection: boolean | "vertical" | "horizontal";
  constructor() {
    super();

    this.collInfo = null;

    this.curatedPageMap = {};

    this.currList = 0;

    this.active = false;

    this.lastST = 0;
    this.clickTime = 0;

    this.isSidebar = false;
    this.splitDirection = false;
  }

  static get properties() {
    return {
      collInfo: { type: Object },

      active: { type: Boolean },

      curatedPageMap: { type: Object },

      currList: { type: Number },

      isSidebar: { type: Boolean },
      splitDirection: { type: Boolean },
    };
  }

  recalcSplitter(width) {
    this.splitDirection =
      this.isSidebar || width < 769 ? "vertical" : "horizontal";
  }

  firstUpdated() {
    this.recalcSplitter(document.documentElement.clientWidth);

    // @ts-expect-error - TS2339 - Property 'obs' does not exist on type 'Story'.
    this.obs = new ResizeObserver((entries /*, observer*/) => {
      this.recalcSplitter(entries[0].contentRect.width);
    });

    // @ts-expect-error - TS2339 - Property 'obs' does not exist on type 'Story'.
    this.obs.observe(this);
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("collInfo")) {
      this.doLoadCurated();
    }

    if (
      changedProperties.has("collInfo") ||
      changedProperties.has("isSidebar")
    ) {
      this.recalcSplitter(document.documentElement.clientWidth);
    }

    if (changedProperties.has("splitDirection")) {
      this.configureSplitter();
    }

    if (changedProperties.has("currList") && this.active) {
      this.sendChangeEvent({
        currList: this.currList,
      });
    }
  }

  configureSplitter() {
    const sidebar = this.renderRoot.querySelector(".sidebar");
    const content = this.renderRoot.querySelector(".main-content");

    // @ts-expect-error - TS2339 - Property 'splitter' does not exist on type 'Story'.
    if (this.splitter) {
      try {
        // @ts-expect-error - TS2339 - Property 'splitter' does not exist on type 'Story'.
        this.splitter.destroy();
      } catch (e) {
        // ignore splitter destory err
      }
      // @ts-expect-error - TS2339 - Property 'splitter' does not exist on type 'Story'.
      this.splitter = null;
    }

    // @ts-expect-error - TS2339 - Property 'splitter' does not exist on type 'Story'.
    if (sidebar && content && !this.splitter) {
      const opts = {
        sizes: [20, 80],

        gutterSize: 4,

        direction: this.splitDirection,
      };

      // @ts-expect-error - TS2339 - Property 'splitter' does not exist on type 'Story'. | TS2322 - Type 'Element' is not assignable to type 'string | HTMLElement'. | TS2322 - Type 'Element' is not assignable to type 'string | HTMLElement'.
      this.splitter = Split([sidebar, content], opts);
    }
  }

  async doLoadCurated() {
    this.curatedPageMap = {};

    const pageMap = {};

    // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'Story'.
    for (const page of this.collInfo.pages) {
      pageMap[page.id] = page;
    }

    // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'Story'.
    for (const curated of this.collInfo.curatedPages) {
      if (!this.curatedPageMap[curated.list]) {
        this.curatedPageMap[curated.list] = [];
      }
      const page = curated;

      // if (curated.page) {
      //   page = pageMap[curated.page];
      //   if (!page) {
      //     console.log("No Page with id: " + page);
      //     continue;
      //   }
      // }

      const url = page.url;
      const ts = page.ts;
      const title = page.title || page.url;
      const desc = curated.desc;

      this.curatedPageMap[curated.list].push({ url, ts, title, desc });
    }

    this.scrollToList();
  }

  static get styles() {
    return wrapCss(css`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        min-width: 0px;

        justify-content: flex-start;
        align-items: center;
      }

      :host(.sidebar) .columns {
        display: flex !important;
        flex-direction: column;
      }

      :host(.sidebar) .column.sidebar.is-one-fifth {
        width: 100% !important;
      }

      ${Story.sidebarStyles(unsafeCSS(":host(.sidebar)"))}

      .desc p {
        margin-bottom: 1em;
      }

      .columns {
        width: 100%;
        height: 100%;
        justify-self: stretch;
        margin: 1em 0 0 0 !important;
        min-height: 0;
      }

      .column.main-content {
        min-height: 0;
        display: flex;
        flex-direction: column;
        padding: 0px;
        margin-left: 0.75em;
      }

      .column.main-content.main-scroll {
        padding-right: 0.75em;
        word-break: break-all;
      }

      ul.menu-list a.is-active {
        background-color: #55be6f;
      }
      ol {
        margin-left: 30px;
      }

      @media screen and (min-width: 769px) {
        .columns {
          margin-top: 0.75em;
        }

        .column.sidebar {
          max-height: 100%;
          overflow-y: auto;
        }
      }

      @media screen and (max-width: 768px) {
        ${Story.sidebarStyles()}
      }

      .gutter.gutter-vertical:hover {
        cursor: row-resize;
      }

      .gutter.gutter-horizontal:hover {
        cursor: col-resize;
      }
    `);
  }

  static sidebarStyles(prefix = css``) {
    return css`
      ${prefix} .columns {
        position: relative;
      }

      ${prefix} .column.sidebar {
        overflow-y: auto;
        margin-top: 0.75em;
      }

      ${prefix} .column.main-content {
        position: relative;
        overflow-y: auto;

        border-top: 1px solid black;

        height: 100%;
      }

      ${prefix} .menu {
        font-size: 0.8rem;
      }
    `;
  }

  render() {
    const currListNum = this.currList;

    return html`
      <div
        class="is-sr-only"
        role="heading"
        aria-level="${this.isSidebar ? "2" : "1"}"
      >
        Story for ${this.collInfo!.title}
      </div>
      <div class="columns">
        <div class="column sidebar is-one-fifth">
          <aside class="menu">
            <ul class="menu-list">
              <li>
                <a
                  href="#list-0"
                  data-list="0"
                  class="${currListNum === 0
                    ? "is-active"
                    : ""} menu-label is-size-4"
                  @click=${this.onClickScroll}
                  >${
                    // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'Story'.
                    this.collInfo.title
                  }</a
                >
                <ul class="menu-list">
                  ${
                    // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'Story'.
                    this.collInfo.lists.map(
                      (list) =>
                        html` <li>
                          <a
                            @click=${this.onClickScroll}
                            href="#list-${list.id}"
                            data-list="${list.id}"
                            class="${currListNum === list.id
                              ? "is-active"
                              : ""}"
                            >${list.title}</a
                          >
                        </li>`,
                    )
                  }
                </ul>
              </li>
            </ul>
          </aside>
        </div>
        <div @scroll=${this.onScroll} class="column main-content main-scroll">
          <section id="list-0" class="desc">
            <h2 class="has-text-centered title is-3">
              ${
                // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'Story'.
                this.collInfo.title
              }
            </h2>

            ${
              // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'Story'. | TS2339 - Property 'collInfo' does not exist on type 'Story'.
              this.collInfo.desc ? unsafeHTML(marked(this.collInfo.desc)) : ""
            }
          </section>
          ${this.renderLists()}
        </div>
      </div>
    `;
  }

  renderLists() {
    // @ts-expect-error - TS2339 - Property 'collInfo' does not exist on type 'Story'.
    return html` ${this.collInfo.lists.map(
      (list) => html`
        <article id="list-${list.id}">
          <div class="content">
            <hr />
            <h3>${list.title}</h3>
            <p>${list.desc}</p>
            <ol>
              ${this.curatedPageMap[list.id]
                ? this.curatedPageMap[list.id].map((p) => this.renderCPage(p))
                : html``}
            </ol>
          </div>
        </article>
      `,
    )}`;
  }

  renderCPage(p) {
    const date = new Date(p.ts);

    const ts = getTS(date.toISOString());

    return html` <li>
      <div class="content">
        <a
          @click="${this.onReplay}"
          data-url="${p.url}"
          data-ts="${ts}"
          href="${getReplayLink("story", p.url, ts)}"
        >
          <p class="is-size-6 has-text-weight-bold has-text-link">${p.title}</p>
          <p class="has-text-dark">${p.url}</p>
        </a>
        <p>${date.toLocaleString()}</p>
        <p>${p.desc}</p>
      </div>
      <hr />
    </li>`;
  }

  onReplay(event) {
    event.preventDefault();
    const data = {
      url: event.currentTarget.getAttribute("data-url"),
      ts: event.currentTarget.getAttribute("data-ts"),
    };
    this.sendChangeEvent(data);
    return false;
  }

  sendChangeEvent(data) {
    this.dispatchEvent(new CustomEvent("coll-tab-nav", { detail: { data } }));
  }

  onClickScroll(event) {
    event.preventDefault();
    //this.pageView = false;
    this.currList = Number(event.currentTarget.getAttribute("data-list"));
    this.scrollToList();
    return false;
  }

  scrollToList() {
    // lists are 1 based, 0 is header, 1 is first list
    // @ts-expect-error - TS2339 - Property 'currList' does not exist on type 'Story'. | TS2339 - Property 'collInfo' does not exist on type 'Story'.
    if (this.currList > this.collInfo.lists.length) {
      this.currList = 0;
    }

    const opts = { behavior: "smooth", block: "nearest", inline: "nearest" };
    this.clickTime = new Date().getTime();
    // @ts-expect-error - TS2339 - Property 'getElementById' does not exist on type 'HTMLElement | ShadowRoot'. | TS2339 - Property 'currList' does not exist on type 'Story'.
    const curr = this.renderRoot.getElementById("list-" + this.currList);
    if (curr) {
      curr.scrollIntoView(opts);
    }
  }

  onScroll(event) {
    const scrollable = event.currentTarget;
    // @ts-expect-error - TS2339 - Property 'getElementById' does not exist on type 'HTMLElement | ShadowRoot'. | TS2339 - Property 'currList' does not exist on type 'Story'.
    const curr = this.renderRoot.getElementById("list-" + this.currList);

    if (!curr) {
      return;
    }

    let next = curr;
    const target = scrollable.offsetTop;
    const currST = scrollable.scrollTop;

    if (currST > this.lastST) {
      while (
        next.nextElementSibling &&
        next.nextElementSibling.getBoundingClientRect().top < target
      ) {
        next = next.nextElementSibling;
      }
    } else {
      while (
        next.previousElementSibling &&
        next.previousElementSibling.getBoundingClientRect().bottom >= target
      ) {
        next = next.previousElementSibling;
      }
    }
    this.lastST = currST;
    if (next && next != curr) {
      if (next.id.startsWith("list-")) {
        this.currList = Number(next.id.slice(5));
      }
    }

    if (new Date().getTime() - this.clickTime < 1000) {
      return;
    }

    const sel = this.renderRoot.querySelector(
      `a[data-list="${this.currList}"]`,
    );
    if (sel) {
      const opts = { behavior: "smooth", block: "nearest", inline: "nearest" };
      // @ts-expect-error - TS2345 - Argument of type '{ behavior: string; block: string; inline: string; }' is not assignable to parameter of type 'boolean | ScrollIntoViewOptions | undefined'.
      sel.scrollIntoView(opts);
    }
  }
}

customElements.define("wr-coll-story", Story);

export { Story };
