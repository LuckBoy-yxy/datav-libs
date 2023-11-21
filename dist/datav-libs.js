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
  const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("defs", null, [
    /*#__PURE__*/vue.createElementVNode("symbol", {
      id: "more",
      viewBox: "0 0 100 100"
    }, [
      /*#__PURE__*/vue.createElementVNode("circle", {
        r: "5",
        cx: "20",
        cy: "25",
        fill: "currentColor"
      }),
      /*#__PURE__*/vue.createElementVNode("circle", {
        r: "5",
        cx: "20",
        cy: "50",
        fill: "currentColor"
      }),
      /*#__PURE__*/vue.createElementVNode("circle", {
        r: "5",
        cx: "20",
        cy: "75",
        fill: "currentColor"
      }),
      /*#__PURE__*/vue.createElementVNode("line", {
        x1: "40",
        y1: "25",
        x2: "90",
        y2: "25",
        "stroke-width": "8",
        stroke: "currentColor"
      }),
      /*#__PURE__*/vue.createElementVNode("line", {
        x1: "40",
        y1: "50",
        x2: "75",
        y2: "50",
        "stroke-width": "8",
        stroke: "currentColor"
      }),
      /*#__PURE__*/vue.createElementVNode("line", {
        x1: "40",
        y1: "75",
        x2: "90",
        y2: "75",
        "stroke-width": "8",
        stroke: "currentColor"
      })
    ]),
    /*#__PURE__*/vue.createElementVNode("symbol", {
      id: "filledArrowRight",
      viewBox: "0 0 100 100"
    }, [
      /*#__PURE__*/vue.createElementVNode("polyline", {
        points: "20 10, 80 50, 20 90",
        fill: "currentColor"
      })
    ]),
    /*#__PURE__*/vue.createElementVNode("symbol", {
      id: "arrowRight",
      viewBox: "0 0 100 100"
    }, [
      /*#__PURE__*/vue.createElementVNode("polyline", {
        points: "20 10, 80 50, 20 90, 20 10",
        fill: "transparent",
        stroke: "currentColor",
        "stroke-width": "3"
      })
    ]),
    /*#__PURE__*/vue.createElementVNode("symbol", {
      id: "fitness",
      viewBox: "0 0 1024 1024"
    }, [
      /*#__PURE__*/vue.createElementVNode("path", {
        d: "M848.6912 238.7456a92.16 92.16 0 0 0-32 5.8368 104.5504 104.5504 0 0 0-208.7424 9.2672v150.9376H421.1712V253.8496a104.5504 104.5504 0 0 0-208.6912-9.2672 92.7744 92.7744 0 0 0-125.184 87.3472v340.3776a92.928 92.928 0 0 0 125.184 87.3472 104.5504 104.5504 0 0 0 208.6912-9.2672v-150.9376h186.7776v150.9376a104.5504 104.5504 0 0 0 208.7424 9.2672 92.16 92.16 0 0 0 32 5.7856A93.2352 93.2352 0 0 0 942.08 672.3072V331.9296a93.2352 93.2352 0 0 0-93.3888-93.184zM180.4288 704a31.6928 31.6928 0 0 1-31.6928-31.6928V331.9296a31.6928 31.6928 0 0 1 63.2832-2.9696v346.3168a31.744 31.744 0 0 1-31.5904 28.7232z m179.2 46.3872a43.1616 43.1616 0 1 1-86.272 0v-75.1104-343.3472-78.08a43.1616 43.1616 0 1 1 86.272 0z m247.9616-212.3776H421.4272v-71.68h186.2656z m104.96 255.5904a43.2128 43.2128 0 0 1-43.1616-43.1616v-496.64a43.1616 43.1616 0 0 1 86.3232 0V750.3872a43.2128 43.2128 0 0 1-43.1616 43.2128zM880.64 672.3072a31.6928 31.6928 0 0 1-63.232 2.8672v-346.112a31.6928 31.6928 0 0 1 63.232 2.8672z",
        fill: "#F66A2F",
        "p-id": "1185"
      })
    ])
  ], -1 /* HOISTED */);
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
  var script$3 = {
    name: 'IconCom',
    props: {
      name: String,
      prefix: {
        type: String,
        "default": 'icon-'
      },
      style: Object
    },
    setup: function setup(props) {
      var iconName = vue.computed(function () {
        return "#".concat(props.prefix).concat(props.name);
      });
      return {
        iconName: iconName
      };
    }
  };

  const _hoisted_1$3 = { class: "icon" };
  const _hoisted_2$1 = ["href"];

  function render$3(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: "icon-wrapper",
      style: vue.normalizeStyle({ ..._ctx.style })
    }, [
      (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$3, [
        vue.createElementVNode("use", { href: _ctx.iconName }, null, 8 /* PROPS */, _hoisted_2$1)
      ]))
    ], 4 /* STYLE */))
  }

  var css_248z$2 = ".icon-wrapper[data-v-38d2d0ef] {\n  display: inline-block;\n}\n\n.icon[data-v-38d2d0ef] {\n  width: 100%;\n  height: 100%;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}";
  styleInject(css_248z$2);

  script$3.render = render$3;
  script$3.__scopeId = "data-v-38d2d0ef";
  script$3.__file = "src/components/Icon/Icon.vue";

  function IconCom (Vue) {
    Vue.component(script$3.name, script$3);
  }

  //
  var script$4 = {
    name: 'SvgAnimation',
    setup: function setup() {
      vue.onMounted(function () {
        var logo = document.getElementById('emoji');
        var logoLen = Math.ceil(logo.getTotalLength());
      });
      return {};
    }
  };

  const _withScopeId = n => (vue.pushScopeId("data-v-5a151e4f"),n=n(),vue.popScopeId(),n);
  const _hoisted_1$4 = /*#__PURE__*/vue.createStaticVNode("<div class=\"container\" data-v-5a151e4f><svg width=\"500px\" height=\"200px\" viewBox=\"0 0 500 200\" data-v-5a151e4f><rect class=\"rect\" x=\"10\" y=\"10\" width=\"100px\" height=\"50px\" fill=\"none\" stroke-width=\"5\" stroke=\"pink\" data-v-5a151e4f></rect></svg></div><div class=\"container\" data-v-5a151e4f><svg width=\"440\" height=\"440\" viewBox=\"0 0 440 440\" data-v-5a151e4f><circle cx=\"220\" cy=\"220\" r=\"200\" stroke-width=\"20\" stroke=\"#d1d3d7\" fill=\"transparent\" data-v-5a151e4f></circle><circle class=\"circle\" cx=\"220\" cy=\"220\" r=\"200\" stroke-width=\"20\" stroke=\"#00a5e0\" fill=\"none\" transform=\"matrix(0 -1 1 0 0 440)\" data-v-5a151e4f></circle></svg></div>", 2);
  const _hoisted_3$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createElementVNode("svg", {
      width: "200",
      height: "200",
      viewBox: "0 0 1025 1024"
    }, [
      /*#__PURE__*/vue.createElementVNode("path", {
        class: "logo",
        id: "emoji",
        d: "M256.001473 408.004475c0 30.294527 24.556772 54.851298 54.861526 54.851298 30.294527 0 54.851298-24.556772 54.851298-54.851298 0-30.304754-24.556772-54.861526-54.851298-54.861527-30.304754 0-54.861526 24.556772-54.861526 54.861527z m402.287175 0c0 30.294527 24.556772 54.851298 54.851299 54.851298s54.861526-24.556772 54.861526-54.851298c0-30.304754-24.567-54.861526-54.861526-54.861527s-54.851298 24.556772-54.851299 54.861527zM512.001473 0C229.255967 0 0.001473 229.254495 0.001473 512c0 282.745505 229.254495 512 512 512 282.745505 0 512-229.254495 512-512C1024.001473 229.254495 794.746978 0 512.001473 0z m300.572433 812.572433c-39.090372 39.080144-84.573072 69.712185-135.20032 91.200639-52.222773 22.173712-107.882062 33.373072-165.372113 33.373073-57.479824 0-113.139113-11.199361-165.484619-33.373073-50.627247-21.375949-96.109948-52.120495-135.200319-91.200639-39.090372-39.090372-69.712185-84.573072-91.20064-135.20032-22.050979-52.222773-33.25034-107.882062-33.250339-165.372113 0-57.479824 11.199361-113.139113 33.373072-165.484618 21.375949-50.627247 52.120495-96.109948 91.200639-135.20032s84.573072-69.712185 135.20032-91.200639C398.86236 98.063444 454.521649 86.864083 512.001473 86.864083c57.490052 0 113.149341 11.199361 165.484618 33.373072 50.627247 21.375949 96.120176 52.120495 135.20032 91.20064 39.080144 39.080144 69.712185 84.573072 91.200639 135.200319 22.061207 52.222773 33.260567 107.882062 33.260567 165.361886 0 57.490052-11.199361 113.149341-33.373072 165.484618-21.375949 50.627247-52.120495 96.109948-91.200639 135.087815zM685.719411 535.994247H630.74538c-4.796804 0-8.90835 3.661526-9.256093 8.45833-4.336556 56.569557-51.772753 101.254495-109.487814 101.254495s-105.253536-44.684938-109.477587-101.254495c-0.347743-4.796804-4.459289-8.45833-9.256093-8.45833h-54.974031c-5.257052 0-9.378825 4.336556-9.143588 9.603835 5.032042 96.334958 85.145825 173.247463 182.861527 173.247463 97.715701 0 177.829485-76.912505 182.861526-173.247463 0.214782-5.257052-3.896764-9.603835-9.153816-9.603835z m0 0",
        fill: "#2C2C2C",
        "p-id": "1559"
      })
    ])
  ], -1 /* HOISTED */));
  const _hoisted_4 = /*#__PURE__*/vue.createStaticVNode("<div class=\"container\" data-v-5a151e4f><svg class=\"line-container\" width=\"400\" height=\"400\" viewBox=\"0 0 400 400\" data-v-5a151e4f><line class=\"line\" x1=\"0\" y1=\"50\" x2=\"400\" y2=\"50\" fill=\"none\" stroke=\"red\" stroke-width=\"20\" data-v-5a151e4f></line></svg></div><div class=\"container\" data-v-5a151e4f><svg width=\"200\" height=\"200\" data-v-5a151e4f><rect x=\"0\" y=\"0\" fill=\"red\" width=\"100\" height=\"50\" data-v-5a151e4f><set attributeName=\"x\" attributeType=\"XML\" to=\"10\" begin=\"1s\" data-v-5a151e4f></set><set attributeName=\"x\" attributeType=\"XML\" to=\"20\" begin=\"2s\" data-v-5a151e4f></set><set attributeName=\"fill\" attributeType=\"XML\" to=\"skyblue\" begin=\"3s\" data-v-5a151e4f></set></rect></svg></div><div class=\"container\" data-v-5a151e4f><svg width=\"200\" height=\"200\" data-v-5a151e4f><circle cx=\"0\" cy=\"0\" r=\"30\" fill=\"blue\" stroke=\"black\" stroke-width=\"1\" data-v-5a151e4f><animate attributeName=\"cx\" attributeType=\"XML\" from=\"0\" to=\"100\" dur=\"3s\" repeatCount=\"2\" fill=\"freeze\" data-v-5a151e4f></animate><animate attributeName=\"cy\" attributeType=\"XML\" from=\"0\" to=\"100\" dur=\"3s\" repeatCount=\"2\" fill=\"freeze\" data-v-5a151e4f></animate><animate attributeName=\"fill\" attributeType=\"XML\" from=\"blue\" to=\"red\" dur=\"3s\" repeatCount=\"2\" fill=\"freeze\" data-v-5a151e4f></animate><animateTransform attributeName=\"transform\" attributeType=\"XML\" begin=\"0\" type=\"scale\" from=\"1\" to=\"2\" dur=\"3s\" repeatCount=\"2\" fill=\"freeze\" data-v-5a151e4f></animateTransform></circle></svg></div>", 3);

  function render$4(_ctx, _cache) {
    return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      _hoisted_1$4,
      _hoisted_3$1,
      _hoisted_4
    ], 64 /* STABLE_FRAGMENT */))
  }

  var css_248z$3 = ".container[data-v-5a151e4f] svg[data-v-5a151e4f] {\n  border: 1px solid #000;\n}\n\n.rect[data-v-5a151e4f] {\n  stroke-dasharray: 10 20 30;\n}\n\n.circle[data-v-5a151e4f] {\n  animation: circle-5a151e4f 5s linear infinite;\n}\n\n.line[data-v-5a151e4f] {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  transition: stroke-dashoffset 0.5s ease-out;\n}\n\n.line-container[data-v-5a151e4f][data-v-5a151e4f]:hover .line[data-v-5a151e4f] {\n  stroke-dashoffset: 0;\n}\n\n.logo[data-v-5a151e4f] {\n  fill: none;\n  stroke: #333;\n  stroke-width: 5;\n  animation: logo-5a151e4f 5s linear 1 forwards;\n}\n\n@keyframes circle-5a151e4f {\n  from {\n    stroke-dasharray: 0 1257;\n  }\n  to {\n    stroke-dasharray: 1257 0;\n  }\n}\n@keyframes logo-5a151e4f {\n  0% {\n    fill: white;\n    stroke: #333;\n    stroke-dasharray: 7630;\n    stroke-dashoffset: 7630;\n  }\n  50% {\n    fill: white;\n    stroke: #333;\n    stroke-dasharray: 7630;\n    stroke-dashoffset: 0;\n  }\n  75% {\n    fill: lightgreen;\n    stroke: white;\n  }\n  100% {\n    fill: skyblue;\n    stroke: white;\n  }\n}";
  styleInject(css_248z$3);

  script$4.render = render$4;
  script$4.__scopeId = "data-v-5a151e4f";
  script$4.__file = "src/components/SvgAnimation/SvgAnimation.vue";

  function SvgAnimation (Vue) {
    Vue.component(script$4.name, script$4);
  }

  function index (Vue) {
    Vue.use(Test);
    Vue.use(Test1);
    Vue.use(Test2);
    Vue.use(IconCom);
    Vue.use(SvgAnimation);
  }

  return index;

})));
