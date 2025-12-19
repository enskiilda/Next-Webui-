const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DN41Zbd9.js","../chunks/Dyq6N3Rz.js","../chunks/Bd2P5WIS.js","../chunks/ERhjC6zA.js","../chunks/CVh7obxn.js","../assets/index.VD1H7yn_.css","../chunks/De1V06Pc.js","../chunks/CZqSbRSh.js","../chunks/CCr-QNUs.js","../assets/0.YFJ6IYTu.css","../nodes/1.Csspunpt.js","../chunks/DghAKJkW.js","../chunks/Bqawpx0t.js","../nodes/2.BJbH3jKh.js","../chunks/BJXpAMXr.js","../assets/Suggestions.DrFmGorV.css","../nodes/3.BePJ7_Lt.js","../chunks/DOAKnnaA.js","../chunks/CQrtv1eE.js","../assets/Chat.Ciib3HTF.css","../nodes/4.D7yW7Ru3.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _events, _instance;
import { _ as __vitePreload } from "../chunks/CQrtv1eE.js";
import { W as set, a5 as LEGACY_PROPS, v as get, a7 as flushSync, a8 as define_property, a9 as mutable_source, p as push, u as user_pre_effect, l as user_effect, o as onMount, aa as state, ab as tick, ac as first_child, ad as sibling, a as pop, c as child, r as reset, ae as user_derived, t as template_effect } from "../chunks/Bd2P5WIS.js";
import { h as hydrate, m as mount, u as unmount, f as from_html, a as append, e as comment, t as text, b as set_text } from "../chunks/Dyq6N3Rz.js";
import { p as prop, i as if_block, b as bind_this } from "../chunks/CZqSbRSh.js";
import { c as component } from "../chunks/CCr-QNUs.js";
function asClassComponent(component2) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options) {
      super({
        component: component2,
        ...options
      });
    }
  };
}
class Svelte4Component {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    /** @type {any} */
    __privateAdd(this, _events);
    /** @type {Record<string, any>} */
    __privateAdd(this, _instance);
    var _a;
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key, value) => {
      var s = mutable_source(value, false, false);
      sources.set(key, s);
      return s;
    };
    const props = new Proxy(
      { ...options.props || {}, $$events: {} },
      {
        get(target, prop2) {
          return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          if (prop2 === LEGACY_PROPS) return true;
          get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          set(sources.get(prop2) ?? add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    __privateSet(this, _instance, (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: options.intro ?? false,
      recover: options.recover
    }));
    if (!((_a = options == null ? void 0 : options.props) == null ? void 0 : _a.$$host) || options.sync === false) {
      flushSync();
    }
    __privateSet(this, _events, props.$$events);
    for (const key of Object.keys(__privateGet(this, _instance))) {
      if (key === "$set" || key === "$destroy" || key === "$on") continue;
      define_property(this, key, {
        get() {
          return __privateGet(this, _instance)[key];
        },
        /** @param {any} value */
        set(value) {
          __privateGet(this, _instance)[key] = value;
        },
        enumerable: true
      });
    }
    __privateGet(this, _instance).$set = /** @param {Record<string, any>} next */
    (next) => {
      Object.assign(props, next);
    };
    __privateGet(this, _instance).$destroy = () => {
      unmount(__privateGet(this, _instance));
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    __privateGet(this, _instance).$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    __privateGet(this, _events)[event] = __privateGet(this, _events)[event] || [];
    const cb = (...args) => callback.call(this, ...args);
    __privateGet(this, _events)[event].push(cb);
    return () => {
      __privateGet(this, _events)[event] = __privateGet(this, _events)[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    __privateGet(this, _instance).$destroy();
  }
}
_events = new WeakMap();
_instance = new WeakMap();
const matchers = {};
var root_7 = from_html(`<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>`);
var root$1 = from_html(`<!> <!>`, 1);
function Root($$anchor, $$props) {
  push($$props, true);
  let components = prop($$props, "components", 23, () => []), data_0 = prop($$props, "data_0", 3, null), data_1 = prop($$props, "data_1", 3, null), data_2 = prop($$props, "data_2", 3, null);
  {
    user_pre_effect(() => $$props.stores.page.set($$props.page));
  }
  user_effect(() => {
    $$props.stores;
    $$props.page;
    $$props.constructors;
    components();
    $$props.form;
    data_0();
    data_1();
    data_2();
    $$props.stores.page.notify();
  });
  let mounted = state(false);
  let navigated = state(false);
  let title = state(null);
  onMount(() => {
    const unsubscribe = $$props.stores.page.subscribe(() => {
      if (get(mounted)) {
        set(navigated, true);
        tick().then(() => {
          set(title, document.title || "untitled page", true);
        });
      }
    });
    set(mounted, true);
    return unsubscribe;
  });
  const Pyramid_2 = user_derived(() => $$props.constructors[2]);
  var fragment = root$1();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      const Pyramid_0 = user_derived(() => $$props.constructors[0]);
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      component(node_1, () => get(Pyramid_0), ($$anchor3, Pyramid_0_1) => {
        bind_this(
          Pyramid_0_1($$anchor3, {
            get data() {
              return data_0();
            },
            get form() {
              return $$props.form;
            },
            get params() {
              return $$props.page.params;
            },
            children: ($$anchor4, $$slotProps) => {
              var fragment_2 = comment();
              var node_2 = first_child(fragment_2);
              {
                var consequent = ($$anchor5) => {
                  const Pyramid_1 = user_derived(() => $$props.constructors[1]);
                  var fragment_3 = comment();
                  var node_3 = first_child(fragment_3);
                  component(node_3, () => get(Pyramid_1), ($$anchor6, Pyramid_1_1) => {
                    bind_this(
                      Pyramid_1_1($$anchor6, {
                        get data() {
                          return data_1();
                        },
                        get form() {
                          return $$props.form;
                        },
                        get params() {
                          return $$props.page.params;
                        },
                        children: ($$anchor7, $$slotProps2) => {
                          var fragment_4 = comment();
                          var node_4 = first_child(fragment_4);
                          component(node_4, () => get(Pyramid_2), ($$anchor8, Pyramid_2_1) => {
                            bind_this(
                              Pyramid_2_1($$anchor8, {
                                get data() {
                                  return data_2();
                                },
                                get form() {
                                  return $$props.form;
                                },
                                get params() {
                                  return $$props.page.params;
                                }
                              }),
                              ($$value) => components()[2] = $$value,
                              () => {
                                var _a;
                                return (_a = components()) == null ? void 0 : _a[2];
                              }
                            );
                          });
                          append($$anchor7, fragment_4);
                        },
                        $$slots: { default: true }
                      }),
                      ($$value) => components()[1] = $$value,
                      () => {
                        var _a;
                        return (_a = components()) == null ? void 0 : _a[1];
                      }
                    );
                  });
                  append($$anchor5, fragment_3);
                };
                var alternate = ($$anchor5) => {
                  const Pyramid_1 = user_derived(() => $$props.constructors[1]);
                  var fragment_5 = comment();
                  var node_5 = first_child(fragment_5);
                  component(node_5, () => get(Pyramid_1), ($$anchor6, Pyramid_1_2) => {
                    bind_this(
                      Pyramid_1_2($$anchor6, {
                        get data() {
                          return data_1();
                        },
                        get form() {
                          return $$props.form;
                        },
                        get params() {
                          return $$props.page.params;
                        }
                      }),
                      ($$value) => components()[1] = $$value,
                      () => {
                        var _a;
                        return (_a = components()) == null ? void 0 : _a[1];
                      }
                    );
                  });
                  append($$anchor5, fragment_5);
                };
                if_block(node_2, ($$render) => {
                  if ($$props.constructors[2]) $$render(consequent);
                  else $$render(alternate, false);
                });
              }
              append($$anchor4, fragment_2);
            },
            $$slots: { default: true }
          }),
          ($$value) => components()[0] = $$value,
          () => {
            var _a;
            return (_a = components()) == null ? void 0 : _a[0];
          }
        );
      });
      append($$anchor2, fragment_1);
    };
    var alternate_1 = ($$anchor2) => {
      const Pyramid_0 = user_derived(() => $$props.constructors[0]);
      var fragment_6 = comment();
      var node_6 = first_child(fragment_6);
      component(node_6, () => get(Pyramid_0), ($$anchor3, Pyramid_0_2) => {
        bind_this(
          Pyramid_0_2($$anchor3, {
            get data() {
              return data_0();
            },
            get form() {
              return $$props.form;
            },
            get params() {
              return $$props.page.params;
            }
          }),
          ($$value) => components()[0] = $$value,
          () => {
            var _a;
            return (_a = components()) == null ? void 0 : _a[0];
          }
        );
      });
      append($$anchor2, fragment_6);
    };
    if_block(node, ($$render) => {
      if ($$props.constructors[1]) $$render(consequent_1);
      else $$render(alternate_1, false);
    });
  }
  var node_7 = sibling(node, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var div = root_7();
      var node_8 = child(div);
      {
        var consequent_2 = ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, get(title)));
          append($$anchor3, text$1);
        };
        if_block(node_8, ($$render) => {
          if (get(navigated)) $$render(consequent_2);
        });
      }
      reset(div);
      append($$anchor2, div);
    };
    if_block(node_7, ($$render) => {
      if (get(mounted)) $$render(consequent_3);
    });
  }
  append($$anchor, fragment);
  pop();
}
const root = asClassComponent(Root);
const nodes = [
  () => __vitePreload(() => import("../nodes/0.DN41Zbd9.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/1.Csspunpt.js"), true ? __vite__mapDeps([10,1,2,3,11,12]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/2.BJbH3jKh.js"), true ? __vite__mapDeps([13,1,2,3,4,5,12,11,7,14,15]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/3.BePJ7_Lt.js"), true ? __vite__mapDeps([16,1,2,3,4,5,17,18,7,6,14,12,15,11,8,19]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/4.D7yW7Ru3.js"), true ? __vite__mapDeps([20,1,2,3,11,12,17,18,7,6,4,5,14,15,8,19]) : void 0, import.meta.url)
];
const server_loads = [];
const dictionary = {
  "/(app)": [3, [2]],
  "/(app)/c/[id]": [4, [2]]
};
const hooks = {
  handleError: ({ error }) => {
    console.error(error);
  },
  reroute: () => {
  },
  transport: {}
};
const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));
const hash = false;
const decode = (type, value) => decoders[type](value);
export {
  decode,
  decoders,
  dictionary,
  encoders,
  hash,
  hooks,
  matchers,
  nodes,
  root,
  server_loads
};
