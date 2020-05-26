import { LitElement, html, css } from 'lit-element';
import { wrapCss } from './misc';

import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import marked from 'marked';

import { getTS } from './pageutils';



// ===========================================================================
class CuratedLists extends LitElement
{
  constructor() {
    super();

    this.active = false;

    this.collInfo = null;

    this.query = "";

    this.currList = "pages";

    this.lists = [];
    this.curatedPages = {};

    this.offset = 0;
    this.lastST = 0;
    this.clickTime = 0;

    this.hasNarrative = false;
  }

  static get properties() {
    return {
      active: { type: Boolean },

      collInfo: { type: Object },

      query: { type: String },

      lists: { type: Array },
      curatedPages: { type: Object },

      currList: { type: String },

      hasNarrative: { type: Boolean },
    }
  }

  firstUpdated() {
    //this.doLoadCurated();
  }

  updated(changedProperties) {
    if (changedProperties.has("collInfo")) {
      this.doLoadCurated();
    }

    if (changedProperties.has("currList") || changedProperties.has("query")) {
      this.sendChangeEvent({
        currList: this.currList,
        query: this.query
      });
    }
  }

  async doLoadCurated() {
    this.hasNarrative = this.collInfo.desc || this.collInfo.numLists;

    if (!this.collInfo.numLists) {
      this.total = 0;
      this.curatedPages = {};
      this.lists = [];
      this.currList = "pages";
      return;
    }

    const resp = await fetch(`${this.collInfo.apiPrefix}/curatedPages?offset=${this.offset}&count=10000`);
    const json = await resp.json();

    this.total = json.total;

    this.curatedPages = {};
    this.lists = json.lists;

    for (const curated of json.curatedPages) {
      if (!this.curatedPages[curated.list]) {
        this.curatedPages[curated.list] = [];
      }
      this.curatedPages[curated.list].push(curated);
    }

    this.scrollToList();
  }

  static get styles() {
    return wrapCss(css`
    :host {
      justify-content: flex-start;
      align-items: center;
    }

    .columns {
      width: 100%;
      justify-self: stretch;
    }

    .column.main-content {
      margin: 12px 0px 0px 0px;
      padding: 0px;
      max-height: calc(100% - 0.75em);
      display: flex;
      flex-direction: column;
      height: min-content;
      padding-left: 0.75em;
    }

    .column.main-content.main-scroll {
      padding-right: 0.75em;
      word-break: break-all;
    }
    .column.main-content.pages {
      height: calc(100% - 1.2em);
    }

    ul.menu-list a.is-active {
      background-color: #55be6f;
    }

    @media screen and (min-width: 768px) {
      .columns {
        max-height: 100%;
        height: 100%;
        margin-top: 0.75em;
      }

      .column.sidebar {
        max-height: 100%;
        overflow-y: auto;
      }
    }

    @media screen and (max-width: 767px) {
      .columns {
        position: relative;
        max-height: 100%;
        height: 100%;
      }

      .column.sidebar {
        max-height: 150px;
        overflow-y: auto;
        margin-top: 0.75em;
      }

      .column.main-content {
        position: relative;
        overflow-y: auto;

        border-top: 1px solid black;
        width: 100%;
        height: 100%;
        max-height: calc(100% - 150px - 0.75em);
      }

      .menu {
        font-size: 0.80rem;
      }
    }
    `);
  }

  render() {
    const currListNum = Number(this.currList);

    return html`

    <div class="columns">
      <div class="column sidebar is-one-fifth">
        <aside class="menu">
          <p class="menu-label">${this.collInfo.title}</p>
          <ul class="menu-list">
            <li><a class="${this.currList === 'pages' ? 'is-active' : ''}" data-list="all-pages" @click=${this.onClickPages}>Page Search</a></li>
          </ul>
          ${this.hasNarrative ? html`
            <ul class="menu-list">
              <li>
                <a href="#list-0" data-list="0" class="${currListNum === 0 ? 'is-active' : ''}"
                  @click=${this.onClickScroll}>Narrative</a>
                <ul class="menu-list">${this.lists.map(list => html`
                  <li>
                    <a @click=${this.onClickScroll} href="#list-${list.id}"
                    data-list="${list.id}" 
                    class="${currListNum === list.id ? 'is-active' : ''}">${list.title}</a>
                  </li>`)}
                </ul>
              </li>
            </ul>` : ``}
        </aside>
      </div>
      ${this.renderPages()}
      ${this.renderLists()}
    </div>
  `;
  }

