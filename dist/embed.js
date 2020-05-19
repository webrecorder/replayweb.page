!function(t,e){for(var s in e)t[s]=e[s]}(self,function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/",s(s.s=107)}({0:function(t,e,s){"use strict";s.d(e,"c",(function(){return d.e})),s.d(e,"d",(function(){return N})),s.d(e,"b",(function(){return C})),s.d(e,"a",(function(){return E}));var n=s(5),r=s(1);function i(t,e){const{element:{content:s},parts:n}=t,r=document.createTreeWalker(s,133,null,!1);let i=a(n),o=n[i],c=-1,l=0;const u=[];let d=null;for(;r.nextNode();){c++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(u.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===c;)o.index=null!==d?-1:o.index-l,i=a(n,i),o=n[i]}u.forEach(t=>t.parentNode.removeChild(t))}const o=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},a=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(Object(r.d)(e))return s}return-1};var c=s(9),l=s(8),u=s(13),d=s(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const h=(t,e)=>`${t}--${e}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),p=!1);const f=t=>e=>{const s=h(e.type,t);let n=l.a.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},l.a.set(s,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(r.f);if(i=n.keyString.get(o),void 0===i){const s=e.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(s,t),i=new r.a(e,s),n.keyString.set(o,i)}return n.stringsArray.set(e.strings,i),i},m=["html","svg"],_=new Set,g=(t,e,s)=>{_.add(t);const n=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:c}=r;if(0===c)return void window.ShadyCSS.prepareTemplateStyles(n,t);const u=document.createElement("style");for(let t=0;t<c;t++){const e=r[t];e.parentNode.removeChild(e),u.textContent+=e.textContent}(t=>{m.forEach(e=>{const s=l.a.get(h(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),i(t,s)})})})(t);const d=n.content;s?function(t,e,s=null){const{element:{content:n},parts:r}=t;if(null==s)return void n.appendChild(e);const i=document.createTreeWalker(n,133,null,!1);let c=a(r),l=0,u=-1;for(;i.nextNode();){for(u++,i.currentNode===s&&(l=o(e),s.parentNode.insertBefore(e,s));-1!==c&&r[c].index===u;){if(l>0){for(;-1!==c;)r[c].index+=l,c=a(r,c);return}c=a(r,c)}}}(s,u,d.firstChild):d.insertBefore(u,d.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const p=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)e.insertBefore(p.cloneNode(!0),e.firstChild);else if(s){d.insertBefore(u,d.firstChild);const t=new Set;t.add(u),i(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},S=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:S};class b extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=v){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||v}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=S){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||y,r="function"==typeof n?n:n.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||y.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=v){const n=this.constructor,r=n._attributeNameForProperty(t,s);if(void 0!==r){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,r=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}b.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const w="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,x=Symbol();class P{constructor(t,e){if(e!==x)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(w?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const N=t=>new P(String(t),x),C=(t,...e)=>{const s=e.reduce((e,s,n)=>e+(t=>{if(t instanceof P)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1],t[0]);return new P(s,x)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const T={};class E extends b{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),n=[];s.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?w?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==T&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return T}}E.finalized=!0,E.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,i=c.a.has(e),o=p&&11===e.nodeType&&!!e.host,a=o&&!_.has(r),l=a?document.createDocumentFragment():e;if(Object(c.b)(t,l,Object.assign({templateFactory:f(r)},s)),a){const t=c.a.get(l);c.a.delete(l);const s=t.value instanceof u.a?t.value.template:void 0;g(r,l,s),Object(n.b)(e,e.firstChild),e.appendChild(l),c.a.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)}},1:function(t,e,s){"use strict";s.d(e,"f",(function(){return n})),s.d(e,"g",(function(){return r})),s.d(e,"b",(function(){return o})),s.d(e,"a",(function(){return a})),s.d(e,"d",(function(){return l})),s.d(e,"c",(function(){return u})),s.d(e,"e",(function(){return d}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${n}--\x3e`,i=new RegExp(`${n}|${r}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const s=[],r=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,h=-1,p=0;const{strings:f,values:{length:m}}=t;for(;p<m;){const t=a.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)c(e[t].name,o)&&n++;for(;n-- >0;){const e=f[p],s=d.exec(e)[2],n=s.toLowerCase()+o,r=t.getAttribute(n);t.removeAttribute(n);const a=r.split(i);this.parts.push({type:"attribute",index:h,name:s,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,r=e.split(i),a=r.length-1;for(let e=0;e<a;e++){let s,i=r[e];if(""===i)s=u();else{const t=d.exec(i);null!==t&&c(t[2],o)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),s=document.createTextNode(i)}n.insertBefore(s,t),this.parts.push({type:"node",index:++h})}""===r[a]?(n.insertBefore(u(),t),s.push(t)):t.data=r[a],p+=a}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&h!==l||(h++,e.insertBefore(u(),t)),l=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(s.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=r.pop()}for(const t of s)t.parentNode.removeChild(t)}}const c=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},l=t=>-1!==t.index,u=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},10:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,r=t=>(...e)=>{const s=t(...e);return n.set(s,!0),s},i=t=>"function"==typeof t&&n.has(t)},107:function(t,e,s){"use strict";s.r(e);var n=s(0);class r extends n.a{constructor(){super(),this.replayBase="http://localhost:9990/",this.view="replay",this.ts="",this.url="",this.config="",this.coll="",this.paramString=null,this.deepLink=!1}static get properties(){return{url:{type:String},ts:{type:String},source:{type:String},replayBase:{type:String},title:{type:String},coll:{type:String},config:{type:String},paramString:{type:String},hashString:{type:String},deepLink:{type:Boolean}}}firstUpdated(){window.addEventListener("message",t=>{const e=this.renderRoot.querySelector("iframe");if(e&&t.source===e.contentWindow){if(t.data.title&&(this.title=t.data.title),console.log(t.data),!this.deepLink)return;const e=new URLSearchParams({url:t.data.url,ts:t.data.ts});window.location.hash="#"+e.toString()}}),this.deepLink&&(this.updateFromHash(),window.addEventListener("hashchange",t=>this.updateFromHash()))}updateFromHash(){const t=new URLSearchParams(window.location.hash.slice(1));t.has("url")&&(this.url=t.get("url")),t.has("ts")&&(this.ts=t.get("ts"))}updated(t){(t.has("url")||t.has("ts")||t.has("source"))&&(this.paramString=new URLSearchParams({source:this.source,customColl:this.coll,config:this.config,embed:"true"}).toString(),this.hashString=new URLSearchParams({url:this.url,ts:this.ts,view:this.view}).toString())}static get styles(){return n.b`
      iframe {
        width: 100%;
        height: 100%;
        border: 0px;
        padding: 0px;
        margin: 0px;
      }
      :host {
        width: 100%;
        height: 100%;
      }
    `}render(){return n.c`
    ${this.paramString&&this.hashString?n.c`
      <iframe src="${this.replayBase}?${this.paramString}#${this.hashString}" allow="autoplay *; fullscreen"></iframe>
      `:n.c``}
    `}}!async function(){customElements.define("replay-web-page",r)}()},12:function(t,e,s){"use strict";s.d(e,"b",(function(){return o})),s.d(e,"a",(function(){return a}));var n=s(5),r=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=` ${r.f} `;class o{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const a=r.e.exec(t);e+=null===a?t+(s?i:r.g):t.substr(0,a.index)+a[1]+a[2]+r.b+a[3]+r.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class a extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),Object(n.c)(e,s.firstChild),t}}},13:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var n=s(5),r=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class i{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o,a=0,c=0,l=i.nextNode();for(;a<s.length;)if(o=s[a],Object(r.d)(o)){for(;c<o.index;)c++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return n.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},2:function(t,e,s){"use strict";s.d(e,"h",(function(){return l})),s.d(e,"a",(function(){return d})),s.d(e,"b",(function(){return h})),s.d(e,"e",(function(){return p})),s.d(e,"c",(function(){return f})),s.d(e,"f",(function(){return m})),s.d(e,"g",(function(){return _})),s.d(e,"d",(function(){return y}));var n=s(10),r=s(5),i=s(4),o=s(13),a=s(12),c=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l=t=>null===t||!("object"==typeof t||"function"==typeof t),u=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class d{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new h(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(l(t)||!u(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class h{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===i.a||l(t)&&t===this.value||(this.value=t,Object(n.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const t=this.value;this.value=i.a,t(this)}this.value!==i.a&&this.committer.commit()}}class p{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(c.c)()),t.__insert(this.endNode=Object(c.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.a,t(this)}const t=this.__pendingValue;t!==i.a&&(l(t)?t!==this.value&&this.__commitText(t):t instanceof a.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):u(t)?this.__commitIterable(t):t===i.b?(this.value=i.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const s=new o.a(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const r of t)s=e[n],void 0===s&&(s=new p(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(r),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){Object(r.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.a,t(this)}if(this.__pendingValue===i.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=i.a}}class m extends d{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new _(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class _ extends h{}let g=!1;(()=>{try{const t={get capture(){return g=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class y{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.a,t(this)}if(this.__pendingValue===i.a)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=S(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=i.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const S=t=>t&&(g?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},4:function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n={},r={}},5:function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"b",(function(){return i}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}},i=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}}},6:function(t,e,s){"use strict";s.d(e,"d",(function(){return o.a})),s.d(e,"a",(function(){return n.b})),s.d(e,"b",(function(){return n.e})),s.d(e,"c",(function(){return n.g})),s.d(e,"e",(function(){return a}));var n=s(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const r=new class{handleAttributeExpressions(t,e,s,r){const i=e[0];if("."===i){return new n.f(t,e.slice(1),s).parts}return"@"===i?[new n.d(t,e.slice(1),r.eventContext)]:"?"===i?[new n.c(t,e.slice(1),s)]:new n.a(t,e,s).parts}handleTextExpression(t){return new n.e(t)}};var i=s(12),o=s(10);s(5),s(4),s(9),s(8),s(13),s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const a=(t,...e)=>new i.b(t,e,"html",r)},8:function(t,e,s){"use strict";s.d(e,"b",(function(){return r})),s.d(e,"a",(function(){return i}));var n=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function r(t){let e=i.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},i.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const r=t.strings.join(n.f);return s=e.keyString.get(r),void 0===s&&(s=new n.a(t,t.getTemplateElement()),e.keyString.set(r,s)),e.stringsArray.set(t.strings,s),s}const i=new Map},9:function(t,e,s){"use strict";s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return a}));var n=s(5),r=s(2),i=s(8);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(t,e,s)=>{let a=o.get(e);void 0===a&&(Object(n.b)(e,e.firstChild),o.set(e,a=new r.e(Object.assign({templateFactory:i.b},s))),a.appendInto(e)),a.setValue(t),a.commit()}}}));