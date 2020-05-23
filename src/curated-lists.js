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

    this.collInfo = null;

    this.currList = 0;

    this.curatedPages = {};

    this.offset = 0;
    this.lastST = 0;
    this.clickTime = 0;
  }

  static get properties() {
    return {
      collInfo: { type: Object },

      curatedPages: { type: Object },
      currList: { type: Number },
    }
  }

  firstUpdated() {
    //this.doLoadCurated();
  }

  updated(changedProperties) {
    if (changedProperties.has("collInfo")) {
      this.doLoadCurated();
    }
  }

  async doLoadCurated() {
    const resp = await fetch(`${this.collInfo.apiPrefix}/curatedPages?offset=${this.offset}&count=1000`);
    const json = await resp.json();

    this.total = json.total;

    this.curatedPages = {};

    for (const curated of json.curatedPages) {
      if (!this.curatedPages[curated.list]) {
        this.curatedPages[curated.list] = [];
      }
      this.curatedPages[curated.list].push(curated);
    }

    if (this.currList) {
      this.scrollToList(this.currList);
    }
  }

  static get styles() {
    return wrapCss(css`
    .columns {
      width: 100vw;
      display: flex;
      flex-direction: row;
      max-height: 100%
      align-items: flex-start;
      height: 100%;
    }

    .column {
      max-height: calc(100% - 70px);
    }

    #content {
      margin-top: 10px;
      max-height: calc(100% - 90px);
      display: flex;
      flex-direction: column;
      height: min-content;
    }

    ul.menu-list a.is-active {
      background-color: #55be6f;
    }

    :host {
      justify-content: flex-start;
      align-items: center;
      margin-top: 1em;
    }
    `);
  }

  render() {
    return html`
    <div class="columns">
      <div class="column is-one-third">
        <div class="menu" style="overflow-y: auto; height: 100%;">
          <ul class="menu-list">
            <li>
              <a href="#list-0" data-list="0" class="${!this.currList ? 'is-active' : ''}"
                @click=${this.onClickScroll}>${this.collInfo.title}</a>
              <ul class="menu-list">${this.collInfo.lists.map(list => html`
                <li>
                  <a @click=${this.onClickScroll} href="#list-${list.id}"
                  data-list="${list.id}" 
                  class="${this.currList === list.id ? 'is-active' : ''}">${list.title}</a>
                </li>`)}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div id="content" @scroll=${this.onScroll} class="is-two-thirds column main-scroll">
        <section id="list-0" class="container">
          <h2 class="title is-3">${this.collInfo.title}</h2>
          ${this.collInfo.desc ? unsafeHTML(marked(this.collInfo.desc)) : ''}
        </section>
        ${this.renderContent()}
      </div>
    </div>
  `;
  }

  renderContent() {
    return html`
    ${this.collInfo.lists.map((list, i) => html`
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

  onClickScroll(event) {
    event.preventDefault();
    this.scrollToList(event.currentTarget.getAttribute("data-list"));
    return false;
  }

  scrollToList(id) {
    this.currList = Number(id);

    // lists are 1 based, 0 is header, 1 is first list
    if (this.currList > this.collInfo.lists.length) {
      this.currList = 0;
    }
    
    this.sendChangeEvent({currList: this.currList || undefined});

    const opts = {behavior: "smooth", block: "nearest", inline: "nearest"};
    this.clickTime = new Date().getTime();
    this.renderRoot.getElementById("list-" + this.currList).scrollIntoView(opts);
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
        this.currList = Number(next.id.slice(5));
        this.sendChangeEvent({currList: this.currList});
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