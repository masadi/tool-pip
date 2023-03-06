(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1275:function(t,e,n){"use strict";n(661)},1276:function(t,e,n){(e=n(21)(!1)).push([t.i,".misc-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper .misc-inner {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n}\n[dir] .misc-wrapper .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .misc-wrapper .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .misc-wrapper .brand-logo {\n  right: 2rem;\n}\n.misc-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n[dir] .misc-wrapper .misc-inner {\n    margin-top: 4rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}",""]),t.exports=e},1549:function(t,e,n){"use strict";n.r(e);var r=n(59),a=n(89),s=n(221),i=n(53),o=n(15),l={components:{VuexyLogo:i.a,BLink:r.a,BButton:a.a,BImg:s.a},data:function(){return{downImg:n(571)}},computed:{imgUrl:function(){return"dark"===o.a.state.appConfig.layout.skin?(this.downImg=n(572),this.downImg):this.downImg}}},c=(n(1275),n(0)),p=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"misc-wrapper"},[n("b-link",{staticClass:"brand-logo"},[n("vuexy-logo"),t._v(" "),n("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("\n        Vuexy\n      ")])],1),t._v(" "),n("div",{staticClass:"misc-inner p-2 p-sm-3"},[n("div",{staticClass:"w-100 text-center"},[n("h2",{staticClass:"mb-1"},[t._v("\n          Page Not Found 🕵🏻‍♀️\n        ")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("\n          Oops! 😖 The requested URL was not found on this server.\n        ")]),t._v(" "),n("b-button",{staticClass:"mb-2 btn-sm-block",attrs:{variant:"primary",to:{path:"/"}}},[t._v("\n          Back to home\n        ")]),t._v(" "),n("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Error page"}})],1)])],1)}),[],!1,null,null,null);e.default=p.exports},221:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return m}));var r=n(8),a=n(48),s=n(5),i=n(2),o=n(22),l=n(34),c=n(7),p=n(20),d=n(1),u=n(27);function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',f=Object(d.d)({alt:Object(d.c)(i.u),blank:Object(d.c)(i.g,!1),blankColor:Object(d.c)(i.u,"transparent"),block:Object(d.c)(i.g,!1),center:Object(d.c)(i.g,!1),fluid:Object(d.c)(i.g,!1),fluidGrow:Object(d.c)(i.g,!1),height:Object(d.c)(i.p),left:Object(d.c)(i.g,!1),right:Object(d.c)(i.g,!1),rounded:Object(d.c)(i.j,!1),sizes:Object(d.c)(i.f),src:Object(d.c)(i.u),srcset:Object(d.c)(i.f),thumbnail:Object(d.c)(i.g,!1),width:Object(d.c)(i.p)},s.kb),m=Object(r.c)({name:s.kb,functional:!0,props:f,render:function(t,e){var n,r=e.props,s=e.data,i=r.alt,d=r.src,f=r.block,m=r.fluidGrow,h=r.rounded,v=Object(p.c)(r.width)||null,w=Object(p.c)(r.height)||null,j=null,x=Object(o.b)(r.srcset).filter(l.a).join(","),O=Object(o.b)(r.sizes).filter(l.a).join(",");return r.blank&&(!w&&v?w=v:!v&&w&&(v=w),v||w||(v=1,w=1),d=function(t,e,n){var r=encodeURIComponent(b.replace("%{w}",Object(u.g)(t)).replace("%{h}",Object(u.g)(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)}(v,w,r.blankColor||"transparent"),x=null,O=null),r.left?j="float-left":r.right?j="float-right":r.center&&(j="mx-auto",f=!0),t("img",Object(a.a)(s,{attrs:{src:d,alt:i,width:v?Object(u.g)(v):null,height:w?Object(u.g)(w):null,srcset:x||null,sizes:O||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||m,"w-100":m,rounded:""===h||!0===h},g(n,"rounded-".concat(h),Object(c.n)(h)&&""!==h),g(n,j,j),g(n,"d-block",f),n)}))}})},53:function(t,e,n){"use strict";var r=n(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 139 95",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"24"}},[n("defs",[n("linearGradient",{attrs:{id:"linearGradient-1",x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%"}},[n("stop",{attrs:{"stop-color":"#000000",offset:"0%"}}),t._v(" "),n("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"linearGradient-2",x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%"}},[n("stop",{attrs:{"stop-color":"#EEEEEE","stop-opacity":"0",offset:"0%"}}),t._v(" "),n("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1)],1),t._v(" "),n("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"Artboard",transform:"translate(-400.000000, -178.000000)"}},[n("g",{attrs:{id:"Group",transform:"translate(400.000000, 178.000000)"}},[n("path",{staticClass:"text-primary",staticStyle:{fill:"currentColor"},attrs:{id:"Path",d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"}}),t._v(" "),n("path",{attrs:{id:"Path1",d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",fill:"url(#linearGradient-1)",opacity:"0.2"}}),t._v(" "),n("polygon",{attrs:{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}}),t._v(" "),n("polygon",{attrs:{id:"Path-21",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}}),t._v(" "),n("polygon",{attrs:{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"}})])])])])}),[],!1,null,null,null);e.a=a.exports},571:function(t,e){t.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/pages/error.svg"},572:function(t,e){t.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/pages/error-dark.svg"},661:function(t,e,n){var r=n(1276);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(23)(r,a);r.locals&&(t.exports=r.locals)}}]);