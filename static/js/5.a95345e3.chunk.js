(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[5],{370:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return l}));var i=10,c=12,n=10,s=40,l=20},372:function(e,t,a){"use strict";var i=a(9),c=a(358),n=a(376),s=a.n(n),l=a(1);t.a=function(e){var t=e.onClick,a=e.children,n=e.className,r=s()({background:"black"}),o=Object(i.a)(r,2),u=o[0],d=o[1];return Object(l.jsxs)(c.a,{variant:"link",onClick:function(e){t(e)},onMouseDown:u,className:"button-ripple ".concat(n),children:[a,d]})}},373:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return o}));var i=a(19),c=a(49),n=function(e){return i.a.post("playlists",e,{headers:Object(c.a)()})},s=function(e){return i.a.get("playlists/".concat(e),{headers:Object(c.a)()})},l=function(e){return i.a.get("playlists",{params:e,headers:Object(c.a)()})},r=function(e,t){return i.a.patch("playlists/".concat(e),t,{headers:Object(c.a)()})},o=function(e){return i.a.delete("playlists/".concat(e),{headers:Object(c.a)()})}},374:function(e,t,a){"use strict";var i=a(21),c=a.n(i),n=a(35),s=a(9),l=a(145),r=a(143),o=a(0),u=a(373),d=a(372),p=a(1);t.a=function(e){var t=e.isPublic,a=e.id,i=e.isProfile,m=e.dispatchPrivacyUpdate,f=e.filmDispatch,b=Object(o.useState)(!1),j=Object(s.a)(b,2),h=j[0],O=j[1];Object(o.useEffect)((function(){function e(){return(e=Object(n.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c(a,{is_public:!t}).then((function(e){O(!1),m({type:"change-playlist-privacy-success",payload:e.data}),void 0!==f&&f({type:"field",fieldName:"reloadPlaylist",payload:!0})})).catch((function(e){console.error(e),O(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h&&function(){e.apply(this,arguments)}()}),[m,h,t,a,f]);var y=Object(p.jsx)(d.a,{className:"button-ripple-24 p-0",onClick:function(e){e.stopPropagation(),h||O(!0)},children:Object(p.jsx)(r.a,{icon:t?"globe-europe":"lock"})});return i?Object(p.jsx)(l.a,{className:"text-center justify-content-center d-flex align-items-center p-0 flex-grow-0",children:Object(p.jsx)(l.a,{className:"remove-holder p-0 m-0 flex-grow-0",style:{height:"24px",width:"24"},children:y})}):y}},375:function(e,t,a){"use strict";var i=a(9),c=a(0),n=a.n(c),s=function(e){var t=e.target,a=e.onIntersect,i=e.threshold,c=void 0===i?.1:i,s=e.rootMargin,l=void 0===s?"0px":s;n.a.useEffect((function(){var e=new IntersectionObserver(a,{rootMargin:l,threshold:c}),i=t.current;return e.observe(i),function(){e.unobserve(i)}}))},l=(a(379),a(1)),r=function(e){var t=e.src,a=e.thumb,n=Object(c.useState)(!1),s=Object(i.a)(n,2),r=s[0],o=s[1];return Object(l.jsxs)("div",{className:"ratio ratio-16x9",children:[Object(l.jsx)("img",{className:"image thumb",alt:"",src:a,style:{visibility:r?"hidden":"visible"}}),Object(l.jsx)("img",{onLoad:function(){o(!0)},className:"image full",style:{opacity:r?1:0},alt:"",src:t})]})};t.a=function(e){var t=e.image,a=Object(c.useRef)(),n=Object(c.useState)(!1),o=Object(i.a)(n,2),u=o[0],d=o[1];return s({target:a,onIntersect:function(e,t){Object(i.a)(e,1)[0].isIntersecting&&(d(!0),t.unobserve(a.current))}}),Object(l.jsx)("div",{ref:a,className:"image-container ratio ratio-16x9 play-image",children:u&&Object(l.jsx)(r,{src:t.concat("?width=small_webp"),thumb:t.concat("?width=preview_webp")})})}},379:function(e,t,a){},380:function(e,t,a){"use strict";var i=a(143),c=a(372),n=a(1);t.a=function(e){var t=e.handleRemove;return Object(n.jsx)(c.a,{className:"button-ripple-24 remove-holder p-0",onClick:t,children:Object(n.jsx)(i.a,{icon:"trash-alt"})})}},381:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return n}));var i=function(e){return!!("path"===e.tagName&&e.parentNode.className.animVal&&e.parentNode.className.animVal.includes("playlist-add-icon")||"svg"===e.tagName&&e.className.animVal&&e.className.animVal.includes("playlist-add-icon")||e.className&&"string"===typeof e.className&&e.className.includes("playlist-add-icon-holder"))},c=function(e){var t=new Date(Date.parse(e.createdAt));return("0"+t.getDate()).slice(-2)+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getFullYear()).slice(-2)+" o "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)},n=function(e){var t=new Date(Date.parse(e.createdAt)),a=new Date,i=Math.abs(Math.floor((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes())-Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes()))/6e4));return i/60>=1?(i/=60)/24>=1?(i/=24)/30>=1?(i/=30)/12>=1?(i/=12,i=Math.floor(i)+" years "):i=Math.floor(i)+" months ":i=Math.floor(i)+" days ":i=Math.floor(i)+" hours ":i=Math.floor(i)+" minutes ",i+="ago"}},383:function(e,t,a){},385:function(e,t,a){"use strict";var i=a(9),c=a(0),n=a(474),s=a(145),l=a(143),r=a(2),o=a(21),u=a.n(o),d=a(35),p=a(361),m=a(365),f=a(79),b=a(362),j=a(207),h=a(358),O=a(117),y=a(373),x=a(92),v=a(144),g=a(80),N=a(15),C=a(370),k={playlists:[],isLoading:!0,isAllFetched:!1,isCreating:!1,isAdding:!1,playlistToUpgrade:null,title:"",isPublic:!1,error:""};function w(e,t){switch(t.type){case"field":return Object(r.a)(Object(r.a)({},e),{},Object(N.a)({error:""},t.fieldName,t.payload));case"load":return Object(r.a)(Object(r.a)({},e),{},{isLoading:!0,isAllFetched:!1});case"load-success":return Object(r.a)(Object(r.a)({},e),{},{playlists:[].concat(Object(g.a)(e.playlists),Object(g.a)(t.payload)),isLoading:!1,isAllFetched:t.payload.length<C.d,error:""});case"create":return Object(r.a)(Object(r.a)({},e),{},{isLoading:!1,isCreating:!0});case"create-success":return Object(r.a)(Object(r.a)({},e),{},{isLoading:!1,isCreating:!1});case"add":return Object(r.a)(Object(r.a)({},e),{},{isLoading:!1,isAdding:!0,playlistToUpgrade:t.payload});case"add-update-playlist":return Object(r.a)(Object(r.a)({},e),{},{playlists:e.playlists.map((function(t){return t.id===e.playlistToUpgrade.id?Object(r.a)(Object(r.a)({},t),{},{contains:!t.contains}):t})),playlistToUpgrade:null});case"add-success":return Object(r.a)(Object(r.a)({},e),{},{isAdding:!1});case"change-playlist-privacy-success":return Object(r.a)(Object(r.a)({},e),{},{playlists:e.playlists.map((function(e){return e.id===t.payload.id?Object(r.a)(Object(r.a)({},e),{},{is_public:t.payload.is_public}):e}))});case"error":return Object(r.a)(Object(r.a)({},e),{},{isLoading:!1,isAllFetched:!1,isCreating:!1,error:t.payload,title:""});default:return e}}var P=a(374),R=a(372),_=a(1);var D=function(e){var t=e.filmID,a=e.handlePlaylistClose,o=e.isRecommendations,g=e.filmDispatch,N=Object(c.useContext)(x.a).createToast,D=Object(c.useReducer)(w,k),L=Object(i.a)(D,2),M=L[0],A=L[1],F=M.playlists,I=M.title,U=M.isPublic,E=M.isLoading,S=M.isAllFetched,T=M.isCreating,H=M.isAdding,V=M.playlistToUpgrade,Y=M.error,q=Object(c.useCallback)((function(){E||S||T||H||A({type:"load"})}),[E,S,T,H]),z=Object(v.a)(q);return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a({playlists:!0,skip:F.length,limit:C.d}).then((function(e){var a=e.data.playlists;a.forEach((function(e){e.contains=e.films.indexOf(t)>-1})),A({type:"load-success",payload:a})})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}E&&function(){e.apply(this,arguments)}()}),[t,F,E]),Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={title:I,is_public:U,films_id:[t]},e.next=3,y.a(i).then((function(e){A({type:"create-success"}),N("Created playlist ".concat(I)),a()})).catch((function(e){console.error(e);var t=null;e.response&&e.response.data&&e.response.data.error?t=e.response.data.error:e.response&&e.response.data&&e.response.data.errors&&(t=e.response.data.errors[0]),A({type:"error",payload:"Path `title` is required."===t?"Playlist title is required":t})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}T&&function(){e.apply(this,arguments)}()}),[T,I,U,N,a,t]),Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={films_id:[t]},a=V.contains?Object(r.a)(Object(r.a)({},a),{},{is_remove_films:!0}):Object(r.a)(Object(r.a)({},a),{},{is_remove_films:!1}),i=V.contains?"Deleted from playlist ".concat(V.title):"Added to playlist ".concat(V.title),A({type:"add-update-playlist",playlist:V}),e.next=6,y.c(V.id,a).then((function(e){A({type:"add-success"}),o&&g({type:"field",fieldName:"reloadPlaylist",payload:!0}),N(i)})).catch((function(e){return console.error(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}H&&V&&function(){e.apply(this,arguments)}()}),[H,V,N,g,t,o]),Object(_.jsxs)(n.a.Menu,{onClick:function(e){return e.stopPropagation()},style:{width:"240px",left:"50px !important"},children:[Object(_.jsxs)(p.a,{className:"m-0 m-button button-ripple",children:[Object(_.jsx)(s.a,{className:"playlist-add-exit-text-width",children:"Save to..."}),Object(_.jsx)(R.a,{className:"button-ripple-24 playlist-add-icon-holder p-0 d-flex align-items-center text-center justify-content-center",onClick:function(){return setTimeout(a,150)},children:Object(_.jsx)(l.a,{icon:"times"})})]}),Object(_.jsx)(n.a.Divider,{}),Object(_.jsxs)("div",{ref:z,style:{maxHeight:"100px",overflowY:"scroll",minHeight:"3rem"},children:[F.map((function(e,t){return Object(_.jsxs)(p.a,{className:"m-0 playlist-form-group",children:[Object(_.jsx)(s.a,{xs:10,sm:10,className:"p-0",children:Object(_.jsxs)(m.a.Check,{id:e.id,className:"form-check",children:[Object(_.jsx)(f.a.Input,{type:"checkbox",onChange:function(){return function(e){A({type:"add",payload:e})}(e)},checked:e.contains}),Object(_.jsx)(f.a.Label,{children:Object(_.jsx)("p",{className:"playlist-check-label",children:e.title})})]})}),Object(_.jsx)(P.a,{id:e.id,isPublic:e.is_public,isProfile:!1,filmDispatch:g,dispatchPrivacyUpdate:A})]},e.id)})),!S&&Object(_.jsx)("div",{style:{height:"3rem"},className:"fetch-spinner d-flex justify-content-center align-items-center",children:E&&Object(_.jsx)(b.a,{animation:"border"})})]}),Object(_.jsx)(n.a.Divider,{}),Object(_.jsx)(n.a.ItemText,{children:"Create a new playlist"}),Object(_.jsx)(p.a,{className:"m-0 p-0",children:Object(_.jsxs)(m.a,{children:[Object(_.jsx)(j.a,{isInvalid:""!==Y,onChange:function(e){return A({type:"field",fieldName:"title",payload:e.target.value})},className:"mb-2 mt-2",placeholder:"Enter playlist title..."}),Object(_.jsx)(j.a.Feedback,{type:"invalid",className:"mb-2 mt-2",children:Y}),Object(_.jsxs)(m.a.Select,{"aria-label":"Privacy",className:"mb-2 mt-2",onChange:function(e){return A({type:"field",fieldName:"isPublic",payload:"public"===e.target.value})},children:[Object(_.jsx)("option",{value:"private",children:"Private"}),Object(_.jsx)("option",{value:"public",children:"Public"})]}),Object(_.jsxs)(m.a.Group,{className:"d-flex align-items-center mt-2",children:[Object(_.jsx)(h.a,{disabled:T,onClick:T?null:function(e){e.stopPropagation(),A({type:"create"})},children:"Create"}),T&&Object(_.jsx)(b.a,{className:"ms-2",animation:"grow"})]})]})})]})},L=a(44),M=a(376),A=a.n(M),F=a(52);a(383);t.a=function(e){var t=Object(c.useContext)(L.a).user,a=A()({background:"black"}),r=Object(i.a)(a,2),o=r[0],u=r[1],d=Object(c.useState)(!1),p=Object(i.a)(d,2),m=p[0],f=p[1];return t.auth?Object(_.jsxs)(n.a,{show:m,onToggle:function(e,t,a){f(e)},className:e.isRecommendations?"col-sm-2 col-2 p-0":"",children:[Object(_.jsx)(n.a.Toggle,{variant:"link",bsPrefix:"p-0",className:"m-button button-ripple",style:{color:"black"},children:Object(_.jsx)("div",{style:{display:"inline-block",width:"100%",height:"100%"},children:Object(_.jsxs)(s.a,{onClick:o,className:"playlist-add-icon-holder p-0 button-ripple button-ripple-24",children:[Object(_.jsx)(l.a,{style:{opacity:m?1:""},className:"playlist-add-icon",icon:F.a}),u]})})}),m&&Object(_.jsx)(D,{isRecommendations:e.isRecommendations,filmDispatch:e.filmDispatch,isOpen:m,filmID:e.filmID,handlePlaylistClose:function(){f(!1)}})]}):null}},386:function(e,t,a){},387:function(e,t,a){"use strict";a(0);var i=a(145),c=a(361),n=a(143),s=a(378),l=a.n(s),r=a(375),o=a(385),u=a(381),d=a(380),p=(a(386),a(1));t.a=function(e){var t=e.film,a=e.index,s=e.handleRedirect,m=e.handleRemove,f=e.isProfile,b=e.isRecommendations,j=e.filmDispatch;return Object(p.jsx)("div",{className:b?"row mx-0 mb-4":"col mb-5 col-12 col-sm-6 col-md-3 col-lg-2",children:Object(p.jsxs)("div",{className:(b?"row p-0 m-0":"col").concat(" play-outer-container remove-container"),onClick:function(e){Object(u.a)(e.target)||s(t.id)},children:[Object(p.jsx)(i.a,{xs:b?6:12,sm:b?6:12,className:"m-0 p-0",children:Object(p.jsxs)("div",{className:"embed-responsive embed-responsive-16by9 z-depth-1-half play-container",children:[Object(p.jsx)(r.a,{image:t.img}),Object(p.jsx)(n.a,{className:"play-middle",icon:"play"})]})}),Object(p.jsxs)(i.a,{xs:b?6:12,sm:b?6:12,className:b?"m-0":"m-0 p-0",children:[Object(p.jsxs)(c.a,{className:"m-0 mt-1",children:[Object(p.jsx)(i.a,{className:"film-preview-playlist-title-width p-0",children:Object(p.jsx)(l.a,{line:1,text:t.title,className:"mb-1 mt-1 title "})}),Object(p.jsx)(i.a,{className:"p-0 d-flex justify-content-end",children:f?Object(p.jsx)(d.a,{handleRemove:m}):Object(p.jsx)(o.a,{isRecommendations:b,filmDispatch:j,index:a,filmID:t.id})})]}),Object(p.jsx)("p",{className:"mb-0 author-nick-color",children:Object(p.jsx)("small",{children:t.author_name})}),Object(p.jsx)("p",{className:"mb-0 film-views",children:Object(p.jsxs)("small",{children:[t.views," views"]})})]})]})})}},394:function(e,t,a){"use strict";var i=a(9),c=a(0),n=a(145),s=a(361),l=a(143),r=a(378),o=a.n(r),u=a(375),d=a(380),p=a(374),m=a(1);t.a=function(e){var t=e.playlist,a=e.handleRedirect,r=e.handleRemove,f=e.isProfile,b=e.dispatchPrivacyUpdate,j=f?8:10,h=Object(c.useState)("mb-5 play-outer-container remove-container"),O=Object(i.a)(h,2),y=O[0],x=O[1];return Object(c.useEffect)((function(){t.film_id||x("mb-5 play-cursor-default remove-container")}),[t.film_id]),Object(m.jsx)(n.a,{xs:12,sm:6,md:3,lg:2,children:Object(m.jsxs)(n.a,{className:y,onClick:function(){return a(t.id,t.film_id)},children:[Object(m.jsxs)("div",{className:"embed-responsive embed-responsive-16by9 z-depth-1-half play-container",children:[Object(m.jsx)(u.a,{image:t.img}),Object(m.jsxs)(s.a,{style:{width:"100%",margin:0},className:"play-middle",children:[Object(m.jsx)(n.a,{xs:5,sm:5,style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:Object(m.jsx)(l.a,{icon:"play"})}),Object(m.jsx)(n.a,{xs:7,sm:7,style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:Object(m.jsx)("small",{className:"fw-bold",children:"Play all"})})]})]}),Object(m.jsxs)(s.a,{className:"m-0 mt-1",children:[Object(m.jsx)(n.a,{xs:j,sm:j,className:"p-0",children:Object(m.jsx)(o.a,{line:1,text:t.title,className:"mb-1 mt-1 title "})}),f&&Object(m.jsxs)(n.a,{xs:4,sm:4,className:"p-0 d-flex justify-content-end",children:[Object(m.jsx)(p.a,{id:t.id,isPublic:t.is_public,isProfile:!0,dispatchPrivacyUpdate:b}),Object(m.jsx)(d.a,{handleRemove:r})]})]}),Object(m.jsx)("p",{className:"mb-0 author-nick-color",children:Object(m.jsx)("small",{children:t.author_name})})]})},t.id)}},395:function(e,t,a){"use strict";t.a=a.p+"static/media/image_not_found.c4ba1e76.png"},481:function(e,t,a){"use strict";a.r(t);var i=a(21),c=a.n(i),n=a(80),s=a(2),l=a(35),r=a(9),o=a(0),u=a(18),d=a(361),p=a(362),m=a(15),f=a(370),b={data:[],isLoading:!1,isAllFetched:!1,isRemoving:!1,toRemove:null,error:null,filmsCount:0,playlistsCount:0};function j(e,t){switch(t.type){case"field":return Object(s.a)(Object(s.a)({},e),{},Object(m.a)({},t.fieldName,t.payload));case"initial-success":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,isInitialLoaded:!0,isAllFetched:t.filmsCount<f.c&&t.playlistsCount<f.c,filmsCount:e.filmsCount+t.filmsCount,playlistsCount:e.playlistsCount+t.playlistsCount,data:Object(n.a)(new Set(t.data))});case"load":return e.isLoading||e.isAllFetched||!e.isInitialLoaded||e.error?e:Object(s.a)(Object(s.a)({},e),{},{isLoading:!0,isAllFetched:!1});case"success":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,isAllFetched:t.filmsCount<f.c&&t.playlistsCount<f.c,filmsCount:e.filmsCount+t.filmsCount,playlistsCount:e.playlistsCount+t.playlistsCount,data:Object(n.a)(new Set([].concat(Object(n.a)(e.data),Object(n.a)(t.data))))});case"remove":return Object(s.a)(Object(s.a)({},e),{},{toRemove:t.payload,isRemoving:!0});case"remove-success":return Object(s.a)(Object(s.a)({},e),{},{isRemoving:!1,toRemove:null,data:e.toRemove?e.data.filter((function(t){return t.id!==e.toRemove.id})):e.data});case"change-playlist-privacy-success":return Object(s.a)(Object(s.a)({},e),{},{data:e.data.map((function(e){return e.isPlaylist&&e.id===t.payload.id?Object(s.a)(Object(s.a)({},e),{},{is_public:t.payload.is_public}):e}))});case"clear":return b;default:return e}}var h=a(144),O=a(387),y=a(394),x=a(117),v=a(373),g=a(116),N=a(395),C=a(93),k=a(44),w=a(1);t.default=function(e){var t=Object(o.useContext)(k.a),a=t.user,i=t.clearUser,m=Object(o.useContext)(C.a),P=m.showModal,R=m.clear,_=m.removeModalData,D=Object(u.g)(),L=Object(o.useReducer)(j,b),M=Object(r.a)(L,2),A=M[0],F=M[1],I=A.data,U=A.isLoading,E=A.isAllFetched,S=A.isInitialLoaded,T=A.error,H=A.isRemoving,V=A.toRemove,Y=A.filmsCount,q=A.playlistsCount,z=Object(o.useCallback)((function(){U||E||!S||T||F({type:"load"})}),[U,E,S,T]);Object(h.a)(z,{triggerOnNoScroll:!0}),Object(o.useEffect)((function(){!a.auth&&a.isInitialLoaded&&(D.replace("".concat("/filmapp-react-frontend/")),D.push("".concat("/filmapp-react-frontend/","login")),i())}),[a,D,i]),Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){var t,a,i,l,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([x.a({skipFilms:0,skipPlaylists:0,limit:f.b})]);case 2:t=e.sent,a=Object(r.a)(t,1),i=a[0],l=[],o=[],u=[],"fulfilled"===i.status&&(o=i.value.data.films.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{img:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail")})})),u=i.value.data.playlists.map((function(e){var t=e.film_id?"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.film_id,"/thumbnail"):N.a;return Object(s.a)(Object(s.a)({},e),{},{img:t,isPlaylist:!0})})),l=[].concat(Object(n.a)(l),Object(n.a)(o),Object(n.a)(u))),F({type:"initial-success",data:l,filmsCount:o.length,playlistsCount:u.length});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}F({type:"clear"}),function(){e.apply(this,arguments)}()}),[]),Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){var t,a,i,l,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([x.a({skipFilms:Y,skipPlaylists:q,limit:f.c})]);case 2:t=e.sent,a=Object(r.a)(t,1),i=a[0],l=[],o=[],u=[],"fulfilled"===i.status&&(o=i.value.data.films.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{img:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail")})})),u=i.value.data.playlists.map((function(e){var t=e.film_id?"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.film_id,"/thumbnail"):N.a;return Object(s.a)(Object(s.a)({},e),{},{img:t,isPlaylist:!0})})),l=[].concat(Object(n.a)(l),Object(n.a)(o),Object(n.a)(u))),F({type:"success",data:l,filmsCount:o.length,playlistsCount:u.length});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}U&&S&&function(){e.apply(this,arguments)}()}),[Y,U,q,S]),Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!V.isPlaylist){e.next=8;break}return e.next=4,v.d(V.id);case 4:204===e.sent.status&&(F({type:"remove-success"}),R()),e.next=12;break;case 8:return e.next=10,g.e(V.id);case 10:204===e.sent.status&&(F({type:"remove-success"}),R());case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}H&&_.isRemoving&&V&&_.id===V.id&&_.title===V.title&&_.type===(V.isPlaylist?"playlist":"film")&&function(){e.apply(this,arguments)}()}),[H,_,V,R]);var J=function(e,t){e.stopPropagation(),_.isRemoving||(F({type:"remove",payload:t}),P(t.id,t.isPlaylist?"playlist":"film",t.title))};return Object(w.jsxs)(d.a,{className:"mt-5 mx-2",children:[I.map((function(e,t){return e.isPlaylist?Object(w.jsx)(y.a,{playlist:e,index:t,isProfile:!0,dispatchPrivacyUpdate:F,handleRedirect:function(){return function(e){e.film_id&&D.push({pathname:"".concat("/filmapp-react-frontend/","film/")+e.film_id,search:"?list=".concat(e.id)})}(e)},handleRemove:function(t){return J(t,e)}},e.id):Object(w.jsx)(O.a,{isProfile:!0,film:e,index:t,handleRedirect:function(){return t=e.id,void D.push({pathname:"".concat("/filmapp-react-frontend/","film/")+t});var t},handleRemove:function(t){return J(t,e)}},e.id)})),!E&&Object(w.jsx)("div",{className:"fetch-loader d-flex justify-content-center",children:U&&Object(w.jsx)(p.a,{animation:"border"})})]})}}}]);
//# sourceMappingURL=5.a95345e3.chunk.js.map