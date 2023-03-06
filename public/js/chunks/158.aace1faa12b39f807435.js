(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1290:function(t,e,n){"use strict";n(670)},1291:function(t,e,n){(e=n(20)(!1)).push([t.i,"[dir] .knowledge-base-bg {\n  background-size: cover;\n  background-color: rgba(115, 103, 240, 0.12) !important;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .kb-search-content-info .kb-search-content .card-img-top {\n  background-color: #fcfcfc;\n}\n.kb-search-content-info .no-result.no-items {\n  display: none;\n}\n.kb-title {\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n.knowledge-base-bg .kb-search-input .input-group {\n    width: 576px;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group {\n    margin: 0 auto;\n}\n}\n@media (min-width: 992px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 8rem;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 6rem;\n}\n}\n[dir] .list-group-circle .list-group-item-action:focus, [dir] .list-group-circle .list-group-item-action:active {\n  background-color: transparent;\n}\n[dir] .question-content ul li {\n  margin-bottom: 1rem;\n}\n.question-content ul li a {\n  color: inherit;\n}",""]),t.exports=e},1565:function(t,e,n){"use strict";n.r(e);n(76),n(40),n(133),n(142);var r=n(1812),a=n(342),o=n(1814),c=n(1822),i=n(1820),s=n(338),u=n(1813),l=n(438),b=n(1816),d=n(532),p=n(1815),g={components:{BRow:r.a,BCol:a.a,BCard:o.a,BListGroup:c.a,BListGroupItem:i.a,BCardBody:s.a,BCardText:u.a,BForm:l.a,BInputGroup:b.a,BInputGroupPrepend:d.a,BFormInput:p.a},data:function(){return{knowledgeBaseSearchQuery:"",kb:[]}},computed:{filteredKB:function(){var t=this.knowledgeBaseSearchQuery.toLowerCase();return this.kb.filter((function(e){return e.title.toLowerCase().includes(t)||e.questions.filter((function(e){return e.question.toLowerCase().includes(t)})).length}))}},created:function(){var t=this;this.$http.get("/kb/data/category").then((function(e){t.kb=e.data}))}},f=(n(1290),n(0)),O=Object(f.a)(g,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{attrs:{id:"kb-category-search"}},[r("b-card",{staticClass:"knowledge-base-bg text-center",style:{backgroundImage:"url("+n(358)+")"},attrs:{"no-body":""}},[r("b-card-body",{staticClass:"card-body"},[r("h2",{staticClass:"text-primary"},[t._v("\n          Dedicated Source Used on Website\n        ")]),t._v(" "),r("b-card-text",{staticClass:"mb-2"},[r("span",[t._v("Popular searches: ")]),t._v(" "),r("span",{staticClass:"font-weight-bolder"},[t._v("Sales automation, Email marketing")])]),t._v(" "),r("b-form",{staticClass:"kb-search-input"},[r("b-input-group",{staticClass:"input-group-merge"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"SearchIcon"}})],1),t._v(" "),r("b-form-input",{attrs:{id:"searchbar",placeholder:"Ask a question...."},model:{value:t.knowledgeBaseSearchQuery,callback:function(e){t.knowledgeBaseSearchQuery=e},expression:"knowledgeBaseSearchQuery"}})],1)],1)],1)],1)],1),t._v(" "),r("div",{attrs:{id:"knowledge-base-category"}},[r("b-row",{staticClass:"match-height"},[t._l(t.filteredKB,(function(e,n){return r("b-col",{key:n,attrs:{md:"4",sm:"6"}},[r("b-card",[r("h6",{staticClass:"kb-title"},[r("feather-icon",{staticClass:"mr-50",class:e.iconColor,attrs:{icon:e.icon,size:"20"}}),t._v(t._s(e.title)+" ("+t._s(e.questions.length)+")\n          ")],1),t._v(" "),r("b-list-group",{staticClass:"list-group-circle mt-2"},t._l(e.questions,(function(e){return r("b-list-group-item",{key:e.question,staticClass:"text-body",attrs:{to:{name:"pages-knowledge-base-question",params:{category:t.$route.params.category,slug:e.slug}}}},[t._v("\n              "+t._s(e.question)+"\n            ")])})),1)],1)],1)})),t._v(" "),r("b-col",{directives:[{name:"show",rawName:"v-show",value:!t.filteredKB.length,expression:"!filteredKB.length"}],staticClass:"text-center",attrs:{cols:"12"}},[r("h4",{staticClass:"mt-4"},[t._v("\n          Search result not found!!\n        ")])])],2)],1)])}),[],!1,null,null,null);e.default=O.exports},1812:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(47),a=n(5),o=n(2),c=n(22),i=n(67),s=n(35),u=n(202),l=n(13),b=n(1),d=n(27);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=["start","end","center"],h=Object(u.a)((function(t,e){return(e=Object(d.h)(Object(d.g)(e)))?Object(d.c)(["row-cols",t,e].filter(s.a).join("-")):null})),j=Object(u.a)((function(t){return Object(d.c)(t.replace("cols",""))})),m=[],v={name:a.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(i.b)().reduce((function(t,e){return t[Object(b.g)(e,"cols")]=Object(b.c)(o.p),t}),Object(l.c)(null)),m=Object(l.h)(t),Object(b.d)(Object(l.m)(g(g({},t),{},{alignContent:Object(b.c)(o.u,null,(function(t){return Object(c.a)(Object(c.b)(O,"between","around","stretch"),t)})),alignH:Object(b.c)(o.u,null,(function(t){return Object(c.a)(Object(c.b)(O,"between","around"),t)})),alignV:Object(b.c)(o.u,null,(function(t){return Object(c.a)(Object(c.b)(O,"baseline","stretch"),t)})),noGutters:Object(b.c)(o.g,!1),tag:Object(b.c)(o.u,"div")})),a.Ob)),this.props},render:function(t,e){var n,a=e.props,o=e.data,c=e.children,i=a.alignV,s=a.alignH,u=a.alignContent,l=[];return m.forEach((function(t){var e=h(j(t),a[t]);e&&l.push(e)})),l.push((f(n={"no-gutters":a.noGutters},"align-items-".concat(i),i),f(n,"justify-content-".concat(s),s),f(n,"align-content-".concat(u),u),n)),t(a.tag,Object(r.a)(o,{staticClass:"row",class:l}),c)}}},1820:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(8),a=n(47),o=n(5),c=n(2),i=n(22),s=n(6),u=n(13),l=n(1),b=n(91),d=n(59);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=["a","router-link","button","b-link"],h=Object(u.j)(d.b,["event","routerTag"]);delete h.href.default,delete h.to.default;var j=Object(l.d)(Object(u.m)(g(g({},h),{},{action:Object(l.c)(c.g,!1),button:Object(l.c)(c.g,!1),tag:Object(l.c)(c.u,"div"),variant:Object(l.c)(c.u)})),o.tb),m=Object(r.c)({name:o.tb,functional:!0,props:j,render:function(t,e){var n,r=e.props,o=e.data,c=e.children,u=r.button,p=r.variant,g=r.active,j=r.disabled,m=Object(b.d)(r),v=u?"button":m?d.a:r.tag,w=!!(r.action||m||u||Object(i.a)(O,r.tag)),y={},k={};return Object(s.t)(v,"button")?(o.attrs&&o.attrs.type||(y.type="button"),r.disabled&&(y.disabled=!0)):k=Object(l.e)(h,r),t(v,Object(a.a)(o,{attrs:y,props:k,staticClass:"list-group-item",class:(n={},f(n,"list-group-item-".concat(p),p),f(n,"list-group-item-action",w),f(n,"active",g),f(n,"disabled",j),n)}),c)}})},1822:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(8),a=n(47),o=n(5),c=n(2),i=n(7),s=n(1);var u=Object(s.d)({flush:Object(s.c)(c.g,!1),horizontal:Object(s.c)(c.j,!1),tag:Object(s.c)(c.u,"div")},o.sb),l=Object(r.c)({name:o.sb,functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,o=e.children,c=""===n.horizontal||n.horizontal;c=!n.flush&&c;var s,u,l,b={staticClass:"list-group",class:(s={"list-group-flush":n.flush,"list-group-horizontal":!0===c},u="list-group-horizontal-".concat(c),l=Object(i.n)(c),u in s?Object.defineProperty(s,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[u]=l,s)};return t(n.tag,Object(a.a)(r,b),o)}})},358:function(t,e){t.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/banner/banner.png"},670:function(t,e,n){var r=n(1291);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(23)(r,a);r.locals&&(t.exports=r.locals)}}]);