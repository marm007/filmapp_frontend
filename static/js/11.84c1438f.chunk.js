(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[11],{522:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var i=n(7),a=n(139),r=n(532),c=n.n(r),s=n(533),o=n(15),u=n(46),l=n(1),d=n(541),f=n(562),p=n(543),b=n(537),j=n(143),m=n(2),h=function(){var t=Object(l.useContext)(j.a).setToUpdate,e=Object(i.g)(),n=Object(i.i)().id,a=Object(l.useReducer)(f.b,Object(o.a)(Object(o.a)({},f.a),{},{update:{title:"",description:""},initial:{title:"",description:""}})),r=Object(u.a)(a,2),h=r[0],O=h.update,v=h.initial,g=h.isInitialLoaded,y=h.isSumbitted,x=h.isSending,S=h.isError,w=h.error,M=h.isSuccess,D=r[1];Object(l.useEffect)((function(){var t=function(){var t=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.c)(n).then((function(t){D({type:"initial-success",payload:{title:t.data.title,description:t.data.description}})})).catch((function(t){D({type:"error"})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.location.state&&e.location.state.title&&e.location.state.description?D({type:"initial-success",payload:{title:e.location.state.title,description:e.location.state.description}}):t()}),[n,e]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:x?null:function(i){if(i.preventDefault(),D({type:"submit"}),O.title&&O.description)return D({type:"send"}),Object(p.f)(n,{title:O.title,description:O.description}).then((function(n){D({type:"success"}),t(!1,n.data),setTimeout((function(){return Object(b.b)(e,"/update-film")}),500)})).catch((function(t){D({type:"error"})}))},children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title"}),Object(m.jsx)(d.a,{type:"text",name:"title",value:O.title,isInvalid:y&&!O.title,onChange:function(t){return D({type:"update",fieldName:"title",payload:t.target.value})}}),Object(m.jsx)("div",{className:"invalid-feedback",children:"Title cannot be empty"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"description",children:"Description"}),Object(m.jsx)(d.a,{type:"textarea",name:"description",value:O.description,isInvalid:y&&!O.description,onChange:function(t){return D({type:"update",fieldName:"description",payload:t.target.value})}}),Object(m.jsx)("div",{className:"invalid-feedback",children:"Description cannot be empty"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("button",{className:"btn btn-primary",disabled:!g||g&&O.description===v.description&&O.title===v.title,type:"submit",children:"Save"}),x&&Object(m.jsx)("div",{className:"ml-2 spinner-grow"})]})]}),S&&Object(m.jsx)("div",{className:"alert alert-danger mt-2 mb-0",children:w||"Something went wrong"}),M&&Object(m.jsx)("div",{className:"alert alert-success mt-2 mb-0",children:"Changes saved successfully!"})]})};function O(){var t=Object(i.g)();return Object(m.jsx)(a.a,{id:"updatateFilmModal",title:"Update",onClose:function(){Object(b.b)(t,"/update-film")},children:Object(m.jsx)(h,{})})}},532:function(t,e,n){t.exports=n(242)},533:function(t,e,n){"use strict";function i(t,e,n,i,a,r,c){try{var s=t[r](c),o=s.value}catch(u){return void n(u)}s.done?e(o):Promise.resolve(o).then(i,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var c=t.apply(e,n);function s(t){i(c,a,r,s,o,"next",t)}function o(t){i(c,a,r,s,o,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return a}))},537:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return r}));var i=function(t){var e=new Date(Date.parse(t.createdAt));return("0"+e.getDate()).slice(-2)+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getFullYear()).slice(-2)+" o "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)},a=function(t){var e=new Date(Date.parse(t.createdAt)),n=new Date,i=Math.abs(Math.floor((Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes())-Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes()))/6e4));return i/60>=1?(i/=60)/24>=1?(i/=24)/30>=1?(i/=30)/12>=1?(i/=12,i=Math.floor(i)+" years "):i=Math.floor(i)+" months ":i=Math.floor(i)+" days ":i=Math.floor(i)+" hours ":i=Math.floor(i)+" minutes ",i+="ago"},r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=t.location.pathname.split(e)[0],a={pathname:""===i?"/filmapp-react-frontend/":i,search:t.location.search,state:t.location.state};n?t.replace(a):t.push(a)}},541:function(t,e,n){"use strict";var i=n(1),a=n(2);e.a=function(t){var e=t.isInvalid,n=t.onChange,r=t.type,c=t.name,s=t.value,o=t.placeholder,u=void 0===o?"":o,l="textarea"===r?"textarea":"input",d=Object(i.useRef)(null);return Object(i.useEffect)((function(){d.current&&(e?d.current.classList.add("is-invalid"):d.current.classList.remove("is-invalid"))}),[e]),Object(a.jsx)(l,{ref:d,className:"form-control",placeholder:u,type:r,name:c,value:s,onChange:n})}},543:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"g",(function(){return p}));var i=n(42),a=n(138),r=function(t){return i.a.get("films/",{params:t})},c=function(t){return i.a.get("films/".concat(t))},s=function(t){return i.a.get("films/".concat(t,"/details"))},o=function(t){return i.a.get("films/search",{params:t})},u=function(t){return i.a.patch("films/".concat(t,"/view"))},l=function(t){return i.a.post("films",t,{headers:Object(a.a)()})},d=function(t,e){return i.a.patch("films/".concat(t),e,{headers:Object(a.a)()})},f=function(t,e){return i.a.patch("films/".concat(t,"/action"),e,{headers:Object(a.a)()})},p=function(t){return i.a.delete("films/".concat(t),{headers:Object(a.a)()})}},562:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var i=n(137),a=n(15),r={update:{},initial:{},isInitialLoaded:!1,isSumbitted:!1,isSending:!1,isSuccess:!1,isError:!1,error:""},c=function(t,e){switch(e.type){case"update":return Object(a.a)(Object(a.a)({},t),{},{error:"",isError:!1,update:Object(a.a)(Object(a.a)({},t.update),{},Object(i.a)({},e.fieldName,e.payload))});case"initial-success":return Object(a.a)(Object(a.a)({},t),{},{isInitialLoaded:!0,update:e.payload,initial:e.payload});case"submit":return Object(a.a)(Object(a.a)({},t),{},{isSumbitted:!0,isError:!1,error:""});case"send":return Object(a.a)(Object(a.a)({},t),{},{isSending:!0});case"success":return Object(a.a)(Object(a.a)({},t),{},{isSuccess:!0,isSending:!1,isSumbitted:!1,isError:!1,error:""});case"error":return Object(a.a)(Object(a.a)({},t),{},{isSuccess:!1,isSending:!1,isSumbitted:!1,isError:!0,error:e.payload?e.payload:""});default:return t}}}}]);
//# sourceMappingURL=11.84c1438f.chunk.js.map