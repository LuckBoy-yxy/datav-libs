import{ref as e,computed as t,openBlock as n,createElementBlock as o,Fragment as d,createElementVNode as u,toDisplayString as s}from"vue";var a={name:"TestCom",setup:function(){var n=e(1),o=t((function(){return 2*n.value}));return{message:"大帅",count:n,doubleCount:o}}};const c={class:"test"};function l(e){e.component(a.name,a)}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===n&&o.firstChild?o.insertBefore(d,o.firstChild):o.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}(".test[data-v-07bdddea] {\n  color: skyblue;\n}"),a.render=function(e,t){return n(),o(d,null,[u("div",c,s(e.message),1),u("div",null,s(e.count),1),u("div",null,s(e.doubleCount),1),u("button",{onClick:t[0]||(t[0]=t=>e.count++)},"按钮")],64)},a.__scopeId="data-v-07bdddea",a.__file="src/Test.vue";export default l;
