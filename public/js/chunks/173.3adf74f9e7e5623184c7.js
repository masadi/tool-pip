(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1031:function(e,n,t){"use strict";t(532)},1032:function(e,n,t){(n=t(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=n},1515:function(e,n,t){"use strict";t.r(n);var l=t(1819),r=t(344),a=t(4),o=t(1820),i=t(1842),s={components:{BCardCode:a.a,BCardText:o.a,BFormFile:i.a},data:function(){return{file:null,file2:null,codeBasic:'\n<template>\n  <div>\n\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      v-model="file"\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n    />\n\n    <b-card-text class="my-1">\n      Selected file: <strong>{{ file ? file.name : \'\' }}</strong>\n    </b-card-text>\n\n    <b-card-text>\n      <span>You can have </span>\n      <code>&lt;b-form-file&gt;</code>\n      <span> render a browser native file input by setting the </span>\n      <code>plain</code>\n      <span> prop.</span>\n    </b-card-text>\n\n    \x3c!-- Plain mode --\x3e\n    <b-form-file\n      v-model="file2"\n      class="mt-1"\n      plain\n    />\n    <div class="mt-1">\n      Selected file: <strong>{{ file2 ? file2.name : \'\' }}</strong>\n    </div>\n  </div>\n</template>\n\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n data() {\n    return {\n      file: null,\n      file2: null,\n    }\n  },\n}\n<\/script>\n'}}},c=t(0),d=Object(c.a)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"File Input Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[t("b-card-text",[e._v("\n    Customized, cross-browser consistent, file input control that supports single file, multiple files, and directory\n    upload (for browsers that support directory mode)\n  ")]),e._v(" "),t("div",[t("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(n){e.file=n},expression:"file"}}),e._v(" "),t("b-card-text",{staticClass:"my-1"},[e._v("\n      Selected file: "),t("strong",[e._v(e._s(e.file?e.file.name:""))])]),e._v(" "),t("b-card-text",[t("span",[e._v("You can have ")]),e._v(" "),t("code",[e._v("<b-form-file>")]),e._v(" "),t("span",[e._v(" render a browser native file input by setting the ")]),e._v(" "),t("code",[e._v("plain")]),e._v(" "),t("span",[e._v(" prop.")])]),e._v(" "),t("b-form-file",{staticClass:"mt-1",attrs:{plain:""},model:{value:e.file2,callback:function(n){e.file2=n},expression:"file2"}}),e._v(" "),t("div",{staticClass:"mt-1"},[e._v("\n      Selected file: "),t("strong",[e._v(e._s(e.file2?e.file2.name:""))])])],1)],1)}),[],!1,null,null,null).exports,p={components:{BCardCode:a.a,BFormFile:i.a,BCardText:o.a},data:function(){return{codeMultiple:'\n<template>\n  <div>\n    <b-form-file\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n      multiple\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n}\n<\/script>\n'}}},f=Object(c.a)(p,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Multiple files"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeMultiple)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Multiple file uploading is supported by adding ")]),e._v(" "),t("code",[e._v("multiple")]),e._v(" "),t("span",[e._v(" prop to component.")])]),e._v(" "),t("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",multiple:""}})],1)}),[],!1,null,null,null).exports,m={components:{BCardCode:a.a,BFormFile:i.a,BCardText:o.a},data:function(){return{codeDragDrop:'\n<template>\n  <div>\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n      no-drop\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n}\n<\/script>\n'}}},u=Object(c.a)(m,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Drag and Drop support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeDragDrop)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Drop mode is enabled by default. It can disabled by setting the ")]),e._v(" "),t("code",[e._v("no-drop")]),e._v(" "),t("span",[e._v("prop. ")])]),e._v(" "),t("b-form-file",{attrs:{placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...","no-drop":""}})],1)}),[],!1,null,null,null).exports,v={components:{BCardCode:a.a,BFormFile:i.a,BCardText:o.a},data:function(){return{codeLimiting:'\n<template>\n  <div>\n    <div>\n      \x3c!-- Accept all image formats by IANA media type wildcard--\x3e\n      <label for="wildcard">Accept all image</label>\n      <b-form-file\n        id="wildcard"\n        accept="image/*"\n      />\n\n      \x3c!-- Accept specific image formats by IANA type --\x3e\n      <label\n        for="IANA"\n        class="mt-1"\n      >Accept specific image formats by IANA type</label>\n      <b-form-file\n        id="IANA"\n        accept="image/jpeg, image/png, image/gif"\n      />\n\n      \x3c!-- Accept specific image formats by extension --\x3e\n      <label\n        for="extension"\n        class="mt-1"\n      >Accept specific image formats by extension</label>\n      <b-form-file\n        id="extension"\n        accept=".jpg, .png, .gif"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormFile,\n  },\n}\n<\/script>\n'}}},b=Object(c.a)(v,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Limiting to certain file types"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeLimiting)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("You can limit the file types by setting the ")]),e._v(" "),t("code",[e._v("accept")]),e._v(" "),t("span",[e._v("\n      prop to a string containing the allowed file type(s). To specify more than one type, separate the values with a\n      comma.\n    ")])]),e._v(" "),t("label",{attrs:{for:"wildcard"}},[e._v("Accept all image")]),e._v(" "),t("b-form-file",{attrs:{id:"wildcard",accept:"image/*"}}),e._v(" "),t("label",{staticClass:"mt-1",attrs:{for:"IANA"}},[e._v("Accept specific image formats by IANA type")]),e._v(" "),t("b-form-file",{attrs:{id:"IANA",accept:"image/jpeg, image/png, image/gif"}}),e._v(" "),t("label",{staticClass:"mt-1",attrs:{for:"extension"}},[e._v("Accept specific image formats by extension")]),e._v(" "),t("b-form-file",{attrs:{id:"extension",accept:".jpg, .png, .gif"}})],1)}),[],!1,null,null,null).exports,_=t(1857),g={components:{BCardCode:a.a,BFormFile:i.a,BFormGroup:_.a,BCardText:o.a},data:function(){return{codeSize:'\n<template>\n  <div>\n    <b-form-group\n      label="Small:"\n      label-for="file-small"\n      label-cols-sm="2"\n      label-size="sm"\n    >\n      <b-form-file\n        id="file-small"\n        size="sm"\n      />\n    </b-form-group>\n\n    <b-form-group\n      label="Default:"\n      label-for="file-default"\n      label-cols-sm="2"\n    >\n      <b-form-file id="file-default" />\n    </b-form-group>\n\n    <b-form-group\n      label="Large:"\n      label-for="file-large"\n      label-cols-sm="2"\n      label-size="lg"\n    >\n      <b-form-file\n        id="file-large"\n        size="lg"\n      />\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormFile, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    BFormGroup,\n  },\n}\n<\/script>\n'}}},h=Object(c.a)(g,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSize)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Use the ")]),e._v(" "),t("code",[e._v("size")]),e._v(" "),t("span",[e._v("\n      prop to control the visual size of the input. The default size is considered md (medium). Optional sizes are\n    ")]),e._v(" "),t("code",[e._v("lg")]),e._v(" "),t("span",[e._v(" (large) and ")]),e._v(" "),t("code",[e._v("sm")]),e._v(" "),t("span",[e._v(" (small).")])]),e._v(" "),t("b-form-group",{attrs:{label:"Small:","label-for":"file-small","label-cols-sm":"2","label-size":"sm"}},[t("b-form-file",{attrs:{id:"file-small",size:"sm"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Default:","label-for":"file-default","label-cols-sm":"2"}},[t("b-form-file",{attrs:{id:"file-default"}})],1),e._v(" "),t("b-form-group",{staticClass:"mb-0",attrs:{label:"Large:","label-for":"file-large","label-cols-sm":"2","label-size":"lg"}},[t("b-form-file",{attrs:{id:"file-large",size:"lg"}})],1)],1)}),[],!1,null,null,null).exports,x=(t(119),{components:{BCardCode:a.a,BFormFile:i.a,BCardText:o.a},data:function(){return{codeFormatter:"\n<template>\n  <div>\n    <div>\n      <b-form-file\n        multiple\n        :file-name-formatter=\"formatNames\"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n  methods: {\n    formatNames(files) {\n      if (files.length === 1) {\n        return files[0].name\n      }\n      return `${ files.length } files selected`\n    },\n  },\n}\n<\/script>\n"}},methods:{formatNames:function(e){return 1===e.length?e[0].name:"".concat(e.length," files selected")}}}),F=Object(c.a)(x,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"File name formatter function"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeFormatter)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Set the prop ")]),e._v(" "),t("code",[e._v("file-name-formatter")]),e._v(" "),t("span",[e._v(" to a function that accepts a single argument which is an array of File objects.")])]),e._v(" "),t("b-form-file",{attrs:{multiple:"","file-name-formatter":e.formatNames}})],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:a.a,BFormFile:i.a,BCardText:o.a},data:function(){return{file:null,codeContextualState:'\n<template>\n  <div>\n    \x3c!-- Styled --\x3e\n    <b-form-file\n      v-model="file"\n      :state="Boolean(file)"\n      placeholder="Choose a file or drop it here..."\n      drop-placeholder="Drop file here..."\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n  },\n  data: () => ({\n    file: null,\n  }),\n}\n<\/script>\n'}}},B=Object(c.a)(y,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Contextual state feedback"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeContextualState)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("To apply one of the contextual state icons on ")]),e._v(" "),t("code",[e._v("<b-form-file>")]),e._v(" "),t("span",[e._v(", set the ")]),e._v(" "),t("code",[e._v("state")]),e._v(" "),t("span",[e._v(" prop to ")]),e._v(" "),t("code",[e._v("false")]),e._v(" "),t("span",[e._v(" (for invalid), ")]),e._v(" "),t("code",[e._v("true")]),e._v(" "),t("span",[e._v(" (for valid), or ")]),e._v(" "),t("code",[e._v("null")]),e._v(" "),t("span",[e._v(" (no validation state).")])]),e._v(" "),t("b-form-file",{attrs:{state:Boolean(e.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(n){e.file=n},expression:"file"}})],1)}),[],!1,null,null,null).exports,C=t(89),k=t(11),S={components:{BCardCode:a.a,BFormFile:i.a,BButton:C.a,BCardText:o.a},directives:{Ripple:k.a},data:function(){return{file:null,codeClearing:'\n<template>\n  <div>\n    <b-form-file\n      ref="file-input"\n      v-model="file"\n      class="mb-2"\n    />\n\n    <b-button\n      class="mr-2"\n      variant="primary"\n      @click="clearFiles"\n    >\n      Reset via method\n    </b-button>\n    <b-button\n      variant="primary"\n      @click="file = null"\n    >\n      Reset via v-model\n    </b-button>\n\n    <p class="mt-2">\n      Selected file: <strong>{{ file ? file.name : \'\' }}</strong>\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormFile, BButton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    BButton,\n  },\n  data: () => ({\n    file: null,\n  }),\n  methods: {\n    clearFiles() {\n      this.$refs[\'file-input\'].reset()\n    },\n  },\n}\n<\/script>\n'}},methods:{clearFiles:function(){this.$refs["file-input"].reset()}}},w=Object(c.a)(S,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Clearing the file selection"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeClearing)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("\n      You can clear the file input's\n      selected files by setting the\n    ")]),e._v(" "),t("code",[e._v("v-model")]),e._v(" "),t("span",[e._v(" to either ")]),e._v(" "),t("code",[e._v("null")]),e._v(" "),t("span",[e._v(" (for single mode) or an empty array ")]),e._v(" "),t("code",[e._v("[]")]),e._v(" "),t("span",[e._v(" (for multiple/directory mode).")])]),e._v(" "),t("div",[t("b-form-file",{ref:"file-input",model:{value:e.file,callback:function(n){e.file=n},expression:"file"}}),e._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-2 mb-25",attrs:{variant:"outline-primary"},on:{click:e.clearFiles}},[e._v("\n        Reset via method\n      ")]),e._v(" "),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){e.file=null}}},[e._v("\n        Reset via v-model\n      ")])],1),e._v(" "),t("b-card-text",{staticClass:"mt-1 mb-0"},[e._v("\n      Selected file: "),t("strong",[e._v(e._s(e.file?e.file.name:""))])])],1)],1)}),[],!1,null,null,null).exports,D={components:{BCardCode:a.a,BFormFile:i.a,BCardText:o.a},data:function(){return{file:null,codeDirectory:'\n<template>\n  <div>\n    <b-form-file\n        v-model="file"\n        directory\n        placeholder="Choose a file or drop it here..."\n        drop-placeholder="Drop file here..."\n      />\n    </b-card-code>\n  </div>\n</template>\n\n<script>\nimport { BFormFile } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    file:null\n  },\n}\n<\/script>\n'}}},A=Object(c.a)(D,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Directory mode"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeDirectory)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("By adding ")]),e._v(" "),t("code",[e._v("directory")]),e._v(" "),t("span",[e._v(" prop, the user can select directories instead of files.")])]),e._v(" "),t("b-form-file",{attrs:{directory:"",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(n){e.file=n},expression:"file"}})],1)}),[],!1,null,null,null).exports,I=t(541),$={components:{BCardCode:a.a,BFormFile:i.a,BCardText:o.a,BBadge:I.a},data:function(){return{codeSlot:'\n<template>\n  <b-form-file multiple>\n    <template\n      slot="file-name"\n      slot-scope="{ names }"\n    >\n      <b-badge variant="primary">\n        {{ names[0] }}\n      </b-badge>\n      <b-badge\n        v-if="names.length > 1"\n        variant="dark"\n        class="ml-1"\n      >\n        + {{ names.length - 1 }} More files\n      </b-badge>\n    </template>\n  </b-form-file>\n</template>\n\n\n<script>\nimport { BFormFile, BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormFile,\n    BBadge,\n  },\n}\n<\/script>\n'}}},z=Object(c.a)($,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"File name formatting via scoped slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSlot)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("You can use the scoped slot ")]),e._v(" "),t("code",[e._v("file-name")]),e._v(" "),t("span",[e._v(" to render the file names. The scoped slot will receive the following properties: ")]),e._v(" "),t("code",[e._v("files,names")])]),e._v(" "),t("b-form-file",{attrs:{multiple:""},scopedSlots:e._u([{key:"file-name",fn:function(n){var l=n.names;return[t("b-badge",{attrs:{variant:"primary"}},[e._v("\n        "+e._s(l[0])+"\n      ")]),e._v(" "),l.length>1?t("b-badge",{staticClass:"ml-1",attrs:{variant:"dark"}},[e._v("\n        + "+e._s(l.length-1)+" More files\n      ")]):e._e()]}}])})],1)}),[],!1,null,null,null).exports,j={components:{BRow:l.a,BCol:r.a,FileInputBasic:d,FileInputMultiple:f,FileInputDragDrop:u,FileInputLimiting:b,FileInputSize:h,FileInputFormatter:F,FileInputContextualState:B,FileInputClearing:w,FileInputDirectory:A,FileInputSlot:z}},N=Object(c.a)(j,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{lg:"6"}},[t("file-input-basic")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("file-input-limiting")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("file-input-multiple")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("file-input-drag-drop")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("file-input-formatter")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("file-input-contextual-state")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("file-input-directory")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("file-input-slot")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("file-input-size")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("file-input-clearing")],1)],1)}),[],!1,null,null,null);n.default=N.exports},16:function(e,n,t){"use strict";t(74);var l=t(1821),r=t(339),a=t(341),o=t(340),i=t(1835),s=(t(174),t(188),t(97)),c=t.n(s),d={components:{BCard:l.a,BCardTitle:r.a,BCardSubTitle:a.a,BCardBody:o.a,BCollapse:i.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(t(1031),t(0)),f=Object(p.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(n){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),e._v(" "),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=f.exports},4:function(e,n,t){"use strict";var l=t(16);n.a=l.a},532:function(e,n,t){var l=t(1032);"string"==typeof l&&(l=[[e.i,l,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(23)(l,r);l.locals&&(e.exports=l.locals)}}]);