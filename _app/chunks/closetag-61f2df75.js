import{a as e}from"./codemirror-53e4b4bc.js";import{a as t}from"./xml-fold-d0d1618e.js";var n={};!function(e){e.defineOption("autoCloseTags",!1,(function(t,n,r){if(r!=e.Init&&r&&t.removeKeyMap("autoCloseTags"),n){var s={name:"autoCloseTags"};"object"==typeof n&&!1===n.whenClosing||(s["'/'"]=function(e){return a(e)}),"object"==typeof n&&!1===n.whenOpening||(s["'>'"]=function(e){return o(e)}),t.addKeyMap(s)}}));var t=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],n=["applet","blockquote","body","button","div","dl","fieldset","form","frameset","h1","h2","h3","h4","h5","h6","head","html","iframe","layer","legend","object","ol","p","select","table","ul"];function o(o){if(o.getOption("disableInput"))return e.Pass;for(var r=o.listSelections(),a=[],l=o.getOption("autoCloseTags"),c=0;c<r.length;c++){if(!r[c].empty())return e.Pass;var d=r[c].head,g=o.getTokenAt(d),f=e.innerMode(o.getMode(),g.state),u=f.state,m=f.mode.xmlCurrentTag&&f.mode.xmlCurrentTag(u),h=m&&m.name;if(!h)return e.Pass;var p="html"==f.mode.configuration,b="object"==typeof l&&l.dontCloseTags||p&&t,v="object"==typeof l&&l.indentTags||p&&n;g.end>d.ch&&(h=h.slice(0,h.length-g.end+d.ch));var x=h.toLowerCase();if(!h||"string"==g.type&&(g.end!=d.ch||!/[\"\']/.test(g.string.charAt(g.string.length-1))||1==g.string.length)||"tag"==g.type&&m.close||g.string.indexOf("/")==d.ch-g.start-1||b&&s(b,x)>-1||i(o,f.mode.xmlCurrentContext&&f.mode.xmlCurrentContext(u)||[],h,d,!0))return e.Pass;var C="object"==typeof l&&l.emptyTags;if(C&&s(C,h)>-1)a[c]={text:"/>",newPos:e.Pos(d.line,d.ch+2)};else{var y=v&&s(v,x)>-1;a[c]={indent:y,text:">"+(y?"\n\n":"")+"</"+h+">",newPos:y?e.Pos(d.line+1,0):e.Pos(d.line,d.ch+1)}}}var P="object"==typeof l&&l.dontIndentOnAutoClose;for(c=r.length-1;c>=0;c--){var T=a[c];o.replaceRange(T.text,r[c].head,r[c].anchor,"+insert");var j=o.listSelections().slice(0);j[c]={head:T.newPos,anchor:T.newPos},o.setSelections(j),!P&&T.indent&&(o.indentLine(T.newPos.line,null,!0),o.indentLine(T.newPos.line+1,null,!0))}}function r(t,n){for(var o=t.listSelections(),r=[],a=n?"/":"</",s=t.getOption("autoCloseTags"),l="object"==typeof s&&s.dontIndentOnSlash,c=0;c<o.length;c++){if(!o[c].empty())return e.Pass;var d=o[c].head,g=t.getTokenAt(d),f=e.innerMode(t.getMode(),g.state),u=f.state;if(n&&("string"==g.type||"<"!=g.string.charAt(0)||g.start!=d.ch-1))return e.Pass;var m,h="xml"!=f.mode.name&&"htmlmixed"==t.getMode().name;if(h&&"javascript"==f.mode.name)m=a+"script";else if(h&&"css"==f.mode.name)m=a+"style";else{var p=f.mode.xmlCurrentContext&&f.mode.xmlCurrentContext(u),b=p.length?p[p.length-1]:"";if(!p||p.length&&i(t,p,b,d))return e.Pass;m=a+b}">"!=t.getLine(d.line).charAt(g.end)&&(m+=">"),r[c]=m}if(t.replaceSelections(r),o=t.listSelections(),!l)for(c=0;c<o.length;c++)(c==o.length-1||o[c].head.line<o[c+1].head.line)&&t.indentLine(o[c].head.line)}function a(t){return t.getOption("disableInput")?e.Pass:r(t,!0)}function s(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,o=e.length;n<o;++n)if(e[n]==t)return n;return-1}function i(t,n,o,r,a){if(!e.scanForClosingTag)return!1;var s=Math.min(t.lastLine()+1,r.line+500),i=e.scanForClosingTag(t,r,null,s);if(!i||i.tag!=o)return!1;for(var l=a?1:0,c=n.length-1;c>=0&&n[c]==o;c--)++l;for(r=i.to,c=1;c<l;c++){var d=e.scanForClosingTag(t,r,null,s);if(!d||d.tag!=o)return!1;r=d.to}return!0}e.commands.closeTag=function(e){return r(e)}}(e.exports,t.exports);var o=n,r=Object.freeze(Object.assign(Object.create(null),n,{[Symbol.toStringTag]:"Module",default:o}));export{r as c};
