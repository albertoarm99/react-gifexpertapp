(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(16),n(2)),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(e){var t=e.setcategorias,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})})};d.protoType={setcategorias:o.a.func.isRequired};var l=n(11),p=n(6),b=n.n(p),m=n(9),f=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=q28I7RDNl8H4Je0HDcRTfXNTe8PoaNln&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){e.id;var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounce animate__delay-5s",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsx)("p",{children:t})]})},h=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"animate__animated animate__bounce",children:t}),r&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(j.jsx)(O,Object(l.a)({},e),e.id)}))})]})},x=function(){var e=Object(a.useState)(["One punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GitExpertApp"}),Object(j.jsx)(d,{setcategorias:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(h,{category:e},e)}))})]})};r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.66089785.chunk.js.map