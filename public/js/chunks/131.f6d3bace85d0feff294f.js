(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1034:function(e,t,r){"use strict";r(534)},1035:function(e,t,r){(t=r(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},16:function(e,t,r){"use strict";r(74);var n=r(1837),c=r(343),a=r(345),o=r(344),i=r(1850),s=(r(176),r(191),r(97)),d=r.n(s),b={components:{BCard:n.a,BCardTitle:c.a,BCardSubTitle:a.a,BCardBody:o.a,BCollapse:i.a,Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},l=(r(1034),r(0)),u=Object(l.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?r("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:r("b-card-body",[e._t("default"),e._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),e._v(" "),r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=u.exports},1834:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(47),c=r(5),a=r(2),o=r(23),i=r(67),s=r(35),d=r(205),b=r(13),l=r(1),u=r(27);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=["start","end","center"],j=Object(d.a)((function(e,t){return(t=Object(u.h)(Object(u.g)(t)))?Object(u.c)(["row-cols",e,t].filter(s.a).join("-")):null})),g=Object(d.a)((function(e){return Object(u.c)(e.replace("cols",""))})),m=[],h={name:c.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(i.b)().reduce((function(e,t){return e[Object(l.g)(t,"cols")]=Object(l.c)(a.p),e}),Object(b.c)(null)),m=Object(b.h)(e),Object(l.d)(Object(b.m)(f(f({},e),{},{alignContent:Object(l.c)(a.u,null,(function(e){return Object(o.a)(Object(o.b)(O,"between","around","stretch"),e)})),alignH:Object(l.c)(a.u,null,(function(e){return Object(o.a)(Object(o.b)(O,"between","around"),e)})),alignV:Object(l.c)(a.u,null,(function(e){return Object(o.a)(Object(o.b)(O,"baseline","stretch"),e)})),noGutters:Object(l.c)(a.g,!1),tag:Object(l.c)(a.u,"div")})),c.Ob)),this.props},render:function(e,t){var r,c=t.props,a=t.data,o=t.children,i=c.alignV,s=c.alignH,d=c.alignContent,b=[];return m.forEach((function(e){var t=j(g(e),c[e]);t&&b.push(t)})),b.push((v(r={"no-gutters":c.noGutters},"align-items-".concat(i),i),v(r,"justify-content-".concat(s),s),v(r,"align-content-".concat(d),d),r)),e(c.tag,Object(n.a)(a,{staticClass:"row",class:b}),o)}}},1835:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(8),c=r(47),a=r(5),o=r(2),i=r(1),s=Object(i.d)({textTag:Object(i.c)(o.u,"p")},a.u),d=Object(n.c)({name:a.u,functional:!0,props:s,render:function(e,t){var r=t.props,n=t.data,a=t.children;return e(r.textTag,Object(c.a)(n,{staticClass:"card-text"}),a)}})},1868:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(8),c=r(47),a=r(5),o=r(2),i=r(23),s=r(13),d=r(1);var b=["iframe","embed","video","object","img","b-img","b-img-lazy"],l=Object(d.d)({aspect:Object(d.c)(o.u,"16by9"),tag:Object(d.c)(o.u,"div"),type:Object(d.c)(o.u,"iframe",(function(e){return Object(i.a)(b,e)}))},a.I),u=Object(n.c)({name:a.I,functional:!0,props:l,render:function(e,t){var r,n,a,o=t.props,i=t.data,d=t.children,b=o.aspect;return e(o.tag,{staticClass:"embed-responsive",class:(r={},n="embed-responsive-".concat(b),a=b,n in r?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,r),ref:i.ref},[e(o.type,Object(c.a)(Object(s.j)(i,["ref"]),{staticClass:"embed-responsive-item"}),d)])}})},1944:function(e,t,r){"use strict";r.r(t);var n=r(1834),c=r(348),a=r(4),o=r(1868),i=r(1835),s={components:{BCardCode:a.a,BEmbed:o.a,BCardText:i.a},data:function(){return{codeTypes:'\n<template>\n  <div>\n    <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen/>\n  </div>\n</template>\n\n<script>\nimport { BEmbed } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BEmbed,\n  },\n}\n<\/script>\n'}}},d=r(0),b={components:{EmbedTypes:Object(d.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Embed types"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeTypes)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Supported embed types are iframe (default), video, embed and object, which translate to the standard HTML ")]),e._v(" "),r("code",[e._v("<iframe>")]),e._v(" "),r("span",[e._v(" , ")]),e._v(" "),r("code",[e._v("<video>")]),e._v(" "),r("span",[e._v(" , ")]),e._v(" "),r("code",[e._v("<embed>")]),e._v(" "),r("span",[e._v(" and ")]),e._v(" "),r("code",[e._v("<object>")]),e._v(" "),r("span",[e._v(" elements.")])]),e._v(" "),r("div",[r("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/zpOULjyy-n8?rel=0",allowfullscreen:""}})],1)],1)}),[],!1,null,null,null).exports,BRow:n.a,BCol:c.a}},l=Object(d.a)(b,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("embed-types")],1)],1)}),[],!1,null,null,null);t.default=l.exports},348:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(47),c=r(5),a=r(2),o=r(43),i=r(23),s=r(67),d=r(35),b=r(7),l=r(205),u=r(13),p=r(1),f=r(27);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=["auto","start","end","center","baseline","stretch"],m=Object(l.a)((function(e,t,r){var n=e;if(!Object(b.p)(r)&&!1!==r)return t&&(n+="-".concat(t)),"col"!==e||""!==r&&!0!==r?(n+="-".concat(r),Object(f.c)(n)):Object(f.c)(n)})),h=Object(u.c)(null),y={name:c.y,functional:!0,get props(){return delete this.props,this.props=(e=Object(s.b)().filter(d.a),t=e.reduce((function(e,t){return e[t]=Object(p.c)(a.i),e}),Object(u.c)(null)),r=e.reduce((function(e,t){return e[Object(p.g)(t,"offset")]=Object(p.c)(a.p),e}),Object(u.c)(null)),n=e.reduce((function(e,t){return e[Object(p.g)(t,"order")]=Object(p.c)(a.p),e}),Object(u.c)(null)),h=Object(u.a)(Object(u.c)(null),{col:Object(u.h)(t),offset:Object(u.h)(r),order:Object(u.h)(n)}),Object(p.d)(Object(u.m)(O(O(O(O({},t),r),n),{},{alignSelf:Object(p.c)(a.u,null,(function(e){return Object(i.a)(g,e)})),col:Object(p.c)(a.g,!1),cols:Object(p.c)(a.p),offset:Object(p.c)(a.p),order:Object(p.c)(a.p),tag:Object(p.c)(a.u,"div")})),c.y));var e,t,r,n},render:function(e,t){var r,c=t.props,a=t.data,i=t.children,s=c.cols,d=c.offset,b=c.order,l=c.alignSelf,u=[];for(var p in h)for(var f=h[p],v=0;v<f.length;v++){var O=m(p,f[v].replace(p,""),c[f[v]]);O&&u.push(O)}var g=u.some((function(e){return o.e.test(e)}));return u.push((j(r={col:c.col||!g&&!s},"col-".concat(s),s),j(r,"offset-".concat(d),d),j(r,"order-".concat(b),b),j(r,"align-self-".concat(l),l),r)),e(c.tag,Object(n.a)(a,{class:u}),i)}}},4:function(e,t,r){"use strict";var n=r(16);t.a=n.a},534:function(e,t,r){var n=r(1035);"string"==typeof n&&(n=[[e.i,n,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};r(22)(n,c);n.locals&&(e.exports=n.locals)}}]);