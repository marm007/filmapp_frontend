(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[11],{507:function(e,t,n){"use strict";n.r(t);var a=n(528),r=n.n(a),s=n(529),i=n(46),c=n(1),o=n(7),l=n(139),u=n(541),d=n(140),b=n(81),f=n(550),m=n(540),p=n(2);t.default=function(){var e=Object(c.useContext)(b.a).login,t=Object(o.g)(),n=Object(o.h)(),a=Object(c.useReducer)(f.b,f.a),h=Object(i.a)(a,2),j=h[0],g=h[1],v=j.email,O=j.password,x=j.isSubmitted,y=j.isSending,w=j.isError,N=j.isSuccess,M=j.error;Object(c.useEffect)((function(){function n(){return(n=Object(s.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.b({email:v,password:O}).then((function(n){g({type:"success"}),e(n.data.user.name,n.data.user.id,n.data.token,n.data.refreshToken),setTimeout((function(){return Object(m.b)(t,"/login",!0)}),1500)})).catch((function(e){var t=null;e.response&&e.response.data&&e.response.data.errors&&(t=e.response.data.errors),g({type:"error",payload:t}),console.error(e)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}y&&function(){n.apply(this,arguments)}()}),[y,v,O,t,n,e]);return Object(p.jsxs)(l.a,{id:"loginModal",title:"Login",onClose:function(){Object(m.b)(t,"/login")},children:[Object(p.jsxs)("form",{onSubmit:y?null:function(e){e.preventDefault(),g({type:"submit"}),v&&O&&g({type:"send"})},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"email",children:"Email"}),Object(p.jsx)(u.a,{isInvalid:x&&!v,type:"email",name:"email",value:v,onChange:function(e){return g({type:"field",fieldName:"email",payload:e.target.value})}}),Object(p.jsx)("div",{className:"invalid-feedback",children:"Email is required"})]}),Object(p.jsxs)("div",{className:"mt-2",children:[Object(p.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password"}),Object(p.jsx)(u.a,{isInvalid:x&&!O,type:"password",name:"password",value:O,onChange:function(e){return g({type:"field",fieldName:"password",payload:e.target.value})}}),Object(p.jsx)("div",{className:"invalid-feedback",children:"Password is required"})]}),Object(p.jsxs)("div",{className:"d-flex align-items-center mt-2",children:[Object(p.jsx)("button",{disabled:y,type:"submit",className:"btn btn-primary",children:"Login"}),y&&Object(p.jsx)("div",{className:"spinner-grow ml-2"})]})]}),w&&Object(p.jsx)("div",{className:"alert alert-danger mt-2 mb-0",children:M||"Error while logging in."}),N&&Object(p.jsx)("div",{className:"alert alert-success mt-2 mb-0",children:"You are now logged in."}),Object(p.jsx)("button",{onClick:function(){Object(m.b)(t,"/login"),setTimeout((function(){t.push("".concat(n.pathname.slice(0,-5),"register").concat(n.search))}),500)},className:"p-0 mt-2 btn btn-link",children:"Register"}),Object(p.jsx)("div",{className:"col-12 col-sm-12 p-0 m-0 ",children:Object(p.jsx)("button",{type:"button",onClick:function(){Object(m.b)(t,"/login"),setTimeout((function(){t.push("".concat(n.pathname.slice(0,-5),"forgot").concat(n.search))}),500)},className:"p-0 mt-2 btn btn-link",children:"Forgot password?"})})]})}},528:function(e,t,n){e.exports=n(242)},529:function(e,t,n){"use strict";function a(e,t,n,a,r,s,i){try{var c=e[s](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function c(e){a(i,r,s,c,o,"next",e)}function o(e){a(i,r,s,c,o,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return r}))},540:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s}));var a=function(e){var t=new Date(Date.parse(e.createdAt));return("0"+t.getDate()).slice(-2)+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getFullYear()).slice(-2)+" o "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)},r=function(e){var t=new Date(Date.parse(e.createdAt)),n=new Date,a=Math.abs(Math.floor((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes())-Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes()))/6e4));return a/60>=1?(a/=60)/24>=1?(a/=24)/30>=1?(a/=30)/12>=1?(a/=12,a=Math.floor(a)+" years "):a=Math.floor(a)+" months ":a=Math.floor(a)+" days ":a=Math.floor(a)+" hours ":a=Math.floor(a)+" minutes ",a+="ago"},s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.location.pathname.split(t)[0],r={pathname:""===a?"/filmapp-react-frontend/":a,search:e.location.search,state:e.location.state};n?e.replace(r):e.push(r)}},541:function(e,t,n){"use strict";var a=n(1),r=n(2);t.a=function(e){var t=e.isInvalid,n=e.onChange,s=e.type,i=e.name,c=e.value,o=e.placeholder,l=void 0===o?"":o,u="textarea"===s?"textarea":"input",d=Object(a.useRef)(null);return Object(a.useEffect)((function(){d.current&&(t?d.current.classList.add("is-invalid"):d.current.classList.remove("is-invalid"))}),[t]),Object(r.jsx)(u,{ref:d,className:"form-control",placeholder:l,type:s,name:i,value:c,onChange:n})}},550:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var a=n(137),r=n(15),s={email:"",nick:"",password:"",isSubmitted:!1,isSending:!1,isSuccess:!1,isError:!1,error:null},i=function(e,t){switch(t.type){case"field":return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({isSubmitted:!1},t.fieldName,t.payload));case"submit":return Object(r.a)(Object(r.a)({},e),{},{isError:!1,error:null,isSubmitted:!0});case"send":return Object(r.a)(Object(r.a)({},e),{},{isSending:!0});case"success":return Object(r.a)(Object(r.a)({},e),{},{isError:!1,error:null,isSending:!1,isSuccess:!0});case"error":return Object(r.a)(Object(r.a)({},e),{},{isSending:!1,isError:!0,error:t.payload});default:return e}}}}]);
//# sourceMappingURL=11.0b4b68fa.chunk.js.map