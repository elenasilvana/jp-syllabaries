(window["webpackJsonpsyllabary-project"]=window["webpackJsonpsyllabary-project"]||[]).push([[0],{34:function(e,t,a){e.exports=a(56)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),i=(a(39),a(9)),o=a(13),s=a(10),u=(a(40),a(15)),d=a(16),m=a(18),p=a(17),f=a(19),h=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row align-items-center justify-content-center"},c.a.createElement("h1",null,"Japanese Syllabaries"),c.a.createElement("p",null," If you are interested on learn the japanese syllabaries we invite you to get familiar with the katakana syllabary on our Syllabaries section, and to play with a syllabary memory game to prove your memory :)!")))}}]),t}(n.Component),E=a(12);a(41);function b(e){var t=e.handleClick,a=e.id,n=e.type,r=e.flipped,l=e.height,i=e.width;return c.a.createElement("div",{className:"flip-container ".concat(r?"flipped":""),style:{width:i,height:l},onClick:function(){return t(a)}},c.a.createElement("div",{className:"flipper"},c.a.createElement("div",{style:{border:"solid grey"},className:r?"front":"back"},r?c.a.createElement("p",{style:{width:"100%"}},n):c.a.createElement("img",{style:{height:l,width:i},src:"".concat("/jp-syllabaries","/img/katakana/").concat(n,".png")}))))}function y(e){var t=e.cards,a=e.flipped,n=e.handleClick;return c.a.createElement("div",{className:"board"},t.map(function(e){return c.a.createElement(b,{key:e.id,id:e.id,type:e.type,width:150,height:150,flipped:a.includes(e.id),handleClick:function(){return n(e.id)}})}))}var O=["A","I","U","E","O","KA","KI","KU","KE","KO","GA","GI","GU","GE","GO","SA","SHI","SU","SE","SO","TA","CHI","TSU","TE","TO","NA","NI","NU","NE","NO","HA","HI","HU","HE","HO","MA","MI","MU","ME","MO","YA","YU","YO","RA","RI","RU","RE","RO","WA","WO","N"],v=function(){return["A","I","U","E","O","KA","KI","KU","KE","KO","GA","GI","GU","GE","GO","SA","SHI","SU","SE","SO","TA","CHI","TSU","TE","TO","NA","NI","NU","NE","NO","HA","HI","HU","HE","HO","MA","MI","MU","ME","MO","YA","YU","YO","RA","RI","RU","RE","RO","WA","WO","N"]};var j=16;function g(){var e=v();console.log("syllabary ",e);for(var t=[],a=0;t.length<j;){var n=Math.floor(Math.random()*e.length);t.push({id:a++,type:e.splice(n,1)[0]}),t.push({id:a++,type:e.splice(n,1)[0]}),console.log(t)}return function(e){for(var t=e.slice(0),a=0;a<e.length-1;a++){var n=Math.floor(Math.random()*(a+1)),c=t[a];t[a]=t[n],t[n]=c}return t}(t)}function k(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),s=o[0],u=o[1];return Object(n.useEffect)(function(){r(function(){var e=0;return Object(E.a)(O).reduce(function(t,a){return t.push({id:e++,type:a}),t},[])}())},[]),c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"align-self-center justify-content-center"},c.a.createElement("h1",null,"Katakana Syllabary"),c.a.createElement(y,{cards:a,flipped:s,handleClick:function(e){return u([].concat(Object(E.a)(s),[e]))}}))))}var w=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("h1",null,"Hola Game")}}]),t}(n.Component);a(42);function N(e){var t=e.handleClick,a=e.disabled,n=e.id,r=e.type,l=e.flipped,i=e.solved,o=e.height,s=e.width;return c.a.createElement("div",{className:"flip-container ".concat(l?"flipped":""),style:{width:s,height:o},onClick:function(){return a?null:t(n)}},c.a.createElement("div",{className:"flipper"},c.a.createElement("img",{style:{height:o,width:s},className:l?"front":"back",src:l||i?"".concat("/jp-syllabaries","/img/katakana/").concat(r,".png"):"".concat("/jp-syllabaries","/img/katakana/back.jpg")})))}a(43);function S(e){var t=e.disabled,a=e.dimension,n=e.cards,r=e.flipped,l=e.solved,i=e.handleClick;return c.a.createElement("div",{className:"board"},n.map(function(e){return c.a.createElement(N,{key:e.id,id:e.id,type:e.type,width:a/4.5,height:a/4.5,flipped:r.includes(e.id),solved:l.includes(e.id),handleClick:i,disabled:t||l.includes(e.id)})}))}function A(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),s=o[0],u=o[1],d=Object(n.useState)(400),m=Object(i.a)(d,2),p=m[0],f=m[1],h=Object(n.useState)([]),b=Object(i.a)(h,2),y=b[0],O=b[1],v=Object(n.useState)(!1),j=Object(i.a)(v,2),k=j[0],w=j[1];Object(n.useEffect)(function(){H(),r(g())},[]),Object(n.useEffect)(function(){N()},a),Object(n.useEffect)(function(){var e=window.addEventListener("resize",H);return function(){return window.removeEventListener("resize",e)}});var N=function(){a.map(function(e){var t="".concat("/jp-syllabaries","/img/katakana/").concat(e.type,".png");console.log(t),(new Image).src=t})},A=function(){u([]),w(!1)},I=function(e){return s.includes(e)},U=function(e){var t=a.find(function(t){return t.id===e});return a.find(function(e){return s[0]===e.id}).type===t.type},H=function(){f(Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight))};return c.a.createElement("div",null,c.a.createElement("h2",null,"do you remember where are the pair card?"),c.a.createElement(S,{dimension:p,cards:a,flipped:s,handleClick:function(e){if(w(!0),0===s.length)u([e]),w(!1);else{if(I(e))return;u([s[0],e]),U(e)?(O([].concat(Object(E.a)(y),[s[0],e])),A()):setTimeout(A,2e3)}},disabled:k,solved:y}))}var I=a(58),U=a(59),H=a(60),C=a(64),M=a(61),G=a(62),K=a(63);var R=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(I.a,{color:"faded",light:!0},c.a.createElement(U.a,{className:"mr-auto"},c.a.createElement(o.b,{to:"/"},"Learn Syllabaries")),c.a.createElement(H.a,{onClick:function(){r(!a)},className:"mr-2"}),c.a.createElement(C.a,{isOpen:a,navbar:!0},c.a.createElement(M.a,{navbar:!0},c.a.createElement(G.a,null,c.a.createElement(K.a,null,c.a.createElement(o.b,{to:"/syllabary"},"Syllabaries"))),c.a.createElement(G.a,null,c.a.createElement(K.a,null,c.a.createElement(o.b,{to:"/memorygame"},"Play")))))),c.a.createElement(s.a,{path:"/",exact:!0,component:h}),c.a.createElement(s.a,{path:"/syllabary",component:k}),c.a.createElement(s.a,{path:"/game",component:w}),c.a.createElement(s.a,{path:"/memorygame",component:A}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);l.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.dd3effc4.chunk.js.map