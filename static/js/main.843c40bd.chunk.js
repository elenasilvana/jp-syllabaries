(this["webpackJsonpsyllabary-project"]=this["webpackJsonpsyllabary-project"]||[]).push([[0],{35:function(e,a,t){e.exports=t(58)},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),o=t(23),i=t(3),s=(t(40),function(){return c.a.createElement("div",{className:"home__container"},c.a.createElement("h1",null,"Home page is work in progress :)! Please visit the other sections"))}),u=t(5),m=(t(41),function(e){var a=e.isHiragana,t=e.type;return c.a.createElement("div",{className:"syllabary-card".concat(a?"-hiragana":"-katakana")},c.a.createElement("div",{className:"syllabary-card-content"},c.a.createElement("img",{style:{height:153,width:153},src:"".concat("/jp-syllabaries","/img/").concat(a?"hiragana":"katakana","/").concat(t,".png"),alt:"".concat(t," hiragana character")}),c.a.createElement("span",{className:"syllabary-card-char"},t.toLowerCase())))}),d=(t(42),function(e){var a=e.cards,t=e.isHiragana,n=["ya","yu","yo"],r=["wa","wo"],l=["n"],o=function(e,a){return a.indexOf(e)>=0};return c.a.createElement("div",{className:"syllabary-board-container"},a.map((function(e){return c.a.createElement("div",{className:"".concat((a=e.type.toLowerCase(),o(a,n)?"w-30":o(a,r)?"w-40":o(a,l)?"w-100":"w-18")," syllabary-card-container")},c.a.createElement(m,{isHiragana:t,type:e.type}));var a})))}),p=t(28),f=t(25),y=["A","I","U","E","O","KA","KI","KU","KE","KO","SA","SHI","SU","SE","SO","TA","CHI","TSU","TE","TO","NA","NI","NU","NE","NO","HA","HI","HU","HE","HO","MA","MI","MU","ME","MO","YA","YU","YO","RA","RI","RU","RE","RO","WA","WO","N"];function E(){for(var e=["A","I","U","E","O","KA","KI","KU","KE","KO","GA","GI","GU","GE","GO","SA","SHI","SU","SE","SO","TA","CHI","TSU","TE","TO","NA","NI","NU","NE","NO","HA","HI","HU","HE","HO","MA","MI","MU","ME","MO","YA","YU","YO","RA","RI","RU","RE","RO","WA","WO","N"],a=[],t=0;a.length<16;){var n=Math.floor(Math.random()*e.length),c={id:t++,type:e.splice(n,1)[0]};a.push(c),a.push(Object(p.a)(Object(p.a)({},c),{},{char:!0,id:t++}))}return function(e){for(var a=e.slice(0),t=0;t<e.length-1;t++){var n=Math.floor(Math.random()*(t+1)),c=a[t];a[t]=a[n],a[n]=c}return a}(a)}t(43);var h=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),E=p[0],h=p[1];return Object(n.useEffect)((function(){r(function(){var e=0;return Object(f.a)(y).reduce((function(a,t){return a.push({id:e++,type:t}),a}),[])}())}),[]),console.log("hiragana ",i," katakana ",E),c.a.createElement("div",{className:"syllabary__container"},c.a.createElement("div",{className:"syllabary-title"},c.a.createElement("h1",{className:"page-title"},E||i?E?"Katakana syllabary":"Hiragana syllabary":"Select syllabary"),c.a.createElement("div",null,c.a.createElement("button",{className:"syllabary-btn-hiragana".concat(i?"-active":""),onClick:function(){s(!0),E&&h(!1)}},"Hiragana"),c.a.createElement("button",{className:"syllabary-btn-katakana".concat(E?"-active":""),onClick:function(){h(!0),i&&s(!1)}},"Katakana"))),c.a.createElement("div",{className:"syllabary__board".concat(i||E?"":"-hide")},c.a.createElement(d,{isHiragana:i,cards:t})))},b=(t(44),function(e){var a=e.colors,t=e.setSelected;return c.a.createElement("div",{className:"selection-palette"},a.map((function(e){return c.a.createElement("div",{onClick:function(){return t(e.code)},style:{background:e.code},className:"selection-palette-btn"})})))}),v=(t(45),function(e){var a=e.handleClick,t=e.disabled,n=e.id,r=e.type,l=e.char,o=e.flipped,i=e.solved,s=e.height,u=e.width,m=e.isHiragana,d=e.selectedColor;return c.a.createElement("div",{className:"flip-container ".concat(o?"flipped":""),onClick:function(){return t?null:a(n)}},c.a.createElement("div",{className:"flipper"},c.a.createElement("div",{className:o?"front":"back",style:{width:u,height:s}},o||i?c.a.createElement("div",{className:"char-container",style:{backgroundImage:"url(".concat("/jp-syllabaries","/img/").concat(m?"hiragana":"katakana","/").concat(r,".png)")}},c.a.createElement("div",null,!0===l?"".concat(r):"")):c.a.createElement("div",{style:{height:s,width:u,background:d,borderRadius:30}})),o||i?c.a.createElement("img",{style:{height:s,width:u},src:"".concat("/jp-syllabaries","/img/").concat(m?"hiragana":"katakana","/").concat(r,".png"),alt:"".concat(m?"hiragana":"katakana"," character for ").concat(r)}):c.a.createElement("div",{style:{height:s,width:u}})))}),g=(t(46),function(e){var a=e.disabled,t=e.dimension,n=e.cards,r=e.flipped,l=e.solved,o=e.selectedColor,i=e.handleClick,s=e.isHiragana;return c.a.createElement("div",{className:"board"},n.map((function(e){return c.a.createElement(v,{key:e.id,id:e.id,type:e.type,char:e.char,width:t/4.5,height:t/4.5,flipped:r.includes(e.id),solved:l.includes(e.id),handleClick:i,disabled:a||l.includes(e.id),isHiragana:s,selectedColor:o})})))}),O=(t(47),[{name:"pink",code:"#f39d91"},{name:"yellow",code:"#f8b133"},{name:"grey",code:"#6a7e85"}]),C=[{name:"green",code:"#11584a"},{name:"yellow",code:"#f8b133"},{name:"grey",code:"#6a7e85"}],k=function(){var e=c.a.useState(!1),a=Object(u.a)(e,2),t=a[0],n=a[1],r=c.a.useState(!1),l=Object(u.a)(r,2),o=l[0],i=l[1],s=c.a.useState([]),m=Object(u.a)(s,2),d=m[0],p=m[1],y=c.a.useState([]),h=Object(u.a)(y,2),v=h[0],k=h[1],N=c.a.useState(400),w=Object(u.a)(N,2),j=w[0],S=w[1],H=c.a.useState([]),A=Object(u.a)(H,2),I=A[0],M=A[1],U=c.a.useState(!1),R=Object(u.a)(U,2),K=R[0],T=R[1],_=c.a.useState(function(e){if(e.length>0)return e[0].code}(O)),P=Object(u.a)(_,2),q=P[0],x=P[1];c.a.useEffect((function(){G(),p(E())}),[]),c.a.useEffect((function(){L()}),d),c.a.useEffect((function(){var e=window.addEventListener("resize",G);return function(){return window.removeEventListener("resize",e)}}));var L=function(){d.map((function(e){var a="".concat("/jp-syllabaries","/img/katakana/").concat(e.type,".png");console.log(a),(new Image).src=a}))},W=function(){k([]),T(!1)},Y=function(e){return v.includes(e)},z=function(e){var a=d.find((function(a){return a.id===e}));return d.find((function(e){return v[0]===e.id})).type===a.type},G=function(){S(Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight))};return c.a.createElement("div",{className:"play__container"},c.a.createElement("div",{className:"play-title"},c.a.createElement("span",{className:"play-display-instruction"},t||o?t?"Playing with Hiragana":"Playing with Katakana":"Select syllabary type to start playing"),c.a.createElement("div",{className:"play-selection-controls"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{className:"syllabary-btn-hiragana".concat(t?"-active":""),onClick:function(){n(!0),o&&i(!1)}},"Hiragana"),c.a.createElement("button",{className:"syllabary-btn-katakana".concat(o?"-active":""),onClick:function(){i(!0),t&&n(!1)}},"Katakana")),(t||o)&&c.a.createElement("div",{className:"play-selection-color"},c.a.createElement(b,{colors:O,setSelected:x}),c.a.createElement(b,{colors:C,setSelected:x}))))),c.a.createElement("div",{className:"play-board".concat(t||o?"":"-hide")},c.a.createElement("h3",{style:{paddingTop:"60px"}},"do you remember where the pair card is?"),c.a.createElement(g,{dimension:j,cards:d,flipped:v,handleClick:function(e){if(T(!0),0===v.length)k([e]),T(!1);else{if(Y(e))return;k([v[0],e]),z(e)?(M([].concat(Object(f.a)(I),[v[0],e])),W()):setTimeout(W,2e3)}},disabled:K,solved:I,isHiragana:t,selectedColor:q})))};function N(){return(N=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function w(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var j=c.a.createElement("path",{d:"M18.1 35.8C16.9 35.8 15.7 35.7001 14.5 35.4001C5 33.5 -1.3 24.1 0.700002 14.5C1.2 12 2.2 9.70005 3.6 7.70005L4.8 8.60005C3.5 10.5 2.6 12.5 2.1 14.8C1.3 19 2.1 23.4 4.5 27C6.9 30.6 10.6 33.1 14.8 34C19.1 34.9001 23.4 34 27 31.6C30.6 29.2001 33.1 25.5 34 21.3C34.9 17 34 12.7001 31.6 9.10005C29.2 5.50005 25.5 3.00005 21.3 2.10005C16.2 1.00005 10.8 2.50005 7 6.10005L5.9 5.00005C10.1 1.10005 16 -0.599951 21.6 0.600049C26.3 1.50005 30.3 4.20005 32.9 8.20005C35.5 12.2 36.4 16.9 35.5 21.5C34.6 26.2001 31.9 30.2 27.9 32.8C25 34.8 21.6 35.8 18.1 35.8Z",fill:"#455E67"}),S=c.a.createElement("path",{d:"M13.8999 14.2H10.3999V25.6H13.8999V14.2Z",fill:"#455E67"}),H=c.a.createElement("path",{d:"M12.1 12.7C13.2598 12.7 14.2 11.7598 14.2 10.6C14.2 9.4402 13.2598 8.5 12.1 8.5C10.9402 8.5 10 9.4402 10 10.6C10 11.7598 10.9402 12.7 12.1 12.7Z",fill:"#455E67"}),A=c.a.createElement("path",{d:"M19.5001 19.5999C19.5001 17.9999 20.2001 16.9999 21.6001 16.9999C22.9001 16.9999 23.5001 17.8999 23.5001 19.5999C23.5001 21.1999 23.5001 25.5999 23.5001 25.5999H27.0001C27.0001 25.5999 27.0001 21.3999 27.0001 18.3999C27.0001 15.3999 25.3001 13.8999 22.9001 13.8999C20.5001 13.8999 19.5001 15.7999 19.5001 15.7999V14.2999H16.1001V25.6999H19.5001C19.5001 25.5999 19.5001 21.3999 19.5001 19.5999Z",fill:"#455E67"}),I=function(e){var a=e.svgRef,t=e.title,n=w(e,["svgRef","title"]);return c.a.createElement("svg",N({width:37,height:36,viewBox:"0 0 37 36",fill:"none",ref:a},n),t?c.a.createElement("title",null,t):null,j,S,H,A)},M=c.a.forwardRef((function(e,a){return c.a.createElement(I,N({svgRef:a},e))})),U=(t.p,t(48),function(){return c.a.createElement("div",{className:"about__container"},c.a.createElement("div",{className:"about-description"},c.a.createElement("div",{className:"about-description-container"},c.a.createElement("h2",null,"Syllabary Project"),c.a.createElement("span",null,"Por qu\xe9 silabarios? El inter\xe9s por crear este proyecto surge por una parte para estudiar los syllabarios japoneses, en particular el Katakana (para mi \xe9ste ha sido el mas complicado). Pens\xe9 que ser\xeda \xfatil para quien quisiera adentrarse en este camino de aprendizaje y quisiera poner a prueba sus conocimientos del silabario, o practicar."),c.a.createElement("span",null,"El 2019 estuvo lleno de cambios, uno de ellos fue que ingres\xe9 a un bootcamp (Laboratoria). Y con ello empez\xe9 a caminar por un rumbo que no hab\xeda imaginado. El de iniciarme en la traves\xeda de aprender a programar. Como algunos ya sabr\xe1n, el tiempo en un bootcamp es poco, pero ese tiempo tambi\xe9n di\xf3 para dar los primeros pasos en React, y un poco de Node."),c.a.createElement("span",null,"Cre\xe9 este proyecto adem\xe1s por las razones ya mencionadas, porque me pareci\xf3 un reto para practicar y mejorar mis skills tecnicas. Empec\xe9 a desarrollar esta web app hace aproximadamente un a\xf1o (agosto 2019) utilizando React, react hooks, y propTypes. despu\xe9s de un a\xf1o decid\xed hacer un refactor y poner en pr\xe1ctica las cosas que aprend\xed durante este a\xf1o. Aun hacen falta algunas iteraciones para poder completar el refactor y las mejoras contempladas."),c.a.createElement("span",null,"Stack"),c.a.createElement("span",null,"React, Typescript, Sass"))),c.a.createElement("div",{className:"about-contact"},c.a.createElement("h2",null,"Contact"),c.a.createElement("span",{className:"about-contact-role"},"Front-End Developer Junior"),c.a.createElement("span",null,"Elena Silvana Casillas"),c.a.createElement("a",{href:"https://www.linkedin.com/in/elena-silvana-c/"},c.a.createElement(M,{className:"about-contact-icon"}))))}),R=t(73),K=t(32),T=t.n(K),_=(t(49),{name:"public_routes",children:[{id:"public.home",name:"Home",path:"/",icon:""},{id:"public.syllabary",name:"Syllabary",path:"/syllabary",icon:""},{id:"public.play",name:"Play",path:"/play",icon:""},{id:"public.about",name:"About",path:"/about",icon:""}]}),P=function(e){var a=e.children,t=c.a.useState(!1),n=Object(u.a)(t,2),r=n[0],l=n[1],s=_,m=Object(i.e)();return c.a.createElement("div",null,c.a.createElement("div",{className:"topnav-menu"},void 0!==s&&s.children.map((function(e){return c.a.createElement(o.b,{className:"topnav-menu-item ".concat(r?"topnav-menu-item-is-open":""," ").concat(m.pathname===e.path?"active-item":""),to:e.path,onClick:function(){return l(!1)}},e.name.toUpperCase())})),c.a.createElement("div",{className:"topnav-menu-icon".concat(r?"-is-open":"")},c.a.createElement(R.a,{onClick:function(){return l(!r)}},c.a.createElement(T.a,null)))),c.a.createElement("div",null,a))};t(57);var q=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null,c.a.createElement(P,null,c.a.createElement(i.a,{path:"/",exact:!0,component:s}),c.a.createElement(i.a,{path:"/syllabary",component:h}),c.a.createElement(i.a,{path:"/play",component:k}),c.a.createElement(i.a,{path:"/about",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.843c40bd.chunk.js.map