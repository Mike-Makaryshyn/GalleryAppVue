(function(t){function e(e){for(var n,o,i=e[0],c=e[1],s=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a={app:0},u=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-179c3c84":"2f1883b3"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-179c3c84":1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-179c3c84":"99b0ba10"}[t]+".css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===n||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[t],f.parentNode.removeChild(f),r(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var u=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var f=l;u.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"390d":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("Navbar"),r("router-view")],1)},a=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-app-bar",{attrs:{color:"rgb(87, 135, 177)",dark:""}},[r("v-spacer"),r("v-btn",{staticClass:"ml-3 white",attrs:{outlined:""}},[r("router-link",{attrs:{to:"/"}},[t._v(" Главная ")])],1),r("v-btn",{staticClass:"ml-3 white",attrs:{outlined:""}},[r("router-link",{attrs:{to:"/photo"}},[t._v("Фотографии")])],1)],1)],1)},i=[],c={},s=c,l=r("2877"),p=r("6544"),f=r.n(p),d=r("40dc"),h=r("8336"),m=r("a523"),v=r("2fa4"),g=Object(l["a"])(s,u,i,!1,null,"027982e0",null),b=g.exports;f()(g,{VAppBar:d["a"],VBtn:h["a"],VContainer:m["a"],VSpacer:v["a"]});var y={name:"App",components:{Navbar:b}},j=y,w=(r("5d19"),r("7496")),_=Object(l["a"])(j,o,a,!1,null,"b3be3908",null),P=_.exports;f()(_,{VApp:w["a"]});var k=r("f309");n["a"].use(k["a"]);var C=new k["a"]({}),O=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("h2",{staticClass:"page"},[t._v("MAIN")]),r("v-carousel",{attrs:{"hide-delimiters":""}},t._l(t.items,(function(t,e){return r("v-carousel-item",{key:e,attrs:{src:t.src}})})),1)],1)},E=[],x={data:function(){return{items:[{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"}]}}},A=x,S=(r("d397"),r("5e66")),N=r("3e35"),T=Object(l["a"])(A,V,E,!1,null,null,null),M=T.exports;f()(T,{VCarousel:S["a"],VCarouselItem:N["a"],VContainer:m["a"]}),n["a"].use(O["a"]);var B=[{path:"/",component:M},{path:"/photo",component:function(){return r.e("chunk-179c3c84").then(r.bind(null,"8ae9"))}}],D=new O["a"]({mode:"history",routes:B}),L=r("bc3a"),$=r.n(L),q=r("2f62"),I={state:{photos:[],dialogVisible:!1,currentPhoto:{}},mutations:{setPhotos:function(t,e){t.photos=e},showDialog:function(t){t.dialogVisible=!0},hideDialog:function(t){t.dialogVisible=!1},setCurrentPhoto:function(t,e){t.currentPhoto=e}},getters:{getAllPhotos:function(t){return t.photos},getDialogVisible:function(t){return t.dialogVisible},getCurrentPhoto:function(t){return t.currentPhoto}},actions:{fetchPhotos:function(t){$.a.get("https://jsonplaceholder.typicode.com/photos?_limit=10").then((function(e){return t.commit("setPhotos",e.data)}))}}};n["a"].use(q["a"]);var J=new q["a"].Store({modules:{photoModule:I}});n["a"].prototype.axios=$.a,n["a"].config.productionTip=!1,new n["a"]({vuetify:C,router:D,store:J,render:function(t){return t(P)}}).$mount("#app")},"576b":function(t,e,r){},"5d19":function(t,e,r){"use strict";r("576b")},d397:function(t,e,r){"use strict";r("390d")}});
//# sourceMappingURL=app.0907eeea.js.map