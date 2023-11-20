import { ref, openBlock, createElementBlock, createElementVNode, toDisplayString, computed, normalizeStyle } from 'vue';

//
var script = {
  name: 'TestCom',
  setup: function setup() {
    var message = ref('大帅');
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
const _hoisted_2 = /*#__PURE__*/createElementVNode("defs", null, [
  /*#__PURE__*/createElementVNode("symbol", {
    id: "more",
    viewBox: "0 0 100 100"
  }, [
    /*#__PURE__*/createElementVNode("circle", {
      r: "5",
      cx: "20",
      cy: "25",
      fill: "currentColor"
    }),
    /*#__PURE__*/createElementVNode("circle", {
      r: "5",
      cx: "20",
      cy: "50",
      fill: "currentColor"
    }),
    /*#__PURE__*/createElementVNode("circle", {
      r: "5",
      cx: "20",
      cy: "75",
      fill: "currentColor"
    }),
    /*#__PURE__*/createElementVNode("line", {
      x1: "40",
      y1: "25",
      x2: "90",
      y2: "25",
      "stroke-width": "8",
      stroke: "currentColor"
    }),
    /*#__PURE__*/createElementVNode("line", {
      x1: "40",
      y1: "50",
      x2: "75",
      y2: "50",
      "stroke-width": "8",
      stroke: "currentColor"
    }),
    /*#__PURE__*/createElementVNode("line", {
      x1: "40",
      y1: "75",
      x2: "90",
      y2: "75",
      "stroke-width": "8",
      stroke: "currentColor"
    })
  ]),
  /*#__PURE__*/createElementVNode("symbol", {
    id: "filledArrowRight",
    viewBox: "0 0 100 100"
  }, [
    /*#__PURE__*/createElementVNode("polyline", {
      points: "20 10, 80 50, 20 90",
      fill: "currentColor"
    })
  ]),
  /*#__PURE__*/createElementVNode("symbol", {
    id: "arrowRight",
    viewBox: "0 0 100 100"
  }, [
    /*#__PURE__*/createElementVNode("polyline", {
      points: "20 10, 80 50, 20 90, 20 10",
      fill: "transparent",
      stroke: "currentColor",
      "stroke-width": "3"
    })
  ]),
  /*#__PURE__*/createElementVNode("symbol", {
    id: "fitness",
    viewBox: "0 0 1024 1024"
  }, [
    /*#__PURE__*/createElementVNode("path", {
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
  return (openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]))
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
    var message = ref('中帅');
    return {
      message: message
    };
  }
};

const _hoisted_1$1 = { class: "test1" };

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString(_ctx.message), 1 /* TEXT */))
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
    var message = ref('小帅');
    return {
      message: message
    };
  }
};

const _hoisted_1$2 = { class: "test2" };

function render$2(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, toDisplayString(_ctx.message), 1 /* TEXT */))
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
    var iconName = computed(function () {
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
  return (openBlock(), createElementBlock("div", {
    class: "icon-wrapper",
    style: normalizeStyle({ ..._ctx.style })
  }, [
    (openBlock(), createElementBlock("svg", _hoisted_1$3, [
      createElementVNode("use", { href: _ctx.iconName }, null, 8 /* PROPS */, _hoisted_2$1)
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

function index (Vue) {
  Vue.use(Test);
  Vue.use(Test1);
  Vue.use(Test2);
  Vue.use(IconCom);
}

export default index;
