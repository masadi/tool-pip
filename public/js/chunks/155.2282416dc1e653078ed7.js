(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1031:function(e,a,t){"use strict";t(532)},1032:function(e,a,t){(a=t(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=a},16:function(e,a,t){"use strict";t(74);var c=t(1821),n=t(339),o=t(341),r=t(340),s=t(1835),i=(t(174),t(188),t(97)),l=t.n(i),b={components:{BCard:c.a,BCardTitle:n.a,BCardSubTitle:o.a,BCardBody:r.a,BCollapse:s.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},d=(t(1031),t(0)),u=Object(d.a)(b,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(a){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),e._v(" "),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);a.a=u.exports},1820:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var c=t(8),n=t(47),o=t(5),r=t(2),s=t(1),i=Object(s.d)({textTag:Object(s.c)(r.u,"p")},o.u),l=Object(c.c)({name:o.u,functional:!0,props:i,render:function(e,a){var t=a.props,c=a.data,o=a.children;return e(t.textTag,Object(n.a)(c,{staticClass:"card-text"}),o)}})},1911:function(e,a,t){"use strict";t.r(a);var c=t(1819),n=t(344),o=t(4),r=t(1858),s=t(1820),i=t(1850),l={components:{BCardCode:o.a,BTab:r.a,BCardText:s.a,BTabs:i.a},data:function(){return{codeBasic:'\n<template>\n  <b-tabs pills>\n    <b-tab\n      title="Home"\n      active\n    >\n      <b-card-text>\n        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="Profile">\n      <b-card-text>\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.\n      </b-card-text>\n    </b-tab>\n    <b-tab\n      title="Disable"\n      disabled\n    >\n      <b-card-text>Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.</b-card-text>\n    </b-tab>\n    <b-tab title="About">\n      <b-card-text>\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.\n      </b-card-text>\n    </b-tab>\n  </b-tabs>\n</template>\n\n<script>\nimport { BTab, BTabs } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTab,\n    BTabs,\n  },\n}\n<\/script>\n'}}},b=t(0),d=Object(b.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[t("b-tabs",{attrs:{pills:""}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v("\n        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v("\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Disable",disabled:""}},[t("b-card-text",[e._v("Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.")])],1),e._v(" "),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v("\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:o.a,BCardText:s.a,BTabs:i.a,BTab:r.a},data:function(){return{codeFill:'\n<template>\n  <b-tabs fill pills>\n    <b-tab title="Home" active>\n      <b-card-text>\n        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="Profile">\n      <b-card-text>\n        About\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.\n      </b-card-text>\n    </b-tab>\n    <b-tab\n      title="Disabled"\n      disabled\n    >\n      <b-card-text>\n        Biscuit powder jelly beans.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="About">\n      <b-card-text>\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.\n      </b-card-text>\n    </b-tab>\n  </b-tabs>\n</template>\n\n<script>\nimport { BTabs, BTab } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTabs,\n    BTab,\n  },\n}\n<\/script>\n'}}},p=Object(b.a)(u,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Filled"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeFill)+"\n  ")]},proxy:!0}])},[t("b-tabs",{attrs:{fill:"",pills:""}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v("\n        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v("\n        About\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[t("b-card-text",[e._v("\n        Biscuit powder jelly beans.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v("\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,m={components:{BCardCode:o.a,BCardText:s.a,BTabs:i.a,BTab:r.a},data:function(){return{codeJustified:'\n<template>\n  <b-tabs justified pills>\n    <b-tab title="Home" active>\n      <b-card-text>\n        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="Profile">\n      <b-card-text>\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.\n      </b-card-text>\n    </b-tab>\n    <b-tab\n      title="Disabled"\n      disabled\n    >\n      <b-card-text>\n        Tootsie roll oat cake.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="About">\n      <b-card-text>\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.\n      </b-card-text>\n    </b-tab>\n  </b-tabs>\n</template>\n\n<script>\nimport { BTabs, BTab } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTabs,\n    BTab,\n  },\n}\n<\/script>\n'}}},h=Object(b.a)(m,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Justified"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeJustified)+"\n  ")]},proxy:!0}])},[t("b-tabs",{attrs:{justified:"",pills:""}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v("\n        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v("\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[t("b-card-text",[e._v("\n        Tootsie roll oat cake.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v("\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,f={components:{BCardCode:o.a,BCardText:s.a,BTabs:i.a,BTab:r.a},data:function(){return{codeVertical:'\n<template>\n   <b-tabs pills vertical>\n      <b-tab\n        title="Pill 1"\n        active\n      >\n        <b-card-text>\n          Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Bear claw donut sesame snaps bear claw liquorice jelly-o bear claw carrot cake. Icing croissant bonbon biscuit gummi bears.\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Pill 2">\n        <b-card-text>\n          Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake. Sesame snaps wafer marshmallow danish dragée candy muffin jelly beans tootsie roll. Jelly beans oat cake chocolate cake tiramisu sweet.\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Pill 3">\n        <b-card-text>\n          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish fruitcake bonbon bear claw gummi bears apple pie.\n        </b-card-text>\n      </b-tab>\n      <b-tab\n        title="Disabled"\n        disabled\n      >\n        <b-card-text>Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop.</b-card-text>\n      </b-tab>\n    </b-tabs>\n</template>\n\n<script>\nimport { BTabs, BTab } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTabs,\n    BTab,\n  },\n}\n<\/script>\n'}}},v=Object(b.a)(f,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Vertically Stacked Pills"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeVertical)+"\n  ")]},proxy:!0}])},[t("b-tabs",{attrs:{pills:"",vertical:""}},[t("b-tab",{attrs:{title:"Pill 1",active:""}},[t("b-card-text",[e._v("\n        Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Bear claw donut sesame snaps bear claw liquorice jelly-o bear claw carrot cake. Icing croissant bonbon biscuit gummi bears.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Pill 2"}},[t("b-card-text",[e._v("\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake. Sesame snaps wafer marshmallow danish dragée candy muffin jelly beans tootsie roll. Jelly beans oat cake chocolate cake tiramisu sweet.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Pill 3"}},[t("b-card-text",[e._v("\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish fruitcake bonbon bear claw gummi bears apple pie.\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[t("b-card-text",[e._v("Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop.")])],1)],1)],1)}),[],!1,null,null,null).exports,k={components:{BCardCode:o.a,BCardText:s.a,BTabs:i.a,BTab:r.a},data:function(){return{tabData:[{home:"Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry."},{profile:"Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Pudding candy canes sugar plum cookie chocolate cake powder croissant."},{disabled:"lorem"},{about:"Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit."}],codeAlignment:'\n<template>\n  <div>\n      <h6 class="mb-2">\n      Left\n    </h6>\n    <b-tabs\n      pills\n      align="left"\n    >\n      <b-tab\n        title="Home"\n        active\n      >\n        <b-card-text>\n          {{ tabData[0][\'home\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Profile">\n        <b-card-text>\n          {{ tabData[1][\'profile\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab\n        title="Disabled"\n        disabled\n      >\n        {{ tabData[2][\'disabled\'] }}\n      </b-tab>\n      <b-tab\n        title="About"\n      >\n        <b-card-text>\n          {{ tabData[3][\'about\'] }}\n        </b-card-text>\n      </b-tab>\n    </b-tabs>\n    <h6 class="mt-2 mb-2">\n      Center\n    </h6>\n    <b-tabs\n      pills\n      align="center"\n    >\n      <b-tab\n        title="Home"\n        active\n      >\n        <b-card-text>\n          {{ tabData[0][\'home\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Profile">\n        <b-card-text>\n          {{ tabData[1][\'profile\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab\n        title="Disabled"\n        disabled\n      >\n        {{ tabData[2][\'disabled\'] }}\n      </b-tab>\n      <b-tab title="About">\n        <b-card-text>\n          {{ tabData[3][\'about\'] }}\n        </b-card-text>\n      </b-tab>\n    </b-tabs>\n    <h5 class="mt-2 mb-2">\n      Right\n    </h5>\n    <b-tabs\n      pills\n      align="right"\n    >\n      <b-tab\n        title="Home"\n        active\n      >\n        <b-card-text>\n          {{ tabData[0][\'home\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Profile">\n        <b-card-text>\n          {{ tabData[1][\'profile\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab\n        title="Disabled"\n        disabled\n      >\n        {{ tabData[2][\'disabled\'] }}\n      </b-tab>\n      <b-tab title="About">\n        <b-card-text>\n          {{ tabData[3][\'about\'] }}\n        </b-card-text>\n      </b-tab>\n    </b-tabs>\n  </div>\n</template>\n\n<script>\nimport { BTabs, BTab } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTabs,\n    BTab,\n  },\n   data() {\n    return {\n      tabData: [\n        { home: \'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry.\' },\n        { profile: \'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Pudding candy canes sugar plum cookie chocolate cake powder croissant.\' },\n        { disabled: \'lorem\' },\n        { about: \'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit.\' },\n      ],\n    }\n  },\n}\n<\/script>\n'}}},g=Object(b.a)(k,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Alignments"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAlignment)+"\n  ")]},proxy:!0}])},[t("h6",{staticClass:"mb-2"},[e._v("\n    Left\n  ")]),e._v(" "),t("b-tabs",{attrs:{pills:"",align:"left"}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v("\n        "+e._s(e.tabData[0].home)+"\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v("\n        "+e._s(e.tabData[1].profile)+"\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[e._v("\n      "+e._s(e.tabData[2].disabled)+"\n    ")]),e._v(" "),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v("\n        "+e._s(e.tabData[3].about)+"\n      ")])],1)],1),e._v(" "),t("h6",{staticClass:"mt-2 mb-2"},[e._v("\n    Center\n  ")]),e._v(" "),t("b-tabs",{attrs:{pills:"",align:"center"}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v("\n        "+e._s(e.tabData[0].home)+"\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v("\n        "+e._s(e.tabData[1].profile)+"\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[e._v("\n      "+e._s(e.tabData[2].disabled)+"\n    ")]),e._v(" "),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v("\n        "+e._s(e.tabData[3].about)+"\n      ")])],1)],1),e._v(" "),t("h5",{staticClass:"mt-2 mb-2"},[e._v("\n    Right\n  ")]),e._v(" "),t("b-tabs",{attrs:{pills:"",align:"right"}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v("\n        "+e._s(e.tabData[0].home)+"\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v("\n        "+e._s(e.tabData[1].profile)+"\n      ")])],1),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[e._v("\n      "+e._s(e.tabData[2].disabled)+"\n    ")]),e._v(" "),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v("\n        "+e._s(e.tabData[3].about)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:o.a,BCardText:s.a,BTab:r.a,BTabs:i.a},data:function(){return{codeThemes:'\n<template>\n  <div>\n    <h6>Primary</h6>\n    <b-tabs pills nav-class="nav-pill-primary">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled"disabled/>\n    </b-tabs>\n    <h6>Secondary</h6>\n    <b-tabs pills nav-class="nav-pill-secondary">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n    <h6>Success</h6>\n    <b-tabs pills nav-class="nav-pill-success">\n      <b-tab title="Active" active />\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n    <h6>Warning</h6>\n    <b-tabs pills nav-class="nav-pill-warning">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n    <h6>Danger</h6>\n    <b-tabs pills nav-class="nav-pill-danger">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n    <h6>Info</h6>\n    <b-tabs pills nav-class="nav-pill-info">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n  </div>\n</template>\n\n<script>\nimport { BTab, BTabs } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTab,\n    BTabs,\n  },\n}\n<\/script>\n'}}},_=Object(b.a)(y,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Pill Themes"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeThemes)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Use class ")]),e._v(" "),t("code",[e._v(".nav-pill-{color-name}")]),e._v(" "),t("span",[e._v(" with ")]),e._v(" "),t("code",[e._v("<b-tabs>")]),e._v(" "),t("span",[e._v(" class to apply color according to your choice.")])]),e._v(" "),t("h6",[e._v("Primary")]),e._v(" "),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-primary"}},[t("b-tab",{attrs:{title:"Active",active:""}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),e._v(" "),t("h6",[e._v("Secondary")]),e._v(" "),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-secondary"}},[t("b-tab",{attrs:{title:"Active",active:""}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),e._v(" "),t("h6",[e._v("Success")]),e._v(" "),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-success"}},[t("b-tab",{attrs:{title:"Active",active:""}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),e._v(" "),t("h6",[e._v("Danger")]),e._v(" "),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-danger"}},[t("b-tab",{attrs:{title:"Active",active:""}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),e._v(" "),t("h6",[e._v("Warning")]),e._v(" "),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-warning"}},[t("b-tab",{attrs:{title:"Active",active:""}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),e._v(" "),t("h6",[e._v("Info")]),e._v(" "),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-info"}},[t("b-tab",{attrs:{title:"Active",active:""}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Link"}}),e._v(" "),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1)],1)}),[],!1,null,null,null).exports,w={components:{BRow:c.a,BCol:n.a,PillBasic:d,PillFilled:p,PillVertical:v,PillJustified:h,PillAlignment:g,PillThemes:_}},x=Object(b.a)(w,(function(){var e=this.$createElement,a=this._self._c||e;return a("b-row",[a("b-col",{attrs:{lg:"6"}},[a("pill-basic")],1),this._v(" "),a("b-col",{attrs:{lg:"6"}},[a("pill-vertical")],1),this._v(" "),a("b-col",{attrs:{lg:"6"}},[a("pill-filled")],1),this._v(" "),a("b-col",{attrs:{lg:"6"}},[a("pill-justified")],1),this._v(" "),a("b-col",{attrs:{cols:"12"}},[a("pill-alignment")],1),this._v(" "),a("b-col",{attrs:{cols:"12"}},[a("pill-themes")],1)],1)}),[],!1,null,null,null);a.default=x.exports},344:function(e,a,t){"use strict";t.d(a,"a",(function(){return _}));var c=t(47),n=t(5),o=t(2),r=t(43),s=t(22),i=t(67),l=t(35),b=t(7),d=t(202),u=t(13),p=t(1),m=t(27);function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,c)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){v(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function v(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var k=["auto","start","end","center","baseline","stretch"],g=Object(d.a)((function(e,a,t){var c=e;if(!Object(b.p)(t)&&!1!==t)return a&&(c+="-".concat(a)),"col"!==e||""!==t&&!0!==t?(c+="-".concat(t),Object(m.c)(c)):Object(m.c)(c)})),y=Object(u.c)(null),_={name:n.y,functional:!0,get props(){return delete this.props,this.props=(e=Object(i.b)().filter(l.a),a=e.reduce((function(e,a){return e[a]=Object(p.c)(o.i),e}),Object(u.c)(null)),t=e.reduce((function(e,a){return e[Object(p.g)(a,"offset")]=Object(p.c)(o.p),e}),Object(u.c)(null)),c=e.reduce((function(e,a){return e[Object(p.g)(a,"order")]=Object(p.c)(o.p),e}),Object(u.c)(null)),y=Object(u.a)(Object(u.c)(null),{col:Object(u.h)(a),offset:Object(u.h)(t),order:Object(u.h)(c)}),Object(p.d)(Object(u.m)(f(f(f(f({},a),t),c),{},{alignSelf:Object(p.c)(o.u,null,(function(e){return Object(s.a)(k,e)})),col:Object(p.c)(o.g,!1),cols:Object(p.c)(o.p),offset:Object(p.c)(o.p),order:Object(p.c)(o.p),tag:Object(p.c)(o.u,"div")})),n.y));var e,a,t,c},render:function(e,a){var t,n=a.props,o=a.data,s=a.children,i=n.cols,l=n.offset,b=n.order,d=n.alignSelf,u=[];for(var p in y)for(var m=y[p],h=0;h<m.length;h++){var f=g(p,m[h].replace(p,""),n[m[h]]);f&&u.push(f)}var k=u.some((function(e){return r.e.test(e)}));return u.push((v(t={col:n.col||!k&&!i},"col-".concat(i),i),v(t,"offset-".concat(l),l),v(t,"order-".concat(b),b),v(t,"align-self-".concat(d),d),t)),e(n.tag,Object(c.a)(o,{class:u}),s)}}},4:function(e,a,t){"use strict";var c=t(16);a.a=c.a},532:function(e,a,t){var c=t(1032);"string"==typeof c&&(c=[[e.i,c,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(23)(c,n);c.locals&&(e.exports=c.locals)}}]);