(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[18],{516:function(t,e,a){"use strict";a.r(e);var i=a(528),c=a.n(i),s=a(542),n=a(15),l=a(529),r=a(46),o=a(1),u=a(7),d=a(137),p=a(539),m={data:null,isLoading:!1,isAllFetched:!1,isRemoving:!1,toRemove:null,error:null,filmsCount:0,playlistsCount:0};function f(t,e){switch(e.type){case"field":return Object(n.a)(Object(n.a)({},t),{},Object(d.a)({},e.fieldName,e.payload));case"initial-success":return Object(n.a)(Object(n.a)({},t),{},{isLoading:!1,isInitialLoaded:!0,isAllFetched:e.filmsCount<p.c&&e.playlistsCount<p.c,filmsCount:t.filmsCount+e.filmsCount,playlistsCount:t.playlistsCount+e.playlistsCount,data:Object(s.a)(new Set(e.data))});case"load":return t.isLoading||t.isAllFetched||!t.isInitialLoaded||t.error?t:Object(n.a)(Object(n.a)({},t),{},{isLoading:!0,isAllFetched:!1});case"success":return Object(n.a)(Object(n.a)({},t),{},{isLoading:!1,isAllFetched:e.filmsCount<p.c&&e.playlistsCount<p.c,filmsCount:t.filmsCount+e.filmsCount,playlistsCount:t.playlistsCount+e.playlistsCount,data:Object(s.a)(new Set([].concat(Object(s.a)(t.data),Object(s.a)(e.data))))});case"update-resource":return t.data?Object(n.a)(Object(n.a)({},t),{},{data:t.data.map((function(t){return Boolean(t.isPlaylist)===e.isPlaylist&&t.id===e.resource.id?Object(n.a)(Object(n.a)({},t),{},{title:e.resource.title}):t}))}):t;case"remove":return Object(n.a)(Object(n.a)({},t),{},{toRemove:e.payload,isRemoving:!0});case"remove-success":return Object(n.a)(Object(n.a)({},t),{},{isRemoving:!1,toRemove:null,data:t.toRemove?t.data.filter((function(e){return e.id!==t.toRemove.id})):t.data});case"change-playlist-privacy-success":return Object(n.a)(Object(n.a)({},t),{},{data:t.data.map((function(t){return t.isPlaylist&&t.id===e.payload.id?Object(n.a)(Object(n.a)({},t),{},{is_public:e.payload.is_public}):t}))});case"clear":return m;default:return t}}var j=a(572),b=a(580),O=a(557),h=a(547),y=a(543),v=a(81),x=a(82),g=a(544),P=a(581),C=a(553),k=(a(582),a(143)),R=a(2);e.default=function(){var t=Object(o.useContext)(k.a),e=t.clearToUpdate,a=t.updateResource,i=Object(o.useContext)(v.a),d=i.user,w=i.clearUser,_=Object(o.useContext)(x.a),N=_.showModal,L=_.clear,F=_.removeModalData,A=Object(u.g)(),S=Object(o.useReducer)(f,m),E=Object(r.a)(S,2),U=E[0],I=E[1],J=U.data,M=U.isLoading,B=U.isAllFetched,D=U.isInitialLoaded,T=U.error,q=U.isRemoving,z=U.toRemove,G=U.filmsCount,H=U.playlistsCount,K=Object(o.useCallback)((function(){M||B||!D||T||I({type:"load"})}),[M,B,D,T]);Object(g.a)(K,{triggerOnNoScroll:!0}),Object(o.useEffect)((function(){!d.auth&&d.isInitialLoaded&&(A.replace("".concat("/filmapp-react-frontend/")),A.push("".concat("/filmapp-react-frontend/","login")),w())}),[d,A,w]),Object(o.useEffect)((function(){function t(){return(t=Object(l.a)(c.a.mark((function t(){var e,a,i,l,o,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.allSettled([O.a({playlists:!0,films:!0,populatePlaylists:!0,skipFilms:0,skipPlaylists:0,limit:p.b})]);case 2:e=t.sent,a=Object(r.a)(e,1),i=a[0],l=[],o=[],u=[],"fulfilled"===i.status&&(o=i.value.data.films.map((function(t){return Object(n.a)(Object(n.a)({},t),{},{img:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(t.id,"/thumbnail")})})),u=i.value.data.playlists.map((function(t){var e=t.film_id?"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(t.film_id,"/thumbnail"):P.a;return Object(n.a)(Object(n.a)({},t),{},{img:e,isPlaylist:!0})})),l=[].concat(Object(s.a)(l),Object(s.a)(o),Object(s.a)(u))),I({type:"initial-success",data:l,filmsCount:o.length,playlistsCount:u.length});case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}I({type:"clear"}),function(){t.apply(this,arguments)}()}),[]),Object(o.useEffect)((function(){function t(){return(t=Object(l.a)(c.a.mark((function t(){var e,a,i,l,o,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.allSettled([O.a({playlists:!0,films:!0,populatePlaylists:!0,skipFilms:G,skipPlaylists:H,limit:p.c})]);case 2:e=t.sent,a=Object(r.a)(e,1),i=a[0],l=[],o=[],u=[],"fulfilled"===i.status&&(o=i.value.data.films.map((function(t){return Object(n.a)(Object(n.a)({},t),{},{img:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(t.id,"/thumbnail")})})),u=i.value.data.playlists.map((function(t){var e=t.film_id?"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(t.film_id,"/thumbnail"):P.a;return Object(n.a)(Object(n.a)({},t),{},{img:e,isPlaylist:!0})})),l=[].concat(Object(s.a)(l),Object(s.a)(o),Object(s.a)(u))),I({type:"success",data:l,filmsCount:o.length,playlistsCount:u.length});case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}M&&D&&function(){t.apply(this,arguments)}()}),[G,M,H,D]),Object(o.useEffect)((function(){function t(){return(t=Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!z.isPlaylist){t.next=8;break}return t.next=4,h.d(z.id);case 4:204===t.sent.status&&(I({type:"remove-success"}),L()),t.next=12;break;case 8:return t.next=10,y.g(z.id);case 10:204===t.sent.status&&(I({type:"remove-success"}),L());case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}q&&F.isRemoving&&z&&F.id===z.id&&F.title===z.title&&F.type===(z.isPlaylist?"playlist":"film")&&function(){t.apply(this,arguments)}()}),[q,F,z,L]),Object(o.useEffect)((function(){null!==a.isPlaylist&&null!==a.resource&&(I({type:"update-resource",resource:a.resource,isPlaylist:a.isPlaylist}),e())}),[a,e]);var Q=function(t,e){t.stopPropagation(),F.isRemoving||(I({type:"remove",payload:e}),N(e.id,e.isPlaylist?"playlist":"film",e.title))};return Object(R.jsxs)("div",{className:"row mt-5 mx-2",children:[J?J.map((function(t,e){return t.isPlaylist?Object(R.jsx)(b.a,{playlist:t,index:e,isProfile:!0,dispatchPrivacyUpdate:I,handleRedirect:function(){return function(t){t.film_id&&A.push({pathname:"".concat("/filmapp-react-frontend/","film/")+t.film_id,search:"?list=".concat(t.id)})}(t)},handleRemove:function(e){return Q(e,t)}},t.id):Object(R.jsx)(j.a,{isProfile:!0,film:t,index:e,handleRedirect:function(){return e=t,void A.push({pathname:"".concat("/filmapp-react-frontend/","film/")+e.id,state:{film:e}});var e},handleRemove:function(e){return Q(e,t)}},t.id)})):Object(s.a)(Array(20)).map((function(t,e){return Object(R.jsx)(C.a,{},e)})),!B&&Object(R.jsx)("div",{className:"fetch-loader d-flex justify-content-center",children:M&&Object(R.jsx)("div",{className:"spinner-border"})})]})}},580:function(t,e,a){"use strict";var i=a(46),c=a(1),s=a(536),n=a(552),l=a.n(n),r=a(561),o=a(559),u=a(558),d=a(566),p=a(2);e.a=function(t){var e=t.playlist,a=t.handleRedirect,n=t.handleRemove,m=t.isProfile,f=t.dispatchPrivacyUpdate,j=Object(c.useState)("mb-4 play-outer-container remove-container"),b=Object(i.a)(j,2),O=b[0],h=b[1];return Object(c.useEffect)((function(){e.film_id||h("mb-4 play-cursor-default remove-container")}),[e.film_id]),Object(p.jsx)("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2 container-px",children:Object(p.jsxs)("div",{className:"col ".concat(O," p-0"),onClick:function(){return a(e.id,e.film_id)},children:[Object(p.jsxs)("div",{className:"play-container p-0",children:[Object(p.jsx)(r.a,{image:e.img}),Object(p.jsxs)("div",{className:"row play-middle w-100 m-0",children:[Object(p.jsx)("div",{className:"col-5 col-sm-5 pr-1 d-flex justify-content-end align-items-center",children:Object(p.jsx)(s.a,{icon:"play"})}),Object(p.jsx)("div",{className:"col-7 col-sm-7 pl-1 d-flex justify-content-start align-items-center",children:Object(p.jsx)("small",{className:"font-weight-bold",children:"Play all"})})]})]}),Object(p.jsxs)("div",{className:"row m-0 mt-1",children:[Object(p.jsx)("div",{className:"p-0 col ".concat(m?"button-ripple-div-next-width-3x":"col-12"),children:Object(p.jsx)(l.a,{line:1,text:e.title,className:"mb-1 mt-1 title "})}),m&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{id:e.id,isPublic:e.is_public,isProfile:!0,dispatchPrivacyUpdate:f}),Object(p.jsx)(o.a,{handleRemove:n}),Object(p.jsx)(d.a,{isPlaylist:!0,id:e.id,title:e.title})]})]}),Object(p.jsx)("p",{className:"mb-0 author-nick",children:Object(p.jsx)("span",{children:e.author_name})})]})},e.id)}},581:function(t,e,a){"use strict";e.a=a.p+"static/media/image_not_found.c4ba1e76.png"},582:function(t,e,a){a(583)},583:function(t,e,a){"use strict";var i=a(0),c=a(8),s=a(141),n=a(243),l=a(9);i({target:"Promise",stat:!0},{allSettled:function(t){var e=this,a=s.f(e),i=a.resolve,r=a.reject,o=n((function(){var a=c(e.resolve),s=[],n=0,r=1;l(t,(function(t){var c=n++,l=!1;s.push(void 0),r++,a.call(e,t).then((function(t){l||(l=!0,s[c]={status:"fulfilled",value:t},--r||i(s))}),(function(t){l||(l=!0,s[c]={status:"rejected",reason:t},--r||i(s))}))})),--r||i(s)}));return o.error&&r(o.value),a.promise}})}}]);
//# sourceMappingURL=18.bbc843ba.chunk.js.map