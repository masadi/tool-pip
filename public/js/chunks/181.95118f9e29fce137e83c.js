(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1027:function(e,n,r){"use strict";r(530)},1028:function(e,n,r){(n=r(21)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=n},1530:function(e,n,r){"use strict";r.r(n);var o=r(16),t=r(1837),l=r(532),a=r(1802),i=r(1798),s=r(341),c=r(275),d=r.n(c),m=(r(582),{components:{BCardCode:o.a,BFormGroup:t.a,BInputGroupPrepend:l.a,BInputGroup:a.a,Cleave:d.a,BRow:i.a,BCol:s.a},data:function(){return{form:{cardNumber:null,date:null,phone:null},options:{creditCard:{creditCard:!0},date:{date:!0,delimiter:"-",datePattern:["Y","m","d"]},phone:{phone:!0,phoneRegionCode:"US"},time:{time:!0,timePattern:["h","m","s"]},number:{numeral:!0,numeralThousandsGroupStyle:"thousand"},block:{blocks:[4,3,3],uppercase:!0},delimiter:{delimiter:"·",blocks:[3,3,3],uppercase:!0},customDelimiter:{delimiters:[".",".","-"],blocks:[3,3,3,2],uppercase:!0},prefix:{prefix:"+63",blocks:[3,3,3,4],uppercase:!0}},codeMask:'\n<template>\n  <b-row>\n\n    \x3c!-- credit card --\x3e\n    <b-col\n      md="6"\n      xl="4"\n    >\n      <b-form-group\n        label="Credit Card"\n        label-for="cardNumber"\n      >\n        <cleave\n          id="cardNumber"\n          v-model="form.cardNumber"\n          class="form-control"\n          :raw="false"\n          :options="options.creditCard"\n          placeholder="0000 0000 0000 0000"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- phone number --\x3e\n    <b-col\n      md="6"\n      xl="4"\n    >\n      <b-form-group\n        label="Phone Number"\n        label-for="phone"\n      >\n        <b-input-group>\n          <b-input-group-prepend is-text>\n            US (+1)\n          </b-input-group-prepend>\n          <cleave\n            id="phone"\n            v-model="form.phone"\n            class="form-control"\n            :raw="false"\n            :options="options.phone"\n            placeholder="1234 567 8900"\n          />\n        </b-input-group>\n\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- date --\x3e\n    <b-col\n      md="6"\n      xl="4"\n    >\n      <b-form-group\n        label="Date"\n        label-for="date"\n      >\n        <cleave\n          id="date"\n          v-model="form.date"\n          class="form-control"\n          :raw="false"\n          :options="options.date"\n          placeholder="YYYY-MM-DD"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- time --\x3e\n    <b-col\n      md="6"\n      xl="4"\n    >\n      <b-form-group\n        label="Time"\n        label-for="time"\n      >\n        <cleave\n          id="time"\n          v-model="form.time"\n          class="form-control"\n          :raw="false"\n          :options="options.time"\n          placeholder="hh:mm:ss"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- Numeral Formatting --\x3e\n    <b-col\n      md="6"\n      xl="4"\n    >\n      <b-form-group\n        label="Numeral Formatting"\n        label-for="number"\n      >\n        <cleave\n          id="number"\n          v-model="form.number"\n          class="form-control"\n          :raw="false"\n          :options="options.number"\n          placeholder="10,000"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- block --\x3e\n    <b-col\n      md="6"\n      xl="4"\n    >\n      <b-form-group\n        label="Blocks"\n        label-for="block"\n      >\n        <cleave\n          id="block"\n          v-model="form.block"\n          class="form-control"\n          :raw="false"\n          :options="options.block"\n          placeholder="Block [4,3,3]"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- delimiters --\x3e\n    <b-col\n      md="6"\n      xl="4"\n    >\n      <b-form-group\n        label="Delimiters"\n        label-for="delimiter"\n      >\n        <cleave\n          id="delimiter"\n          v-model="form.delimiter"\n          class="form-control"\n          :raw="false"\n          :options="options.delimiter"\n          placeholder="Delimiter: \'.\'"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- Custom Delimiters --\x3e\n    <b-col\n      md="6"\n      xl="4"\n    >\n      <b-form-group\n        label="Custom Delimiters"\n        label-for="customDelimiter"\n      >\n        <cleave\n          id="customDelimiter"\n          v-model="form.customDelimiter"\n          class="form-control"\n          :raw="false"\n          :options="options.customDelimiter"\n          placeholder="Delimiter: [\'.\', \'.\', \'-\']"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- prefix --\x3e\n    <b-col\n      md="6"\n      xl="4"\n    >\n      <b-form-group\n        label="Prefix"\n        label-for="prefix"\n      >\n        <cleave\n          id="prefix"\n          v-model="form.prefix"\n          class="form-control"\n          :raw="false"\n          :options="options.prefix"\n        />\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BRow, BCol, BFormGroup, BInputGroupPrepend, BInputGroup} from \'bootstrap-vue\'\nimport Cleave from \'vue-cleave-component\'\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport \'cleave.js/dist/addons/cleave-phone.us\'\n\nexport default {\n  components: {\n    BFormGroup,\n    BInputGroupPrepend,\n    BInputGroup,\n    Cleave,\n    BRow,\n    BCol,\n  },\n  data() {\n    return {\n      form: {\n        cardNumber: null,\n        date: null,\n        phone: null,\n      },\n      options: {\n        creditCard: {\n          creditCard: true,\n        },\n        date: {\n          date: true,\n          delimiter: \'-\',\n          datePattern: [\'Y\', \'m\', \'d\'],\n        },\n        phone: {\n          phone: true,\n          phoneRegionCode: \'US\',\n        },\n        time: {\n          time: true,\n          timePattern: [\'h\', \'m\', \'s\'],\n        },\n        number: {\n          numeral: true,\n          numeralThousandsGroupStyle: \'thousand\',\n        },\n        block: {\n          blocks: [4, 3, 3],\n          uppercase: true,\n        },\n        delimiter: {\n          delimiter: \'·\',\n          blocks: [3, 3, 3],\n          uppercase: true,\n        },\n        customDelimiter: {\n          delimiters: [\'.\', \'.\', \'-\'],\n          blocks: [3, 3, 3, 2],\n          uppercase: true,\n        },\n        prefix: {\n          prefix: \'+63\',\n          blocks: [3, 3, 3, 4],\n          uppercase: true,\n        },\n      },\n    }\n  },\n}\n<\/script> \n'}}}),p=r(0),b=Object(p.a)(m,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("b-card-code",{attrs:{title:"Input Mask"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeMask)+"\n  ")]},proxy:!0}])},[r("b-row",[r("b-col",{attrs:{md:"6",xl:"4"}},[r("b-form-group",{attrs:{label:"Credit Card","label-for":"cardNumber"}},[r("cleave",{staticClass:"form-control",attrs:{id:"cardNumber",raw:!1,options:e.options.creditCard,placeholder:"0000 0000 0000 0000"},model:{value:e.form.cardNumber,callback:function(n){e.$set(e.form,"cardNumber",n)},expression:"form.cardNumber"}})],1)],1),e._v(" "),r("b-col",{attrs:{md:"6",xl:"4"}},[r("b-form-group",{attrs:{label:"Phone Number","label-for":"phone"}},[r("b-input-group",[r("b-input-group-prepend",{attrs:{"is-text":""}},[e._v("\n            US (+1)\n          ")]),e._v(" "),r("cleave",{staticClass:"form-control",attrs:{id:"phone",raw:!1,options:e.options.phone,placeholder:"1234 567 8900"},model:{value:e.form.phone,callback:function(n){e.$set(e.form,"phone",n)},expression:"form.phone"}})],1)],1)],1),e._v(" "),r("b-col",{attrs:{md:"6",xl:"4"}},[r("b-form-group",{attrs:{label:"Date","label-for":"date"}},[r("cleave",{staticClass:"form-control",attrs:{id:"date",raw:!1,options:e.options.date,placeholder:"YYYY-MM-DD"},model:{value:e.form.date,callback:function(n){e.$set(e.form,"date",n)},expression:"form.date"}})],1)],1),e._v(" "),r("b-col",{attrs:{md:"6",xl:"4"}},[r("b-form-group",{attrs:{label:"Time","label-for":"time"}},[r("cleave",{staticClass:"form-control",attrs:{id:"time",raw:!1,options:e.options.time,placeholder:"hh:mm:ss"},model:{value:e.form.time,callback:function(n){e.$set(e.form,"time",n)},expression:"form.time"}})],1)],1),e._v(" "),r("b-col",{attrs:{md:"6",xl:"4"}},[r("b-form-group",{attrs:{label:"Numeral Formatting","label-for":"number"}},[r("cleave",{staticClass:"form-control",attrs:{id:"number",raw:!1,options:e.options.number,placeholder:"10,000"},model:{value:e.form.number,callback:function(n){e.$set(e.form,"number",n)},expression:"form.number"}})],1)],1),e._v(" "),r("b-col",{attrs:{md:"6",xl:"4"}},[r("b-form-group",{attrs:{label:"Blocks","label-for":"block"}},[r("cleave",{staticClass:"form-control",attrs:{id:"block",raw:!1,options:e.options.block,placeholder:"Block [4,3,3]"},model:{value:e.form.block,callback:function(n){e.$set(e.form,"block",n)},expression:"form.block"}})],1)],1),e._v(" "),r("b-col",{attrs:{md:"6",xl:"4"}},[r("b-form-group",{attrs:{label:"Delimiters","label-for":"delimiter"}},[r("cleave",{staticClass:"form-control",attrs:{id:"delimiter",raw:!1,options:e.options.delimiter,placeholder:"Delimiter: '.'"},model:{value:e.form.delimiter,callback:function(n){e.$set(e.form,"delimiter",n)},expression:"form.delimiter"}})],1)],1),e._v(" "),r("b-col",{attrs:{md:"6",xl:"4"}},[r("b-form-group",{attrs:{label:"Custom Delimiters","label-for":"customDelimiter"}},[r("cleave",{staticClass:"form-control",attrs:{id:"customDelimiter",raw:!1,options:e.options.customDelimiter,placeholder:"Delimiter: ['.', '.', '-']"},model:{value:e.form.customDelimiter,callback:function(n){e.$set(e.form,"customDelimiter",n)},expression:"form.customDelimiter"}})],1)],1),e._v(" "),r("b-col",{attrs:{md:"6",xl:"4"}},[r("b-form-group",{attrs:{label:"Prefix","label-for":"prefix"}},[r("cleave",{staticClass:"form-control",attrs:{id:"prefix",raw:!1,options:e.options.prefix},model:{value:e.form.prefix,callback:function(n){e.$set(e.form,"prefix",n)},expression:"form.prefix"}})],1)],1)],1)],1)}),[],!1,null,null,null);n.default=b.exports},16:function(e,n,r){"use strict";r(74);var o=r(1801),t=r(336),l=r(338),a=r(337),i=r(1815),s=(r(173),r(186),r(98)),c=r.n(s),d={components:{BCard:o.a,BCardTitle:t.a,BCardSubTitle:l.a,BCardBody:a.a,BCollapse:i.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},m=(r(1027),r(0)),p=Object(m.a)(d,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?r("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(n){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:r("b-card-body",[e._t("default"),e._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),e._v(" "),r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=p.exports},530:function(e,n,r){var o=r(1028);"string"==typeof o&&(o=[[e.i,o,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};r(23)(o,t);o.locals&&(e.exports=o.locals)}}]);