(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[9],{279:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r}));var c=10,i=12,s=10,a=40,r=20},281:function(e,t,n){"use strict";var c=n(0),i=n(293),s=n.n(i),a=function(e,t,n){return e?s()(t,e,n):t};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(c.useMemo)((function(){var e,n,c,i,s;return{offset:null!==(e=null===t||void 0===t?void 0:t.offset)&&void 0!==e?e:20,debounce:null!==(n=null===t||void 0===t?void 0:t.debounce)&&void 0!==n?n:200,debounceOptions:null!==(c=null===t||void 0===t?void 0:t.debounceOptions)&&void 0!==c?c:{leading:!0},triggerOnNoScroll:null!==(i=null===t||void 0===t?void 0:t.triggerOnNoScroll)&&void 0!==i&&i,id:null!==(s=null===t||void 0===t?void 0:t.id)&&void 0!==s?s:null}}),[null===t||void 0===t?void 0:t.offset,null===t||void 0===t?void 0:t.debounce,null===t||void 0===t?void 0:t.debounceOptions,null===t||void 0===t?void 0:t.triggerOnNoScroll,null===t||void 0===t?void 0:t.id]),i=n.offset,s=n.triggerOnNoScroll,r=n.debounce,l=n.debounceOptions,o=n.id,u=Object(c.useMemo)((function(){return a(r,e,l)}),[e,r,l]),d=Object(c.useRef)(null),p=Object(c.useCallback)((function(){if(null!=d.current){var e=d.current,t=Math.round(e.scrollTop+e.clientHeight);Math.round(e.scrollHeight-i)<=t&&u()}else if(null!==o){var n=document.getElementById(o);if(n){var c=Math.round(n.scrollTop+n.clientHeight);Math.round(n.scrollHeight-i)<=c&&u()}}else{var s=document.scrollingElement||document.documentElement,a=Math.round(s.scrollTop+window.innerHeight);Math.round(s.scrollHeight-i)<=a&&u()}}),[u,i,o]);return Object(c.useEffect)((function(){var e=d.current,t=document.getElementById(o);return null!=e?e.addEventListener("scroll",p):null!==t?t.addEventListener("scroll",p):window.addEventListener("scroll",p),s&&p(),function(){null!=e?e.removeEventListener("scroll",p):null!==t?t.addEventListener("scroll",p):window.removeEventListener("scroll",p)}}),[p,s,o]),d}},285:function(e,t,n){"use strict";var c=n(29),i=n(317),s=n.n(i),a=n(1);t.a=function(e){var t=e.onClick,n=e.children,i=e.className,r=s()({background:"black"}),l=Object(c.a)(r,2),o=l[0],u=l[1];return Object(a.jsxs)("button",{style:{color:"black"},onClick:function(e){t(e)},onMouseDown:o,className:"btn btn-link button-ripple ".concat(i),children:[n,u]})}},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return o}));var c=n(30),i=n(84),s=function(e){return c.a.post("playlists",e,{headers:Object(i.a)()})},a=function(e){return c.a.get("playlists/".concat(e),{headers:Object(i.a)()})},r=function(e){return c.a.get("playlists",{params:e,headers:Object(i.a)()})},l=function(e,t){return c.a.patch("playlists/".concat(e),t,{headers:Object(i.a)()})},o=function(e){return c.a.delete("playlists/".concat(e),{headers:Object(i.a)()})}},292:function(e,t,n){"use strict";var c=n(306),i=n.n(c),s=(n(299),n(1));t.a=function(e){var t=e.isRecommendations;return Object(s.jsxs)("div",{className:"".concat(t?"col-sm-12":"col-sm-6"," mb-5 col col-12 col-md-3 col-lg-2 container-px"),children:[Object(s.jsx)("div",{className:"col-12 col-sm-12",children:Object(s.jsx)("div",{className:"embed-responsive embed-responsive-16by9 z-depth-1-half play-container",children:Object(s.jsx)("div",{className:"ratio ratio-16x9",children:Object(s.jsx)(i.a,{className:"w-100 h-100",style:{lineHeight:"1.5"}})})})}),Object(s.jsxs)("div",{className:"col-12 col-sm-12 mt-2",children:[Object(s.jsx)("div",{className:"col p-0",children:Object(s.jsx)(i.a,{className:"col w-100"})}),Object(s.jsx)("div",{className:"col p-0",children:Object(s.jsx)(i.a,{className:"w-100"})})]})]})}},297:function(e,t,n){"use strict";var c=n(272),i=n.n(c),s=n(273),a=n(29),r=n(278),l=n(0),o=n(287),u=n(285),d=n(1);t.a=function(e){var t=e.isPublic,n=e.id,c=e.isProfile,p=e.dispatchPrivacyUpdate,b=e.filmDispatch,f=Object(l.useState)(!1),j=Object(a.a)(f,2),m=j[0],h=j[1];Object(l.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c(n,{is_public:!t}).then((function(e){h(!1),p({type:"change-playlist-privacy-success",payload:e.data}),void 0!==b&&b({type:"field",fieldName:"reloadPlaylist",payload:!0})})).catch((function(e){console.error(e),h(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m&&function(){e.apply(this,arguments)}()}),[p,m,t,n,b]);var v=Object(d.jsx)(u.a,{className:"button-ripple-24 p-0",onClick:function(e){e.stopPropagation(),m||h(!0)},children:Object(d.jsx)(r.a,{icon:t?"globe-europe":"lock"})});return c?Object(d.jsx)("div",{className:"col text-center justify-content-center d-flex align-items-center p-0 flex-grow-0",children:Object(d.jsx)("div",{className:"col remove-holder p-0 m-0 flex-grow-0",style:{height:"24px",width:"24"},children:v})}):v}},298:function(e,t,n){"use strict";var c=n(278),i=n(285),s=n(1);t.a=function(e){var t=e.handleRemove;return Object(s.jsx)(i.a,{className:"button-ripple-24 remove-holder p-0",onClick:t,children:Object(s.jsx)(c.a,{icon:"trash-alt"})})}},299:function(e,t,n){},301:function(e,t,n){"use strict";var c=n(29),i=n(0),s=n.n(i);n(350);var a=function(e){var t=e.target,n=e.onIntersect,c=e.threshold,i=void 0===c?.1:c,a=e.rootMargin,r=void 0===a?"0px":a;s.a.useEffect((function(){var e=new IntersectionObserver(n,{rootMargin:r,threshold:i}),c=t.current;return e.observe(c),function(){e.unobserve(c)}}))},r=(n(316),n(1)),l=function(e){var t=e.src,n=e.srcWebp,s=e.thumb,a=e.thumbWebp,l=e.isCached,o=Object(i.useState)(l),u=Object(c.a)(o,2),d=u[0],p=u[1];return Object(r.jsxs)("div",{className:"ratio ratio-16x9",children:[Object(r.jsxs)("picture",{children:[Object(r.jsx)("source",{type:"image/webp",srcSet:a}),Object(r.jsx)("source",{type:"image/jpeg",srcSet:s}),Object(r.jsx)("img",{className:"image thumb",alt:"",style:{visibility:d?"hidden":"visible"},src:s,onLoad:function(){p(!0)}})]}),Object(r.jsxs)("picture",{children:[Object(r.jsx)("source",{type:"image/webp",srcSet:n}),Object(r.jsx)("source",{type:"image/jpeg",srcSet:t}),Object(r.jsx)("img",{className:"image full",alt:"",style:{opacity:d?1:0},src:t,onLoad:function(){p(!0)}})]})]})};t.a=function(e){var t=e.image,n=Object(i.useRef)(),s=Object(i.useState)(!1),o=Object(c.a)(s,2),u=o[0],d=o[1],p=Object(i.useState)(!1),b=Object(c.a)(p,2),f=b[0],j=b[1];return a({target:n,onIntersect:function(e,i){if(Object(c.a)(e,1)[0].isIntersecting){var s=new Image;s.src=t.concat("?width=poster_webp"),j(s.complete),d(!0),n.current&&i.unobserve(n.current)}}}),Object(r.jsx)("div",{ref:n,className:"image-container ratio ratio-16x9 play-image",children:u&&Object(r.jsx)(l,{isCached:f,src:t.concat("?width=poster"),srcWebp:t.concat("?width=poster_webp"),thumb:t.concat("?width=preview"),thumbWebp:t.concat("?width=preview_webp")})})}},316:function(e,t,n){},318:function(e,t,n){"use strict";var c=n(29),i=n(0),s=n(278),a=n(291),r=n.n(a),l=n(301),o=n(298),u=n(297),d=n(1);t.a=function(e){var t=e.playlist,n=e.handleRedirect,a=e.handleRemove,p=e.isProfile,b=e.dispatchPrivacyUpdate,f=p?8:10,j=Object(i.useState)("mb-5 play-outer-container remove-container"),m=Object(c.a)(j,2),h=m[0],v=m[1];return Object(i.useEffect)((function(){t.film_id||v("mb-5 play-cursor-default remove-container")}),[t.film_id]),Object(d.jsx)("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2",children:Object(d.jsxs)("div",{className:"col ".concat(h),onClick:function(){return n(t.id,t.film_id)},children:[Object(d.jsxs)("div",{className:"embed-responsive embed-responsive-16by9 z-depth-1-half play-container",children:[Object(d.jsx)(l.a,{image:t.img}),Object(d.jsxs)("div",{style:{width:"100%",margin:0},className:"row play-middle",children:[Object(d.jsx)("div",{className:"col-5 col-sm-5",style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:Object(d.jsx)(s.a,{icon:"play"})}),Object(d.jsx)("div",{className:"col-7 col-sm-7",style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:Object(d.jsx)("small",{className:"fw-bold",children:"Play all"})})]})]}),Object(d.jsxs)("div",{className:"row m-0 mt-1",children:[Object(d.jsx)("div",{className:"p-0 col-".concat(f," col-sm-").concat(f),children:Object(d.jsx)(r.a,{line:1,text:t.title,className:"mb-1 mt-1 title "})}),p&&Object(d.jsxs)("div",{className:"col-4 col-sm-4 p-0 d-flex justify-content-end",children:[Object(d.jsx)(u.a,{id:t.id,isPublic:t.is_public,isProfile:!0,dispatchPrivacyUpdate:b}),Object(d.jsx)(o.a,{handleRemove:a})]})]}),Object(d.jsx)("p",{className:"mb-0 author-nick",children:Object(d.jsx)("span",{children:t.author_name})})]})},t.id)}},444:function(e,t,n){"use strict";n.r(t);var c=n(27),i=n(272),s=n.n(i),a=n(273),r=n(29),l=n(0),o=n(7),u=n(44),d=n(2),p=n(279),b={playlists:null,playlistsCount:0,isLoading:!1,isAllFetched:!1,isInitialLoaded:!1,error:null},f=function(e,t){switch(t.type){case"field":return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.fieldName,t.payload));case"initial-success":return Object(d.a)(Object(d.a)({},e),{},{playlists:Object(c.a)(new Set(Object(c.a)(t.playlists))),isLoading:!1,isInitialLoaded:!0,isAllFetched:t.responseCount<p.b,playlistsCount:e.playlistsCount+t.responseCount});case"load":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,isAllFetched:!1,error:null});case"success":return Object(d.a)(Object(d.a)({},e),{},{playlists:Object(c.a)(new Set([].concat(Object(c.a)(e.playlists),Object(c.a)(t.playlists)))),isLoading:!1,isAllFetched:t.responseCount<p.c,playlistsCount:e.playlistsCount+t.responseCount,error:null});case"clear":return b;case"error":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isAllFetched:!1,error:t.payload});default:return e}},j=n(292),m=n(318),h=n(287),v=n(281),O=n(1);t.default=function(){var e=Object(o.g)(),t=Object(l.useReducer)(f,b),n=Object(r.a)(t,2),i=n[0],u=n[1],d=i.playlists,y=i.isLoading,x=i.isAllFetched,g=i.isInitialLoaded,w=i.playlistsCount,N=Object(l.useCallback)((function(){y||x||!g||u({type:"load"})}),[x,y,g]);Object(v.a)(N,{triggerOnNoScroll:!0}),Object(l.useEffect)((function(){function e(){return(e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.e({limit:p.b}).then((function(e){var t=e.data,n=t.filter((function(e){return e.film_id}));n.forEach((function(e){e.img="".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.film_id,"/thumbnail")})),u({type:"initial-success",playlists:n,responseCount:t.length})})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u({type:"clear"}),function(){e.apply(this,arguments)}()}),[]),Object(l.useEffect)((function(){function e(){return(e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.e({skip:w,limit:p.c}).then((function(e){var t=e.data,n=t.filter((function(e){return e.film_id}));n.forEach((function(e){e.img="".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.film_id,"/thumbnail")})),u({type:"success",playlists:n,responseCount:t.length})})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}y&&g&&function(){e.apply(this,arguments)}()}),[y,g,d,w]);var k=function(t,n){e.push({pathname:"".concat("/filmapp-react-frontend/","film/")+n,search:"?list=".concat(t)})};return Object(O.jsxs)("div",{className:"row mt-5 mx-2",children:[d?d.map((function(e,t){return Object(O.jsx)(m.a,{playlist:e,index:t,handleRedirect:k},e.id)})):Object(c.a)(Array(20)).map((function(e,t){return Object(O.jsx)(j.a,{},t)})),!x&&Object(O.jsx)("div",{className:"fetch-loader d-flex justify-content-center",children:y&&Object(O.jsx)("div",{className:"spinner spinner-border"})})]})}}}]);
//# sourceMappingURL=9.31120577.chunk.js.map