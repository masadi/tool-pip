(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1317:function(n,t,e){"use strict";e(677)},1318:function(n,t,e){(t=e(20)(!1)).push([n.i,"[dir] .knowledge-base-bg {\n  background-size: cover;\n  background-color: rgba(115, 103, 240, 0.12) !important;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .kb-search-content-info .kb-search-content .card-img-top {\n  background-color: #fcfcfc;\n}\n.kb-search-content-info .no-result.no-items {\n  display: none;\n}\n.kb-title {\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n.knowledge-base-bg .kb-search-input .input-group {\n    width: 576px;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group {\n    margin: 0 auto;\n}\n}\n@media (min-width: 992px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 8rem;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 6rem;\n}\n}\n[dir] .list-group-circle .list-group-item-action:focus, [dir] .list-group-circle .list-group-item-action:active {\n  background-color: transparent;\n}\n[dir] .question-content ul li {\n  margin-bottom: 1rem;\n}\n.question-content ul li a {\n  color: inherit;\n}",""]),n.exports=t},1583:function(n,t,e){"use strict";e.r(t);var i=e(1829),o=e(348),r=e(1832),a=e(1840),s=e(1830),c=e(343),d=e(1837),l={components:{BRow:i.a,BCol:o.a,BCard:r.a,BListGroup:a.a,BCardText:s.a,BCardTitle:c.a,BListGroupItem:d.a},data:function(){return{kb_question:{}}},created:function(){var n=this;this.$http.get("/kb/data/question").then((function(t){n.kb_question=t.data}))}},u=(e(1317),e(0)),b=Object(u.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"knowledge-base-article"}},[e("b-row",[e("b-col",{attrs:{lg:"3",md:"5",order:"2","order-md":"1"}},[e("b-card",[e("h6",{staticClass:"kb-title"},[e("feather-icon",{staticClass:"mr-50",attrs:{icon:"InfoIcon",size:"20"}}),n._v("\n          Related Questions\n        ")],1),n._v(" "),e("b-list-group",{staticClass:"list-group-circle mt-1"},n._l(n.kb_question.relatedQuestions,(function(t,i){return e("b-list-group-item",{key:i,staticClass:"text-body",attrs:{href:"javascript:void(0)"}},[n._v("\n            "+n._s(t.question)+"\n          ")])})),1)],1)],1),n._v(" "),e("b-col",{attrs:{lg:"9",md:"7",order:"1","order-md":"2"}},[e("b-card",[e("b-card-title",{staticClass:"mb-1"},[e("feather-icon",{attrs:{icon:"SmartphoneIcon",size:"21"}}),n._v("\n\n          "+n._s(n.kb_question.title)+"\n        ")],1),n._v(" "),e("b-card-text",{staticClass:"mb-2"},[n._v("\n          Last updated on "+n._s(n.kb_question.lastUpdated)+"\n        ")]),n._v(" "),e("div",{staticClass:"question-content",domProps:{innerHTML:n._s(n.kb_question.content)}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=b.exports},677:function(n,t,e){var i=e(1318);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(22)(i,o);i.locals&&(n.exports=i.locals)}}]);