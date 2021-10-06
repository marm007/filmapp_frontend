(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[13],{520:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(8),r=a(138),s=a(531),i=a.n(s),c=a(532),o=a(15),l=a(47),u=a(1),d=a(83),m=a(562),p=a(549),b=a(540),f=a(536),j=a(2),h=function(){var e=Object(u.useContext)(d.a),t=e.user,a=e.clearUser,r=e.updateUser,s=Object(n.g)(),h=Object(u.useReducer)(m.b,Object(o.a)(Object(o.a)({},m.a),{},{update:{email:"",name:"",password:""},initial:{email:"",name:"",password:""}})),O=Object(l.a)(h,2),g=O[0],v=g.update,w=g.initial,y=g.isSubmitted,x=g.isSending,N=g.isInitialLoaded,S=g.success,M=g.isSuccess,C=g.error,D=O[1];Object(u.useEffect)((function(){!t.auth&&t.isInitialLoaded&&(s.replace("".concat("/filmapp-react-frontend/")),s.push("".concat("/filmapp-react-frontend/","login")),a())}),[t,s,a]),Object(u.useEffect)((function(){function e(){return(e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a().then((function(e){D({type:"initial-success",payload:{name:e.data.name,email:e.data.email,password:""}})})).catch((function(e){console.error(e),D({type:"error"})}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:x?null:function(e){if(e.preventDefault(),D({type:"submit"}),v.password&&v.password.length>=6||v.email||v.name){D({type:"send"});var t={};return v.password&&v.password.length>6&&(t={password:v.password}),v.email&&(t=Object(o.a)(Object(o.a)({},t),{},{email:v.email})),v.name&&(t=Object(o.a)(Object(o.a)({},t),{},{name:v.name})),p.b(t).then((function(e){D({type:"success"}),setTimeout((function(){Object(f.b)(s,"/settings"),r(e.data.accessToken)}),500)})).catch((function(e){console.error(e),D({type:"error",payload:e.response&&e.response.data&&e.response.data.error?e.response.data.error:"Something went wrong!"})}))}},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"form-label",htmlFor:"name",children:"Name"}),Object(j.jsx)(b.a,{type:"text",name:"name",value:v.name,isInvalid:y&&!v.name,onChange:function(e){return D({type:"update",fieldName:"name",payload:e.target.value})}}),Object(j.jsx)("div",{className:"invalid-feedback",children:"Name cannot be empty"})]}),Object(j.jsxs)("div",{className:"mt-2 form-group",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:"email",children:"Email"}),Object(j.jsx)(b.a,{type:"email",name:"email",value:v.email,isInvalid:y&&!v.email,onChange:function(e){return D({type:"update",fieldName:"email",payload:e.target.value})}}),Object(j.jsx)("div",{className:"invalid-feedback",children:"Email cannot be empty"})]}),Object(j.jsxs)("div",{className:"mt-2 form-group",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password"}),Object(j.jsx)(b.a,{type:"password",name:"password",isInvalid:y&&v.password&&v.password.length<6,value:v.password,onChange:function(e){return D({type:"update",fieldName:"password",payload:e.target.value})}}),Object(j.jsx)("div",{className:"invalid-feedback",children:"Password must be at least 6 characters long!"})]}),Object(j.jsxs)("div",{className:"d-flex align-items-center mt-2",children:[Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:x||!N||N&&v.email===w.email&&v.name===w.name&&(!v.password||v.password&&v.password.length<6),children:"Change"}),x&&Object(j.jsx)("div",{className:"ml-2 spinner-grow"})]})]}),C&&Object(j.jsx)("div",{className:"alert alert-danger mt-2 mb-0",children:C||"Error while logging in."}),M&&Object(j.jsx)("div",{className:"alert alert-success mt-2 mb-0",children:S})]})};function O(){var e=Object(n.g)();return Object(j.jsx)(r.a,{id:"settingsModal",title:"Settings",onClose:function(){Object(f.b)(e,"/settings")},children:Object(j.jsx)(h,{})})}},531:function(e,t,a){e.exports=a(241)},532:function(e,t,a){"use strict";function n(e,t,a,n,r,s,i){try{var c=e[s](i),o=c.value}catch(l){return void a(l)}c.done?t(o):Promise.resolve(o).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,s){var i=e.apply(t,a);function c(e){n(i,r,s,c,o,"next",e)}function o(e){n(i,r,s,c,o,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return r}))},536:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return s}));var n=function(e){var t=new Date(Date.parse(e.createdAt));return("0"+t.getDate()).slice(-2)+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getFullYear()).slice(-2)+" o "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)},r=function(e){var t=new Date(Date.parse(e.createdAt)),a=new Date,n=Math.abs(Math.floor((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes())-Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes()))/6e4));return n/60>=1?(n/=60)/24>=1?(n/=24)/30>=1?(n/=30)/12>=1?(n/=12,n=Math.floor(n)+" years "):n=Math.floor(n)+" months ":n=Math.floor(n)+" days ":n=Math.floor(n)+" hours ":n=Math.floor(n)+" minutes ",n+="ago"},s=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.location.pathname.split(t)[0],r={pathname:""===n?"/filmapp-react-frontend/":n,search:e.location.search,state:e.location.state};a?e.replace(r):e.push(r)}},540:function(e,t,a){"use strict";var n=a(1),r=a(2);t.a=function(e){var t=e.isInvalid,a=e.onChange,s=e.type,i=e.name,c=e.value,o=e.placeholder,l=void 0===o?"":o,u=Object(n.useRef)(null);return Object(n.useEffect)((function(){u.current&&(t?u.current.classList.add("is-invalid"):u.current.classList.remove("is-invalid"))}),[t]),"textarea"===s?Object(r.jsx)("textarea",{ref:u,className:"form-control",placeholder:l,type:s,name:i,value:c,onChange:a,rows:8}):Object(r.jsx)("input",{ref:u,className:"form-control",placeholder:l,type:s,name:i,value:c,onChange:a})}},549:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var n=a(43),r=a(137),s=function(e){return n.a.get("users/me",{params:e,headers:Object(r.a)()})},i=function(e){return n.a.patch("users",e,{headers:Object(r.a)()})}},562:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var n=a(136),r=a(15),s={update:{},initial:{},isInitialLoaded:!1,isSumbitted:!1,isSending:!1,isSuccess:!1,isError:!1,error:""},i=function(e,t){switch(t.type){case"update":return Object(r.a)(Object(r.a)({},e),{},{error:"",isError:!1,update:Object(r.a)(Object(r.a)({},e.update),{},Object(n.a)({},t.fieldName,t.payload))});case"initial-success":return Object(r.a)(Object(r.a)({},e),{},{isInitialLoaded:!0,update:t.payload,initial:t.payload});case"submit":return Object(r.a)(Object(r.a)({},e),{},{isSumbitted:!0,isError:!1,error:""});case"send":return Object(r.a)(Object(r.a)({},e),{},{isSending:!0});case"success":return Object(r.a)(Object(r.a)({},e),{},{isSuccess:!0,isSending:!1,isSumbitted:!1,isError:!1,error:""});case"error":return Object(r.a)(Object(r.a)({},e),{},{isSuccess:!1,isSending:!1,isSumbitted:!1,isError:!0,error:t.payload?t.payload:""});default:return e}}}}]);
//# sourceMappingURL=13.327fedcf.chunk.js.map