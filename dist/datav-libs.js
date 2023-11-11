(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = global || self, factory(global.datavLibs = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  //
  var script = {
    name: 'TestCom',
    setup: function setup() {
      var message = vue.ref('大帅');
      return {
        message: message
      };
    }
  };

  const _hoisted_1 = { class: "test" };

  function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, vue.toDisplayString(_ctx.message), 1 /* TEXT */))
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".test[data-v-7cc4288f] {\n  color: skyblue;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-7cc4288f";
  script.__file = "src/components/Test/Test.vue";

  function Test (Vue) {
    Vue.component(script.name, script);
  }

  //
  var script$1 = {
    name: 'TestCom1',
    setup: function setup() {
      var message = vue.ref('中帅');
      return {
        message: message
      };
    }
  };

  const _hoisted_1$1 = { class: "test1" };

  function render$1(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, vue.toDisplayString(_ctx.message), 1 /* TEXT */))
  }

  var css_248z$1 = ".test1[data-v-2165a7e2] {\n  color: deeppink;\n}";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-2165a7e2";
  script$1.__file = "src/components/Test1/Test1.vue";

  function Test1 (Vue) {
    Vue.component(script$1.name, script$1);
  }

  //
  var script$2 = {
    name: 'TestCom2',
    setup: function setup() {
      var message = vue.ref('小帅');
      return {
        message: message
      };
    }
  };

  const _hoisted_1$2 = { class: "test2" };

  function render$2(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, vue.toDisplayString(_ctx.message), 1 /* TEXT */))
  }

  var css_248z$2 = ".test2[data-v-f780135e] {\n  color: lightgreen;\n}";
  styleInject(css_248z$2);

  script$2.render = render$2;
  script$2.__scopeId = "data-v-f780135e";
  script$2.__file = "src/components/Test2/Test2.vue";

  function Test2 (Vue) {
    Vue.component(script$2.name, script$2);
  }

  // export default function(Vue) {
  //   Vue.use(Test)
  //   Vue.use(Test1)
  //   Vue.use(Test2)
  // }

  function test(Vue) {
    Vue.use(Test);
  }
  function test1(Vue) {
    Vue.use(Test1);
  }
  function test2(Vue) {
    Vue.use(Test2);
  }

  exports.test = test;
  exports.test1 = test1;
  exports.test2 = test2;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
