(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1031:function(t,e,n){"use strict";n(532)},1032:function(t,e,n){(e=n(20)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=e},1035:function(t,e,n){"use strict";n(533)},1036:function(t,e,n){(e=n(20)(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=e},16:function(t,e,n){"use strict";n(74);var o=n(1821),a=n(339),i=n(341),r=n(340),s=n(1835),c=(n(174),n(188),n(97)),l=n.n(c),d={components:{BCard:o.a,BCardTitle:a.a,BCardSubTitle:i.a,BCardBody:r.a,BCollapse:s.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(n(1031),n(0)),u=Object(p.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?n("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:n("b-card-body",[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),t._v(" "),n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=u.exports},1925:function(t,e,n){"use strict";n.r(e);var o=n(16),a=n(1822),i=n(1857),r=n(89),s=n(1820),c=n(34),l=n(11),d={components:{BCardCode:o.a,BFormInput:a.a,BFormGroup:i.a,BButton:r.a,BCardText:s.a,ToastificationContent:c.a},directives:{Ripple:l.a},data:function(){return{message:"Copy Me!",codeDirective:"\n<template>\n  <div class=\"d-flex\">\n\n    \x3c!-- form input --\x3e\n    <b-form-group class=\"mb-0 mr-1\">\n      <b-form-input\n        v-model=\"message\"\n      />\n    </b-form-group>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-clipboard:copy=\"message\"\n      v-clipboard:success=\"onCopy\"\n      v-clipboard:error=\"onError\"\n      v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n      variant=\"primary\"\n    >\n      Copy!\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BFormInput, BFormGroup, BButton } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BButton,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      message: 'Copy Me!',\n    }\n  },\n  methods: {\n    onCopy() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Text copied',\n          icon: 'BellIcon',\n        },\n      })\n    },\n    onError() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Failed to copy texts!',\n          icon: 'BellIcon',\n        },\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{onCopy:function(){this.$toast({component:c.a,props:{title:"Text copied",icon:"BellIcon"}})},onError:function(){this.$toast({component:c.a,props:{title:"Failed to copy texts!",icon:"BellIcon"}})}}},p=n(0),u=Object(p.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Using Directive"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeDirective)+"\n  ")]},proxy:!0}])},[n("b-card-text",[t._v("Use directive on button to copy text")]),t._v(" "),n("div",{staticClass:"d-flex"},[n("b-form-group",{staticClass:"mb-0 mr-1"},[n("b-form-input",{model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),t._v(" "),n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.message,expression:"message",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"},{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"}},[t._v("\n      Copy!\n    ")])],1)],1)}),[],!1,null,null,null).exports,v={components:{BCardCode:o.a,BFormInput:a.a,BFormGroup:i.a,BButton:r.a,BCardText:s.a,ToastificationContent:c.a},directives:{Ripple:l.a},data:function(){return{message1:"Copy Me Without Directive",codeWithoutDirective:"\n<template>\n  <div class=\"d-flex\">\n\n    \x3c!-- input --\x3e\n    <b-form-group class=\"mb-0 mr-1\">\n      <b-form-input\n        v-model=\"message1\"\n      />\n    </b-form-group>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n      variant=\"primary\"\n      @click=\"doCopy\"\n    >\n      Copy!\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {BFormInput, BFormGroup, BButton, BCardText} from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      message1: 'Copy Me Without Directive',\n    }\n  },\n  methods: {\n    doCopy() {\n      this.$copyText(this.message1).then(() => {\n        this.$toast({\n          component: ToastificationContent,\n          props: {\n            title: 'Text copied',\n            icon: 'BellIcon',\n          },\n        })\n      }, e => {\n        this.$toast({\n          component: ToastificationContent,\n          props: {\n            title: 'Can not copy!',\n            icon: 'BellIcon',\n          },\n        })\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{doCopy:function(){var t=this;this.$copyText(this.message1).then((function(){t.$toast({component:c.a,props:{title:"Text copied",icon:"BellIcon"}})}),(function(){t.$toast({component:c.a,props:{title:"Can not copy!",icon:"BellIcon"}})}))}}},b={components:{ClipboardWithDirective:u,ClipboardWithoutDirective:Object(p.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Without directive"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeWithoutDirective)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("You can copy text without a specific button. Use ")]),t._v(" "),n("code",[t._v("$copyText")]),t._v(" "),n("span",[t._v(" to copy text when event got fired.")])]),t._v(" "),n("div",{staticClass:"d-flex"},[n("b-form-group",{staticClass:"mb-0 mr-1"},[n("b-form-input",{model:{value:t.message1,callback:function(e){t.message1=e},expression:"message1"}})],1),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:t.doCopy}},[t._v("\n      Copy!\n    ")])],1)],1)}),[],!1,null,null,null).exports}},m=Object(p.a)(b,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("clipboard-with-directive"),this._v(" "),e("clipboard-without-directive")],1)}),[],!1,null,null,null);e.default=m.exports},34:function(t,e,n){"use strict";var o={components:{BAvatar:n(536).a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},a=(n(1035),n(0)),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);e.a=i.exports},532:function(t,e,n){var o=n(1032);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(23)(o,a);o.locals&&(t.exports=o.locals)},533:function(t,e,n){var o=n(1036);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(23)(o,a);o.locals&&(t.exports=o.locals)}}]);