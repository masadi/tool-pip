(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1022:function(e,t,r){"use strict";r(531)},1023:function(e,t,r){(t=r(21)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},16:function(e,t,r){"use strict";r(78);var n=r(1801),a=r(336),c=r(338),o=r(337),s=r(1815),i=(r(173),r(186),r(98)),b=r.n(i),d={components:{BCard:n.a,BCardTitle:a.a,BCardSubTitle:c.a,BCardBody:o.a,BCollapse:s.a,Prism:b.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(r(1022),r(0)),l=Object(u.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?r("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:r("b-card-body",[e._t("default"),e._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),e._v(" "),r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=l.exports},1798:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(48),a=r(5),c=r(2),o=r(22),s=r(67),i=r(34),b=r(201),d=r(13),u=r(1),l=r(27);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=["start","end","center"],O=Object(b.a)((function(e,t){return(t=Object(l.h)(Object(l.g)(t)))?Object(l.c)(["row-cols",e,t].filter(i.a).join("-")):null})),j=Object(b.a)((function(e){return Object(l.c)(e.replace("cols",""))})),g=[],h={name:a.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(s.b)().reduce((function(e,t){return e[Object(u.g)(t,"cols")]=Object(u.c)(c.p),e}),Object(d.c)(null)),g=Object(d.h)(e),Object(u.d)(Object(d.m)(m(m({},e),{},{alignContent:Object(u.c)(c.u,null,(function(e){return Object(o.a)(Object(o.b)(v,"between","around","stretch"),e)})),alignH:Object(u.c)(c.u,null,(function(e){return Object(o.a)(Object(o.b)(v,"between","around"),e)})),alignV:Object(u.c)(c.u,null,(function(e){return Object(o.a)(Object(o.b)(v,"baseline","stretch"),e)})),noGutters:Object(u.c)(c.g,!1),tag:Object(u.c)(c.u,"div")})),a.Ob)),this.props},render:function(e,t){var r,a=t.props,c=t.data,o=t.children,s=a.alignV,i=a.alignH,b=a.alignContent,d=[];return g.forEach((function(e){var t=O(j(e),a[e]);t&&d.push(t)})),d.push((f(r={"no-gutters":a.noGutters},"align-items-".concat(s),s),f(r,"justify-content-".concat(i),i),f(r,"align-content-".concat(b),b),r)),e(a.tag,Object(n.a)(c,{staticClass:"row",class:d}),o)}}},1799:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(8),a=r(48),c=r(5),o=r(2),s=r(1),i=Object(s.d)({textTag:Object(s.c)(o.u,"p")},c.u),b=Object(n.c)({name:c.u,functional:!0,props:i,render:function(e,t){var r=t.props,n=t.data,c=t.children;return e(r.textTag,Object(a.a)(n,{staticClass:"card-text"}),c)}})},1825:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(8),a=r(48),c=r(5),o=r(2),s=r(7),i=r(1),b=r(27),d=r(567);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=Object(i.d)({items:Object(i.c)(o.b)},c.f),f=Object(n.c)({name:c.f,functional:!0,props:m,render:function(e,t){var r=t.props,n=t.data,c=t.children,o=r.items,i=c;if(Object(s.a)(o)){var u=!1;i=o.map((function(t,r){Object(s.j)(t)||(t={text:Object(b.g)(t)});var n=t.active;return n&&(u=!0),n||u||(n=r+1===o.length),e(d.a,{props:l(l({},t),{},{active:n})})}))}return e("ol",Object(a.a)(n,{staticClass:"breadcrumb"}),i)}})},1898:function(e,t,r){"use strict";r.r(t);var n=r(1798),a=r(341),c=r(1825),o=r(4),s={components:{BCardCode:o.a,BBreadcrumb:c.a},data:function(){return{codeDefault:"\n<template>\n <b-breadcrumb\n    :items=\"items\"\n  />\n</template>\n\n<script>\nimport { BBreadcrumb } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BBreadcrumb,\n  },\n data() {\n    return {\n      codeDefault,\n      items: [\n        {\n          text: 'Dashboard',\n        },\n        {\n          text: 'Library',\n        },\n        {\n          text: 'Data',\n          active: true,\n        },\n      ],\n    }\n  },\n}\n<\/script>\n",items:[{text:"Dashboard"},{text:"Library"},{text:"Data",active:!0}]}}},i=r(0),b=Object(i.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeDefault)+"\n  ")]},proxy:!0}])},[r("b-breadcrumb",{attrs:{items:e.items}})],1)}),[],!1,null,null,null).exports,d=r(1799),u={components:{BCardCode:o.a,BBreadcrumb:c.a,BCardText:d.a},data:function(){return{codeSeparator:'\n<template>\n   <div id="component-breadcrumbs">\n    <b-breadcrumb\n      class="breadcrumb-slash"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-dots"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-dashes"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-pipes"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-chevron mb-0"\n      :items="items"\n    />\n  </div>\n</template>\n\n<script>\nimport { BBreadcrumb } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBreadcrumb,\n  },\n  data() {\n    return {\n      items: [\n        {\n          text: \'Home\',\n        },\n        {\n          text: \'Library\',\n        },\n        {\n          text: \'Data\',\n          active: true,\n        },\n      ],\n    }\n  },\n}\n<\/script>\n',items:[{text:"Home"},{text:"Library"},{text:"Data",active:!0}]}}},l=Object(i.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Separator"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSeparator)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing ")]),e._v(" "),r("code",[e._v("$breadcrumb-divider")]),e._v(" "),r("span",[e._v(" variable value in scss")])]),e._v(" "),r("div",{attrs:{id:"component-breadcrumbs"}},[r("b-breadcrumb",{staticClass:"breadcrumb-slash",attrs:{items:e.items}}),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-dots",attrs:{items:e.items}}),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-dashes",attrs:{items:e.items}}),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-pipes",attrs:{items:e.items}}),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-chevron mb-0",attrs:{items:e.items}})],1)],1)}),[],!1,null,null,null).exports,p=r(567),m={components:{BCardCode:o.a,BBreadcrumb:c.a,BBreadcrumbItem:p.a,BCardText:d.a},data:function(){return{codeSlot:'\n<template>\n  <b-breadcrumb class="breadcrumb-slash">\n    <b-breadcrumb-item href="#home">\n      Home\n    </b-breadcrumb-item>\n    <b-breadcrumb-item href="#foo">\n      Chat\n    </b-breadcrumb-item>\n    <b-breadcrumb-item active>\n      Infos\n    </b-breadcrumb-item>\n  </b-breadcrumb>\n</template>\n\n<script>\nimport { BBreadcrumb, BBreadcrumbItem } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBreadcrumb,\n    BBreadcrumbItem,\n  },\n}\n<\/script>\n'}}},f=Object(i.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card-code",{attrs:{title:"Slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n      "+e._s(e.codeSlot)+"\n    ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("You may also manually place individual ")]),e._v(" "),r("code",[e._v("<b-breadcrumb-item>")]),e._v(" "),r("span",[e._v(" child components in the default slot of the ")]),e._v(" "),r("code",[e._v("<b-breadcrumb>")]),e._v(" "),r("span",[e._v(" component, as an alternative to using the ")]),e._v(" "),r("code",[e._v("items")]),e._v(" "),r("span",[e._v(" prop, for greater control over the content of each item:")])]),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-slash"},[r("b-breadcrumb-item",{attrs:{href:"#home"}},[e._v("\n        Home\n      ")]),e._v(" "),r("b-breadcrumb-item",{attrs:{href:"#foo"}},[e._v("\n        Chat\n      ")]),e._v(" "),r("b-breadcrumb-item",{attrs:{active:""}},[e._v("\n        Infos\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,v={components:{BCardCode:o.a,BBreadcrumb:c.a,BCardText:d.a},data:function(){return{codeAlignment:'\n<template>\n  <div id="breadcrumb-alignment">\n    <div class="d-flex justify-content-start breadcrumb-wrapper">\n      <b-breadcrumb :items="items" />\n    </div>\n    <div class="d-flex justify-content-center breadcrumb-wrapper my-1">\n      <b-breadcrumb :items="items" />\n    </div>\n    <div class="d-flex justify-content-end breadcrumb-wrapper pr-1">\n      <b-breadcrumb :items="items" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BBreadcrumb} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBreadcrumb,\n  },\n  data() {\n    return {\n      items: [\n        {\n          text: \'Dashboard\',\n        },\n        {\n          text: \'Library\',\n        },\n        {\n          text: \'Data\',\n          active: true,\n        },\n      ],\n    }\n  },\n}\n<\/script>\n',items:[{text:"Dashboard"},{text:"Library"},{text:"Data",active:!0}]}}},O=Object(i.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card-code",{attrs:{title:"Alignment"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n      "+e._s(e.codeAlignment)+"\n    ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Use class ")]),e._v(" "),r("code",[e._v(".justify-content-{direction}")]),e._v(" "),r("span",[e._v(" to align breadcrumb to center.")])]),e._v(" "),r("div",{attrs:{id:"breadcrumb-alignment"}},[r("div",{staticClass:"d-flex justify-content-start breadcrumb-wrapper"},[r("b-breadcrumb",{attrs:{items:e.items}})],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-center breadcrumb-wrapper my-1"},[r("b-breadcrumb",{attrs:{items:e.items}})],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-end breadcrumb-wrapper pr-1"},[r("b-breadcrumb",{attrs:{items:e.items}})],1)])],1)],1)}),[],!1,null,null,null).exports,j={components:{BRow:n.a,BCol:a.a,BreadcrumbDefault:b,BreadcrumbSeparator:l,BreadcrumbSlot:f,BreadcrumbAlignment:O}},g=Object(i.a)(j,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("breadcrumb-default"),this._v(" "),t("breadcrumb-separator"),this._v(" "),t("breadcrumb-slot"),this._v(" "),t("breadcrumb-alignment")],1)],1)}),[],!1,null,null,null);t.default=g.exports},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var n=r(48),a=r(5),c=r(2),o=r(43),s=r(22),i=r(67),b=r(34),d=r(7),u=r(201),l=r(13),p=r(1),m=r(27);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=["auto","start","end","center","baseline","stretch"],g=Object(u.a)((function(e,t,r){var n=e;if(!Object(d.p)(r)&&!1!==r)return t&&(n+="-".concat(t)),"col"!==e||""!==r&&!0!==r?(n+="-".concat(r),Object(m.c)(n)):Object(m.c)(n)})),h=Object(l.c)(null),_={name:a.y,functional:!0,get props(){return delete this.props,this.props=(e=Object(i.b)().filter(b.a),t=e.reduce((function(e,t){return e[t]=Object(p.c)(c.i),e}),Object(l.c)(null)),r=e.reduce((function(e,t){return e[Object(p.g)(t,"offset")]=Object(p.c)(c.p),e}),Object(l.c)(null)),n=e.reduce((function(e,t){return e[Object(p.g)(t,"order")]=Object(p.c)(c.p),e}),Object(l.c)(null)),h=Object(l.a)(Object(l.c)(null),{col:Object(l.h)(t),offset:Object(l.h)(r),order:Object(l.h)(n)}),Object(p.d)(Object(l.m)(v(v(v(v({},t),r),n),{},{alignSelf:Object(p.c)(c.u,null,(function(e){return Object(s.a)(j,e)})),col:Object(p.c)(c.g,!1),cols:Object(p.c)(c.p),offset:Object(p.c)(c.p),order:Object(p.c)(c.p),tag:Object(p.c)(c.u,"div")})),a.y));var e,t,r,n},render:function(e,t){var r,a=t.props,c=t.data,s=t.children,i=a.cols,b=a.offset,d=a.order,u=a.alignSelf,l=[];for(var p in h)for(var m=h[p],f=0;f<m.length;f++){var v=g(p,m[f].replace(p,""),a[m[f]]);v&&l.push(v)}var j=l.some((function(e){return o.e.test(e)}));return l.push((O(r={col:a.col||!j&&!i},"col-".concat(i),i),O(r,"offset-".concat(b),b),O(r,"order-".concat(d),d),O(r,"align-self-".concat(u),u),r)),e(a.tag,Object(n.a)(c,{class:l}),s)}}},4:function(e,t,r){"use strict";var n=r(16);t.a=n.a},531:function(e,t,r){var n=r(1023);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(23)(n,a);n.locals&&(e.exports=n.locals)},567:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n=r(8),a=r(48),c=r(5),o=r(1),s=r(2),i=r(49),b=r(13),d=r(59);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=Object(o.d)(Object(b.m)(l(l({},Object(b.j)(d.b,["event","routerTag"])),{},{ariaCurrent:Object(o.c)(s.u,"location"),html:Object(o.c)(s.u),text:Object(o.c)(s.u)})),c.h),f=Object(n.c)({name:c.h,functional:!0,props:m,render:function(e,t){var r=t.props,n=t.data,c=t.children,s=r.active,b=s?"span":d.a,u={attrs:{"aria-current":s?r.ariaCurrent:null},props:Object(o.e)(m,r)};return c||(u.domProps=Object(i.a)(r.html,r.text)),e(b,Object(a.a)(n,u),c)}}),v=Object(o.d)(m,c.g),O=Object(n.c)({name:c.g,functional:!0,props:v,render:function(e,t){var r=t.props,n=t.data,c=t.children;return e("li",Object(a.a)(n,{staticClass:"breadcrumb-item",class:{active:r.active}}),[e(f,{props:r},c)])}})}}]);