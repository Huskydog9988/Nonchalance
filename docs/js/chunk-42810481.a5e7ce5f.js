(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42810481"],{"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),a=n("e2cc"),o=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,p=n("69f3"),v=p.set,h=p.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){s(t,l,e),v(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&c(r,t[u],t,n)})),p=h(e),b=function(t,e,n){var r,i,a=p(t),o=g(t,e);return o?o.value=n:(a.last=o={index:i=d(e,!0),key:e,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),f?a.size++:t.size++,"F"!==i&&(a.index[i]=o)),t},g=function(t,e){var n,r=p(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return a(l.prototype,{clear:function(){var t=this,e=p(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),r=g(e,t);if(r){var i=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=i),i&&(i.previous=a),n.first==r&&(n.first=i),n.last==r&&(n.last=a),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=p(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),a(l.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),f&&r(l.prototype,"size",{get:function(){return p(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",i=h(e),a=h(r);u(t,e,(function(t,e){v(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("94ca"),o=n("6eeb"),s=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),f=n("d039"),d=n("1c7e"),p=n("d44e"),v=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),g=h?"set":"add",y=i[t],j=y&&y.prototype,O=y,m={},x=function(t){var e=j[t];o(j,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(a(t,"function"!=typeof y||!(b||j.forEach&&!f((function(){(new y).entries().next()})))))O=n.getConstructor(e,t,h,g),s.REQUIRED=!0;else if(a(t,!0)){var k=new O,w=k[g](b?{}:-0,1)!=k,S=f((function(){k.has(1)})),C=d((function(t){new y(t)})),B=!b&&f((function(){var t=new y,e=5;while(e--)t[g](e,e);return!t.has(-0)}));C||(O=e((function(e,n){u(e,O,t);var r=v(new y,e,O);return void 0!=n&&c(n,r[g],r,h),r})),O.prototype=j,j.constructor=O),(S||B)&&(x("delete"),x("has"),h&&x("get")),(B||w)&&x(g),b&&j.clear&&delete j.clear}return m[t]=O,r({global:!0,forced:O!=y},m),p(O,t),b||n.setStrong(O,t,h),O}},b5b6:function(t,e,n){},d9f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("99af"),n("b64b"),n("ac1f"),n("1276"),n("498a");var r=n("5530"),i=n("3835"),a=n("b85c"),o=n("80d2"),s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,n={},r=Object(a["a"])(t.split(s.styleList));try{for(r.s();!(e=r.n()).done;){var c=e.value,u=c.split(s.styleProp),l=Object(i["a"])(u,2),f=l[0],d=l[1];f=f.trim(),f&&("string"===typeof d&&(d=d.trim()),n[Object(o["a"])(f)]=d)}}catch(p){r.e(p)}finally{r.f()}return n}function u(){var t,e,n={},i=arguments.length;while(i--)for(var a=0,o=Object.keys(arguments[i]);a<o.length;a++)switch(t=o[a],t){case"class":case"style":case"directives":if(!arguments[i][t])break;if(Array.isArray(n[t])||(n[t]=[]),"style"===t){var s=void 0;s=Array.isArray(arguments[i].style)?arguments[i].style:[arguments[i].style];for(var u=0;u<s.length;u++){var l=s[u];"string"===typeof l&&(s[u]=c(l))}arguments[i].style=s}n[t]=n[t].concat(arguments[i][t]);break;case"staticClass":if(!arguments[i][t])break;void 0===n[t]&&(n[t]=""),n[t]&&(n[t]+=" "),n[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":if(!arguments[i][t])break;n[t]||(n[t]={});for(var f=n[t],d=0,p=Object.keys(arguments[i][t]||{});d<p.length;d++)e=p[d],f[e]?f[e]=Array().concat(f[e],arguments[i][t][e]):f[e]=arguments[i][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;n[t]||(n[t]={}),n[t]=Object(r["a"])(Object(r["a"])({},arguments[i][t]),n[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[t]||(n[t]=arguments[i][t])}return n}},fd2d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"primary",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"primary py-4 text-center white--text",attrs:{cols:"2"}},[t._v(" ©2020 "),n("strong",[t._v("Huskydog9988")])])],1)],1)},i=[],a={data:function(){return{}}},o=a,s=n("2877"),c=n("6544"),u=n.n(c),l=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),f=n("5530"),d=(n("4b85"),n("2b0e")),p=n("d9f7"),v=n("80d2"),h=["sm","md","lg","xl"],b=function(){return h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),g=function(){return h.reduce((function(t,e){return t["offset"+Object(v["r"])(e)]={type:[String,Number],default:null},t}),{})}(),y=function(){return h.reduce((function(t,e){return t["order"+Object(v["r"])(e)]={type:[String,Number],default:null},t}),{})}(),j={col:Object.keys(b),offset:Object.keys(g),order:Object.keys(y)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var i=e.replace(t,"");r+="-".concat(i)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var m=new Map,x=d["default"].extend({name:"v-col",functional:!0,props:Object(f["a"])(Object(f["a"])(Object(f["a"])(Object(f["a"])({cols:{type:[Boolean,String,Number],default:!1}},b),{},{offset:{type:[String,Number],default:null}},g),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,i=e.children,a=(e.parent,"");for(var o in n)a+=String(n[o]);var s=m.get(a);return s||function(){var t,e;for(e in s=[],j)j[e].forEach((function(t){var r=n[t],i=O(e,t,r);i&&s.push(i)}));var r=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!r||!n.cols},Object(l["a"])(t,"col-".concat(n.cols),n.cols),Object(l["a"])(t,"offset-".concat(n.offset),n.offset),Object(l["a"])(t,"order-".concat(n.order),n.order),Object(l["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),m.set(a,s)}(),t(n.tag,Object(p["a"])(r,{class:s}),i)}}),k=(n("c7cd"),n("b5b6"),n("3a66")),w=n("8dd9"),S=n("d10f"),C=n("58df"),B=Object(C["a"])(w["a"],Object(k["a"])("footer",["height","inset"]),S["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(f["a"])(Object(f["a"])({},w["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(f["a"])(Object(f["a"])({},w["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(v["d"])(t),left:Object(v["d"])(this.computedLeft),right:Object(v["d"])(this.computedRight),bottom:Object(v["d"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),N=(n("99af"),n("2532"),["sm","md","lg","xl"]),z=["start","end","center"];function P(t,e){return N.reduce((function(n,r){return n[t+Object(v["r"])(r)]=e(),n}),{})}var A=function(t){return[].concat(z,["baseline","stretch"]).includes(t)},E=P("align",(function(){return{type:String,default:null,validator:A}})),L=function(t){return[].concat(z,["space-between","space-around"]).includes(t)},$=P("justify",(function(){return{type:String,default:null,validator:L}})),F=function(t){return[].concat(z,["space-between","space-around","stretch"]).includes(t)},R=P("alignContent",(function(){return{type:String,default:null,validator:F}})),I={align:Object.keys(E),justify:Object.keys($),alignContent:Object.keys(R)},M={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=M[t];if(null!=n){if(e){var i=e.replace(t,"");r+="-".concat(i)}return r+="-".concat(n),r.toLowerCase()}}var V=new Map,G=d["default"].extend({name:"v-row",functional:!0,props:Object(f["a"])(Object(f["a"])(Object(f["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:A}},E),{},{justify:{type:String,default:null,validator:L}},$),{},{alignContent:{type:String,default:null,validator:F}},R),render:function(t,e){var n=e.props,r=e.data,i=e.children,a="";for(var o in n)a+=String(n[o]);var s=V.get(a);return s||function(){var t,e;for(e in s=[],I)I[e].forEach((function(t){var r=n[t],i=_(e,t,r);i&&s.push(i)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(l["a"])(t,"align-".concat(n.align),n.align),Object(l["a"])(t,"justify-".concat(n.justify),n.justify),Object(l["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),V.set(a,s)}(),t(n.tag,Object(p["a"])(r,{staticClass:"row",class:s}),i)}}),H=Object(s["a"])(o,r,i,!1,null,null,null);e["default"]=H.exports;u()(H,{VCol:x,VFooter:B,VRow:G})}}]);