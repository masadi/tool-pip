(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1023:function(n,e,a){"use strict";a(530)},1024:function(n,e,a){(e=a(21)(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=e},16:function(n,e,a){"use strict";a(79);var t=a(1807),r=a(337),i=a(339),v=a(338),o=a(1821),d=(a(174),a(187),a(97)),s=a.n(d),c={components:{BCard:t.a,BCardTitle:r.a,BCardSubTitle:i.a,BCardBody:v.a,BCollapse:o.a,Prism:s.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},l=(a(1023),a(0)),b=Object(l.a)(c,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?a("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(e){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:a("b-card-body",[n._t("default"),n._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),n._v(" "),a("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=b.exports},1880:function(n,e,a){"use strict";a.r(e);var t=a(1805),r=a(342),i=a(4),v=a(305),o=a(1826),d=a(1806),s={components:{BCardCode:i.a,BNav:v.a,BNavItem:o.a,BCardText:d.a},data:function(){return{codeBasic:"\n<template>\n  <b-nav>\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Another Link</b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n"}}},c=a(0),l=Object(c.a)(s,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Base Nav"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBasic)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Navigation available in Bootstrap share general markup and styles, from the base ")]),n._v(" "),a("code",[n._v("<b-nav>")]),n._v(" "),a("span",[n._v(" class to the ")]),n._v(" "),a("code",[n._v("active")]),n._v(" "),a("span",[n._v(" and ")]),n._v(" "),a("code",[n._v("disabled")]),n._v(" "),a("span",[n._v(" states.")])]),n._v(" "),a("b-nav",[a("b-nav-item",{attrs:{active:""}},[n._v("\n      Active\n    ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item",[n._v("Another Link")]),n._v(" "),a("b-nav-item",{attrs:{disabled:""}},[n._v("\n      Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,b={components:{BCardCode:i.a,BNav:v.a,BNavItem:o.a,BCardText:d.a},data:function(){return{codeBorder:"\n<template>\n  <b-nav class=\"wrap-border\">\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Another Link</b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n"}}},m=Object(c.a)(b,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"With Border"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBorder)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Use Class ")]),n._v(" "),a("code",[n._v(".wrap-border")]),n._v(" "),a("span",[n._v(" with your ")]),n._v(" "),a("code",[n._v("<b-nav>")]),n._v(" "),a("span",[n._v(" tag to wrap your nav with a border.")])]),n._v(" "),a("b-nav",{staticClass:"wrap-border"},[a("b-nav-item",{attrs:{active:""}},[n._v("\n      Active\n    ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item",[n._v("Another Link")]),n._v(" "),a("b-nav-item",{attrs:{disabled:""}},[n._v("\n      Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,p={components:{BCardCode:i.a,BNav:v.a,BCardText:d.a,BNavItem:o.a},data:function(){return{codeFill:"\n<template>\n  <b-nav fill>\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Link with a long name </b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n"}}},_=Object(c.a)(p,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Fill Nav"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeFill)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("To proportionately fill all available space with your ")]),n._v(" "),a("code",[n._v("<b-nav-item>")]),n._v(" "),a("span",[n._v(" components, set the ")]),n._v(" "),a("code",[n._v("fill")]),n._v(" "),a("span",[n._v(" prop.")]),n._v(" "),a("span",[n._v("Notice that all horizontal space is occupied, but not every nav item has the same width.")])]),n._v(" "),a("b-nav",{attrs:{fill:""}},[a("b-nav-item",{attrs:{active:""}},[n._v("\n      Active\n    ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item",[n._v("Link with a long name ")]),n._v(" "),a("b-nav-item",{attrs:{disabled:""}},[n._v("\n      Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:i.a,BNav:v.a,BNavItem:o.a,BCardText:d.a},data:function(){return{codeJustified:"\n<template>\n  <b-nav justified>\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Link name </b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n"}}},f=Object(c.a)(u,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Justified Nav"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeJustified)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("For equal-width elements, set the ")]),n._v(" "),a("code",[n._v("justified")]),n._v(" "),a("span",[n._v(" prop instead. All horizontal space will be occupied by nav links, but unlike ")]),n._v(" "),a("code",[n._v("fill")]),n._v(" "),a("span",[n._v(" above, every ")]),n._v(" "),a("code",[n._v("<b-nav-item>")]),n._v(" "),a("span",[n._v(" will be the same width.")])]),n._v(" "),a("b-nav",{attrs:{justified:""}},[a("b-nav-item",{attrs:{active:""}},[n._v("\n      Active\n    ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item",[n._v("Link name ")]),n._v(" "),a("b-nav-item",{attrs:{disabled:""}},[n._v("\n      Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,B=a(543),w={components:{BCardCode:i.a,BNav:v.a,BNavItem:o.a,BCardText:d.a,BFormRadio:B.a},data:function(){return{selected:"center",codeAlignment:'\n<template>\n  <div>\n    <div class="d-flex mb-2">\n      <b-form-radio\n        v-model="selected"\n        name="some-radios"\n        value="left"\n        plain\n        class="vs-radio-con"\n      >\n        <span class="vs-radio">\n          <span class="vs-radio--border" />\n          <span class="vs-radio--circle" />\n        </span>\n        <span class="ml-50 mr-1">Left</span>\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="some-radios"\n        value="center"\n        plain\n        class="vs-radio-con"\n      >\n        <span class="vs-radio">\n          <span class="vs-radio--border" />\n          <span class="vs-radio--circle" />\n        </span>\n        <span class="ml-50 mr-1">Center</span>\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="some-radios"\n        value="right"\n        plain\n        class="vs-radio-con"\n      >\n        <span class="vs-radio">\n          <span class="vs-radio--border" />\n          <span class="vs-radio--circle" />\n        </span>\n        <span class="ml-50 mr-1">Right</span>\n      </b-form-radio>\n    </div>\n    <b-nav :align="selected">\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Link with a long name </b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport {BNav, BNavItem, BFormRadio} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n    BFormRadio,\n  },\n  data: () => ({\n    selected: \'center\',\n  }),\n}\n<\/script>\n'}}},h=Object(c.a)(w,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Alignment Nav"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeAlignment)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("To align your ")]),n._v(" "),a("code",[n._v("<b-nav-item>")]),n._v(" "),a("span",[n._v(" components, use the ")]),n._v(" "),a("code",[n._v("align")]),n._v(" "),a("span",[n._v(" prop. Available values are ")]),n._v(" "),a("code",[n._v("left, center")]),n._v(" "),a("span",[n._v(" and ")]),n._v(" "),a("code",[n._v("right")])]),n._v(" "),a("div",{staticClass:"mb-2"},[a("b-form-radio",{attrs:{name:"some-radios",value:"left",inline:""},model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}},[n._v("\n      Left\n    ")]),n._v(" "),a("b-form-radio",{attrs:{name:"some-radios",value:"center",inline:""},model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}},[n._v("\n      Center\n    ")]),n._v(" "),a("b-form-radio",{attrs:{name:"some-radios",value:"right",inline:""},model:{value:n.selected,callback:function(e){n.selected=e},expression:"selected"}},[n._v("\n      Right\n    ")])],1),n._v(" "),a("b-nav",{attrs:{align:n.selected}},[a("b-nav-item",{attrs:{active:""}},[n._v("\n      Active\n    ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item",[n._v("Link with a long name ")]),n._v(" "),a("b-nav-item",{attrs:{disabled:""}},[n._v("\n      Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,N=a(1832),k=a(1818),x=a(1835),g={components:{BCardCode:i.a,BNav:v.a,BNavItem:o.a,BNavItemDropdown:N.a,BDropdownDivider:k.a,BDropdownItem:x.a,BCardText:d.a},data:function(){return{codeDropdown:'\n<template>\n  <div>\n    <b-nav>\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item-dropdown\n        id="my-nav-dropdown"\n        text="Dropdown"\n        toggle-class="nav-link-custom"\n        right\n      >\n        <b-dropdown-item>One</b-dropdown-item>\n        <b-dropdown-item>Two</b-dropdown-item>\n        <b-dropdown-divider />\n        <b-dropdown-item>Three</b-dropdown-item>\n      </b-nav-item-dropdown>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport {\n  BNav, BNavItem, BNavItemDropdown, BDropdownDivider, BDropdownItem,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n    BNavItemDropdown,\n    BDropdownDivider,\n    BDropdownItem,\n  },\n}\n<\/script>\n'}}},D=Object(c.a)(g,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Dropdown Nav"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeDropdown)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Use ")]),n._v(" "),a("code",[n._v("<b-nav-item-dropdown>")]),n._v(" "),a("span",[n._v(" to place dropdown items within your nav.")])]),n._v(" "),a("div",[a("b-nav",[a("b-nav-item",{attrs:{active:""}},[n._v("\n        Active\n      ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item-dropdown",{attrs:{id:"my-nav-dropdown",text:"Dropdown","toggle-class":"nav-link-custom",right:""}},[a("b-dropdown-item",[n._v("One")]),n._v(" "),a("b-dropdown-item",[n._v("Two")]),n._v(" "),a("b-dropdown-divider"),n._v(" "),a("b-dropdown-item",[n._v("Three")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,C={components:{BCardCode:i.a,BNav:v.a,BNavItem:o.a,BCardText:d.a},data:function(){return{codeVertical:"\n<template>\n  <div>\n    <b-nav\n      vertical\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n"}}},y=Object(c.a)(C,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Vertical nav"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeVertical)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("By default ")]),n._v(" "),a("code",[n._v("<b-nav>")]),n._v(" "),a("span",[n._v(" appear on a horizontal line. Stack your navigation by setting the ")]),n._v(" "),a("code",[n._v("vertical")]),n._v(" "),a("span",[n._v(" prop.")])]),n._v(" "),a("b-nav",{attrs:{vertical:""}},[a("b-nav-item",{attrs:{active:""}},[n._v("\n      Active\n    ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item",[n._v("Another Link")]),n._v(" "),a("b-nav-item",{attrs:{disabled:""}},[n._v("\n      Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,L={components:{BCardCode:i.a,BNav:v.a,BNavItem:o.a,BCardText:d.a},data:function(){return{codeVerticalBorder:"\n<template>\n  <div>\n    <b-nav\n      vertical\n      class=\"wrap-border\"\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n"}}},I=Object(c.a)(L,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Nav with Border"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeVerticalBorder)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("To wrap with border, use ")]),n._v(" "),a("code",[n._v(".wrap-border")]),n._v(" "),a("span",[n._v(" class.")])]),n._v(" "),a("b-nav",{staticClass:"wrap-border",attrs:{vertical:""}},[a("b-nav-item",{attrs:{active:""}},[n._v("\n      Active\n    ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item",[n._v("Another Link")]),n._v(" "),a("b-nav-item",{attrs:{disabled:""}},[n._v("\n      Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,A={components:{BCardCode:i.a,BNav:v.a,BNavItem:o.a,BCardText:d.a},data:function(){return{codeSquareBorder:"\n<template>\n  <div>\n    <b-nav\n      vertical\n      class=\"wrap-border square-border\"\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n<\/script>\n"}}},T=Object(c.a)(A,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Nav with Square Border"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeSquareBorder)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("To wrap with square border, use ")]),n._v(" "),a("code",[n._v(".square-border")]),n._v(" "),a("span",[n._v(" class with ")]),n._v(" "),a("code",[n._v(".wrap-border")]),n._v(" "),a("span",[n._v(" class.")])]),n._v(" "),a("b-nav",{staticClass:"wrap-border square-border",attrs:{vertical:""}},[a("b-nav-item",{attrs:{active:""}},[n._v("\n      Active\n    ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item",[n._v("Another Link")]),n._v(" "),a("b-nav-item",{attrs:{disabled:""}},[n._v("\n      Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,S={components:{BCardCode:i.a,BNav:v.a,BNavItem:o.a,BDropdownDivider:k.a,BCardText:d.a},data:function(){return{codeDivider:"\n<template>\n  <div>\n    <b-nav\n      vertical\n      class=\"wrap-border\"\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-dropdown-divider />\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem, BDropdownDivider } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n    BDropdownDivider,\n  },\n}\n<\/script>\n"}}},$=Object(c.a)(S,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Nav with Divider  "},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeDivider)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("To add divider, use ")]),n._v(" "),a("code",[n._v("<b-dropdown-divider>")]),n._v(" "),a("span",[n._v(" components.")])]),n._v(" "),a("div",[a("b-nav",{staticClass:"wrap-border",attrs:{vertical:""}},[a("b-nav-item",{attrs:{active:""}},[n._v("\n        Active\n      ")]),n._v(" "),a("b-nav-item",[n._v("Link")]),n._v(" "),a("b-nav-item",[n._v("Another Link")]),n._v(" "),a("b-dropdown-divider"),n._v(" "),a("b-nav-item",{attrs:{disabled:""}},[n._v("\n        Disabled\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,j={components:{BRow:t.a,BCol:r.a,NavBasic:l,NavBorder:m,NavFill:_,NavJustified:f,NavAlignment:h,NavDropdown:D,NavVertical:y,NavVerticalBorder:I,NavSquareBorder:T,NavDivider:$}},O=Object(c.a)(j,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{md:"6"}},[a("nav-basic")],1),n._v(" "),a("b-col",{attrs:{md:"6"}},[a("nav-border")],1),n._v(" "),a("b-col",{attrs:{md:"6"}},[a("nav-fill")],1),n._v(" "),a("b-col",{attrs:{md:"6"}},[a("nav-justified")],1),n._v(" "),a("b-col",{attrs:{md:"6"}},[a("nav-alignment")],1),n._v(" "),a("b-col",{attrs:{md:"6"}},[a("nav-dropdown")],1),n._v(" "),a("b-col",{attrs:{md:"6"}},[a("nav-vertical")],1),n._v(" "),a("b-col",{attrs:{md:"6"}},[a("nav-vertical-border")],1),n._v(" "),a("b-col",{attrs:{md:"6"}},[a("nav-square-border")],1),n._v(" "),a("b-col",{attrs:{md:"6"}},[a("nav-divider")],1)],1)}),[],!1,null,null,null);e.default=O.exports},4:function(n,e,a){"use strict";var t=a(16);e.a=t.a},530:function(n,e,a){var t=a(1024);"string"==typeof t&&(t=[[n.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(23)(t,r);t.locals&&(n.exports=t.locals)}}]);