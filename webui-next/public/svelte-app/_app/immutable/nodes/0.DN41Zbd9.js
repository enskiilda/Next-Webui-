import { e as comment, a as append, i as from_svg, f as from_html, c as store_get, j as store_unsub, g as event, s as setup_stores, b as set_text, t as text } from "../chunks/Dyq6N3Rz.js";
import { i as init } from "../chunks/ERhjC6zA.js";
import { ac as first_child, p as push, c as child, r as reset, t as template_effect, a as pop, a9 as mutable_source, o as onMount, W as set, v as get, ah as legacy_pre_effect, w as deep_read_state, ai as legacy_pre_effect_reset, m as untrack, ad as sibling, ab as tick, aj as onDestroy, Y as derived_safe_equal, am as writable, an as setContext, ao as deferred_template_effect, ap as $document } from "../chunks/Bd2P5WIS.js";
import { e as each, i as index, c as set_attribute, C as toastState, D as useEffect, E as clsx, F as cn, b as set_class, a as set_style, s as slot, G as attribute_effect, S as STYLE, H as config, W as WEBUI_NAME, u as user$1, I as models, J as theme, n as mobile, K as settings } from "../chunks/CVh7obxn.js";
import { h as head } from "../chunks/De1V06Pc.js";
import { p as prop, i as if_block, l as legacy_rest_props, b as bind_this, s as spread_props } from "../chunks/CZqSbRSh.js";
import { c as component } from "../chunks/CCr-QNUs.js";
const ssr = false;
const trailingSlash = "ignore";
const _layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ssr,
  trailingSlash
}, Symbol.toStringTag, { value: "Module" }));
var root_1$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);
var root_3$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);
var root_5 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);
var root_7 = from_svg(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);
function Icon($$anchor, $$props) {
  let type = prop($$props, "type", 8, "success");
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var svg = root_1$4();
      append($$anchor2, svg);
    };
    var alternate_3 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_1 = ($$anchor3) => {
          var svg_1 = root_3$1();
          append($$anchor3, svg_1);
        };
        var alternate_2 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent_2 = ($$anchor4) => {
              var svg_2 = root_5();
              append($$anchor4, svg_2);
            };
            var alternate_1 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_3 = first_child(fragment_3);
              {
                var consequent_3 = ($$anchor5) => {
                  var svg_3 = root_7();
                  append($$anchor5, svg_3);
                };
                var alternate = ($$anchor5) => {
                };
                if_block(
                  node_3,
                  ($$render) => {
                    if (type() === "warning") $$render(consequent_3);
                    else $$render(alternate, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_3);
            };
            if_block(
              node_2,
              ($$render) => {
                if (type() === "info") $$render(consequent_2);
                else $$render(alternate_1, false);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(
          node_1,
          ($$render) => {
            if (type() === "error") $$render(consequent_1);
            else $$render(alternate_2, false);
          },
          true
        );
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (type() === "success") $$render(consequent);
      else $$render(alternate_3, false);
    });
  }
  append($$anchor, fragment);
}
var root_1$3 = from_html(`<div class="sonner-loading-bar"></div>`);
var root$2 = from_html(`<div class="sonner-loading-wrapper"><div class="sonner-spinner"></div></div>`);
function Loader$1($$anchor, $$props) {
  push($$props, false);
  let visible = prop($$props, "visible", 8);
  const bars = Array(12).fill(0);
  init();
  var div = root$2();
  var div_1 = child(div);
  each(div_1, 5, () => bars, index, ($$anchor2, _) => {
    var div_2 = root_1$3();
    append($$anchor2, div_2);
  });
  reset(div_1);
  reset(div);
  template_effect(() => set_attribute(div, "data-visible", visible()));
  append($$anchor, div);
  pop();
}
var root_1$2 = from_html(`<button aria-label="Close toast" data-close-button=""><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>`);
var root_4 = from_html(`<div data-icon=""><!> <!></div>`);
var root_15 = from_html(`<div data-title=""><!></div>`);
var root_18 = from_html(`<div data-description=""><!></div>`);
var root_21 = from_html(`<button data-button="" data-cancel=""> </button>`);
var root_22 = from_html(`<button data-button=""> </button>`);
var root_3 = from_html(`<!> <div data-content=""><!> <!></div> <!> <!>`, 1);
var root$1 = from_html(`<li aria-atomic="true" role="status" data-sonner-toast=""><!> <!></li>`);
function Toast($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false);
  const $heights = () => store_get(heights, "$heights", $$stores);
  const $effect = () => store_get(get(effect), "$effect", $$stores);
  const $toasts = () => store_get(toasts, "$toasts", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isFront = mutable_source(void 0, true);
  const isVisible = mutable_source(void 0, true);
  const toastTitle = mutable_source(void 0, true);
  const toastDescription = mutable_source(void 0, true);
  const toastType = mutable_source(void 0, true);
  const toastClass = mutable_source(void 0, true);
  const toastDescriptionClass = mutable_source(void 0, true);
  const heightIndex = mutable_source(void 0, true);
  const coords = mutable_source(void 0, true);
  const toastsHeightBefore = mutable_source(void 0, true);
  const disabled = mutable_source(void 0, true);
  const isPromiseLoadingOrInfiniteDuration = mutable_source(void 0, true);
  const TOAST_LIFETIME = 4e3;
  const GAP = 14;
  const SWIPE_TRESHOLD = 20;
  const TIME_BEFORE_UNMOUNT = 200;
  const SCALE_MULTIPLIER = 0.05;
  const defaultClasses = {
    toast: "",
    title: "",
    description: "",
    loader: "",
    closeButton: "",
    cancelButton: "",
    actionButton: "",
    action: "",
    warning: "",
    error: "",
    success: "",
    default: "",
    info: "",
    loading: ""
  };
  const { toasts, heights, removeHeight, setHeight, remove } = toastState;
  let toast = prop($$props, "toast", 9);
  let index2 = prop($$props, "index", 9);
  let expanded = prop($$props, "expanded", 9);
  let invert = prop($$props, "invert", 13);
  let position = prop($$props, "position", 9);
  let visibleToasts = prop($$props, "visibleToasts", 9);
  let expandByDefault = prop($$props, "expandByDefault", 9);
  let closeButton = prop($$props, "closeButton", 9);
  let interacting = prop($$props, "interacting", 9);
  let cancelButtonStyle = prop($$props, "cancelButtonStyle", 9, "");
  let actionButtonStyle = prop($$props, "actionButtonStyle", 9, "");
  let duration = prop($$props, "duration", 9, 4e3);
  let descriptionClass = prop($$props, "descriptionClass", 9, "");
  let classes = prop($$props, "classes", 29, () => ({}));
  let unstyled = prop($$props, "unstyled", 9, false);
  let mounted = mutable_source(false, true);
  let removed = mutable_source(false, true);
  let swiping = mutable_source(false, true);
  let swipeOut = mutable_source(false, true);
  let offsetBeforeRemove = mutable_source(0, true);
  let initialHeight = mutable_source(0, true);
  let toastRef = mutable_source(void 0, true);
  let offset = mutable_source(0, true);
  let closeTimerStartTimeRef = 0;
  let lastCloseTimerStartTimeRef = 0;
  let pointerStartRef = null;
  async function updateHeights() {
    if (!get(mounted)) {
      return;
    }
    await tick();
    let scale;
    if (expanded() || expandByDefault()) {
      scale = 1;
    } else {
      scale = 1 - index2() * SCALE_MULTIPLIER;
    }
    get(toastRef).style.setProperty("height", "auto");
    const offsetHeight = get(toastRef).offsetHeight;
    const rectHeight = get(toastRef).getBoundingClientRect().height;
    const scaledRectHeight = Math.round((rectHeight / scale + Number.EPSILON) * 100) / 100;
    get(toastRef).style.removeProperty("height");
    let finalHeight;
    if (Math.abs(scaledRectHeight - offsetHeight) < 1) {
      finalHeight = scaledRectHeight;
    } else {
      finalHeight = offsetHeight;
    }
    set(initialHeight, finalHeight);
    setHeight({ toastId: toast().id, height: finalHeight });
  }
  function deleteToast() {
    set(removed, true);
    set(offsetBeforeRemove, get(offset));
    removeHeight(toast().id);
    setTimeout(
      () => {
        remove(toast().id);
      },
      TIME_BEFORE_UNMOUNT
    );
  }
  let timeoutId = mutable_source(void 0, true);
  let remainingTime = mutable_source(toast().duration || duration() || TOAST_LIFETIME, true);
  function pauseTimer() {
    if (lastCloseTimerStartTimeRef < closeTimerStartTimeRef) {
      const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef;
      set(remainingTime, get(remainingTime) - elapsedTime);
    }
    lastCloseTimerStartTimeRef = (/* @__PURE__ */ new Date()).getTime();
  }
  function startTimer() {
    closeTimerStartTimeRef = (/* @__PURE__ */ new Date()).getTime();
    set(timeoutId, setTimeout(
      () => {
        var _a, _b;
        (_b = (_a = toast()).onAutoClose) == null ? void 0 : _b.call(_a, toast());
        deleteToast();
      },
      get(remainingTime)
    ));
  }
  let effect = mutable_source(void 0, true);
  onMount(() => {
    set(mounted, true);
    const height = get(toastRef).getBoundingClientRect().height;
    set(initialHeight, height);
    setHeight({ toastId: toast().id, height });
    return () => removeHeight(toast().id);
  });
  function onPointerDown(event2) {
    if (get(disabled)) {
      return;
    }
    set(offsetBeforeRemove, get(offset));
    const target = event2.target;
    target.setPointerCapture(event2.pointerId);
    if (target.tagName === "BUTTON") {
      return;
    }
    set(swiping, true);
    pointerStartRef = { x: event2.clientX, y: event2.clientY };
  }
  function onPointerUp() {
    var _a, _b, _c;
    if (get(swipeOut)) {
      return;
    }
    pointerStartRef = null;
    const swipeAmount = Number(((_a = get(toastRef)) == null ? void 0 : _a.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0);
    if (Math.abs(swipeAmount) >= SWIPE_TRESHOLD) {
      set(offsetBeforeRemove, get(offset));
      (_c = (_b = toast()).onDismiss) == null ? void 0 : _c.call(_b, toast());
      deleteToast();
      set(swipeOut, true);
      return;
    }
    get(toastRef).style.setProperty("--swipe-amount", "0px");
    set(swiping, false);
  }
  function onPointerMove(event2) {
    if (!pointerStartRef) {
      return;
    }
    const yPosition = event2.clientY - pointerStartRef.y;
    const xPosition = event2.clientX - pointerStartRef.x;
    const clamp = get(coords)[0] === "top" ? Math.min : Math.max;
    const clampedY = clamp(0, yPosition);
    const swipeStartThreshold = event2.pointerType === "touch" ? 10 : 2;
    const isAllowedToSwipe = Math.abs(clampedY) > swipeStartThreshold;
    if (isAllowedToSwipe) {
      get(toastRef).style.setProperty("--swipe-amount", `${yPosition}px`);
    } else if (Math.abs(xPosition) > swipeStartThreshold) {
      pointerStartRef = null;
    }
  }
  legacy_pre_effect(() => deep_read_state(classes()), () => {
    classes({ ...defaultClasses, ...classes() });
  });
  legacy_pre_effect(() => deep_read_state(index2()), () => {
    set(isFront, index2() === 0);
  });
  legacy_pre_effect(
    () => (deep_read_state(index2()), deep_read_state(visibleToasts())),
    () => {
      set(isVisible, index2() + 1 <= visibleToasts());
    }
  );
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastTitle, toast().title);
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastDescription, toast().description);
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastType, toast().type);
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastClass, toast().class || "");
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastDescriptionClass, toast().descriptionClass || "");
  });
  legacy_pre_effect(() => ($heights(), deep_read_state(toast())), () => {
    set(heightIndex, $heights().findIndex((height) => height.toastId === toast().id) || 0);
  });
  legacy_pre_effect(() => deep_read_state(position()), () => {
    set(coords, position().split("-"));
  });
  legacy_pre_effect(() => ($heights(), get(heightIndex)), () => {
    set(toastsHeightBefore, $heights().reduce(
      (prev, curr, reducerIndex) => {
        if (reducerIndex >= get(heightIndex)) return prev;
        return prev + curr.height;
      },
      0
    ));
  });
  legacy_pre_effect(() => (deep_read_state(invert()), deep_read_state(toast())), () => {
    invert(toast().invert || invert());
  });
  legacy_pre_effect(() => get(toastType), () => {
    set(disabled, get(toastType) === "loading");
  });
  legacy_pre_effect(() => (get(heightIndex), get(toastsHeightBefore)), () => {
    set(offset, Math.round(get(heightIndex) * GAP + get(toastsHeightBefore)));
  });
  legacy_pre_effect(() => (get(toastTitle), get(toastDescription)), () => {
    get(toastTitle), get(toastDescription), updateHeights();
  });
  legacy_pre_effect(
    () => (deep_read_state(toast()), get(timeoutId), deep_read_state(duration())),
    () => {
      if (toast().updated) {
        clearTimeout(get(timeoutId));
        set(remainingTime, toast().duration || duration() || TOAST_LIFETIME);
        startTimer();
      }
    }
  );
  legacy_pre_effect(() => (deep_read_state(toast()), get(toastType)), () => {
    set(isPromiseLoadingOrInfiniteDuration, toast().promise && get(toastType) === "loading" || toast().duration === Number.POSITIVE_INFINITY);
  });
  legacy_pre_effect(
    () => (get(isPromiseLoadingOrInfiniteDuration), deep_read_state(expanded()), deep_read_state(interacting()), get(timeoutId)),
    () => {
      store_unsub(
        set(effect, useEffect(() => {
          if (!get(isPromiseLoadingOrInfiniteDuration)) {
            if (expanded() || interacting()) {
              pauseTimer();
            } else {
              startTimer();
            }
          }
          return () => clearTimeout(get(timeoutId));
        })),
        "$effect",
        $$stores
      );
    }
  );
  legacy_pre_effect(() => $effect(), () => {
    $effect();
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    if (toast().delete) {
      deleteToast();
    }
  });
  legacy_pre_effect_reset();
  init(true);
  var li = root$1();
  set_attribute(
    li,
    "tabindex",
    // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
    // Remove only if treshold is met
    // User is swiping in wrong direction so we disable swipe gesture
    // for the current pointer down interaction
    0
  );
  let styles;
  var node = child(li);
  {
    var consequent = ($$anchor2) => {
      var button = root_1$2();
      template_effect(
        ($0) => {
          set_attribute(button, "data-disabled", get(disabled));
          set_class(button, 1, $0);
        },
        [
          () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
            var _a, _b, _c;
            return cn((_a = classes()) == null ? void 0 : _a.closeButton, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.closeButton);
          })))
        ]
      );
      event("click", button, function(...$$args) {
        var _a;
        (_a = get(disabled) ? void 0 : () => {
          var _a2, _b;
          deleteToast();
          (_b = (_a2 = toast()).onDismiss) == null ? void 0 : _b.call(_a2, toast());
        }) == null ? void 0 : _a.apply(this, $$args);
      });
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(closeButton()), deep_read_state(toast()), untrack(() => closeButton() && !toast().component)) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment = comment();
      var node_2 = first_child(fragment);
      component(node_2, () => toast().component, ($$anchor3, $$component) => {
        $$component($$anchor3, spread_props(() => toast().componentProps, { $$events: { closeToast: deleteToast } }));
      });
      append($$anchor2, fragment);
    };
    var alternate_6 = ($$anchor2) => {
      var fragment_1 = root_3();
      var node_3 = first_child(fragment_1);
      {
        var consequent_8 = ($$anchor3) => {
          var div = root_4();
          var node_4 = child(div);
          {
            var consequent_2 = ($$anchor4) => {
              var fragment_2 = comment();
              var node_5 = first_child(fragment_2);
              slot(node_5, $$props, "loading-icon", {}, null);
              append($$anchor4, fragment_2);
            };
            if_block(node_4, ($$render) => {
              if (deep_read_state(toast()), get(toastType), untrack(() => (toast().promise || get(toastType) === "loading") && !toast().icon)) $$render(consequent_2);
            });
          }
          var node_6 = sibling(node_4, 2);
          {
            var consequent_3 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_7 = first_child(fragment_3);
              component(node_7, () => toast().icon, ($$anchor5, $$component) => {
                $$component($$anchor5, {});
              });
              append($$anchor4, fragment_3);
            };
            var alternate_3 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_8 = first_child(fragment_4);
              {
                var consequent_4 = ($$anchor5) => {
                  var fragment_5 = comment();
                  var node_9 = first_child(fragment_5);
                  slot(node_9, $$props, "success-icon", {}, null);
                  append($$anchor5, fragment_5);
                };
                var alternate_2 = ($$anchor5) => {
                  var fragment_6 = comment();
                  var node_10 = first_child(fragment_6);
                  {
                    var consequent_5 = ($$anchor6) => {
                      var fragment_7 = comment();
                      var node_11 = first_child(fragment_7);
                      slot(node_11, $$props, "error-icon", {}, null);
                      append($$anchor6, fragment_7);
                    };
                    var alternate_1 = ($$anchor6) => {
                      var fragment_8 = comment();
                      var node_12 = first_child(fragment_8);
                      {
                        var consequent_6 = ($$anchor7) => {
                          var fragment_9 = comment();
                          var node_13 = first_child(fragment_9);
                          slot(node_13, $$props, "warning-icon", {}, null);
                          append($$anchor7, fragment_9);
                        };
                        var alternate = ($$anchor7) => {
                          var fragment_10 = comment();
                          var node_14 = first_child(fragment_10);
                          {
                            var consequent_7 = ($$anchor8) => {
                              var fragment_11 = comment();
                              var node_15 = first_child(fragment_11);
                              slot(node_15, $$props, "info-icon", {}, null);
                              append($$anchor8, fragment_11);
                            };
                            if_block(
                              node_14,
                              ($$render) => {
                                if (get(toastType) === "info") $$render(consequent_7);
                              },
                              true
                            );
                          }
                          append($$anchor7, fragment_10);
                        };
                        if_block(
                          node_12,
                          ($$render) => {
                            if (get(toastType) === "warning") $$render(consequent_6);
                            else $$render(alternate, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_8);
                    };
                    if_block(
                      node_10,
                      ($$render) => {
                        if (get(toastType) === "error") $$render(consequent_5);
                        else $$render(alternate_1, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_6);
                };
                if_block(
                  node_8,
                  ($$render) => {
                    if (get(toastType) === "success") $$render(consequent_4);
                    else $$render(alternate_2, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_4);
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(toast()), untrack(() => toast().icon)) $$render(consequent_3);
              else $$render(alternate_3, false);
            });
          }
          reset(div);
          append($$anchor3, div);
        };
        if_block(node_3, ($$render) => {
          if (get(toastType), deep_read_state(toast()), untrack(() => get(toastType) !== "default" || toast().icon || toast().promise)) $$render(consequent_8);
        });
      }
      var div_1 = sibling(node_3, 2);
      var node_16 = child(div_1);
      {
        var consequent_10 = ($$anchor3) => {
          var div_2 = root_15();
          var node_17 = child(div_2);
          {
            var consequent_9 = ($$anchor4) => {
              var fragment_12 = comment();
              var node_18 = first_child(fragment_12);
              component(node_18, () => toast().title, ($$anchor5, $$component) => {
                $$component($$anchor5, spread_props(() => toast().componentProps));
              });
              append($$anchor4, fragment_12);
            };
            var alternate_4 = ($$anchor4) => {
              var text$1 = text();
              template_effect(() => set_text(text$1, (deep_read_state(toast()), untrack(() => toast().title))));
              append($$anchor4, text$1);
            };
            if_block(node_17, ($$render) => {
              if (deep_read_state(toast()), untrack(() => typeof toast().title !== "string")) $$render(consequent_9);
              else $$render(alternate_4, false);
            });
          }
          reset(div_2);
          template_effect(($0) => set_class(div_2, 1, $0), [
            () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
              var _a, _b, _c;
              return cn((_a = classes()) == null ? void 0 : _a.title, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.title);
            })))
          ]);
          append($$anchor3, div_2);
        };
        if_block(node_16, ($$render) => {
          if (deep_read_state(toast()), untrack(() => toast().title)) $$render(consequent_10);
        });
      }
      var node_19 = sibling(node_16, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var div_3 = root_18();
          var node_20 = child(div_3);
          {
            var consequent_11 = ($$anchor4) => {
              var fragment_14 = comment();
              var node_21 = first_child(fragment_14);
              component(node_21, () => toast().description, ($$anchor5, $$component) => {
                $$component($$anchor5, spread_props(() => toast().componentProps));
              });
              append($$anchor4, fragment_14);
            };
            var alternate_5 = ($$anchor4) => {
              var text_1 = text();
              template_effect(() => set_text(text_1, (deep_read_state(toast()), untrack(() => toast().description))));
              append($$anchor4, text_1);
            };
            if_block(node_20, ($$render) => {
              if (deep_read_state(toast()), untrack(() => typeof toast().description !== "string")) $$render(consequent_11);
              else $$render(alternate_5, false);
            });
          }
          reset(div_3);
          template_effect(($0) => set_class(div_3, 1, $0), [
            () => clsx((deep_read_state(cn), deep_read_state(descriptionClass()), get(toastDescriptionClass), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
              var _a, _b;
              return cn(descriptionClass(), get(toastDescriptionClass), (_a = classes()) == null ? void 0 : _a.description, (_b = toast().classes) == null ? void 0 : _b.description);
            })))
          ]);
          append($$anchor3, div_3);
        };
        if_block(node_19, ($$render) => {
          if (deep_read_state(toast()), untrack(() => toast().description)) $$render(consequent_12);
        });
      }
      reset(div_1);
      var node_22 = sibling(div_1, 2);
      {
        var consequent_13 = ($$anchor3) => {
          var button_1 = root_21();
          var text_2 = child(button_1, true);
          reset(button_1);
          template_effect(
            ($0) => {
              set_style(button_1, cancelButtonStyle());
              set_class(button_1, 1, $0);
              set_text(text_2, (deep_read_state(toast()), untrack(() => toast().cancel.label)));
            },
            [
              () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
                var _a, _b, _c;
                return cn((_a = classes()) == null ? void 0 : _a.cancelButton, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.cancelButton);
              })))
            ]
          );
          event("click", button_1, () => {
            var _a;
            deleteToast();
            if ((_a = toast().cancel) == null ? void 0 : _a.onClick) {
              toast().cancel.onClick();
            }
          });
          append($$anchor3, button_1);
        };
        if_block(node_22, ($$render) => {
          if (deep_read_state(toast()), untrack(() => toast().cancel)) $$render(consequent_13);
        });
      }
      var node_23 = sibling(node_22, 2);
      {
        var consequent_14 = ($$anchor3) => {
          var button_2 = root_22();
          var text_3 = child(button_2, true);
          reset(button_2);
          template_effect(
            ($0) => {
              set_style(button_2, actionButtonStyle());
              set_class(button_2, 1, $0);
              set_text(text_3, (deep_read_state(toast()), untrack(() => toast().action.label)));
            },
            [
              () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
                var _a, _b, _c;
                return cn((_a = classes()) == null ? void 0 : _a.actionButton, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.actionButton);
              })))
            ]
          );
          event("click", button_2, (event2) => {
            var _a;
            (_a = toast().action) == null ? void 0 : _a.onClick(event2);
            if (event2.defaultPrevented) return;
            deleteToast();
          });
          append($$anchor3, button_2);
        };
        if_block(node_23, ($$render) => {
          if (deep_read_state(toast()), untrack(() => toast().action)) $$render(consequent_14);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(toast()), untrack(() => toast().component)) $$render(consequent_1);
      else $$render(alternate_6, false);
    });
  }
  reset(li);
  bind_this(li, ($$value) => set(toastRef, $$value), () => get(toastRef));
  template_effect(
    ($0, $1, $2) => {
      set_attribute(li, "aria-live", (deep_read_state(toast()), untrack(() => toast().important ? "assertive" : "polite")));
      set_class(li, 1, $0);
      set_attribute(li, "data-styled", (deep_read_state(toast()), deep_read_state(unstyled()), untrack(() => {
        var _a;
        return !(toast().component || ((_a = toast()) == null ? void 0 : _a.unstyled) || unstyled());
      })));
      set_attribute(li, "data-mounted", get(mounted));
      set_attribute(li, "data-promise", $1);
      set_attribute(li, "data-removed", get(removed));
      set_attribute(li, "data-visible", get(isVisible));
      set_attribute(li, "data-y-position", (get(coords), untrack(() => get(coords)[0])));
      set_attribute(li, "data-x-position", (get(coords), untrack(() => get(coords)[1])));
      set_attribute(li, "data-index", index2());
      set_attribute(li, "data-front", get(isFront));
      set_attribute(li, "data-swiping", get(swiping));
      set_attribute(li, "data-type", get(toastType));
      set_attribute(li, "data-invert", invert());
      set_attribute(li, "data-swipe-out", get(swipeOut));
      set_attribute(li, "data-expanded", $2);
      styles = set_style(
        li,
        (deep_read_state($$sanitized_props), deep_read_state(toast()), untrack(() => `${$$sanitized_props.style} ${toast().style}`)),
        styles,
        {
          "--index": index2(),
          "--toasts-before": index2(),
          "--z-index": ($toasts(), deep_read_state(index2()), untrack(() => $toasts().length - index2())),
          "--offset": `${get(removed) ? get(offsetBeforeRemove) : get(offset)}px`,
          "--initial-height": `${get(initialHeight)}px`
        }
      );
    },
    [
      () => clsx((deep_read_state(cn), deep_read_state($$sanitized_props), get(toastClass), deep_read_state(classes()), deep_read_state(toast()), get(toastType), untrack(() => {
        var _a, _b, _c, _d, _e, _f;
        return cn($$sanitized_props.class, get(toastClass), (_a = classes()) == null ? void 0 : _a.toast, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.toast, (_d = classes()) == null ? void 0 : _d[get(toastType)], (_f = (_e = toast()) == null ? void 0 : _e.classes) == null ? void 0 : _f[get(toastType)]);
      }))),
      () => (deep_read_state(toast()), untrack(() => Boolean(toast().promise))),
      () => (deep_read_state(expanded()), deep_read_state(expandByDefault()), get(mounted), untrack(() => Boolean(expanded() || expandByDefault() && get(mounted))))
    ]
  );
  event("pointerdown", li, onPointerDown);
  event("pointerup", li, onPointerUp);
  event("pointermove", li, onPointerMove);
  append($$anchor, li);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<ol></ol>`);
var root_1$1 = from_html(`<section class="svelte-nbs0zk"></section>`);
function Toaster($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "invert",
    "theme",
    "position",
    "hotkey",
    "containerAriaLabel",
    "richColors",
    "expand",
    "duration",
    "visibleToasts",
    "closeButton",
    "toastOptions",
    "offset",
    "dir"
  ]);
  push($$props, false);
  const $toasts = () => store_get(toasts, "$toasts", $$stores);
  const $heights = () => store_get(heights, "$heights", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const possiblePositions = mutable_source();
  const hotkeyLabel = mutable_source();
  const VISIBLE_TOASTS_AMOUNT = 3;
  const VIEWPORT_OFFSET = "32px";
  const TOAST_WIDTH = 356;
  const GAP = 14;
  const DARK = "dark";
  const LIGHT = "light";
  function getInitialTheme(t) {
    if (t !== "system") {
      return t;
    }
    if (typeof window !== "undefined") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return DARK;
      }
      return LIGHT;
    }
    return LIGHT;
  }
  function getDocumentDirection() {
    if (typeof window === "undefined") return "ltr";
    if (typeof document === "undefined") return "ltr";
    const dirAttribute = document.documentElement.getAttribute("dir");
    if (dirAttribute === "auto" || !dirAttribute) {
      return window.getComputedStyle(document.documentElement).direction;
    }
    return dirAttribute;
  }
  let invert = prop($$props, "invert", 8, false);
  let theme2 = prop($$props, "theme", 8, "light");
  let position = prop($$props, "position", 8, "bottom-right");
  let hotkey = prop($$props, "hotkey", 24, () => ["altKey", "KeyT"]);
  let containerAriaLabel = prop($$props, "containerAriaLabel", 8, "Notifications");
  let richColors = prop($$props, "richColors", 8, false);
  let expand = prop($$props, "expand", 8, false);
  let duration = prop($$props, "duration", 8, 4e3);
  let visibleToasts = prop($$props, "visibleToasts", 8, VISIBLE_TOASTS_AMOUNT);
  let closeButton = prop($$props, "closeButton", 8, false);
  let toastOptions = prop($$props, "toastOptions", 24, () => ({}));
  let offset = prop($$props, "offset", 8, null);
  let dir = prop($$props, "dir", 24, getDocumentDirection);
  const { toasts, heights, reset: reset$1 } = toastState;
  let expanded = mutable_source(false);
  let interacting = mutable_source(false);
  let actualTheme = mutable_source(getInitialTheme(theme2()));
  let listRef = mutable_source();
  let lastFocusedElementRef = null;
  let isFocusWithinRef = false;
  onDestroy(() => {
    if (get(listRef) && lastFocusedElementRef) {
      lastFocusedElementRef.focus({ preventScroll: true });
      lastFocusedElementRef = null;
      isFocusWithinRef = false;
    }
  });
  onMount(() => {
    reset$1();
    const handleKeydown = (event2) => {
      var _a, _b;
      const isHotkeyPressed = hotkey().every((key) => event2[key] || event2.code === key);
      if (isHotkeyPressed) {
        set(expanded, true);
        (_a = get(listRef)) == null ? void 0 : _a.focus();
      }
      if (event2.code === "Escape" && (document.activeElement === get(listRef) || ((_b = get(listRef)) == null ? void 0 : _b.contains(document.activeElement)))) {
        set(expanded, false);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
  function handleBlur(event2) {
    if (isFocusWithinRef && !event2.currentTarget.contains(event2.relatedTarget)) {
      isFocusWithinRef = false;
      if (lastFocusedElementRef) {
        lastFocusedElementRef.focus({ preventScroll: true });
        lastFocusedElementRef = null;
      }
    }
  }
  function handleFocus(event2) {
    if (!isFocusWithinRef) {
      isFocusWithinRef = true;
      lastFocusedElementRef = event2.relatedTarget;
    }
  }
  legacy_pre_effect(() => (deep_read_state(position()), $toasts()), () => {
    set(possiblePositions, Array.from(new Set([
      position(),
      ...$toasts().filter((toast) => toast.position).map((toast) => toast.position)
    ].filter(Boolean))));
  });
  legacy_pre_effect(() => deep_read_state(hotkey()), () => {
    set(hotkeyLabel, hotkey().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  });
  legacy_pre_effect(() => $toasts(), () => {
    if ($toasts().length <= 1) {
      set(expanded, false);
    }
  });
  legacy_pre_effect(() => $toasts(), () => {
    const toastsToDismiss = $toasts().filter((toast) => toast.dismiss && !toast.delete);
    if (toastsToDismiss.length > 0) {
      const updatedToasts = $toasts().map((toast) => {
        const matchingToast = toastsToDismiss.find((dismissToast) => dismissToast.id === toast.id);
        if (matchingToast) {
          return { ...toast, delete: true };
        }
        return toast;
      });
      toasts.set(updatedToasts);
    }
  });
  legacy_pre_effect(() => deep_read_state(theme2()), () => {
    if (theme2() !== "system") {
      set(actualTheme, theme2());
    }
    if (typeof window !== "undefined") {
      if (theme2() === "system") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          set(actualTheme, DARK);
        } else {
          set(actualTheme, LIGHT);
        }
      }
      const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
      const changeHandler = ({ matches }) => {
        set(actualTheme, matches ? DARK : LIGHT);
      };
      if ("addEventListener" in mediaQueryList) {
        mediaQueryList.addEventListener("change", changeHandler);
      } else {
        mediaQueryList.addListener(changeHandler);
      }
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var section = root_1$1();
      set_attribute(section, "tabindex", -1);
      each(section, 5, () => get(possiblePositions), index, ($$anchor3, position2, index2, $$array) => {
        var ol = root_2();
        attribute_effect(
          ol,
          ($0, $1, $2) => ({
            tabIndex: -1,
            class: (deep_read_state($$sanitized_props), untrack(() => $$sanitized_props.class)),
            "data-sonner-toaster": true,
            "data-theme": get(actualTheme),
            "data-rich-colors": richColors(),
            dir: $0,
            "data-y-position": $1,
            "data-x-position": $2,
            style: (deep_read_state($$sanitized_props), untrack(() => $$sanitized_props.style)),
            ...$$restProps,
            [STYLE]: {
              "--front-toast-height": ($heights(), untrack(() => {
                var _a;
                return `${(_a = $heights()[0]) == null ? void 0 : _a.height}px`;
              })),
              "--offset": typeof offset() === "number" ? `${offset()}px` : offset() || VIEWPORT_OFFSET,
              "--width": `${TOAST_WIDTH}px`,
              "--gap": `${GAP}px`
            }
          }),
          [
            () => (deep_read_state(dir()), untrack(() => dir() === "auto" ? getDocumentDirection() : dir())),
            () => (get(position2), untrack(() => get(position2).split("-")[0])),
            () => (get(position2), untrack(() => get(position2).split("-")[1]))
          ],
          void 0,
          void 0,
          "svelte-nbs0zk"
        );
        each(
          ol,
          7,
          () => ($toasts(), get(position2), untrack(() => $toasts().filter((toast) => !toast.position && index2 === 0 || toast.position === get(position2)))),
          (toast) => toast.id,
          ($$anchor4, toast, index3, $$array_1) => {
            {
              let $0 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.actionButtonStyle) || "";
              })));
              let $1 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.cancelButtonStyle) || "";
              })));
              let $2 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.class) || "";
              })));
              let $3 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.descriptionClass) || "";
              })));
              let $4 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => toastOptions().classes || {})));
              let $5 = derived_safe_equal(() => (deep_read_state(toastOptions()), deep_read_state(duration()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.duration) ?? duration();
              })));
              let $6 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => toastOptions().unstyled || false)));
              Toast($$anchor4, {
                get index() {
                  return get(index3);
                },
                get toast() {
                  return get(toast);
                },
                get invert() {
                  return invert();
                },
                get visibleToasts() {
                  return visibleToasts();
                },
                get closeButton() {
                  return closeButton();
                },
                get interacting() {
                  return get(interacting);
                },
                get position() {
                  return get(position2);
                },
                get expandByDefault() {
                  return expand();
                },
                get expanded() {
                  return get(expanded);
                },
                get actionButtonStyle() {
                  return get($0);
                },
                get cancelButtonStyle() {
                  return get($1);
                },
                get class() {
                  return get($2);
                },
                get descriptionClass() {
                  return get($3);
                },
                get classes() {
                  return get($4);
                },
                get duration() {
                  return get($5);
                },
                get unstyled() {
                  return get($6);
                },
                $$slots: {
                  "loading-icon": ($$anchor5, $$slotProps) => {
                    var fragment_2 = comment();
                    var node_1 = first_child(fragment_2);
                    slot(node_1, $$props, "loading-icon", {}, ($$anchor6) => {
                      {
                        let $02 = derived_safe_equal(() => (get(toast), untrack(() => get(toast).type === "loading")));
                        Loader$1($$anchor6, {
                          get visible() {
                            return get($02);
                          }
                        });
                      }
                    });
                    append($$anchor5, fragment_2);
                  },
                  "success-icon": ($$anchor5, $$slotProps) => {
                    var fragment_4 = comment();
                    var node_2 = first_child(fragment_4);
                    slot(node_2, $$props, "success-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "success" });
                    });
                    append($$anchor5, fragment_4);
                  },
                  "error-icon": ($$anchor5, $$slotProps) => {
                    var fragment_6 = comment();
                    var node_3 = first_child(fragment_6);
                    slot(node_3, $$props, "error-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "error" });
                    });
                    append($$anchor5, fragment_6);
                  },
                  "warning-icon": ($$anchor5, $$slotProps) => {
                    var fragment_8 = comment();
                    var node_4 = first_child(fragment_8);
                    slot(node_4, $$props, "warning-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "warning" });
                    });
                    append($$anchor5, fragment_8);
                  },
                  "info-icon": ($$anchor5, $$slotProps) => {
                    var fragment_10 = comment();
                    var node_5 = first_child(fragment_10);
                    slot(node_5, $$props, "info-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "info" });
                    });
                    append($$anchor5, fragment_10);
                  }
                }
              });
            }
          }
        );
        reset(ol);
        bind_this(ol, ($$value) => set(listRef, $$value), () => get(listRef));
        template_effect(() => ol.dir = ol.dir);
        event("blur", ol, handleBlur);
        event("focus", ol, handleFocus);
        event("mouseenter", ol, () => set(expanded, true));
        event("mousemove", ol, () => set(expanded, true));
        event("mouseleave", ol, () => {
          if (!get(interacting)) {
            set(expanded, false);
          }
        });
        event("pointerdown", ol, () => set(interacting, true));
        event("pointerup", ol, () => set(interacting, false));
        append($$anchor3, ol);
      });
      reset(section);
      template_effect(() => set_attribute(section, "aria-label", `${containerAriaLabel()} ${get(hotkeyLabel)}`));
      append($$anchor2, section);
    };
    if_block(node, ($$render) => {
      if ($toasts(), untrack(() => $toasts().length > 0)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
const About = "O nas";
const Access = "Dostęp";
const Account = "Konto";
const Action = "Akcja";
const Actions = "Akcje";
const Activate = "Włącz";
const Active = "Aktywny";
const Add = "Dodaj";
const admin = "administrator";
const Admin = "Administrator";
const AI = "";
const All = "Wszystkie";
const Always = "Zawsze";
const Amazing = "Niesamowite";
const Analytics = "";
const Analyzed = "Przeanalizowane";
const and = "oraz";
const Android = "";
const April = "Kwiecień";
const Archive = "Archiwum";
const Artifacts = "Artefakty";
const Ask = "Zapytaj";
const Assistant = "Asystent";
const Audio = "Dźwięk";
const August = "Sierpień";
const Auth = "";
const Authenticate = "Zaloguj się";
const Authentication = "Uwierzytelnianie";
const Auto = "";
const Automatic1111 = "Automatic1111";
const Away = "Nieobecny";
const Awful = "Okropne";
const Back = "Wstecz";
const Banners = "Bannery";
const Bearer = "";
const before = "przed";
const Beta = "Beta";
const Bio = "";
const Bold = "Pogrubienie";
const Calendar = "Kalendarz";
const Call = "Rozmowa";
const Camera = "Kamera";
const Cancel = "Anuluj";
const Capabilities = "Możliwości";
const Capture = "Przechwyć";
const Channel = "";
const Channels = "Kanały";
const Character = "Znak";
const Chat = "Czat";
const Chats = "Czaty";
const Ciphers = "Szyfry";
const Citation = "Cytat";
const Citations = "Cytaty";
const Clone = "Duplikuj";
const Close = "Zamknij";
const cloud = "";
const Collapse = "";
const Collection = "Kolekcja";
const Color = "Kolor";
const ComfyUI = "ComfyUI";
const Command = "Polecenie";
const Comment = "";
const Completions = "Uzupełnienia";
const Configure = "Skonfigurować";
const Confirm = "Potwierdź";
const Connections = "Połączenia";
const Content = "Treść";
const Controls = "Ustawienia";
const Copied = "Skopiowane";
const Copy = "Skopiuj";
const Create = "Utwórz";
const Custom = "Niestandardowy";
const Dark = "Ciemny";
const Database = "Baza danych";
const December = "Grudzień";
const Deepgram = "";
const Default = "Domyślny";
const Delete = "Usuń";
const Description = "Opis";
const Dictate = "";
const Direct = "";
const Disabled = "Wyłączony";
const Display = "Wyświetl";
const Docling = "";
const Document = "Dokument";
const Documentation = "Dokumentacja";
const Documents = "Dokumenty";
const Done = "Wykonano";
const Download = "Pobieranie";
const Draw = "Rysuj";
const Edit = "Edytuj";
const edited = "";
const Edited = "";
const Editing = "";
const Eject = "Usuń model z pamięci";
const ElevenLabs = "ElevenLabs";
const Email = "Email";
const Embedding = "";
const Enabled = "Włączone";
const Enhance = "";
const ERROR = "BŁĄD";
const Evaluations = "Oceny";
const Everyone = "Każdy";
const Exclude = "Wykluczyć";
const Expand = "";
const Experimental = "Eksperymentalne";
const Explain = "Wyjaśnij";
const Export = "Eksport";
const External = "";
const Features = "Funkcje";
const February = "Luty";
const Feedbacks = "Oceny";
const Female = "";
const File = "Plik";
const Files = "Pliki";
const Filter = "Filtr";
const Filters = "Filtry";
const Folder = "";
const Folders = "";
const Form = "Formularz";
const Functions = "Funkcje";
const Gemini = "Gemini";
const Gender = "";
const General = "Ogólne";
const Generate = "Wygeneruj";
const Global = "Globalny";
const Gravatar = "";
const Group = "Grupa";
const Groups = "Grupy";
const H1 = "";
const H2 = "";
const H3 = "";
const Headers = "";
const Height = "";
const Help = "Pomoc";
const Hide = "Ukryj";
const High = "";
const Home = "Dom";
const Host = "Serwer";
const HTML = "";
const ID = "ID";
const Image = "Obraz";
const Images = "Obrazy";
const Import = "";
const Include = "Włączyć";
const Info = "Informacje";
const Initials = "";
const Input = "";
const Insert = "";
const Integration = "";
const Integrations = "";
const Interface = "Interfejs";
const Italic = "Pochylenie";
const January = "Styczeń";
const July = "Lipiec";
const June = "Czerwiec";
const Key = "Klucz";
const Knowledge = "Wiedza";
const Label = "Nazwa serwera";
const Language = "Język";
const LDAP = "LDAP";
const Leaderboard = "Tablica wyników";
const Legacy = "";
const lexical = "";
const License = "Licencja";
const Light = "Jasny";
const Loader = "";
const local = "";
const Local = "Lokalny";
const Lost = "Przegrał";
const Low = "";
const LTR = "LTR";
const Male = "";
const Manage = "Zarządzaj";
const March = "Marzec";
const Markdown = "";
const May = "Maj";
const MBR = "";
const MCP = "";
const Medium = "";
const Memory = "Pamięć";
const Message = "";
const MinerU = "";
const MistralAI = "";
const Model = "Model";
const Models = "Modele";
const More = "Więcej";
const Move = "";
const Name = "Nazwa";
const Native = "Rodzimy";
const None = "Brak";
const Note = "";
const Notes = "Notatki";
const Notifications = "Powiadomienia";
const November = "Listopad";
const OAuth = "";
const October = "Październik";
const Off = "Wyłączone";
const Ollama = "Ollama";
const On = "Włączone";
const OneDrive = "";
const OpenAI = "OpenAI";
const OpenAPI = "";
const Optional = "";
const or = "lub";
const Other = "Pozostałe";
const OUTPUT = "WYNIKI";
const Overview = "Przegląd";
const page = "strona";
const Paginate = "";
const Parameters = "Parametry";
const Password = "Hasło";
const pending = "oczekiwanie";
const Pending = "";
const Permissions = "Uprawnienia";
const Personalization = "Personalizacja";
const Pin = "Przypnij";
const Pinned = "Przypięty";
const Pipe = "";
const Pipelines = "Przepływy";
const Playground = "Plac zabaw";
const Port = "Port";
const Preview = "Podgląd";
const Private = "Prywatne";
const Profile = "Profil";
const Prompt = "Wprowadź prompt: ";
const Prompts = "Prompty";
const Public = "Publiczne";
const Querying = "";
const Rating = "Ocena";
const Read = "Czytaj";
const Reason = "Powód";
const Record = "Nagraj";
const Regenerate = "Wygeneruj ponownie";
const Registered = "";
const Reindex = "";
const Releases = "Wydania";
const Relevance = "Trafność";
const Remove = "Usuń";
const Rename = "Zmień nazwę";
const Reply = "";
const required = "";
const Reset = "Resetuj";
const Response = "";
const Result = "Wynik";
const RESULT = "Wynik";
const Retrieval = "";
const RK = "RK";
const Role = "Rola";
const RTL = "RTL";
const Run = "Uruchom";
const Running = "Uruchomiono";
const Save = "Zapisz";
const Saved = "Zapisano";
const Search = "Szukaj";
const Searching = "";
const Seed = "Seed";
const Select = "";
const semantic = "";
const Send = "Wyślij";
const September = "Wrzesień";
const Session = "";
const Setting = "";
const Settings = "Ustawienia";
const Share = "Udostępnij";
const Show = "Wyświetl";
const Sonar = "";
const Source = "Źródło";
const Steps = "";
const Stop = "Zatrzymaj";
const Strikethrough = "Przekreślenie";
const Success = "Sukces";
const Suggested = "Proponowane";
const Support = "Wsparcie";
const System = "System";
const Tag = "";
const Tags = "Tagi";
const Tasks = "Zadania";
const Temperature = "Temperatura";
const Theme = "Motyw";
const Thread = "Wątek";
const Tika = "Tika";
const Tiktoken = "Tiktoken";
const Title = "Tytuł";
const TLS = "TLS";
const Today = "Dzisiaj";
const Token = "Token";
const Tools = "Narzędzia";
const Transformers = "Transformery";
const Type = "Typ";
const UI = "Interfejs użytkownika";
const Underline = "Podkreślenie";
const Unknown = "";
const Unpin = "Odpiąć";
const Untagged = "Nie otagowane";
const Untitled = "";
const Update = "Aktualizacja";
const Updated = "Zaktualizowano";
const Upload = "Prześlij";
const URL = "Adres URL";
const Usage = "";
const user = "użytkownik";
const User = "Użytkownik";
const Username = "Nazwa użytkownika";
const Users = "Użytkownicy";
const Valves = "Zawory";
const variable = "zmienna";
const Version = "Wersja";
const Visibility = "Widoczność";
const Vision = "";
const Voice = "Głos";
const Warning = "Uwaga";
const Web = "Sieć internetowa";
const Width = "";
const Won = "Wygrał";
const Workspace = "Obszar roboczy";
const Write = "Napisz";
const Yesterday = "Wczoraj";
const You = "Ty";
const YouTube = "Youtube";
const translations = {
  "-1 for no limit, or a positive integer for a specific limit": "-1 oznacza brak limitu, lub dodatnia liczba całkowita dla konkretnego limitu",
  "'s', 'm', 'h', 'd', 'w' or '-1' for no expiration.": "'s', 'm', 'h', 'd', 'w' lub '-1' dla braku wygaśnięcia.",
  "(e.g. `sh webui.sh --api --api-auth username_password`)": "(np. `sh webui.sh --api --api-auth username_password`)>",
  "(e.g. `sh webui.sh --api`)": "(np. `sh webui.sh --api`)",
  "(latest)": "(najnowszy)",
  "(leave blank for to use commercial endpoint)": "",
  "[Last] dddd [at] h:mm A": "",
  "[Today at] h:mm A": "[Dziś o] h:mm A",
  "[Yesterday at] h:mm A": "[Wczoraj o] h:mm A",
  "{{ models }}": "{{ models }}",
  "{{COUNT}} Available Tools": "{{COUNT}} dostępnych narzędzi",
  "{{COUNT}} characters": "{{COUNT}} znaków",
  "{{COUNT}} extracted lines": "",
  "{{COUNT}} hidden lines": "{{COUNT}} ukrytych linii",
  "{{COUNT}} Replies": "{{COUNT}} odpowiedzi",
  "{{COUNT}} Sources": "",
  "{{COUNT}} words": "{{COUNT}} słów",
  "{{LOCALIZED_DATE}} at {{LOCALIZED_TIME}}": "",
  "{{model}} download has been canceled": "",
  "{{user}}'s Chats": "Czaty użytkownika {{user}}",
  "{{webUIName}} Backend Required": "Backend dla {{webUIName}} jest wymagany",
  "*Prompt node ID(s) are required for image generation": "Wymagane są identyfikatory węzłów wyzwalających do generowania obrazów.",
  "1 Source": "",
  "A new version (v{{LATEST_VERSION}}) is now available.": "Dostępna jest nowa wersja (v{{LATEST_VERSION}}).",
  "A task model is used when performing tasks such as generating titles for chats and web search queries": "Model zadań jest wykorzystywany podczas realizacji zadań, takich jak generowanie tytułów rozmów i zapytań wyszukiwania internetowego.",
  "a user": "użytkownik",
  About,
  "Accept Autocomplete Generation\nJump to Prompt Variable": "",
  Access,
  "Access Control": "Kontrola dostępu",
  "Accessible to all users": "Dostępny dla wszystkich użytkowników",
  Account,
  "Account Activation Pending": "Aktywacja konta w toku",
  "Accurate information": "Precyzyjna informacja",
  Action,
  "Action not found": "",
  "Action Required for Chat Log Storage": "Wymagane działanie, aby zapisać dziennik czatu",
  Actions,
  Activate,
  'Activate this command by typing "/{{COMMAND}}" to chat input.': 'Aktywuj tę komendę, wpisując "/{{COMMAND}}" do pola wprowadzania czatu.',
  Active,
  "Active Users": "Aktywni użytkownicy",
  Add,
  "Add a model ID": "Dodaj identyfikator modelu",
  "Add a short description about what this model does": "Dodaj krótki opis działania tego modelu",
  "Add a tag": "Dodaj tag",
  "Add Arena Model": "Dodaj Model Arena",
  "Add Connection": "Dodaj połączenie",
  "Add Content": "Dodaj treść",
  "Add content here": "Dodaj tutaj treść",
  "Add Custom Parameter": "",
  "Add Custom Prompt": "",
  "Add Details": "",
  "Add Files": "Dodaj pliki",
  "Add Group": "Dodaj grupę",
  "Add Memory": "Dodaj pamięć",
  "Add Model": "Dodaj model",
  "Add Reaction": "Dodaj reakcję",
  "Add Tag": "Dodaj tag",
  "Add Tags": "Dodaj tagi",
  "Add text content": "Dodaj zawartość tekstową",
  "Add User": "Dodaj użytkownika",
  "Add User Group": "Dodaj grupę użytkowników",
  "Additional Config": "",
  'Additional configuration options for marker. This should be a JSON string with key-value pairs. For example, \'{"key": "value"}\'. Supported keys include: disable_links, keep_pageheader_in_output, keep_pagefooter_in_output, filter_blank_pages, drop_repeated_text, layout_coverage_threshold, merge_threshold, height_tolerance, gap_threshold, image_threshold, min_line_length, level_count, default_level': "",
  "Additional Parameters": "",
  "Adds filenames, titles, sections, and snippets into the BM25 text to improve lexical recall.": "",
  "Adjusting these settings will apply changes universally to all users.": "Dostosowanie tych ustawień spowoduje wprowadzenie zmian dla wszystkich użytkowników.",
  admin,
  Admin,
  "Admin Panel": "Panel administracyjny",
  "Admin Settings": "Ustawienia administratora",
  "Admins have access to all tools at all times; users need tools assigned per model in the workspace.": "Administratorzy mają dostęp do wszystkich narzędzi przez cały czas; użytkownicy muszą mieć przydzielone narzędzia dla każdego modelu w przestrzeni roboczej.",
  "Advanced Parameters": "Zaawansowane ustawienia",
  "Advanced parameters for MinerU parsing (enable_ocr, enable_formula, enable_table, language, model_version, page_ranges)": "",
  "Advanced Params": "Zaawansowane ustawienia",
  'After updating or changing the embedding model, you must reindex the knowledge base for the changes to take effect. You can do this using the "Reindex" button below.': "",
  AI,
  All,
  "All chats have been unarchived.": "",
  "All Documents": "Wszystkie dokumenty",
  "All models deleted successfully": "Wszystkie modele zostały usunięte pomyślnie.",
  "Allow Call": "Zezwól na tryb głosowy",
  "Allow Chat Controls": "Zezwól na dostęp do ustawień czatu",
  "Allow Chat Delete": "Zezwól na usunięcie czatu",
  "Allow Chat Deletion": "Zezwól na usuwanie czatu",
  "Allow Chat Edit": "Zezwól na edycję czatu",
  "Allow Chat Export": "Zezwól na eksportowanie",
  "Allow Chat Params": "",
  "Allow Chat Share": "Zezwól na udostępnianie",
  "Allow Chat System Prompt": "Zezwól na zmianę promptu systemowego dla czatu",
  "Allow Chat Valves": "",
  "Allow Continue Response": "",
  "Allow Delete Messages": "",
  "Allow File Upload": "Pozwól na przesyłanie plików",
  "Allow Group Sharing": "",
  "Allow Multiple Models in Chat": "Zezwól na wiele modeli w ramach jednego czatu",
  "Allow non-local voices": "Pozwól na głosy spoza lokalnej społeczności",
  "Allow Rate Response": "",
  "Allow Regenerate Response": "",
  "Allow Speech to Text": "Zezwól na transkrypcję",
  "Allow Temporary Chat": "Zezwól na tymczasową rozmowę",
  "Allow Text to Speech": "Zezwól na syntezator głosu",
  "Allow User Location": "Zezwól na lokalizację użytkownika",
  "Allow Voice Interruption in Call": "Zezwól na przerwanie połączenia głosowego",
  "Allowed Endpoints": "Dozwolone punkty końcowe",
  "Allowed File Extensions": "Dozwolone rozszerzenia plików",
  "Allowed file extensions for upload. Separate multiple extensions with commas. Leave empty for all file types.": "",
  "Already have an account?": "Czy masz już konto?",
  "Alternative to the top_p, and aims to ensure a balance of quality and variety. The parameter p represents the minimum probability for a token to be considered, relative to the probability of the most likely token. For example, with p=0.05 and the most likely token having a probability of 0.9, logits with a value less than 0.045 are filtered out.": "",
  Always,
  "Always Collapse Code Blocks": "Zawsze zwijaj bloki kodu",
  "Always Expand Details": "Zawsze rozwiń szczegóły",
  "Always Play Notification Sound": "",
  Amazing,
  "an assistant": "asystent",
  "An error occurred while fetching the explanation": "",
  Analytics,
  Analyzed,
  "Analyzing...": "Analizowanie...",
  and,
  "and {{COUNT}} more": "i {{COUNT}} więcej",
  "and create a new shared link.": "i utwórz nowy link współdzielony.",
  Android,
  "API Base URL": "Adres bazowy interfejsu API",
  "API Base URL for Datalab Marker service. Defaults to: https://www.datalab.to/api/v1/marker": "",
  "API Key": "Klucz API",
  "API Key created.": "Klucz API został utworzony.",
  "API Key Endpoint Restrictions": "Ograniczenia punktu końcowego klucza API",
  "API keys": "Klucze API",
  "API Keys": "",
  "API Mode": "",
  "API Version": "Wersja API",
  "API Version is required": "",
  "Application DN": "Konto techniczne - Format DN",
  "Application DN Password": "Hasło do konta technicznego",
  'applies to all users with the "user" role': 'dotyczy wszystkich użytkowników z rolą "user"',
  April,
  Archive,
  "Archive All Chats": "Archiwizuj wszystkie rozmowy",
  "Archived Chats": "Zarchiwizowane rozmowy",
  "archived-chat-export": "archiwizowany eksport czatu",
  "Are you sure you want to clear all memories? This action cannot be undone.": "Czy na pewno chcesz wyczyścić wszystkie wspomnienia? Tej akcji nie można cofnąć.",
  'Are you sure you want to delete "{{NAME}}"?': "",
  "Are you sure you want to delete this channel?": "Czy na pewno chcesz usunąć ten kanał?",
  "Are you sure you want to delete this message?": "Czy na pewno chcesz usunąć tę wiadomość?",
  "Are you sure you want to unarchive all archived chats?": "Czy na pewno chcesz przywrócić wszystkie zapisane rozmowy?",
  "Are you sure?": "Czy jesteś pewien?",
  "Arena Models": "Modele Areny",
  Artifacts,
  Ask,
  "Ask a question": "Zadaj pytanie",
  Assistant,
  "Async Embedding Processing": "",
  "Attach File From Knowledge": "",
  "Attach Knowledge": "",
  "Attach Notes": "",
  "Attach Webpage": "",
  "Attention to detail": "Dbałość o szczegóły",
  "Attribute for Mail": "Atrybut dla poczty",
  "Attribute for Username": "Atrybut dla nazwy użytkownika",
  Audio,
  August,
  Auth,
  Authenticate,
  Authentication,
  Auto,
  "Auto-Copy Response to Clipboard": "Automatyczne kopiowanie odpowiedzi do schowka",
  "Auto-playback response": "Automatyczna odpowiedź na powtórzenie",
  "Autocomplete Generation": "Generowanie autouzupełniania",
  "Autocomplete Generation Input Max Length": "Maksymalna długość wejścia dla generowania autouzupełniania",
  Automatic1111,
  "AUTOMATIC1111 Api Auth String": "Automatic1111 - ciąg uwierzytelniania API",
  "AUTOMATIC1111 Base URL": "Automatic1111 - Domyślny adres URL",
  "AUTOMATIC1111 Base URL is required.": "Automatic1111 - Adres podstawowy jest wymagany.",
  "Available list": "Dostępna lista",
  "Available Tools": "Dostępne narzędzia",
  "available users": "dostępni użytkownicy",
  "available!": "dostępny!",
  Away,
  Awful,
  "Azure AI Speech": "Azure AI Speech",
  "Azure OpenAI": "Azure OpenAI",
  "Azure Region": "Region Azure",
  Back,
  "Bad Response": "Nieprawidłowa odpowiedź",
  Banners,
  "Base Model (From)": "Model bazowy (od)",
  "Base Model List Cache speeds up access by fetching base models only at startup or on settings save—faster, but may not show recent base model changes.": "",
  Bearer,
  before,
  "Being lazy": "Jest leniwy.",
  Beta,
  "Bing Search V7 Endpoint": "Wyszukiwarka Bing V7 Endpoint",
  "Bing Search V7 Subscription Key": "Klucz subskrypcji Wyszukiwarki Bing V7",
  Bio,
  "Birth Date": "",
  "BM25 Weight": "",
  "Bocha Search API Key": "Klucz API Bocha Search",
  Bold,
  "Boosting or penalizing specific tokens for constrained responses. Bias values will be clamped between -100 and 100 (inclusive). (Default: none)": "",
  "Brave Search API Key": "Klucz API wyszukiwania Brave",
  "Bullet List": "Lista punktowana",
  "Button ID": "",
  "Button Label": "",
  "Button Prompt": "",
  "By {{name}}": "Przez {{name}}",
  "Bypass Embedding and Retrieval": "",
  "Bypass Web Loader": "",
  "Cache Base Model List": "",
  Calendar,
  Call,
  "Call feature is not supported when using Web STT engine": "Funkcja rozmowy nie jest obsługiwana podczas korzystania z silnika Web STT",
  Camera,
  Cancel,
  Capabilities,
  Capture,
  "Capture Audio": "",
  "Certificate Path": "Ścieżka certyfikatu",
  "Change Password": "Zmień hasło",
  Channel,
  "Channel deleted successfully": "",
  "Channel Name": "Nazwa kanału",
  "Channel name cannot be empty.": "",
  "Channel updated successfully": "",
  Channels,
  Character,
  "Character limit for autocomplete generation input": "Limit znaków dla wejścia generowanego automatycznie",
  "Chart new frontiers": "Odkrywaj nowe horyzonty",
  Chat,
  "Chat Background Image": "Obraz tła czatu",
  "Chat Bubble UI": "Okno dialogowe czatu",
  "Chat Controls": "Ustawienia czatu",
  "Chat Conversation": "",
  "Chat direction": "Kierunek rozmowy czatu",
  "Chat ID": "",
  "Chat moved successfully": "",
  "Chat Overview": "Przegląd czatu",
  "Chat Permissions": "Uprawnienia do czatu",
  "Chat Tags Auto-Generation": "Automatyczne generowanie tagów czatu",
  Chats,
  "Check Again": "Sprawdź ponownie",
  "Check for updates": "Sprawdź dostępność aktualizacji",
  "Checking for updates...": "Sprawdzanie dostępności aktualizacji...",
  "Choose a model before saving...": "Wybierz model przed zapisaniem.",
  "Chunk Overlap": "Nakładanie się bloków",
  "Chunk Size": "Rozmiar bloku",
  Ciphers,
  Citation,
  Citations,
  "Clear memory": "Wyczyść pamięć",
  "Clear Memory": "Wyczyść pamięć",
  "click here": "kliknij tutaj",
  "Click here for filter guides.": "Kliknij tutaj, aby uzyskać podpowiedź do filtrów.",
  "Click here for help.": "Kliknij tutaj, aby uzyskać pomoc.",
  "Click here to": "Kliknij tutaj, aby przejść do",
  "Click here to download user import template file.": "Kliknij tutaj, aby pobrać szablon pliku importu użytkownika.",
  "Click here to learn more about faster-whisper and see the available models.": "Kliknij tutaj, aby dowiedzieć się więcej o faster-whisper i zobaczyć dostępne modele.",
  "Click here to see available models.": "Kliknij tutaj, aby zobaczyć dostępne modele.",
  "Click here to select": "Kliknij tutaj, aby wybrać",
  "Click here to select a csv file.": "Kliknij tutaj, aby wybrać plik CSV.",
  "Click here to select a py file.": "Kliknij tutaj, aby wybrać plik py.",
  "Click here to upload a workflow.json file.": "Kliknij tutaj, aby przesłać plik workflow.json.",
  "click here.": "kliknij tutaj.",
  "Click on the user role button to change a user's role.": "Kliknij przycisk roli użytkownika, aby zmienić jego uprawnienia.",
  "Clipboard write permission denied. Please check your browser settings to grant the necessary access.": "Nie można było skopiować do schowka. Sprawdź ustawienia przeglądarki, aby przyznać wymagany dostęp.",
  Clone,
  "Clone Chat": "Sklonuj czat",
  "Clone of {{TITLE}}": "Klon {{TITLE}}",
  Close,
  "Close Banner": "",
  "Close Configure Connection Modal": "",
  "Close modal": "",
  "Close Modal": "",
  "Close settings modal": "",
  "Close Sidebar": "",
  cloud,
  "CMU ARCTIC speaker embedding name": "",
  "Code Block": "Blok kodu",
  "Code Editor": "",
  "Code execution": "Wykonanie kodu",
  "Code Execution": "Wykonanie kodu",
  "Code Execution Engine": "Silnik wykonawczy kodu",
  "Code Execution Timeout": "Limit czasu wykonywania kodu",
  "Code formatted successfully": "Kod został sformatowany pomyślnie.",
  "Code Interpreter": "Interpreter kodu",
  "Code Interpreter Engine": "Silnik interpretatora kodu",
  "Code Interpreter Prompt Template": "Szablon promptu interpretera kodu",
  Collapse,
  Collection,
  Color,
  ComfyUI,
  "ComfyUI API Key": "Klucz API ComfyUI",
  "ComfyUI Base URL": "Adres URL bazowy ComfyUI",
  "ComfyUI Base URL is required.": "Adres URL bazowy ComfyUI jest wymagany.",
  "ComfyUI Workflow": "Komfortowy przepływ pracy ComfyUI",
  "ComfyUI Workflow Nodes": "Komfortowe węzły przepływu pracy ComfyUI",
  "Comma separated Node Ids (e.g. 1 or 1,2)": "",
  Command,
  Comment,
  Completions,
  "Compress Images in Channels": "",
  "Concurrent Requests": "Równoległe żądania",
  "Config imported successfully": "",
  Configure,
  Confirm,
  "Confirm Password": "Potwierdź hasło",
  "Confirm your action": "Potwierdź swoją akcję",
  "Confirm your new password": "Potwierdź nowe hasło",
  "Confirm Your Password": "",
  "Connect to your own OpenAI compatible API endpoints.": "Połącz się ze swoimi własnymi punktami końcowymi API kompatybilnego z OpenAI.",
  "Connect to your own OpenAPI compatible external tool servers.": "",
  "Connection failed": "Połączenie nieudane",
  "Connection successful": "Połączenie udane",
  "Connection Type": "Typ połączenia",
  Connections,
  "Connections saved successfully": "Połączenia zapisane pomyślnie",
  "Connections settings updated": "Ustawienia połączeń zaktualizowane",
  "Constrains effort on reasoning for reasoning models. Only applicable to reasoning models from specific providers that support reasoning effort.": "",
  "Contact Admin for WebUI Access": "Skontaktuj się z administratorem, aby uzyskać dostęp do WebUI.",
  Content,
  "Content Extraction Engine": "Silnik ekstrakcji treści",
  "Continue Response": "Kontynuuj odpowiedź",
  "Continue with {{provider}}": "Kontynuuj z {{provider}}",
  "Continue with Email": "Kontynuuj z e-mailem",
  "Continue with LDAP": "Kontynuuj z LDAP",
  "Control how message text is split for TTS requests. 'Punctuation' splits into sentences, 'paragraphs' splits into paragraphs, and 'none' keeps the message as a single string.": "Kontroluj sposób dzielenia tekstu wiadomości dla żądań TTS. 'Punctuation' dzieli na zdania, 'paragraphs' dzieli na akapity, a 'none' pozostawia wiadomość jako pojedynczy ciąg znaków.",
  "Control the repetition of token sequences in the generated text. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 1.1) will be more lenient. At 1, it is disabled.": "",
  Controls,
  "Controls the balance between coherence and diversity of the output. A lower value will result in more focused and coherent text.": "",
  "Conversation saved successfully": "",
  Copied,
  "Copied link to clipboard": "Skopiowano link do schowka",
  "Copied shared chat URL to clipboard!": "Skopiowano udostępniony URL czatu do schowka!",
  "Copied to clipboard": "Skopiowane do schowka",
  Copy,
  "Copy Formatted Text": "Skopiuj sformatowany tekst",
  "Copy Last Code Block": "",
  "Copy Last Response": "",
  "Copy link": "Skopiuj link",
  "Copy Link": "Skopiuj link",
  "Copy to clipboard": "Wklej do schowka",
  "Copying to clipboard was successful!": "Kopiowanie do schowka zakończyło się sukcesem!",
  "CORS must be properly configured by the provider to allow requests from Open WebUI.": "CORS musi być prawidłowo skonfigurowany przez dostawcę, aby umożliwić żądania z Open WebUI.",
  Create,
  "Create a knowledge base": "Utwórz bazę wiedzy",
  "Create a model": "Utwórz model",
  "Create a new note": "",
  "Create Account": "Utwórz konto",
  "Create Admin Account": "Utwórz konto administratora",
  "Create Channel": "Utwórz kanał",
  "Create Folder": "Utwórz folder",
  "Create Group": "Utwórz grupę",
  "Create Image": "",
  "Create Knowledge": "Utwórz wiedzę",
  "Create Model": "",
  "Create new key": "Utwórz nowy klucz",
  "Create new secret key": "Utwórz nowy secret key",
  "Create Note": "Utwórz notatkę",
  "Create your first note by clicking on the plus button below.": "Utwórz swoją pierwszą notatkę klikając w plus poniżej.",
  "Created at": "Utworzono o",
  "Created At": "Utworzono o",
  "Created by": "Stworzone przez",
  "Created by you": "",
  "CSV Import": "Import CSV",
  "Ctrl+Enter to Send": "Ctrl+Enter aby wysłać",
  "Current Model": "Aktualny model",
  "Current Password": "Aktualne hasło",
  Custom,
  "Custom description enabled": "",
  "Custom Parameter Name": "",
  "Custom Parameter Value": "",
  "Danger Zone": "",
  Dark,
  "Data Controls": "",
  Database,
  "Datalab Marker API": "",
  "DD/MM/YYYY": "",
  December,
  "Decrease UI Scale": "",
  Deepgram,
  Default,
  "Default (Open AI)": "Domyślny (Open AI)",
  "Default (SentenceTransformers)": "Domyślny (SentenceTransformers)",
  "Default action buttons will be used.": "",
  "Default description enabled": "",
  "Default Features": "",
  "Default Filters": "",
  "Default Group": "",
  "Default mode works with a wider range of models by calling tools once before execution. Native mode leverages the model's built-in tool-calling capabilities, but requires the model to inherently support this feature.": "Tryb domyślny współpracuje z szerszym zakresem modeli, wywołując narzędzia raz przed wykonaniem. Tryb natywny wykorzystuje wbudowane możliwości wywoływania narzędzi przez model, ale wymaga, aby model wewnętrznie obsługiwał tę funkcję.",
  "Default Model": "Model domyślny",
  "Default model updated": "Domyślny model został zaktualizowany",
  "Default Models": "Domyślne modele",
  "Default permissions": "Domyślne uprawnienia",
  "Default permissions updated successfully": "Domyślne uprawnienia zaktualizowane pomyślnie",
  "Default Pinned Models": "",
  "Default Prompt Suggestions": "Domyślne propozycje promptów",
  "Default to 389 or 636 if TLS is enabled": "Domyślnie użyj 389 lub 636, jeśli TLS jest włączony",
  "Default to ALL": "Domyślne dla wszystkich",
  "Default to segmented retrieval for focused and relevant content extraction, this is recommended for most cases.": "",
  "Default User Role": "Domyślna rola użytkownika",
  Delete,
  "Delete a model": "Usuń model",
  "Delete All Chats": "Usuń wszystkie rozmowy",
  "Delete all contents inside this folder": "",
  "Delete All Models": "Usuń Wszystkie Modele",
  "Delete Chat": "Usuń rozmowę",
  "Delete chat?": "Usunąć czat?",
  "Delete folder?": "Usunąć folder?",
  "Delete function?": "Czy na pewno chcesz usunąć funkcję?",
  "Delete Message": "Usuń wiadomość",
  "Delete message?": "Usunąć wiadomość?",
  "Delete Model": "",
  "Delete note?": "Usunąć notatkę?",
  "Delete prompt?": "Czy chcesz usunąć prompt?",
  "delete this link": "usuń to połączenie",
  "Delete tool?": "Usunąć narzędzie?",
  "Delete User": "Usuń użytkownika",
  "Deleted {{deleteModelTag}}": "Usunieto {{deleteModelTag}}",
  "Deleted {{name}}": "Usunięto użytkownika {{name}}",
  "Deleted User": "Usunięty użytkownik",
  "Deployment names are required for Azure OpenAI": "",
  "Describe your knowledge base and objectives": "Opisz swoją bazę wiedzy i cele",
  Description,
  "Detect Artifacts Automatically": "",
  Dictate,
  "Didn't fully follow instructions": "Nie wykonał w pełni instrukcji",
  Direct,
  "Direct Connections": "Połączenia bezpośrednie",
  "Direct Connections allow users to connect to their own OpenAI compatible API endpoints.": "Połączenia bezpośrednie umożliwiają użytkownikom łączenie się z własnymi końcówkami API kompatybilnymi z OpenAI.",
  "Direct Tool Servers": "",
  "Directory selection was cancelled": "",
  "Disable Code Interpreter": "",
  "Disable Image Extraction": "",
  "Disable image extraction from the PDF. If Use LLM is enabled, images will be automatically captioned. Defaults to False.": "",
  Disabled,
  "Discover a function": "Odkrywaj funkcję",
  "Discover a model": "Odkrywaj model",
  "Discover a prompt": "Odkrywaj prompty",
  "Discover a tool": "Odkrywaj narzędzia",
  "Discover how to use Open WebUI and seek support from the community.": "Odkryj, jak korzystać z Open WebUI i szukaj wsparcia w społeczności.",
  "Discover wonders": "Odkrywaj cuda",
  "Discover, download, and explore custom functions": "Odkryj, pobierz i eksploruj niestandardowe funkcje",
  "Discover, download, and explore custom prompts": "Odkryj, pobierz i eksploruj niestandardowe prompty",
  "Discover, download, and explore custom tools": "Odkryj, pobierz i eksploruj niestandardowe narzędzia",
  "Discover, download, and explore model presets": "Odkryj, pobierz i badaj ustawienia modeli",
  Display,
  "Display chat title in tab": "",
  "Display Emoji in Call": "Wyświetl emoji w połączeniu",
  "Display Multi-model Responses in Tabs": "",
  "Display the username instead of You in the Chat": "Wyświetl nazwę użytkownika zamiast 'You' w czacie.",
  "Displays citations in the response": "Wyświetla cytowania w odpowiedzi",
  "Displays status updates (e.g., web search progress) in the response": "",
  "Dive into knowledge": "Zanurz się w wiedzy",
  "Do not install functions from sources you do not fully trust.": "Nie instaluj funkcji ze źródeł, którym nie ufasz w pełni.",
  "Do not install tools from sources you do not fully trust.": "Nie instaluj narzędzi ze źródeł, którym nie ufasz w pełni.",
  Docling,
  "Docling Parameters": "",
  "Docling Server URL required.": "",
  Document,
  "Document Intelligence": "",
  "Document Intelligence endpoint required.": "",
  Documentation,
  Documents,
  "does not make any external connections, and your data stays securely on your locally hosted server.": "nie nawiązuje żadnych zewnętrznych połączeń, a Twoje dane pozostają bezpiecznie na Twoim lokalnie hostowanym serwerze.",
  "Domain Filter List": "Lista filtrów domeny",
  "don't fetch random pipelines from sources you don't trust.": "Nie pobieraj losowych pipelines ze źródeł, którym nie ufasz.",
  "Don't have an account?": "Nie masz konta?",
  "don't install random functions from sources you don't trust.": "Nie instaluj losowych funkcji z niezaufanych źródeł.",
  "don't install random tools from sources you don't trust.": "Nie instaluj przypadkowych narzędzi z niezaufanych źródeł.",
  "Don't like the style": "Nie przypadł mi do gustu styl",
  Done,
  Download,
  "Download & Delete": "Pobierz i usuń",
  "Download as SVG": "Pobierz jako SVG",
  "Download canceled": "Pobieranie anulowane",
  "Download Database": "Pobierz bazę danych",
  "Drag and drop a file to upload or select a file to view": "Przeciągnij i upuść plik, aby go przesłać lub wybierz plik, aby go wyświetlić.",
  Draw,
  "Drop any files here to upload": "",
  "e.g. '30s','10m'. Valid time units are 's', 'm', 'h'.": "np. '30s', '10m'. Poprawne jednostki czasu to: 's' (sekunda), 'm' (minuta), 'h' (godzina).",
  'e.g. "json" or a JSON schema': "",
  "e.g. 60": "",
  "e.g. A filter to remove profanity from text": "np. Filtr do usuwania wulgaryzmów z tekstu",
  "e.g. en": "",
  "e.g. My Filter": "np. Mój filtr",
  "e.g. My Tools": "np. Moje narzędzia",
  "e.g. my_filter": "np. moj_filtr",
  "e.g. my_tools": "np. moje_narzędzia",
  "e.g. pdf, docx, txt": "",
  "e.g. Tools for performing various operations": "np. Narzędzia do wykonywania różnych operacji",
  "e.g., 3, 4, 5 (leave blank for default)": "np. 3, 4, 5 (zostaw puste dla domyślnego)",
  "e.g., audio/wav,audio/mpeg,video/* (leave blank for defaults)": "",
  "e.g., en-US,ja-JP (leave blank for auto-detect)": "",
  "e.g., westus (leave blank for eastus)": "",
  Edit,
  "Edit Arena Model": "Edytuj model arenę",
  "Edit Channel": "Edytuj kanał",
  "Edit Connection": "Edytuj połączenie",
  "Edit Default Permissions": "Edytuj domyślne uprawnienia",
  "Edit Folder": "Edytuj folder",
  "Edit Image": "",
  "Edit Last Message": "",
  "Edit Memory": "Edytuj pamięć",
  "Edit User": "Edytuj profil użytkownika",
  "Edit User Group": "Edytuj grupa użytkowników",
  "Edit workflow.json content": "",
  edited,
  Edited,
  Editing,
  Eject,
  ElevenLabs,
  Email,
  "Embark on adventures": "Wyruszaj na przygody",
  Embedding,
  "Embedding Batch Size": "Rozmiar partii wstępnego przetwarzania",
  "Embedding Model": "Model osadzania",
  "Embedding Model Engine": "Silnik modelu osadzania",
  "Enable API Keys": "",
  "Enable autocomplete generation for chat messages": "Włącz generowanie autouzupełniania dla wiadomości czatu",
  "Enable Code Execution": "Włącz wykonywanie kodu",
  "Enable Code Interpreter": "Włącz interpreter kodu",
  "Enable Community Sharing": "Włączanie udostępniania społecznościowego",
  "Enable Memory Locking (mlock) to prevent model data from being swapped out of RAM. This option locks the model's working set of pages into RAM, ensuring that they will not be swapped out to disk. This can help maintain performance by avoiding page faults and ensuring fast data access.": "Włącz blokowanie pamięci (mlock), aby zapobiec swappingowi danych modelu z RAM. Ta opcja blokuje zbiór stron roboczych modelu w RAM, co gwarantuje, że nie będą one wymieniane na dysk. Może to pomóc w utrzymaniu wydajności poprzez unikanie błędów strony i zapewnienie szybkiego dostępu do danych.",
  "Enable Memory Mapping (mmap) to load model data. This option allows the system to use disk storage as an extension of RAM by treating disk files as if they were in RAM. This can improve model performance by allowing for faster data access. However, it may not work correctly with all systems and can consume a significant amount of disk space.": "Włącz mapowanie pamięci (mmap), aby załadować dane modelu. Ta opcja pozwala systemowi traktować pliki dysku jako rozszerzenie RAM, co może poprawić wydajność modelu przez umożliwienie szybszego dostępu do danych. Należy jednak pamiętać, że ta funkcja może nie działać poprawnie ze wszystkimi systemami i zużywać znaczną ilość przestrzeni dyskowej.",
  "Enable Message Rating": "Włącz ocenianie wiadomości",
  "Enable Mirostat sampling for controlling perplexity.": "",
  "Enable New Sign Ups": "Włącz nowe rejestracje",
  'Enable, disable, or customize the reasoning tags used by the model. "Enabled" uses default tags, "Disabled" turns off reasoning tags, and "Custom" lets you specify your own start and end tags.': "",
  Enabled,
  "End Tag": "",
  "Endpoint URL": "",
  "Enforce Temporary Chat": "",
  Enhance,
  "Enrich Hybrid Search Text": "",
  "Ensure your CSV file includes 4 columns in this order: Name, Email, Password, Role.": "Upewnij się, że twój plik CSV zawiera dokładnie 4 kolumny w następującej kolejności: Nazwa, Email, Hasło, Rola.",
  "Enter {{role}} message here": "Wprowadź komunikat dla {{role}} tutaj",
  "Enter a detail about yourself for your LLMs to recall": "Podaj informacje o sobie, aby LLMs mogły je przypomnieć.",
  "Enter a title for the pending user info overlay. Leave empty for default.": "",
  "Enter a watermark for the response. Leave empty for none.": "",
  "Enter additional headers in JSON format": "",
  'Enter additional headers in JSON format (e.g. {"X-Custom-Header": "value"}': "",
  "Enter additional parameters in JSON format": "",
  "Enter api auth string (e.g. username:password)": "Wprowadź ciąg uwierzytelniania API (np. nazwa użytkownika:hasło)",
  "Enter Application DN": "Wprowadź nazwę konta technicznego - Format DN",
  "Enter Application DN Password": "Wprowadź hasło do konta technicznego",
  "Enter Bing Search V7 Endpoint": "Wprowadź endpoint wyszukiwania Bing V7",
  "Enter Bing Search V7 Subscription Key": "Wprowadź klucz subskrypcji Bing Search V7",
  "Enter Bocha Search API Key": "Wprowadź klucz API Bocha Search",
  "Enter Brave Search API Key": "Wprowadź klucz API Brave Search",
  "Enter certificate path": "Wprowadź ścieżkę do certyfikatu",
  "Enter Chunk Overlap": "Wprowadź nakładanie się bloków",
  "Enter Chunk Size": "Wprowadź wielkość bloku",
  'Enter comma-separated "token:bias_value" pairs (example: 5432:100, 413:-100)': "",
  "Enter content for the pending user info overlay. Leave empty for default.": "",
  "Enter coordinates (e.g. 51.505, -0.09)": "",
  "Enter Datalab Marker API Base URL": "",
  "Enter Datalab Marker API Key": "",
  "Enter description": "Wprowadź opis",
  "Enter Docling API Key": "",
  "Enter Docling Server URL": "",
  "Enter Document Intelligence Endpoint": "",
  "Enter Document Intelligence Key": "",
  "Enter domains separated by commas (e.g., example.com,site.org,!excludedsite.com)": "",
  "Enter Exa API Key": "Wprowadź klucz API Exa",
  "Enter External Document Loader API Key": "",
  "Enter External Document Loader URL": "",
  "Enter External Web Loader API Key": "",
  "Enter External Web Loader URL": "",
  "Enter External Web Search API Key": "",
  "Enter External Web Search URL": "",
  "Enter Firecrawl API Base URL": "",
  "Enter Firecrawl API Key": "",
  "Enter folder name": "Wprowadź nazwę folderu",
  "Enter function name filter list (e.g. func1, !func2)": "",
  "Enter Github Raw URL": "Wprowadź surowy adres URL usługi GitHub",
  "Enter Google PSE API Key": "Wprowadź klucz API Google PSE",
  "Enter Google PSE Engine Id": "Wprowadź identyfikator urządzenia Google PSE",
  "Enter hex color (e.g. #FF0000)": "",
  "Enter ID": "",
  "Enter Image Size (e.g. 512x512)": "Podaj rozmiar obrazu (np. 512x512)",
  "Enter Jina API Key": "Wprowadź klucz API Jiny",
  'Enter JSON config (e.g., {"disable_links": true})': "",
  "Enter Jupyter Password": "Wprowadź hasło Jupyter",
  "Enter Jupyter Token": "Wprowadź token Jupyter",
  "Enter Jupyter URL": "Podaj adres URL Jupytera",
  "Enter Kagi Search API Key": "Wprowadź klucz wyszukiwania Kagi",
  "Enter Key Behavior": "Zachowanie klawisza Enter",
  "Enter language codes": "Wprowadź kody języków",
  "Enter MinerU API Key": "",
  "Enter Mistral API Base URL": "",
  "Enter Mistral API Key": "",
  "Enter Model ID": "Wprowadź ID modelu",
  "Enter model tag (e.g. {{modelTag}})": "Wprowadź znacznik modelu (np. {{modelTag}})",
  "Enter Mojeek Search API Key": "Wprowadź klucz API Mojeek Search",
  "Enter name": "",
  "Enter New Password": "",
  "Enter Number of Steps (e.g. 50)": "Podaj liczbę kroków (np. 50)",
  "Enter Ollama Cloud API Key": "",
  "Enter Perplexity API Key": "Klucz API Perplexity",
  "Enter Perplexity Search API URL": "",
  "Enter Playwright Timeout": "",
  "Enter Playwright WebSocket URL": "",
  "Enter proxy URL (e.g. https://user:password@host:port)": "Podaj adres URL proxy (np. https://user:password@host:port)",
  "Enter reasoning effort": "Podaj powód wysiłku",
  "Enter Score": "Wprowadź wynik",
  "Enter SearchApi API Key": "Wprowadź klucz API SearchApi",
  "Enter SearchApi Engine": "Wprowadź zapytanie do silnika wyszukiwania SearchApi",
  "Enter Searxng Query URL": "Wprowadź adres URL zapytania wyszukiwania Searxng",
  "Enter Seed": "Wprowadź Seed",
  "Enter SerpApi API Key": "Wprowadź klucz API SerpApi",
  "Enter SerpApi Engine": "Wprowadź silnik SerpApi",
  "Enter Serper API Key": "Wprowadź klucz API Serper",
  "Enter Serply API Key": "Wprowadź klucz API Serply",
  "Enter Serpstack API Key": "Wprowadź klucz API Serpstack",
  "Enter server host": "Wprowadź nazwę hosta serwera",
  "Enter server label": "Wprowadź etykietę serwera",
  "Enter server port": "Wprowadź numer portu serwera",
  "Enter Sougou Search API sID": "",
  "Enter Sougou Search API SK": "",
  "Enter stop sequence": "Wprowadź sekwencję stop",
  "Enter system prompt": "Wprowadź prompt systemowy",
  "Enter system prompt here": "",
  "Enter Tavily API Key": "Wprowadź klucz API Tavily",
  "Enter Tavily Extract Depth": "",
  "Enter the public URL of your WebUI. This URL will be used to generate links in the notifications.": "Wprowadź publiczny adres URL Twojego WebUI. Ten adres URL zostanie użyty do generowania linków w powiadomieniach.",
  "Enter the URL of the function to import": "",
  "Enter the URL to import": "",
  "Enter Tika Server URL": "Wprowadź adres URL serwera Tika",
  "Enter timeout in seconds": "",
  "Enter to Send": "Enter aby wysłać",
  "Enter Top K": "Wprowadź {Top K}",
  "Enter Top K Reranker": "",
  "Enter URL (e.g. http://127.0.0.1:7860/)": "Podaj adres URL (np. http://127.0.0.1:7860/)",
  "Enter URL (e.g. http://localhost:11434)": "Wprowadź adres URL (np. http://localhost:11434)",
  "Enter value": "",
  "Enter value (true/false)": "",
  "Enter Yacy Password": "",
  "Enter Yacy URL (e.g. http://yacy.example.com:8090)": "",
  "Enter Yacy Username": "",
  "Enter your code here...": "Wpisz tutaj swój kod...",
  "Enter your current password": "Wprowadź swoje aktualne hasło",
  "Enter Your Email": "Podaj swój adres e-mail",
  "Enter Your Full Name": "Podaj swoje pełne imię i nazwisko",
  "Enter your gender": "",
  "Enter your message": "Wprowadź swój komunikat",
  "Enter your name": "",
  "Enter Your Name": "",
  "Enter your new password": "Wprowadź nowe hasło",
  "Enter Your Password": "Wprowadź swoje hasło",
  "Enter Your Role": "Podaj swoją rolę",
  "Enter Your Username": "Podaj swoją nazwę użytkownika",
  "Enter your webhook URL": "Podaj adres URL swojego webhooka",
  "Entra ID": "",
  "Error": "Błąd",
  ERROR,
  "Error accessing directory": "",
  "Error accessing Google Drive: {{error}}": "Błąd podczas dostępu do Google Drive: {{error}}",
  "Error accessing media devices.": "",
  "Error starting recording.": "",
  "Error unloading model: {{error}}": "",
  "Error uploading file: {{error}}": "Błąd podczas przesyłania pliku: {{error}}",
  "Error: A model with the ID '{{modelId}}' already exists. Please select a different ID to proceed.": "",
  "Error: Model ID cannot be empty. Please enter a valid ID to proceed.": "",
  Evaluations,
  Everyone,
  "Exa API Key": "Klucz API Exa",
  "Example: (&(objectClass=inetOrgPerson)(uid=%s))": "Przykład: (&(objectClass=inetOrgPerson)(uid=%s))",
  "Example: ALL": "Przykład: ALL",
  "Example: mail": "Przykład: mail",
  "Example: ou=users,dc=foo,dc=example": "Przykład: ou=users,dc=foo,dc=example",
  "Example: sAMAccountName or uid or userPrincipalName": "Przykład: sAMAccountName lub uid lub userPrincipalName",
  "Exceeded the number of seats in your license. Please contact support to increase the number of seats.": "Przekroczono liczbę stanowisk w licencji. Skontaktuj się z pomocą techniczną, aby zwiększyć liczbę stanowisk.",
  Exclude,
  "Execute code for analysis": "Wykonaj kod do analizy",
  "Executing **{{NAME}}**...": "",
  Expand,
  Experimental,
  Explain,
  "Explore the cosmos": "Odkrywaj kosmos",
  Export,
  "Export All Archived Chats": "Wyeksportuj wszystkie archiwalne rozmowy",
  "Export All Chats (All Users)": "Eksportuj wszystkie rozmowy (wszyscy użytkownicy)",
  "Export chat (.json)": "Eksport czatu (.json)",
  "Export Chats": "Eksportuj rozmowy",
  "Export Config to JSON File": "Eksportuj konfigurację do pliku JSON",
  "Export Models": "",
  "Export Presets": "Wyeksportuj ustawienia domyślne",
  "Export Prompt Suggestions": "",
  "Export Prompts": "",
  "Export to CSV": "Eksport do CSV",
  "Export Tools": "",
  "Export Users": "",
  External,
  "External Document Loader URL required.": "",
  "External Task Model": "",
  "External Tools": "",
  "External Web Loader API Key": "",
  "External Web Loader URL": "",
  "External Web Search API Key": "",
  "External Web Search URL": "",
  "Fade Effect for Streaming Text": "",
  "Failed to add file.": "Nie udało się dodać pliku.",
  "Failed to connect to {{URL}} OpenAPI tool server": "",
  "Failed to copy link": "Nie udało się skopiować linku",
  "Failed to create API Key.": "Nie udało się wygenerować klucza API.",
  "Failed to delete note": "Nie udało się usunąć notatki",
  "Failed to extract content from the file: {{error}}": "",
  "Failed to extract content from the file.": "",
  "Failed to fetch models": "Nie udało się pobrać modeli",
  "Failed to generate title": "Nie udało się wygenerować tytułu",
  "Failed to import models": "",
  "Failed to load chat preview": "",
  "Failed to load file content.": "Nie udało się załadować zawartości pliku.",
  "Failed to move chat": "",
  "Failed to read clipboard contents": "Nie udało się odczytać zawartości schowka",
  "Failed to render diagram": "",
  "Failed to render visualization": "",
  "Failed to save connections": "Nie udałio się zapisać połączeń",
  "Failed to save conversation": "Nie udało się zapisać rozmowy",
  "Failed to save models configuration": "Nie udało się zapisać konfiguracji modelu",
  "Failed to update settings": "Nie udało się zaktualizować ustawień",
  "Failed to upload file.": "Nie udało się przesłać pliku.",
  Features,
  "Features Permissions": "Uprawnienia do funkcji",
  February,
  "Feedback deleted successfully": "",
  "Feedback Details": "",
  "Feedback History": "Historia ocen",
  Feedbacks,
  "Feel free to add specific details": "Nie krępuj się dodawać szczegółów",
  Female,
  File,
  "File added successfully.": "Plik dodany pomyślnie.",
  "File content updated successfully.": "Plik został zaktualizowany pomyślnie.",
  "File Mode": "Tryb pliku",
  "File not found.": "Plik nie został znaleziony.",
  "File removed successfully.": "Plik został usunięty pomyślnie.",
  "File size should not exceed {{maxSize}} MB.": "Rozmiar pliku nie powinien przekraczać {{maxSize}} MB.",
  "File Upload": "",
  "File uploaded successfully": "Plik został pomyślnie przesłany",
  "File uploaded!": "",
  Files,
  Filter,
  "Filter is now globally disabled": "Filtr jest teraz globalnie wyłączony",
  "Filter is now globally enabled": "Filtr jest teraz globalnie włączony",
  Filters,
  "Fingerprint spoofing detected: Unable to use initials as avatar. Defaulting to default profile image.": "Wykryto próbę oszustwa z odciskiem palca: Nie można używać inicjałów jako awatara. Powrót do domyślnego obrazu profilowego.",
  "Firecrawl API Base URL": "",
  "Firecrawl API Key": "",
  "Floating Quick Actions": "",
  "Focus Chat Input": "",
  Folder,
  "Folder Background Image": "",
  "Folder deleted successfully": "Folder został usunięty pomyślnie",
  "Folder Name": "Nazwa folderu",
  "Folder name cannot be empty.": "Nazwa folderu nie może być pusta.",
  "Folder name updated successfully": "Nazwa folderu została zaktualizowana pomyślnie",
  "Folder updated successfully": "",
  Folders,
  "Follow up": "",
  "Follow Up Generation": "",
  "Follow Up Generation Prompt": "",
  "Follow-Up Auto-Generation": "",
  "Followed instructions perfectly": "Wykonał instrukcje idealnie",
  "Force OCR": "Wymuś OCR",
  "Force OCR on all pages of the PDF. This can lead to worse results if you have good text in your PDFs. Defaults to False.": "",
  "Forge new paths": "Wytyczaj nowe ścieżki",
  Form,
  "Format Lines": "",
  "Format the lines in the output. Defaults to False. If set to True, the lines will be formatted to detect inline math and styles.": "",
  "Format your variables using brackets like this:": "Sformatuj swoje zmienne, używając nawiasów w następujący sposób:",
  "Formatting may be inconsistent from source.": "",
  "Forwards system user OAuth access token to authenticate": "",
  "Forwards system user session credentials to authenticate": "",
  "Full Context Mode": "Tryb pełnego kontekstu",
  "Function": "Funkcja",
  "Function Calling": "Wywoływanie funkcji",
  "Function created successfully": "Funkcja utworzona pomyślnie",
  "Function deleted successfully": "Funkcja została usunięta pomyślnie",
  "Function Description": "Opis funkcji",
  "Function ID": "Funkcja ID",
  "Function imported successfully": "",
  "Function is now globally disabled": "Funkcja jest teraz globalnie wyłączona",
  "Function is now globally enabled": "Funkcja jest teraz globalnie włączona",
  "Function Name": "Nazwa Funkcji",
  "Function Name Filter List": "",
  "Function updated successfully": "Funkcja została zaktualizowana pomyślnie",
  Functions,
  "Functions allow arbitrary code execution.": "Funkcje umożliwiają wykonanie dowolnego kodu.",
  "Functions imported successfully": "Funkcje zostały pomyślnie zaimportowane",
  Gemini,
  "Gemini API Key": "",
  "Gemini API Key is required.": "Wymagany jest klucz API Gemini.",
  "Gemini Base URL": "",
  "Gemini Endpoint Method": "",
  Gender,
  General,
  Generate,
  "Generate an image": "Wygeneruj obraz",
  "Generate Image": "Wygeneruj obraz",
  "Generate Message Pair": "",
  "Generated Image": "",
  "Generating search query": "Tworzenie zapytania wyszukiwania",
  "Generating...": "Generowanie...",
  "Get information on {{name}} in the UI": "",
  "Get started": "Rozpocznij",
  "Get started with {{WEBUI_NAME}}": "Rozpocznij pracę z {{WEBUI_NAME}}",
  Global,
  "Good Response": "Dobra odpowiedź",
  "Google Drive": "Dysk Google",
  "Google PSE API Key": "Klucz API Google PSE",
  "Google PSE Engine Id": "Identyfikator silnika Google PSE",
  Gravatar,
  Group,
  "Group created successfully": "Grupa utworzona pomyślnie",
  "Group deleted successfully": "Grupa została usunięta pomyślnie",
  "Group Description": "Opis grupy",
  "Group Name": "Nazwa grupy",
  "Group updated successfully": "Grupa zaktualizowana pomyślnie",
  Groups,
  H1,
  H2,
  H3,
  "Haptic Feedback": "Haptyczne sprzężenie zwrotne",
  Headers,
  "Headers must be a valid JSON object": "",
  Height,
  "Hello, {{name}}": "Witaj, {{name}}",
  Help,
  "Help us create the best community leaderboard by sharing your feedback history!": "Pomóż nam stworzyć najlepszą tablicę liderów społeczności, dzieląc się swoją historią opinii!",
  "Hex Color": "Kolor heksadecymalny",
  "Hex Color - Leave empty for default color": "Kolor heksadecymalny - pozostaw puste dla domyślnego koloru",
  Hide,
  "Hide from Sidebar": "Ukryj z paska bocznego",
  "Hide Model": "Ukryj model",
  High,
  "High Contrast Mode": "",
  Home,
  Host,
  "How can I help you today?": "Jak mogę Ci dzisiaj pomóc?",
  "How would you rate this response?": "Jak oceniłbyś tę odpowiedź?",
  HTML,
  "http://localhost:8000": "",
  "https://mineru.net/api/v4": "",
  "Hybrid Search": "Wyszukiwanie hybrydowe",
  "I acknowledge that I have read and I understand the implications of my action. I am aware of the risks associated with executing arbitrary code and I have verified the trustworthiness of the source.": "Potwierdzam, że przeczytałem i rozumiem konsekwencje mojego działania. Jestem świadomy ryzyka związanego z wykonywaniem kodu o nieznanym pochodzeniu i zweryfikowałem wiarygodność źródła.",
  ID,
  'ID cannot contain ":" or "|" characters': "",
  "iframe Sandbox Allow Forms": "",
  "iframe Sandbox Allow Same Origin": "",
  "Ignite curiosity": "Rozbudź ciekawość",
  Image,
  "Image Compression": "Kompresja obrazu",
  "Image Compression Height": "",
  "Image Compression Width": "",
  "Image Edit": "",
  "Image Edit Engine": "",
  "Image Generation": "Generowanie obrazów",
  "Image Generation Engine": "Silnik generowania obrazów",
  "Image Max Compression Size": "Maksymalny rozmiar kompresji obrazu",
  "Image Max Compression Size height": "",
  "Image Max Compression Size width": "",
  "Image Prompt Generation": "Generowanie promptu obrazu",
  "Image Prompt Generation Prompt": "Prompt do generowania obrazów",
  "Image Size": "",
  Images,
  Import,
  "Import Chats": "Importuj czaty",
  "Import Config from JSON File": "Importuj konfigurację z pliku JSON",
  "Import From Link": "Importuj z linku",
  "Import Models": "",
  "Import Notes": "Importuj notatki",
  "Import Presets": "Importuj ustawienia",
  "Import Prompt Suggestions": "",
  "Import Prompts": "",
  "Import successful": "",
  "Import Tools": "",
  "Important Update": "Ważna aktualizacja",
  Include,
  "Include `--api-auth` flag when running stable-diffusion-webui": "Użyj flagi `--api-auth` podczas uruchamiania stable-diffusion-webui",
  "Include `--api` flag when running stable-diffusion-webui": "Użyj flagi `--api` podczas uruchamiania stable-diffusion-webui.",
  "Includes SharePoint": "Zawiera SharePoint",
  "Increase UI Scale": "",
  "Influences how quickly the algorithm responds to feedback from the generated text. A lower learning rate will result in slower adjustments, while a higher learning rate will make the algorithm more responsive.": "",
  Info,
  Initials,
  "Inject the entire content as context for comprehensive processing, this is recommended for complex queries.": "",
  Input,
  "Input Key (e.g. text, unet_name, steps)": "",
  "Input Variables": "",
  Insert,
  "Insert Follow-Up Prompt to Input": "",
  "Insert Prompt as Rich Text": "",
  "Insert Suggestion Prompt to Input": "",
  "Install from Github URL": "Instalacja z adresu URL serwisu Github",
  "Instant Auto-Send After Voice Transcription": "Automatyczne natychmiastowe wysyłanie po transkrypcji głosowej",
  Integration,
  Integrations,
  Interface,
  "Invalid file content": "Nieprawidłowa zawartość pliku",
  "Invalid file format.": "Nieprawidłowy format pliku.",
  "Invalid JSON file": "Nieprawidłowy plik JSON",
  "Invalid JSON format for ComfyUI Edit Workflow.": "",
  "Invalid JSON format for ComfyUI Workflow.": "",
  "Invalid JSON format for Parameters": "",
  "Invalid JSON format in {{NAME}}": "",
  "Invalid JSON format in Additional Config": "",
  "Invalid JSON format in MinerU Parameters": "",
  "Invalid Tag": "Nieprawidłowy tag",
  "is typing...": "Pisanie...",
  Italic,
  January,
  "Jina API Key": "Klucz API Jiny",
  "join our Discord for help.": "Dołącz do naszego Discorda, aby uzyskać pomoc.",
  "JSON": "JSON",
  "JSON Preview": "Podgląd JSON",
  "JSON Spec": "",
  July,
  June,
  "Jupyter Auth": "Jupyter Auth",
  "Jupyter URL": "Adres URL Jupytera",
  "JWT Expiration": "Termin ważności JWT",
  "JWT Token": "Token JWT",
  "Kagi Search API Key": "Klucz API Kagi Search",
  "Keep Follow-Up Prompts in Chat": "",
  "Keep in Sidebar": "",
  Key,
  "Key is required": "",
  "Keyboard shortcuts": "Skróty klawiszowe",
  "Keyboard Shortcuts": "",
  Knowledge,
  "Knowledge Access": "Dostęp do wiedzy",
  "Knowledge Base": "",
  "Knowledge created successfully.": "Pomyślnie utworzona wiedza.",
  "Knowledge deleted successfully.": "Wiedza została usunięta pomyślnie.",
  "Knowledge Description": "",
  "Knowledge Name": "",
  "Knowledge Public Sharing": "",
  "Knowledge reset successfully.": "Pomyślnie zresetowano wiedzę.",
  "Knowledge Sharing": "",
  "Knowledge updated successfully": "Wiedza zaktualizowana pomyślnie",
  "Kokoro.js (Browser)": "Kokoro.js (Przeglądarka)",
  "Kokoro.js Dtype": "Kokoro.js Dtype",
  Label,
  "Landing Page Mode": "Tryb strony głównej",
  Language,
  "Language Locales": "",
  "Last Active": "Ostatnio aktywny",
  "Last Modified": "Ostatnia modyfikacja",
  "Last reply": "Ostatnia odpowiedź",
  LDAP,
  "LDAP server updated": "Serwer LDAP został zaktualizowany",
  Leaderboard,
  "Learn More": "",
  "Learn more about OpenAPI tool servers.": "",
  "Learn more about Voxtral transcription.": "",
  "Leave empty for no compression": "",
  "Leave empty for unlimited": "Pozostaw puste dla nieograniczonego",
  'Leave empty to include all models from "{{url}}" endpoint': "",
  'Leave empty to include all models from "{{url}}/api/tags" endpoint': "",
  'Leave empty to include all models from "{{url}}/models" endpoint': "",
  "Leave empty to include all models or select specific models": "Pozostaw puste, aby uwzględnić wszystkie modele lub wybierz konkretne modele",
  "Leave empty to use the default model (voxtral-mini-latest).": "",
  "Leave empty to use the default prompt, or enter a custom prompt": "Pozostaw puste, aby użyć domyślnego promptu, lub wprowadź niestandardowy prompt",
  "Leave model field empty to use the default model.": "Pozostaw pole modelu puste, aby użyć domyślnego modelu.",
  Legacy,
  lexical,
  License,
  "Lift List": "",
  Light,
  "Listening...": "Słuchanie...",
  "Llama.cpp": "Llama.cpp",
  "LLMs can make mistakes. Verify important information.": "LLMy mogą popełniać błędy. Upewnij się, że ważne informacje są poprawne.",
  Loader,
  "Loading Kokoro.js...": "Wczytywanie Kokoro.js...",
  "Loading...": "Wczytywanie...",
  local,
  Local,
  "Local Task Model": "",
  "Location access not allowed": "",
  Lost,
  Low,
  LTR,
  "Made by Open WebUI Community": "Opracowane przez społeczność Open WebUI",
  "Make password visible in the user interface": "",
  "Make sure to enclose them with": "Upewnij się, że są one zawarte w",
  "Make sure to export a workflow.json file as API format from ComfyUI.": "Upewnij się, że wyeksportowałeś plik workflow.json w formacie API z ComfyUI.",
  Male,
  Manage,
  "Manage Direct Connections": "Zarządzaj bezpośrednimi połączeniami",
  "Manage Models": "Zarządzaj modelami",
  "Manage Ollama": "Zarządzaj Ollamą",
  "Manage Ollama API Connections": "Zarządzaj połączeniami z API Ollama",
  "Manage OpenAI API Connections": "Zarządzaj połączeniami z API OpenAI",
  "Manage Pipelines": "Zarządzanie przepływem",
  "Manage Tool Servers": "",
  "Manage your account information.": "",
  March,
  Markdown,
  "Markdown (Header)": "",
  "Max Speakers": "",
  "Max Upload Count": "Maksymalna liczba przesyłanych plików",
  "Max Upload Size": "Maksymalny rozmiar przesyłanego pliku",
  "Maximum of 3 models can be downloaded simultaneously. Please try again later.": "Maksymalnie 3 modele można pobierać jednocześnie. Proszę spróbować ponownie później.",
  May,
  MBR,
  MCP,
  "MCP support is experimental and its specification changes often, which can lead to incompatibilities. OpenAPI specification support is directly maintained by the Open WebUI team, making it the more reliable option for compatibility.": "",
  Medium,
  "Memories accessible by LLMs will be shown here.": "Wspomnienia dostępne za pomocą LLM zostaną wyświetlone tutaj.",
  Memory,
  "Memory added successfully": "Pamięć dodana pomyślnie",
  "Memory cleared successfully": "Pamięć oczyszczona pomyślnie",
  "Memory deleted successfully": "Pamięć została usunięta pomyślnie",
  "Memory updated successfully": "Pamięć zaktualizowana pomyślnie",
  "Merge Responses": "Scalaj odpowiedzi ",
  "Merged Response": "Połączona odpowiedź",
  Message,
  "Message rating should be enabled to use this feature": "Ocena wiadomości powinna być włączona, aby korzystać z tej funkcji.",
  "Messages you send after creating your link won't be shared. Users with the URL will be able to view the shared chat.": "Wiadomości wysyłane po utworzeniu linku nie będą udostępniane. Użytkownicy z adresem URL będą mogli wyświetlić udostępnioną rozmowę.",
  "Microsoft OneDrive": "",
  "Microsoft OneDrive (personal)": "",
  "Microsoft OneDrive (work/school)": "",
  MinerU,
  "MinerU API Key required for Cloud API mode.": "",
  "Mistral OCR": "",
  "Mistral OCR API Key required.": "",
  MistralAI,
  Model,
  "Model '{{modelName}}' has been successfully downloaded.": "Model '{{modelName}}' został pomyślnie pobrany.",
  "Model '{{modelTag}}' is already in queue for downloading.": "Model '{{modelTag}}' jest już w kolejce do pobrania.",
  "Model {{modelId}} not found": "Model o identyfikatorze {{modelId}} nie został znaleziony.",
  "Model {{modelName}} is not vision capable": "Model {{modelName}} nie jest zdolny do widzenia",
  "Model {{name}} is now {{status}}": "Model {{name}} jest teraz {{status}}",
  "Model {{name}} is now hidden": "Model {{name}} jest teraz ukryty",
  "Model {{name}} is now visible": "Model {{name}} jest teraz widoczny",
  "Model accepts file inputs": "Model przyjmuje pliki",
  "Model accepts image inputs": "Model przyjmuje obrazy",
  "Model can execute code and perform calculations": "Model może wykonywać kod i przeprowadzać obliczenia",
  "Model can generate images based on text prompts": "Model może generować obrazy bazując na tekstowych promptach",
  "Model can search the web for information": "Model może wyszukiwać informacje w sieci Web",
  "Model created successfully!": "Model utworzony pomyślnie!",
  "Model filesystem path detected. Model shortname is required for update, cannot continue.": "Wykryto ścieżkę systemu plików modelu. Podanie krótkiej nazwy modelu jest wymagane do aktualizacji, nie można kontynuować.",
  "Model Filtering": "Filtracja modeli",
  "Model ID": "Identyfikator modelu",
  "Model ID is required.": "",
  "Model IDs": "Identyfikatory modeli",
  "Model Name": "Nazwa modelu",
  "Model name already exists, please choose a different one": "",
  "Model Name is required.": "",
  "Model not selected": "Model nie został wybrany",
  "Model Params": "Parametry modelu",
  "Model Permissions": "Uprawnienia modelu",
  "Model unloaded successfully": "",
  "Model updated successfully": "Model został zaktualizowany pomyślnie",
  "Model(s) do not support file upload": "",
  "Modelfile Content": "Treść pliku modelu",
  Models,
  "Models Access": "Dostęp do modeli",
  "Models configuration saved successfully": "Konfiguracja modeli została zapisana pomyślnie",
  "Models imported successfully": "",
  "Models Public Sharing": "",
  "Models Sharing": "",
  "Mojeek Search API Key": "Klucz API Mojeek Search",
  More,
  "More Concise": "",
  "More Options": "",
  Move,
  Name,
  "Name and ID are required, please fill them out": "",
  "Name your knowledge base": "Nazwij swoją bazę wiedzy",
  Native,
  "New Button": "",
  "New Chat": "Nowy czat",
  "New Folder": "Nowy folder",
  "New Function": "Nowa funkcja",
  "New Knowledge": "",
  "New Model": "",
  "New Password": "Nowe hasło",
  "New Prompt": "",
  "New Temporary Chat": "",
  "New Tool": "Nowe narzędzie",
  "new-channel": "nowy-kanał",
  "Next message": "Następna wiadomość",
  "No authentication": "",
  "No chats found": "Nie znaleziono czatów",
  "No chats found for this user.": "Nie znaleziono czatów tego użytkownika.",
  "No chats found.": "Nie znaleziono czatów.",
  "No content": "Brak zawartości",
  "No content found": "Nie znaleziono żadnej zawartości.",
  "No content found in file.": "Brak zawartości w pliku.",
  "No content to speak": "Brak treści do omówienia",
  "No conversation to save": "",
  "No distance available": "Brak dostępnej odległości",
  "No expiration can pose security risks.": "",
  "No feedbacks found": "Nie znaleziono żadnych opinii",
  "No file selected": "Nie wybrano żadnego pliku",
  "No functions found": "",
  "No groups with access, add a group to grant access": "Brak grup z dostępem, dodaj grupę, aby przyznać dostęp",
  "No HTML, CSS, or JavaScript content found.": "Nie znaleziono żadnej zawartości HTML, CSS ani JavaScript.",
  "No inference engine with management support found": "Nie znaleziono silnika wnioskującego z obsługą zarządzania",
  "No knowledge found": "Brak znalezionej wiedzy",
  "No memories to clear": "Brak wspomnień do wyczyszczenia",
  "No model IDs": "Brak identyfikatorów modeli",
  "No models found": "Nie znaleziono modeli",
  "No models selected": "Brak wybranych modeli",
  "No Notes": "Brak notatek",
  "No notes found": "",
  "No prompts found": "",
  "No results": "Brak wyników",
  "No results found": "Brak wyników",
  "No search query generated": "Nie wygenerowano żadnego zapytania wyszukiwania",
  "No source available": "Źródło nie jest dostępne.",
  "No sources found": "",
  "No suggestion prompts": "Brak sugerowanych promptów",
  "No tools found": "",
  "No users were found.": "Nie znaleziono użytkowników.",
  "No valves": "",
  "No valves to update": "Brak zaworów do aktualizacji",
  "Node Ids": "",
  None,
  "Not factually correct": "Niezgodne z rzeczywistością",
  "Not helpful": "Nieprzydatne",
  "Not Registered": "",
  Note,
  "Note deleted successfully": "Notatka została usunięta",
  "Note: If you set a minimum score, the search will only return documents with a score greater than or equal to the minimum score.": "Uwaga: Jeśli określisz minimalną punktację, wyszukiwanie zwróci tylko dokumenty o wyniku równym lub wyższym niż minimalna punktacja.",
  Notes,
  "Notes Public Sharing": "",
  "Notes Sharing": "",
  "Notification Sound": "Dźwięk powiadomienia",
  "Notification Webhook": "Powiadomienie Webhook",
  Notifications,
  November,
  OAuth,
  "OAuth 2.1": "",
  "OAuth ID": "Identyfikator OAuth",
  October,
  Off,
  "Okay, Let's Go!": "Okej, do dzieła!",
  "OLED Dark": "Ciemny OLED",
  Ollama,
  "Ollama API": "Interfejs API Ollama",
  "Ollama API settings updated": "Ustawienia API Ollama zostały zaktualizowane",
  "Ollama Cloud API Key": "",
  "Ollama Version": "Wersja Ollama",
  On,
  OneDrive,
  'Only active when "Paste Large Text as File" setting is toggled on.': "",
  "Only active when the chat input is in focus and an LLM is generating a response.": "",
  "Only active when the chat input is in focus.": "",
  "Only alphanumeric characters and hyphens are allowed": "Dozwolone są tylko znaki alfanumeryczne i myślniki",
  "Only alphanumeric characters and hyphens are allowed in the command string.": "W komendzie dozwolone są wyłącznie znaki alfanumeryczne i myślniki.",
  "Only can be triggered when the chat input is in focus.": "",
  "Only collections can be edited, create a new knowledge base to edit/add documents.": "Tylko kolekcje można edytować, utwórz nową bazę wiedzy, aby edytować/dodawać dokumenty.",
  "Only markdown files are allowed": "",
  "Only select users and groups with permission can access": "Tylko wybrani użytkownicy i grupy z uprawnieniami mogą uzyskać dostęp.",
  "Oops! Looks like the URL is invalid. Please double-check and try again.": "Oops! Wygląda na to, że podany URL jest nieprawidłowy. Proszę sprawdzić go ponownie i spróbować jeszcze raz.",
  "Oops! There are files still uploading. Please wait for the upload to complete.": "Oops! Nadal trwa przesyłanie plików. Proszę poczekać, aż przesyłanie zostanie ukończone.",
  "Oops! There was an error in the previous response.": "Oops! Wystąpił błąd w poprzedniej odpowiedzi.",
  "Oops! You're using an unsupported method (frontend only). Please serve the WebUI from the backend.": "Oops! Używasz nieobsługiwanej metody (tylko interfejs użytkownika). Proszę serwować WebUI z poziomu backendu.",
  "Open file": "Otwórz plik",
  "Open in full screen": "Otwórz na pełny ekran",
  "Open link": "",
  "Open modal to configure connection": "",
  "Open Modal To Manage Floating Quick Actions": "",
  "Open Modal To Manage Image Compression": "",
  "Open Settings": "",
  "Open Sidebar": "",
  "Open User Profile Menu": "",
  "Open WebUI can use tools provided by any OpenAPI server.": "Open WebUI może używać narzędzi dostarczanych przez serwery OpenAPI.",
  "Open WebUI uses faster-whisper internally.": "Open WebUI korzysta wewnętrznie z szybszego faster-whisper.",
  "Open WebUI uses SpeechT5 and CMU Arctic speaker embeddings.": "Otwarta WebUI wykorzystuje SpeechT5 i wbudowane zbiory danych mówcy CMU Arctic.",
  "Open WebUI version (v{{OPEN_WEBUI_VERSION}}) is lower than required version (v{{REQUIRED_VERSION}})": "Wersja Open WebUI (v{{OPEN_WEBUI_VERSION}}) jest niższa niż wymagana wersja (v{{REQUIRED_VERSION}})",
  OpenAI,
  "OpenAI API": "Interfejs API OpenAI",
  "OpenAI API Base URL": "",
  "OpenAI API Key": "",
  "OpenAI API Key is required.": "Klucz API OpenAI jest niezbędny.",
  "OpenAI API settings updated": "Ustawienia API OpenAI zostały zaktualizowane",
  "OpenAI API Version": "",
  "OpenAI URL/Key required.": "Wymagany jest URL/klucz OpenAI.",
  OpenAPI,
  "OpenAPI Spec": "",
  "openapi.json URL or Path": "",
  Optional,
  or,
  "Ordered List": "Lista numerowana",
  "Organize your users": "Zorganizuj swoich użytkowników",
  Other,
  OUTPUT,
  "Output format": "Format wyjściowy",
  "Output Format": "",
  Overview,
  page,
  Paginate,
  Parameters,
  Password,
  "Passwords do not match.": "",
  "Paste Large Text as File": "Wklej duży tekst jako plik",
  "PDF document (.pdf)": "Dokument PDF (.pdf)",
  "PDF Extract Images (OCR)": "PDF Ekstrahuj obrazy (OCR)",
  pending,
  Pending,
  "Pending User Overlay Content": "",
  "Pending User Overlay Title": "",
  "Permission denied when accessing media devices": "Odmowa dostępu podczas uzyskiwania dostępu do urządzeń multimedialnych",
  "Permission denied when accessing microphone": "Odmowa dostępu podczas uzyskiwania dostępu do mikrofonu",
  "Permission denied when accessing microphone: {{error}}": "Odmowa dostępu do mikrofonu: {{error}}",
  Permissions,
  "Perplexity API Key": "Klucz API Perplexity",
  "Perplexity Model": "",
  "Perplexity Search API URL": "",
  "Perplexity Search Context Usage": "",
  Personalization,
  Pin,
  Pinned,
  "Pioneer insights": "Pionierskie spostrzeżenia",
  Pipe,
  "Pipeline deleted successfully": "Przepływ usunięty pomyślnie",
  "Pipeline downloaded successfully": "Przepływ pobrany pomyślnie",
  Pipelines,
  "Pipelines are a plugin system with arbitrary code execution —": "Pipelines to system wtyczek umożliwiający dowolne wykonywanie kodu —",
  "Pipelines Not Detected": "Przepływ nie wykryty",
  "Pipelines Valves": "Przepływy i Zawory",
  "Plain text (.md)": "Zwykły tekst (.md)",
  "Plain text (.txt)": "Zwykły tekst (.txt)",
  Playground,
  "Playwright Timeout (ms)": "",
  "Playwright WebSocket URL": "",
  "Please carefully review the following warnings:": "Proszę uważnie przejrzeć poniższe ostrzeżenia:",
  "Please do not close the settings page while loading the model.": "Proszę nie zamykać strony ustawień podczas ładowania modelu.",
  "Please enter a message or attach a file.": "",
  "Please enter a prompt": "Proszę podać prompt",
  "Please enter a valid ID": "",
  "Please enter a valid JSON spec": "",
  "Please enter a valid path": "",
  "Please enter a valid URL": "",
  "Please enter a valid URL.": "",
  "Please fill in all fields.": "Proszę wypełnić wszystkie pola.",
  "Please register the OAuth client": "",
  "Please save the connection to persist the OAuth client information and do not change the ID": "",
  "Please select a model first.": "Proszę najpierw wybrać model.",
  "Please select a model.": "Proszę wybrać model.",
  "Please select a reason": "Proszę wybrać powód",
  "Please select a valid JSON file": "",
  "Please wait until all files are uploaded.": "",
  Port,
  "Positive attitude": "Pozytywne nastawienie",
  "Prefer not to say": "",
  "Prefix ID": "Identyfikator prefiksu",
  "Prefix ID is used to avoid conflicts with other connections by adding a prefix to the model IDs - leave empty to disable": "ID prefiksu jest używane do unikania konfliktów z innymi połączeniami poprzez dodanie prefiksu do ID modelu - pozostaw puste, aby wyłączyć",
  "Prevent File Creation": "",
  Preview,
  "Previous 30 days": "Ostatnie 30 dni",
  "Previous 7 days": "Ostatnie 7 dni",
  "Previous message": "Poprzednia wiadomość",
  Private,
  Profile,
  Prompt,
  "Prompt (e.g. Tell me a fun fact about the Roman Empire)": "Prompt (np. podaj ciekawostkę o Imperium Rzymskim)",
  "Prompt Autocompletion": "Autouzupełnianie promptu",
  "Prompt Content": "Treść promptu",
  "Prompt created successfully": "Prompt został utworzony pomyślnie",
  "Prompt updated successfully": "Prompt został zaktualizowany pomyślnie.",
  Prompts,
  "Prompts Access": "Dostęp do promptów",
  "Prompts Public Sharing": "Publiczne udostępnianie promptów",
  "Prompts Sharing": "",
  "Provider Type": "",
  Public,
  'Pull "{{searchValue}}" from Ollama.com': 'Pobierz "{{searchValue}}" z Ollama.com',
  "Pull a model from Ollama.com": "Pobierz model z Ollama.com",
  "Pull Model": "",
  "Query Generation Prompt": "Prompt do generowania zapytań",
  Querying,
  "Quick Actions": "",
  "RAG Template": "Szablon RAG",
  Rating,
  "Re-rank models by topic similarity": "Ponowny ranking modeli według podobieństwa tematycznego",
  Read,
  "Read Aloud": "Czytaj na głos",
  "Read more →": "",
  Reason,
  "Reasoning Effort": "Wysiłek rozumowania",
  "Reasoning Tags": "",
  Record,
  "Record voice": "Nagraj swój głos",
  "Redirecting you to Open WebUI Community": "Przekierowujemy Cię do społeczności Open WebUI",
  "Reduces the probability of generating nonsense. A higher value (e.g. 100) will give more diverse answers, while a lower value (e.g. 10) will be more conservative.": "",
  'Refer to yourself as "User" (e.g., "User is learning Spanish")': 'Odnoś się do mnie jako "Użytkownik" (np. "Użytkownik uczy się hiszpańskiego")',
  "Reference Chats": "",
  "Refused when it shouldn't have": "Odmówił, gdy nie powinien",
  Regenerate,
  "Regenerate Menu": "",
  "Regenerate Response": "",
  "Register Again": "",
  "Register Client": "",
  Registered,
  "Registration failed": "",
  "Registration successful": "",
  Reindex,
  "Reindex Knowledge Base Vectors": "",
  "Release Notes": "Notatki do wydania",
  Releases,
  Relevance,
  "Relevance Threshold": "",
  "Remember Dismissal": "",
  Remove,
  "Remove {{MODELID}} from list.": "",
  "Remove file": "",
  "Remove File": "",
  "Remove image": "",
  "Remove Model": "Usuń model",
  "Remove this tag from list": "",
  Rename,
  "Reorder Models": "Przeorganizuj modele",
  Reply,
  "Reply in Thread": "Odpowiedz w wątku",
  "Reply to thread...": "",
  "Replying to {{NAME}}": "",
  required,
  "Reranking Engine": "",
  "Reranking Model": "Poprawa rankingu modelu",
  Reset,
  "Reset All Models": "Resetuj wszystkie modele",
  "Reset Image": "Resetuj obraz",
  "Reset Upload Directory": "Resetuj katalog pobierania",
  "Reset Vector Storage/Knowledge": "Reset magazynu wektorowego/wiedzy",
  "Reset view": "Resetuj widok",
  Response,
  "Response notifications cannot be activated as the website permissions have been denied. Please visit your browser settings to grant the necessary access.": "Powiadomienia o odpowiedziach nie mogą zostać aktywowane, ponieważ uprawnienia strony zostały odrzucone. Proszę odwiedzić ustawienia przeglądarki, aby przyznać wymagany dostęp.",
  "Response splitting": "Rozdzielanie odpowiedzi",
  "Response Watermark": "",
  Result,
  RESULT,
  Retrieval,
  "Retrieval Query Generation": "Generowanie zapytań pobierania",
  "Retrieved {{count}} sources": "",
  "Retrieved {{count}} sources_one": "",
  "Retrieved {{count}} sources_few": "",
  "Retrieved {{count}} sources_many": "",
  "Retrieved {{count}} sources_other": "",
  "Retrieved 1 source": "",
  "Rich Text Input for Chat": "Pole do wprowadzania tekstu sformatowanego dla czatu",
  RK,
  Role,
  "Rosé Pine": "Różana Sosna",
  "Rosé Pine Dawn": "Różany Poranek Pine Dawn",
  RTL,
  Run,
  Running,
  "Running...": "Uruchomiono...",
  "Runs embedding tasks concurrently to speed up processing. Turn off if rate limits become an issue.": "",
  Save,
  "Save & Create": "Zapisz i stwórz",
  "Save & Update": "Zapisz i odśwież",
  "Save As Copy": "Zapisz jako kopia",
  "Save Chat": "",
  "Save Tag": "Zapisz tag",
  Saved,
  "Saving chat logs directly to your browser's storage is no longer supported. Please take a moment to download and delete your chat logs by clicking the button below. Don't worry, you can easily re-import your chat logs to the backend through": "Zapisywanie dzienników czatu bezpośrednio w pamięci przeglądarki nie jest już obsługiwane. Prosimy o pobranie i usunięcie dzienników czatu, klikając przycisk poniżej. Nie przejmuj się, możesz łatwo ponownie zaimportować dzienniki czatu do backendu przez",
  "Scroll On Branch Change": "",
  Search,
  "Search a model": "Wyszukaj model",
  "Search all emojis": "",
  "Search Base": "Użytkownicy - Baza wyszukiwania",
  "Search Chats": "Przeszukaj czaty",
  "Search Collection": "Przeszukaj kolekcję",
  "Search Filters": "Filtry wyszukiwania",
  "search for archived chats": "",
  "search for folders": "",
  "search for pinned chats": "",
  "search for shared chats": "",
  "search for tags": "wyszukiwanie tagów",
  "Search Functions": "Funkcje wyszukiwania",
  "Search In Models": "",
  "Search Knowledge": "Przeszukaj wiedzę",
  "Search Models": "Wyszukiwanie modeli",
  "Search Notes": "Wyszukiwanie notatek",
  "Search options": "Opcje wyszukiwania",
  "Search Prompts": "Szukaj promptów",
  "Search Result Count": "Liczba wyników wyszukiwania",
  "Search the internet": "Przeszukaj internet",
  "Search Tools": "Szukaj narzędzi",
  "SearchApi API Key": "Klucz API SearchApi",
  "SearchApi Engine": "Search API Engine",
  "Searched {{count}} sites": "Przeszukano {{count}} stron",
  Searching,
  'Searching "{{searchQuery}}"': 'Wyszukiwanie "{{searchQuery}}"',
  'Searching Knowledge for "{{searchQuery}}"': 'Przeszukiwanie wiedzy dla "{{searchQuery}}"',
  "Searching the web": "Przeszukuję sieć Web...",
  "Searxng Query URL": "Adres URL zapytania Searxng",
  "See readme.md for instructions": "Sprawdź readme.md dla instrukcji",
  "See what's new": "Sprawdź nowości",
  Seed,
  Select,
  "Select a base model": "Wybór modelu bazowego",
  "Select a base model (e.g. llama3, gpt-4o)": "",
  "Select a conversation to preview": "",
  "Select a engine": "Wybierz silnik",
  "Select a function": "Wybierz funkcję",
  "Select a group": "Wybierz grupę",
  "Select a language": "",
  "Select a mode": "",
  "Select a model": "Wybierz model",
  "Select a model (optional)": "",
  "Select a pipeline": "Wybierz potok",
  "Select a pipeline url": "Wybierz adres URL przepływu",
  "Select a reranking model engine": "",
  "Select a role": "",
  "Select a theme": "",
  "Select a tool": "Wybierz narzędzie",
  "Select a voice": "",
  "Select an auth method": "Wybierz metodę uwierzytelniania",
  "Select an embedding model engine": "",
  "Select an engine": "",
  "Select an Ollama instance": "Wybierz instancję Ollama",
  "Select an output format": "",
  "Select dtype": "",
  "Select Engine": "Wybierz silnik",
  "Select how to split message text for TTS requests": "",
  "Select Knowledge": "Wybierz wiedzę",
  "Select Method": "",
  "Select only one model to call": "Wybierz tylko jeden model do wywołania",
  "Select view": "",
  "Selected model(s) do not support image inputs": "Wybrane modele nie obsługują danych wejściowych w formie obrazu",
  semantic,
  Send,
  "Send a Message": "Wyślij wiadomość",
  "Send message": "Wyślij wiadomość",
  "Sends `stream_options: { include_usage: true }` in the request.\nSupported providers will return token usage information in the response when set.": "Wysyła `stream_options: { include_usage: true }` w żądaniu.\nObsługiwani dostawcy zwrócą informacje o użyciu tokenów w odpowiedzi, gdy to ustawienie jest aktywne.",
  September,
  "SerpApi API Key": "Klucz API SerpApi",
  "SerpApi Engine": "Silnik SerpApi",
  "Serper API Key": "Klucz API Serper",
  "Serply API Key": "Klucz API Serply",
  "Serpstack API Key": "Klucz API Serpstack",
  "Server connection verified": "Połączenie z serwerem zostało zweryfikowane",
  Session,
  "Set as default": "Ustaw jako domyślny",
  "Set embedding model": "Ustawianie modelu osadzania",
  "Set embedding model (e.g. {{model}})": "Skonfiguruj model osadzania (np. {{model}})",
  "Set reranking model (e.g. {{model}})": "Skonfiguruj model ponownego rankingu (np. {{model}})",
  "Set the number of layers, which will be off-loaded to GPU. Increasing this value can significantly improve performance for models that are optimized for GPU acceleration but may also consume more power and GPU resources.": "Ustaw liczbę warstw, które zostaną przeniesione na GPU. Zwiększenie tej wartości może znacząco poprawić wydajność dla modeli optymalizowanych pod kątem akceleracji GPU, ale także może zużywać więcej energii i zasobów GPU.",
  "Set the number of worker threads used for computation. This option controls how many threads are used to process incoming requests concurrently. Increasing this value can improve performance under high concurrency workloads but may also consume more CPU resources.": "Ustaw liczbę wątków pracowników używanych do obliczeń. Ta opcja kontroluje, ile wątków jest używanych do jednoczesnego przetwarzania przychodzących żądań. Zwiększenie tej wartości może poprawić wydajność pod wysokim obciążeniem, ale może również zużywać więcej zasobów CPU.",
  "Set Voice": "Ustaw głos",
  "Set whisper model": "Ustaw model szeptu",
  "Sets a flat bias against tokens that have appeared at least once. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 0.9) will be more lenient. At 0, it is disabled.": "",
  "Sets a scaling bias against tokens to penalize repetitions, based on how many times they have appeared. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 0.9) will be more lenient. At 0, it is disabled.": "",
  "Sets how far back for the model to look back to prevent repetition.": "",
  "Sets the random number seed to use for generation. Setting this to a specific number will make the model generate the same text for the same prompt.": "",
  "Sets the size of the context window used to generate the next token.": "",
  "Sets the stop sequences to use. When this pattern is encountered, the LLM will stop generating text and return. Multiple stop patterns may be set by specifying multiple separate stop parameters in a modelfile.": "Ustawia sekwencje stopu do użycia. Gdy ten wzorzec zostanie napotkany, LLM przestanie generować tekst i zwróci wynik. Można skonfigurować wiele sekwencji stopu, określając kilka oddzielnych parametrów stopu w pliku modelu.",
  Setting,
  Settings,
  "Settings saved successfully!": "Ustawienia zostały zapisane pomyślnie!",
  Share,
  "Share Chat": "Udostępnij rozmowę",
  "Share to Open WebUI Community": "Udostępnij w społeczności OpenWebUI",
  "Share your background and interests": "",
  "Shared with you": "",
  "Sharing Permissions": "Uprawnienia udostępniania",
  Show,
  'Show "What\'s New" modal on login': `Wyświetl okno dialogowe "What's New" podczas logowania`,
  "Show Admin Details in Account Pending Overlay": "Wyświetl szczegóły administratora w okienu informacyjnym o potrzebie zatwierdzenia przez administratora konta użytkownika",
  "Show Formatting Toolbar": "",
  "Show image preview": "",
  "Show Model": "",
  "Show Shortcuts": "",
  "Show your support!": "Wyraź swoje poparcie!",
  "Showcased creativity": "Prezentacja kreatywności",
  "Sign in": "Zaloguj się",
  "Sign in to {{WEBUI_NAME}}": "Zaloguj się do {{WEBUI_NAME}}",
  "Sign in to {{WEBUI_NAME}} with LDAP": "Zaloguj się do {{WEBUI_NAME}} przy użyciu LDAP",
  "Sign Out": "Wyloguj się",
  "Sign up": "Zarejestruj się",
  "Sign up to {{WEBUI_NAME}}": "Zarejestruj się w {{WEBUI_NAME}}",
  "Significantly improves accuracy by using an LLM to enhance tables, forms, inline math, and layout detection. Will increase latency. Defaults to False.": "",
  "Signing in to {{WEBUI_NAME}}": "Logowanie do {{WEBUI_NAME}}",
  "Sink List": "",
  "sk-1234": "sk-1234",
  "Skip Cache": "",
  "Skip the cache and re-run the inference. Defaults to False.": "",
  "Something went wrong :/": "",
  Sonar,
  "Sonar Deep Research": "",
  "Sonar Pro": "",
  "Sonar Reasoning": "",
  "Sonar Reasoning Pro": "",
  "Sougou Search API sID": "",
  "Sougou Search API SK": "",
  Source,
  "Speech Playback Speed": "Prędkość odtwarzania mowy",
  "Speech recognition error: {{error}}": "Błąd rozpoznawania mowy: {{error}}",
  "Speech-to-Text": "",
  "Speech-to-Text Engine": "Silnik konwersji mowy na tekst",
  "Start a new conversation": "",
  "Start of the channel": "Początek kanału",
  "Start Tag": "",
  "Status Updates": "",
  "STDOUT/STDERR": "STDOUT/STDERR",
  Steps,
  Stop,
  "Stop Generating": "",
  "Stop Sequence": "Zatrzymaj sekwencję",
  "Stream Chat Response": "Strumieniowanie odpowiedzi z czatu",
  "Stream Delta Chunk Size": "",
  "Streamable HTTP": "",
  Strikethrough,
  "Strip Existing OCR": "",
  "Strip existing OCR text from the PDF and re-run OCR. Ignored if Force OCR is enabled. Defaults to False.": "",
  "STT Model": "Model STT",
  "STT Settings": "Ustawienia STT",
  "Stylized PDF Export": "",
  "Subtitle (e.g. about the Roman Empire)": "Podtytuł (np. o Imperium Rzymskim)",
  Success,
  "Successfully imported {{userCount}} users.": "",
  "Successfully updated.": "Uaktualniono pomyślnie.",
  "Suggest a change": "",
  Suggested,
  Support,
  "Support this plugin:": "Wesprzyj ten plugin:",
  "Supported MIME Types": "",
  "Sync directory": "Sync directory",
  System,
  "System Instructions": "Instrukcje systemowe",
  "System Prompt": "Prompt systemowy",
  Tag,
  Tags,
  "Tags Generation": "Generowanie tagów",
  "Tags Generation Prompt": "Prompt do generowania tagów",
  "Tail free sampling is used to reduce the impact of less probable tokens from the output. A higher value (e.g., 2.0) will reduce the impact more, while a value of 1.0 disables this setting.": "",
  "Talk to Model": "",
  "Tap to interrupt": "Kliknij, aby przerwać",
  "Task List": "Lista zadań",
  "Task Model": "",
  Tasks,
  "Tavily API Key": "Klucz API Tavily",
  "Tavily Extract Depth": "",
  "Tell us more:": "Podaj więcej informacji",
  Temperature,
  "Temporary Chat": "Tymczasowa rozmowa",
  "Temporary Chat by Default": "",
  "Text Splitter": "Rozdzielacz tekstu",
  "Text-to-Speech": "Syntezator mowy",
  "Text-to-Speech Engine": "Silnik konwersji tekstu na mowę",
  "Thanks for your feedback!": "Dziękujemy za twoją opinię!",
  "The Application Account DN you bind with for search": "Konto techniczne w formacie DN, z którym się wiążesz w celu przeszukiwania",
  "The base to search for users": "Podstawa do wyszukiwania użytkowników",
  "The batch size determines how many text requests are processed together at once. A higher batch size can increase the performance and speed of the model, but it also requires more memory.": "",
  "The developers behind this plugin are passionate volunteers from the community. If you find this plugin helpful, please consider contributing to its development.": "Twórcy tego wtyczki to entuzjaści, którzy działają jako wolontariusze ze społeczności. Jeśli uważasz, że ta wtyczka jest pomocna, rozważ wsparcie jej rozwoju.",
  "The evaluation leaderboard is based on the Elo rating system and is updated in real-time.": "Tablica wyników oceny opiera się na systemie rankingu Elo i jest aktualizowana w czasie rzeczywistym.",
  "The format to return a response in. Format can be json or a JSON schema.": "",
  "The height in pixels to compress images to. Leave empty for no compression.": "",
  "The language of the input audio. Supplying the input language in ISO-639-1 (e.g. en) format will improve accuracy and latency. Leave blank to automatically detect the language.": "",
  "The LDAP attribute that maps to the mail that users use to sign in.": "Atrybut LDAP, który mapuje się na adres e-mail używany przez użytkowników do logowania.",
  "The LDAP attribute that maps to the username that users use to sign in.": "Atrybut LDAP, który mapuje się na nazwę użytkownika, którą użytkownicy używają do logowania.",
  "The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.": "Tablica wyników jest w wersji beta, więc w miarę udoskonalania algorytmu możemy jeszcze modyfikować sposób obliczania ocen.",
  "The maximum file size in MB. If the file size exceeds this limit, the file will not be uploaded.": "Maksymalny rozmiar pliku w MB. Jeśli rozmiar pliku przekroczy ten limit, plik nie zostanie przesłany.",
  "The maximum number of files that can be used at once in chat. If the number of files exceeds this limit, the files will not be uploaded.": "Maksymalna liczba plików, które można użyć jednocześnie w czacie. Jeśli liczba plików przekroczy ten limit, pliki nie zostaną przesłane.",
  "The output format for the text. Can be 'json', 'markdown', or 'html'. Defaults to 'markdown'.": "",
  "The passwords you entered don't quite match. Please double-check and try again.": "",
  "The score should be a value between 0.0 (0%) and 1.0 (100%).": "Wynik powinien być wartością pomiędzy 0,0 (0%) a 1,0 (100%).",
  "The stream delta chunk size for the model. Increasing the chunk size will make the model respond with larger pieces of text at once.": "",
  "The temperature of the model. Increasing the temperature will make the model answer more creatively.": "",
  "The Weight of BM25 Hybrid Search. 0 more semantic, 1 more lexical. Default 0.5": "",
  "The width in pixels to compress images to. Leave empty for no compression.": "",
  Theme,
  "Thinking...": "Myślę...",
  "This action cannot be undone. Do you wish to continue?": "Czy na pewno chcesz kontynuować? Ta akcja nie może zostać cofnięta.",
  "This channel was created on {{createdAt}}. This is the very beginning of the {{channelName}} channel.": "",
  "This chat won't appear in history and your messages will not be saved.": "",
  "This ensures that your valuable conversations are securely saved to your backend database. Thank you!": "To gwarantuje, że Twoje wartościowe rozmowy są bezpiecznie zapisywane w bazie danych backendowej. Dziękujemy!",
  "This feature is experimental and may be modified or discontinued without notice.": "",
  "This is a default user permission and will remain enabled.": "",
  "This is an experimental feature, it may not function as expected and is subject to change at any time.": "To jest funkcja eksperymentalna, może nie działać zgodnie z oczekiwaniami i jest podatna na zmiany w dowolnym momencie.",
  "This model is not publicly available. Please select another model.": "",
  "This option controls how long the model will stay loaded into memory following the request (default: 5m)": "",
  "This option controls how many tokens are preserved when refreshing the context. For example, if set to 2, the last 2 tokens of the conversation context will be retained. Preserving context can help maintain the continuity of a conversation, but it may reduce the ability to respond to new topics.": "",
  "This option enables or disables the use of the reasoning feature in Ollama, which allows the model to think before generating a response. When enabled, the model can take a moment to process the conversation context and generate a more thoughtful response.": "",
  "This option sets the maximum number of tokens the model can generate in its response. Increasing this limit allows the model to provide longer answers, but it may also increase the likelihood of unhelpful or irrelevant content being generated.": "",
  "This option will delete all existing files in the collection and replace them with newly uploaded files.": "Ta opcja usunie wszystkie istniejące pliki w kolekcji i zastąpi je nowo przesłanymi plikami.",
  'This response was generated by "{{model}}"': 'Ta odpowiedź została wygenerowana przez "{{model}}".',
  "This will delete": "To usunie wszystkie pliki z katalogu.",
  "This will delete <strong>{{NAME}}</strong> and <strong>all its contents</strong>.": "To usunie <strong>{{NAME}}</strong> i <strong>wszystkie jego zawartości</strong>.",
  "This will delete all models including custom models": "To usunie wszystkie modele, w tym niestandardowe.",
  "This will delete all models including custom models and cannot be undone.": "To usunie wszystkie modele, w tym niestandardowe modele, i nie można tego cofnąć.",
  "This will reset the knowledge base and sync all files. Do you wish to continue?": "Czy chcesz wyzerować bazę wiedzy i zsynchronizować wszystkie pliki? Proszę potwierdź swoją decyzję.",
  "Thorough explanation": "Szczegółowe wyjaśnienie",
  "Thought for {{DURATION}}": "Myślenie przez {{DURATION}}",
  "Thought for {{DURATION}} seconds": "Myślenie przez {{DURATION}} sekund",
  "Thought for less than a second": "",
  Thread,
  Tika,
  "Tika Server URL required.": "Wymagany jest adres URL serwera Tika.",
  Tiktoken,
  Title,
  "Title (e.g. Tell me a fun fact)": "Tytuł (na przykład {e.g.} Powiedz mi jakiś zabawny fakt)",
  "Title Auto-Generation": "Automatyczne tworzenie tytułu",
  "Title cannot be an empty string.": "Tytuł nie może być pustym stringiem.",
  "Title Generation": "Generowanie tytułów",
  "Title Generation Prompt": "Prompt do generowania tytułu",
  TLS,
  "To access the available model names for downloading,": "Aby wyświetlić dostępne nazwy modeli do pobrania,",
  "To access the GGUF models available for downloading,": "Aby uzyskać dostęp do modeli GGUF dostępnych do pobrania,",
  "To access the WebUI, please reach out to the administrator. Admins can manage user statuses from the Admin Panel.": "Aby uzyskać dostęp do interfejsu WebUI, skontaktuj się z administratorem. Administratorzy mogą zarządzać statusami użytkowników z Panelu Administracyjnego.",
  'To attach knowledge base here, add them to the "Knowledge" workspace first.': 'Aby dołączyć bazę wiedzy tutaj, dodaj je najpierw do przestrzeni roboczej "Wiedza". ',
  "To learn more about available endpoints, visit our documentation.": "Aby dowiedzieć się więcej o dostępnych punktach końcowych, odwiedź naszą dokumentację.",
  "To learn more about powerful prompt variables, click here": "",
  "To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included.": "Aby chronić Twoją prywatność, udostępniane są tylko oceny, identyfikatory modeli, tagi i metadane z Twoich opinii – Twoje dzienniki czatu pozostają prywatne i nie są uwzględniane.",
  'To select toolkits here, add them to the "Tools" workspace first.': 'Aby wybrać zestawy narzędzi tutaj, dodaj je najpierw do przestrzeni roboczej "Narzędzia". ',
  "Toast notifications for new updates": "Powiadomienia o nowych aktualizacjach",
  Today,
  "Today at {{LOCALIZED_TIME}}": "",
  "Toggle Sidebar": "",
  "Toggle whether current connection is active.": "",
  Token,
  "Too verbose": "Zbyt rozwlekłe",
  "Tool created successfully": "Narzędzie utworzone pomyślnie",
  "Tool deleted successfully": "Narzędzie zostało usunięte pomyślnie",
  "Tool Description": "Opis narzędzia",
  "Tool ID": "ID narzędzia",
  "Tool imported successfully": "Narzędzie zostało pomyślnie zaimportowane",
  "Tool Name": "Nazwa narzędzia",
  "Tool Servers": "",
  "Tool updated successfully": "Narzędzie zaktualizowane pomyślnie",
  Tools,
  "Tools Access": "Narzędzia Dostępu",
  "Tools are a function calling system with arbitrary code execution": "Narzędzia to system wywoływania funkcji z możliwością wykonania dowolnego kodu.",
  "Tools Function Calling Prompt": "Narzędzia Funkcja Wywołania Promptu",
  "Tools have a function calling system that allows arbitrary code execution.": "Narzędzia mają funkcję wywoływania systemu, która umożliwia wykonanie dowolnego kodu.",
  "Tools Public Sharing": "",
  "Tools Sharing": "",
  "Top K": "Najlepsze K",
  "Top K Reranker": "",
  Transformers,
  "Trouble accessing Ollama?": "Czy masz problemy z dostępem do Ollama?",
  "Trust Proxy Environment": "",
  "Try adjusting your search or filter to find what you are looking for.": "",
  "Try Again": "",
  "TTS Model": "Model TTS",
  "TTS Settings": "Ustawienia syntezatora mowy",
  "TTS Voice": "Głos TTS",
  Type,
  "Type here...": "",
  "Type Hugging Face Resolve (Download) URL": "Podaj adres URL do pobrania z Hugging Face",
  "Uh-oh! There was an issue with the response.": "Ojej! Wystąpił problem z odpowiedzią.",
  UI,
  "UI Scale": "",
  "Unarchive All": "Odarchiwizuj wszystko",
  "Unarchive All Archived Chats": "Odarchiwizuj wszystkie zarchiwizowane rozmowy",
  "Unarchive Chat": "Odarchiwizuj czat",
  Underline,
  Unknown,
  "Unknown User": "",
  "Unloads {{FROM_NOW}}": "",
  "Unlock mysteries": "Rozwiązywanie zagadek",
  Unpin,
  "Unravel secrets": "Odkryj tajemnice",
  "Unsupported file type.": "",
  Untagged,
  Untitled,
  Update,
  "Update and Copy Link": "Aktualizuj i kopiuj link",
  "Update for the latest features and improvements.": "Aktualizacja do najnowszych funkcji i ulepszeń.",
  "Update password": "Zmiana hasła",
  Updated,
  "Updated at": "Aktualizacja dnia",
  "Updated At": "Czas aktualizacji",
  "Upgrade to a licensed plan for enhanced capabilities, including custom theming and branding, and dedicated support.": "Przejdź na licencjonowany plan, aby uzyskać rozszerzone możliwości, w tym niestandardowe motywy, personalizację oraz dedykowane wsparcie.",
  Upload,
  "Upload a GGUF model": "Prześlij model GGUF",
  "Upload Audio": "Prześlij audio",
  "Upload directory": "Prześlij katalog",
  "Upload files": "Prześlij pliki",
  "Upload Files": "Prześlij pliki",
  "Upload Model": "",
  "Upload Pipeline": "Prześlij przepływ",
  "Upload Progress": "Postęp przesyłania plików",
  "Upload Progress: {{uploadedFiles}}/{{totalFiles}} ({{percentage}}%)": "",
  "Uploading file...": "",
  URL,
  "URL is required": "",
  "URL Mode": "Tryb URL",
  Usage,
  "Use '#' in the prompt input to load and include your knowledge.": "Użyj '#' w polu wprowadzania zapytania, aby załadować i uwzględnić swoją wiedzę.",
  "Use /v1/chat/completions endpoint instead of /v1/audio/transcriptions for potentially better accuracy.": "",
  "Use Chat Completions API": "",
  "Use groups to group your users and assign permissions.": "Wykorzystaj grupy do grupowania użytkowników i przypisywania uprawnień.",
  "Use LLM": "",
  "Use no proxy to fetch page contents.": "",
  "Use proxy designated by http_proxy and https_proxy environment variables to fetch page contents.": "",
  user,
  User,
  "User Groups": "",
  "User location successfully retrieved.": "Lokalizacja użytkownika została pomyślnie pobrana.",
  "User menu": "",
  "User Webhooks": "Webhooki użytkownika",
  Username,
  Users,
  "Uses DefaultAzureCredential to authenticate": "",
  "Uses OAuth 2.1 Dynamic Client Registration": "",
  "Using Entire Document": "",
  "Using Focused Retrieval": "",
  "Using the default arena model with all models. Click the plus button to add custom models.": "Korzystanie z domyślnego modelu areny ze wszystkimi modelami. Kliknij przycisk plus, aby dodać niestandardowe modele.",
  "Valid time units:": "Dozwolone jednostki czasu:",
  "Validate certificate": "",
  Valves,
  "Valves updated": "Zawory zaktualizowane",
  "Valves updated successfully": "Zawory zaktualizowane pomyślnie",
  variable,
  "Verify Connection": "Sprawdź połączenie",
  "Verify SSL Certificate": "Sprawdź certyfikat SSL",
  Version,
  "Version {{selectedVersion}} of {{totalVersions}}": "Wersja {{selectedVersion}} z {{totalVersions}}",
  "View Replies": "Wyświetl odpowiedzi",
  "View Result from **{{NAME}}**": "",
  Visibility,
  Vision,
  Voice,
  "Voice Input": "Wprowadzanie głosowe",
  "Voice mode": "",
  "Voice Mode Custom Prompt": "",
  "Voice Mode Prompt": "",
  Warning,
  "Warning:": "Uwaga:",
  "Warning: Enabling this will allow users to upload arbitrary code on the server.": "Uwaga: Włączenie tego pozwoli użytkownikom na przesyłanie dowolnego kodu na serwer.",
  "Warning: Jupyter execution enables arbitrary code execution, posing severe security risks—proceed with extreme caution.": "Uwaga: Uruchamianie Jupytera umożliwia wykonywanie dowolnego kodu, co stwarza poważne zagrożenia dla bezpieczeństwa – postępuj z ekstremalną ostrożnością.",
  Web,
  "Web API": "Interfejs API sieci web",
  "Web Loader Engine": "",
  "Web Search": "Wyszukiwarka internetowa",
  "Web Search Engine": "Silnik wyszukiweania w sieci",
  "Web Search in Chat": "Wyszukiwanie w sieci Web na czacie",
  "Web Search Query Generation": "Generowanie zapytań Wyszukiwania Sieciowego",
  "Webhook URL": "Adres URL webhooka",
  "Webpage URL": "",
  "WebUI Settings": "Ustawienia interfejsu WebUI",
  "WebUI URL": "Adres URL interfejsu internetowego",
  'WebUI will make requests to "{{url}}"': 'WebUI będzie wysyłać żądania do "{{url}}"',
  'WebUI will make requests to "{{url}}/api/chat"': 'WebUI będzie wysyłać żądania do "{{url}}/api/chat"',
  'WebUI will make requests to "{{url}}/chat/completions"': 'WebUI będzie wysyłać żądania do "{{url}}/chat/completions"',
  "What are you trying to achieve?": "Do czego dążysz?",
  "What are you working on?": "Nad czym pracujesz?",
  "What's New in": "Co nowego w",
  "When enabled, the model will respond to each chat message in real-time, generating a response as soon as the user sends a message. This mode is useful for live chat applications, but may impact performance on slower hardware.": "Gdy jest włączony, model będzie reagował na każdą wiadomość czatu w czasie rzeczywistym, generując odpowiedź tak szybko, jak użytkownik wyśle wiadomość. Ten tryb jest przydatny dla aplikacji czatu na żywo, ale może wpływać na wydajność na wolniejszym sprzęcie.",
  "wherever you are": "gdziekolwiek jesteś",
  "Whether to paginate the output. Each page will be separated by a horizontal rule and page number. Defaults to False.": "",
  "Whisper (Local)": "Szept (Lokalny)",
  "Why?": "Dlaczego?",
  "Widescreen Mode": "Tryb panoramiczny",
  Width,
  Won,
  "Works together with top-k. A higher value (e.g., 0.95) will lead to more diverse text, while a lower value (e.g., 0.5) will generate more focused and conservative text.": "",
  Workspace,
  "Workspace Permissions": "Uprawnienia do przestrzeni roboczej",
  Write,
  "Write a summary in 50 words that summarizes {{topic}}.": "Napisz krótkie podsumowanie w maksymalnie 50 słowach, które streszcza [temat lub słowo kluczowe].",
  "Write something...": "Napisz coś...",
  "Write your model system prompt content here\ne.g.) You are Mario from Super Mario Bros, acting as an assistant.": "Wpisz tutaj treść systemowego promptu swojego modelu\nnp.: Jesteś Mario z Super Mario Bros i działasz jako asystent.",
  "Yacy Instance URL": "",
  "Yacy Password": "",
  "Yacy Username": "",
  Yesterday,
  "Yesterday at {{LOCALIZED_TIME}}": "",
  You,
  "You are currently using a trial license. Please contact support to upgrade your license.": "Obecnie używasz licencji trial. Skontaktuj się z supportem, aby zupgradować Twoją licencję.",
  "You can only chat with a maximum of {{maxCount}} file(s) at a time.": "Możesz rozmawiać jednocześnie maksymalnie z {{maxCount}} plikiem(i).",
  "You can personalize your interactions with LLMs by adding memories through the 'Manage' button below, making them more helpful and tailored to you.": "Możesz spersonalizować swoje interakcje z LLM, dodając wspomnienia za pomocą przycisku 'Zarządzaj' poniżej, dzięki czemu będą one bardziej pomocne i dostosowane do Ciebie.",
  "You cannot upload an empty file.": "Nie możesz przesłać pustego pliku.",
  "You do not have permission to send messages in this channel.": "",
  "You do not have permission to send messages in this thread.": "",
  "You do not have permission to upload files.": "Nie masz uprawnień do przesyłania plików.",
  "You have no archived conversations.": "Nie posiadasz zarchiwizowanych konwersacji.",
  "You have shared this chat": "Udostępniłeś tę rozmowę",
  "You're a helpful assistant.": "Jesteś pomocnym asystentem.",
  "You're now logged in.": "Jesteś teraz zalogowany.",
  "Your Account": "",
  "Your account status is currently pending activation.": "Twoje konto oczekuje obecnie na aktywację.",
  "Your entire contribution will go directly to the plugin developer; Open WebUI does not take any percentage. However, the chosen funding platform might have its own fees.": "Cała Twoja wpłata trafi bezpośrednio do dewelopera wtyczki; Open WebUI nie pobiera żadnej prowizji. Należy jednak pamiętać, że wybrana platforma finansowania może mieć własne opłaty.",
  YouTube,
  "Youtube Language": "Język Youtube",
  "Youtube Proxy URL": "URL proxy Youtube"
};
const translationsMap = translations;
function translate(key, params) {
  let result = translationsMap[key];
  if (result === void 0 || result === "") {
    result = key;
  }
  if (params) {
    Object.entries(params).forEach(([paramKey, paramValue]) => {
      result = result.replace(new RegExp(`\\{\\{${paramKey}\\}\\}`, "g"), String(paramValue));
    });
  }
  return result;
}
const i18nInstance = {
  t: translate
};
const i18n = writable(i18nInstance);
const initI18n = (_lang) => {
  document.documentElement.setAttribute("lang", "pl-PL");
};
var root_1 = from_html(`<link crossorigin="anonymous" rel="icon" href="/static/favicon.png"/>`);
var root = from_html(`<!> <!>`, 1);
function _layout($$anchor, $$props) {
  push($$props, false);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const AI_MODELS = [
    {
      id: "moonshotai/kimi-k2-thinking",
      name: "Kimi K2 Thinking",
      owned_by: "openai",
      external: true,
      source: "nvidia"
    },
    {
      id: "bytedance/seed-oss-36b-instruct",
      name: "Seed 36B Instruct",
      owned_by: "openai",
      external: true,
      source: "nvidia"
    },
    {
      id: "deepseek-ai/deepseek-v3.1",
      name: "DeepSeek V3.1",
      owned_by: "openai",
      external: true,
      source: "nvidia"
    },
    {
      id: "deepseek-ai/deepseek-r1-0528",
      name: "DeepSeek R1",
      owned_by: "openai",
      external: true,
      source: "nvidia"
    },
    {
      id: "amazon/nova-2-lite-v1",
      name: "Amazon Nova 2 Lite",
      owned_by: "openrouter",
      external: true,
      source: "openrouter"
    }
  ];
  setContext("i18n", i18n);
  const BREAKPOINT = 768;
  const staticConfig = {
    status: true,
    name: "Open WebUI",
    version: "0.6.40",
    default_locale: "pl-PL",
    default_models: "moonshotai/kimi-k2-thinking",
    default_prompt_suggestions: [
      {
        content: "Wymyśl nazwę",
        title: ["Wymyśl nazwę", "dla nowej kawiarni"]
      },
      {
        content: "Przetłumacz tekst",
        title: ["Przetłumacz tekst", "z polskiego na angielski"]
      },
      {
        content: "Zadaj mi pytanie",
        title: ["Zadaj mi pytanie", "żeby rozpocząć ciekawą rozmowę"]
      }
    ],
    features: {
      enable_admin_chat_access: true,
      enable_community_sharing: true
    }
  };
  const defaultUser = {
    id: "default",
    name: "User",
    role: "admin",
    profile_image_url: "/static/favicon.png",
    permissions: {
      chat: { temporary_enforced: false, multiple_models: true },
      features: {
        image_generation: true,
        code_interpreter: true,
        web_search: true
      }
    }
  };
  const staticModels = AI_MODELS.map((m) => ({
    ...m,
    info: { meta: { capabilities: { vision: false, usage: true } } }
  }));
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyTheme(themeValue) {
    let themeToApply = themeValue;
    {
      themeToApply = getSystemTheme();
    }
    document.documentElement.classList.remove("dark", "light", "oled-dark");
    document.documentElement.classList.add(themeToApply);
    if (themeToApply === "dark") {
      document.documentElement.style.setProperty("--color-gray-800", "#333");
      document.documentElement.style.setProperty("--color-gray-850", "#262626");
      document.documentElement.style.setProperty("--color-gray-900", "#171717");
      document.documentElement.style.setProperty("--color-gray-950", "#0d0d0d");
    }
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeToApply === "light" ? "#ffffff" : "#171717");
    }
  }
  {
    initI18n();
    config.set(staticConfig);
    WEBUI_NAME.set(staticConfig.name);
    user$1.set(defaultUser);
    models.set(staticModels);
    const defaultTheme = "system";
    theme.set(defaultTheme);
    applyTheme(defaultTheme);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if ($theme() === "system") {
        applyTheme("system");
      }
    });
    mobile.set(window.innerWidth < BREAKPOINT);
  }
  onMount(() => {
    settings.set({});
    const onResize = () => mobile.set(window.innerWidth < BREAKPOINT);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });
  init();
  var fragment = root();
  head("12qhfyh", ($$anchor2) => {
    var link = root_1();
    deferred_template_effect(() => {
      $document.title = $WEBUI_NAME() ?? "";
    });
    append($$anchor2, link);
  });
  var node = first_child(fragment);
  slot(node, $$props, "default", {}, null);
  var node_1 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => $theme() === "system" ? typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : $theme() === "dark" || $theme() === "oled-dark" ? "dark" : "light");
    Toaster(node_1, {
      get theme() {
        return get($0);
      },
      richColors: true,
      position: "top-right"
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _layout as component,
  _layout$1 as universal
};
