(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[8],{518:function(e,t,n){"use strict";n.r(t);var c=n(542),i=n(528),a=n.n(i),s=n(529),r=n(46),l=n(1),o=n(7),u=n(137),d=n(15),p=n(539),b={playlists:null,playlistsCount:0,isLoading:!1,isAllFetched:!1,isInitialLoaded:!1,error:null},f=function(e,t){switch(t.type){case"field":return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.fieldName,t.payload));case"initial-success":return Object(d.a)(Object(d.a)({},e),{},{playlists:Object(c.a)(new Set(Object(c.a)(t.playlists))),isLoading:!1,isInitialLoaded:!0,isAllFetched:t.responseCount<p.b,playlistsCount:e.playlistsCount+t.responseCount});case"load":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,isAllFetched:!1,error:null});case"success":return Object(d.a)(Object(d.a)({},e),{},{playlists:Object(c.a)(new Set([].concat(Object(c.a)(e.playlists),Object(c.a)(t.playlists)))),isLoading:!1,isAllFetched:t.responseCount<p.c,playlistsCount:e.playlistsCount+t.responseCount,error:null});case"user-logout":return e.playlists?Object(d.a)(Object(d.a)({},e),{},{playlists:e.playlists.filter((function(e){return e.is_public}))}):e;case"clear":return b;case"error":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isAllFetched:!1,error:t.payload});default:return e}},j=n(554),m=n(580),h=n(547),v=n(549),O=n(544),g=n(81),y=n(2);t.default=function(){var e=Object(l.useContext)(g.a).user,t=Object(o.g)(),n=Object(l.useReducer)(f,b),i=Object(r.a)(n,2),u=i[0],d=i[1],x=u.playlists,w=u.isLoading,N=u.isAllFetched,k=u.isInitialLoaded,C=u.playlistsCount,E=Object(l.useCallback)((function(){w||N||!k||d({type:"load"})}),[N,w,k]);Object(O.a)(E,{triggerOnNoScroll:!0}),Object(l.useEffect)((function(){function t(){return(t=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a().then((function(e){})).catch((function(e){return console.error(e)}));case 2:return e.next=4,h.e({limit:p.b,playlistPage:!0}).then((function(e){var t=e.data,n=t.filter((function(e){return e.film_id}));n.forEach((function(e){e.img="".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.film_id,"/thumbnail")})),console.log(e.data),d({type:"initial-success",playlists:n,responseCount:t.length})})).catch((function(e){console.error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("auth",e.auth),d({type:"clear"}),function(){t.apply(this,arguments)}()}),[e.auth]),Object(l.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("auth","aldalld"),e.next=3,h.e({skip:C,limit:p.c,playlistPage:!0}).then((function(e){var t=e.data,n=t.filter((function(e){return e.film_id}));n.forEach((function(e){e.img="".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.film_id,"/thumbnail")})),d({type:"success",playlists:n,responseCount:t.length})})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}w&&k&&function(){e.apply(this,arguments)}()}),[w,k,x,C]);var L=function(e,n){t.push({pathname:"".concat("/filmapp-react-frontend/","film/")+n,search:"?list=".concat(e)})};return Object(y.jsxs)("div",{className:"row mt-5 mx-2",children:[x?x.map((function(e,t){return Object(y.jsx)(m.a,{playlist:e,index:t,handleRedirect:L},e.id)})):Object(c.a)(Array(20)).map((function(e,t){return Object(y.jsx)(j.a,{},t)})),!N&&Object(y.jsx)("div",{className:"fetch-loader d-flex justify-content-center",children:w&&Object(y.jsx)("div",{className:"spinner spinner-border"})})]})}},539:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"f",(function(){return l}));var c=10,i=12,a=10,s=40,r=20,l=10},544:function(e,t,n){"use strict";var c=n(1),i=n(555),a=n.n(i),s=function(e,t,n){return e?a()(t,e,n):t};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(c.useMemo)((function(){var e,n,c,i,a;return{offset:null!==(e=null===t||void 0===t?void 0:t.offset)&&void 0!==e?e:20,debounce:null!==(n=null===t||void 0===t?void 0:t.debounce)&&void 0!==n?n:200,debounceOptions:null!==(c=null===t||void 0===t?void 0:t.debounceOptions)&&void 0!==c?c:{leading:!0},triggerOnNoScroll:null!==(i=null===t||void 0===t?void 0:t.triggerOnNoScroll)&&void 0!==i&&i,id:null!==(a=null===t||void 0===t?void 0:t.id)&&void 0!==a?a:null}}),[null===t||void 0===t?void 0:t.offset,null===t||void 0===t?void 0:t.debounce,null===t||void 0===t?void 0:t.debounceOptions,null===t||void 0===t?void 0:t.triggerOnNoScroll,null===t||void 0===t?void 0:t.id]),i=n.offset,a=n.triggerOnNoScroll,r=n.debounce,l=n.debounceOptions,o=n.id,u=Object(c.useMemo)((function(){return s(r,e,l)}),[e,r,l]),d=Object(c.useRef)(null),p=Object(c.useCallback)((function(){if(null!=d.current){var e=d.current,t=Math.round(e.scrollTop+e.clientHeight);Math.round(e.scrollHeight-i)<=t&&u()}else if(null!==o){var n=document.getElementById(o);if(n){var c=Math.round(n.scrollTop+n.clientHeight);Math.round(n.scrollHeight-i)<=c&&u()}}else{var a=document.scrollingElement||document.documentElement,s=Math.round(a.scrollTop+window.innerHeight);Math.round(a.scrollHeight-i)<=s&&u()}}),[u,i,o]);return Object(c.useEffect)((function(){var e=d.current,t=document.getElementById(o);return null!=e?e.addEventListener("scroll",p):null!==t?t.addEventListener("scroll",p):window.addEventListener("scroll",p),a&&p(),function(){null!=e?e.removeEventListener("scroll",p):null!==t?t.addEventListener("scroll",p):window.removeEventListener("scroll",p)}}),[p,a,o]),d}},545:function(e,t,n){"use strict";var c=n(15),i=n(46),a=n(144),s=n(579),r=n.n(s),l=n(2),o=["onClick","children","className","id"];t.a=function(e){var t=e.onClick,n=void 0===t?function(){}:t,s=e.children,u=e.className,d=e.id,p=Object(a.a)(e,o),b=r()({background:"black"}),f=Object(i.a)(b,2),j=f[0],m=f[1];return Object(l.jsxs)("button",Object(c.a)(Object(c.a)({id:d||"",onClick:function(e){n(e)},onMouseDown:j,className:"btn btn-link button-ripple text-dark ".concat(u)},p),{},{children:[s,m]}))}},547:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return o}));var c=n(42),i=n(138),a=function(e){return c.a.post("playlists",e,{headers:Object(i.a)()})},s=function(e){return c.a.get("playlists/".concat(e),{headers:Object(i.a)()})},r=function(e){return c.a.get("playlists",{params:e,headers:Object(i.a)()})},l=function(e,t){return c.a.patch("playlists/".concat(e),t,{headers:Object(i.a)()})},o=function(e){return c.a.delete("playlists/".concat(e),{headers:Object(i.a)()})}},549:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var c=n(42),i=n(138),a=function(e){return c.a.get("users/me",{params:e,headers:Object(i.a)()})},s=function(e){return c.a.patch("users",e,{headers:Object(i.a)()})}},554:function(e,t,n){"use strict";var c=n(568),i=n.n(c),a=(n(567),n(2));t.a=function(e){var t=e.isRecommendations;return Object(a.jsxs)("div",{className:"".concat(t?"col-sm-12":"col-sm-6"," mb-4 col col-12 col-md-3 col-lg-2 container-px"),children:[Object(a.jsx)("div",{className:"col-12 col-sm-12 p-0",children:Object(a.jsx)("div",{className:"embed-responsive embed-responsive-16by9 z-depth-1-half play-container",children:Object(a.jsx)("div",{className:"embed-responsive-item",children:Object(a.jsx)(i.a,{className:"w-100 h-100 line-height-unset"})})})}),Object(a.jsxs)("div",{className:"col-12 col-sm-12 mt-2 p-0",children:[Object(a.jsx)("div",{className:"col p-0",children:Object(a.jsx)(i.a,{className:"w-100 h-100 line-height-unset"})}),Object(a.jsx)("div",{className:"col p-0",children:Object(a.jsx)(i.a,{className:"".concat(t?"line-height-unset":""," col w-100")})})]})]})}},558:function(e,t,n){"use strict";var c=n(528),i=n.n(c),a=n(529),s=n(46),r=n(536),l=n(1),o=n(547),u=n(545),d=n(2);t.a=function(e){var t=e.isPublic,n=e.id,c=e.isPlaylist,p=e.dispatchPrivacyUpdate,b=e.filmDispatch,f=Object(l.useState)(!1),j=Object(s.a)(f,2),m=j[0],h=j[1];Object(l.useEffect)((function(){function e(){return(e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c(n,{is_public:!t}).then((function(e){h(!1),p({type:"change-playlist-privacy-success",payload:e.data}),void 0!==b&&b({type:"field",fieldName:"reloadPlaylist",payload:!0})})).catch((function(e){console.error(e),h(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m&&function(){e.apply(this,arguments)}()}),[p,m,t,n,b]);return Object(d.jsx)(u.a,{className:"button-ripple-24 p-0 ".concat(c?"":"remove-holder"),onClick:function(e){e.preventDefault(),e.stopPropagation(),m||h(!0)},children:Object(d.jsx)(r.a,{icon:t?"globe-europe":"lock"})})}},559:function(e,t,n){"use strict";var c=n(536),i=n(545),a=n(2);t.a=function(e){var t=e.handleRemove;return Object(a.jsx)(i.a,{className:"button-ripple-24 remove-holder p-0",onClick:t,children:Object(a.jsx)(c.a,{icon:"trash-alt"})})}},561:function(e,t,n){"use strict";var c=n(46),i=n(1),a=n.n(i);n(613);var s=function(e){var t=e.target,n=e.onIntersect,c=e.threshold,i=void 0===c?.1:c,s=e.rootMargin,r=void 0===s?"0px":s;a.a.useEffect((function(){var e=new IntersectionObserver(n,{rootMargin:r,threshold:i}),c=t.current;return e.observe(c),function(){e.unobserve(c)}}))},r=(n(578),n(2)),l=function(e){var t=e.src,n=e.srcWebp,a=e.thumb,s=e.thumbWebp,l=e.isCached,o=Object(i.useState)(l),u=Object(c.a)(o,2),d=u[0],p=u[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("picture",{children:[Object(r.jsx)("source",{type:"image/webp",srcSet:s}),Object(r.jsx)("source",{type:"image/jpeg",srcSet:a}),Object(r.jsx)("img",{className:"image thumb",alt:"",style:{visibility:d?"hidden":"visible"},src:a,onLoad:function(){p(!0)}})]}),Object(r.jsxs)("picture",{children:[Object(r.jsx)("source",{type:"image/webp",srcSet:n}),Object(r.jsx)("source",{type:"image/jpeg",srcSet:t}),Object(r.jsx)("img",{className:"image full",alt:"",style:{opacity:d?1:0},src:t,onLoad:function(){p(!0)}})]})]})};t.a=function(e){var t=e.image,n=Object(i.useRef)(),a=Object(i.useState)(!1),o=Object(c.a)(a,2),u=o[0],d=o[1],p=Object(i.useState)(!1),b=Object(c.a)(p,2),f=b[0],j=b[1];return s({target:n,onIntersect:function(e,i){if(Object(c.a)(e,1)[0].isIntersecting){var a=new Image;a.src=t.concat("?width=poster_webp"),j(a.complete),d(!0),n.current&&i.unobserve(n.current)}}}),Object(r.jsx)("div",{ref:n,className:"image-container embed-responsive embed-responsive-16by9  play-image",children:u&&Object(r.jsx)(l,{isCached:f,src:t.concat("?width=poster"),srcWebp:t.concat("?width=poster_webp"),thumb:t.concat("?width=preview"),thumbWebp:t.concat("?width=preview_webp")})})}},566:function(e,t,n){"use strict";n(1);var c=n(7),i=n(536),a=n(545),s=n(2);t.a=function(e){var t=e.isPlaylist,n=e.id,r=e.title,l=e.description,o=Object(c.g)();return Object(s.jsx)(a.a,{className:"button-ripple-24 remove-holder p-0",onClick:function(e){e.stopPropagation(),t?o.push({pathname:"profile/update-playlist/".concat(n),state:{title:r}}):o.push({pathname:"profile/update-film/".concat(n),state:{title:r,description:l}})},children:Object(s.jsx)(i.a,{icon:"edit"})})}},567:function(e,t,n){},578:function(e,t,n){},580:function(e,t,n){"use strict";var c=n(46),i=n(1),a=n(536),s=n(553),r=n.n(s),l=n(561),o=n(559),u=n(558),d=n(566),p=n(2);t.a=function(e){var t=e.playlist,n=e.handleRedirect,s=e.handleRemove,b=e.isProfile,f=e.dispatchPrivacyUpdate,j=Object(i.useState)("mb-4 play-outer-container remove-container"),m=Object(c.a)(j,2),h=m[0],v=m[1];return Object(i.useEffect)((function(){t.film_id||v("mb-4 play-cursor-default remove-container")}),[t.film_id]),Object(p.jsx)("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2 container-px",children:Object(p.jsxs)("div",{className:"col ".concat(h," p-0"),onClick:function(){return n(t.id,t.film_id)},children:[Object(p.jsxs)("div",{className:"play-container p-0",children:[Object(p.jsx)(l.a,{image:t.img}),Object(p.jsxs)("div",{className:"row play-middle w-100 m-0",children:[Object(p.jsx)("div",{className:"col-5 col-sm-5 pr-1 d-flex justify-content-end align-items-center",children:Object(p.jsx)(a.a,{icon:"play"})}),Object(p.jsx)("div",{className:"col-7 col-sm-7 pl-1 d-flex justify-content-start align-items-center",children:Object(p.jsx)("small",{className:"font-weight-bold",children:"Play all"})})]})]}),Object(p.jsxs)("div",{className:"row m-0 mt-1",children:[Object(p.jsx)("div",{className:"p-0 col ".concat(b?"button-ripple-div-next-width-3x":"col-12"),children:Object(p.jsx)(r.a,{line:1,text:t.title,className:"mb-1 mt-1 title "})}),b&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{id:t.id,isPublic:t.is_public,isProfile:!0,dispatchPrivacyUpdate:f}),Object(p.jsx)(o.a,{handleRemove:s}),Object(p.jsx)(d.a,{isPlaylist:!0,id:t.id,title:t.title})]})]}),Object(p.jsx)("p",{className:"mb-0 author-nick",children:Object(p.jsx)("span",{children:t.author_name})})]})},t.id)}}}]);
//# sourceMappingURL=8.b92550e7.chunk.js.map