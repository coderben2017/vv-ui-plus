!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VV={},e.Vue)}(this,(function(e,t){"use strict";var l={props:{value:Boolean|String},setup:(e,t)=>({toggle:()=>{t.emit("update:value",!e.value)}})};const o=t.createVNode("span",null,null,-1);l.render=function(e,l,n,c,a,r){return t.openBlock(),t.createBlock("button",{class:["vv-switch",{"vv-checked":n.value}],onClick:l[1]||(l[1]=(...e)=>c.toggle(...e))},[o],2)},l.__file="src/lib/Switch.vue";var n={props:{theme:{type:String,default:"button"},size:{type:String,default:"normal"},level:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e){const{size:l,theme:o,level:n}=e;return{classes:t.computed((()=>({[`vv-button-theme-${o}`]:o,[`vv-size-${l}`]:l,[`vv-level-${n}`]:n})))}}};const c={key:0,class:"vv-loadingIndicator"};n.render=function(e,l,o,n,a,r){return t.openBlock(),t.createBlock("button",{class:["vv-button",n.classes],disabled:o.disabled},[o.loading?(t.openBlock(),t.createBlock("span",c)):t.createCommentVNode("v-if",!0),t.renderSlot(e.$slots,"default")],10,["disabled"])},n.__file="src/lib/Button.vue";var a={};a.render=function(e,l,o,n,c,a){return t.openBlock(),t.createBlock("div",null,[t.renderSlot(e.$slots,"default")])},a.__file="src/lib/Tab.vue";var r={props:{selected:{type:String}},setup(e,l){const o=t.ref(null),n=t.ref(null),c=t.ref(null);t.onMounted((()=>{t.watchEffect((()=>{const{width:e}=o.value.getBoundingClientRect(),{left:t}=c.value.getBoundingClientRect(),{left:l}=o.value.getBoundingClientRect();n.value.style.width=e+"px",n.value.style.left=l-t+"px"}),{flush:"post"})}));const r=l.slots.default();r.forEach((e=>{if(e.type!==a)throw new Error("Tabs子标签必须是Tab")}));const s=r.map((e=>e.props.title)),i=t.computed((()=>r.find((t=>t.props.title===e.selected))));return{defaults:r,current:i,titles:s,select:e=>{l.emit("update:selected",e)},selectedItem:o,indicator:n,container:c}}};const s={class:"vv-tabs"},i={class:"vv-tabs-nav",ref:"container"},d={class:"vv-tabs-nav-indicator",ref:"indicator"},u={class:"vv-tabs-content"};r.render=function(e,l,o,n,c,a){return t.openBlock(),t.createBlock("div",s,[t.createVNode("div",i,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(n.titles,((e,l)=>(t.openBlock(),t.createBlock("div",{class:["vv-tabs-nav-item",{selected:e===o.selected}],ref:t=>{e===o.selected&&(n.selectedItem=t)},onClick:t=>n.select(e),key:l},t.toDisplayString(e),11,["onClick"])))),128)),t.createVNode("div",d,null,512)],512),t.createVNode("div",u,[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(n.current),{key:n.current.props.title}))])])},r.__file="src/lib/Tabs.vue";var v={components:{Button:n},props:{visible:{type:Boolean,default:!1},closeOnOverlay:{type:Boolean,default:!1},ok:{type:Function},cancel:{type:Function}},setup(e,t){const l=()=>{t.emit("update:visible",!1)};return{close:l,onClickOverlay:()=>{e.closeOnOverlay&&l()},ok:()=>{e.ok&&!1===e.ok()||l()},cancel:()=>{e.cancel&&e.cancel(),l()}}}};const p={class:"vv-dialog-wrapper"},f={class:"vv-dialog"},k=t.createTextVNode("ok"),b=t.createTextVNode("cancel");v.render=function(e,l,o,n,c,a){const r=t.resolveComponent("Button");return o.visible?(t.openBlock(),t.createBlock(t.Teleport,{key:0,to:"body"},[t.createVNode("div",{class:"vv-dialog-overlay",onClick:l[1]||(l[1]=(...e)=>n.onClickOverlay(...e))}),t.createVNode("div",p,[t.createVNode("div",f,[t.createVNode("header",null,[t.renderSlot(e.$slots,"title"),t.createVNode("span",{class:"vv-dialog-close",onClick:l[2]||(l[2]=(...e)=>n.close(...e))})]),t.createVNode("main",null,[t.renderSlot(e.$slots,"content")]),t.createVNode("footer",null,[t.createVNode(r,{level:"main",onClick:n.ok},{default:t.withCtx((()=>[k])),_:1},8,["onClick"]),t.createVNode(r,{onClick:n.cancel},{default:t.withCtx((()=>[b])),_:1},8,["onClick"])])])])])):t.createCommentVNode("v-if",!0)},v.__file="src/lib/Dialog.vue";e.Button=n,e.Dialog=v,e.Switch=l,e.Tab=a,e.Tabs=r,e.openDialog=e=>{const{title:l,content:o,ok:n,cancel:c}=e,a=document.createElement("div");document.body.appendChild(a);const r=t.createApp({render:()=>t.h(v,{visible:!0,"onUpdate:visible":e=>{!1===e&&s()},ok:n,cancel:c},{title:l,content:o})}),s=()=>{r.unmount(),a.remove()};r.mount(a)},Object.defineProperty(e,"__esModule",{value:!0})}));