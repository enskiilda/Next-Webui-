var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var _sources, _version, _size, _update_version, _SvelteMap_instances, source_fn, read_all_fn, _document, _subscribe, _size2, _previous, _curr, _name, _key, _interactOutsideProp, _behaviorType, _interceptedEvents, _isResponsibleLayer, _isFocusInsideDOMTree, _documentObj, _onFocusOutside, _currNode, _unsubClickListener, _handleFocus, _DismissibleLayerState_instances, addEventListeners_fn, _handleDismiss, _handleInteractOutside, _markInterceptedEvent, _markNonInterceptedEvent, _markResponsibleLayer, _isTargetWithinLayer, _resetState, isAnyEventIntercepted_fn, _onfocuscapture, _onblurcapture, _addEventListener, _onkeydown, _unsubSelectionLock, _ref, _TextSelectionLayerState_instances, addEventListeners_fn2, _pointerdown, _resetSelectionLock, _transformedStyle, _updatePositionStrategy, _arrowSize, _arrowWidth, _arrowHeight, _desiredPlacement, _boundary, _hasExplicitBoundaries, _detectOverflowOptions, _availableWidth, _availableHeight, _anchorWidth, _anchorHeight, _middleware, _placedSide, _placedAlign, _arrowX, _arrowY, _cannotCenterArrow, _contentZIndex, _arrowBaseSide, _wrapperProps, _props, _arrowStyle, _ignoreCloseAutoFocus, _isPointerInTransit, _contentNode, _triggerNode, _search, _timer, _handleTypeaheadSearch, _mounted, _isSub, _MenuContentState_instances, getCandidateNodes_fn, isPointerMovingToSubmenu_fn, _snippetProps, _props2, _isFocused, _props3, _isPointerDown, _MenuItemState_instances, handleSelect_fn, _props4, _openTimer, _MenuSubTriggerState_instances, clearOpenTimer_fn, _props5, _props6, _ariaControls, _props7, _a;
import { r as assign_nodes, v as create_fragment_from_html, w as set_should_intro, x as is_raw_text_element, y as should_intro, z as createSubscriber, q as on, e as comment, a as append, f as from_html, i as from_svg, s as setup_stores, c as store_get, b as set_text, t as text, g as event } from "./Dyq6N3Rz.js";
import { t as template_effect, h as hydrating, j as hydrate_next, P as active_effect, bl as remove_effect_dom, i as hydrate_node, C as COMMENT_NODE, e as get_next_sibling, aS as hydration_mismatch, aM as HYDRATION_ERROR, f as set_hydrate_node, g as get_first_child, d as block$1, E as EFFECT_TRANSPARENT, bm as ELEMENT_NODE, bn as NAMESPACE_SVG, b as create_text, s as set_hydrating, aD as teardown, bo as BLOCK_EFFECT, aI as EFFECT_RAN, M as effect, m as untrack, bp as TRANSITION_GLOBAL, aE as without_reactive_context, a6 as is_function, O as queue_micro_task, aT as noop$4, bq as TRANSITION_IN, br as TRANSITION_OUT, bs as listen_to_event_and_reset_event, z as current_batch, ab as tick, N as render_effect, bt as previous_batch, aa as state, V as proxy, W as set, v as get$2, ae as user_derived, bu as update_version, Q as source, ar as increment, u as user_pre_effect, l as user_effect, bj as hasContext, ag as getContext, an as setContext, p as push, ac as first_child, a as pop, bv as effect_root, o as onMount, ad as sibling, c as child, r as reset, ah as legacy_pre_effect, a9 as mutable_source, w as deep_read_state, ai as legacy_pre_effect_reset, ak as next, af as createEventDispatcher, bw as to_array, aj as onDestroy, bh as remove_textarea_child, Y as derived_safe_equal } from "./Bd2P5WIS.js";
import { B as BranchManager, i as if_block, p as prop, s as spread_props, r as rest_props, l as legacy_rest_props, b as bind_this } from "./CZqSbRSh.js";
import { Z as clsx, G as attribute_effect, b as set_class, E as clsx$1, c as set_attribute, s as slot, A as showSettings, j as showSidebar, u as user, n as mobile, e as each, i as index$1 } from "./CVh7obxn.js";
import { i as init } from "./ERhjC6zA.js";
import "./Bqawpx0t.js";
function html$1(node, get_value, svg = false, mathml = false, skip_warning = false) {
  var anchor = node;
  var value = "";
  template_effect(() => {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (value === (value = get_value() ?? "")) {
      if (hydrating) hydrate_next();
      return;
    }
    if (effect2.nodes_start !== null) {
      remove_effect_dom(
        effect2.nodes_start,
        /** @type {TemplateNode} */
        effect2.nodes_end
      );
      effect2.nodes_start = effect2.nodes_end = null;
    }
    if (value === "") return;
    if (hydrating) {
      hydrate_node.data;
      var next2 = hydrate_next();
      var last = next2;
      while (next2 !== null && (next2.nodeType !== COMMENT_NODE || /** @type {Comment} */
      next2.data !== "")) {
        last = next2;
        next2 = /** @type {TemplateNode} */
        get_next_sibling(next2);
      }
      if (next2 === null) {
        hydration_mismatch();
        throw HYDRATION_ERROR;
      }
      assign_nodes(hydrate_node, last);
      anchor = set_hydrate_node(next2);
      return;
    }
    var html2 = value + "";
    if (svg) html2 = `<svg>${html2}</svg>`;
    else if (mathml) html2 = `<math>${html2}</math>`;
    var node2 = create_fragment_from_html(html2);
    if (svg || mathml) {
      node2 = /** @type {Element} */
      get_first_child(node2);
    }
    assign_nodes(
      /** @type {TemplateNode} */
      get_first_child(node2),
      /** @type {TemplateNode} */
      node2.lastChild
    );
    if (svg || mathml) {
      while (get_first_child(node2)) {
        anchor.before(
          /** @type {Node} */
          get_first_child(node2)
        );
      }
    } else {
      anchor.before(node2);
    }
  });
}
function snippet(node, get_snippet, ...args) {
  var branches = new BranchManager(node);
  block$1(() => {
    const snippet2 = get_snippet() ?? null;
    branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
  }, EFFECT_TRANSPARENT);
}
function element(node, get_tag, is_svg, render_fn, get_namespace, location2) {
  let was_hydrating = hydrating;
  if (hydrating) {
    hydrate_next();
  }
  var element2 = null;
  if (hydrating && hydrate_node.nodeType === ELEMENT_NODE) {
    element2 = /** @type {Element} */
    hydrate_node;
    hydrate_next();
  }
  var anchor = (
    /** @type {TemplateNode} */
    hydrating ? hydrate_node : node
  );
  var branches = new BranchManager(anchor, false);
  block$1(() => {
    const next_tag = get_tag() || null;
    var ns = is_svg || next_tag === "svg" ? NAMESPACE_SVG : null;
    if (next_tag === null) {
      branches.ensure(null, null);
      set_should_intro(true);
      return;
    }
    branches.ensure(next_tag, (anchor2) => {
      if (next_tag) {
        element2 = hydrating ? (
          /** @type {Element} */
          element2
        ) : ns ? document.createElementNS(ns, next_tag) : document.createElement(next_tag);
        assign_nodes(element2, element2);
        if (render_fn) {
          if (hydrating && is_raw_text_element(next_tag)) {
            element2.append(document.createComment(""));
          }
          var child_anchor = (
            /** @type {TemplateNode} */
            hydrating ? get_first_child(element2) : element2.appendChild(create_text())
          );
          if (hydrating) {
            if (child_anchor === null) {
              set_hydrating(false);
            } else {
              set_hydrate_node(child_anchor);
            }
          }
          render_fn(element2, child_anchor);
        }
        active_effect.nodes_end = element2;
        anchor2.before(element2);
      }
      if (hydrating) {
        set_hydrate_node(anchor2);
      }
    });
    set_should_intro(true);
    return () => {
      if (next_tag) {
        set_should_intro(false);
      }
    };
  }, EFFECT_TRANSPARENT);
  teardown(() => {
    set_should_intro(true);
  });
  if (was_hydrating) {
    set_hydrating(true);
    set_hydrate_node(anchor);
  }
}
const now = () => performance.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => requestAnimationFrame(_)
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function run_tasks() {
  const now2 = raf.now();
  raf.tasks.forEach((task) => {
    if (!task.c(now2)) {
      raf.tasks.delete(task);
      task.f();
    }
  });
  if (raf.tasks.size !== 0) {
    raf.tick(run_tasks);
  }
}
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) {
    raf.tick(run_tasks);
  }
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function dispatch_event(element2, type) {
  without_reactive_context(() => {
    element2.dispatchEvent(new CustomEvent(type));
  });
}
function css_property_to_camelcase(style) {
  if (style === "float") return "cssFloat";
  if (style === "offset") return "cssOffset";
  if (style.startsWith("--")) return style;
  const parts = style.split("-");
  if (parts.length === 1) return parts[0];
  return parts[0] + parts.slice(1).map(
    /** @param {any} word */
    (word) => word[0].toUpperCase() + word.slice(1)
  ).join("");
}
function css_to_keyframe(css) {
  const keyframe = {};
  const parts = css.split(";");
  for (const part of parts) {
    const [property, value] = part.split(":");
    if (!property || value === void 0) break;
    const formatted_property = css_property_to_camelcase(property.trim());
    keyframe[formatted_property] = value.trim();
  }
  return keyframe;
}
const linear$1 = (t) => t;
function transition(flags, element2, get_fn, get_params) {
  var is_intro = (flags & TRANSITION_IN) !== 0;
  var is_outro = (flags & TRANSITION_OUT) !== 0;
  var is_both = is_intro && is_outro;
  var is_global = (flags & TRANSITION_GLOBAL) !== 0;
  var direction = is_both ? "both" : is_intro ? "in" : "out";
  var current_options;
  var inert = element2.inert;
  var overflow = element2.style.overflow;
  var intro;
  var outro;
  function get_options() {
    return without_reactive_context(() => {
      return current_options ?? (current_options = get_fn()(element2, (get_params == null ? void 0 : get_params()) ?? /** @type {P} */
      {}, {
        direction
      }));
    });
  }
  var transition2 = {
    is_global,
    in() {
      var _a2;
      element2.inert = inert;
      if (!is_intro) {
        outro == null ? void 0 : outro.abort();
        (_a2 = outro == null ? void 0 : outro.reset) == null ? void 0 : _a2.call(outro);
        return;
      }
      if (!is_outro) {
        intro == null ? void 0 : intro.abort();
      }
      dispatch_event(element2, "introstart");
      intro = animate$2(element2, get_options(), outro, 1, () => {
        dispatch_event(element2, "introend");
        intro == null ? void 0 : intro.abort();
        intro = current_options = void 0;
        element2.style.overflow = overflow;
      });
    },
    out(fn) {
      if (!is_outro) {
        fn == null ? void 0 : fn();
        current_options = void 0;
        return;
      }
      element2.inert = true;
      dispatch_event(element2, "outrostart");
      outro = animate$2(element2, get_options(), intro, 0, () => {
        dispatch_event(element2, "outroend");
        fn == null ? void 0 : fn();
      });
    },
    stop: () => {
      intro == null ? void 0 : intro.abort();
      outro == null ? void 0 : outro.abort();
    }
  };
  var e = (
    /** @type {Effect} */
    active_effect
  );
  (e.transitions ?? (e.transitions = [])).push(transition2);
  if (is_intro && should_intro) {
    var run = is_global;
    if (!run) {
      var block2 = (
        /** @type {Effect | null} */
        e.parent
      );
      while (block2 && (block2.f & EFFECT_TRANSPARENT) !== 0) {
        while (block2 = block2.parent) {
          if ((block2.f & BLOCK_EFFECT) !== 0) break;
        }
      }
      run = !block2 || (block2.f & EFFECT_RAN) !== 0;
    }
    if (run) {
      effect(() => {
        untrack(() => transition2.in());
      });
    }
  }
}
function animate$2(element2, options, counterpart, t2, on_finish) {
  var is_intro = t2 === 1;
  if (is_function(options)) {
    var a2;
    var aborted = false;
    queue_micro_task(() => {
      if (aborted) return;
      var o = options({ direction: is_intro ? "in" : "out" });
      a2 = animate$2(element2, o, counterpart, t2, on_finish);
    });
    return {
      abort: () => {
        aborted = true;
        a2 == null ? void 0 : a2.abort();
      },
      deactivate: () => a2.deactivate(),
      reset: () => a2.reset(),
      t: () => a2.t()
    };
  }
  counterpart == null ? void 0 : counterpart.deactivate();
  if (!(options == null ? void 0 : options.duration)) {
    on_finish();
    return {
      abort: noop$4,
      deactivate: noop$4,
      reset: noop$4,
      t: () => t2
    };
  }
  const { delay: delay3 = 0, css, tick: tick2, easing = linear$1 } = options;
  var keyframes = [];
  if (is_intro && counterpart === void 0) {
    if (tick2) {
      tick2(0, 1);
    }
    if (css) {
      var styles = css_to_keyframe(css(0, 1));
      keyframes.push(styles, styles);
    }
  }
  var get_t = () => 1 - t2;
  var animation = element2.animate(keyframes, { duration: delay3, fill: "forwards" });
  animation.onfinish = () => {
    animation.cancel();
    var t1 = (counterpart == null ? void 0 : counterpart.t()) ?? 1 - t2;
    counterpart == null ? void 0 : counterpart.abort();
    var delta = t2 - t1;
    var duration = (
      /** @type {number} */
      options.duration * Math.abs(delta)
    );
    var keyframes2 = [];
    if (duration > 0) {
      var needs_overflow_hidden = false;
      if (css) {
        var n = Math.ceil(duration / (1e3 / 60));
        for (var i = 0; i <= n; i += 1) {
          var t = t1 + delta * easing(i / n);
          var styles2 = css_to_keyframe(css(t, 1 - t));
          keyframes2.push(styles2);
          needs_overflow_hidden || (needs_overflow_hidden = styles2.overflow === "hidden");
        }
      }
      if (needs_overflow_hidden) {
        element2.style.overflow = "hidden";
      }
      get_t = () => {
        var time = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          animation.currentTime
        );
        return t1 + delta * easing(time / duration);
      };
      if (tick2) {
        loop(() => {
          if (animation.playState !== "running") return false;
          var t3 = get_t();
          tick2(t3, 1 - t3);
          return true;
        });
      }
    }
    animation = element2.animate(keyframes2, { duration, fill: "forwards" });
    animation.onfinish = () => {
      get_t = () => t2;
      tick2 == null ? void 0 : tick2(t2, 1 - t2);
      on_finish();
    };
  };
  return {
    abort: () => {
      if (animation) {
        animation.cancel();
        animation.effect = null;
        animation.onfinish = noop$4;
      }
    },
    deactivate: () => {
      on_finish = noop$4;
    },
    reset: () => {
      if (t2 === 0) {
        tick2 == null ? void 0 : tick2(1, 0);
      }
    },
    t: () => get_t()
  };
}
function bind_value(input, get2, set2 = get2) {
  var batches = /* @__PURE__ */ new WeakSet();
  listen_to_event_and_reset_event(input, "input", async (is_reset) => {
    var value = is_reset ? input.defaultValue : input.value;
    value = is_numberlike_input(input) ? to_number(value) : value;
    set2(value);
    if (current_batch !== null) {
      batches.add(current_batch);
    }
    await tick();
    if (value !== (value = get2())) {
      var start = input.selectionStart;
      var end = input.selectionEnd;
      var length = input.value.length;
      input.value = value ?? "";
      if (end !== null) {
        var new_length = input.value.length;
        if (start === end && end === length && new_length > length) {
          input.selectionStart = new_length;
          input.selectionEnd = new_length;
        } else {
          input.selectionStart = start;
          input.selectionEnd = Math.min(end, new_length);
        }
      }
    }
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
    // TODO Svelte 6: remove input.value check and set to empty string?
    untrack(get2) == null && input.value
  ) {
    set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
    if (current_batch !== null) {
      batches.add(current_batch);
    }
  }
  render_effect(() => {
    var value = get2();
    if (input === document.activeElement) {
      var batch = (
        /** @type {Batch} */
        previous_batch ?? current_batch
      );
      if (batches.has(batch)) {
        return;
      }
    }
    if (is_numberlike_input(input) && value === to_number(input.value)) {
      return;
    }
    if (input.type === "date" && !value && !input.value) {
      return;
    }
    if (value !== input.value) {
      input.value = value ?? "";
    }
  });
}
function is_numberlike_input(input) {
  var type = input.type;
  return type === "number" || type === "range";
}
function to_number(value) {
  return value === "" ? null : +value;
}
function bind_files(input, get2, set2 = get2) {
  listen_to_event_and_reset_event(input, "change", () => {
    set2(input.files);
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    hydrating && input.files
  ) {
    set2(input.files);
  }
  render_effect(() => {
    input.files = get2();
  });
}
const linear = (x) => x;
function cubic_out(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay: delay3 = 0, duration = 400, easing = linear } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay: delay3,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function slide(node, { delay: delay3 = 0, duration = 400, easing = cubic_out, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${e[0].toUpperCase()}${e.slice(1)}`
    )
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay: delay3,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;min-${primary_property}: 0`
  };
}
function isFunction$1(value) {
  return typeof value === "function";
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
  if (value === null || value === void 0)
    return true;
  if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value))
    return true;
  if (Array.isArray(value))
    return value.every((item) => isClassValue(item));
  if (typeof value === "object") {
    if (Object.getPrototypeOf(value) !== Object.prototype)
      return false;
    return true;
  }
  return false;
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function isBox(value) {
  return isObject(value) && BoxSymbol in value;
}
function isWritableBox(value) {
  return box.isBox(value) && isWritableSymbol in value;
}
function box(initialValue) {
  let current = state(proxy(initialValue));
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return get$2(current);
    },
    set current(v) {
      set(current, v, true);
    }
  };
}
function boxWith(getter, setter) {
  const derived = user_derived(getter);
  if (setter) {
    return {
      [BoxSymbol]: true,
      [isWritableSymbol]: true,
      get current() {
        return get$2(derived);
      },
      set current(v) {
        setter(v);
      }
    };
  }
  return {
    [BoxSymbol]: true,
    get current() {
      return getter();
    }
  };
}
function boxFrom(value) {
  if (box.isBox(value)) return value;
  if (isFunction$1(value)) return box.with(value);
  return box(value);
}
function boxFlatten(boxes) {
  return Object.entries(boxes).reduce(
    (acc, [key, b]) => {
      if (!box.isBox(b)) {
        return Object.assign(acc, { [key]: b });
      }
      if (box.isWritableBox(b)) {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          set(v) {
            b.current = v;
          }
        });
      } else {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          }
        });
      }
      return acc;
    },
    {}
  );
}
function toReadonlyBox(b) {
  if (!box.isWritableBox(b)) return b;
  return {
    [BoxSymbol]: true,
    get current() {
      return b.current;
    }
  };
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
function composeHandlers(...handlers) {
  return function(e) {
    var _a2;
    for (const handler of handlers) {
      if (!handler)
        continue;
      if (e.defaultPrevented)
        return;
      if (typeof handler === "function") {
        handler.call(this, e);
      } else {
        (_a2 = handler.current) == null ? void 0 : _a2.call(this, e);
      }
    }
  };
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
var TRIM_REGEX = /^\s+|\s+$/g;
var NEWLINE = "\n";
var FORWARD_SLASH = "/";
var ASTERISK = "*";
var EMPTY_STRING = "";
var TYPE_COMMENT = "comment";
var TYPE_DECLARATION = "declaration";
function index(style, options) {
  if (typeof style !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (!style) return [];
  options = options || {};
  var lineno = 1;
  var column = 1;
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }
  function position() {
    var start = { line: lineno, column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column };
    this.source = options.source;
  }
  Position.prototype.content = style;
  function error(msg) {
    var err = new Error(
      options.source + ":" + lineno + ":" + column + ": " + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;
    if (options.silent) ;
    else {
      throw err;
    }
  }
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }
  function whitespace() {
    match(WHITESPACE_REGEX);
  }
  function comments(rules) {
    var c2;
    rules = rules || [];
    while (c2 = comment2()) {
      if (c2 !== false) {
        rules.push(c2);
      }
    }
    return rules;
  }
  function comment2() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
    var i = 2;
    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }
    i += 2;
    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error("End of comment missing");
    }
    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  function declaration() {
    var pos = position();
    var prop2 = match(PROPERTY_REGEX);
    if (!prop2) return;
    comment2();
    if (!match(COLON_REGEX)) return error("property missing ':'");
    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop2[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    });
    match(SEMICOLON_REGEX);
    return ret;
  }
  function declarations() {
    var decls = [];
    comments(decls);
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }
    return decls;
  }
  whitespace();
  return declarations();
}
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
function StyleToObject(style, iterator) {
  let styleObject = null;
  if (!style || typeof style !== "string") {
    return styleObject;
  }
  const declarations = index(style);
  const hasIterator = typeof iterator === "function";
  declarations.forEach((declaration) => {
    if (declaration.type !== "declaration") {
      return;
    }
    const { property, value } = declaration;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      styleObject = styleObject || {};
      styleObject[property] = value;
    }
  });
  return styleObject;
}
const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char))
    return void 0;
  return char !== char.toLowerCase();
}
function splitByCase(str) {
  const parts = [];
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = STR_SPLITTERS.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function pascalCase(str) {
  if (!str)
    return "";
  return splitByCase(str).map((p) => upperFirst(p)).join("");
}
function camelCase(str) {
  return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function cssToStyleObj(css) {
  if (!css)
    return {};
  const styleObj = {};
  function iterator(name, value) {
    if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
      styleObj[pascalCase(name)] = value;
      return;
    }
    if (name.startsWith("--")) {
      styleObj[name] = value;
      return;
    }
    styleObj[camelCase(name)] = value;
  }
  StyleToObject(css, iterator);
  return styleObj;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString(style = {}) {
  return styleToCSS(style).replace("\n", " ");
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
const srOnlyStylesString = styleToString(srOnlyStyles);
function isEventHandler(key) {
  var _a2;
  return key.length > 2 && key.startsWith("on") && key[2] === ((_a2 = key[2]) == null ? void 0 : _a2.toLowerCase());
}
function mergeProps(...args) {
  const result = { ...args[0] };
  for (let i = 1; i < args.length; i++) {
    const props = args[i];
    for (const key in props) {
      const a2 = result[key];
      const b = props[key];
      const aIsFunction = typeof a2 === "function";
      const bIsFunction = typeof b === "function";
      if (aIsFunction && typeof bIsFunction && isEventHandler(key)) {
        const aHandler = a2;
        const bHandler = b;
        result[key] = composeHandlers(aHandler, bHandler);
      } else if (aIsFunction && bIsFunction) {
        result[key] = executeCallbacks(a2, b);
      } else if (key === "class") {
        const aIsClassValue = isClassValue(a2);
        const bIsClassValue = isClassValue(b);
        if (aIsClassValue && bIsClassValue) {
          result[key] = clsx(a2, b);
        } else if (aIsClassValue) {
          result[key] = clsx(a2);
        } else if (bIsClassValue) {
          result[key] = clsx(b);
        }
      } else if (key === "style") {
        const aIsObject = typeof a2 === "object";
        const bIsObject = typeof b === "object";
        const aIsString = typeof a2 === "string";
        const bIsString = typeof b === "string";
        if (aIsObject && bIsObject) {
          result[key] = { ...a2, ...b };
        } else if (aIsObject && bIsString) {
          const parsedStyle = cssToStyleObj(b);
          result[key] = { ...a2, ...parsedStyle };
        } else if (aIsString && bIsObject) {
          const parsedStyle = cssToStyleObj(a2);
          result[key] = { ...parsedStyle, ...b };
        } else if (aIsString && bIsString) {
          const parsedStyleA = cssToStyleObj(a2);
          const parsedStyleB = cssToStyleObj(b);
          result[key] = { ...parsedStyleA, ...parsedStyleB };
        } else if (aIsObject) {
          result[key] = a2;
        } else if (bIsObject) {
          result[key] = b;
        } else if (aIsString) {
          result[key] = a2;
        } else if (bIsString) {
          result[key] = b;
        }
      } else {
        result[key] = b !== void 0 ? b : a2;
      }
    }
  }
  if (typeof result.style === "object") {
    result.style = styleToString(result.style).replaceAll("\n", " ");
  }
  if (result.hidden !== true) {
    result.hidden = void 0;
    delete result.hidden;
  }
  if (result.disabled !== true) {
    result.disabled = void 0;
    delete result.disabled;
  }
  return result;
}
const defaultWindow = typeof window !== "undefined" ? window : void 0;
function getActiveElement(document2) {
  let activeElement = document2.activeElement;
  while (activeElement == null ? void 0 : activeElement.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
const _SvelteMap = class _SvelteMap extends Map {
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(value) {
    super();
    __privateAdd(this, _SvelteMap_instances);
    /** @type {Map<K, Source<number>>} */
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateAdd(this, _version, state(0));
    __privateAdd(this, _size, state(0));
    __privateAdd(this, _update_version, update_version || -1);
    if (value) {
      for (var [key, v] of value) {
        super.set(key, v);
      }
      __privateGet(this, _size).v = super.size;
    }
  }
  /** @param {K} key */
  has(key) {
    var sources = __privateGet(this, _sources);
    var s2 = sources.get(key);
    if (s2 === void 0) {
      var ret = super.get(key);
      if (ret !== void 0) {
        s2 = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
        sources.set(key, s2);
      } else {
        get$2(__privateGet(this, _version));
        return false;
      }
    }
    get$2(s2);
    return true;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(callbackfn, this_arg) {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    super.forEach(callbackfn, this_arg);
  }
  /** @param {K} key */
  get(key) {
    var sources = __privateGet(this, _sources);
    var s2 = sources.get(key);
    if (s2 === void 0) {
      var ret = super.get(key);
      if (ret !== void 0) {
        s2 = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
        sources.set(key, s2);
      } else {
        get$2(__privateGet(this, _version));
        return void 0;
      }
    }
    get$2(s2);
    return super.get(key);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(key, value) {
    var _a2;
    var sources = __privateGet(this, _sources);
    var s2 = sources.get(key);
    var prev_res = super.get(key);
    var res = super.set(key, value);
    var version = __privateGet(this, _version);
    if (s2 === void 0) {
      s2 = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
      sources.set(key, s2);
      set(__privateGet(this, _size), super.size);
      increment(version);
    } else if (prev_res !== value) {
      increment(s2);
      var v_reactions = version.reactions === null ? null : new Set(version.reactions);
      var needs_version_increase = v_reactions === null || !((_a2 = s2.reactions) == null ? void 0 : _a2.every(
        (r) => (
          /** @type {NonNullable<typeof v_reactions>} */
          v_reactions.has(r)
        )
      ));
      if (needs_version_increase) {
        increment(version);
      }
    }
    return res;
  }
  /** @param {K} key */
  delete(key) {
    var sources = __privateGet(this, _sources);
    var s2 = sources.get(key);
    var res = super.delete(key);
    if (s2 !== void 0) {
      sources.delete(key);
      set(__privateGet(this, _size), super.size);
      set(s2, -1);
      increment(__privateGet(this, _version));
    }
    return res;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var sources = __privateGet(this, _sources);
    set(__privateGet(this, _size), 0);
    for (var s2 of sources.values()) {
      set(s2, -1);
    }
    increment(__privateGet(this, _version));
    sources.clear();
  }
  keys() {
    get$2(__privateGet(this, _version));
    return super.keys();
  }
  values() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.values();
  }
  entries() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    get$2(__privateGet(this, _size));
    return super.size;
  }
};
_sources = new WeakMap();
_version = new WeakMap();
_size = new WeakMap();
_update_version = new WeakMap();
_SvelteMap_instances = new WeakSet();
/**
 * If the source is being created inside the same reaction as the SvelteMap instance,
 * we use `state` so that it will not be a dependency of the reaction. Otherwise we
 * use `source` so it will be.
 *
 * @template T
 * @param {T} value
 * @returns {Source<T>}
 */
source_fn = function(value) {
  return update_version === __privateGet(this, _update_version) ? state(value) : source(value);
};
read_all_fn = function() {
  get$2(__privateGet(this, _version));
  var sources = __privateGet(this, _sources);
  if (__privateGet(this, _size).v !== sources.size) {
    for (var key of __superGet(_SvelteMap.prototype, this, "keys").call(this)) {
      if (!sources.has(key)) {
        var s2 = __privateMethod(this, _SvelteMap_instances, source_fn).call(this, 0);
        sources.set(key, s2);
      }
    }
  }
  for ([, s2] of __privateGet(this, _sources)) {
    get$2(s2);
  }
};
let SvelteMap = _SvelteMap;
class ActiveElement {
  constructor(options = {}) {
    __privateAdd(this, _document);
    __privateAdd(this, _subscribe);
    const { window: window2 = defaultWindow, document: document2 = window2 == null ? void 0 : window2.document } = options;
    if (window2 === void 0) return;
    __privateSet(this, _document, document2);
    __privateSet(this, _subscribe, createSubscriber((update) => {
      const cleanupFocusIn = on(window2, "focusin", update);
      const cleanupFocusOut = on(window2, "focusout", update);
      return () => {
        cleanupFocusIn();
        cleanupFocusOut();
      };
    }));
  }
  get current() {
    var _a2;
    (_a2 = __privateGet(this, _subscribe)) == null ? void 0 : _a2.call(this);
    if (!__privateGet(this, _document)) return null;
    return getActiveElement(__privateGet(this, _document));
  }
}
_document = new WeakMap();
_subscribe = new WeakMap();
new ActiveElement();
function isFunction(value) {
  return typeof value === "function";
}
function runEffect(flush, effect2) {
  switch (flush) {
    case "post":
      user_effect(effect2);
      break;
    case "pre":
      user_pre_effect(effect2);
      break;
  }
}
function runWatcher(sources, flush, effect2, options = {}) {
  const { lazy = false } = options;
  let active = !lazy;
  let previousValues = Array.isArray(sources) ? [] : void 0;
  runEffect(flush, () => {
    const values = Array.isArray(sources) ? sources.map((source2) => source2()) : sources();
    if (!active) {
      active = true;
      previousValues = values;
      return;
    }
    const cleanup = untrack(() => effect2(values, previousValues));
    previousValues = values;
    return cleanup;
  });
}
function watch(sources, effect2, options) {
  runWatcher(sources, "post", effect2, options);
}
function watchPre(sources, effect2, options) {
  runWatcher(sources, "pre", effect2, options);
}
watch.pre = watchPre;
function get$1(value) {
  if (isFunction(value)) {
    return value();
  }
  return value;
}
class ElementSize {
  constructor(node, options = { box: "border-box" }) {
    __privateAdd(this, _size2, state(proxy({ width: 0, height: 0 })));
    var _a2, _b;
    const window2 = options.window ?? defaultWindow;
    set(
      __privateGet(this, _size2),
      {
        width: ((_a2 = options.initialSize) == null ? void 0 : _a2.width) ?? 0,
        height: ((_b = options.initialSize) == null ? void 0 : _b.height) ?? 0
      },
      true
    );
    user_effect(() => {
      if (!window2) return;
      const node$ = get$1(node);
      if (!node$) return;
      const observer = new window2.ResizeObserver((entries) => {
        for (const entry of entries) {
          const boxSize = options.box === "content-box" ? entry.contentBoxSize : entry.borderBoxSize;
          const boxSizeArr = Array.isArray(boxSize) ? boxSize : [boxSize];
          get$2(__privateGet(this, _size2)).width = boxSizeArr.reduce((acc, size2) => Math.max(acc, size2.inlineSize), 0);
          get$2(__privateGet(this, _size2)).height = boxSizeArr.reduce((acc, size2) => Math.max(acc, size2.blockSize), 0);
        }
      });
      observer.observe(node$);
      return () => {
        observer.disconnect();
      };
    });
  }
  get current() {
    return get$2(__privateGet(this, _size2));
  }
  get width() {
    return get$2(__privateGet(this, _size2)).width;
  }
  get height() {
    return get$2(__privateGet(this, _size2)).height;
  }
}
_size2 = new WeakMap();
class Previous {
  constructor(getter) {
    __privateAdd(this, _previous, state(void 0));
    __privateAdd(this, _curr);
    user_effect(() => {
      set(__privateGet(this, _previous), __privateGet(this, _curr), true);
      __privateSet(this, _curr, getter());
    });
  }
  get current() {
    return get$2(__privateGet(this, _previous));
  }
}
_previous = new WeakMap();
_curr = new WeakMap();
class Context {
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(name) {
    __privateAdd(this, _name);
    __privateAdd(this, _key);
    __privateSet(this, _name, name);
    __privateSet(this, _key, Symbol(name));
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return __privateGet(this, _key);
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return hasContext(__privateGet(this, _key));
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const context = getContext(__privateGet(this, _key));
    if (context === void 0) {
      throw new Error(`Context "${__privateGet(this, _name)}" not found`);
    }
    return context;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(fallback) {
    const context = getContext(__privateGet(this, _key));
    if (context === void 0) {
      return fallback;
    }
    return context;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(context) {
    return setContext(__privateGet(this, _key), context);
  }
}
_name = new WeakMap();
_key = new WeakMap();
function onDestroyEffect(fn) {
  user_effect(() => {
    return () => {
      fn();
    };
  });
}
function useRefById({ id, ref, deps = () => true, onRefChange, getRootNode: getRootNode2 }) {
  watch([() => id.current, deps], ([_id]) => {
    const rootNode = (getRootNode2 == null ? void 0 : getRootNode2()) ?? document;
    const node = rootNode == null ? void 0 : rootNode.getElementById(_id);
    if (node) ref.current = node;
    else ref.current = null;
    onRefChange == null ? void 0 : onRefChange(ref.current);
  });
  onDestroyEffect(() => {
    ref.current = null;
    onRefChange == null ? void 0 : onRefChange(null);
  });
}
function afterSleep(ms, cb) {
  return setTimeout(cb, ms);
}
function afterTick(fn) {
  tick().then(fn);
}
function onMountEffect(fn) {
  user_effect(() => {
    const cleanup = untrack(() => fn());
    return cleanup;
  });
}
function getDataOpenClosed(condition) {
  return condition ? "open" : "closed";
}
function getDataChecked(condition) {
  return condition ? "checked" : "unchecked";
}
function getAriaDisabled(condition) {
  return condition ? "true" : "false";
}
function getAriaExpanded(condition) {
  return condition ? "true" : "false";
}
function getDataDisabled(condition) {
  return condition ? "" : void 0;
}
function getAriaRequired(condition) {
  return condition ? "true" : "false";
}
function getAriaChecked(checked, indeterminate) {
  return checked ? "true" : "false";
}
function getAriaOrientation(orientation) {
  return orientation;
}
function getDataRequired(condition) {
  return condition ? "" : void 0;
}
function getDisabled(condition) {
  return condition ? true : void 0;
}
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const ARROW_UP = "ArrowUp";
const END = "End";
const ENTER = "Enter";
const ESCAPE = "Escape";
const HOME = "Home";
const PAGE_DOWN = "PageDown";
const PAGE_UP = "PageUp";
const SPACE = " ";
const TAB = "Tab";
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
    vertical: ARROW_DOWN
  }[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
    vertical: ARROW_UP
  }[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
  if (!["ltr", "rtl"].includes(dir))
    dir = "ltr";
  if (!["horizontal", "vertical"].includes(orientation))
    orientation = "horizontal";
  return {
    nextKey: getNextKey(dir, orientation),
    prevKey: getPrevKey(dir, orientation)
  };
}
const isBrowser = typeof document !== "undefined";
const isIOS = getIsIOS();
function getIsIOS() {
  var _a2, _b;
  return isBrowser && ((_a2 = window == null ? void 0 : window.navigator) == null ? void 0 : _a2.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function isHTMLElement$1(element2) {
  return element2 instanceof HTMLElement;
}
function isElement$1(element2) {
  return element2 instanceof Element;
}
function isElementOrSVGElement(element2) {
  return element2 instanceof Element || element2 instanceof SVGElement;
}
function isTouch(e) {
  return e.pointerType === "touch";
}
function isFocusVisible(element2) {
  return element2.matches(":focus-visible");
}
function isNotNull(value) {
  return value !== null;
}
function isSelectableInput$1(element2) {
  return element2 instanceof HTMLInputElement && "select" in element2;
}
function isElementHidden(node, stopAt) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (stopAt !== void 0 && node === stopAt)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function useRovingFocus(props) {
  const currentTabStopId = box(null);
  function getCandidateNodes() {
    if (!isBrowser) return [];
    const node = document.getElementById(props.rootNodeId.current);
    if (!node) return [];
    if (props.candidateSelector) {
      const candidates = Array.from(node.querySelectorAll(props.candidateSelector));
      return candidates;
    } else if (props.candidateAttr) {
      const candidates = Array.from(node.querySelectorAll(`[${props.candidateAttr}]:not([data-disabled])`));
      return candidates;
    }
    return [];
  }
  function focusFirstCandidate() {
    var _a2;
    const items = getCandidateNodes();
    if (!items.length) return;
    (_a2 = items[0]) == null ? void 0 : _a2.focus();
  }
  function handleKeydown(node, e, both = false) {
    var _a2;
    const rootNode = document.getElementById(props.rootNodeId.current);
    if (!rootNode || !node) return;
    const items = getCandidateNodes();
    if (!items.length) return;
    const currentIndex = items.indexOf(node);
    const dir = getElemDirection(rootNode);
    const { nextKey, prevKey } = getDirectionalKeys(dir, props.orientation.current);
    const loop2 = props.loop.current;
    const keyToIndex = {
      [nextKey]: currentIndex + 1,
      [prevKey]: currentIndex - 1,
      [HOME]: 0,
      [END]: items.length - 1
    };
    if (both) {
      const altNextKey = nextKey === ARROW_DOWN ? ARROW_RIGHT : ARROW_DOWN;
      const altPrevKey = prevKey === ARROW_UP ? ARROW_LEFT : ARROW_UP;
      keyToIndex[altNextKey] = currentIndex + 1;
      keyToIndex[altPrevKey] = currentIndex - 1;
    }
    let itemIndex = keyToIndex[e.key];
    if (itemIndex === void 0) return;
    e.preventDefault();
    if (itemIndex < 0 && loop2) {
      itemIndex = items.length - 1;
    } else if (itemIndex === items.length && loop2) {
      itemIndex = 0;
    }
    const itemToFocus = items[itemIndex];
    if (!itemToFocus) return;
    itemToFocus.focus();
    currentTabStopId.current = itemToFocus.id;
    (_a2 = props.onCandidateFocus) == null ? void 0 : _a2.call(props, itemToFocus);
    return itemToFocus;
  }
  function getTabIndex3(node) {
    const items = getCandidateNodes();
    const anyActive = currentTabStopId.current !== null;
    if (node && !anyActive && items[0] === node) {
      currentTabStopId.current = node.id;
      return 0;
    } else if ((node == null ? void 0 : node.id) === currentTabStopId.current) {
      return 0;
    }
    return -1;
  }
  return {
    setCurrentTabStopId(id) {
      currentTabStopId.current = id;
    },
    getTabIndex: getTabIndex3,
    handleKeydown,
    focusFirstCandidate,
    currentTabStopId
  };
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function useId(prefix = "bits") {
  globalThis.bitsIdCounter.current++;
  return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
function noop$3() {
}
function useStateMachine(initialState, machine) {
  const state2 = box(initialState);
  function reducer(event2) {
    const nextState = machine[state2.current][event2];
    return nextState ?? state2.current;
  }
  const dispatch = (event2) => {
    state2.current = reducer(event2);
  };
  return { state: state2, dispatch };
}
function usePresence(present, id) {
  let styles = state(proxy({}));
  let prevAnimationNameState = state("none");
  const initialState = present.current ? "mounted" : "unmounted";
  let node = state(null);
  const prevPresent = new Previous(() => present.current);
  watch([() => id.current, () => present.current], ([id2, present2]) => {
    if (!id2 || !present2) return;
    afterTick(() => {
      set(node, document.getElementById(id2), true);
    });
  });
  const { state: state$1, dispatch } = useStateMachine(initialState, {
    mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
    unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
    unmounted: { MOUNT: "mounted" }
  });
  watch(() => present.current, (currPresent) => {
    if (!get$2(node)) {
      set(node, document.getElementById(id.current), true);
    }
    if (!get$2(node)) return;
    const hasPresentChanged = currPresent !== prevPresent.current;
    if (!hasPresentChanged) return;
    const prevAnimationName = get$2(prevAnimationNameState);
    const currAnimationName = getAnimationName(get$2(node));
    if (currPresent) {
      dispatch("MOUNT");
    } else if (currAnimationName === "none" || get$2(styles).display === "none") {
      dispatch("UNMOUNT");
    } else {
      const isAnimating = prevAnimationName !== currAnimationName;
      if (prevPresent && isAnimating) {
        dispatch("ANIMATION_OUT");
      } else {
        dispatch("UNMOUNT");
      }
    }
  });
  function handleAnimationEnd(event2) {
    if (!get$2(node)) set(node, document.getElementById(id.current), true);
    if (!get$2(node)) return;
    const currAnimationName = getAnimationName(get$2(node));
    const isCurrentAnimation = currAnimationName.includes(event2.animationName) || currAnimationName === "none";
    if (event2.target === get$2(node) && isCurrentAnimation) {
      dispatch("ANIMATION_END");
    }
  }
  function handleAnimationStart(event2) {
    if (!get$2(node)) set(node, document.getElementById(id.current), true);
    if (!get$2(node)) return;
    if (event2.target === get$2(node)) {
      set(prevAnimationNameState, getAnimationName(get$2(node)), true);
    }
  }
  watch(() => state$1.current, () => {
    if (!get$2(node)) set(node, document.getElementById(id.current), true);
    if (!get$2(node)) return;
    const currAnimationName = getAnimationName(get$2(node));
    set(prevAnimationNameState, state$1.current === "mounted" ? currAnimationName : "none", true);
  });
  watch(() => get$2(node), (node2) => {
    if (!node2) return;
    set(styles, getComputedStyle(node2), true);
    return executeCallbacks(on(node2, "animationstart", handleAnimationStart), on(node2, "animationcancel", handleAnimationEnd), on(node2, "animationend", handleAnimationEnd));
  });
  const isPresentDerived = user_derived(() => ["mounted", "unmountSuspended"].includes(state$1.current));
  return {
    get current() {
      return get$2(isPresentDerived);
    }
  };
}
function getAnimationName(node) {
  return node ? getComputedStyle(node).animationName || "none" : "none";
}
function Presence_layer($$anchor, $$props) {
  push($$props, true);
  const isPresent = usePresence(box.with(() => $$props.present), box.with(() => $$props.id));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.presence ?? noop$4, () => ({ present: isPresent }));
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if ($$props.forceMount || $$props.present || isPresent.current) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
function addEventListener(target, event2, handler, options) {
  const events = Array.isArray(event2) ? event2 : [event2];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
class CustomEventDispatcher {
  constructor(eventName, options = { bubbles: true, cancelable: true }) {
    __publicField(this, "eventName");
    __publicField(this, "options");
    this.eventName = eventName;
    this.options = options;
  }
  createEvent(detail) {
    return new CustomEvent(this.eventName, {
      ...this.options,
      detail
    });
  }
  dispatch(element2, detail) {
    const event2 = this.createEvent(detail);
    element2.dispatchEvent(event2);
    return event2;
  }
  listen(element2, callback, options) {
    const handler = (event2) => {
      callback(event2);
    };
    return on(element2, this.eventName, handler, options);
  }
}
function debounce(fn, wait = 500) {
  let timeout = null;
  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
  debounced.destroy = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return (el == null ? void 0 : el.ownerDocument) ?? document;
}
function getDocument(element2) {
  return (element2 == null ? void 0 : element2.ownerDocument) ?? document;
}
function isClickTrulyOutside(event2, contentNode) {
  const { clientX, clientY } = event2;
  const rect = contentNode.getBoundingClientRect();
  return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
globalThis.bitsDismissableLayers ?? (globalThis.bitsDismissableLayers = /* @__PURE__ */ new Map());
class DismissibleLayerState {
  constructor(opts) {
    __privateAdd(this, _DismissibleLayerState_instances);
    __publicField(this, "opts");
    __privateAdd(this, _interactOutsideProp);
    __privateAdd(this, _behaviorType);
    __privateAdd(this, _interceptedEvents, { pointerdown: false });
    __privateAdd(this, _isResponsibleLayer, false);
    __privateAdd(this, _isFocusInsideDOMTree, false);
    __publicField(this, "node", box(null));
    __privateAdd(this, _documentObj);
    __privateAdd(this, _onFocusOutside);
    __privateAdd(this, _currNode, state(null));
    __privateAdd(this, _unsubClickListener, noop$3);
    __privateAdd(this, _handleFocus, (event2) => {
      if (event2.defaultPrevented) return;
      if (!this.currNode) return;
      afterTick(() => {
        var _a2, _b;
        if (!this.currNode || __privateGet(this, _isTargetWithinLayer).call(this, event2.target)) return;
        if (event2.target && !__privateGet(this, _isFocusInsideDOMTree)) {
          (_b = (_a2 = __privateGet(this, _onFocusOutside)).current) == null ? void 0 : _b.call(_a2, event2);
        }
      });
    });
    __privateAdd(this, _handleDismiss, (e) => {
      let event2 = e;
      if (event2.defaultPrevented) {
        event2 = createWrappedEvent(e);
      }
      __privateGet(this, _interactOutsideProp).current(e);
    });
    __privateAdd(this, _handleInteractOutside, debounce(
      (e) => {
        if (!this.currNode) {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        const isEventValid = this.opts.isValidEvent.current(e, this.currNode) || isValidEvent(e, this.currNode);
        if (!__privateGet(this, _isResponsibleLayer) || __privateMethod(this, _DismissibleLayerState_instances, isAnyEventIntercepted_fn).call(this) || !isEventValid) {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        let event2 = e;
        if (event2.defaultPrevented) {
          event2 = createWrappedEvent(event2);
        }
        if (__privateGet(this, _behaviorType).current !== "close" && __privateGet(this, _behaviorType).current !== "defer-otherwise-close") {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        if (e.pointerType === "touch") {
          __privateGet(this, _unsubClickListener).call(this);
          __privateSet(this, _unsubClickListener, addEventListener(__privateGet(this, _documentObj), "click", __privateGet(this, _handleDismiss), { once: true }));
        } else {
          __privateGet(this, _interactOutsideProp).current(event2);
        }
      },
      10
    ));
    __privateAdd(this, _markInterceptedEvent, (e) => {
      __privateGet(this, _interceptedEvents)[e.type] = true;
    });
    __privateAdd(this, _markNonInterceptedEvent, (e) => {
      __privateGet(this, _interceptedEvents)[e.type] = false;
    });
    __privateAdd(this, _markResponsibleLayer, () => {
      if (!this.node.current) return;
      __privateSet(this, _isResponsibleLayer, isResponsibleLayer(this.node.current));
    });
    __privateAdd(this, _isTargetWithinLayer, (target) => {
      if (!this.node.current) return false;
      return isOrContainsTarget(this.node.current, target);
    });
    __privateAdd(this, _resetState, debounce(
      () => {
        for (const eventType in __privateGet(this, _interceptedEvents)) {
          __privateGet(this, _interceptedEvents)[eventType] = false;
        }
        __privateSet(this, _isResponsibleLayer, false);
      },
      20
    ));
    __privateAdd(this, _onfocuscapture, () => {
      __privateSet(this, _isFocusInsideDOMTree, true);
    });
    __privateAdd(this, _onblurcapture, () => {
      __privateSet(this, _isFocusInsideDOMTree, false);
    });
    __publicField(this, "props", {
      onfocuscapture: __privateGet(this, _onfocuscapture),
      onblurcapture: __privateGet(this, _onblurcapture)
    });
    this.opts = opts;
    useRefById({
      id: opts.id,
      ref: this.node,
      deps: () => opts.enabled.current,
      onRefChange: (node) => {
        this.currNode = node;
      }
    });
    __privateSet(this, _behaviorType, opts.interactOutsideBehavior);
    __privateSet(this, _interactOutsideProp, opts.onInteractOutside);
    __privateSet(this, _onFocusOutside, opts.onFocusOutside);
    user_effect(() => {
      __privateSet(this, _documentObj, getOwnerDocument(this.currNode));
    });
    let unsubEvents = noop$3;
    const cleanup = () => {
      __privateGet(this, _resetState).call(this);
      globalThis.bitsDismissableLayers.delete(this);
      __privateGet(this, _handleInteractOutside).destroy();
      unsubEvents();
    };
    watch([() => this.opts.enabled.current, () => this.currNode], ([enabled, currNode]) => {
      if (!enabled || !currNode) return;
      afterSleep(1, () => {
        if (!this.currNode) return;
        globalThis.bitsDismissableLayers.set(this, __privateGet(this, _behaviorType));
        unsubEvents();
        unsubEvents = __privateMethod(this, _DismissibleLayerState_instances, addEventListeners_fn).call(this);
      });
      return cleanup;
    });
    onDestroyEffect(() => {
      __privateGet(this, _resetState).destroy();
      globalThis.bitsDismissableLayers.delete(this);
      __privateGet(this, _handleInteractOutside).destroy();
      __privateGet(this, _unsubClickListener).call(this);
      unsubEvents();
    });
  }
  get currNode() {
    return get$2(__privateGet(this, _currNode));
  }
  set currNode(value) {
    set(__privateGet(this, _currNode), value, true);
  }
}
_interactOutsideProp = new WeakMap();
_behaviorType = new WeakMap();
_interceptedEvents = new WeakMap();
_isResponsibleLayer = new WeakMap();
_isFocusInsideDOMTree = new WeakMap();
_documentObj = new WeakMap();
_onFocusOutside = new WeakMap();
_currNode = new WeakMap();
_unsubClickListener = new WeakMap();
_handleFocus = new WeakMap();
_DismissibleLayerState_instances = new WeakSet();
addEventListeners_fn = function() {
  return executeCallbacks(
    /**
     * CAPTURE INTERACTION START
     * mark interaction-start event as intercepted.
     * mark responsible layer during interaction start
     * to avoid checking if is responsible layer during interaction end
     * when a new floating element may have been opened.
     */
    on(__privateGet(this, _documentObj), "pointerdown", executeCallbacks(__privateGet(this, _markInterceptedEvent), __privateGet(this, _markResponsibleLayer)), { capture: true }),
    /**
     * BUBBLE INTERACTION START
     * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
     * to avoid prematurely checking if other events were intercepted.
     */
    on(__privateGet(this, _documentObj), "pointerdown", executeCallbacks(__privateGet(this, _markNonInterceptedEvent), __privateGet(this, _handleInteractOutside))),
    /**
     * HANDLE FOCUS OUTSIDE
     */
    on(__privateGet(this, _documentObj), "focusin", __privateGet(this, _handleFocus))
  );
};
_handleDismiss = new WeakMap();
_handleInteractOutside = new WeakMap();
_markInterceptedEvent = new WeakMap();
_markNonInterceptedEvent = new WeakMap();
_markResponsibleLayer = new WeakMap();
_isTargetWithinLayer = new WeakMap();
_resetState = new WeakMap();
isAnyEventIntercepted_fn = function() {
  const i = Object.values(__privateGet(this, _interceptedEvents)).some(Boolean);
  return i;
};
_onfocuscapture = new WeakMap();
_onblurcapture = new WeakMap();
function useDismissibleLayer(props) {
  return new DismissibleLayerState(props);
}
function getTopMostLayer(layersArr) {
  return layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}
function isResponsibleLayer(node) {
  const layersArr = [...globalThis.bitsDismissableLayers];
  const topMostLayer = getTopMostLayer(layersArr);
  if (topMostLayer) return topMostLayer[0].node.current === node;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode.node.current === node;
}
function isValidEvent(e, node) {
  if ("button" in e && e.button > 0) return false;
  const target = e.target;
  if (!isElement$1(target)) return false;
  const ownerDocument = getOwnerDocument(target);
  const isValid = ownerDocument.documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);
  return isValid;
}
function createWrappedEvent(e) {
  const capturedCurrentTarget = e.currentTarget;
  const capturedTarget = e.target;
  let newEvent;
  if (e instanceof PointerEvent) {
    newEvent = new PointerEvent(e.type, e);
  } else {
    newEvent = new PointerEvent("pointerdown", e);
  }
  let isPrevented = false;
  const wrappedEvent = new Proxy(newEvent, {
    get: (target, prop2) => {
      if (prop2 === "currentTarget") {
        return capturedCurrentTarget;
      }
      if (prop2 === "target") {
        return capturedTarget;
      }
      if (prop2 === "preventDefault") {
        return () => {
          isPrevented = true;
          if (typeof target.preventDefault === "function") {
            target.preventDefault();
          }
        };
      }
      if (prop2 === "defaultPrevented") {
        return isPrevented;
      }
      if (prop2 in target) {
        return target[prop2];
      }
      return e[prop2];
    }
  });
  return wrappedEvent;
}
function Dismissible_layer($$anchor, $$props) {
  push($$props, true);
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), onInteractOutside = prop($$props, "onInteractOutside", 3, noop$3), onFocusOutside = prop($$props, "onFocusOutside", 3, noop$3), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false);
  const dismissibleLayerState = useDismissibleLayer({
    id: box.with(() => $$props.id),
    interactOutsideBehavior: box.with(() => interactOutsideBehavior()),
    onInteractOutside: box.with(() => onInteractOutside()),
    enabled: box.with(() => $$props.enabled),
    onFocusOutside: box.with(() => onFocusOutside()),
    isValidEvent: box.with(() => isValidEvent2())
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$4, () => ({ props: dismissibleLayerState.props }));
  append($$anchor, fragment);
  pop();
}
globalThis.bitsEscapeLayers ?? (globalThis.bitsEscapeLayers = /* @__PURE__ */ new Map());
class EscapeLayerState {
  constructor(opts) {
    __publicField(this, "opts");
    __privateAdd(this, _addEventListener, () => {
      return on(document, "keydown", __privateGet(this, _onkeydown), { passive: false });
    });
    __privateAdd(this, _onkeydown, (e) => {
      if (e.key !== ESCAPE || !isResponsibleEscapeLayer(this)) return;
      const clonedEvent = new KeyboardEvent(e.type, e);
      e.preventDefault();
      const behaviorType = this.opts.escapeKeydownBehavior.current;
      if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
      this.opts.onEscapeKeydown.current(clonedEvent);
    });
    this.opts = opts;
    let unsubEvents = noop$3;
    watch(() => opts.enabled.current, (enabled) => {
      if (enabled) {
        globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
        unsubEvents = __privateGet(this, _addEventListener).call(this);
      }
      return () => {
        unsubEvents();
        globalThis.bitsEscapeLayers.delete(this);
      };
    });
  }
}
_addEventListener = new WeakMap();
_onkeydown = new WeakMap();
function useEscapeLayer(props) {
  return new EscapeLayerState(props);
}
function isResponsibleEscapeLayer(instance) {
  const layersArr = [...globalThis.bitsEscapeLayers];
  const topMostLayer = layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
  if (topMostLayer) return topMostLayer[0] === instance;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode === instance;
}
function Escape_layer($$anchor, $$props) {
  push($$props, true);
  let escapeKeydownBehavior = prop($$props, "escapeKeydownBehavior", 3, "close"), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop$3);
  useEscapeLayer({
    escapeKeydownBehavior: box.with(() => escapeKeydownBehavior()),
    onEscapeKeydown: box.with(() => onEscapeKeydown()),
    enabled: box.with(() => $$props.enabled)
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$4);
  append($$anchor, fragment);
  pop();
}
const focusStack = box([]);
function createFocusScopeStack() {
  return {
    add(focusScope) {
      const activeFocusScope = focusStack.current[0];
      if (activeFocusScope && focusScope.id !== activeFocusScope.id) {
        activeFocusScope.pause();
      }
      focusStack.current = removeFromFocusScopeArray(focusStack.current, focusScope);
      focusStack.current.unshift(focusScope);
    },
    remove(focusScope) {
      var _a2;
      focusStack.current = removeFromFocusScopeArray(focusStack.current, focusScope);
      (_a2 = focusStack.current[0]) == null ? void 0 : _a2.resume();
    },
    get current() {
      return focusStack.current;
    }
  };
}
function createFocusScopeAPI() {
  let paused = state(false);
  let isHandlingFocus = state(false);
  return {
    id: useId(),
    get paused() {
      return get$2(paused);
    },
    get isHandlingFocus() {
      return get$2(isHandlingFocus);
    },
    set isHandlingFocus(value) {
      set(isHandlingFocus, value, true);
    },
    pause() {
      set(paused, true);
    },
    resume() {
      set(paused, false);
    }
  };
}
function removeFromFocusScopeArray(arr, item) {
  return [...arr].filter((i) => i.id !== item.id);
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
function focus(element2, { select = false } = {}) {
  if (!(element2 && element2.focus))
    return;
  if (document.activeElement === element2)
    return;
  const previouslyFocusedElement = document.activeElement;
  element2.focus({ preventScroll: true });
  if (element2 !== previouslyFocusedElement && isSelectableInput$1(element2) && select) {
    element2.select();
  }
}
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement)
      return true;
  }
}
function findVisible(elements, container) {
  for (const element2 of elements) {
    if (!isElementHidden(element2, container))
      return element2;
  }
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    acceptNode: (node) => {
      const isHiddenInput3 = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput3)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
/*!
* tabbable 6.3.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element2) {
  var _element$getRootNode;
  return element2 === null || element2 === void 0 ? void 0 : (_element$getRootNode = element2.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element2);
} : function(element2) {
  return element2 === null || element2 === void 0 ? void 0 : element2.ownerDocument;
};
var _isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && _isInert(node.parentNode);
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (_isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element2 = elementsToCheck.shift();
    if (_isInert(element2, false)) {
      continue;
    }
    if (element2.tagName === "SLOT") {
      var assigned = element2.assignedElements();
      var content = assigned.length ? assigned : element2.children;
      var nestedCandidates = _getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element2,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element2, candidateSelector);
      if (validCandidate && options.filter(element2) && (includeContainer || !elements.includes(element2))) {
        candidates.push(element2);
      }
      var shadowRoot = element2.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element2);
      var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element2));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element2.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element2,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element2.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a2, b) {
  return a2.tabIndex === b.tabIndex ? a2.documentOrder - b.documentOrder : a2.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child2) {
    return child2.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref2) {
  var displayCheck = _ref2.displayCheck, getShadowRoot = _ref2.getShadowRoot;
  if (displayCheck === "full-native") {
    if ("checkVisibility" in node) {
      var visible = node.checkVisibility({
        // Checking opacity might be desirable for some use cases, but natively,
        // opacity zero elements _are_ focusable and tabbable.
        checkOpacity: false,
        opacityProperty: false,
        contentVisibilityAuto: true,
        visibilityProperty: true,
        // This is an alias for `visibilityProperty`. Contemporary browsers
        // support both. However, this alias has wider browser support (Chrome
        // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
        // we include it anyway.
        checkVisibilityCSS: true
      });
      return !visible;
    }
  }
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  displayCheck === "full-native" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child2 = parentNode.children.item(i);
          if (child2.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child2.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  _isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isShadowRootTabbable = function isShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var _sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scopeParent;
    var element2 = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element2, isScope);
    var elements = isScope ? _sortByOrder(item.candidates) : element2;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element2);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return _sortByOrder(candidates);
};
var focusable = function focusable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
const AutoFocusOnMountEvent = new CustomEventDispatcher("focusScope.autoFocusOnMount", { bubbles: false, cancelable: true });
const AutoFocusOnDestroyEvent = new CustomEventDispatcher("focusScope.autoFocusOnDestroy", { bubbles: false, cancelable: true });
const FocusScopeContext = new Context("FocusScope");
function useFocusScope({
  id,
  loop: loop2,
  enabled,
  onOpenAutoFocus,
  onCloseAutoFocus,
  forceMount
}) {
  const focusScopeStack = createFocusScopeStack();
  const focusScope = createFocusScopeAPI();
  const ref = box(null);
  const ctx = FocusScopeContext.getOr({ ignoreCloseAutoFocus: false });
  let lastFocusedElement = null;
  useRefById({ id, ref, deps: () => enabled.current });
  function manageFocus(event2) {
    if (focusScope.paused || !ref.current || focusScope.isHandlingFocus) return;
    focusScope.isHandlingFocus = true;
    try {
      const target = event2.target;
      if (!isHTMLElement$1(target)) return;
      const isWithinActiveScope = ref.current.contains(target);
      if (event2.type === "focusin") {
        if (isWithinActiveScope) {
          lastFocusedElement = target;
        } else {
          if (ctx.ignoreCloseAutoFocus) return;
          focus(lastFocusedElement, { select: true });
        }
      } else if (event2.type === "focusout") {
        if (!isWithinActiveScope && !ctx.ignoreCloseAutoFocus) {
          focus(lastFocusedElement, { select: true });
        }
      }
    } finally {
      focusScope.isHandlingFocus = false;
    }
  }
  function handleMutations(mutations) {
    if (!lastFocusedElement || !ref.current) return;
    let elementWasRemoved = false;
    for (const mutation of mutations) {
      if (mutation.type === "childList" && mutation.removedNodes.length > 0) {
        for (const removedNode of mutation.removedNodes) {
          if (removedNode === lastFocusedElement) {
            elementWasRemoved = true;
            break;
          }
          if (removedNode.nodeType === Node.ELEMENT_NODE && removedNode.contains(lastFocusedElement)) {
            elementWasRemoved = true;
            break;
          }
        }
      }
      if (elementWasRemoved) break;
    }
    if (elementWasRemoved && ref.current && !ref.current.contains(document.activeElement)) {
      focus(ref.current);
    }
  }
  watch([() => ref.current, () => enabled.current], ([container, enabled2]) => {
    if (!container || !enabled2) return;
    const removeEvents = executeCallbacks(on(document, "focusin", manageFocus), on(document, "focusout", manageFocus));
    const mutationObserver = new MutationObserver(handleMutations);
    mutationObserver.observe(container, { childList: true, subtree: true, attributes: false });
    return () => {
      removeEvents();
      mutationObserver.disconnect();
    };
  });
  watch([() => forceMount.current, () => ref.current], ([forceMount2, container]) => {
    if (forceMount2) return;
    const prevFocusedElement = document.activeElement;
    handleOpen(container, prevFocusedElement);
    return () => {
      if (!container) return;
      handleClose(prevFocusedElement);
    };
  });
  watch(
    [
      () => forceMount.current,
      () => ref.current,
      () => enabled.current
    ],
    ([forceMount2, container]) => {
      if (!forceMount2) return;
      const prevFocusedElement = document.activeElement;
      handleOpen(container, prevFocusedElement);
      return () => {
        if (!container) return;
        handleClose(prevFocusedElement);
      };
    }
  );
  function handleOpen(container, prevFocusedElement) {
    if (!container) container = document.getElementById(id.current);
    if (!container || !enabled.current) return;
    focusScopeStack.add(focusScope);
    const hasFocusedCandidate = container.contains(prevFocusedElement);
    if (!hasFocusedCandidate) {
      const mountEvent = AutoFocusOnMountEvent.createEvent();
      onOpenAutoFocus.current(mountEvent);
      if (!mountEvent.defaultPrevented) {
        afterTick(() => {
          if (!container) return;
          const result = focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (!result) focus(container);
        });
      }
    }
  }
  function handleClose(prevFocusedElement) {
    var _a2;
    const destroyEvent = AutoFocusOnDestroyEvent.createEvent();
    (_a2 = onCloseAutoFocus.current) == null ? void 0 : _a2.call(onCloseAutoFocus, destroyEvent);
    const shouldIgnore = ctx.ignoreCloseAutoFocus;
    afterSleep(0, () => {
      if (!destroyEvent.defaultPrevented && prevFocusedElement && !shouldIgnore) {
        focus(isTabbable(prevFocusedElement) ? prevFocusedElement : document.body, { select: true });
      }
      focusScopeStack.remove(focusScope);
    });
  }
  function handleKeydown(e) {
    if (!enabled.current) return;
    if (!loop2.current && !enabled.current) return;
    if (focusScope.paused) return;
    const isTabKey = e.key === TAB && !e.ctrlKey && !e.altKey && !e.metaKey;
    const focusedElement = document.activeElement;
    if (!(isTabKey && focusedElement)) return;
    const container = ref.current;
    if (!container) return;
    const [first, last] = getTabbableEdges(container);
    const hasTabbableElementsInside = first && last;
    if (!hasTabbableElementsInside) {
      if (focusedElement === container) {
        e.preventDefault();
      }
    } else {
      if (!e.shiftKey && focusedElement === last) {
        e.preventDefault();
        if (loop2.current) focus(first, { select: true });
      } else if (e.shiftKey && focusedElement === first) {
        e.preventDefault();
        if (loop2.current) focus(last, { select: true });
      }
    }
  }
  const props = user_derived(() => ({ id: id.current, tabindex: -1, onkeydown: handleKeydown }));
  return {
    get props() {
      return get$2(props);
    }
  };
}
function Focus_scope($$anchor, $$props) {
  push($$props, true);
  let trapFocus = prop($$props, "trapFocus", 3, false), loop2 = prop($$props, "loop", 3, false), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop$3), onOpenAutoFocus = prop($$props, "onOpenAutoFocus", 3, noop$3), forceMount = prop($$props, "forceMount", 3, false);
  const focusScopeState = useFocusScope({
    enabled: box.with(() => trapFocus()),
    loop: box.with(() => loop2()),
    onCloseAutoFocus: box.with(() => onCloseAutoFocus()),
    onOpenAutoFocus: box.with(() => onOpenAutoFocus()),
    id: box.with(() => $$props.id),
    forceMount: box.with(() => forceMount())
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.focusScope ?? noop$4, () => ({ props: focusScopeState.props }));
  append($$anchor, fragment);
  pop();
}
globalThis.bitsTextSelectionLayers ?? (globalThis.bitsTextSelectionLayers = /* @__PURE__ */ new Map());
class TextSelectionLayerState {
  constructor(opts) {
    __privateAdd(this, _TextSelectionLayerState_instances);
    __publicField(this, "opts");
    __privateAdd(this, _unsubSelectionLock, noop$3);
    __privateAdd(this, _ref, box(null));
    __privateAdd(this, _pointerdown, (e) => {
      const node = __privateGet(this, _ref).current;
      const target = e.target;
      if (!isHTMLElement$1(node) || !isHTMLElement$1(target) || !this.opts.enabled.current) return;
      if (!isHighestLayer(this) || !isOrContainsTarget(node, target)) return;
      this.opts.onPointerDown.current(e);
      if (e.defaultPrevented) return;
      __privateSet(this, _unsubSelectionLock, preventTextSelectionOverflow(node));
    });
    __privateAdd(this, _resetSelectionLock, () => {
      __privateGet(this, _unsubSelectionLock).call(this);
      __privateSet(this, _unsubSelectionLock, noop$3);
    });
    this.opts = opts;
    useRefById({
      id: opts.id,
      ref: __privateGet(this, _ref),
      deps: () => this.opts.enabled.current
    });
    let unsubEvents = noop$3;
    watch(() => this.opts.enabled.current, (isEnabled) => {
      if (isEnabled) {
        globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
        unsubEvents();
        unsubEvents = __privateMethod(this, _TextSelectionLayerState_instances, addEventListeners_fn2).call(this);
      }
      return () => {
        unsubEvents();
        __privateGet(this, _resetSelectionLock).call(this);
        globalThis.bitsTextSelectionLayers.delete(this);
      };
    });
  }
}
_unsubSelectionLock = new WeakMap();
_ref = new WeakMap();
_TextSelectionLayerState_instances = new WeakSet();
addEventListeners_fn2 = function() {
  return executeCallbacks(on(document, "pointerdown", __privateGet(this, _pointerdown)), on(document, "pointerup", composeHandlers(__privateGet(this, _resetSelectionLock), this.opts.onPointerUp.current)));
};
_pointerdown = new WeakMap();
_resetSelectionLock = new WeakMap();
function useTextSelectionLayer(props) {
  return new TextSelectionLayerState(props);
}
const getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node) {
  const body = document.body;
  const originalBodyUserSelect = getUserSelect(body);
  const originalNodeUserSelect = getUserSelect(node);
  setUserSelect(body, "none");
  setUserSelect(node, "text");
  return () => {
    setUserSelect(body, originalBodyUserSelect);
    setUserSelect(node, originalNodeUserSelect);
  };
}
function setUserSelect(node, value) {
  node.style.userSelect = value;
  node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
  const layersArr = [...globalThis.bitsTextSelectionLayers];
  if (!layersArr.length) return false;
  const highestLayer = layersArr.at(-1);
  if (!highestLayer) return false;
  return highestLayer[0] === instance;
}
function Text_selection_layer($$anchor, $$props) {
  push($$props, true);
  let preventOverflowTextSelection = prop($$props, "preventOverflowTextSelection", 3, true), onPointerDown = prop($$props, "onPointerDown", 3, noop$3), onPointerUp = prop($$props, "onPointerUp", 3, noop$3);
  useTextSelectionLayer({
    id: box.with(() => $$props.id),
    onPointerDown: box.with(() => onPointerDown()),
    onPointerUp: box.with(() => onPointerUp()),
    enabled: box.with(() => $$props.enabled && preventOverflowTextSelection())
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$4);
  append($$anchor, fragment);
  pop();
}
function createSharedHook(factory) {
  let subscribers = 0;
  let state$1 = state(void 0);
  let scope;
  function dispose() {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope();
      set(state$1, void 0);
      scope = void 0;
    }
  }
  return (...args) => {
    subscribers += 1;
    if (get$2(state$1) === void 0) {
      scope = effect_root(() => {
        set(state$1, factory(...args), true);
      });
    }
    user_effect(() => {
      return () => {
        dispose();
      };
    });
    return get$2(state$1);
  };
}
const useBodyLockStackCount = createSharedHook(() => {
  const map = new SvelteMap();
  const locked = user_derived(() => {
    for (const value of map.values()) {
      if (value) {
        return true;
      }
    }
    return false;
  });
  let initialBodyStyle = state(null);
  let stopTouchMoveListener = null;
  function resetBodyStyle() {
    if (!isBrowser) return;
    document.body.setAttribute("style", get$2(initialBodyStyle) ?? "");
    document.body.style.removeProperty("--scrollbar-width");
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
  }
  user_effect(() => {
    const curr = get$2(locked);
    return untrack(() => {
      if (!curr) {
        return;
      }
      set(initialBodyStyle, document.body.getAttribute("style"), true);
      const bodyStyle = getComputedStyle(document.body);
      const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const paddingRight = Number.parseInt(bodyStyle.paddingRight ?? "0", 10);
      const config = {
        padding: paddingRight + verticalScrollbarWidth,
        margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
      };
      if (verticalScrollbarWidth > 0) {
        document.body.style.paddingRight = `${config.padding}px`;
        document.body.style.marginRight = `${config.margin}px`;
        document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
        document.body.style.overflow = "hidden";
      }
      if (isIOS) {
        stopTouchMoveListener = addEventListener(
          document,
          "touchmove",
          (e) => {
            if (e.target !== document.documentElement) return;
            if (e.touches.length > 1) return;
            e.preventDefault();
          },
          { passive: false }
        );
      }
      afterTick(() => {
        document.body.style.pointerEvents = "none";
        document.body.style.overflow = "hidden";
      });
    });
  });
  user_effect(() => {
    return () => {
      stopTouchMoveListener == null ? void 0 : stopTouchMoveListener();
    };
  });
  return {
    get map() {
      return map;
    },
    resetBodyStyle
  };
});
function useBodyScrollLock(initialState, restoreScrollDelay = () => null) {
  const id = useId();
  const countState = useBodyLockStackCount();
  if (!countState) return;
  const _restoreScrollDelay = user_derived(restoreScrollDelay);
  countState.map.set(id, initialState ?? false);
  const locked = box.with(() => countState.map.get(id) ?? false, (v) => countState.map.set(id, v));
  user_effect(() => {
    return () => {
      countState.map.delete(id);
      if (isAnyLocked(countState.map)) return;
      if (get$2(_restoreScrollDelay) === null) {
        requestAnimationFrame(() => countState.resetBodyStyle());
      } else {
        afterSleep(get$2(_restoreScrollDelay), () => countState.resetBodyStyle());
      }
    };
  });
  return locked;
}
function isAnyLocked(map) {
  for (const [_, value] of map) {
    if (value) return true;
  }
  return false;
}
function Scroll_lock($$anchor, $$props) {
  push($$props, true);
  let preventScroll = prop($$props, "preventScroll", 3, true), restoreScrollDelay = prop($$props, "restoreScrollDelay", 3, null);
  useBodyScrollLock(preventScroll(), () => restoreScrollDelay());
  pop();
}
function getNextMatch(values, search, currentMatch) {
  const lowerSearch = search.toLowerCase();
  if (lowerSearch.endsWith(" ")) {
    const searchWithoutSpace = lowerSearch.slice(0, -1);
    const matchesWithoutSpace = values.filter((value) => value.toLowerCase().startsWith(searchWithoutSpace));
    if (matchesWithoutSpace.length <= 1) {
      return getNextMatch(values, searchWithoutSpace, currentMatch);
    }
    const currentMatchLowercase = currentMatch == null ? void 0 : currentMatch.toLowerCase();
    if (currentMatchLowercase && currentMatchLowercase.startsWith(searchWithoutSpace) && currentMatchLowercase.charAt(searchWithoutSpace.length) === " " && search.trim() === searchWithoutSpace) {
      return currentMatch;
    }
    const spacedMatches = values.filter((value) => value.toLowerCase().startsWith(lowerSearch));
    if (spacedMatches.length > 0) {
      const currentMatchIndex2 = currentMatch ? values.indexOf(currentMatch) : -1;
      let wrappedMatches = wrapArray(spacedMatches, Math.max(currentMatchIndex2, 0));
      const nextMatch2 = wrappedMatches.find((match) => match !== currentMatch);
      return nextMatch2 || currentMatch;
    }
  }
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const normalizedLowerSearch = normalizedSearch.toLowerCase();
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find((value) => value == null ? void 0 : value.toLowerCase().startsWith(normalizedLowerSearch));
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
const yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ["left", "right"];
const rlPlacement = ["right", "left"];
const tbPlacement = ["top", "bottom"];
const btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list2 = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list2 = list2.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list2 = list2.concat(list2.map(getOppositeAlignmentPlacement));
    }
  }
  return list2;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref2, placement, rtl) {
  let {
    reference,
    floating
  } = _ref2;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset: reset2
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset2 && resetCount <= 50) {
      resetCount++;
      if (typeof reset2 === "object") {
        if (reset2.placement) {
          statefulPlacement = reset2.placement;
        }
        if (reset2.rects) {
          rects = reset2.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset2.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state2, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state2;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state2);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element2 = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element2))) != null ? _await$platform$isEle : true) ? element2 : element2.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state2) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state2;
    const {
      element: element2,
      padding = 0
    } = evaluate(options, state2) || {};
    if (element2 == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element2);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element2));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state2) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state2;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state2);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state2, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b) => a2.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b) => a2[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state2) {
      const {
        rects
      } = state2;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state2);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state2, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state2, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
const originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state2, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state2;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state2);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state2) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state2;
      const diffCoords = await convertValueToCoords(state2, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state2) {
      const {
        x,
        y,
        placement
      } = state2;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref2) => {
            let {
              x: x2,
              y: y2
            } = _ref2;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state2);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state2, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state2,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state2) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state2;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state2);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state2);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state2) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state2;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state2);
      const overflow = await detectOverflow(state2, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state2.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state2.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state2.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state2,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref2;
  return (_ref2 = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref2.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element2) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element2);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element2) {
  return tableElements.has(getNodeName(element2));
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element2) {
  return topLayerSelectors.some((selector) => {
    try {
      return element2.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
const willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
const containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element2) {
  let currentNode = getParentNode(element2);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
const lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function getNodeScroll(element2) {
  if (isElement(element2)) {
    return {
      scrollLeft: element2.scrollLeft,
      scrollTop: element2.scrollTop
    };
  }
  return {
    scrollLeft: element2.scrollX,
    scrollTop: element2.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list2, traverseIframes) {
  var _node$ownerDocument2;
  if (list2 === void 0) {
    list2 = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list2.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list2.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element2) {
  const css = getComputedStyle$1(element2);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element2);
  const offsetWidth = hasOffset ? element2.offsetWidth : width;
  const offsetHeight = hasOffset ? element2.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element2) {
  return !isElement(element2) ? element2.contextElement : element2;
}
function getScale(element2) {
  const domElement = unwrapElement(element2);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element2) {
  const win = getWindow(element2);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element2, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element2)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element2.getBoundingClientRect();
  const domElement = unwrapElement(element2);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element2);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element2, rect) {
  const leftScroll = getNodeScroll(element2).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element2)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref2) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref2;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element2) {
  return Array.from(element2.getClientRects());
}
function getDocumentRect(element2) {
  const html2 = getDocumentElement(element2);
  const scroll = getNodeScroll(element2);
  const body = element2.ownerDocument.body;
  const width = max(html2.scrollWidth, html2.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html2.scrollHeight, html2.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element2);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html2.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
const SCROLLBAR_MAX = 25;
function getViewportRect(element2, strategy) {
  const win = getWindow(element2);
  const html2 = getDocumentElement(element2);
  const visualViewport = win.visualViewport;
  let width = html2.clientWidth;
  let height = html2.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html2);
  if (windowScrollbarX <= 0) {
    const doc = html2.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html2.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
const absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element2, strategy) {
  const clientRect = getBoundingClientRect(element2, true, strategy === "fixed");
  const top = clientRect.top + element2.clientTop;
  const left = clientRect.left + element2.clientLeft;
  const scale = isHTMLElement(element2) ? getScale(element2) : createCoords(1);
  const width = element2.clientWidth * scale.x;
  const height = element2.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element2, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element2, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element2));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element2);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element2, stopNode) {
  const parentNode = getParentNode(element2);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element2, cache) {
  const cachedResult = cache.get(element2);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element2, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element2).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element2) : element2;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element2, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element2, result);
  return result;
}
function getClippingRect(_ref2) {
  let {
    element: element2,
    boundary,
    rootBoundary,
    strategy
  } = _ref2;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element2) ? [] : getClippingElementAncestors(element2, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element2, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element2, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element2) {
  const {
    width,
    height
  } = getCssDimensions(element2);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element2, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element2, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element2) {
  return getComputedStyle$1(element2).position === "static";
}
function getTrueOffsetParent(element2, polyfill) {
  if (!isHTMLElement(element2) || getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element2);
  }
  let rawOffsetParent = element2.offsetParent;
  if (getDocumentElement(element2) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element2, polyfill) {
  const win = getWindow(element2);
  if (isTopLayer(element2)) {
    return win;
  }
  if (!isHTMLElement(element2)) {
    let svgOffsetParent = getParentNode(element2);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element2, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element2) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element2) {
  return getComputedStyle$1(element2).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a2, b) {
  return a2.x === b.x && a2.y === b.y && a2.width === b.width && a2.height === b.height;
}
function observeMove(element2, onMove) {
  let io = null;
  let timeoutId;
  const root2 = getDocumentElement(element2);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element2.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root2.clientWidth - (left + width));
    const insetBottom = floor(root2.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element2.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root2.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element2);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref2) => {
      let [firstEntry] = _ref2;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const hide = hide$1;
const arrow = arrow$1;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function get(valueOrGetValue) {
  return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element2) {
  if (typeof window === "undefined") return 1;
  const win = element2.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element2, value) {
  const dpr = getDPR(element2);
  return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
  return {
    [`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
    [`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
    [`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
    [`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
    [`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
  };
}
function useFloating(options) {
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = user_derived(() => get(options.open) ?? true);
  const middlewareOption = user_derived(() => get(options.middleware));
  const transformOption = user_derived(() => get(options.transform) ?? true);
  const placementOption = user_derived(() => get(options.placement) ?? "bottom");
  const strategyOption = user_derived(() => get(options.strategy) ?? "absolute");
  const reference = options.reference;
  let x = state(0);
  let y = state(0);
  const floating = box(null);
  let strategy = state(proxy(get$2(strategyOption)));
  let placement = state(proxy(get$2(placementOption)));
  let middlewareData = state(proxy({}));
  let isPositioned = state(false);
  const floatingStyles = user_derived(() => {
    const initialStyles = { position: get$2(strategy), left: "0", top: "0" };
    if (!floating.current) {
      return initialStyles;
    }
    const xVal = roundByDPR(floating.current, get$2(x));
    const yVal = roundByDPR(floating.current, get$2(y));
    if (get$2(transformOption)) {
      return {
        ...initialStyles,
        transform: `translate(${xVal}px, ${yVal}px)`,
        ...getDPR(floating.current) >= 1.5 && { willChange: "transform" }
      };
    }
    return {
      position: get$2(strategy),
      left: `${xVal}px`,
      top: `${yVal}px`
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (reference.current === null || floating.current === null) return;
    computePosition(reference.current, floating.current, {
      middleware: get$2(middlewareOption),
      placement: get$2(placementOption),
      strategy: get$2(strategyOption)
    }).then((position) => {
      set(x, position.x, true);
      set(y, position.y, true);
      set(strategy, position.strategy, true);
      set(placement, position.placement, true);
      set(middlewareData, position.middlewareData, true);
      set(isPositioned, true);
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (reference.current === null || floating.current === null) return;
    whileElementsMountedCleanup = whileElementsMountedOption(reference.current, floating.current, update);
  }
  function reset2() {
    if (!get$2(openOption)) {
      set(isPositioned, false);
    }
  }
  user_effect(update);
  user_effect(attach);
  user_effect(reset2);
  user_effect(() => cleanup);
  return {
    floating,
    reference,
    get strategy() {
      return get$2(strategy);
    },
    get placement() {
      return get$2(placement);
    },
    get middlewareData() {
      return get$2(middlewareData);
    },
    get isPositioned() {
      return get$2(isPositioned);
    },
    get floatingStyles() {
      return get$2(floatingStyles);
    },
    get update() {
      return update;
    }
  };
}
const OPPOSITE_SIDE = { top: "bottom", right: "left", bottom: "top", left: "right" };
class FloatingRootState {
  constructor() {
    __publicField(this, "anchorNode", box(null));
    __publicField(this, "customAnchorNode", box(null));
    __publicField(this, "triggerNode", box(null));
    user_effect(() => {
      if (this.customAnchorNode.current) {
        if (typeof this.customAnchorNode.current === "string") {
          this.anchorNode.current = document.querySelector(this.customAnchorNode.current);
        } else {
          this.anchorNode.current = this.customAnchorNode.current;
        }
      } else {
        this.anchorNode.current = this.triggerNode.current;
      }
    });
  }
}
class FloatingContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    // nodes
    __publicField(this, "contentRef", box(null));
    __publicField(this, "wrapperRef", box(null));
    __publicField(this, "arrowRef", box(null));
    // ids
    __publicField(this, "arrowId", box(useId()));
    __privateAdd(this, _transformedStyle, user_derived(() => {
      if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
      if (!this.opts.style) return {};
    }));
    __privateAdd(this, _updatePositionStrategy);
    __privateAdd(this, _arrowSize, new ElementSize(() => this.arrowRef.current ?? void 0));
    __privateAdd(this, _arrowWidth, user_derived(() => {
      var _a2;
      return ((_a2 = __privateGet(this, _arrowSize)) == null ? void 0 : _a2.width) ?? 0;
    }));
    __privateAdd(this, _arrowHeight, user_derived(() => {
      var _a2;
      return ((_a2 = __privateGet(this, _arrowSize)) == null ? void 0 : _a2.height) ?? 0;
    }));
    __privateAdd(this, _desiredPlacement, user_derived(() => {
      var _a2;
      return ((_a2 = this.opts.side) == null ? void 0 : _a2.current) + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : "");
    }));
    __privateAdd(this, _boundary, user_derived(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]));
    __privateAdd(this, _hasExplicitBoundaries, user_derived(() => get$2(__privateGet(this, _boundary)).length > 0));
    __privateAdd(this, _detectOverflowOptions, user_derived(() => ({
      padding: this.opts.collisionPadding.current,
      boundary: get$2(__privateGet(this, _boundary)).filter(isNotNull),
      altBoundary: this.hasExplicitBoundaries
    })));
    __privateAdd(this, _availableWidth, state(void 0));
    __privateAdd(this, _availableHeight, state(void 0));
    __privateAdd(this, _anchorWidth, state(void 0));
    __privateAdd(this, _anchorHeight, state(void 0));
    __privateAdd(this, _middleware, user_derived(() => [
      offset({
        mainAxis: this.opts.sideOffset.current + get$2(__privateGet(this, _arrowHeight)),
        alignmentAxis: this.opts.alignOffset.current
      }),
      this.opts.avoidCollisions.current && shift({
        mainAxis: true,
        crossAxis: false,
        limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
        ...this.detectOverflowOptions
      }),
      this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
      size({
        ...this.detectOverflowOptions,
        apply: ({ rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          set(__privateGet(this, _availableWidth), availableWidth, true);
          set(__privateGet(this, _availableHeight), availableHeight, true);
          set(__privateGet(this, _anchorWidth), anchorWidth, true);
          set(__privateGet(this, _anchorHeight), anchorHeight, true);
        }
      }),
      this.arrowRef.current && arrow({
        element: this.arrowRef.current,
        padding: this.opts.arrowPadding.current
      }),
      transformOrigin({
        arrowWidth: get$2(__privateGet(this, _arrowWidth)),
        arrowHeight: get$2(__privateGet(this, _arrowHeight))
      }),
      this.opts.hideWhenDetached.current && hide({ strategy: "referenceHidden", ...this.detectOverflowOptions })
    ].filter(Boolean)));
    __publicField(this, "floating");
    __privateAdd(this, _placedSide, user_derived(() => getSideFromPlacement(this.floating.placement)));
    __privateAdd(this, _placedAlign, user_derived(() => getAlignFromPlacement(this.floating.placement)));
    __privateAdd(this, _arrowX, user_derived(() => {
      var _a2;
      return ((_a2 = this.floating.middlewareData.arrow) == null ? void 0 : _a2.x) ?? 0;
    }));
    __privateAdd(this, _arrowY, user_derived(() => {
      var _a2;
      return ((_a2 = this.floating.middlewareData.arrow) == null ? void 0 : _a2.y) ?? 0;
    }));
    __privateAdd(this, _cannotCenterArrow, user_derived(() => {
      var _a2;
      return ((_a2 = this.floating.middlewareData.arrow) == null ? void 0 : _a2.centerOffset) !== 0;
    }));
    __privateAdd(this, _contentZIndex, state());
    __privateAdd(this, _arrowBaseSide, user_derived(() => OPPOSITE_SIDE[this.placedSide]));
    __privateAdd(this, _wrapperProps, user_derived(() => {
      var _a2, _b, _c;
      return {
        id: this.opts.wrapperId.current,
        "data-bits-floating-content-wrapper": "",
        style: {
          ...this.floating.floatingStyles,
          transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: this.contentZIndex,
          "--bits-floating-transform-origin": `${(_a2 = this.floating.middlewareData.transformOrigin) == null ? void 0 : _a2.x} ${(_b = this.floating.middlewareData.transformOrigin) == null ? void 0 : _b.y}`,
          "--bits-floating-available-width": `${get$2(__privateGet(this, _availableWidth))}px`,
          "--bits-floating-available-height": `${get$2(__privateGet(this, _availableHeight))}px`,
          "--bits-floating-anchor-width": `${get$2(__privateGet(this, _anchorWidth))}px`,
          "--bits-floating-anchor-height": `${get$2(__privateGet(this, _anchorHeight))}px`,
          ...((_c = this.floating.middlewareData.hide) == null ? void 0 : _c.referenceHidden) && { visibility: "hidden", "pointer-events": "none" },
          ...get$2(__privateGet(this, _transformedStyle))
        },
        dir: this.opts.dir.current
      };
    }));
    __privateAdd(this, _props, user_derived(() => ({
      "data-side": this.placedSide,
      "data-align": this.placedAlign,
      style: styleToString({ ...get$2(__privateGet(this, _transformedStyle)) })
    })));
    __privateAdd(this, _arrowStyle, user_derived(() => ({
      position: "absolute",
      left: this.arrowX ? `${this.arrowX}px` : void 0,
      top: this.arrowY ? `${this.arrowY}px` : void 0,
      [this.arrowBaseSide]: 0,
      "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide],
      transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: "rotate(180deg)",
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
      }[this.placedSide],
      visibility: this.cannotCenterArrow ? "hidden" : void 0
    })));
    this.opts = opts;
    this.root = root2;
    if (opts.customAnchor) {
      this.root.customAnchorNode.current = opts.customAnchor.current;
    }
    watch(() => opts.customAnchor.current, (customAnchor) => {
      this.root.customAnchorNode.current = customAnchor;
    });
    useRefById({
      id: this.opts.wrapperId,
      ref: this.wrapperRef,
      deps: () => this.opts.enabled.current
    });
    useRefById({
      id: this.opts.id,
      ref: this.contentRef,
      deps: () => this.opts.enabled.current
    });
    this.floating = useFloating({
      strategy: () => this.opts.strategy.current,
      placement: () => get$2(__privateGet(this, _desiredPlacement)),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...args) => {
        var _a2;
        const cleanup = autoUpdate(...args, {
          animationFrame: ((_a2 = __privateGet(this, _updatePositionStrategy)) == null ? void 0 : _a2.current) === "always"
        });
        return cleanup;
      },
      open: () => this.opts.enabled.current
    });
    user_effect(() => {
      var _a2;
      if (!this.floating.isPositioned) return;
      (_a2 = this.opts.onPlaced) == null ? void 0 : _a2.current();
    });
    watch(() => this.contentRef.current, (contentNode) => {
      if (!contentNode) return;
      this.contentZIndex = window.getComputedStyle(contentNode).zIndex;
    });
    user_effect(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
  get hasExplicitBoundaries() {
    return get$2(__privateGet(this, _hasExplicitBoundaries));
  }
  set hasExplicitBoundaries(value) {
    set(__privateGet(this, _hasExplicitBoundaries), value);
  }
  get detectOverflowOptions() {
    return get$2(__privateGet(this, _detectOverflowOptions));
  }
  set detectOverflowOptions(value) {
    set(__privateGet(this, _detectOverflowOptions), value);
  }
  get middleware() {
    return get$2(__privateGet(this, _middleware));
  }
  set middleware(value) {
    set(__privateGet(this, _middleware), value);
  }
  get placedSide() {
    return get$2(__privateGet(this, _placedSide));
  }
  set placedSide(value) {
    set(__privateGet(this, _placedSide), value);
  }
  get placedAlign() {
    return get$2(__privateGet(this, _placedAlign));
  }
  set placedAlign(value) {
    set(__privateGet(this, _placedAlign), value);
  }
  get arrowX() {
    return get$2(__privateGet(this, _arrowX));
  }
  set arrowX(value) {
    set(__privateGet(this, _arrowX), value);
  }
  get arrowY() {
    return get$2(__privateGet(this, _arrowY));
  }
  set arrowY(value) {
    set(__privateGet(this, _arrowY), value);
  }
  get cannotCenterArrow() {
    return get$2(__privateGet(this, _cannotCenterArrow));
  }
  set cannotCenterArrow(value) {
    set(__privateGet(this, _cannotCenterArrow), value);
  }
  get contentZIndex() {
    return get$2(__privateGet(this, _contentZIndex));
  }
  set contentZIndex(value) {
    set(__privateGet(this, _contentZIndex), value, true);
  }
  get arrowBaseSide() {
    return get$2(__privateGet(this, _arrowBaseSide));
  }
  set arrowBaseSide(value) {
    set(__privateGet(this, _arrowBaseSide), value);
  }
  get wrapperProps() {
    return get$2(__privateGet(this, _wrapperProps));
  }
  set wrapperProps(value) {
    set(__privateGet(this, _wrapperProps), value);
  }
  get props() {
    return get$2(__privateGet(this, _props));
  }
  set props(value) {
    set(__privateGet(this, _props), value);
  }
  get arrowStyle() {
    return get$2(__privateGet(this, _arrowStyle));
  }
  set arrowStyle(value) {
    set(__privateGet(this, _arrowStyle), value);
  }
}
_transformedStyle = new WeakMap();
_updatePositionStrategy = new WeakMap();
_arrowSize = new WeakMap();
_arrowWidth = new WeakMap();
_arrowHeight = new WeakMap();
_desiredPlacement = new WeakMap();
_boundary = new WeakMap();
_hasExplicitBoundaries = new WeakMap();
_detectOverflowOptions = new WeakMap();
_availableWidth = new WeakMap();
_availableHeight = new WeakMap();
_anchorWidth = new WeakMap();
_anchorHeight = new WeakMap();
_middleware = new WeakMap();
_placedSide = new WeakMap();
_placedAlign = new WeakMap();
_arrowX = new WeakMap();
_arrowY = new WeakMap();
_cannotCenterArrow = new WeakMap();
_contentZIndex = new WeakMap();
_arrowBaseSide = new WeakMap();
_wrapperProps = new WeakMap();
_props = new WeakMap();
_arrowStyle = new WeakMap();
class FloatingAnchorState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "ref", box(null));
    this.opts = opts;
    this.root = root2;
    if (opts.virtualEl && opts.virtualEl.current) {
      root2.triggerNode = box.from(opts.virtualEl.current);
    } else {
      useRefById({
        id: opts.id,
        ref: this.ref,
        onRefChange: (node) => {
          root2.triggerNode.current = node;
        }
      });
    }
  }
}
const FloatingRootContext = new Context("Floating.Root");
const FloatingContentContext = new Context("Floating.Content");
function useFloatingRootState() {
  return FloatingRootContext.set(new FloatingRootState());
}
function useFloatingContentState(props) {
  return FloatingContentContext.set(new FloatingContentState(props, FloatingRootContext.get()));
}
function useFloatingAnchorState(props) {
  return new FloatingAnchorState(props, FloatingRootContext.get());
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      var _a2, _b, _c;
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = ((_a2 = middlewareData.arrow) == null ? void 0 : _a2.centerOffset) !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
      const arrowXCenter = (((_b = middlewareData.arrow) == null ? void 0 : _b.x) ?? 0) + arrowWidth / 2;
      const arrowYCenter = (((_c = middlewareData.arrow) == null ? void 0 : _c.y) ?? 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: { x, y } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
function getSideFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[1];
}
function Floating_layer($$anchor, $$props) {
  push($$props, true);
  useFloatingRootState();
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$4);
  append($$anchor, fragment);
  pop();
}
function boxAutoReset(defaultValue, afterMs = 1e4, onChange = noop$3) {
  let timeout = null;
  let value = state(proxy(defaultValue));
  function resetAfter() {
    return window.setTimeout(
      () => {
        set(value, defaultValue, true);
        onChange(defaultValue);
      },
      afterMs
    );
  }
  user_effect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  });
  return box.with(() => get$2(value), (v) => {
    set(value, v, true);
    onChange(v);
    if (timeout) clearTimeout(timeout);
    timeout = resetAfter();
  });
}
function useDOMTypeahead(opts) {
  const search = boxAutoReset("", 1e3);
  const onMatch = (node) => node.focus();
  const getCurrentItem = () => document.activeElement;
  function handleTypeaheadSearch(key, candidates) {
    var _a2, _b;
    if (!candidates.length) return;
    search.current = search.current + key;
    const currentItem = getCurrentItem();
    const currentMatch = ((_b = (_a2 = candidates.find((item) => item === currentItem)) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) ?? "";
    const values = candidates.map((item) => {
      var _a3;
      return ((_a3 = item.textContent) == null ? void 0 : _a3.trim()) ?? "";
    });
    const nextMatch = getNextMatch(values, search.current, currentMatch);
    const newItem = candidates.find((item) => {
      var _a3;
      return ((_a3 = item.textContent) == null ? void 0 : _a3.trim()) === nextMatch;
    });
    if (newItem) onMatch(newItem);
    return newItem;
  }
  function resetTypeahead() {
    search.current = "";
  }
  return { search, handleTypeaheadSearch, resetTypeahead };
}
function Floating_layer_anchor($$anchor, $$props) {
  push($$props, true);
  useFloatingAnchorState({
    id: box.with(() => $$props.id),
    virtualEl: box.with(() => $$props.virtualEl)
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$4);
  append($$anchor, fragment);
  pop();
}
function Floating_layer_content($$anchor, $$props) {
  push($$props, true);
  let side = prop($$props, "side", 3, "bottom"), sideOffset = prop($$props, "sideOffset", 3, 0), align = prop($$props, "align", 3, "center"), alignOffset = prop($$props, "alignOffset", 3, 0), arrowPadding = prop($$props, "arrowPadding", 3, 0), avoidCollisions = prop($$props, "avoidCollisions", 3, true), collisionBoundary = prop($$props, "collisionBoundary", 19, () => []), collisionPadding = prop($$props, "collisionPadding", 3, 0), hideWhenDetached = prop($$props, "hideWhenDetached", 3, false), onPlaced = prop($$props, "onPlaced", 3, () => {
  }), sticky = prop($$props, "sticky", 3, "partial"), updatePositionStrategy = prop($$props, "updatePositionStrategy", 3, "optimized"), strategy = prop($$props, "strategy", 3, "fixed"), dir = prop($$props, "dir", 3, "ltr"), style = prop($$props, "style", 19, () => ({})), wrapperId = prop($$props, "wrapperId", 19, useId), customAnchor = prop($$props, "customAnchor", 3, null);
  const contentState = useFloatingContentState({
    side: box.with(() => side()),
    sideOffset: box.with(() => sideOffset()),
    align: box.with(() => align()),
    alignOffset: box.with(() => alignOffset()),
    id: box.with(() => $$props.id),
    arrowPadding: box.with(() => arrowPadding()),
    avoidCollisions: box.with(() => avoidCollisions()),
    collisionBoundary: box.with(() => collisionBoundary()),
    collisionPadding: box.with(() => collisionPadding()),
    hideWhenDetached: box.with(() => hideWhenDetached()),
    onPlaced: box.with(() => onPlaced()),
    sticky: box.with(() => sticky()),
    updatePositionStrategy: box.with(() => updatePositionStrategy()),
    strategy: box.with(() => strategy()),
    dir: box.with(() => dir()),
    style: box.with(() => style()),
    enabled: box.with(() => $$props.enabled),
    wrapperId: box.with(() => wrapperId()),
    customAnchor: box.with(() => customAnchor())
  });
  const mergedProps = user_derived(() => mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } }));
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.content ?? noop$4, () => ({ props: contentState.props, wrapperProps: get$2(mergedProps) }));
  append($$anchor, fragment);
  pop();
}
function Floating_layer_content_static($$anchor, $$props) {
  push($$props, true);
  onMount(() => {
    var _a2;
    (_a2 = $$props.onPlaced) == null ? void 0 : _a2.call($$props);
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.content ?? noop$4, () => ({ props: {}, wrapperProps: {} }));
  append($$anchor, fragment);
  pop();
}
function Popper_content($$anchor, $$props) {
  let isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "content",
    "isStatic",
    "onPlaced"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Floating_layer_content_static($$anchor2, {
        get content() {
          return $$props.content;
        },
        get onPlaced() {
          return $$props.onPlaced;
        }
      });
    };
    var alternate = ($$anchor2) => {
      Floating_layer_content($$anchor2, spread_props(
        {
          get content() {
            return $$props.content;
          },
          get onPlaced() {
            return $$props.onPlaced;
          }
        },
        () => restProps
      ));
    };
    if_block(node, ($$render) => {
      if (isStatic()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
}
var root_1$4 = from_html(`<!> <!>`, 1);
function Popper_layer_inner($$anchor, $$props) {
  push($$props, true);
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled"
  ]);
  {
    const content = ($$anchor2, $$arg0) => {
      let floatingProps = () => $$arg0 == null ? void 0 : $$arg0().props;
      let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
      var fragment_1 = root_1$4();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          Scroll_lock($$anchor3, {
            get preventScroll() {
              return $$props.preventScroll;
            }
          });
        };
        var alternate = ($$anchor3) => {
          var fragment_3 = comment();
          var node_1 = first_child(fragment_3);
          {
            var consequent_1 = ($$anchor4) => {
              Scroll_lock($$anchor4, {
                get preventScroll() {
                  return $$props.preventScroll;
                }
              });
            };
            if_block(
              node_1,
              ($$render) => {
                if (!$$props.forceMount) $$render(consequent_1);
              },
              true
            );
          }
          append($$anchor3, fragment_3);
        };
        if_block(node, ($$render) => {
          if ($$props.forceMount && $$props.enabled) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      var node_2 = sibling(node, 2);
      {
        const focusScope = ($$anchor3, $$arg02) => {
          let focusScopeProps = () => $$arg02 == null ? void 0 : $$arg02().props;
          Escape_layer($$anchor3, {
            get onEscapeKeydown() {
              return $$props.onEscapeKeydown;
            },
            get escapeKeydownBehavior() {
              return $$props.escapeKeydownBehavior;
            },
            get enabled() {
              return $$props.enabled;
            },
            children: ($$anchor4, $$slotProps) => {
              {
                const children = ($$anchor5, $$arg03) => {
                  let dismissibleProps = () => $$arg03 == null ? void 0 : $$arg03().props;
                  Text_selection_layer($$anchor5, {
                    get id() {
                      return $$props.id;
                    },
                    get preventOverflowTextSelection() {
                      return $$props.preventOverflowTextSelection;
                    },
                    get onPointerDown() {
                      return $$props.onPointerDown;
                    },
                    get onPointerUp() {
                      return $$props.onPointerUp;
                    },
                    get enabled() {
                      return $$props.enabled;
                    },
                    children: ($$anchor6, $$slotProps2) => {
                      var fragment_8 = comment();
                      var node_3 = first_child(fragment_8);
                      {
                        let $02 = user_derived(() => ({
                          props: mergeProps(restProps, floatingProps(), dismissibleProps(), focusScopeProps(), { style: { pointerEvents: "auto" } }),
                          wrapperProps: wrapperProps()
                        }));
                        snippet(node_3, () => $$props.popper ?? noop$4, () => get$2($02));
                      }
                      append($$anchor6, fragment_8);
                    },
                    $$slots: { default: true }
                  });
                };
                Dismissible_layer($$anchor4, {
                  get id() {
                    return $$props.id;
                  },
                  get onInteractOutside() {
                    return $$props.onInteractOutside;
                  },
                  get onFocusOutside() {
                    return $$props.onFocusOutside;
                  },
                  get interactOutsideBehavior() {
                    return interactOutsideBehavior();
                  },
                  get isValidEvent() {
                    return isValidEvent2();
                  },
                  get enabled() {
                    return $$props.enabled;
                  },
                  children,
                  $$slots: { default: true }
                });
              }
            },
            $$slots: { default: true }
          });
        };
        let $0 = user_derived(() => $$props.enabled && trapFocus());
        Focus_scope(node_2, {
          get id() {
            return $$props.id;
          },
          get onOpenAutoFocus() {
            return $$props.onOpenAutoFocus;
          },
          get onCloseAutoFocus() {
            return $$props.onCloseAutoFocus;
          },
          get loop() {
            return $$props.loop;
          },
          get trapFocus() {
            return get$2($0);
          },
          get forceMount() {
            return $$props.forceMount;
          },
          focusScope,
          $$slots: { focusScope: true }
        });
      }
      append($$anchor2, fragment_1);
    };
    Popper_content($$anchor, {
      get isStatic() {
        return isStatic();
      },
      get id() {
        return $$props.id;
      },
      get side() {
        return $$props.side;
      },
      get sideOffset() {
        return $$props.sideOffset;
      },
      get align() {
        return $$props.align;
      },
      get alignOffset() {
        return $$props.alignOffset;
      },
      get arrowPadding() {
        return $$props.arrowPadding;
      },
      get avoidCollisions() {
        return $$props.avoidCollisions;
      },
      get collisionBoundary() {
        return $$props.collisionBoundary;
      },
      get collisionPadding() {
        return $$props.collisionPadding;
      },
      get sticky() {
        return $$props.sticky;
      },
      get hideWhenDetached() {
        return $$props.hideWhenDetached;
      },
      get updatePositionStrategy() {
        return $$props.updatePositionStrategy;
      },
      get strategy() {
        return $$props.strategy;
      },
      get dir() {
        return $$props.dir;
      },
      get wrapperId() {
        return $$props.wrapperId;
      },
      get style() {
        return $$props.style;
      },
      get onPlaced() {
        return $$props.onPlaced;
      },
      get customAnchor() {
        return customAnchor();
      },
      get enabled() {
        return $$props.enabled;
      },
      content,
      $$slots: { content: true }
    });
  }
  pop();
}
function Popper_layer($$anchor, $$props) {
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "present",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic"
  ]);
  {
    const presence = ($$anchor2) => {
      Popper_layer_inner($$anchor2, spread_props(
        {
          get popper() {
            return $$props.popper;
          },
          get onEscapeKeydown() {
            return $$props.onEscapeKeydown;
          },
          get escapeKeydownBehavior() {
            return $$props.escapeKeydownBehavior;
          },
          get preventOverflowTextSelection() {
            return $$props.preventOverflowTextSelection;
          },
          get id() {
            return $$props.id;
          },
          get onPointerDown() {
            return $$props.onPointerDown;
          },
          get onPointerUp() {
            return $$props.onPointerUp;
          },
          get side() {
            return $$props.side;
          },
          get sideOffset() {
            return $$props.sideOffset;
          },
          get align() {
            return $$props.align;
          },
          get alignOffset() {
            return $$props.alignOffset;
          },
          get arrowPadding() {
            return $$props.arrowPadding;
          },
          get avoidCollisions() {
            return $$props.avoidCollisions;
          },
          get collisionBoundary() {
            return $$props.collisionBoundary;
          },
          get collisionPadding() {
            return $$props.collisionPadding;
          },
          get sticky() {
            return $$props.sticky;
          },
          get hideWhenDetached() {
            return $$props.hideWhenDetached;
          },
          get updatePositionStrategy() {
            return $$props.updatePositionStrategy;
          },
          get strategy() {
            return $$props.strategy;
          },
          get dir() {
            return $$props.dir;
          },
          get preventScroll() {
            return $$props.preventScroll;
          },
          get wrapperId() {
            return $$props.wrapperId;
          },
          get style() {
            return $$props.style;
          },
          get onPlaced() {
            return $$props.onPlaced;
          },
          get customAnchor() {
            return customAnchor();
          },
          get isStatic() {
            return isStatic();
          },
          get enabled() {
            return $$props.present;
          },
          get onInteractOutside() {
            return $$props.onInteractOutside;
          },
          get onCloseAutoFocus() {
            return $$props.onCloseAutoFocus;
          },
          get onOpenAutoFocus() {
            return $$props.onOpenAutoFocus;
          },
          get interactOutsideBehavior() {
            return interactOutsideBehavior();
          },
          get loop() {
            return $$props.loop;
          },
          get trapFocus() {
            return trapFocus();
          },
          get isValidEvent() {
            return isValidEvent2();
          },
          get onFocusOutside() {
            return $$props.onFocusOutside;
          },
          forceMount: false
        },
        () => restProps
      ));
    };
    Presence_layer($$anchor, spread_props(
      {
        get id() {
          return $$props.id;
        },
        get present() {
          return $$props.present;
        }
      },
      () => restProps,
      { presence, $$slots: { presence: true } }
    ));
  }
}
function Popper_layer_force_mount($$anchor, $$props) {
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled"
  ]);
  Popper_layer_inner($$anchor, spread_props(
    {
      get popper() {
        return $$props.popper;
      },
      get onEscapeKeydown() {
        return $$props.onEscapeKeydown;
      },
      get escapeKeydownBehavior() {
        return $$props.escapeKeydownBehavior;
      },
      get preventOverflowTextSelection() {
        return $$props.preventOverflowTextSelection;
      },
      get id() {
        return $$props.id;
      },
      get onPointerDown() {
        return $$props.onPointerDown;
      },
      get onPointerUp() {
        return $$props.onPointerUp;
      },
      get side() {
        return $$props.side;
      },
      get sideOffset() {
        return $$props.sideOffset;
      },
      get align() {
        return $$props.align;
      },
      get alignOffset() {
        return $$props.alignOffset;
      },
      get arrowPadding() {
        return $$props.arrowPadding;
      },
      get avoidCollisions() {
        return $$props.avoidCollisions;
      },
      get collisionBoundary() {
        return $$props.collisionBoundary;
      },
      get collisionPadding() {
        return $$props.collisionPadding;
      },
      get sticky() {
        return $$props.sticky;
      },
      get hideWhenDetached() {
        return $$props.hideWhenDetached;
      },
      get updatePositionStrategy() {
        return $$props.updatePositionStrategy;
      },
      get strategy() {
        return $$props.strategy;
      },
      get dir() {
        return $$props.dir;
      },
      get preventScroll() {
        return $$props.preventScroll;
      },
      get wrapperId() {
        return $$props.wrapperId;
      },
      get style() {
        return $$props.style;
      },
      get onPlaced() {
        return $$props.onPlaced;
      },
      get customAnchor() {
        return customAnchor();
      },
      get isStatic() {
        return isStatic();
      },
      get enabled() {
        return $$props.enabled;
      },
      get onInteractOutside() {
        return $$props.onInteractOutside;
      },
      get onCloseAutoFocus() {
        return $$props.onCloseAutoFocus;
      },
      get onOpenAutoFocus() {
        return $$props.onOpenAutoFocus;
      },
      get interactOutsideBehavior() {
        return interactOutsideBehavior();
      },
      get loop() {
        return $$props.loop;
      },
      get trapFocus() {
        return trapFocus();
      },
      get isValidEvent() {
        return isValidEvent2();
      },
      get onFocusOutside() {
        return $$props.onFocusOutside;
      }
    },
    () => restProps,
    { forceMount: true }
  ));
}
function Mounted($$anchor, $$props) {
  push($$props, true);
  let mounted = prop($$props, "mounted", 15, false), onMountedChange = prop($$props, "onMountedChange", 3, noop$3);
  onMountEffect(() => {
    mounted(true);
    onMountedChange()(true);
    return () => {
      mounted(false);
      onMountedChange()(false);
    };
  });
  pop();
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
const SELECTION_KEYS = [ENTER, SPACE];
const FIRST_KEYS = [ARROW_DOWN, PAGE_UP, HOME];
const LAST_KEYS = [ARROW_UP, PAGE_DOWN, END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, ARROW_RIGHT],
  rtl: [...SELECTION_KEYS, ARROW_LEFT]
};
const SUB_CLOSE_KEYS = {
  ltr: [ARROW_LEFT],
  rtl: [ARROW_RIGHT]
};
function isMouseEvent(event2) {
  return event2.pointerType === "mouse";
}
function useGraceArea(opts) {
  const enabled = user_derived(() => opts.enabled());
  const isPointerInTransit = boxAutoReset(false, opts.transitTimeout ?? 300, (value) => {
    var _a2;
    if (get$2(enabled)) {
      (_a2 = opts.setIsPointerInTransit) == null ? void 0 : _a2.call(opts, value);
    }
  });
  let pointerGraceArea = state(null);
  function handleRemoveGraceArea() {
    set(pointerGraceArea, null);
    isPointerInTransit.current = false;
  }
  function handleCreateGraceArea(e, hoverTarget) {
    const currentTarget = e.currentTarget;
    if (!isHTMLElement$1(currentTarget)) return;
    const exitPoint = { x: e.clientX, y: e.clientY };
    const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    set(pointerGraceArea, graceArea, true);
    isPointerInTransit.current = true;
  }
  watch([opts.triggerNode, opts.contentNode, opts.enabled], ([triggerNode, contentNode, enabled2]) => {
    if (!triggerNode || !contentNode || !enabled2) return;
    const handleTriggerLeave = (e) => {
      handleCreateGraceArea(e, contentNode);
    };
    const handleContentLeave = (e) => {
      handleCreateGraceArea(e, triggerNode);
    };
    return executeCallbacks(on(triggerNode, "pointerleave", handleTriggerLeave), on(contentNode, "pointerleave", handleContentLeave));
  });
  watch(() => get$2(pointerGraceArea), () => {
    const handleTrackPointerGrace = (e) => {
      var _a2, _b;
      if (!get$2(pointerGraceArea)) return;
      const target = e.target;
      if (!isElement$1(target)) return;
      const pointerPosition = { x: e.clientX, y: e.clientY };
      const hasEnteredTarget = ((_a2 = opts.triggerNode()) == null ? void 0 : _a2.contains(target)) || ((_b = opts.contentNode()) == null ? void 0 : _b.contains(target));
      const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, get$2(pointerGraceArea));
      if (hasEnteredTarget) {
        handleRemoveGraceArea();
      } else if (isPointerOutsideGraceArea) {
        handleRemoveGraceArea();
        opts.onPointerExit();
      }
    };
    return on(document, "pointermove", handleTrackPointerGrace);
  });
  return { isPointerInTransit };
}
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const tipPadding = padding * 1.5;
  switch (exitSide) {
    case "top":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x, y: exitPoint.y - tipPadding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      ];
    case "bottom":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x, y: exitPoint.y + tipPadding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      ];
    case "left":
      return [
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x - tipPadding, y: exitPoint.y },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      ];
    case "right":
      return [
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + tipPadding, y: exitPoint.y },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      ];
  }
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a2, b) => {
    if (a2.x < b.x) return -1;
    else if (a2.x > b.x) return 1;
    else if (a2.y < b.y) return -1;
    else if (a2.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
function getTabbableOptions() {
  return {
    getShadowRoot: true,
    displayCheck: (
      // JSDOM does not support the `tabbable` library. To solve this we can
      // check if `ResizeObserver` is a real function (not polyfilled), which
      // determines if the current environment is JSDOM-like.
      typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
    )
  };
}
function getTabbableFrom(currentNode, direction) {
  if (!isTabbable(currentNode, getTabbableOptions())) {
    return getTabbableFromFocusable(currentNode, direction);
  }
  const allTabbable = tabbable(getDocument(currentNode).body, getTabbableOptions());
  if (direction === "prev")
    allTabbable.reverse();
  const activeIndex = allTabbable.indexOf(currentNode);
  if (activeIndex === -1)
    return document.body;
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getTabbableFromFocusable(currentNode, direction) {
  if (!isFocusable(currentNode, getTabbableOptions()))
    return document.body;
  const allFocusable = focusable(getDocument(currentNode).body, getTabbableOptions());
  if (direction === "prev")
    allFocusable.reverse();
  const activeIndex = allFocusable.indexOf(currentNode);
  if (activeIndex === -1)
    return document.body;
  const nextFocusableElements = allFocusable.slice(activeIndex + 1);
  return nextFocusableElements.find((node) => isTabbable(node, getTabbableOptions())) ?? document.body;
}
const MenuRootContext = new Context("Menu.Root");
const MenuMenuContext = new Context("Menu.Root | Menu.Sub");
const MenuContentContext = new Context("Menu.Content");
const MenuOpenEvent = new CustomEventDispatcher("bitsmenuopen", { bubbles: false, cancelable: true });
class MenuRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "isUsingKeyboard", new IsUsingKeyboard());
    __privateAdd(this, _ignoreCloseAutoFocus, state(false));
    __privateAdd(this, _isPointerInTransit, state(false));
    this.opts = opts;
  }
  get ignoreCloseAutoFocus() {
    return get$2(__privateGet(this, _ignoreCloseAutoFocus));
  }
  set ignoreCloseAutoFocus(value) {
    set(__privateGet(this, _ignoreCloseAutoFocus), value, true);
  }
  get isPointerInTransit() {
    return get$2(__privateGet(this, _isPointerInTransit));
  }
  set isPointerInTransit(value) {
    set(__privateGet(this, _isPointerInTransit), value, true);
  }
  getAttr(name) {
    return `data-${this.opts.variant.current}-${name}`;
  }
}
_ignoreCloseAutoFocus = new WeakMap();
_isPointerInTransit = new WeakMap();
class MenuMenuState {
  constructor(opts, root2, parentMenu) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "parentMenu");
    __publicField(this, "contentId", box.with(() => ""));
    __privateAdd(this, _contentNode, state(null));
    __privateAdd(this, _triggerNode, state(null));
    this.opts = opts;
    this.root = root2;
    this.parentMenu = parentMenu;
    if (parentMenu) {
      watch(() => parentMenu.opts.open.current, () => {
        if (parentMenu.opts.open.current) return;
        this.opts.open.current = false;
      });
    }
  }
  get contentNode() {
    return get$2(__privateGet(this, _contentNode));
  }
  set contentNode(value) {
    set(__privateGet(this, _contentNode), value, true);
  }
  get triggerNode() {
    return get$2(__privateGet(this, _triggerNode));
  }
  set triggerNode(value) {
    set(__privateGet(this, _triggerNode), value, true);
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  onOpen() {
    this.opts.open.current = true;
  }
  onClose() {
    this.opts.open.current = false;
  }
}
_contentNode = new WeakMap();
_triggerNode = new WeakMap();
class MenuContentState {
  constructor(opts, parentMenu) {
    __privateAdd(this, _MenuContentState_instances);
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __privateAdd(this, _search, state(""));
    __privateAdd(this, _timer, 0);
    __privateAdd(this, _handleTypeaheadSearch);
    __publicField(this, "rovingFocusGroup");
    __privateAdd(this, _mounted, state(false));
    __privateAdd(this, _isSub);
    __publicField(this, "onCloseAutoFocus", (e) => {
      this.opts.onCloseAutoFocus.current(e);
      if (e.defaultPrevented || __privateGet(this, _isSub)) return;
      if (this.parentMenu.triggerNode && isTabbable(this.parentMenu.triggerNode)) {
        this.parentMenu.triggerNode.focus();
      }
    });
    __publicField(this, "onOpenAutoFocus", (e) => {
      if (e.defaultPrevented) return;
      e.preventDefault();
      const contentNode = this.parentMenu.contentNode;
      contentNode == null ? void 0 : contentNode.focus();
    });
    __privateAdd(this, _snippetProps, user_derived(() => ({ open: this.parentMenu.opts.open.current })));
    __privateAdd(this, _props2, user_derived(() => ({
      id: this.opts.id.current,
      role: "menu",
      "aria-orientation": getAriaOrientation("vertical"),
      [this.parentMenu.root.getAttr("content")]: "",
      "data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
      onkeydown: this.onkeydown,
      onblur: this.onblur,
      onfocus: this.onfocus,
      dir: this.parentMenu.root.opts.dir.current,
      style: { pointerEvents: "auto" }
    })));
    __publicField(this, "popperProps", { onCloseAutoFocus: (e) => this.onCloseAutoFocus(e) });
    this.opts = opts;
    this.parentMenu = parentMenu;
    parentMenu.contentId = opts.id;
    __privateSet(this, _isSub, opts.isSub ?? false);
    this.onkeydown = this.onkeydown.bind(this);
    this.onblur = this.onblur.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.handleInteractOutside = this.handleInteractOutside.bind(this);
    useRefById({
      ...opts,
      deps: () => this.parentMenu.opts.open.current,
      onRefChange: (node) => {
        if (this.parentMenu.contentNode !== node) {
          this.parentMenu.contentNode = node;
        }
      }
    });
    useGraceArea({
      contentNode: () => this.parentMenu.contentNode,
      triggerNode: () => this.parentMenu.triggerNode,
      enabled: () => {
        var _a2;
        return this.parentMenu.opts.open.current && Boolean((_a2 = this.parentMenu.triggerNode) == null ? void 0 : _a2.hasAttribute(this.parentMenu.root.getAttr("sub-trigger")));
      },
      onPointerExit: () => {
        this.parentMenu.opts.open.current = false;
      },
      setIsPointerInTransit: (value) => {
        this.parentMenu.root.isPointerInTransit = value;
      }
    });
    __privateSet(this, _handleTypeaheadSearch, useDOMTypeahead().handleTypeaheadSearch);
    this.rovingFocusGroup = useRovingFocus({
      rootNodeId: this.parentMenu.contentId,
      candidateAttr: this.parentMenu.root.getAttr("item"),
      loop: this.opts.loop,
      orientation: box.with(() => "vertical")
    });
    watch(() => this.parentMenu.contentNode, (contentNode) => {
      if (!contentNode) return;
      const handler = () => {
        afterTick(() => {
          if (!this.parentMenu.root.isUsingKeyboard.current) return;
          this.rovingFocusGroup.focusFirstCandidate();
        });
      };
      return MenuOpenEvent.listen(contentNode, handler);
    });
    user_effect(() => {
      if (!this.parentMenu.opts.open.current) {
        window.clearTimeout(__privateGet(this, _timer));
      }
    });
  }
  get search() {
    return get$2(__privateGet(this, _search));
  }
  set search(value) {
    set(__privateGet(this, _search), value, true);
  }
  get mounted() {
    return get$2(__privateGet(this, _mounted));
  }
  set mounted(value) {
    set(__privateGet(this, _mounted), value, true);
  }
  handleTabKeyDown(e) {
    let rootMenu = this.parentMenu;
    while (rootMenu.parentMenu !== null) {
      rootMenu = rootMenu.parentMenu;
    }
    if (!rootMenu.triggerNode) {
      return;
    }
    e.preventDefault();
    const nodeToFocus = getTabbableFrom(rootMenu.triggerNode, e.shiftKey ? "prev" : "next");
    if (nodeToFocus) {
      this.parentMenu.root.ignoreCloseAutoFocus = true;
      rootMenu.onClose();
      afterTick(() => {
        nodeToFocus.focus();
        afterTick(() => {
          this.parentMenu.root.ignoreCloseAutoFocus = false;
        });
      });
    } else {
      document.body.focus();
    }
  }
  onkeydown(e) {
    var _a2, _b;
    if (e.defaultPrevented) return;
    if (e.key === TAB) {
      this.handleTabKeyDown(e);
      return;
    }
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (!isHTMLElement$1(target) || !isHTMLElement$1(currentTarget)) return;
    const isKeydownInside = ((_a2 = target.closest(`[${this.parentMenu.root.getAttr("content")}]`)) == null ? void 0 : _a2.id) === this.parentMenu.contentId.current;
    const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
    const isCharacterKey = e.key.length === 1;
    const kbdFocusedEl = this.rovingFocusGroup.handleKeydown(target, e);
    if (kbdFocusedEl) return;
    if (e.code === "Space") return;
    const candidateNodes = __privateMethod(this, _MenuContentState_instances, getCandidateNodes_fn).call(this);
    if (isKeydownInside) {
      if (!isModifierKey && isCharacterKey) {
        __privateGet(this, _handleTypeaheadSearch).call(this, e.key, candidateNodes);
      }
    }
    if (((_b = e.target) == null ? void 0 : _b.id) !== this.parentMenu.contentId.current) return;
    if (!FIRST_LAST_KEYS.includes(e.key)) return;
    e.preventDefault();
    if (LAST_KEYS.includes(e.key)) {
      candidateNodes.reverse();
    }
    focusFirst(candidateNodes);
  }
  onblur(e) {
    var _a2, _b;
    if (!isElement$1(e.currentTarget)) return;
    if (!isElement$1(e.target)) return;
    if (!((_b = (_a2 = e.currentTarget).contains) == null ? void 0 : _b.call(_a2, e.target))) {
      window.clearTimeout(__privateGet(this, _timer));
      this.search = "";
    }
  }
  onfocus(_) {
    if (!this.parentMenu.root.isUsingKeyboard.current) return;
    afterTick(() => this.rovingFocusGroup.focusFirstCandidate());
  }
  onItemEnter() {
    return __privateMethod(this, _MenuContentState_instances, isPointerMovingToSubmenu_fn).call(this);
  }
  onItemLeave(e) {
    if (e.currentTarget.hasAttribute(this.parentMenu.root.getAttr("sub-trigger"))) return;
    if (__privateMethod(this, _MenuContentState_instances, isPointerMovingToSubmenu_fn).call(this) || this.parentMenu.root.isUsingKeyboard.current) return;
    const contentNode = this.parentMenu.contentNode;
    contentNode == null ? void 0 : contentNode.focus();
    this.rovingFocusGroup.setCurrentTabStopId("");
  }
  onTriggerLeave() {
    if (__privateMethod(this, _MenuContentState_instances, isPointerMovingToSubmenu_fn).call(this)) return true;
    return false;
  }
  handleInteractOutside(e) {
    var _a2;
    if (!isElementOrSVGElement(e.target)) return;
    const triggerId = (_a2 = this.parentMenu.triggerNode) == null ? void 0 : _a2.id;
    if (e.target.id === triggerId) {
      e.preventDefault();
      return;
    }
    if (e.target.closest(`#${triggerId}`)) {
      e.preventDefault();
    }
  }
  get snippetProps() {
    return get$2(__privateGet(this, _snippetProps));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps), value);
  }
  get props() {
    return get$2(__privateGet(this, _props2));
  }
  set props(value) {
    set(__privateGet(this, _props2), value);
  }
}
_search = new WeakMap();
_timer = new WeakMap();
_handleTypeaheadSearch = new WeakMap();
_mounted = new WeakMap();
_isSub = new WeakMap();
_MenuContentState_instances = new WeakSet();
getCandidateNodes_fn = function() {
  const node = this.parentMenu.contentNode;
  if (!node) return [];
  const candidates = Array.from(node.querySelectorAll(`[${this.parentMenu.root.getAttr("item")}]:not([data-disabled])`));
  return candidates;
};
isPointerMovingToSubmenu_fn = function() {
  return this.parentMenu.root.isPointerInTransit;
};
_snippetProps = new WeakMap();
_props2 = new WeakMap();
class MenuItemSharedState {
  constructor(opts, content) {
    __publicField(this, "opts");
    __publicField(this, "content");
    __privateAdd(this, _isFocused, state(false));
    __privateAdd(this, _props3, user_derived(() => ({
      id: this.opts.id.current,
      tabindex: -1,
      role: "menuitem",
      "aria-disabled": getAriaDisabled(this.opts.disabled.current),
      "data-disabled": getDataDisabled(this.opts.disabled.current),
      "data-highlighted": get$2(__privateGet(this, _isFocused)) ? "" : void 0,
      [this.content.parentMenu.root.getAttr("item")]: "",
      //
      onpointermove: this.onpointermove,
      onpointerleave: this.onpointerleave,
      onfocus: this.onfocus,
      onblur: this.onblur
    })));
    this.opts = opts;
    this.content = content;
    this.onpointermove = this.onpointermove.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.onblur = this.onblur.bind(this);
    useRefById({ ...opts, deps: () => this.content.mounted });
  }
  onpointermove(e) {
    if (e.defaultPrevented) return;
    if (!isMouseEvent(e)) return;
    if (this.opts.disabled.current) {
      this.content.onItemLeave(e);
    } else {
      const defaultPrevented = this.content.onItemEnter();
      if (defaultPrevented) return;
      const item = e.currentTarget;
      if (!isHTMLElement$1(item)) return;
      item.focus();
    }
  }
  onpointerleave(e) {
    if (e.defaultPrevented) return;
    if (!isMouseEvent(e)) return;
    this.content.onItemLeave(e);
  }
  onfocus(e) {
    afterTick(() => {
      if (e.defaultPrevented || this.opts.disabled.current) return;
      set(__privateGet(this, _isFocused), true);
    });
  }
  onblur(e) {
    afterTick(() => {
      if (e.defaultPrevented) return;
      set(__privateGet(this, _isFocused), false);
    });
  }
  get props() {
    return get$2(__privateGet(this, _props3));
  }
  set props(value) {
    set(__privateGet(this, _props3), value);
  }
}
_isFocused = new WeakMap();
_props3 = new WeakMap();
class MenuItemState {
  constructor(opts, item) {
    __privateAdd(this, _MenuItemState_instances);
    __publicField(this, "opts");
    __publicField(this, "item");
    __privateAdd(this, _isPointerDown, false);
    __publicField(this, "root");
    __privateAdd(this, _props4, user_derived(() => mergeProps(this.item.props, {
      onclick: this.onclick,
      onpointerdown: this.onpointerdown,
      onpointerup: this.onpointerup,
      onkeydown: this.onkeydown
    })));
    this.opts = opts;
    this.item = item;
    this.root = item.content.parentMenu.root;
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
  }
  onkeydown(e) {
    const isTypingAhead = this.item.content.search !== "";
    if (this.item.opts.disabled.current || isTypingAhead && e.key === SPACE) return;
    if (SELECTION_KEYS.includes(e.key)) {
      if (!isHTMLElement$1(e.currentTarget)) return;
      e.currentTarget.click();
      e.preventDefault();
    }
  }
  onclick(_) {
    if (this.item.opts.disabled.current) return;
    __privateMethod(this, _MenuItemState_instances, handleSelect_fn).call(this);
  }
  onpointerup(e) {
    var _a2;
    if (e.defaultPrevented) return;
    if (!__privateGet(this, _isPointerDown)) {
      if (!isHTMLElement$1(e.currentTarget)) return;
      (_a2 = e.currentTarget) == null ? void 0 : _a2.click();
    }
  }
  onpointerdown(_) {
    __privateSet(this, _isPointerDown, true);
  }
  get props() {
    return get$2(__privateGet(this, _props4));
  }
  set props(value) {
    set(__privateGet(this, _props4), value);
  }
}
_isPointerDown = new WeakMap();
_MenuItemState_instances = new WeakSet();
handleSelect_fn = function() {
  if (this.item.opts.disabled.current) return;
  const selectEvent = new CustomEvent("menuitemselect", { bubbles: true, cancelable: true });
  this.opts.onSelect.current(selectEvent);
  afterTick(() => {
    if (selectEvent.defaultPrevented) {
      this.item.content.parentMenu.root.isUsingKeyboard.current = false;
      return;
    }
    if (this.opts.closeOnSelect.current) {
      this.item.content.parentMenu.root.opts.onClose();
    }
  });
};
_props4 = new WeakMap();
class MenuSubTriggerState {
  constructor(opts, item, content, submenu) {
    __privateAdd(this, _MenuSubTriggerState_instances);
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "content");
    __publicField(this, "submenu");
    __privateAdd(this, _openTimer, null);
    __privateAdd(this, _props5, user_derived(() => mergeProps(
      {
        "aria-haspopup": "menu",
        "aria-expanded": getAriaExpanded(this.submenu.opts.open.current),
        "data-state": getDataOpenClosed(this.submenu.opts.open.current),
        "aria-controls": this.submenu.opts.open.current ? this.submenu.contentId.current : void 0,
        [this.submenu.root.getAttr("sub-trigger")]: "",
        onclick: this.onclick,
        onpointermove: this.onpointermove,
        onpointerleave: this.onpointerleave,
        onkeydown: this.onkeydown
      },
      this.item.props
    )));
    this.opts = opts;
    this.item = item;
    this.content = content;
    this.submenu = submenu;
    this.onpointerleave = this.onpointerleave.bind(this);
    this.onpointermove = this.onpointermove.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    onDestroyEffect(() => {
      __privateMethod(this, _MenuSubTriggerState_instances, clearOpenTimer_fn).call(this);
    });
    useRefById({
      ...item.opts,
      onRefChange: (node) => {
        this.submenu.triggerNode = node;
      }
    });
  }
  onpointermove(e) {
    if (!isMouseEvent(e)) return;
    if (!this.item.opts.disabled.current && !this.submenu.opts.open.current && !__privateGet(this, _openTimer) && !this.content.parentMenu.root.isPointerInTransit) {
      __privateSet(this, _openTimer, window.setTimeout(
        () => {
          this.submenu.onOpen();
          __privateMethod(this, _MenuSubTriggerState_instances, clearOpenTimer_fn).call(this);
        },
        100
      ));
    }
  }
  onpointerleave(e) {
    if (!isMouseEvent(e)) return;
    __privateMethod(this, _MenuSubTriggerState_instances, clearOpenTimer_fn).call(this);
  }
  onkeydown(e) {
    const isTypingAhead = this.content.search !== "";
    if (this.item.opts.disabled.current || isTypingAhead && e.key === SPACE) return;
    if (SUB_OPEN_KEYS[this.submenu.root.opts.dir.current].includes(e.key)) {
      e.currentTarget.click();
      e.preventDefault();
    }
  }
  onclick(e) {
    if (this.item.opts.disabled.current) return;
    if (!isHTMLElement$1(e.currentTarget)) return;
    e.currentTarget.focus();
    const selectEvent = new CustomEvent("menusubtriggerselect", { bubbles: true, cancelable: true });
    this.opts.onSelect.current(selectEvent);
    if (!this.submenu.opts.open.current) {
      this.submenu.onOpen();
      afterTick(() => {
        const contentNode = this.submenu.contentNode;
        if (!contentNode) return;
        MenuOpenEvent.dispatch(contentNode);
      });
    }
  }
  get props() {
    return get$2(__privateGet(this, _props5));
  }
  set props(value) {
    set(__privateGet(this, _props5), value);
  }
}
_openTimer = new WeakMap();
_MenuSubTriggerState_instances = new WeakSet();
clearOpenTimer_fn = function() {
  if (__privateGet(this, _openTimer) === null) return;
  window.clearTimeout(__privateGet(this, _openTimer));
  __privateSet(this, _openTimer, null);
};
_props5 = new WeakMap();
class MenuSeparatorState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __privateAdd(this, _props6, user_derived(() => ({
      id: this.opts.id.current,
      role: "group",
      [this.root.getAttr("separator")]: ""
    })));
    this.opts = opts;
    this.root = root2;
    useRefById(opts);
  }
  get props() {
    return get$2(__privateGet(this, _props6));
  }
  set props(value) {
    set(__privateGet(this, _props6), value);
  }
}
_props6 = new WeakMap();
class DropdownMenuTriggerState {
  constructor(opts, parentMenu) {
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __privateAdd(this, _ariaControls, user_derived(() => {
      if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current) return this.parentMenu.contentId.current;
      return void 0;
    }));
    __privateAdd(this, _props7, user_derived(() => ({
      id: this.opts.id.current,
      disabled: this.opts.disabled.current,
      "aria-haspopup": "menu",
      "aria-expanded": getAriaExpanded(this.parentMenu.opts.open.current),
      "aria-controls": get$2(__privateGet(this, _ariaControls)),
      "data-disabled": getDataDisabled(this.opts.disabled.current),
      "data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
      [this.parentMenu.root.getAttr("trigger")]: "",
      //
      onpointerdown: this.onpointerdown,
      onpointerup: this.onpointerup,
      onkeydown: this.onkeydown
    })));
    this.opts = opts;
    this.parentMenu = parentMenu;
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
    useRefById({
      ...opts,
      onRefChange: (ref) => {
        this.parentMenu.triggerNode = ref;
      }
    });
  }
  onpointerdown(e) {
    if (this.opts.disabled.current) return;
    if (e.pointerType === "touch") return e.preventDefault();
    if (e.button === 0 && e.ctrlKey === false) {
      this.parentMenu.toggleOpen();
      if (!this.parentMenu.opts.open.current) e.preventDefault();
    }
  }
  onpointerup(e) {
    if (this.opts.disabled.current) return;
    if (e.pointerType === "touch") {
      e.preventDefault();
      this.parentMenu.toggleOpen();
    }
  }
  onkeydown(e) {
    if (this.opts.disabled.current) return;
    if (e.key === SPACE || e.key === ENTER) {
      this.parentMenu.toggleOpen();
      e.preventDefault();
      return;
    }
    if (e.key === ARROW_DOWN) {
      this.parentMenu.onOpen();
      e.preventDefault();
    }
  }
  get props() {
    return get$2(__privateGet(this, _props7));
  }
  set props(value) {
    set(__privateGet(this, _props7), value);
  }
}
_ariaControls = new WeakMap();
_props7 = new WeakMap();
function useMenuRoot(props) {
  const root2 = new MenuRootState(props);
  FocusScopeContext.set({
    get ignoreCloseAutoFocus() {
      return root2.ignoreCloseAutoFocus;
    }
  });
  return MenuRootContext.set(root2);
}
function useMenuMenu(root2, props) {
  return MenuMenuContext.set(new MenuMenuState(props, root2, null));
}
function useMenuSubmenu(props) {
  const menu = MenuMenuContext.get();
  return MenuMenuContext.set(new MenuMenuState(props, menu.root, menu));
}
function useMenuSubTrigger(props) {
  const content = MenuContentContext.get();
  const item = new MenuItemSharedState(props, content);
  const submenu = MenuMenuContext.get();
  return new MenuSubTriggerState(props, item, content, submenu);
}
function useMenuDropdownTrigger(props) {
  return new DropdownMenuTriggerState(props, MenuMenuContext.get());
}
function useMenuContent(props) {
  return MenuContentContext.set(new MenuContentState(props, MenuMenuContext.get()));
}
function useMenuItem(props) {
  const item = new MenuItemSharedState(props, MenuContentContext.get());
  return new MenuItemState(props, item);
}
function useMenuSeparator(props) {
  return new MenuSeparatorState(props, MenuRootContext.get());
}
function Menu_sub($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), onOpenChange = prop($$props, "onOpenChange", 3, noop$3);
  useMenuSubmenu({
    open: box.with(() => open(), (v) => {
      var _a2;
      open(v);
      (_a2 = onOpenChange()) == null ? void 0 : _a2(v);
    })
  });
  Floating_layer($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$4);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_2$3 = from_html(`<div><!></div>`);
