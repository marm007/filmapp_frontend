(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[16],{514:function(e,t,n){"use strict";n.r(t);var c=n(528),a=n.n(c),i=n(15),r=n(529),o=n(46),s=n(1),l=n(7),d=n(536),u=n(229),p=n(543),m=n(694),f=n(81),h=(n(661),n(542)),b=n(137),g={options:[],isLoading:!1,isAllFetched:!1,isSearching:!1,isOpen:!1,selected:null,title:""};function j(e,t){switch(t.type){case"field":return Object(i.a)(Object(i.a)({},e),{},Object(b.a)({selected:null},t.fieldName,t.payload));case"pick-option":return Object(i.a)(Object(i.a)({},e),{},{title:t.title,selected:t.selected});case"success-load":return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,isSearching:!1,isAllFetched:t.payload.length<10,options:[].concat(Object(h.a)(e.options),Object(h.a)(t.payload))});case"success-search":return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,isSearching:!1,isAllFetched:t.payload.length<10,options:t.payload});case"clear":return g;case"load":return e.isLoading||e.isAllFetched?e:Object(i.a)(Object(i.a)({},e),{},{isLoading:!0,isAllFetched:!1,isSearching:!1});case"search":return Object(i.a)(Object(i.a)({},e),{},{options:[],isSearching:!0,isLoading:!1,isAllFetched:!1});default:return e}}var A=n(544),v=n(551),O=n(45),w=n(662),y=(n(663),n(664),n(2));t.default=function(e){var t=Object(l.g)(),n=Object(l.h)(),c=Object(v.a)(768),h=Object(s.useContext)(f.a),b=h.user,x=h.logout,N=Object(s.useReducer)(j,g),C=Object(o.a)(N,2),L=C[0],E=C[1],B=L.options,k=L.title,D=L.isLoading,F=L.isAllFetched,P=L.isSearching,I=L.isOpen,H=L.selected,T=Object(s.useCallback)((function(){D||F||P||!I||E({type:"load"})}),[D,F,P,I]);Object(A.a)(T,{id:"typeahead-navbar"});var Y=Object(s.useRef)(null);Object(s.useEffect)((function(){return document.addEventListener("keydown",G),function(){document.removeEventListener("keydown",G)}})),Object(s.useEffect)((function(){window.$("#navbar-collapse-menu").collapse("hide")}),[n]),Object(s.useEffect)((function(){function e(){return(e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.h({search:k,skip:B.length,searchPage:!0}).then((function(e){var t=e.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{imgNormal:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail?width=small"),imgWebp:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail?width=small_webp")})}));E({type:"success-load",payload:t})})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}D&&function(){e.apply(this,arguments)}()}),[D,k,B.length]),Object(s.useEffect)((function(){function e(){return(e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.h({search:k,searchPage:!0}).then((function(e){var t=e.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{imgNormal:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail?width=small"),imgWebp:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail?width=small_webp")})}));E({type:"success-search",payload:t})})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}P&&function(){e.apply(this,arguments)}()}),[P,k]);var G=function(e){if(e&&e.target&&e.target.className&&"rbt-input-main form-control rbt-input  focus"===e.target.className)switch(e.keyCode||e.charCode){case 13:X(e);break;case 9:u.isMobile&&X(e)}},X=function(e){e.preventDefault(),document.getElementById("search-form").reset(),Y&&Y.current.clear(),H?t.push({pathname:"".concat("/filmapp-react-frontend/","film/").concat(H.id),search:"",state:{}}):""===k?t.push({pathname:"".concat("/filmapp-react-frontend/","search"),search:"?title=".concat(k),state:{}}):1===B.length?t.push({pathname:"".concat("/filmapp-react-frontend/","film/").concat(B[0].id),search:"",state:{}}):t.push({pathname:"".concat("/filmapp-react-frontend/","search"),search:"?title=".concat(k),state:{films:B}}),E({type:"clear"})},M=Object(s.useCallback)((function(e){E({type:"search",payload:e})}),[]);return Object(y.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light bg-light py-2 px-3",children:[Object(y.jsx)("div",{className:"col-5 col-sm-2 col-md-4 order-first order-sm-first order-md-first pb-2 px-0",children:Object(y.jsxs)("div",{className:"navbar-brand d-flex align-items-center",onClick:function(){return t.push("/filmapp-react-frontend/")},children:[Object(y.jsx)("img",{alt:"",className:"cursor-pointer",src:"data:image/png;base64,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",width:"30",height:"30"}),Object(y.jsx)("span",{className:"navbar-brand d-none d-md-inline m-0 pl-3 cursor-pointer",children:"FilmApp"})]})}),Object(y.jsx)("div",{className:"col-6 order-2 col-sm-2 order-sm-last text-right d-md-none m-button px-0",children:Object(y.jsx)("button",{type:"button",className:"navbar-toggler m-button","aria-controls":"navbar-collapse-menu","data-toggle":"collapse","data-target":"#navbar-collapse-menu","aria-expanded":"false","aria-label":"toggle-navigation",children:Object(y.jsx)("span",{className:"navbar-toggler-icon"})})}),Object(y.jsx)("div",{className:"col-12 order-3 col-sm-8 order-sm-2 col-md-5 order-md-5",children:Object(y.jsx)("form",{id:"search-form",className:"row row-cols-lg-auto align-items-center",children:Object(y.jsxs)("div",{className:"row m-0 w-100",children:[Object(y.jsx)("div",{className:"col-12 col-sm-10 p-0 mt-2 m-sm-0",children:Object(y.jsx)(m.a,{ref:Y,className:"search-bar",useCache:!1,filterBy:function(){return!0},id:"typeahead-navbar",isLoading:!0,open:I,placeholder:"Search",labelKey:"title",minLength:1,options:B,onSearch:M,onBlur:function(e){return E({type:"field",fieldName:"isOpen",payload:!1})},onFocus:function(e){""!==k&&E({type:"field",fieldName:"isOpen",payload:!0})},onKeyDown:function(e){return E({type:"field",fieldName:"isOpen",payload:!0})},onMenuToggle:function(e){return E({type:"field",fieldName:"isOpen",payload:e})},onInputChange:function(e,t){E({type:"field",fieldName:"title",payload:e}),""===e&&E({type:"field",fieldName:"options",payload:[]})},onChange:function(e){var t=e.length>0?e[0].title:"";E({type:"pick-option",title:t,selected:e.length>0?e[0]:null})},renderMenu:function(e,n){return Object(y.jsxs)(m.b,Object(i.a)(Object(i.a)({},n),{},{className:"pt-4 pb-4",children:[e.map((function(e,n){return Object(y.jsx)(m.c,{option:e,position:n,children:Object(y.jsxs)("div",{className:"row p-0 m-0 entry__inner",onClick:function(n){n.stopPropagation(),n.preventDefault(),E({type:"clear"}),document.getElementById("search-form").reset(),Y&&Y.current.clear(),t.push({pathname:"".concat("/filmapp-react-frontend/","film/").concat(e.id),search:"",state:{}})},children:[Object(y.jsxs)("picture",{children:[Object(y.jsx)("source",{type:"image/webp",src:e.imgWebp}),Object(y.jsx)("source",{type:"image/jpeg",src:e.imgNormal}),Object(y.jsx)("img",{className:"p-0 search-menu-image",alt:"",src:e.imgNormal})]}),Object(y.jsx)("span",{className:"entry__text",children:e.title})]})},e.id)})),!D&&!P&&0===e.length&&Object(y.jsx)("a",{role:"option",className:"dropdown-item disabled",href:"#",children:"No matches found."}),P&&Object(y.jsx)("a",{role:"option",className:"dropdown-item disabled",href:"#",children:"Searching..."}),Object(y.jsx)("div",{className:"d-flex justify-content-center search-menu-spinner",children:D&&!F&&Object(y.jsx)("div",{className:"spinner-border"})})]}))}})}),Object(y.jsx)("div",{className:"col col-sm-2",children:Object(y.jsx)("button",{type:"button",onClick:X,className:"btn btn-light d-none d-sm-inline",children:Object(y.jsx)(d.a,{icon:O.h})})})]})})}),Object(y.jsx)("div",{className:"collapse navbar-collapse justify-content-end col-12 order-last col-sm-12 order-sm-last col-md-3 order-md-last p-0",id:"navbar-collapse-menu",children:Object(y.jsxs)("div",{className:"navbar-nav d-block d-sm-block d-md-flex align-items-center",children:[Object(y.jsx)("div",{className:"nav-item px-2 my-2 px-md-1 my-md-0",children:Object(y.jsx)("span",{className:"d-inline cursor-pointer nav-link p-0",onClick:function(){return t.push("".concat("/filmapp-react-frontend/","playlists"))},children:"Playlists"})}),b.auth&&Object(y.jsx)("div",{className:"nav-item px-2 mb-2 px-md-1 mb-md-0",children:Object(y.jsx)("span",{className:"d-inline cursor-pointer nav-link p-0",onClick:function(){return t.push("".concat("/filmapp-react-frontend/","add"))},children:"Add"})}),b.auth?Object(y.jsxs)(w.a,{className:"avatar-menu-items",align:c?"start":"end",viewScroll:"close",position:"initial",direction:"bottom",menuButton:Object(y.jsx)("div",{className:"my-0 p-md-0 custom-avatar m-button",children:b.name.toUpperCase().charAt(0)}),children:[Object(y.jsx)(w.b,{onClick:function(){t.push("".concat("/filmapp-react-frontend/","profile"))},children:"Profile"}),Object(y.jsx)(w.b,{onClick:function(){var e=n.pathname;"/filmapp-react-frontend/"===e&&(e=e.slice(0,-1)),t.push({pathname:"".concat(e,"/settings"),search:n.search,state:n.state})},children:"Settings"}),Object(y.jsx)(w.b,{onClick:function(){x()},children:"Logout"})]}):Object(y.jsx)("div",{className:"nav-item pr-2 pl-2",children:Object(y.jsx)("span",{className:"d-inline cursor-pointer nav-link p-0",onClick:function(){return function(){var e=n.pathname;"/filmapp-react-frontend/"===e&&(e=e.slice(0,-1)),t.push({pathname:"".concat(e,"/login"),search:n.search,state:n.state})}()},children:"Login"})})]})})]})}},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"g",(function(){return m}));var c=n(42),a=n(138),i=function(e){return c.a.get("films/",{params:e})},r=function(e){return c.a.get("films/".concat(e))},o=function(e){return c.a.get("films/".concat(e,"/details"))},s=function(e){return c.a.get("films/search",{params:e})},l=function(e){return c.a.patch("films/".concat(e,"/view"))},d=function(e){return c.a.post("films",e,{headers:Object(a.a)()})},u=function(e,t){return c.a.patch("films/".concat(e),t,{headers:Object(a.a)()})},p=function(e,t){return c.a.patch("films/".concat(e,"/action"),t,{headers:Object(a.a)()})},m=function(e){return c.a.delete("films/".concat(e),{headers:Object(a.a)()})}},544:function(e,t,n){"use strict";var c=n(1),a=n(554),i=n.n(a),r=function(e,t,n){return e?i()(t,e,n):t};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(c.useMemo)((function(){var e,n,c,a,i;return{offset:null!==(e=null===t||void 0===t?void 0:t.offset)&&void 0!==e?e:20,debounce:null!==(n=null===t||void 0===t?void 0:t.debounce)&&void 0!==n?n:200,debounceOptions:null!==(c=null===t||void 0===t?void 0:t.debounceOptions)&&void 0!==c?c:{leading:!0},triggerOnNoScroll:null!==(a=null===t||void 0===t?void 0:t.triggerOnNoScroll)&&void 0!==a&&a,id:null!==(i=null===t||void 0===t?void 0:t.id)&&void 0!==i?i:null}}),[null===t||void 0===t?void 0:t.offset,null===t||void 0===t?void 0:t.debounce,null===t||void 0===t?void 0:t.debounceOptions,null===t||void 0===t?void 0:t.triggerOnNoScroll,null===t||void 0===t?void 0:t.id]),a=n.offset,i=n.triggerOnNoScroll,o=n.debounce,s=n.debounceOptions,l=n.id,d=Object(c.useMemo)((function(){return r(o,e,s)}),[e,o,s]),u=Object(c.useRef)(null),p=Object(c.useCallback)((function(){if(null!=u.current){var e=u.current,t=Math.round(e.scrollTop+e.clientHeight);Math.round(e.scrollHeight-a)<=t&&d()}else if(null!==l){var n=document.getElementById(l);if(n){var c=Math.round(n.scrollTop+n.clientHeight);Math.round(n.scrollHeight-a)<=c&&d()}}else{var i=document.scrollingElement||document.documentElement,r=Math.round(i.scrollTop+window.innerHeight);Math.round(i.scrollHeight-a)<=r&&d()}}),[d,a,l]);return Object(c.useEffect)((function(){var e=u.current,t=document.getElementById(l);return null!=e?e.addEventListener("scroll",p):null!==t?t.addEventListener("scroll",p):window.addEventListener("scroll",p),i&&p(),function(){null!=e?e.removeEventListener("scroll",p):null!==t?t.addEventListener("scroll",p):window.removeEventListener("scroll",p)}}),[p,i,l]),u}},551:function(e,t,n){"use strict";var c=n(46),a=n(1);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:600,t=Object(a.useState)(window.innerWidth<e),n=Object(c.a)(t,2),i=n[0],r=n[1],o=function(){r(window.innerWidth<e)};return Object(a.useEffect)((function(){return o(),window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[]),i}},663:function(e,t,n){}}]);
//# sourceMappingURL=16.4325e1b6.chunk.js.map