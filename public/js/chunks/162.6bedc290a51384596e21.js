(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{112:function(t,a,n){"use strict";n.d(a,"a",(function(){return r}));var r={data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}}},1243:function(t,a,n){"use strict";n(649)},1244:function(t,a,n){(a=n(20)(!1)).push([t.i,'.auth-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n}\n.auth-wrapper .auth-inner {\n  width: 100%;\n  position: relative;\n}\n.auth-wrapper.auth-v1 {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.auth-wrapper.auth-v1 .auth-inner:before {\n  width: 244px;\n  height: 243px;\n  content: " ";\n  position: absolute;\n  top: -54px;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:before {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:before {\n  left: -46px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:before {\n  right: -46px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:before {\n    display: none;\n}\n}\n.auth-wrapper.auth-v1 .auth-inner:after {\n  width: 272px;\n  height: 272px;\n  content: " ";\n  position: absolute;\n  bottom: -55px;\n  z-index: -1;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:after {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:after {\n  right: -75px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:after {\n  left: -75px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:after {\n    display: none;\n}\n}\n.auth-wrapper.auth-v2 {\n  align-items: flex-start;\n}\n.auth-wrapper.auth-v2 .auth-inner {\n  height: 100vh;\n  overflow-y: auto;\n  height: calc(var(--vh, 1vh) * 100);\n}\n.auth-wrapper.auth-v2 .brand-logo {\n  position: absolute;\n  top: 2rem;\n  z-index: 1;\n}\n[dir] .auth-wrapper.auth-v2 .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n  right: 2rem;\n}\n.auth-wrapper.auth-v1 .auth-inner {\n  max-width: 400px;\n}\n.auth-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n}\n[dir] .auth-wrapper .brand-logo {\n  margin: 1rem 0 2rem 0;\n}\n.auth-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n[dir] .auth-wrapper .auth-footer-btn .btn {\n  padding: 0.6rem !important;\n}\n[dir=ltr] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-right: 1rem;\n}\n[dir=rtl] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-left: 1rem;\n}\n@media (min-width: 1200px) {\n.auth-wrapper.auth-v2 .auth-card {\n    width: 400px;\n}\n}\n[dir] .auth-wrapper .auth-bg {\n  background-color: #fff;\n}\n[dir] .dark-layout .auth-wrapper .auth-bg {\n  background-color: #283046;\n}\n@media (max-height: 625px) {\n[dir] .dark-layout .auth-wrapper .auth-inner {\n    background-color: #283046;\n}\n[dir] .auth-wrapper .auth-bg {\n    padding-top: 3rem;\n}\n[dir] .auth-wrapper .auth-inner {\n    background-color: #fff;\n    padding-bottom: 1rem;\n}\n.auth-wrapper.auth-v2 .brand-logo {\n    width: 100%;\n    display: flex;\n    justify-content: unset;\n    position: relative;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n    left: 0;\n    padding-left: 1.5rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n    right: 0;\n    padding-right: 1.5rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}',""]),t.exports=a},1547:function(t,a,n){"use strict";n.r(a);var r=n(32),e=n(89),o=n(437),i=n(1812),s=n(1847),A=n(1811),u=n(337),d=n(59),l=n(1810),p=n(1813),g=n(533),c=n(538),h=n(53),f=n(37),v=n(112),b={components:{BButton:e.a,BForm:o.a,BFormInput:i.a,BFormGroup:s.a,BCard:A.a,BCardTitle:u.a,BLink:d.a,VuexyLogo:h.a,BCardText:l.a,BInputGroup:p.a,BInputGroupAppend:g.a,BFormCheckbox:c.a,ValidationProvider:r.b,ValidationObserver:r.a},mixins:[v.a],data:function(){return{userEmail:"",password:"",status:"",required:f.l,email:f.g}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"}}},m=(n(1243),n(0)),w=Object(m.a)(b,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"auth-wrapper auth-v1 px-2"},[n("div",{staticClass:"auth-inner py-2"},[n("b-card",{staticClass:"mb-0"},[n("b-link",{staticClass:"brand-logo"},[n("vuexy-logo"),t._v(" "),n("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("\n          Vuexy\n        ")])],1),t._v(" "),n("b-card-title",{staticClass:"mb-1"},[t._v("\n        Welcome to Vuexy! 👋\n      ")]),t._v(" "),n("b-card-text",{staticClass:"mb-2"},[t._v("\n        Please sign-in to your account and start the adventure\n      ")]),t._v(" "),n("validation-observer",{ref:"loginForm",scopedSlots:t._u([{key:"default",fn:function(a){var r=a.invalid;return[n("b-form",{staticClass:"auth-login-form mt-2",on:{submit:function(t){t.preventDefault()}}},[n("b-form-group",{attrs:{"label-for":"email",label:"Email"}},[n("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[n("b-form-input",{attrs:{id:"email",name:"login-email",state:!(r.length>0)&&null,placeholder:"john@example.com",autofocus:""},model:{value:t.userEmail,callback:function(a){t.userEmail=a},expression:"userEmail"}}),t._v(" "),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),n("b-form-group",[n("div",{staticClass:"d-flex justify-content-between"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),n("b-link",{attrs:{to:{name:"auth-forgot-password-v1"}}},[n("small",[t._v("Forgot Password?")])])],1),t._v(" "),n("validation-provider",{attrs:{name:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[n("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[n("b-form-input",{staticClass:"form-control-merge",attrs:{id:"password",type:t.passwordFieldType,state:!(r.length>0)&&null,name:"login-password",placeholder:"Password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),t._v(" "),n("b-input-group-append",{attrs:{"is-text":""}},[n("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),t._v(" "),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),n("b-form-group",[n("b-form-checkbox",{attrs:{id:"remember-me",name:"checkbox-1"},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}},[t._v("\n              Remember Me\n            ")])],1),t._v(" "),n("b-button",{attrs:{variant:"primary",type:"submit",block:"",disabled:r}},[t._v("\n            Sign in\n          ")])],1)]}}])}),t._v(" "),n("b-card-text",{staticClass:"text-center mt-2"},[n("span",[t._v("New on our platform? ")]),t._v(" "),n("b-link",{attrs:{to:{name:"auth-register-v1"}}},[n("span",[t._v("Create an account")])])],1),t._v(" "),n("div",{staticClass:"divider my-2"},[n("div",{staticClass:"divider-text"},[t._v("\n          or\n        ")])]),t._v(" "),n("div",{staticClass:"auth-footer-btn d-flex justify-content-center"},[n("b-button",{attrs:{href:"javascript:void(0)",variant:"facebook"}},[n("feather-icon",{attrs:{icon:"FacebookIcon"}})],1),t._v(" "),n("b-button",{attrs:{href:"javascript:void(0)",variant:"twitter"}},[n("feather-icon",{attrs:{icon:"TwitterIcon"}})],1),t._v(" "),n("b-button",{attrs:{href:"javascript:void(0)",variant:"google"}},[n("feather-icon",{attrs:{icon:"MailIcon"}})],1),t._v(" "),n("b-button",{attrs:{href:"javascript:void(0)",variant:"github"}},[n("feather-icon",{attrs:{icon:"GithubIcon"}})],1)],1)],1)],1)])}),[],!1,null,null,null);a.default=w.exports},37:function(t,a,n){"use strict";n.d(a,"l",(function(){return s})),n.d(a,"g",(function(){return A})),n.d(a,"j",(function(){return u})),n.d(a,"e",(function(){return d})),n.d(a,"d",(function(){return l})),n.d(a,"a",(function(){return p})),n.d(a,"h",(function(){return g})),n.d(a,"f",(function(){return c})),n.d(a,"b",(function(){return h})),n.d(a,"c",(function(){return f})),n.d(a,"i",(function(){return v})),n.d(a,"k",(function(){return b})),n.d(a,"m",(function(){return m}));var r=n(32),e=n(140),o=n(547),i=n(546),s=(n(165),n(542),Object(r.c)("required",e.l)),A=Object(r.c)("email",e.g),u=Object(r.c)("min",e.j),d=Object(r.c)("confirmed",e.e),l=(Object(r.c)("regex",e.k),Object(r.c)("between",e.d)),p=Object(r.c)("alpha",e.a),g=Object(r.c)("integer",e.h),c=Object(r.c)("digits",e.f),h=Object(r.c)("alpha-dash",e.b),f=Object(r.c)("alpha-num",e.c),v=Object(r.c)("length",e.i),b=(Object(r.c)("positive",{validate:function(t){return t>=0},message:"Please enter positive number!"}),Object(r.c)("credit-card",{validate:function(t){return/^(?:3[47][0-9]{13})$/.test(t)},message:"It is not valid credit card!"}),Object(r.c)("password",{validate:function(t){return/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/.test(t)},message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"})),m=Object(r.c)("url",{validate:function(t){if(null==t||0===t.length)return!0;return/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(t)},message:"URL is invalid"});Object(r.d)({en:{messages:i.messages,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:o.messages,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}})},53:function(t,a,n){"use strict";var r=n(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("svg",{attrs:{viewBox:"0 0 139 95",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"24"}},[n("defs",[n("linearGradient",{attrs:{id:"linearGradient-1",x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%"}},[n("stop",{attrs:{"stop-color":"#000000",offset:"0%"}}),t._v(" "),n("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"linearGradient-2",x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%"}},[n("stop",{attrs:{"stop-color":"#EEEEEE","stop-opacity":"0",offset:"0%"}}),t._v(" "),n("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1)],1),t._v(" "),n("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"Artboard",transform:"translate(-400.000000, -178.000000)"}},[n("g",{attrs:{id:"Group",transform:"translate(400.000000, 178.000000)"}},[n("path",{staticClass:"text-primary",staticStyle:{fill:"currentColor"},attrs:{id:"Path",d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"}}),t._v(" "),n("path",{attrs:{id:"Path1",d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",fill:"url(#linearGradient-1)",opacity:"0.2"}}),t._v(" "),n("polygon",{attrs:{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}}),t._v(" "),n("polygon",{attrs:{id:"Path-21",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}}),t._v(" "),n("polygon",{attrs:{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"}})])])])])}),[],!1,null,null,null);a.a=e.exports},649:function(t,a,n){var r=n(1244);"string"==typeof r&&(r=[[t.i,r,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n(23)(r,e);r.locals&&(t.exports=r.locals)}}]);