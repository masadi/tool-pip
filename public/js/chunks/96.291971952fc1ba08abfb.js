(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1034:function(e,t,n){"use strict";n(532)},1035:function(e,t,n){(t=n(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},16:function(e,t,n){"use strict";n(71);var a=n(1943),i=n(436),s=n(437),r=n(435),o=n(1942),l=(n(174),n(188),n(96)),c=n.n(l),d={components:{BCard:a.a,BCardTitle:i.a,BCardSubTitle:s.a,BCardBody:r.a,BCollapse:o.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(n(1034),n(0)),u=Object(p.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?n("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:n("b-card-body",[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),e._v(" "),n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=u.exports},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(46),i=n(5),s=n(2),r=n(22),o=n(67),l=n(35),c=n(201),d=n(13),p=n(1),u=n(27);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=["start","end","center"],f=Object(c.a)((function(e,t){return(t=Object(u.h)(Object(u.g)(t)))?Object(u.c)(["row-cols",e,t].filter(l.a).join("-")):null})),w=Object(c.a)((function(e){return Object(u.c)(e.replace("cols",""))})),_=[],g={name:i.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(o.b)().reduce((function(e,t){return e[Object(p.g)(t,"cols")]=Object(p.c)(s.p),e}),Object(d.c)(null)),_=Object(d.h)(e),Object(p.d)(Object(d.m)(b(b({},e),{},{alignContent:Object(p.c)(s.u,null,(function(e){return Object(r.a)(Object(r.b)(h,"between","around","stretch"),e)})),alignH:Object(p.c)(s.u,null,(function(e){return Object(r.a)(Object(r.b)(h,"between","around"),e)})),alignV:Object(p.c)(s.u,null,(function(e){return Object(r.a)(Object(r.b)(h,"baseline","stretch"),e)})),noGutters:Object(p.c)(s.g,!1),tag:Object(p.c)(s.u,"div")})),i.Ob)),this.props},render:function(e,t){var n,i=t.props,s=t.data,r=t.children,o=i.alignV,l=i.alignH,c=i.alignContent,d=[];return _.forEach((function(e){var t=f(w(e),i[e]);t&&d.push(t)})),d.push((m(n={"no-gutters":i.noGutters},"align-items-".concat(o),o),m(n,"justify-content-".concat(l),l),m(n,"align-content-".concat(c),c),n)),e(i.tag,Object(a.a)(s,{staticClass:"row",class:d}),r)}}},1824:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(8),i=n(46),s=n(5),r=n(2),o=n(1),l=Object(o.d)({textTag:Object(o.c)(r.u,"p")},s.u),c=Object(a.c)({name:s.u,functional:!0,props:l,render:function(e,t){var n=t.props,a=t.data,s=t.children;return e(n.textTag,Object(i.a)(a,{staticClass:"card-text"}),s)}})},1825:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var a,i=n(5),s=n(12),r=n(2),o=n(19),l=n(28),c=n(6),d=n(7),p=n(49),u=n(21),v=n(13),b=n(1),m=n(8),h=n(178),f=n(129);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=Object(p.a)("show",{type:r.i,defaultValue:!1}),C=y.mixin,x=y.props,k=y.prop,D=y.event,O=function(e){return""===e||Object(d.b)(e)?0:(e=Object(u.c)(e,0))>0?e:0},A=function(e){return""===e||!0===e||!(Object(u.c)(e,0)<1)&&!!e},j=Object(b.d)(Object(v.m)(_(_({},x),{},{dismissLabel:Object(b.c)(r.u,"Close"),dismissible:Object(b.c)(r.g,!1),fade:Object(b.c)(r.g,!1),variant:Object(b.c)(r.u,"info")})),i.a),B=Object(m.c)({name:i.a,mixins:[C,l.a],props:j,data:function(){return{countDown:0,localShow:A(this[k])}},watch:(a={},g(a,k,(function(e){this.countDown=O(e),this.localShow=A(e)})),g(a,"countDown",(function(e){var t=this;this.clearCountDownInterval();var n=this[k];Object(d.i)(n)&&(this.$emit(s.n,e),n!==e&&this.$emit(D,e),e>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){t.countDown--}),1e3)):this.$nextTick((function(){Object(c.B)((function(){t.localShow=!1}))})))})),g(a,"localShow",(function(e){var t=this[k];e||!this.dismissible&&!Object(d.i)(t)||this.$emit(s.m),Object(d.i)(t)||t===e||this.$emit(D,e)})),a),created:function(){this.$_filterTimer=null;var e=this[k];this.countDown=O(e),this.localShow=A(e)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(e){var t=e();if(this.localShow){var n=this.dismissible,a=this.variant,i=e();n&&(i=e(h.a,{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(o.k)])),t=e("div",{staticClass:"alert",class:g({"alert-dismissible":n},"alert-".concat(a),a),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[m.a]},[i,this.normalizeSlot()])}return e(f.a,{props:{noFade:!this.fade}},[t])}})},1898:function(e,t,n){"use strict";n.r(t);var a=n(1823),i=n(440),s=n(4),r=n(1825),o=n(1824),l={components:{BCardCode:s.a,BAlert:r.a,BCardText:o.a},data:function(){return{codeAlertDefaut:'\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      variant="primary"\n      show\n    >\n      <div class="alert-body">\n        <span><strong>Good Morning!</strong> Start your day with some alerts.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert,\n  },\n}\n<\/script>\n'}}},c=n(0),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAlertDefaut)+"\n  ")]},proxy:!0}])},[n("b-card-text",[e._v("Alerts are available for any length of text, as well as an optional dismiss button (and optional auto-dismissing).")]),e._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{attrs:{variant:"primary",show:""}},[n("div",{staticClass:"alert-body"},[n("span",[n("strong",[e._v("Good Morning!")]),e._v(" Start your day with some alerts.")])])])],1)],1)}),[],!1,null,null,null).exports,p=n(59),u={components:{BCardCode:s.a,BAlert:r.a,BCardText:o.a,BLink:p.a},data:function(){return{codeAlertTitle:'\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      variant="warning"\n      show\n    >\n      <h4 class="alert-heading">\n        Lorem ipsum dolor sit amet\n      </h4>\n      <div class="alert-body">\n        Lorem ipsum dolor sit amet\n        <b-link class="alert-link">\n          consectetur\n        </b-link>\n        adipisicing elit. Ducimus, laborum!\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BLink } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert,\n    BLink,\n  },\n}\n<\/script>\n'}}},v=Object(c.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Title"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAlertTitle)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Add a title to the alert with the ")]),e._v(" "),n("code",[e._v(".alert-heading")]),e._v(" "),n("span",[e._v(" class.")])]),e._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{attrs:{variant:"warning",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v("\n        Lorem ipsum dolor sit amet\n      ")]),e._v(" "),n("div",{staticClass:"alert-body"},[e._v("\n        Lorem ipsum dolor sit amet\n        "),n("b-link",{staticClass:"alert-link"},[e._v("\n          consectetur\n        ")]),e._v("\n        adipisicing elit. Ducimus, laborum!\n      ")],1)])],1)],1)}),[],!1,null,null,null).exports,b={components:{BCardCode:s.a,BAlert:r.a,BCardText:o.a},data:function(){return{codeIcon:'\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      show\n      variant="primary"\n    >\n      <div class="alert-body">\n        <feather-icon\n          class="mr-25"\n          icon="StarIcon"\n        />\n        <span class="ml-25">Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert\n  },\n}\n<\/script>\n'}}},m=Object(c.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Icon"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeIcon)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can use icon inside ")]),e._v(" "),n("code",[e._v(".alert-body")]),e._v(" "),n("span",[e._v(" or ")]),e._v(" "),n("code",[e._v(".alert-heading")]),e._v(" "),n("span",[e._v(" section.")])]),e._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{attrs:{show:"",variant:"primary"}},[n("div",{staticClass:"alert-body"},[n("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),e._v(" "),n("span",{staticClass:"ml-25"},[e._v("Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.")])],1)])],1)],1)}),[],!1,null,null,null).exports,h={components:{BCardCode:s.a,BAlert:r.a,BCardText:o.a},data:function(){return{codeAlertColor:'\n<template>\n  <div class="demo-spacing-0">\n    \x3c!-- primary --\x3e\n    <b-alert\n      variant="primary"\n      show\n    >\n      <h4 class="alert-heading">\n        Primary\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- secondary --\x3e\n    <b-alert\n      variant="secondary"\n      show\n    >\n      <h4 class="alert-heading">\n        Secondary\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- success --\x3e\n    <b-alert\n      variant="success"\n      show\n    >\n      <h4 class="alert-heading">\n        Success\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- danger --\x3e\n    <b-alert\n      variant="danger"\n      show\n    >\n      <h4 class="alert-heading">\n        Danger\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- warning --\x3e\n    <b-alert\n      variant="warning"\n      show\n    >\n      <h4 class="alert-heading">\n        Warning\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- info --\x3e\n    <b-alert\n      variant="info"\n      show\n    >\n      <h4 class="alert-heading">\n        Info\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- dark --\x3e\n    <b-alert\n      variant="dark"\n      show\n    >\n      <h4 class="alert-heading">\n        Dark\n      </h4>\n      <div class="alert-body">\n        <span>Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAlert\n  },\n}\n<\/script>\n'}}},f=Object(c.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card-code",{attrs:{title:"Colors"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n      "+e._s(e.codeAlertColor)+"\n    ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("For proper styling of ")]),e._v(" "),n("code",[e._v("<b-alert>")]),e._v(" "),n("span",[e._v(" , use one of the four required contextual variants by setting the ")]),e._v(" "),n("code",[e._v("variant")]),e._v(" "),n("span",[e._v(" prop to one of the following: ")]),e._v(" "),n("code",[e._v("info, success, warning")]),e._v(" "),n("span",[e._v(" or ")]),e._v(" "),n("code",[e._v("danger")]),e._v(" "),n("span",[e._v(" . The default is ")]),e._v(" "),n("code",[e._v("info")]),e._v(" "),n("span",[e._v(" .")])]),e._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{attrs:{variant:"primary",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v("\n          Primary\n        ")]),e._v(" "),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),n("b-alert",{attrs:{variant:"secondary",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v("\n          Secondary\n        ")]),e._v(" "),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),n("b-alert",{attrs:{variant:"success",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v("\n          Success\n        ")]),e._v(" "),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),n("b-alert",{attrs:{variant:"danger",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v("\n          Danger\n        ")]),e._v(" "),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),n("b-alert",{attrs:{variant:"warning",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v("\n          Warning\n        ")]),e._v(" "),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),n("b-alert",{attrs:{variant:"info",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v("\n          Info\n        ")]),e._v(" "),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])]),e._v(" "),n("b-alert",{attrs:{variant:"dark",show:""}},[n("h4",{staticClass:"alert-heading"},[e._v("\n          Dark\n        ")]),e._v(" "),n("div",{staticClass:"alert-body"},[n("span",[e._v("Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.")])])])],1)],1)],1)}),[],!1,null,null,null).exports,w=n(89),_={inserted:function(e,t){var n="".concat(e.offsetHeight,"px");t.modifiers.appear?(e.style.overflow="hidden",e.style.maxHeight="0px",e.style.opacity=0,setTimeout((function(){e.style.maxHeight=n,e.style.opacity=1,setTimeout((function(){e.style.overflow="unset"}),300)}),100)):e.style.maxHeight=n},unbind:function(e){void 0!==e.style&&(e.style.overflow="hidden",e.style.maxHeight="0px",e.style.opacity=0)}},g=n(11),y={components:{BCardCode:s.a,BAlert:r.a,BButton:w.a,BCardText:o.a},directives:{"height-fade":_,Ripple:g.a},data:function(){return{dismissSecs:50,dismissCountDown:0,codeAutoDismiss:'\n<template>\n  <div class="demo-spacing-0">\n    <b-alert\n      v-height-fade.appear\n      :show="dismissCountDown"\n      dismissible\n      class="mb-0"\n      variant="warning"\n      @dismissed="dismissCountDown = 0"\n      @dismiss-count-down="countDownChanged"\n    >\n      <div class="alert-body">\n        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>\n      </div>\n    </b-alert>\n\n    \x3c!-- trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      variant="primary"\n      class="mt-75"\n      @click="showAlert"\n    >\n      Show alert with count-down timer\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton } from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BAlert,\n    BButton\n  },\n  directives: {\n    \'height-fade\': heightFade,\n    Ripple,\n  },\n  data() {\n    return {\n      dismissSecs: 50,\n      dismissCountDown: 0,\n    }\n  },\n   methods: {\n    countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown\n    },\n    showAlert() {\n      this.dismissCountDown = this.dismissSecs\n    },\n  },\n}\n<\/script>\n'}},methods:{countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},C=Object(c.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Auto dismissing alerts"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAutoDismiss)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("To create a ")]),e._v(" "),n("code",[e._v("<b-alert>")]),e._v(" "),n("span",[e._v(" that dismisses automatically after a period of time, set the ")]),e._v(" "),n("code",[e._v("show")]),e._v(" "),n("span",[e._v(" prop (or the ")]),e._v(" "),n("code",[e._v("v-model")]),e._v(" "),n("span",[e._v(") to the number of seconds you would like the ")]),e._v(" "),n("code",[e._v("<b-alert>")]),e._v(" "),n("span",[e._v(" to remain visible for.")])]),e._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{show:e.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[n("div",{staticClass:"alert-body"},[n("span",[e._v("This alert will dismiss after "+e._s(e.dismissCountDown)+" seconds...")])])]),e._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-75",attrs:{variant:"primary"},on:{click:e.showAlert}},[e._v("\n      Show alert with count-down timer\n    ")])],1)],1)}),[],!1,null,null,null).exports,x={components:{BCardCode:s.a,BAlert:r.a,BButton:w.a,BCardText:o.a},directives:{"height-fade":_,Ripple:g.a},data:function(){return{showDismissibleAlert:!1,codeVsupport:'\n<template>\n  <div class="demo-spacing-0">\n    \x3c!-- alert --\x3e\n    <b-alert\n      v-model="showDismissibleAlert"\n      v-height-fade.appear\n      variant="danger"\n      dismissible\n      class="mb-0"\n    >\n      <div class="alert-body">\n        Dismissible Alert!\n      </div>\n    </b-alert>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      variant="primary"\n      class="mt-1"\n      @click="showDismissibleAlert = !showDismissibleAlert"\n    >\n      {{ showDismissibleAlert ? \'Hide\' : \'Show\' }} dismissible alert\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton } from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BAlert,\n    BButton\n  },\n  directives: {\n    \'height-fade\': heightFade,\n    Ripple,\n  },\n  data: () => ({\n    showDismissibleAlert: false,\n  }),\n}\n<\/script>\n'}}},k=Object(c.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"v-model support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeVsupport)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can use the ")]),e._v(" "),n("code",[e._v("v-model")]),e._v(" "),n("span",[e._v(" directive to create two-way data bindings on the ")]),e._v(" "),n("code",[e._v("show")]),e._v(" "),n("span",[e._v(" prop as in ")]),e._v(" "),n("code",[e._v('v-model="showDismissibleAlert"')]),e._v(" "),n("span",[e._v(" above.")])]),e._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{variant:"danger",dismissible:""},model:{value:e.showDismissibleAlert,callback:function(t){e.showDismissibleAlert=t},expression:"showDismissibleAlert"}},[n("div",{staticClass:"alert-body"},[e._v("\n        Dismissible Alert!\n      ")])]),e._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-1",attrs:{variant:"primary"},on:{click:function(t){e.showDismissibleAlert=!e.showDismissibleAlert}}},[e._v("\n      "+e._s(e.showDismissibleAlert?"Hide":"Show")+" dismissible alert\n    ")])],1)],1)}),[],!1,null,null,null).exports,D={components:{BCardCode:s.a,BAlert:r.a,BCardText:o.a,BButton:w.a},directives:{heightFade:_,Ripple:g.a},data:function(){return{dismissSecs:50,dismissCountDown:0,showDismissibleAlert:!1,codeAnimation:'\n<template>\n  <div>\n    \x3c!-- dismissible alert --\x3e\n    <b-alert\n      v-height-fade\n      show\n      dismissible\n      fade\n      class="mb-0"\n      variant="primary"\n    >\n      <div class="alert-body">\n        <span>Dismissible Alert!</span>\n      </div>\n    </b-alert>\n\n    <b-card-text class="pt-2 mb-0">\n      <span>If you want to show animation even when alert get rendered. You can use </span>\n      <code>appear</code>\n      <span> modifier</span>\n    </b-card-text>\n\n    \x3c!--  show alert with count-down timer button--\x3e\n    <div class="demo-inline-spacing mb-1">\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n        @click="showAlert"\n      >\n        Show alert with count-down timer\n      </b-button>\n\n      \x3c!-- show dismissible alert button --\x3e\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n        @click="showDismissibleAlert = true"\n      >\n        Show dismissible alert ({{ showDismissibleAlert ? \'visible\' : \'hidden\' }})\n      </b-button>\n    </div>\n\n    \x3c!-- dismissible Alert --\x3e\n    <b-alert\n      v-height-fade.appear\n      variant="danger"\n      dismissible\n      fade\n      :show="showDismissibleAlert"\n      class="mb-0"\n      @dismissed="showDismissibleAlert = false"\n    >\n      <div class="alert-body">\n        <span>Dismissible Alert!</span>\n      </div>\n    </b-alert>\n\n    <b-card-text class="m-0 py-1">\n      You can even use this on dismissible alerts.\n    </b-card-text>\n\n    \x3c!-- count down dismissible alert  --\x3e\n    <b-alert\n      v-height-fade.appear\n      :show="dismissCountDown"\n      dismissible\n      fade\n      variant="warning"\n      class="mb-0"\n      @dismiss-count-down="countDownChanged"\n    >\n      <div class="alert-body">\n        <span>This alert will dismiss after {{ dismissCountDown }} seconds...</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BButton, BCardText } from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BAlert,\n    BCardText,\n    BButton,\n  },\n    directives: {\n    heightFade,\n    Ripple,\n  },\n  data() {\n    return {\n      dismissSecs: 50,\n      dismissCountDown: 0,\n      showDismissibleAlert: false,\n    }\n  },\n  methods: {\n    countDownChanged(dismissCountDown) {\n      this.dismissCountDown = dismissCountDown\n    },\n    showAlert() {\n      this.dismissCountDown = this.dismissSecs\n    },\n  },\n}\n<\/script>\n'}},methods:{countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},O=Object(c.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Alert Animation"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAnimation)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use the ")]),e._v(" "),n("code",[e._v("hightFaded")]),e._v(" "),n("span",[e._v(" directive to enable animation. By default alerts are not animated.")])]),e._v(" "),n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade"}],staticClass:"mb-0",attrs:{show:"",dismissible:"",fade:"",variant:"primary"}},[n("div",{staticClass:"alert-body"},[n("span",[e._v("Dismissible Alert!")])])]),e._v(" "),n("b-card-text",{staticClass:"pt-2 mb-0"},[n("span",[e._v("If you want to show animation even when alert get rendered. You can use ")]),e._v(" "),n("code",[e._v("appear")]),e._v(" "),n("span",[e._v(" modifier")])]),e._v(" "),n("div",{staticClass:"demo-inline-spacing mb-1"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:e.showAlert}},[e._v("\n      Show alert with count-down timer\n    ")]),e._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:function(t){e.showDismissibleAlert=!0}}},[e._v("\n      Show dismissible alert ("+e._s(e.showDismissibleAlert?"visible":"hidden")+")\n    ")])],1),e._v(" "),n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{variant:"danger",dismissible:"",fade:"",show:e.showDismissibleAlert},on:{dismissed:function(t){e.showDismissibleAlert=!1}}},[n("div",{staticClass:"alert-body"},[n("span",[e._v("Dismissible Alert!")])])]),e._v(" "),n("b-card-text",{staticClass:"m-0 py-1"},[e._v("\n    You can even use this on dismissible alerts.\n  ")]),e._v(" "),n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{show:e.dismissCountDown,dismissible:"",fade:"",variant:"warning"},on:{"dismiss-count-down":e.countDownChanged}},[n("div",{staticClass:"alert-body"},[n("span",[e._v("This alert will dismiss after "+e._s(e.dismissCountDown)+" seconds...")])])])],1)}),[],!1,null,null,null).exports,A=(n(166),n(541),n(1940)),j=n(1939),B={components:{BCardCode:s.a,BAlert:r.a,BFormGroup:A.a,BFormInput:j.a,BCardText:o.a},directives:{"height-fade":_},data:function(){return{value:"",show:!0,codeExample:'\n<template>\n  <div>\n    <b-form-group>\n      <label>Enter only numbers</label>\n      <b-form-input\n        v-model="value"\n        class="w-25 w-sm-100"\n        placeholder="0123456789"\n        @keyup="validateInput"\n      />\n    </b-form-group>\n\n    \x3c!-- alert --\x3e\n    <b-alert\n      v-height-fade.appear\n      variant="danger"\n      :show="show"\n      class="mb-0"\n    >\n      <div class="alert-body">\n        <feather-icon\n          icon="InfoIcon"\n          class="mr-50"\n        />\n        the value is invalid you can only enter numbers\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport {BAlert, BFormGroup, BFormInput} from \'bootstrap-vue\'\nimport { heightFade } from \'@core/directives/animations\'\n\nexport default {\n  components: {\n    BAlert,\n    BFormGroup,\n    BFormInput,\n  },\n  directives: {\n    \'height-fade\': heightFade,\n  },\n  data() {\n    return {\n      value: \'\',\n      show: true,\n      codeExample,\n    }\n  },\n  methods: {\n    validateInput() {\n      if (/^\\d+$/.test(this.value)) {\n        this.show = false\n      } else {\n        this.show = true\n      }\n    },\n  },\n}\n<\/script>\n'}},methods:{validateInput:function(){/^\d+$/.test(this.value)?this.show=!1:this.show=!0}}},S=Object(c.a)(B,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Example"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeExample)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use the ")]),e._v(" "),n("code",[e._v("show")]),e._v(" "),n("span",[e._v(" prop to control the visibility state of the alert.\n      By default alerts are not shown. Set the prop ")]),e._v(" "),n("code",[e._v("show")]),e._v(" "),n("span",[e._v(" to explicitly display them.")])]),e._v(" "),n("b-form-group",[n("label",[e._v("Enter only numbers")]),e._v(" "),n("b-form-input",{staticClass:"w-25 w-sm-100",attrs:{placeholder:"0123456789"},on:{keyup:e.validateInput},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-alert",{directives:[{name:"height-fade",rawName:"v-height-fade.appear",modifiers:{appear:!0}}],staticClass:"mb-0",attrs:{variant:"danger",show:e.show}},[n("div",{staticClass:"alert-body"},[n("feather-icon",{staticClass:"mr-50",attrs:{icon:"InfoIcon"}}),e._v("\n      the value is invalid you can only enter numbers\n    ")],1)])],1)}),[],!1,null,null,null).exports,I={components:{BRow:a.a,BCol:i.a,AlertDefault:d,AlertTitle:v,AlertIcon:m,AlertColor:f,AlertAutoDismiss:C,AlertVModelSupport:k,AlertAnimation:O,AlertExample:S}},T=Object(c.a)(I,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("alert-default"),this._v(" "),t("alert-title"),this._v(" "),t("alert-color"),this._v(" "),t("alert-icon"),this._v(" "),t("alert-auto-dismiss"),this._v(" "),t("alert-v-model-support"),this._v(" "),t("alert-animation"),this._v(" "),t("alert-example")],1)],1)}),[],!1,null,null,null);t.default=T.exports},4:function(e,t,n){"use strict";var a=n(16);t.a=a.a},532:function(e,t,n){var a=n(1035);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(23)(a,i);a.locals&&(e.exports=a.locals)},541:function(e,t,n){"use strict";n(166);var a,i,s=n(63),r=n(116),o=n(82),l=n(115),c=n(95),d=(a=!1,(i=/[ac]/).exec=function(){return a=!0,/./.exec.apply(this,arguments)},!0===i.test("abc")&&a),p=/./.test;s({target:"RegExp",proto:!0,forced:!d},{test:function(e){var t=l(this),n=c(e),a=t.exec;if(!o(a))return r(p,t,n);var i=r(a,t,n);return null!==i&&(l(i),!0)}})}}]);