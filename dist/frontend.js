!function(e,t){for(var s in t)e[s]=t[s]}(self,function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/",s(s.s=157)}({13:function(e,t){function s(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1},getDefaults:s,changeDefaults:function(t){e.exports.defaults=t}}},14:function(e,t){const s=/[&<>"']/,r=/[&<>"']/g,i=/[<>"']|&(?!#?\w+;)/,n=/[<>"']|&(?!#?\w+;)/g,a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},l=e=>a[e];const o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(e){return e.replace(o,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const h=/(^|[^\[])\^/g;const p=/[^\w:]/g,d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const u={},g=/^[^:]+:\/*[^/]*$/,f=/^([^:]+:)[\s\S]*$/,m=/^([^:]+:\/*[^/]*)[\s\S]*$/;function b(e,t){u[" "+e]||(g.test(e)?u[" "+e]=e+"/":u[" "+e]=y(e,"/",!0));const s=-1===(e=u[" "+e]).indexOf(":");return"//"===t.substring(0,2)?s?t:e.replace(f,"$1")+t:"/"===t.charAt(0)?s?t:e.replace(m,"$1")+t:e+t}function y(e,t,s){const r=e.length;if(0===r)return"";let i=0;for(;i<r;){const n=e.charAt(r-i-1);if(n!==t||s){if(n===t||!s)break;i++}else i++}return e.substr(0,r-i)}e.exports={escape:function(e,t){if(t){if(s.test(e))return e.replace(r,l)}else if(i.test(e))return e.replace(n,l);return e},unescape:c,edit:function(e,t){e=e.source||e,t=t||"";const s={replace:(t,r)=>(r=(r=r.source||r).replace(h,"$1"),e=e.replace(t,r),s),getRegex:()=>new RegExp(e,t)};return s},cleanUrl:function(e,t,s){if(e){let e;try{e=decodeURIComponent(c(s)).replace(p,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!d.test(s)&&(s=b(t,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch(e){return null}return s},resolveUrl:b,noopTest:{exec:function(){}},merge:function(e){let t,s,r=1;for(;r<arguments.length;r++)for(s in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},splitCells:function(e,t){const s=e.replace(/\|/g,(e,t,s)=>{let r=!1,i=t;for(;--i>=0&&"\\"===s[i];)r=!r;return r?"|":" |"}).split(/ \|/);let r=0;if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(/\\\|/g,"|");return s},rtrim:y,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const s=e.length;let r=0,i=0;for(;i<s;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}}},157:function(e,t,s){"use strict";s.r(t);
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
const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,s=null,r=null)=>{for(;t!==s;){const s=t.nextSibling;e.insertBefore(t,r),t=s}},n=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,o=new RegExp(`${a}|${l}`);class c{constructor(e,t){this.parts=[],this.element=t;const s=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let n=0,l=-1,c=0;const{strings:p,values:{length:g}}=e;for(;c<g;){const e=i.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let r=0;for(let e=0;e<s;e++)h(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=p[c],s=u.exec(t)[2],r=s.toLowerCase()+"$lit$",i=e.getAttribute(r);e.removeAttribute(r);const n=i.split(o);this.parts.push({type:"attribute",index:l,name:s,strings:n}),c+=n.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(a)>=0){const r=e.parentNode,i=t.split(o),n=i.length-1;for(let t=0;t<n;t++){let s,n=i[t];if(""===n)s=d();else{const e=u.exec(n);null!==e&&h(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(n)}r.insertBefore(s,e),this.parts.push({type:"node",index:++l})}""===i[n]?(r.insertBefore(d(),e),s.push(e)):e.data=i[n],c+=n}}else if(8===e.nodeType)if(e.data===a){const t=e.parentNode;null!==e.previousSibling&&l!==n||(l++,t.insertBefore(d(),e)),n=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(s.push(e),l--),c++}else{let t=-1;for(;-1!==(t=e.data.indexOf(a,t+1));)this.parts.push({type:"node",index:-1}),c++}}else i.currentNode=r.pop()}for(const e of s)e.parentNode.removeChild(e)}}const h=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},p=e=>-1!==e.index,d=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function g(e,t){const{element:{content:s},parts:r}=e,i=document.createTreeWalker(s,133,null,!1);let n=m(r),a=r[n],l=-1,o=0;const c=[];let h=null;for(;i.nextNode();){l++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&o++;void 0!==a&&a.index===l;)a.index=null!==h?-1:a.index-o,n=m(r,n),a=r[n]}c.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},m=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(p(t))return s}return-1};
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
const b=new WeakMap,y=e=>(...t)=>{const s=e(...t);return b.set(s,!0),s},w=e=>"function"==typeof e&&b.has(e),v={},x={};
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
class k{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,a=0,l=0,o=i.nextNode();for(;a<s.length;)if(n=s[a],p(n)){for(;l<n.index;)l++,"TEMPLATE"===o.nodeName&&(t.push(o),i.currentNode=o.content),null===(o=i.nextNode())&&(i.currentNode=t.pop(),o=i.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(o,n.name,n.strings,this.options));a++}else this.__parts.push(void 0),a++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const _=` ${a} `;class S{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let r=0;r<e;r++){const e=this.strings[r],i=e.lastIndexOf("\x3c!--");s=(i>-1||s)&&-1===e.indexOf("--\x3e",i+1);const n=u.exec(e);t+=null===n?e+(s?_:l):e.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+a}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const $=e=>null===e||!("object"==typeof e||"function"==typeof e),T=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let r=0;r<t;r++){s+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if($(e)||!T(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||$(e)&&e===this.value||(this.value=e,w(e)||(this.committer.dirty=!0))}commit(){for(;w(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class z{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&($(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):T(e)?this.__commitIterable(e):e===x?(this.value=x,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof k&&this.value.template===t)this.value.update(e.values);else{const s=new k(t,e.processor,this.options),r=s._clone();s.update(e.values),this.__commitNode(r),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,r=0;for(const i of e)s=t[r],void 0===s&&(s=new z(this.options),t.push(s),0===r?s.appendIntoPart(this):s.insertAfterPart(t[r-1])),s.setValue(i),s.commit(),r++;r<t.length&&(t.length=r,this.clear(s&&s.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class U{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class A extends C{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends P{}let R=!1;(()=>{try{const e={get capture(){return R=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class I{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;w(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=L(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const L=e=>e&&(R?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function N(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(a);return s=t.keyString.get(r),void 0===s&&(s=new c(e,e.getTemplateElement()),t.keyString.set(r,s)),t.stringsArray.set(e.strings,s),s}const M=new Map,O=new WeakMap;
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
 */const D=new
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
class{handleAttributeExpressions(e,t,s,r){const i=t[0];if("."===i){return new A(e,t.slice(1),s).parts}return"@"===i?[new I(e,t.slice(1),r.eventContext)]:"?"===i?[new U(e,t.slice(1),s)]:new C(e,t,s).parts}handleTextExpression(e){return new z(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const j=(e,...t)=>new S(e,t,"html",D),V=(e,t)=>`${e}--${t}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const B=e=>t=>{const s=V(t.type,e);let r=M.get(s);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},M.set(s,r));let i=r.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(a);if(i=r.keyString.get(n),void 0===i){const s=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,e),i=new c(t,s),r.keyString.set(n,i)}return r.stringsArray.set(t.strings,i),i},W=["html","svg"],H=new Set,Z=(e,t,s)=>{H.add(e);const r=s?s.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(r,e);const a=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{W.forEach(t=>{const s=M.get(V(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),g(e,s)})})})(e);const l=r.content;s?function(e,t,s=null){const{element:{content:r},parts:i}=e;if(null==s)return void r.appendChild(t);const n=document.createTreeWalker(r,133,null,!1);let a=m(i),l=0,o=-1;for(;n.nextNode();){for(o++,n.currentNode===s&&(l=f(t),s.parentNode.insertBefore(t,s));-1!==a&&i[a].index===o;){if(l>0){for(;-1!==a;)i[a].index+=l,a=m(i,a);return}a=m(i,a)}}}(s,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const o=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==o)t.insertBefore(o.cloneNode(!0),t.firstChild);else if(s){l.insertBefore(a,l.firstChild);const e=new Set;e.add(a),g(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:G};class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const r=this._attributeNameForProperty(s,t);void 0!==r&&(this._attributeToPropertyMap.set(r,s),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,s,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this._requestUpdate(e,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=G){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,r=t.converter||F,i="function"==typeof r?r:r.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,r=t.converter;return(r&&r.toAttribute||F.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=J){const r=this.constructor,i=r._attributeNameForProperty(e,s);if(void 0!==i){const e=r._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,r=s._attributeToPropertyMap.get(e);if(void 0!==r){const e=s.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const r=this.constructor,i=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Y.finalized=!0;
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
const X="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const s=t.reduce((t,s,r)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[r+1],e[0]);return new Q(s,K)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const te={};class se extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),r=[];s.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}se.finalized=!0,se.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,i=O.has(t),a=q&&11===t.nodeType&&!!t.host,l=a&&!H.has(r),o=l?document.createDocumentFragment():t;if(((e,t,s)=>{let r=O.get(t);void 0===r&&(n(t,t.firstChild),O.set(t,r=new z(Object.assign({templateFactory:N},s))),r.appendInto(t)),r.setValue(e),r.commit()})(e,o,Object.assign({templateFactory:B(r)},s)),l){const e=O.get(o);O.delete(o);const s=e.value instanceof k?e.value.template:void 0;Z(r,o,s),n(t,t.firstChild),t.appendChild(o),O.set(t,e)}!i&&a&&window.ShadyCSS.styleElement(t.host)};
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
const re=new WeakMap,ie=y(e=>t=>{if(!(t instanceof z))throw new Error("unsafeHTML can only be used in text bindings");const s=re.get(t);if(void 0!==s&&$(e)&&e===s.value&&t.value===s.fragment)return;const r=document.createElement("template");r.innerHTML=e;const i=document.importNode(r.content,!0);t.setValue(i),re.set(t,{value:e,fragment:i})}),ne=new WeakMap,ae=y(e=>t=>{if(!(t instanceof z))throw new Error("unsafeSVG can only be used in text bindings");const s=ne.get(t);if(void 0!==s&&$(e)&&e===s.value&&t.value===s.fragment)return;const r=document.createElement("template");r.innerHTML=`<svg>${e}</svg>`;const n=r.content,a=n.firstChild;n.removeChild(a),i(n,a.firstChild);const l=document.importNode(n,!0);t.setValue(l),ne.set(t,{value:e,fragment:l})}),le=new WeakMap,oe=y(e=>t=>{if(!(t instanceof P)||t instanceof E||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:s}=t,{style:r}=s.element;let i=le.get(t);void 0===i&&(r.cssText=s.strings.join(" "),le.set(t,i=new Set)),i.forEach(t=>{t in e||(i.delete(t),-1===t.indexOf("-")?r[t]=null:r.removeProperty(t))});for(const t in e)i.add(t),-1===t.indexOf("-")?r[t]=e[t]:r.setProperty(t,e[t])});var ce=s(35),he=s.n(ce),pe=s(62),de=s.n(pe),ue=(s(80),s(63)),ge=s.n(ue),fe=s(64),me=s.n(fe),be=s(65),ye=s.n(be),we=s(66),ve=s.n(we),xe=s(67),ke=s.n(xe),_e=s(68),Se=s.n(_e);class $e extends se{constructor(){super(),this.sourceUrl=null,this.pageParams={}}static get properties(){return{pageParams:{type:Object},sourceUrl:{type:String}}}static get styles(){return ee`
    #logo {
      max-height: 2.5rem;
      margin-right: 8px;
    }
    .has-allcaps {
      font-variant-caps: all-small-caps;
    }
    `}render(){return j`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <div class="container" style="display: sticky">
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item has-text-weight-bold is-size-5 has-allcaps " href="/">
        <img id="logo" src="/static/logo.svg"/>
        <span class="has-text-primary">replay</span>
        <span class="has-text-info">web.page</span>
      </a>
      <a class="navbar-item" href="https://webrecorder.net/">
      <span class=""><small>A <span class="font-ssp">Webrecorder</span> Project</small></span>
      </a>
    </div>
  </nav>
  </div>
    ${this.sourceUrl?j`
      <wr-coll .loadInfo="${this.loadInfo}"
      sourceUrl="${this.sourceUrl}"
      @coll-loaded=${this.onCollLoaded}></wr-coll>
    `:""===this.sourceUrl?j`
      <wr-index @load-start=${this.onStartLoad}></wr-index>`:j``}
    `}firstUpdated(){this.initRoute()}initRoute(){this.pageParams=new URLSearchParams(window.location.search);let e=this.pageParams.get("state");if(e)try{if(e=JSON.parse(e),e.ids instanceof Array&&e.userId&&"open"===e.action)return this.pageParams.set("source","googledrive://"+e.ids[0]),this.pageParams.delete("state"),void(window.location.search=this.pageParams.toString())}catch(e){console.log(e)}this.sourceUrl=this.pageParams.get("source")||""}onStartLoad(e){if(!e.detail.blobUrl)return this.pageParams.set("source",e.detail.sourceUrl),void(window.location.search=this.pageParams.toString());this.sourceUrl=e.detail.sourceUrl,this.loadInfo=e.detail}onCollLoaded(e){this.loadInfo=null,this.initRoute(),e.detail.sourceUrl!==this.sourceUrl&&(this.pageParams.set("source",e.detail.sourceUrl),window.location.search=this.pageParams.toString())}}class Te extends se{constructor(){super(),this.progress=0,this.total=0,this.percent=0,this.coll="",this.state="waiting",this.loadInfo=null,this.worker=new Worker("./sw.js")}static get properties(){return{sourceUrl:{type:String},loadInfo:{type:Object},state:{type:String},progress:{type:Number},percent:{type:Number},error:{type:String},total:{type:Number},status:{type:String},coll:{type:String}}}firstUpdated(e){this.initMessages(),this.doLoad()}initMessages(){this.worker.addEventListener("message",e=>{switch(e.data.msg_type){case"collProgress":e.data.name===this.coll&&(this.percent=e.data.percent,e.data.error&&(this.error=e.data.error,this.state="errored"));break;case"collAdded":e.data.name===this.coll&&(this.total||(this.total=100),this.progress=this.total,this.percent=100,this.dispatchEvent(new CustomEvent("coll-loaded",{detail:e.data})))}})}async doLoad(){let e=this.sourceUrl,t=null;try{const s=new URL(this.sourceUrl);let r=null;switch(s.host||(r=s.pathname.indexOf("/",2)),s.protocol){case"googledrive:":this.state="googledrive",r<0&&(r=void 0),this.fileId=s.pathname.slice(2,r),t=await this.googledriveInit();break;case"s3:":e=`https://${s.pathname.slice(2,r)}.s3.amazonaws.com${s.pathname.slice(r)}`,t={sourceUrl:e,sourceId:this.sourceUrl,name:this.sourceUrl};break;case"file:":if(!this.loadInfo)return this.state="errored",void(this.error="File URLs are local and can not be shared. You can choose a file to upload from the main page.");t={sourceUrl:this.loadInfo.blobUrl,sourceId:this.loadInfo.name,name:this.loadInfo.name}}}catch(e){}t||(t={sourceUrl:e}),this.state="started";const s={msg_type:"addColl",name:this.coll,skipExisting:!0,file:t};this.worker.postMessage(s)}googledriveInit(){return this._gdWait=new Promise(e=>this._gdResolve=e),this._gdWait}async onLoadReady(e){this._gdResolve&&this._gdResolve(e.detail)}updated(e){e.get("sourceUrl")&&this.doLoad()}static get styles(){return ee`
      .logo {
        width: 96px;
        height: 96px;
        margin: 1em;
      }
    `}render(){return j`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <section class="container">
    <div class="level">
    <img class="level-item logo" src="/static/logo.svg"/>
  </div>
      <div class="level">
        <p class="level-item">Loading&nbsp;<b>${this.sourceUrl}</b>...</p>
      </div>
      <div class="level">
        <div class="level-item has-text-centered">
        ${this.renderContent()}
        </div>
      </div>
    </section>
    `}renderContent(){switch(this.state){case"googledrive":return j`<wr-gdrive .fileId=${this.fileId} @load-ready=${this.onLoadReady}/>`;case"started":return j`
          <progress class="progress is-primary is-large" 
          data-percent="${this.percent}" value="${this.percent}" max="100"
          style="max-width: 400px"/>`;case"errored":return j`<div class="has-text-danger">${this.error}</div>`;case"waiting":default:return j`<progress class="progress is-primary is-large" style="max-width: 400px"/>`}}}class Ce extends se{constructor(){super(),this.colls=[],this.fileDisplayName="",this.file=null}static get properties(){return{colls:{type:Array},fileDisplayName:{type:String}}}firstUpdated(){this.loadColls()}async loadColls(){const e=await fetch("/wabac/api/index"),t=await e.json();this.colls=t.colls}async deleteColl(e){e.preventDefault();const t=Number(e.currentTarget.getAttribute("data-coll-index")),s=this.colls[t];if(!s||s.deleting)return;this.colls[t].deleting=!0;const r=await fetch("/wabac/api/"+s.id,{method:"DELETE"});if(200===r.status){const e=await r.json();this.colls=e.colls}return!1}onChooseFile(e){0!==e.currentTarget.files.length&&(this.file=e.currentTarget.files[0],this.fileDisplayName="file://"+this.file.name,this.requestUpdate())}onStartLoad(e){e.preventDefault();const t={sourceUrl:this.fileDisplayName};return this.file&&(t.blobUrl=URL.createObjectURL(this.file),t.name=this.fileDisplayName),this.dispatchEvent(new CustomEvent("load-start",{detail:t})),!1}onInput(e){this.fileDisplayName=e.currentTarget.value,this.file&&this.fileDisplayName&&this.fileDisplayName.startsWith("file://")&&(this.file=null,this.fileDisplayName="")}static get styles(){return ee`
    .size {
      margin-right: 20px;
    }
    .extra-padding {
      padding: 2em;
    }
    .no-top-padding {
      padding-top: 1.0em;
    }
    div.field.has-addons {
      flex: auto;
    }
    `}render(){return j`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <section class="section no-top-padding">
      <div class="container">
        <nav class="panel is-info">
          <p class="panel-heading">Add Web Archive</p>
          <div class="extra-padding panel-block file has-name">
            <form class="container" @submit="${this.onStartLoad}">
              <label class="file-label">
                <input class="file-input"
                  @click="${e=>e.currentTarget.value=null}"
                  @change=${this.onChooseFile} type="file" id="fileupload" name="fileupload">
                <span class="file-cta">
                  <span class="file-icon">
                    <fa-icon size="0.9em" .svg=${Se.a}></fa-icon>
                  </span>
                  <span class="file-label">
                    Choose File...
                  </span>
                </span>
                <div class="field has-addons">
                  <p class="control is-expanded">
                    <input style="max-width: 100%" class="file-name input" type="text"
                    name="filename"
                    .value="${this.fileDisplayName}"
                    @input="${this.onInput}"
                    autocomplete="off"
                    placeholder="Choose a local file or enter a URL for a (WARC, HAR, WBN, or WAZ) archive">
                  </p>
                  <div class="control">
                    <button type="submit" class="button is-primary">Replay!</button>
                  </div>
                </div>
              </label>
            </form>
          </div>
        </nav>
      </div>
    </section>
    <section class="container">
      <nav class="panel">
        <p class="panel-heading">Replayable Archive Collections</p>
        ${this.colls.map((e,t)=>j`
          <div class="panel-block">
            <div class="level" style="width: 100%">
              <div class="level-left">
                <div>
                  <span class="subtitle"><a href="?source=${e.sourceId}">${e.title||e.displayName}</a></span>
                  <p><i>Source: ${e.displayName}</i></p>
                </div>
              </div>
              <div class="level-right">
                  <span class="size">Size: ${he()(Number(e.size||0))}</span>
                  <a data-coll-index="${t}" @click="${this.deleteColl}" class="delete"></a>
              </div>
          </div>
        `)}
      </nav>
    </section>
    `}}class Pe extends se{constructor(){super(),this.sourceUrl=null,this.baseApiPrefix="/wabac/api",this.baseReplayPrefix="/wabac",this.apiPrefix="",this.replayPrefix="",this.coll="",this.collInfo=null,this.hasCurated=!1,this.tabData={}}static get properties(){return{sourceUrl:{type:String},loadInfo:{type:Object},collInfo:{type:Object},coll:{type:String},hasCurated:{type:Boolean},tabData:{type:Object}}}firstUpdated(){this.doUpdateInfo(),window.addEventListener("hashchange",e=>this.onHashChange(e))}async sourceToId(e){try{e=new URL(e,window.location.origin).href}catch(e){}return{url:e,coll:"id-"+(await async function(e,t){const s=(new TextEncoder).encode(e),r=await crypto.subtle.digest(t,s);return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,"0")).join("")}(e,"SHA-256")).slice(0,12)}}updated(e){if(e.get("sourceUrl")&&this.doUpdateInfo(),e.get("tabData")){if(this.collInfo&&!this.collInfo.coll)return;Object.keys(this.tabData).forEach(e=>!this.tabData[e]&&delete this.tabData[e]),window.location.hash="#"+new URLSearchParams(this.tabData).toString()}}async doUpdateInfo(){const{url:e,coll:t}=await this.sourceToId(this.sourceUrl);this.coll=t;const s=this.baseApiPrefix+"/"+t,r=this.baseReplayPrefix+"/"+t,i=await fetch(s);if(200!=i.status)return this.collInfo={},void(this.hasCurated=!1);const n=await i.json();this.collInfo={apiPrefix:s,replayPrefix:r,coll:t,...n},this.collInfo.title||(this.collInfo.title="Archive from "+this.collInfo.displayName),this.hasCurated=this.collInfo.lists&&this.collInfo.lists.length;const a=window.location.hash;a&&(this.tabData=Object.fromEntries(new URLSearchParams(a.slice(1)).entries())),this.collInfo.coll&&!this.tabData.currTab&&(this.tabData={...this.tabData,currTab:this.hasCurated?"curated":"resources"})}onCollLoaded(e){this.doUpdateInfo(),this.loadInfo=null,this.dispatchEvent(new CustomEvent("coll-loaded",{detail:{sourceUrl:this.sourceUrl}}))}onHashChange(e){const t=window.location.hash;t&&t!==this._lastHash&&(this.tabData=Object.fromEntries(new URLSearchParams(t.slice(1)).entries()),this._lastHash=t)}onTabClick(e){e.preventDefault();const t=e.currentTarget.getAttribute("href");return this.tabData={...this.tabData,currTab:t.slice(1)},!1}onCollTabNav(e){this.tabData={...this.tabData,...e.detail}}static get styles(){return ee`
    .icon {
      vertical-align: text-top;
    }
    .back fa-icon {
      width: 1.5em;
      vertical-align: bottom;
      line-height: 0.5em;
    }
    .is-active {
      font-weight: bold;
    }
    .header-info {
      font-size: initial;
      font-weight: initial;
      margin-right: 20px;
    }
    `}render(){return j`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    ${this.renderColl()}
    `}renderColl(){return this.collInfo&&!this.collInfo.coll?j`<wr-loader .loadInfo="${this.loadInfo}" .coll="${this.coll}" .sourceUrl="${this.sourceUrl}" @coll-loaded=${this.onCollLoaded}></wr-loader>`:this.collInfo?j`
      <nav class="panel is-light">
        <div class="panel-heading">
          <a href="/" class="back">
            <fa-icon size="1.3em" .svg="${ge.a}"></fa-icon>
          </a>
          <span>${this.collInfo.title}</span>
          <a @click="${this.deleteColl}" class="is-pulled-right delete"></a>
          <span class="header-info is-pulled-right">Size: ${he()(Number(this.collInfo.size||0))}</span>
        </div>
        <p class="panel-tabs is-boxed">
          ${this.hasCurated?j`
            <a @click="${this.onTabClick}" href="#curated"
            class="is-size-6 ${"curated"===this.tabData.currTab?"is-active":""}">
            <span class="icon"><fa-icon .svg="${me.a}"></fa-icon></span>
            Curated Pages</a>
          `:""}

          <a @click="${this.onTabClick}" href="#resources"
          class="is-size-6 ${"resources"===this.tabData.currTab?"is-active":""}">
          <span class="icon"><fa-icon .svg="${ye.a}"></fa-icon></span>URL Resources</a>

          ${this.tabData.replayUrl?j`
            <a @click="${this.onTabClick}" href="#replay"
            class="is-size-6 ${"replay"===this.tabData.currTab?"is-active":""}">
            <span class="icon"><fa-icon .svg="${ve.a}"></fa-icon></fa-icon></span>Replay!</a>
          `:""}

        </p>
        ${this.renderCollTabs()}
      </nav>`:j``}renderCollTabs(){return j`
    <wr-coll-curated .collInfo="${this.collInfo}"
    currList="${this.tabData.currList||0}"
    @coll-tab-nav="${this.onCollTabNav}" id="curated" class="panel-block ${"curated"===this.tabData.currTab?"":"is-hidden"}">
    </wr-coll-curated>

    <wr-coll-resources .collInfo="${this.collInfo}"
    urlSearch="${this.tabData.urlSearch||""}"
    urlSearchType="${this.tabData.urlSearchType||""}"
    currMime="${this.tabData.currMime||"text/html,text/xhtml"}"
    @coll-tab-nav="${this.onCollTabNav}" id="resources" class="panel-block is-paddingless ${"resources"===this.tabData.currTab?"":"is-hidden"}">
    </wr-coll-resources>

    ${"replay"===this.tabData.currTab?j`
    <wr-replay-page .collInfo="${this.collInfo}" replayUrl="${this.tabData.replayUrl}" replayTS="${this.tabData.replayTS}">
    </wr-replay-page>
    `:""}
    `}}class ze extends se{constructor(){super(),this.collInfo=null,this.currList=0,this.curatedPages={},this.offset=0,this.lastST=0,this.clickTime=0}static get properties(){return{collInfo:{type:Object},curatedPages:{type:Object},currList:{type:Number}}}firstUpdated(){this.doLoadCurated()}updated(e){e.get("collInfo")&&this.doLoadCurated()}async doLoadCurated(){const e=await fetch(`${this.collInfo.apiPrefix}/curatedPages?offset=${this.offset}`),t=await e.json();this.total=t.total,this.curatedPages={};for(const e of t.curatedPages)this.curatedPages[e.list]||(this.curatedPages[e.list]=[]),this.curatedPages[e.list].push(e);this.currList&&this.scrollToList(this.currList)}static get styles(){return ee`
    .column {
      max-height: calc(100vh - 145px);
    }

    #content {
      margin-top: 10px;
      max-height: calc(100vh - 155px);
    }
    `}render(){return j`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <div class="columns">
      <div class="column is-one-third">
        <div class="menu" style="overflow-y: auto; height: 100%;">
          <ul class="menu-list">
            <li>
              <a href="#list-0" class="${this.currList?"":"is-active"}"
                @click=${this.onClickScroll}>${this.collInfo.title}</a>
              <ul class="menu-list">${this.collInfo.lists.map(e=>j`
                <li>
                  <a @click=${this.onClickScroll} href="#list-${e.id}"
                  data-list="${e.id}" 
                  class="${this.currList===e.id?"is-active":""}">${e.title}</a>
                </li>`)}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div id="content" @scroll=${this.onScroll} class="column main-scroll">
        <section id="list-0" class="container">
          <h2 class="title is-3">${this.collInfo.title}</h2>
          ${this.collInfo.desc?ie(de()(this.collInfo.desc)):""}
        </section>
        ${this.renderContent()}
      </div>
    </div>
  `}renderContent(){return j`
    ${this.collInfo.lists.map((e,t)=>j`
      <article id="list-${e.id}" class="media content">
        <div class="media-content">
          <div class="content"><p class="subtitle is-4">${e.title}</p></div>
          <hr/>
          <div class="content">${e.desc}</div>
          <ol style="margin-left: 30px">
            ${this.curatedPages[e.id]?this.curatedPages[e.id].map(e=>{return j`
              <li><article class="media">
                <div class="media-content">
                  <a @click="${this.onReplay}" data-url="${e.url}" data-ts="${t=e.date,t.replace(/[-:T]/g,"").slice(0,14)}" href="#">
                    <p>${e.title}</p>
                    <p>${e.url}</p>
                  </a>
                  <p>${e.date}</p>
                  <p>${e.desc}</p>
                </div>
              </article></li>
            `;var t}):j``}
          </ol>
        </div>
      </article>
      `)}
    `}onReplay(e){e.preventDefault();const t={replayUrl:e.currentTarget.getAttribute("data-url"),replayTS:e.currentTarget.getAttribute("data-ts"),currTab:"replay"};return this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:t})),!1}onClickScroll(e){return e.preventDefault(),this.scrollToList(e.currentTarget.getAttribute("data-list")),!1}scrollToList(e){this.currList=Number(e),this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{currList:this.currList||void 0}}));this.clickTime=(new Date).getTime(),this.renderRoot.getElementById("list-"+this.currList).scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}onScroll(e){const t=e.currentTarget,s=this.renderRoot.getElementById("list-"+this.currList);if(!s)return;let r=s;const i=t.offsetTop,n=t.scrollTop;if(n>this.lastST)for(;r.nextElementSibling&&r.nextElementSibling.getBoundingClientRect().top<i;)r=r.nextElementSibling;else for(;r.previousElementSibling&&r.previousElementSibling.getBoundingClientRect().bottom>=i;)r=r.previousElementSibling;if(this.lastST=n,r&&r!=s&&r.id.startsWith("list-")&&(this.currList=Number(r.id.slice(5)),this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:{currList:this.currList}}))),(new Date).getTime()-this.clickTime<1e3)return;const a=this.renderRoot.querySelector(`a[data-list="${this.currList}"]`);if(a){const e={behavior:"smooth",block:"nearest",inline:"nearest"};a.scrollIntoView(e)}}}class Ue extends se{constructor(){super(),this.collInfo=null,this.currMime="text/html,text/xhtml",this.urlSearch="",this.urlSearchType="",this.filteredResults=[],this.results=[],this.tryMore=!1,this.loading=!1,this.filters=[{name:"HTML",filter:"text/html,text/xhtml"},{name:"Images",filter:"image/"},{name:"Audio/Video",filter:"audio/,video/"},{name:"PDF",filter:"application/pdf"},{name:"All",filter:""}]}static get properties(){return{collInfo:{type:Object},currMime:{type:String},urlSearch:{type:String},urlSearchType:{type:String},filteredResults:{type:Array},loading:{type:Boolean}}}firstUpdated(){this.doLoadResources()}async doLoadResources(){this.loading=!0;let e="contains"!==this.urlSearchType?this.urlSearch:"";const t=e&&"prefix"===this.urlSearchType?1:0;e&&!e.startsWith("http")&&(e="https://"+e);const s={urlSearch:this.urlSearch,currMime:this.currMime,urlSearchType:this.urlSearchType},r=new URLSearchParams({mime:this.currMime,url:e,prefix:t,count:100}).toString();let i=await fetch(`${this.collInfo.apiPrefix}/urls?${r}`);i=await i.json(),this.results=i.urls,this.tryMore=100===i.urls.length,this.filter(),this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:s})),this.loading=!1}async doLoadMore(){if(!this.tryMore||!this.results.length)return;if(this.loading)return;this.loading=!0;const e="contains"!==this.urlSearchType?this.urlSearch:"",t=e&&"prefix"===this.urlSearchType?1:0,s=this.results[this.results.length-1],r=new URLSearchParams({mime:this.currMime,url:e,prefix:t,fromMime:s.mime,fromUrl:s.url,fromTs:new Date(s.date).getTime(),count:100}).toString();let i=await fetch(`${this.collInfo.apiPrefix}/urls?${r}`);i=await i.json(),this.results=this.results.concat(i.urls),this.tryMore=100===i.urls.length,this.filter(),this.loading=!1}onChangeTypeSearch(e){this.currMime=e.currentTarget.value,this.doLoadResources()}onChangeUrlSearch(e){this.urlSearch=e.currentTarget.value,this.doLoadResources()}onClickUrlType(e){this.urlSearchType=e.currentTarget.value,this.doLoadResources()}filter(){const e=[],t="contains"===this.urlSearchType?this.urlSearch:"";for(const s of this.results)(!t||s.url.indexOf(t)>=0)&&e.push(s);this.filteredResults=e}onScroll(e){const t=e.currentTarget,s=t.scrollHeight-t.scrollTop-t.clientHeight;this.tryMore&&s<40&&this.doLoadMore()}static get styles(){return ee`
    :host {
      display: flex;
      flex-direction: column;
    }
    .notification {
      width: 100%;
    }
    .main-scroll {
      max-height: calc(100vh - 255px);
      width: 100vw;
    }
    table {
      table-layout: fixed;
      word-wrap: break-word;
      text-overflow: ellipsis;
    }
    tbody > tr {
      display: table;
      width: 100%;
    }
    .col-url {
      width: 66%;
      max-width: 66%;
      min-width: 66%;
      word-break: break-word;
    }
    .col-ts {
      width: 16%;
      max-width: 16%;
      min-width: 16%;
      word-break: break-word;
    }
    td.col-mime {
      width: 10%;
      word-break: break-word;
    }
    td.col-status {
      text-align: center;
    }
    .loading-cog {
      width: 100vw;
      display: flex;
    }
    .flex-column {
      display: flex;
      flex: auto;
      max-width: 80%;
      flex-direction: column;
    }
    .flex-auto {
      flex: auto;
    }
    `}render(){return j`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <div class="notification level is-marginless">
      <div class="level-left flex-auto">
        <div class="field flex-column">
          <div class="control ${this.loading?"is-loading":""}">
            <input type="text" class="input" @input="${this.onChangeUrlSearch}" value="${this.urlSearch}" type="text" placeholder="Search URL">
          </div>
          <div class="control">
            <label class="radio has-text-left"><input type="radio" name="urltype" value="exact" ?checked="${""===this.urlSearchType}" @click="${this.onClickUrlType}">&nbsp;Exact</label>
            <label class="radio has-text-left"><input type="radio" name="urltype" value="prefix" ?checked="${"prefix"===this.urlSearchType}" @click="${this.onClickUrlType}">&nbsp;Prefix</label>
            <label class="radio has-text-left"><input type="radio" name="urltype" value="contains" ?checked="${"contains"===this.urlSearchType}" @click="${this.onClickUrlType}">&nbsp;Contains</label>
            <span class="is-pulled-right" style="margin-left: 1em">Showing ${this.filteredResults.length} Results</span>
          </div>
        </div>
      </div>
      <div class="control level-right">
        <span>Resource Type:&nbsp;&nbsp;</span>
        ${this.filters.map(e=>j`
        <label class="radio has-text-left">
          <input type="radio" name="mime"
          value="${e.filter}"
          @click="${this.onChangeTypeSearch}"
          ?checked="${e.filter===this.currMime}"
          >
          ${e.name}
        </label>
        `)}
      </div>
    </div>
    <div class="" style="">
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th class="col-url">URL</th>
            <th class="col-ts">Timestamp</th>
            <th class="col-mime">Mime</th>
            <th class="col-status">Status</th>
          </tr>
        </thead>
        <tbody class="main-scroll" @scroll="${this.onScroll}">
        ${this.filteredResults.length?this.filteredResults.map(e=>j`
            <tr>
              <td class="col-url"><a @click="${this.onReplay}" data-url="${e.url}" data-ts="${e.ts}" href="#">${e.url}</a></td>
              <td class="col-ts">${new Date(e.date).toLocaleString()}</td>
              <td class="col-mime">${e.mime}</td>
              <td class="col-status">${e.status}</td>
            </tr>
          `):j`<div class="section"><i>No Results Found.</i></div>`}
        </tbody>
      </table>
    </div>
    `}onReplay(e){e.preventDefault();const t={replayUrl:e.currentTarget.getAttribute("data-url"),replayTS:e.currentTarget.getAttribute("data-ts"),currTab:"replay"};return this.dispatchEvent(new CustomEvent("coll-tab-nav",{detail:t})),!1}}class Ae extends se{static get properties(){return{collInfo:{type:Object},replayUrl:{type:String},replayTS:{type:String}}}static get styles(){return ee`
      host: {
        display: flex;
      }

      iframe {
        width: 100vw;
        height: calc(100vh - 150px);
      }
    `}render(){return j`
    <iframe src="${this.collInfo.replayPrefix}/${this.replayTS||""}mp_/${this.replayUrl}"></iframe>
    `}}class Ee extends se{constructor(){super(),this.manual=!1,this.fileId=""}static get properties(){return{manual:{type:Boolean},fileId:{type:String}}}onLoad(){this.gauth("none",e=>{"immediate_failed"===e.error?this.manual=!0:this.authed(e)})}onClickAuth(){this.gauth(void 0,e=>{e.error||this.authed(e)})}async authed(e){const t=this.fileId,s="https://www.googleapis.com/drive/v3/files/"+t,r={Authorization:"Bearer "+e.access_token},i=await fetch(s+"?fields=name",{headers:r}),n=await i.json(),a="googledrive://"+t,l=n.name,o="Google Drive file: "+n.name,c=s+"?alt=media";this.dispatchEvent(new CustomEvent("load-ready",{detail:{name:l,displayName:o,sourceId:a,sourceUrl:c,headers:r}}))}render(){return j`
    ${this.script()}
    ${this.manual?j`
    <link href="./dist/frontend.css" rel="stylesheet"/>
    <button class="button is-primary is-rounded" @click="${this.onClickAuth}">
    <span class="icon"><fa-icon .svg="${ke.a}"></fa-icon></span>
    <span>Authorize Google Drive</span>
    </button>
    `:j`
    <p>Connecting to Google Drive...</p>
    `}`}script(){const e=document.createElement("script");return e.onload=()=>this.onLoad(),e.src="https://apis.google.com/js/platform.js",e}gauth(e,t){gapi.load("auth2",()=>{gapi.auth2.authorize({client_id:"758792702348-kokjbpv1leqid7ac7tjq7pbp37cg05kq.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive.file",prompt:e},t)})}}class Re extends se{constructor(){super(),this.currTab="replay",this.replayTS=""}static get properties(){return{replayUrl:{type:String},replayTS:{type:String},source:{type:String},paramString:{type:String}}}firstUpdated(){this.paramString=new URLSearchParams({replayUrl:this.replayUrl,replayTS:this.replayTS,source:this.source,currTab:this.currTab})}render(){return j`
    <iframe src="http://localhost:9990/?${this.paramString}"></iframe>
    `}}class Ie extends se{constructor(){super(),this.size="1.1em"}static get properties(){return{svg:{type:String},size:{type:String}}}static get styles(){return ee`
    :host {
      display: inline-block;
      padding: 0;
      margin: 0;
    }
    :host svg {
      fill: var(--fa-icon-fill-color, currentcolor);
      width: var(--fa-icon-width, 19px);
      height: var(--fa-icon-height, 19px);
    }
    `}render(){if(!this.svg)return j``;const e={width:this.size,height:this.size};return j`<svg style="${oe(e)}"><g>${ae(this.svg)}</g></svg>`}}!async function(){const e=function(e="sw.js?replayPrefix=wabac&stats=true",t){const s=window.location;if(console.log("Register SW: "+e),!navigator.serviceWorker){let e=null;return e="http:"===s.protocol?"Service workers only supported when loading via https://, but this site loaded from: "+s.origin:"Sorry, Service workers are not supported in this browser",Promise.reject(e)}(t=t?new URL(t,window.location.href).href:s.origin+s.pathname).endsWith("/")||(t=t.slice(0,t.lastIndexOf("/")+1));let r=new URL(e,t);if(navigator.serviceWorker.controller&&navigator.serviceWorker.controller.scriptURL===r)return Promise.resolve(!1);let i,n,a=!1;const l=new Promise((e,t)=>{i=t=>{a=!0,e(t)},n=e=>{a=!0,t(e)}});return window.fetch(r,{mode:"cors"}).then(e=>(e.url.startsWith(t)||n("Service Worker in wrong scope!"),e.url)).then(e=>(navigator.serviceWorker.addEventListener("error",e=>n(null)),setTimeout(()=>{a||n("Service Worker is not available")},3e4),navigator.serviceWorker.register(e,{scope:t}))).then(e=>{console.log("Service worker registration succeeded:",e),navigator.serviceWorker.controller&&i(!0),navigator.serviceWorker.addEventListener("controllerchange",e=>i(!0))}).catch(e=>{console.log("Service worker registration failed:",e),n(e)}),l}("./sw.js?replayPrefix=wabac&stats=true");await e,customElements.define("app-main",$e),customElements.define("wr-index",Ce),customElements.define("wr-loader",Te),customElements.define("wr-coll",Pe),customElements.define("wr-coll-proxy",Re),customElements.define("wr-coll-resources",Ue),customElements.define("wr-coll-curated",ze),customElements.define("wr-replay-page",Ae),customElements.define("wr-gdrive",Ee),customElements.define("fa-icon",Ie)}()},35:function(e,t,s){"use strict";const r=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],i=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],n=(e,t)=>{let s=e;return"string"==typeof t?s=e.toLocaleString(t):!0===t&&(s=e.toLocaleString()),s};e.exports=(e,t)=>{if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);const s=(t=Object.assign({bits:!1},t)).bits?i:r;if(t.signed&&0===e)return" 0 "+s[0];const a=e<0,l=a?"-":t.signed?"+":"";if(a&&(e=-e),e<1){return l+n(e,t.locale)+" "+s[0]}const o=Math.min(Math.floor(Math.log10(e)/3),s.length-1);return e=Number((e/Math.pow(1e3,o)).toPrecision(3)),l+n(e,t.locale)+" "+s[o]}},37:function(e,t,s){const{defaults:r}=s(13),{rtrim:i,splitCells:n,escape:a,findClosingBracket:l}=s(14);function o(e,t,s){const r=t.href,i=t.title?a(t.title):null;return"!"!==e[0].charAt(0)?{type:"link",raw:s,href:r,title:i,text:e[1]}:{type:"image",raw:s,text:a(e[1]),href:r,title:i}}e.exports=class{constructor(e){this.options=e||r}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e,t){const s=this.rules.block.code.exec(e);if(s){const e=t[t.length-1];if(e&&"paragraph"===e.type)return t.pop(),e.text+="\n"+s[0].trimRight(),e.raw+="\n"+s[0],e;{const e=s[0].replace(/^ {4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?e:i(e,"\n")}}}}fences(e){const t=this.rules.block.fences.exec(e);if(t)return{type:"code",raw:t[0],lang:t[2]?t[2].trim():t[2],text:t[3]||""}}heading(e){const t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}}nptable(e){const t=this.rules.block.nptable.exec(e);if(t){const e={type:"table",header:n(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(e.header.length===e.align.length){let t,s=e.align.length;for(t=0;t<s;t++)/^ *-+: *$/.test(e.align[t])?e.align[t]="right":/^ *:-+: *$/.test(e.align[t])?e.align[t]="center":/^ *:-+ *$/.test(e.align[t])?e.align[t]="left":e.align[t]=null;for(s=e.cells.length,t=0;t<s;t++)e.cells[t]=n(e.cells[t],e.header.length);return e}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}}list(e){const t=this.rules.block.list.exec(e);if(t){let e=t[0];const s=t[2],r=s.length>1,i={type:"list",raw:e,ordered:r,start:r?+s:"",loose:!1,items:[]},n=t[0].match(this.rules.block.item);let a,l,o,c,h,p,d,u=!1;const g=n.length;for(let t=0;t<g;t++)a=n[t],e=a,l=a.length,a=a.replace(/^ *([*+-]|\d+\.) */,""),~a.indexOf("\n ")&&(l-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+l+"}","gm"),"")),t!==g-1&&(o=this.rules.block.bullet.exec(n[t+1])[0],(s.length>1?1===o.length:o.length>1||this.options.smartLists&&o!==s)&&(c=n.slice(t+1).join("\n"),i.raw=i.raw.substring(0,i.raw.length-c.length),t=g-1)),h=u||/\n\n(?!\s*$)/.test(a),t!==g-1&&(u="\n"===a.charAt(a.length-1),h||(h=u)),h&&(i.loose=!0),p=/^\[[ xX]\] /.test(a),d=void 0,p&&(d=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),i.items.push({raw:e,task:p,checked:d,loose:h,text:a});return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):a(t[0]):t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:n(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let s,r=e.align.length;for(s=0;s<r;s++)/^ *-+: *$/.test(e.align[s])?e.align[s]="right":/^ *:-+: *$/.test(e.align[s])?e.align[s]="center":/^ *:-+ *$/.test(e.align[s])?e.align[s]="left":e.align[s]=null;for(r=e.cells.length,s=0;s<r;s++)e.cells[s]=n(e.cells[s].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:a(t[1])}}tag(e,t,s){const r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!s&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?s=!0:s&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(s=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:s,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):a(r[0]):r[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=l(t[2],"()");if(e>-1){const s=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,s).trim(),t[3]=""}let s=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);e?(s=e[1],r=e[3]):r=""}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),o(t,{href:s?s.replace(this.rules.inline._escapes,"$1"):s,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0])}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){let e=(s[2]||s[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=s[0].charAt(0);return{type:"text",raw:e,text:e}}return o(s,e,s[0])}}strong(e){const t=this.rules.inline.strong.exec(e);if(t)return{type:"strong",raw:t[0],text:t[4]||t[3]||t[2]||t[1]}}em(e){const t=this.rules.inline.em.exec(e);if(t)return{type:"em",raw:t[0],text:t[6]||t[5]||t[4]||t[3]||t[2]||t[1]}}codespan(e){const t=this.rules.inline.code.exec(e);if(t)return{type:"codespan",raw:t[0],text:a(t[2].trim(),!0)}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}}autolink(e,t){const s=this.rules.inline.autolink.exec(e);if(s){let e,r;return"@"===s[2]?(e=a(this.options.mangle?t(s[1]):s[1]),r="mailto:"+e):(e=a(s[1]),r=e),{type:"link",raw:s[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let s;if(s=this.rules.inline.url.exec(e)){let e,r;if("@"===s[2])e=a(this.options.mangle?t(s[0]):s[0]),r="mailto:"+e;else{let t;do{t=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0]}while(t!==s[0]);e=a(s[0]),r="www."===s[1]?"http://"+e:e}return{type:"link",raw:s[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t,s){const r=this.rules.inline.text.exec(e);if(r){let e;return e=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):a(r[0]):r[0]:a(this.options.smartypants?s(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}}},38:function(e,t,s){const{defaults:r}=s(13),{cleanUrl:i,escape:n}=s(14);e.exports=class{constructor(e){this.options=e||r}code(e,t,s){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(s=!0,e=t)}return r?'<pre><code class="'+this.options.langPrefix+n(r,!0)+'">'+(s?e:n(e,!0))+"</code></pre>\n":"<pre><code>"+(s?e:n(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,s,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(s)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,s){const r=t?"ol":"ul";return"<"+r+(t&&1!==s?' start="'+s+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const s=t.header?"th":"td";return(t.align?"<"+s+' align="'+t.align+'">':"<"+s+">")+e+"</"+s+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,s){if(null===(e=i(this.options.sanitize,this.options.baseUrl,e)))return s;let r='<a href="'+n(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+s+"</a>",r}image(e,t,s){if(null===(e=i(this.options.sanitize,this.options.baseUrl,e)))return s;let r='<img src="'+e+'" alt="'+s+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}}},39:function(e,t){e.exports=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}}},40:function(e,t){e.exports=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}},62:function(e,t,s){const r=s(77),i=s(79),n=s(37),a=s(38),l=s(39),o=s(40),{merge:c,checkSanitizeDeprecation:h,escape:p}=s(14),{getDefaults:d,changeDefaults:u,defaults:g}=s(13);function f(e,t,s){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(s||"function"==typeof t){s||(s=t,t=null),t=c({},f.defaults,t||{}),h(t);const n=t.highlight;let a,l,o=0;try{a=r.lex(e,t)}catch(e){return s(e)}l=a.length;const p=function(e){if(e)return t.highlight=n,s(e);let r;try{r=i.parse(a,t)}catch(t){e=t}return t.highlight=n,e?s(e):s(null,r)};if(!n||n.length<3)return p();if(delete t.highlight,!l)return p();for(;o<a.length;o++)!function(e){"code"!==e.type?--l||p():n(e.text,e.lang,(function(t,s){return t?p(t):null==s||s===e.text?--l||p():(e.text=s,e.escaped=!0,void(--l||p()))}))}(a[o])}else try{return t=c({},f.defaults,t||{}),h(t),i.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||f.defaults).silent)return"<p>An error occurred:</p><pre>"+p(e.message+"",!0)+"</pre>";throw e}}f.options=f.setOptions=function(e){return c(f.defaults,e),u(f.defaults),f},f.getDefaults=d,f.defaults=g,f.use=function(e){const t=c({},e);if(e.renderer){const s=f.defaults.renderer||new a;for(const t in e.renderer){const r=s[t];s[t]=(...i)=>{let n=e.renderer[t].apply(s,i);return!1===n&&(n=r.apply(s,i)),n}}t.renderer=s}if(e.tokenizer){const s=f.defaults.tokenizer||new n;for(const t in e.tokenizer){const r=s[t];s[t]=(...i)=>{let n=e.tokenizer[t].apply(s,i);return!1===n&&(n=r.apply(s,i)),n}}t.tokenizer=s}f.setOptions(t)},f.Parser=i,f.parser=i.parse,f.Renderer=a,f.TextRenderer=l,f.Lexer=r,f.lexer=r.lex,f.Tokenizer=n,f.Slugger=o,f.parse=f,e.exports=f},63:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>'},64:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"></path></svg>'},65:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>'},66:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path></svg>'},67:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"></path></svg>'},68:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>'},77:function(e,t,s){const r=s(37),{defaults:i}=s(13),{block:n,inline:a}=s(78);function l(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function o(e){let t,s,r="";const i=e.length;for(t=0;t<i;t++)s=e.charCodeAt(t),Math.random()>.5&&(s="x"+s.toString(16)),r+="&#"+s+";";return r}e.exports=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||i,this.options.tokenizer=this.options.tokenizer||new r,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const t={block:n.normal,inline:a.normal};this.options.pedantic?(t.block=n.pedantic,t.inline=a.pedantic):this.options.gfm&&(t.block=n.gfm,this.options.breaks?t.inline=a.breaks:t.inline=a.gfm),this.tokenizer.rules=t}static get rules(){return{block:n,inline:a}}static lex(t,s){return new e(s).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,t=[],s=!0){let r,i,n;for(e=e.replace(/^ +$/gm,"");e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],s),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),n=r.items.length,i=0;i<n;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(s&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(s&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}return t}inline(e){let t,s,r,i,n,a;const l=e.length;for(t=0;t<l;t++)switch(a=e[t],a.type){case"paragraph":case"text":case"heading":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case"table":for(a.tokens={header:[],cells:[]},i=a.header.length,s=0;s<i;s++)a.tokens.header[s]=[],this.inlineTokens(a.header[s],a.tokens.header[s]);for(i=a.cells.length,s=0;s<i;s++)for(n=a.cells[s],a.tokens.cells[s]=[],r=0;r<n.length;r++)a.tokens.cells[s][r]=[],this.inlineTokens(n[r],a.tokens.cells[s][r]);break;case"blockquote":this.inline(a.tokens);break;case"list":for(i=a.items.length,s=0;s<i;s++)this.inline(a.items[s].tokens)}return e}inlineTokens(e,t=[],s=!1,r=!1){let i;for(;e;)if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e,s,r))e=e.substring(i.raw.length),s=i.inLink,r=i.inRawBlock,t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.strong(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],s,r),t.push(i);else if(i=this.tokenizer.em(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],s,r),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],s,r),t.push(i);else if(i=this.tokenizer.autolink(e,o))e=e.substring(i.raw.length),t.push(i);else if(s||!(i=this.tokenizer.url(e,o))){if(i=this.tokenizer.inlineText(e,r,l))e=e.substring(i.raw.length),t.push(i);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(i.raw.length),t.push(i);return t}}},78:function(e,t,s){const{noopTest:r,edit:i,merge:n}=s(14),a={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:r,table:r,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};a.def=i(a.def).replace("label",a._label).replace("title",a._title).getRegex(),a.bullet=/(?:[*+-]|\d{1,9}\.)/,a.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,a.item=i(a.item,"gm").replace(/bull/g,a.bullet).getRegex(),a.list=i(a.list).replace(/bull/g,a.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+a.def.source+")").getRegex(),a._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",a._comment=/<!--(?!-?>)[\s\S]*?-->/,a.html=i(a.html,"i").replace("comment",a._comment).replace("tag",a._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),a.paragraph=i(a._paragraph).replace("hr",a.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",a._tag).getRegex(),a.blockquote=i(a.blockquote).replace("paragraph",a.paragraph).getRegex(),a.normal=n({},a),a.gfm=n({},a.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),a.gfm.nptable=i(a.gfm.nptable).replace("hr",a.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",a._tag).getRegex(),a.gfm.table=i(a.gfm.table).replace("hr",a.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",a._tag).getRegex(),a.pedantic=n({},a.normal,{html:i("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",a._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:r,paragraph:i(a.normal._paragraph).replace("hr",a.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",a.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const l={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:r,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:r,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~"};l.em=i(l.em).replace(/punctuation/g,l._punctuation).getRegex(),l._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,l._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,l._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,l.autolink=i(l.autolink).replace("scheme",l._scheme).replace("email",l._email).getRegex(),l._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,l.tag=i(l.tag).replace("comment",a._comment).replace("attribute",l._attribute).getRegex(),l._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,l._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,l._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,l.link=i(l.link).replace("label",l._label).replace("href",l._href).replace("title",l._title).getRegex(),l.reflink=i(l.reflink).replace("label",l._label).getRegex(),l.normal=n({},l),l.pedantic=n({},l.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:i(/^!?\[(label)\]\((.*?)\)/).replace("label",l._label).getRegex(),reflink:i(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",l._label).getRegex()}),l.gfm=n({},l.normal,{escape:i(l.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),l.gfm.url=i(l.gfm.url,"i").replace("email",l.gfm._extended_email).getRegex(),l.breaks=n({},l.gfm,{br:i(l.br).replace("{2,}","*").getRegex(),text:i(l.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),e.exports={block:a,inline:l}},79:function(e,t,s){const r=s(38),i=s(39),n=s(40),{defaults:a}=s(13),{unescape:l}=s(14);e.exports=class e{constructor(e){this.options=e||a,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new i,this.slugger=new n}static parse(t,s){return new e(s).parse(t)}parse(e,t=!0){let s,r,i,n,a,o,c,h,p,d,u,g,f,m,b,y,w,v,x="";const k=e.length;for(s=0;s<k;s++)switch(d=e[s],d.type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(d.tokens),d.depth,l(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(d.text,d.lang,d.escaped);continue;case"table":for(h="",c="",n=d.header.length,r=0;r<n;r++)c+=this.renderer.tablecell(this.parseInline(d.tokens.header[r]),{header:!0,align:d.align[r]});for(h+=this.renderer.tablerow(c),p="",n=d.cells.length,r=0;r<n;r++){for(o=d.tokens.cells[r],c="",a=o.length,i=0;i<a;i++)c+=this.renderer.tablecell(this.parseInline(o[i]),{header:!1,align:d.align[i]});p+=this.renderer.tablerow(c)}x+=this.renderer.table(h,p);continue;case"blockquote":p=this.parse(d.tokens),x+=this.renderer.blockquote(p);continue;case"list":for(u=d.ordered,g=d.start,f=d.loose,n=d.items.length,p="",r=0;r<n;r++)b=d.items[r],y=b.checked,w=b.task,m="",b.task&&(v=this.renderer.checkbox(y),f?"text"===b.tokens[0].type?(b.tokens[0].text=v+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=v+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:v}):m+=v),m+=this.parse(b.tokens,f),p+=this.renderer.listitem(m,w,y);x+=this.renderer.list(p,u,g);continue;case"html":x+=this.renderer.html(d.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(d.tokens));continue;case"text":for(p=d.tokens?this.parseInline(d.tokens):d.text;s+1<k&&"text"===e[s+1].type;)d=e[++s],p+="\n"+(d.tokens?this.parseInline(d.tokens):d.text);x+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+d.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return x}parseInline(e,t){t=t||this.renderer;let s,r,i="";const n=e.length;for(s=0;s<n;s++)switch(r=e[s],r.type){case"escape":i+=t.text(r.text);break;case"html":i+=t.html(r.text);break;case"link":i+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":i+=t.image(r.href,r.title,r.text);break;case"strong":i+=t.strong(this.parseInline(r.tokens,t));break;case"em":i+=t.em(this.parseInline(r.tokens,t));break;case"codespan":i+=t.codespan(r.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(r.tokens,t));break;case"text":i+=t.text(r.text);break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}},80:function(e,t,s){}}));