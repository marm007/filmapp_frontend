(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[10],{318:function(e,t,a){"use strict";var i=a(29),c=a(0),n=a(278),s=a(291),l=a.n(s),r=a(301),o=a(298),u=a(297),d=a(1);t.a=function(e){var t=e.playlist,a=e.handleRedirect,s=e.handleRemove,m=e.isProfile,p=e.dispatchPrivacyUpdate,f=m?8:10,j=Object(c.useState)("mb-5 play-outer-container remove-container"),b=Object(i.a)(j,2),h=b[0],v=b[1];return Object(c.useEffect)((function(){t.film_id||v("mb-5 play-cursor-default remove-container")}),[t.film_id]),Object(d.jsx)("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2",children:Object(d.jsxs)("div",{className:"col ".concat(h),onClick:function(){return a(t.id,t.film_id)},children:[Object(d.jsxs)("div",{className:"embed-responsive embed-responsive-16by9 z-depth-1-half play-container",children:[Object(d.jsx)(r.a,{image:t.img}),Object(d.jsxs)("div",{style:{width:"100%",margin:0},className:"row play-middle",children:[Object(d.jsx)("div",{className:"col-5 col-sm-5",style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:Object(d.jsx)(n.a,{icon:"play"})}),Object(d.jsx)("div",{className:"col-7 col-sm-7",style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:Object(d.jsx)("small",{className:"fw-bold",children:"Play all"})})]})]}),Object(d.jsxs)("div",{className:"row m-0 mt-1",children:[Object(d.jsx)("div",{className:"p-0 col-".concat(f," col-sm-").concat(f),children:Object(d.jsx)(l.a,{line:1,text:t.title,className:"mb-1 mt-1 title "})}),m&&Object(d.jsxs)("div",{className:"col-4 col-sm-4 p-0 d-flex justify-content-end",children:[Object(d.jsx)(u.a,{id:t.id,isPublic:t.is_public,isProfile:!0,dispatchPrivacyUpdate:p}),Object(d.jsx)(o.a,{handleRemove:s})]})]}),Object(d.jsx)("p",{className:"mb-0 author-nick",children:Object(d.jsx)("span",{children:t.author_name})})]})},t.id)}},319:function(e,t,a){"use strict";t.a=a.p+"static/media/image_not_found.c4ba1e76.png"},320:function(e,t,a){a(321)},321:function(e,t,a){"use strict";var i=a(3),c=a(9),n=a(322),s=a(323),l=a(6);i({target:"Promise",stat:!0},{allSettled:function(e){var t=this,a=n.f(t),i=a.resolve,r=a.reject,o=s((function(){var a=c(t.resolve),n=[],s=0,r=1;l(e,(function(e){var c=s++,l=!1;n.push(void 0),r++,a.call(t,e).then((function(e){l||(l=!0,n[c]={status:"fulfilled",value:e},--r||i(n))}),(function(e){l||(l=!0,n[c]={status:"rejected",reason:e},--r||i(n))}))})),--r||i(n)}));return o.error&&r(o.value),a.promise}})},322:function(e,t,a){"use strict";var i=a(9),c=function(e){var t,a;this.promise=new e((function(e,i){if(void 0!==t||void 0!==a)throw TypeError("Bad Promise constructor");t=e,a=i})),this.resolve=i(t),this.reject=i(a)};e.exports.f=function(e){return new c(e)}},323:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},446:function(e,t,a){"use strict";a.r(t);var i=a(272),c=a.n(i),n=a(27),s=a(2),l=a(273),r=a(29),o=a(0),u=a(7),d=a(44),m=a(279),p={data:null,isLoading:!1,isAllFetched:!1,isRemoving:!1,toRemove:null,error:null,filmsCount:0,playlistsCount:0};function f(e,t){switch(t.type){case"field":return Object(s.a)(Object(s.a)({},e),{},Object(d.a)({},t.fieldName,t.payload));case"initial-success":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,isInitialLoaded:!0,isAllFetched:t.filmsCount<m.c&&t.playlistsCount<m.c,filmsCount:e.filmsCount+t.filmsCount,playlistsCount:e.playlistsCount+t.playlistsCount,data:Object(n.a)(new Set(t.data))});case"load":return e.isLoading||e.isAllFetched||!e.isInitialLoaded||e.error?e:Object(s.a)(Object(s.a)({},e),{},{isLoading:!0,isAllFetched:!1});case"success":return Object(s.a)(Object(s.a)({},e),{},{isLoading:!1,isAllFetched:t.filmsCount<m.c&&t.playlistsCount<m.c,filmsCount:e.filmsCount+t.filmsCount,playlistsCount:e.playlistsCount+t.playlistsCount,data:Object(n.a)(new Set([].concat(Object(n.a)(e.data),Object(n.a)(t.data))))});case"remove":return Object(s.a)(Object(s.a)({},e),{},{toRemove:t.payload,isRemoving:!0});case"remove-success":return Object(s.a)(Object(s.a)({},e),{},{isRemoving:!1,toRemove:null,data:e.toRemove?e.data.filter((function(t){return t.id!==e.toRemove.id})):e.data});case"change-playlist-privacy-success":return Object(s.a)(Object(s.a)({},e),{},{data:e.data.map((function(e){return e.isPlaylist&&e.id===t.payload.id?Object(s.a)(Object(s.a)({},e),{},{is_public:t.payload.is_public}):e}))});case"clear":return p;default:return e}}var j=a(310),b=a(318),h=a(296),v=a(287),O=a(283),y=a(51),x=a(52),g=a(281),C=a(319),k=a(292),P=(a(320),a(1));t.default=function(){var e=Object(o.useContext)(y.a),t=e.user,a=e.clearUser,i=Object(o.useContext)(x.a),d=i.showModal,w=i.clear,R=i.removeModalData,N=Object(u.g)(),_=Object(o.useReducer)(f,p),L=Object(r.a)(_,2),F=L[0],A=L[1],S=F.data,E=F.isLoading,I=F.isAllFetched,U=F.isInitialLoaded,J=F.error,M=F.isRemoving,z=F.toRemove,B=F.filmsCount,D=F.playlistsCount,T=Object(o.useCallback)((function(){E||I||!U||J||A({type:"load"})}),[E,I,U,J]);Object(g.a)(T,{triggerOnNoScroll:!0}),Object(o.useEffect)((function(){!t.auth&&t.isInitialLoaded&&(N.replace("".concat("/filmapp-react-frontend/")),N.push("".concat("/filmapp-react-frontend/","login")),a())}),[t,N,a]),Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){var t,a,i,l,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([h.a({skipFilms:0,skipPlaylists:0,limit:m.b})]);case 2:t=e.sent,a=Object(r.a)(t,1),i=a[0],l=[],o=[],u=[],"fulfilled"===i.status&&(o=i.value.data.films.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{img:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail")})})),u=i.value.data.playlists.map((function(e){var t=e.film_id?"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.film_id,"/thumbnail"):C.a;return Object(s.a)(Object(s.a)({},e),{},{img:t,isPlaylist:!0})})),l=[].concat(Object(n.a)(l),Object(n.a)(o),Object(n.a)(u))),A({type:"initial-success",data:l,filmsCount:o.length,playlistsCount:u.length});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}A({type:"clear"}),function(){e.apply(this,arguments)}()}),[]),Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){var t,a,i,l,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([h.a({skipFilms:B,skipPlaylists:D,limit:m.c})]);case 2:t=e.sent,a=Object(r.a)(t,1),i=a[0],l=[],o=[],u=[],"fulfilled"===i.status&&(o=i.value.data.films.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{img:"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail")})})),u=i.value.data.playlists.map((function(e){var t=e.film_id?"".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.film_id,"/thumbnail"):C.a;return Object(s.a)(Object(s.a)({},e),{},{img:t,isPlaylist:!0})})),l=[].concat(Object(n.a)(l),Object(n.a)(o),Object(n.a)(u))),A({type:"success",data:l,filmsCount:o.length,playlistsCount:u.length});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}E&&U&&function(){e.apply(this,arguments)}()}),[B,E,D,U]),Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!z.isPlaylist){e.next=8;break}return e.next=4,v.d(z.id);case 4:204===e.sent.status&&(A({type:"remove-success"}),w()),e.next=12;break;case 8:return e.next=10,O.e(z.id);case 10:204===e.sent.status&&(A({type:"remove-success"}),w());case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}M&&R.isRemoving&&z&&R.id===z.id&&R.title===z.title&&R.type===(z.isPlaylist?"playlist":"film")&&function(){e.apply(this,arguments)}()}),[M,R,z,w]);var q=function(e,t){e.stopPropagation(),R.isRemoving||(A({type:"remove",payload:t}),d(t.id,t.isPlaylist?"playlist":"film",t.title))};return Object(P.jsxs)("div",{className:"row mt-5 mx-2",children:[S?S.map((function(e,t){return e.isPlaylist?Object(P.jsx)(b.a,{playlist:e,index:t,isProfile:!0,dispatchPrivacyUpdate:A,handleRedirect:function(){return function(e){e.film_id&&N.push({pathname:"".concat("/filmapp-react-frontend/","film/")+e.film_id,search:"?list=".concat(e.id)})}(e)},handleRemove:function(t){return q(t,e)}},e.id):Object(P.jsx)(j.a,{isProfile:!0,film:e,index:t,handleRedirect:function(){return t=e.id,void N.push({pathname:"".concat("/filmapp-react-frontend/","film/")+t});var t},handleRemove:function(t){return q(t,e)}},e.id)})):Object(n.a)(Array(20)).map((function(e,t){return Object(P.jsx)(k.a,{},t)})),!I&&Object(P.jsx)("div",{className:"fetch-loader d-flex justify-content-center",children:E&&Object(P.jsx)("div",{className:"spinner-border"})})]})}}}]);
//# sourceMappingURL=10.b951baa4.chunk.js.map