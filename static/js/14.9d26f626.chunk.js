(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[14],{518:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var n=r(8),a=r(138),s=r(531),i=r.n(s),c=r(532),o=r(47),u=r(1),l=r(540),d=r(552),f=r(139),b=r(2),m=function(){var e=Object(u.useReducer)(d.b,d.a),t=Object(o.a)(e,2),r=t[0],n=r.email,a=r.isSuccess,s=r.isSubmitted,m=r.isSending,p=r.isError,h=r.error,j=t[1],v=function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),j({type:"submit"}),!n){e.next=5;break}return e.next=5,Object(f.a)({email:n}).then((function(e){j({type:"success"})})).catch((function(e){var t=null;e.response&&e.response.data&&e.response.data.errors&&(t=e.response.data.errors),j({type:"error",payload:t}),console.error(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:v,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)(l.a,{isInvalid:s&&!n,type:"email",name:"email",value:n,onChange:function(e){return j({type:"field",fieldName:"email",payload:e.target.value})}}),Object(b.jsx)("div",{className:"invalid-feedback",children:"Email is required"})]}),Object(b.jsxs)("div",{className:"d-flex align-items-center mt-2",children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Reset password"}),m&&Object(b.jsx)("div",{className:"spinner-grow ml-2"})]})]}),a&&Object(b.jsx)("div",{className:"alert alert-success mt-2",children:"Email with link to reset password has been sent."}),p&&Object(b.jsx)("div",{className:"alert alert-danger mt-2",children:h||"Error while sending email."})]})},p=r(536);function h(){var e=Object(n.g)();return Object(b.jsx)(a.a,{id:"forgotPasswordModal",title:"Forgot",onClose:function(){Object(p.b)(e,"/forgot")},children:Object(b.jsx)(m,{})})}},531:function(e,t,r){e.exports=r(241)},532:function(e,t,r){"use strict";function n(e,t,r,n,a,s,i){try{var c=e[s](i),o=c.value}catch(u){return void r(u)}c.done?t(o):Promise.resolve(o).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var i=e.apply(t,r);function c(e){n(i,a,s,c,o,"next",e)}function o(e){n(i,a,s,c,o,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return a}))},536:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return s}));var n=function(e){var t=new Date(Date.parse(e.createdAt));return("0"+t.getDate()).slice(-2)+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getFullYear()).slice(-2)+" o "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)},a=function(e){var t=new Date(Date.parse(e.createdAt)),r=new Date,n=Math.abs(Math.floor((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes())-Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes()))/6e4));return n/60>=1?(n/=60)/24>=1?(n/=24)/30>=1?(n/=30)/12>=1?(n/=12,n=Math.floor(n)+" years "):n=Math.floor(n)+" months ":n=Math.floor(n)+" days ":n=Math.floor(n)+" hours ":n=Math.floor(n)+" minutes ",n+="ago"},s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.location.pathname.split(t)[0],a={pathname:""===n?"/filmapp-react-frontend/":n,search:e.location.search,state:e.location.state};r?e.replace(a):e.push(a)}},540:function(e,t,r){"use strict";var n=r(1),a=r(2);t.a=function(e){var t=e.isInvalid,r=e.onChange,s=e.type,i=e.name,c=e.value,o=e.placeholder,u=void 0===o?"":o,l=Object(n.useRef)(null);return Object(n.useEffect)((function(){l.current&&(t?l.current.classList.add("is-invalid"):l.current.classList.remove("is-invalid"))}),[t]),"textarea"===s?Object(a.jsx)("textarea",{ref:l,className:"form-control",placeholder:u,type:s,name:i,value:c,onChange:r,rows:8}):Object(a.jsx)("input",{ref:l,className:"form-control",placeholder:u,type:s,name:i,value:c,onChange:r})}},552:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var n=r(136),a=r(15),s={email:"",nick:"",password:"",isSubmitted:!1,isSending:!1,isSuccess:!1,isError:!1,error:null},i=function(e,t){switch(t.type){case"field":return Object(a.a)(Object(a.a)({},e),{},Object(n.a)({isSubmitted:!1},t.fieldName,t.payload));case"submit":return Object(a.a)(Object(a.a)({},e),{},{isError:!1,error:null,isSubmitted:!0});case"send":return Object(a.a)(Object(a.a)({},e),{},{isSending:!0});case"success":return Object(a.a)(Object(a.a)({},e),{},{isError:!1,error:null,isSending:!1,isSuccess:!0});case"error":return Object(a.a)(Object(a.a)({},e),{},{isSending:!1,isError:!0,error:t.payload});default:return e}}}}]);
//# sourceMappingURL=14.9d26f626.chunk.js.map