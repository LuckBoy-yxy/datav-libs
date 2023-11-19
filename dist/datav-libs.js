(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = global || self, global.datavLibs = factory(global.Vue));
}(this, (function (vue) { 'use strict';

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

  const _hoisted_1 = {
    width: "0",
    height: "0",
    viewBox: "0 0 100 100"
  };
  const _hoisted_2 = /*#__PURE__*/vue.createStaticVNode("<defs><symbol id=\"more\" viewBox=\"0 0 100 100\"><circle r=\"5\" cx=\"20\" cy=\"25\" fill=\"currentColor\"></circle><circle r=\"5\" cx=\"20\" cy=\"50\" fill=\"currentColor\"></circle><circle r=\"5\" cx=\"20\" cy=\"75\" fill=\"currentColor\"></circle><line x1=\"40\" y1=\"25\" x2=\"90\" y2=\"25\" stroke-width=\"8\" stroke=\"currentColor\"></line><line x1=\"40\" y1=\"50\" x2=\"75\" y2=\"50\" stroke-width=\"8\" stroke=\"currentColor\"></line><line x1=\"40\" y1=\"75\" x2=\"90\" y2=\"75\" stroke-width=\"8\" stroke=\"currentColor\"></line></symbol><symbol id=\"filledArrowRight\" viewBox=\"0 0 100 100\"><polyline points=\"20 10, 80 50, 20 90\" fill=\"currentColor\"></polyline></symbol><symbol id=\"arrowRight\" viewBox=\"0 0 100 100\"><polyline points=\"20 10, 80 50, 20 90, 20 10\" fill=\"transparent\" stroke=\"currentColor\" stroke-width=\"3\"></polyline></symbol></defs>", 1);
  const _hoisted_3 = [
    _hoisted_2
  ];

  function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, [..._hoisted_3]))
  }

  script.render = render;
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

  var css_248z = ".test1[data-v-2165a7e2] {\n  color: deeppink;\n}";
  styleInject(css_248z);

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

  var css_248z$1 = ".test2[data-v-f780135e] {\n  color: lightgreen;\n}";
  styleInject(css_248z$1);

  script$2.render = render$2;
  script$2.__scopeId = "data-v-f780135e";
  script$2.__file = "src/components/Test2/Test2.vue";

  function Test2 (Vue) {
    Vue.component(script$2.name, script$2);
  }

  //
  //
  //
  //
  //
  //

  var script$3 = {
    name: 'IconCom',
    props: {
      name: String,
      style: Object
    },
    setup: function setup(props) {
      var iconName = "#".concat(props.name);
      return {
        iconName: iconName
      };
    }
  };

  const _hoisted_1$3 = ["href"];

  function render$3(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("svg", {
      style: vue.normalizeStyle({ ..._ctx.style })
    }, [
      vue.createElementVNode("use", { href: _ctx.iconName }, null, 8 /* PROPS */, _hoisted_1$3)
    ], 4 /* STYLE */))
  }

  script$3.render = render$3;
  script$3.__file = "src/components/Icon/Icon.vue";

  function IconCom (Vue) {
    Vue.component(script$3.name, script$3);
  }

  function index (Vue) {
    Vue.use(Test);
    Vue.use(Test1);
    Vue.use(Test2);
    Vue.use(IconCom);
  }

  return index;

})));
