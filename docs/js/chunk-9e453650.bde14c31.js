(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e453650"],{"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),o=n("e2cc"),a=n("0366"),s=n("19aa"),u=n("2266"),c=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,p=n("69f3"),v=p.set,h=p.getterFor;t.exports={getConstructor:function(t,e,n,c){var l=t((function(t,i){s(t,l,e),v(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=i&&u(i,t[c],t,n)})),p=h(e),g=function(t,e,n){var i,r,o=p(t),a=b(t,e);return a?a.value=n:(o.last=a={index:r=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=a),i&&(i.next=a),f?o.size++:t.size++,"F"!==r&&(o.index[r]=a)),t},b=function(t,e){var n,i=p(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(l.prototype,{clear:function(){var t=this,e=p(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),i=b(e,t);if(i){var r=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==i&&(n.first=r),n.last==i&&(n.last=o),f?n.size--:e.size--}return!!i},forEach:function(t){var e,n=p(this),i=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),o(l.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&i(l.prototype,"size",{get:function(){return p(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",r=h(e),o=h(i);c(t,e,(function(t,e){v(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("94ca"),a=n("6eeb"),s=n("f183"),u=n("2266"),c=n("19aa"),l=n("861d"),f=n("d039"),d=n("1c7e"),p=n("d44e"),v=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=h?"set":"add",y=r[t],j=y&&y.prototype,O=y,m={},x=function(t){var e=j[t];a(j,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof y||!(g||j.forEach&&!f((function(){(new y).entries().next()})))))O=n.getConstructor(e,t,h,b),s.REQUIRED=!0;else if(o(t,!0)){var w=new O,S=w[b](g?{}:-0,1)!=w,k=f((function(){w.has(1)})),C=d((function(t){new y(t)})),B=!g&&f((function(){var t=new y,e=5;while(e--)t[b](e,e);return!t.has(-0)}));C||(O=e((function(e,n){c(e,O,t);var i=v(new y,e,O);return void 0!=n&&u(n,i[b],i,h),i})),O.prototype=j,j.constructor=O),(k||B)&&(x("delete"),x("has"),h&&x("get")),(B||S)&&x(b),g&&j.clear&&delete j.clear}return m[t]=O,i({global:!0,forced:O!=y},m),p(O,t),g||n.setStrong(O,t,h),O}},b5b6:function(t,e,n){},fd2d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"primary",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"primary py-4 text-center white--text",attrs:{cols:"2"}},[t._v(" ©2020 "),n("strong",[t._v("Huskydog9988")])])],1)],1)},r=[],o={data:function(){return{}}},a=o,s=n("2877"),u=n("6544"),c=n.n(u),l=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),f=n("5530"),d=(n("4b85"),n("2b0e")),p=n("d9f7"),v=n("80d2"),h=["sm","md","lg","xl"],g=function(){return h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),b=function(){return h.reduce((function(t,e){return t["offset"+Object(v["r"])(e)]={type:[String,Number],default:null},t}),{})}(),y=function(){return h.reduce((function(t,e){return t["order"+Object(v["r"])(e)]={type:[String,Number],default:null},t}),{})}(),j={col:Object.keys(g),offset:Object.keys(b),order:Object.keys(y)};function O(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var m=new Map,x=d["default"].extend({name:"v-col",functional:!0,props:Object(f["a"])(Object(f["a"])(Object(f["a"])(Object(f["a"])({cols:{type:[Boolean,String,Number],default:!1}},g),{},{offset:{type:[String,Number],default:null}},b),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,i=e.data,r=e.children,o=(e.parent,"");for(var a in n)o+=String(n[a]);var s=m.get(o);return s||function(){var t,e;for(e in s=[],j)j[e].forEach((function(t){var i=n[t],r=O(e,t,i);r&&s.push(r)}));var i=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!i||!n.cols},Object(l["a"])(t,"col-".concat(n.cols),n.cols),Object(l["a"])(t,"offset-".concat(n.offset),n.offset),Object(l["a"])(t,"order-".concat(n.order),n.order),Object(l["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),m.set(o,s)}(),t(n.tag,Object(p["a"])(i,{class:s}),r)}}),w=(n("c7cd"),n("b5b6"),n("3a66")),S=n("8dd9"),k=n("d10f"),C=n("58df"),B=Object(C["a"])(S["a"],Object(w["a"])("footer",["height","inset"]),k["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(f["a"])(Object(f["a"])({},S["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(f["a"])(Object(f["a"])({},S["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(v["d"])(t),left:Object(v["d"])(this.computedLeft),right:Object(v["d"])(this.computedRight),bottom:Object(v["d"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),N=(n("99af"),n("2532"),["sm","md","lg","xl"]),z=["start","end","center"];function E(t,e){return N.reduce((function(n,i){return n[t+Object(v["r"])(i)]=e(),n}),{})}var $=function(t){return[].concat(z,["baseline","stretch"]).includes(t)},F=E("align",(function(){return{type:String,default:null,validator:$}})),L=function(t){return[].concat(z,["space-between","space-around"]).includes(t)},P=E("justify",(function(){return{type:String,default:null,validator:L}})),R=function(t){return[].concat(z,["space-between","space-around","stretch"]).includes(t)},I=E("alignContent",(function(){return{type:String,default:null,validator:R}})),M={align:Object.keys(F),justify:Object.keys(P),alignContent:Object.keys(I)},_={align:"align",justify:"justify",alignContent:"align-content"};function V(t,e,n){var i=_[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var G=new Map,H=d["default"].extend({name:"v-row",functional:!0,props:Object(f["a"])(Object(f["a"])(Object(f["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$}},F),{},{justify:{type:String,default:null,validator:L}},P),{},{alignContent:{type:String,default:null,validator:R}},I),render:function(t,e){var n=e.props,i=e.data,r=e.children,o="";for(var a in n)o+=String(n[a]);var s=G.get(o);return s||function(){var t,e;for(e in s=[],M)M[e].forEach((function(t){var i=n[t],r=V(e,t,i);r&&s.push(r)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(l["a"])(t,"align-".concat(n.align),n.align),Object(l["a"])(t,"justify-".concat(n.justify),n.justify),Object(l["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),G.set(o,s)}(),t(n.tag,Object(p["a"])(i,{staticClass:"row",class:s}),r)}}),J=Object(s["a"])(a,i,r,!1,null,null,null);e["default"]=J.exports;c()(J,{VCol:x,VFooter:B,VRow:H})}}]);