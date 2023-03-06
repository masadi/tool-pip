(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1025:function(n,e,a){"use strict";a(532)},1026:function(n,e,a){(e=a(21)(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=e},1498:function(n,e,a){"use strict";a.r(e);var t=a(1800),r=a(342),o=a(4),l=a(1861),i=a(1801),s={components:{BCardCode:o.a,BFormRating:l.a,BCardText:i.a},data:function(){return{value:null,value2:2.67,codeBasic:'\n<template>\n  <div>\n    <b-form-rating\n      no-border\n      v-model="value"\n      variant="warning"\n    />\n    <p class="mt-1">\n      Value: {{ value }}\n    </p>\n    <p>\n      <span> Use </span>\n      <code>readonly</code>\n      <span> prop for readonly mode.</span>\n    </p>\n    <b-form-rating\n      no-border\n      v-model="value2"\n      inline\n      variant="warning"\n      readonly\n    />\n    <p class="mt-1 mb-0">\n      Value: {{ value2 }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormRating } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n  },\n  data: () => ({\n    value: null,\n    value2: 2.67,\n  }),\n}\n<\/script>\n'}}},c=a(0),d=Object(c.a)(s,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Default"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBasic)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("BootstrapVue's custom range component, ")]),n._v(" "),a("code",[n._v("<b-form-rating>")]),n._v(" "),a("span",[n._v(", is for entering or displaying a rating value.\n    ")])]),n._v(" "),a("b-form-rating",{attrs:{"no-border":"",variant:"warning"},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1)}),[],!1,null,null,null).exports,v={components:{BCardCode:o.a,BFormRating:l.a,BCardText:i.a},data:function(){return{value10:null,value7:null,codeNumber:'\n<template>\n  <div>\n    <label\n      for="rating-10"\n      class="mr-1"\n    >Rating with 10 stars:</label>\n    <b-form-rating\n      no-border\n      id="rating-10"\n      v-model="value10"\n      stars="10"\n      inline\n      variant="warning"\n    />\n    <p class="mt-1">\n      Value: {{ value10 }}\n    </p>\n\n    <label\n      for="rating-7"\n      class="mr-1"\n    >Rating with 7 stars:</label>\n    <b-form-rating\n      no-border\n      id="rating-7"\n      v-model="value7"\n      stars="7"\n      inline\n      variant="warning"\n    />\n    <p class="mt-1">\n      Value: {{ value7 }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormRating } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n  },\n  data: () => ({\n    value10: null,\n    value7: null,\n  }),\n}\n<\/script>\n'}}},u=Object(c.a)(v,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Number of stars"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeNumber)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v(" You can change the number of stars via the ")]),n._v(" "),a("code",[n._v("stars")]),n._v(" "),a("span",[n._v(" prop. The minimum allowed stars is ")]),n._v(" "),a("code",[n._v("3")])]),n._v(" "),a("label",{staticClass:"mr-1",attrs:{for:"rating-10"}},[n._v("Rating with 10 stars:")]),n._v(" "),a("b-form-rating",{attrs:{id:"rating-10",stars:"10",inline:"","no-border":"",variant:"warning"},model:{value:n.value10,callback:function(e){n.value10=e},expression:"value10"}})],1)}),[],!1,null,null,null).exports,p=a(546),m={components:{BCardCode:o.a,BFormRadio:p.a,BFormRating:l.a,BCardText:i.a},data:function(){return{value:3,selected:"primary",codeVariant:'\n<template>\n  <div>\n    <div class="demo-inline-spacing">\n\n      \x3c!-- Primary --\x3e\n      <b-form-radio\n        v-model="selected"\n        name="some-radio9"\n        value="primary"\n        class="custom-control-primary"\n      >\n        Primary\n      </b-form-radio>\n\n      \x3c!-- secondary --\x3e\n      <b-form-radio\n        v-model="selected"\n        name="some-radio9"\n        value="secondary"\n        class="custom-control-secondary"\n      >\n        Secondary\n      </b-form-radio>\n\n      \x3c!-- success --\x3e\n      <b-form-radio\n        v-model="selected"\n        name="some-radio9"\n        value="success"\n        class="custom-control-success"\n      >\n        Success\n      </b-form-radio>\n\n      \x3c!-- danger --\x3e\n      <b-form-radio\n        v-model="selected"\n        name="some-radio9"\n        value="danger"\n        class="custom-control-danger"\n      >\n        Danger\n      </b-form-radio>\n\n      \x3c!-- warning --\x3e\n      <b-form-radio\n        v-model="selected"\n        name="some-radio9"\n        value="warning"\n        class="custom-control-warning"\n      >\n        Warning\n      </b-form-radio>\n\n      \x3c!-- info --\x3e\n      <b-form-radio\n        v-model="selected"\n        name="some-radio9"\n        value="info"\n        class="custom-control-info"\n      >\n        Info\n      </b-form-radio>\n    </div>\n\n    \x3c!-- Rating --\x3e\n    <b-form-rating\n      v-model="value"\n      :variant="selected"\n      inline\n      no-border\n      class="mt-1"\n    />\n  </div>\n</template>\n\n\n<script>\nimport { BFormRating, BFormRadio, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRadio,\n    BFormRating,\n  },\n  data() {\n    return {\n      value: 3,\n      selected: \'primary\',\n    }\n  },\n}\n<\/script>\n'}}},b=Object(c.a)(m,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Variants"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeVariant)+"\n  ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[n._v("Easily apply one of the Bootstrap theme color variants to the rating icon via the ")]),n._v(" "),a("code",[n._v("variant")]),n._v(" "),a("span",[n._v(" prop.")])]),n._v(" "),a("div",{staticClass:"demo-inline-spacing"},[a("b-form-radio",{staticClass:"custom-control-primary",attrs:{name:"some-radio9",value:"primary"},model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}},[n._v("\n      Primary\n    ")]),n._v(" "),a("b-form-radio",{staticClass:"custom-control-secondary",attrs:{name:"some-radio9",value:"secondary"},model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}},[n._v("\n      Secondary\n    ")]),n._v(" "),a("b-form-radio",{staticClass:"custom-control-success",attrs:{name:"some-radio9",value:"success"},model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}},[n._v("\n      Success\n    ")]),n._v(" "),a("b-form-radio",{staticClass:"custom-control-danger",attrs:{name:"some-radio9",value:"danger"},model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}},[n._v("\n      Danger\n    ")]),n._v(" "),a("b-form-radio",{staticClass:"custom-control-warning",attrs:{name:"some-radio9",value:"warning"},model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}},[n._v("\n      Warning\n    ")]),n._v(" "),a("b-form-radio",{staticClass:"custom-control-info",attrs:{name:"some-radio9",value:"info"},model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}},[n._v("\n      Info\n    ")])],1),n._v(" "),a("b-form-rating",{staticClass:"mt-1",attrs:{variant:n.selected,inline:"","no-border":""},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:o.a,BCardText:i.a,BFormRating:l.a},data:function(){return{value:null,codeBorderLess:'\n<template>\n  <div>\n    <div>\n      <label\n        for="rating-sm-no-border"\n        class="mr-1"\n      >Small rating with no border</label>\n      <b-form-rating\n        id="rating-sm-no-border"\n        v-model="value"\n        no-border\n        variant="warning"\n        inline\n        size="sm"\n      />\n    </div>\n    <div class="mt-1">\n      <label\n        for="rating-md-no-border"\n        class="mr-1"\n      >Default rating (medium) with border</label>\n      <b-form-rating\n        id="rating-md-no-border"\n        v-model="value"\n        variant="warning"\n        inline\n      />\n    </div>\n    <div class="mt-1">\n      <label\n        for="rating-lg-no-border"\n        class="mr-1"\n      >Large rating with no border</label>\n      <b-form-rating\n        id="rating-lg-no-border"\n        v-model="value"\n        no-border\n        variant="warning"\n        size="lg"\n        inline\n      />\n    </div>\n    <p class="mt-1 mb-0">\n      Value: {{ value }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormRating } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n  },\n  data: () => ({\n    value: null,\n  }),\n}\n<\/script>\n'}}},f=Object(c.a)(_,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Borderless"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBorderLess)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("By default, ")]),n._v(" "),a("code",[n._v("<b-from-rating>")]),n._v(" "),a("span",[n._v("\n      has borders around rating. Simply set the\n    ")]),n._v(" "),a("code",[n._v("no-border")]),n._v(" "),a("span",[n._v(" prop to ")]),n._v(" "),a("code",[n._v("true")]),n._v(" "),a("span",[n._v(" to remove border.")])]),n._v(" "),a("div",[a("label",{staticClass:"mr-1",attrs:{for:"rating-sm-no-border"}},[n._v("Small rating with no border")]),n._v(" "),a("b-form-rating",{attrs:{id:"rating-sm-no-border","no-border":"",variant:"warning",inline:"",size:"sm"},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1),n._v(" "),a("div",{staticClass:"mt-1"},[a("label",{staticClass:"mr-1",attrs:{for:"rating-md-no-border"}},[n._v("Default rating (medium) with border")]),n._v(" "),a("b-form-rating",{attrs:{id:"rating-md-no-border",variant:"warning",inline:""},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1),n._v(" "),a("div",{staticClass:"mt-1"},[a("label",{staticClass:"mr-1",attrs:{for:"rating-lg-no-border"}},[n._v("Large rating with no border")]),n._v(" "),a("b-form-rating",{attrs:{id:"rating-lg-no-border","no-border":"",variant:"warning",size:"lg",inline:""},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1)],1)}),[],!1,null,null,null).exports,g={components:{BCardCode:o.a,BCardText:i.a,BFormRating:l.a},data:function(){return{value:null,codeSize:'\n<template>\n  <div>\n     <div class="mb-1">\n      <b-form-rating\n        id="rating-sm"\n        v-model="value"\n        size="sm"\n        inline\n\n        variant="primary"\n      />\n    </div>\n    <div class="mb-1">\n      <b-form-rating\n        id="rating-md"\n        v-model="value"\n        inline\n\n        variant="primary"\n      />\n    </div>\n    <div>\n      <b-form-rating\n        id="rating-lg"\n        v-model="value"\n        size="lg"\n\n        inline\n        variant="primary"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormRating } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n  },\n  data: () => ({\n    value: null,\n  }),\n}\n<\/script>\n'}}},x=Object(c.a)(g,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Size"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeSize)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Fancy a small or large rating control? Simply set the prop ")]),n._v(" "),a("code",[n._v("size")]),n._v(" "),a("span",[n._v(" to either ")]),n._v(" "),a("code",[n._v("'sm'")]),n._v(" "),a("span",[n._v(" or ")]),n._v(" "),a("code",[n._v("'lg'")]),n._v(" "),a("span",[n._v(" respectively.")])]),n._v(" "),a("div",{staticClass:"mb-1"},[a("b-form-rating",{attrs:{id:"rating-sm",size:"sm",inline:"",variant:"primary"},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1),n._v(" "),a("div",{staticClass:"mb-1"},[a("b-form-rating",{attrs:{id:"rating-md",inline:"",variant:"primary"},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1),n._v(" "),a("div",[a("b-form-rating",{attrs:{id:"rating-lg",size:"lg",inline:"",variant:"primary"},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1)],1)}),[],!1,null,null,null).exports,h={components:{BCardCode:o.a,BFormRating:l.a,BCardText:i.a},data:function(){return{value:4,value2:3.5505,codeShowValue:'\n<template>\n  <div>\n    <b-form-rating\n      no-border\n      v-model="value"\n      show-value\n      inline\n      variant="warning"\n    />\n    <p class="mt-1">\n      Value: {{ value }}\n    </p>\n    <p>Optionally show the maximum rating possible by also setting the prop <code>show-value-max</code> to <code>true</code>:</p>\n    <b-form-rating\n      no-border\n      v-model="value2"\n      readonly\n      show-value\n      variant="warning"\n      inline\n      precision="2"\n    />\n    <p class="mt-1">\n      Value: {{ value2 }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormRating } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n  },\n  data: () => ({\n    value: 4,\n    value2: 3.555,\n  }),\n}\n<\/script>\n'}}},B=Object(c.a)(h,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Show value"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeShowValue)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("To show the current rating value simply set the ")]),n._v(" "),a("code",[n._v("show-value")]),n._v(" "),a("span",[n._v(" prop to ")]),n._v(" "),a("code",[n._v("true")]),n._v(" "),a("span",[n._v(". You can use  ")]),n._v(" "),a("code",[n._v("show-value-max")]),n._v(" "),a("span",[n._v(" and ")]),n._v(" "),a("code",[n._v("precision")]),n._v(" "),a("span",[n._v(" prop to get more conrol over display value")])]),n._v(" "),a("div",[a("b-form-rating",{staticClass:"d-block",attrs:{"show-value":"",inline:"","no-border":"",variant:"warning"},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}}),n._v(" "),a("br"),n._v(" "),a("b-form-rating",{attrs:{readonly:"","show-value":"","show-value-max":"",variant:"warning",inline:"","no-border":""},model:{value:n.value2,callback:function(e){n.value2=e},expression:"value2"}}),n._v(" "),a("br"),n._v(" "),a("b-form-rating",{attrs:{readonly:"","show-value":"",variant:"warning",inline:"","no-border":"",precision:"2"},model:{value:n.value2,callback:function(e){n.value2=e},expression:"value2"}})],1)],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:o.a,BFormRating:l.a,BCardText:i.a},data:function(){return{codeDisabled:'\n<template>\n  <div>\n    <label\n      class="mr-1"\n      for="rating-disabled"\n    >Disabled rating</label>\n    <b-form-rating\n      no-border\n      id="rating-disabled"\n      value="2.75"\n      disabled\n      inline\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormRating } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n  },\n}\n<\/script>\n'}}},w=Object(c.a)(y,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"State"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeDisabled)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("If you require additional information before a user can chose a ratings value, simply set the ")]),n._v(" "),a("code",[n._v("disabled")]),n._v(" "),a("span",[n._v(" prop to ")]),n._v(" "),a("code",[n._v("true")]),n._v(" "),a("span",[n._v(" to disable any user interactivity on the component. Also you can make ratings readonly using ")]),n._v(" "),a("code",[n._v("readonly")]),n._v(" "),a("span",[n._v(" prop")])]),n._v(" "),a("div",[a("label",{staticClass:"mr-1 mb-2",attrs:{for:"rating-disabled"}},[n._v("Readonly rating")]),n._v(" "),a("b-form-rating",{attrs:{id:"rating-disabled",variant:"warning",value:"2.75",readonly:"","no-border":"",inline:""}})],1),n._v(" "),a("div",[a("label",{staticClass:"mr-1",attrs:{for:"rating-disabled"}},[n._v("Disabled rating")]),n._v(" "),a("b-form-rating",{attrs:{id:"rating-disabled",value:"2.75",disabled:"","no-border":"",inline:""}})],1)],1)}),[],!1,null,null,null).exports,C={components:{BCardCode:o.a,BFormRating:l.a,BCardText:i.a},data:function(){return{codeInline:'\n<template>\n  <div>\n    <label\n      for="rating-inline"\n      class="mr-1"\n    >Inline rating:</label>\n    <b-form-rating\n      no-border\n      id="rating-inline"\n      inline\n      variant="warning"\n      value="4"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormRating } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n  },\n}\n<\/script>\n'}}},F=Object(c.a)(C,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Inline mode"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeInline)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("By default, ")]),n._v(" "),a("code",[n._v("<b-form-rating>")]),n._v(" "),a("span",[n._v("\n      occupies 100% width of the parent container. In some situations you may prefer the custom input to occupy on the\n      space required for it's contents. Simply set the\n    ")]),n._v(" "),a("code",[n._v("inline")]),n._v(" "),a("span",[n._v(" prop to ")]),n._v(" "),a("code",[n._v("true")]),n._v(" "),a("span",[n._v(" to render the component in inline mode:")])]),n._v(" "),a("label",{staticClass:"mr-1",attrs:{for:"rating-inline"}},[n._v("Inline rating:")]),n._v(" "),a("b-form-rating",{attrs:{id:"rating-inline",inline:"","no-border":"",variant:"warning",value:"4"}})],1)}),[],!1,null,null,null).exports,k={components:{BCardCode:o.a,BFormRating:l.a,BCardText:i.a},data:function(){return{codeIcon:'\n<template>\n  <b-form-rating\n    show-clear\n    variant="danger"\n  >\n    <feather-icon\n      slot="icon-empty"\n      icon="FrownIcon"\n      size="18"\n    />\n    <feather-icon\n      slot="icon-half"\n      icon="MehIcon"\n      size="18"\n    />\n    <feather-icon\n      slot="icon-full"\n      icon="SmileIcon"\n      size="18"\n      class="text-success"\n    />\n    <feather-icon\n      slot="icon-clear"\n      icon="XCircleIcon"\n      size="18"\n    />\n  </b-form-rating>\n</template>\n\n<script>\nimport { BFormRating } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n  },\n}\n<\/script>\n'}}},R=Object(c.a)(k,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Icon"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeIcon)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("By default ")]),n._v(" "),a("code",[n._v("<b-form-rating>")]),n._v(" "),a("span",[n._v(" uses the Bootstrap Icons icons ")]),n._v(" "),a("code",[n._v("'star', 'star-half', 'star-fill',")]),n._v(" "),a("span",[n._v(" and the icon ")]),n._v(" "),a("code",[n._v("'x'")]),n._v(" "),a("span",[n._v(" (for the optional clear button). You can specify alternate Bootstrap Icons to use via the ")]),n._v(" "),a("code",[n._v(" icon-empty, icon-half, icon-full")]),n._v(" "),a("span",[n._v(" and ")]),n._v(" "),a("code",[n._v("icon-clear")]),n._v(" "),a("span",[n._v(" props.")])]),n._v(" "),a("b-form-rating",{attrs:{"show-clear":"",variant:"danger"}},[a("feather-icon",{attrs:{slot:"icon-empty",icon:"FrownIcon",size:"18"},slot:"icon-empty"}),n._v(" "),a("feather-icon",{attrs:{slot:"icon-half",icon:"MehIcon",size:"18"},slot:"icon-half"}),n._v(" "),a("feather-icon",{staticClass:"text-success",attrs:{slot:"icon-full",icon:"SmileIcon",size:"18"},slot:"icon-full"}),n._v(" "),a("feather-icon",{attrs:{slot:"icon-clear",icon:"XCircleIcon",size:"18"},slot:"icon-clear"})],1)],1)}),[],!1,null,null,null).exports,I=a(1804),S=a(534),z=a(89),E=a(535),T=a(295),G={components:{BCardCode:o.a,BFormRating:l.a,BInputGroup:I.a,BInputGroupPrepend:S.a,BButton:z.a,BInputGroupAppend:E.a,BInputGroupText:T.a,BCardText:i.a},data:function(){return{value:3,codeInputGroup:'\n<template>\n  <div>\n    <b-input-group>\n      <b-input-group-prepend>\n        <b-button @click="value = null">\n          Clear\n        </b-button>\n      </b-input-group-prepend>\n      <b-form-rating\n        no-border\n        v-model="value"\n        inline\n        color="#ff8800"\n      />\n      <b-input-group-append>\n        <b-input-group-text class="justify-content-center px-1">\n          {{ value }}\n        </b-input-group-text>\n      </b-input-group-append>\n    </b-input-group>\n  </div>\n</template>\n\n<script>\nimport {\n  BFormRating,\n  BInputGroup,\n  BInputGroupPrepend,\n  BButton,\n  BInputGroupAppend,\n  BInputGroupText,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n    BInputGroup,\n    BInputGroupPrepend,\n    BButton,\n    BInputGroupAppend,\n    BInputGroupText,\n  },\n  data: () => ({\n    value: null,\n  }),\n}\n<\/script>\n'}}},$=Object(c.a)(G,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Input Group"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeInputGroup)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("The following is an example of placing ")]),n._v(" "),a("code",[n._v("<b-form-rating>")]),n._v(" "),a("span",[n._v(" in an input group:")])]),n._v(" "),a("div",[a("b-input-group",[a("b-input-group-prepend",[a("b-button",{on:{click:function(e){n.value=null}}},[n._v("\n          Clear\n        ")])],1),n._v(" "),a("b-form-rating",{attrs:{inline:"",color:"#ff8800"},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}}),n._v(" "),a("b-input-group-append",[a("b-input-group-text",{staticClass:"justify-content-center px-1"},[n._v("\n          "+n._s(n.value)+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,O=a(1807),j={components:{BCardCode:o.a,BFormRating:l.a,BFormSelect:O.a,BCardText:i.a},data:function(){return{value:3.5,locale:"en-US",locales:[{text:"English US (en-US)",value:"en-US"},{text:"French (fr)",value:"fr"},{text:"Persian (fa)",value:"fa"},{text:"Arabic Egyptian (ar-EG)",value:"ar-EG"}],codeInternationalization:"\n<template>\n  <div>\n    <b-form-select\n      v-model=\"locale\"\n      :options=\"locales\"\n      class=\"mb-2\"\n    />\n    <b-form-rating\n      no-border\n      v-model=\"value\"\n      :locale=\"locale\"\n      show-value\n      variant=\"warning\"\n      precision=\"1\"\n      inline\n    />\n  </div>\n</template>\n\n\n<script>\nimport { BFormRating, BFormSelect } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormRating,\n    BFormSelect,\n  },\n  data: () => ({\n    value: 3.5,\n    locale: 'en-US',\n    locales: [\n      { text: 'English US (en-US)', value: 'en-US' },\n      { text: 'French (fr)', value: 'fr' },\n      { text: 'Persian (fa)', value: 'fa' },\n      { text: 'Arabic Egyptian (ar-EG)', value: 'ar-EG' },\n    ],\n  }),\n}\n<\/script>\n"}}},D=Object(c.a)(j,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Internationalization"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeInternationalization)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("When a ")]),n._v(" "),a("code",[n._v("locale")]),n._v(" "),a("span",[n._v(" is specified, the displayed value (when the ")]),n._v(" "),a("code",[n._v("show-value")]),n._v(" "),a("span",[n._v(" prop is ")]),n._v(" "),a("code",[n._v("true")]),n._v(" "),a("span",[n._v(" ) will be in the browser's default locale.")])]),n._v(" "),a("div",{staticClass:"d-flex"},[a("b-form-select",{attrs:{options:n.locales},model:{value:n.locale,callback:function(e){n.locale=e},expression:"locale"}}),n._v(" "),a("b-form-rating",{attrs:{locale:n.locale,"show-value":"",variant:"warning",precision:"1",inline:"","no-border":""},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1)],1)}),[],!1,null,null,null).exports,V={components:{BCardCode:o.a,BFormRating:l.a,BCardText:i.a},data:function(){return{value:2.5,codeClearButton:'\n<template>\n  <div>\n    <b-form-rating\n      no-border\n      v-model="value"\n      show-clear\n      show-value\n      inline\n      variant="warning"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormRating } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRating,\n  },\n  data: () => ({\n    value: 2.5,\n  }),\n}\n<\/script>\n'}}},A=Object(c.a)(V,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Clear button"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeClearButton)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Optionally show a clear icon via the ")]),n._v(" "),a("code",[n._v("show-clear")]),n._v(" "),a("span",[n._v(" prop. The value will be set to ")]),n._v(" "),a("code",[n._v("null")]),n._v(" "),a("span",[n._v(" when the clear icon is clicked")])]),n._v(" "),a("b-form-rating",{attrs:{"show-clear":"","show-value":"",inline:"",variant:"warning"},model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})],1)}),[],!1,null,null,null).exports,P={components:{BRow:t.a,BCol:r.a,FormRatingDefault:d,FormRatingNumberOfStars:u,FormRatingVariants:b,FormRatingBorderless:f,FormRatingSize:x,FormRatingShowValue:B,FormRatingState:w,FormRatingInlineMode:F,FormRatingIcon:R,FormRatingInputGroup:$,FormRatingInternationalization:D,FormRatingClearButton:A}},U=Object(c.a)(P,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{lg:"6"}},[a("form-rating-default")],1),n._v(" "),a("b-col",{attrs:{lg:"6"}},[a("form-rating-number-of-stars")],1),n._v(" "),a("b-col",{attrs:{cols:"12"}},[a("form-rating-variants")],1),n._v(" "),a("b-col",{attrs:{lg:"6"}},[a("form-rating-borderless")],1),n._v(" "),a("b-col",{attrs:{lg:"6"}},[a("form-rating-size")],1),n._v(" "),a("b-col",{attrs:{lg:"6"}},[a("form-rating-show-value")],1),n._v(" "),a("b-col",{attrs:{lg:"6"}},[a("form-rating-state")],1),n._v(" "),a("b-col",{attrs:{lg:"6"}},[a("form-rating-inline-mode")],1),n._v(" "),a("b-col",{attrs:{lg:"6"}},[a("form-rating-icon")],1),n._v(" "),a("b-col",{attrs:{lg:"6"}},[a("form-rating-input-group")],1),n._v(" "),a("b-col",{attrs:{lg:"6"}},[a("form-rating-internationalization")],1),n._v(" "),a("b-col",{attrs:{cols:"12"}},[a("form-rating-clear-button")],1)],1)}),[],!1,null,null,null);e.default=U.exports},16:function(n,e,a){"use strict";a(79);var t=a(1803),r=a(337),o=a(339),l=a(338),i=a(1817),s=(a(174),a(187),a(97)),c=a.n(s),d={components:{BCard:t.a,BCardTitle:r.a,BCardSubTitle:o.a,BCardBody:l.a,BCollapse:i.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},v=(a(1025),a(0)),u=Object(v.a)(d,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?a("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(e){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:a("b-card-body",[n._t("default"),n._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),n._v(" "),a("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=u.exports},4:function(n,e,a){"use strict";var t=a(16);e.a=t.a},532:function(n,e,a){var t=a(1026);"string"==typeof t&&(t=[[n.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(23)(t,r);t.locals&&(n.exports=t.locals)}}]);