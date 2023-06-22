(function(){"use strict";var t={5015:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var r=e(144),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e("v-spacer"),e("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e("v-icon",[t._v("mdi-open-in-new")])],1)],1),e("v-main",[e("HelloWorld")],1)],1)},i=[],a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:e(9574),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Bem vindo ao E-Facilitador ")]),r("table",{staticClass:"table table-striped"},[r("thead",[r("tr",[r("th",[t._v("ID")]),r("th",[t._v("Name")]),r("th",[t._v("Email")]),r("th",[t._v("Phone")]),r("th",[t._v("Website")])])]),r("tbody",t._l(t.users,(function(n){return r("tr",{key:n.id},[r("td",[t._v(t._s(n.id))]),r("td",[t._v(t._s(n.name))]),r("td",[t._v(t._s(n.email))]),r("td",[t._v(t._s(n.phone))]),r("td",[t._v(t._s(n.website))])])})),0)])])],1),r("button",{staticClass:"btn btn-primary",attrs:{button:""},on:{click:function(n){return t.fetchUsers()}}},[t._v("Consultar")])],1)},s=[],c=e(9669),l=e.n(c),u={name:"HelloWorld",data:function(){return{users:[]}},methods:{fetchUsers:function(){var t=this,n={"Access-Control-Allow-Origin":"*"},e="https://jsonplaceholder.typicode.com/users";l().get(e,{headers:n}).then((function(n){console.log(n),t.users=n.data})).catch((function(t){console.log(t)}))}}},f=u,v=e(1001),d=e(3453),p=e.n(d),h=e(2102),m=e(9846),g=e(7047),b=e(2877),y=(0,v.Z)(f,a,s,!1,null,null,null),_=y.exports;p()(y,{VCol:h.Z,VContainer:m.Z,VImg:g.Z,VRow:b.Z});var w={name:"App",components:{HelloWorld:_},data:function(){return{}}},Z=w,C=e(7524),O=e(3583),k=e(3513),V=e(6428),j=e(7877),x=e(9762),S=(0,v.Z)(Z,o,i,!1,null,null,null),A=S.exports;p()(S,{VApp:C.Z,VAppBar:O.Z,VBtn:k.Z,VIcon:V.Z,VImg:g.Z,VMain:j.Z,VSpacer:x.Z});var E=e(5591);r.Z.use(E.Z);var P=new E.Z({}),T=e(7846),I=e.n(T);e(44);r.Z.cors=I(),r.Z.prototype.$http=l(),r.Z.config.productionTip=!1,new r.Z({vuetify:P,render:function(t){return t(A)}}).$mount("#app")},9574:function(t,n,e){t.exports=e.p+"img/logo.4d6033c9.svg"}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(n){return 0!==t[n]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(c)var u=c(e)}for(n&&n(r);l<a.length;l++)i=a[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},r=self["webpackChunkefacilitador_front"]=self["webpackChunkefacilitador_front"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(5015)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.a0ec6fcf.js.map