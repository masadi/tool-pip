(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1034:function(t,n,e){"use strict";e(532)},1035:function(t,n,e){(n=e(20)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=n},148:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return s}));var a=e(8),r=e(2),o=e(1),i=Object(o.d)({plain:Object(o.c)(r.g,!1)},"formControls"),s=Object(a.c)({props:i,computed:{custom:function(){return!this.plain}}})},16:function(t,n,e){"use strict";e(71);var a=e(1943),r=e(436),o=e(437),i=e(435),s=e(1942),c=(e(174),e(188),e(96)),l=e.n(c),u={components:{BCard:a.a,BCardTitle:r.a,BCardSubTitle:o.a,BCardBody:i.a,BCollapse:s.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(e(1034),e(0)),d=Object(p.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?e("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(n){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:e("b-card-body",[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),t._v(" "),e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=d.exports},1824:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var a=e(8),r=e(46),o=e(5),i=e(2),s=e(1),c=Object(s.d)({textTag:Object(s.c)(i.u,"p")},o.u),l=Object(a.c)({name:o.u,functional:!0,props:c,render:function(t,n){var e=n.props,a=n.data,o=n.children;return t(e.textTag,Object(r.a)(a,{staticClass:"card-text"}),o)}})},1899:function(t,n,e){"use strict";e.r(n);var a=e(1823),r=e(440),o=e(1837),i=e(537),s=e(1824),c=e(4),l={components:{BCardCode:c.a,BPagination:o.a,BFormRadio:i.a,BCardText:s.a},data:function(){return{selected:"default",codeAlignment:'\n<template>\n  <div class="demo-spacing-0">\n    <span>Radios using options</span>\n    <div class="my-1">\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="default"\n        inline\n      >\n        Default\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="right"\n        inline\n      >\n        Right\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="center"\n        inline\n      >\n        Center\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="fill"\n        inline\n      >\n        Fill\n      </b-form-radio>\n    </div>\n\n    \x3c!-- pagination --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      base-url="#"\n      :align="selected"\n    />\n  </div>\n</template>\n\n<script>\nimport { BPagination, BFormRadio } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n    BFormRadio,\n  },\n  data() {\n    return {\n      selected: \'default\',\n      currentPage: 1,\n      rows: 100,\n    }\n  },\n}\n<\/script>\n',currentPage:1,rows:100}}},u=e(0),p=Object(u.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Alignment"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeAlignment)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("By default the pagination component is left aligned. Change the alignment to ")]),t._v(" "),e("code",[t._v("center, right")]),t._v(" "),e("span",[t._v(" (")]),t._v(" "),e("code",[t._v("right")]),t._v(" "),e("span",[t._v(" is an alias for ")]),t._v(" "),e("code",[t._v("end")]),t._v(" "),e("span",[t._v(" )")]),t._v(" "),e("span",[t._v(", or ")]),t._v(" "),e("code",[t._v("fill")]),t._v(" "),e("span",[t._v(" by setting the prop ")]),t._v(" "),e("code",[t._v("align")]),t._v(" "),e("span",[t._v(" to the appropriate value.")])]),t._v(" "),e("div",{staticClass:"demo-spacing-0"},[e("span",[t._v("Radios using options")]),t._v(" "),e("div",{staticClass:"my-1"},[e("b-form-radio",{attrs:{name:"vuexy-radio",value:"default",inline:""},model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}},[t._v("\n        Default\n      ")]),t._v(" "),e("b-form-radio",{attrs:{name:"vuexy-radio",value:"right",inline:""},model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}},[t._v("\n        Right\n      ")]),t._v(" "),e("b-form-radio",{attrs:{name:"vuexy-radio",value:"center",inline:""},model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}},[t._v("\n        Center\n      ")]),t._v(" "),e("b-form-radio",{attrs:{name:"vuexy-radio",value:"fill",inline:""},model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}},[t._v("\n        Fill\n      ")])],1),t._v(" "),e("b-pagination",{attrs:{"total-rows":t.rows,"base-url":"#",align:t.selected},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,d={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeBasic:'\n<template>\n   <b-pagination\n    v-model="currentPage"\n    hide-goto-end-buttons\n    :total-rows="rows"\n  />\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data() {\n    return {\n      currentPage: 1,\n      perPage: 1,\n      rows: 100,\n    }\n  },\n}\n<\/script>\n',currentPage:1,perPage:1,rows:100}}},v=Object(u.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Basic"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeBasic)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("\n      Quick first, previous, next, last, and page buttons for pagination control of another component (such as\n    ")]),t._v(" "),e("code",[t._v("<b-table>")]),t._v(" "),e("span",[t._v("or lists).")])]),t._v(" "),e("div",{staticClass:"demo-spacing-0"},[e("b-pagination",{attrs:{"hide-goto-end-buttons":"","total-rows":t.rows},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,b=e(547),g={components:{BCardCode:c.a,BPagination:o.a,BSpinner:b.a,BCardText:s.a},data:function(){return{codeContent:'\n<template>\n  <div class="demo-spacing-0">\n    \x3c!-- Use text in props --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      :per-page="perPage"\n      first-text="First"\n      prev-text="Prev"\n      next-text="Next"\n      align="left"\n      last-text="Last"\n    />\n\n    \x3c!-- Use emojis in props --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      :per-page="perPage"\n      first-text="⏮"\n      prev-text="⏪"\n      next-text="⏩"\n      align="left"\n      last-text="⏭"\n      class="mt-2"\n    />\n\n    \x3c!-- Use HTML and sub-components in slots --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      :per-page="perPage"\n      align="left"\n      class="mt-2"\n    >\n      <template\n        #first-text\n      >\n        <span class="text-success">First</span>\n      </template>\n      <template #prev-text>\n        <span class="text-danger">Prev</span>\n      </template>\n      <template #next-text>\n        <span class="text-warning">Next</span>\n      </template>\n      <template #last-text>\n        <span class="text-info">Last</span>\n      </template>\n      <template #ellipsis-text>\n        <div>\n          <b-spinner\n            small\n            type="grow"\n          />\n          <b-spinner\n            small\n            type="grow"\n          />\n        </div>\n      </template>\n      <template #page="{ page, active }">\n        <b v-if="active">{{ page }}</b>\n        <i v-else>{{ page }}</i>\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination, BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n    BSpinner,\n  },\n  data: () => ({\n    currentPage: 1,\n    perPage: 10,\n    rows: 100,\n  }),\n}\n<\/script>\n',currentPage:1,perPage:10,rows:100}}},m=Object(u.a)(g,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Button content"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeContent)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("For a full list of all available slots see the")]),t._v(" "),e("code",[t._v("Slots")]),t._v(" "),e("span",[t._v("section below.")])]),t._v(" "),e("div",{staticClass:"demo-spacing-0"},[e("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next",align:"left","last-text":"Last"},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}}),t._v(" "),e("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-text":"⏮","prev-text":"⏪","next-text":"⏩",align:"left","last-text":"⏭"},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}}),t._v(" "),e("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":t.rows,"per-page":t.perPage,align:"left"},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticClass:"text-success"},[t._v("First")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticClass:"text-danger"},[t._v("Prev")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticClass:"text-warning"},[t._v("Next")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticClass:"text-info"},[t._v("Last")])]},proxy:!0},{key:"ellipsis-text",fn:function(){return[e("div",[e("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" "),e("b-spinner",{attrs:{small:"",type:"grow"}})],1)]},proxy:!0},{key:"page",fn:function(n){var a=n.page,r=n.active;return[e(r?"b":"i",[t._v(t._s(a))])]}}]),model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,f={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeColorOption:'\n<template>\n  <div class="demo-spacing-0">\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      class="pagination-success"\n    >\n      <template #prev-text>\n        <feather-icon\n          size="18"\n          icon="ChevronLeftIcon"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size="18"\n          icon="ChevronRightIcon"\n        />\n      </template>\n    </b-pagination>\n\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      class="pagination-danger mt-2"\n    >\n      <template #prev-text>\n        <feather-icon\n          size="18"\n          icon="ChevronLeftIcon"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size="18"\n          icon="ChevronRightIcon"\n        />\n      </template>\n    </b-pagination>\n\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      class="pagination-info mb-0"\n    >\n      <template #prev-text>\n        <feather-icon\n          size="18"\n          icon="ChevronLeftIcon"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size="18"\n          icon="ChevronRightIcon"\n        />\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n data() {\n    return {\n      codeColorOption,\n      currentPage: 4,\n      perPage: 1,\n      rows: 200,\n    }\n  },\n}\n<\/script>\n',currentPage:4,perPage:1,rows:200}}},h=Object(u.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Color Option"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeColorOption)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("To add pagination with different color option, use class")]),t._v(" "),e("code",[t._v(".pagination-{colorName}")]),t._v(" "),e("span",[t._v("with ")]),t._v(" "),e("code",[t._v("<b-pagination>")]),t._v(" "),e("span",[t._v("components.")])]),t._v(" "),e("div",{staticClass:"demo-spacing-0"},[e("b-pagination",{staticClass:"pagination-success",attrs:{"total-rows":t.rows,"first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[e("feather-icon",{attrs:{size:"18",icon:"ChevronLeftIcon"}})]},proxy:!0},{key:"next-text",fn:function(){return[e("feather-icon",{attrs:{size:"18",icon:"ChevronRightIcon"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}}),t._v(" "),e("b-pagination",{staticClass:"pagination-danger mt-2",attrs:{"total-rows":t.rows,"first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[e("feather-icon",{attrs:{size:"18",icon:"ChevronLeftIcon"}})]},proxy:!0},{key:"next-text",fn:function(){return[e("feather-icon",{attrs:{size:"18",icon:"ChevronRightIcon"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}}),t._v(" "),e("b-pagination",{staticClass:"pagination-info mb-0",attrs:{"total-rows":t.rows,"first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[e("feather-icon",{attrs:{size:"18",icon:"ChevronLeftIcon"}})]},proxy:!0},{key:"next-text",fn:function(){return[e("feather-icon",{attrs:{size:"18",icon:"ChevronRightIcon"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeGoto:'\n<template>\n  <div>\n    <div>\n      <h6>Goto first button number</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        :per-page="perPage"\n        first-number\n      />\n    </div>\n    <div class="mt-2">\n      <h6>Goto last button number</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        :per-page="perPage"\n        last-number\n      />\n    </div>\n    <div class="mt-2 demo-spacing-0">\n      <h6>Goto first and last button number</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        :per-page="perPage"\n        first-number\n        last-number\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 5,\n    perPage: 1,\n    rows: 100,\n  }),\n}\n<\/script>\n',currentPage:5,perPage:1,rows:100}}},x=Object(u.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Goto first/last button type"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeGoto)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("If you prefer to have buttons with the first and last page number to go to the corresponding page, use the")]),t._v(" "),e("code",[t._v("first-number")]),t._v(" "),e("span",[t._v("and")]),t._v(" "),e("code",[t._v("last-number")]),t._v(" "),e("span",[t._v("props")]),t._v(".\n  ")]),t._v(" "),e("div",[e("h6",[t._v("Goto first button number")]),t._v(" "),e("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":""},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1),t._v(" "),e("div",{staticClass:"mt-2"},[e("h6",[t._v("Goto last button number")]),t._v(" "),e("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"last-number":""},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1),t._v(" "),e("div",{staticClass:"mt-2 demo-spacing-0"},[e("h6",[t._v("Goto first and last button number")]),t._v(" "),e("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":""},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,P={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codePill:'\n<template>\n  <div>\n    <div>\n      <h6>Small Pills</h6>\n      <b-pagination\n        v-model="currentPage"\n        pills\n        :total-rows="rows"\n        size="sm"\n      />\n    </div>\n\n    <div class="mt-2">\n      <h6>Default Pills</h6>\n      <b-pagination\n        v-model="currentPage"\n        pills\n        :total-rows="rows"\n      />\n    </div>\n\n    <div class="mt-2 demo-spacing-0">\n      <h6>Large Pills</h6>\n      <b-pagination\n        v-model="currentPage"\n        pills\n        :total-rows="rows"\n        size="lg"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    rows: 100,\n  }),\n}\n<\/script>\n',currentPage:1,rows:100}}},w=Object(u.a)(P,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Pill style"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codePill)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Easily switch to pill style buttons by setting the")]),t._v(" "),e("code",[t._v("pills")]),t._v(" "),e("span",[t._v("prop.")])]),t._v(" "),e("div",[e("h6",[t._v("Small Pills")]),t._v(" "),e("b-pagination",{attrs:{pills:"","total-rows":t.rows,size:"sm"},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1),t._v(" "),e("div",{staticClass:"mt-2"},[e("h6",[t._v("Default Pills")]),t._v(" "),e("b-pagination",{attrs:{pills:"","total-rows":t.rows},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1),t._v(" "),e("div",{staticClass:"mt-2 demo-spacing-0"},[e("h6",[t._v("Large Pills")]),t._v(" "),e("b-pagination",{attrs:{pills:"","total-rows":t.rows,size:"lg"},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,C={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeSeparated:'\n<template>\n  <div class="demo-spacing-0">\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      prev-class="prev-item"\n      next-class="next-item"\n    >\n      <template #prev-text>\n        <feather-icon\n          icon="ChevronLeftIcon"\n          size="18"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          icon="ChevronRightIcon"\n          size="18"\n        />\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    perPage: 1,\n    rows: 200,\n  }),\n}\n<\/script>\n',currentPage:1,perPage:1,rows:200}}},y=Object(u.a)(C,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Separated"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeSeparated)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("To make space between seprated icons of pagination use ")]),t._v(" "),e("code",[t._v(".prev-item")]),t._v(" "),e("span",[t._v(" class for the ")]),t._v(" "),e("code",[t._v("prev-class")]),t._v(" "),e("span",[t._v(" prop and ")]),t._v(" "),e("code",[t._v(".next-item")]),t._v(" "),e("span",[t._v(" for the ")]),t._v(" "),e("code",[t._v("next-class")]),t._v(" "),e("span",[t._v(" prop.")])]),t._v(" "),e("div",{staticClass:"demo-spacing-0"},[e("b-pagination",{attrs:{"total-rows":t.rows,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,k={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeSize:'\n<template>\n  <div>\n    <div>\n      <h6>Small</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        size="sm"\n      />\n    </div>\n\n    <div class="mt-2">\n      <h6>Default</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n      />\n    </div>\n\n    <div class="mt-2 demo-spacing-0">\n      <h6>Large</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        size="lg"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    rows: 100,\n  }),\n}\n<\/script>\n',currentPage:1,rows:100}}},B=Object(u.a)(k,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Button size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeSize)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Optionally change from the default button size by setting the")]),t._v(" "),e("code",[t._v("size")]),t._v(" "),e("span",[t._v("prop to either")]),t._v(" "),e("code",[t._v("'sm'")]),t._v(" "),e("span",[t._v("for smaller buttons or ")]),t._v(" "),e("code",[t._v("'lg'")]),t._v(" "),e("span",[t._v("for larger buttons.")])]),t._v(" "),e("div",[e("h6",[t._v("Small")]),t._v(" "),e("b-pagination",{attrs:{"total-rows":t.rows,size:"sm"},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1),t._v(" "),e("div",{staticClass:"mt-2"},[e("h6",[t._v("Default")]),t._v(" "),e("b-pagination",{attrs:{"total-rows":t.rows},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1),t._v(" "),e("div",{staticClass:"mt-2 demo-spacing-0"},[e("h6",[t._v("Large")]),t._v(" "),e("b-pagination",{attrs:{"total-rows":t.rows,size:"lg"},model:{value:t.currentPage,callback:function(n){t.currentPage=n},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,O={components:{BRow:a.a,BCol:r.a,PaginationAlignment:p,PaginationBasic:v,PaginationButtonContent:m,PaginationColor:h,PaginationGoto:x,PaginationPill:w,PaginationSeparated:y,PaginationSize:B}},j=Object(u.a)(O,(function(){var t=this.$createElement,n=this._self._c||t;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{lg:"6"}},[n("pagination-basic")],1),this._v(" "),n("b-col",{attrs:{lg:"6"}},[n("pagination-separated")],1),this._v(" "),n("b-col",{attrs:{xl:"6"}},[n("pagination-color")],1),this._v(" "),n("b-col",{attrs:{xl:"6"}},[n("pagination-button-content")],1),this._v(" "),n("b-col",{attrs:{lg:"6"}},[n("pagination-goto")],1),this._v(" "),n("b-col",{attrs:{lg:"6"}},[n("pagination-size")],1),this._v(" "),n("b-col",{attrs:{lg:"6"}},[n("pagination-pill")],1),this._v(" "),n("b-col",{attrs:{lg:"6"}},[n("pagination-alignment")],1)],1)}),[],!1,null,null,null);n.default=j.exports},223:function(t,n,e){"use strict";e.d(n,"a",(function(){return j})),e.d(n,"c",(function(){return G})),e.d(n,"b",(function(){return S}));var a,r,o=e(8),i=e(2),s=e(12),c=e(6),l=e(7),u=e(42),p=e(49),d=e(13),v=e(1),b=e(54),g=e(68),m=e(148),f=e(66),h=e(64),_=e(31),x=e(28);function P(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function w(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?P(Object(e),!0).forEach((function(n){C(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function C(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var y=Object(p.a)("checked",{defaultValue:null}),k=y.mixin,B=y.props,O=y.prop,j=y.event,G=Object(v.d)(Object(d.m)(w(w(w(w(w(w(w({},_.b),B),g.b),f.b),h.b),m.b),{},{ariaLabel:Object(v.c)(i.u),ariaLabelledby:Object(v.c)(i.u),button:Object(v.c)(i.g,!1),buttonVariant:Object(v.c)(i.u),inline:Object(v.c)(i.g,!1),value:Object(v.c)(i.a)})),"formRadioCheckControls"),S=Object(o.c)({mixins:[b.a,_.a,k,x.a,g.a,f.a,h.a,m.a],inheritAttrs:!1,props:G,data:function(){return{localChecked:this.isGroup?this.bvGroup[O]:this[O],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Object(u.a)(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(l.b)(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,n=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},C(t,"btn-".concat(n),n),C(t,"disabled",this.isDisabled),C(t,"active",this.isChecked),C(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,n=this.isRequired;return w(w({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:n,"aria-required":n||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(a={},C(a,O,(function(){this["".concat(O,"Watcher")].apply(this,arguments)})),C(a,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),a),methods:(r={},C(r,"".concat(O,"Watcher"),(function(t){Object(u.a)(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),C(r,"computedLocalCheckedWatcher",(function(t,n){Object(u.a)(t,n)||this.$emit(j,t)})),C(r,"handleChange",(function(t){var n=this,e=t.target.checked,a=this.value,r=e?a:null;this.computedLocalChecked=a,this.$nextTick((function(){n.$emit(s.d,r),n.isGroup&&n.bvGroup.$emit(s.d,r)}))})),C(r,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),C(r,"focus",(function(){this.isDisabled||Object(c.d)(this.$refs.input)})),C(r,"blur",(function(){this.isDisabled||Object(c.c)(this.$refs.input)})),r),render:function(t){var n=this.isRadio,e=this.isBtnMode,a=this.isPlain,r=this.isCustom,o=this.isInline,i=this.isSwitch,s=this.computedSize,c=this.bvAttrs,l=this.normalizeSlot(),u=t("input",{class:[{"form-check-input":a,"custom-control-input":r,"position-static":a&&!l},e?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:w({change:this.handleChange},e?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(e){var p=t("label",{class:this.buttonClasses},[u,l]);return this.isGroup||(p=t("div",{class:["btn-group-toggle","d-inline-block"]},[p])),p}var d=t();return a&&!l||(d=t("label",{class:{"form-check-label":a,"custom-control-label":r},attrs:{for:this.safeId()}},l)),t("div",{class:[C({"form-check":a,"form-check-inline":a&&o,"custom-control":r,"custom-control-inline":r&&o,"custom-checkbox":r&&!n&&!i,"custom-switch":i,"custom-radio":r&&n},"b-custom-control-".concat(s),s&&!e),c.class],style:c.style},[u,d])}})},4:function(t,n,e){"use strict";var a=e(16);n.a=a.a},532:function(t,n,e){var a=e(1035);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(23)(a,r);a.locals&&(t.exports=a.locals)},537:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var a=e(8),r=e(5),o=e(1),i=e(223),s=Object(o.d)(i.c,r.T),c=Object(a.c)({name:r.T,mixins:[i.b],inject:{getBvGroup:{from:"getBvRadioGroup",default:function(){return function(){return null}}}},props:s,computed:{bvGroup:function(){return this.getBvGroup()}}})},547:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var a=e(8),r=e(46),o=e(5),i=e(2),s=e(19),c=e(70),l=e(1);function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var p=Object(l.d)({label:Object(l.c)(i.u),role:Object(l.c)(i.u,"status"),small:Object(l.c)(i.g,!1),tag:Object(l.c)(i.u,"span"),type:Object(l.c)(i.u,"border"),variant:Object(l.c)(i.u)},o.Qb),d=Object(a.c)({name:o.Qb,functional:!0,props:p,render:function(t,n){var e,a=n.props,o=n.data,i=n.slots,l=n.scopedSlots,p=i(),d=l||{},v=Object(c.b)(s.C,{},d,p)||a.label;return v&&(v=t("span",{staticClass:"sr-only"},v)),t(a.tag,Object(r.a)(o,{attrs:{role:v?a.role||"status":null,"aria-hidden":v?null:"true"},class:(e={},u(e,"spinner-".concat(a.type),a.type),u(e,"spinner-".concat(a.type,"-sm"),a.small),u(e,"text-".concat(a.variant),a.variant),e)}),[v||t()])}})}}]);