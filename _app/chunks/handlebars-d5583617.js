import{a as e}from"./codemirror-53e4b4bc.js";var t={};!function(e){function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e.unicode&&(n+="u"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function r(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}function a(e,a){(e.next||e.push)&&t(a,e.next||e.push),this.regex=n(e.regex),this.token=r(e.token),this.data=e}function i(e,t){return function(n,r){if(r.pending){var a=r.pending.shift();return 0==r.pending.length&&(r.pending=null),n.pos+=a.text.length,a.token}if(r.local){if(r.local.end&&n.match(r.local.end)){var i=r.local.endToken||null;return r.local=r.localState=null,i}var o;return i=r.local.mode.token(n,r.localState),r.local.endScan&&(o=r.local.endScan.exec(n.current()))&&(n.pos=n.start+o.index),i}for(var s=e[r.state],c=0;c<s.length;c++){var d=s[c],u=(!d.data.sol||n.sol())&&n.match(d.regex);if(u){d.data.next?r.state=d.data.next:d.data.push?((r.stack||(r.stack=[])).push(r.state),r.state=d.data.push):d.data.pop&&r.stack&&r.stack.length&&(r.state=r.stack.pop()),d.data.mode&&l(t,r,d.data.mode,d.token),d.data.indent&&r.indent.push(n.indentation()+t.indentUnit),d.data.dedent&&r.indent.pop();var p=d.token;if(p&&p.apply&&(p=p(u)),u.length>2&&d.token&&"string"!=typeof d.token){for(var f=2;f<u.length;f++)u[f]&&(r.pending||(r.pending=[])).push({text:u[f],token:d.token[f-1]});return n.backUp(u[0].length-(u[1]?u[1].length:0)),p[0]}return p&&p.join?p[0]:p}}return n.next(),null}}function o(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var r in e)if(e.hasOwnProperty(r)){if(!t.hasOwnProperty(r)||!o(e[r],t[r]))return!1;n++}for(var r in t)t.hasOwnProperty(r)&&n--;return 0==n}function l(t,r,a,i){var l;if(a.persistent)for(var s=r.persistentStates;s&&!l;s=s.next)(a.spec?o(a.spec,s.spec):a.mode==s.mode)&&(l=s);var c=l?l.mode:a.mode||e.getMode(t,a.spec),d=l?l.state:e.startState(c);a.persistent&&!l&&(r.persistentStates={mode:c,spec:a.spec,state:d,next:r.persistentStates}),r.localState=d,r.local={mode:c,end:a.end&&n(a.end),endScan:a.end&&!1!==a.forceEnd&&n(a.end,!1),endToken:i&&i.join?i[i.length-1]:i}}function s(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}function c(t,n){return function(r,a,i){if(r.local&&r.local.mode.indent)return r.local.mode.indent(r.localState,a,i);if(null==r.indent||r.local||n.dontIndentStates&&s(r.state,n.dontIndentStates)>-1)return e.Pass;var o=r.indent.length-1,l=t[r.state];e:for(;;){for(var c=0;c<l.length;c++){var d=l[c];if(d.data.dedent&&!1!==d.data.dedentIfLineStart){var u=d.regex.exec(a);if(u&&u[0]){o--,(d.next||d.push)&&(l=t[d.next||d.push]),a=a.slice(u[0].length);continue e}}}break}return o<0?0:r.indent[o]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,r){t(r,"start");var o={},l=r.meta||{},s=!1;for(var d in r)if(d!=l&&r.hasOwnProperty(d))for(var u=o[d]=[],p=r[d],f=0;f<p.length;f++){var g=p[f];u.push(new a(g,r)),(g.indent||g.dedent)&&(s=!0)}var m={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:s?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var r=t.persistentStates;r;r=r.next)n.persistentStates={mode:r.mode,spec:r.spec,state:r.state==t.localState?n.localState:e.copyState(r.mode,r.state),next:n.persistentStates};return n},token:i(o,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:c(o,l)};if(l)for(var v in l)l.hasOwnProperty(v)&&(m[v]=l[v]);return m}}(e.exports);var n;(n=e.exports).multiplexingMode=function(e){var t=Array.prototype.slice.call(arguments,1);function r(e,t,n,r){if("string"==typeof t){var a=e.indexOf(t,n);return r&&a>-1?a+t.length:a}var i=t.exec(n?e.slice(n):e);return i?i.index+n+(r?i[0].length:0):-1}return{startState:function(){return{outer:n.startState(e),innerActive:null,inner:null,startingInner:!1}},copyState:function(t){return{outer:n.copyState(e,t.outer),innerActive:t.innerActive,inner:t.innerActive&&n.copyState(t.innerActive.mode,t.inner),startingInner:t.startingInner}},token:function(a,i){if(i.innerActive){var o=i.innerActive;if(c=a.string,!o.close&&a.sol())return i.innerActive=i.inner=null,this.token(a,i);if((u=o.close&&!i.startingInner?r(c,o.close,a.pos,o.parseDelimiters):-1)==a.pos&&!o.parseDelimiters)return a.match(o.close),i.innerActive=i.inner=null,o.delimStyle&&o.delimStyle+" "+o.delimStyle+"-close";u>-1&&(a.string=c.slice(0,u));var l=o.mode.token(a,i.inner);return u>-1?a.string=c:a.pos>a.start&&(i.startingInner=!1),u==a.pos&&o.parseDelimiters&&(i.innerActive=i.inner=null),o.innerStyle&&(l=l?l+" "+o.innerStyle:o.innerStyle),l}for(var s=1/0,c=a.string,d=0;d<t.length;++d){var u,p=t[d];if((u=r(c,p.open,a.pos))==a.pos){p.parseDelimiters||a.match(p.open),i.startingInner=!!p.parseDelimiters,i.innerActive=p;var f=0;if(e.indent){var g=e.indent(i.outer,"","");g!==n.Pass&&(f=g)}return i.inner=n.startState(p.mode,f),p.delimStyle&&p.delimStyle+" "+p.delimStyle+"-open"}-1!=u&&u<s&&(s=u)}s!=1/0&&(a.string=c.slice(0,s));var m=e.token(a,i.outer);return s!=1/0&&(a.string=c),m},indent:function(t,r,a){var i=t.innerActive?t.innerActive.mode:e;return i.indent?i.indent(t.innerActive?t.inner:t.outer,r,a):n.Pass},blankLine:function(r){var a=r.innerActive?r.innerActive.mode:e;if(a.blankLine&&a.blankLine(r.innerActive?r.inner:r.outer),r.innerActive)"\n"===r.innerActive.close&&(r.innerActive=r.inner=null);else for(var i=0;i<t.length;++i){var o=t[i];"\n"===o.open&&(r.innerActive=o,r.inner=n.startState(o.mode,a.indent?a.indent(r.outer,"",""):0))}},electricChars:e.electricChars,innerMode:function(t){return t.inner?{state:t.inner,mode:t.innerActive.mode}:{state:t.outer,mode:e}}}},function(e){e.defineSimpleMode("handlebars-tags",{start:[{regex:/\{\{\{/,push:"handlebars_raw",token:"tag"},{regex:/\{\{!--/,push:"dash_comment",token:"comment"},{regex:/\{\{!/,push:"comment",token:"comment"},{regex:/\{\{/,push:"handlebars",token:"tag"}],handlebars_raw:[{regex:/\}\}\}/,pop:!0,token:"tag"}],handlebars:[{regex:/\}\}/,pop:!0,token:"tag"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"},{regex:/'(?:[^\\']|\\.)*'?/,token:"string"},{regex:/>|[#\/]([A-Za-z_]\w*)/,token:"keyword"},{regex:/(?:else|this)\b/,token:"keyword"},{regex:/\d+/i,token:"number"},{regex:/=|~|@|true|false/,token:"atom"},{regex:/(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/,token:"variable-2"}],dash_comment:[{regex:/--\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],comment:[{regex:/\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],meta:{blockCommentStart:"{{--",blockCommentEnd:"--}}"}}),e.defineMode("handlebars",(function(t,n){var r=e.getMode(t,"handlebars-tags");return n&&n.base?e.multiplexingMode(e.getMode(t,n.base),{open:"{{",close:/\}\}\}?/,mode:r,parseDelimiters:!0}):r})),e.defineMIME("text/x-handlebars-template","handlebars")}(e.exports);var r=t,a=Object.freeze(Object.assign(Object.create(null),t,{[Symbol.toStringTag]:"Module",default:r}));export{a as h};
