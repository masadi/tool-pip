(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1034:function(t,e,r){"use strict";r(532)},1035:function(t,e,r){(e=r(20)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=e},16:function(t,e,r){"use strict";r(71);var n=r(1943),o=r(436),i=r(437),a=r(435),p=r(1942),c=(r(174),r(188),r(96)),s=r.n(c),u={components:{BCard:n.a,BCardTitle:o.a,BCardSubTitle:i.a,BCardBody:a.a,BCollapse:p.a,Prism:s.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},b=(r(1034),r(0)),d=Object(b.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?r("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:r("b-card-body",[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),t._v(" "),r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=d.exports},1823:function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));var n=r(46),o=r(5),i=r(2),a=r(22),p=r(67),c=r(35),s=r(201),u=r(13),b=r(1),d=r(27);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=["start","end","center"],f=Object(s.a)((function(t,e){return(e=Object(d.h)(Object(d.g)(e)))?Object(d.c)(["row-cols",t,e].filter(c.a).join("-")):null})),_=Object(s.a)((function(t){return Object(d.c)(t.replace("cols",""))})),O=[],w={name:o.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(p.b)().reduce((function(t,e){return t[Object(b.g)(e,"cols")]=Object(b.c)(i.p),t}),Object(u.c)(null)),O=Object(u.h)(t),Object(b.d)(Object(u.m)(v(v({},t),{},{alignContent:Object(b.c)(i.u,null,(function(t){return Object(a.a)(Object(a.b)(g,"between","around","stretch"),t)})),alignH:Object(b.c)(i.u,null,(function(t){return Object(a.a)(Object(a.b)(g,"between","around"),t)})),alignV:Object(b.c)(i.u,null,(function(t){return Object(a.a)(Object(a.b)(g,"baseline","stretch"),t)})),noGutters:Object(b.c)(i.g,!1),tag:Object(b.c)(i.u,"div")})),o.Ob)),this.props},render:function(t,e){var r,o=e.props,i=e.data,a=e.children,p=o.alignV,c=o.alignH,s=o.alignContent,u=[];return O.forEach((function(t){var e=f(_(t),o[t]);e&&u.push(e)})),u.push((m(r={"no-gutters":o.noGutters},"align-items-".concat(p),p),m(r,"justify-content-".concat(c),c),m(r,"align-content-".concat(s),s),r)),t(o.tag,Object(n.a)(i,{staticClass:"row",class:u}),a)}}},1824:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(8),o=r(46),i=r(5),a=r(2),p=r(1),c=Object(p.d)({textTag:Object(p.c)(a.u,"p")},i.u),s=Object(n.c)({name:i.u,functional:!0,props:c,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.textTag,Object(o.a)(n,{staticClass:"card-text"}),i)}})},1833:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(8),o=r(46),i=r(5),a=r(2),p=r(1),c=r(13);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(p.d)({tag:Object(p.c)(a.u,"hr")},i.D),l=Object(n.c)({name:i.D,functional:!0,props:d,render:function(t,e){var r=e.props,n=e.data;return t("li",Object(o.a)(Object(c.j)(n,["attrs"]),{attrs:{role:"presentation"}}),[t(r.tag,{staticClass:"dropdown-divider",attrs:u(u({},n.attrs||{}),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}})},1838:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r(8),o=r(46),i=r(5),a=r(2),p=r(13),c=r(1),s=r(89);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=Object(c.d)(Object(p.m)(b(b({},Object(p.k)(s.b,["size"])),{},{ariaRole:Object(c.c)(a.u,"group"),size:Object(c.c)(a.u),tag:Object(c.c)(a.u,"div"),vertical:Object(c.c)(a.g,!1)})),i.k),v=Object(n.c)({name:i.k,functional:!0,props:l,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.tag,Object(o.a)(n,{class:d({"btn-group":!r.vertical,"btn-group-vertical":r.vertical},"btn-group-".concat(r.size),r.size),attrs:{role:r.ariaRole}}),i)}})},1922:function(t,e,r){"use strict";r.r(e);var n=r(1823),o=r(440),i=r(1838),a=r(89),p=r(1824),c=r(4),s=r(11),u={components:{BButtonGroup:i.a,BButton:a.a,BCardText:p.a,BCardCode:c.a},directives:{Ripple:s.a},data:function(){return{codeBasic:'\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      First\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Second\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Third\n    </b-button>\n  </b-button-group>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},b=r(0),d=Object(b.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{title:"Basic"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeBasic)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Group a series of buttons together on a single line with ")]),t._v(" "),r("code",[t._v("<b-button-group>")]),t._v(" "),r("span",[t._v(".")])]),t._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      First\n    ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Second\n    ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Third\n    ")])],1)],1)}),[],!1,null,null,null).exports,l={components:{BButtonGroup:i.a,BButton:a.a,BCardText:p.a,BCardCode:c.a},directives:{Ripple:s.a},data:function(){return{codeSize:'\n<template>\n  <div>\n    <div>\n      \x3c!-- large --\x3e\n      <b-button-group\n        size="lg"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n    <div>\n\n      \x3c!-- default --\x3e\n      <b-button-group\n        class="my-1"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n\n    <div>\n\n      \x3c!-- size --\x3e\n      <b-button-group\n        size="sm"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},v=Object(b.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{title:"Size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeSize)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Set the size prop to ")]),t._v(" "),r("code",[t._v("lg")]),t._v(" "),r("span",[t._v(" or ")]),t._v(" "),r("code",[t._v("sm")]),t._v(" "),r("span",[t._v(" to render larger or smaller, respectively, buttons. There is no need to specify the size on the individual buttons.")])]),t._v(" "),r("div",[r("b-button-group",{attrs:{size:"lg"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        First\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Second\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Third\n      ")])],1)],1),t._v(" "),r("div",[r("b-button-group",{staticClass:"my-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        First\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Second\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Third\n      ")])],1)],1),t._v(" "),r("div",[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        First\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Second\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Third\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,m=r(579),g=r(1855),f=r(1833),_={components:{BButtonGroup:i.a,BDropdown:m.a,BDropdownItem:g.a,BButton:a.a,BCardCode:c.a,BDropdownDivider:f.a,BCardText:p.a},directives:{Ripple:s.a},data:function(){return{codeDropdown:'\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Button\n    </b-button>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      right\n      variant="outline-primary"\n      text="Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      right\n      split\n      text="Split Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n  </b-button-group>\n</template>\n\n<script>\nimport {\n  BButtonGroup, BButton, BDropdown, BDropdownItem, BDropdownDivider, \n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BDropdown,\n    BDropdownItem,\n    BButton,\n    BDropdownDivider,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},O=Object(b.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{staticClass:"mb-0",attrs:{title:"Dropdown menu support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeDropdown)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Add ")]),t._v(" "),r("code",[t._v("<b-dropdown>")]),t._v(" "),r("span",[t._v(" menus directly inside your ")]),t._v(" "),r("code",[t._v("<b-button-group>")]),t._v(" "),r("span",[t._v(". Note that split dropdown menus are not supported when prop ")]),t._v(" "),r("code",[t._v("vertical")]),t._v(" "),r("span",[t._v(" is set.")])]),t._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Button\n    ")]),t._v(" "),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{right:"",variant:"outline-primary",text:"Menu"}},[r("b-dropdown-item",[t._v("Item 1")]),t._v(" "),r("b-dropdown-item",[t._v("Item 2")]),t._v(" "),r("b-dropdown-divider"),t._v(" "),r("b-dropdown-item",[t._v("Item 3")])],1),t._v(" "),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary",right:"",split:"",text:"Split Menu"}},[r("b-dropdown-item",[t._v("Item 1")]),t._v(" "),r("b-dropdown-item",[t._v("Item 2")]),t._v(" "),r("b-dropdown-divider"),t._v(" "),r("b-dropdown-item",[t._v("Item 3")])],1)],1)],1)}),[],!1,null,null,null).exports,w={components:{BRow:n.a,BCol:o.a,ButtonGroupBasic:d,ButtonGroupSize:v,ButtonGroupDropdownSupport:O}},y=Object(b.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("button-group-basic"),this._v(" "),e("button-group-size"),this._v(" "),e("button-group-dropdown-support")],1)],1)}),[],!1,null,null,null);e.default=y.exports},4:function(t,e,r){"use strict";var n=r(16);e.a=n.a},532:function(t,e,r){var n=r(1035);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(23)(n,o);n.locals&&(t.exports=n.locals)}}]);