import{a as t}from"./codemirror-53e4b4bc.js";import{a as e}from"./xml-641feda2.js";import{a}from"./javascript-5a6cc1da.js";import{a as n}from"./css-17c03da2.js";var l={};!function(t){var e={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function a(t,e,a){var n=t.current(),l=n.search(e);return l>-1?t.backUp(n.length-l):n.match(/<\/?$/)&&(t.backUp(n.length),t.match(e,!1)||t.match(n)),a}var n={};function l(t){var e=n[t];return e||(n[t]=new RegExp("\\s+"+t+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}function o(t,e){var a=t.match(l(e));return a?/^\s*(.*?)\s*$/.exec(a[2])[1]:""}function r(t,e){return new RegExp((e?"^":"")+"</s*"+t+"s*>","i")}function c(t,e){for(var a in t)for(var n=e[a]||(e[a]=[]),l=t[a],o=l.length-1;o>=0;o--)n.unshift(l[o])}function i(t,e){for(var a=0;a<t.length;a++){var n=t[a];if(!n[0]||n[1].test(o(e,n[0])))return n[2]}}t.defineMode("htmlmixed",(function(n,l){var o=t.getMode(n,{name:"xml",htmlMode:!0,multilineTagIndentFactor:l.multilineTagIndentFactor,multilineTagIndentPastTag:l.multilineTagIndentPastTag,allowMissingTagName:l.allowMissingTagName}),s={},u=l&&l.tags,m=l&&l.scriptTypes;if(c(e,s),u&&c(u,s),m)for(var d=m.length-1;d>=0;d--)s.script.unshift(["type",m[d].matches,m[d].mode]);function g(e,l){var c,u=o.token(e,l.htmlState),m=/\btag\b/.test(u);if(m&&!/[<>\s\/]/.test(e.current())&&(c=l.htmlState.tagName&&l.htmlState.tagName.toLowerCase())&&s.hasOwnProperty(c))l.inTag=c+" ";else if(l.inTag&&m&&/>$/.test(e.current())){var d=/^([\S]+) (.*)/.exec(l.inTag);l.inTag=null;var p=">"==e.current()&&i(s[d[1]],d[2]),f=t.getMode(n,p),h=r(d[1],!0),S=r(d[1],!1);l.token=function(t,e){return t.match(h,!1)?(e.token=g,e.localState=e.localMode=null,null):a(t,S,e.localMode.token(t,e.localState))},l.localMode=f,l.localState=t.startState(f,o.indent(l.htmlState,"",""))}else l.inTag&&(l.inTag+=e.current(),e.eol()&&(l.inTag+=" "));return u}return{startState:function(){return{token:g,inTag:null,localMode:null,localState:null,htmlState:t.startState(o)}},copyState:function(e){var a;return e.localState&&(a=t.copyState(e.localMode,e.localState)),{token:e.token,inTag:e.inTag,localMode:e.localMode,localState:a,htmlState:t.copyState(o,e.htmlState)}},token:function(t,e){return e.token(t,e)},indent:function(e,a,n){return!e.localMode||/^\s*<\//.test(a)?o.indent(e.htmlState,a,n):e.localMode.indent?e.localMode.indent(e.localState,a,n):t.Pass},innerMode:function(t){return{state:t.localState||t.htmlState,mode:t.localMode||o}}}}),"xml","javascript","css"),t.defineMIME("text/html","htmlmixed")}(t.exports,e.exports,a.exports,n.exports);var o=l,r=Object.freeze(Object.assign(Object.create(null),l,{[Symbol.toStringTag]:"Module",default:o}));export{r as h};