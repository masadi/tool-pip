(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1034:function(e,n,t){"use strict";t(532)},1035:function(e,n,t){(n=t(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=n},16:function(e,n,t){"use strict";t(71);var a=t(1943),i=t(436),r=t(437),o=t(435),s=t(1942),c=(t(174),t(188),t(96)),l=t.n(c),d={components:{BCard:a.a,BCardTitle:i.a,BCardSubTitle:r.a,BCardBody:o.a,BCollapse:s.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},b=(t(1034),t(0)),u=Object(b.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(n){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),e._v(" "),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=u.exports},1823:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var a=t(46),i=t(5),r=t(2),o=t(22),s=t(67),c=t(35),l=t(201),d=t(13),b=t(1),u=t(27);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var v=["start","end","center"],h=Object(l.a)((function(e,n){return(n=Object(u.h)(Object(u.g)(n)))?Object(u.c)(["row-cols",e,n].filter(c.a).join("-")):null})),f=Object(l.a)((function(e){return Object(u.c)(e.replace("cols",""))})),_=[],O={name:i.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(s.b)().reduce((function(e,n){return e[Object(b.g)(n,"cols")]=Object(b.c)(r.p),e}),Object(d.c)(null)),_=Object(d.h)(e),Object(b.d)(Object(d.m)(p(p({},e),{},{alignContent:Object(b.c)(r.u,null,(function(e){return Object(o.a)(Object(o.b)(v,"between","around","stretch"),e)})),alignH:Object(b.c)(r.u,null,(function(e){return Object(o.a)(Object(o.b)(v,"between","around"),e)})),alignV:Object(b.c)(r.u,null,(function(e){return Object(o.a)(Object(o.b)(v,"baseline","stretch"),e)})),noGutters:Object(b.c)(r.g,!1),tag:Object(b.c)(r.u,"div")})),i.Ob)),this.props},render:function(e,n){var t,i=n.props,r=n.data,o=n.children,s=i.alignV,c=i.alignH,l=i.alignContent,d=[];return _.forEach((function(e){var n=h(f(e),i[e]);n&&d.push(n)})),d.push((g(t={"no-gutters":i.noGutters},"align-items-".concat(s),s),g(t,"justify-content-".concat(c),c),g(t,"align-content-".concat(l),l),t)),e(i.tag,Object(a.a)(r,{staticClass:"row",class:d}),o)}}},1824:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(8),i=t(46),r=t(5),o=t(2),s=t(1),c=Object(s.d)({textTag:Object(s.c)(o.u,"p")},r.u),l=Object(a.c)({name:r.u,functional:!0,props:c,render:function(e,n){var t=n.props,a=n.data,r=n.children;return e(t.textTag,Object(i.a)(a,{staticClass:"card-text"}),r)}})},1852:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(8),i=t(46),r=t(5),o=t(2),s=t(1);var c=Object(s.d)({fluid:Object(s.c)(o.j,!1),tag:Object(s.c)(o.u,"div")},r.B),l=Object(a.c)({name:r.B,functional:!0,props:c,render:function(e,n){var t,a,r,o=n.props,s=n.data,c=n.children,l=o.fluid;return e(o.tag,Object(i.a)(s,{class:(t={container:!(l||""===l),"container-fluid":!0===l||""===l},a="container-".concat(l),r=l&&!0!==l,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t)}),c)}})},1902:function(e,n,t){"use strict";t.r(n);var a,i=t(1823),r=t(440),o=t(4),s=t(1824),c=t(239),l={components:{BCardCode:o.a,BCardText:s.a,BImg:c.a},data:function(){return{codeBasic:'\n<template>\n  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  }\n}\n<\/script>\n'}}},d=t(0),b=Object(d.a)(l,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("b-card-code",{attrs:{title:"Images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Documentation and examples for opting images (via ")]),e._v(" "),a("code",[e._v("<b-img>")]),e._v(" "),a("span",[e._v("\n      component) into responsive behavior (so they never become larger than their parent elements), optionally adding\n      lightweight styles to them — all via props.\n    ")])]),e._v(" "),a("b-img",{staticClass:"w-100",attrs:{src:t(622),fluid:"",alt:"Responsive image"}})],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:o.a,BCardText:s.a,BImg:c.a},data:function(){return{codeResponsive:'\n<template>\n  <div>\n    <h6>Small image with <code>fluid</code>:</h6>\n    <b-img :src="require(\'@/assets/images/water-drop-small.jpg" fluid alt="Fluid image\')" />\n\n    <h6 class="my-1">Small image with <code>fluid-grow</code>:</h6>\n    <b-img :src="require(\'@/assets/images/water-drop-small.jpg" fluid-grow alt="Fluid-grow image\')" />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  },\n}\n<\/script>\n'}}},m=Object(d.a)(u,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("b-card-code",{attrs:{title:"Responsive images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeResponsive)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Images in BootstrapVue can be made responsive with the ")]),e._v(" "),a("code",[e._v("fluid")]),e._v(" "),a("span",[e._v(" prop (which sets ")]),e._v(" "),a("code",[e._v("max-width: 100%; height: auto;")]),e._v(" "),a("span",[e._v("\n      via CSS classes) so that it scales with the parent element - up to the maximum native width of the image.\n    ")])]),e._v(" "),a("div",[a("h6",[e._v("Small image with "),a("code",[e._v("fluid")]),e._v(":")]),e._v(" "),a("b-img",{attrs:{src:t(153),fluid:"",alt:"Fluid image"}}),e._v(" "),a("h6",{staticClass:"my-1"},[e._v("\n      Small image with "),a("code",[e._v("fluid-grow")]),e._v(":\n    ")]),e._v(" "),a("b-img",{attrs:{src:t(153),"fluid-grow":"",alt:"Fluid-grow image"}})],1)],1)}),[],!1,null,null,null).exports,p=t(1852),g={components:{BCardCode:o.a,BImg:c.a,BContainer:p.a,BCardText:s.a,BRow:i.a,BCol:r.a},data:function(){return{codeThumbnails:'\n<template>\n  <b-container fluid class="p-1 bg-dark">\n    <b-row>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/sky-high.jpg" alt="Image 1\')" />\n      </b-col>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/light-house-thumb.jpg" alt="Image 2\')" />\n      </b-col>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/border.jpg" alt="Image 3\')" />\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { BImg, BContainer, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n    BContainer,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n'}}},v=Object(d.a)(g,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("b-card-code",{attrs:{title:"Image thumbnails"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeThumbnails)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("You can use prop ")]),e._v(" "),a("code",[e._v("thumbnail")]),e._v(" "),a("span",[e._v("to give an image a rounded light border appearance.")])]),e._v(" "),a("b-container",{staticClass:"p-1 bg-dark",attrs:{fluid:""}},[a("b-row",[a("b-col",[a("b-img",{attrs:{thumbnail:"",fluid:"",src:t(125),alt:"Image 1"}})],1),e._v(" "),a("b-col",[a("b-img",{attrs:{thumbnail:"",fluid:"",src:t(216),alt:"Image 2"}})],1),e._v(" "),a("b-col",[a("b-img",{attrs:{thumbnail:"",fluid:"",src:t(234),alt:"Image 3"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,h={components:{BCardCode:o.a,BImg:c.a,BCardText:s.a},data:function(){return{mainProps:{blank:!0,blankColor:"#777",width:75,height:75,class:"m1"},codeRoundedCorner:'\n<template>\n  <div>\n    <b-img\n      v-bind="mainProps"\n      rounded\n      alt="Rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="top"\n      alt="Top-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="right"\n      alt="Right-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="bottom"\n      alt="Bottom-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="left"\n      alt="Left-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="circle"\n      alt="Circle image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="0"\n      alt="Not rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n BImg, },\n  data: () => ({\n    mainProps: {\n      blank: true,\n      blankColor: \'#777\',\n      width: 75,\n      height: 75,\n      class: \'m1\',\n    },\n  }),\n}\n<\/script>\n'}}},f=Object(d.a)(h,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Rounded corners"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeRoundedCorner)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("You can control which corners are rounded by setting the rounded prop to one of the following values:")]),e._v(" "),t("code",[e._v("true,false,top,right,bottom,left,circle,0")])]),e._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"",alt:"Rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"top",alt:"Top-rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"right",alt:"Right-rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"bottom",alt:"Bottom-rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"left",alt:"Left-rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"circle",alt:"Circle image"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"0",alt:"Not rounded image"}},"b-img",e.mainProps,!1))],1)],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:o.a,BCardText:s.a,BImg:c.a},data:function(){return{codeAlignment:'\n<template>\n  <div class="clearfix">\n    <b-img  left class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Left image\')"/>\n    <b-img right class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Right image\')"/>\n    <b-img center class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Center image\')"/>\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  }\n}\n<\/script>\n'}}},O=Object(d.a)(_,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("b-card-code",{attrs:{title:"Aligning images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAlignment)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Align images with the boolean props ")]),e._v(" "),a("code",[e._v("left")]),e._v(" "),a("span",[e._v(" (floats left) ")]),e._v(" "),a("code",[e._v("right")]),e._v(" "),a("span",[e._v("(floats right), and ")]),e._v(" "),a("code",[e._v("center")]),e._v(" "),a("span",[e._v("(auto left+right margins). You can also center images by placing them in a container that has the class\n    ")]),e._v(" "),a("code",[e._v("text-center.")])]),e._v(" "),a("div",{staticClass:"clearfix"},[a("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{left:"",height:"120",src:t(229),alt:"Left image"}}),e._v(" "),a("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{right:"",height:"120",src:t(229),alt:"Right image"}}),e._v(" "),a("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{center:"",height:"120",src:t(229),alt:"Center image"}})],1)],1)}),[],!1,null,null,null).exports,k={components:{BCardCode:o.a,BCardText:s.a,BImg:c.a},data:function(){return{mainProps:{blank:!0,width:75,height:75,class:"m1"},codeBlank:'\n<template>\n  <div>\n    <b-img\n      v-bind="mainProps"\n      rounded\n      alt="Transparent image"\n      class="d-inline-block mr-1 mb-1 border"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#5A8DEE"\n      rounded\n      alt="HEX shorthand color image (#777)"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#475F7B"\n      rounded\n      alt="Named color image (red)"\n      class="d-inline-block mr-1 mb-1"\n    />\n\n    <b-img\n      v-bind="mainProps"\n      blank-color="#39DA8A"\n      rounded\n      alt="Named color image (black)"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#FF5B5C"\n      rounded\n      alt="HEX color image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#FDAC41"\n      alt="RGBa color image"\n      rounded\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#00CFDD"\n      rounded\n      alt="HEX shorthand color (#88f)"\n      class="d-inline-block mr-1 mb-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  },\n  data: () => ({\n    mainProps: {\n      blank: true,\n      width: 75,\n      height: 75,\n      class: \'m1\',\n    },\n  }),\n}\n<\/script>\n'}}},j=Object(d.a)(k,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Blank (or solid color) images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBlank)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("code",[e._v("<b-img>")]),e._v(" "),t("span",[e._v("\n      provides built-in support for generating blank images (transparent by default) of any width and height, by\n      setting the\n    ")]),e._v(" "),t("code",[e._v("blank")]),e._v(" "),t("span",[e._v(" prop, and specifying ")]),e._v(" "),t("code",[e._v("width")]),e._v(" "),t("span",[e._v(" and ")]),e._v(" "),t("code",[e._v("height")]),e._v(" "),t("span",[e._v("values (in pixels). You can apply any of the other ")]),e._v(" "),t("code",[e._v("<b-img>")]),e._v(" "),t("span",[e._v(" props to change the style/behavior of the generated image.")])]),e._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-img",e._b({staticClass:"d-inline-block border",attrs:{rounded:"",alt:"Transparent image"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#5A8DEE",rounded:"",alt:"HEX shorthand color image (#777)"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#82868b",rounded:"",alt:"Named color image (red)"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#39DA8A",rounded:"",alt:"Named color image (black)"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#FDAC41",alt:"RGBa color image",rounded:""}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#FF5B5C",rounded:"",alt:"HEX color image"}},"b-img",e.mainProps,!1)),e._v(" "),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#00CFDD",rounded:"",alt:"HEX shorthand color (#88f)"}},"b-img",e.mainProps,!1))],1)],1)}),[],!1,null,null,null).exports,w=t(8),y=t(5),C=t(30),B=t(12),x=t(2),P=t(22),S=t(6),I=t(35),E=t(21),D=t(13),R=t(1),T=t(350);function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var L=B.hb+"show",F=Object(D.j)(c.b,["blank"]),H=Object(R.d)(z(z({},F),{},A({blankHeight:Object(R.c)(x.p),blankSrc:Object(R.c)(x.u,null),blankWidth:Object(R.c)(x.p),offset:Object(R.c)(x.p,360)},"show",Object(R.c)(x.g,!1))),y.lb),q=Object(w.c)({name:y.lb,directives:{"b-visible":T.a},props:H,data:function(){return{isShown:this.show}},computed:{computedSrc:function(){var e=this.blankSrc;return!e||this.isShown?this.src:e},computedBlank:function(){return!(this.isShown||this.blankSrc)},computedWidth:function(){var e=this.width;return this.isShown?e:this.blankWidth||e},computedHeight:function(){var e=this.height;return this.isShown?e:this.blankHeight||e},computedSrcset:function(){var e=Object(P.b)(this.srcset).filter(I.a).join(",");return!e||this.blankSrc&&!this.isShown?null:e},computedSizes:function(){var e=Object(P.b)(this.sizes).filter(I.a).join(",");return!e||this.blankSrc&&!this.isShown?null:e}},watch:(a={},A(a,"show",(function(e,n){if(e!==n){var t=!C.b||e;this.isShown=t,e!==t&&this.$nextTick(this.updateShowProp)}})),A(a,"isShown",(function(e,n){e!==n&&this.updateShowProp()})),a),mounted:function(){var e=this;this.$nextTick((function(){e.isShown=!C.b||e.show}))},methods:{updateShowProp:function(){this.$emit(L,this.isShown)},doShow:function(e){var n=this;!e&&null!==e||this.isShown||Object(S.B)((function(){n.isShown=!0}))}},render:function(e){var n,t=[];this.isShown||t.push({name:"b-visible",value:this.doShow,modifiers:(n={},A(n,"".concat(Object(E.c)(this.offset,0)),!0),A(n,"once",!0),n)});return e(c.a,{directives:t,props:z(z({},Object(R.e)(F,this.$props)),{},{src:this.computedSrc,blank:this.computedBlank,width:this.computedWidth,height:this.computedHeight,srcset:this.computedSrcset,sizes:this.computedSizes})})}}),N={components:{BCardCode:o.a,BImgLazy:q,BCardText:s.a},data:function(){return{codeLazy:"\n<template>\n  <div>\n    <b-img-lazy :src=\"require('@/assets/images/banner/banner-6.jpg\" fluid class=\"w-100')\"/>\n  </div>\n</template>\n\n<script>\nimport { BImgLazy } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BImgLazy,\n  },\n}\n<\/script>\n"}}},X=Object(d.a)(N,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("b-card-code",{attrs:{title:"Lazy loaded images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeLazy)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use our complementary ")]),e._v(" "),a("code",[e._v("<b-img-lazy>")]),e._v(" "),a("span",[e._v(" image component (based on ")]),e._v(" "),a("code",[e._v("<b-img>")]),e._v(" "),a("span",[e._v(") to lazy load images as they are scrolled into view (or within ")]),e._v(" "),a("code",[e._v("offset")]),e._v(" "),a("span",[e._v(" pixels of the viewport).")])]),e._v(" "),a("b-img-lazy",{staticClass:"w-100",attrs:{src:t(622),fluid:""}})],1)}),[],!1,null,null,null).exports,M={components:{BRow:i.a,BCol:r.a,ImagesBasic:b,ImagesResponsive:m,ImagesThumbnails:v,ImagesRoundedCorner:f,ImagesAlignment:O,ImagesBlank:j,ImagesLazy:X}},G=Object(d.a)(M,(function(){var e=this.$createElement,n=this._self._c||e;return n("b-row",[n("b-col",[n("images-basic"),this._v(" "),n("images-responsive"),this._v(" "),n("images-thumbnails"),this._v(" "),n("images-rounded-corner"),this._v(" "),n("images-alignment"),this._v(" "),n("images-blank"),this._v(" "),n("images-lazy")],1)],1)}),[],!1,null,null,null);n.default=G.exports},229:function(e,n){e.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/banner/banner-34.jpg"},350:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(43),i=t(6),r=t(7),o=t(42),s=t(13),c=t(8);function l(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d="__bv__visibility_observer",b=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=n,this.callback=t.callback,this.margin=t.margin||0,this.once=t.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver()}var n,t,a;return n=e,(t=[{key:"createObserver",value:function(){var e=this;if(this.observer&&this.stop(),!this.doneOnce&&Object(r.f)(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(e){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}Object(c.e)((function(){Object(i.B)((function(){e.observer&&e.observer.observe(e.el)}))}))}}},{key:"handler",value:function(e){var n=e?e[0]:{},t=Boolean(n.isIntersecting||n.intersectionRatio>0);t!==this.visible&&(this.visible=t,this.callback(t),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}])&&l(n.prototype,t),a&&l(n,a),Object.defineProperty(n,"prototype",{writable:!1}),e}(),u=function(e){var n=e[d];n&&n.stop&&n.stop(),delete e[d]},m=function(e,n){var t=n.value,i=n.modifiers,r={margin:"0px",once:!1,callback:t};Object(s.h)(i).forEach((function(e){a.h.test(e)?r.margin="".concat(e,"px"):"once"===e.toLowerCase()&&(r.once=!0)})),u(e),e[d]=new b(e,r),e[d]._prevModifiers=Object(s.b)(i)},p={bind:m,componentUpdated:function(e,n,t){var a=n.value,i=n.oldValue,r=n.modifiers;r=Object(s.b)(r),!e||a===i&&e[d]&&Object(o.a)(r,e[d]._prevModifiers)||m(e,{value:a,modifiers:r})},unbind:function(e){u(e)}}},4:function(e,n,t){"use strict";var a=t(16);n.a=a.a},532:function(e,n,t){var a=t(1035);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(23)(a,i);a.locals&&(e.exports=a.locals)},622:function(e,n){e.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/banner/banner-6.jpg"}}]);