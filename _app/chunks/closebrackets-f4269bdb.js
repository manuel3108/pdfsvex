import{a as e}from"./codemirror-53e4b4bc.js";var t={};!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},n=e.Pos;function r(e,n){return"pairs"==n&&"string"==typeof e?e:"object"==typeof e&&null!=e[n]?e[n]:t[n]}e.defineOption("autoCloseBrackets",!1,(function(t,n,s){s&&s!=e.Init&&(t.removeKeyMap(i),t.state.closeBrackets=null),n&&(a(r(n,"pairs")),t.state.closeBrackets=n,t.addKeyMap(i))}));var i={Backspace:l,Enter:c};function a(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),r="'"+n+"'";i[r]||(i[r]=s(n))}}function s(e){return function(t){return u(t,e)}}function o(e){var t=e.state.closeBrackets;return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function l(t){var i=o(t);if(!i||t.getOption("disableInput"))return e.Pass;for(var a=r(i,"pairs"),s=t.listSelections(),l=0;l<s.length;l++){if(!s[l].empty())return e.Pass;var c=d(t,s[l].head);if(!c||a.indexOf(c)%2!=0)return e.Pass}for(l=s.length-1;l>=0;l--){var h=s[l].head;t.replaceRange("",n(h.line,h.ch-1),n(h.line,h.ch+1),"+delete")}}function c(t){var n=o(t),i=n&&r(n,"explode");if(!i||t.getOption("disableInput"))return e.Pass;for(var a=t.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass;var l=d(t,a[s].head);if(!l||i.indexOf(l)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),h(t,-1),a=t.listSelections();for(var n=0;n<a.length;n++){var r=a[n].head.line;t.indentLine(r,null,!0),t.indentLine(r+1,null,!0)}}))}function h(e,t){for(var n=[],r=e.listSelections(),i=0,a=0;a<r.length;a++){var s=r[a];s.head==e.getCursor()&&(i=a);var o=s.head.ch||t>0?{line:s.head.line,ch:s.head.ch+t}:{line:s.head.line-1};n.push({anchor:o,head:o})}e.setSelections(n,i)}function f(t){var r=e.cmpPos(t.anchor,t.head)>0;return{anchor:new n(t.anchor.line,t.anchor.ch+(r?-1:1)),head:new n(t.head.line,t.head.ch+(r?1:-1))}}function u(t,i){var a=o(t);if(!a||t.getOption("disableInput"))return e.Pass;var s=r(a,"pairs"),l=s.indexOf(i);if(-1==l)return e.Pass;for(var c,u=r(a,"closeBefore"),d=r(a,"triples"),g=s.charAt(l+1)==i,v=t.listSelections(),b=l%2==0,S=0;S<v.length;S++){var P,k=v[S],O=k.head,y=t.getRange(O,n(O.line,O.ch+1));if(b&&!k.empty())P="surround";else if(!g&&b||y!=i)if(g&&O.ch>1&&d.indexOf(i)>=0&&t.getRange(n(O.line,O.ch-2),O)==i+i){if(O.ch>2&&/\bstring/.test(t.getTokenTypeAt(n(O.line,O.ch-2))))return e.Pass;P="addFour"}else if(g){var x=0==O.ch?" ":t.getRange(n(O.line,O.ch-1),O);if(e.isWordChar(y)||x==i||e.isWordChar(x))return e.Pass;P="both"}else{if(!b||!(0===y.length||/\s/.test(y)||u.indexOf(y)>-1))return e.Pass;P="both"}else P=g&&p(t,O)?"both":d.indexOf(i)>=0&&t.getRange(O,n(O.line,O.ch+3))==i+i+i?"skipThree":"skip";if(c){if(c!=P)return e.Pass}else c=P}var m=l%2?s.charAt(l-1):i,A=l%2?i:s.charAt(l+1);t.operation((function(){if("skip"==c)h(t,1);else if("skipThree"==c)h(t,3);else if("surround"==c){for(var e=t.getSelections(),n=0;n<e.length;n++)e[n]=m+e[n]+A;for(t.replaceSelections(e,"around"),e=t.listSelections().slice(),n=0;n<e.length;n++)e[n]=f(e[n]);t.setSelections(e)}else"both"==c?(t.replaceSelection(m+A,null),t.triggerElectric(m+A),h(t,-1)):"addFour"==c&&(t.replaceSelection(m+m+m+m,"before"),h(t,1))}))}function d(e,t){var r=e.getRange(n(t.line,t.ch-1),n(t.line,t.ch+1));return 2==r.length?r:null}function p(e,t){var r=e.getTokenAt(n(t.line,t.ch+1));return/\bstring/.test(r.type)&&r.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}a(t.pairs+"`")}(e.exports);var n=t,r=Object.freeze(Object.assign(Object.create(null),t,{[Symbol.toStringTag]:"Module",default:n}));export{r as c};
