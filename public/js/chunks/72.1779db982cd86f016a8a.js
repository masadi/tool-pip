(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1034:function(t,n,e){"use strict";e(532)},1035:function(t,n,e){(n=e(20)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=n},1036:function(t,n,e){"use strict";e(533)},1037:function(t,n,e){(n=e(20)(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=n},16:function(t,n,e){"use strict";e(71);var a=e(1943),i=e(436),o=e(437),r=e(435),c=e(1942),s=(e(174),e(188),e(96)),l=e.n(s),u={components:{BCard:a.a,BCardTitle:i.a,BCardSubTitle:o.a,BCardBody:r.a,BCollapse:c.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(e(1034),e(0)),b=Object(p.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?e("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(n){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:e("b-card-body",[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),t._v(" "),e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=b.exports},1823:function(t,n,e){"use strict";e.d(n,"a",(function(){return _}));var a=e(46),i=e(5),o=e(2),r=e(22),c=e(67),s=e(35),l=e(201),u=e(13),p=e(1),b=e(27);function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){m(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function m(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var f=["start","end","center"],g=Object(l.a)((function(t,n){return(n=Object(b.h)(Object(b.g)(n)))?Object(b.c)(["row-cols",t,n].filter(s.a).join("-")):null})),h=Object(l.a)((function(t){return Object(b.c)(t.replace("cols",""))})),y=[],_={name:i.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(c.b)().reduce((function(t,n){return t[Object(p.g)(n,"cols")]=Object(p.c)(o.p),t}),Object(u.c)(null)),y=Object(u.h)(t),Object(p.d)(Object(u.m)(v(v({},t),{},{alignContent:Object(p.c)(o.u,null,(function(t){return Object(r.a)(Object(r.b)(f,"between","around","stretch"),t)})),alignH:Object(p.c)(o.u,null,(function(t){return Object(r.a)(Object(r.b)(f,"between","around"),t)})),alignV:Object(p.c)(o.u,null,(function(t){return Object(r.a)(Object(r.b)(f,"baseline","stretch"),t)})),noGutters:Object(p.c)(o.g,!1),tag:Object(p.c)(o.u,"div")})),i.Ob)),this.props},render:function(t,n){var e,i=n.props,o=n.data,r=n.children,c=i.alignV,s=i.alignH,l=i.alignContent,u=[];return y.forEach((function(t){var n=g(h(t),i[t]);n&&u.push(n)})),u.push((m(e={"no-gutters":i.noGutters},"align-items-".concat(c),c),m(e,"justify-content-".concat(s),s),m(e,"align-content-".concat(l),l),e)),t(i.tag,Object(a.a)(o,{staticClass:"row",class:u}),r)}}},1824:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var a=e(8),i=e(46),o=e(5),r=e(2),c=e(1),s=Object(c.d)({textTag:Object(c.c)(r.u,"p")},o.u),l=Object(a.c)({name:o.u,functional:!0,props:s,render:function(t,n){var e=n.props,a=n.data,o=n.children;return t(e.textTag,Object(i.a)(a,{staticClass:"card-text"}),o)}})},1921:function(t,n,e){"use strict";e.r(n);var a=e(1823),i=e(440),o=e(89),r=e(1824),c=e(16),s=e(11),l=e(34),u={components:{BButton:o.a,BCardCode:c.a,BCardText:r.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codeVariant:'\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- primary trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="showToast(\'primary\')"\n    >\n      Primary\n    </b-button>\n\n    \x3c!-- secondary trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(186, 191, 199, 0.15)\'"\n      variant="outline-secondary"\n      @click="showToast(\'secondary\')"\n    >\n      Secondary\n    </b-button>\n\n    \x3c!-- success trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n      variant="outline-success"\n      @click="showToast(\'success\')"\n    >\n      Success\n    </b-button>\n\n    \x3c!-- danger trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n      variant="outline-danger"\n      @click="showToast(\'danger\')"\n    >\n      Danger\n    </b-button>\n\n    \x3c!-- warning trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-warning"\n      @click="showToast(\'warning\')"\n    >\n      Warning\n    </b-button>\n\n    \x3c!-- info trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n      variant="outline-info"\n      @click="showToast(\'info\')"\n    >\n      Info\n    </b-button>\n\n    \x3c!-- dark trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(30, 30, 30, 0.15)\'"\n      variant="outline-dark"\n      @click="showToast(\'dark\')"\n    >\n      Dark\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\nimport ToastificationContent from \'@core/components/toastification/ToastificationContent.vue\'\n\nexport default {\n  components: {\n    BButton,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Notification\',\n          icon: \'BellIcon\',\n          text: \'👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.\',\n          variant,\n        },\n      })\n    },\n  },\n}\n<\/script>\n'}},methods:{showToast:function(t){this.$toast({component:l.a,props:{title:"Notification",icon:"BellIcon",text:"👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.",variant:t}})}}},p=e(0),b=Object(p.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Variant"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeVariant)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("You can use ")]),t._v(" "),e("code",[t._v("variant")]),t._v(" "),e("span",[t._v(" prop for color variant.")])]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary")}}},[t._v("\n      Primary\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:function(n){return t.showToast("secondary")}}},[t._v("\n      Secondary\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-success"},on:{click:function(n){return t.showToast("success")}}},[t._v("\n      Success\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-danger"},on:{click:function(n){return t.showToast("danger")}}},[t._v("\n      Danger\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-warning"},on:{click:function(n){return t.showToast("warning")}}},[t._v("\n      Warning\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-info"},on:{click:function(n){return t.showToast("info")}}},[t._v("\n      Info\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(30, 30, 30, 0.15)",expression:"'rgba(30, 30, 30, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-dark"},on:{click:function(n){return t.showToast("dark")}}},[t._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,d={components:{BButton:o.a,BCardCode:c.a,BCardText:r.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codePosition:"\n<template>\n  <div>\n    <h5 class=\"mb-0\">Top Positions</h5>\n    <div class=\"demo-inline-spacing\">\n\n      \x3c!-- Top right --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('primary','top-right')\"\n      >\n        Top Right\n      </b-button>\n\n      \x3c!-- Top left --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('secondary','top-left')\"\n      >\n        Top Left\n      </b-button>\n\n      \x3c!-- top center --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('success','top-center')\"\n      >\n        Top Center\n      </b-button>\n    </div>\n\n    <h5 class=\"mt-2 mb-0\">\n      Bottom Positions\n    </h5>\n    <div class=\"demo-inline-spacing\">\n      \x3c!-- bottom right --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('danger','bottom-right')\"\n      >\n        Bottom Right\n      </b-button>\n\n      \x3c!-- bottom left --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('warning','bottom-left')\"\n      >\n        Bottom Left\n      </b-button>\n\n      \x3c!-- bottom center --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('info','bottom-center')\"\n      >\n        Bottom Center\n      </b-button>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButton, BCardText } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, position) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon: 'InfoIcon',\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      },\n      {\n        position,\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{showToast:function(t,n){this.$toast({component:l.a,props:{title:"Notification",icon:"InfoIcon",text:"I do not think that word means what you think it means.",variant:t}},{position:n})}}},v=Object(p.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Position"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codePosition)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("Position of the toast on the screen. Can be any of ")]),t._v(" "),e("code",[t._v("top-right")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("top-center")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("top-left")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("bottom-right")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("bottom-center")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("bottom-left")]),t._v(".\n  ")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("\n    Top Positions\n  ")]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary","top-right")}}},[t._v("\n      Top Right\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("secondary","top-left")}}},[t._v("\n      Top Left\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("success","top-center")}}},[t._v("\n      Top Center\n    ")])],1),t._v(" "),e("h5",{staticClass:"mt-2 mb-0"},[t._v("\n    Bottom Positions\n  ")]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("danger","bottom-right")}}},[t._v("\n      Bottom Right\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("warning","bottom-left")}}},[t._v("\n      Bottom Left\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("info","bottom-center")}}},[t._v("\n      Bottom Center\n    ")])],1)],1)}),[],!1,null,null,null).exports,m={components:{BButton:o.a,BCardCode:c.a,BCardText:r.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codeIcon:"\n<template>\n  <div class=\"demo-inline-spacing\">\n    \x3c!-- mail icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary','MailIcon')\"\n    >\n      Icon Mail\n    </b-button>\n\n    \x3c!-- Inbox icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('secondary','InboxIcon')\"\n    >\n      Icon Inbox\n    </b-button>\n\n    \x3c!-- Check icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('success','CheckIcon')\"\n    >\n      Icon Check\n    </b-button>\n\n    \x3c!-- heart icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('danger','HeartIcon')\"\n    >\n      Icon Heart\n    </b-button>\n\n    \x3c!-- favorite icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('warning','StarIcon')\"\n    >\n      Icon Favorite\n    </b-button>\n\n    \x3c!-- slack icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('info','SlackIcon')\"\n    >\n      Icon Slack\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardCode,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, icon) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon,\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{showToast:function(t,n){this.$toast({component:l.a,props:{title:"Notification",icon:n,text:"I do not think that word means what you think it means.",variant:t}})}}},f=Object(p.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Icon"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeIcon)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("Custom icon class to be used. Use ")]),t._v(" "),e("code",[t._v("icon")]),t._v(" "),e("span",[t._v(" prop to set icon.")])]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary","MailIcon")}}},[t._v("\n      Icon Mail\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("secondary","InboxIcon")}}},[t._v("\n      Icon Inbox\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("success","CheckIcon")}}},[t._v("\n      Icon Check\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("danger","HeartIcon")}}},[t._v("\n      Icon Heart\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("warning","StarIcon")}}},[t._v("\n      Icon Favorite\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("info","SlackIcon")}}},[t._v("\n      Icon Slack\n    ")])],1)],1)}),[],!1,null,null,null).exports,g={components:{BButton:o.a,BCardCode:c.a,BCardText:r.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codeTime:"\n<template>\n  <div class=\"demo-inline-spacing\">\n\n    \x3c!-- default time trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary')\"\n    >\n      Time Default\n    </b-button>\n\n    \x3c!-- 4s delay trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary',4000)\"\n    >\n      Time 4s(4000)\n    </b-button>\n\n    \x3c!-- 8s delay trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary',8000)\"\n    >\n      Time 8s(8000)\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton} from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, timeout) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon: 'BellIcon',\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      },\n      {\n        timeout,\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{showToast:function(t,n){this.$toast({component:l.a,props:{title:"Notification",icon:"BellIcon",text:"I do not think that word means what you think it means.",variant:t}},{timeout:n})}}},h=Object(p.a)(g,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Timeout"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeTime)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[t._v("\n    How many milliseconds for the toast to be auto dismissed, or false to disable.\n  ")]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary")}}},[t._v("\n      Time Default\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary",4e3)}}},[t._v("\n      Time 4s(4000)\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary",8e3)}}},[t._v("\n      Time 8s(8000)\n    ")])],1)],1)}),[],!1,null,null,null).exports,y={components:{BRow:a.a,BCol:i.a,ToastificationVariant:b,ToastificationPosition:v,ToastificationIcon:f,ToastificationTimeout:h}},_=Object(p.a)(y,(function(){var t=this.$createElement,n=this._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("toastification-variant"),this._v(" "),n("toastification-position"),this._v(" "),n("toastification-icon"),this._v(" "),n("toastification-timeout")],1)],1)}),[],!1,null,null,null);n.default=_.exports},298:function(t,n,e){"use strict";e.d(n,"a",(function(){return _}));var a=e(36),i=e.n(a),o=e(8),r=e(46),c=e(5),s=e(2),l=e(43),u=e(13),p=e(1),b=e(27),d=e(55),v=e(299);function m(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?m(Object(e),!0).forEach((function(n){g(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var h=Object(u.j)(v.b,["content"]),y=Object(p.d)(Object(u.m)(f(f({},h),{},{icon:Object(p.c)(s.u)})),c.ib),_=Object(o.c)({name:c.ib,functional:!0,props:y,render:function(t,n){var e=n.data,a=n.props,o=n.parent,c=Object(b.e)(Object(b.h)(a.icon||"")).replace(l.p,"");return t(c&&function t(n,e){if(!n)return i.a.component(e);var a=(n.$options||{}).components;return a&&a[e]||t(n.$parent,e)}(o,"BIcon".concat(c))||d.a,Object(r.a)(e,{props:Object(p.e)(h,a)}))}})},34:function(t,n,e){"use strict";var a={components:{BAvatar:e(534).a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=(e(1036),e(0)),o=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(n){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);n.a=o.exports},532:function(t,n,e){var a=e(1035);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(23)(a,i);a.locals&&(t.exports=a.locals)},533:function(t,n,e){var a=e(1037);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(23)(a,i);a.locals&&(t.exports=a.locals)},534:function(t,n,e){"use strict";e.d(n,"b",(function(){return w})),e.d(n,"a",(function(){return T}));var a=e(8),i=e(5),o=e(12),r=e(2),c=e(19),s=e(7),l=e(21),u=e(13),p=e(1),b=e(92),d=e(28),v=e(298),m=e(55),f=e(89),g=e(59);function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function y(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){_(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function _(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var x=["sm",null,"lg"],w=function(t){return t=Object(s.n)(t)&&Object(s.i)(t)?Object(l.b)(t,0):t,Object(s.h)(t)?"".concat(t,"px"):t||null},O=Object(u.j)(g.b,["active","event","routerTag"]),j=Object(p.d)(Object(u.m)(y(y({},O),{},{alt:Object(p.c)(r.u,"avatar"),ariaLabel:Object(p.c)(r.u),badge:Object(p.c)(r.j,!1),badgeLeft:Object(p.c)(r.g,!1),badgeOffset:Object(p.c)(r.u),badgeTop:Object(p.c)(r.g,!1),badgeVariant:Object(p.c)(r.u,"primary"),button:Object(p.c)(r.g,!1),buttonType:Object(p.c)(r.u,"button"),icon:Object(p.c)(r.u),rounded:Object(p.c)(r.j,!1),size:Object(p.c)(r.p),square:Object(p.c)(r.g,!1),src:Object(p.c)(r.u),text:Object(p.c)(r.u),variant:Object(p.c)(r.u,"secondary")})),i.c),T=Object(a.c)({name:i.c,mixins:[d.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:j,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return w(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,n=!(!t||!t.square)||this.square,e=t&&t.rounded?t.rounded:this.rounded;return n?"0":""===e||(e||"circle")},fontStyle:function(){var t=this.computedSize,n=-1===x.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return n?{fontSize:n}:{}},marginStyle:function(){var t=this.computedSize,n=this.bvAvatarGroup,e=n?n.overlapScale:0,a=t&&e?"calc(".concat(t," * -").concat(e,")"):null;return a?{marginLeft:a,marginRight:a}:{}},badgeStyle:function(){var t=this.computedSize,n=this.badgeTop,e=this.badgeLeft,a=this.badgeOffset||"0px";return{fontSize:-1===x.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:n?a:null,bottom:n?null:a,left:e?a:null,right:e?null:a}}},watch:{src:function(t,n){t!==n&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(o.y,t)},onClick:function(t){this.$emit(o.f,t)}},render:function(t){var n,e=this.computedVariant,a=this.disabled,i=this.computedRounded,o=this.icon,r=this.localSrc,s=this.text,l=this.fontStyle,u=this.marginStyle,d=this.computedSize,h=this.button,w=this.buttonType,j=this.badge,T=this.badgeVariant,k=this.badgeStyle,C=!h&&Object(b.d)(this),B=h?f.a:C?g.a:"span",I=this.alt,S=this.ariaLabel||null,P=null;this.hasNormalizedSlot()?P=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):r?(P=t("img",{style:e?{}:{width:"100%",height:"100%"},attrs:{src:r,alt:I},on:{error:this.onImgError}}),P=t("span",{staticClass:"b-avatar-img"},[P])):P=o?t(v.a,{props:{icon:o},attrs:{"aria-hidden":"true",alt:I}}):s?t("span",{staticClass:"b-avatar-text",style:l},[t("span",s)]):t(m.r,{attrs:{"aria-hidden":"true",alt:I}});var N=t(),$=this.hasNormalizedSlot(c.d);if(j||""===j||$){var D=!0===j?"":j;N=t("span",{staticClass:"b-avatar-badge",class:_({},"badge-".concat(T),T),style:k},[$?this.normalizeSlot(c.d):D])}return t(B,{staticClass:"b-avatar",class:(n={},_(n,"".concat("b-avatar","-").concat(d),d&&-1!==x.indexOf(d)),_(n,"badge-".concat(e),!h&&e),_(n,"rounded",!0===i),_(n,"rounded-".concat(i),i&&!0!==i),_(n,"disabled",a),n),style:y(y({},u),{},{width:d,height:d}),attrs:{"aria-label":S||null},props:h?{variant:e,disabled:a,type:w}:C?Object(p.e)(O,this):{},on:h||C?{click:this.onClick}:{}},[P,N])}})}}]);