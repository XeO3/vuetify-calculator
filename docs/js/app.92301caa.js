(function(t){function e(e){for(var r,l,c=e[0],o=e[1],s=e[2],p=0,d=[];p<c.length;p++)l=c[p],a[l]&&d.push(a[l][0]),a[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},i=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vuetify-calculator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("ce5b"),i=n.n(a);n("da64");r["default"].use(i.a,{iconfont:"mdi"});var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",[t._v("Vuetify")]),n("span",{staticClass:"font-weight-light"},[t._v("-Calculator-")]),n("span",[t._v("Demo")])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",icon:"",href:"https://github.com/XeO3/vuetify-calculator",target:"_blank"}},[n("v-icon",[t._v("mdi-github-circle")])],1)],1),n("v-content",[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-3":""}},[n("v-card",{attrs:{dark:t.input1_dark,light:!t.input1_dark}},[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[t._v("v-text-field")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.input1_dark=!t.input1_dark}}},[n("v-icon",[t._v("mdi-invert-colors")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.input1_code=!t.input1_code}}},[n("v-icon",[t._v("mdi-code-tags")])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.input1_code,expression:"input1_code"}]})]),n("v-card-text",[n("v-text-field",{attrs:{label:"Result",type:"number",required:"",reverse:"",clearable:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[n("Calculator",{attrs:{flat:"",icon:""},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}},[n("v-icon",[t._v("mdi-calculator")])],1)]},proxy:!0}]),model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}})],1)],1)],1)],1)],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs-center"},[n("v-dialog",{attrs:{width:"400"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("div",t._g({},r),[t._t("default",[n("v-btn",[t._v("\n            Calculator\n          ")])])],2)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"grey lighten-3"},[n("v-card-text",{staticStyle:{"text-align":"right"}},[n("div",{staticClass:"subheading",staticStyle:{"min-height":"24px"}},[t._v(t._s(t.displayFormula))]),n("div",{class:[t.displayResult.length>15?t.displayResult.length>20?"headline":"display-1":"display-2"],staticStyle:{"min-height":"48px"}},[t._v(t._s(t.displayResult))])]),n("v-card-text",{staticClass:"pa-0"},[n("v-container",{attrs:{"grid-list-xs":"","pa-1":""}},[n("v-layout",{attrs:{row:"",wrap:"",pa0:""}},t._l(t.buttons,function(e){return n("v-flex",{key:e.key,attrs:{xs3:""}},[n("v-btn",{class:["ma-0","calcbutton",e.class],attrs:{color:e.color,block:"",depressed:"",large:""},on:{click:function(n){return t.InputKey(e.key)}}},[e.icon?n("v-icon",{attrs:{dark:""}},[t._v(t._s(e.icon))]):[t._v(t._s(e.label))]],2)],1)}),1)],1)],1),n("v-card-actions",[n("v-btn",{staticClass:"calcbutton",attrs:{depressed:"",large:""},on:{click:function(e){t.dialog=!1}}},[t._v("CANCEL")]),n("v-spacer"),n("v-btn",{staticClass:"calcbutton",attrs:{color:"primary",depressed:"",large:""},on:{click:t.commit}},[t._v("OK")])],1)],1)],1)],1)},s=[],u=(n("28a5"),n("6b54"),n("c5f6"),n("a481"),n("6762"),n("2fdb"),n("d225")),p=n("b0b4"),d=n("308d"),v=n("6bb5"),h=n("4e2b"),b=n("9ab4"),f=n("60a3"),y=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(d["a"])(this,Object(v["a"])(e).apply(this,arguments)),t.dialog=!1,t.input={current:"0",operator:"",prev:""},t.buttons=[{key:"ce",label:"CE",color:"grey lighten-2",class:""},{key:"c",label:"C",color:"grey lighten-2",class:""},{key:"back",label:"BACK",icon:"backspace",color:"grey lighten-2",class:""},{key:"÷",label:"÷",color:"grey lighten-2",class:""},{key:"7",label:"7",color:"",class:"headline"},{key:"8",label:"8",color:"",class:"headline"},{key:"9",label:"9",color:"",class:"headline"},{key:"×",label:"×",color:"grey lighten-2",class:""},{key:"4",label:"4",color:"",class:"headline"},{key:"5",label:"5",color:"",class:"headline"},{key:"6",label:"6",color:"",class:"headline"},{key:"-",label:"-",color:"grey lighten-2",class:""},{key:"1",label:"1",color:"",class:"headline"},{key:"2",label:"2",color:"",class:"headline"},{key:"3",label:"3",color:"",class:"headline"},{key:"+",label:"+",color:"grey lighten-2",class:""},{key:"±",label:"±",color:"grey lighten-2",class:""},{key:"0",label:"0",color:"",class:"headline"},{key:".",label:".",color:"grey lighten-2",class:""},{key:"=",label:"=",color:"grey lighten-2",class:""}],t}return Object(h["a"])(e,t),Object(p["a"])(e,[{key:"InputKey",value:function(t){var e=/^\d$/.test(t);if(e){if(this.input.current.length>=12)return;"0"!==this.input.current?this.input.current+=t:this.input.current=t}else{var n=/^[÷×\-+]$/.test(t);if(n)return this.input.current&&(this.input.prev=this.Calc(this.input)||this.input.current),this.input.operator=t,void(this.input.current="");switch(t){case"=":if(this.input.operator){var r=this.Calc(this.input)||"";this.input.prev="".concat(this.input.prev," ").concat(this.input.operator," ").concat(this.input.current," ="),this.input.current=r,this.input.operator=""}return;case".":return void(this.input.current.includes(".")||(this.input.current+="."));case"±":return void(this.input.current.includes("-")?this.input.current=this.input.current.replace("-",""):this.input.current="-"+this.input.current);case"back":return void(this.input.current=this.input.current.substring(0,this.input.current.length-1)||"0");case"c":return this.input.current="0",this.input.operator="",void(this.input.prev="");case"ce":return void(this.input.current="0")}}}},{key:"Calc",value:function(t){var e=Number(t.prev),n=Number(t.current);switch(t.operator){case"÷":var r=e/n,a=r.toString();return a.split(".")[1].length>5?r.toFixed(5):a;case"×":return(e*n).toString();case"-":return(e-n).toString();case"+":return(e+n).toString()}return null}},{key:"commit",value:function(){this.InputKey("="),this.$emit("input",this.input.current),this.dialog=!1}},{key:"displayResult",get:function(){var t=this.input.current.includes("."),e=this.input.current.split("."),n=Number(e[0]),r=e[1];return"".concat(n.toLocaleString()).concat(t?"."+r:"")}},{key:"displayFormula",get:function(){return"".concat(this.input.prev," ").concat(this.input.operator)}}]),e}(f["c"]);b["a"]([Object(f["b"])({default:""})],y.prototype,"value",void 0),y=b["a"]([f["a"]],y);var g=y,k=g,_=n("2877"),m=n("6544"),x=n.n(m),C=n("8336"),V=n("b0af"),w=n("99d9"),O=n("a523"),S=n("169a"),j=n("0e8f"),T=n("132d"),F=n("a722"),P=n("9910"),$=Object(_["a"])(k,o,s,!1,null,"b849d752",null),A=$.exports;x()($,{VBtn:C["a"],VCard:V["a"],VCardActions:w["a"],VCardText:w["b"],VContainer:O["a"],VDialog:S["a"],VFlex:j["a"],VIcon:T["a"],VLayout:F["a"],VSpacer:P["a"]});var E={name:"App",components:{Calculator:A},data:function(){return{input1:"",input1_code:!1,input1_dark:!1}}},I=E,K=n("7496"),N=n("549c"),R=n("0789"),M=n("2677"),B=n("71d9"),L=n("2a7f"),D=Object(_["a"])(I,l,c,!1,null,null,null),J=D.exports;x()(D,{VApp:K["a"],VBtn:C["a"],VCard:V["a"],VCardText:w["b"],VContent:N["a"],VExpandTransition:R["a"],VFlex:j["a"],VIcon:T["a"],VSpacer:P["a"],VTextField:M["a"],VToolbar:B["a"],VToolbarTitle:L["a"]}),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(J)}}).$mount("#app")}});
//# sourceMappingURL=app.92301caa.js.map