  renderPages() {
    return html`
    <div class="column main-content pages ${this.currList === "pages" ? '' : 'is-hidden'}">
      <wr-page-view
      .active="${this.active && this.currList === "pages"}" 
      query="${this.query}" .collInfo="${this.collInfo}"
      @coll-tab-nav="${this.onCollTabNav}">
      </wr-page-view>
    </div>
    `;
  }

  onCollTabNav(event) {
    if (event.detail.data && event.detail.data.query !== undefined) {
      this.query = event.detail.data.query;
    }
  }

  renderLists() {
    if (!this.hasNarrative) {
      return;
    }

    return html`
    <div @scroll=${this.onScroll} class="${this.currList !== "pages" ? '' : 'is-hidden'} column main-content main-scroll">
      <section id="list-0" class="">
        <h2 class="has-text-centered title is-3">${this.collInfo.title}</h2>
        ${this.collInfo.desc ? unsafeHTML(marked(this.collInfo.desc)) : ''}
      </section>
      ${this.lists.map((list, i) => html`
      <article id="list-${list.id}">
        <div class="content">
          <hr/>
          <h3>${list.title}</h3>
          <p>${list.desc}</p>
          <ol style="margin-left: 30px">
            ${this.curatedPages[list.id] ? this.curatedPages[list.id].map((p) => html`
              <li>
                <div class="content">
                  <a @click="${this.onReplay}" data-url="${p.url}" data-ts="${getTS(p.date)}" href="#">
                    <p class="is-size-6 has-text-weight-bold has-text-link">${p.title || p.url}</p>
                    <p class="has-text-dark">${p.url}</p>
                  </a>
                  <p>${new Date(p.date).toLocaleString()}</p>
                  <p>${p.desc}</p>
                </div>
                <hr/>
              </li>
            `) : html``}
          </ol>
        </div>
      </article>
      `)}
    </div>
    `;
  }

  onReplay(event) {
    event.preventDefault();
    const data = {
      url: event.currentTarget.getAttribute("data-url"),
      ts: event.currentTarget.getAttribute("data-ts"),
      view: "replay"
    };
    this.sendChangeEvent(data);
    return false;
  }

  sendChangeEvent(data) {
    this.dispatchEvent(new CustomEvent("coll-tab-nav", {detail: {data}}));
  }

  onClickPages(event) {
    event.preventDefault();
    //this.pageView = true;
    this.currList = "pages";
    return false;
  }

  onClickScroll(event) {
    event.preventDefault();
    //this.pageView = false;
    this.currList = event.currentTarget.getAttribute("data-list");
    this.scrollToList();
    return false;
  }

  scrollToList() {
    if (this.currList === "pages") {
      return;
    }

    // lists are 1 based, 0 is header, 1 is first list
    if (Number(this.currList) > this.lists.length) {
      this.currList = "0";
    }

    const opts = {behavior: "smooth", block: "nearest", inline: "nearest"};
    this.clickTime = new Date().getTime();
    const curr = this.renderRoot.getElementById("list-" + this.currList);
    if (curr) {
      curr.scrollIntoView(opts);
    }
  }

  onScroll(event) {
    const scrollable = event.currentTarget;
    const curr = this.renderRoot.getElementById("list-" + this.currList);

    if (!curr) {
      return;
    }

    let next = curr;
    const target = scrollable.offsetTop;
    const currST = scrollable.scrollTop;

    if (currST > this.lastST) {
      while (next.nextElementSibling && next.nextElementSibling.getBoundingClientRect().top < target) {
        next = next.nextElementSibling;
      }
    } else {
      while (next.previousElementSibling && next.previousElementSibling.getBoundingClientRect().bottom >= target) {
        next = next.previousElementSibling;
      }
    }
    this.lastST = currST;
    if (next && next != curr) {
      if (next.id.startsWith("list-")) {
        this.currList = next.id.slice(5);
      }
    }

    if ((new Date().getTime() - this.clickTime) < 1000) {
      return;
    }

    const sel = this.renderRoot.querySelector(`a[data-list="${this.currList}"]`);
    if (sel) {
      const opts = {behavior: "smooth", block: "nearest", inline: "nearest"};
      sel.scrollIntoView(opts);
    }
  }
}

customElements.define("wr-coll-curated", CuratedLists);

export { CuratedLists };