import { ref, computed, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString } from 'vue';

//
var script = {
  name: 'TestCom',
  setup: function setup() {
    var message = '大帅';
    var count = ref(1);
    var doubleCount = computed(function () {
      return count.value * 2;
    });
    return {
      message: message,
      count: count,
      doubleCount: doubleCount
    };
  }
};

const _hoisted_1 = { class: "test" };

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", _hoisted_1, toDisplayString(_ctx.message), 1 /* TEXT */),
    createElementVNode("div", null, toDisplayString(_ctx.count), 1 /* TEXT */),
    createElementVNode("div", null, toDisplayString(_ctx.doubleCount), 1 /* TEXT */),
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.count++))
    }, "按钮")
  ], 64 /* STABLE_FRAGMENT */))
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

var css_248z = ".test[data-v-07bdddea] {\n  color: skyblue;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-07bdddea";
script.__file = "src/Test.vue";

function index (Vue) {
  Vue.component(script.name, script);
}

export default index;