function Menu_item($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, useId), disabled2 = prop($$props, "disabled", 3, false), onSelect = prop($$props, "onSelect", 3, noop$3), closeOnSelect = prop($$props, "closeOnSelect", 3, true), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "ref",
    "id",
    "disabled",
    "onSelect",
    "closeOnSelect"
  ]);
  const itemState = useMenuItem({
    id: box.with(() => id()),
    disabled: box.with(() => disabled2()),
    onSelect: box.with(() => onSelect()),
    ref: box.with(() => ref(), (v) => ref(v)),
    closeOnSelect: box.with(() => closeOnSelect())
  });
  const mergedProps = user_derived(() => mergeProps(restProps, itemState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$3();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$4);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$2 = from_html(`<div><!></div>`);
function Menu_separator($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, useId), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "id",
    "child",
    "children"
  ]);
  const separatorState = useMenuSeparator({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, separatorState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$2();
      attribute_effect(div, () => ({ ...get$2(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$4);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_4$4 = from_html(`<div><div><!></div></div>`);
var root_2$1 = from_html(`<!> <!>`, 1);
var root_9$3 = from_html(`<div><div><!></div></div>`);
var root_7$4 = from_html(`<!> <!>`, 1);
function Menu_sub_content($$anchor, $$props) {
  push($$props, true);
  let id = prop($$props, "id", 19, useId), ref = prop($$props, "ref", 15, null), loop2 = prop($$props, "loop", 3, true), onInteractOutside = prop($$props, "onInteractOutside", 3, noop$3), forceMount = prop($$props, "forceMount", 3, false), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop$3), interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "defer-otherwise-close"), escapeKeydownBehavior = prop($$props, "escapeKeydownBehavior", 3, "defer-otherwise-close"), onOpenAutoFocusProp = prop($$props, "onOpenAutoFocus", 3, noop$3), onCloseAutoFocusProp = prop($$props, "onCloseAutoFocus", 3, noop$3), onFocusOutside = prop($$props, "onFocusOutside", 3, noop$3), side = prop($$props, "side", 3, "right"), trapFocus = prop($$props, "trapFocus", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "children",
    "child",
    "loop",
    "onInteractOutside",
    "forceMount",
    "onEscapeKeydown",
    "interactOutsideBehavior",
    "escapeKeydownBehavior",
    "onOpenAutoFocus",
    "onCloseAutoFocus",
    "onFocusOutside",
    "side",
    "trapFocus"
  ]);
  const subContentState = useMenuContent({
    id: box.with(() => id()),
    loop: box.with(() => loop2()),
    ref: box.with(() => ref(), (v) => ref(v)),
    isSub: true,
    onCloseAutoFocus: box.with(() => handleCloseAutoFocus)
  });
  function onkeydown(e) {
    const isKeyDownInside = e.currentTarget.contains(e.target);
    const isCloseKey = SUB_CLOSE_KEYS[subContentState.parentMenu.root.opts.dir.current].includes(e.key);
    if (isKeyDownInside && isCloseKey) {
      subContentState.parentMenu.onClose();
      const triggerNode = subContentState.parentMenu.triggerNode;
      triggerNode == null ? void 0 : triggerNode.focus();
      e.preventDefault();
    }
  }
  const dataAttr = user_derived(() => subContentState.parentMenu.root.getAttr("sub-content"));
  const mergedProps = user_derived(() => mergeProps(restProps, subContentState.props, { side: side(), onkeydown, [get$2(dataAttr)]: "" }));
  function handleOpenAutoFocus(e) {
    onOpenAutoFocusProp()(e);
    if (e.defaultPrevented) return;
    e.preventDefault();
    if (subContentState.parentMenu.root.isUsingKeyboard && subContentState.parentMenu.contentNode) {
      MenuOpenEvent.dispatch(subContentState.parentMenu.contentNode);
    }
  }
  function handleCloseAutoFocus(e) {
    onCloseAutoFocusProp()(e);
    if (e.defaultPrevented) return;
    e.preventDefault();
  }
  function handleInteractOutside(e) {
    onInteractOutside()(e);
    if (e.defaultPrevented) return;
    subContentState.parentMenu.onClose();
  }
  function handleEscapeKeydown(e) {
    onEscapeKeydown()(e);
    if (e.defaultPrevented) return;
    subContentState.parentMenu.onClose();
  }
  function handleOnFocusOutside(e) {
    var _a2;
    onFocusOutside()(e);
    if (e.defaultPrevented) return;
    if (!isHTMLElement$1(e.target)) return;
    if (e.target.id !== ((_a2 = subContentState.parentMenu.triggerNode) == null ? void 0 : _a2.id)) {
      subContentState.parentMenu.onClose();
    }
  }
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      {
        const popper = ($$anchor3, $$arg0) => {
          let props = () => $$arg0 == null ? void 0 : $$arg0().props;
          let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
          const finalProps = user_derived(() => mergeProps(props(), get$2(mergedProps), { style: getFloatingContentCSSVars("menu") }));
          var fragment_2 = root_2$1();
          var node_1 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var fragment_3 = comment();
              var node_2 = first_child(fragment_3);
              {
                let $0 = user_derived(() => ({
                  props: get$2(finalProps),
                  wrapperProps: wrapperProps(),
                  ...subContentState.snippetProps
                }));
                snippet(node_2, () => $$props.child, () => get$2($0));
              }
              append($$anchor4, fragment_3);
            };
            var alternate = ($$anchor4) => {
              var div = root_4$4();
              attribute_effect(div, () => ({ ...wrapperProps() }));
              var div_1 = child(div);
              attribute_effect(div_1, () => ({ ...get$2(finalProps) }));
              var node_3 = child(div_1);
              snippet(node_3, () => $$props.children ?? noop$4);
              reset(div_1);
              reset(div);
              append($$anchor4, div);
            };
            if_block(node_1, ($$render) => {
              if ($$props.child) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          var node_4 = sibling(node_1, 2);
          Mounted(node_4, {
            get mounted() {
              return subContentState.mounted;
            },
            set mounted($$value) {
              subContentState.mounted = $$value;
            }
          });
          append($$anchor3, fragment_2);
        };
        Popper_layer_force_mount($$anchor2, spread_props(() => get$2(mergedProps), {
          get interactOutsideBehavior() {
            return interactOutsideBehavior();
          },
          get escapeKeydownBehavior() {
            return escapeKeydownBehavior();
          },
          onOpenAutoFocus: handleOpenAutoFocus,
          get enabled() {
            return subContentState.parentMenu.opts.open.current;
          },
          onInteractOutside: handleInteractOutside,
          onEscapeKeydown: handleEscapeKeydown,
          onFocusOutside: handleOnFocusOutside,
          preventScroll: false,
          get loop() {
            return loop2();
          },
          get trapFocus() {
            return trapFocus();
          },
          popper,
          $$slots: { popper: true }
        }));
      }
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_4 = comment();
      var node_5 = first_child(fragment_4);
      {
        var consequent_3 = ($$anchor3) => {
          {
            const popper = ($$anchor4, $$arg0) => {
              let props = () => $$arg0 == null ? void 0 : $$arg0().props;
              let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
              const finalProps = user_derived(() => mergeProps(props(), get$2(mergedProps), { style: getFloatingContentCSSVars("menu") }));
              var fragment_6 = root_7$4();
              var node_6 = first_child(fragment_6);
              {
                var consequent_2 = ($$anchor5) => {
                  var fragment_7 = comment();
                  var node_7 = first_child(fragment_7);
                  {
                    let $0 = user_derived(() => ({
                      props: get$2(finalProps),
                      wrapperProps: wrapperProps(),
                      ...subContentState.snippetProps
                    }));
                    snippet(node_7, () => $$props.child, () => get$2($0));
                  }
                  append($$anchor5, fragment_7);
                };
                var alternate_1 = ($$anchor5) => {
                  var div_2 = root_9$3();
                  attribute_effect(div_2, () => ({ ...wrapperProps() }));
                  var div_3 = child(div_2);
                  attribute_effect(div_3, () => ({ ...get$2(finalProps) }));
                  var node_8 = child(div_3);
                  snippet(node_8, () => $$props.children ?? noop$4);
                  reset(div_3);
                  reset(div_2);
                  append($$anchor5, div_2);
                };
                if_block(node_6, ($$render) => {
                  if ($$props.child) $$render(consequent_2);
                  else $$render(alternate_1, false);
                });
              }
              var node_9 = sibling(node_6, 2);
              Mounted(node_9, {
                get mounted() {
                  return subContentState.mounted;
                },
                set mounted($$value) {
                  subContentState.mounted = $$value;
                }
              });
              append($$anchor4, fragment_6);
            };
            Popper_layer($$anchor3, spread_props(() => get$2(mergedProps), {
              get interactOutsideBehavior() {
                return interactOutsideBehavior();
              },
              get escapeKeydownBehavior() {
                return escapeKeydownBehavior();
              },
              onCloseAutoFocus: handleCloseAutoFocus,
              onOpenAutoFocus: handleOpenAutoFocus,
              get present() {
                return subContentState.parentMenu.opts.open.current;
              },
              onInteractOutside: handleInteractOutside,
              onEscapeKeydown: handleEscapeKeydown,
              onFocusOutside: handleOnFocusOutside,
              preventScroll: false,
              get loop() {
                return loop2();
              },
              get trapFocus() {
                return trapFocus();
              },
              popper,
              $$slots: { popper: true }
            }));
          }
        };
        if_block(
          node_5,
          ($$render) => {
            if (!forceMount()) $$render(consequent_3);
          },
          true
        );
      }
      append($$anchor2, fragment_4);
    };
    if_block(node, ($$render) => {
      if (forceMount()) $$render(consequent_1);
      else $$render(alternate_2, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$2 = from_html(`<div><!></div>`);
function Menu_sub_trigger($$anchor, $$props) {
  push($$props, true);
  let id = prop($$props, "id", 19, useId), disabled2 = prop($$props, "disabled", 3, false), ref = prop($$props, "ref", 15, null), onSelect = prop($$props, "onSelect", 3, noop$3), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "disabled",
    "ref",
    "children",
    "child",
    "onSelect"
  ]);
  const subTriggerState = useMenuSubTrigger({
    disabled: box.with(() => disabled2()),
    onSelect: box.with(() => onSelect()),
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, subTriggerState.props));
  Floating_layer_anchor($$anchor, {
    get id() {
      return id();
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var div = root_3$2();
          attribute_effect(div, () => ({ ...get$2(mergedProps) }));
          var node_2 = child(div);
          snippet(node_2, () => $$props.children ?? noop$4);
          reset(div);
          append($$anchor3, div);
        };
        if_block(node, ($$render) => {
          if ($$props.child) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
function Menu($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), dir = prop($$props, "dir", 3, "ltr"), onOpenChange = prop($$props, "onOpenChange", 3, noop$3), variant = prop($$props, "_internal_variant", 3, "dropdown-menu");
  const root2 = useMenuRoot({
    variant: box.with(() => variant()),
    dir: box.with(() => dir()),
    onClose: () => {
      open(false);
      onOpenChange()(false);
    }
  });
  useMenuMenu(root2, {
    open: box.with(() => open(), (v) => {
      open(v);
      onOpenChange()(v);
    })
  });
  Floating_layer($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$4);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_4$3 = from_html(`<div><div><!></div></div>`);
var root_2 = from_html(`<!> <!>`, 1);
var root_9$2 = from_html(`<div><div><!></div></div>`);
var root_7$3 = from_html(`<!> <!>`, 1);
function Dropdown_menu_content($$anchor, $$props) {
  push($$props, true);
  let id = prop($$props, "id", 19, useId), ref = prop($$props, "ref", 15, null), loop2 = prop($$props, "loop", 3, true), onInteractOutside = prop($$props, "onInteractOutside", 3, noop$3), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop$3), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop$3), forceMount = prop($$props, "forceMount", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "child",
    "children",
    "ref",
    "loop",
    "onInteractOutside",
    "onEscapeKeydown",
    "onCloseAutoFocus",
    "forceMount"
  ]);
  const contentState = useMenuContent({
    id: box.with(() => id()),
    loop: box.with(() => loop2()),
    ref: box.with(() => ref(), (v) => ref(v)),
    onCloseAutoFocus: box.with(() => onCloseAutoFocus())
  });
  const mergedProps = user_derived(() => mergeProps(restProps, contentState.props));
  function handleInteractOutside(e) {
    contentState.handleInteractOutside(e);
    if (e.defaultPrevented) return;
    onInteractOutside()(e);
    if (e.defaultPrevented) return;
    contentState.parentMenu.onClose();
  }
  function handleEscapeKeydown(e) {
    onEscapeKeydown()(e);
    if (e.defaultPrevented) return;
    contentState.parentMenu.onClose();
  }
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      {
        const popper = ($$anchor3, $$arg0) => {
          let props = () => $$arg0 == null ? void 0 : $$arg0().props;
          let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
          const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("dropdown-menu") }));
          var fragment_2 = root_2();
          var node_1 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var fragment_3 = comment();
              var node_2 = first_child(fragment_3);
              {
                let $0 = user_derived(() => ({
                  props: get$2(finalProps),
                  wrapperProps: wrapperProps(),
                  ...contentState.snippetProps
                }));
                snippet(node_2, () => $$props.child, () => get$2($0));
              }
              append($$anchor4, fragment_3);
            };
            var alternate = ($$anchor4) => {
              var div = root_4$3();
              attribute_effect(div, () => ({ ...wrapperProps() }));
              var div_1 = child(div);
              attribute_effect(div_1, () => ({ ...get$2(finalProps) }));
              var node_3 = child(div_1);
              snippet(node_3, () => $$props.children ?? noop$4);
              reset(div_1);
              reset(div);
              append($$anchor4, div);
            };
            if_block(node_1, ($$render) => {
              if ($$props.child) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          var node_4 = sibling(node_1, 2);
          Mounted(node_4, {
            get mounted() {
              return contentState.mounted;
            },
            set mounted($$value) {
              contentState.mounted = $$value;
            }
          });
          append($$anchor3, fragment_2);
        };
        Popper_layer_force_mount($$anchor2, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
          get enabled() {
            return contentState.parentMenu.opts.open.current;
          },
          onInteractOutside: handleInteractOutside,
          onEscapeKeydown: handleEscapeKeydown,
          trapFocus: true,
          get loop() {
            return loop2();
          },
          forceMount: true,
          get id() {
            return id();
          },
          popper,
          $$slots: { popper: true }
        }));
      }
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_4 = comment();
      var node_5 = first_child(fragment_4);
      {
        var consequent_3 = ($$anchor3) => {
          {
            const popper = ($$anchor4, $$arg0) => {
              let props = () => $$arg0 == null ? void 0 : $$arg0().props;
              let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
              const finalProps = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("dropdown-menu") }));
              var fragment_6 = root_7$3();
              var node_6 = first_child(fragment_6);
              {
                var consequent_2 = ($$anchor5) => {
                  var fragment_7 = comment();
                  var node_7 = first_child(fragment_7);
                  {
                    let $0 = user_derived(() => ({
                      props: get$2(finalProps),
                      wrapperProps: wrapperProps(),
                      ...contentState.snippetProps
                    }));
                    snippet(node_7, () => $$props.child, () => get$2($0));
                  }
                  append($$anchor5, fragment_7);
                };
                var alternate_1 = ($$anchor5) => {
                  var div_2 = root_9$2();
                  attribute_effect(div_2, () => ({ ...wrapperProps() }));
                  var div_3 = child(div_2);
                  attribute_effect(div_3, () => ({ ...get$2(finalProps) }));
                  var node_8 = child(div_3);
                  snippet(node_8, () => $$props.children ?? noop$4);
                  reset(div_3);
                  reset(div_2);
                  append($$anchor5, div_2);
                };
                if_block(node_6, ($$render) => {
                  if ($$props.child) $$render(consequent_2);
                  else $$render(alternate_1, false);
                });
              }
              var node_9 = sibling(node_6, 2);
              Mounted(node_9, {
                get mounted() {
                  return contentState.mounted;
                },
                set mounted($$value) {
                  contentState.mounted = $$value;
                }
              });
              append($$anchor4, fragment_6);
            };
            Popper_layer($$anchor3, spread_props(() => get$2(mergedProps), () => contentState.popperProps, {
              get present() {
                return contentState.parentMenu.opts.open.current;
              },
              onInteractOutside: handleInteractOutside,
              onEscapeKeydown: handleEscapeKeydown,
              trapFocus: true,
              get loop() {
                return loop2();
              },
              forceMount: false,
              get id() {
                return id();
              },
              popper,
              $$slots: { popper: true }
            }));
          }
        };
        if_block(
          node_5,
          ($$render) => {
            if (!forceMount()) $$render(consequent_3);
          },
          true
        );
      }
      append($$anchor2, fragment_4);
    };
    if_block(node, ($$render) => {
      if (forceMount()) $$render(consequent_1);
      else $$render(alternate_2, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$1 = from_html(`<button><!></button>`);
function Menu_trigger($$anchor, $$props) {
  push($$props, true);
  let id = prop($$props, "id", 19, useId), ref = prop($$props, "ref", 15, null), disabled2 = prop($$props, "disabled", 3, false), type = prop($$props, "type", 3, "button"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "child",
    "children",
    "disabled",
    "type"
  ]);
  const triggerState = useMenuDropdownTrigger({
    id: box.with(() => id()),
    disabled: box.with(() => disabled2() ?? false),
    ref: box.with(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props, { type: type() }));
  Floating_layer_anchor($$anchor, {
    get id() {
      return id();
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          snippet(node_1, () => $$props.child, () => ({ props: get$2(mergedProps) }));
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var button = root_3$1();
          attribute_effect(button, () => ({ ...get$2(mergedProps) }));
          var node_2 = child(button);
          snippet(node_2, () => $$props.children ?? noop$4);
          reset(button);
          append($$anchor3, button);
        };
        if_block(node, ($$render) => {
          if ($$props.child) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
let isUsingKeyboard = state(false);
const _IsUsingKeyboard = class _IsUsingKeyboard {
  constructor() {
    user_effect(() => {
      if (_IsUsingKeyboard._refs === 0) {
        _IsUsingKeyboard._cleanup = effect_root(() => {
          const callbacksToDispose = [];
          const handlePointer = (_) => {
            set(isUsingKeyboard, false);
          };
          const handleKeydown = (_) => {
            set(isUsingKeyboard, true);
          };
          callbacksToDispose.push(on(document, "pointerdown", handlePointer, { capture: true }), on(document, "pointermove", handlePointer, { capture: true }), on(document, "keydown", handleKeydown, { capture: true }));
          return executeCallbacks(...callbacksToDispose);
        });
      }
      _IsUsingKeyboard._refs++;
      return () => {
        var _a2;
        _IsUsingKeyboard._refs--;
        if (_IsUsingKeyboard._refs === 0) {
          set(isUsingKeyboard, false);
          (_a2 = _IsUsingKeyboard._cleanup) == null ? void 0 : _a2.call(_IsUsingKeyboard);
        }
      };
    });
  }
  get current() {
    return get$2(isUsingKeyboard);
  }
  set current(value) {
    set(isUsingKeyboard, value, true);
  }
};
__publicField(_IsUsingKeyboard, "_refs", 0);
// Reference counting to avoid multiple listeners.
__publicField(_IsUsingKeyboard, "_cleanup");
let IsUsingKeyboard = _IsUsingKeyboard;
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
const defaultFlyAndScaleParams = { y: -8, start: 0.95, duration: 200 };
const flyAndScale = (node, params) => {
  const style = getComputedStyle(node);
  const transform2 = style.transform === "none" ? "" : style.transform;
  const withDefaults = { ...defaultFlyAndScaleParams, ...params };
  const scaleConversion = (valueA, scaleA, scaleB) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;
    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;
    return valueB;
  };
  const styleToString2 = (style2) => {
    return Object.keys(style2).reduce((str, key) => {
      if (style2[key] === void 0) return str;
      return str + `${key}:${style2[key]};`;
    }, "");
  };
  return {
    duration: withDefaults.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [withDefaults.y, 0]);
      const scale = scaleConversion(t, [0, 1], [withDefaults.start, 1]);
      return styleToString2({
        transform: `${transform2} translate3d(0, ${y}px, 0) scale(${scale})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};
var root_1$3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path></svg>`);
var root_3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg>`);
var root_5$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`);
var root_7$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"></path></svg>`);
var root_9$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path></svg>`);
var root_11$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2.5 3.5"></path></svg>`);
var root_13 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 12L11 15L16 10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2.5 3.5"></path></svg>`);
var root_15 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 12L11 15L16 10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
var root_17 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
var root_19 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path></svg>`);
var root_21 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>`);
var root_23 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path></svg>`);
var root_25 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path></svg>`);
var root_27 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"></path></svg>`);
var root_29 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path></svg>`);
var root_31 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"></path></svg>`);
var root_33 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>`);
var root_35 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg>`);
var root_37 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 11.9976C2 14.376 3.70973 16.3664 6 16.8714C6.36756 16.9525 6.75006 16.9952 7.14286 16.9952" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11.9976C10 14.4893 12.317 16.9952 15.1429 16.9952C15.4776 16.9952 16.581 16.9952 16.8571 16.9952C19.6975 16.9952 22 14.7577 22 11.9976C22 9.6192 20.2903 7.62884 18 7.12383C17.6324 7.04278 17.2499 6.99999 16.8571 6.99999" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
var root_39 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"></path></svg>`);
var root_41 = from_svg(`<svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.6729 3.91275C16.8918 2.6938 18.8682 2.6938 20.0871 3.91275C21.3061 5.1317 21.3061 7.10801 20.0871 8.32696L14.1499 14.2642C13.3849 15.0291 12.3925 15.5254 11.3215 15.6784L9.14142 15.9898C8.82983 16.0343 8.51546 15.9295 8.29289 15.707C8.07033 15.4844 7.96554 15.17 8.01005 14.8584L8.32149 12.6784C8.47449 11.6074 8.97072 10.6149 9.7357 9.84994L15.6729 3.91275ZM18.6729 5.32696C18.235 4.88906 17.525 4.88906 17.0871 5.32696L11.1499 11.2642C10.6909 11.7231 10.3932 12.3186 10.3014 12.9612L10.1785 13.8213L11.0386 13.6985C11.6812 13.6067 12.2767 13.3089 12.7357 12.8499L18.6729 6.91275C19.1108 6.47485 19.1108 5.76486 18.6729 5.32696ZM11 3.99916C11.0004 4.55145 10.5531 4.99951 10.0008 4.99994C9.00227 5.00072 8.29769 5.00815 7.74651 5.06052C7.20685 5.11179 6.88488 5.20104 6.63803 5.32682C6.07354 5.61444 5.6146 6.07339 5.32698 6.63787C5.19279 6.90123 5.10062 7.24891 5.05118 7.85408C5.00078 8.47092 5 9.26324 5 10.3998V13.5998C5 14.7364 5.00078 15.5288 5.05118 16.1456C5.10062 16.7508 5.19279 17.0985 5.32698 17.3618C5.6146 17.9263 6.07354 18.3852 6.63803 18.6729C6.90138 18.807 7.24907 18.8992 7.85424 18.9487C8.47108 18.9991 9.26339 18.9998 10.4 18.9998H13.6C14.7366 18.9998 15.5289 18.9991 16.1458 18.9487C16.7509 18.8992 17.0986 18.807 17.362 18.6729C17.9265 18.3852 18.3854 17.9263 18.673 17.3618C18.7988 17.115 18.8881 16.793 18.9393 16.2533C18.9917 15.7021 18.9991 14.9976 18.9999 13.9991C19.0003 13.4468 19.4484 12.9994 20.0007 12.9998C20.553 13.0003 21.0003 13.4483 20.9999 14.0006C20.9991 14.9788 20.9932 15.7807 20.9304 16.4425C20.8664 17.1159 20.7385 17.7135 20.455 18.2698C19.9757 19.2106 19.2108 19.9755 18.27 20.4549C17.6777 20.7567 17.0375 20.8825 16.3086 20.942C15.6008 20.9999 14.7266 20.9999 13.6428 20.9998H10.3572C9.27339 20.9999 8.39925 20.9999 7.69138 20.942C6.96253 20.8825 6.32234 20.7567 5.73005 20.4549C4.78924 19.9755 4.02433 19.2106 3.54497 18.2698C3.24318 17.6775 3.11737 17.0373 3.05782 16.3085C2.99998 15.6006 2.99999 14.7264 3 13.6426V10.357C2.99999 9.27325 2.99998 8.3991 3.05782 7.69122C3.11737 6.96237 3.24318 6.32218 3.54497 5.72989C4.02433 4.78908 4.78924 4.02418 5.73005 3.54481C6.28633 3.26137 6.88399 3.13346 7.55735 3.06948C8.21919 3.0066 9.02103 3.00071 9.99922 2.99994C10.5515 2.99951 10.9996 3.44688 11 3.99916Z"></path></svg>`);
var root_43 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>`);
var root_45 = from_svg(`<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true"><path d="M14.0857 8.74999C14.0857 5.80355 11.6972 3.41503 8.75073 3.41503C5.80429 3.41503 3.41577 5.80355 3.41577 8.74999C3.41577 11.6964 5.80429 14.085 8.75073 14.085C11.6972 14.085 14.0857 11.6964 14.0857 8.74999ZM15.4158 8.74999C15.4158 10.3539 14.848 11.8245 13.9041 12.9746L13.9705 13.0303L16.9705 16.0303L17.0564 16.1338C17.2269 16.3919 17.1977 16.7434 16.9705 16.9707C16.7432 17.1975 16.3925 17.226 16.1345 17.0557L16.03 16.9707L13.03 13.9707L12.9753 13.9033C11.8253 14.8472 10.3547 15.415 8.75073 15.415C5.06975 15.415 2.08569 12.431 2.08569 8.74999C2.08569 5.06901 5.06975 2.08495 8.75073 2.08495C12.4317 2.08495 15.4158 5.06901 15.4158 8.74999Z"></path></svg>`);
var root_47 = from_svg(`<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true"><path d="M10.3227 1.62663C11.1514 1.62663 11.9182 2.066 12.3373 2.78092L13.1586 4.18131L13.2123 4.25065C13.2735 4.31105 13.3565 4.34658 13.4448 4.34733L15.06 4.36002L15.2143 4.36686C15.9825 4.4239 16.6774 4.85747 17.0649 5.53092L17.393 6.10221L17.4662 6.23795C17.7814 6.88041 17.7842 7.63306 17.4741 8.27799L17.4028 8.41373L16.6 9.83561C16.5426 9.937 16.5425 10.0627 16.6 10.1647L17.4028 11.5856L17.4741 11.7223C17.7841 12.3673 17.7815 13.1199 17.4662 13.7624L17.393 13.8981L17.0649 14.4694C16.6774 15.1427 15.9824 15.5764 15.2143 15.6335L15.06 15.6393L13.4448 15.653C13.3565 15.6537 13.2736 15.6892 13.2123 15.7497L13.1586 15.818L12.3373 17.2194C11.9182 17.9342 11.1513 18.3737 10.3227 18.3737H9.6762C8.8995 18.3735 8.17705 17.9874 7.74456 17.3503L7.66253 17.2194L6.84124 15.818C6.79652 15.7418 6.72408 15.6876 6.64105 15.6647L6.55511 15.653L4.93987 15.6393C4.16288 15.633 3.44339 15.2413 3.01605 14.6003L2.93499 14.4694L2.60687 13.8981C2.19555 13.1831 2.1916 12.3039 2.5971 11.5856L3.39886 10.1647L3.43206 10.0846C3.44649 10.0293 3.44644 9.97102 3.43206 9.91569L3.39886 9.83561L2.5971 8.41373C2.19175 7.6955 2.19562 6.8171 2.60687 6.10221L2.93499 5.53092L3.01605 5.40006C3.44337 4.75894 4.1628 4.36636 4.93987 4.36002L6.55511 4.34733L6.64105 4.33561C6.72418 4.31275 6.79651 4.25762 6.84124 4.18131L7.66253 2.78092L7.74456 2.65006C8.17704 2.01277 8.89941 1.62678 9.6762 1.62663H10.3227ZM9.6762 2.9567C9.36439 2.95685 9.07299 3.10138 8.88421 3.34342L8.80999 3.45377L7.9887 4.85416C7.72933 5.29669 7.28288 5.59093 6.78265 5.6608L6.56585 5.67741L4.95062 5.6901C4.63868 5.69265 4.34845 5.84001 4.16155 6.08366L4.08733 6.19401L3.75921 6.7653C3.58227 7.073 3.5808 7.45131 3.7553 7.76041L4.55706 9.18131L4.65179 9.37663C4.81309 9.77605 4.81294 10.2232 4.65179 10.6227L4.55706 10.819L3.7553 12.2399C3.58083 12.549 3.5822 12.9273 3.75921 13.235L4.08733 13.8053L4.16155 13.9166C4.34845 14.1603 4.63867 14.3077 4.95062 14.3102L6.56585 14.3229L6.78265 14.3395C7.28288 14.4094 7.72933 14.7036 7.9887 15.1462L8.80999 16.5466L8.88421 16.6569C9.07299 16.899 9.36438 17.0435 9.6762 17.0437H10.3227C10.6345 17.0435 10.9259 16.899 11.1147 16.6569L11.189 16.5466L12.0103 15.1462C12.2696 14.7036 12.716 14.4094 13.2163 14.3395L13.433 14.3229L15.0483 14.3102C15.3602 14.3077 15.6505 14.1603 15.8374 13.9166L15.9116 13.8053L16.2397 13.235C16.4167 12.9273 16.4181 12.549 16.2436 12.2399L15.4418 10.819L15.3471 10.6227C15.186 10.2232 15.1858 9.77605 15.3471 9.37663L15.4418 9.18131L16.2436 7.76041C16.4181 7.45131 16.4167 7.073 16.2397 6.7653L15.9116 6.19401L15.8374 6.08366C15.6505 5.84001 15.3602 5.69265 15.0483 5.6901L13.433 5.67741L13.2163 5.6608C12.716 5.59093 12.2696 5.29669 12.0103 4.85416L11.189 3.45377L11.1147 3.34342C10.9259 3.10138 10.6345 2.95685 10.3227 2.9567H9.6762ZM9.99988 6.66748C11.8409 6.66748 13.3327 8.15924 13.3327 10.0003C13.3327 11.8413 11.8409 13.333 9.99988 13.333C8.15893 13.333 6.66716 11.8413 6.66716 10.0003C6.66716 8.15924 8.15893 6.66748 9.99988 6.66748ZM9.99988 7.99756C8.89379 7.99756 7.99725 8.89411 7.99725 10.0003C7.99725 11.1063 8.89379 12.0029 9.99988 12.0029C11.106 12.0029 12.0025 11.1063 12.0025 10.0003C12.0025 8.89411 11.106 7.99756 9.99988 7.99756Z"></path></svg>`);
var root_49 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path d="M20 13V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V13" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 15V3M12 3L8.5 6.5M12 3L15.5 6.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
var root_51 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd" aria-hidden="true"></path><path fill-rule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clip-rule="evenodd"></path></svg>`);
var root_53 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg>`);
var root_55 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);
var root_57 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><!><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>`);
function Icon$1($$anchor, $$props) {
  push($$props, false);
  const finalClassName = mutable_source();
  const finalStrokeWidth = mutable_source();
  let name = prop($$props, "name", 8);
  let className = prop($$props, "className", 8, void 0);
  let strokeWidth = prop($$props, "strokeWidth", 8, void 0);
  const defaults = {
    AdjustmentsHorizontal: { className: "w-4 h-4", strokeWidth: "1.5" },
    ArchiveBox: { className: "size-4", strokeWidth: "2.5" },
    ArrowRightCircle: { className: "size-4", strokeWidth: "1.5" },
    ArrowUpTray: { className: "size-4", strokeWidth: "1.5" },
    ChatBubble: { className: "size-4", strokeWidth: "1.5" },
    ChatBubbleDotted: { className: "size-4", strokeWidth: "1.5" },
    ChatBubbleDottedChecked: { className: "size-4", strokeWidth: "1.5" },
    ChatCheck: { className: "w-4 h-4", strokeWidth: "1.5" },
    ChatPlus: { className: "w-4 h-4", strokeWidth: "1.5" },
    Check: { className: "w-4 h-4", strokeWidth: "1.5" },
    ChevronDown: { className: "w-4 h-4", strokeWidth: "1.5" },
    ChevronUp: { className: "w-4 h-4", strokeWidth: "1.5" },
    ChevronUpDown: { className: "w-4 h-4", strokeWidth: "1.5" },
    Clipboard: { className: "size-4", strokeWidth: "2" },
    Document: { className: "size-4", strokeWidth: "1.5" },
    DocumentDuplicate: { className: "w-4 h-4", strokeWidth: "1.5" },
    EllipsisHorizontal: { className: "w-4 h-4", strokeWidth: "1.5" },
    GarbageBin: { className: "w-4 h-4", strokeWidth: "1.5" },
    Link: { className: "size-4", strokeWidth: "1.5" },
    Merge: { className: "w-4 h-4", strokeWidth: "1.5" },
    PencilSquare: { className: "w-5 h-5", strokeWidth: "1.5" },
    Plus: { className: "w-4 h-4", strokeWidth: "2" },
    Search: { className: "w-5 h-5", strokeWidth: "1.5" },
    Settings: { className: "w-5 h-5", strokeWidth: "1.5" },
    Share: { className: "size-4", strokeWidth: "1.5" },
    SignOut: { className: "w-5 h-5", strokeWidth: "1.5" },
    Star: { className: "w-4 h-4", strokeWidth: "1.5" },
    UserGroup: { className: "w-5 h-5", strokeWidth: "1.5" },
    XMark: { className: "size-3.5", strokeWidth: "2" }
  };
  legacy_pre_effect(() => (deep_read_state(className()), deep_read_state(name())), () => {
    var _a2;
    set(finalClassName, className() ?? ((_a2 = defaults[name()]) == null ? void 0 : _a2.className) ?? "w-4 h-4");
  });
  legacy_pre_effect(() => (deep_read_state(strokeWidth()), deep_read_state(name())), () => {
    var _a2;
    set(finalStrokeWidth, strokeWidth() ?? ((_a2 = defaults[name()]) == null ? void 0 : _a2.strokeWidth) ?? "1.5");
  });
  legacy_pre_effect_reset();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var svg = root_1$3();
      template_effect(() => {
        set_class(svg, 0, clsx$1(get$2(finalClassName)));
        set_attribute(svg, "stroke-width", get$2(finalStrokeWidth));
      });
      append($$anchor2, svg);
    };
    var alternate_27 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_1 = ($$anchor3) => {
          var svg_1 = root_3();
          template_effect(() => {
            set_attribute(svg_1, "stroke-width", get$2(finalStrokeWidth));
            set_class(svg_1, 0, clsx$1(get$2(finalClassName)));
          });
          append($$anchor3, svg_1);
        };
        var alternate_26 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent_2 = ($$anchor4) => {
              var svg_2 = root_5$2();
              template_effect(() => {
                set_attribute(svg_2, "stroke-width", get$2(finalStrokeWidth));
                set_class(svg_2, 0, clsx$1(get$2(finalClassName)));
              });
              append($$anchor4, svg_2);
            };
            var alternate_25 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_3 = first_child(fragment_3);
              {
                var consequent_3 = ($$anchor5) => {
                  var svg_3 = root_7$2();
                  template_effect(() => {
                    set_attribute(svg_3, "stroke-width", get$2(finalStrokeWidth));
                    set_class(svg_3, 0, clsx$1(get$2(finalClassName)));
                  });
                  append($$anchor5, svg_3);
                };
                var alternate_24 = ($$anchor5) => {
                  var fragment_4 = comment();
                  var node_4 = first_child(fragment_4);
                  {
                    var consequent_4 = ($$anchor6) => {
                      var svg_4 = root_9$1();
                      template_effect(() => {
                        set_attribute(svg_4, "stroke-width", get$2(finalStrokeWidth));
                        set_class(svg_4, 0, clsx$1(get$2(finalClassName)));
                      });
                      append($$anchor6, svg_4);
                    };
                    var alternate_23 = ($$anchor6) => {
                      var fragment_5 = comment();
                      var node_5 = first_child(fragment_5);
                      {
                        var consequent_5 = ($$anchor7) => {
                          var svg_5 = root_11$1();
                          template_effect(() => {
                            set_attribute(svg_5, "stroke-width", get$2(finalStrokeWidth));
                            set_class(svg_5, 0, clsx$1(get$2(finalClassName)));
                          });
                          append($$anchor7, svg_5);
                        };
                        var alternate_22 = ($$anchor7) => {
                          var fragment_6 = comment();
                          var node_6 = first_child(fragment_6);
                          {
                            var consequent_6 = ($$anchor8) => {
                              var svg_6 = root_13();
                              template_effect(() => {
                                set_attribute(svg_6, "stroke-width", get$2(finalStrokeWidth));
                                set_class(svg_6, 0, clsx$1(get$2(finalClassName)));
                              });
                              append($$anchor8, svg_6);
                            };
                            var alternate_21 = ($$anchor8) => {
                              var fragment_7 = comment();
                              var node_7 = first_child(fragment_7);
                              {
                                var consequent_7 = ($$anchor9) => {
                                  var svg_7 = root_15();
                                  template_effect(() => {
                                    set_attribute(svg_7, "stroke-width", get$2(finalStrokeWidth));
                                    set_class(svg_7, 0, clsx$1(get$2(finalClassName)));
                                  });
                                  append($$anchor9, svg_7);
                                };
                                var alternate_20 = ($$anchor9) => {
                                  var fragment_8 = comment();
                                  var node_8 = first_child(fragment_8);
                                  {
                                    var consequent_8 = ($$anchor10) => {
                                      var svg_8 = root_17();
                                      template_effect(() => {
                                        set_attribute(svg_8, "stroke-width", get$2(finalStrokeWidth));
                                        set_class(svg_8, 0, clsx$1(get$2(finalClassName)));
                                      });
                                      append($$anchor10, svg_8);
                                    };
                                    var alternate_19 = ($$anchor10) => {
                                      var fragment_9 = comment();
                                      var node_9 = first_child(fragment_9);
                                      {
                                        var consequent_9 = ($$anchor11) => {
                                          var svg_9 = root_19();
                                          template_effect(() => {
                                            set_attribute(svg_9, "stroke-width", get$2(finalStrokeWidth));
                                            set_class(svg_9, 0, clsx$1(get$2(finalClassName)));
                                          });
                                          append($$anchor11, svg_9);
                                        };
                                        var alternate_18 = ($$anchor11) => {
                                          var fragment_10 = comment();
                                          var node_10 = first_child(fragment_10);
                                          {
                                            var consequent_10 = ($$anchor12) => {
                                              var svg_10 = root_21();
                                              template_effect(() => {
                                                set_attribute(svg_10, "stroke-width", get$2(finalStrokeWidth));
                                                set_class(svg_10, 0, clsx$1(get$2(finalClassName)));
                                              });
                                              append($$anchor12, svg_10);
                                            };
                                            var alternate_17 = ($$anchor12) => {
                                              var fragment_11 = comment();
                                              var node_11 = first_child(fragment_11);
                                              {
                                                var consequent_11 = ($$anchor13) => {
                                                  var svg_11 = root_23();
                                                  template_effect(() => {
                                                    set_attribute(svg_11, "stroke-width", get$2(finalStrokeWidth));
                                                    set_class(svg_11, 0, clsx$1(get$2(finalClassName)));
                                                  });
                                                  append($$anchor13, svg_11);
                                                };
                                                var alternate_16 = ($$anchor13) => {
                                                  var fragment_12 = comment();
                                                  var node_12 = first_child(fragment_12);
                                                  {
                                                    var consequent_12 = ($$anchor14) => {
                                                      var svg_12 = root_25();
                                                      template_effect(() => {
                                                        set_attribute(svg_12, "stroke-width", get$2(finalStrokeWidth));
                                                        set_class(svg_12, 0, clsx$1(get$2(finalClassName)));
                                                      });
                                                      append($$anchor14, svg_12);
                                                    };
                                                    var alternate_15 = ($$anchor14) => {
                                                      var fragment_13 = comment();
                                                      var node_13 = first_child(fragment_13);
                                                      {
                                                        var consequent_13 = ($$anchor15) => {
                                                          var svg_13 = root_27();
                                                          template_effect(() => {
                                                            set_attribute(svg_13, "stroke-width", get$2(finalStrokeWidth));
                                                            set_class(svg_13, 0, clsx$1(get$2(finalClassName)));
                                                          });
                                                          append($$anchor15, svg_13);
                                                        };
                                                        var alternate_14 = ($$anchor15) => {
                                                          var fragment_14 = comment();
                                                          var node_14 = first_child(fragment_14);
                                                          {
                                                            var consequent_14 = ($$anchor16) => {
                                                              var svg_14 = root_29();
                                                              template_effect(() => {
                                                                set_attribute(svg_14, "stroke-width", get$2(finalStrokeWidth));
                                                                set_class(svg_14, 0, clsx$1(get$2(finalClassName)));
                                                              });
                                                              append($$anchor16, svg_14);
                                                            };
                                                            var alternate_13 = ($$anchor16) => {
                                                              var fragment_15 = comment();
                                                              var node_15 = first_child(fragment_15);
                                                              {
                                                                var consequent_15 = ($$anchor17) => {
                                                                  var svg_15 = root_31();
                                                                  template_effect(() => {
                                                                    set_attribute(svg_15, "stroke-width", get$2(finalStrokeWidth));
                                                                    set_class(svg_15, 0, clsx$1(get$2(finalClassName)));
                                                                  });
                                                                  append($$anchor17, svg_15);
                                                                };
                                                                var alternate_12 = ($$anchor17) => {
                                                                  var fragment_16 = comment();
                                                                  var node_16 = first_child(fragment_16);
                                                                  {
                                                                    var consequent_16 = ($$anchor18) => {
                                                                      var svg_16 = root_33();
                                                                      template_effect(() => {
                                                                        set_attribute(svg_16, "stroke-width", get$2(finalStrokeWidth));
                                                                        set_class(svg_16, 0, clsx$1(get$2(finalClassName)));
                                                                      });
                                                                      append($$anchor18, svg_16);
                                                                    };
                                                                    var alternate_11 = ($$anchor18) => {
                                                                      var fragment_17 = comment();
                                                                      var node_17 = first_child(fragment_17);
                                                                      {
                                                                        var consequent_17 = ($$anchor19) => {
                                                                          var svg_17 = root_35();
                                                                          template_effect(() => {
                                                                            set_attribute(svg_17, "stroke-width", get$2(finalStrokeWidth));
                                                                            set_class(svg_17, 0, clsx$1(get$2(finalClassName)));
                                                                          });
                                                                          append($$anchor19, svg_17);
                                                                        };
                                                                        var alternate_10 = ($$anchor19) => {
                                                                          var fragment_18 = comment();
                                                                          var node_18 = first_child(fragment_18);
                                                                          {
                                                                            var consequent_18 = ($$anchor20) => {
                                                                              var svg_18 = root_37();
                                                                              template_effect(() => {
                                                                                set_attribute(svg_18, "stroke-width", get$2(finalStrokeWidth));
                                                                                set_class(svg_18, 0, clsx$1(get$2(finalClassName)));
                                                                              });
                                                                              append($$anchor20, svg_18);
                                                                            };
                                                                            var alternate_9 = ($$anchor20) => {
                                                                              var fragment_19 = comment();
                                                                              var node_19 = first_child(fragment_19);
                                                                              {
                                                                                var consequent_19 = ($$anchor21) => {
                                                                                  var svg_19 = root_39();
                                                                                  template_effect(() => {
                                                                                    set_attribute(svg_19, "stroke-width", get$2(finalStrokeWidth));
                                                                                    set_class(svg_19, 0, clsx$1(get$2(finalClassName)));
                                                                                  });
                                                                                  append($$anchor21, svg_19);
                                                                                };
                                                                                var alternate_8 = ($$anchor21) => {
                                                                                  var fragment_20 = comment();
                                                                                  var node_20 = first_child(fragment_20);
                                                                                  {
                                                                                    var consequent_20 = ($$anchor22) => {
                                                                                      var svg_20 = root_41();
                                                                                      template_effect(() => set_class(svg_20, 0, clsx$1(get$2(finalClassName))));
                                                                                      append($$anchor22, svg_20);
                                                                                    };
                                                                                    var alternate_7 = ($$anchor22) => {
                                                                                      var fragment_21 = comment();
                                                                                      var node_21 = first_child(fragment_21);
                                                                                      {
                                                                                        var consequent_21 = ($$anchor23) => {
                                                                                          var svg_21 = root_43();
                                                                                          template_effect(() => {
                                                                                            set_attribute(svg_21, "stroke-width", get$2(finalStrokeWidth));
                                                                                            set_class(svg_21, 0, clsx$1(get$2(finalClassName)));
                                                                                          });
                                                                                          append($$anchor23, svg_21);
                                                                                        };
                                                                                        var alternate_6 = ($$anchor23) => {
                                                                                          var fragment_22 = comment();
                                                                                          var node_22 = first_child(fragment_22);
                                                                                          {
                                                                                            var consequent_22 = ($$anchor24) => {
                                                                                              var svg_22 = root_45();
                                                                                              append($$anchor24, svg_22);
                                                                                            };
                                                                                            var alternate_5 = ($$anchor24) => {
                                                                                              var fragment_23 = comment();
                                                                                              var node_23 = first_child(fragment_23);
                                                                                              {
                                                                                                var consequent_23 = ($$anchor25) => {
                                                                                                  var svg_23 = root_47();
                                                                                                  append($$anchor25, svg_23);
                                                                                                };
                                                                                                var alternate_4 = ($$anchor25) => {
                                                                                                  var fragment_24 = comment();
                                                                                                  var node_24 = first_child(fragment_24);
                                                                                                  {
                                                                                                    var consequent_24 = ($$anchor26) => {
                                                                                                      var svg_24 = root_49();
                                                                                                      template_effect(() => {
                                                                                                        set_attribute(svg_24, "stroke-width", get$2(finalStrokeWidth));
                                                                                                        set_class(svg_24, 0, clsx$1(get$2(finalClassName)));
                                                                                                      });
                                                                                                      append($$anchor26, svg_24);
                                                                                                    };
                                                                                                    var alternate_3 = ($$anchor26) => {
                                                                                                      var fragment_25 = comment();
                                                                                                      var node_25 = first_child(fragment_25);
                                                                                                      {
                                                                                                        var consequent_25 = ($$anchor27) => {
                                                                                                          var svg_25 = root_51();
                                                                                                          template_effect(() => set_class(svg_25, 0, clsx$1(get$2(finalClassName))));
                                                                                                          append($$anchor27, svg_25);
                                                                                                        };
                                                                                                        var alternate_2 = ($$anchor27) => {
                                                                                                          var fragment_26 = comment();
                                                                                                          var node_26 = first_child(fragment_26);
                                                                                                          {
                                                                                                            var consequent_26 = ($$anchor28) => {
                                                                                                              var svg_26 = root_53();
                                                                                                              template_effect(() => {
                                                                                                                set_attribute(svg_26, "stroke-width", get$2(finalStrokeWidth));
                                                                                                                set_class(svg_26, 0, clsx$1(get$2(finalClassName)));
                                                                                                              });
                                                                                                              append($$anchor28, svg_26);
                                                                                                            };
                                                                                                            var alternate_1 = ($$anchor28) => {
                                                                                                              var fragment_27 = comment();
                                                                                                              var node_27 = first_child(fragment_27);
                                                                                                              {
                                                                                                                var consequent_27 = ($$anchor29) => {
                                                                                                                  var svg_27 = root_55();
                                                                                                                  template_effect(() => {
                                                                                                                    set_attribute(svg_27, "stroke-width", get$2(finalStrokeWidth));
                                                                                                                    set_class(svg_27, 0, clsx$1(get$2(finalClassName)));
                                                                                                                  });
                                                                                                                  append($$anchor29, svg_27);
                                                                                                                };
                                                                                                                var alternate = ($$anchor29) => {
                                                                                                                  var fragment_28 = comment();
                                                                                                                  var node_28 = first_child(fragment_28);
                                                                                                                  {
                                                                                                                    var consequent_28 = ($$anchor30) => {
                                                                                                                      var svg_28 = root_57();
                                                                                                                      var node_29 = child(svg_28);
                                                                                                                      slot(node_29, $$props, "default", {}, null);
                                                                                                                      next();
                                                                                                                      reset(svg_28);
                                                                                                                      template_effect(() => {
                                                                                                                        set_attribute(svg_28, "stroke-width", get$2(finalStrokeWidth));
                                                                                                                        set_class(svg_28, 0, clsx$1(get$2(finalClassName)));
                                                                                                                      });
                                                                                                                      append($$anchor30, svg_28);
                                                                                                                    };
                                                                                                                    if_block(
                                                                                                                      node_28,
                                                                                                                      ($$render) => {
                                                                                                                        if (name() === "XMark") $$render(consequent_28);
                                                                                                                      },
                                                                                                                      true
                                                                                                                    );
                                                                                                                  }
                                                                                                                  append($$anchor29, fragment_28);
                                                                                                                };
                                                                                                                if_block(
                                                                                                                  node_27,
                                                                                                                  ($$render) => {
                                                                                                                    if (name() === "UserGroup") $$render(consequent_27);
                                                                                                                    else $$render(alternate, false);
                                                                                                                  },
                                                                                                                  true
                                                                                                                );
                                                                                                              }
                                                                                                              append($$anchor28, fragment_27);
                                                                                                            };
                                                                                                            if_block(
                                                                                                              node_26,
                                                                                                              ($$render) => {
                                                                                                                if (name() === "Star") $$render(consequent_26);
                                                                                                                else $$render(alternate_1, false);
                                                                                                              },
                                                                                                              true
                                                                                                            );
                                                                                                          }
                                                                                                          append($$anchor27, fragment_26);
                                                                                                        };
                                                                                                        if_block(
                                                                                                          node_25,
                                                                                                          ($$render) => {
                                                                                                            if (name() === "SignOut") $$render(consequent_25);
                                                                                                            else $$render(alternate_2, false);
                                                                                                          },
                                                                                                          true
                                                                                                        );
                                                                                                      }
                                                                                                      append($$anchor26, fragment_25);
                                                                                                    };
                                                                                                    if_block(
                                                                                                      node_24,
                                                                                                      ($$render) => {
                                                                                                        if (name() === "Share") $$render(consequent_24);
                                                                                                        else $$render(alternate_3, false);
                                                                                                      },
                                                                                                      true
                                                                                                    );
                                                                                                  }
                                                                                                  append($$anchor25, fragment_24);
                                                                                                };
                                                                                                if_block(
                                                                                                  node_23,
                                                                                                  ($$render) => {
                                                                                                    if (name() === "Settings") $$render(consequent_23);
                                                                                                    else $$render(alternate_4, false);
                                                                                                  },
                                                                                                  true
                                                                                                );
                                                                                              }
                                                                                              append($$anchor24, fragment_23);
                                                                                            };
                                                                                            if_block(
                                                                                              node_22,
                                                                                              ($$render) => {
                                                                                                if (name() === "Search") $$render(consequent_22);
                                                                                                else $$render(alternate_5, false);
                                                                                              },
                                                                                              true
                                                                                            );
                                                                                          }
                                                                                          append($$anchor23, fragment_22);
                                                                                        };
                                                                                        if_block(
                                                                                          node_21,
                                                                                          ($$render) => {
                                                                                            if (name() === "Plus") $$render(consequent_21);
                                                                                            else $$render(alternate_6, false);
                                                                                          },
                                                                                          true
                                                                                        );
                                                                                      }
                                                                                      append($$anchor22, fragment_21);
                                                                                    };
                                                                                    if_block(
                                                                                      node_20,
                                                                                      ($$render) => {
                                                                                        if (name() === "PencilSquare") $$render(consequent_20);
                                                                                        else $$render(alternate_7, false);
                                                                                      },
                                                                                      true
                                                                                    );
                                                                                  }
                                                                                  append($$anchor21, fragment_20);
                                                                                };
                                                                                if_block(
                                                                                  node_19,
                                                                                  ($$render) => {
                                                                                    if (name() === "Merge") $$render(consequent_19);
                                                                                    else $$render(alternate_8, false);
                                                                                  },
                                                                                  true
                                                                                );
                                                                              }
                                                                              append($$anchor20, fragment_19);
                                                                            };
                                                                            if_block(
                                                                              node_18,
                                                                              ($$render) => {
                                                                                if (name() === "Link") $$render(consequent_18);
                                                                                else $$render(alternate_9, false);
                                                                              },
                                                                              true
                                                                            );
                                                                          }
                                                                          append($$anchor19, fragment_18);
                                                                        };
                                                                        if_block(
                                                                          node_17,
                                                                          ($$render) => {
                                                                            if (name() === "GarbageBin") $$render(consequent_17);
                                                                            else $$render(alternate_10, false);
                                                                          },
                                                                          true
                                                                        );
                                                                      }
                                                                      append($$anchor18, fragment_17);
                                                                    };
                                                                    if_block(
                                                                      node_16,
                                                                      ($$render) => {
                                                                        if (name() === "EllipsisHorizontal") $$render(consequent_16);
                                                                        else $$render(alternate_11, false);
                                                                      },
                                                                      true
                                                                    );
                                                                  }
                                                                  append($$anchor17, fragment_16);
                                                                };
                                                                if_block(
                                                                  node_15,
                                                                  ($$render) => {
                                                                    if (name() === "DocumentDuplicate") $$render(consequent_15);
                                                                    else $$render(alternate_12, false);
                                                                  },
                                                                  true
                                                                );
                                                              }
                                                              append($$anchor16, fragment_15);
                                                            };
                                                            if_block(
                                                              node_14,
                                                              ($$render) => {
                                                                if (name() === "Document") $$render(consequent_14);
                                                                else $$render(alternate_13, false);
                                                              },
                                                              true
                                                            );
                                                          }
                                                          append($$anchor15, fragment_14);
                                                        };
                                                        if_block(
                                                          node_13,
                                                          ($$render) => {
                                                            if (name() === "Clipboard") $$render(consequent_13);
                                                            else $$render(alternate_14, false);
                                                          },
                                                          true
                                                        );
                                                      }
                                                      append($$anchor14, fragment_13);
                                                    };
                                                    if_block(
                                                      node_12,
                                                      ($$render) => {
                                                        if (name() === "ChevronUpDown") $$render(consequent_12);
                                                        else $$render(alternate_15, false);
                                                      },
                                                      true
                                                    );
                                                  }
                                                  append($$anchor13, fragment_12);
                                                };
                                                if_block(
                                                  node_11,
                                                  ($$render) => {
                                                    if (name() === "ChevronUp") $$render(consequent_11);
                                                    else $$render(alternate_16, false);
                                                  },
                                                  true
                                                );
                                              }
                                              append($$anchor12, fragment_11);
                                            };
                                            if_block(
                                              node_10,
                                              ($$render) => {
                                                if (name() === "ChevronDown") $$render(consequent_10);
                                                else $$render(alternate_17, false);
                                              },
                                              true
                                            );
                                          }
                                          append($$anchor11, fragment_10);
                                        };
                                        if_block(
                                          node_9,
                                          ($$render) => {
                                            if (name() === "Check") $$render(consequent_9);
                                            else $$render(alternate_18, false);
                                          },
                                          true
                                        );
                                      }
                                      append($$anchor10, fragment_9);
                                    };
                                    if_block(
                                      node_8,
                                      ($$render) => {
                                        if (name() === "ChatPlus") $$render(consequent_8);
                                        else $$render(alternate_19, false);
                                      },
                                      true
                                    );
                                  }
                                  append($$anchor9, fragment_8);
                                };
                                if_block(
                                  node_7,
                                  ($$render) => {
                                    if (name() === "ChatCheck") $$render(consequent_7);
                                    else $$render(alternate_20, false);
                                  },
                                  true
                                );
                              }
                              append($$anchor8, fragment_7);
                            };
                            if_block(
                              node_6,
                              ($$render) => {
                                if (name() === "ChatBubbleDottedChecked") $$render(consequent_6);
                                else $$render(alternate_21, false);
                              },
                              true
                            );
                          }
                          append($$anchor7, fragment_6);
                        };
                        if_block(
                          node_5,
                          ($$render) => {
                            if (name() === "ChatBubbleDotted") $$render(consequent_5);
                            else $$render(alternate_22, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_5);
                    };
                    if_block(
                      node_4,
                      ($$render) => {
                        if (name() === "ChatBubble") $$render(consequent_4);
                        else $$render(alternate_23, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_4);
                };
                if_block(
                  node_3,
                  ($$render) => {
                    if (name() === "ArrowUpTray") $$render(consequent_3);
                    else $$render(alternate_24, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_3);
            };
            if_block(
              node_2,
              ($$render) => {
                if (name() === "ArrowRightCircle") $$render(consequent_2);
                else $$render(alternate_25, false);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(
          node_1,
          ($$render) => {
            if (name() === "ArchiveBox") $$render(consequent_1);
            else $$render(alternate_26, false);
          },
          true
        );
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (name() === "AdjustmentsHorizontal") $$render(consequent);
      else $$render(alternate_27, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_5$1 = from_html(`<div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div>`, 1);
var root_6$1 = from_html(`<div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div>`, 1);
var root_9 = from_html(`<div class="flex items-center"> </div>`);
var root_10 = from_html(`<div class="flex items-center"> </div>`);
var root_8 = from_html(`<!> <!>`, 1);
var root_7$1 = from_html(`<hr class=" border-gray-50 dark:border-gray-800 my-1 p-0"/> <!>`, 1);
var root_11 = from_html(`<div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div>`, 1);
var root_4$2 = from_html(`<!> <!> <!> <hr class=" border-gray-50 dark:border-gray-800 my-1 p-0"/> <!>`, 1);
var root_1$2 = from_html(`<!> <!>`, 1);
function UserMenu($$anchor, $$props) {
  push($$props, false);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let help = prop($$props, "help", 8, false);
  let className = prop($$props, "className", 8, "max-w-[240px]");
  const dispatch = createEventDispatcher();
  init();
  Menu($$anchor, {
    onOpenChange: (state2) => {
      dispatch("change", state2);
    },
    get open() {
      return show();
    },
    set open($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      Menu_trigger(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          slot(node_1, $$props, "default", {}, null);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node, 2);
      slot(node_2, $$props, "content", {}, ($$anchor3) => {
        Dropdown_menu_content($$anchor3, {
          get class() {
            return `w-full ${className() ?? ""}  rounded-2xl px-1 py-1  border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg text-sm`;
          },
          sideOffset: 4,
          side: "top",
          align: "end",
          transition: (e) => fade(e, { duration: 100 }),
          children: ($$anchor4, $$slotProps2) => {
            var fragment_4 = root_4$2();
            var node_3 = first_child(fragment_4);
            Menu_item(node_3, {
              class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer",
              $$events: {
                click: async () => {
                  show(false);
                  await showSettings.set(true);
                  if ($mobile()) {
                    await tick();
                    showSidebar.set(false);
                  }
                }
              },
              children: ($$anchor5, $$slotProps3) => {
                var fragment_5 = root_5$1();
                var div = first_child(fragment_5);
                var node_4 = child(div);
                Icon$1(node_4, { name: "Settings", className: "w-5 h-5", strokeWidth: "1.5" });
                reset(div);
                var div_1 = sibling(div, 2);
                var text2 = child(div_1, true);
                reset(div_1);
                template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Settings")))]);
                append($$anchor5, fragment_5);
              },
              $$slots: { default: true }
            });
            var node_5 = sibling(node_3, 2);
            Menu_item(node_5, {
              class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer",
              $$events: {
                click: async () => {
                  show(false);
                  dispatch("show", "archived-chat");
                  if ($mobile()) {
                    await tick();
                    showSidebar.set(false);
                  }
                }
              },
              children: ($$anchor5, $$slotProps3) => {
                var fragment_6 = root_6$1();
                var div_2 = first_child(fragment_6);
                var node_6 = child(div_2);
                Icon$1(node_6, { name: "ArchiveBox", className: "size-5", strokeWidth: "1.5" });
                reset(div_2);
                var div_3 = sibling(div_2, 2);
                var text_1 = child(div_3, true);
                reset(div_3);
                template_effect(($0) => set_text(text_1, $0), [
                  () => ($i18n(), untrack(() => $i18n().t("Archived Chats")))
                ]);
                append($$anchor5, fragment_6);
              },
              $$slots: { default: true }
            });
            var node_7 = sibling(node_5, 2);
            {
              var consequent_1 = ($$anchor5) => {
                var fragment_7 = root_7$1();
                var node_8 = sibling(first_child(fragment_7), 2);
                {
                  var consequent = ($$anchor6) => {
                    var fragment_8 = root_8();
                    var node_9 = first_child(fragment_8);
                    Menu_item(node_9, {
                      as: "a",
                      target: "_blank",
                      class: "flex gap-3 items-center py-1.5 px-3 text-sm select-none w-full cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition",
                      id: "chat-share-button",
                      href: "https://docs.openwebui.com",
                      $$events: {
                        click: () => {
                          show(false);
                        }
                      },
                      children: ($$anchor7, $$slotProps3) => {
                        var div_4 = root_9();
                        var text_2 = child(div_4, true);
                        reset(div_4);
                        template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Documentation")))]);
                        append($$anchor7, div_4);
                      },
                      $$slots: { default: true }
                    });
                    var node_10 = sibling(node_9, 2);
                    Menu_item(node_10, {
                      as: "a",
                      target: "_blank",
                      class: "flex gap-3 items-center py-1.5 px-3 text-sm select-none w-full cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition",
                      id: "chat-share-button",
                      href: "https://github.com/open-webui/open-webui/releases",
                      $$events: {
                        click: () => {
                          show(false);
                        }
                      },
                      children: ($$anchor7, $$slotProps3) => {
                        var div_5 = root_10();
                        var text_3 = child(div_5, true);
                        reset(div_5);
                        template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Releases")))]);
                        append($$anchor7, div_5);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor6, fragment_8);
                  };
                  if_block(node_8, ($$render) => {
                    if ($user(), untrack(() => {
                      var _a2;
                      return ((_a2 = $user()) == null ? void 0 : _a2.role) === "admin";
                    })) $$render(consequent);
                  });
                }
                append($$anchor5, fragment_7);
              };
              if_block(node_7, ($$render) => {
                if (help()) $$render(consequent_1);
              });
            }
            var node_11 = sibling(node_7, 4);
            Menu_item(node_11, {
              class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition",
              $$events: {
                click: async () => {
                  user.set(null);
                  location.href = "/";
                  show(false);
                }
              },
              children: ($$anchor5, $$slotProps3) => {
                var fragment_9 = root_11();
                var div_6 = first_child(fragment_9);
                var node_12 = child(div_6);
                Icon$1(node_12, { name: "SignOut", className: "w-5 h-5", strokeWidth: "1.5" });
                reset(div_6);
                var div_7 = sibling(div_6, 2);
                var text_4 = child(div_7, true);
                reset(div_7);
                template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Sign Out")))]);
                append($$anchor5, fragment_9);
              },
              $$slots: { default: true }
            });
            append($$anchor4, fragment_4);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_5 = from_html(`<a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">1st menu item</a>`);
var root_6 = from_html(`<a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">2nd menu item</a>`);
var root_4$1 = from_html(`<!> <!> <!> <!>`, 1);
var root_1$1 = from_html(`<!> <!>`, 1);
function Dropdown($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let side = prop($$props, "side", 8, "bottom");
  let align = prop($$props, "align", 8, "start");
  let closeOnOutsideClick = prop($$props, "closeOnOutsideClick", 8, true);
  let className = prop($$props, "className", 8, "min-w-[160px]");
  const dispatch = createEventDispatcher();
  init();
  Menu($$anchor, {
    closeFocus: false,
    get closeOnOutsideClick() {
      return closeOnOutsideClick();
    },
    onOpenChange: (state2) => {
      dispatch("change", state2);
    },
    typeahead: false,
    get open() {
      return show();
    },
    set open($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var node = first_child(fragment_1);
      Menu_trigger(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          slot(node_1, $$props, "default", {}, null);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node, 2);
      slot(node_2, $$props, "content", {}, ($$anchor3) => {
        Dropdown_menu_content($$anchor3, {
          get class() {
            return `ant-dropdown-menu ${className() ?? ""}`;
          },
          sideOffset: 4,
          get side() {
            return side();
          },
          get align() {
            return align();
          },
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor4, $$slotProps2) => {
            var fragment_4 = root_4$1();
            var node_3 = first_child(fragment_4);
            Menu_item(node_3, {
              class: "ant-dropdown-menu-item",
              children: ($$anchor5, $$slotProps3) => {
                var a2 = root_5();
                append($$anchor5, a2);
              },
              $$slots: { default: true }
            });
            var node_4 = sibling(node_3, 2);
            Menu_item(node_4, {
              class: "ant-dropdown-menu-item",
              children: ($$anchor5, $$slotProps3) => {
                var a_1 = root_6();
                append($$anchor5, a_1);
              },
              $$slots: { default: true }
            });
            var node_5 = sibling(node_4, 2);
            Menu_separator(node_5, { class: "ant-dropdown-menu-divider" });
            var node_6 = sibling(node_5, 2);
            Menu_item(node_6, {
              class: "ant-dropdown-menu-item",
              children: ($$anchor5, $$slotProps3) => {
                next();
                var text$1 = text("3rd menu item");
                append($$anchor5, text$1);
              },
              $$slots: { default: true }
            });
            append($$anchor4, fragment_4);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
}
/**
 * @license lucide-svelte v0.562.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var root$2 = from_svg(`<svg><!><!></svg>`);
function Icon($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push($$props, false);
  let name = prop($$props, "name", 8, void 0);
  let color = prop($$props, "color", 8, "currentColor");
  let size2 = prop($$props, "size", 8, 24);
  let strokeWidth = prop($$props, "strokeWidth", 8, 2);
  let absoluteStrokeWidth = prop($$props, "absoluteStrokeWidth", 8, false);
  let iconNode = prop($$props, "iconNode", 24, () => []);
  const mergeClasses = (...classes) => classes.filter((className, index2, array) => {
    return Boolean(className) && array.indexOf(className) === index2;
  }).join(" ");
  init();
  var svg = root$2();
  attribute_effect(
    svg,
    ($0, $1) => ({
      ...defaultAttributes,
      ...$$restProps,
      width: size2(),
      height: size2(),
      stroke: color(),
      "stroke-width": $0,
      class: $1
    }),
    [
      () => (deep_read_state(absoluteStrokeWidth()), deep_read_state(strokeWidth()), deep_read_state(size2()), untrack(() => absoluteStrokeWidth() ? Number(strokeWidth()) * 24 / Number(size2()) : strokeWidth())),
      () => (deep_read_state(name()), deep_read_state($$sanitized_props), untrack(() => mergeClasses("lucide-icon", "lucide", name() ? `lucide-${name()}` : "", $$sanitized_props.class)))
    ]
  );
  var node = child(svg);
  each(node, 1, iconNode, index$1, ($$anchor2, $$item) => {
    var $$array = user_derived(() => to_array(get$2($$item), 2));
    let tag2 = () => get$2($$array)[0];
    let attrs = () => get$2($$array)[1];
    var fragment = comment();
    var node_1 = first_child(fragment);
    element(node_1, tag2, true, ($$element, $$anchor3) => {
      attribute_effect($$element, () => ({ ...attrs() }));
    });
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node);
  slot(node_2, $$props, "default", {}, null);
  reset(svg);
  append($$anchor, svg);
  pop();
}
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var noopTest = { exec: () => null };
function edit(regex, opt = "") {
  let source2 = typeof regex === "string" ? regex : regex.source;
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(other.caret, "$1");
      source2 = source2.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source2, opt);
    }
  };
  return obj;
}
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (bull) => new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`),
  htmlBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i")
};
var newline = /^(?:[ \t]*(?:\n|$))+/;
var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = {
  ...blockNormal,
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
var blockPedantic = {
  ...blockNormal,
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = /[\p{P}\p{S}]/u;
var _punctuationOrSpace = /[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u;
var punctuation = edit(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _punctuationOrSpace).getRegex();
var _punctuationGfmStrongEm = /(?!~)[\p{P}\p{S}]/u;
var _punctuationOrSpaceGfmStrongEm = /(?!~)[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s\p{P}\p{S}]|~)/u;
var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var emStrongLDelim = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongLDelimGfm = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimUnd = edit(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\(punct)/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
var inlineGfm = {
  ...inlineNormal,
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
var inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape2(html2, encode) {
  if (encode) {
    if (other.escapeTest.test(html2)) {
      return html2.replace(other.escapeReplace, getEscapeReplacement);
    }
  } else {
    if (other.escapeTestNoEncode.test(html2)) {
      return html2.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch {
    return null;
  }
  return href;
}
function splitCells(tableRow, count) {
  var _a2;
  const row = tableRow.replace(other.findPipe, (match, offset2, str) => {
    let escaped = false;
    let curr = offset2;
    while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(other.splitPipe);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !((_a2 = cells.at(-1)) == null ? void 0 : _a2.trim())) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
  }
  return cells;
}
function rtrim(str, c2, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c2 && true) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  if (level > 0) {
    return -2;
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2, rules) {
  const href = link2.href;
  const title = link2.title || null;
  const text2 = cap[1].replace(rules.other.outputLinkReplace, "$1");
  lexer2.state.inLink = true;
  const token = {
    type: cap[0].charAt(0) === "!" ? "image" : "link",
    raw,
    href,
    title,
    text: text2,
    tokens: lexer2.inlineTokens(text2)
  };
  lexer2.state.inLink = false;
  return token;
}
function indentCodeCompensation(raw, text2, rules) {
  const matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
  if (matchIndentToCode === null) {
    return text2;
  }
  const indentToCode = matchIndentToCode[1];
  return text2.split("\n").map((node) => {
    const matchIndentInNode = node.match(rules.other.beginningSpace);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  // set by the lexer
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "rules");
    // set by the lexer
    __publicField(this, "lexer");
    this.options = options2 || _defaults;
  }
  space(src2) {
    const cap = this.rules.block.newline.exec(src2);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src2) {
    const cap = this.rules.block.code.exec(src2);
    if (cap) {
      const text2 = cap[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text2, "\n") : text2
      };
    }
  }
  fences(src2) {
    const cap = this.rules.block.fences.exec(src2);
    if (cap) {
      const raw = cap[0];
      const text2 = indentCodeCompensation(raw, cap[3] || "", this.rules);
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text: text2
      };
    }
  }
  heading(src2) {
    const cap = this.rules.block.heading.exec(src2);
    if (cap) {
      let text2 = cap[2].trim();
      if (this.rules.other.endingHash.test(text2)) {
        const trimmed = rtrim(text2, "#");
        if (this.options.pedantic) {
          text2 = trimmed.trim();
        } else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
          text2 = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text: text2,
        tokens: this.lexer.inline(text2)
      };
    }
  }
  hr(src2) {
    const cap = this.rules.block.hr.exec(src2);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src2) {
    const cap = this.rules.block.blockquote.exec(src2);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text2 = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (this.rules.other.blockquoteStart.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text2 = text2 ? `${text2}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "code") {
          break;
        } else if ((lastToken == null ? void 0 : lastToken.type) === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text2 = text2.substring(0, text2.length - oldToken.text.length) + newToken.text;
          break;
        } else if ((lastToken == null ? void 0 : lastToken.type) === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text2 = text2.substring(0, text2.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens.at(-1).raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text: text2
      };
    }
  }
  list(src2) {
    let cap = this.rules.block.list.exec(src2);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = this.rules.other.listItemRegex(bull);
      let endsWithBlankLine = false;
      while (src2) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src2))) {
          break;
        }
        if (this.rules.block.hr.test(src2)) {
          break;
        }
        raw = cap[0];
        src2 = src2.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (t) => " ".repeat(3 * t.length));
        let nextLine = src2.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(this.rules.other.nonSpaceChar);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && this.rules.other.blankLine.test(nextLine)) {
          raw += nextLine + "\n";
          src2 = src2.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = this.rules.other.nextBulletRegex(indent);
          const hrRegex = this.rules.other.hrRegex(indent);
          const fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
          const headingBeginRegex = this.rules.other.headingBeginRegex(indent);
          const htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
          while (src2) {
            const rawLine = src2.split("\n", 1)[0];
            let nextLineWithoutTabs;
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  ");
              nextLineWithoutTabs = nextLine;
            } else {
              nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (htmlBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(nextLine)) {
              break;
            }
            if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src2 = src2.substring(rawLine.length + 1);
            line = nextLineWithoutTabs.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (this.rules.other.doubleBlankLine.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = this.rules.other.listIsTask.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(this.rules.other.listReplaceTask, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      const lastItem = list2.items.at(-1);
      if (lastItem) {
        lastItem.raw = lastItem.raw.trimEnd();
        lastItem.text = lastItem.text.trimEnd();
      } else {
        return;
      }
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => this.rules.other.anyLine.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src2) {
    const cap = this.rules.block.html.exec(src2);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src2) {
    const cap = this.rules.block.def.exec(src2);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
      const href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src2) {
    var _a2;
    const cap = this.rules.block.table.exec(src2);
    if (!cap) {
      return;
    }
    if (!this.rules.other.tableDelimiter.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(this.rules.other.tableAlignChars, "").split("|");
    const rows = ((_a2 = cap[3]) == null ? void 0 : _a2.trim()) ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (this.rules.other.tableAlignRight.test(align)) {
        item.align.push("right");
      } else if (this.rules.other.tableAlignCenter.test(align)) {
        item.align.push("center");
      } else if (this.rules.other.tableAlignLeft.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src2) {
    const cap = this.rules.block.lheading.exec(src2);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src2) {
    const cap = this.rules.block.paragraph.exec(src2);
    if (cap) {
      const text2 = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text: text2,
        tokens: this.lexer.inline(text2)
      };
    }
  }
  text(src2) {
    const cap = this.rules.block.text.exec(src2);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src2) {
    const cap = this.rules.inline.escape.exec(src2);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: cap[1]
      };
    }
  }
  tag(src2) {
    const cap = this.rules.inline.tag.exec(src2);
    if (cap) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && this.rules.other.endATag.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src2) {
    const cap = this.rules.inline.link.exec(src2);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
        if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex === -2) {
          return;
        }
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = this.rules.other.pedanticHrefTitle.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (this.rules.other.startAngleBracket.test(href)) {
        if (this.options.pedantic && !this.rules.other.endAngleBracket.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer, this.rules);
    }
  }
  reflink(src2, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src2)) || (cap = this.rules.inline.nolink.exec(src2))) {
      const linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text2 = cap[0].charAt(0);
        return {
          type: "text",
          raw: text2,
          text: text2
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer, this.rules);
    }
  }
  emStrong(src2, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src2);
    if (!match) return;
    if (match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric)) return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src2.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src2.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text22 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text22,
            tokens: this.lexer.inlineTokens(text22)
          };
        }
        const text2 = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text: text2,
          tokens: this.lexer.inlineTokens(text2)
        };
      }
    }
  }
  codespan(src2) {
    const cap = this.rules.inline.code.exec(src2);
    if (cap) {
      let text2 = cap[2].replace(this.rules.other.newLineCharGlobal, " ");
      const hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text2);
      const hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text2) && this.rules.other.endingSpaceChar.test(text2);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text2 = text2.substring(1, text2.length - 1);
      }
      return {
        type: "codespan",
        raw: cap[0],
        text: text2
      };
    }
  }
  br(src2) {
    const cap = this.rules.inline.br.exec(src2);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src2) {
    const cap = this.rules.inline.del.exec(src2);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src2) {
    const cap = this.rules.inline.autolink.exec(src2);
    if (cap) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = cap[1];
        href = "mailto:" + text2;
      } else {
        text2 = cap[1];
        href = text2;
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2
          }
        ]
      };
    }
  }
  url(src2) {
    var _a2;
    let cap;
    if (cap = this.rules.inline.url.exec(src2)) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = cap[0];
        href = "mailto:" + text2;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = ((_a2 = this.rules.inline._backpedal.exec(cap[0])) == null ? void 0 : _a2[0]) ?? "";
        } while (prevCapZero !== cap[0]);
        text2 = cap[0];
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2
          }
        ]
      };
    }
  }
  inlineText(src2) {
    const cap = this.rules.inline.text.exec(src2);
    if (cap) {
      const escaped = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        escaped
      };
    }
  }
};
var _Lexer = class __Lexer {
  constructor(options2) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      other,
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src2, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src2);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src2, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src2);
  }
  /**
   * Preprocessing
   */
  lex(src2) {
    src2 = src2.replace(other.carriageReturn, "\n");
    this.blockTokens(src2, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next2 = this.inlineQueue[i];
      this.inlineTokens(next2.src, next2.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src2, tokens = [], lastParagraphClipped = false) {
    var _a2, _b, _c;
    if (this.options.pedantic) {
      src2 = src2.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "");
    }
    while (src2) {
      let token;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.block) == null ? void 0 : _b.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src2)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.raw.length === 1 && lastToken !== void 0) {
          lastToken.raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src2)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "paragraph" || (lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src2)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "paragraph" || (lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src2;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src2.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src2.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        const lastToken = tokens.at(-1);
        if (lastParagraphClipped && (lastToken == null ? void 0 : lastToken.type) === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src2.length;
        src2 = src2.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src2)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src2) {
        const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src2, tokens = []) {
    this.inlineQueue.push({ src: src2, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src2, tokens = []) {
    var _a2, _b, _c;
    let maskedSrc = src2;
    let match = null;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    let keepPrevChar = false;
    let prevChar = "";
    while (src2) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      let token;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.inline) == null ? void 0 : _b.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.link(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src2, this.tokens.links)) {
        src2 = src2.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.type === "text" && (lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src2, maskedSrc, prevChar)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src2)) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src2))) {
        src2 = src2.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src2;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startInline) {
        let startIndex = Infinity;
        const tempSrc = src2.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src2.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src2 = src2.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        const lastToken = tokens.at(-1);
        if ((lastToken == null ? void 0 : lastToken.type) === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src2) {
        const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  // set by the parser
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text: text2, lang, escaped }) {
    var _a2;
    const langString = (_a2 = (lang || "").match(other.notSpaceStart)) == null ? void 0 : _a2[0];
    const code = text2.replace(other.endingNewline, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape2(langString) + '">' + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text: text2 }) {
    return text2;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    var _a2;
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (((_a2 = item.tokens[0]) == null ? void 0 : _a2.type) === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + escape2(item.tokens[0].tokens[0].text);
            item.tokens[0].tokens[0].escaped = true;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " ",
            escaped: true
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text: text2 }) {
    return `<tr>
${text2}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text: text2 }) {
    return `<code>${escape2(text2, true)}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text2 = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text2;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + escape2(title) + '"';
    }
    out += ">" + text2 + "</a>";
    return out;
  }
  image({ href, title, text: text2, tokens }) {
    if (tokens) {
      text2 = this.parser.parseInline(tokens, this.parser.textRenderer);
    }
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return escape2(text2);
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text2}"`;
    if (title) {
      out += ` title="${escape2(title)}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape2(token.text);
  }
};
var _TextRenderer = class {
  // no need for block level renderers
  strong({ text: text2 }) {
    return text2;
  }
  em({ text: text2 }) {
    return text2;
  }
  codespan({ text: text2 }) {
    return text2;
  }
  del({ text: text2 }) {
    return text2;
  }
  html({ text: text2 }) {
    return text2;
  }
  text({ text: text2 }) {
    return text2;
  }
  link({ text: text2 }) {
    return "" + text2;
  }
  image({ text: text2 }) {
    return "" + text2;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    var _a2, _b;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
            textToken = tokens[++i];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body, escaped: true }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer = this.renderer) {
    var _a2, _b;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var _Hooks = (_a = class {
  constructor(options2) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = options2 || _defaults;
  }
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), _a);
var Marked = class {
  constructor(...args) {
    __publicField(this, "defaults", _getDefaults());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", _Parser);
    __publicField(this, "Renderer", _Renderer);
    __publicField(this, "TextRenderer", _TextRenderer);
    __publicField(this, "Lexer", _Lexer);
    __publicField(this, "Tokenizer", _Tokenizer);
    __publicField(this, "Hooks", _Hooks);
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    var _a2, _b;
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if ((_b = (_a2 = this.defaults.extensions) == null ? void 0 : _a2.childTokens) == null ? void 0 : _b[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop2 in pack.renderer) {
          if (!(prop2 in renderer)) {
            throw new Error(`renderer '${prop2}' does not exist`);
          }
          if (["options", "parser"].includes(prop2)) {
            continue;
          }
          const rendererProp = prop2;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop2 in pack.tokenizer) {
          if (!(prop2 in tokenizer)) {
            throw new Error(`tokenizer '${prop2}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop2)) {
            continue;
          }
          const tokenizerProp = prop2;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop2 in pack.hooks) {
          if (!(prop2 in hooks)) {
            throw new Error(`hook '${prop2}' does not exist`);
          }
          if (["options", "block"].includes(prop2)) {
            continue;
          }
          const hooksProp = prop2;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop2)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src2, options2) {
    return _Lexer.lex(src2, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  parseMarkdown(blockType) {
    const parse2 = (src2, options2) => {
      const origOpt = { ...options2 };
      const opt = { ...this.defaults, ...origOpt };
      const throwError = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === true && origOpt.async === false) {
        return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      }
      if (typeof src2 === "undefined" || src2 === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src2 !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src2) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
        opt.hooks.block = blockType;
      }
      const lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
      const parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src2) : src2).then((src22) => lexer2(src22, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src2 = opt.hooks.preprocess(src2);
        }
        let tokens = lexer2(src2, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError(e);
      }
    };
    return parse2;
  }
  onError(silent, async) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
};
var markedInstance = new Marked();
function marked(src2, opt) {
  return markedInstance.parse(src2, opt);
}
marked.options = marked.setOptions = function(options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
_Parser.parse;
_Lexer.lex;
var wheel$1 = { exports: {} };
wheel$1.exports = addWheelListener;
wheel$1.exports.addWheelListener = addWheelListener;
wheel$1.exports.removeWheelListener = removeWheelListener;
function addWheelListener(element2, listener, useCapture) {
  element2.addEventListener("wheel", listener, useCapture);
}
function removeWheelListener(element2, listener, useCapture) {
  element2.removeEventListener("wheel", listener, useCapture);
}
var wheelExports = wheel$1.exports;
var amator = { exports: {} };
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
var src = function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    var intervalStart = 0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing2(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};
var BezierEasing = src;
var animations = {
  ease: BezierEasing(0.25, 0.1, 0.25, 1),
  easeIn: BezierEasing(0.42, 0, 1, 1),
  easeOut: BezierEasing(0, 0, 0.58, 1),
  easeInOut: BezierEasing(0.42, 0, 0.58, 1),
  linear: BezierEasing(0, 0, 1, 1)
};
amator.exports = animate$1;
amator.exports.makeAggregateRaf = makeAggregateRaf;
amator.exports.sharedScheduler = makeAggregateRaf();
function animate$1(source2, target, options) {
  var start = /* @__PURE__ */ Object.create(null);
  var diff = /* @__PURE__ */ Object.create(null);
  options = options || {};
  var easing = typeof options.easing === "function" ? options.easing : animations[options.easing];
  if (!easing) {
    if (options.easing) {
      console.warn("Unknown easing function in amator: " + options.easing);
    }
    easing = animations.ease;
  }
  var step = typeof options.step === "function" ? options.step : noop$2;
  var done = typeof options.done === "function" ? options.done : noop$2;
  var scheduler = getScheduler(options.scheduler);
  var keys = Object.keys(target);
  keys.forEach(function(key) {
    start[key] = source2[key];
    diff[key] = target[key] - source2[key];
  });
  var durationInMs = typeof options.duration === "number" ? options.duration : 400;
  var durationInFrames = Math.max(1, durationInMs * 0.06);
  var previousAnimationId;
  var frame = 0;
  previousAnimationId = scheduler.next(loop2);
  return {
    cancel
  };
  function cancel() {
    scheduler.cancel(previousAnimationId);
    previousAnimationId = 0;
  }
  function loop2() {
    var t = easing(frame / durationInFrames);
    frame += 1;
    setValues(t);
    if (frame <= durationInFrames) {
      previousAnimationId = scheduler.next(loop2);
      step(source2);
    } else {
      previousAnimationId = 0;
      setTimeout(function() {
        done(source2);
      }, 0);
    }
  }
  function setValues(t) {
    keys.forEach(function(key) {
      source2[key] = diff[key] * t + start[key];
    });
  }
}
function noop$2() {
}
function getScheduler(scheduler) {
  if (!scheduler) {
    var canRaf = typeof window !== "undefined" && window.requestAnimationFrame;
    return canRaf ? rafScheduler() : timeoutScheduler();
  }
  if (typeof scheduler.next !== "function") throw new Error("Scheduler is supposed to have next(cb) function");
  if (typeof scheduler.cancel !== "function") throw new Error("Scheduler is supposed to have cancel(handle) function");
  return scheduler;
}
function rafScheduler() {
  return {
    next: window.requestAnimationFrame.bind(window),
    cancel: window.cancelAnimationFrame.bind(window)
  };
}
function timeoutScheduler() {
  return {
    next: function(cb) {
      return setTimeout(cb, 1e3 / 60);
    },
    cancel: function(id) {
      return clearTimeout(id);
    }
  };
}
function makeAggregateRaf() {
  var frontBuffer = /* @__PURE__ */ new Set();
  var backBuffer = /* @__PURE__ */ new Set();
  var frameToken = 0;
  return {
    next: next2,
    cancel: next2,
    clearAll
  };
  function clearAll() {
    frontBuffer.clear();
    backBuffer.clear();
    cancelAnimationFrame(frameToken);
    frameToken = 0;
  }
  function next2(callback) {
    backBuffer.add(callback);
    renderNextFrame();
  }
  function renderNextFrame() {
    if (!frameToken) frameToken = requestAnimationFrame(renderFrame);
  }
  function renderFrame() {
    frameToken = 0;
    var t = backBuffer;
    backBuffer = frontBuffer;
    frontBuffer = t;
    frontBuffer.forEach(function(callback) {
      callback();
    });
    frontBuffer.clear();
  }
}
var amatorExports = amator.exports;
function c(e) {
  s(e);
  const t = a(e);
  return e.on = t.on, e.off = t.off, e.fire = t.fire, e;
}
function a(e) {
  let t = /* @__PURE__ */ Object.create(null);
  return { on: function(n, r, f) {
    if (typeof r != "function") throw new Error("callback is expected to be a function");
    let o = t[n];
    return o || (o = t[n] = []), o.push({ callback: r, ctx: f }), e;
  }, off: function(n, r) {
    if (typeof n > "u") return t = /* @__PURE__ */ Object.create(null), e;
    if (t[n]) if (typeof r != "function") delete t[n];
    else {
      const l = t[n];
      for (let i = 0; i < l.length; ++i) l[i].callback === r && l.splice(i, 1);
    }
    return e;
  }, fire: function(n) {
    const r = t[n];
    if (!r) return e;
    let f;
    arguments.length > 1 && (f = Array.prototype.slice.call(arguments, 1));
    for (let o = 0; o < r.length; ++o) {
      const l = r[o];
      l.callback.apply(l.ctx, f);
    }
    return e;
  } };
}
function s(e) {
  if (!e) throw new Error("Eventify cannot use falsy object as events subject");
  const t = ["on", "fire", "off"];
  for (let n = 0; n < t.length; ++n) if (e.hasOwnProperty(t[n])) throw new Error("Subject cannot be eventified, since it already has property '" + t[n] + "'");
}
var ngraph_events = c;
var kinetic_1 = kinetic$1;
function kinetic$1(getPoint, scroll, settings) {
  if (typeof settings !== "object") {
    settings = {};
  }
  var minVelocity = typeof settings.minVelocity === "number" ? settings.minVelocity : 5;
  var amplitude = typeof settings.amplitude === "number" ? settings.amplitude : 0.25;
  var cancelAnimationFrame2 = typeof settings.cancelAnimationFrame === "function" ? settings.cancelAnimationFrame : getCancelAnimationFrame();
  var requestAnimationFrame2 = typeof settings.requestAnimationFrame === "function" ? settings.requestAnimationFrame : getRequestAnimationFrame();
  var lastPoint;
  var timestamp;
  var timeConstant = 342;
  var ticker;
  var vx, targetX, ax;
  var vy, targetY, ay;
  var raf2;
  return {
    start,
    stop,
    cancel: dispose
  };
  function dispose() {
    cancelAnimationFrame2(ticker);
    cancelAnimationFrame2(raf2);
  }
  function start() {
    lastPoint = getPoint();
    ax = ay = vx = vy = 0;
    timestamp = /* @__PURE__ */ new Date();
    cancelAnimationFrame2(ticker);
    cancelAnimationFrame2(raf2);
    ticker = requestAnimationFrame2(track);
  }
  function track() {
    var now2 = Date.now();
    var elapsed = now2 - timestamp;
    timestamp = now2;
    var currentPoint = getPoint();
    var dx = currentPoint.x - lastPoint.x;
    var dy = currentPoint.y - lastPoint.y;
    lastPoint = currentPoint;
    var dt = 1e3 / (1 + elapsed);
    vx = 0.8 * dx * dt + 0.2 * vx;
    vy = 0.8 * dy * dt + 0.2 * vy;
    ticker = requestAnimationFrame2(track);
  }
  function stop() {
    cancelAnimationFrame2(ticker);
    cancelAnimationFrame2(raf2);
    var currentPoint = getPoint();
    targetX = currentPoint.x;
    targetY = currentPoint.y;
    timestamp = Date.now();
    if (vx < -minVelocity || vx > minVelocity) {
      ax = amplitude * vx;
      targetX += ax;
    }
    if (vy < -minVelocity || vy > minVelocity) {
      ay = amplitude * vy;
      targetY += ay;
    }
    raf2 = requestAnimationFrame2(autoScroll);
  }
  function autoScroll() {
    var elapsed = Date.now() - timestamp;
    var moving = false;
    var dx = 0;
    var dy = 0;
    if (ax) {
      dx = -ax * Math.exp(-elapsed / timeConstant);
      if (dx > 0.5 || dx < -0.5) moving = true;
      else dx = ax = 0;
    }
    if (ay) {
      dy = -ay * Math.exp(-elapsed / timeConstant);
      if (dy > 0.5 || dy < -0.5) moving = true;
      else dy = ay = 0;
    }
    if (moving) {
      scroll(targetX + dx, targetY + dy);
      raf2 = requestAnimationFrame2(autoScroll);
    }
  }
}
function getCancelAnimationFrame() {
  if (typeof cancelAnimationFrame === "function") return cancelAnimationFrame;
  return clearTimeout;
}
function getRequestAnimationFrame() {
  if (typeof requestAnimationFrame === "function") return requestAnimationFrame;
  return function(handler) {
    return setTimeout(handler, 16);
  };
}
var createTextSelectionInterceptor_1 = createTextSelectionInterceptor$1;
function createTextSelectionInterceptor$1(useFake) {
  if (useFake) {
    return {
      capture: noop$1,
      release: noop$1
    };
  }
  var dragObject;
  var prevSelectStart;
  var prevDragStart;
  var wasCaptured = false;
  return {
    capture,
    release
  };
  function capture(domObject) {
    wasCaptured = true;
    prevSelectStart = window.document.onselectstart;
    prevDragStart = window.document.ondragstart;
    window.document.onselectstart = disabled;
    dragObject = domObject;
    dragObject.ondragstart = disabled;
  }
  function release() {
    if (!wasCaptured) return;
    wasCaptured = false;
    window.document.onselectstart = prevSelectStart;
    if (dragObject) dragObject.ondragstart = prevDragStart;
  }
}
function disabled(e) {
  e.stopPropagation();
  return false;
}
function noop$1() {
}
var transform;
var hasRequiredTransform;
function requireTransform() {
  if (hasRequiredTransform) return transform;
  hasRequiredTransform = 1;
  transform = Transform2;
  function Transform2() {
    this.x = 0;
    this.y = 0;
    this.scale = 1;
  }
  return transform;
}
var svgController = { exports: {} };
var hasRequiredSvgController;
function requireSvgController() {
  if (hasRequiredSvgController) return svgController.exports;
  hasRequiredSvgController = 1;
  svgController.exports = makeSvgController2;
  svgController.exports.canAttach = isSVGElement;
  function makeSvgController2(svgElement, options) {
    if (!isSVGElement(svgElement)) {
      throw new Error("svg element is required for svg.panzoom to work");
    }
    var owner = svgElement.ownerSVGElement;
    if (!owner) {
      throw new Error(
        "Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element"
      );
    }
    if (!options.disableKeyboardInteraction) {
      owner.setAttribute("tabindex", 0);
    }
    var api = {
      getBBox,
      getScreenCTM,
      getOwner,
      applyTransform,
      initTransform
    };
    return api;
    function getOwner() {
      return owner;
    }
    function getBBox() {
      var bbox = svgElement.getBBox();
      return {
        left: bbox.x,
        top: bbox.y,
        width: bbox.width,
        height: bbox.height
      };
    }
    function getScreenCTM() {
      var ctm = owner.getCTM();
      if (!ctm) {
        return owner.getScreenCTM();
      }
      return ctm;
    }
    function initTransform(transform2) {
      var screenCTM = svgElement.getCTM();
      if (screenCTM === null) {
        screenCTM = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
      }
      transform2.x = screenCTM.e;
      transform2.y = screenCTM.f;
      transform2.scale = screenCTM.a;
      owner.removeAttributeNS(null, "viewBox");
    }
    function applyTransform(transform2) {
      svgElement.setAttribute("transform", "matrix(" + transform2.scale + " 0 0 " + transform2.scale + " " + transform2.x + " " + transform2.y + ")");
    }
  }
  function isSVGElement(element2) {
    return element2 && element2.ownerSVGElement && element2.getCTM;
  }
  return svgController.exports;
}
var domController = { exports: {} };
var hasRequiredDomController;
function requireDomController() {
  if (hasRequiredDomController) return domController.exports;
  hasRequiredDomController = 1;
  domController.exports = makeDomController2;
  domController.exports.canAttach = isDomElement;
  function makeDomController2(domElement, options) {
    var elementValid = isDomElement(domElement);
    if (!elementValid) {
      throw new Error("panzoom requires DOM element to be attached to the DOM tree");
    }
    var owner = domElement.parentElement;
    domElement.scrollTop = 0;
    if (!options.disableKeyboardInteraction) {
      owner.setAttribute("tabindex", 0);
    }
    var api = {
      getBBox,
      getOwner,
      applyTransform
    };
    return api;
    function getOwner() {
      return owner;
    }
    function getBBox() {
      return {
        left: 0,
        top: 0,
        width: domElement.clientWidth,
        height: domElement.clientHeight
      };
    }
    function applyTransform(transform2) {
      domElement.style.transformOrigin = "0 0 0";
      domElement.style.transform = "matrix(" + transform2.scale + ", 0, 0, " + transform2.scale + ", " + transform2.x + ", " + transform2.y + ")";
    }
  }
  function isDomElement(element2) {
    return element2 && element2.parentElement && element2.style;
  }
  return domController.exports;
}
var wheel = wheelExports;
var animate = amatorExports;
var eventify = ngraph_events;
var kinetic = kinetic_1;
var createTextSelectionInterceptor = createTextSelectionInterceptor_1;
var domTextSelectionInterceptor = createTextSelectionInterceptor();
var fakeTextSelectorInterceptor = createTextSelectionInterceptor(true);
var Transform = requireTransform();
var makeSvgController = requireSvgController();
var makeDomController = requireDomController();
var defaultZoomSpeed = 1;
var defaultDoubleTapZoomSpeed = 1.75;
var doubleTapSpeedInMS = 300;
var clickEventTimeInMS = 200;
var panzoom = createPanZoom;
function createPanZoom(domElement, options) {
  options = options || {};
  var panController = options.controller;
  if (!panController) {
    if (makeSvgController.canAttach(domElement)) {
      panController = makeSvgController(domElement, options);
    } else if (makeDomController.canAttach(domElement)) {
      panController = makeDomController(domElement, options);
    }
  }
  if (!panController) {
    throw new Error(
      "Cannot create panzoom for the current type of dom element"
    );
  }
  var owner = panController.getOwner();
  var storedCTMResult = { x: 0, y: 0 };
  var isDirty = false;
  var transform2 = new Transform();
  if (panController.initTransform) {
    panController.initTransform(transform2);
  }
  var filterKey = typeof options.filterKey === "function" ? options.filterKey : noop;
  var pinchSpeed = typeof options.pinchSpeed === "number" ? options.pinchSpeed : 1;
  var bounds = options.bounds;
  var maxZoom = typeof options.maxZoom === "number" ? options.maxZoom : Number.POSITIVE_INFINITY;
  var minZoom = typeof options.minZoom === "number" ? options.minZoom : 0;
  var boundsPadding = typeof options.boundsPadding === "number" ? options.boundsPadding : 0.05;
  var zoomDoubleClickSpeed = typeof options.zoomDoubleClickSpeed === "number" ? options.zoomDoubleClickSpeed : defaultDoubleTapZoomSpeed;
  var beforeWheel = options.beforeWheel || noop;
  var beforeMouseDown = options.beforeMouseDown || noop;
  var speed = typeof options.zoomSpeed === "number" ? options.zoomSpeed : defaultZoomSpeed;
  var transformOrigin2 = parseTransformOrigin(options.transformOrigin);
  var textSelection = options.enableTextSelection ? fakeTextSelectorInterceptor : domTextSelectionInterceptor;
  validateBounds(bounds);
  if (options.autocenter) {
    autocenter();
  }
  var frameAnimation;
  var lastTouchEndTime = 0;
  var lastTouchStartTime = 0;
  var pendingClickEventTimeout = 0;
  var lastMouseDownedEvent = null;
  var lastMouseDownTime = /* @__PURE__ */ new Date();
  var lastSingleFingerOffset;
  var touchInProgress = false;
  var panstartFired = false;
  var mouseX;
  var mouseY;
  var clickX;
  var clickY;
  var pinchZoomLength;
  var smoothScroll;
  if ("smoothScroll" in options && !options.smoothScroll) {
    smoothScroll = rigidScroll();
  } else {
    smoothScroll = kinetic(getPoint, scroll, options.smoothScroll);
  }
  var moveByAnimation;
  var zoomToAnimation;
  var multiTouch;
  var paused = false;
  listenForEvents();
  var api = {
    dispose,
    moveBy: internalMoveBy,
    moveTo,
    smoothMoveTo,
    centerOn,
    zoomTo: publicZoomTo,
    zoomAbs,
    smoothZoom,
    smoothZoomAbs,
    showRectangle,
    pause,
    resume,
    isPaused,
    getTransform: getTransformModel,
    getMinZoom,
    setMinZoom,
    getMaxZoom,
    setMaxZoom,
    getTransformOrigin,
    setTransformOrigin,
    getZoomSpeed,
    setZoomSpeed
  };
  eventify(api);
  var initialX = typeof options.initialX === "number" ? options.initialX : transform2.x;
  var initialY = typeof options.initialY === "number" ? options.initialY : transform2.y;
  var initialZoom = typeof options.initialZoom === "number" ? options.initialZoom : transform2.scale;
  if (initialX != transform2.x || initialY != transform2.y || initialZoom != transform2.scale) {
    zoomAbs(initialX, initialY, initialZoom);
  }
  return api;
  function pause() {
    releaseEvents();
    paused = true;
  }
  function resume() {
    if (paused) {
      listenForEvents();
      paused = false;
    }
  }
  function isPaused() {
    return paused;
  }
  function showRectangle(rect) {
    var clientRect = owner.getBoundingClientRect();
    var size2 = transformToScreen(clientRect.width, clientRect.height);
    var rectWidth = rect.right - rect.left;
    var rectHeight = rect.bottom - rect.top;
    if (!Number.isFinite(rectWidth) || !Number.isFinite(rectHeight)) {
      throw new Error("Invalid rectangle");
    }
    var dw = size2.x / rectWidth;
    var dh = size2.y / rectHeight;
    var scale = Math.min(dw, dh);
    transform2.x = -(rect.left + rectWidth / 2) * scale + size2.x / 2;
    transform2.y = -(rect.top + rectHeight / 2) * scale + size2.y / 2;
    transform2.scale = scale;
  }
  function transformToScreen(x, y) {
    if (panController.getScreenCTM) {
      var parentCTM = panController.getScreenCTM();
      var parentScaleX = parentCTM.a;
      var parentScaleY = parentCTM.d;
      var parentOffsetX = parentCTM.e;
      var parentOffsetY = parentCTM.f;
      storedCTMResult.x = x * parentScaleX - parentOffsetX;
      storedCTMResult.y = y * parentScaleY - parentOffsetY;
    } else {
      storedCTMResult.x = x;
      storedCTMResult.y = y;
    }
    return storedCTMResult;
  }
  function autocenter() {
    var w;
    var h;
    var left = 0;
    var top = 0;
    var sceneBoundingBox = getBoundingBox();
    if (sceneBoundingBox) {
      left = sceneBoundingBox.left;
      top = sceneBoundingBox.top;
      w = sceneBoundingBox.right - sceneBoundingBox.left;
      h = sceneBoundingBox.bottom - sceneBoundingBox.top;
    } else {
      var ownerRect = owner.getBoundingClientRect();
      w = ownerRect.width;
      h = ownerRect.height;
    }
    var bbox = panController.getBBox();
    if (bbox.width === 0 || bbox.height === 0) {
      return;
    }
    var dh = h / bbox.height;
    var dw = w / bbox.width;
    var scale = Math.min(dw, dh);
    transform2.x = -(bbox.left + bbox.width / 2) * scale + w / 2 + left;
    transform2.y = -(bbox.top + bbox.height / 2) * scale + h / 2 + top;
    transform2.scale = scale;
  }
  function getTransformModel() {
    return transform2;
  }
  function getMinZoom() {
    return minZoom;
  }
  function setMinZoom(newMinZoom) {
    minZoom = newMinZoom;
  }
  function getMaxZoom() {
    return maxZoom;
  }
  function setMaxZoom(newMaxZoom) {
    maxZoom = newMaxZoom;
  }
  function getTransformOrigin() {
    return transformOrigin2;
  }
  function setTransformOrigin(newTransformOrigin) {
    transformOrigin2 = parseTransformOrigin(newTransformOrigin);
  }
  function getZoomSpeed() {
    return speed;
  }
  function setZoomSpeed(newSpeed) {
    if (!Number.isFinite(newSpeed)) {
      throw new Error("Zoom speed should be a number");
    }
    speed = newSpeed;
  }
  function getPoint() {
    return {
      x: transform2.x,
      y: transform2.y
    };
  }
  function moveTo(x, y) {
    transform2.x = x;
    transform2.y = y;
    keepTransformInsideBounds();
    triggerEvent("pan");
    makeDirty();
  }
  function moveBy(dx, dy) {
    moveTo(transform2.x + dx, transform2.y + dy);
  }
  function keepTransformInsideBounds() {
    var boundingBox = getBoundingBox();
    if (!boundingBox) return;
    var adjusted = false;
    var clientRect = getClientRect();
    var diff = boundingBox.left - clientRect.right;
    if (diff > 0) {
      transform2.x += diff;
      adjusted = true;
    }
    diff = boundingBox.right - clientRect.left;
    if (diff < 0) {
      transform2.x += diff;
      adjusted = true;
    }
    diff = boundingBox.top - clientRect.bottom;
    if (diff > 0) {
      transform2.y += diff;
      adjusted = true;
    }
    diff = boundingBox.bottom - clientRect.top;
    if (diff < 0) {
      transform2.y += diff;
      adjusted = true;
    }
    return adjusted;
  }
  function getBoundingBox() {
    if (!bounds) return;
    if (typeof bounds === "boolean") {
      var ownerRect = owner.getBoundingClientRect();
      var sceneWidth = ownerRect.width;
      var sceneHeight = ownerRect.height;
      return {
        left: sceneWidth * boundsPadding,
        top: sceneHeight * boundsPadding,
        right: sceneWidth * (1 - boundsPadding),
        bottom: sceneHeight * (1 - boundsPadding)
      };
    }
    return bounds;
  }
  function getClientRect() {
    var bbox = panController.getBBox();
    var leftTop = client(bbox.left, bbox.top);
    return {
      left: leftTop.x,
      top: leftTop.y,
      right: bbox.width * transform2.scale + leftTop.x,
      bottom: bbox.height * transform2.scale + leftTop.y
    };
  }
  function client(x, y) {
    return {
      x: x * transform2.scale + transform2.x,
      y: y * transform2.scale + transform2.y
    };
  }
  function makeDirty() {
    isDirty = true;
    frameAnimation = window.requestAnimationFrame(frame);
  }
  function zoomByRatio(clientX, clientY, ratio) {
    if (isNaN$1(clientX) || isNaN$1(clientY) || isNaN$1(ratio)) {
      throw new Error("zoom requires valid numbers");
    }
    var newScale = transform2.scale * ratio;
    if (newScale < minZoom) {
      if (transform2.scale === minZoom) return;
      ratio = minZoom / transform2.scale;
    }
    if (newScale > maxZoom) {
      if (transform2.scale === maxZoom) return;
      ratio = maxZoom / transform2.scale;
    }
    var size2 = transformToScreen(clientX, clientY);
    transform2.x = size2.x - ratio * (size2.x - transform2.x);
    transform2.y = size2.y - ratio * (size2.y - transform2.y);
    if (bounds && boundsPadding === 1 && minZoom === 1) {
      transform2.scale *= ratio;
      keepTransformInsideBounds();
    } else {
      var transformAdjusted = keepTransformInsideBounds();
      if (!transformAdjusted) transform2.scale *= ratio;
    }
    triggerEvent("zoom");
    makeDirty();
  }
  function zoomAbs(clientX, clientY, zoomLevel) {
    var ratio = zoomLevel / transform2.scale;
    zoomByRatio(clientX, clientY, ratio);
  }
  function centerOn(ui) {
    var parent = ui.ownerSVGElement;
    if (!parent)
      throw new Error("ui element is required to be within the scene");
    var clientRect = ui.getBoundingClientRect();
    var cx = clientRect.left + clientRect.width / 2;
    var cy = clientRect.top + clientRect.height / 2;
    var container = parent.getBoundingClientRect();
    var dx = container.width / 2 - cx;
    var dy = container.height / 2 - cy;
    internalMoveBy(dx, dy, true);
  }
  function smoothMoveTo(x, y) {
    internalMoveBy(x - transform2.x, y - transform2.y, true);
  }
  function internalMoveBy(dx, dy, smooth) {
    if (!smooth) {
      return moveBy(dx, dy);
    }
    if (moveByAnimation) moveByAnimation.cancel();
    var from = { x: 0, y: 0 };
    var to = { x: dx, y: dy };
    var lastX = 0;
    var lastY = 0;
    moveByAnimation = animate(from, to, {
      step: function(v) {
        moveBy(v.x - lastX, v.y - lastY);
        lastX = v.x;
        lastY = v.y;
      }
    });
  }
  function scroll(x, y) {
    cancelZoomAnimation();
    moveTo(x, y);
  }
  function dispose() {
    releaseEvents();
  }
  function listenForEvents() {
    owner.addEventListener("mousedown", onMouseDown, { passive: false });
    owner.addEventListener("dblclick", onDoubleClick, { passive: false });
    owner.addEventListener("touchstart", onTouch, { passive: false });
    owner.addEventListener("keydown", onKeyDown, { passive: false });
    wheel.addWheelListener(owner, onMouseWheel, { passive: false });
    makeDirty();
  }
  function releaseEvents() {
    wheel.removeWheelListener(owner, onMouseWheel);
    owner.removeEventListener("mousedown", onMouseDown);
    owner.removeEventListener("keydown", onKeyDown);
    owner.removeEventListener("dblclick", onDoubleClick);
    owner.removeEventListener("touchstart", onTouch);
    if (frameAnimation) {
      window.cancelAnimationFrame(frameAnimation);
      frameAnimation = 0;
    }
    smoothScroll.cancel();
    releaseDocumentMouse();
    releaseTouches();
    textSelection.release();
    triggerPanEnd();
  }
  function frame() {
    if (isDirty) applyTransform();
  }
  function applyTransform() {
    isDirty = false;
    panController.applyTransform(transform2);
    triggerEvent("transform");
    frameAnimation = 0;
  }
  function onKeyDown(e) {
    var x = 0, y = 0, z = 0;
    if (e.keyCode === 38) {
      y = 1;
    } else if (e.keyCode === 40) {
      y = -1;
    } else if (e.keyCode === 37) {
      x = 1;
    } else if (e.keyCode === 39) {
      x = -1;
    } else if (e.keyCode === 189 || e.keyCode === 109) {
      z = 1;
    } else if (e.keyCode === 187 || e.keyCode === 107) {
      z = -1;
    }
    if (filterKey(e, x, y, z)) {
      return;
    }
    if (x || y) {
      e.preventDefault();
      e.stopPropagation();
      var clientRect = owner.getBoundingClientRect();
      var offset2 = Math.min(clientRect.width, clientRect.height);
      var moveSpeedRatio = 0.05;
      var dx = offset2 * moveSpeedRatio * x;
      var dy = offset2 * moveSpeedRatio * y;
      internalMoveBy(dx, dy);
    }
    if (z) {
      var scaleMultiplier = getScaleMultiplier(z * 100);
      var offset2 = transformOrigin2 ? getTransformOriginOffset() : midPoint();
      publicZoomTo(offset2.x, offset2.y, scaleMultiplier);
    }
  }
  function midPoint() {
    var ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width / 2,
      y: ownerRect.height / 2
    };
  }
  function onTouch(e) {
    beforeTouch(e);
    clearPendingClickEventTimeout();
    if (e.touches.length === 1) {
      return handleSingleFingerTouch(e, e.touches[0]);
    } else if (e.touches.length === 2) {
      pinchZoomLength = getPinchZoomLength(e.touches[0], e.touches[1]);
      multiTouch = true;
      startTouchListenerIfNeeded();
    }
  }
  function beforeTouch(e) {
    if (options.onTouch && !options.onTouch(e)) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
  }
  function beforeDoubleClick(e) {
    clearPendingClickEventTimeout();
    if (options.onDoubleClick && !options.onDoubleClick(e)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
  }
  function handleSingleFingerTouch(e) {
    lastTouchStartTime = /* @__PURE__ */ new Date();
    var touch = e.touches[0];
    var offset2 = getOffsetXY(touch);
    lastSingleFingerOffset = offset2;
    var point = transformToScreen(offset2.x, offset2.y);
    mouseX = point.x;
    mouseY = point.y;
    clickX = mouseX;
    clickY = mouseY;
    smoothScroll.cancel();
    startTouchListenerIfNeeded();
  }
  function startTouchListenerIfNeeded() {
    if (touchInProgress) {
      return;
    }
    touchInProgress = true;
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchcancel", handleTouchEnd);
  }
  function handleTouchMove(e) {
    if (e.touches.length === 1) {
      e.stopPropagation();
      var touch = e.touches[0];
      var offset2 = getOffsetXY(touch);
      var point = transformToScreen(offset2.x, offset2.y);
      var dx = point.x - mouseX;
      var dy = point.y - mouseY;
      if (dx !== 0 && dy !== 0) {
        triggerPanStart();
      }
      mouseX = point.x;
      mouseY = point.y;
      internalMoveBy(dx, dy);
    } else if (e.touches.length === 2) {
      multiTouch = true;
      var t1 = e.touches[0];
      var t2 = e.touches[1];
      var currentPinchLength = getPinchZoomLength(t1, t2);
      var scaleMultiplier = 1 + (currentPinchLength / pinchZoomLength - 1) * pinchSpeed;
      var firstTouchPoint = getOffsetXY(t1);
      var secondTouchPoint = getOffsetXY(t2);
      mouseX = (firstTouchPoint.x + secondTouchPoint.x) / 2;
      mouseY = (firstTouchPoint.y + secondTouchPoint.y) / 2;
      if (transformOrigin2) {
        var offset2 = getTransformOriginOffset();
        mouseX = offset2.x;
        mouseY = offset2.y;
      }
      publicZoomTo(mouseX, mouseY, scaleMultiplier);
      pinchZoomLength = currentPinchLength;
      e.stopPropagation();
      e.preventDefault();
    }
  }
  function clearPendingClickEventTimeout() {
    if (pendingClickEventTimeout) {
      clearTimeout(pendingClickEventTimeout);
      pendingClickEventTimeout = 0;
    }
  }
  function handlePotentialClickEvent(e) {
    if (!options.onClick) return;
    clearPendingClickEventTimeout();
    var dx = mouseX - clickX;
    var dy = mouseY - clickY;
    var l = Math.sqrt(dx * dx + dy * dy);
    if (l > 5) return;
    pendingClickEventTimeout = setTimeout(function() {
      pendingClickEventTimeout = 0;
      options.onClick(e);
    }, doubleTapSpeedInMS);
  }
  function handleTouchEnd(e) {
    clearPendingClickEventTimeout();
    if (e.touches.length > 0) {
      var offset2 = getOffsetXY(e.touches[0]);
      var point = transformToScreen(offset2.x, offset2.y);
      mouseX = point.x;
      mouseY = point.y;
    } else {
      var now2 = /* @__PURE__ */ new Date();
      if (now2 - lastTouchEndTime < doubleTapSpeedInMS) {
        if (transformOrigin2) {
          var offset2 = getTransformOriginOffset();
          smoothZoom(offset2.x, offset2.y, zoomDoubleClickSpeed);
        } else {
          smoothZoom(lastSingleFingerOffset.x, lastSingleFingerOffset.y, zoomDoubleClickSpeed);
        }
      } else if (now2 - lastTouchStartTime < clickEventTimeInMS) {
        handlePotentialClickEvent(e);
      }
      lastTouchEndTime = now2;
      triggerPanEnd();
      releaseTouches();
    }
  }
  function getPinchZoomLength(finger1, finger2) {
    var dx = finger1.clientX - finger2.clientX;
    var dy = finger1.clientY - finger2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function onDoubleClick(e) {
    beforeDoubleClick(e);
    var offset2 = getOffsetXY(e);
    if (transformOrigin2) {
      offset2 = getTransformOriginOffset();
    }
    smoothZoom(offset2.x, offset2.y, zoomDoubleClickSpeed);
  }
  function onMouseDown(e) {
    clearPendingClickEventTimeout();
    if (beforeMouseDown(e)) return;
    lastMouseDownedEvent = e;
    lastMouseDownTime = /* @__PURE__ */ new Date();
    if (touchInProgress) {
      e.stopPropagation();
      return false;
    }
    var isLeftButton = e.button === 1 && window.event !== null || e.button === 0;
    if (!isLeftButton) return;
    smoothScroll.cancel();
    var offset2 = getOffsetXY(e);
    var point = transformToScreen(offset2.x, offset2.y);
    clickX = mouseX = point.x;
    clickY = mouseY = point.y;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    textSelection.capture(e.target || e.srcElement);
    return false;
  }
  function onMouseMove(e) {
    if (touchInProgress) return;
    triggerPanStart();
    var offset2 = getOffsetXY(e);
    var point = transformToScreen(offset2.x, offset2.y);
    var dx = point.x - mouseX;
    var dy = point.y - mouseY;
    mouseX = point.x;
    mouseY = point.y;
    internalMoveBy(dx, dy);
  }
  function onMouseUp() {
    var now2 = /* @__PURE__ */ new Date();
    if (now2 - lastMouseDownTime < clickEventTimeInMS) handlePotentialClickEvent(lastMouseDownedEvent);
    textSelection.release();
    triggerPanEnd();
    releaseDocumentMouse();
  }
  function releaseDocumentMouse() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    panstartFired = false;
  }
  function releaseTouches() {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
    document.removeEventListener("touchcancel", handleTouchEnd);
    panstartFired = false;
    multiTouch = false;
    touchInProgress = false;
  }
  function onMouseWheel(e) {
    if (beforeWheel(e)) return;
    smoothScroll.cancel();
    var delta = e.deltaY;
    if (e.deltaMode > 0) delta *= 100;
    var scaleMultiplier = getScaleMultiplier(delta);
    if (scaleMultiplier !== 1) {
      var offset2 = transformOrigin2 ? getTransformOriginOffset() : getOffsetXY(e);
      publicZoomTo(offset2.x, offset2.y, scaleMultiplier);
      e.preventDefault();
    }
  }
  function getOffsetXY(e) {
    var offsetX, offsetY;
    var ownerRect = owner.getBoundingClientRect();
    offsetX = e.clientX - ownerRect.left;
    offsetY = e.clientY - ownerRect.top;
    return { x: offsetX, y: offsetY };
  }
  function smoothZoom(clientX, clientY, scaleMultiplier) {
    var fromValue = transform2.scale;
    var from = { scale: fromValue };
    var to = { scale: scaleMultiplier * fromValue };
    smoothScroll.cancel();
    cancelZoomAnimation();
    zoomToAnimation = animate(from, to, {
      step: function(v) {
        zoomAbs(clientX, clientY, v.scale);
      },
      done: triggerZoomEnd
    });
  }
  function smoothZoomAbs(clientX, clientY, toScaleValue) {
    var fromValue = transform2.scale;
    var from = { scale: fromValue };
    var to = { scale: toScaleValue };
    smoothScroll.cancel();
    cancelZoomAnimation();
    zoomToAnimation = animate(from, to, {
      step: function(v) {
        zoomAbs(clientX, clientY, v.scale);
      }
    });
  }
  function getTransformOriginOffset() {
    var ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width * transformOrigin2.x,
      y: ownerRect.height * transformOrigin2.y
    };
  }
  function publicZoomTo(clientX, clientY, scaleMultiplier) {
    smoothScroll.cancel();
    cancelZoomAnimation();
    return zoomByRatio(clientX, clientY, scaleMultiplier);
  }
  function cancelZoomAnimation() {
    if (zoomToAnimation) {
      zoomToAnimation.cancel();
      zoomToAnimation = null;
    }
  }
  function getScaleMultiplier(delta) {
    var sign = Math.sign(delta);
    var deltaAdjustedSpeed = Math.min(0.25, Math.abs(speed * delta / 128));
    return 1 - sign * deltaAdjustedSpeed;
  }
  function triggerPanStart() {
    if (!panstartFired) {
      triggerEvent("panstart");
      panstartFired = true;
      smoothScroll.start();
    }
  }
  function triggerPanEnd() {
    if (panstartFired) {
      if (!multiTouch) smoothScroll.stop();
      triggerEvent("panend");
    }
  }
  function triggerZoomEnd() {
    triggerEvent("zoomend");
  }
  function triggerEvent(name) {
    api.fire(name, api);
  }
}
function parseTransformOrigin(options) {
  if (!options) return;
  if (typeof options === "object") {
    if (!isNumber(options.x) || !isNumber(options.y))
      failTransformOrigin(options);
    return options;
  }
  failTransformOrigin();
}
function failTransformOrigin(options) {
  console.error(options);
  throw new Error(
    [
      "Cannot parse transform origin.",
      "Some good examples:",
      '  "center center" can be achieved with {x: 0.5, y: 0.5}',
      '  "top center" can be achieved with {x: 0.5, y: 0}',
      '  "bottom right" can be achieved with {x: 1, y: 1}'
    ].join("\n")
  );
}
function noop() {
}
function validateBounds(bounds) {
  var boundsType = typeof bounds;
  if (boundsType === "undefined" || boundsType === "boolean") return;
  var validBounds = isNumber(bounds.left) && isNumber(bounds.top) && isNumber(bounds.bottom) && isNumber(bounds.right);
  if (!validBounds)
    throw new Error(
      "Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}"
    );
}
function isNumber(x) {
  return Number.isFinite(x);
}
function isNaN$1(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }
  return value !== value;
}
function rigidScroll() {
  return {
    start: noop,
    stop: noop,
    cancel: noop
  };
}
function autoRun() {
  if (typeof document === "undefined") return;
  var scripts = document.getElementsByTagName("script");
  if (!scripts) return;
  var panzoomScript;
  for (var i = 0; i < scripts.length; ++i) {
    var x = scripts[i];
    if (x.src && x.src.match(/\bpanzoom(\.min)?\.js/)) {
      panzoomScript = x;
      break;
    }
  }
  if (!panzoomScript) return;
  var query = panzoomScript.getAttribute("query");
  if (!query) return;
  var globalName = panzoomScript.getAttribute("name") || "pz";
  var started = Date.now();
  tryAttach();
  function tryAttach() {
    var el = document.querySelector(query);
    if (!el) {
      var now2 = Date.now();
      var elapsed = now2 - started;
      if (elapsed < 2e3) {
        setTimeout(tryAttach, 100);
        return;
      }
      console.error("Cannot find the panzoom element", globalName);
      return;
    }
    var options = collectOptions(panzoomScript);
    console.log(options);
    window[globalName] = createPanZoom(el, options);
  }
  function collectOptions(script) {
    var attrs = script.attributes;
    var options = {};
    for (var j = 0; j < attrs.length; ++j) {
      var attr = attrs[j];
      var nameValue = getPanzoomAttributeNameValue(attr);
      if (nameValue) {
        options[nameValue.name] = nameValue.value;
      }
    }
    return options;
  }
  function getPanzoomAttributeNameValue(attr) {
    if (!attr.name) return;
    var isPanZoomAttribute = attr.name[0] === "p" && attr.name[1] === "z" && attr.name[2] === "-";
    if (!isPanZoomAttribute) return;
    var name = attr.name.substr(3);
    var value = JSON.parse(attr.value);
    return { name, value };
  }
}
autoRun();
const panzoom$1 = /* @__PURE__ */ getDefaultExportFromCjs(panzoom);
/*!
* focus-trap 7.6.6
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function _arrayLikeToArray(r, a2) {
  (null == a2 || a2 > r.length) && (a2 = r.length);
  for (var e = 0, n = Array(a2); e < a2; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a2) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a2);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a2) : void 0;
  }
}
var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap._setPausedState(true);
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0 && !trapStack[trapStack.length - 1]._isManuallyPaused()) {
      trapStack[trapStack.length - 1]._setPausedState(false);
    }
  }
};
var isSelectableInput = function isSelectableInput2(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === "Escape" || (e === null || e === void 0 ? void 0 : e.key) === "Esc" || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent2(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === "Tab" || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};
var isKeyForward = function isKeyForward2(e) {
  return isTabEvent(e) && !e.shiftKey;
};
var isKeyBackward = function isKeyBackward2(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay2(fn) {
  return setTimeout(fn, 0);
};
var valueOrHandler = function valueOrHandler2(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    params[_key2 - 1] = arguments[_key2];
  }
  return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget2(event2) {
  return event2.target.shadowRoot && typeof event2.composedPath === "function" ? event2.composedPath()[0] : event2.target;
};
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap2(elements, userOptions) {
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward,
    isKeyBackward
  }, userOptions);
  var state2 = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    manuallyPaused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  };
  var trap;
  var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };
  var findContainerIndex = function findContainerIndex2(element2, event2) {
    var composedPath = typeof (event2 === null || event2 === void 0 ? void 0 : event2.composedPath) === "function" ? event2.composedPath() : void 0;
    return state2.containerGroups.findIndex(function(_ref2) {
      var container = _ref2.container, tabbableNodes = _ref2.tabbableNodes;
      return container.contains(element2) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
        return node === element2;
      });
    });
  };
  var getNodeForOption = function getNodeForOption2(optionName) {
    var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$hasFallback = _ref2.hasFallback, hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback, _ref2$params = _ref2.params, params = _ref2$params === void 0 ? [] : _ref2$params;
    var optionValue = config[optionName];
    if (typeof optionValue === "function") {
      optionValue = optionValue.apply(void 0, _toConsumableArray(params));
    }
    if (optionValue === true) {
      optionValue = void 0;
    }
    if (!optionValue) {
      if (optionValue === void 0 || optionValue === false) {
        return optionValue;
      }
      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue;
    if (typeof optionValue === "string") {
      try {
        node = doc.querySelector(optionValue);
      } catch (err) {
        throw new Error("`".concat(optionName, '` appears to be an invalid selector; error="').concat(err.message, '"'));
      }
      if (!node) {
        if (!hasFallback) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode2() {
    var node = getNodeForOption("initialFocus", {
      hasFallback: true
    });
    if (node === false) {
      return false;
    }
    if (node === void 0 || node && !isFocusable(node, config.tabbableOptions)) {
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state2.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
    } else if (node === null) {
      node = getNodeForOption("fallbackFocus");
    }
    if (!node) {
      throw new Error("Your focus-trap needs to have at least one focusable element");
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes2() {
    state2.containerGroups = state2.containers.map(function(container) {
      var tabbableNodes = tabbable(container, config.tabbableOptions);
      var focusableNodes = focusable(container, config.tabbableOptions);
      var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
      var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
      var firstDomTabbableNode = focusableNodes.find(function(node) {
        return isTabbable(node);
      });
      var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
        return isTabbable(node);
      });
      var posTabIndexesFound = !!tabbableNodes.find(function(node) {
        return getTabIndex(node) > 0;
      });
      return {
        container,
        tabbableNodes,
        focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var nodeIdx = tabbableNodes.indexOf(node);
          if (nodeIdx < 0) {
            if (forward) {
              return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
                return isTabbable(el);
              });
            }
            return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
              return isTabbable(el);
            });
          }
          return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
        }
      };
    });
    state2.tabbableGroups = state2.containerGroups.filter(function(group) {
      return group.tabbableNodes.length > 0;
    });
    if (state2.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    }
    if (state2.containerGroups.find(function(g) {
      return g.posTabIndexesFound;
    }) && state2.containerGroups.length > 1) {
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }
  };
  var _getActiveElement = function getActiveElement2(el) {
    var activeElement = el.activeElement;
    if (!activeElement) {
      return;
    }
    if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
      return _getActiveElement(activeElement.shadowRoot);
    }
    return activeElement;
  };
  var _tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === _getActiveElement(document)) {
      return;
    }
    if (!node || !node.focus) {
      _tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state2.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus", {
      params: [previousActiveElement]
    });
    return node ? node : node === false ? false : previousActiveElement;
  };
  var findNextNavNode = function findNextNavNode2(_ref3) {
    var target = _ref3.target, event2 = _ref3.event, _ref3$isBackward = _ref3.isBackward, isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
    target = target || getActualTarget(event2);
    updateTabbableNodes();
    var destinationNode = null;
    if (state2.tabbableGroups.length > 0) {
      var containerIndex = findContainerIndex(target, event2);
      var containerGroup = containerIndex >= 0 ? state2.containerGroups[containerIndex] : void 0;
      if (containerIndex < 0) {
        if (isBackward) {
          destinationNode = state2.tabbableGroups[state2.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          destinationNode = state2.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        var startOfGroupIndex = state2.tabbableGroups.findIndex(function(_ref4) {
          var firstTabbableNode = _ref4.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state2.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state2.tabbableGroups[destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else if (!isTabEvent(event2)) {
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        var lastOfGroupIndex = state2.tabbableGroups.findIndex(function(_ref5) {
          var lastTabbableNode = _ref5.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state2.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state2.tabbableGroups[_destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else if (!isTabEvent(event2)) {
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      destinationNode = getNodeForOption("fallbackFocus");
    }
    return destinationNode;
  };
  var checkPointerDown = function checkPointerDown2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
  };
  var checkFocusIn = function checkFocusIn2(event2) {
    var target = getActualTarget(event2);
    var targetContained = findContainerIndex(target, event2) >= 0;
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state2.mostRecentlyFocusedNode = target;
      }
    } else {
      event2.stopImmediatePropagation();
      var nextNode;
      var navAcrossContainers = true;
      if (state2.mostRecentlyFocusedNode) {
        if (getTabIndex(state2.mostRecentlyFocusedNode) > 0) {
          var mruContainerIdx = findContainerIndex(state2.mostRecentlyFocusedNode);
          var tabbableNodes = state2.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            var mruTabIdx = tabbableNodes.findIndex(function(node) {
              return node === state2.mostRecentlyFocusedNode;
            });
            if (mruTabIdx >= 0) {
              if (config.isKeyForward(state2.recentNavEvent)) {
                if (mruTabIdx + 1 < tabbableNodes.length) {
                  nextNode = tabbableNodes[mruTabIdx + 1];
                  navAcrossContainers = false;
                }
              } else {
                if (mruTabIdx - 1 >= 0) {
                  nextNode = tabbableNodes[mruTabIdx - 1];
                  navAcrossContainers = false;
                }
              }
            }
          }
        } else {
          if (!state2.containerGroups.some(function(g) {
            return g.tabbableNodes.some(function(n) {
              return getTabIndex(n) > 0;
            });
          })) {
            navAcrossContainers = false;
          }
        }
      } else {
        navAcrossContainers = false;
      }
      if (navAcrossContainers) {
        nextNode = findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: state2.mostRecentlyFocusedNode,
          isBackward: config.isKeyBackward(state2.recentNavEvent)
        });
      }
      if (nextNode) {
        _tryFocus(nextNode);
      } else {
        _tryFocus(state2.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    }
    state2.recentNavEvent = void 0;
  };
  var checkKeyNav = function checkKeyNav2(event2) {
    var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    state2.recentNavEvent = event2;
    var destinationNode = findNextNavNode({
      event: event2,
      isBackward
    });
    if (destinationNode) {
      if (isTabEvent(event2)) {
        event2.preventDefault();
      }
      _tryFocus(destinationNode);
    }
  };
  var checkTabKey = function checkTabKey2(event2) {
    if (config.isKeyForward(event2) || config.isKeyBackward(event2)) {
      checkKeyNav(event2, config.isKeyBackward(event2));
    }
  };
  var checkEscapeKey = function checkEscapeKey2(event2) {
    if (isEscapeEvent(event2) && valueOrHandler(config.escapeDeactivates, event2) !== false) {
      event2.preventDefault();
      trap.deactivate();
    }
  };
  var checkClick = function checkClick2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };
  var addListeners = function addListeners2() {
    if (!state2.active) {
      return;
    }
    activeFocusTraps.activateTrap(trapStack, trap);
    state2.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
      _tryFocus(getInitialFocusNode());
    }) : _tryFocus(getInitialFocusNode());
    doc.addEventListener("focusin", checkFocusIn, true);
    doc.addEventListener("mousedown", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("touchstart", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener("click", checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkTabKey, {
      capture: true,
      passive: false
    });
    doc.addEventListener("keydown", checkEscapeKey);
    return trap;
  };
  var removeListeners = function removeListeners2() {
    if (!state2.active) {
      return;
    }
    doc.removeEventListener("focusin", checkFocusIn, true);
    doc.removeEventListener("mousedown", checkPointerDown, true);
    doc.removeEventListener("touchstart", checkPointerDown, true);
    doc.removeEventListener("click", checkClick, true);
    doc.removeEventListener("keydown", checkTabKey, true);
    doc.removeEventListener("keydown", checkEscapeKey);
    return trap;
  };
  var checkDomRemoval = function checkDomRemoval2(mutations) {
    var isFocusedNodeRemoved = mutations.some(function(mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function(node) {
        return node === state2.mostRecentlyFocusedNode;
      });
    });
    if (isFocusedNodeRemoved) {
      _tryFocus(getInitialFocusNode());
    }
  };
  var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(checkDomRemoval) : void 0;
  var updateObservedNodes = function updateObservedNodes2() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state2.active && !state2.paused) {
      state2.containers.map(function(container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };
  trap = {
    get active() {
      return state2.active;
    },
    get paused() {
      return state2.paused;
    },
    activate: function activate(activateOptions) {
      if (state2.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, "onActivate");
      var onPostActivate = getOption(activateOptions, "onPostActivate");
      var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state2.active = true;
      state2.paused = false;
      state2.nodeFocusedBeforeActivation = _getActiveElement(doc);
      onActivate === null || onActivate === void 0 || onActivate();
      var finishActivation = function finishActivation2() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 || onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state2.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state2.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state2.delayInitialFocusTimer);
      state2.delayInitialFocusTimer = void 0;
      removeListeners();
      state2.active = false;
      state2.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, "onDeactivate");
      var onPostDeactivate = getOption(options, "onPostDeactivate");
      var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
      var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
      onDeactivate === null || onDeactivate === void 0 || onDeactivate();
      var finishDeactivation = function finishDeactivation2() {
        delay(function() {
          if (returnFocus) {
            _tryFocus(getReturnFocusNode(state2.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state2.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (!state2.active) {
        return this;
      }
      state2.manuallyPaused = true;
      return this._setPausedState(true, pauseOptions);
    },
    unpause: function unpause(unpauseOptions) {
      if (!state2.active) {
        return this;
      }
      state2.manuallyPaused = false;
      if (trapStack[trapStack.length - 1] !== this) {
        return this;
      }
      return this._setPausedState(false, unpauseOptions);
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state2.containers = elementsAsArray.map(function(element2) {
        return typeof element2 === "string" ? doc.querySelector(element2) : element2;
      });
      if (state2.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };
  Object.defineProperties(trap, {
    _isManuallyPaused: {
      value: function value() {
        return state2.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function value(paused, options) {
        if (state2.paused === paused) {
          return this;
        }
        state2.paused = paused;
        if (paused) {
          var onPause = getOption(options, "onPause");
          var onPostPause = getOption(options, "onPostPause");
          onPause === null || onPause === void 0 || onPause();
          removeListeners();
          updateObservedNodes();
          onPostPause === null || onPostPause === void 0 || onPostPause();
        } else {
          var onUnpause = getOption(options, "onUnpause");
          var onPostUnpause = getOption(options, "onPostUnpause");
          onUnpause === null || onUnpause === void 0 || onUnpause();
          updateTabbableNodes();
          addListeners();
          updateObservedNodes();
          onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
        }
        return this;
      }
    }
  });
  trap.updateContainerElements(elements);
  return trap;
};
const FocusTrap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createFocusTrap
}, Symbol.toStringTag, { value: "Module" }));
var root_7 = from_html(`<textarea class="w-full mt-2 rounded-lg px-4 py-2 text-sm dark:text-gray-300 dark:bg-gray-900 outline-hidden resize-none" rows="3" required></textarea>`);
var root_4 = from_html(`<div class=" text-sm text-gray-500 flex-1"><!> <!></div>`);
var root_1 = from_html(`<div class=" fixed top-0 right-0 left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] flex justify-center z-99999999 overflow-hidden overscroll-contain"><div class=" m-auto max-w-full w-[32rem] mx-2 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm rounded-4xl max-h-[100dvh] shadow-3xl border border-white dark:border-gray-900"><div class="px-[1.75rem] py-6 flex flex-col"><div class=" text-lg font-medium dark:text-gray-200 mb-2.5"><!></div> <!> <div class="mt-6 flex justify-between gap-1.5"><button class="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white font-medium w-full py-2 rounded-3xl transition" type="button"> </button> <button class="text-sm bg-gray-900 hover:bg-gray-850 text-gray-100 dark:bg-gray-100 dark:hover:bg-white dark:text-gray-800 font-medium w-full py-2 rounded-3xl transition" type="button"> </button></div></div></div></div>`);
function ConfirmDialog($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let title = prop($$props, "title", 8, "");
  let message = prop($$props, "message", 8, "");
  let cancelLabel = prop($$props, "cancelLabel", 24, () => $i18n().t("Cancel"));
  let confirmLabel = prop($$props, "confirmLabel", 24, () => $i18n().t("Confirm"));
  let onConfirm = prop($$props, "onConfirm", 8, () => {
  });
  let input = prop($$props, "input", 8, false);
  let inputPlaceholder = prop($$props, "inputPlaceholder", 8, "");
  let inputValue = prop($$props, "inputValue", 12, "");
  let show = prop($$props, "show", 12, false);
  let modalElement = mutable_source(null);
  let mounted = mutable_source(false);
  let focusTrap = mutable_source(null);
  const init$1 = () => {
    inputValue("");
  };
  const handleKeyDown = (event2) => {
    if (event2.key === "Escape") {
      show(false);
    }
    if (event2.key === "Enter") {
      confirmHandler();
    }
  };
  const confirmHandler = async () => {
    show(false);
    await tick();
    await onConfirm()();
    dispatch("confirm", inputValue());
  };
  onMount(() => {
    set(mounted, true);
  });
  onDestroy(() => {
    show(false);
    if (get$2(focusTrap)) {
      get$2(focusTrap).deactivate();
    }
    if (get$2(modalElement)) {
      document.body.removeChild(get$2(modalElement));
    }
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect(
    () => (get$2(mounted), deep_read_state(show()), get$2(modalElement), get$2(focusTrap), FocusTrap),
    () => {
      if (get$2(mounted)) {
        if (show() && get$2(modalElement)) {
          document.body.appendChild(get$2(modalElement));
          set(focusTrap, createFocusTrap(get$2(modalElement)));
          get$2(focusTrap).activate();
          window.addEventListener("keydown", handleKeyDown);
          document.body.style.overflow = "hidden";
        } else if (get$2(modalElement)) {
          get$2(focusTrap).deactivate();
          window.removeEventListener("keydown", handleKeyDown);
          document.body.removeChild(get$2(modalElement));
          document.body.style.overflow = "unset";
        }
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_3 = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var node_1 = child(div_3);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, title()));
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Confirm your action")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_1, ($$render) => {
          if (title() !== "") $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_3);
      var node_2 = sibling(div_3, 2);
      slot(node_2, $$props, "default", {}, ($$anchor3) => {
        var div_4 = root_4();
        var node_3 = child(div_4);
        {
          var consequent_1 = ($$anchor4) => {
            const html2 = derived_safe_equal(() => (deep_read_state(marked), deep_read_state(message()), untrack(() => marked.parse(message()))));
            var fragment_3 = comment();
            var node_4 = first_child(fragment_3);
            html$1(node_4, () => get$2(html2));
            append($$anchor4, fragment_3);
          };
          var alternate_1 = ($$anchor4) => {
            var text_2 = text();
            template_effect(($0) => set_text(text_2, $0), [
              () => ($i18n(), untrack(() => $i18n().t("This action cannot be undone. Do you wish to continue?")))
            ]);
            append($$anchor4, text_2);
          };
          if_block(node_3, ($$render) => {
            if (message() !== "") $$render(consequent_1);
            else $$render(alternate_1, false);
          });
        }
        var node_5 = sibling(node_3, 2);
        {
          var consequent_2 = ($$anchor4) => {
            var textarea = root_7();
            remove_textarea_child(textarea);
            template_effect(($0) => set_attribute(textarea, "placeholder", $0), [
              () => (deep_read_state(inputPlaceholder()), $i18n(), untrack(() => inputPlaceholder() ? inputPlaceholder() : $i18n().t("Enter your message")))
            ]);
            bind_value(textarea, inputValue);
            append($$anchor4, textarea);
          };
          if_block(node_5, ($$render) => {
            if (input()) $$render(consequent_2);
          });
        }
        reset(div_4);
        append($$anchor3, div_4);
      });
      var div_5 = sibling(node_2, 2);
      var button = child(div_5);
      var text_3 = child(button, true);
      reset(button);
      var button_1 = sibling(button, 2);
      var text_4 = child(button_1, true);
      reset(button_1);
      reset(div_5);
      reset(div_2);
      reset(div_1);
      reset(div);
      bind_this(div, ($$value) => set(modalElement, $$value), () => get$2(modalElement));
      template_effect(() => {
        set_text(text_3, cancelLabel());
        set_text(text_4, confirmLabel());
      });
      event("click", button, () => {
        show(false);
        dispatch("cancel");
      });
      event("click", button_1, () => {
        confirmHandler();
      });
      transition(1, div_1, () => flyAndScale);
      event("mousedown", div_1, (e) => {
        e.stopPropagation();
      });
      transition(1, div, () => fade, () => ({ duration: 10 }));
      event("mousedown", div, () => {
        show(false);
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (show()) $$render(consequent_3);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$1 = from_html(`<div class="flex justify-center text-center"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY {
				transform-origin: center;
				animation: spinner_AtaB 0.75s infinite linear;
			}
			@keyframes spinner_AtaB {
				100% {
					transform: rotate(360deg);
				}
			}</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"></path></svg></div>`);
function Spinner($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  var div = root$1();
  var svg = child(div);
  reset(div);
  template_effect(() => set_class(svg, 0, clsx$1(className())));
  append($$anchor, div);
}
var root = from_html(`<div><!></div>`);
function Loader($$anchor, $$props) {
  push($$props, false);
  const dispatch = createEventDispatcher();
  let loaderElement = mutable_source();
  let observer;
  let intervalId;
  onMount(() => {
    observer = new IntersectionObserver(
      (entries, observer2) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intervalId = setInterval(
              () => {
                dispatch("visible");
              },
              100
            );
          } else {
            clearInterval(intervalId);
          }
        });
      },
      {
        root: null,
        // viewport
        rootMargin: "0px",
        threshold: 0.1
        // When 10% of the loader is visible
      }
    );
    observer.observe(get$2(loaderElement));
  });
  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  init();
  var div = root();
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => set(loaderElement, $$value), () => get$2(loaderElement));
  append($$anchor, div);
  pop();
}
export {
  quintOut as $,
  useId as A,
  Popper_layer as B,
  ConfirmDialog as C,
  Dropdown as D,
  getFloatingContentCSSVars as E,
  Floating_layer as F,
  Mounted as G,
  Floating_layer_anchor as H,
  Icon as I,
  ENTER as J,
  SPACE as K,
  Loader as L,
  Menu_sub as M,
  getDataRequired as N,
  getDataChecked as O,
  Popper_layer_force_mount as P,
  getDataDisabled as Q,
  getAriaRequired as R,
  Spinner as S,
  getAriaChecked as T,
  UserMenu as U,
  getDisabled as V,
  marked as W,
  panzoom$1 as X,
  transition as Y,
  fade as Z,
  html$1 as _,
  Dropdown_menu_content as a,
  slide as a0,
  element as a1,
  createFocusTrap as a2,
  FocusTrap as a3,
  bind_files as a4,
  Menu as a5,
  Menu_trigger as a6,
  Menu_sub_trigger as b,
  commonjsGlobal as c,
  Menu_sub_content as d,
  Menu_item as e,
  flyAndScale as f,
  getDefaultExportFromCjs as g,
  Icon$1 as h,
  bind_value as i,
  Context as j,
  getTabbableCandidates as k,
  afterSleep as l,
  mergeProps as m,
  isTouch as n,
  isFocusVisible as o,
  getDataOpenClosed as p,
  getAriaExpanded as q,
  useGraceArea as r,
  srOnlyStylesString as s,
  onDestroyEffect as t,
  useRefById as u,
  isElement$1 as v,
  watch as w,
  noop$3 as x,
  box as y,
  snippet as z
};
