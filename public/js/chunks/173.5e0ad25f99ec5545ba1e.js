(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1029:function(e,t,n){"use strict";n(530)},1030:function(e,t,n){(t=n(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},1517:function(e,t,n){"use strict";n.r(t);var s=n(1809),o=n(342),l=n(4),a=n(1816),i=n(1810),c={components:{BCardCode:l.a,BFormSelect:a.a,BCardText:i.a},data:function(){return{selected:null,options:[{value:null,text:"Please select an option"},{value:"a",text:"This is First option"},{value:"b",text:"Simple Option"},{value:{C:"3PO"},text:"This is an option with object value"},{value:"d",text:"This one is disabled",disabled:!0}],codeBasic:"\n<template>\n  <div>\n    <b-form-select\n      v-model=\"selected\"\n      :options=\"options\"\n    />\n    <b-form-select\n      v-model=\"selected\"\n      :options=\"options\"\n      size=\"sm\"\n      class=\"mt-1\"\n    />\n    <div class=\"mt-1\">\n      Selected: <strong>{{ selected }}</strong>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormSelect } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormSelect,\n  },\n  data() {\n    return {\n      selected: null,\n      options: [\n        { value: null, text: 'Please select an option' },\n        { value: 'a', text: 'This is First option' },\n        { value: 'b', text: 'Simple Option' },\n        { value: { C: '3PO' }, text: 'This is an option with object value' },\n        { value: 'd', text: 'This one is disabled', disabled: true },\n      ],\n    }\n  },\n}\n<\/script>\n"}}},r=n(0),d=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"BootstrapVue Select"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Bootstrap custom ")]),e._v(" "),n("code",[e._v("<select>")]),e._v(" "),n("span",[e._v(" using custom styles. Optionally specify options based on an array, array of objects, or an object.")])]),e._v(" "),n("div",[n("b-form-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("b-form-select",{staticClass:"mt-1",attrs:{options:e.options,size:"sm"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("div",{staticClass:"mt-1"},[e._v("\n      Selected: "),n("strong",[e._v(e._s(e.selected))])])],1)],1)}),[],!1,null,null,null).exports,v={components:{BCardCode:l.a,BFormSelect:a.a,BCardText:i.a},data:function(){return{selected:null,codeStandard:"\n<template>\n  <div>\n    <b-form-select\n      v-model=\"selected\"\n      :options=\"options\"\n    />\n    <b-card-text class=\"mt-1 mb-0\">\n      Selected: <strong>{{ selected }}</strong>\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BFormSelect } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormSelect,\n  },\n  data() {\n    return {\n      selected: null,\n      options: [\n        { value: null, text: 'Please select some item' },\n        { value: 'a', text: 'This is First option' },\n        { value: 'b', text: 'Default Selected Option' },\n        { value: 'c', text: 'This is another option' },\n        { value: 'd', text: 'This one is disabled', disabled: true },\n      ],\n    }\n  },\n}\n<\/script>\n",options:[{value:null,text:"Please select some item"},{value:"a",text:"This is First option"},{value:"b",text:"Default Selected Option"},{value:"c",text:"This is another option"},{value:"d",text:"This one is disabled",disabled:!0}]}}},u=Object(r.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Standard (single) select"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeStandard)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("In non ")]),e._v(" "),n("code",[e._v("multiple")]),e._v(" "),n("span",[e._v(" mode, ")]),e._v(" "),n("code",[e._v("<b-form-select>")]),e._v(" "),n("span",[e._v(" returns the a single ")]),e._v(" "),n("code",[e._v("value")]),e._v(" "),n("span",[e._v(" of the currently selected option. ")])]),e._v(" "),n("div",[n("b-form-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("b-card-text",{staticClass:"mt-1 mb-0"},[e._v("\n      Selected: "),n("strong",[e._v(e._s(e.selected))])])],1)],1)}),[],!1,null,null,null).exports,p={components:{BCardCode:l.a,BFormSelect:a.a,BCardText:i.a},data:function(){return{selected:null,codeSize:"\n<template>\n  <div>\n    <b-form-select\n      v-model=\"selected\"\n      :options=\"options\"\n      :select-size=\"4\"\n    />\n    <b-card-text class=\"mt-1 mb-0\">\n      Selected: <strong>{{ selected }}</strong>\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BFormSelect } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormSelect,\n  },\n data() {\n    return {\n      selected: null,\n      options: [\n        { value: null, text: 'Please select some item' },\n        { value: 'a', text: 'This is option a' },\n        { value: 'b', text: 'Default Selected Option b' },\n        { value: 'c', text: 'This is option c' },\n        { value: 'd', text: 'This one is disabled', disabled: true },\n        { value: 'e', text: 'This is option e' },\n        { value: 'e', text: 'This is option f' },\n      ],\n    }\n  },\n}\n<\/script>\n",options:[{value:null,text:"Please select some item"},{value:"a",text:"This is option a"},{value:"b",text:"Default Selected Option b"},{value:"c",text:"This is option c"},{value:"d",text:"This one is disabled",disabled:!0},{value:"e",text:"This is option e"},{value:"e",text:"This is option f"}]}}},b=Object(r.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Select sizing (displayed rows)"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSize)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can use the ")]),e._v(" "),n("code",[e._v("select-size")]),e._v(" "),n("span",[e._v(" prop to switch the custom select into a select list-box, rather than a dropdown. Set the ")]),e._v(" "),n("code",[e._v("select-size")]),e._v(" "),n("span",[e._v(" prop to a numerical value greater than 1 to control how many rows of options are visible.")])]),e._v(" "),n("div",[n("b-form-select",{attrs:{options:e.options,"select-size":4},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("b-card-text",{staticClass:"mt-1 mb-0"},[e._v("\n      Selected: "),n("strong",[e._v(e._s(e.selected))])])],1)],1)}),[],!1,null,null,null).exports,m={components:{BCardCode:l.a,BFormSelect:a.a,BCardText:i.a},data:function(){return{selected:["b"],codeMultiple:"\n<template>\n  <div>\n    <b-form-select\n      v-model=\"selected\"\n      :options=\"options\"\n      multiple\n      :select-size=\"4\"\n    />\n    <div class=\"mt-1\">\n      Selected: <strong>{{ selected }}</strong>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormSelect } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormSelect,\n  },\n  data() {\n    return {\n      selected: ['b'],\n      options: [\n        { value: 'a', text: 'This is First option' },\n        { value: 'b', text: 'Default Selected Option' },\n        { value: 'c', text: 'This is another option' },\n        { value: 'd', text: 'This one is disabled', disabled: true },\n        { value: 'e', text: 'This is option e' },\n        { value: 'f', text: 'This is option f' },\n        { value: 'g', text: 'This is option g' },\n      ],\n    }\n  },\n}\n<\/script>\n",options:[{value:"a",text:"This is First option"},{value:"b",text:"Default Selected Option"},{value:"c",text:"This is another option"},{value:"d",text:"This one is disabled",disabled:!0},{value:"e",text:"This is option e"},{value:"f",text:"This is option f"},{value:"g",text:"This is option g"}]}}},_=Object(r.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Multiple select support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeMultiple)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Enable multiple select mode by setting the prop ")]),e._v(" "),n("code",[e._v("multiple")]),e._v(" "),n("span",[e._v(", and control how many rows are displayed in the multiple select list-box by setting ")]),e._v(" "),n("code",[e._v("select-size")]),e._v(" "),n("span",[e._v(" to the number of rows to display. The default is to let the browser use its default (typically 4). ")])]),e._v(" "),n("b-form-select",{attrs:{options:e.options,multiple:"","select-size":4},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("div",{staticClass:"mt-1"},[e._v("\n    Selected: "),n("strong",[e._v(e._s(e.selected))])])],1)}),[],!1,null,null,null).exports,x={components:{BCardCode:l.a,BCardText:i.a,BFormSelect:a.a},data:function(){return{selected:null,codeControlSize:"\n<template>\n  <div>\n    <b-form-select\n      v-model=\"selected\"\n      :options=\"options\"\n      size=\"sm\"\n    />\n    <b-form-select\n      v-model=\"selected\"\n      :options=\"options\"\n      size=\"lg\"\n      class=\"mt-1\"\n    />\n    <div class=\"mt-1\">\n      Selected: <strong>{{ selected }}</strong>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormSelect } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormSelect,\n  },\n  data: () => ({\n    selected: null,\n    options: [\n      { value: null, text: 'Please select an option' },\n      { value: 'a', text: 'This is First option' },\n      { value: 'b', text: 'Simple Option' },\n      { value: { C: '3PO' }, text: 'This is an option with object value' },\n      { value: 'd', text: 'This one is disabled', disabled: true },\n    ],\n  }),\n}\n<\/script>\n",options:[{value:null,text:"Please select an option"},{value:"a",text:"This is First option"},{value:"b",text:"Simple Option"},{value:{C:"3PO"},text:"This is an option with object value"},{value:"d",text:"This one is disabled",disabled:!0}]}}},f=Object(r.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeControlSize)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Set the form-control text size using the ")]),e._v(" "),n("code",[e._v("size")]),e._v(" "),n("span",[e._v(" prop to ")]),e._v(" "),n("code",[e._v("sm")]),e._v(" "),n("span",[e._v(" or ")]),e._v(" "),n("code",[e._v("lg")]),e._v(" "),n("span",[e._v(" for small or large respectively.")])]),e._v(" "),n("div",[n("b-form-select",{attrs:{options:e.options,size:"sm"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("b-form-select",{staticClass:"mt-1",attrs:{options:e.options,size:"lg"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("div",{staticClass:"mt-1"},[e._v("\n      Selected: "),n("strong",[e._v(e._s(e.selected))])])],1)],1)}),[],!1,null,null,null).exports,h={components:{BCardCode:l.a,BFormSelect:a.a,BCardText:i.a},data:function(){return{selected:null,codeStates:"\n<template>\n  <div>\n    <b-form-select\n      v-model=\"selected\"\n      :options=\"options\"\n      :state=\"selected === null ? false : true\"\n    />\n    <b-card-text class=\"mt-1 mb-0\">\n      Selected: <strong>{{ selected }}</strong>\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BFormSelect } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormSelect,\n  },\n  data() {\n    return {\n      selected: null,\n      options: [\n        { value: null, text: 'Please select some item' },\n        { value: 'a', text: 'This is First option' },\n        { value: 'b', text: 'Default Selected Option' },\n        { value: 'c', text: 'This is another option' },\n        { value: 'd', text: 'This one is disabled', disabled: true },\n      ],\n    }\n  },\n}\n<\/script>\n",options:[{value:null,text:"Please select some item"},{value:"a",text:"This is First option"},{value:"b",text:"Default Selected Option"},{value:"c",text:"This is another option"},{value:"d",text:"This one is disabled",disabled:!0}]}}},S=Object(r.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Contextual states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeStates)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Bootstrap includes validation styles for ")]),e._v(" "),n("code",[e._v("valid")]),e._v(" "),n("span",[e._v(" and ")]),e._v(" "),n("code",[e._v("invalid")]),e._v(" "),n("span",[e._v(" states on most form controls.")])]),e._v(" "),n("b-card-text",[n("span",[e._v("To apply one of the contextual state icons on ")]),e._v(" "),n("code",[e._v("<b-form-select>")]),e._v(" "),n("span",[e._v(", set the ")]),e._v(" "),n("code",[e._v("state")]),e._v(" "),n("span",[e._v(" prop to ")]),e._v(" "),n("code",[e._v("false")]),e._v(" "),n("span",[e._v(" (for invalid), ")]),e._v(" "),n("code",[e._v("true")]),e._v(" "),n("span",[e._v(" (for valid), or ")]),e._v(" "),n("code",[e._v("null")]),e._v(" "),n("span",[e._v(" (no validation state).")])]),e._v(" "),n("b-form-select",{attrs:{options:e.options,state:null!==e.selected},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("b-card-text",{staticClass:"mt-1 mb-0"},[e._v("\n    Selected: "),n("strong",[e._v(e._s(e.selected))])])],1)}),[],!1,null,null,null).exports,g={components:{BRow:s.a,BCol:o.a,FormSelectBasic:d,FormSelectStandard:u,FormSelectSize:b,FormSelectMultiple:_,FormSelectControlSize:f,FormSelectStates:S}},C=Object(r.a)(g,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{md:"6"}},[t("form-select-basic")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("form-select-standard")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("form-select-size")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("form-select-multiple")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("form-select-control-size")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("form-select-states")],1)],1)}),[],!1,null,null,null);t.default=C.exports},16:function(e,t,n){"use strict";n(74);var s=n(1811),o=n(337),l=n(339),a=n(338),i=n(1825),c=(n(174),n(188),n(97)),r=n.n(c),d={components:{BCard:s.a,BCardTitle:o.a,BCardSubTitle:l.a,BCardBody:a.a,BCollapse:i.a,Prism:r.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},v=(n(1029),n(0)),u=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?n("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:n("b-card-body",[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),e._v(" "),n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=u.exports},4:function(e,t,n){"use strict";var s=n(16);t.a=s.a},530:function(e,t,n){var s=n(1030);"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(23)(s,o);s.locals&&(e.exports=s.locals)}}]);