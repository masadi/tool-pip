(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{105:function(t,a,s){"use strict";s.d(a,"b",(function(){return o})),s.d(a,"c",(function(){return n})),s.d(a,"a",(function(){return l})),s.d(a,"d",(function(){return d}));var r=s(81),e=s(343),i=s(75),c=s(9),o=function(t){return"object"===Object(e.a)(t)&&null!==t},n=function(t){var a=new Date;return t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()},l=function(t){return i.a.resolve(t).route.path===i.a.currentRoute.path},d=function(){var t=Object(c.getCurrentInstance)().proxy,a=Object(c.reactive)({route:t.$route});return Object(c.watch)((function(){return t.$route}),(function(t){a.route=t})),Object(r.a)(Object(r.a)({},Object(c.toRefs)(a)),{},{router:t.$router})}},1896:function(t,a,s){"use strict";s.r(a);var r=s(1809),e=s(342),i=(s(121),s(1811)),c=s(534),o={components:{BCard:i.a,BAvatar:c.a},props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String,default:""},color:{type:String,default:"primary"}}},n=s(0),l=Object(n.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-card",{staticClass:"text-center"},[s("b-avatar",{staticClass:"mb-1",attrs:{variant:"light-"+t.color,size:"45"}},[s("feather-icon",{attrs:{size:"21",icon:t.icon}})],1),t._v(" "),s("div",{staticClass:"truncate"},[s("h2",{staticClass:"mb-25 font-weight-bolder"},[t._v("\n      "+t._s(t.statistic)+"\n    ")]),t._v(" "),s("span",[t._v(t._s(t.statisticTitle))])])],1)}),[],!1,null,null,null).exports,d=s(338),u={components:{BCard:i.a,BCardBody:d.a,BAvatar:c.a},props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String,default:""},color:{type:String,default:"primary"}}},h=Object(n.a)(u,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[s("div",{staticClass:"truncate"},[s("h2",{staticClass:"mb-25 font-weight-bolder"},[t._v("\n        "+t._s(t.statistic)+"\n      ")]),t._v(" "),s("span",[t._v(t._s(t.statisticTitle))])]),t._v(" "),s("b-avatar",{attrs:{variant:"light-"+t.color,size:"45"}},[s("feather-icon",{attrs:{size:"21",icon:t.icon}})],1)],1)],1)}),[],!1,null,null,null).exports,b=(s(74),s(39)),p=s.n(b),f=s(18),m={grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}},theme:{monochrome:{enabled:!0,color:f.b.primary,shadeTo:"light",shadeIntensity:.65}}},v={grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:[f.b.primary],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}},g={components:{VueApexCharts:p.a,BCard:i.a,BCardBody:d.a,BAvatar:c.a},props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String,default:""},color:{type:String,default:"primary"},chartData:{type:Array,default:function(){return[]}},chartOptions:{type:Object,default:null}},computed:{chartOptionsComputed:function(){if(null===this.chartOptions){var t=JSON.parse(JSON.stringify(m));return t.theme.monochrome.color=f.b[this.color],t}return this.chartOptions}}},y=Object(n.a)(g,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"pb-0"},[s("b-avatar",{staticClass:"mb-1",attrs:{variant:"light-"+t.color,size:"45"}},[s("feather-icon",{attrs:{size:"21",icon:t.icon}})],1),t._v(" "),s("div",{staticClass:"truncate"},[s("h2",{staticClass:"mb-25 font-weight-bolder"},[t._v("\n        "+t._s(t.statistic)+"\n      ")]),t._v(" "),s("span",[t._v(t._s(t.statisticTitle))])])],1),t._v(" "),s("vue-apex-charts",{attrs:{type:"area",height:"100",width:"100%",options:t.chartOptionsComputed,series:t.chartData}})],1)}),[],!1,null,null,null).exports,C=(s(449),{components:{VueApexCharts:p.a,BCard:i.a,BCardBody:d.a,BAvatar:c.a},props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String,default:""},color:{type:String,default:"primary"},chartData:{type:Array,default:function(){return[]}},chartOptions:{type:Object,default:null}},computed:{chartOptionsComputed:function(){if(null===this.chartOptions){var t=JSON.parse(JSON.stringify(v));return t.fill.gradient.gradientToColors=[this.gradientToColor(this.color)],t.colors=[f.b[this.color]],t}return this.chartOptions}},methods:{gradientToColor:function(t){return{primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794",info:"#59E0F0",secondary:"#B4B9BF",light:"#D0D4DB",dark:"#919191"}[t]}}}),_=Object(n.a)(C,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"d-flex justify-content-between align-items-center pb-0"},[s("div",{staticClass:"truncate"},[s("h2",{staticClass:"font-weight-bolder"},[t._v("\n        "+t._s(t.statistic)+"\n      ")]),t._v(" "),s("span",[t._v(t._s(t.statisticTitle))])]),t._v(" "),s("b-avatar",{attrs:{variant:"light-"+t.color,size:"45"}},[s("feather-icon",{attrs:{size:"21",icon:t.icon}})],1)],1),t._v(" "),s("vue-apex-charts",{attrs:{type:"line",height:"100",width:"100%",options:t.chartOptionsComputed,series:t.chartData}})],1)}),[],!1,null,null,null).exports,w=s(50),x={components:{BCard:i.a,VueApexCharts:p.a},data:function(){return{statisticsOrder:{series:[{name:"2020",data:[45,85,65,45,65]}],chartOptions:{chart:{type:"bar",stacked:!0,toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0,top:-15,bottom:-15}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%",startingShape:"rounded",colors:{backgroundBarColors:["#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3"],backgroundBarRadius:5}}},legend:{show:!1},dataLabels:{enabled:!1},colors:[f.b.warning],xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}}}}}},S=Object(n.a)(x,(function(){var t=this.$createElement,a=this._self._c||t;return a("b-card",{attrs:{"body-class":"pb-50"}},[a("h6",[this._v("Orders")]),this._v(" "),a("h2",{staticClass:"font-weight-bolder mb-1"},[this._v("\n    2,76k\n  ")]),this._v(" "),a("vue-apex-charts",{attrs:{height:"70",options:this.statisticsOrder.chartOptions,series:this.statisticsOrder.series}})],1)}),[],!1,null,null,null).exports,O={components:{BCard:i.a,VueApexCharts:p.a},data:function(){return{statisticsProfit:{series:[{data:[0,20,5,30,15,45]}],chartOptions:{chart:{type:"line",toolbar:{show:!1},zoom:{enabled:!1}},grid:{borderColor:"#EBEBEB",strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-30,bottom:-10}},stroke:{width:3},colors:[f.b.info],markers:{size:2,colors:f.b.info,strokeColors:f.b.info,strokeWidth:2,strokeOpacity:1,strokeDashArray:0,fillOpacity:1,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:"#ffffff",strokeColor:f.b.info,size:5}],shape:"circle",radius:2,hover:{size:3}},xaxis:{labels:{show:!0,style:{fontSize:"0px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}}}}}},B=Object(n.a)(O,(function(){var t=this.$createElement,a=this._self._c||t;return a("b-card",{staticClass:"card-tiny-line-stats",attrs:{"body-class":"pb-50"}},[a("h6",[this._v("Profit")]),this._v(" "),a("h2",{staticClass:"font-weight-bolder mb-1"},[this._v("\n    6,24k\n  ")]),this._v(" "),a("vue-apex-charts",{attrs:{height:"70",options:this.statisticsProfit.chartOptions,series:this.statisticsProfit.series}})],1)}),[],!1,null,null,null).exports,k=s(340),I=s(337),D=s(1810),T=s(1815),A=s(537),z=s(536),j={components:{BRow:r.a,BCol:e.a,BCard:i.a,BCardHeader:k.a,BCardTitle:I.a,BCardText:D.a,BCardBody:d.a,BMedia:T.a,BAvatar:c.a,BMediaAside:A.a,BMediaBody:z.a},data:function(){return{statisticsItems:[{icon:"TrendingUpIcon",color:"light-primary",title:"230k",subtitle:"Sales",customClass:"mb-2 mb-xl-0"},{icon:"UserIcon",color:"light-info",title:"8.549k",subtitle:"Customers",customClass:"mb-2 mb-xl-0"},{icon:"BoxIcon",color:"light-danger",title:"1.423k",subtitle:"Products",customClass:"mb-2 mb-sm-0"},{icon:"DollarSignIcon",color:"light-success",title:"$9745",subtitle:"Revenue",customClass:""}]}}},$=Object(n.a)(j,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-card",{staticClass:"card-statistics",attrs:{"no-body":""}},[s("b-card-header",[s("b-card-title",[t._v("Statistics")]),t._v(" "),s("b-card-text",{staticClass:"mr-25 mb-0"},[t._v("\n      Updated 1 month ago\n    ")])],1),t._v(" "),s("b-card-body",{staticClass:"statistics-body"},[s("b-row",t._l(t.statisticsItems,(function(a){return s("b-col",{key:a.icon,staticClass:"mb-2 mb-md-0",class:a.customClass,attrs:{md:"3",sm:"6"}},[s("b-media",{attrs:{"no-body":""}},[s("b-media-aside",{staticClass:"mr-2"},[s("b-avatar",{attrs:{size:"48",variant:a.color}},[s("feather-icon",{attrs:{size:"24",icon:a.icon}})],1)],1),t._v(" "),s("b-media-body",{staticClass:"my-auto"},[s("h4",{staticClass:"font-weight-bolder mb-0"},[t._v("\n              "+t._s(a.title)+"\n            ")]),t._v(" "),s("b-card-text",{staticClass:"font-small-3 mb-0"},[t._v("\n              "+t._s(a.subtitle)+"\n            ")])],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null).exports,F={components:{BRow:r.a,BCol:e.a,StatisticCardVertical:l,StatisticCardHorizontal:h,StatisticCardWithAreaChart:y,StatisticCardWithLineChart:_,CardStatisticOrderChart:S,CardStatisticProfitChart:B,CardStatisticsGroup:$},data:function(){return{subscribersGained:{},revenueGenerated:{},quarterlySales:{},ordersRecevied:{},siteTraffic:{},activeUsers:{},newsletter:{}}},created:function(){var t=this;this.$http.get("/card/card-statistics/subscribers").then((function(a){t.subscribersGained=a.data})),this.$http.get("/card/card-statistics/revenue").then((function(a){t.revenueGenerated=a.data})),this.$http.get("/card/card-statistics/sales").then((function(a){t.quarterlySales=a.data})),this.$http.get("/card/card-statistics/orders").then((function(a){t.ordersRecevied=a.data})),this.$http.get("/card/card-statistics/site-traffic").then((function(a){t.siteTraffic=a.data})),this.$http.get("/card/card-statistics/active-users").then((function(a){t.activeUsers=a.data})),this.$http.get("/card/card-statistics/newsletter").then((function(a){t.newsletter=a.data}))},methods:{kFormatter:w.e}},R=Object(n.a)(F,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-row",{staticClass:"match-height"},[s("b-col",{attrs:{lg:"2",cols:"6"}},[s("card-statistic-order-chart")],1),t._v(" "),s("b-col",{attrs:{lg:"2",cols:"6"}},[s("card-statistic-profit-chart")],1),t._v(" "),s("b-col",{attrs:{lg:"8",cols:"12"}},[s("card-statistics-group")],1)],1),t._v(" "),s("b-row",{staticClass:"match-height"},[s("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[s("statistic-card-vertical",{attrs:{icon:"EyeIcon",statistic:"36.9k","statistic-title":"Views",color:"info"}})],1),t._v(" "),s("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[s("statistic-card-vertical",{attrs:{color:"warning",icon:"MessageSquareIcon",statistic:"12k","statistic-title":"Comments"}})],1),t._v(" "),s("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[s("statistic-card-vertical",{attrs:{color:"danger",icon:"ShoppingBagIcon",statistic:"97.8k","statistic-title":"Orders"}})],1),t._v(" "),s("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[s("statistic-card-vertical",{attrs:{color:"primary",icon:"HeartIcon",statistic:"26.8","statistic-title":"Favorited"}})],1),t._v(" "),s("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[s("statistic-card-vertical",{attrs:{color:"success",icon:"AwardIcon",statistic:"689","statistic-title":"Reviews"}})],1),t._v(" "),s("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[s("statistic-card-vertical",{attrs:{"hide-chart":"",color:"danger",icon:"TruckIcon",statistic:"2.1k","statistic-title":"Returns"}})],1)],1),t._v(" "),s("b-row",[s("b-col",{attrs:{lg:"3",sm:"6"}},[s("statistic-card-horizontal",{attrs:{icon:"CpuIcon",statistic:"86%","statistic-title":"CPU Usage"}})],1),t._v(" "),s("b-col",{attrs:{lg:"3",sm:"6"}},[s("statistic-card-horizontal",{attrs:{icon:"ServerIcon",color:"success",statistic:"1.2gb","statistic-title":"Memory Usage"}})],1),t._v(" "),s("b-col",{attrs:{lg:"3",sm:"6"}},[s("statistic-card-horizontal",{attrs:{icon:"ActivityIcon",color:"danger",statistic:"0.1%","statistic-title":"Downtime Ratio"}})],1),t._v(" "),s("b-col",{attrs:{lg:"3",sm:"6"}},[s("statistic-card-horizontal",{attrs:{icon:"AlertOctagonIcon",color:"warning",statistic:"13","statistic-title":"Issues Found"}})],1)],1),t._v(" "),s("b-row",[s("b-col",{attrs:{lg:"3",sm:"6"}},[t.subscribersGained.analyticsData?s("statistic-card-with-area-chart",{attrs:{icon:"UsersIcon",statistic:t.kFormatter(t.subscribersGained.analyticsData.subscribers),"statistic-title":"Subscribers Gained","chart-data":t.subscribersGained.series}}):t._e()],1),t._v(" "),s("b-col",{attrs:{lg:"3",sm:"6"}},[t.revenueGenerated.analyticsData?s("statistic-card-with-area-chart",{attrs:{icon:"CreditCardIcon",color:"success",statistic:t.kFormatter(t.revenueGenerated.analyticsData.revenue),"statistic-title":"Revenue Generated","chart-data":t.revenueGenerated.series}}):t._e()],1),t._v(" "),s("b-col",{attrs:{lg:"3",sm:"6"}},[t.quarterlySales.analyticsData?s("statistic-card-with-area-chart",{attrs:{icon:"ShoppingCartIcon",color:"danger",statistic:t.kFormatter(t.quarterlySales.analyticsData.sales),"statistic-title":"Quarterly Sales","chart-data":t.quarterlySales.series}}):t._e()],1),t._v(" "),s("b-col",{attrs:{lg:"3",sm:"6"}},[t.ordersRecevied.analyticsData?s("statistic-card-with-area-chart",{attrs:{icon:"PackageIcon",color:"warning",statistic:t.kFormatter(t.ordersRecevied.analyticsData.orders),"statistic-title":"Orders Received","chart-data":t.ordersRecevied.series}}):t._e()],1)],1),t._v(" "),s("b-row",[s("b-col",{attrs:{md:"4",sm:"6"}},[s("statistic-card-with-line-chart",{attrs:{icon:"MonitorIcon",statistic:"78.9k","statistic-title":"Site Traffic","chart-data":t.siteTraffic.series}})],1),t._v(" "),s("b-col",{attrs:{md:"4",sm:"6"}},[s("statistic-card-with-line-chart",{attrs:{icon:"UserCheckIcon",color:"success",statistic:"659.8k","statistic-title":"Active Users","chart-data":t.activeUsers.series}})],1),t._v(" "),s("b-col",{attrs:{md:"4",sm:"6"}},[s("statistic-card-with-line-chart",{attrs:{icon:"MailIcon",color:"warning",statistic:"28.7k","statistic-title":"Newsletter","chart-data":t.newsletter.series}})],1)],1)],1)}),[],!1,null,null,null);a.default=R.exports},50:function(t,a,s){"use strict";s.d(a,"e",(function(){return e})),s.d(a,"f",(function(){return i})),s.d(a,"a",(function(){return c})),s.d(a,"c",(function(){return o})),s.d(a,"d",(function(){return n})),s.d(a,"b",(function(){return l}));s(244),s(40),s(298),s(165),s(1036),s(190),s(177),s(52),s(535),s(191),s(345);var r=s(105),e=function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t},i=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!t)return"";var s=t.toString(),r=s.split(a),e=[];return r.forEach((function(t){var a=t.charAt(0).toUpperCase()+t.slice(1);e.push(a)})),e.join(" ")},c=function(t){return t?t.split(" ").map((function(t){return t.charAt(0).toUpperCase()})).join(""):""},o=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return t?new Intl.DateTimeFormat("en-US",a).format(new Date(t)):t},n=function(t){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=new Date(t),e={month:"short",day:"numeric"};return a&&Object(r.c)(s)&&(e={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",e).format(new Date(t))},l=function(t){return t.replace(/<\/?[^>]+(>|$)/g,"")}}}]);