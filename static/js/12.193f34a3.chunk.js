(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[12],{510:function(e,t,r){"use strict";r.r(t);var a=r(528),n=r.n(a),s=r(529),i=r(46),c=r(1),o=r(7),l=r(139),u=r(541),d=r(550),f=r(140),m=r(81),b=r(540),p=r(2);t.default=function(){var e=Object(o.g)(),t=Object(c.useContext)(m.a).login,r=Object(c.useReducer)(d.b,d.a),a=Object(i.a)(r,2),h=a[0],j=a[1],v=h.email,g=h.nick,O=h.password,x=h.isSubmitted,y=h.isSuccess,w=h.isSending,N=h.isError,k=h.error;Object(c.useEffect)((function(){function r(){return(r=Object(s.a)(n.a.mark((function r(){return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.d({email:v,password:O,name:g}).then((function(r){j({type:"success"}),setTimeout((function(){t(r.data.user.name,r.data.user.id,r.data.token,r.data.refreshToken),Object(b.b)(e,"/register",!0)}),1500)})).catch((function(e){var t=null;e.response&&e.response.data&&e.response.data.errors?t=e.response.data.errors:e.response&&e.response.data&&e.response.data.error&&(t=e.response.data.error),j({type:"error",payload:t}),console.error(e)}));case 2:case"end":return r.stop()}}),r)})))).apply(this,arguments)}w&&function(){r.apply(this,arguments)}()}),[w,v,g,O,e,t]);return Object(p.jsx)(l.a,{id:"registerModal",title:"Register",onClose:function(){Object(b.b)(e,"/register")},children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j({type:"submit"}),v&&g&&O&&O.length>=6&&j({type:"send"})},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"nick",children:"Nick"}),Object(p.jsx)(u.a,{isInvalid:x&&!g,type:"text",name:"nick",value:g,onChange:function(e){return j({type:"field",fieldName:"nick",payload:e.target.value})}}),Object(p.jsx)("div",{className:"invalid-feedback",children:"Nick is required"})]}),Object(p.jsxs)("div",{className:"mt-2",children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"email",children:"Email"}),Object(p.jsx)(u.a,{isInvalid:x&&!v,type:"email",name:"email",value:v,onChange:function(e){return j({type:"field",fieldName:"email",payload:e.target.value})}}),Object(p.jsx)("div",{className:"invalid-feedback",children:"Email is required"})]}),Object(p.jsxs)("div",{className:"mt-2",children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password"}),Object(p.jsx)(u.a,{isInvalid:x&&O.length<6,type:"password",name:"password",value:O,onChange:function(e){return j({type:"field",fieldName:"password",payload:e.target.value})}}),Object(p.jsx)("div",{className:"invalid-feedback",children:0===O.length?"Password is required":"Password too short (min 6 chars)"})]}),y&&Object(p.jsx)("div",{className:"alert alert-success mt-2",children:"You have successfully registered and logged in."}),N&&Object(p.jsx)("div",{className:"alert alert-danger mt-2",children:k||"Error while registtering."}),Object(p.jsxs)("div",{className:"d-flex align-items-center mt-2",children:[Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"}),w&&Object(p.jsx)("div",{className:"spinner-grow ml-2"})]})]})})}},528:function(e,t,r){e.exports=r(242)},529:function(e,t,r){"use strict";function a(e,t,r,a,n,s,i){try{var c=e[s](i),o=c.value}catch(l){return void r(l)}c.done?t(o):Promise.resolve(o).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var i=e.apply(t,r);function c(e){a(i,n,s,c,o,"next",e)}function o(e){a(i,n,s,c,o,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return n}))},540:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return s}));var a=function(e){var t=new Date(Date.parse(e.createdAt));return("0"+t.getDate()).slice(-2)+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getFullYear()).slice(-2)+" o "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)},n=function(e){var t=new Date(Date.parse(e.createdAt)),r=new Date,a=Math.abs(Math.floor((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes())-Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes()))/6e4));return a/60>=1?(a/=60)/24>=1?(a/=24)/30>=1?(a/=30)/12>=1?(a/=12,a=Math.floor(a)+" years "):a=Math.floor(a)+" months ":a=Math.floor(a)+" days ":a=Math.floor(a)+" hours ":a=Math.floor(a)+" minutes ",a+="ago"},s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.location.pathname.split(t)[0],n={pathname:""===a?"/filmapp-react-frontend/":a,search:e.location.search,state:e.location.state};r?e.replace(n):e.push(n)}},541:function(e,t,r){"use strict";var a=r(1),n=r(2);t.a=function(e){var t=e.isInvalid,r=e.onChange,s=e.type,i=e.name,c=e.value,o=e.placeholder,l=void 0===o?"":o,u="textarea"===s?"textarea":"input",d=Object(a.useRef)(null);return Object(a.useEffect)((function(){d.current&&(t?d.current.classList.add("is-invalid"):d.current.classList.remove("is-invalid"))}),[t]),Object(n.jsx)(u,{ref:d,className:"form-control",placeholder:l,type:s,name:i,value:c,onChange:r})}},550:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var a=r(137),n=r(15),s={email:"",nick:"",password:"",isSubmitted:!1,isSending:!1,isSuccess:!1,isError:!1,error:null},i=function(e,t){switch(t.type){case"field":return Object(n.a)(Object(n.a)({},e),{},Object(a.a)({isSubmitted:!1},t.fieldName,t.payload));case"submit":return Object(n.a)(Object(n.a)({},e),{},{isError:!1,error:null,isSubmitted:!0});case"send":return Object(n.a)(Object(n.a)({},e),{},{isSending:!0});case"success":return Object(n.a)(Object(n.a)({},e),{},{isError:!1,error:null,isSending:!1,isSuccess:!0});case"error":return Object(n.a)(Object(n.a)({},e),{},{isSending:!1,isError:!0,error:t.payload});default:return e}}}}]);
//# sourceMappingURL=12.193f34a3.chunk.js.map