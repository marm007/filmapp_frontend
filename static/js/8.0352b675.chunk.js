(this.webpackJsonpfilmapp_frontened=this.webpackJsonpfilmapp_frontened||[]).push([[8],{288:function(t,e,r){var n=r(300);t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},300:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},307:function(t,e,r){"use strict";var n=r(320),a=r(321),i=r(325),o=r(326),c=r(330),s=r(331),l=r(332),u=r(333),f=Symbol("encodeFragmentIdentifier");function d(t){if("string"!==typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function m(t,e){return e.decode?s(t):t}function h(t){return Array.isArray(t)?t.sort():"object"===typeof t?h(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function b(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function y(t){var e=(t=b(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function j(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"===typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function v(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var a="string"===typeof r&&r.includes(t.arrayFormatSeparator),i="string"===typeof r&&!a&&m(r,t).includes(t.arrayFormatSeparator);r=i?m(r,t):r;var o=a||i?r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)})):null===r?r:m(r,t);n[e]=o};case"bracket-separator":return function(e,r,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var i=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],i):n[e]=i}else n[e]=r?m(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!==typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var o,c=i(t.split("&"));try{for(c.s();!(o=c.n()).done;){var s=o.value;if(""!==s){var u=l(e.decode?s.replace(/\+/g," "):s,"="),f=a(u,2),p=f[0],b=f[1];b=void 0===b?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?b:m(b,e),r(m(p,e),b,n)}}}catch(k){c.e(k)}finally{c.f()}for(var y=0,v=Object.keys(n);y<v.length;y++){var g=v[y],O=n[g];if("object"===typeof O&&null!==O)for(var x=0,w=Object.keys(O);x<w.length;x++){var N=w[x];O[N]=j(O[N],e)}else n[g]=j(O,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?t[e]=h(r):t[e]=r,t}),Object.create(null))}e.extract=y,e.parse=v,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&(null===(n=t[r])||void 0===n)||e.skipEmptyString&&""===t[r];var n},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var a=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[p(e,t),"[",a,"]"].join("")]:[[p(e,t),"[",p(a,t),"]=",p(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[p(e,t),"[]"].join("")]:[[p(e,t),"[]=",p(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||t.skipNull&&null===a||t.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[p(r,t),e,p(a,t)].join("")]:[[n,p(a,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[p(e,t)]:[[p(e,t),"=",p(n,t)].join("")])}}}}(e),a={},i=0,c=Object.keys(t);i<c.length;i++){var s=c[i];r(s)||(a[s]=t[s])}var l=Object.keys(a);return!1!==e.sort&&l.sort(e.sort),l.map((function(r){var a=t[r];return void 0===a?"":null===a?p(r,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?p(r,e)+"[]":a.reduce(n(r),[]).join("&"):p(r,e)+"="+p(a,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=l(t,"#"),n=a(r,2),i=n[0],o=n[1];return Object.assign({url:i.split("?")[0]||"",query:v(y(t),e)},e&&e.parseFragmentIdentifier&&o?{fragmentIdentifier:m(o,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},f,!0),r);var a=b(t.url).split("?")[0]||"",i=e.extract(t.url),o=e.parse(i,{sort:!1}),c=Object.assign(o,t.query),s=e.stringify(c,r);s&&(s="?".concat(s));var l=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(l="#".concat(r[f]?p(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(a).concat(s).concat(l)},e.pick=function(t,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},f,!1),a);var i=e.parseUrl(t,a),o=i.url,c=i.query,s=i.fragmentIdentifier;return e.stringifyUrl({url:o,query:u(c,r),fragmentIdentifier:s},a)},e.exclude=function(t,r,n){var a=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,a,n)}},320:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},321:function(t,e,r){var n=r(322),a=r(323),i=r(288),o=r(324);t.exports=function(t,e){return n(t)||a(t,e)||i(t,e)||o()}},322:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},323:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}return r}}},324:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},325:function(t,e,r){var n=r(288);t.exports=function(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=n(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){s=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw o}}}}},326:function(t,e,r){var n=r(327),a=r(328),i=r(288),o=r(329);t.exports=function(t){return n(t)||a(t)||i(t)||o()}},327:function(t,e,r){var n=r(300);t.exports=function(t){if(Array.isArray(t))return n(t)}},328:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},329:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},330:function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},331:function(t,e,r){"use strict";var n="%[a-f0-9]{2}",a=new RegExp(n,"gi"),i=new RegExp("("+n+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function c(t){try{return decodeURIComponent(t)}catch(n){for(var e=t.match(a),r=1;r<e.length;r++)e=(t=o(e,r).join("")).match(a);return t}}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},n=i.exec(t);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(e){var a=c(n[0]);a!==n[0]&&(r[n[0]]=a)}n=i.exec(t)}r["%C2"]="\ufffd";for(var o=Object.keys(r),s=0;s<o.length;s++){var l=o[s];t=t.replace(new RegExp(l,"g"),r[l])}return t}(t)}}},332:function(t,e,r){"use strict";t.exports=function(t,e){if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},333:function(t,e,r){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),a=Array.isArray(e),i=0;i<n.length;i++){var o=n[i],c=t[o];(a?-1!==e.indexOf(o):e(o,c,t))&&(r[o]=c)}return r}},338:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n=function(t){var e=new Date(Date.parse(t.createdAt));return("0"+e.getDate()).slice(-2)+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getFullYear()).slice(-2)+" o "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)},a=function(t){var e=new Date(Date.parse(t.createdAt)),r=new Date,n=Math.abs(Math.floor((Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes())-Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes()))/6e4));return n/60>=1?(n/=60)/24>=1?(n/=24)/30>=1?(n/=30)/12>=1?(n/=12,n=Math.floor(n)+" years "):n=Math.floor(n)+" months ":n=Math.floor(n)+" days ":n=Math.floor(n)+" hours ":n=Math.floor(n)+" minutes ",n+="ago"}},426:function(t,e,r){},441:function(t,e,r){"use strict";r.r(e);var n=r(27),a=r(272),i=r.n(a),o=r(2),c=r(273),s=r(29),l=r(0),u=r(7),f=r(278),d=r(35),p=r(307),m=r.n(p),h=r(291),b=r.n(h),y=r(44),j=r(279),v={films:null,isLoading:!1,isAllFetched:!1,isInitialLoaded:!1,error:null,search:"",filter:"",sort:"",dir:1,sorts:[{id:"upload_date",title:"Upload date",dir:1},{id:"view_count",title:"View count",dir:1},{id:"rating",title:"Rating",dir:1}]},g=function(t,e){switch(e.type){case"field":return Object(o.a)(Object(o.a)({},t),{},Object(y.a)({},e.fieldName,e.payload));case"initial-success":return Object(o.a)(Object(o.a)({},t),{},{isLoading:!1,isInitialLoaded:!0,error:null,isAllFetched:e.payload.films.length<j.c,films:e.payload.films,search:e.payload.params.search,sort:e.payload.params.sort,filter:e.payload.params.filter,dir:e.payload.params.dir});case"load":return t.isLoading||t.isAllFetched||!t.isInitialLoaded||t.error?t:Object(o.a)(Object(o.a)({},t),{},{isLoading:!0});case"load-success":return Object(o.a)(Object(o.a)({},t),{},{isLoading:!1,error:null,isAllFetched:e.payload.length<j.c,films:[].concat(Object(n.a)(t.films),Object(n.a)(e.payload))});case"sorts-change":return Object(o.a)(Object(o.a)({},t),{},{sort:e.resetSort?"":t.sort,sorts:t.sorts.map((function(t){return t.id===e.payload.id?e.payload:t}))});case"error":return Object(o.a)(Object(o.a)({},t),{},{isLoading:!1,error:!0});default:return t}},O=r(283),x=r(338),w=r(281),N=r(285),k=(r(426),r(292)),S=r(306),F=r.n(S),A=r(1),I=function(){return Object(A.jsx)("div",{className:"col-12 col-sm-12 col-lg-8 m-0 mb-1 container-px",children:Object(A.jsxs)("div",{className:"row mb-4 m-0",children:[Object(A.jsx)("div",{className:"col-8 col-sm-4 p-0",children:Object(A.jsx)("div",{className:"ratio ratio-16x9",children:Object(A.jsx)(F.a,{className:"w-100 h-100",style:{lineHeight:"1.5"}})})}),Object(A.jsxs)("div",{className:"col-4 col-sm-8",children:[Object(A.jsx)("div",{className:"col-12 col-sm-12 p-0 pb-1 h-25",children:Object(A.jsx)(F.a,{className:"w-100 h-100",style:{lineHeight:"1.5"}})}),Object(A.jsx)("div",{className:"col-12 col-sm-12 h-75 pt-1",children:Object(A.jsx)(F.a,{className:"w-100 h-100",style:{lineHeight:"1.5"}})})]})]})})},C=r(290),E=r(310),U=[{id:"last_hour",title:"Last hour"},{id:"today",title:"Today"},{id:"this_week",title:"This week"},{id:"this_month",title:"This month"},{id:"this_year",title:"This year"}];e.default=function(){var t=Object(C.a)(576),e=Object(u.g)(),r=Object(u.h)(),a=Object(l.useReducer)(g,v),p=Object(s.a)(a,2),h=p[0],y=p[1],S=h.films,F=h.isLoading,L=h.isAllFetched,M=h.search,R=h.sort,T=h.filter,D=h.dir,_=h.sorts,$=h.error,H=h.isInitialLoaded,W=Object(l.useState)(!1),q=Object(s.a)(W,2),z=q[0],B=q[1],Y=Object(l.useCallback)((function(){F||L||$||!H||y({type:"load"})}),[$,L,H,F]);Object(w.a)(Y),Object(l.useEffect)((function(){var t,e,n,a=m.a.parse(r.search),s={search:a.title,sort:null!==(t=a.sort)&&void 0!==t?t:"",filter:null!==(e=a.filter)&&void 0!==e?e:"",dir:null!==(n=a.dir)&&void 0!==n?n:1};function l(){return(l=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.f(Object(o.a)(Object(o.a)({},s),{},{limit:j.c})).then((function(t){y({type:"initial-success",payload:{films:t.data,params:s}})})).catch((function(t){y({type:"error"}),console.error(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r.state&&r.state.films?y({type:"initial-success",payload:{films:r.state.films,params:s}}):function(){l.apply(this,arguments)}()}),[r]),Object(l.useEffect)((function(){function t(){return(t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.f({search:M,sort:R,filter:T,dir:D,skip:S.length,limit:j.c}).then((function(t){y({type:"load-success",payload:t.data})})).catch((function(t){y({type:"error"}),console.error(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}F&&function(){t.apply(this,arguments)}()}),[D,S,T,F,M,R]);var J=function(t,r){var n=T,a=R,i=D;if("filter"===t)n=n===r.id?"":r.id;else{var o=r;a===r.id?(a=r.id,1===o.dir?(o.dir=-1,i=r.dir):-1===o.dir&&(o.dir=1,a=""),y({type:"sorts-change",payload:o,resetSort:""===a}),i=r.dir):(a=r.id,i=r.dir)}""!==a&&""!==n?e.push({search:"?title=".concat(M,"&sort=").concat(a,"&dir=").concat(i,"&filter=").concat(n)}):""===a&&""!==n?e.push({search:"?title=".concat(M,"&filter=").concat(n)}):""!==a&&""===n?e.push({search:"?title=".concat(M,"&sort=").concat(a,"&dir=").concat(i)}):""===a&&""===n&&e.push({search:"?title=".concat(M)})};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(N.a,{className:"mt-3 mx-4 search-button p-0",onClick:function(){return B(!z)},children:Object(A.jsx)("div",{"aria-controls":"filter-collapse","aria-expanded":z,"data-bs-toggle":"collapse","data-bs-target":"#searchCollapse",className:"px-4 py-2",children:Object(A.jsx)(f.a,{style:{cursor:"pointer"},icon:d.c})})}),Object(A.jsx)("div",{className:"collapse",id:"searchCollapse",children:Object(A.jsxs)("div",{id:"filter-collapse",className:"row mx-2",children:[Object(A.jsxs)("div",{className:"col-12 col-sm-4 mt-4",children:[Object(A.jsx)("p",{style:{fontWeight:500},children:"UPLOAD DATE"}),Object(A.jsx)("div",{className:"col-12 col-sm-8 mt-3 mb-3 divider"}),U.map((function(t){return Object(A.jsx)("p",{style:T===t.id?{fontWeight:700,fontSize:"80%"}:{fontWeight:400,fontSize:"80%"},onClick:function(){return J("filter",t)},className:"search-filter",children:t.title},t.id)}))]}),Object(A.jsxs)("div",{className:"col-12 col-sm-4 mt-4",children:[Object(A.jsx)("p",{style:{fontWeight:500},children:"SORT BY"}),Object(A.jsx)("div",{className:"col-12 col-sm-8 mt-3 mb-3 divider"}),_.map((function(t){return Object(A.jsxs)("div",{className:"col d-flex",children:[Object(A.jsx)("p",{style:R===t.id?{fontWeight:700,fontSize:"80%"}:{fontWeight:400,fontSize:"80%"},onClick:function(){return J("sort",t)},className:"search-filter",children:t.title}),R===t.id&&1===t.dir?Object(A.jsx)(f.a,{className:"ms-2",icon:"sort-up"}):R===t.id&&-1===t.dir?Object(A.jsx)(f.a,{className:"ms-2",icon:"sort-down"}):""]},t.id)}))]})]})}),Object(A.jsx)("div",{className:"col-12 mt-2 mb-3 divider"}),Object(A.jsx)("div",{className:"row mx-2 mt-4",children:S?S.map((function(t,r){var n=Object(x.b)(t);return t.img="".concat("https://marm007-filmapp-backend-node.herokuapp.com/api/","films/").concat(t.id,"/thumbnail"),Object(A.jsx)(E.a,{isSearch:!0,film:t,index:r,handleRedirect:function(){return r=t.id,void e.push("".concat("/filmapp-react-frontend/","film/")+r);var r},children:Object(A.jsxs)("div",{className:"pt-2",children:[Object(A.jsx)("p",{className:"mb-1 author-nick-search",children:Object(A.jsxs)("span",{children:[t.author_name," \xb7 ",t.views," views \xb7 ",n]})}),Object(A.jsx)("span",{className:"d-none d-sm-inline  author-nick-search",children:Object(A.jsx)(b.a,{className:"mb-0",line:2,text:t.description})})]})},t.id)})):Object(n.a)(Array(20)).map((function(e,r){return t?Object(A.jsx)(k.a,{},r):Object(A.jsx)(I,{},r)}))}),!L&&Object(A.jsx)("div",{className:"fetch-loader d-flex justify-content-center",children:F&&Object(A.jsx)("div",{className:"spinner-border"})})]})}}}]);
//# sourceMappingURL=8.0352b675.chunk.js.map