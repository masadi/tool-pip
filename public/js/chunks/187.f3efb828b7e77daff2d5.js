(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{450:function(t,e,i){"use strict";i.d(e,"b",(function(){return V})),i.d(e,"a",(function(){return _}));var n,r=i(8),o=i(5),s=i(12),c=i(2),u=i(26),a=i(19),l=i(22),h=i(6),d=i(17),m=i(35),p=i(7),b=i(203),f=i(38),O=i(49),j=i(21),v=i(13),y=i(1),g=i(27),S=i(54),w=i(66),M=i(64),x=i(31),T=i(28),D=i(68),F=i(55);function L(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function A(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?L(Object(i),!0).forEach((function(e){I(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):L(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function I(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var H=Object(O.a)("value",{type:c.h}),C=H.mixin,$=H.props,k=H.prop,P=H.event,R=[u.m,u.c,u.g,u.d,u.j,u.i],V=Object(y.d)(Object(v.m)(A(A(A(A(A(A({},x.b),$),Object(v.j)(D.b,["required","autofocus"])),w.b),M.b),{},{ariaControls:Object(y.c)(c.u),ariaLabel:Object(y.c)(c.u),formatterFn:Object(y.c)(c.l),inline:Object(y.c)(c.g,!1),labelDecrement:Object(y.c)(c.u,"Decrement"),labelIncrement:Object(y.c)(c.u,"Increment"),locale:Object(y.c)(c.f),max:Object(y.c)(c.p,100),min:Object(y.c)(c.p,1),placeholder:Object(y.c)(c.u),readonly:Object(y.c)(c.g,!1),repeatDelay:Object(y.c)(c.p,500),repeatInterval:Object(y.c)(c.p,100),repeatStepMultiplier:Object(y.c)(c.p,4),repeatThreshold:Object(y.c)(c.p,10),step:Object(y.c)(c.p,1),vertical:Object(y.c)(c.g,!1),wrap:Object(y.c)(c.g,!1)})),o.bb),_=Object(r.c)({name:o.bb,mixins:[S.a,x.a,C,w.a,M.a,T.a],inheritAttrs:!1,props:V,data:function(){return{localValue:Object(j.b)(this[k],null),hasFocus:!1}},computed:{required:function(){return!1},spinId:function(){return this.safeId()},computedInline:function(){return this.inline&&!this.vertical},computedReadonly:function(){return this.readonly&&!this.disabled},computedRequired:function(){return this.required&&!this.computedReadonly&&!this.disabled},computedStep:function(){return Object(j.b)(this.step,1)},computedMin:function(){return Object(j.b)(this.min,1)},computedMax:function(){var t=Object(j.b)(this.max,100),e=this.computedStep,i=this.computedMin;return Object(f.c)((t-i)/e)*e+i},computedDelay:function(){var t=Object(j.c)(this.repeatDelay,0);return t>0?t:500},computedInterval:function(){var t=Object(j.c)(this.repeatInterval,0);return t>0?t:100},computedThreshold:function(){return Object(f.d)(Object(j.c)(this.repeatThreshold,10),1)},computedStepMultiplier:function(){return Object(f.d)(Object(j.c)(this.repeatStepMultiplier,4),1)},computedPrecision:function(){var t=this.computedStep;return Object(f.c)(t)===t?0:(t.toString().split(".")[1]||"").length},computedMultiplier:function(){return Object(f.f)(10,this.computedPrecision||0)},valueAsFixed:function(){var t=this.localValue;return Object(p.g)(t)?"":t.toFixed(this.computedPrecision)},computedLocale:function(){var t=Object(l.b)(this.locale).filter(m.a);return new Intl.NumberFormat(t).resolvedOptions().locale},computedRTL:function(){return Object(b.a)(this.computedLocale)},defaultFormatter:function(){var t=this.computedPrecision;return new Intl.NumberFormat(this.computedLocale,{style:"decimal",useGrouping:!1,minimumIntegerDigits:1,minimumFractionDigits:t,maximumFractionDigits:t,notation:"standard"}).format},computedFormatter:function(){var t=this.formatterFn;return Object(y.b)(t)?t:this.defaultFormatter},computedAttrs:function(){return A(A({},this.bvAttrs),{},{role:"group",lang:this.computedLocale,tabindex:this.disabled?null:"-1",title:this.ariaLabel})},computedSpinAttrs:function(){var t=this.spinId,e=this.localValue,i=this.computedRequired,n=this.disabled,r=this.state,o=this.computedFormatter,s=!Object(p.g)(e);return A(A({dir:this.computedRTL?"rtl":"ltr"},this.bvAttrs),{},{id:t,role:"spinbutton",tabindex:n?null:"0","aria-live":"off","aria-label":this.ariaLabel||null,"aria-controls":this.ariaControls||null,"aria-invalid":!1===r||!s&&i?"true":null,"aria-required":i?"true":null,"aria-valuemin":Object(g.g)(this.computedMin),"aria-valuemax":Object(g.g)(this.computedMax),"aria-valuenow":s?e:null,"aria-valuetext":s?o(e):null})}},watch:(n={},I(n,k,(function(t){this.localValue=Object(j.b)(t,null)})),I(n,"localValue",(function(t){this.$emit(P,t)})),I(n,"disabled",(function(t){t&&this.clearRepeat()})),I(n,"readonly",(function(t){t&&this.clearRepeat()})),n),created:function(){this.$_autoDelayTimer=null,this.$_autoRepeatTimer=null,this.$_keyIsDown=!1},beforeDestroy:function(){this.clearRepeat()},deactivated:function(){this.clearRepeat()},methods:{focus:function(){this.disabled||Object(h.d)(this.$refs.spinner)},blur:function(){this.disabled||Object(h.c)(this.$refs.spinner)},emitChange:function(){this.$emit(s.d,this.localValue)},stepValue:function(t){var e=this.localValue;if(!this.disabled&&!Object(p.g)(e)){var i=this.computedStep*t,n=this.computedMin,r=this.computedMax,o=this.computedMultiplier,s=this.wrap;e=Object(f.g)((e-n)/i)*i+n+i,e=Object(f.g)(e*o)/o,this.localValue=e>r?s?n:r:e<n?s?r:n:e}},onFocusBlur:function(t){this.hasFocus=!this.disabled&&"focus"===t.type},stepUp:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.localValue;Object(p.g)(e)?this.localValue=this.computedMin:this.stepValue(1*t)},stepDown:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.localValue;Object(p.g)(e)?this.localValue=this.wrap?this.computedMax:this.computedMin:this.stepValue(-1*t)},onKeydown:function(t){var e=t.keyCode,i=t.altKey,n=t.ctrlKey,r=t.metaKey;if(!(this.disabled||this.readonly||i||n||r)&&Object(l.a)(R,e)){if(Object(d.f)(t,{propagation:!1}),this.$_keyIsDown)return;this.resetTimers(),Object(l.a)([u.m,u.c],e)?(this.$_keyIsDown=!0,e===u.m?this.handleStepRepeat(t,this.stepUp):e===u.c&&this.handleStepRepeat(t,this.stepDown)):e===u.j?this.stepUp(this.computedStepMultiplier):e===u.i?this.stepDown(this.computedStepMultiplier):e===u.g?this.localValue=this.computedMin:e===u.d&&(this.localValue=this.computedMax)}},onKeyup:function(t){var e=t.keyCode,i=t.altKey,n=t.ctrlKey,r=t.metaKey;this.disabled||this.readonly||i||n||r||Object(l.a)(R,e)&&(Object(d.f)(t,{propagation:!1}),this.resetTimers(),this.$_keyIsDown=!1,this.emitChange())},handleStepRepeat:function(t,e){var i=this,n=t||{},r=n.type,o=n.button;if(!this.disabled&&!this.readonly){if("mousedown"===r&&o)return;this.resetTimers(),e(1);var s=this.computedThreshold,c=this.computedStepMultiplier,u=this.computedDelay,a=this.computedInterval;this.$_autoDelayTimer=setTimeout((function(){var t=0;i.$_autoRepeatTimer=setInterval((function(){e(t<s?1:c),t++}),a)}),u)}},onMouseup:function(t){var e=t||{},i=e.type,n=e.button;"mouseup"===i&&n||(Object(d.f)(t,{propagation:!1}),this.resetTimers(),this.setMouseup(!1),this.emitChange())},setMouseup:function(t){try{Object(d.c)(t,document.body,"mouseup",this.onMouseup,!1),Object(d.c)(t,document.body,"touchend",this.onMouseup,!1)}catch(t){}},resetTimers:function(){clearTimeout(this.$_autoDelayTimer),clearInterval(this.$_autoRepeatTimer),this.$_autoDelayTimer=null,this.$_autoRepeatTimer=null},clearRepeat:function(){this.resetTimers(),this.setMouseup(!1),this.$_keyIsDown=!1}},render:function(t){var e=this,i=this.spinId,n=this.localValue,r=this.computedInline,o=this.computedReadonly,s=this.vertical,c=this.disabled,u=this.computedFormatter,l=!Object(p.g)(n),m=function(n,r,u,a,l,m,p){var b=t(u,{props:{scale:e.hasFocus?1.5:1.25},attrs:{"aria-hidden":"true"}}),f={hasFocus:e.hasFocus},O=function(t){c||o||(Object(d.f)(t,{propagation:!1}),e.setMouseup(!0),Object(h.d)(t.currentTarget),e.handleStepRepeat(t,n))};return t("button",{staticClass:"btn btn-sm border-0 rounded-0",class:{"py-0":!s},attrs:{tabindex:"-1",type:"button",disabled:c||o||m,"aria-disabled":c||o||m?"true":null,"aria-controls":i,"aria-label":r||null,"aria-keyshortcuts":l||null},on:{mousedown:O,touchstart:O},key:a||null,ref:a},[e.normalizeSlot(p,f)||b])},b=m(this.stepUp,this.labelIncrement,F.s,"inc","ArrowUp",!1,a.A),f=m(this.stepDown,this.labelDecrement,F.m,"dec","ArrowDown",!1,a.h),O=t();this.name&&!c&&(O=t("input",{attrs:{type:"hidden",name:this.name,form:this.form||null,value:this.valueAsFixed},key:"hidden"}));var j=t("output",{staticClass:"flex-grow-1",class:{"d-flex":s,"align-self-center":!s,"align-items-center":s,"border-top":s,"border-bottom":s,"border-left":!s,"border-right":!s},attrs:this.computedSpinAttrs,key:"output",ref:"spinner"},[t("bdi",l?u(n):this.placeholder||"")]);return t("div",{staticClass:"b-form-spinbutton form-control",class:[{disabled:c,readonly:o,focus:this.hasFocus,"d-inline-flex":r||s,"d-flex":!r&&!s,"align-items-stretch":!s,"flex-column":s},this.sizeFormClass,this.stateClass],attrs:this.computedAttrs,on:{keydown:this.onKeydown,keyup:this.onKeyup,"!focus":this.onFocusBlur,"!blur":this.onFocusBlur}},s?[b,O,j,f]:[f,O,j,b])}})},491:function(t,e,i){"use strict";i.d(e,"b",(function(){return _})),i.d(e,"a",(function(){return K}));var n,r=i(8),o=i(5),s=i(12),c=i(26),u=i(2),a=i(43),l=i(22),h=i(29),d=i(6),m=i(17),p=i(35),b=i(7),f=i(42),O=i(203),j=i(49),v=i(21),y=i(13),g=i(1),S=i(27),w=i(31),M=i(28),x=i(450),T=i(55);function D(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function F(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?D(Object(i),!0).forEach((function(e){L(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function L(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,r,o=[],s=!0,c=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(o.push(n.value),!e||o.length!==e);s=!0);}catch(t){c=!0,r=t}finally{try{s||null==i.return||i.return()}finally{if(c)throw r}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return I(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var H=Object(j.a)("value",{type:u.u,defaultValue:""}),C=H.mixin,$=H.props,k=H.prop,P=H.event,R=function(t){return"00".concat(t||"").slice(-2)},V=function(t){t=Object(S.g)(t);var e=null,i=null,n=null;if(a.A.test(t)){var r=A(t.split(":").map((function(t){return Object(v.c)(t,null)})),3);e=r[0],i=r[1],n=r[2]}return{hours:Object(b.p)(e)?null:e,minutes:Object(b.p)(i)?null:i,seconds:Object(b.p)(n)?null:n,ampm:Object(b.p)(e)||e<12?0:1}},_=Object(g.d)(Object(y.m)(F(F(F(F({},w.b),$),Object(y.k)(x.b,["labelIncrement","labelDecrement"])),{},{ariaLabelledby:Object(g.c)(u.u),disabled:Object(g.c)(u.g,!1),footerTag:Object(g.c)(u.u,"footer"),headerTag:Object(g.c)(u.u,"header"),hidden:Object(g.c)(u.g,!1),hideHeader:Object(g.c)(u.g,!1),hour12:Object(g.c)(u.g,null),labelAm:Object(g.c)(u.u,"AM"),labelAmpm:Object(g.c)(u.u,"AM/PM"),labelHours:Object(g.c)(u.u,"Hours"),labelMinutes:Object(g.c)(u.u,"Minutes"),labelNoTimeSelected:Object(g.c)(u.u,"No time selected"),labelPm:Object(g.c)(u.u,"PM"),labelSeconds:Object(g.c)(u.u,"Seconds"),labelSelected:Object(g.c)(u.u,"Selected time"),locale:Object(g.c)(u.f),minutesStep:Object(g.c)(u.p,1),readonly:Object(g.c)(u.g,!1),secondsStep:Object(g.c)(u.p,1),showSeconds:Object(g.c)(u.g,!1)})),o.cc),K=Object(r.c)({name:o.cc,mixins:[w.a,C,M.a],props:_,data:function(){var t=V(this[k]||"");return{modelHours:t.hours,modelMinutes:t.minutes,modelSeconds:t.seconds,modelAmpm:t.ampm,isLive:!1}},computed:{computedHMS:function(){return function(t){var e=t.hours,i=t.minutes,n=t.seconds,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Object(b.g)(e)||Object(b.g)(i)||r&&Object(b.g)(n))return"";var o=[e,i,r?n:0];return o.map(R).join(":")}({hours:this.modelHours,minutes:this.modelMinutes,seconds:this.modelSeconds},this.showSeconds)},resolvedOptions:function(){var t=Object(l.b)(this.locale).filter(p.a),e={hour:"numeric",minute:"numeric",second:"numeric"};Object(b.p)(this.hour12)||(e.hour12=!!this.hour12);var i=new Intl.DateTimeFormat(t,e).resolvedOptions(),n=i.hour12||!1,r=i.hourCycle||(n?"h12":"h23");return{locale:i.locale,hour12:n,hourCycle:r}},computedLocale:function(){return this.resolvedOptions.locale},computedLang:function(){return(this.computedLocale||"").replace(/-u-.*$/,"")},computedRTL:function(){return Object(O.a)(this.computedLang)},computedHourCycle:function(){return this.resolvedOptions.hourCycle},is12Hour:function(){return!!this.resolvedOptions.hour12},context:function(){return{locale:this.computedLocale,isRTL:this.computedRTL,hourCycle:this.computedHourCycle,hour12:this.is12Hour,hours:this.modelHours,minutes:this.modelMinutes,seconds:this.showSeconds?this.modelSeconds:0,value:this.computedHMS,formatted:this.formattedTimeString}},valueId:function(){return this.safeId()||null},computedAriaLabelledby:function(){return[this.ariaLabelledby,this.valueId].filter(p.a).join(" ")||null},timeFormatter:function(){var t={hour12:this.is12Hour,hourCycle:this.computedHourCycle,hour:"numeric",minute:"numeric",timeZone:"UTC"};return this.showSeconds&&(t.second="numeric"),Object(h.c)(this.computedLocale,t)},numberFormatter:function(){return new Intl.NumberFormat(this.computedLocale,{style:"decimal",minimumIntegerDigits:2,minimumFractionDigits:0,maximumFractionDigits:0,notation:"standard"}).format},formattedTimeString:function(){var t=this.modelHours,e=this.modelMinutes,i=this.showSeconds&&this.modelSeconds||0;return this.computedHMS?this.timeFormatter(Object(h.b)(Date.UTC(0,0,1,t,e,i))):this.labelNoTimeSelected||" "},spinScopedSlots:function(){var t=this.$createElement;return{increment:function(e){var i=e.hasFocus;return t(T.i,{props:{scale:i?1.5:1.25},attrs:{"aria-hidden":"true"}})},decrement:function(e){var i=e.hasFocus;return t(T.i,{props:{flipV:!0,scale:i?1.5:1.25},attrs:{"aria-hidden":"true"}})}}}},watch:(n={},L(n,k,(function(t,e){if(t!==e&&!Object(f.a)(V(t),V(this.computedHMS))){var i=V(t),n=i.hours,r=i.minutes,o=i.seconds,s=i.ampm;this.modelHours=n,this.modelMinutes=r,this.modelSeconds=o,this.modelAmpm=s}})),L(n,"computedHMS",(function(t,e){t!==e&&this.$emit(P,t)})),L(n,"context",(function(t,e){Object(f.a)(t,e)||this.$emit(s.h,t)})),L(n,"modelAmpm",(function(t,e){var i=this;if(t!==e){var n=Object(b.g)(this.modelHours)?0:this.modelHours;this.$nextTick((function(){0===t&&n>11?i.modelHours=n-12:1===t&&n<12&&(i.modelHours=n+12)}))}})),L(n,"modelHours",(function(t,e){t!==e&&(this.modelAmpm=t>11?1:0)})),n),created:function(){var t=this;this.$nextTick((function(){t.$emit(s.h,t.context)}))},mounted:function(){this.setLive(!0)},activated:function(){this.setLive(!0)},deactivated:function(){this.setLive(!1)},beforeDestroy:function(){this.setLive(!1)},methods:{focus:function(){this.disabled||Object(d.d)(this.$refs.spinners[0])},blur:function(){if(!this.disabled){var t=Object(d.g)();Object(d.f)(this.$el,t)&&Object(d.c)(t)}},formatHours:function(t){var e=this.computedHourCycle;return t=0===(t=this.is12Hour&&t>12?t-12:t)&&"h12"===e?12:0===t&&"h24"===e?24:12===t&&"h11"===e?0:t,this.numberFormatter(t)},formatMinutes:function(t){return this.numberFormatter(t)},formatSeconds:function(t){return this.numberFormatter(t)},formatAmpm:function(t){return 0===t?this.labelAm:1===t?this.labelPm:""},setHours:function(t){this.modelHours=t},setMinutes:function(t){this.modelMinutes=t},setSeconds:function(t){this.modelSeconds=t},setAmpm:function(t){this.modelAmpm=t},onSpinLeftRight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.type,i=t.keyCode;if(!this.disabled&&"keydown"===e&&(i===c.h||i===c.k)){Object(m.f)(t);var n=this.$refs.spinners||[],r=n.map((function(t){return!!t.hasFocus})).indexOf(!0);r=(r+=i===c.h?-1:1)>=n.length?0:r<0?n.length-1:r,Object(d.d)(n[r])}},setLive:function(t){var e=this;t?this.$nextTick((function(){Object(d.B)((function(){e.isLive=!0}))})):this.isLive=!1}},render:function(t){var e=this;if(this.hidden)return t();var i=this.disabled,n=this.readonly,o=this.computedLocale,s=this.computedAriaLabelledby,c=this.labelIncrement,u=this.labelDecrement,a=this.valueId,l=this.focus,h=[],d=function(s,l,d){var m=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},p=e.safeId("_spinbutton_".concat(l,"_"))||null;return h.push(p),t(x.a,L({class:d,props:F({id:p,placeholder:"--",vertical:!0,required:!0,disabled:i,readonly:n,locale:o,labelIncrement:c,labelDecrement:u,wrap:!0,ariaControls:a,min:0},m),scopedSlots:e.spinScopedSlots,on:{change:s},key:l,ref:"spinners"},r.b,!0))},m=function(){return t("div",{staticClass:"d-flex flex-column",class:{"text-muted":i||n},attrs:{"aria-hidden":"true"}},[t(T.j,{props:{shiftV:4,scale:.5}}),t(T.j,{props:{shiftV:-4,scale:.5}})])},b=[];b.push(d(this.setHours,"hours","b-time-hours",{value:this.modelHours,max:23,step:1,formatterFn:this.formatHours,ariaLabel:this.labelHours})),b.push(m()),b.push(d(this.setMinutes,"minutes","b-time-minutes",{value:this.modelMinutes,max:59,step:this.minutesStep||1,formatterFn:this.formatMinutes,ariaLabel:this.labelMinutes})),this.showSeconds&&(b.push(m()),b.push(d(this.setSeconds,"seconds","b-time-seconds",{value:this.modelSeconds,max:59,step:this.secondsStep||1,formatterFn:this.formatSeconds,ariaLabel:this.labelSeconds}))),this.isLive&&this.is12Hour&&b.push(d(this.setAmpm,"ampm","b-time-ampm",{value:this.modelAmpm,max:1,formatterFn:this.formatAmpm,ariaLabel:this.labelAmpm,required:!1})),b=t("div",{staticClass:"d-flex align-items-center justify-content-center mx-auto",attrs:{role:"group",tabindex:i||n?null:"-1","aria-labelledby":s},on:{keydown:this.onSpinLeftRight,click:function(t){t.target===t.currentTarget&&l()}}},b);var f=t("output",{staticClass:"form-control form-control-sm text-center",class:{disabled:i||n},attrs:{id:a,role:"status",for:h.filter(p.a).join(" ")||null,tabindex:i?null:"-1","aria-live":this.isLive?"polite":"off","aria-atomic":"true"},on:{click:l,focus:l}},[t("bdi",this.formattedTimeString),this.computedHMS?t("span",{staticClass:"sr-only"}," (".concat(this.labelSelected,") ")):""]),O=t(this.headerTag,{staticClass:"b-time-header",class:{"sr-only":this.hideHeader}},[f]),j=this.normalizeSlot(),v=j?t(this.footerTag,{staticClass:"b-time-footer"},j):t();return t("div",{staticClass:"b-time d-inline-flex flex-column text-center",attrs:{role:"group",lang:this.computedLang||null,"aria-labelledby":s||null,"aria-disabled":i?"true":null,"aria-readonly":n&&!i?"true":null}},[O,b,v])}})}}]);