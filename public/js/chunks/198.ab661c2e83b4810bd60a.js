(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1821:function(t,e,i){"use strict";i.d(e,"a",(function(){return $}));var n,o=i(5),a=i(12),s=i(2),r=i(19),c=i(28),l=i(6),u=i(7),h=i(49),b=i(21),f=i(13),m=i(1),p=i(8),v=i(178),d=i(129);function w(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?w(Object(i),!0).forEach((function(e){j(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function j(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var y=Object(h.a)("show",{type:s.i,defaultValue:!1}),D=y.mixin,_=y.props,g=y.prop,k=y.event,S=function(t){return""===t||Object(u.b)(t)?0:(t=Object(b.c)(t,0))>0?t:0},C=function(t){return""===t||!0===t||!(Object(b.c)(t,0)<1)&&!!t},P=Object(m.d)(Object(f.m)(O(O({},_),{},{dismissLabel:Object(m.c)(s.u,"Close"),dismissible:Object(m.c)(s.g,!1),fade:Object(m.c)(s.g,!1),variant:Object(m.c)(s.u,"info")})),o.a),$=Object(p.c)({name:o.a,mixins:[D,c.a],props:P,data:function(){return{countDown:0,localShow:C(this[g])}},watch:(n={},j(n,g,(function(t){this.countDown=S(t),this.localShow=C(t)})),j(n,"countDown",(function(t){var e=this;this.clearCountDownInterval();var i=this[g];Object(u.i)(i)&&(this.$emit(a.n,t),i!==t&&this.$emit(k,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){Object(l.B)((function(){e.localShow=!1}))})))})),j(n,"localShow",(function(t){var e=this[g];t||!this.dismissible&&!Object(u.i)(e)||this.$emit(a.m),Object(u.i)(e)||e===t||this.$emit(k,t)})),n),created:function(){this.$_filterTimer=null;var t=this[g];this.countDown=S(t),this.localShow=C(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var i=this.dismissible,n=this.variant,o=t();i&&(o=t(v.a,{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(r.k)])),e=t("div",{staticClass:"alert",class:j({"alert-dismissible":i},"alert-".concat(n),n),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[p.a]},[o,this.normalizeSlot()])}return t(d.a,{props:{noFade:!this.fade}},[e])}})},1936:function(t,e,i){"use strict";i.r(e);var n=i(1821),o=i(59),a={components:{BAlert:n.a,BLink:o.a}},s=i(0),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p-4"},[i("h4",{staticClass:"mb-2"},[t._v("\n    Layout Blank\n  ")]),t._v(" "),i("b-alert",{attrs:{variant:"primary",show:""}},[i("div",{staticClass:"alert-body"},[i("p",[i("strong",[t._v("Info: ")]),t._v(" "),i("span",[t._v("This layout is used in Authentication & Miscellaneous page. Please check the ")]),t._v(" "),i("b-link",{staticClass:"alert-link",attrs:{href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/guide/layout/page-layout-examples.html#layout-blank",target:"_blank"}},[t._v("Layout Blank documentation")]),t._v(" "),i("span",[t._v(" for more details.")])],1)])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);