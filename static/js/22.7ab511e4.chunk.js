(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[22],{512:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(1),c=a(541),i=a(531),r=a.n(i),o=a(532),s=a(47),l=a(8),u=a(136),d=a(15),f=a(539),p={films:null,isLoading:!1,isAllLoaded:!1,isInitialLoaded:!1,error:null},b=function(e,t){switch(t.type){case"field":return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t.fieldName,t.payload));case"load":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,isAllLoaded:!1,error:""});case"initial-load":return Object(d.a)(Object(d.a)({},e),{},{films:Object(c.a)(new Set(Object(c.a)(t.payload))),isLoading:!1,isInitialLoaded:!0,isAllLoaded:t.payload.length<f.b});case"success":return Object(d.a)(Object(d.a)({},e),{},{films:Object(c.a)(new Set([].concat(Object(c.a)(e.films),Object(c.a)(t.payload)))),isLoading:!1,isAllLoaded:t.payload.length<f.c,error:null});case"error":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isAllLoaded:!1,error:t.payload});default:return e}},j=a(567),m=a(555),O=a(542),h=a(544),y=a(2);var g=function(){var e=Object(l.g)(),t=Object(n.useReducer)(b,p),a=Object(s.a)(t,2),i=a[0],u=a[1],d=i.films,g=i.isLoading,L=i.isAllLoaded,x=i.isInitialLoaded,v=Object(n.useCallback)((function(){g||L||!x||u({type:"load"})}),[g,L,x]);return Object(h.a)(v,{triggerOnNoScroll:!0}),Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)({preview:!0,limit:f.b}).then((function(e){var t=e.data;t.forEach((function(e){e.img="".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail")})),u({type:"initial-load",payload:t})})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)({preview:!0,skip:d.length,limit:f.c}).then((function(e){var t=e.data;t.forEach((function(e){e.img="".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(e.id,"/thumbnail")})),u({type:"success",payload:t})})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g&&x&&d&&function(){e.apply(this,arguments)}()}),[g,x,d]),Object(y.jsxs)("div",{className:"row mt-5 mx-2",id:"homePage",children:[d?d.map((function(t,a){return Object(y.jsx)(j.a,{film:t,index:a,handleRedirect:function(){return function(t){e.push({pathname:"".concat("/filmapp-react-frontend/","film/")+t.id,state:{film:t}})}(t)}},t.id)})):Object(c.a)(Array(24)).map((function(e,t){return Object(y.jsx)(m.a,{},t)})),!L&&Object(y.jsx)("div",{className:"fetch-loader d-flex justify-content-center",children:g&&Object(y.jsx)("div",{className:"spinner-border"})})]})};function L(){return Object(n.useEffect)((function(){document.title="FilmApp"}),[]),Object(y.jsx)(g,{})}}}]);
//# sourceMappingURL=22.7ab511e4.chunk.js.map