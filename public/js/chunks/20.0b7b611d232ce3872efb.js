(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1037:function(t,e,n){"use strict";n(535)},1038:function(t,e,n){(e=n(20)(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=e},1829:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(47),c=n(5),a=n(2),i=n(23),o=n(67),s=n(35),l=n(205),u=n(13),b=n(1),d=n(27);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=["start","end","center"],g=Object(l.a)((function(t,e){return(e=Object(d.h)(Object(d.g)(e)))?Object(d.c)(["row-cols",t,e].filter(s.a).join("-")):null})),h=Object(l.a)((function(t){return Object(d.c)(t.replace("cols",""))})),v=[],m={name:c.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(o.b)().reduce((function(t,e){return t[Object(b.g)(e,"cols")]=Object(b.c)(a.p),t}),Object(u.c)(null)),v=Object(u.h)(t),Object(b.d)(Object(u.m)(p(p({},t),{},{alignContent:Object(b.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(j,"between","around","stretch"),t)})),alignH:Object(b.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(j,"between","around"),t)})),alignV:Object(b.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(j,"baseline","stretch"),t)})),noGutters:Object(b.c)(a.g,!1),tag:Object(b.c)(a.u,"div")})),c.Ob)),this.props},render:function(t,e){var n,c=e.props,a=e.data,i=e.children,o=c.alignV,s=c.alignH,l=c.alignContent,u=[];return v.forEach((function(t){var e=g(h(t),c[t]);e&&u.push(e)})),u.push((O(n={"no-gutters":c.noGutters},"align-items-".concat(o),o),O(n,"justify-content-".concat(s),s),O(n,"align-content-".concat(l),l),n)),t(c.tag,Object(r.a)(a,{staticClass:"row",class:u}),i)}}},1830:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(8),c=n(47),a=n(5),i=n(2),o=n(1),s=Object(o.d)({textTag:Object(o.c)(i.u,"p")},a.u),l=Object(r.c)({name:a.u,functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t(n.textTag,Object(c.a)(r,{staticClass:"card-text"}),a)}})},226:function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return j}));var r=n(8),c=n(47),a=n(5),i=n(2),o=n(23),s=n(35),l=n(7),u=n(21),b=n(1),d=n(27);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',O=Object(b.d)({alt:Object(b.c)(i.u),blank:Object(b.c)(i.g,!1),blankColor:Object(b.c)(i.u,"transparent"),block:Object(b.c)(i.g,!1),center:Object(b.c)(i.g,!1),fluid:Object(b.c)(i.g,!1),fluidGrow:Object(b.c)(i.g,!1),height:Object(b.c)(i.p),left:Object(b.c)(i.g,!1),right:Object(b.c)(i.g,!1),rounded:Object(b.c)(i.j,!1),sizes:Object(b.c)(i.f),src:Object(b.c)(i.u),srcset:Object(b.c)(i.f),thumbnail:Object(b.c)(i.g,!1),width:Object(b.c)(i.p)},a.kb),j=Object(r.c)({name:a.kb,functional:!0,props:O,render:function(t,e){var n,r=e.props,a=e.data,i=r.alt,b=r.src,O=r.block,j=r.fluidGrow,g=r.rounded,h=Object(u.c)(r.width)||null,v=Object(u.c)(r.height)||null,m=null,y=Object(o.b)(r.srcset).filter(s.a).join(","),w=Object(o.b)(r.sizes).filter(s.a).join(",");return r.blank&&(!v&&h?v=h:!h&&v&&(h=v),h||v||(h=1,v=1),b=function(t,e,n){var r=encodeURIComponent(p.replace("%{w}",Object(d.g)(t)).replace("%{h}",Object(d.g)(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)}(h,v,r.blankColor||"transparent"),y=null,w=null),r.left?m="float-left":r.right?m="float-right":r.center&&(m="mx-auto",O=!0),t("img",Object(c.a)(a,{attrs:{src:b,alt:i,width:h?Object(d.g)(h):null,height:v?Object(d.g)(v):null,srcset:y||null,sizes:w||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||j,"w-100":j,rounded:""===g||!0===g},f(n,"rounded-".concat(g),Object(l.n)(g)&&""!==g),f(n,m,m),f(n,"d-block",O),n)}))}})},304:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(36),c=n.n(r),a=n(8),i=n(47),o=n(5),s=n(2),l=n(43),u=n(13),b=n(1),d=n(27),f=n(55),p=n(305);function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(u.j)(p.b,["content"]),v=Object(b.d)(Object(u.m)(j(j({},h),{},{icon:Object(b.c)(s.u)})),o.ib),m=Object(a.c)({name:o.ib,functional:!0,props:v,render:function(t,e){var n=e.data,r=e.props,a=e.parent,o=Object(d.e)(Object(d.h)(r.icon||"")).replace(l.p,"");return t(o&&function t(e,n){if(!e)return c.a.component(n);var r=(e.$options||{}).components;return r&&r[n]||t(e.$parent,n)}(a,"BIcon".concat(o))||f.a,Object(i.a)(n,{props:Object(b.e)(h,r)}))}})},34:function(t,e,n){"use strict";var r={components:{BAvatar:n(538).a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},c=(n(1037),n(0)),a=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);e.a=a.exports},343:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n(8),c=n(47),a=n(5),i=n(2),o=n(1),s=n(27),l=Object(o.d)({title:Object(o.c)(i.u),titleTag:Object(o.c)(i.u,"h4")},a.v),u=Object(r.c)({name:a.v,functional:!0,props:l,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t(n.titleTag,Object(c.a)(r,{staticClass:"card-title"}),a||Object(s.g)(n.title))}})},37:function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"g",(function(){return s})),n.d(e,"j",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return b})),n.d(e,"a",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return j})),n.d(e,"i",(function(){return g})),n.d(e,"k",(function(){return h})),n.d(e,"m",(function(){return v}));var r=n(33),c=n(139),a=n(552),i=n(551),o=(n(167),n(545),Object(r.c)("required",c.l)),s=Object(r.c)("email",c.g),l=Object(r.c)("min",c.j),u=Object(r.c)("confirmed",c.e),b=(Object(r.c)("regex",c.k),Object(r.c)("between",c.d)),d=Object(r.c)("alpha",c.a),f=Object(r.c)("integer",c.h),p=Object(r.c)("digits",c.f),O=Object(r.c)("alpha-dash",c.b),j=Object(r.c)("alpha-num",c.c),g=Object(r.c)("length",c.i),h=(Object(r.c)("positive",{validate:function(t){return t>=0},message:"Please enter positive number!"}),Object(r.c)("credit-card",{validate:function(t){return/^(?:3[47][0-9]{13})$/.test(t)},message:"It is not valid credit card!"}),Object(r.c)("password",{validate:function(t){return/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/.test(t)},message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"})),v=Object(r.c)("url",{validate:function(t){if(null==t||0===t.length)return!0;return/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(t)},message:"URL is invalid"});Object(r.d)({en:{messages:i.messages,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:a.messages,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}})},443:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var r=n(8),c=n(47),a=n(5),i=n(2),o=n(1),s=Object(o.d)({id:Object(o.c)(i.u),inline:Object(o.c)(i.g,!1),novalidate:Object(o.c)(i.g,!1),validated:Object(o.c)(i.g,!1)},a.J),l=Object(r.c)({name:a.J,functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t("form",Object(c.a)(r,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),a)}})},53:function(t,e,n){"use strict";var r=n(0),c=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 139 95",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"24"}},[n("defs",[n("linearGradient",{attrs:{id:"linearGradient-1",x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%"}},[n("stop",{attrs:{"stop-color":"#000000",offset:"0%"}}),t._v(" "),n("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"linearGradient-2",x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%"}},[n("stop",{attrs:{"stop-color":"#EEEEEE","stop-opacity":"0",offset:"0%"}}),t._v(" "),n("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1)],1),t._v(" "),n("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"Artboard",transform:"translate(-400.000000, -178.000000)"}},[n("g",{attrs:{id:"Group",transform:"translate(400.000000, 178.000000)"}},[n("path",{staticClass:"text-primary",staticStyle:{fill:"currentColor"},attrs:{id:"Path",d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"}}),t._v(" "),n("path",{attrs:{id:"Path1",d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",fill:"url(#linearGradient-1)",opacity:"0.2"}}),t._v(" "),n("polygon",{attrs:{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}}),t._v(" "),n("polygon",{attrs:{id:"Path-21",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}}),t._v(" "),n("polygon",{attrs:{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"}})])])])])}),[],!1,null,null,null);e.a=c.exports},535:function(t,e,n){var r=n(1038);"string"==typeof r&&(r=[[t.i,r,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};n(22)(r,c);r.locals&&(t.exports=r.locals)},538:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return C}));var r=n(8),c=n(5),a=n(12),i=n(2),o=n(18),s=n(7),l=n(21),u=n(13),b=n(1),d=n(92),f=n(29),p=n(304),O=n(55),j=n(89),g=n(60);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=["sm",null,"lg"],w=function(t){return t=Object(s.n)(t)&&Object(s.i)(t)?Object(l.b)(t,0):t,Object(s.h)(t)?"".concat(t,"px"):t||null},x=Object(u.j)(g.b,["active","event","routerTag"]),P=Object(b.d)(Object(u.m)(v(v({},x),{},{alt:Object(b.c)(i.u,"avatar"),ariaLabel:Object(b.c)(i.u),badge:Object(b.c)(i.j,!1),badgeLeft:Object(b.c)(i.g,!1),badgeOffset:Object(b.c)(i.u),badgeTop:Object(b.c)(i.g,!1),badgeVariant:Object(b.c)(i.u,"primary"),button:Object(b.c)(i.g,!1),buttonType:Object(b.c)(i.u,"button"),icon:Object(b.c)(i.u),rounded:Object(b.c)(i.j,!1),size:Object(b.c)(i.p),square:Object(b.c)(i.g,!1),src:Object(b.c)(i.u),text:Object(b.c)(i.u),variant:Object(b.c)(i.u,"secondary")})),c.c),C=Object(r.c)({name:c.c,mixins:[f.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:P,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return w(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,r=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return r?{marginLeft:r,marginRight:r}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,r=this.badgeOffset||"0px";return{fontSize:-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?r:null,bottom:e?null:r,left:n?r:null,right:n?null:r}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(a.y,t)},onClick:function(t){this.$emit(a.f,t)}},render:function(t){var e,n=this.computedVariant,r=this.disabled,c=this.computedRounded,a=this.icon,i=this.localSrc,s=this.text,l=this.fontStyle,u=this.marginStyle,f=this.computedSize,h=this.button,w=this.buttonType,P=this.badge,C=this.badgeVariant,S=this.badgeStyle,_=!h&&Object(d.d)(this),k=h?j.a:_?g.a:"span",z=this.alt,L=this.ariaLabel||null,E=null;this.hasNormalizedSlot()?E=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):i?(E=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:i,alt:z},on:{error:this.onImgError}}),E=t("span",{staticClass:"b-avatar-img"},[E])):E=a?t(p.a,{props:{icon:a},attrs:{"aria-hidden":"true",alt:z}}):s?t("span",{staticClass:"b-avatar-text",style:l},[t("span",s)]):t(O.m,{attrs:{"aria-hidden":"true",alt:z}});var G=t(),A=this.hasNormalizedSlot(o.d);if(P||""===P||A){var F=!0===P?"":P;G=t("span",{staticClass:"b-avatar-badge",class:m({},"badge-".concat(C),C),style:S},[A?this.normalizeSlot(o.d):F])}return t(k,{staticClass:"b-avatar",class:(e={},m(e,"".concat("b-avatar","-").concat(f),f&&-1!==y.indexOf(f)),m(e,"badge-".concat(n),!h&&n),m(e,"rounded",!0===c),m(e,"rounded-".concat(c),c&&!0!==c),m(e,"disabled",r),e),style:v(v({},u),{},{width:f,height:f}),attrs:{"aria-label":L||null},props:h?{variant:n,disabled:r,type:w}:_?Object(b.e)(x,this):{},on:h||_?{click:this.onClick}:{}},[E,G])}})},663:function(t,e){t.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/pages/forgot-password-v2.svg"},664:function(t,e){t.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/pages/forgot-password-v2-dark.svg"}}]);