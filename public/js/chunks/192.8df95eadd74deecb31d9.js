(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1312:function(a,t,n){"use strict";n(676)},1313:function(a,t,n){(t=n(20)(!1)).push([a.i,"[dir] .faq-search {\n  background-size: cover;\n  background-color: rgba(115, 103, 240, 0.12) !important;\n}\n[dir] .faq-search .faq-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .faq-contact .faq-contact-card {\n  background-color: rgba(186, 191, 199, 0.12);\n}\n@media (min-width: 992px) {\n[dir] .faq-search .card-body {\n    padding: 8rem !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .faq-search .card-body {\n    padding: 6rem !important;\n}\n}\n@media (min-width: 768px) {\n.faq-search .faq-search-input .input-group {\n    width: 576px;\n}\n[dir] .faq-search .faq-search-input .input-group {\n    margin: 0 auto;\n}\n.faq-navigation {\n    height: 550px;\n}\n}\n.faq-navigation .nav.nav-pills {\n  height: 100%;\n}",""]),a.exports=t},1562:function(a,t,n){"use strict";n.r(t);var s=n(444),e=n(1837),r=n(1834),i=n(348),o=n(538),c=n(344),l=n(1838),p=n(1836),u=n(1835),d=n(536),f=n(1865),h=n(1873),v=n(226),m=n(135),b=n(136),q={components:{BAvatar:o.a,AppCollapseItem:b.a,AppCollapse:m.a},props:{options:{type:Object,default:function(){}}}},y=n(0),_=Object(y.a)(q,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return a.options?n("div",[n("div",{staticClass:"d-flex align-items-center"},[n("b-avatar",{staticClass:"mr-1",attrs:{rounded:"",size:"42",variant:"light-primary"}},[n("feather-icon",{attrs:{icon:a.options.icon,size:"20"}})],1),a._v(" "),n("div",[n("h4",{staticClass:"mb-0"},[a._v("\n        "+a._s(a.options.title)+"\n      ")]),a._v(" "),n("span",[a._v(a._s(a.options.subtitle))])])],1),a._v(" "),n("app-collapse",{staticClass:"mt-2",attrs:{id:"faq-payment-qna",accordion:"",type:"margin"}},a._l(a.options.qandA,(function(t,s){return n("app-collapse-item",{key:s,attrs:{title:t.question}},[a._v("\n      "+a._s(t.ans)+"\n    ")])})),1)],1):a._e()}),[],!1,null,null,null).exports,g={components:{BForm:s.a,BCard:e.a,BRow:r.a,BCol:i.a,BAvatar:o.a,BCardBody:c.a,BInputGroup:l.a,BFormInput:p.a,BCardText:u.a,BInputGroupPrepend:d.a,BTabs:f.a,BTab:h.a,BImg:v.a,FaqQuestionAnswer:_},data:function(){return{faqSearchQuery:"",faqData:{}}},watch:{faqSearchQuery:{immediate:!0,handler:function(){this.fetchData()}}},methods:{fetchData:function(){var a=this;this.$http.get("/faq/data",{params:{q:this.faqSearchQuery}}).then((function(t){a.$ability.update([{action:"manage"},{subject:"all"}]),a.faqData=t.data}))}}},w=(n(1312),Object(y.a)(g,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("section",{attrs:{id:"faq-search-filter"}},[s("b-card",{staticClass:"faq-search",style:{backgroundImage:"url("+n(364)+")"},attrs:{"no-body":""}},[s("b-card-body",{staticClass:"text-center"},[s("h2",{staticClass:"text-primary"},[a._v("\n          Let's answer some questions\n        ")]),a._v(" "),s("b-card-text",{staticClass:"mb-2"},[a._v("\n          or choose a category to quickly find the help you need\n        ")]),a._v(" "),s("b-form",{staticClass:"faq-search-input"},[s("b-input-group",{staticClass:"input-group-merge"},[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("feather-icon",{attrs:{icon:"SearchIcon"}})],1),a._v(" "),s("b-form-input",{attrs:{id:"searchbar",placeholder:"Search faq..."},model:{value:a.faqSearchQuery,callback:function(t){a.faqSearchQuery=t},expression:"faqSearchQuery"}})],1)],1)],1)],1)],1),a._v(" "),s("section",{attrs:{id:"faq-tabs"}},[s("b-tabs",{attrs:{vertical:"","content-class":"col-12 col-md-8 col-lg-9",pills:"","nav-wrapper-class":"faq-navigation col-md-4 col-lg-3 col-12","nav-class":"nav-left"},scopedSlots:a._u([{key:"tabs-end",fn:function(){return[s("b-img",{staticClass:"d-none d-md-block mt-auto",attrs:{fluid:"",src:n(626)}})]},proxy:!0}])},a._l(a.faqData,(function(t,n,e){return s("b-tab",{key:n,attrs:{active:!e},scopedSlots:a._u([{key:"title",fn:function(){return[s("feather-icon",{staticClass:"mr-1",attrs:{icon:t.icon,size:"18"}}),a._v(" "),s("span",{staticClass:"font-weight-bold"},[a._v(a._s(t.title))])]},proxy:!0}],null,!0)},[a._v(" "),s("faq-question-answer",{attrs:{options:t}})],1)})),1)],1),a._v(" "),s("section",{staticClass:"faq-contact"},[s("b-row",{staticClass:"mt-5 pt-75 text-center"},[s("b-col",{attrs:{cols:"12"}},[s("h2",[a._v("You still have a question?")]),a._v(" "),s("b-card-text",{staticClass:"mb-3"},[a._v("\n          If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!\n        ")])],1),a._v(" "),s("b-col",{attrs:{sm:"6"}},[s("b-card",{staticClass:"shadow-none py-1 faq-contact-card"},[s("b-avatar",{staticClass:"mb-2",attrs:{size:"42",rounded:"",variant:"light-primary"}},[s("feather-icon",{attrs:{icon:"PhoneCallIcon",size:"18"}})],1),a._v(" "),s("h4",[a._v("+ (810) 2548 2568")]),a._v(" "),s("span",{staticClass:"text-body"},[a._v("We are always happy to help!")])],1)],1),a._v(" "),s("b-col",{attrs:{sm:"6"}},[s("b-card",{staticClass:"shadow-none py-1 faq-contact-card"},[s("b-avatar",{staticClass:"mb-2",attrs:{size:"42",rounded:"",variant:"light-primary"}},[s("feather-icon",{attrs:{icon:"MailIcon",size:"18"}})],1),a._v(" "),s("h4",[a._v("hello@help.com")]),a._v(" "),s("span",{staticClass:"text-body"},[a._v("Best way to get answer faster!")])],1)],1)],1)],1)])}),[],!1,null,null,null));t.default=w.exports},676:function(a,t,n){var s=n(1313);"string"==typeof s&&(s=[[a.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n(22)(s,e);s.locals&&(a.exports=s.locals)}}]);