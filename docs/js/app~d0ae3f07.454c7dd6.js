(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~d0ae3f07"],{0:function(t,e,i){t.exports=i("56d7")},4898:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),s=i("4eb5"),a=i.n(s),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Nonchalance Logo",contain:"",src:t.logoPath,transition:"scale-transition",width:"40"}}),i("span",{staticClass:"mr-2"},[t._v("Nonchalance Timeline")])],1),i("v-spacer"),i("Sort",{attrs:{eventBus:t.eventBus},on:{isLoading:function(e){t.isLoading=e}}}),i("Settings",{attrs:{eventBus:t.eventBus},on:{isLoading:function(e){t.isLoading=e}}}),i("Info")],1),i("v-main",{staticClass:"px-6"},[i("v-alert",{attrs:{type:"warning",dark:"",dense:"",dismissible:"","close-text":"Close Warning"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v("This timeline has been deprecated. Please refer to "),i("strong",[i("a",{staticStyle:{color:"white"},attrs:{href:"https://www.crystoreinc.com/"}},[t._v("crystoreinc.com")])]),t._v(" for the offical timeline.")]),i("v-overlay",{attrs:{value:t.isLoading}},[i("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),i("Timeline",{attrs:{eventBus:t.eventBus},on:{isLoading:function(e){t.isLoading=e}}})],1),i("Footer")],1)},r=[],l=(i("d3b7"),i("ac1f"),i("3ca3"),i("841c"),i("ddb0"),i("2b3d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline",attrs:{id:"Timeline"}},t._l(t.months,(function(e){return i("div",{key:e.id},[i("div",{staticClass:"timeline-month"},[t._v(" "+t._s(e.name)+" "),i("span",[t._v("Days")])]),t._l(e.days,(function(e){return i("div",{key:e.id,staticClass:"timeline-section"},[i("div",{staticClass:"timeline-date"},[t._v(t._s(t.format(new Date(e.date.concat(" 00:00")),"eeee, do")))]),i("div",{staticClass:"row"},t._l(e.event,(function(o){return i("div",{key:o.id,staticClass:"col-sm-5"},[i("div",{staticClass:"timeline-box"},[i("div",{staticClass:"box-title",attrs:{id:o.id}},[i("i",{class:o.iconClass,attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(o.title)+" ")]),i("div",{staticClass:"box-content"},[o.outSideLinks?i("div",[o.commentary?i("Commentary"):t._e(),o.Bridge?i("Bridge",{attrs:{bridge:o.Bridge}}):t._e(),i("EventLink",{attrs:{eventLink:t.createLink(o.id)}}),t._l(Object.keys(o.outSideLinks),(function(e){return i("v-btn",{key:e,attrs:{tile:"","x-small":"",color:"blue-grey darken-4",target:"_blank",href:o.outSideLinks[e]}},[t._v(t._s(e))])}))],2):i("div",[o.commentary?i("Commentary"):t._e(),o.Bridge?i("Bridge",{attrs:{bridge:o.Bridge}}):t._e(),i("EventLink",{attrs:{eventLink:t.createLink(o.id)}})],1),i("div",{staticClass:"box-item",domProps:{innerHTML:t._s(t.sanitizer(o.description))}})]),t.$root.debug?i("div",{staticClass:"box-footer"},[t.$root.showDates?i("p",{staticStyle:{display:"inline"}},[t._v(t._s(e.date))]):t._e(),t._m(0,!0),t._l(t.stories(o.stories),(function(e){return i("p",{key:e,staticStyle:{display:"inline"}},[t._v(t._s(e)+" ")])}))],2):i("div",{staticClass:"box-footer"},[t.$root.showDates?i("p",{staticStyle:{display:"inline"}},[t._v(t._s(e.date))]):t._e()])])])})),0)])}))],2)})),0)}),c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticStyle:{display:"inline"}},[i("b",[t._v(" Stories: ")])])}],v=(i("a4d3"),i("e01a"),i("b64b"),i("b85c")),u=i("0e54"),d=i.n(u),m=i("b166"),h=i("7677"),f=i("c0c4"),p=i.n(f),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-tooltip",{attrs:{color:"grey darken-4",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.eventLink,expression:"eventLink",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{icon:"",small:""},on:{click:function(e){t.hover=!t.hover}}},o),[i("i",{staticClass:"fas fa-link",attrs:{alt:"link"}})])]}}]),model:{value:t.hover,callback:function(e){t.hover=e},expression:"hover"}},[i("span",[t._v("Copy link to event")])])},g=[],y={name:"EventLink",props:["eventLink"],data:function(){return{hover:!1,snackbar:!1}},methods:{onCopy:function(t){alert("You just copied: "+t.text)},onError:function(t){alert("Failed to copy texts"),console.error(t)}}},_=y,w=i("2877"),k=i("6544"),$=i.n(k),C=i("8336"),S=i("3a2f"),x=Object(w["a"])(_,b,g,!1,null,null,null),V=x.exports;$()(x,{VBtn:C["a"],VTooltip:S["a"]});var L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-tooltip",{attrs:{color:"grey darken-4",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{icon:"",small:""},on:{click:function(e){t.hover=!t.hover}}},o),[i("i",{staticClass:"fas fa-torii-gate",class:[t.bridge],attrs:{alt:"torii-gate"}})])]}}]),model:{value:t.hover,callback:function(e){t.hover=e},expression:"hover"}},[i("span",[t._v("The event's bridge is: "+t._s(t.bridge))])])},I=[],N={name:"Bridge",props:["bridge"],data:function(){return{hover:!1}}},D=N,j=(i("b5dd"),Object(w["a"])(D,L,I,!1,null,"885e5aac",null)),B=j.exports;$()(j,{VBtn:C["a"],VTooltip:S["a"]});var E={name:"Timeline",props:["story","eventBus"],components:{EventLink:V,Bridge:B,Commentary:function(){return i.e("chunk-2d0c1587").then(i.bind(null,"463b"))}},data:function(){return{months:[],format:m["a"],sanitizer:p.a.sanitize}},methods:{timelineInit:function(){!this.$root.live&&this.$root.story.DispatchesFromElsewhere&&this.$root.story.NewNoologyNetwork&&this.$root.story.JejuneInstitute&&this.$root.story.LatitudeSociety&&this.$root.story.Spoilers&&this.$root.story.Crystore?this.timelineUnsorted():this.timelineSorted()},timelineUnsorted:function(){var t=this;this.months=[];var e="/Nonchalance/months.json";fetch(e).then((function(t){return t.json()})).then((function(e){var i,o=Object(v["a"])(e);try{for(o.s();!(i=o.n()).done;){var s=i.value;t.months.push(s)}}catch(a){o.e(a)}finally{o.f()}t.$emit("isLoading",!1)}))},timelineSorted:function(){var t,e=this;this.months=[],t=this.$root.live?"https://nonchalance-dashbaord.herokuapp.com/months?_sort=date:DESC,days.date:DESC":"/Nonchalance/months.json",fetch(t).then((function(t){return t.json()})).then((function(t){var i,o=Object(v["a"])(t);try{for(o.s();!(i=o.n()).done;){var s=i.value;e.sortMonth(s)}}catch(a){o.e(a)}finally{o.f()}e.$emit("isLoading",!1)}))},sortMonth:function(t){var e,i=[],o=Object(v["a"])(t.days);try{for(o.s();!(e=o.n()).done;){var s,a=e.value,n=[],r=Object(v["a"])(a.event);try{for(r.s();!(s=r.n()).done;){var l=s.value;!this.$root.story.Spoilers&&l.stories.Spoilers||(!this.$root.Commentary&&l.Commentary||!this.$root.story.DispatchesFromElsewhere&&l.stories.DispatchesFromElsewhere||!this.$root.story.NewNoologyNetwork&&l.stories.NewNoologyNetwork||!this.$root.story.JejuneInstitute&&l.stories.JejuneInstitute||!this.$root.story.LatitudeSociety&&l.stories.LatitudeSociety||!this.$root.story.Crystore&&l.stories.Crystore||(this.$root.live&&(l.description=d()(l.description)),n.push(l)))}}catch(c){r.e(c)}finally{r.f()}n.length>0&&(a.event.length=0,a.event=n,i.push(a))}}catch(c){o.e(c)}finally{o.f()}i.length>0&&(i.sort((function(t,e){return Object(h["a"])(new Date(e.date),new Date(t.date))?-1:1})),t.days=[],t.days=i,this.months.push(t))},createLink:function(t){return"https://huskydog9988.github.io/Nonchalance/?event=".concat(t)},stories:function(t){for(var e=[],i=0,o=Object.keys(t);i<o.length;i++){var s=o[i];"_id"!==s&&"id"!==s&&"createdAt"!==s&&"updatedAt"!==s&&(t[s]&&e.push(s))}return e}},created:function(){var t=this;this.timelineInit(),this.eventBus.$on("sort",(function(){t.timelineInit()}))}},T=E,O=(i("f2b0"),Object(w["a"])(T,l,c,!1,null,null,null)),J=O.exports;$()(O,{VBtn:C["a"]});var A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-dialog",{attrs:{scrollable:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),o),[i("i",{staticClass:"fas fa-filter",attrs:{alt:"filter"}})])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[t._v("Filter Options")]),i("v-divider"),i("v-card-text",{staticStyle:{height:"400px"}},[i("v-list-item",[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.story.Crystore,callback:function(e){t.$set(t.$root.story,"Crystore",e)},expression:"$root.story.Crystore"}})],1),i("v-list-item-title",[t._v("Crystore")])],1),i("v-list-item",[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.story.DispatchesFromElsewhere,callback:function(e){t.$set(t.$root.story,"DispatchesFromElsewhere",e)},expression:"$root.story.DispatchesFromElsewhere"}})],1),i("v-list-item-title",[t._v("Dispatches from Elsewhere")])],1),i("v-list-item",[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.story.NewNoologyNetwork,callback:function(e){t.$set(t.$root.story,"NewNoologyNetwork",e)},expression:"$root.story.NewNoologyNetwork"}})],1),i("v-list-item-title",[t._v("New Noology Network")])],1),i("v-list-item",[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.story.JejuneInstitute,callback:function(e){t.$set(t.$root.story,"JejuneInstitute",e)},expression:"$root.story.JejuneInstitute"}})],1),i("v-list-item-title",[t._v("Jejune Institute")])],1),i("v-list-item",[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.story.LatitudeSociety,callback:function(e){t.$set(t.$root.story,"LatitudeSociety",e)},expression:"$root.story.LatitudeSociety"}})],1),i("v-list-item-title",[t._v("Latitude Society")])],1),i("v-list-item",[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.story.Spoilers,callback:function(e){t.$set(t.$root.story,"Spoilers",e)},expression:"$root.story.Spoilers"}})],1),i("v-list-item-title",[t._v("Spoilers")])],1),i("v-list-item",[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.Commentary,callback:function(e){t.$set(t.$root,"Commentary",e)},expression:"$root.Commentary"}})],1),i("v-list-item-title",[t._v("Commentary")])],1)],1),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),i("v-btn",{attrs:{text:"",color:"blue lighten-1"},on:{click:[function(e){t.dialog=!1},function(e){return t.sort()}]}},[t._v("Sort")])],1)],1)],1)],1)},F=[],P={name:"Sort",props:["eventBus"],components:{},data:function(){return{menu:!1,dialogm1:"",dialog:!1}},methods:{sort:function(){this.$root.saveSettings(),this.$emit("isLoading",!0),this.eventBus.$emit("sort")}}},M=P,z=i("b0af"),U=i("99d9"),Q=i("169a"),R=i("ce7e"),H=i("da13"),W=i("1800"),K=i("5d23"),Y=i("b73d"),Z=Object(w["a"])(M,A,F,!1,null,null,null),q=Z.exports;$()(Z,{VBtn:C["a"],VCard:z["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VDialog:Q["a"],VDivider:R["a"],VListItem:H["a"],VListItemAction:W["a"],VListItemTitle:K["c"],VSwitch:Y["a"]});var G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("v-btn",{attrs:{icon:""},on:{click:function(e){t.menu=!0}}},[i("i",{staticClass:"fas fa-cog",attrs:{alt:"settings"}})]),i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"500px",scrollable:""},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-card",[i("v-card-title",[t._v("Settings")]),i("v-divider"),i("v-card-text",{staticStyle:{height:"300px"}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.live,callback:function(e){t.$set(t.$root,"live",e)},expression:"$root.live"}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Live Content")]),i("v-list-item-subtitle",[t._v("More up to date content from CMS server, but largly reduced load times.")])],1)],1),i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.debug,callback:function(e){t.$set(t.$root,"debug",e)},expression:"$root.debug"}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Debug")]),i("v-list-item-subtitle",[t._v("Shows more information. Some of the info shown could be useful to you but is mostly there to debug the code.")])],1)],1),i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-action",[i("v-switch",{attrs:{color:"blue lighten-1"},model:{value:t.$root.showDates,callback:function(e){t.$set(t.$root,"showDates",e)},expression:"$root.showDates"}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Show Dates")]),i("v-list-item-subtitle",[t._v("Shows the exact date of the event for easy referance.")])],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{text:"",color:"blue lighten-1"},on:{click:[function(e){t.menu=!1},function(e){return t.sort()}]}},[t._v("Save")])],1)],1)],1)],1)],1)},X=[],tt={name:"Settings",props:["eventBus"],components:{},data:function(){return{menu:!1}},methods:{sort:function(){this.$root.saveSettings(),this.$emit("isLoading",!0),this.eventBus.$emit("sort")}}},et=tt,it=i("0fd9"),ot=Object(w["a"])(et,G,X,!1,null,null,null),st=ot.exports;$()(ot,{VBtn:C["a"],VCard:z["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VDialog:Q["a"],VDivider:R["a"],VListItem:H["a"],VListItemAction:W["a"],VListItemContent:K["a"],VListItemSubtitle:K["b"],VListItemTitle:K["c"],VRow:it["a"],VSwitch:Y["a"]});var at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-dialog",{attrs:{scrollable:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),o),[i("i",{staticClass:"fas fa-info",attrs:{alt:"info"}})])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[t._v("Info")]),i("v-divider"),i("v-card-text",{staticStyle:{height:"400px"}},[i("v-list-item",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("The timeline was last published on:")]),i("v-list-item-title",[t._v(t._s(t.$root.lastPublishDate))])],1),i("v-list-item",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("Version:")]),i("v-list-item-title",[t._v(t._s(t.$root.timelineVersion))])],1),i("v-list-item",[i("v-list-item-subtitle",[t._v("Contributors:")]),i("v-list-item-title",{staticClass:"text-wrap"},[t._v("Huskydog9988, pinklemonlies, Argonaute, and Orra.")])],1),i("v-list-item",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("Nonchalance Discord:")]),i("v-list-item-title",[i("v-list-item-action",[i("v-btn",{attrs:{icon:"",large:"",left:"",shaped:"",target:"_blank",href:"https://discord.gg/MCPZQ39"}},[i("i",{staticClass:"fab fa-discord",attrs:{alt:"discord"}})])],1)],1)],1),i("v-list-item",[i("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("More timeline info:")]),i("v-list-item-title",[i("v-list-item-action",[i("v-btn",{attrs:{icon:"",large:"",left:"",target:"_blank",href:"https://docs.google.com/document/d/1-82bl0vQRUbIBDE47f63bjoabKc5gJ7br9hvha6cuWQ/edit?usp=sharing"}},[i("i",{staticClass:"fas fa-external-link-alt",attrs:{alt:"outside link"}})])],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)},nt=[],rt={data:function(){return{dialogm1:"",dialog:!1}}},lt=rt,ct=Object(w["a"])(lt,at,nt,!1,null,null,null),vt=ct.exports;$()(ct,{VBtn:C["a"],VCard:z["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VDialog:Q["a"],VDivider:R["a"],VListItem:H["a"],VListItemAction:W["a"],VListItemSubtitle:K["b"],VListItemTitle:K["c"]});var ut=function(){return Promise.all([i.e("npm.vuetify~78934547"),i.e("npm.vuetify~ce053847"),i.e("npm.vuetify~11c2601a"),i.e("npm.vuetify~8138a515"),i.e("chunk-2d237ca6")]).then(i.bind(null,"fd2d"))},dt={name:"App",components:{Timeline:J,Sort:q,Settings:st,Info:vt,Footer:ut},data:function(){return{isLoading:!0,logoPath:"/Nonchalance/nonchalance.svg",eventBus:new o["a"],scrolledTo:!1,alert:!0}},methods:{},watch:{isLoading:function(t){if(!this.scrolledTo&&!t){var e=window.location.search,i=new URLSearchParams(e);if(!i.has("event"))return;var o=i.get("event");setTimeout((function(){var t=document.getElementById(o);t.scrollIntoView({behavior:"smooth",block:"center"})}),2e3)}}}},mt=dt,ht=i("0798"),ft=i("7496"),pt=i("40dc"),bt=i("adda"),gt=i("f6c4"),yt=i("a797"),_t=i("490a"),wt=i("2fa4"),kt=Object(w["a"])(mt,n,r,!1,null,null,null),$t=kt.exports;$()(kt,{VAlert:ht["a"],VApp:ft["a"],VAppBar:pt["a"],VImg:bt["a"],VMain:gt["a"],VOverlay:yt["a"],VProgressCircular:_t["a"],VSpacer:wt["a"]});var Ct=i("f309");i("becf");o["a"].use(Ct["a"]);var St=new Ct["a"]({theme:{dark:!0,themes:{dark:{primary:"#62696d",secondary:"#444950",accent:"#444950",error:"#b71c1c"}},options:{themeCache:{get:function(t){return localStorage.getItem(t)},set:function(t,e){return localStorage.setItem(t,e)}}}},icons:{iconfont:"fa"}});o["a"].config.productionTip=!1,o["a"].use(a.a),new o["a"]({vuetify:St,data:function(){return{story:{Crystore:!0,DispatchesFromElsewhere:!0,NewNoologyNetwork:!0,JejuneInstitute:!0,LatitudeSociety:!0,Spoilers:!0},live:!1,Commentary:!0,debug:!1,showDates:!0,lastPublishDate:"July 6, 2020",timelineVersion:"2.2.0"}},beforeMount:function(){if(localStorage.getItem("story"))try{this.story=JSON.parse(localStorage.getItem("story"))}catch(e){localStorage.removeItem("story")}if(localStorage.getItem("asorted"))try{var t=JSON.parse(localStorage.getItem("asorted"));this.live=t.live,this.debug=t.debug,this.showDates=t.showDates}catch(e){localStorage.removeItem("asorted")}},methods:{saveSettings:function(){var t=this.live,e=this.debug,i=this.showDates,o=JSON.stringify(this.story);localStorage.setItem("story",o);var s=JSON.stringify({live:t,debug:e,showDates:i});localStorage.setItem("asorted",s)}},render:function(t){return t($t)}}).$mount("#app")},"96d1":function(t,e,i){},b5dd:function(t,e,i){"use strict";var o=i("4898"),s=i.n(o);s.a},f2b0:function(t,e,i){"use strict";var o=i("96d1"),s=i.n(o);s.a}},[[0,"runtime","npm.vuetify~78934547","npm.vuetify~ce053847","npm.vuetify~11c2601a","npm.vuetify~8138a515","npm.core-js~93acefaf","npm.core-js~31c671ca","npm.date-fns~4e44fb25","npm.babel~f269b12e","npm.fortawesome~9f159c25","npm.clipboard~1869c72c","npm.dompurify~3ef9df38","npm.marked~b14b8e9e","npm.vue-clipboard2~90a185b0","npm.vue-loader~06e90eef","npm.vue~d2305125","npm.vuetify-loader~32b403ab","npm.webpack~0faa04c6"]]]);