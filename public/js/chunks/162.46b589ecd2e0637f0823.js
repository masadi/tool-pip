(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1027:function(e,n,t){"use strict";t(530)},1028:function(e,n,t){(n=t(21)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=n},16:function(e,n,t){"use strict";t(74);var a=t(1801),i=t(336),s=t(338),o=t(337),r=t(1815),l=(t(173),t(186),t(98)),c=t.n(l),d={components:{BCard:a.a,BCardTitle:i.a,BCardSubTitle:s.a,BCardBody:o.a,BCollapse:r.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(t(1027),t(0)),v=Object(p.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(n){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),e._v(" "),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=v.exports},1878:function(e,n,t){"use strict";t.r(n);var a=t(1798),i=t(341),s=t(4),o=t(1804),r=t(1799),l={components:{BCardCode:s.a,BAlert:o.a,BCardText:r.a},data:function(){return{codeAlertDefaut:'\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      variant="primary"\n      show\n    >\n      <div class="alert-body">\n        <span><strong>Good Morning!</strong> Start your day with some alerts.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert,\n  },\n}\n<\/script>\n'}}},c=t(0),d=Object(c.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAlertDefaut)+"\n  ")]},proxy:!0}])},[t("b-card-text",[e._v("Alerts are available for any length of text, as well as an optional dismiss button (and optional auto-dismissing).")]),e._v(" "),t("div",{staticClass:"demo-spacing-0"},[t("b-alert",{attrs:{variant:"primary",show:""}},[t("div",{staticClass:"alert-body"},[t("span",[t("strong",[e._v("Good Morning!")]),e._v(" Start your day with some alerts.")])])])],1)],1)}),[],!1,null,null,null).exports,p=t(59),v={components:{BCardCode:s.a,BAlert:o.a,BCardText:r.a,BLink:p.a},data:function(){return{codeAlertTitle:'\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      variant="warning"\n      show\n    >\n      <h4 class="alert-heading">\n        Lorem ipsum dolor sit amet\n      </h4>\n      <div class="alert-body">\n        Lorem ipsum dolor sit amet\n        <b-link class="alert-link">\n          consectetur\n        </b-link>\n        adipisicing elit. Ducimus, laborum!\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BLink } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert,\n    BLink,\n  },\n}\n<\/script>\n'}}},u=Object(c.a)(v,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Title"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAlertTitle)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Add a title to the alert with the ")]),e._v(" "),t("code",[e._v(".alert-heading")]),e._v(" "),t("span",[e._v(" class.")])]),e._v(" "),t("div",{staticClass:"demo-spacing-0"},[t("b-alert",{attrs:{variant:"warning",show:""}},[t("h4",{staticClass:"alert-heading"},[e._v("\n        Lorem ipsum dolor sit amet\n      ")]),e._v(" "),t("div",{staticClass:"alert-body"},[e._v("\n        Lorem ipsum dolor sit amet\n        "),t("b-link",{staticClass:"alert-link"},[e._v("\n          consectetur\n        ")]),e._v("\n        adipisicing elit. Ducimus, laborum!\n      ")],1)])],1)],1)}),[],!1,null,null,null).exports,m={components:{BCardCode:s.a,BAlert:o.a,BCardText:r.a},data:function(){return{codeIcon:'\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      show\n      variant="primary"\n    >\n      <div class="alert-body">\n        <feather-icon\n          class="mr-25"\n          icon="StarIcon"\n        />\n        <span class="ml-25">Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert\n  },\n}\n<\/script>\n'}}},b=Object(c.a)(m,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Icon"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeIcon)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("You can use icon inside ")]),e._v(" "),t("code",[e._v(".alert-body")]),e._v(" "),t("span",[e._v(" or ")]),e._v(" "),t("code",[e._v(".alert-heading")]),e._v(" "),t("span",[e._v(" section.")])]),e._v(" "),t("div",{staticClass:"demo-spacing-0"},[t("b-alert",{attrs:{show:"",variant:"primary"}},[t("div",{staticClass:"alert-body"},[t("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),e._v(" "),t("span",{staticClass:"ml-25"},[e._v("Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.")])],1)])],1)],1)}),[],!1,null,null,null).exports,h={components:{BCardCode:s.a,BAlert:o.a,BCardText:r.a},data:function(){return{codeAlertColor:'\n<template>\n  <div class="demo-spacing-0">\n    \x3c!-- primary --\x3e\n    <b-alert\n      variant="primary"\n      show\n    >\n      <h4 class="alert-heading">\n        Primary\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- secondary --\x3e\n    <b-alert\n      variant="secondary"\n      show\n    >\n      <h4 class="alert-heading">\n        Secondary\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- success --\x3e\n    <b-alert\n      variant="success"\n      show\n    >\n      <h4 class="alert-heading">\n        Success\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- danger --\x3e\n    <b-alert\n      variant="danger"\n      show\n    >\n      <h4 class="alert-heading">\n        Danger\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- warning --\x3e\n    <b-alert\n      variant="warning"\n      show\n    >\n      <h4 class="alert-heading">\n        Warning\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- info --\x3e\n    <b-alert\n      variant="info"\n      show\n    >\n      <h4 class="alert-heading">\n        Info\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- dark --\x3e\n    <b-alert\n      variant="dark"\n      show\n    >\n      <h4 class="alert-heading">\n        Dark\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert\n  },\n}\n<\/script>\n'}}},f=Object(c.a)(h,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("b-card-code",{attrs:{title:"Colors"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n      "+e._s(e.codeAlertColor)+"\n    ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("For proper styling of ")]),e._v(" "),t("code",[e._v("<b-alert>")]),e._v(" "),t("span",[e._v(" , use one of the four required contextual variants by setting the ")]),e._v(" "),t("code",[e._v("variant")]),e._v(" "),t("span",[e._v(" prop to one of the following: ")]),e._v(" "),t("code",[e._v("info, success, warning")]),e._v(" "),t("span",[e._v(" or ")]),e._v(" "),t("code",[e._v("danger")]),e._v(" "),t("span",[e._v(" . The default is ")]),e._v(" "),t("code",[e._v("info")]),e._v(" "),t("span",[e._v(" .")])]),e._v(" "),t("div",{staticClass:"demo-spacing-0"},[t("b-alert",{attrs:{variant:"primary",show:""}},[t("h4",{staticClass:"alert-heading"},[e._v("\n          Primary\n        ")]),e._v(" "),t("div",{staticClass:"alert-body"},[t("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),t("b-alert",{attrs:{variant:"secondary",show:""}},[t("h4",{staticClass:"alert-heading"},[e._v("\n          Secondary\n        ")]),e._v(" "),t("div",{staticClass:"alert-body"},[t("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),t("b-alert",{attrs:{variant:"success",show:""}},[t("h4",{staticClass:"alert-heading"},[e._v("\n          Success\n        ")]),e._v(" "),t("div",{staticClass:"alert-body"},[t("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),t("b-alert",{attrs:{variant:"danger",show:""}},[t("h4",{staticClass:"alert-heading"},[e._v("\n          Danger\n        ")]),e._v(" "),t("div",{staticClass:"alert-body"},[t("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),t("b-alert",{attrs:{variant:"warning",show:""}},[t("h4",{staticClass:"alert-heading"},[e._v("\n          Warning\n        ")]),e._v(" "),t("div",{staticClass:"alert-body"},[t("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),t("b-alert",{attrs:{variant:"info",show:""}},[t("h4",{staticClass:"alert-heading"},[e._v("\n          Info\n        ")]),e._v(" "),t("div",{staticClass:"alert-body"},[t("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),t("b-alert",{attrs:{variant:"dark",show:""}},[t("h4",{staticClass:"alert-heading"},[e._v("\n          Dark\n        ")]),e._v(" "),t("div",{staticClass:"alert-body"},[t("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])])],1)],1)],1)}),[],!1,null,null,null).exports,_=t(90),w={inserted:function(e,n){var t="".concat(e.offsetHeight,"px");n.modifiers.appear?(e.style.overflow="hidden",e.style.maxHeight="0px",e.style.opacity=0,setTimeout((function(){e.style.maxHeight=t,e.style.opacity=1,setTimeout((function(){e.style.overflow="unset"}),300)}),100)):e.style.maxHeight=t},unbind:function(e){void 0!==e.style&&(e.style.overflow="hidden",e.style.maxHeight="0px",e.style.opacity=0)}},g=t(11),y={components:{BCardCode:s.a,BAlert:o.a,BButton:_.a,BCardText:r.a},directives:{"height-fade":w,Ripple:g.a},data:function(){return{dismissSecs:50,dismissCountDown:0,codeAutoDismiss:'\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      v-height-fade.appear\n      :show="dismissCountDown"\n      dismissible\n      class="mb-0"\n      variant="warning"\n      @dismissed="dismissCountDown = 0"\n      @dismiss-count-down="countDownChanged"\n    >\n      <div class="alert-body">\n        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      variant="primary"\n      class="mt-75"\n      @click="showAlert"\n    >\n      Show alert with count-down timer\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton } from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BAlert,\n    BButton\n  },\n  directives: {\n    \'height-fade\': heightFade,\n    Ripple,\n  },\n  data() {\n    return {\n      dismissSecs: 50,\n      dismissCountDown: 0,\n    }\n  },\n   methods: {\n    countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown\n    },\n    showAlert() {\n      this.dismissCountDown = this.dismissSecs\n    },\n  },\n}\n<\/script>\n'}},methods:{countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},C=Object(c.a)(y,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Auto dismissing alerts"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAutoDismiss)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("To create a ")]),e._v(" "),t("code",[e._v("<b-alert>")]),e._v(" "),t("span",[e._v(" that dismisses automatically after a period of time, set the ")]),e._v(" "),t("code",[e._v("show")]),e._v(" "),t("span",[e._v(" prop (or the ")]),e._v(" "),t("code",[e._v("v-model")]),e._v(" "),t("span",[e._v(") to the number of seconds you would like the ")]),e._v(" "),t("code",[e._v("<b-alert>")]),e._v(" "),t("span",[e._v(" to remain visible for.")])]),e._v(" "),t("div",{staticClass:"demo-spacing-0"},[t("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{show:e.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(n){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[t("div",{staticClass:"alert-body"},[t("span",[e._v("This alert will dismiss after "+e._s(e.dismissCountDown)+" seconds...")])])]),e._v(" "),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-75",attrs:{variant:"primary"},on:{click:e.showAlert}},[e._v("\n      Show alert with count-down timer\n    ")])],1)],1)}),[],!1,null,null,null).exports,x={components:{BCardCode:s.a,BAlert:o.a,BButton:_.a,BCardText:r.a},directives:{"height-fade":w,Ripple:g.a},data:function(){return{showDismissibleAlert:!1,codeVsupport:'\n<template>\n  <div class="demo-spacing-0">\n    \x3c!-- alert --\x3e\n    <b-alert\n      v-model="showDismissibleAlert"\n      v-height-fade.appear\n      variant="danger"\n      dismissible\n      class="mb-0"\n    >\n      <div class="alert-body">\n        Dismissible Alert!\n      </div>\n    </b-alert>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      variant="primary"\n      class="mt-1"\n      @click="showDismissibleAlert = !showDismissibleAlert"\n    >\n      {{ showDismissibleAlert ? \'Hide\' : \'Show\' }} dismissible alert\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton } from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BAlert,\n    BButton\n  },\n  directives: {\n    \'height-fade\': heightFade,\n    Ripple,\n  },\n  data: () => ({\n    showDismissibleAlert: false,\n  }),\n}\n<\/script>\n'}}},k=Object(c.a)(x,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"v-model support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeVsupport)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("You can use the ")]),e._v(" "),t("code",[e._v("v-model")]),e._v(" "),t("span",[e._v(" directive to create two-way data bindings on the ")]),e._v(" "),t("code",[e._v("show")]),e._v(" "),t("span",[e._v(" prop as in ")]),e._v(" "),t("code",[e._v('v-model="showDismissibleAlert"')]),e._v(" "),t("span",[e._v(" above.")])]),e._v(" "),t("div",{staticClass:"demo-spacing-0"},[t("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{variant:"danger",dismissible:""},model:{value:e.showDismissibleAlert,callback:function(n){e.showDismissibleAlert=n},expression:"showDismissibleAlert"}},[t("div",{staticClass:"alert-body"},[e._v("\n        Dismissible Alert!\n      ")])]),e._v(" "),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-1",attrs:{variant:"primary"},on:{click:function(n){e.showDismissibleAlert=!e.showDismissibleAlert}}},[e._v("\n      "+e._s(e.showDismissibleAlert?"Hide":"Show")+" dismissible alert\n    ")])],1)],1)}),[],!1,null,null,null).exports,A={components:{BCardCode:s.a,BAlert:o.a,BCardText:r.a,BButton:_.a},directives:{heightFade:w,Ripple:g.a},data:function(){return{dismissSecs:50,dismissCountDown:0,showDismissibleAlert:!1,codeAnimation:'\n<template>\n  <div>\n    \x3c!-- dismissible alert --\x3e\n    <b-alert\n      v-height-fade\n      show\n      dismissible\n      fade\n      class="mb-0"\n      variant="primary"\n    >\n      <div class="alert-body">\n        <span>Dismissible Alert!</span>\n      </div>\n    </b-alert>\n\n    <b-card-text class="pt-2 mb-0">\n      <span>If you want to show animation even when alert get rendered. You can use </span>\n      <code>appear</code>\n      <span> modifier</span>\n    </b-card-text>\n\n    \x3c!--  show alert with count-down timer button--\x3e\n    <div class="demo-inline-spacing mb-1">\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n        @click="showAlert"\n      >\n        Show alert with count-down timer\n      </b-button>\n\n      \x3c!-- show dismissible alert button --\x3e\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n        @click="showDismissibleAlert = true"\n      >\n        Show dismissible alert ({{ showDismissibleAlert ? \'visible\' : \'hidden\' }})\n      </b-button>\n    </div>\n\n    \x3c!-- dismissible Alert --\x3e\n    <b-alert\n      v-height-fade.appear\n      variant="danger"\n      dismissible\n      fade\n      :show="showDismissibleAlert"\n      class="mb-0"\n      @dismissed="showDismissibleAlert = false"\n    >\n      <div class="alert-body">\n        <span>Dismissible Alert!</span>\n      </div>\n    </b-alert>\n\n    <b-card-text class="m-0 py-1">\n      You can even use this on dismissible alerts.\n    </b-card-text>\n\n    \x3c!-- count down dismissible alert  --\x3e\n    <b-alert\n      v-height-fade.appear\n      :show="dismissCountDown"\n      dismissible\n      fade\n      variant="warning"\n      class="mb-0"\n      @dismiss-count-down="countDownChanged"\n    >\n      <div class="alert-body">\n        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton, BCardText } from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BAlert,\n    BCardText,\n    BButton,\n  },\n    directives: {\n    heightFade,\n    Ripple,\n  },\n  data() {\n    return {\n      dismissSecs: 50,\n      dismissCountDown: 0,\n      showDismissibleAlert: false,\n    }\n  },\n  methods: {\n    countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown\n    },\n    showAlert() {\n      this.dismissCountDown = this.dismissSecs\n    },\n  },\n}\n<\/script>\n'}},methods:{countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},D=Object(c.a)(A,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Alert Animation"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAnimation)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Use the ")]),e._v(" "),t("code",[e._v("hightFaded")]),e._v(" "),t("span",[e._v(" directive to enable animation. By default alerts are not animated.")])]),e._v(" "),t("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade"}],staticClass:"mb-0",attrs:{show:"",dismissible:"",fade:"",variant:"primary"}},[t("div",{staticClass:"alert-body"},[t("span",[e._v("Dismissible Alert!")])])]),e._v(" "),t("b-card-text",{staticClass:"pt-2 mb-0"},[t("span",[e._v("If you want to show animation even when alert get rendered. You can use ")]),e._v(" "),t("code",[e._v("appear")]),e._v(" "),t("span",[e._v(" modifier")])]),e._v(" "),t("div",{staticClass:"demo-inline-spacing mb-1"},[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:e.showAlert}},[e._v("\n      Show alert with count-down timer\n    ")]),e._v(" "),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:function(n){e.showDismissibleAlert=!0}}},[e._v("\n      Show dismissible alert ("+e._s(e.showDismissibleAlert?"visible":"hidden")+")\n    ")])],1),e._v(" "),t("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{variant:"danger",dismissible:"",fade:"",show:e.showDismissibleAlert},on:{dismissed:function(n){e.showDismissibleAlert=!1}}},[t("div",{staticClass:"alert-body"},[t("span",[e._v("Dismissible Alert!")])])]),e._v(" "),t("b-card-text",{staticClass:"m-0 py-1"},[e._v("\n    You can even use this on dismissible alerts.\n  ")]),e._v(" "),t("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{show:e.dismissCountDown,dismissible:"",fade:"",variant:"warning"},on:{"dismiss-count-down":e.countDownChanged}},[t("div",{staticClass:"alert-body"},[t("span",[e._v("This alert will dismiss after "+e._s(e.dismissCountDown)+" seconds...")])])])],1)}),[],!1,null,null,null).exports,B=(t(166),t(541),t(1837)),I=t(1800),S={components:{BCardCode:s.a,BAlert:o.a,BFormGroup:B.a,BFormInput:I.a,BCardText:r.a},directives:{"height-fade":w},data:function(){return{value:"",show:!0,codeExample:'\n<template>\n  <div>\n    <b-form-group>\n      <label>Enter only numbers</label>\n      <b-form-input\n        v-model="value"\n        class="w-25 w-sm-100"\n        placeholder="0123456789"\n        @keyup="validateInput"\n      />\n    </b-form-group>\n\n    \x3c!-- alert --\x3e\n    <b-alert\n      v-height-fade.appear\n      variant="danger"\n      :show="show"\n      class="mb-0"\n    >\n      <div class="alert-body">\n        <feather-icon\n          icon="InfoIcon"\n          class="mr-50"\n        />\n        the value is invalid you can only enter numbers\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport {BAlert, BFormGroup, BFormInput} from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\n\nexport default {\n  components: {\n    BAlert,\n    BFormGroup,\n    BFormInput,\n  },\n  directives: {\n    \'height-fade\': heightFade,\n  },\n  data() {\n    return {\n      value: \'\',\n      show: true,\n      codeExample,\n    }\n  },\n  methods: {\n    validateInput() {\n      if (/^\\d+$/.test(this.value)) {\n        this.show = false\n      } else {\n        this.show = true\n      }\n    },\n  },\n}\n<\/script>\n'}},methods:{validateInput:function(){/^\d+$/.test(this.value)?this.show=!1:this.show=!0}}},T=Object(c.a)(S,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Example"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeExample)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Use the ")]),e._v(" "),t("code",[e._v("show")]),e._v(" "),t("span",[e._v(" prop to control the visibility state of the alert.\n      By default alerts are not shown. Set the prop ")]),e._v(" "),t("code",[e._v("show")]),e._v(" "),t("span",[e._v(" to explicitly display them.")])]),e._v(" "),t("b-form-group",[t("label",[e._v("Enter only numbers")]),e._v(" "),t("b-form-input",{staticClass:"w-25 w-sm-100",attrs:{placeholder:"0123456789"},on:{keyup:e.validateInput},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1),e._v(" "),t("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{variant:"danger",show:e.show}},[t("div",{staticClass:"alert-body"},[t("feather-icon",{staticClass:"mr-50",attrs:{icon:"InfoIcon"}}),e._v("\n      the value is invalid you can only enter numbers\n    ")],1)])],1)}),[],!1,null,null,null).exports,L={components:{BRow:a.a,BCol:i.a,AlertDefault:d,AlertTitle:u,AlertIcon:b,AlertColor:f,AlertAutoDismiss:C,AlertVModelSupport:k,AlertAnimation:D,AlertExample:T}},$=Object(c.a)(L,(function(){var e=this.$createElement,n=this._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("alert-default"),this._v(" "),n("alert-title"),this._v(" "),n("alert-color"),this._v(" "),n("alert-icon"),this._v(" "),n("alert-auto-dismiss"),this._v(" "),n("alert-v-model-support"),this._v(" "),n("alert-animation"),this._v(" "),n("alert-example")],1)],1)}),[],!1,null,null,null);n.default=$.exports},4:function(e,n,t){"use strict";var a=t(16);n.a=a.a},530:function(e,n,t){var a=t(1028);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(23)(a,i);a.locals&&(e.exports=a.locals)}}]);