var t=Object.defineProperty,e=Object.defineProperties,n=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(e,n,s)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,c=(t,e)=>{for(var n in e||(e={}))r.call(e,n)&&a(t,n,e[n]);if(s)for(var n of s(e))o.call(e,n)&&a(t,n,e[n]);return t};import{S as i,i as l,s as p,e as d,c as u,a as m,d as h,b as f,f as g,G as $,F as v,k as w,n as y,A as b,H as _,p as E,I as k,D as x,t as I,g as A,J as C,E as P,v as j,r as O,z as T,K as D,j as L,m as N,o as V,w as R,h as M,C as S,L as U,M as B,x as F,N as W,O as z,P as G,Q as H,R as Y,T as q,B as J,u as K}from"../chunks/vendor-0ffccd0c.js";import{_ as Q}from"../chunks/preload-helper-9f12a5fd.js";function X(t){let e;return{c(){e=d("div"),this.h()},l(t){e=u(t,"DIV",{class:!0}),m(e).forEach(h),this.h()},h(){f(e,"class","page-content svelte-1yfroik")},m(t,n){g(t,e,n)},p:$,i:$,o:$,d(t){t&&h(e)}}}class Z extends i{constructor(t){super(),l(this,t,null,X,p,{})}}function tt(t){let e,n,s;return{c(){e=d("div"),n=d("img"),this.h()},l(t){e=u(t,"DIV",{class:!0});var s=m(e);n=u(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(h),this.h()},h(){n.src!==(s="/logo.svg")&&f(n,"src","/logo.svg"),f(n,"alt","pdfsvex logo"),f(n,"class","svelte-8gyzgp"),f(e,"class","img-wrapper svelte-8gyzgp")},m(t,s){g(t,e,s),v(e,n)},p:$,i:$,o:$,d(t){t&&h(e)}}}class et extends i{constructor(t){super(),l(this,t,null,tt,p,{})}}function nt(t){let e,n,s,r,o,a,c,i,l,p,b,_,E,k,x,I,A,C;return{c(){e=d("div"),n=d("a"),s=d("img"),a=w(),c=d("a"),i=d("img"),b=w(),_=d("a"),E=d("img"),x=w(),I=d("a"),A=d("img"),this.h()},l(t){e=u(t,"DIV",{class:!0});var r=m(e);n=u(r,"A",{href:!0,class:!0});var o=m(n);s=u(o,"IMG",{alt:!0,src:!0}),o.forEach(h),a=y(r),c=u(r,"A",{href:!0,class:!0});var l=m(c);i=u(l,"IMG",{alt:!0,src:!0}),l.forEach(h),b=y(r),_=u(r,"A",{href:!0,target:!0,class:!0});var p=m(_);E=u(p,"IMG",{alt:!0,src:!0}),p.forEach(h),x=y(r),I=u(r,"A",{href:!0,target:!0,class:!0});var d=m(I);A=u(d,"IMG",{alt:!0,src:!0}),d.forEach(h),r.forEach(h),this.h()},h(){f(s,"alt","Version"),s.src!==(r="https://img.shields.io/npm/v/"+t[0])&&f(s,"src",r),f(n,"href",o="https://www.npmjs.com/package/"+t[0]),f(n,"class","svelte-8gjlrl"),f(i,"alt","Downloads"),i.src!==(l="https://img.shields.io/npm/dw/"+t[0])&&f(i,"src",l),f(c,"href",p="https://www.npmjs.com/package/"+t[0]),f(c,"class","svelte-8gjlrl"),f(E,"alt","Documentation"),E.src!==(k="https://img.shields.io/badge/documentation-yes-brightgreen.svg")&&f(E,"src","https://img.shields.io/badge/documentation-yes-brightgreen.svg"),f(_,"href","https://pdfsvex.serret.dev"),f(_,"target","_blank"),f(_,"class","svelte-8gjlrl"),f(A,"alt","License"),A.src!==(C="https://img.shields.io/npm/l/"+t[0])&&f(A,"src",C),f(I,"href","https://pdfsvex.serret.dev"),f(I,"target","_blank"),f(I,"class","svelte-8gjlrl"),f(e,"class","container svelte-8gjlrl")},m(t,r){g(t,e,r),v(e,n),v(n,s),v(e,a),v(e,c),v(c,i),v(e,b),v(e,_),v(_,E),v(e,x),v(e,I),v(I,A)},p(t,[e]){1&e&&s.src!==(r="https://img.shields.io/npm/v/"+t[0])&&f(s,"src",r),1&e&&o!==(o="https://www.npmjs.com/package/"+t[0])&&f(n,"href",o),1&e&&i.src!==(l="https://img.shields.io/npm/dw/"+t[0])&&f(i,"src",l),1&e&&p!==(p="https://www.npmjs.com/package/"+t[0])&&f(c,"href",p),1&e&&A.src!==(C="https://img.shields.io/npm/l/"+t[0])&&f(A,"src",C)},i:$,o:$,d(t){t&&h(e)}}}function st(t,e,n){let{packageName:s}=e;return t.$$set=t=>{"packageName"in t&&n(0,s=t.packageName)},[s]}class rt extends i{constructor(t){super(),l(this,t,st,nt,p,{packageName:0})}}function ot(t){let e,n=[{class:"dynamic-component"},t[0]],s={};for(let r=0;r<n.length;r+=1)s=b(s,n[r]);return{c(){e=d("span"),this.h()},l(t){e=u(t,"SPAN",{class:!0}),m(e).forEach(h),this.h()},h(){_(e,s)},m(t,n){g(t,e,n)},p(t,[r]){_(e,s=E(n,[{class:"dynamic-component"},1&r&&t[0]]))},i:$,o:$,d(t){t&&h(e)}}}function at(t,e,n){let{componentId:s}=e,{attributes:r={}}=e;return r["data-component-id"]=s,t.$$set=t=>{"componentId"in t&&n(1,s=t.componentId),"attributes"in t&&n(0,r=t.attributes)},[r,s]}class ct extends i{constructor(t){super(),l(this,t,at,ot,p,{componentId:1,attributes:0})}}class it{constructor(t,e){this.options=t,this.index=e,this.domAnchor=this.generate()}generate(){const t=document.createElement("div");return t.classList.add("sheet"),t.setAttribute("data-page-number",this.index),this.layoutComponent=new this.options.layout({target:t,props:{pageIndex:this.index,content:void 0}}),t}get dom(){return this.domAnchor}get contentDom(){return this.domAnchor.querySelector(".page-content")}hasOverflow(){return this.domAnchor.scrollHeight>this.domAnchor.clientHeight}save(){this.layoutComponent.$set({content:this.domAnchor})}getNodeIfExists(t){return this.contentDom.querySelector(`[data-created-from-uid="${t}"]`)}}class lt{static is(t){return!0}static createFrom(t){const e=document.createElement(t.tagName);if(t.attributes){const n=Array.prototype.slice.call(t.attributes);let s;for(;s=n.pop();)e.setAttribute(s.nodeName,s.nodeValue);e.hasAttribute("saved-id")&&lt.restoreId(e)}return e}static restoreId(t){const e=t.getAttribute("saved-id");t.removeAttribute("saved-id"),t.setAttribute("id",e)}static hasPageBreakInsideAvoid(t){return"avoid"===window.getComputedStyle(t).getPropertyValue("page-break-inside")}static hasPageBreakAfterAlways(t){return"always"===window.getComputedStyle(t).getPropertyValue("page-break-after")}}class pt{static is(t){return t.nodeType===Node.TEXT_NODE}static createFrom(t){return document.createTextNode(t.textContent)}}class dt{static is(t){return t.nodeType===Node.COMMENT_NODE}static createFrom(t){return document.createComment(t.data)}}class ut{static splitToPages(t,e,n,s){const r=t.textContent.replaceAll("\n\t"," ").replaceAll("\n"," ").replaceAll("\t"," ").split(" "),o=ut.determineParent(n,s,t),a=pt.createFrom(t);o.appendChild(a),a.textContent="",o.classList.add("contains-splittet-text-across-pages");const c=ut.addWordsUntilOverflow(r,a,n);e.textContent=c}static determineParent(t,e,n){const s=n.parentElement.getAttribute("data-created-from-uid");let r=t.getNodeIfExists(s);return r||(r=lt.createFrom(n.parentElement),e.appendChild(r)),r}static addWordsUntilOverflow(t,e,n){let s=-1;for(let r=0;r<t.length;r++){const o=t[r];if(e.textContent+=o+" ",n.hasOverflow()){const t=e.textContent.lastIndexOf(o);e.textContent=e.textContent.substring(0,t);break}s=r}return t.slice(s+1,t.length).join(" ")}}class mt{static create(t,s,r){s.forEach((o=>{o.contentDom.querySelectorAll(".dynamic-component").forEach((o=>{const a=o.getAttribute("data-component-id"),i=mt.getComponentInfoFromOptions(t,a);var l,p;null!=i&&new i.component({target:o,props:(l=c({},i.props),p={pages:s,allContent:r,element:o},e(l,n(p)))})}))}))}static getComponentInfoFromOptions(t,e){return t.dynamicComponents.find((t=>t.id===e))}}class ht{constructor(t,e,n){this.generated=e,this.options=n,this.content=t}pageNow(){this.removeIds(this.content),this.wayToRoot=[],this.pages=[],this.generated.innerHTML="",this.currentPage=this.createAndAddPage();const t=this.currentPage.contentDom;this.walk(t,this.content,!0),this.finalize()}removeIds(t){t.querySelectorAll("[id]").forEach((t=>{const e=t.getAttribute("id");t.removeAttribute("id"),t.setAttribute("saved-id",e)}))}walk(t,e,n=!1){let s;pt.is(e)||dt.is(e)||e.setAttribute("data-created-from-uid",k()),n?s=t:(s=this.createNode(e),t.appendChild(s));let r=!1,o=!1;pt.is(e)||dt.is(e)||(r=lt.hasPageBreakInsideAvoid(s),o=lt.hasPageBreakAfterAlways(s));let a=this.currentPage.hasOverflow(),c=!1;if(r&&(e.childNodes.forEach((t=>{this.createNodesRecursive(s,t)})),c=!0,a=this.currentPage.hasOverflow()),a||o||a&&r){if(t.removeChild(s),pt.is(e)&&t.parentNode&&0==t.children.length){const e=t.parentElement;e.removeChild(t),t=e}pt.is(e)&&ut.splitToPages(e,s,this.currentPage,t);const n=this.createAndAddPage();t=n.contentDom,this.currentPage=n,this.wayToRoot.forEach((e=>{const n=lt.createFrom(e);t.appendChild(n),t=n})),t.appendChild(s)}return n||this.wayToRoot.push(e),c||(t=s,e.childNodes.forEach((e=>{t=this.walk(t,e)}))),n||this.wayToRoot.pop(),r?t:t.parentElement}createAndAddPage(){this.currentPage&&this.currentPage.save();const t=new it(this.options,this.pages.length+1);return this.pages.push(t),this.generated.appendChild(t.dom),t}createNode(t){let e;return e=pt.is(t)?pt.createFrom(t):dt.is(t)?dt.createFrom(t):lt.createFrom(t),e}createNodesRecursive(t,e){const n=this.createNode(e);t.appendChild(n),e.childNodes.forEach((t=>{this.createNodesRecursive(n,t)}))}finalize(){mt.create(this.options,this.pages,this.generated)}}function ft(t){let e,n,s,r,o,a;const c=t[7].default,i=x(c,t,t[6],null),l=i||function(t){let e;return{c(){e=I("This is a slot component, you need to provide the content")},l(t){e=A(t,"This is a slot component, you need to provide the content")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}();return{c(){e=d("div"),l&&l.c(),n=w(),s=d("div"),r=I("Loading..."),this.h()},l(t){e=u(t,"DIV",{class:!0});var o=m(e);l&&l.l(o),o.forEach(h),n=y(t),s=u(t,"DIV",{class:!0});var a=m(s);r=A(a,"Loading..."),a.forEach(h),this.h()},h(){f(e,"class","content svelte-1pr8ztm"),f(s,"class",o="generated "+t[0]+" svelte-1pr8ztm"),C(s,"landscape",t[1])},m(o,c){g(o,e,c),l&&l.m(e,null),t[8](e),g(o,n,c),g(o,s,c),v(s,r),t[9](s),a=!0},p(t,[e]){i&&i.p&&(!a||64&e)&&P(i,c,t,t[6],e,null,null),(!a||1&e&&o!==(o="generated "+t[0]+" svelte-1pr8ztm"))&&f(s,"class",o),3&e&&C(s,"landscape",t[1])},i(t){a||(j(l,t),a=!0)},o(t){O(l,t),a=!1},d(r){r&&h(e),l&&l.d(r),t[8](null),r&&h(n),r&&h(s),t[9](null)}}}function gt(t,e,n){let s,r,o,{$$slots:a={},$$scope:c}=e,{options:i}=e,{style:l="A4"}=e,{landscape:p=!1}=e;return T((()=>{document.body.classList.add(l),p&&document.body.classList.add("landscape"),o=new ht(s,r,i)})),t.$$set=t=>{"options"in t&&n(4,i=t.options),"style"in t&&n(0,l=t.style),"landscape"in t&&n(1,p=t.landscape),"$$scope"in t&&n(6,c=t.$$scope)},[l,p,s,r,i,function(){o.pageNow()},c,a,function(t){D[t?"unshift":"push"]((()=>{s=t,n(2,s)}))},function(t){D[t?"unshift":"push"]((()=>{r=t,n(3,r)}))}]}class $t extends i{constructor(t){super(),l(this,t,gt,ft,p,{options:4,style:0,landscape:1,pageNow:5})}get pageNow(){return this.$$.ctx[5]}}function vt(t){let e,n,s;return n=new ct({props:{componentId:"svelte-repl",attributes:t[0]}}),{c(){e=d("div"),L(n.$$.fragment),this.h()},l(t){e=u(t,"DIV",{class:!0});var s=m(e);N(n.$$.fragment,s),s.forEach(h),this.h()},h(){f(e,"class","svelte-1ngsftc")},m(t,r){g(t,e,r),V(n,e,null),s=!0},p(t,[e]){const s={};1&e&&(s.attributes=t[0]),n.$set(s)},i(t){s||(j(n.$$.fragment,t),s=!0)},o(t){O(n.$$.fragment,t),s=!1},d(t){t&&h(e),R(n)}}}function wt(t,e,n){let{components:s}=e;const r={};return r["svelte-repl-components"]=JSON.stringify(s),t.$$set=t=>{"components"in t&&n(1,s=t.components)},[r,s]}class yt extends i{constructor(t){super(),l(this,t,wt,vt,p,{components:1})}}function bt(t){let e;return{c(){e=I(t[0])},l(n){e=A(n,t[0])},m(t,n){g(t,e,n)},p(t,[n]){1&n&&M(e,t[0])},i:$,o:$,d(t){t&&h(e)}}}function _t(t,e,n){let{element:s}=e,{pages:r}=e,{allContent:o}=e,{pageTransformer:a}=e;const c=s.getAttribute("data-page-by-id");let i=document.getElementById(c).closest(".sheet").getAttribute("data-page-number");return i=parseInt(i),a&&(i=a(i)),t.$$set=t=>{"element"in t&&n(1,s=t.element),"pages"in t&&n(2,r=t.pages),"allContent"in t&&n(3,o=t.allContent),"pageTransformer"in t&&n(4,a=t.pageTransformer)},[i,s,r,o,a]}class Et extends i{constructor(t){super(),l(this,t,_t,bt,p,{element:1,pages:2,allContent:3,pageTransformer:4})}}const kt=S([]),xt=t=>({chapters:1&t}),It=t=>({chapters:t[0]});function At(t){let e;const n=t[4].default,s=x(n,t,t[3],It),r=s||function(t){let e,n;return{c(){e=d("span"),n=I("You need to supply content or use the default implementation")},l(t){e=u(t,"SPAN",{});var s=m(e);n=A(s,"You need to supply content or use the default implementation"),s.forEach(h)},m(t,s){g(t,e,s),v(e,n)},d(t){t&&h(e)}}}();return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[r]){s&&s.p&&(!e||9&r)&&P(s,n,t,t[3],r,xt,It)},i(t){e||(j(r,t),e=!0)},o(t){O(r,t),e=!1},d(t){r&&r.d(t)}}}function Ct(t,e,n){let s;U(t,kt,(t=>n(2,s=t)));let r,{$$slots:o={},$$scope:a}=e,{chapters:c}=e;return t.$$set=t=>{"chapters"in t&&n(1,c=t.chapters),"$$scope"in t&&n(3,a=t.$$scope)},t.$$.update=()=>{6&t.$$.dirty&&(c||n(1,c=s),n(0,r=c.filter((t=>t.includeInTableOfContents))))},[r,c,s,a,o]}class Pt extends i{constructor(t){super(),l(this,t,Ct,At,p,{chapters:1})}}const jt=t=>({}),Ot=t=>({}),Tt=t=>({chapter:1&t}),Dt=t=>({chapter:t[0]});function Lt(t){let e,n;const s=t[7].title,r=x(s,t,t[6],Dt),o=r||function(t){let e,n;return{c(){e=d("span"),n=I("You need to supply content or use the default implementation")},l(t){e=u(t,"SPAN",{});var s=m(e);n=A(s,"You need to supply content or use the default implementation"),s.forEach(h)},m(t,s){g(t,e,s),v(e,n)},d(t){t&&h(e)}}}(),a=t[7].content,c=x(a,t,t[6],Ot),i=c||function(t){let e,n;return{c(){e=d("span"),n=I("You need to supply content")},l(t){e=u(t,"SPAN",{});var s=m(e);n=A(s,"You need to supply content"),s.forEach(h)},m(t,s){g(t,e,s),v(e,n)},d(t){t&&h(e)}}}();return{c(){o&&o.c(),e=w(),i&&i.c()},l(t){o&&o.l(t),e=y(t),i&&i.l(t)},m(t,s){o&&o.m(t,s),g(t,e,s),i&&i.m(t,s),n=!0},p(t,[e]){r&&r.p&&(!n||65&e)&&P(r,s,t,t[6],e,Tt,Dt),c&&c.p&&(!n||64&e)&&P(c,a,t,t[6],e,jt,Ot)},i(t){n||(j(o,t),j(i,t),n=!0)},o(t){O(o,t),O(i,t),n=!1},d(t){o&&o.d(t),t&&h(e),i&&i.d(t)}}}function Nt(t,e,n){let s;U(t,kt,(t=>n(8,s=t)));let{$$slots:r={},$$scope:o}=e,{name:a}=e,{includeInTableOfContents:c=!0}=e,{key:i}=e,{depth:l=1}=e,{numbered:p=!0}=e;i="chapter-"+i;let d={name:a,key:i,includeInTableOfContents:c,children:[],depth:l,numbered:p};if(B("parent")){const{getParent:t}=B("parent"),e=t();d.depth=e.depth+1,d.number=e.number+"."+(e.children.length+1),e.children.push(d),F("parent",{getParent:()=>d}),kt.set(s)}else{if(F("parent",{getParent:()=>d}),p){const t=s.filter((t=>t.key===d.key))[0];d.number=t?t.number:(u=s,u.filter((t=>t.numbered))).length+1}else d.number="";0===s.filter((t=>t.key===d.key)).length&&(s.push(d),kt.set(s))}var u;return t.$$set=t=>{"name"in t&&n(2,a=t.name),"includeInTableOfContents"in t&&n(3,c=t.includeInTableOfContents),"key"in t&&n(1,i=t.key),"depth"in t&&n(4,l=t.depth),"numbered"in t&&n(5,p=t.numbered),"$$scope"in t&&n(6,o=t.$$scope)},[d,i,a,c,l,p,o,r]}class Vt extends i{constructor(t){super(),l(this,t,Nt,Lt,p,{name:2,includeInTableOfContents:3,key:1,depth:4,numbered:5})}}function Rt(t){let e;return{c(){e=d("div"),this.h()},l(t){e=u(t,"DIV",{class:!0}),m(e).forEach(h),this.h()},h(){f(e,"class","codeeditor svelte-1d63sf7")},m(n,s){g(n,e,s),t[4](e)},p:$,i:$,o:$,d(n){n&&h(e),t[4](null)}}}function Mt(t,e,n){let s,r,o,{content:a="asd"}=e,c=!1;const i=W();T((async()=>{o=(await Q((()=>import("../chunks/codemirror-53e4b4bc.js").then((function(t){return t.c}))),void 0)).default,await Q((()=>import("../chunks/javascript-5a6cc1da.js").then((function(t){return t.j}))),["/_app/chunks/javascript-5a6cc1da.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/handlebars-d5583617.js").then((function(t){return t.h}))),["/_app/chunks/handlebars-d5583617.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/htmlmixed-05293de4.js").then((function(t){return t.h}))),["/_app/chunks/htmlmixed-05293de4.js","/_app/chunks/codemirror-53e4b4bc.js","/_app/chunks/xml-641feda2.js","/_app/chunks/javascript-5a6cc1da.js","/_app/chunks/css-17c03da2.js"]),await Q((()=>import("../chunks/xml-641feda2.js").then((function(t){return t.x}))),["/_app/chunks/xml-641feda2.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/css-17c03da2.js").then((function(t){return t.c}))),["/_app/chunks/css-17c03da2.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/markdown-a46d6eda.js").then((function(t){return t.m}))),["/_app/chunks/markdown-a46d6eda.js","/_app/chunks/codemirror-53e4b4bc.js","/_app/chunks/xml-641feda2.js"]),await Q((()=>import("../chunks/closebrackets-f4269bdb.js").then((function(t){return t.c}))),["/_app/chunks/closebrackets-f4269bdb.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/closetag-61f2df75.js").then((function(t){return t.c}))),["/_app/chunks/closetag-61f2df75.js","/_app/chunks/codemirror-53e4b4bc.js","/_app/chunks/xml-fold-d0d1618e.js"]),await Q((()=>import("../chunks/continuelist-95354310.js").then((function(t){return t.c}))),["/_app/chunks/continuelist-95354310.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/comment-58674dbb.js").then((function(t){return t.c}))),["/_app/chunks/comment-58674dbb.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/foldcode-9ed5f218.js").then((function(t){return t.f}))),["/_app/chunks/foldcode-9ed5f218.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/foldgutter-c2e2e30f.js").then((function(t){return t.f}))),["/_app/chunks/foldgutter-c2e2e30f.js","/_app/chunks/codemirror-53e4b4bc.js","/_app/chunks/foldcode-9ed5f218.js"]),await Q((()=>import("../chunks/brace-fold-46a51c80.js").then((function(t){return t.b}))),["/_app/chunks/brace-fold-46a51c80.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/xml-fold-d0d1618e.js").then((function(t){return t.x}))),["/_app/chunks/xml-fold-d0d1618e.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/indent-fold-3a5801e9.js").then((function(t){return t.i}))),["/_app/chunks/indent-fold-3a5801e9.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/markdown-fold-98e1f858.js").then((function(t){return t.m}))),["/_app/chunks/markdown-fold-98e1f858.js","/_app/chunks/codemirror-53e4b4bc.js"]),await Q((()=>import("../chunks/comment-fold-1c01a340.js").then((function(t){return t.c}))),["/_app/chunks/comment-fold-1c01a340.js","/_app/chunks/codemirror-53e4b4bc.js"]),n(3,c=!0)}));const l={javascript:{name:"javascript"},svelte:{name:"handlebars",base:"text/html"}};return t.$$set=t=>{"content"in t&&n(1,a=t.content)},t.$$.update=()=>{6&t.$$.dirty&&void 0!==s&&null!=a&&s.setValue(a),9&t.$$.dirty&&r&&c&&(n(2,s=o(r,{lineNumbers:!0,lineWrapping:!0,indentWithTabs:!0,indentUnit:2,tabSize:2,value:"",mode:l.svelte,readOnly:!1,autoCloseBrackets:!0,autoCloseTags:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList","Ctrl-/":"toggleComment","Cmd-/":"toggleComment","Ctrl-B"(t){t.foldCode(t.getCursor())},"Cmd-B"(t){t.foldCode(t.getCursor())}},foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],theme:"monokai"})),s.on("change",(t=>{i("change",{code:t.getValue()})})),a&&s.setValue(a))},[r,a,s,c,function(t){D[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class St extends i{constructor(t){super(),l(this,t,Mt,Rt,p,{content:1})}}function Ut(t){let e;return{c(){e=d("iframe"),this.h()},l(t){e=u(t,"IFRAME",{title:!0,srcdoc:!0,class:!0}),m(e).forEach(h),this.h()},h(){f(e,"title","Rendered REPL"),f(e,"srcdoc",t[1]),f(e,"class","svelte-1ua0dm1")},m(n,s){g(n,e,s),t[3](e)},p:$,i:$,o:$,d(n){n&&h(e),t[3](null)}}}function Bt(t,e,n){let s;return[s,"<!doctype html>\n<html>\n\t<head>\n\t\t<script type=\"module\">\n\n\t\t\tlet c;\n\n\t\t\tfunction update(source) {\n\t\t\t\tconst blob = new Blob([source], { type: 'text/javascript' });\n\t\t\t\tconst url = URL.createObjectURL(blob);\n\n\t\t\t\timport(url).then(({ default: App }) => {\n\t\t\t\t\tif (c) c.$destroy();\n\n\t\t\t\t\tdocument.body.innerHTML = '';\n\t\t\t\t\tc = new App({ target: document.body })\n\t\t\t\t})\n\t\t\t}\n\n\t\t\twindow.addEventListener('message', event => {\n\t\t\t\tupdate(event.data)\n\t\t\t}, false)\n\t\t<\/script>\n\t</head>\n\t<body></body>\n</html>",function(t){s.contentWindow.postMessage(t,"*")},function(t){D[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class Ft extends i{constructor(t){super(),l(this,t,Bt,Ut,p,{postMessage:2})}get postMessage(){return this.$$.ctx[2]}}const Wt=S("full");function zt(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function Gt(t){let e,n,s,r,o,a,c=t[9].name+"",i=t[9].type+"";function l(){return t[4](t[11])}return{c(){e=d("button"),n=I(c),s=I("."),r=I(i),this.h()},l(t){e=u(t,"BUTTON",{class:!0});var o=m(e);n=A(o,c),s=A(o,"."),r=A(o,i),o.forEach(h),this.h()},h(){f(e,"class","svelte-1p4ls2s"),C(e,"color",t[11]===t[0])},m(t,c){g(t,e,c),v(e,n),v(e,s),v(e,r),o||(a=z(e,"click",l),o=!0)},p(s,o){t=s,2&o&&c!==(c=t[9].name+"")&&M(n,c),2&o&&i!==(i=t[9].type+"")&&M(r,i),1&o&&C(e,"color",t[11]===t[0])},d(t){t&&h(e),o=!1,a()}}}function Ht(t){let e,n,s,r,o,a,c,i,l,p,f,b=t[1],_=[];for(let d=0;d<b.length;d+=1)_[d]=Gt(zt(t,b,d));return{c(){for(let t=0;t<_.length;t+=1)_[t].c();e=w(),n=d("button"),s=I("full"),r=w(),o=d("button"),a=I("preview"),c=w(),i=d("button"),l=I("editor")},l(t){for(let e=0;e<_.length;e+=1)_[e].l(t);e=y(t),n=u(t,"BUTTON",{});var p=m(n);s=A(p,"full"),p.forEach(h),r=y(t),o=u(t,"BUTTON",{});var d=m(o);a=A(d,"preview"),d.forEach(h),c=y(t),i=u(t,"BUTTON",{});var f=m(i);l=A(f,"editor"),f.forEach(h)},m(d,u){for(let t=0;t<_.length;t+=1)_[t].m(d,u);g(d,e,u),g(d,n,u),v(n,s),g(d,r,u),g(d,o,u),v(o,a),g(d,c,u),g(d,i,u),v(i,l),p||(f=[z(n,"click",t[5]),z(o,"click",t[6]),z(i,"click",t[7])],p=!0)},p(t,[n]){if(11&n){let s;for(b=t[1],s=0;s<b.length;s+=1){const r=zt(t,b,s);_[s]?_[s].p(r,n):(_[s]=Gt(r),_[s].c(),_[s].m(e.parentNode,e))}for(;s<_.length;s+=1)_[s].d(1);_.length=b.length}},i:$,o:$,d(t){G(_,t),t&&h(e),t&&h(n),t&&h(r),t&&h(o),t&&h(c),t&&h(i),p=!1,H(f)}}}function Yt(t,e,n){let s;U(t,Wt,(t=>n(2,s=t)));let{components:r=[]}=e,{currentComponentIndex:o=-1}=e;const a=W();function c(t){const e=o;n(0,o=t),a("tabChanged",{oldIndex:e,newIndex:t})}return t.$$set=t=>{"components"in t&&n(1,r=t.components),"currentComponentIndex"in t&&n(0,o=t.currentComponentIndex)},[o,r,s,c,t=>c(t),()=>Y(Wt,s="full",s),()=>Y(Wt,s="preview",s),()=>Y(Wt,s="editor",s)]}class qt extends i{constructor(t){super(),l(this,t,Yt,Ht,p,{components:1,currentComponentIndex:0})}}function Jt(){var t=this;const e="https://cdn.jsdelivr.net/npm";importScripts(`${e}/svelte/compiler.js`),importScripts(e+"/rollup/dist/rollup.browser.js");const n=new Map;async function s(t){return(await fetch(t)).text()}t.addEventListener("message",(async r=>{r.data.forEach((t=>{n.set(`./${t.name}.${t.type}`,t)}));const o=await rollup.rollup({input:"./App.svelte",plugins:[{name:"repl-plugin",async resolveId(t,r){if("svelte"===t)return`${e}/svelte/index.mjs`;if(t.startsWith("svelte/"))return`${e}/svelte/${t.slice(7)}/index.mjs`;if(r&&r.startsWith(`${e}/svelte`)){const e=new URL(t,r).href;return e.endsWith(".mjs")?e:`${e}/index.mjs`}if(n.has(t))return t;if(t.startsWith(".")){let e=new URL(t,r);return e.pathname.includes(".")||(e=new URL(t+".js",r)),e.href}const o=`${e}/${t}/package.json`,a=JSON.parse(await s(o));if(a.svelte||a.module||a.main){const t=o.replace(/\/package\.json$/,"");return new URL(a.svelte||a.module||a.main,`${t}/`).href}return t},load:async t=>n.has(t)?n.get(t).source:await s(t),transform(t,e){if(/.*\.svelte/.test(e))return svelte.compile(t).js.code}}]}),a=(await o.generate({format:"esm"})).output[0].code;t.postMessage(a)}))}function Kt(t){let e,n,s;return n=new St({props:{content:t[3]}}),n.$on("change",t[6]),{c(){e=d("div"),L(n.$$.fragment),this.h()},l(t){e=u(t,"DIV",{class:!0});var s=m(e);N(n.$$.fragment,s),s.forEach(h),this.h()},h(){f(e,"class","editor svelte-10o8eo7"),C(e,"full-width","editor"===t[5])},m(t,r){g(t,e,r),V(n,e,null),s=!0},p(t,s){const r={};8&s&&(r.content=t[3]),n.$set(r),32&s&&C(e,"full-width","editor"===t[5])},i(t){s||(j(n.$$.fragment,t),s=!0)},o(t){O(n.$$.fragment,t),s=!1},d(t){t&&h(e),R(n)}}}function Qt(t){let e,n,s;return n=new Ft({props:{}}),t[10](n),{c(){e=d("div"),L(n.$$.fragment),this.h()},l(t){e=u(t,"DIV",{class:!0});var s=m(e);N(n.$$.fragment,s),s.forEach(h),this.h()},h(){f(e,"class","preview svelte-10o8eo7"),C(e,"full-width","preview"===t[5])},m(t,r){g(t,e,r),V(n,e,null),s=!0},p(t,s){n.$set({}),32&s&&C(e,"full-width","preview"===t[5])},i(t){s||(j(n.$$.fragment,t),s=!0)},o(t){O(n.$$.fragment,t),s=!1},d(s){s&&h(e),t[10](null),R(n)}}}function Xt(t){let e,n,s,r,o,a,c;s=new qt({props:{components:t[0],currentComponentIndex:t[4]}}),s.$on("tabChanged",t[7]);let i=("full"===t[5]||"editor"===t[5])&&Kt(t),l=("full"===t[5]||"preview"===t[5])&&Qt(t);return{c(){e=d("div"),n=d("div"),L(s.$$.fragment),r=w(),o=d("div"),i&&i.c(),a=w(),l&&l.c(),this.h()},l(t){e=u(t,"DIV",{class:!0,style:!0});var c=m(e);n=u(c,"DIV",{class:!0});var p=m(n);N(s.$$.fragment,p),p.forEach(h),r=y(c),o=u(c,"DIV",{class:!0});var d=m(o);i&&i.l(d),a=y(d),l&&l.l(d),d.forEach(h),c.forEach(h),this.h()},h(){f(n,"class","topbar svelte-10o8eo7"),f(o,"class","editor-preview-container svelte-10o8eo7"),f(e,"class","svelte-repl"),q(e,"height",t[1])},m(t,p){g(t,e,p),v(e,n),V(s,n,null),v(e,r),v(e,o),i&&i.m(o,null),v(o,a),l&&l.m(o,null),c=!0},p(t,[n]){const r={};1&n&&(r.components=t[0]),16&n&&(r.currentComponentIndex=t[4]),s.$set(r),"full"===t[5]||"editor"===t[5]?i?(i.p(t,n),32&n&&j(i,1)):(i=Kt(t),i.c(),j(i,1),i.m(o,a)):i&&(J(),O(i,1,1,(()=>{i=null})),K()),"full"===t[5]||"preview"===t[5]?l?(l.p(t,n),32&n&&j(l,1)):(l=Qt(t),l.c(),j(l,1),l.m(o,null)):l&&(J(),O(l,1,1,(()=>{l=null})),K()),(!c||2&n)&&q(e,"height",t[1])},i(t){c||(j(s.$$.fragment,t),j(i),j(l),c=!0)},o(t){O(s.$$.fragment,t),O(i),O(l),c=!1},d(t){t&&h(e),R(s),i&&i.d(),l&&l.d()}}}function Zt(t,e,n){let s;U(t,Wt,(t=>n(5,s=t)));let r,o,{components:a=[{id:0,name:"App",type:"svelte",source:"asd",default:!0}]}=e,{view:c="full"}=e,{height:i}=e,l="",p=0,d=!0;return T((()=>{Y(Wt,s=c,s),n(3,l=a[0].source),n(4,p=0);var t=new Blob([("("+Jt+")();").replace('"use strict";',"")]),e=(window.URL?URL:webkitURL).createObjectURL(t,{type:"application/javascript; charset=utf-8"});o=new Worker(e),o.onmessage=function(t){r&&r.postMessage&&r.postMessage(t.data)},o.postMessage(a)})),t.$$set=t=>{"components"in t&&n(0,a=t.components),"view"in t&&n(8,c=t.view),"height"in t&&n(1,i=t.height)},t.$$.update=()=>{513&t.$$.dirty&&d&&(n(3,l=a[0].source),a[0].default||n(9,d=!1))},[a,i,r,l,p,s,function({detail:{code:t}}){n(0,a[p].source=t,a),o.postMessage(a)},function({detail:{newIndex:t,oldIndex:e}}){n(4,p=t),n(3,l=a[t].source)},c,d,function(t){D[t?"unshift":"push"]((()=>{r=t,n(2,r)}))}]}class te extends i{constructor(t){super(),l(this,t,Zt,Xt,p,{components:0,view:8,height:1})}}function ee(t){let e,n;return e=new te({props:{components:t[0]}}),{c(){L(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.components=t[0]),e.$set(s)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function ne(t,e,n){let s,{element:r}=e,{pages:o}=e,{allContent:a}=e;return T((()=>{n(0,s=JSON.parse(r.getAttribute("svelte-repl-components")))})),t.$$set=t=>{"element"in t&&n(1,r=t.element),"pages"in t&&n(2,o=t.pages),"allContent"in t&&n(3,a=t.allContent)},[s,r,o,a]}class se extends i{constructor(t){super(),l(this,t,ne,ee,p,{element:1,pages:2,allContent:3})}}function re(t){let e,n,s,r,o,a;return e=new Vt({props:{key:"packages-pdfsvex",name:"@pdfsvex/pdfsvex"}}),s=new Vt({props:{key:"packages-table-of-contents",name:"@pdfsvex/table-of-contents"}}),o=new Vt({props:{key:"packages-table-of-contents2",name:"@pdfsvex/table-of-contents"}}),{c(){L(e.$$.fragment),n=w(),L(s.$$.fragment),r=w(),L(o.$$.fragment)},l(t){N(e.$$.fragment,t),n=y(t),N(s.$$.fragment,t),r=y(t),N(o.$$.fragment,t)},m(t,c){V(e,t,c),g(t,n,c),V(s,t,c),g(t,r,c),V(o,t,c),a=!0},p:$,i(t){a||(j(e.$$.fragment,t),j(s.$$.fragment,t),j(o.$$.fragment,t),a=!0)},o(t){O(e.$$.fragment,t),O(s.$$.fragment,t),O(o.$$.fragment,t),a=!1},d(t){R(e,t),t&&h(n),R(s,t),t&&h(r),R(o,t)}}}function oe(t){let e,n,s,r,o,a,c,i,l,p,$,b,_,E,k,x,C,P,T,D,M,S,U,B,F,W,z;return e=new yt({props:{components:t[1]}}),o=new et({}),x=new rt({props:{packageName:"@pdfsvex/pdfsvex"}}),P=new Pt({}),D=new Vt({props:{key:"introduction",name:"Introduction"}}),S=new Vt({props:{key:"motivation",name:"Motivation"}}),B=new Vt({props:{key:"getting-started",name:"Getting started"}}),W=new Vt({props:{key:"packages",name:"Packages",$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment),n=w(),s=d("div"),r=w(),L(o.$$.fragment),a=w(),c=d("h1"),i=I("PDF generation, made easy"),l=w(),p=d("p"),$=I("Visit "),b=d("a"),_=I("kit.svelte.dev"),E=I(" to read the documentation"),k=w(),L(x.$$.fragment),C=w(),L(P.$$.fragment),T=w(),L(D.$$.fragment),M=w(),L(S.$$.fragment),U=w(),L(B.$$.fragment),F=w(),L(W.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),n=y(t),s=u(t,"DIV",{style:!0}),m(s).forEach(h),r=y(t),N(o.$$.fragment,t),a=y(t),c=u(t,"H1",{});var d=m(c);i=A(d,"PDF generation, made easy"),d.forEach(h),l=y(t),p=u(t,"P",{});var f=m(p);$=A(f,"Visit "),b=u(f,"A",{href:!0});var g=m(b);_=A(g,"kit.svelte.dev"),g.forEach(h),E=A(f," to read the documentation"),f.forEach(h),k=y(t),N(x.$$.fragment,t),C=y(t),N(P.$$.fragment,t),T=y(t),N(D.$$.fragment,t),M=y(t),N(S.$$.fragment,t),U=y(t),N(B.$$.fragment,t),F=y(t),N(W.$$.fragment,t),this.h()},h(){q(s,"page-break-after","always"),f(b,"href","https://kit.svelte.dev")},m(t,d){V(e,t,d),g(t,n,d),g(t,s,d),g(t,r,d),V(o,t,d),g(t,a,d),g(t,c,d),v(c,i),g(t,l,d),g(t,p,d),v(p,$),v(p,b),v(b,_),v(p,E),g(t,k,d),V(x,t,d),g(t,C,d),V(P,t,d),g(t,T,d),V(D,t,d),g(t,M,d),V(S,t,d),g(t,U,d),V(B,t,d),g(t,F,d),V(W,t,d),z=!0},p(t,e){const n={};16&e&&(n.$$scope={dirty:e,ctx:t}),W.$set(n)},i(t){z||(j(e.$$.fragment,t),j(o.$$.fragment,t),j(x.$$.fragment,t),j(P.$$.fragment,t),j(D.$$.fragment,t),j(S.$$.fragment,t),j(B.$$.fragment,t),j(W.$$.fragment,t),z=!0)},o(t){O(e.$$.fragment,t),O(o.$$.fragment,t),O(x.$$.fragment,t),O(P.$$.fragment,t),O(D.$$.fragment,t),O(S.$$.fragment,t),O(B.$$.fragment,t),O(W.$$.fragment,t),z=!1},d(t){R(e,t),t&&h(n),t&&h(s),t&&h(r),R(o,t),t&&h(a),t&&h(c),t&&h(l),t&&h(p),t&&h(k),R(x,t),t&&h(C),R(P,t),t&&h(T),R(D,t),t&&h(M),R(S,t),t&&h(U),R(B,t),t&&h(F),R(W,t)}}}function ae(t){let e,n,s={options:t[2],landscape:!1,$$slots:{default:[oe]},$$scope:{ctx:t}};return e=new $t({props:s}),t[3](e),{c(){L(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p(t,[n]){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(n){t[3](null),R(e,n)}}}function ce(t,e,n){let s;const r=[{id:0,name:"App",type:"svelte",active:!0,source:"<script>\n    import Layout from './Layout.svelte';\n    import { PdfDocument } from '@pdfsvex/pdfsvex';\n    import { onMount } from 'svelte';\n\n    let pdf;\n    const options = {\n        layout: Layout,\n    };\n\n    onMount(() => {\n        pdf.pageNow();\n    });\n\n<\/script>\n\n<PdfDocument bind:this={pdf} {options} style=\"A5\">\n    <h1>Welcome a pdfsvex</h1>\n    <p>\n        Visit <a href=\"https://pdfsvex.serret.dev\">pdfsvex.serret.dev</a> to read the documentation!\n    </p>\n</PdfDocument>"},{id:1,name:"Layout",active:!1,type:"svelte",source:'<div class="page-content">\n</div>'}],o={layout:Z,dynamicComponents:[{id:"dynamic-page-number",component:Et},{id:"svelte-repl",component:se}]};return T((()=>{s.pageNow()})),[s,r,o,function(t){D[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}export default class extends i{constructor(t){super(),l(this,t,ce,ae,p,{})}}
