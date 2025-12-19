const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./zz_OZ2-x.js","./BJXpAMXr.js","./Dyq6N3Rz.js","./Bd2P5WIS.js","./CZqSbRSh.js","./CVh7obxn.js","../assets/index.VD1H7yn_.css","./ERhjC6zA.js","./Bqawpx0t.js","../assets/Suggestions.DrFmGorV.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _hasSelection, _isPointerDownOnContent, _containsSelection, _contentNode, _contentMounted, _triggerNode, _props, _snippetProps, _props2, _SwitchRootState_instances, toggle_fn, _sharedProps, _snippetProps2, _props3, _shouldRender, _props4, _snippetProps3, _props5;
import { _ as __vitePreload } from "./CQrtv1eE.js";
import { e as comment, a as append, f as from_html, q as on, s as setup_stores, g as event, c as store_get, t as text, b as set_text, i as from_svg } from "./Dyq6N3Rz.js";
import { i as init } from "./ERhjC6zA.js";
import { h as hydrating, j as hydrate_next, bf as is_runes, d as block, M as effect, m as untrack, N as render_effect, w as deep_read_state, bg as safe_not_equal, R as get_descriptor, aD as teardown, aW as is_array, p as push, ac as first_child, v as get$1, ae as user_derived, a as pop, aa as state, W as set, aT as noop$2, c as child, r as reset, ad as sibling, t as template_effect, ag as getContext, o as onMount, aj as onDestroy, a9 as mutable_source, ah as legacy_pre_effect, ai as legacy_pre_effect_reset, bh as remove_textarea_child, ab as tick, Y as derived_safe_equal, al as mutate, af as createEventDispatcher, ak as next, am as writable, bi as derived, aV as get$2, an as setContext, bj as hasContext, bk as invalidate_inner_signals, ao as deferred_template_effect, ap as $document } from "./Bd2P5WIS.js";
import { B as BranchManager, p as prop, i as if_block, r as rest_props, s as spread_props, l as legacy_rest_props, b as bind_this } from "./CZqSbRSh.js";
import { h as head } from "./De1V06Pc.js";
import { G as attribute_effect, s as slot, L as WEBUI_BASE_URL, b as set_class, c as set_attribute, E as clsx, K as settings, M as set_value, H as config, a as set_style, t as toast, e as each, i as index, I as models, r as remove_input_defaults, N as set_checked, u as user, d as chatId, O as socket, P as artifactCode, Q as showControls, R as showArtifacts, T as showEmbeds, n as mobile, U as WEBUI_API_BASE_URL$1, q as temporaryChatEnabled, V as WEBUI_VERSION, W as WEBUI_NAME, l as currentChatPage, m as chats, x as tools, z as toolServers, X as MODEL_DOWNLOAD_POOL, Y as artifactContents, f as folders, j as showSidebar, w as showArchivedChats, h as selectedFolder, k as chatTitle, g as tags, y as functions, p as pinnedChats } from "./CVh7obxn.js";
import { m as mergeProps, s as srOnlyStylesString, i as bind_value, j as Context, w as watch, k as getTabbableCandidates, l as afterSleep, u as useRefById, n as isTouch, o as isFocusVisible, p as getDataOpenClosed, q as getAriaExpanded, r as useGraceArea, t as onDestroyEffect, v as isElement, x as noop$1, y as box, z as snippet, F as Floating_layer, A as useId, P as Popper_layer_force_mount, B as Popper_layer, E as getFloatingContentCSSVars, G as Mounted, H as Floating_layer_anchor, J as ENTER, K as SPACE$1, N as getDataRequired, O as getDataChecked, Q as getDataDisabled, R as getAriaRequired, T as getAriaChecked, V as getDisabled, I as Icon, W as marked, X as panzoom, h as Icon$1, Y as transition, Z as fade, _ as html, S as Spinner, $ as quintOut, a0 as slide, a1 as element$1, a2 as createFocusTrap, a3 as FocusTrap, f as flyAndScale, D as Dropdown, a as Dropdown_menu_content, e as Menu_item, C as ConfirmDialog, L as Loader, a4 as bind_files, a5 as Menu$1, a6 as Menu_trigger, M as Menu_sub, b as Menu_sub_trigger, d as Menu_sub_content, U as UserMenu } from "./BJXpAMXr.js";
import { g as goto } from "./Bqawpx0t.js";
import { p as page } from "./DghAKJkW.js";
import { c as component } from "./CCr-QNUs.js";
function key(node, get_key, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var branches = new BranchManager(node);
  var legacy = !is_runes();
  block(() => {
    var key2 = get_key();
    if (legacy && key2 !== null && typeof key2 === "object") {
      key2 = /** @type {V} */
      {};
    }
    branches.ensure(key2, render_fn);
  });
}
function action(dom, action2, get_value) {
  effect(() => {
    var payload = untrack(() => action2(dom, get_value == null ? void 0 : get_value()) || {});
    if (get_value && (payload == null ? void 0 : payload.update)) {
      var inited = false;
      var prev = (
        /** @type {any} */
        {}
      );
      render_effect(() => {
        var value = get_value();
        deep_read_state(value);
        if (inited && safe_not_equal(prev, value)) {
          prev = value;
          payload.update(value);
        }
      });
      inited = true;
    }
    if (payload == null ? void 0 : payload.destroy) {
      return () => (
        /** @type {Function} */
        payload.destroy()
      );
    }
  });
}
function bind_prop(props, prop2, value) {
  var desc = get_descriptor(props, prop2);
  if (desc && desc.set) {
    props[prop2] = value;
    teardown(() => {
      props[prop2] = null;
    });
  }
}
function stopPropagation(fn) {
  return function(...args) {
    var event2 = (
      /** @type {Event} */
      args[0]
    );
    event2.stopPropagation();
    return fn == null ? void 0 : fn.apply(this, args);
  };
}
function preventDefault(fn) {
  return function(...args) {
    var event2 = (
      /** @type {Event} */
      args[0]
    );
    event2.preventDefault();
    return fn == null ? void 0 : fn.apply(this, args);
  };
}
function bubble_event($$props, event2) {
  var _a;
  var events = (
    /** @type {Record<string, Function[] | Function>} */
    (_a = $$props.$$events) == null ? void 0 : _a[event2.type]
  );
  var callbacks = is_array(events) ? events.slice() : events == null ? [] : [events];
  for (var fn of callbacks) {
    fn.call(this, event2);
  }
}
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = { randomUUID };
function v4(options, buf, offset) {
  var _a;
  if (native.randomUUID && true && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? ((_a = options.rng) == null ? void 0 : _a.call(options)) ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
var root_1$h = from_html(`<input/>`);
var root_2$n = from_html(`<input/>`);
function Hidden_input($$anchor, $$props) {
  push($$props, true);
  let value = prop($$props, "value", 15), restProps = rest_props($$props, ["$$slots", "$$events", "$$legacy", "value"]);
  const mergedProps = user_derived(() => mergeProps(restProps, {
    "aria-hidden": "true",
    tabindex: -1,
    style: srOnlyStylesString
  }));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var input = root_1$h();
      attribute_effect(input, () => ({ ...get$1(mergedProps), value: value() }), void 0, void 0, void 0, void 0, true);
      append($$anchor2, input);
    };
    var alternate = ($$anchor2) => {
      var input_1 = root_2$n();
      attribute_effect(input_1, () => ({ ...get$1(mergedProps) }), void 0, void 0, void 0, void 0, true);
      bind_value(input_1, value);
      append($$anchor2, input_1);
    };
    if_block(node, ($$render) => {
      if (get$1(mergedProps).type === "checkbox") $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
const LINK_PREVIEW_CONTENT_ATTR = "data-link-preview-content";
const LINK_PREVIEW_TRIGGER_ATTR = "data-link-preview-trigger";
class LinkPreviewRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __privateAdd(this, _hasSelection, state(false));
    __privateAdd(this, _isPointerDownOnContent, state(false));
    __privateAdd(this, _containsSelection, state(false));
    __publicField(this, "timeout", null);
    __privateAdd(this, _contentNode, state(null));
    __privateAdd(this, _contentMounted, state(false));
    __privateAdd(this, _triggerNode, state(null));
    __publicField(this, "isOpening", false);
    this.opts = opts;
    watch(() => this.opts.open.current, (isOpen) => {
      if (!isOpen) {
        this.hasSelection = false;
        return;
      }
      const handlePointerUp = () => {
        this.containsSelection = false;
        this.isPointerDownOnContent = false;
        afterSleep(1, () => {
          var _a;
          const isSelection = ((_a = document.getSelection()) == null ? void 0 : _a.toString()) !== "";
          if (isSelection) {
            this.hasSelection = true;
          } else {
            this.hasSelection = false;
          }
        });
      };
      const unsubListener = on(document, "pointerup", handlePointerUp);
      if (!this.contentNode) return;
      const tabCandidates = getTabbableCandidates(this.contentNode);
      for (const candidate of tabCandidates) {
        candidate.setAttribute("tabindex", "-1");
      }
      return () => {
        unsubListener();
        this.hasSelection = false;
        this.isPointerDownOnContent = false;
      };
    });
  }
  get hasSelection() {
    return get$1(__privateGet(this, _hasSelection));
  }
  set hasSelection(value) {
    set(__privateGet(this, _hasSelection), value, true);
  }
  get isPointerDownOnContent() {
    return get$1(__privateGet(this, _isPointerDownOnContent));
  }
  set isPointerDownOnContent(value) {
    set(__privateGet(this, _isPointerDownOnContent), value, true);
  }
  get containsSelection() {
    return get$1(__privateGet(this, _containsSelection));
  }
  set containsSelection(value) {
    set(__privateGet(this, _containsSelection), value, true);
  }
  get contentNode() {
    return get$1(__privateGet(this, _contentNode));
  }
  set contentNode(value) {
    set(__privateGet(this, _contentNode), value, true);
  }
  get contentMounted() {
    return get$1(__privateGet(this, _contentMounted));
  }
  set contentMounted(value) {
    set(__privateGet(this, _contentMounted), value, true);
  }
  get triggerNode() {
    return get$1(__privateGet(this, _triggerNode));
  }
  set triggerNode(value) {
    set(__privateGet(this, _triggerNode), value, true);
  }
  clearTimeout() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  handleOpen() {
    this.clearTimeout();
    if (this.opts.open.current) return;
    this.isOpening = true;
    this.timeout = window.setTimeout(
      () => {
        if (this.isOpening) {
          this.opts.open.current = true;
          this.isOpening = false;
        }
      },
      this.opts.openDelay.current
    );
  }
  immediateClose() {
    this.clearTimeout();
    this.isOpening = false;
    this.opts.open.current = false;
  }
  handleClose() {
    this.isOpening = false;
    this.clearTimeout();
    if (!this.isPointerDownOnContent && !this.hasSelection) {
      this.timeout = window.setTimeout(
        () => {
          this.opts.open.current = false;
        },
        this.opts.closeDelay.current
      );
    }
  }
}
_hasSelection = new WeakMap();
_isPointerDownOnContent = new WeakMap();
_containsSelection = new WeakMap();
_contentNode = new WeakMap();
_contentMounted = new WeakMap();
_triggerNode = new WeakMap();
class LinkPreviewTriggerState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __privateAdd(this, _props, user_derived(() => {
      var _a;
      return {
        id: this.opts.id.current,
        "aria-haspopup": "dialog",
        "aria-expanded": getAriaExpanded(this.root.opts.open.current),
        "data-state": getDataOpenClosed(this.root.opts.open.current),
        "aria-controls": (_a = this.root.contentNode) == null ? void 0 : _a.id,
        role: "button",
        [LINK_PREVIEW_TRIGGER_ATTR]: "",
        onpointerenter: this.onpointerenter,
        onfocus: this.onfocus,
        onblur: this.onblur,
        onpointerleave: this.onpointerleave
      };
    }));
    this.opts = opts;
    this.root = root2;
    this.onpointerenter = this.onpointerenter.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.onblur = this.onblur.bind(this);
    useRefById({
      ...opts,
      onRefChange: (node) => {
        this.root.triggerNode = node;
      }
    });
  }
  onpointerenter(e) {
    if (isTouch(e)) return;
    this.root.handleOpen();
  }
  onpointerleave(e) {
    if (isTouch(e)) return;
    if (!this.root.contentMounted) {
      this.root.immediateClose();
    }
  }
  onfocus(e) {
    if (!isFocusVisible(e.currentTarget)) return;
    this.root.handleOpen();
  }
  onblur(_) {
    this.root.handleClose();
  }
  get props() {
    return get$1(__privateGet(this, _props));
  }
  set props(value) {
    set(__privateGet(this, _props), value);
  }
}
_props = new WeakMap();
class LinkPreviewContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "onInteractOutside", (e) => {
      this.opts.onInteractOutside.current(e);
      if (e.defaultPrevented) return;
      this.root.handleClose();
    });
    __publicField(this, "onEscapeKeydown", (e) => {
      var _a, _b;
      (_b = (_a = this.opts.onEscapeKeydown).current) == null ? void 0 : _b.call(_a, e);
      if (e.defaultPrevented) return;
      this.root.handleClose();
    });
    __publicField(this, "onOpenAutoFocus", (e) => {
      e.preventDefault();
    });
    __publicField(this, "onCloseAutoFocus", (e) => {
      e.preventDefault();
    });
    __privateAdd(this, _snippetProps, user_derived(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _props2, user_derived(() => ({
      id: this.opts.id.current,
      tabindex: -1,
      "data-state": getDataOpenClosed(this.root.opts.open.current),
      [LINK_PREVIEW_CONTENT_ATTR]: "",
      onpointerdown: this.onpointerdown,
      onpointerenter: this.onpointerenter,
      onfocusout: this.onfocusout
    })));
    __publicField(this, "popperProps", {
      onInteractOutside: this.onInteractOutside,
      onEscapeKeydown: this.onEscapeKeydown,
      onOpenAutoFocus: this.onOpenAutoFocus,
      onCloseAutoFocus: this.onCloseAutoFocus
    });
    this.opts = opts;
    this.root = root2;
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerenter = this.onpointerenter.bind(this);
    this.onfocusout = this.onfocusout.bind(this);
    useRefById({
      ...opts,
      onRefChange: (node) => {
        this.root.contentNode = node;
      },
      deps: () => this.root.opts.open.current
    });
    useGraceArea({
      triggerNode: () => this.root.triggerNode,
      contentNode: () => this.opts.ref.current,
      enabled: () => this.root.opts.open.current,
      onPointerExit: () => {
        this.root.handleClose();
      }
    });
    onDestroyEffect(() => {
      this.root.clearTimeout();
    });
  }
  onpointerdown(e) {
    const target = e.target;
    if (!isElement(target)) return;
    if (e.currentTarget.contains(target)) {
      this.root.containsSelection = true;
    }
    this.root.hasSelection = true;
    this.root.isPointerDownOnContent = true;
  }
  onpointerenter(e) {
    if (isTouch(e)) return;
    this.root.handleOpen();
  }
  onfocusout(e) {
    e.preventDefault();
  }
  get snippetProps() {
    return get$1(__privateGet(this, _snippetProps));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps), value);
  }
  get props() {
    return get$1(__privateGet(this, _props2));
  }
  set props(value) {
    set(__privateGet(this, _props2), value);
  }
}
_snippetProps = new WeakMap();
_props2 = new WeakMap();
const LinkPreviewRootContext = new Context("LinkPreview.Root");
function useLinkPreviewRoot(props) {
  return LinkPreviewRootContext.set(new LinkPreviewRootState(props));
}
function useLinkPreviewTrigger(props) {
  return new LinkPreviewTriggerState(props, LinkPreviewRootContext.get());
}
function useLinkPreviewContent(props) {
  return new LinkPreviewContentState(props, LinkPreviewRootContext.get());
}
function Link_preview($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), onOpenChange = prop($$props, "onOpenChange", 3, noop$1), openDelay = prop($$props, "openDelay", 3, 700), closeDelay = prop($$props, "closeDelay", 3, 300);
  useLinkPreviewRoot({
    open: box.with(() => open(), (v) => {
      open(v);
      onOpenChange()(v);
    }),
    openDelay: box.with(() => openDelay()),
    closeDelay: box.with(() => closeDelay())
  });
  var fragment = comment();
  var node = first_child(fragment);
  component(node, () => Floating_layer, ($$anchor2, FloatingLayer_Root) => {
    FloatingLayer_Root($$anchor2, {
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        snippet(node_1, () => $$props.children ?? noop$2);
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    });
  });
  append($$anchor, fragment);
  pop();
}
var root_4$9 = from_html(`<div><div><!></div></div>`);
var root_9$6 = from_html(`<div><div><!></div></div>`);
var root_7$a = from_html(`<!> <!>`, 1);
function Link_preview_content($$anchor, $$props) {
  push($$props, true);
  let id = prop($$props, "id", 19, useId), ref = prop($$props, "ref", 15, null), side = prop($$props, "side", 3, "top"), sideOffset = prop($$props, "sideOffset", 3, 0), align = prop($$props, "align", 3, "center"), avoidCollisions = prop($$props, "avoidCollisions", 3, true), arrowPadding = prop($$props, "arrowPadding", 3, 0), sticky = prop($$props, "sticky", 3, "partial"), hideWhenDetached = prop($$props, "hideWhenDetached", 3, false), collisionPadding = prop($$props, "collisionPadding", 3, 0), onInteractOutside = prop($$props, "onInteractOutside", 3, noop$1), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop$1), forceMount = prop($$props, "forceMount", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "ref",
    "side",
    "sideOffset",
    "align",
    "avoidCollisions",
    "arrowPadding",
    "sticky",
    "hideWhenDetached",
    "collisionPadding",
    "onInteractOutside",
    "onEscapeKeydown",
    "forceMount"
  ]);
  const contentState = useLinkPreviewContent({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v) => ref(v)),
    onInteractOutside: box.with(() => onInteractOutside()),
    onEscapeKeydown: box.with(() => onEscapeKeydown())
  });
  const floatingProps = user_derived(() => ({
    side: side(),
    sideOffset: sideOffset(),
    align: align(),
    avoidCollisions: avoidCollisions(),
    arrowPadding: arrowPadding(),
    sticky: sticky(),
    hideWhenDetached: hideWhenDetached(),
    collisionPadding: collisionPadding()
  }));
  const mergedProps = user_derived(() => mergeProps(restProps, get$1(floatingProps), contentState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      {
        const popper = ($$anchor3, $$arg0) => {
          let props = () => $$arg0 == null ? void 0 : $$arg0().props;
          let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
          const mergedProps2 = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("link-preview") }));
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var fragment_3 = comment();
              var node_2 = first_child(fragment_3);
              {
                let $0 = user_derived(() => ({
                  props: get$1(mergedProps2),
                  wrapperProps: wrapperProps(),
                  ...contentState.snippetProps
                }));
                snippet(node_2, () => $$props.child, () => get$1($0));
              }
              append($$anchor4, fragment_3);
            };
            var alternate = ($$anchor4) => {
              var div = root_4$9();
              attribute_effect(div, () => ({ ...wrapperProps() }));
              var div_1 = child(div);
              attribute_effect(div_1, () => ({ ...get$1(mergedProps2) }));
              var node_3 = child(div_1);
              snippet(node_3, () => $$props.children ?? noop$2);
              reset(div_1);
              reset(div);
              append($$anchor4, div);
            };
            if_block(node_1, ($$render) => {
              if ($$props.child) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_2);
        };
        Popper_layer_force_mount($$anchor2, spread_props(() => get$1(mergedProps), () => contentState.popperProps, {
          get enabled() {
            return contentState.root.opts.open.current;
          },
          get id() {
            return id();
          },
          trapFocus: false,
          loop: false,
          preventScroll: false,
          forceMount: true,
          popper,
          $$slots: { popper: true }
        }));
      }
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_4 = comment();
      var node_4 = first_child(fragment_4);
      {
        var consequent_3 = ($$anchor3) => {
          {
            const popper = ($$anchor4, $$arg0) => {
              let props = () => $$arg0 == null ? void 0 : $$arg0().props;
              let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
              const mergedProps2 = user_derived(() => mergeProps(props(), { style: getFloatingContentCSSVars("link-preview") }));
              var fragment_6 = root_7$a();
              var node_5 = first_child(fragment_6);
              {
                var consequent_2 = ($$anchor5) => {
                  var fragment_7 = comment();
                  var node_6 = first_child(fragment_7);
                  {
                    let $0 = user_derived(() => ({
                      props: get$1(mergedProps2),
                      wrapperProps: wrapperProps(),
                      ...contentState.snippetProps
                    }));
                    snippet(node_6, () => $$props.child, () => get$1($0));
                  }
                  append($$anchor5, fragment_7);
                };
                var alternate_1 = ($$anchor5) => {
                  var div_2 = root_9$6();
                  attribute_effect(div_2, () => ({ ...wrapperProps() }));
                  var div_3 = child(div_2);
                  attribute_effect(div_3, () => ({ ...get$1(mergedProps2) }));
                  var node_7 = child(div_3);
                  snippet(node_7, () => $$props.children ?? noop$2);
                  reset(div_3);
                  reset(div_2);
                  append($$anchor5, div_2);
                };
                if_block(node_5, ($$render) => {
                  if ($$props.child) $$render(consequent_2);
                  else $$render(alternate_1, false);
                });
              }
              var node_8 = sibling(node_5, 2);
              Mounted(node_8, {
                get mounted() {
                  return contentState.root.contentMounted;
                },
                set mounted($$value) {
                  contentState.root.contentMounted = $$value;
                }
              });
              append($$anchor4, fragment_6);
            };
            Popper_layer($$anchor3, spread_props(() => get$1(mergedProps), () => contentState.popperProps, {
              get present() {
                return contentState.root.opts.open.current;
              },
              get id() {
                return id();
              },
              trapFocus: false,
              loop: false,
              preventScroll: false,
              forceMount: false,
              popper,
              $$slots: { popper: true }
            }));
          }
        };
        if_block(
          node_4,
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
var root_3$j = from_html(`<a><!></a>`);
function Link_preview_trigger($$anchor, $$props) {
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
  const triggerState = useLinkPreviewTrigger({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, triggerState.props));
  var fragment = comment();
  var node = first_child(fragment);
  component(node, () => Floating_layer_anchor, ($$anchor2, FloatingLayer_Anchor) => {
    FloatingLayer_Anchor($$anchor2, {
      get id() {
        return id();
      },
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        {
          var consequent = ($$anchor4) => {
            var fragment_2 = comment();
            var node_2 = first_child(fragment_2);
            snippet(node_2, () => $$props.child, () => ({ props: get$1(mergedProps) }));
            append($$anchor4, fragment_2);
          };
          var alternate = ($$anchor4) => {
            var a = root_3$j();
            attribute_effect(a, () => ({ ...get$1(mergedProps) }));
            var node_3 = child(a);
            snippet(node_3, () => $$props.children ?? noop$2);
            reset(a);
            append($$anchor4, a);
          };
          if_block(node_1, ($$render) => {
            if ($$props.child) $$render(consequent);
            else $$render(alternate, false);
          });
        }
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    });
  });
  append($$anchor, fragment);
  pop();
}
const SWITCH_ROOT_ATTR = "data-switch-root";
const SWITCH_THUMB_ATTR = "data-switch-thumb";
class SwitchRootState {
  constructor(opts) {
    __privateAdd(this, _SwitchRootState_instances);
    __publicField(this, "opts");
    __privateAdd(this, _sharedProps, user_derived(() => ({
      "data-disabled": getDataDisabled(this.opts.disabled.current),
      "data-state": getDataChecked(this.opts.checked.current),
      "data-required": getDataRequired(this.opts.required.current)
    })));
    __privateAdd(this, _snippetProps2, user_derived(() => ({ checked: this.opts.checked.current })));
    __privateAdd(this, _props3, user_derived(() => ({
      ...this.sharedProps,
      id: this.opts.id.current,
      role: "switch",
      disabled: getDisabled(this.opts.disabled.current),
      "aria-checked": getAriaChecked(this.opts.checked.current),
      "aria-required": getAriaRequired(this.opts.required.current),
      [SWITCH_ROOT_ATTR]: "",
      onclick: this.onclick,
      onkeydown: this.onkeydown
    })));
    this.opts = opts;
    useRefById(opts);
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
  }
  onkeydown(e) {
    if (!(e.key === ENTER || e.key === SPACE$1) || this.opts.disabled.current) return;
    e.preventDefault();
    __privateMethod(this, _SwitchRootState_instances, toggle_fn).call(this);
  }
  onclick(_) {
    if (this.opts.disabled.current) return;
    __privateMethod(this, _SwitchRootState_instances, toggle_fn).call(this);
  }
  get sharedProps() {
    return get$1(__privateGet(this, _sharedProps));
  }
  set sharedProps(value) {
    set(__privateGet(this, _sharedProps), value);
  }
  get snippetProps() {
    return get$1(__privateGet(this, _snippetProps2));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps2), value);
  }
  get props() {
    return get$1(__privateGet(this, _props3));
  }
  set props(value) {
    set(__privateGet(this, _props3), value);
  }
}
_SwitchRootState_instances = new WeakSet();
toggle_fn = function() {
  this.opts.checked.current = !this.opts.checked.current;
};
_sharedProps = new WeakMap();
_snippetProps2 = new WeakMap();
_props3 = new WeakMap();
class SwitchInputState {
  constructor(root2) {
    __publicField(this, "root");
    __privateAdd(this, _shouldRender, user_derived(() => this.root.opts.name.current !== void 0));
    __privateAdd(this, _props4, user_derived(() => ({
      type: "checkbox",
      name: this.root.opts.name.current,
      value: this.root.opts.value.current,
      checked: this.root.opts.checked.current,
      disabled: this.root.opts.disabled.current,
      required: this.root.opts.required.current
    })));
    this.root = root2;
  }
  get shouldRender() {
    return get$1(__privateGet(this, _shouldRender));
  }
  set shouldRender(value) {
    set(__privateGet(this, _shouldRender), value);
  }
  get props() {
    return get$1(__privateGet(this, _props4));
  }
  set props(value) {
    set(__privateGet(this, _props4), value);
  }
}
_shouldRender = new WeakMap();
_props4 = new WeakMap();
class SwitchThumbState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __privateAdd(this, _snippetProps3, user_derived(() => ({ checked: this.root.opts.checked.current })));
    __privateAdd(this, _props5, user_derived(() => ({
      ...this.root.sharedProps,
      id: this.opts.id.current,
      [SWITCH_THUMB_ATTR]: ""
    })));
    this.opts = opts;
    this.root = root2;
    useRefById(opts);
  }
  get snippetProps() {
    return get$1(__privateGet(this, _snippetProps3));
  }
  set snippetProps(value) {
    set(__privateGet(this, _snippetProps3), value);
  }
  get props() {
    return get$1(__privateGet(this, _props5));
  }
  set props(value) {
    set(__privateGet(this, _props5), value);
  }
}
_snippetProps3 = new WeakMap();
_props5 = new WeakMap();
const SwitchRootContext = new Context("Switch.Root");
function useSwitchRoot(props) {
  return SwitchRootContext.set(new SwitchRootState(props));
}
function useSwitchInput() {
  return new SwitchInputState(SwitchRootContext.get());
}
function useSwitchThumb(props) {
  return new SwitchThumbState(props, SwitchRootContext.get());
}
function Switch_input($$anchor, $$props) {
  push($$props, false);
  const inputState = useSwitchInput();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Hidden_input($$anchor2, spread_props(() => inputState.props));
    };
    if_block(node, ($$render) => {
      if (inputState.shouldRender) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$m = from_html(`<button><!></button>`);
var root$o = from_html(`<!> <!>`, 1);
function Switch($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, useId), disabled = prop($$props, "disabled", 3, false), required = prop($$props, "required", 3, false), checked = prop($$props, "checked", 15, false), value = prop($$props, "value", 3, "on"), name = prop($$props, "name", 3, void 0), type = prop($$props, "type", 3, "button"), onCheckedChange = prop($$props, "onCheckedChange", 3, noop$1), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "ref",
    "id",
    "disabled",
    "required",
    "checked",
    "value",
    "name",
    "type",
    "onCheckedChange"
  ]);
  const rootState = useSwitchRoot({
    checked: box.with(() => checked(), (v) => {
      var _a;
      checked(v);
      (_a = onCheckedChange()) == null ? void 0 : _a(v);
    }),
    disabled: box.with(() => disabled() ?? false),
    required: box.with(() => required()),
    value: box.with(() => value()),
    name: box.with(() => name()),
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, rootState.props, { type: type() }));
  var fragment = root$o();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        let $0 = user_derived(() => ({ props: get$1(mergedProps), ...rootState.snippetProps }));
        snippet(node_1, () => $$props.child, () => get$1($0));
      }
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$m();
      attribute_effect(button, () => ({ ...get$1(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$2, () => rootState.snippetProps);
      reset(button);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  var node_3 = sibling(node, 2);
  Switch_input(node_3, {});
  append($$anchor, fragment);
  pop();
}
var root_2$l = from_html(`<span><!></span>`);
function Switch_thumb($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, useId), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "ref",
    "id"
  ]);
  const thumbState = useSwitchThumb({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v) => ref(v))
  });
  const mergedProps = user_derived(() => mergeProps(restProps, thumbState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        let $0 = user_derived(() => ({ props: get$1(mergedProps), ...thumbState.snippetProps }));
        snippet(node_1, () => $$props.child, () => get$1($0));
      }
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var span = root_2$l();
      attribute_effect(span, () => ({ ...get$1(mergedProps) }));
      var node_2 = child(span);
      snippet(node_2, () => $$props.children ?? noop$2, () => thumbState.snippetProps);
      reset(span);
      append($$anchor2, span);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Arrow_up($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const iconNode = [
    ["path", { "d": "m5 12 7-7 7 7" }],
    ["path", { "d": "M12 19V5" }]
  ];
  Icon($$anchor, spread_props({ name: "arrow-up" }, () => $$sanitized_props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}
function Square($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const iconNode = [
    [
      "rect",
      { "width": "18", "height": "18", "x": "3", "y": "3", "rx": "2" }
    ]
  ];
  Icon($$anchor, spread_props({ name: "square" }, () => $$sanitized_props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}
var TTS_RESPONSE_SPLIT = /* @__PURE__ */ ((TTS_RESPONSE_SPLIT2) => {
  TTS_RESPONSE_SPLIT2["PUNCTUATION"] = "punctuation";
  TTS_RESPONSE_SPLIT2["PARAGRAPHS"] = "paragraphs";
  TTS_RESPONSE_SPLIT2["NONE"] = "none";
  return TTS_RESPONSE_SPLIT2;
})(TTS_RESPONSE_SPLIT || {});
function findMatchingClosingTag(src, openTag, closeTag) {
  let depth = 1;
  let index2 = openTag.length;
  while (depth > 0 && index2 < src.length) {
    if (src.startsWith(openTag, index2)) {
      depth++;
    } else if (src.startsWith(closeTag, index2)) {
      depth--;
    }
    if (depth > 0) {
      index2++;
    }
  }
  return depth === 0 ? index2 + closeTag.length : -1;
}
function parseAttributes(tag) {
  const attributes = {};
  const attrRegex = /(\w+)="(.*?)"/g;
  let match;
  while ((match = attrRegex.exec(tag)) !== null) {
    attributes[match[1]] = match[2];
  }
  return attributes;
}
function detailsTokenizer(src) {
  const detailsRegex = /^<details(\s+[^>]*)?>\n/;
  const summaryRegex = /^<summary>(.*?)<\/summary>\n/;
  const detailsMatch = detailsRegex.exec(src);
  if (detailsMatch) {
    const endIndex = findMatchingClosingTag(src, "<details", "</details>");
    if (endIndex === -1) return;
    const fullMatch = src.slice(0, endIndex);
    const detailsTag = detailsMatch[0];
    const attributes = parseAttributes(detailsTag);
    let content = fullMatch.slice(detailsTag.length, -10).trim();
    let summary = "";
    const summaryMatch = summaryRegex.exec(content);
    if (summaryMatch) {
      summary = summaryMatch[1].trim();
      content = content.slice(summaryMatch[0].length).trim();
    }
    return {
      type: "details",
      raw: fullMatch,
      summary,
      text: content,
      attributes
      // Include extracted attributes from <details>
    };
  }
}
function detailsStart(src) {
  return src.match(/^<details>/) ? 0 : -1;
}
function detailsRenderer(token) {
  const attributesString = token.attributes ? Object.entries(token.attributes).map(([key2, value]) => `${key2}="${value}"`).join(" ") : "";
  return `<details ${attributesString}>
  ${token.summary ? `<summary>${token.summary}</summary>` : ""}
  ${token.text}
  </details>`;
}
function detailsExtension() {
  return {
    name: "details",
    level: "block",
    start: detailsStart,
    tokenizer: detailsTokenizer,
    renderer: detailsRenderer
  };
}
function markedExtension(options = {}) {
  return {
    extensions: [detailsExtension()]
  };
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const replaceTokens = (content, char, user2) => {
  const tokens = [
    { regex: /{{char}}/gi, replacement: char },
    { regex: /{{user}}/gi, replacement: user2 },
    {
      regex: /{{VIDEO_FILE_ID_([a-f0-9-]+)}}/gi,
      replacement: (_, fileId) => `<video src="${WEBUI_BASE_URL}/api/v1/files/${fileId}/content" controls></video>`
    },
    {
      regex: /{{HTML_FILE_ID_([a-f0-9-]+)}}/gi,
      replacement: (_, fileId) => `<file type="html" id="${fileId}" />`
    }
  ];
  const processOutsideCodeBlocks = (text2, replacementFn) => {
    return text2.split(/(```[\s\S]*?```|`[\s\S]*?`)/).map((segment) => {
      return segment.startsWith("```") || segment.startsWith("`") ? segment : replacementFn(segment);
    }).join("");
  };
  content = processOutsideCodeBlocks(content, (segment) => {
    tokens.forEach(({ regex, replacement }) => {
      if (replacement !== void 0 && replacement !== null) {
        segment = segment.replace(regex, replacement);
      }
    });
    return segment;
  });
  return content;
};
const sanitizeResponseContent = (content) => {
  return content.replace(/<\|[a-z]*$/, "").replace(/<\|[a-z]+\|$/, "").replace(/<$/, "").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll(/<\|[a-z]+\|>/g, " ").trim();
};
const processResponseContent = (content) => {
  content = processChineseContent(content);
  return content.trim();
};
function isChineseChar(char) {
  return new RegExp("\\p{Script=Han}", "u").test(char);
}
function processChineseContent(content) {
  const lines = content.split("\n");
  const processedLines = lines.map((line) => {
    if (/[\u4e00-\u9fa5]/.test(line)) {
      if (line.includes("*")) {
        if (/（|）/.test(line)) {
          line = processChineseDelimiters(line, "**", "（", "）");
          line = processChineseDelimiters(line, "*", "（", "）");
        }
        if (/“|”/.test(line)) {
          line = processChineseDelimiters(line, "**", "“", "”");
          line = processChineseDelimiters(line, "*", "“", "”");
        }
      }
    }
    return line;
  });
  content = processedLines.join("\n");
  return content;
}
function processChineseDelimiters(line, symbol, leftSymbol, rightSymbol) {
  const escapedSymbol = escapeRegExp(symbol);
  const regex = new RegExp(
    `(.?)(?<!${escapedSymbol})(${escapedSymbol})([^${escapedSymbol}]+)(${escapedSymbol})(?!${escapedSymbol})(.)`,
    "g"
  );
  return line.replace(regex, (match, l, left, content, right, r) => {
    const result = content.startsWith(leftSymbol) && l && l.length > 0 && isChineseChar(l[l.length - 1]) || content.endsWith(rightSymbol) && r && r.length > 0 && isChineseChar(r[0]);
    if (result) {
      return `${l} ${left}${content}${right} ${r}`;
    } else {
      return match;
    }
  });
}
function unescapeHtml(html2) {
  const doc = new DOMParser().parseFromString(html2, "text/html");
  return doc.documentElement.textContent;
}
const splitStream = (splitOn) => {
  let buffer = "";
  return new TransformStream({
    transform(chunk, controller) {
      buffer += chunk;
      const parts = buffer.split(splitOn);
      parts.slice(0, -1).forEach((part) => controller.enqueue(part));
      buffer = parts[parts.length - 1];
    },
    flush(controller) {
      if (buffer) controller.enqueue(buffer);
    }
  });
};
const convertMessagesToHistory = (messages) => {
  const history = {
    messages: {},
    currentId: null
  };
  let parentMessageId = null;
  let messageId = null;
  for (const message of messages) {
    messageId = v4();
    if (parentMessageId !== null) {
      history.messages[parentMessageId].childrenIds = [
        ...history.messages[parentMessageId].childrenIds,
        messageId
      ];
    }
    history.messages[messageId] = {
      ...message,
      id: messageId,
      parentId: parentMessageId,
      childrenIds: []
    };
    parentMessageId = messageId;
  }
  history.currentId = messageId;
  return history;
};
const compressImage = async (imageUrl, maxWidth, maxHeight) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      var _a;
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;
      if (maxWidth && maxHeight) {
        if (width <= maxWidth && height <= maxHeight) {
          resolve(imageUrl);
          return;
        }
        if (width / height > maxWidth / maxHeight) {
          height = Math.round(maxWidth * height / width);
          width = maxWidth;
        } else {
          width = Math.round(maxHeight * width / height);
          height = maxHeight;
        }
      } else if (maxWidth) {
        if (width <= maxWidth) {
          resolve(imageUrl);
          return;
        }
        height = Math.round(maxWidth * height / width);
        width = maxWidth;
      } else if (maxHeight) {
        if (height <= maxHeight) {
          resolve(imageUrl);
          return;
        }
        width = Math.round(maxHeight * width / height);
        height = maxHeight;
      }
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, width, height);
      const mimeType = (_a = imageUrl.match(/^data:([^;]+);/)) == null ? void 0 : _a[1];
      const compressedUrl = canvas.toDataURL(mimeType);
      resolve(compressedUrl);
    };
    img.onerror = (error) => reject(error);
    img.src = imageUrl;
  });
};
const copyToClipboard = async (text2, html2 = null, formatted = false) => {
  if (formatted) {
    let styledHtml = "";
    if (!html2) {
      const options = {};
      marked.use(markedExtension(options));
      const htmlContent = marked.parse(text2);
      styledHtml = `
                        <div>
                                <style>
                                        pre {
                                                background-color: #f6f8fa;
                                                border-radius: 6px;
                                                padding: 16px;
                                                overflow: auto;
                                        }
                                        code {
                                                font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
                                                font-size: 14px;
                                        }
                                        blockquote {
                                                border-left: 4px solid #dfe2e5;
                                                padding-left: 16px;
                                                color: #6a737d;
                                                margin-left: 0;
                                                margin-right: 0;
                                        }
                                        table {
                                                border-collapse: collapse;
                                                width: 100%;
                                                margin-bottom: 16px;
                                        }
                                        table, th, td {
                                                border: 1px solid #dfe2e5;
                                        }
                                        th, td {
                                                padding: 8px 12px;
                                        }
                                        th {
                                                background-color: #f6f8fa;
                                        }
                                </style>
                                ${htmlContent}
                        </div>
                `;
    } else {
      styledHtml = html2;
    }
    const blob = new Blob([styledHtml], { type: "text/html" });
    try {
      const data = new ClipboardItem({
        "text/html": blob,
        "text/plain": new Blob([text2], { type: "text/plain" })
      });
      await navigator.clipboard.write([data]);
      return true;
    } catch (err) {
      console.error("Error copying formatted content:", err);
      return await copyToClipboard(text2);
    }
  } else {
    let result = false;
    if (!navigator.clipboard) {
      const textArea = document.createElement("textarea");
      textArea.value = text2;
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand("copy");
        result = true;
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
      return result;
    }
    result = await navigator.clipboard.writeText(text2).then(() => {
      return true;
    }).catch((error) => {
      console.error("Async: Could not copy text: ", error);
      return false;
    });
    return result;
  }
};
const getUserPosition = async (raw = false) => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).catch((error) => {
    console.error("Error getting user location:", error);
    throw error;
  });
  if (!position) {
    return "Location not available";
  }
  const { latitude, longitude } = position.coords;
  if (raw) {
    return { latitude, longitude };
  } else {
    return `${latitude.toFixed(3)}, ${longitude.toFixed(3)} (lat, long)`;
  }
};
const removeDetails = (content, types) => {
  for (const type of types) {
    content = content.replace(
      new RegExp(`<details\\s+type="${type}"[^>]*>.*?<\\/details>`, "gis"),
      ""
    );
  }
  return content;
};
const removeAllDetails = (content) => {
  content = content.replace(/<details[^>]*>.*?<\/details>/gis, "");
  return content;
};
const processDetails = (content) => {
  content = removeDetails(content, ["reasoning", "code_interpreter"]);
  const detailsRegex = /<details\s+type="tool_calls"([^>]*)>([\s\S]*?)<\/details>/gis;
  const matches = content.match(detailsRegex);
  if (matches) {
    for (const match of matches) {
      const attributesRegex = /(\w+)="([^"]*)"/g;
      const attributes = {};
      let attributeMatch;
      while ((attributeMatch = attributesRegex.exec(match)) !== null) {
        attributes[attributeMatch[1]] = attributeMatch[2];
      }
      content = content.replace(match, `"${attributes.result}"`);
    }
  }
  return content;
};
const getMessageContentParts = (content, splitOn = "punctuation") => {
  const text2 = content.replace(/<[^>]*>/g, "").trim();
  if (!text2) return [];
  switch (splitOn) {
    case TTS_RESPONSE_SPLIT.PARAGRAPHS:
      return text2.split(/\n\n+/).filter((p) => p.trim());
    case TTS_RESPONSE_SPLIT.NONE:
      return [text2];
    default:
    case TTS_RESPONSE_SPLIT.PUNCTUATION:
      return text2.split(new RegExp("(?<=[.!?])\\s+")).filter((s) => s.trim());
  }
};
const getPromptVariables = (user_name, user_location) => {
  return {
    "{{USER_NAME}}": user_name,
    "{{USER_LOCATION}}": user_location || "Unknown",
    "{{CURRENT_DATETIME}}": getCurrentDateTime(),
    "{{CURRENT_DATE}}": getFormattedDate(),
    "{{CURRENT_TIME}}": getFormattedTime(),
    "{{CURRENT_WEEKDAY}}": getWeekday(),
    "{{CURRENT_TIMEZONE}}": getUserTimezone(),
    "{{USER_LANGUAGE}}": "pl-PL"
  };
};
const getFormattedDate = () => {
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const getFormattedTime = () => {
  const date = /* @__PURE__ */ new Date();
  return date.toTimeString().split(" ")[0];
};
const getCurrentDateTime = () => {
  return `${getFormattedDate()} ${getFormattedTime()}`;
};
const getUserTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
const getWeekday = () => {
  const date = /* @__PURE__ */ new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[date.getDay()];
};
const createMessagesList = (history, messageId) => {
  if (messageId === null) {
    return [];
  }
  const message = history.messages[messageId];
  if (message === void 0) {
    return [];
  }
  if (message == null ? void 0 : message.parentId) {
    return [...createMessagesList(history, message.parentId), message];
  } else {
    return [message];
  }
};
const formatFileSize = (size) => {
  if (size == null) return "Unknown size";
  if (typeof size !== "number" || size < 0) return "Invalid size";
  if (size === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(1)} ${units[unitIndex]}`;
};
const getLineCount = (text2) => {
  return text2 ? text2.split("\n").length : 0;
};
const extractContentFromFile = async (file) => {
  const textExtensions = [".txt", ".md", ".csv", ".json", ".js", ".ts", ".css", ".html", ".xml", ".yaml", ".yml", ".rtf"];
  function getExtension(filename) {
    const dot = filename.lastIndexOf(".");
    return dot === -1 ? "" : filename.substr(dot).toLowerCase();
  }
  function readAsText(file2) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file2);
    });
  }
  const type = file.type || "";
  const ext = getExtension(file.name);
  if (type.startsWith("text/") || textExtensions.includes(ext)) {
    return await readAsText(file);
  }
  try {
    return await readAsText(file);
  } catch (err) {
    throw new Error("Unsupported or non-text file type: " + (file.name || type));
  }
};
const convertHeicToJpeg = async (file) => {
  var _a;
  const { default: heic2any } = await __vitePreload(async () => {
    const { default: heic2any2 } = await import("./zz_OZ2-x.js").then((n) => n.h);
    return { default: heic2any2 };
  }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url);
  try {
    return await heic2any({ blob: file, toType: "image/jpeg" });
  } catch (err) {
    if ((_a = err == null ? void 0 : err.message) == null ? void 0 : _a.includes("already browser readable")) {
      return file;
    }
    throw err;
  }
};
const getCodeBlockContents = (content) => {
  const codeBlockContents = content.match(/```[\s\S]*?```/g);
  const codeBlocks = [];
  let htmlContent = "";
  let cssContent = "";
  let jsContent = "";
  if (codeBlockContents) {
    codeBlockContents.forEach((block2) => {
      const lang = block2.split("\n")[0].replace("```", "").trim().toLowerCase();
      const code = block2.replace(/```[\s\S]*?\n/, "").replace(/```$/, "");
      codeBlocks.push({ lang, code });
    });
    codeBlocks.forEach((block2) => {
      const { lang, code } = block2;
      if (lang === "html") {
        htmlContent += code + "\n";
      } else if (lang === "css") {
        cssContent += code + "\n";
      } else if (lang === "javascript" || lang === "js") {
        jsContent += code + "\n";
      }
    });
  } else {
    const inlineHtml = content.match(/<html>[\s\S]*?<\/html>/gi);
    const inlineCss = content.match(/<style>[\s\S]*?<\/style>/gi);
    const inlineJs = content.match(/<script>[\s\S]*?<\/script>/gi);
    if (inlineHtml) {
      inlineHtml.forEach((block2) => {
        const content2 = block2.replace(/<\/?html>/gi, "");
        htmlContent += content2 + "\n";
      });
    }
    if (inlineCss) {
      inlineCss.forEach((block2) => {
        const content2 = block2.replace(/<\/?style>/gi, "");
        cssContent += content2 + "\n";
      });
    }
    if (inlineJs) {
      inlineJs.forEach((block2) => {
        const content2 = block2.replace(/<\/?script>/gi, "");
        jsContent += content2 + "\n";
      });
    }
  }
  return {
    codeBlocks,
    html: htmlContent.trim(),
    css: cssContent.trim(),
    js: jsContent.trim()
  };
};
var root$n = from_html(`<span><span></span></span>`);
function Skeleton($$anchor, $$props) {
  let size = prop($$props, "size", 8, "md");
  var span = root$n();
  var span_1 = child(span);
  reset(span);
  template_effect(() => {
    set_class(
      span,
      1,
      `flex ${size() === "md" ? "size-4 my-2" : size() === "xs" ? "size-2 my-1" : "size-3 my-1"} mx-1`,
      "svelte-pwh38d"
    );
    set_class(span_1, 1, `inline-flex ${size() === "md" ? "size-4" : size() === "xs" ? "size-2" : "size-3"} rounded-full bg-gray-800 dark:bg-white animate-breathe`, "svelte-pwh38d");
  });
  append($$anchor, span);
}
var root_1$g = from_html(`<div class="modal fixed top-0 right-0 left-0 bottom-0 bg-black text-white w-full min-h-screen h-screen flex justify-center z-9999 overflow-hidden overscroll-contain"><div class=" absolute left-0 w-full flex justify-between select-none z-20"><div><button class=" p-5"><!></button></div> <div><button class=" p-5 z-999" aria-label="Download image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6"><path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"></path><path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"></path></svg></button></div></div> <div class="flex h-full max-h-full justify-center items-center z-0"><img class=" mx-auto h-full object-scale-down select-none" draggable="false"/></div></div>`);
function ImagePreview($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let show = prop($$props, "show", 12, false);
  let src = prop($$props, "src", 8, "");
  let alt = prop($$props, "alt", 8, "");
  const i18n = getContext("i18n");
  let previewElement = mutable_source(null);
  let instance = mutable_source();
  let sceneElement = mutable_source();
  const handleKeyDown = (event2) => {
    if (event2.key === "Escape") {
      show(false);
    }
  };
  onMount(() => {
  });
  onDestroy(() => {
    show(false);
    if (get$1(previewElement)) {
      document.body.removeChild(get$1(previewElement));
    }
  });
  legacy_pre_effect(() => (get$1(sceneElement), panzoom), () => {
    if (get$1(sceneElement)) {
      set(instance, panzoom(get$1(sceneElement), { bounds: true, boundsPadding: 0.1, zoomSpeed: 0.065 }));
    }
  });
  legacy_pre_effect(() => (deep_read_state(show()), get$1(previewElement)), () => {
    if (show() && get$1(previewElement)) {
      document.body.appendChild(get$1(previewElement));
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else if (get$1(previewElement)) {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.removeChild(get$1(previewElement));
      document.body.style.overflow = "unset";
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$g();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var button = child(div_2);
      var node_1 = child(button);
      Icon$1(node_1, { name: "XMark", className: "size-6" });
      reset(button);
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var button_1 = child(div_3);
      reset(div_3);
      reset(div_1);
      var div_4 = sibling(div_1, 2);
      var img = child(div_4);
      bind_this(img, ($$value) => set(sceneElement, $$value), () => get$1(sceneElement));
      reset(div_4);
      reset(div);
      bind_this(div, ($$value) => set(previewElement, $$value), () => get$1(previewElement));
      template_effect(() => {
        set_attribute(img, "src", src());
        set_attribute(img, "alt", alt());
      });
      event("pointerdown", button, (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();
        show(false);
      });
      event("click", button, (e) => {
        show(false);
      });
      event("click", button_1, () => {
        if (src().startsWith("data:image/")) {
          const base64Data = src().split(",")[1];
          const blob = new Blob([Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0))], { type: "image/png" });
          const mimeType = blob.type || "image/png";
          const fileName = `${$i18n().t("Generated Image").toLowerCase().replace(/ /g, "_")}.${mimeType.split("/")[1]}`;
          {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = fileName;
            a.click();
            URL.revokeObjectURL(url);
          }
          return;
        } else if (src().startsWith("blob:")) {
          fetch(src()).then((response) => response.blob()).then((blob) => {
            const mimeType = blob.type || "image/png";
            const blobWithType = new Blob([blob], { type: mimeType });
            const fileName = `${$i18n().t("Generated Image").toLowerCase().replace(/ /g, "_")}.${mimeType.split("/")[1]}`;
            {
              const url = URL.createObjectURL(blobWithType);
              const a = document.createElement("a");
              a.href = url;
              a.download = fileName;
              a.click();
              URL.revokeObjectURL(url);
            }
          }).catch((error) => {
            console.error("Error downloading blob:", error);
          });
          return;
        } else if (src().startsWith("/") || src().startsWith("http://") || src().startsWith("https://")) {
          fetch(src()).then((response) => response.blob()).then((blob) => {
            const mimeType = blob.type || "image/png";
            const blobWithType = new Blob([blob], { type: mimeType });
            const fileName = `${$i18n().t("Generated Image").toLowerCase().replace(/ /g, "_")}.${mimeType.split("/")[1]}`;
            {
              const url = URL.createObjectURL(blobWithType);
              const a = document.createElement("a");
              a.href = url;
              a.download = fileName;
              a.click();
              URL.revokeObjectURL(url);
            }
          }).catch((error) => {
            console.error("Error downloading remote image:", error);
          });
          return;
        }
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (show()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$f = from_html(`<div class=" absolute -top-1 -right-1"><button class=" bg-white text-black border border-white rounded-full group-hover:visible invisible transition" type="button"><!></button></div>`);
var root$m = from_html(`<!> <div class=" relative group w-fit flex items-center"><button type="button"><img draggable="false" data-cy="image"/></button> <!></div>`, 1);
function Image$1($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let src = prop($$props, "src", 8, "");
  let alt = prop($$props, "alt", 8, "");
  let className = prop($$props, "className", 24, () => {
    var _a;
    return ` w-full ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden focus:outline-hidden"}`;
  });
  let imageClassName = prop($$props, "imageClassName", 8, "rounded-lg");
  let dismissible = prop($$props, "dismissible", 8, false);
  let onDismiss = prop($$props, "onDismiss", 8, () => {
  });
  const i18n = getContext("i18n");
  let _src = mutable_source("");
  let showImagePreview = mutable_source(false);
  legacy_pre_effect(() => (deep_read_state(src()), WEBUI_BASE_URL), () => {
    set(_src, src().startsWith("/") ? `${WEBUI_BASE_URL}${src()}` : src());
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$m();
  var node = first_child(fragment);
  ImagePreview(node, {
    get src() {
      return get$1(_src);
    },
    get alt() {
      return alt();
    },
    get show() {
      return get$1(showImagePreview);
    },
    set show($$value) {
      set(showImagePreview, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var button = child(div);
  var img = child(button);
  reset(button);
  var node_1 = sibling(button, 2);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root_1$f();
      var button_1 = child(div_1);
      var node_2 = child(button_1);
      Icon$1(node_2, { name: "XMark", className: "size-4" });
      reset(button_1);
      reset(div_1);
      template_effect(($0) => set_attribute(button_1, "aria-label", $0), [() => ($i18n(), untrack(() => $i18n().t("Remove image")))]);
      event("click", button_1, () => {
        onDismiss()();
      });
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if (dismissible()) $$render(consequent);
    });
  }
  reset(div);
  template_effect(
    ($0) => {
      set_class(button, 1, clsx(className()));
      set_attribute(button, "aria-label", $0);
      set_attribute(img, "src", get$1(_src));
      set_attribute(img, "alt", alt());
      set_class(img, 1, clsx(imageClassName()));
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Show image preview")))
    ]
  );
  event("click", button, () => {
    set(showImagePreview, true);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$l = from_html(`<div class="flex my-2 gap-2.5 border px-4 py-3 border-red-600/10 bg-red-600/10 rounded-lg"><div class=" self-start mt-0.5"></div> <div class=" self-center text-sm"><!></div></div>`);
function Error$1($$anchor, $$props) {
  push($$props, false);
  let content = prop($$props, "content", 8, "");
  init();
  var div = root$l();
  var div_1 = sibling(child(div), 2);
  var node = child(div_1);
  {
    var consequent = ($$anchor2) => {
      var text$1 = text();
      template_effect(() => set_text(text$1, content()));
      append($$anchor2, text$1);
    };
    var alternate_4 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent_1 = ($$anchor4) => {
              var text_1 = text();
              template_effect(() => set_text(text_1, (deep_read_state(content()), untrack(() => content().error.message))));
              append($$anchor4, text_1);
            };
            var alternate_2 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_3 = first_child(fragment_4);
              {
                var consequent_2 = ($$anchor5) => {
                  var text_2 = text();
                  template_effect(() => set_text(text_2, (deep_read_state(content()), untrack(() => content().detail))));
                  append($$anchor5, text_2);
                };
                var alternate_1 = ($$anchor5) => {
                  var fragment_6 = comment();
                  var node_4 = first_child(fragment_6);
                  {
                    var consequent_3 = ($$anchor6) => {
                      var text_3 = text();
                      template_effect(() => set_text(text_3, (deep_read_state(content()), untrack(() => content().message))));
                      append($$anchor6, text_3);
                    };
                    var alternate = ($$anchor6) => {
                      var text_4 = text();
                      template_effect(($0) => set_text(text_4, $0), [
                        () => (deep_read_state(content()), untrack(() => JSON.stringify(content())))
                      ]);
                      append($$anchor6, text_4);
                    };
                    if_block(
                      node_4,
                      ($$render) => {
                        if (deep_read_state(content()), untrack(() => {
                          var _a;
                          return (_a = content()) == null ? void 0 : _a.message;
                        })) $$render(consequent_3);
                        else $$render(alternate, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_6);
                };
                if_block(
                  node_3,
                  ($$render) => {
                    if (deep_read_state(content()), untrack(() => {
                      var _a;
                      return (_a = content()) == null ? void 0 : _a.detail;
                    })) $$render(consequent_2);
                    else $$render(alternate_1, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_4);
            };
            if_block(node_2, ($$render) => {
              if (deep_read_state(content()), untrack(() => {
                var _a, _b, _c;
                return ((_a = content()) == null ? void 0 : _a.error) && ((_c = (_b = content()) == null ? void 0 : _b.error) == null ? void 0 : _c.message);
              })) $$render(consequent_1);
              else $$render(alternate_2, false);
            });
          }
          append($$anchor3, fragment_2);
        };
        var alternate_3 = ($$anchor3) => {
          var text_5 = text();
          template_effect(($0) => set_text(text_5, $0), [
            () => (deep_read_state(content()), untrack(() => JSON.stringify(content())))
          ]);
          append($$anchor3, text_5);
        };
        if_block(
          node_1,
          ($$render) => {
            if (typeof content() === "object" && content() !== null) $$render(consequent_4);
            else $$render(alternate_3, false);
          },
          true
        );
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (typeof content() === "string") $$render(consequent);
      else $$render(alternate_4, false);
    });
  }
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
const disableSingleTilde = {
  tokenizer: {
    del(src) {
      const doubleMatch = /^~~(?=\S)([\s\S]*?\S)~~/.exec(src);
      if (doubleMatch) {
        return {
          type: "del",
          raw: doubleMatch[0],
          text: doubleMatch[1],
          tokens: this.lexer.inlineTokens(doubleMatch[1])
        };
      }
      const singleMatch = /^~(?=\S)([\s\S]*?\S)~/.exec(src);
      if (singleMatch) {
        return {
          type: "text",
          raw: singleMatch[0],
          text: singleMatch[0]
          // include both tildes as literal text
        };
      }
      return false;
    }
  }
};
function escapeHtml$1(s) {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
}
function mentionStart(src) {
  return src.indexOf("<");
}
function mentionTokenizer(src, options = {}) {
  const trigger = options.triggerChar ?? "@";
  const re = new RegExp(`^<\\${trigger}([\\w.\\-:/]+)(?:\\|([^>]*))?>`);
  const m = re.exec(src);
  if (!m) return;
  const [, id, label] = m;
  return {
    type: "mention",
    raw: m[0],
    triggerChar: trigger,
    id,
    label: label && label.length > 0 ? label : id
  };
}
function mentionRenderer(token, options = {}) {
  const trigger = options.triggerChar ?? "@";
  const cls = options.className ?? "mention";
  const extra = options.extraAttrs ?? {};
  const attrs = Object.entries({
    class: cls,
    "data-type": "mention",
    "data-id": token.id,
    "data-mention-suggestion-char": trigger,
    ...extra
  }).map(([k, v]) => `${k}="${escapeHtml$1(String(v))}"`).join(" ");
  return `<span ${attrs}>${escapeHtml$1(trigger + token.label)}</span>`;
}
function mentionExtension(opts = {}) {
  return {
    name: "mention",
    level: "inline",
    start: mentionStart,
    tokenizer(src) {
      return mentionTokenizer.call(this, src, opts);
    },
    renderer(token) {
      return mentionRenderer(token, opts);
    }
  };
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var pairDivider = "~";
var blockDivider = "~~";
function generateNamedReferences(input, prev) {
  var entities = {};
  var characters = {};
  var blocks = input.split(blockDivider);
  var isOptionalBlock = false;
  for (var i = 0; blocks.length > i; i++) {
    var entries = blocks[i].split(pairDivider);
    for (var j = 0; j < entries.length; j += 2) {
      var entity = entries[j];
      var character = entries[j + 1];
      var fullEntity = "&" + entity + ";";
      entities[fullEntity] = character;
      if (isOptionalBlock) {
        entities["&" + entity] = character;
      }
      characters[character] = fullEntity;
    }
    isOptionalBlock = true;
  }
  return prev ? { entities: __assign$1(__assign$1({}, entities), prev.entities), characters: __assign$1(__assign$1({}, characters), prev.characters) } : { entities, characters };
}
var bodyRegExps = {
  xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
};
var namedReferences = {};
namedReferences["xml"] = generateNamedReferences(`lt~<~gt~>~quot~"~apos~'~amp~&`);
namedReferences["html4"] = generateNamedReferences(`apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~"~amp~&~lt~<~gt~>`);
namedReferences["html5"] = generateNamedReferences('Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~	~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~"~REG~®', namedReferences["html4"]);
var numericUnicodeMap = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
var fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
  return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
};
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var allNamedReferences = __assign(__assign({}, namedReferences), { all: namedReferences.html5 });
var defaultDecodeOptions = {
  scope: "body",
  level: "all"
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
  xml: {
    strict,
    attribute,
    body: bodyRegExps.xml
  },
  html4: {
    strict,
    attribute,
    body: bodyRegExps.html4
  },
  html5: {
    strict,
    attribute,
    body: bodyRegExps.html5
  }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
function getDecodedEntity(entity, references, isAttribute, isStrict) {
  var decodeResult = entity;
  var decodeEntityLastChar = entity[entity.length - 1];
  if (isAttribute && decodeEntityLastChar === "=") {
    decodeResult = entity;
  } else if (isStrict && decodeEntityLastChar !== ";") {
    decodeResult = entity;
  } else {
    var decodeResultByReference = references[entity];
    if (decodeResultByReference) {
      decodeResult = decodeResultByReference;
    } else if (entity[0] === "&" && entity[1] === "#") {
      var decodeSecondChar = entity[2];
      var decodeCode = decodeSecondChar == "x" || decodeSecondChar == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
      decodeResult = decodeCode >= 1114111 ? outOfBoundsChar : decodeCode > 65535 ? fromCodePoint(decodeCode) : fromCharCode(numericUnicodeMap[decodeCode] || decodeCode);
    }
  }
  return decodeResult;
}
function decode(text2, _a) {
  var _b = _a === void 0 ? defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? "all" : _c, _d = _b.scope, scope = _d === void 0 ? level === "xml" ? "strict" : "body" : _d;
  if (!text2) {
    return "";
  }
  var decodeRegExp = decodeRegExps[level][scope];
  var references = allNamedReferences[level].entities;
  var isAttribute = scope === "attribute";
  var isStrict = scope === "strict";
  return text2.replace(decodeRegExp, function(entity) {
    return getDecodedEntity(entity, references, isAttribute, isStrict);
  });
}
var root$k = from_html(`<textarea class="w-full h-full min-h-[100px] p-4 px-5 font-mono text-sm bg-white dark:bg-black text-gray-900 dark:text-white border-none outline-none resize-none" spellcheck="false"></textarea>`);
function CodeEditor($$anchor, $$props) {
  push($$props, false);
  let value = prop($$props, "value", 8, "");
  let onSave = prop($$props, "onSave", 8, () => {
  });
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let id = prop($$props, "id", 8, "");
  let _value = mutable_source(value());
  const handleInput = (e) => {
    set(_value, e.target.value);
    onChange()(get$1(_value));
  };
  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "s") {
      e.preventDefault();
      onSave()();
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      set(_value, get$1(_value).substring(0, start) + "	" + get$1(_value).substring(end));
      onChange()(get$1(_value));
      setTimeout(
        () => {
          textarea.selectionStart = textarea.selectionEnd = start + 1;
        },
        0
      );
    }
  };
  const focus = () => {
  };
  const formatPythonCodeHandler = async () => {
  };
  legacy_pre_effect(() => (deep_read_state(value()), get$1(_value)), () => {
    if (value() !== get$1(_value)) {
      set(_value, value());
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { focus, formatPythonCodeHandler };
  init();
  var textarea_1 = root$k();
  remove_textarea_child(textarea_1);
  template_effect(() => {
    set_attribute(textarea_1, "id", id());
    set_value(textarea_1, get$1(_value));
  });
  event("input", textarea_1, handleInput);
  event("keydown", textarea_1, handleKeyDown);
  append($$anchor, textarea_1);
  bind_prop($$props, "focus", focus);
  bind_prop($$props, "formatPythonCodeHandler", formatPythonCodeHandler);
  return pop($$exports);
}
var root_2$k = from_html(`<div class="run-code-button bg-none border-none p-0.5 cursor-not-allowed bg-white dark:bg-black"> </div>`);
var root_4$8 = from_html(`<button class="flex gap-1 items-center run-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"><div> </div></button>`);
var root_5$d = from_html(`<button class="save-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"> </button>`);
var root_6$e = from_html(`<button class="flex gap-1 items-center run-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"><div> </div></button>`);
var root_9$5 = from_html(`<pre class=" p-4 px-5 overflow-x-auto bg-white dark:bg-black"><code> </code></pre>`);
var root_10$5 = from_html(`<div class="bg-white dark:bg-black dark:text-white rounded-b-3xl! pt-0.5 pb-3 px-4 flex flex-col gap-2 text-xs"><span class="text-gray-500 italic"> </span></div>`);
var root_13$4 = from_html(`<div class=" "><div class=" text-gray-500 text-sm mb-1"> </div> <div class="text-sm"> </div></div>`);
var root_15$5 = from_html(`<div class=" "><div class=" text-gray-500 text-sm mb-1"> </div> <div> </div></div>`);
var root_17$4 = from_html(`<div class="text-sm"> </div>`);
var root_20$4 = from_html(`<img alt="Output" class=" w-full max-w-[36rem]"/>`);
var root_18$5 = from_html(`<div class="flex flex-col gap-2"></div>`);
var root_16$5 = from_html(`<div class=" "><div class=" text-gray-500 text-sm mb-1"> </div> <!> <!></div>`);
var root_14$5 = from_html(`<!> <!>`, 1);
var root_12$8 = from_html(`<div class="bg-gray-50 dark:bg-black dark:text-white rounded-b-3xl! py-4 px-4 flex flex-col gap-2"><!></div>`);
var root_11$7 = from_html(`<div class="bg-gray-50 dark:bg-black dark:text-white max-w-full overflow-x-auto scrollbar-hidden"></div> <!>`, 1);
var root$j = from_html(`<div><div dir="ltr"><div class="absolute left-0 right-0 py-2.5 pr-3 text-text-300 pl-4.5 text-xs font-medium dark:text-white"> </div> <div><div class="flex items-center gap-0.5"><button class="flex gap-1 items-center bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"><div class=" -translate-y-[0.5px]"><!></div> <div> </div></button> <!> <!> <button class="copy-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"> </button> <!></div></div> <div><div class=" pt-8 bg-white dark:bg-black"></div> <!></div> <!></div></div>`);
function CodeBlock($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let id = prop($$props, "id", 8, "");
  let edit = prop($$props, "edit", 8, true);
  let onSave = prop($$props, "onSave", 8, (e) => {
  });
  let onUpdate = prop($$props, "onUpdate", 8, (e) => {
  });
  let onPreview = prop($$props, "onPreview", 8, (e) => {
  });
  let save = prop($$props, "save", 8, false);
  let run = prop($$props, "run", 8, true);
  let preview = prop($$props, "preview", 8, false);
  let collapsed = prop($$props, "collapsed", 12, false);
  let token = prop($$props, "token", 8);
  let lang = prop($$props, "lang", 8, "");
  let code = prop($$props, "code", 12, "");
  let attributes = prop($$props, "attributes", 24, () => ({}));
  let className = prop($$props, "className", 8, "mb-2");
  let editorClassName = prop($$props, "editorClassName", 8, "");
  let stickyButtonsClassName = prop($$props, "stickyButtonsClassName", 8, "top-0");
  let _code = mutable_source("");
  const updateCode = () => {
    set(_code, code());
  };
  let _token = mutable_source(null);
  let executing = mutable_source(false);
  let stdout = mutable_source(null);
  let stderr = mutable_source(null);
  let result = mutable_source(null);
  let files = mutable_source(null);
  let copied = mutable_source(false);
  let saved = mutable_source(false);
  const collapseCodeBlock = () => {
    collapsed(!collapsed());
  };
  const saveCode = () => {
    set(saved, true);
    code(get$1(_code));
    onSave()(code());
    setTimeout(
      () => {
        set(saved, false);
      },
      1e3
    );
  };
  const copyCode = async () => {
    set(copied, true);
    await copyToClipboard(get$1(_code));
    setTimeout(
      () => {
        set(copied, false);
      },
      1e3
    );
  };
  const previewCode = () => {
    onPreview()(code());
  };
  const checkPythonCode = (str) => {
    const pythonSyntax = [
      "def ",
      "else:",
      "elif ",
      "try:",
      "except:",
      "finally:",
      "yield ",
      "lambda ",
      "assert ",
      "nonlocal ",
      "del ",
      "True",
      "False",
      "None",
      " and ",
      " or ",
      " not ",
      " in ",
      " is ",
      " with "
    ];
    for (let syntax of pythonSyntax) {
      if (str.includes(syntax)) {
        return true;
      }
    }
    return false;
  };
  const executePython = async (code2) => {
    var _a, _b;
    set(result, null);
    set(stdout, null);
    set(stderr, null);
    set(executing, true);
    if (((_b = (_a = $config()) == null ? void 0 : _a.code) == null ? void 0 : _b.engine) === "jupyter") {
      const output = await executeCode("static-token", code2).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (output) {
        if (output["stdout"]) {
          set(stdout, output["stdout"]);
          const stdoutLines = get$1(stdout).split("\n");
          for (const [idx, line] of stdoutLines.entries()) {
            if (line.startsWith("data:image/png;base64")) {
              if (get$1(files)) {
                get$1(files).push({ type: "image/png", data: line });
              } else {
                set(files, [{ type: "image/png", data: line }]);
              }
              if (get$1(stdout).includes(`${line}
`)) {
                set(stdout, get$1(stdout).replace(`${line}
`, ``));
              } else if (get$1(stdout).includes(`${line}`)) {
                set(stdout, get$1(stdout).replace(`${line}`, ``));
              }
            }
          }
        }
        if (output["result"]) {
          set(result, output["result"]);
          const resultLines = get$1(result).split("\n");
          for (const [idx, line] of resultLines.entries()) {
            if (line.startsWith("data:image/png;base64")) {
              if (get$1(files)) {
                get$1(files).push({ type: "image/png", data: line });
              } else {
                set(files, [{ type: "image/png", data: line }]);
              }
              if (get$1(result).includes(`${line}
`)) {
                set(result, get$1(result).replace(`${line}
`, ``));
              } else if (get$1(result).includes(`${line}`)) {
                set(result, get$1(result).replace(`${line}`, ``));
              }
            }
          }
        }
        output["stderr"] && set(stderr, output["stderr"]);
      }
      set(executing, false);
    } else {
      set(stderr, "Python code execution is not available. Please configure a backend code execution service.");
      set(executing, false);
    }
  };
  const onAttributesUpdate = () => {
    var _a;
    if ((_a = attributes()) == null ? void 0 : _a.output) {
      const unescapeHtml2 = (html2) => {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = html2;
        return textArea.value;
      };
      try {
        const unescapedOutput = unescapeHtml2(attributes().output);
        const output = JSON.parse(unescapedOutput);
        set(stdout, output.stdout);
        set(stderr, output.stderr);
        set(result, output.result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  onMount(async () => {
    if (token()) {
      onUpdate()(token());
    }
  });
  legacy_pre_effect(() => deep_read_state(code()), () => {
    if (code()) {
      updateCode();
    }
  });
  legacy_pre_effect(() => (deep_read_state(token()), get$1(_token)), () => {
    if (token()) {
      if (JSON.stringify(token()) !== JSON.stringify(get$1(_token))) {
        set(_token, token());
      }
    }
  });
  legacy_pre_effect(
    () => (get$1(_token), deep_read_state(onUpdate()), deep_read_state(token())),
    () => {
      if (get$1(_token)) {
        onUpdate()(token());
      }
    }
  );
  legacy_pre_effect(() => deep_read_state(attributes()), () => {
    if (attributes()) {
      onAttributesUpdate();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root$j();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var div_4 = child(div_3);
  var button = child(div_4);
  var div_5 = child(button);
  var node = child(div_5);
  Icon$1(node, { name: "ChevronUpDown", className: "size-3" });
  reset(div_5);
  var div_6 = sibling(div_5, 2);
  var text_1 = child(div_6, true);
  reset(div_6);
  reset(button);
  var node_1 = sibling(button, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment = comment();
      var node_2 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          var div_7 = root_2$k();
          var text_2 = child(div_7, true);
          reset(div_7);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Running")))]);
          append($$anchor3, div_7);
        };
        var alternate = ($$anchor3) => {
          var fragment_1 = comment();
          var node_3 = first_child(fragment_1);
          {
            var consequent_1 = ($$anchor4) => {
              var button_1 = root_4$8();
              var div_8 = child(button_1);
              var text_3 = child(div_8, true);
              reset(div_8);
              reset(button_1);
              template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Run")))]);
              event("click", button_1, async () => {
                code(get$1(_code));
                await tick();
                executePython(code());
              });
              append($$anchor4, button_1);
            };
            if_block(
              node_3,
              ($$render) => {
                if (run()) $$render(consequent_1);
              },
              true
            );
          }
          append($$anchor3, fragment_1);
        };
        if_block(node_2, ($$render) => {
          if (get$1(executing)) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment);
    };
    if_block(node_1, ($$render) => {
      if ($config(), deep_read_state(lang()), deep_read_state(code()), untrack(() => {
        var _a, _b;
        return (((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_code_execution) ?? true) && (lang().toLowerCase() === "python" || lang().toLowerCase() === "py" || lang() === "" && checkPythonCode(code()));
      })) $$render(consequent_2);
    });
  }
  var node_4 = sibling(node_1, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var button_2 = root_5$d();
      var text_4 = child(button_2, true);
      reset(button_2);
      template_effect(($0) => set_text(text_4, $0), [
        () => (get$1(saved), $i18n(), untrack(() => get$1(saved) ? $i18n().t("Saved") : $i18n().t("Save")))
      ]);
      event("click", button_2, saveCode);
      append($$anchor2, button_2);
    };
    if_block(node_4, ($$render) => {
      if (save()) $$render(consequent_3);
    });
  }
  var button_3 = sibling(node_4, 2);
  var text_5 = child(button_3, true);
  reset(button_3);
  var node_5 = sibling(button_3, 2);
  {
    var consequent_4 = ($$anchor2) => {
      var button_4 = root_6$e();
      var div_9 = child(button_4);
      var text_6 = child(div_9, true);
      reset(div_9);
      reset(button_4);
      template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Preview")))]);
      event("click", button_4, previewCode);
      append($$anchor2, button_4);
    };
    if_block(node_5, ($$render) => {
      if (deep_read_state(preview()), deep_read_state(lang()), untrack(() => preview() && ["html", "svg"].includes(lang()))) $$render(consequent_4);
    });
  }
  reset(div_4);
  reset(div_3);
  var div_10 = sibling(div_3, 2);
  var node_6 = sibling(child(div_10), 2);
  {
    var consequent_6 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_7 = first_child(fragment_2);
      {
        var consequent_5 = ($$anchor3) => {
          CodeEditor($$anchor3, {
            get value() {
              return code();
            },
            get id() {
              return id();
            },
            get lang() {
              return lang();
            },
            onSave: () => {
              saveCode();
            },
            onChange: (value) => {
              set(_code, value);
            }
          });
        };
        var alternate_1 = ($$anchor3) => {
          var pre = root_9$5();
          var code_1 = child(pre);
          var text_7 = child(code_1, true);
          reset(code_1);
          reset(pre);
          template_effect(() => {
            set_style(pre, `border-top-left-radius: 0px; border-top-right-radius: 0px; ${((get$1(executing) || get$1(stdout) || get$1(stderr) || get$1(result)) && "border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;") ?? ""}`);
            set_class(code_1, 1, `language-${lang() ?? ""} rounded-t-none whitespace-pre text-sm`);
            set_text(text_7, code());
          });
          append($$anchor3, pre);
        };
        if_block(node_7, ($$render) => {
          if (edit()) $$render(consequent_5);
          else $$render(alternate_1, false);
        });
      }
      append($$anchor2, fragment_2);
    };
    var alternate_2 = ($$anchor2) => {
      var div_11 = root_10$5();
      var span = child(div_11);
      var text_8 = child(span, true);
      reset(span);
      reset(div_11);
      template_effect(($0) => set_text(text_8, $0), [
        () => ($i18n(), deep_read_state(code()), untrack(() => $i18n().t("{{COUNT}} hidden lines", { COUNT: code().split("\n").length })))
      ]);
      append($$anchor2, div_11);
    };
    if_block(node_6, ($$render) => {
      if (!collapsed()) $$render(consequent_6);
      else $$render(alternate_2, false);
    });
  }
  reset(div_10);
  var node_8 = sibling(div_10, 2);
  {
    var consequent_14 = ($$anchor2) => {
      var fragment_4 = root_11$7();
      var div_12 = first_child(fragment_4);
      var node_9 = sibling(div_12, 2);
      {
        var consequent_13 = ($$anchor3) => {
          var div_13 = root_12$8();
          var node_10 = child(div_13);
          {
            var consequent_7 = ($$anchor4) => {
              var div_14 = root_13$4();
              var div_15 = child(div_14);
              var text_9 = child(div_15, true);
              reset(div_15);
              var div_16 = sibling(div_15, 2);
              var text_10 = child(div_16, true);
              reset(div_16);
              reset(div_14);
              template_effect(
                ($0, $1) => {
                  set_text(text_9, $0);
                  set_text(text_10, $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("STDOUT/STDERR"))),
                  () => ($i18n(), untrack(() => $i18n().t("Running...")))
                ]
              );
              append($$anchor4, div_14);
            };
            var alternate_3 = ($$anchor4) => {
              var fragment_5 = root_14$5();
              var node_11 = first_child(fragment_5);
              {
                var consequent_8 = ($$anchor5) => {
                  var div_17 = root_15$5();
                  var div_18 = child(div_17);
                  var text_11 = child(div_18, true);
                  reset(div_18);
                  var div_19 = sibling(div_18, 2);
                  var text_12 = child(div_19, true);
                  reset(div_19);
                  reset(div_17);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_11, $0);
                      set_class(div_19, 1, `text-sm font-mono whitespace-pre-wrap ${$1 ?? ""}  overflow-y-auto`);
                      set_text(text_12, get$1(stdout) || get$1(stderr));
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("STDOUT/STDERR"))),
                      () => (get$1(stdout), untrack(() => {
                        var _a, _b;
                        return ((_b = (_a = get$1(stdout)) == null ? void 0 : _a.split("\n")) == null ? void 0 : _b.length) > 100 ? `max-h-96` : "";
                      }))
                    ]
                  );
                  append($$anchor5, div_17);
                };
                if_block(node_11, ($$render) => {
                  if (get$1(stdout) || get$1(stderr)) $$render(consequent_8);
                });
              }
              var node_12 = sibling(node_11, 2);
              {
                var consequent_12 = ($$anchor5) => {
                  var div_20 = root_16$5();
                  var div_21 = child(div_20);
                  var text_13 = child(div_21, true);
                  reset(div_21);
                  var node_13 = sibling(div_21, 2);
                  {
                    var consequent_9 = ($$anchor6) => {
                      var div_22 = root_17$4();
                      var text_14 = child(div_22, true);
                      reset(div_22);
                      template_effect(($0) => set_text(text_14, $0), [
                        () => (get$1(result), untrack(() => `${JSON.stringify(get$1(result))}`))
                      ]);
                      append($$anchor6, div_22);
                    };
                    if_block(node_13, ($$render) => {
                      if (get$1(result)) $$render(consequent_9);
                    });
                  }
                  var node_14 = sibling(node_13, 2);
                  {
                    var consequent_11 = ($$anchor6) => {
                      var div_23 = root_18$5();
                      each(div_23, 5, () => get$1(files), index, ($$anchor7, file) => {
                        var fragment_6 = comment();
                        var node_15 = first_child(fragment_6);
                        {
                          var consequent_10 = ($$anchor8) => {
                            var img = root_20$4();
                            template_effect(() => set_attribute(img, "src", (get$1(file), untrack(() => get$1(file).data))));
                            append($$anchor8, img);
                          };
                          if_block(node_15, ($$render) => {
                            if (get$1(file), untrack(() => get$1(file).type.startsWith("image"))) $$render(consequent_10);
                          });
                        }
                        append($$anchor7, fragment_6);
                      });
                      reset(div_23);
                      append($$anchor6, div_23);
                    };
                    if_block(node_14, ($$render) => {
                      if (get$1(files)) $$render(consequent_11);
                    });
                  }
                  reset(div_20);
                  template_effect(($0) => set_text(text_13, $0), [() => ($i18n(), untrack(() => $i18n().t("RESULT")))]);
                  append($$anchor5, div_20);
                };
                if_block(node_12, ($$render) => {
                  if (get$1(result) || get$1(files)) $$render(consequent_12);
                });
              }
              append($$anchor4, fragment_5);
            };
            if_block(node_10, ($$render) => {
              if (get$1(executing)) $$render(consequent_7);
              else $$render(alternate_3, false);
            });
          }
          reset(div_13);
          append($$anchor3, div_13);
        };
        if_block(node_9, ($$render) => {
          if (get$1(executing) || get$1(stdout) || get$1(stderr) || get$1(result) || get$1(files)) $$render(consequent_13);
        });
      }
      template_effect(() => set_attribute(div_12, "id", `plt-canvas-${id() ?? ""}`));
      append($$anchor2, fragment_4);
    };
    if_block(node_8, ($$render) => {
      if (!collapsed()) $$render(consequent_14);
    });
  }
  reset(div_1);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_class(div_1, 1, `relative ${className() ?? ""} flex flex-col rounded-3xl border border-gray-100 dark:border-gray-850 my-0.5`);
      set_text(text2, lang());
      set_class(div_3, 1, `sticky ${stickyButtonsClassName() ?? ""} left-0 right-0 py-2 pr-3 flex items-center justify-end w-full z-10 text-xs text-black dark:text-white`);
      set_text(text_1, $0);
      set_text(text_5, $1);
      set_class(div_10, 1, `language-${lang() ?? ""} rounded-t-3xl -mt-9 ${(editorClassName() ? editorClassName() : get$1(executing) || get$1(stdout) || get$1(stderr) || get$1(result) ? "" : "rounded-b-3xl") ?? ""} overflow-hidden`);
      div_1.dir = div_1.dir;
    },
    [
      () => (deep_read_state(collapsed()), $i18n(), untrack(() => collapsed() ? $i18n().t("Expand") : $i18n().t("Collapse"))),
      () => (get$1(copied), $i18n(), untrack(() => get$1(copied) ? $i18n().t("Copied") : $i18n().t("Copy")))
    ]
  );
  event("click", button, collapseCodeBlock);
  event("click", button_3, copyCode);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1$e = from_html(`<button class="text-[10px] w-fit translate-y-[2px] px-2 py-0.5 dark:bg-white/5 dark:text-white/80 dark:hover:text-white bg-gray-50 text-black/80 hover:text-black transition rounded-xl"><span class="line-clamp-1"> </span></button>`);
function Source($$anchor, $$props) {
  push($$props, false);
  let id = prop($$props, "id", 8);
  let title = prop($$props, "title", 8, "N/A");
  let onClick = prop($$props, "onClick", 8, () => {
  });
  function getDomain(url) {
    const domain = url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
    if (domain.startsWith("www.")) {
      return domain.slice(4);
    }
    return domain;
  }
  function formattedTitle(title2) {
    if (title2.startsWith("http")) {
      return getDomain(title2);
    }
    return title2;
  }
  const getDisplayTitle = (title2) => {
    if (!title2) return "N/A";
    if (title2.length > 30) {
      return title2.slice(0, 15) + "..." + title2.slice(-10);
    }
    return title2;
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var button = root_1$e();
      var span = child(button);
      var text2 = child(span, true);
      reset(span);
      reset(button);
      template_effect(($0) => set_text(text2, $0), [
        () => (deep_read_state(title()), untrack(() => getDisplayTitle(formattedTitle(decodeURIComponent(title())))))
      ]);
      event("click", button, () => {
        onClick()(id());
      });
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (title() !== "N/A") $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$i = from_html(`<span> </span>`);
function TextToken($$anchor, $$props) {
  push($$props, false);
  let token = prop($$props, "token", 8);
  let done = prop($$props, "done", 8, true);
  let texts = mutable_source([]);
  legacy_pre_effect(() => deep_read_state(token()), () => {
    var _a;
    set(texts, (((_a = token()) == null ? void 0 : _a.raw) ?? "").split(" "));
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var text_1 = text();
      template_effect(() => set_text(text_1, (deep_read_state(token()), untrack(() => {
        var _a;
        return (_a = token()) == null ? void 0 : _a.raw;
      }))));
      append($$anchor2, text_1);
    };
    var alternate = ($$anchor2) => {
      var fragment_2 = comment();
      var node_1 = first_child(fragment_2);
      each(node_1, 1, () => get$1(texts), index, ($$anchor3, text2) => {
        var span = root_3$i();
        var text_2 = child(span);
        reset(span);
        template_effect(() => set_text(text_2, `${get$1(text2) ?? ""} `));
        transition(3, span, () => fade, () => ({ duration: 100 }));
        append($$anchor3, span);
      });
      append($$anchor2, fragment_2);
    };
    if_block(node, ($$render) => {
      if (done()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_1$d = from_html(`<code class="codespan cursor-pointer"> </code>`);
var root_2$j = from_html(`<code class="codespan cursor-pointer"> </code>`);
function CodespanToken($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let token = prop($$props, "token", 8);
  let done = prop($$props, "done", 8, true);
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var code = root_1$d();
      var text2 = child(code, true);
      reset(code);
      template_effect(($0) => set_text(text2, $0), [
        () => (deep_read_state(unescapeHtml), deep_read_state(token()), untrack(() => unescapeHtml(token().text)))
      ]);
      event("click", code, () => {
        copyToClipboard(unescapeHtml(token().text));
        toast.success($i18n().t("Copied to clipboard"));
      });
      append($$anchor2, code);
    };
    var alternate = ($$anchor2) => {
      var code_1 = root_2$j();
      var text_1 = child(code_1, true);
      reset(code_1);
      template_effect(($0) => set_text(text_1, $0), [
        () => (deep_read_state(unescapeHtml), deep_read_state(token()), untrack(() => unescapeHtml(token().text)))
      ]);
      transition(3, code_1, () => fade, () => ({ duration: 100 }));
      event("click", code_1, () => {
        copyToClipboard(unescapeHtml(token().text));
        toast.success($i18n().t("Copied to clipboard"));
      });
      append($$anchor2, code_1);
    };
    if_block(node, ($$render) => {
      if (done()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$i = from_html(`<span class="mention"> </span>`);
function MentionToken($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let token = prop($$props, "token", 8);
  let triggerChar = mutable_source("");
  let label = mutable_source("");
  let idType = mutable_source(null);
  let id = mutable_source("");
  const init$1 = () => {
    var _a, _b, _c;
    const _id = (_a = token()) == null ? void 0 : _a.id;
    const parts = _id == null ? void 0 : _id.split(":");
    if (parts) {
      set(idType, parts[0]);
      set(
        id,
        parts.slice(1).join(":")
        // in case id contains ':'
      );
    } else {
      set(idType, null);
      set(id, _id);
    }
    set(label, ((_b = token()) == null ? void 0 : _b.label) ?? get$1(id));
    set(triggerChar, ((_c = token()) == null ? void 0 : _c.triggerChar) ?? "@");
    if (get$1(triggerChar) === "@") {
      if (get$1(idType) === "U") ;
      else if (get$1(idType) === "M") {
        const model = $models().find((m) => m.id === get$1(id));
        if (model) {
          set(label, model.name);
        } else {
          set(label, $i18n().t("Unknown"));
        }
      }
    }
  };
  legacy_pre_effect(() => deep_read_state(token()), () => {
    if (token()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  Link_preview($$anchor, {
    openDelay: (
      // split by : and take first part as idType and second part as id
      // in case id contains ':'
      // User
      // Model
      0
    ),
    closeDelay: 0,
    children: ($$anchor2, $$slotProps) => {
      Link_preview_trigger($$anchor2, {
        class: " cursor-pointer no-underline! font-normal! ",
        children: ($$anchor3, $$slotProps2) => {
          var span = root_2$i();
          var text2 = child(span);
          reset(span);
          template_effect(() => set_text(text2, `${get$1(triggerChar) ?? ""}${get$1(label) ?? ""}`));
          event("click", span, async () => {
            if (get$1(triggerChar) === "@") {
              if (get$1(idType) === "U") ;
              else if (get$1(idType) === "M") {
                await goto(`/?model=${get$1(id)}`);
              }
            }
          });
          append($$anchor3, span);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
var root_4$7 = from_html(`<button class="text-[10px] w-fit translate-y-[2px] px-2 py-0.5 dark:bg-white/5 dark:text-white/80 dark:hover:text-white bg-gray-50 text-black/80 hover:text-black transition rounded-xl"><span class="line-clamp-1"> <span class="dark:text-white/50 text-black/50"> </span></span></button>`);
var root_6$d = from_html(`<div><!></div>`);
var root_5$c = from_html(`<div class="bg-gray-50 dark:bg-gray-850 rounded-xl p-1 cursor-pointer"></div>`);
var root_3$h = from_html(`<!> <!>`, 1);
function SourceToken($$anchor, $$props) {
  push($$props, false);
  let token = prop($$props, "token", 8);
  let sourceIds = prop($$props, "sourceIds", 24, () => []);
  let onClick = prop($$props, "onClick", 8, () => {
  });
  let containerElement;
  let openPreview = mutable_source(false);
  function getDomain(url) {
    const domain = url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
    if (domain.startsWith("www.")) {
      return domain.slice(4);
    }
    return domain;
  }
  function formattedTitle(title) {
    if (title.startsWith("http")) {
      return getDomain(title);
    }
    return title;
  }
  const getDisplayTitle = (title) => {
    if (!title) return "N/A";
    if (title.length > 30) {
      return title.slice(0, 15) + "..." + title.slice(-10);
    }
    return title;
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => (deep_read_state(token()), untrack(() => token().ids[0] - 1)));
        Source($$anchor2, {
          get id() {
            return get$1($0);
          },
          get title() {
            return deep_read_state(sourceIds()), deep_read_state(token()), untrack(() => sourceIds()[token().ids[0] - 1]);
          },
          get onClick() {
            return onClick();
          }
        });
      }
    };
    var alternate = ($$anchor2) => {
      Link_preview($$anchor2, {
        openDelay: 0,
        get open() {
          return get$1(openPreview);
        },
        set open($$value) {
          set(openPreview, $$value);
        },
        children: ($$anchor3, $$slotProps) => {
          var fragment_3 = root_3$h();
          var node_1 = first_child(fragment_3);
          Link_preview_trigger(node_1, {
            children: ($$anchor4, $$slotProps2) => {
              var button = root_4$7();
              var span = child(button);
              var text2 = child(span);
              var span_1 = sibling(text2);
              var text_1 = child(span_1);
              reset(span_1);
              reset(span);
              reset(button);
              template_effect(
                ($0) => {
                  set_text(text2, `${$0 ?? ""} `);
                  set_text(text_1, `+${(deep_read_state(token()), untrack(() => {
                    var _a;
                    return (((_a = token()) == null ? void 0 : _a.ids) ?? []).length - 1;
                  })) ?? ""}`);
                },
                [
                  () => (deep_read_state(sourceIds()), deep_read_state(token()), untrack(() => getDisplayTitle(formattedTitle(decodeURIComponent(sourceIds()[token().ids[0] - 1])))))
                ]
              );
              event("click", button, () => {
                set(openPreview, !get$1(openPreview));
              });
              append($$anchor4, button);
            },
            $$slots: { default: true }
          });
          var node_2 = sibling(node_1, 2);
          Link_preview_content(node_2, {
            class: "z-[999]",
            align: "start",
            strategy: "fixed",
            sideOffset: 6,
            get el() {
              return containerElement;
            },
            children: ($$anchor4, $$slotProps2) => {
              var div = root_5$c();
              each(div, 5, () => (deep_read_state(token()), untrack(() => token().ids)), index, ($$anchor5, sourceId) => {
                var div_1 = root_6$d();
                var node_3 = child(div_1);
                {
                  let $0 = derived_safe_equal(() => get$1(sourceId) - 1);
                  Source(node_3, {
                    get id() {
                      return get$1($0);
                    },
                    get title() {
                      return deep_read_state(sourceIds()), get$1(sourceId), untrack(() => sourceIds()[get$1(sourceId) - 1]);
                    },
                    get onClick() {
                      return onClick();
                    }
                  });
                }
                reset(div_1);
                append($$anchor5, div_1);
              });
              reset(div);
              append($$anchor4, div);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true },
        $$legacy: true
      });
    };
    if_block(node, ($$render) => {
      if (deep_read_state(token()), untrack(() => {
        var _a;
        return (((_a = token()) == null ? void 0 : _a.ids) ?? []).length == 1;
      })) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_7$9 = from_html(`<a target="_blank" rel="nofollow"><!></a>`);
var root_8$9 = from_html(`<a target="_blank" rel="nofollow"> </a>`);
var root_12$7 = from_html(`<strong><!></strong>`);
var root_14$4 = from_html(`<em><!></em>`);
var root_18$4 = from_html(`<br/>`);
var root_20$3 = from_html(`<del><!></del>`);
var root_24$5 = from_html(`<iframe width="100%" frameborder="0"></iframe>`);
var root_28$1 = from_html(`<sup class="footnote-ref footnote-ref-text"> </sup>`);
function MarkdownInlineTokens($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let id = prop($$props, "id", 8);
  let done = prop($$props, "done", 8, true);
  let tokens = prop($$props, "tokens", 8);
  let sourceIds = prop($$props, "sourceIds", 24, () => []);
  let onSourceClick = prop($$props, "onSourceClick", 8, () => {
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, tokens, index, ($$anchor2, token) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    {
      var consequent = ($$anchor3) => {
        var text$1 = text();
        template_effect(($0) => set_text(text$1, $0), [
          () => (deep_read_state(unescapeHtml), get$1(token), untrack(() => unescapeHtml(get$1(token).text)))
        ]);
        append($$anchor3, text$1);
      };
      var alternate_14 = ($$anchor3) => {
        var fragment_3 = comment();
        var node_2 = first_child(fragment_3);
        {
          var consequent_1 = ($$anchor4) => {
            var fragment_4 = comment();
            var node_3 = first_child(fragment_4);
            html(node_3, () => (get$1(token), untrack(() => get$1(token).raw)));
            append($$anchor4, fragment_4);
          };
          var alternate_13 = ($$anchor4) => {
            var fragment_5 = comment();
            var node_4 = first_child(fragment_5);
            {
              var consequent_3 = ($$anchor5) => {
                var fragment_6 = comment();
                var node_5 = first_child(fragment_6);
                {
                  var consequent_2 = ($$anchor6) => {
                    var a = root_7$9();
                    var node_6 = child(a);
                    {
                      let $0 = derived_safe_equal(() => `${id()}-a`);
                      MarkdownInlineTokens(node_6, {
                        get id() {
                          return get$1($0);
                        },
                        get tokens() {
                          return get$1(token), untrack(() => get$1(token).tokens);
                        },
                        get onSourceClick() {
                          return onSourceClick();
                        },
                        get done() {
                          return done();
                        }
                      });
                    }
                    reset(a);
                    template_effect(() => {
                      set_attribute(a, "href", (get$1(token), untrack(() => get$1(token).href)));
                      set_attribute(a, "title", (get$1(token), untrack(() => get$1(token).title)));
                    });
                    append($$anchor6, a);
                  };
                  var alternate = ($$anchor6) => {
                    var a_1 = root_8$9();
                    var text_1 = child(a_1, true);
                    reset(a_1);
                    template_effect(() => {
                      set_attribute(a_1, "href", (get$1(token), untrack(() => get$1(token).href)));
                      set_attribute(a_1, "title", (get$1(token), untrack(() => get$1(token).title)));
                      set_text(text_1, (get$1(token), untrack(() => get$1(token).text)));
                    });
                    append($$anchor6, a_1);
                  };
                  if_block(node_5, ($$render) => {
                    if (get$1(token), untrack(() => get$1(token).tokens)) $$render(consequent_2);
                    else $$render(alternate, false);
                  });
                }
                append($$anchor5, fragment_6);
              };
              var alternate_12 = ($$anchor5) => {
                var fragment_7 = comment();
                var node_7 = first_child(fragment_7);
                {
                  var consequent_4 = ($$anchor6) => {
                    Image$1($$anchor6, {
                      get src() {
                        return get$1(token), untrack(() => get$1(token).href);
                      },
                      get alt() {
                        return get$1(token), untrack(() => get$1(token).text);
                      }
                    });
                  };
                  var alternate_11 = ($$anchor6) => {
                    var fragment_9 = comment();
                    var node_8 = first_child(fragment_9);
                    {
                      var consequent_5 = ($$anchor7) => {
                        var strong = root_12$7();
                        var node_9 = child(strong);
                        {
                          let $0 = derived_safe_equal(() => `${id()}-strong`);
                          MarkdownInlineTokens(node_9, {
                            get id() {
                              return get$1($0);
                            },
                            get tokens() {
                              return get$1(token), untrack(() => get$1(token).tokens);
                            },
                            get onSourceClick() {
                              return onSourceClick();
                            }
                          });
                        }
                        reset(strong);
                        append($$anchor7, strong);
                      };
                      var alternate_10 = ($$anchor7) => {
                        var fragment_10 = comment();
                        var node_10 = first_child(fragment_10);
                        {
                          var consequent_6 = ($$anchor8) => {
                            var em = root_14$4();
                            var node_11 = child(em);
                            {
                              let $0 = derived_safe_equal(() => `${id()}-em`);
                              MarkdownInlineTokens(node_11, {
                                get id() {
                                  return get$1($0);
                                },
                                get tokens() {
                                  return get$1(token), untrack(() => get$1(token).tokens);
                                },
                                get onSourceClick() {
                                  return onSourceClick();
                                }
                              });
                            }
                            reset(em);
                            append($$anchor8, em);
                          };
                          var alternate_9 = ($$anchor8) => {
                            var fragment_11 = comment();
                            var node_12 = first_child(fragment_11);
                            {
                              var consequent_7 = ($$anchor9) => {
                                CodespanToken($$anchor9, {
                                  get token() {
                                    return get$1(token);
                                  },
                                  get done() {
                                    return done();
                                  }
                                });
                              };
                              var alternate_8 = ($$anchor9) => {
                                var fragment_13 = comment();
                                var node_13 = first_child(fragment_13);
                                {
                                  var consequent_8 = ($$anchor10) => {
                                    var br = root_18$4();
                                    append($$anchor10, br);
                                  };
                                  var alternate_7 = ($$anchor10) => {
                                    var fragment_14 = comment();
                                    var node_14 = first_child(fragment_14);
                                    {
                                      var consequent_9 = ($$anchor11) => {
                                        var del = root_20$3();
                                        var node_15 = child(del);
                                        {
                                          let $0 = derived_safe_equal(() => `${id()}-del`);
                                          MarkdownInlineTokens(node_15, {
                                            get id() {
                                              return get$1($0);
                                            },
                                            get tokens() {
                                              return get$1(token), untrack(() => get$1(token).tokens);
                                            },
                                            get onSourceClick() {
                                              return onSourceClick();
                                            }
                                          });
                                        }
                                        reset(del);
                                        append($$anchor11, del);
                                      };
                                      var alternate_6 = ($$anchor11) => {
                                        var fragment_15 = comment();
                                        var node_16 = first_child(fragment_15);
                                        {
                                          var consequent_10 = ($$anchor12) => {
                                            var text_2 = text();
                                            template_effect(() => set_text(text_2, (get$1(token), untrack(() => get$1(token).text))));
                                            append($$anchor12, text_2);
                                          };
                                          var alternate_5 = ($$anchor12) => {
                                            var fragment_17 = comment();
                                            var node_17 = first_child(fragment_17);
                                            {
                                              var consequent_11 = ($$anchor13) => {
                                                var iframe = root_24$5();
                                                template_effect(() => {
                                                  set_attribute(iframe, "src", `${WEBUI_BASE_URL}/api/v1/files/${(get$1(token), untrack(() => get$1(token).fileId)) ?? ""}/content`);
                                                  set_attribute(iframe, "title", (get$1(token), untrack(() => get$1(token).fileId)));
                                                });
                                                event("load", iframe, (e) => {
                                                  try {
                                                    e.currentTarget.style.height = e.currentTarget.contentWindow.document.body.scrollHeight + 20 + "px";
                                                  } catch {
                                                  }
                                                });
                                                append($$anchor13, iframe);
                                              };
                                              var alternate_4 = ($$anchor13) => {
                                                var fragment_18 = comment();
                                                var node_18 = first_child(fragment_18);
                                                {
                                                  var consequent_12 = ($$anchor14) => {
                                                    MentionToken($$anchor14, {
                                                      get token() {
                                                        return get$1(token);
                                                      }
                                                    });
                                                  };
                                                  var alternate_3 = ($$anchor14) => {
                                                    var fragment_20 = comment();
                                                    var node_19 = first_child(fragment_20);
                                                    {
                                                      var consequent_13 = ($$anchor15) => {
                                                        var sup = root_28$1();
                                                        var text_3 = child(sup, true);
                                                        reset(sup);
                                                        template_effect(() => set_text(text_3, (get$1(token), untrack(() => get$1(token).escapedText))));
                                                        append($$anchor15, sup);
                                                      };
                                                      var alternate_2 = ($$anchor15) => {
                                                        var fragment_21 = comment();
                                                        var node_20 = first_child(fragment_21);
                                                        {
                                                          var consequent_14 = ($$anchor16) => {
                                                            SourceToken($$anchor16, {
                                                              get id() {
                                                                return id();
                                                              },
                                                              get token() {
                                                                return get$1(token);
                                                              },
                                                              get sourceIds() {
                                                                return sourceIds();
                                                              },
                                                              get onClick() {
                                                                return onSourceClick();
                                                              }
                                                            });
                                                          };
                                                          var alternate_1 = ($$anchor16) => {
                                                            var fragment_23 = comment();
                                                            var node_21 = first_child(fragment_23);
                                                            {
                                                              var consequent_15 = ($$anchor17) => {
                                                                TextToken($$anchor17, {
                                                                  get token() {
                                                                    return get$1(token);
                                                                  },
                                                                  get done() {
                                                                    return done();
                                                                  }
                                                                });
                                                              };
                                                              if_block(
                                                                node_21,
                                                                ($$render) => {
                                                                  if (get$1(token), untrack(() => get$1(token).type === "text")) $$render(consequent_15);
                                                                },
                                                                true
                                                              );
                                                            }
                                                            append($$anchor16, fragment_23);
                                                          };
                                                          if_block(
                                                            node_20,
                                                            ($$render) => {
                                                              if (get$1(token), untrack(() => get$1(token).type === "citation")) $$render(consequent_14);
                                                              else $$render(alternate_1, false);
                                                            },
                                                            true
                                                          );
                                                        }
                                                        append($$anchor15, fragment_21);
                                                      };
                                                      if_block(
                                                        node_19,
                                                        ($$render) => {
                                                          if (get$1(token), untrack(() => get$1(token).type === "footnote")) $$render(consequent_13);
                                                          else $$render(alternate_2, false);
                                                        },
                                                        true
                                                      );
                                                    }
                                                    append($$anchor14, fragment_20);
                                                  };
                                                  if_block(
                                                    node_18,
                                                    ($$render) => {
                                                      if (get$1(token), untrack(() => get$1(token).type === "mention")) $$render(consequent_12);
                                                      else $$render(alternate_3, false);
                                                    },
                                                    true
                                                  );
                                                }
                                                append($$anchor13, fragment_18);
                                              };
                                              if_block(
                                                node_17,
                                                ($$render) => {
                                                  if (get$1(token), untrack(() => get$1(token).type === "iframe")) $$render(consequent_11);
                                                  else $$render(alternate_4, false);
                                                },
                                                true
                                              );
                                            }
                                            append($$anchor12, fragment_17);
                                          };
                                          if_block(
                                            node_16,
                                            ($$render) => {
                                              if (get$1(token), untrack(() => get$1(token).type === "inlineKatex")) $$render(consequent_10);
                                              else $$render(alternate_5, false);
                                            },
                                            true
                                          );
                                        }
                                        append($$anchor11, fragment_15);
                                      };
                                      if_block(
                                        node_14,
                                        ($$render) => {
                                          if (get$1(token), untrack(() => get$1(token).type === "del")) $$render(consequent_9);
                                          else $$render(alternate_6, false);
                                        },
                                        true
                                      );
                                    }
                                    append($$anchor10, fragment_14);
                                  };
                                  if_block(
                                    node_13,
                                    ($$render) => {
                                      if (get$1(token), untrack(() => get$1(token).type === "br")) $$render(consequent_8);
                                      else $$render(alternate_7, false);
                                    },
                                    true
                                  );
                                }
                                append($$anchor9, fragment_13);
                              };
                              if_block(
                                node_12,
                                ($$render) => {
                                  if (get$1(token), untrack(() => get$1(token).type === "codespan")) $$render(consequent_7);
                                  else $$render(alternate_8, false);
                                },
                                true
                              );
                            }
                            append($$anchor8, fragment_11);
                          };
                          if_block(
                            node_10,
                            ($$render) => {
                              if (get$1(token), untrack(() => get$1(token).type === "em")) $$render(consequent_6);
                              else $$render(alternate_9, false);
                            },
                            true
                          );
                        }
                        append($$anchor7, fragment_10);
                      };
                      if_block(
                        node_8,
                        ($$render) => {
                          if (get$1(token), untrack(() => get$1(token).type === "strong")) $$render(consequent_5);
                          else $$render(alternate_10, false);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_9);
                  };
                  if_block(
                    node_7,
                    ($$render) => {
                      if (get$1(token), untrack(() => get$1(token).type === "image")) $$render(consequent_4);
                      else $$render(alternate_11, false);
                    },
                    true
                  );
                }
                append($$anchor5, fragment_7);
              };
              if_block(
                node_4,
                ($$render) => {
                  if (get$1(token), untrack(() => get$1(token).type === "link")) $$render(consequent_3);
                  else $$render(alternate_12, false);
                },
                true
              );
            }
            append($$anchor4, fragment_5);
          };
          if_block(
            node_2,
            ($$render) => {
              if (get$1(token), untrack(() => get$1(token).type === "html")) $$render(consequent_1);
              else $$render(alternate_13, false);
            },
            true
          );
        }
        append($$anchor3, fragment_3);
      };
      if_block(node_1, ($$render) => {
        if (get$1(token), untrack(() => get$1(token).type === "escape")) $$render(consequent);
        else $$render(alternate_14, false);
      });
    }
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
const alertStyles = {
  NOTE: { border: "border-sky-500", text: "text-sky-500", icon: "Info" },
  TIP: {
    border: "border-emerald-500",
    text: "text-emerald-500",
    icon: "LightBulb"
  },
  IMPORTANT: {
    border: "border-purple-500",
    text: "text-purple-500",
    icon: "Star"
  },
  WARNING: {
    border: "border-yellow-500",
    text: "text-yellow-500",
    icon: "ArrowRightCircle"
  },
  CAUTION: {
    border: "border-rose-500",
    text: "text-rose-500",
    icon: "Bolt"
  }
};
function alertComponent(token) {
  var _a;
  const regExpStr = `^(?:\\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\\])\\s*?
*`;
  const regExp = new RegExp(regExpStr);
  const matches = (_a = token.text) == null ? void 0 : _a.match(regExp);
  if (matches && matches.length) {
    const alertType = matches[1];
    const newText = token.text.replace(regExp, "");
    const newTokens = marked.lexer(newText);
    return { type: alertType, text: newText, tokens: newTokens };
  }
  return false;
}
var root$i = from_html(`<div><div><!> <span class=" font-medium"> </span></div> <div class="pb-2"><!></div></div>`);
function AlertRenderer($$anchor, $$props) {
  push($$props, false);
  let alert = prop($$props, "alert", 8);
  let id = prop($$props, "id", 8, "");
  let tokenIdx = prop($$props, "tokenIdx", 8, 0);
  let onTaskClick = prop($$props, "onTaskClick", 8, void 0);
  let onSourceClick = prop($$props, "onSourceClick", 8, void 0);
  init();
  var div = root$i();
  var div_1 = child(div);
  var node = child(div_1);
  Icon$1(node, {
    get name() {
      return deep_read_state(alert()), untrack(() => alertStyles[alert().type].icon);
    },
    className: "inline-block size-4"
  });
  var span = sibling(node, 2);
  var text2 = child(span, true);
  reset(span);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_1 = child(div_2);
  {
    let $0 = derived_safe_equal(() => `${id()}-${tokenIdx()}`);
    MarkdownTokens(node_1, {
      get id() {
        return get$1($0);
      },
      get tokens() {
        return deep_read_state(alert()), untrack(() => alert().tokens);
      },
      get onTaskClick() {
        return onTaskClick();
      },
      get onSourceClick() {
        return onSourceClick();
      }
    });
  }
  reset(div_2);
  reset(div);
  template_effect(() => {
    set_class(div, 1, (deep_read_state(alert()), untrack(() => `border-l-4 pl-2.5 ${alertStyles[alert().type].border} my-0.5`)));
    set_class(div_1, 1, `${(deep_read_state(alert()), untrack(() => alertStyles[alert().type].text)) ?? ""} items-center flex gap-1 py-1.5`);
    set_text(text2, (deep_read_state(alert()), untrack(() => alert().type)));
  });
  append($$anchor, div);
  pop();
}
var root_1$c = from_html(`<iframe width="100%" frameborder="0"></iframe>`);
var root_3$g = from_html(`<iframe width="100%" frameborder="0"></iframe>`);
function FullHeightIframe($$anchor, $$props) {
  push($$props, false);
  const sandbox = mutable_source();
  const isUrl = mutable_source();
  let src = prop(
    $$props,
    "src",
    8,
    null
    // URL or raw HTML (auto-detected)
  );
  let title = prop($$props, "title", 8, "Embedded Content");
  let initialHeight = prop(
    $$props,
    "initialHeight",
    8,
    null
    // initial height in px, null = auto
  );
  let iframeClassName = prop($$props, "iframeClassName", 8, "w-full rounded-2xl");
  let args = prop($$props, "args", 8, null);
  let allowScripts = prop($$props, "allowScripts", 8, true);
  let allowForms = prop($$props, "allowForms", 8, false);
  let allowSameOrigin = prop(
    $$props,
    "allowSameOrigin",
    8,
    false
    // set to true only when you trust the content
  );
  let allowPopups = prop($$props, "allowPopups", 8, false);
  let allowDownloads = prop($$props, "allowDownloads", 8, true);
  let referrerPolicy = prop($$props, "referrerPolicy", 8, "strict-origin-when-cross-origin");
  let allowFullscreen = prop($$props, "allowFullscreen", 8, true);
  let iframe = mutable_source(null);
  let iframeSrc = mutable_source(null);
  let iframeDoc = mutable_source(null);
  const setIframeSrc = async () => {
    await tick();
    if (get$1(isUrl)) {
      set(iframeSrc, src());
      set(iframeDoc, null);
    } else {
      set(iframeDoc, await processHtmlForDeps(src()));
      set(iframeSrc, null);
    }
  };
  const alpineDirectives = [
    "x-data",
    "x-init",
    "x-show",
    "x-bind",
    "x-on",
    "x-text",
    "x-html",
    "x-model",
    "x-modelable",
    "x-ref",
    "x-for",
    "x-if",
    "x-effect",
    "x-transition",
    "x-cloak",
    "x-ignore",
    "x-teleport",
    "x-id"
  ];
  async function processHtmlForDeps(html2) {
    if (!allowSameOrigin()) return html2;
    const scriptTags = [];
    const hasAlpineDirectives = alpineDirectives.some((dir) => html2.includes(dir));
    if (hasAlpineDirectives) {
      try {
        const { default: alpineCode } = await __vitePreload(async () => {
          const { default: alpineCode2 } = await import("./Coz9QFcg.js");
          return { default: alpineCode2 };
        }, true ? [] : void 0, import.meta.url);
        const alpineBlob = new Blob([alpineCode], { type: "text/javascript" });
        const alpineUrl = URL.createObjectURL(alpineBlob);
        const alpineTag = `<script src="${alpineUrl}" defer><\/script>`;
        scriptTags.push(alpineTag);
      } catch (error) {
        console.error("Error processing Alpine for iframe:", error);
      }
    }
    if (scriptTags.length === 0) return html2;
    const tags2 = scriptTags.join("\n");
    if (html2.includes("</head>")) {
      return html2.replace("</head>", `${tags2}
</head>`);
    }
    if (html2.includes("</body>")) {
      return html2.replace("</body>", `${tags2}
</body>`);
    }
    return `${tags2}
${html2}`;
  }
  function resizeSameOrigin() {
    var _a, _b, _c;
    if (!get$1(iframe)) return;
    try {
      const doc = get$1(iframe).contentDocument || ((_a = get$1(iframe).contentWindow) == null ? void 0 : _a.document);
      if (!doc) return;
      const h = Math.max(((_b = doc.documentElement) == null ? void 0 : _b.scrollHeight) ?? 0, ((_c = doc.body) == null ? void 0 : _c.scrollHeight) ?? 0);
      if (h > 0) mutate(iframe, get$1(iframe).style.height = h + 20 + "px");
    } catch {
    }
  }
  function onMessage(e) {
    if (!get$1(iframe) || e.source !== get$1(iframe).contentWindow) return;
    const data = e.data;
    if ((data == null ? void 0 : data.type) === "iframe:height" && typeof data.height === "number") {
      mutate(iframe, get$1(iframe).style.height = Math.max(0, data.height) + "px");
    }
  }
  const onLoad = async () => {
    var _a;
    requestAnimationFrame(resizeSameOrigin);
    if (args() && ((_a = get$1(iframe)) == null ? void 0 : _a.contentWindow)) {
      mutate(iframe, get$1(iframe).contentWindow.args = args());
    }
  };
  onMount(() => {
    window.addEventListener("message", onMessage);
  });
  onDestroy(() => {
    window.removeEventListener("message", onMessage);
  });
  legacy_pre_effect(
    () => (deep_read_state(allowScripts()), deep_read_state(allowForms()), deep_read_state(allowSameOrigin()), deep_read_state(allowPopups()), deep_read_state(allowDownloads())),
    () => {
      set(sandbox, [
        allowScripts() && "allow-scripts",
        allowForms() && "allow-forms",
        allowSameOrigin() && "allow-same-origin",
        allowPopups() && "allow-popups",
        allowDownloads() && "allow-downloads"
      ].filter(Boolean).join(" ") || void 0);
    }
  );
  legacy_pre_effect(() => deep_read_state(src()), () => {
    set(isUrl, typeof src() === "string" && /^(https?:)?\/\//i.test(src()));
  });
  legacy_pre_effect(() => deep_read_state(src()), () => {
    if (src()) {
      setIframeSrc();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var iframe_1 = root_1$c();
      bind_this(iframe_1, ($$value) => set(iframe, $$value), () => get$1(iframe));
      template_effect(() => {
        set_attribute(iframe_1, "srcdoc", get$1(iframeDoc));
        set_attribute(iframe_1, "title", title());
        set_class(iframe_1, 1, clsx(iframeClassName()));
        set_style(iframe_1, `${initialHeight() ? `height:${initialHeight()}px;` : ""}`);
        set_attribute(iframe_1, "sandbox", get$1(sandbox));
        iframe_1.allowFullscreen = allowFullscreen();
      });
      event("load", iframe_1, onLoad);
      append($$anchor2, iframe_1);
    };
    var alternate = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_1 = ($$anchor3) => {
          var iframe_2 = root_3$g();
          bind_this(iframe_2, ($$value) => set(iframe, $$value), () => get$1(iframe));
          template_effect(() => {
            set_attribute(iframe_2, "src", get$1(iframeSrc));
            set_attribute(iframe_2, "title", title());
            set_class(iframe_2, 1, clsx(iframeClassName()));
            set_style(iframe_2, `${initialHeight() ? `height:${initialHeight()}px;` : ""}`);
            set_attribute(iframe_2, "sandbox", get$1(sandbox));
            set_attribute(iframe_2, "referrerpolicy", referrerPolicy());
            iframe_2.allowFullscreen = allowFullscreen();
          });
          event("load", iframe_2, onLoad);
          append($$anchor3, iframe_2);
        };
        if_block(
          node_1,
          ($$render) => {
            if (get$1(iframeSrc)) $$render(consequent_1);
          },
          true
        );
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get$1(iframeDoc)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$f = from_html(`<div class="my-2"><!></div>`);
var root_2$h = from_html(`<div class="py-1 w-full cursor-pointer"><div class=" w-full text-xs text-gray-500"><div> </div></div> <!></div>`);
var root_5$b = from_html(`<div><!></div>`);
var root_11$6 = from_html(`<div><!></div>`);
var root_4$6 = from_html(`<div><div><!> <div><!></div> <div class="flex self-center translate-y-[1px]"><!></div></div></div> <!>`, 1);
var root_1$b = from_html(`<!> <!>`, 1);
var root_26$3 = from_html(`<div><!></div>`);
var root_25$3 = from_html(`<div><div><!> <div><!></div> <div class="flex self-center translate-y-[1px]"><!></div></div></div>`);
var root_42 = from_html(`<div class="flex self-start translate-y-1"><!></div>`);
var root_46 = from_html(`<div><!></div>`);
var root_41 = from_html(`<div><div><div class="flex items-start justify-between"><!> <!></div> <!></div></div>`);
var root_48 = from_html(`<div><!></div>`);
var root_24$4 = from_html(`<!> <!>`, 1);
var root$h = from_html(`<div><!></div>`);
function Collapsible($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let open = prop($$props, "open", 12, false);
  let className = prop($$props, "className", 8, "");
  let buttonClassName = prop($$props, "buttonClassName", 8, "w-fit text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition");
  let id = prop($$props, "id", 8, "");
  let title = prop($$props, "title", 8, null);
  let attributes = prop($$props, "attributes", 8, null);
  let chevron = prop($$props, "chevron", 8, false);
  let grow = prop($$props, "grow", 8, false);
  let disabled = prop($$props, "disabled", 8, false);
  let hide = prop($$props, "hide", 8, false);
  let onChange = prop($$props, "onChange", 8, () => {
  });
  const collapsibleId = v4();
  function parseJSONString(str) {
    try {
      return parseJSONString(JSON.parse(str));
    } catch (e) {
      return str;
    }
  }
  function formatJSONString(str) {
    try {
      const parsed = parseJSONString(str);
      if (typeof parsed === "object") {
        return JSON.stringify(parsed, null, 2);
      } else {
        return `${JSON.stringify(String(parsed))}`;
      }
    } catch (e) {
      return str;
    }
  }
  legacy_pre_effect(() => (deep_read_state(onChange()), deep_read_state(open())), () => {
    onChange()(open());
  });
  legacy_pre_effect_reset();
  init();
  var div = root$h();
  var node = child(div);
  {
    var consequent_14 = ($$anchor2) => {
      const args = derived_safe_equal(() => (deep_read_state(decode), deep_read_state(attributes()), untrack(() => {
        var _a;
        return decode((_a = attributes()) == null ? void 0 : _a.arguments);
      })));
      const result = derived_safe_equal(() => (deep_read_state(decode), deep_read_state(attributes()), untrack(() => {
        var _a;
        return decode(((_a = attributes()) == null ? void 0 : _a.result) ?? "");
      })));
      const files = derived_safe_equal(() => (deep_read_state(decode), deep_read_state(attributes()), untrack(() => {
        var _a;
        return parseJSONString(decode(((_a = attributes()) == null ? void 0 : _a.files) ?? ""));
      })));
      const embeds = derived_safe_equal(() => (deep_read_state(decode), deep_read_state(attributes()), untrack(() => {
        var _a;
        return parseJSONString(decode(((_a = attributes()) == null ? void 0 : _a.embeds) ?? ""));
      })));
      var fragment = root_1$b();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          var div_1 = root_2$h();
          var div_2 = child(div_1);
          var div_3 = child(div_2);
          var text2 = child(div_3, true);
          reset(div_3);
          reset(div_2);
          var node_2 = sibling(div_2, 2);
          each(node_2, 1, () => get$1(embeds), index, ($$anchor4, embed, idx) => {
            var div_4 = root_3$f();
            var node_3 = child(div_4);
            FullHeightIframe(node_3, {
              get src() {
                return get$1(embed);
              },
              get args() {
                return get$1(args);
              },
              allowScripts: true,
              allowForms: true,
              allowSameOrigin: true,
              allowPopups: true
            });
            reset(div_4);
            template_effect(() => set_attribute(div_4, "id", (deep_read_state(attributes()), untrack(() => {
              var _a;
              return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-embed-${idx}`;
            }))));
            append($$anchor4, div_4);
          });
          reset(div_1);
          template_effect(() => set_text(text2, (deep_read_state(attributes()), untrack(() => attributes().name))));
          append($$anchor3, div_1);
        };
        var alternate_4 = ($$anchor3) => {
          var fragment_1 = root_4$6();
          var div_5 = first_child(fragment_1);
          var div_6 = child(div_5);
          var node_4 = child(div_6);
          {
            var consequent_1 = ($$anchor4) => {
              var div_7 = root_5$b();
              var node_5 = child(div_7);
              Spinner(node_5, { className: "size-4" });
              reset(div_7);
              append($$anchor4, div_7);
            };
            if_block(node_4, ($$render) => {
              if (deep_read_state(attributes()), untrack(() => {
                var _a, _b;
                return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true";
              })) $$render(consequent_1);
            });
          }
          var div_8 = sibling(node_4, 2);
          var node_6 = child(div_8);
          {
            var consequent_2 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                  var _a;
                  return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}`;
                })));
                let $1 = derived_safe_equal(() => ($i18n(), deep_read_state(attributes()), untrack(() => $i18n().t("View Result from **{{NAME}}**", { NAME: attributes().name }))));
                Markdown($$anchor4, {
                  get id() {
                    return get$1($0);
                  },
                  get content() {
                    return get$1($1);
                  }
                });
              }
            };
            var alternate = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                  var _a;
                  return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-executing`;
                })));
                let $1 = derived_safe_equal(() => ($i18n(), deep_read_state(attributes()), untrack(() => $i18n().t("Executing **{{NAME}}**...", { NAME: attributes().name }))));
                Markdown($$anchor4, {
                  get id() {
                    return get$1($0);
                  },
                  get content() {
                    return get$1($1);
                  }
                });
              }
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(attributes()), untrack(() => {
                var _a;
                return ((_a = attributes()) == null ? void 0 : _a.done) === "true";
              })) $$render(consequent_2);
              else $$render(alternate, false);
            });
          }
          reset(div_8);
          var div_9 = sibling(div_8, 2);
          var node_7 = child(div_9);
          {
            var consequent_3 = ($$anchor4) => {
              Icon$1($$anchor4, { name: "ChevronUp", strokeWidth: "3.5", className: "size-3.5" });
            };
            var alternate_1 = ($$anchor4) => {
              Icon$1($$anchor4, {
                name: "ChevronDown",
                strokeWidth: "3.5",
                className: "size-3.5"
              });
            };
            if_block(node_7, ($$render) => {
              if (open()) $$render(consequent_3);
              else $$render(alternate_1, false);
            });
          }
          reset(div_9);
          reset(div_6);
          reset(div_5);
          var node_8 = sibling(div_5, 2);
          {
            var consequent_7 = ($$anchor4) => {
              var fragment_6 = comment();
              var node_9 = first_child(fragment_6);
              {
                var consequent_6 = ($$anchor5) => {
                  var div_10 = root_11$6();
                  var node_10 = child(div_10);
                  {
                    var consequent_5 = ($$anchor6) => {
                      var fragment_7 = comment();
                      var node_11 = first_child(fragment_7);
                      {
                        var consequent_4 = ($$anchor7) => {
                          {
                            let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                              var _a;
                              return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-result`;
                            })));
                            let $1 = derived_safe_equal(() => (deep_read_state(get$1(args)), deep_read_state(get$1(result)), untrack(() => `> \`\`\`json
> ${formatJSONString(get$1(args))}
> ${formatJSONString(get$1(result))}
> \`\`\``)));
                            Markdown($$anchor7, {
                              get id() {
                                return get$1($0);
                              },
                              get content() {
                                return get$1($1);
                              }
                            });
                          }
                        };
                        var alternate_2 = ($$anchor7) => {
                          {
                            let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                              var _a;
                              return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-result`;
                            })));
                            let $1 = derived_safe_equal(() => (deep_read_state(get$1(args)), untrack(() => `> \`\`\`json
> ${formatJSONString(get$1(args))}
> \`\`\``)));
                            Markdown($$anchor7, {
                              get id() {
                                return get$1($0);
                              },
                              get content() {
                                return get$1($1);
                              }
                            });
                          }
                        };
                        if_block(node_11, ($$render) => {
                          if (deep_read_state(attributes()), untrack(() => {
                            var _a;
                            return ((_a = attributes()) == null ? void 0 : _a.done) === "true";
                          })) $$render(consequent_4);
                          else $$render(alternate_2, false);
                        });
                      }
                      append($$anchor6, fragment_7);
                    };
                    var alternate_3 = ($$anchor6) => {
                      var fragment_10 = comment();
                      var node_12 = first_child(fragment_10);
                      slot(node_12, $$props, "content", {}, null);
                      append($$anchor6, fragment_10);
                    };
                    if_block(node_10, ($$render) => {
                      if (deep_read_state(attributes()), untrack(() => {
                        var _a;
                        return ((_a = attributes()) == null ? void 0 : _a.type) === "tool_calls";
                      })) $$render(consequent_5);
                      else $$render(alternate_3, false);
                    });
                  }
                  reset(div_10);
                  transition(3, div_10, () => slide, () => ({ duration: 300, easing: quintOut, axis: "y" }));
                  append($$anchor5, div_10);
                };
                if_block(node_9, ($$render) => {
                  if (open() && !hide()) $$render(consequent_6);
                });
              }
              append($$anchor4, fragment_6);
            };
            if_block(node_8, ($$render) => {
              if (!grow()) $$render(consequent_7);
            });
          }
          template_effect(() => {
            set_class(div_5, 1, `${buttonClassName() ?? ""} cursor-pointer`);
            set_class(div_6, 1, ` w-full font-medium flex items-center justify-between gap-2 ${(deep_read_state(attributes()), untrack(() => {
              var _a, _b;
              return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true" ? "shimmer" : "";
            })) ?? ""}
                        `);
          });
          event("pointerup", div_5, () => {
            if (!disabled()) {
              open(!open());
            }
          });
          append($$anchor3, fragment_1);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(get$1(embeds)), untrack(() => get$1(embeds) && Array.isArray(get$1(embeds)) && get$1(embeds).length > 0)) $$render(consequent);
          else $$render(alternate_4, false);
        });
      }
      var node_13 = sibling(node_1, 2);
      {
        var consequent_13 = ($$anchor3) => {
          var fragment_11 = comment();
          var node_14 = first_child(fragment_11);
          {
            var consequent_12 = ($$anchor4) => {
              var fragment_12 = comment();
              var node_15 = first_child(fragment_12);
              each(node_15, 1, () => get$1(files) ?? [], index, ($$anchor5, file, idx) => {
                var fragment_13 = comment();
                var node_16 = first_child(fragment_13);
                {
                  var consequent_9 = ($$anchor6) => {
                    var fragment_14 = comment();
                    var node_17 = first_child(fragment_14);
                    {
                      var consequent_8 = ($$anchor7) => {
                        {
                          let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                            var _a;
                            return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-result-${idx}`;
                          })));
                          Image$1($$anchor7, {
                            get id() {
                              return get$1($0);
                            },
                            get src() {
                              return get$1(file);
                            },
                            alt: "Image"
                          });
                        }
                      };
                      if_block(node_17, ($$render) => {
                        if (get$1(file), untrack(() => get$1(file).startsWith("data:image/"))) $$render(consequent_8);
                      });
                    }
                    append($$anchor6, fragment_14);
                  };
                  var alternate_5 = ($$anchor6) => {
                    var fragment_16 = comment();
                    var node_18 = first_child(fragment_16);
                    {
                      var consequent_11 = ($$anchor7) => {
                        var fragment_17 = comment();
                        var node_19 = first_child(fragment_17);
                        {
                          var consequent_10 = ($$anchor8) => {
                            {
                              let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                                var _a;
                                return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-result-${idx}`;
                              })));
                              Image$1($$anchor8, {
                                get id() {
                                  return get$1($0);
                                },
                                get src() {
                                  return get$1(file), untrack(() => get$1(file).url);
                                },
                                alt: "Image"
                              });
                            }
                          };
                          if_block(node_19, ($$render) => {
                            if (get$1(file), untrack(() => get$1(file).type === "image" && get$1(file).url)) $$render(consequent_10);
                          });
                        }
                        append($$anchor7, fragment_17);
                      };
                      if_block(
                        node_18,
                        ($$render) => {
                          if (typeof get$1(file) === "object") $$render(consequent_11);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_16);
                  };
                  if_block(node_16, ($$render) => {
                    if (typeof get$1(file) === "string") $$render(consequent_9);
                    else $$render(alternate_5, false);
                  });
                }
                append($$anchor5, fragment_13);
              });
              append($$anchor4, fragment_12);
            };
            if_block(node_14, ($$render) => {
              if (typeof get$1(files) === "object") $$render(consequent_12);
            });
          }
          append($$anchor3, fragment_11);
        };
        if_block(node_13, ($$render) => {
          if (deep_read_state(attributes()), untrack(() => {
            var _a;
            return ((_a = attributes()) == null ? void 0 : _a.done) === "true";
          })) $$render(consequent_13);
        });
      }
      append($$anchor2, fragment);
    };
    var alternate_15 = ($$anchor2) => {
      var fragment_19 = root_24$4();
      var node_20 = first_child(fragment_19);
      {
        var consequent_23 = ($$anchor3) => {
          var div_11 = root_25$3();
          var div_12 = child(div_11);
          var node_21 = child(div_12);
          {
            var consequent_15 = ($$anchor4) => {
              var div_13 = root_26$3();
              var node_22 = child(div_13);
              Spinner(node_22, { className: "size-4" });
              reset(div_13);
              append($$anchor4, div_13);
            };
            if_block(node_21, ($$render) => {
              if (deep_read_state(attributes()), untrack(() => {
                var _a, _b;
                return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true";
              })) $$render(consequent_15);
            });
          }
          var div_14 = sibling(node_21, 2);
          var node_23 = child(div_14);
          {
            var consequent_19 = ($$anchor4) => {
              var fragment_20 = comment();
              var node_24 = first_child(fragment_20);
              {
                var consequent_18 = ($$anchor5) => {
                  var fragment_21 = comment();
                  var node_25 = first_child(fragment_21);
                  {
                    var consequent_16 = ($$anchor6) => {
                      var text_1 = text();
                      template_effect(($0) => set_text(text_1, $0), [
                        () => ($i18n(), untrack(() => $i18n().t("Thought for less than a second")))
                      ]);
                      append($$anchor6, text_1);
                    };
                    var alternate_7 = ($$anchor6) => {
                      var fragment_23 = comment();
                      var node_26 = first_child(fragment_23);
                      {
                        var consequent_17 = ($$anchor7) => {
                          var text_2 = text();
                          template_effect(($0) => set_text(text_2, $0), [
                            () => ($i18n(), deep_read_state(attributes()), untrack(() => $i18n().t("Thought for {{DURATION}} seconds", { DURATION: attributes().duration })))
                          ]);
                          append($$anchor7, text_2);
                        };
                        var alternate_6 = ($$anchor7) => {
                          var text_3 = text();
                          template_effect(($0) => set_text(text_3, $0), [
                            () => ($i18n(), deep_read_state(attributes()), untrack(() => $i18n().t("Thought for {{DURATION}}", { DURATION: Math.round(attributes().duration / 60) + " min" })))
                          ]);
                          append($$anchor7, text_3);
                        };
                        if_block(
                          node_26,
                          ($$render) => {
                            if (deep_read_state(attributes()), untrack(() => attributes().duration < 60)) $$render(consequent_17);
                            else $$render(alternate_6, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_23);
                    };
                    if_block(node_25, ($$render) => {
                      if (deep_read_state(attributes()), untrack(() => attributes().duration < 1)) $$render(consequent_16);
                      else $$render(alternate_7, false);
                    });
                  }
                  append($$anchor5, fragment_21);
                };
                var alternate_8 = ($$anchor5) => {
                  var text_4 = text();
                  template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Thinking...")))]);
                  append($$anchor5, text_4);
                };
                if_block(node_24, ($$render) => {
                  if (deep_read_state(attributes()), untrack(() => {
                    var _a, _b;
                    return ((_a = attributes()) == null ? void 0 : _a.done) === "true" && ((_b = attributes()) == null ? void 0 : _b.duration);
                  })) $$render(consequent_18);
                  else $$render(alternate_8, false);
                });
              }
              append($$anchor4, fragment_20);
            };
            var alternate_11 = ($$anchor4) => {
              var fragment_27 = comment();
              var node_27 = first_child(fragment_27);
              {
                var consequent_21 = ($$anchor5) => {
                  var fragment_28 = comment();
                  var node_28 = first_child(fragment_28);
                  {
                    var consequent_20 = ($$anchor6) => {
                      var text_5 = text();
                      template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Analyzed")))]);
                      append($$anchor6, text_5);
                    };
                    var alternate_9 = ($$anchor6) => {
                      var text_6 = text();
                      template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Analyzing...")))]);
                      append($$anchor6, text_6);
                    };
                    if_block(node_28, ($$render) => {
                      if (deep_read_state(attributes()), untrack(() => {
                        var _a;
                        return ((_a = attributes()) == null ? void 0 : _a.done) === "true";
                      })) $$render(consequent_20);
                      else $$render(alternate_9, false);
                    });
                  }
                  append($$anchor5, fragment_28);
                };
                var alternate_10 = ($$anchor5) => {
                  var text_7 = text();
                  template_effect(() => set_text(text_7, title()));
                  append($$anchor5, text_7);
                };
                if_block(
                  node_27,
                  ($$render) => {
                    if (deep_read_state(attributes()), untrack(() => {
                      var _a;
                      return ((_a = attributes()) == null ? void 0 : _a.type) === "code_interpreter";
                    })) $$render(consequent_21);
                    else $$render(alternate_10, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_27);
            };
            if_block(node_23, ($$render) => {
              if (deep_read_state(attributes()), untrack(() => {
                var _a;
                return ((_a = attributes()) == null ? void 0 : _a.type) === "reasoning";
              })) $$render(consequent_19);
              else $$render(alternate_11, false);
            });
          }
          reset(div_14);
          var div_15 = sibling(div_14, 2);
          var node_29 = child(div_15);
          {
            var consequent_22 = ($$anchor4) => {
              Icon$1($$anchor4, { name: "ChevronUp", strokeWidth: "3.5", className: "size-3.5" });
            };
            var alternate_12 = ($$anchor4) => {
              Icon$1($$anchor4, {
                name: "ChevronDown",
                strokeWidth: "3.5",
                className: "size-3.5"
              });
            };
            if_block(node_29, ($$render) => {
              if (open()) $$render(consequent_22);
              else $$render(alternate_12, false);
            });
          }
          reset(div_15);
          reset(div_12);
          reset(div_11);
          template_effect(() => {
            set_class(div_11, 1, `${buttonClassName() ?? ""} cursor-pointer`);
            set_class(div_12, 1, ` w-full font-medium flex items-center justify-between gap-2 ${(deep_read_state(attributes()), untrack(() => {
              var _a, _b;
              return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true" ? "shimmer" : "";
            })) ?? ""}
                        `);
          });
          event("pointerup", div_11, () => {
            if (!disabled()) {
              open(!open());
            }
          });
          append($$anchor3, div_11);
        };
        var alternate_14 = ($$anchor3) => {
          var div_16 = root_41();
          var div_17 = child(div_16);
          var div_18 = child(div_17);
          var node_30 = child(div_18);
          slot(node_30, $$props, "default", {}, null);
          var node_31 = sibling(node_30, 2);
          {
            var consequent_25 = ($$anchor4) => {
              var div_19 = root_42();
              var node_32 = child(div_19);
              {
                var consequent_24 = ($$anchor5) => {
                  Icon$1($$anchor5, { name: "ChevronUp", strokeWidth: "3.5", className: "size-3.5" });
                };
                var alternate_13 = ($$anchor5) => {
                  Icon$1($$anchor5, {
                    name: "ChevronDown",
                    strokeWidth: "3.5",
                    className: "size-3.5"
                  });
                };
                if_block(node_32, ($$render) => {
                  if (open()) $$render(consequent_24);
                  else $$render(alternate_13, false);
                });
              }
              reset(div_19);
              append($$anchor4, div_19);
            };
            if_block(node_31, ($$render) => {
              if (chevron()) $$render(consequent_25);
            });
          }
          reset(div_18);
          var node_33 = sibling(div_18, 2);
          {
            var consequent_27 = ($$anchor4) => {
              var fragment_36 = comment();
              var node_34 = first_child(fragment_36);
              {
                var consequent_26 = ($$anchor5) => {
                  var div_20 = root_46();
                  var node_35 = child(div_20);
                  slot(node_35, $$props, "content", {}, null);
                  reset(div_20);
                  transition(3, div_20, () => slide, () => ({ duration: 300, easing: quintOut, axis: "y" }));
                  event("pointerup", div_20, (e) => {
                    e.stopPropagation();
                  });
                  append($$anchor5, div_20);
                };
                if_block(node_34, ($$render) => {
                  if (open() && !hide()) $$render(consequent_26);
                });
              }
              append($$anchor4, fragment_36);
            };
            if_block(node_33, ($$render) => {
              if (grow()) $$render(consequent_27);
            });
          }
          reset(div_17);
          reset(div_16);
          template_effect(() => set_class(div_16, 1, `${buttonClassName() ?? ""} cursor-pointer`));
          event("click", div_16, (e) => {
            e.stopPropagation();
          });
          event("pointerup", div_16, (e) => {
            if (!disabled()) {
              open(!open());
            }
          });
          append($$anchor3, div_16);
        };
        if_block(node_20, ($$render) => {
          if (title() !== null) $$render(consequent_23);
          else $$render(alternate_14, false);
        });
      }
      var node_36 = sibling(node_20, 2);
      {
        var consequent_29 = ($$anchor3) => {
          var fragment_37 = comment();
          var node_37 = first_child(fragment_37);
          {
            var consequent_28 = ($$anchor4) => {
              var div_21 = root_48();
              var node_38 = child(div_21);
              slot(node_38, $$props, "content", {}, null);
              reset(div_21);
              transition(3, div_21, () => slide, () => ({ duration: 300, easing: quintOut, axis: "y" }));
              append($$anchor4, div_21);
            };
            if_block(node_37, ($$render) => {
              if (open() && !hide()) $$render(consequent_28);
            });
          }
          append($$anchor3, fragment_37);
        };
        if_block(node_36, ($$render) => {
          if (!grow()) $$render(consequent_29);
        });
      }
      append($$anchor2, fragment_19);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(attributes()), untrack(() => {
        var _a;
        return ((_a = attributes()) == null ? void 0 : _a.type) === "tool_calls";
      })) $$render(consequent_14);
      else $$render(alternate_15, false);
    });
  }
  reset(div);
  template_effect(() => {
    set_attribute(div, "id", id());
    set_class(div, 1, clsx(className()));
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2$g = from_html(`<hr class=" border-gray-100 dark:border-gray-850"/>`);
var root_12$6 = from_html(`<th scope="col" class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!"><div class="gap-1.5 text-left"><div class="shrink-0 break-normal"><!></div></div></th>`);
var root_14$3 = from_html(`<td><div class="break-normal"><!></div></td>`);
var root_13$3 = from_html(`<tr class="bg-white dark:bg-gray-900 text-xs"></tr>`);
var root_11$5 = from_html(`<div class="relative w-full group mb-2"><div class="scrollbar-hidden relative overflow-x-auto max-w-full"><table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-full rounded-xl"><thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-900 dark:text-gray-400 border-none"><tr></tr></thead><tbody></tbody></table></div> <div class=" absolute top-1 right-1.5 z-20 invisible group-hover:visible flex gap-0.5"><button class="p-1 rounded-lg bg-transparent transition"><!></button> <button class="p-1 rounded-lg bg-transparent transition"></button></div></div>`);
var root_18$3 = from_html(`<blockquote dir="auto"><!></blockquote>`);
var root_23$2 = from_html(`<input class=" translate-y-[1px] -translate-x-1" type="checkbox"/>`);
var root_22$1 = from_html(`<li class="text-start"><!> <!></li>`);
var root_21$2 = from_html(`<ol dir="auto"></ol>`);
var root_26$2 = from_html(`<input type="checkbox"/> <div><!></div>`, 1);
var root_25$2 = from_html(`<li><!></li>`);
var root_24$3 = from_html(`<ul dir="auto"></ul>`);
var root_30$1 = from_html(`<div class=" mb-1.5" slot="content"><!></div>`);
var root_34 = from_html(`<iframe width="100%" frameborder="0"></iframe>`);
var root_36$1 = from_html(`<p dir="auto"><!></p>`);
var root_39 = from_html(`<p><!></p>`);
var root_50 = from_html(`<div class="my-2"></div>`);
function MarkdownTokens($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  getContext("i18n");
  let id = prop($$props, "id", 8);
  let tokens = prop($$props, "tokens", 8);
  let top = prop($$props, "top", 8, true);
  let attributes = prop($$props, "attributes", 24, () => ({}));
  let sourceIds = prop($$props, "sourceIds", 24, () => []);
  let done = prop($$props, "done", 8, true);
  let save = prop($$props, "save", 8, false);
  let preview = prop($$props, "preview", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let onSave = prop($$props, "onSave", 8, () => {
  });
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let onPreview = prop($$props, "onPreview", 8, () => {
  });
  let onTaskClick = prop($$props, "onTaskClick", 8, () => {
  });
  let onSourceClick = prop($$props, "onSourceClick", 8, () => {
  });
  const headerComponent = (depth) => {
    return "h" + depth;
  };
  const exportTableToCSVHandler = (token, tokenIdx = 0) => {
    const header = token.header.map((headerCell) => `"${headerCell.text.replace(/"/g, '""')}"`);
    const rows = token.rows.map((row) => row.map((cell) => {
      const cellContent = cell.tokens.map((token2) => token2.text).join("");
      return `"${cellContent.replace(/"/g, '""')}"`;
    }));
    const csvData = [header, ...rows];
    const csvContent = csvData.map((row) => row.join(",")).join("\n");
    const bom = "\uFEFF";
    const blob = new Blob([bom + csvContent], { type: "text/csv;charset=UTF-8" });
    {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `table-${id()}-${tokenIdx}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, tokens, index, ($$anchor2, token, tokenIdx) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    {
      var consequent = ($$anchor3) => {
        var hr = root_2$g();
        append($$anchor3, hr);
      };
      var alternate_19 = ($$anchor3) => {
        var fragment_2 = comment();
        var node_2 = first_child(fragment_2);
        {
          var consequent_1 = ($$anchor4) => {
            var fragment_3 = comment();
            var node_3 = first_child(fragment_3);
            element$1(node_3, () => headerComponent(get$1(token).depth), false, ($$element, $$anchor5) => {
              attribute_effect($$element, () => ({ dir: "auto" }));
              {
                let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-h`);
                MarkdownInlineTokens($$anchor5, {
                  get id() {
                    return get$1($0);
                  },
                  get tokens() {
                    return get$1(token), untrack(() => get$1(token).tokens);
                  },
                  get done() {
                    return done();
                  },
                  get sourceIds() {
                    return sourceIds();
                  },
                  get onSourceClick() {
                    return onSourceClick();
                  }
                });
              }
            });
            append($$anchor4, fragment_3);
          };
          var alternate_18 = ($$anchor4) => {
            var fragment_5 = comment();
            var node_4 = first_child(fragment_5);
            {
              var consequent_3 = ($$anchor5) => {
                var fragment_6 = comment();
                var node_5 = first_child(fragment_6);
                {
                  var consequent_2 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}`);
                      let $1 = derived_safe_equal(() => ($settings(), untrack(() => {
                        var _a;
                        return ((_a = $settings()) == null ? void 0 : _a.collapseCodeBlocks) ?? false;
                      })));
                      let $2 = derived_safe_equal(() => (get$1(token), untrack(() => {
                        var _a;
                        return ((_a = get$1(token)) == null ? void 0 : _a.lang) ?? "";
                      })));
                      let $3 = derived_safe_equal(() => (get$1(token), untrack(() => {
                        var _a;
                        return ((_a = get$1(token)) == null ? void 0 : _a.text) ?? "";
                      })));
                      let $4 = derived_safe_equal(() => topPadding() ? "top-10" : "top-0");
                      CodeBlock($$anchor6, {
                        get id() {
                          return get$1($0);
                        },
                        get collapsed() {
                          return get$1($1);
                        },
                        get token() {
                          return get$1(token);
                        },
                        get lang() {
                          return get$1($2);
                        },
                        get code() {
                          return get$1($3);
                        },
                        get attributes() {
                          return attributes();
                        },
                        get save() {
                          return save();
                        },
                        get preview() {
                          return preview();
                        },
                        get edit() {
                          return editCodeBlock();
                        },
                        get stickyButtonsClassName() {
                          return get$1($4);
                        },
                        onSave: (value) => {
                          onSave()({
                            raw: get$1(token).raw,
                            oldContent: get$1(token).text,
                            newContent: value
                          });
                        },
                        get onUpdate() {
                          return onUpdate();
                        },
                        get onPreview() {
                          return onPreview();
                        }
                      });
                    }
                  };
                  var alternate = ($$anchor6) => {
                    var text$1 = text();
                    template_effect(() => set_text(text$1, (get$1(token), untrack(() => get$1(token).text))));
                    append($$anchor6, text$1);
                  };
                  if_block(node_5, ($$render) => {
                    if (get$1(token), untrack(() => get$1(token).raw.includes("```"))) $$render(consequent_2);
                    else $$render(alternate, false);
                  });
                }
                append($$anchor5, fragment_6);
              };
              var alternate_17 = ($$anchor5) => {
                var fragment_9 = comment();
                var node_6 = first_child(fragment_9);
                {
                  var consequent_4 = ($$anchor6) => {
                    var div = root_11$5();
                    var div_1 = child(div);
                    var table = child(div_1);
                    var thead = child(table);
                    var tr = child(thead);
                    each(tr, 5, () => (get$1(token), untrack(() => get$1(token).header)), index, ($$anchor7, header, headerIdx) => {
                      var th = root_12$6();
                      var div_2 = child(th);
                      var div_3 = child(div_2);
                      var node_7 = child(div_3);
                      {
                        let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-header-${headerIdx}`);
                        MarkdownInlineTokens(node_7, {
                          get id() {
                            return get$1($0);
                          },
                          get tokens() {
                            return get$1(header), untrack(() => get$1(header).tokens);
                          },
                          get done() {
                            return done();
                          },
                          get sourceIds() {
                            return sourceIds();
                          },
                          get onSourceClick() {
                            return onSourceClick();
                          }
                        });
                      }
                      reset(div_3);
                      reset(div_2);
                      reset(th);
                      template_effect(() => set_style(th, (get$1(token), untrack(() => get$1(token).align[headerIdx] ? "" : `text-align: ${get$1(token).align[headerIdx]}`))));
                      append($$anchor7, th);
                    });
                    reset(tr);
                    reset(thead);
                    var tbody = sibling(thead);
                    each(tbody, 5, () => (get$1(token), untrack(() => get$1(token).rows)), index, ($$anchor7, row, rowIdx) => {
                      var tr_1 = root_13$3();
                      each(tr_1, 5, () => get$1(row) ?? [], index, ($$anchor8, cell, cellIdx) => {
                        var td = root_14$3();
                        var div_4 = child(td);
                        var node_8 = child(div_4);
                        {
                          let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-row-${rowIdx}-${cellIdx}`);
                          MarkdownInlineTokens(node_8, {
                            get id() {
                              return get$1($0);
                            },
                            get tokens() {
                              return get$1(cell), untrack(() => get$1(cell).tokens);
                            },
                            get done() {
                              return done();
                            },
                            get sourceIds() {
                              return sourceIds();
                            },
                            get onSourceClick() {
                              return onSourceClick();
                            }
                          });
                        }
                        reset(div_4);
                        reset(td);
                        template_effect(() => {
                          set_class(td, 1, `px-3! py-2! text-gray-900 dark:text-white w-max ${(get$1(token), untrack(() => get$1(token).rows.length - 1 === rowIdx ? "" : "border-b border-gray-50! dark:border-gray-850!")) ?? ""}`);
                          set_style(td, (get$1(token), untrack(() => get$1(token).align[cellIdx] ? `text-align: ${get$1(token).align[cellIdx]}` : "")));
                        });
                        append($$anchor8, td);
                      });
                      reset(tr_1);
                      append($$anchor7, tr_1);
                    });
                    reset(tbody);
                    reset(table);
                    reset(div_1);
                    var div_5 = sibling(div_1, 2);
                    var button = child(div_5);
                    var node_9 = child(button);
                    Icon$1(node_9, {
                      name: "Clipboard",
                      className: " size-3.5",
                      strokeWidth: "1.5"
                    });
                    reset(button);
                    var button_1 = sibling(button, 2);
                    reset(div_5);
                    reset(div);
                    event("click", button, (e) => {
                      var _a;
                      e.stopPropagation();
                      copyToClipboard(get$1(token).raw.trim(), null, ((_a = $settings()) == null ? void 0 : _a.copyFormatted) ?? false);
                    });
                    event("click", button_1, (e) => {
                      e.stopPropagation();
                      exportTableToCSVHandler(get$1(token), tokenIdx);
                    });
                    append($$anchor6, div);
                  };
                  var alternate_16 = ($$anchor6) => {
                    var fragment_10 = comment();
                    var node_10 = first_child(fragment_10);
                    {
                      var consequent_6 = ($$anchor7) => {
                        const alert = derived_safe_equal(() => (deep_read_state(alertComponent), get$1(token), untrack(() => alertComponent(get$1(token)))));
                        var fragment_11 = comment();
                        var node_11 = first_child(fragment_11);
                        {
                          var consequent_5 = ($$anchor8) => {
                            AlertRenderer($$anchor8, {
                              get token() {
                                return get$1(token);
                              },
                              get alert() {
                                return get$1(alert);
                              }
                            });
                          };
                          var alternate_1 = ($$anchor8) => {
                            var blockquote = root_18$3();
                            var node_12 = child(blockquote);
                            {
                              let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}`);
                              MarkdownTokens(node_12, {
                                get id() {
                                  return get$1($0);
                                },
                                get tokens() {
                                  return get$1(token), untrack(() => get$1(token).tokens);
                                },
                                get done() {
                                  return done();
                                },
                                get editCodeBlock() {
                                  return editCodeBlock();
                                },
                                get onTaskClick() {
                                  return onTaskClick();
                                },
                                get sourceIds() {
                                  return sourceIds();
                                },
                                get onSourceClick() {
                                  return onSourceClick();
                                }
                              });
                            }
                            reset(blockquote);
                            template_effect(() => blockquote.dir = blockquote.dir);
                            append($$anchor8, blockquote);
                          };
                          if_block(node_11, ($$render) => {
                            if (get$1(alert)) $$render(consequent_5);
                            else $$render(alternate_1, false);
                          });
                        }
                        append($$anchor7, fragment_11);
                      };
                      var alternate_15 = ($$anchor7) => {
                        var fragment_13 = comment();
                        var node_13 = first_child(fragment_13);
                        {
                          var consequent_10 = ($$anchor8) => {
                            var fragment_14 = comment();
                            var node_14 = first_child(fragment_14);
                            {
                              var consequent_8 = ($$anchor9) => {
                                var ol = root_21$2();
                                each(ol, 5, () => (get$1(token), untrack(() => get$1(token).items)), index, ($$anchor10, item, itemIdx) => {
                                  var li = root_22$1();
                                  var node_15 = child(li);
                                  {
                                    var consequent_7 = ($$anchor11) => {
                                      var input = root_23$2();
                                      remove_input_defaults(input);
                                      template_effect(() => set_checked(input, (get$1(item), untrack(() => get$1(item).checked))));
                                      event("change", input, (e) => {
                                        onTaskClick()({
                                          id: id(),
                                          token: get$1(token),
                                          tokenIdx,
                                          item: get$1(item),
                                          itemIdx,
                                          checked: e.target.checked
                                        });
                                      });
                                      append($$anchor11, input);
                                    };
                                    if_block(node_15, ($$render) => {
                                      if (get$1(item), untrack(() => {
                                        var _a;
                                        return (_a = get$1(item)) == null ? void 0 : _a.task;
                                      })) $$render(consequent_7);
                                    });
                                  }
                                  var node_16 = sibling(node_15, 2);
                                  {
                                    let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-${itemIdx}`);
                                    MarkdownTokens(node_16, {
                                      get id() {
                                        return get$1($0);
                                      },
                                      get tokens() {
                                        return get$1(item), untrack(() => get$1(item).tokens);
                                      },
                                      get top() {
                                        return get$1(token), untrack(() => get$1(token).loose);
                                      },
                                      get done() {
                                        return done();
                                      },
                                      get editCodeBlock() {
                                        return editCodeBlock();
                                      },
                                      get onTaskClick() {
                                        return onTaskClick();
                                      },
                                      get sourceIds() {
                                        return sourceIds();
                                      },
                                      get onSourceClick() {
                                        return onSourceClick();
                                      }
                                    });
                                  }
                                  reset(li);
                                  append($$anchor10, li);
                                });
                                reset(ol);
                                template_effect(() => {
                                  set_attribute(ol, "start", (get$1(token), untrack(() => get$1(token).start || 1)));
                                  ol.dir = ol.dir;
                                });
                                append($$anchor9, ol);
                              };
                              var alternate_3 = ($$anchor9) => {
                                var ul = root_24$3();
                                each(ul, 5, () => (get$1(token), untrack(() => get$1(token).items)), index, ($$anchor10, item, itemIdx) => {
                                  var li_1 = root_25$2();
                                  var node_17 = child(li_1);
                                  {
                                    var consequent_9 = ($$anchor11) => {
                                      var fragment_15 = root_26$2();
                                      var input_1 = first_child(fragment_15);
                                      remove_input_defaults(input_1);
                                      var div_6 = sibling(input_1, 2);
                                      var node_18 = child(div_6);
                                      {
                                        let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-${itemIdx}`);
                                        MarkdownTokens(node_18, {
                                          get id() {
                                            return get$1($0);
                                          },
                                          get tokens() {
                                            return get$1(item), untrack(() => get$1(item).tokens);
                                          },
                                          get top() {
                                            return get$1(token), untrack(() => get$1(token).loose);
                                          },
                                          get done() {
                                            return done();
                                          },
                                          get editCodeBlock() {
                                            return editCodeBlock();
                                          },
                                          get onTaskClick() {
                                            return onTaskClick();
                                          },
                                          get sourceIds() {
                                            return sourceIds();
                                          },
                                          get onSourceClick() {
                                            return onSourceClick();
                                          }
                                        });
                                      }
                                      reset(div_6);
                                      template_effect(() => set_checked(input_1, (get$1(item), untrack(() => get$1(item).checked))));
                                      event("change", input_1, (e) => {
                                        onTaskClick()({
                                          id: id(),
                                          token: get$1(token),
                                          tokenIdx,
                                          item: get$1(item),
                                          itemIdx,
                                          checked: e.target.checked
                                        });
                                      });
                                      append($$anchor11, fragment_15);
                                    };
                                    var alternate_2 = ($$anchor11) => {
                                      var fragment_16 = comment();
                                      var node_19 = first_child(fragment_16);
                                      {
                                        let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-${itemIdx}`);
                                        MarkdownTokens(node_19, {
                                          get id() {
                                            return get$1($0);
                                          },
                                          get tokens() {
                                            return get$1(item), untrack(() => get$1(item).tokens);
                                          },
                                          get top() {
                                            return get$1(token), untrack(() => get$1(token).loose);
                                          },
                                          get done() {
                                            return done();
                                          },
                                          get editCodeBlock() {
                                            return editCodeBlock();
                                          },
                                          get onTaskClick() {
                                            return onTaskClick();
                                          },
                                          get sourceIds() {
                                            return sourceIds();
                                          },
                                          get onSourceClick() {
                                            return onSourceClick();
                                          }
                                        });
                                      }
                                      append($$anchor11, fragment_16);
                                    };
                                    if_block(node_17, ($$render) => {
                                      if (get$1(item), untrack(() => {
                                        var _a;
                                        return (_a = get$1(item)) == null ? void 0 : _a.task;
                                      })) $$render(consequent_9);
                                      else $$render(alternate_2, false);
                                    });
                                  }
                                  reset(li_1);
                                  template_effect(() => set_class(li_1, 1, `text-start ${(get$1(item), untrack(() => {
                                    var _a;
                                    return ((_a = get$1(item)) == null ? void 0 : _a.task) ? "flex -translate-x-6.5 gap-3 " : "";
                                  })) ?? ""}`));
                                  append($$anchor10, li_1);
                                });
                                reset(ul);
                                template_effect(() => ul.dir = ul.dir);
                                append($$anchor9, ul);
                              };
                              if_block(node_14, ($$render) => {
                                if (get$1(token), untrack(() => get$1(token).ordered)) $$render(consequent_8);
                                else $$render(alternate_3, false);
                              });
                            }
                            append($$anchor8, fragment_14);
                          };
                          var alternate_14 = ($$anchor8) => {
                            var fragment_17 = comment();
                            var node_20 = first_child(fragment_17);
                            {
                              var consequent_11 = ($$anchor9) => {
                                {
                                  let $0 = derived_safe_equal(() => ($settings(), untrack(() => {
                                    var _a;
                                    return ((_a = $settings()) == null ? void 0 : _a.expandDetails) ?? false;
                                  })));
                                  let $1 = derived_safe_equal(() => (get$1(token), untrack(() => {
                                    var _a;
                                    return (_a = get$1(token)) == null ? void 0 : _a.attributes;
                                  })));
                                  Collapsible($$anchor9, {
                                    get title() {
                                      return get$1(token), untrack(() => get$1(token).summary);
                                    },
                                    get open() {
                                      return get$1($0);
                                    },
                                    get attributes() {
                                      return get$1($1);
                                    },
                                    className: "w-full space-y-1",
                                    dir: "auto",
                                    $$slots: {
                                      content: ($$anchor10, $$slotProps) => {
                                        var div_7 = root_30$1();
                                        var node_21 = child(div_7);
                                        {
                                          let $02 = derived_safe_equal(() => `${id()}-${tokenIdx}-d`);
                                          let $12 = derived_safe_equal(() => (deep_read_state(marked), deep_read_state(decode), get$1(token), untrack(() => marked.lexer(decode(get$1(token).text)))));
                                          let $2 = derived_safe_equal(() => (get$1(token), untrack(() => {
                                            var _a;
                                            return (_a = get$1(token)) == null ? void 0 : _a.attributes;
                                          })));
                                          MarkdownTokens(node_21, {
                                            get id() {
                                              return get$1($02);
                                            },
                                            get tokens() {
                                              return get$1($12);
                                            },
                                            get attributes() {
                                              return get$1($2);
                                            },
                                            get done() {
                                              return done();
                                            },
                                            get editCodeBlock() {
                                              return editCodeBlock();
                                            },
                                            get onTaskClick() {
                                              return onTaskClick();
                                            },
                                            get sourceIds() {
                                              return sourceIds();
                                            },
                                            get onSourceClick() {
                                              return onSourceClick();
                                            }
                                          });
                                        }
                                        reset(div_7);
                                        append($$anchor10, div_7);
                                      }
                                    }
                                  });
                                }
                              };
                              var alternate_13 = ($$anchor9) => {
                                var fragment_19 = comment();
                                var node_22 = first_child(fragment_19);
                                {
                                  var consequent_12 = ($$anchor10) => {
                                    var fragment_20 = comment();
                                    var node_23 = first_child(fragment_20);
                                    html(node_23, () => (get$1(token), untrack(() => get$1(token).raw)));
                                    append($$anchor10, fragment_20);
                                  };
                                  var alternate_12 = ($$anchor10) => {
                                    var fragment_21 = comment();
                                    var node_24 = first_child(fragment_21);
                                    {
                                      var consequent_13 = ($$anchor11) => {
                                        var iframe = root_34();
                                        template_effect(() => {
                                          set_attribute(iframe, "src", `${WEBUI_BASE_URL}/api/v1/files/${(get$1(token), untrack(() => get$1(token).fileId)) ?? ""}/content`);
                                          set_attribute(iframe, "title", (get$1(token), untrack(() => get$1(token).fileId)));
                                        });
                                        event("load", iframe, (e) => {
                                          try {
                                            e.currentTarget.style.height = e.currentTarget.contentWindow.document.body.scrollHeight + 20 + "px";
                                          } catch {
                                          }
                                        });
                                        append($$anchor11, iframe);
                                      };
                                      var alternate_11 = ($$anchor11) => {
                                        var fragment_22 = comment();
                                        var node_25 = first_child(fragment_22);
                                        {
                                          var consequent_14 = ($$anchor12) => {
                                            var p = root_36$1();
                                            var node_26 = child(p);
                                            {
                                              let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-p`);
                                              let $1 = derived_safe_equal(() => (get$1(token), untrack(() => get$1(token).tokens ?? [])));
                                              MarkdownInlineTokens(node_26, {
                                                get id() {
                                                  return get$1($0);
                                                },
                                                get tokens() {
                                                  return get$1($1);
                                                },
                                                get done() {
                                                  return done();
                                                },
                                                get sourceIds() {
                                                  return sourceIds();
                                                },
                                                get onSourceClick() {
                                                  return onSourceClick();
                                                }
                                              });
                                            }
                                            reset(p);
                                            template_effect(() => p.dir = p.dir);
                                            append($$anchor12, p);
                                          };
                                          var alternate_10 = ($$anchor12) => {
                                            var fragment_23 = comment();
                                            var node_27 = first_child(fragment_23);
                                            {
                                              var consequent_18 = ($$anchor13) => {
                                                var fragment_24 = comment();
                                                var node_28 = first_child(fragment_24);
                                                {
                                                  var consequent_16 = ($$anchor14) => {
                                                    var p_1 = root_39();
                                                    var node_29 = child(p_1);
                                                    {
                                                      var consequent_15 = ($$anchor15) => {
                                                        {
                                                          let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-t`);
                                                          MarkdownInlineTokens($$anchor15, {
                                                            get id() {
                                                              return get$1($0);
                                                            },
                                                            get tokens() {
                                                              return get$1(token), untrack(() => get$1(token).tokens);
                                                            },
                                                            get done() {
                                                              return done();
                                                            },
                                                            get sourceIds() {
                                                              return sourceIds();
                                                            },
                                                            get onSourceClick() {
                                                              return onSourceClick();
                                                            }
                                                          });
                                                        }
                                                      };
                                                      var alternate_4 = ($$anchor15) => {
                                                        var text_1 = text();
                                                        template_effect(($0) => set_text(text_1, $0), [
                                                          () => (deep_read_state(unescapeHtml), get$1(token), untrack(() => unescapeHtml(get$1(token).text)))
                                                        ]);
                                                        append($$anchor15, text_1);
                                                      };
                                                      if_block(node_29, ($$render) => {
                                                        if (get$1(token), untrack(() => get$1(token).tokens)) $$render(consequent_15);
                                                        else $$render(alternate_4, false);
                                                      });
                                                    }
                                                    reset(p_1);
                                                    append($$anchor14, p_1);
                                                  };
                                                  var alternate_6 = ($$anchor14) => {
                                                    var fragment_27 = comment();
                                                    var node_30 = first_child(fragment_27);
                                                    {
                                                      var consequent_17 = ($$anchor15) => {
                                                        {
                                                          let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-p`);
                                                          let $1 = derived_safe_equal(() => (get$1(token), untrack(() => get$1(token).tokens ?? [])));
                                                          MarkdownInlineTokens($$anchor15, {
                                                            get id() {
                                                              return get$1($0);
                                                            },
                                                            get tokens() {
                                                              return get$1($1);
                                                            },
                                                            get done() {
                                                              return done();
                                                            },
                                                            get sourceIds() {
                                                              return sourceIds();
                                                            },
                                                            get onSourceClick() {
                                                              return onSourceClick();
                                                            }
                                                          });
                                                        }
                                                      };
                                                      var alternate_5 = ($$anchor15) => {
                                                        var text_2 = text();
                                                        template_effect(($0) => set_text(text_2, $0), [
                                                          () => (deep_read_state(unescapeHtml), get$1(token), untrack(() => unescapeHtml(get$1(token).text)))
                                                        ]);
                                                        append($$anchor15, text_2);
                                                      };
                                                      if_block(
                                                        node_30,
                                                        ($$render) => {
                                                          if (get$1(token), untrack(() => get$1(token).tokens)) $$render(consequent_17);
                                                          else $$render(alternate_5, false);
                                                        },
                                                        true
                                                      );
                                                    }
                                                    append($$anchor14, fragment_27);
                                                  };
                                                  if_block(node_28, ($$render) => {
                                                    if (top()) $$render(consequent_16);
                                                    else $$render(alternate_6, false);
                                                  });
                                                }
                                                append($$anchor13, fragment_24);
                                              };
                                              var alternate_9 = ($$anchor13) => {
                                                var fragment_30 = comment();
                                                var node_31 = first_child(fragment_30);
                                                {
                                                  var consequent_19 = ($$anchor14) => {
                                                    var text_3 = text();
                                                    template_effect(() => set_text(text_3, (get$1(token), untrack(() => get$1(token).text))));
                                                    append($$anchor14, text_3);
                                                  };
                                                  var alternate_8 = ($$anchor14) => {
                                                    var fragment_32 = comment();
                                                    var node_32 = first_child(fragment_32);
                                                    {
                                                      var consequent_20 = ($$anchor15) => {
                                                        var text_4 = text();
                                                        template_effect(() => set_text(text_4, (get$1(token), untrack(() => get$1(token).text))));
                                                        append($$anchor15, text_4);
                                                      };
                                                      var alternate_7 = ($$anchor15) => {
                                                        var fragment_34 = comment();
                                                        var node_33 = first_child(fragment_34);
                                                        {
                                                          var consequent_21 = ($$anchor16) => {
                                                            var div_8 = root_50();
                                                            append($$anchor16, div_8);
                                                          };
                                                          if_block(
                                                            node_33,
                                                            ($$render) => {
                                                              if (get$1(token), untrack(() => get$1(token).type === "space")) $$render(consequent_21);
                                                            },
                                                            true
                                                          );
                                                        }
                                                        append($$anchor15, fragment_34);
                                                      };
                                                      if_block(
                                                        node_32,
                                                        ($$render) => {
                                                          if (get$1(token), untrack(() => get$1(token).type === "blockKatex")) $$render(consequent_20);
                                                          else $$render(alternate_7, false);
                                                        },
                                                        true
                                                      );
                                                    }
                                                    append($$anchor14, fragment_32);
                                                  };
                                                  if_block(
                                                    node_31,
                                                    ($$render) => {
                                                      if (get$1(token), untrack(() => get$1(token).type === "inlineKatex")) $$render(consequent_19);
                                                      else $$render(alternate_8, false);
                                                    },
                                                    true
                                                  );
                                                }
                                                append($$anchor13, fragment_30);
                                              };
                                              if_block(
                                                node_27,
                                                ($$render) => {
                                                  if (get$1(token), untrack(() => get$1(token).type === "text")) $$render(consequent_18);
                                                  else $$render(alternate_9, false);
                                                },
                                                true
                                              );
                                            }
                                            append($$anchor12, fragment_23);
                                          };
                                          if_block(
                                            node_25,
                                            ($$render) => {
                                              if (get$1(token), untrack(() => get$1(token).type === "paragraph")) $$render(consequent_14);
                                              else $$render(alternate_10, false);
                                            },
                                            true
                                          );
                                        }
                                        append($$anchor11, fragment_22);
                                      };
                                      if_block(
                                        node_24,
                                        ($$render) => {
                                          if (get$1(token), untrack(() => get$1(token).type === "iframe")) $$render(consequent_13);
                                          else $$render(alternate_11, false);
                                        },
                                        true
                                      );
                                    }
                                    append($$anchor10, fragment_21);
                                  };
                                  if_block(
                                    node_22,
                                    ($$render) => {
                                      if (get$1(token), untrack(() => get$1(token).type === "html")) $$render(consequent_12);
                                      else $$render(alternate_12, false);
                                    },
                                    true
                                  );
                                }
                                append($$anchor9, fragment_19);
                              };
                              if_block(
                                node_20,
                                ($$render) => {
                                  if (get$1(token), untrack(() => get$1(token).type === "details")) $$render(consequent_11);
                                  else $$render(alternate_13, false);
                                },
                                true
                              );
                            }
                            append($$anchor8, fragment_17);
                          };
                          if_block(
                            node_13,
                            ($$render) => {
                              if (get$1(token), untrack(() => get$1(token).type === "list")) $$render(consequent_10);
                              else $$render(alternate_14, false);
                            },
                            true
                          );
                        }
                        append($$anchor7, fragment_13);
                      };
                      if_block(
                        node_10,
                        ($$render) => {
                          if (get$1(token), untrack(() => get$1(token).type === "blockquote")) $$render(consequent_6);
                          else $$render(alternate_15, false);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_10);
                  };
                  if_block(
                    node_6,
                    ($$render) => {
                      if (get$1(token), untrack(() => get$1(token).type === "table")) $$render(consequent_4);
                      else $$render(alternate_16, false);
                    },
                    true
                  );
                }
                append($$anchor5, fragment_9);
              };
              if_block(
                node_4,
                ($$render) => {
                  if (get$1(token), untrack(() => get$1(token).type === "code")) $$render(consequent_3);
                  else $$render(alternate_17, false);
                },
                true
              );
            }
            append($$anchor4, fragment_5);
          };
          if_block(
            node_2,
            ($$render) => {
              if (get$1(token), untrack(() => get$1(token).type === "heading")) $$render(consequent_1);
              else $$render(alternate_18, false);
            },
            true
          );
        }
        append($$anchor3, fragment_2);
      };
      if_block(node_1, ($$render) => {
        if (get$1(token), untrack(() => get$1(token).type === "hr")) $$render(consequent);
        else $$render(alternate_19, false);
      });
    }
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
}
function footnoteExtension() {
  return {
    name: "footnote",
    level: "inline",
    start(src) {
      return src.search(/\[\^\s*[a-zA-Z0-9_-]+\s*\]/);
    },
    tokenizer(src) {
      const rule = /^\[\^\s*([a-zA-Z0-9_-]+)\s*\]/;
      const match = rule.exec(src);
      if (match) {
        const escapedText = escapeHtml(match[1]);
        return {
          type: "footnote",
          raw: match[0],
          text: match[1],
          escapedText
        };
      }
    }
  };
}
function footnoteExtension$1() {
  return {
    extensions: [footnoteExtension()]
  };
}
function citationExtension() {
  return {
    name: "citation",
    level: "inline",
    start(src) {
      return src.search(/\[(\d[\d,\s]*)\]/);
    },
    tokenizer(src) {
      if (/^\[\^/.test(src)) return;
      const rule = /^(\[(?:\d[\d,\s]*)\])+/;
      const match = rule.exec(src);
      if (!match) return;
      const raw = match[0];
      const groupRegex = /\[([\d,\s]+)\]/g;
      const ids = [];
      let m;
      while (m = groupRegex.exec(raw)) {
        const parsed = m[1].split(",").map((n) => parseInt(n.trim(), 10)).filter((n) => !isNaN(n));
        ids.push(...parsed);
      }
      return {
        type: "citation",
        raw,
        ids
        // merged list
      };
    },
    renderer(token) {
      return token.ids.join(",");
    }
  };
}
function citationExtension$1() {
  return {
    extensions: [citationExtension()]
  };
}
function Markdown($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let id = prop($$props, "id", 8, "");
  let content = prop($$props, "content", 8);
  let done = prop($$props, "done", 8, true);
  let model = prop($$props, "model", 8, null);
  let save = prop($$props, "save", 8, false);
  let preview = prop($$props, "preview", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let sourceIds = prop($$props, "sourceIds", 24, () => []);
  let onSave = prop($$props, "onSave", 8, () => {
  });
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let onPreview = prop($$props, "onPreview", 8, () => {
  });
  let onSourceClick = prop($$props, "onSourceClick", 8, () => {
  });
  let onTaskClick = prop($$props, "onTaskClick", 8, () => {
  });
  let tokens = mutable_source([]);
  const options = {};
  marked.use(markedExtension(options));
  marked.use(citationExtension$1());
  marked.use(footnoteExtension$1());
  marked.use(disableSingleTilde);
  marked.use({
    extensions: [
      mentionExtension({ triggerChar: "@" }),
      mentionExtension({ triggerChar: "#" })
    ]
  });
  legacy_pre_effect(
    () => (deep_read_state(content()), deep_read_state(model()), $user()),
    () => {
      (async () => {
        var _a, _b;
        if (content()) {
          set(tokens, marked.lexer(replaceTokens(processResponseContent(content()), (_a = model()) == null ? void 0 : _a.name, (_b = $user()) == null ? void 0 : _b.name)));
        }
      })();
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, id, ($$anchor2) => {
    MarkdownTokens($$anchor2, {
      get tokens() {
        return get$1(tokens);
      },
      get id() {
        return id();
      },
      get done() {
        return done();
      },
      get save() {
        return save();
      },
      get preview() {
        return preview();
      },
      get editCodeBlock() {
        return editCodeBlock();
      },
      get sourceIds() {
        return sourceIds();
      },
      get topPadding() {
        return topPadding();
      },
      get onTaskClick() {
        return onTaskClick();
      },
      get onSourceClick() {
        return onSourceClick();
      },
      get onSave() {
        return onSave();
      },
      get onUpdate() {
        return onUpdate();
      },
      get onPreview() {
        return onPreview();
      }
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3$e = from_html(`<button class="px-1.5 py-[1px] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl flex items-center gap-1 min-w-fit transition"><!> <div class="shrink-0"> </div></button>`);
var root_2$f = from_html(`<div class="flex flex-row shrink-0 p-0.5 bg-white dark:bg-gray-850 dark:text-gray-100 text-medium rounded-xl shadow-xl border border-gray-100 dark:border-gray-800"></div>`);
var root_5$a = from_html(`<div class="py-1 flex dark:text-gray-100 bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 w-72 rounded-full shadow-xl"><input type="text" id="floating-message-input" class="ml-5 bg-transparent outline-hidden w-full flex-1 text-sm"/> <div class="ml-1 mr-1"><button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clip-rule="evenodd"></path></svg></button></div></div>`);
var root_9$4 = from_html(`<div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"> </button></div>`);
var root_6$c = from_html(`<div class="bg-white dark:bg-gray-850 dark:text-gray-100 rounded-3xl shadow-xl w-80 max-w-full border border-gray-100 dark:border-gray-800"><div class="bg-white dark:bg-gray-850 dark:text-gray-100 text-medium rounded-3xl px-3.5 pt-3 w-full"><div class="font-medium"><!></div></div> <div class="bg-white dark:bg-gray-850 dark:text-gray-100 text-medium rounded-4xl w-full"><div class=" max-h-80 overflow-y-auto w-full markdown-prose-xs px-3.5 py-3" id="response-container"><!> <!></div></div></div>`);
var root$g = from_html(`<div class="absolute rounded-lg mt-1 text-xs z-9999" style="display: none"><!></div>`);
function FloatingButtons($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let id = prop($$props, "id", 8, "");
  let messageId = prop($$props, "messageId", 8, "");
  let model = prop($$props, "model", 8, null);
  let messages = prop($$props, "messages", 24, () => []);
  let actions = prop($$props, "actions", 28, () => []);
  let onAdd = prop($$props, "onAdd", 8, (e) => {
  });
  let floatingInput = mutable_source(false);
  let selectedAction = mutable_source(null);
  let selectedText = mutable_source("");
  let floatingInputValue = mutable_source("");
  let content = mutable_source("");
  let responseContent = mutable_source(null);
  let responseDone = mutable_source(false);
  let controller = null;
  const DEFAULT_ACTIONS = [
    {
      id: "ask",
      label: $i18n().t("Ask"),
      iconName: "ChatBubble",
      input: true,
      prompt: `{{SELECTED_CONTENT}}


{{INPUT_CONTENT}}`
    },
    {
      id: "explain",
      label: $i18n().t("Explain"),
      iconName: "LightBulb",
      prompt: `{{SELECTED_CONTENT}}


${$i18n().t("Explain")}`
    }
  ];
  const autoScroll = async () => {
    const responseContainer = document.getElementById("response-container");
    if (responseContainer) {
      if (responseContainer.scrollHeight - responseContainer.clientHeight <= responseContainer.scrollTop + 50) {
        responseContainer.scrollTop = responseContainer.scrollHeight;
      }
    }
  };
  const actionHandler = async (actionId) => {
    var _a;
    if (!model()) {
      toast.error($i18n().t("Model not selected"));
      return;
    }
    let selectedContent = get$1(selectedText).split("\n").map((line) => `> ${line}`).join("\n");
    let selectedAction2 = actions().find((action2) => action2.id === actionId);
    if (!selectedAction2) {
      toast.error($i18n().t("Action not found"));
      return;
    }
    let prompt = (selectedAction2 == null ? void 0 : selectedAction2.prompt) ?? "";
    let toolIds = [];
    const varToolPattern = /\{\{(.*?)\|tool:id="([^"]+)"\}\}/g;
    prompt = prompt.replace(varToolPattern, (match2, variableId, toolId) => {
      toolIds.push(toolId);
      return variableId;
    });
    let toolIdPattern = /\{\{TOOL:([^\}]+)\}\}/g;
    let match;
    while ((match = toolIdPattern.exec(prompt)) !== null) {
      toolIds.push(match[1]);
    }
    prompt = prompt.replace(toolIdPattern, "");
    if (prompt.includes("{{INPUT_CONTENT}}") && get$1(floatingInput)) {
      prompt = prompt.replace("{{INPUT_CONTENT}}", get$1(floatingInputValue));
      set(floatingInputValue, "");
    }
    prompt = prompt.replace("{{CONTENT}}", get$1(selectedText));
    prompt = prompt.replace("{{SELECTED_CONTENT}}", selectedContent);
    set(content, prompt);
    set(responseContent, "");
    let res;
    [res, controller] = await chatCompletion("static-token", {
      model: model(),
      model_item: $models().find((m) => m.id === model()),
      session_id: (_a = $socket()) == null ? void 0 : _a.id,
      chat_id: $chatId(),
      messages: [...messages(), { role: "user", content: get$1(content) }].map((message) => ({ role: message.role, content: message.content })),
      ...toolIds.length > 0 ? {
        tool_ids: toolIds
        // params: {
        //      function_calling: 'native'
        // }
      } : {},
      stream: true
      // Enable streaming
    });
    if (res && res.ok) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      const processStream = async () => {
        var _a2, _b;
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((line) => line.trim() !== "");
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              if (line.startsWith("data: [DONE]")) {
                set(responseDone, true);
                await tick();
                autoScroll();
                continue;
              } else {
                try {
                  const data = JSON.parse(line.slice(6));
                  if (data.choices && ((_b = (_a2 = data.choices[0]) == null ? void 0 : _a2.delta) == null ? void 0 : _b.content)) {
                    set(responseContent, get$1(responseContent) + data.choices[0].delta.content);
                    autoScroll();
                  }
                } catch (e) {
                  console.error(e);
                }
              }
            }
          }
        }
      };
      try {
        await processStream();
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error(e);
        }
      }
    } else {
      toast.error($i18n().t("An error occurred while fetching the explanation"));
    }
  };
  const addHandler = async () => {
    const messages2 = [
      { role: "user", content: get$1(content) },
      { role: "assistant", content: get$1(responseContent) }
    ];
    onAdd()({ modelId: model(), parentId: messageId(), messages: messages2 });
  };
  const closeHandler = () => {
    if (controller) {
      controller.abort();
    }
    set(selectedAction, null);
    set(selectedText, "");
    set(responseContent, null);
    set(responseDone, false);
    set(floatingInput, false);
    set(floatingInputValue, "");
  };
  onDestroy(() => {
    if (controller) {
      controller.abort();
    }
  });
  legacy_pre_effect(() => deep_read_state(actions()), () => {
    if (actions().length === 0) {
      actions(DEFAULT_ACTIONS);
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { closeHandler };
  init();
  var div = root$g();
  var node = child(div);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent_1 = ($$anchor3) => {
          var div_1 = root_2$f();
          each(div_1, 5, actions, index, ($$anchor4, action2) => {
            var button = root_3$e();
            var node_2 = child(button);
            {
              var consequent = ($$anchor5) => {
                Icon$1($$anchor5, {
                  get name() {
                    return get$1(action2), untrack(() => get$1(action2).iconName);
                  },
                  className: "size-3 shrink-0"
                });
              };
              if_block(node_2, ($$render) => {
                if (get$1(action2), untrack(() => get$1(action2).iconName)) $$render(consequent);
              });
            }
            var div_2 = sibling(node_2, 2);
            var text2 = child(div_2, true);
            reset(div_2);
            reset(button);
            template_effect(() => set_text(text2, (get$1(action2), untrack(() => get$1(action2).label))));
            event("click", button, async () => {
              set(selectedText, window.getSelection().toString());
              set(selectedAction, get$1(action2));
              if (get$1(action2).prompt.includes("{{INPUT_CONTENT}}")) {
                set(floatingInput, true);
                set(floatingInputValue, "");
                await tick();
                setTimeout(
                  () => {
                    const input = document.getElementById("floating-message-input");
                    if (input) {
                      input.focus();
                    }
                  },
                  0
                );
              } else {
                actionHandler(get$1(action2).id);
              }
            });
            append($$anchor4, button);
          });
          reset(div_1);
          append($$anchor3, div_1);
        };
        var alternate = ($$anchor3) => {
          var div_3 = root_5$a();
          var input_1 = child(div_3);
          remove_input_defaults(input_1);
          var div_4 = sibling(input_1, 2);
          var button_1 = child(div_4);
          reset(div_4);
          reset(div_3);
          template_effect(
            ($0) => {
              set_attribute(input_1, "placeholder", $0);
              set_class(button_1, 1, `${get$1(floatingInputValue) !== "" ? "bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 " : "text-white bg-gray-200 dark:text-gray-900 dark:bg-gray-700 disabled"} transition rounded-full p-1.5 m-0.5 self-center`);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Ask a question")))
            ]
          );
          bind_value(input_1, () => get$1(floatingInputValue), ($$value) => set(floatingInputValue, $$value));
          event("keydown", input_1, (e) => {
            var _a;
            if (e.key === "Enter") {
              actionHandler((_a = get$1(selectedAction)) == null ? void 0 : _a.id);
            }
          });
          event("click", button_1, () => {
            var _a;
            actionHandler((_a = get$1(selectedAction)) == null ? void 0 : _a.id);
          });
          append($$anchor3, div_3);
        };
        if_block(node_1, ($$render) => {
          if (!get$1(floatingInput)) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment);
    };
    var alternate_2 = ($$anchor2) => {
      var div_5 = root_6$c();
      var div_6 = child(div_5);
      var div_7 = child(div_6);
      var node_3 = child(div_7);
      {
        let $0 = derived_safe_equal(() => `${id()}-float-prompt`);
        Markdown(node_3, {
          get id() {
            return get$1($0);
          },
          get content() {
            return get$1(content);
          }
        });
      }
      reset(div_7);
      reset(div_6);
      var div_8 = sibling(div_6, 2);
      var div_9 = child(div_8);
      var node_4 = child(div_9);
      {
        var consequent_3 = ($$anchor3) => {
          Skeleton($$anchor3, { size: "sm" });
        };
        var alternate_1 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => `${id()}-float-response`);
            Markdown($$anchor3, {
              get id() {
                return get$1($0);
              },
              get content() {
                return get$1(responseContent);
              }
            });
          }
        };
        if_block(node_4, ($$render) => {
          if (get$1(responseContent), untrack(() => {
            var _a;
            return !get$1(responseContent) || ((_a = get$1(responseContent)) == null ? void 0 : _a.trim()) === "";
          })) $$render(consequent_3);
          else $$render(alternate_1, false);
        });
      }
      var node_5 = sibling(node_4, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_10 = root_9$4();
          var button_2 = child(div_10);
          var text_1 = child(button_2, true);
          reset(button_2);
          reset(div_10);
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Add")))]);
          event("click", button_2, addHandler);
          append($$anchor3, div_10);
        };
        if_block(node_5, ($$render) => {
          if (get$1(responseDone)) $$render(consequent_4);
        });
      }
      reset(div_9);
      reset(div_8);
      reset(div_5);
      append($$anchor2, div_5);
    };
    if_block(node, ($$render) => {
      if (get$1(responseContent) === null) $$render(consequent_2);
      else $$render(alternate_2, false);
    });
  }
  reset(div);
  template_effect(() => set_attribute(div, "id", `floating-buttons-${id()}`));
  append($$anchor, div);
  bind_prop($$props, "closeHandler", closeHandler);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root$f = from_html(`<div><!></div> <!>`, 1);
function ContentRenderer($$anchor, $$props) {
  push($$props, false);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  getContext("i18n");
  let id = prop($$props, "id", 8);
  let content = prop($$props, "content", 8);
  let history = prop($$props, "history", 8);
  let messageId = prop($$props, "messageId", 8);
  let selectedModels = prop($$props, "selectedModels", 24, () => []);
  let done = prop($$props, "done", 8, true);
  let model = prop($$props, "model", 8, null);
  let sources = prop($$props, "sources", 8, null);
  let save = prop($$props, "save", 8, false);
  let preview = prop($$props, "preview", 8, false);
  let floatingButtons = prop($$props, "floatingButtons", 8, true);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let onSave = prop($$props, "onSave", 8, (e) => {
  });
  let onSourceClick = prop($$props, "onSourceClick", 8, (e) => {
  });
  let onTaskClick = prop($$props, "onTaskClick", 8, (e) => {
  });
  let onAddMessages = prop($$props, "onAddMessages", 8, (e) => {
  });
  let contentContainerElement = mutable_source();
  let floatingButtonsElement = mutable_source();
  const updateButtonPosition = (event2) => {
    var _a;
    const buttonsContainerElement = document.getElementById(`floating-buttons-${id()}`);
    if (!((_a = get$1(contentContainerElement)) == null ? void 0 : _a.contains(event2.target)) && !(buttonsContainerElement == null ? void 0 : buttonsContainerElement.contains(event2.target))) {
      closeFloatingButtons();
      return;
    }
    setTimeout(
      async () => {
        var _a2;
        await tick();
        if (!((_a2 = get$1(contentContainerElement)) == null ? void 0 : _a2.contains(event2.target))) return;
        let selection = window.getSelection();
        if (selection.toString().trim().length > 0) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          const parentRect = get$1(contentContainerElement).getBoundingClientRect();
          const top = rect.bottom - parentRect.top;
          const left = rect.left - parentRect.left;
          if (buttonsContainerElement) {
            buttonsContainerElement.style.display = "block";
            const spaceOnRight = parentRect.width - left;
            let halfScreenWidth = $mobile() ? window.innerWidth / 2 : window.innerWidth / 3;
            if (spaceOnRight < halfScreenWidth) {
              const right = parentRect.right - rect.right;
              buttonsContainerElement.style.right = `${right}px`;
              buttonsContainerElement.style.left = "auto";
            } else {
              buttonsContainerElement.style.left = `${left}px`;
              buttonsContainerElement.style.right = "auto";
            }
            buttonsContainerElement.style.top = `${top + 5}px`;
          }
        } else {
          closeFloatingButtons();
        }
      },
      0
    );
  };
  const closeFloatingButtons = () => {
    var _a, _b;
    const buttonsContainerElement = document.getElementById(`floating-buttons-${id()}`);
    if (buttonsContainerElement) {
      buttonsContainerElement.style.display = "none";
    }
    if (get$1(floatingButtonsElement)) {
      if (typeof ((_a = get$1(floatingButtonsElement)) == null ? void 0 : _a.closeHandler) === "function") {
        (_b = get$1(floatingButtonsElement)) == null ? void 0 : _b.closeHandler();
      }
    }
  };
  const keydownHandler = (e) => {
    if (e.key === "Escape") {
      closeFloatingButtons();
    }
  };
  onMount(() => {
    var _a;
    if (floatingButtons()) {
      (_a = get$1(contentContainerElement)) == null ? void 0 : _a.addEventListener("mouseup", updateButtonPosition);
      document.addEventListener("mouseup", updateButtonPosition);
      document.addEventListener("keydown", keydownHandler);
    }
  });
  onDestroy(() => {
    var _a;
    if (floatingButtons()) {
      (_a = get$1(contentContainerElement)) == null ? void 0 : _a.removeEventListener("mouseup", updateButtonPosition);
      document.removeEventListener("mouseup", updateButtonPosition);
      document.removeEventListener("keydown", keydownHandler);
    }
  });
  init();
  var fragment = root$f();
  var div = first_child(fragment);
  var node = child(div);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(sources()), deep_read_state(model()), untrack(() => (sources() ?? []).reduce(
      (acc, source) => {
        let ids = [];
        source.document.forEach((document2, index2) => {
          var _a, _b, _c, _d, _e, _f;
          if (((_d = (_c = (_b = (_a = model()) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.citations) == false) {
            ids.push("N/A");
            return ids;
          }
          const metadata = (_e = source.metadata) == null ? void 0 : _e[index2];
          const id2 = (metadata == null ? void 0 : metadata.source) ?? "N/A";
          if (metadata == null ? void 0 : metadata.name) {
            ids.push(metadata.name);
            return ids;
          }
          if (id2.startsWith("http://") || id2.startsWith("https://")) {
            ids.push(id2);
          } else {
            ids.push(((_f = source == null ? void 0 : source.source) == null ? void 0 : _f.name) ?? id2);
          }
          return ids;
        });
        acc = [...acc, ...ids];
        return acc.filter((item, index2) => acc.indexOf(item) === index2);
      },
      []
    ))));
    Markdown(node, {
      get id() {
        return id();
      },
      get content() {
        return content();
      },
      get model() {
        return model();
      },
      get save() {
        return save();
      },
      get preview() {
        return preview();
      },
      get done() {
        return done();
      },
      get editCodeBlock() {
        return editCodeBlock();
      },
      get topPadding() {
        return topPadding();
      },
      get sourceIds() {
        return get$1($0);
      },
      get onSourceClick() {
        return onSourceClick();
      },
      get onTaskClick() {
        return onTaskClick();
      },
      get onSave() {
        return onSave();
      },
      onUpdate: async (token) => {
        var _a;
        const { lang, text: code } = token;
        if ((((_a = $settings()) == null ? void 0 : _a.detectArtifacts) ?? true) && (["html", "svg"].includes(lang) || lang === "xml" && code.includes("svg")) && !$mobile() && $chatId()) {
          await tick();
          showArtifacts.set(true);
          showControls.set(true);
        }
      },
      onPreview: async (value) => {
        await artifactCode.set(value);
        await showControls.set(true);
        await showArtifacts.set(true);
        await showEmbeds.set(false);
      }
    });
  }
  reset(div);
  bind_this(div, ($$value) => set(contentContainerElement, $$value), () => get$1(contentContainerElement));
  var node_1 = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.floatingActionButtons) ?? [];
        })));
        let $1 = derived_safe_equal(() => (deep_read_state(selectedModels()), deep_read_state(model()), untrack(() => {
          var _a, _b, _c;
          return (selectedModels() ?? []).includes((_a = model()) == null ? void 0 : _a.id) ? (_b = model()) == null ? void 0 : _b.id : (selectedModels() ?? []).length > 0 ? selectedModels().at(0) : (_c = model()) == null ? void 0 : _c.id;
        })));
        let $2 = derived_safe_equal(() => (deep_read_state(createMessagesList), deep_read_state(history()), deep_read_state(messageId()), untrack(() => createMessagesList(history(), messageId()))));
        bind_this(
          FloatingButtons($$anchor2, {
            get id() {
              return id();
            },
            get messageId() {
              return messageId();
            },
            get actions() {
              return get$1($0);
            },
            get model() {
              return get$1($1);
            },
            get messages() {
              return get$1($2);
            },
            onAdd: ({ modelId, parentId, messages }) => {
              onAddMessages()({ modelId, parentId, messages });
              closeFloatingButtons();
            },
            $$legacy: true
          }),
          ($$value) => set(floatingButtonsElement, $$value),
          () => get$1(floatingButtonsElement)
        );
      }
    };
    if_block(node_1, ($$render) => {
      if (floatingButtons() && model()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$a = from_html(`<div aria-modal="true" role="dialog" style="scrollbar-gutter: stable;"><div><!></div></div>`);
function Modal($$anchor, $$props) {
  push($$props, false);
  let show = prop($$props, "show", 12, true);
  let size = prop($$props, "size", 8, "md");
  let containerClassName = prop($$props, "containerClassName", 8, "p-3");
  let className = prop($$props, "className", 8, "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-4xl");
  let modalElement = mutable_source(null);
  let focusTrap = mutable_source(null);
  const sizeToWidth = (size2) => {
    if (size2 === "full") {
      return "w-full";
    }
    if (size2 === "xs") {
      return "w-[16rem]";
    } else if (size2 === "sm") {
      return "w-[30rem]";
    } else if (size2 === "md") {
      return "w-[42rem]";
    } else if (size2 === "lg") {
      return "w-[56rem]";
    } else if (size2 === "xl") {
      return "w-[70rem]";
    } else if (size2 === "2xl") {
      return "w-[84rem]";
    } else if (size2 === "3xl") {
      return "w-[100rem]";
    } else {
      return "w-[56rem]";
    }
  };
  const handleKeyDown = (event2) => {
    if (event2.key === "Escape" && isTopModal()) {
      show(false);
    }
  };
  const isTopModal = () => {
    const modals = document.getElementsByClassName("modal");
    return modals.length && modals[modals.length - 1] === get$1(modalElement);
  };
  onMount(() => {
  });
  onDestroy(() => {
    show(false);
    if (get$1(focusTrap)) {
      get$1(focusTrap).deactivate();
    }
    if (get$1(modalElement)) {
      document.body.removeChild(get$1(modalElement));
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(show()), get$1(modalElement), get$1(focusTrap), FocusTrap),
    () => {
      if (show() && get$1(modalElement)) {
        document.body.appendChild(get$1(modalElement));
        set(focusTrap, createFocusTrap(get$1(modalElement), {
          allowOutsideClick: (e) => {
            return e.target.closest("[data-sonner-toast]") !== null;
          }
        }));
        get$1(focusTrap).activate();
        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
      } else if (get$1(modalElement)) {
        get$1(focusTrap).deactivate();
        window.removeEventListener("keydown", handleKeyDown);
        document.body.removeChild(get$1(modalElement));
        document.body.style.overflow = "unset";
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$a();
      var div_1 = child(div);
      var node_1 = child(div_1);
      slot(node_1, $$props, "default", {}, null);
      reset(div_1);
      reset(div);
      bind_this(div, ($$value) => set(modalElement, $$value), () => get$1(modalElement));
      template_effect(
        ($0) => {
          set_class(div, 1, `modal fixed top-0 right-0 left-0 bottom-0 bg-black/30 dark:bg-black/60 w-full h-screen max-h-[100dvh] ${containerClassName() ?? ""}  flex justify-center z-9999 overflow-y-auto overscroll-contain`, "svelte-1vr5p4p");
          set_class(div_1, 1, `m-auto max-w-full ${$0 ?? ""} ${size() !== "full" ? "mx-2" : ""} shadow-3xl min-h-fit scrollbar-hidden ${className() ?? ""} border border-white dark:border-gray-850`, "svelte-1vr5p4p");
        },
        [
          () => (deep_read_state(size()), untrack(() => sizeToWidth(size())))
        ]
      );
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
      if (show()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Switch_1($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let state2 = prop($$props, "state", 12, true);
  let id = prop($$props, "id", 8, "");
  let ariaLabelledbyId = prop($$props, "ariaLabelledbyId", 8, "");
  getContext("i18n");
  const dispatch = createEventDispatcher();
  init();
  {
    let $0 = derived_safe_equal(() => ($settings(), untrack(() => {
      var _a;
      return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "focus:outline focus:outline-2 focus:outline-gray-800 focus:dark:outline-gray-200" : "outline outline-1 outline-gray-100 dark:outline-gray-800";
    })));
    let $1 = derived_safe_equal(() => state2() ? " bg-emerald-500 dark:bg-emerald-700" : "bg-gray-200 dark:bg-transparent");
    Switch($$anchor, {
      get id() {
        return id();
      },
      get "aria-labelledby"() {
        return ariaLabelledbyId();
      },
      get class() {
        return `flex h-[1.125rem] min-h-[1.125rem] w-8 shrink-0 cursor-pointer items-center rounded-full px-1 mx-[1px] transition  ${get$1($0) ?? ""} ${get$1($1) ?? ""}`;
      },
      onCheckedChange: async () => {
        await tick();
        dispatch("change", state2());
      },
      get checked() {
        return state2();
      },
      set checked($$value) {
        state2($$value);
      },
      children: ($$anchor2, $$slotProps) => {
        Switch_thumb($$anchor2, {
          class: "pointer-events-none block size-3 shrink-0 rounded-full bg-white transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini "
        });
      },
      $$slots: { default: true },
      $$legacy: true
    });
  }
  pop();
  $$cleanup();
}
var root_3$d = from_html(`<div class="capitalize shrink-0"> </div> •`, 1);
var root_4$5 = from_html(`<div class="line-clamp-1"> </div> •`, 1);
var root_2$e = from_html(`<!> <!>`, 1);
var root_5$9 = from_html(`<div class="capitalize shrink-0"> </div> •`, 1);
var root_6$b = from_html(`<div class="capitalize shrink-0"> </div> <div class="flex items-center gap-1 shrink-0"> </div>`, 1);
var root_7$8 = from_html(`<div class="capitalize shrink-0"> </div>`);
var root_8$8 = from_html(`<div class=" self-end"><div class="flex items-center gap-1.5 text-xs"><!> <!></div></div>`);
var root_13$2 = from_html(`<div class="flex items-center gap-2 mb-2"><div class="flex-shrink-0 text-xs"> </div></div>`);
var root_12$5 = from_html(`<div></div>`);
var root_16$4 = from_html(`<iframe class="w-full h-[70vh] border-0 rounded-lg"></iframe>`);
var root_17$3 = from_html(`<div class="max-h-96 overflow-scroll scrollbar-hidden text-xs whitespace-pre-wrap"> </div>`);
var root_15$4 = from_html(`<div class="flex mb-2.5 scrollbar-none overflow-x-auto w-full border-b border-gray-50 dark:border-gray-850 text-center text-sm font-medium bg-transparent dark:text-gray-200"><button type="button"> </button> <button type="button"> </button></div> <!>`, 1);
var root_19$1 = from_html(`<audio class="w-full border-0 rounded-lg mb-2" controls playsinline=""></audio>`);
var root_20$2 = from_html(`<div class="max-h-96 overflow-scroll scrollbar-hidden text-xs whitespace-pre-wrap"> </div>`);
var root_18$2 = from_html(`<!> <!>`, 1);
var root_21$1 = from_html(`<div class="flex items-center justify-center py-6"><!></div>`);
var root_1$9 = from_html(`<div class="font-primary px-4.5 py-3.5 w-full flex flex-col justify-center dark:text-gray-400"><div class=" pb-2"><div class="flex items-start justify-between"><div><div class=" font-medium text-lg dark:text-gray-100"><a href="#" class="hover:underline line-clamp-1"> </a></div></div> <div><button><!></button></div></div> <div><div class="flex flex-col items-center md:flex-row gap-1 justify-between w-full"><div class=" flex flex-wrap text-xs gap-1 text-gray-500"><!> <!> <!> <!></div> <!></div></div></div> <div class="max-h-[75vh] overflow-auto"><!></div></div>`);
function FileItemModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isPDF = mutable_source();
  const i18n = getContext("i18n");
  let item = prop($$props, "item", 12);
  let show = prop($$props, "show", 12, false);
  let edit = prop($$props, "edit", 8, false);
  let enableFullContent = mutable_source(false);
  let isAudio = mutable_source(false);
  let loading = mutable_source(false);
  let selectedTab = mutable_source("");
  const loadContent = async () => {
    var _a, _b;
    if (((_a = item()) == null ? void 0 : _a.type) === "collection") {
      set(loading, true);
      const knowledge = await getKnowledgeById("static-token", item().id).catch((e) => {
        console.error("Error fetching knowledge base:", e);
        return null;
      });
      if (knowledge) {
        item(item().files = knowledge.files || [], true);
      }
      set(loading, false);
    } else if (((_b = item()) == null ? void 0 : _b.type) === "file") {
      set(loading, true);
      const file = await getFileById("static-token", item().id).catch((e) => {
        console.error("Error fetching file:", e);
        return null;
      });
      if (file) {
        item(item().file = file || {}, true);
      }
      set(loading, false);
    }
    await tick();
  };
  onMount(() => {
    var _a;
    if (((_a = item()) == null ? void 0 : _a.context) === "full") {
      set(enableFullContent, true);
    }
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c, _d;
    set(isPDF, ((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) === "application/pdf" || ((_c = item()) == null ? void 0 : _c.name) && ((_d = item()) == null ? void 0 : _d.name.toLowerCase().endsWith(".pdf")));
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    set(isAudio, (((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) ?? "").startsWith("audio/") || ((_c = item()) == null ? void 0 : _c.name) && ((_d = item()) == null ? void 0 : _d.name.toLowerCase().endsWith(".mp3")) || ((_e = item()) == null ? void 0 : _e.name) && ((_f = item()) == null ? void 0 : _f.name.toLowerCase().endsWith(".wav")) || ((_g = item()) == null ? void 0 : _g.name) && ((_h = item()) == null ? void 0 : _h.name.toLowerCase().endsWith(".ogg")) || ((_i = item()) == null ? void 0 : _i.name) && ((_j = item()) == null ? void 0 : _j.name.toLowerCase().endsWith(".m4a")) || ((_k = item()) == null ? void 0 : _k.name) && ((_l = item()) == null ? void 0 : _l.name.toLowerCase().endsWith(".webm")));
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      loadContent();
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "lg",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$9();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var a = child(div_4);
      var text$1 = child(a, true);
      reset(a);
      reset(div_4);
      reset(div_3);
      var div_5 = sibling(div_3, 2);
      var button = child(div_5);
      var node = child(button);
      Icon$1(node, { name: "XMark" });
      reset(button);
      reset(div_5);
      reset(div_2);
      var div_6 = sibling(div_2, 2);
      var div_7 = child(div_6);
      var div_8 = child(div_7);
      var node_1 = child(div_8);
      {
        var consequent_2 = ($$anchor3) => {
          var fragment_1 = root_2$e();
          var node_2 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              var fragment_2 = root_3$d();
              var div_9 = first_child(fragment_2);
              var text_1 = child(div_9, true);
              reset(div_9);
              next();
              template_effect(() => set_text(text_1, (deep_read_state(item()), untrack(() => item().type))));
              append($$anchor4, fragment_2);
            };
            if_block(node_2, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.type;
              })) $$render(consequent);
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            var consequent_1 = ($$anchor4) => {
              var fragment_3 = root_4$5();
              var div_10 = first_child(fragment_3);
              var text_2 = child(div_10, true);
              reset(div_10);
              next();
              template_effect(() => set_text(text_2, (deep_read_state(item()), untrack(() => item().description))));
              append($$anchor4, fragment_3);
            };
            if_block(node_3, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.description;
              })) $$render(consequent_1);
            });
          }
          append($$anchor3, fragment_1);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a;
            return ((_a = item()) == null ? void 0 : _a.type) === "collection";
          })) $$render(consequent_2);
        });
      }
      var node_4 = sibling(node_1, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var fragment_4 = root_5$9();
          var div_11 = first_child(fragment_4);
          var text_3 = child(div_11, true);
          reset(div_11);
          next();
          template_effect(($0) => set_text(text_3, $0), [
            () => (deep_read_state(formatFileSize), deep_read_state(item()), untrack(() => formatFileSize(item().size)))
          ]);
          append($$anchor3, fragment_4);
        };
        if_block(node_4, ($$render) => {
          if (deep_read_state(item()), untrack(() => item().size)) $$render(consequent_3);
        });
      }
      var node_5 = sibling(node_4, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_5 = root_6$b();
          var div_12 = first_child(fragment_5);
          var text_4 = child(div_12, true);
          reset(div_12);
          var div_13 = sibling(div_12, 2);
          var text_5 = child(div_13);
          reset(div_13);
          template_effect(
            ($0, $1) => {
              set_text(text_4, $0);
              set_text(text_5, `• ${$1 ?? ""}`);
            },
            [
              () => ($i18n(), deep_read_state(getLineCount), deep_read_state(item()), untrack(() => {
                var _a, _b, _c;
                return $i18n().t("{{COUNT}} extracted lines", { COUNT: getLineCount(((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) ?? "") });
              })),
              () => ($i18n(), untrack(() => $i18n().t("Formatting may be inconsistent from source.")))
            ]
          );
          append($$anchor3, fragment_5);
        };
        if_block(node_5, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a, _b, _c;
            return (_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content;
          })) $$render(consequent_4);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var div_14 = root_7$8();
          var text_6 = child(div_14, true);
          reset(div_14);
          template_effect(($0) => set_text(text_6, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Knowledge Base")))
          ]);
          append($$anchor3, div_14);
        };
        if_block(node_6, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a;
            return (_a = item()) == null ? void 0 : _a.knowledge;
          })) $$render(consequent_5);
        });
      }
      reset(div_8);
      var node_7 = sibling(div_8, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var div_15 = root_8$8();
          var div_16 = child(div_15);
          var node_8 = child(div_16);
          {
            var consequent_6 = ($$anchor4) => {
              var text_7 = text();
              template_effect(($0) => set_text(text_7, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Using Entire Document")))
              ]);
              append($$anchor4, text_7);
            };
            var alternate = ($$anchor4) => {
              var text_8 = text();
              template_effect(($0) => set_text(text_8, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Using Focused Retrieval")))
              ]);
              append($$anchor4, text_8);
            };
            if_block(node_8, ($$render) => {
              if (get$1(enableFullContent)) $$render(consequent_6);
              else $$render(alternate, false);
            });
          }
          var node_9 = sibling(node_8, 2);
          Switch_1(node_9, {
            get state() {
              return get$1(enableFullContent);
            },
            set state($$value) {
              set(enableFullContent, $$value);
            },
            $$events: {
              change: (e) => {
                item(item().context = e.detail ? "full" : void 0, true);
              }
            },
            $$legacy: true
          });
          reset(div_16);
          reset(div_15);
          append($$anchor3, div_15);
        };
        if_block(node_7, ($$render) => {
          if (edit()) $$render(consequent_7);
        });
      }
      reset(div_7);
      reset(div_6);
      reset(div_1);
      var div_17 = sibling(div_1, 2);
      var node_10 = child(div_17);
      {
        var consequent_13 = ($$anchor3) => {
          var fragment_8 = comment();
          var node_11 = first_child(fragment_8);
          {
            var consequent_8 = ($$anchor4) => {
              var div_18 = root_12$5();
              each(div_18, 5, () => (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.files;
              })), index, ($$anchor5, file) => {
                var div_19 = root_13$2();
                var div_20 = child(div_19);
                var text_9 = child(div_20, true);
                reset(div_20);
                reset(div_19);
                template_effect(() => set_text(text_9, (get$1(file), untrack(() => {
                  var _a, _b;
                  return (_b = (_a = get$1(file)) == null ? void 0 : _a.meta) == null ? void 0 : _b.name;
                }))));
                append($$anchor5, div_19);
              });
              reset(div_18);
              append($$anchor4, div_18);
            };
            var alternate_3 = ($$anchor4) => {
              var fragment_9 = comment();
              var node_12 = first_child(fragment_9);
              {
                var consequent_10 = ($$anchor5) => {
                  var fragment_10 = root_15$4();
                  var div_21 = first_child(fragment_10);
                  var button_1 = child(div_21);
                  var text_10 = child(button_1, true);
                  reset(button_1);
                  var button_2 = sibling(button_1, 2);
                  var text_11 = child(button_2, true);
                  reset(button_2);
                  reset(div_21);
                  var node_13 = sibling(div_21, 2);
                  {
                    var consequent_9 = ($$anchor6) => {
                      var iframe = root_16$4();
                      template_effect(() => {
                        set_attribute(iframe, "title", (deep_read_state(item()), untrack(() => {
                          var _a;
                          return (_a = item()) == null ? void 0 : _a.name;
                        })));
                        set_attribute(iframe, "src", (deep_read_state(WEBUI_API_BASE_URL$1), deep_read_state(item()), untrack(() => `${WEBUI_API_BASE_URL$1}/files/${item().id}/content`)));
                      });
                      append($$anchor6, iframe);
                    };
                    var alternate_1 = ($$anchor6) => {
                      var div_22 = root_17$3();
                      var text_12 = child(div_22, true);
                      reset(div_22);
                      template_effect(($0) => set_text(text_12, $0), [
                        () => (deep_read_state(item()), untrack(() => {
                          var _a, _b, _c;
                          return (((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) ?? "").trim() || "No content";
                        }))
                      ]);
                      append($$anchor6, div_22);
                    };
                    if_block(node_13, ($$render) => {
                      if (get$1(selectedTab) === "preview") $$render(consequent_9);
                      else $$render(alternate_1, false);
                    });
                  }
                  template_effect(
                    ($0, $1) => {
                      set_class(button_1, 1, `min-w-fit py-1.5 px-4 border-b ${get$1(selectedTab) === "" ? " " : " border-transparent text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition`);
                      set_text(text_10, $0);
                      set_class(button_2, 1, `min-w-fit py-1.5 px-4 border-b ${get$1(selectedTab) === "preview" ? " " : " border-transparent text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition`);
                      set_text(text_11, $1);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("Content"))),
                      () => ($i18n(), untrack(() => $i18n().t("Preview")))
                    ]
                  );
                  event("click", button_1, () => {
                    set(selectedTab, "");
                  });
                  event("click", button_2, () => {
                    set(selectedTab, "preview");
                  });
                  append($$anchor5, fragment_10);
                };
                var alternate_2 = ($$anchor5) => {
                  var fragment_11 = root_18$2();
                  var node_14 = first_child(fragment_11);
                  {
                    var consequent_11 = ($$anchor6) => {
                      var audio = root_19$1();
                      template_effect(() => set_attribute(audio, "src", (deep_read_state(WEBUI_API_BASE_URL$1), deep_read_state(item()), untrack(() => `${WEBUI_API_BASE_URL$1}/files/${item().id}/content`))));
                      append($$anchor6, audio);
                    };
                    if_block(node_14, ($$render) => {
                      if (get$1(isAudio)) $$render(consequent_11);
                    });
                  }
                  var node_15 = sibling(node_14, 2);
                  {
                    var consequent_12 = ($$anchor6) => {
                      var div_23 = root_20$2();
                      var text_13 = child(div_23, true);
                      reset(div_23);
                      template_effect(($0) => set_text(text_13, $0), [
                        () => (deep_read_state(item()), untrack(() => {
                          var _a, _b, _c;
                          return (((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) ?? "").trim() || "No content";
                        }))
                      ]);
                      append($$anchor6, div_23);
                    };
                    if_block(node_15, ($$render) => {
                      if (deep_read_state(item()), untrack(() => {
                        var _a, _b;
                        return (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data;
                      })) $$render(consequent_12);
                    });
                  }
                  append($$anchor5, fragment_11);
                };
                if_block(
                  node_12,
                  ($$render) => {
                    if (get$1(isPDF)) $$render(consequent_10);
                    else $$render(alternate_2, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_9);
            };
            if_block(node_11, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return ((_a = item()) == null ? void 0 : _a.type) === "collection";
              })) $$render(consequent_8);
              else $$render(alternate_3, false);
            });
          }
          append($$anchor3, fragment_8);
        };
        var alternate_4 = ($$anchor3) => {
          var div_24 = root_21$1();
          var node_16 = child(div_24);
          Spinner(node_16, { className: "size-5" });
          reset(div_24);
          append($$anchor3, div_24);
        };
        if_block(node_10, ($$render) => {
          if (!get$1(loading)) $$render(consequent_13);
          else $$render(alternate_4, false);
        });
      }
      reset(div_17);
      reset(div);
      template_effect(() => set_text(text$1, (deep_read_state(item()), untrack(() => {
        var _a;
        return ((_a = item()) == null ? void 0 : _a.name) ?? "File";
      }))));
      event("click", a, preventDefault(() => {
        if (!get$1(isPDF) && item().url) {
          window.open(item().type === "file" ? `${item().url}/content` : `${item().url}`, "_blank");
        }
      }));
      event("click", button, () => {
        show(false);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_3$c = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class=" size-4.5"><path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd"></path><path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path></svg>`);
var root_2$d = from_html(`<div class="size-10 shrink-0 flex justify-center items-center bg-black/20 dark:bg-white/10 text-white rounded-xl"><!></div>`);
var root_5$8 = from_html(`<div class="pl-1.5"><!></div>`);
var root_24$2 = from_html(`<span class=" capitalize line-clamp-1"> </span>`);
var root_25$1 = from_html(`<span class="capitalize"> </span>`);
var root_16$3 = from_html(`<div class="flex flex-col justify-center -space-y-0.5 px-2.5 w-full"><div class=" dark:text-gray-100 text-sm font-medium line-clamp-1 mb-1"> </div> <div><!> <!></div></div>`);
var root_27$1 = from_html(`<div class="text-gray-500 text-xs capitalize shrink-0"> </div>`);
var root_28 = from_html(`<div class="text-gray-500 text-xs capitalize shrink-0"> </div>`);
var root_26$1 = from_html(`<div class="flex flex-col justify-center -space-y-0.5 px-1 w-full"><div class=" dark:text-gray-100 text-sm flex justify-between items-center"><div class="font-medium line-clamp-1 flex-1 pr-1"> </div> <!></div></div>`);
var root_29$1 = from_html(`<div class=" absolute -top-1 -right-1"><button type="button"><!></button></div>`);
var root$e = from_html(`<!> <button type="button"><!> <!> <!></button>`, 1);
function FileItem($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let className = prop($$props, "className", 8, "w-60");
  let colorClassName = prop($$props, "colorClassName", 8, "bg-white dark:bg-gray-850 border border-gray-50 dark:border-gray-800");
  let url = prop($$props, "url", 8, null);
  let dismissible = prop($$props, "dismissible", 8, false);
  let modal = prop($$props, "modal", 8, false);
  let loading = prop($$props, "loading", 8, false);
  let item = prop($$props, "item", 12, null);
  let edit = prop($$props, "edit", 8, false);
  let small = prop($$props, "small", 8, false);
  let name = prop($$props, "name", 8);
  let type = prop($$props, "type", 8);
  let size = prop($$props, "size", 8);
  let showModal = mutable_source(false);
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  init();
  var fragment = root$e();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      FileItemModal($$anchor2, {
        get edit() {
          return edit();
        },
        get show() {
          return get$1(showModal);
        },
        set show($$value) {
          set(showModal, $$value);
        },
        get item() {
          return item();
        },
        set item($$value) {
          item($$value);
        },
        $$legacy: true
      });
    };
    if_block(node, ($$render) => {
      if (item()) $$render(consequent);
    });
  }
  var button = sibling(node, 2);
  var node_1 = child(button);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_2$d();
      var node_2 = child(div);
      {
        var consequent_1 = ($$anchor3) => {
          var svg = root_3$c();
          append($$anchor3, svg);
        };
        var alternate = ($$anchor3) => {
          Spinner($$anchor3, {});
        };
        if_block(node_2, ($$render) => {
          if (!loading()) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      reset(div);
      append($$anchor2, div);
    };
    var alternate_6 = ($$anchor2) => {
      var div_1 = root_5$8();
      var node_3 = child(div_1);
      {
        var consequent_7 = ($$anchor3) => {
          var fragment_3 = comment();
          var node_4 = first_child(fragment_3);
          {
            var consequent_3 = ($$anchor4) => {
              Icon$1($$anchor4, { name: "Document" });
            };
            var alternate_4 = ($$anchor4) => {
              var fragment_5 = comment();
              var node_5 = first_child(fragment_5);
              {
                var consequent_4 = ($$anchor5) => {
                  Icon$1($$anchor5, { name: "Document" });
                };
                var alternate_3 = ($$anchor5) => {
                  var fragment_7 = comment();
                  var node_6 = first_child(fragment_7);
                  {
                    var consequent_5 = ($$anchor6) => {
                      Icon$1($$anchor6, { name: "ChatBubble" });
                    };
                    var alternate_2 = ($$anchor6) => {
                      var fragment_9 = comment();
                      var node_7 = first_child(fragment_9);
                      {
                        var consequent_6 = ($$anchor7) => {
                          Icon$1($$anchor7, { name: "Folder" });
                        };
                        var alternate_1 = ($$anchor7) => {
                          Icon$1($$anchor7, { name: "Document" });
                        };
                        if_block(
                          node_7,
                          ($$render) => {
                            if (type() === "folder") $$render(consequent_6);
                            else $$render(alternate_1, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_9);
                    };
                    if_block(
                      node_6,
                      ($$render) => {
                        if (type() === "chat") $$render(consequent_5);
                        else $$render(alternate_2, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_7);
                };
                if_block(
                  node_5,
                  ($$render) => {
                    if (type() === "note") $$render(consequent_4);
                    else $$render(alternate_3, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_5);
            };
            if_block(node_4, ($$render) => {
              if (type() === "collection") $$render(consequent_3);
              else $$render(alternate_4, false);
            });
          }
          append($$anchor3, fragment_3);
        };
        var alternate_5 = ($$anchor3) => {
          Spinner($$anchor3, {});
        };
        if_block(node_3, ($$render) => {
          if (!loading()) $$render(consequent_7);
          else $$render(alternate_5, false);
        });
      }
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if (!small()) $$render(consequent_2);
      else $$render(alternate_6, false);
    });
  }
  var node_8 = sibling(node_1, 2);
  {
    var consequent_13 = ($$anchor2) => {
      var div_2 = root_16$3();
      var div_3 = child(div_2);
      var text$1 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var node_9 = child(div_4);
      {
        var consequent_8 = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("File")))]);
          append($$anchor3, text_1);
        };
        var alternate_10 = ($$anchor3) => {
          var fragment_14 = comment();
          var node_10 = first_child(fragment_14);
          {
            var consequent_9 = ($$anchor4) => {
              var text_2 = text();
              template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Note")))]);
              append($$anchor4, text_2);
            };
            var alternate_9 = ($$anchor4) => {
              var fragment_16 = comment();
              var node_11 = first_child(fragment_16);
              {
                var consequent_10 = ($$anchor5) => {
                  var text_3 = text();
                  template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Document")))]);
                  append($$anchor5, text_3);
                };
                var alternate_8 = ($$anchor5) => {
                  var fragment_18 = comment();
                  var node_12 = first_child(fragment_18);
                  {
                    var consequent_11 = ($$anchor6) => {
                      var text_4 = text();
                      template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Collection")))]);
                      append($$anchor6, text_4);
                    };
                    var alternate_7 = ($$anchor6) => {
                      var span = root_24$2();
                      var text_5 = child(span, true);
                      reset(span);
                      template_effect(() => set_text(text_5, type()));
                      append($$anchor6, span);
                    };
                    if_block(
                      node_12,
                      ($$render) => {
                        if (type() === "collection") $$render(consequent_11);
                        else $$render(alternate_7, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_18);
                };
                if_block(
                  node_11,
                  ($$render) => {
                    if (type() === "doc") $$render(consequent_10);
                    else $$render(alternate_8, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_16);
            };
            if_block(
              node_10,
              ($$render) => {
                if (type() === "note") $$render(consequent_9);
                else $$render(alternate_9, false);
              },
              true
            );
          }
          append($$anchor3, fragment_14);
        };
        if_block(node_9, ($$render) => {
          if (type() === "file") $$render(consequent_8);
          else $$render(alternate_10, false);
        });
      }
      var node_13 = sibling(node_9, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var span_1 = root_25$1();
          var text_6 = child(span_1, true);
          reset(span_1);
          template_effect(($0) => set_text(text_6, $0), [
            () => (deep_read_state(formatFileSize), deep_read_state(size()), untrack(() => formatFileSize(size())))
          ]);
          append($$anchor3, span_1);
        };
        if_block(node_13, ($$render) => {
          if (size()) $$render(consequent_12);
        });
      }
      reset(div_4);
      reset(div_2);
      template_effect(
        ($0) => {
          set_text(text$1, $0);
          set_class(div_4, 1, ` flex justify-between text-xs line-clamp-1 ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500";
          })) ?? ""}`);
        },
        [
          () => (deep_read_state(name()), untrack(() => decodeString(name())))
        ]
      );
      append($$anchor2, div_2);
    };
    var alternate_12 = ($$anchor2) => {
      var div_5 = root_26$1();
      var div_6 = child(div_5);
      var div_7 = child(div_6);
      var text_7 = child(div_7, true);
      reset(div_7);
      var node_14 = sibling(div_7, 2);
      {
        var consequent_14 = ($$anchor3) => {
          var div_8 = root_27$1();
          var text_8 = child(div_8, true);
          reset(div_8);
          template_effect(($0) => set_text(text_8, $0), [
            () => (deep_read_state(formatFileSize), deep_read_state(size()), untrack(() => formatFileSize(size())))
          ]);
          append($$anchor3, div_8);
        };
        var alternate_11 = ($$anchor3) => {
          var div_9 = root_28();
          var text_9 = child(div_9, true);
          reset(div_9);
          template_effect(() => set_text(text_9, type()));
          append($$anchor3, div_9);
        };
        if_block(node_14, ($$render) => {
          if (size()) $$render(consequent_14);
          else $$render(alternate_11, false);
        });
      }
      reset(div_6);
      reset(div_5);
      template_effect(($0) => set_text(text_7, $0), [
        () => (deep_read_state(name()), untrack(() => decodeString(name())))
      ]);
      append($$anchor2, div_5);
    };
    if_block(node_8, ($$render) => {
      if (!small()) $$render(consequent_13);
      else $$render(alternate_12, false);
    });
  }
  var node_15 = sibling(node_8, 2);
  {
    var consequent_15 = ($$anchor2) => {
      var div_10 = root_29$1();
      var button_1 = child(div_10);
      var node_16 = child(button_1);
      Icon$1(node_16, { name: "XMark", className: "size-4" });
      reset(button_1);
      reset(div_10);
      template_effect(
        ($0) => {
          set_attribute(button_1, "aria-label", $0);
          set_class(button_1, 1, ` bg-white text-black border border-gray-50 rounded-full ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden focus:outline-hidden group-hover:visible invisible transition";
          })) ?? ""}`);
        },
        [() => ($i18n(), untrack(() => $i18n().t("Remove File")))]
      );
      event("click", button_1, stopPropagation(() => {
        dispatch("dismiss");
      }));
      append($$anchor2, div_10);
    };
    if_block(node_15, ($$render) => {
      if (dismissible()) $$render(consequent_15);
    });
  }
  reset(button);
  template_effect(() => set_class(button, 1, `relative group p-1.5 ${className() ?? ""} flex items-center gap-1 ${colorClassName() ?? ""} ${small() ? "rounded-xl p-2" : "rounded-2xl"} text-left`));
  event("click", button, async () => {
    var _a, _b, _c, _d;
    if (((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) || ((_d = item()) == null ? void 0 : _d.type) === "file" || modal()) {
      set(showModal, !get$1(showModal));
    } else {
      if (url()) {
        if (type() === "file") {
          window.open(`${url()}/content`, "_blank").focus();
        } else {
          window.open(`${url()}`, "_blank").focus();
        }
      }
    }
    dispatch("click");
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_4$4 = from_html(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg> <div class="flex items-center"> </div>`, 1);
var root_5$7 = from_html(`<div class="flex items-center"> </div>`);
var root_6$a = from_html(`<div class="flex items-center"> </div>`);
var root_3$b = from_html(`<div class="py-1.5 px-2.5 flex dark:text-gray-100"><input type="text" id="floating-message-input" class="bg-transparent outline-hidden w-full flex-1 text-sm" autocomplete="off"/> <div class="ml-2 self-center flex items-center"><button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3.5"><path fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clip-rule="evenodd"></path></svg></button></div></div> <hr class="border-gray-50 dark:border-gray-800 my-1 mx-2"/> <!> <!> <!>`, 1);
var root_2$c = from_html(`<div slot="content"><!></div>`);
function RegenerateMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onRegenerate = prop($$props, "onRegenerate", 8, (prompt = null) => {
  });
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let show = mutable_source(false);
  let inputValue = mutable_source("");
  init();
  Dropdown($$anchor, {
    align: "end",
    get show() {
      return get$1(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    $$events: {
      change: (e) => {
        if (e.detail === false) {
          onClose()();
        }
      }
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_2$c();
        var node_1 = child(div);
        Dropdown_menu_content(node_1, {
          class: "w-full max-w-[200px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg transition",
          sideOffset: -2,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_3$b();
            var div_1 = first_child(fragment_2);
            var input = child(div_1);
            remove_input_defaults(input);
            var div_2 = sibling(input, 2);
            var button = child(div_2);
            reset(div_2);
            reset(div_1);
            var node_2 = sibling(div_1, 4);
            Menu_item(node_2, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onRegenerate()();
                  set(show, false);
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_3 = root_4$4();
                var div_3 = sibling(first_child(fragment_3), 2);
                var text2 = child(div_3, true);
                reset(div_3);
                template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Try Again")))]);
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
            var node_3 = sibling(node_2, 2);
            Menu_item(node_3, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onRegenerate()($i18n().t("Add Details"));
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var div_4 = root_5$7();
                var text_1 = child(div_4, true);
                reset(div_4);
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Add Details")))]);
                append($$anchor4, div_4);
              },
              $$slots: { default: true }
            });
            var node_4 = sibling(node_3, 2);
            Menu_item(node_4, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onRegenerate()($i18n().t("More Concise"));
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var div_5 = root_6$a();
                var text_2 = child(div_5, true);
                reset(div_5);
                template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("More Concise")))]);
                append($$anchor4, div_5);
              },
              $$slots: { default: true }
            });
            template_effect(
              ($0) => {
                set_attribute(input, "placeholder", $0);
                set_class(button, 1, `${get$1(inputValue) !== "" ? "bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 " : "text-white bg-gray-200 dark:text-gray-900 dark:bg-gray-700 disabled"} transition rounded-full p-1 self-center`);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Suggest a change")))
              ]
            );
            bind_value(input, () => get$1(inputValue), ($$value) => set(inputValue, $$value));
            event("keydown", input, (e) => {
              if (e.key === "Enter") {
                onRegenerate()(get$1(inputValue));
                set(show, false);
              }
            });
            event("click", button, () => {
              onRegenerate()(get$1(inputValue));
              set(show, false);
            });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
        reset(div);
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_3$a = from_html(`<div><!></div>`);
var root_2$b = from_html(`<div class="my-1 w-full flex overflow-x-auto gap-2 flex-wrap"></div>`);
var root_7$7 = from_html(`<div class="my-2 w-full"><!></div>`);
var root_6$9 = from_html(`<div class="my-1 w-full flex overflow-x-auto gap-2 flex-wrap"></div>`);
var root_8$7 = from_html(`<div class="w-full bg-gray-50 dark:bg-gray-800 rounded-3xl px-5 py-3 my-2"><textarea class=" bg-transparent outline-hidden w-full resize-none"></textarea> <div class=" mt-2 mb-1 flex justify-between text-sm font-medium"><div><button id="save-new-message-button" class="px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 transition rounded-3xl"> </button></div> <div class="flex space-x-1.5"><button id="close-edit-message-button" class="px-3.5 py-1.5 bg-white dark:bg-gray-900 hover:bg-gray-100 text-gray-800 dark:text-gray-100 transition rounded-3xl"> </button> <button id="confirm-edit-message-button" class="px-3.5 py-1.5 bg-gray-900 dark:bg-white hover:bg-gray-850 text-gray-100 dark:text-gray-800 transition rounded-3xl"> </button></div></div></div>`);
var root_16$2 = from_html(`<div class="text-sm flex justify-center font-semibold self-center dark:text-gray-100 min-w-fit"><input type="number" min="1" class="bg-transparent font-semibold self-center dark:text-gray-100 min-w-fit outline-hidden"/> </div>`);
var root_17$2 = from_html(`<div class="text-sm tracking-widest font-semibold self-center dark:text-gray-100 min-w-fit"> </div>`);
var root_15$3 = from_html(`<div class="flex self-center min-w-fit" dir="ltr"><button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> <!> <button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div>`);
var root_20$1 = from_html(`<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg></button>`);
var root_22 = from_svg(`<svg aria-hidden="true" class=" w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_S1WN {
                                                                                                                        animation: spinner_MGfb 0.8s linear infinite;
                                                                                                                        animation-delay: -0.8s;
                                                                                                                }

                                                                                                                .spinner_Km9P {
                                                                                                                        animation-delay: -0.65s;
                                                                                                                }

                                                                                                                .spinner_JApP {
                                                                                                                        animation-delay: -0.5s;
                                                                                                                }

                                                                                                                @keyframes spinner_MGfb {
                                                                                                                        93.75%,
                                                                                                                        100% {
                                                                                                                                opacity: 0.2;
                                                                                                                        }
                                                                                                                }</style><circle class="spinner_S1WN" cx="4" cy="12" r="3"></circle><circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3"></circle><circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3"></circle></svg>`);
var root_23$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>`);
var root_21 = from_html(`<button><!></button>`);
var root_24$1 = from_html(`<button aria-hidden="true"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></button>`);
var root_26 = from_html(`<button><svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2.3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></button> <button><svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2.3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg></button>`, 1);
var root_27 = from_html(`<button type="button" id="continue-response-button"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"></path></svg></button>`);
var root_30 = from_html(`<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></div>`);
var root_29 = from_html(`<button type="button" class="hidden regenerate-response-button"></button> <!>`, 1);
var root_31 = from_html(`<button type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></button>`);
var root_33 = from_html(`<button type="button" id="delete-response-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></button>`);
var root_36 = from_html(`<div class="size-4"><img style="fill: currentColor;"/></div>`);
var root_35 = from_html(`<button type="button"><!></button>`);
var root_25 = from_html(`<!> <!> <!> <!> <!>`, 1);
var root_18$1 = from_html(`<!> <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path></svg></button> <!> <!> <!>`, 1);
var root_14$2 = from_html(`<!> <!>`, 1);
var root_13$1 = from_html(`<div class="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-1qscqw6"><!></div>`);
var root_1$8 = from_html(`<div><div class="flex-auto w-0 pl-1 relative"><div><div><div><!> <!> <!> <div id="response-content-container"><!> <!></div></div></div> <!></div></div></div>`);
var root$d = from_html(`<!> <!>`, 1);
function ResponseMessage($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let chatId2 = prop($$props, "chatId", 8, "");
  let history = prop($$props, "history", 12);
  let messageId = prop($$props, "messageId", 8);
  let selectedModels = prop($$props, "selectedModels", 24, () => []);
  let message = mutable_source(JSON.parse(JSON.stringify(history().messages[messageId()])));
  let siblings = prop($$props, "siblings", 8);
  let gotoMessage = prop($$props, "gotoMessage", 8, () => {
  });
  let showPreviousMessage = prop($$props, "showPreviousMessage", 8);
  let showNextMessage = prop($$props, "showNextMessage", 8);
  let updateChat = prop($$props, "updateChat", 8);
  let editMessage = prop($$props, "editMessage", 8);
  let saveMessage = prop($$props, "saveMessage", 8);
  let actionMessage = prop($$props, "actionMessage", 8);
  let deleteMessage = prop($$props, "deleteMessage", 8);
  let continueResponse = prop($$props, "continueResponse", 8);
  let regenerateResponse = prop($$props, "regenerateResponse", 8);
  let addMessages = prop($$props, "addMessages", 8);
  let isLastMessage = prop($$props, "isLastMessage", 8, true);
  let readOnly = prop($$props, "readOnly", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let contentContainerElement = mutable_source();
  let buttonsContainerElement = mutable_source();
  let showDeleteConfirm = mutable_source(false);
  let model = mutable_source(null);
  let edit = mutable_source(false);
  let editedContent = mutable_source("");
  let editTextAreaElement = mutable_source();
  let messageIndexEdit = mutable_source(false);
  let generatingImage = mutable_source(false);
  const copyToClipboard$1 = async (text2) => {
    var _a, _b, _c, _d, _e;
    text2 = removeAllDetails(text2);
    if ((((_b = (_a = $config()) == null ? void 0 : _a.ui) == null ? void 0 : _b.response_watermark) ?? "").trim() !== "") {
      text2 = `${text2}

${(_d = (_c = $config()) == null ? void 0 : _c.ui) == null ? void 0 : _d.response_watermark}`;
    }
    const res = await copyToClipboard(text2, null, ((_e = $settings()) == null ? void 0 : _e.copyFormatted) ?? false);
    if (res) {
      toast.success($i18n().t("Copying to clipboard was successful!"));
    }
  };
  function preprocessForEditing(content) {
    return content;
  }
  function postprocessAfterEditing(content) {
    return content;
  }
  const editMessageHandler = async () => {
    set(edit, true);
    set(editedContent, preprocessForEditing(get$1(message).content));
    await tick();
    mutate(editTextAreaElement, get$1(editTextAreaElement).style.height = "");
    mutate(editTextAreaElement, get$1(editTextAreaElement).style.height = `${get$1(editTextAreaElement).scrollHeight}px`);
  };
  const editMessageConfirmHandler = async () => {
    const messageContent = postprocessAfterEditing(get$1(editedContent) ? get$1(editedContent) : "");
    editMessage()(get$1(message).id, { content: messageContent }, false);
    set(edit, false);
    set(editedContent, "");
    await tick();
  };
  const saveAsCopyHandler = async () => {
    const messageContent = postprocessAfterEditing(get$1(editedContent) ? get$1(editedContent) : "");
    editMessage()(get$1(message).id, { content: messageContent });
    set(edit, false);
    set(editedContent, "");
    await tick();
  };
  const cancelEditMessage = async () => {
    set(edit, false);
    set(editedContent, "");
    await tick();
  };
  const generateImage = async (message2) => {
    set(generatingImage, true);
    const res = await imageGenerations("static-token", message2.content).catch((error) => {
      toast.error(`${error}`);
    });
    if (res) {
      const files = res.map((image) => ({ type: "image", url: `${image.url}` }));
      saveMessage()(message2.id, { ...message2, files });
    }
    set(generatingImage, false);
  };
  let feedbackLoading = mutable_source(false);
  const feedbackHandler = async (rating = null, details = null) => {
    var _a, _b, _c, _d, _e;
    set(feedbackLoading, true);
    const updatedMessage = {
      ...get$1(message),
      annotation: {
        ...((_a = get$1(message)) == null ? void 0 : _a.annotation) ?? {},
        ...rating !== null ? { rating } : {},
        ...details ? details : {}
      }
    };
    const chat = null.catch((error) => {
      toast.error(`${error}`);
    });
    if (!chat) {
      return;
    }
    const messages = createMessagesList(history(), get$1(message).id);
    let feedbackItem = {
      type: "rating",
      data: {
        ...(updatedMessage == null ? void 0 : updatedMessage.annotation) ? updatedMessage.annotation : {},
        model_id: ((_b = get$1(message)) == null ? void 0 : _b.selectedModelId) ?? get$1(message).model,
        ...history().messages[get$1(message).parentId].childrenIds.length > 1 ? {
          sibling_model_ids: history().messages[get$1(message).parentId].childrenIds.filter((id) => id !== get$1(message).id).map((id) => {
            var _a2;
            return ((_a2 = history().messages[id]) == null ? void 0 : _a2.selectedModelId) ?? history().messages[id].model;
          })
        } : {}
      },
      meta: {
        arena: get$1(message) ? get$1(message).arena : false,
        model_id: get$1(message).model,
        message_id: get$1(message).id,
        message_index: messages.length,
        chat_id: chatId2()
      },
      snapshot: { chat }
    };
    const baseModels = [
      feedbackItem.data.model_id,
      ...feedbackItem.data.sibling_model_ids ?? []
    ].reduce(
      (acc, modelId) => {
        var _a2;
        const model2 = $models().find((m) => m.id === modelId);
        if (model2) {
          acc[model2.id] = ((_a2 = model2 == null ? void 0 : model2.info) == null ? void 0 : _a2.base_model_id) ?? null;
        }
        return acc;
      },
      {}
    );
    feedbackItem.meta.base_models = baseModels;
    let feedback = null;
    if ((_c = get$1(message)) == null ? void 0 : _c.feedbackId) {
      feedback = await updateFeedbackById("static-token", get$1(message).feedbackId, feedbackItem).catch((error) => {
        toast.error(`${error}`);
      });
    } else {
      feedback = await createNewFeedback("static-token", feedbackItem).catch((error) => {
        toast.error(`${error}`);
      });
      if (feedback) {
        updatedMessage.feedbackId = feedback.id;
      }
    }
    saveMessage()(get$1(message).id, updatedMessage);
    await tick();
    if (!details) {
      if (!((_d = updatedMessage.annotation) == null ? void 0 : _d.tags) && (((_e = get$1(message)) == null ? void 0 : _e.content) ?? "") !== "") {
        const tags2 = await generateTags("static-token", get$1(message).model, messages, chatId2()).catch((error) => {
          console.error(error);
          return [];
        });
        if (tags2) {
          updatedMessage.annotation.tags = tags2;
          feedbackItem.data.tags = tags2;
          saveMessage()(get$1(message).id, updatedMessage);
          await updateFeedbackById("static-token", updatedMessage.feedbackId, feedbackItem).catch((error) => {
            toast.error(`${error}`);
          });
        }
      }
    }
    set(feedbackLoading, false);
  };
  const deleteMessageHandler = async () => {
    deleteMessage()(get$1(message).id);
  };
  const buttonsWheelHandler = (event2) => {
    if (get$1(buttonsContainerElement)) {
      if (get$1(buttonsContainerElement).scrollWidth <= get$1(buttonsContainerElement).clientWidth) {
        return;
      } else {
        event2.preventDefault();
        if (event2.deltaY !== 0) {
          mutate(buttonsContainerElement, get$1(buttonsContainerElement).scrollLeft += event2.deltaY);
        }
      }
    }
  };
  const contentCopyHandler = (e) => {
    if (get$1(contentContainerElement)) {
      e.preventDefault();
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const tempDiv = document.createElement("div");
      tempDiv.appendChild(range.cloneContents());
      tempDiv.querySelectorAll("table").forEach((table) => {
        table.style.borderCollapse = "collapse";
        table.style.width = "auto";
        table.style.tableLayout = "auto";
      });
      tempDiv.querySelectorAll("th").forEach((th) => {
        th.style.whiteSpace = "nowrap";
        th.style.padding = "4px 8px";
      });
      e.clipboardData.setData("text/html", tempDiv.innerHTML);
      e.clipboardData.setData("text/plain", selection.toString());
    }
  };
  onMount(async () => {
    await tick();
    if (get$1(buttonsContainerElement)) {
      get$1(buttonsContainerElement).addEventListener("wheel", buttonsWheelHandler);
    }
    if (get$1(contentContainerElement)) {
      get$1(contentContainerElement).addEventListener("copy", contentCopyHandler);
    }
  });
  onDestroy(() => {
    if (get$1(buttonsContainerElement)) {
      get$1(buttonsContainerElement).removeEventListener("wheel", buttonsWheelHandler);
    }
    if (get$1(contentContainerElement)) {
      get$1(contentContainerElement).removeEventListener("copy", contentCopyHandler);
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(history()), get$1(message), deep_read_state(messageId())),
    () => {
      if (history().messages) {
        if (JSON.stringify(get$1(message)) !== JSON.stringify(history().messages[messageId()])) {
          set(message, JSON.parse(JSON.stringify(history().messages[messageId()])));
        }
      }
    }
  );
  legacy_pre_effect(() => ($models(), get$1(message)), () => {
    set(model, $models().find((m) => m.id === get$1(message).model));
  });
  legacy_pre_effect(() => (get$1(edit), tick), () => {
    if (!get$1(edit)) {
      (async () => {
        await tick();
      })();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$d();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete message?"))));
    ConfirmDialog(node, {
      get title() {
        return get$1($0);
      },
      get show() {
        return get$1(showDeleteConfirm);
      },
      set show($$value) {
        set(showDeleteConfirm, $$value);
      },
      $$events: {
        confirm: () => {
          deleteMessageHandler();
        }
      },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  key(node_1, () => (get$1(message), untrack(() => get$1(message).id)), ($$anchor2) => {
    var div = root_1$8();
    var div_1 = child(div);
    var div_2 = child(div_1);
    var div_3 = child(div_2);
    var div_4 = child(div_3);
    var node_2 = child(div_4);
    {
      var consequent_1 = ($$anchor3) => {
        var div_5 = root_2$b();
        each(div_5, 5, () => (get$1(message), untrack(() => get$1(message).files)), index, ($$anchor4, file) => {
          var div_6 = root_3$a();
          var node_3 = child(div_6);
          {
            var consequent = ($$anchor5) => {
              Image$1($$anchor5, {
                get src() {
                  return get$1(file), untrack(() => get$1(file).url);
                },
                get alt() {
                  return get$1(message), untrack(() => get$1(message).content);
                }
              });
            };
            var alternate = ($$anchor5) => {
              {
                let $0 = derived_safe_equal(() => (get$1(file), untrack(() => {
                  var _a;
                  return (_a = get$1(file)) == null ? void 0 : _a.size;
                })));
                FileItem($$anchor5, {
                  get item() {
                    return get$1(file);
                  },
                  get url() {
                    return get$1(file), untrack(() => get$1(file).url);
                  },
                  get name() {
                    return get$1(file), untrack(() => get$1(file).name);
                  },
                  get type() {
                    return get$1(file), untrack(() => get$1(file).type);
                  },
                  get size() {
                    return get$1($0);
                  },
                  small: true
                });
              }
            };
            if_block(node_3, ($$render) => {
              if (get$1(file), untrack(() => get$1(file).type === "image")) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          reset(div_6);
          append($$anchor4, div_6);
        });
        reset(div_5);
        append($$anchor3, div_5);
      };
      if_block(node_2, ($$render) => {
        if (get$1(message), untrack(() => {
          var _a, _b;
          return ((_a = get$1(message)) == null ? void 0 : _a.files) && ((_b = get$1(message).files) == null ? void 0 : _b.filter((f) => f.type === "image").length) > 0;
        })) $$render(consequent_1);
      });
    }
    var node_4 = sibling(node_2, 2);
    {
      var consequent_2 = ($$anchor3) => {
        var div_7 = root_6$9();
        each(div_7, 5, () => (get$1(message), untrack(() => get$1(message).embeds)), index, ($$anchor4, embed, idx) => {
          var div_8 = root_7$7();
          var node_5 = child(div_8);
          FullHeightIframe(node_5, {
            get src() {
              return get$1(embed);
            },
            allowScripts: true,
            allowForms: true,
            allowSameOrigin: true,
            allowPopups: true
          });
          reset(div_8);
          template_effect(() => set_attribute(div_8, "id", (get$1(message), untrack(() => `${get$1(message).id}-embeds-${idx}`))));
          append($$anchor4, div_8);
        });
        reset(div_7);
        append($$anchor3, div_7);
      };
      if_block(node_4, ($$render) => {
        if (get$1(message), untrack(() => {
          var _a;
          return ((_a = get$1(message)) == null ? void 0 : _a.embeds) && get$1(message).embeds.length > 0;
        })) $$render(consequent_2);
      });
    }
    var node_6 = sibling(node_4, 2);
    {
      var consequent_3 = ($$anchor3) => {
        var div_9 = root_8$7();
        var textarea = child(div_9);
        remove_textarea_child(textarea);
        bind_this(textarea, ($$value) => set(editTextAreaElement, $$value), () => get$1(editTextAreaElement));
        var div_10 = sibling(textarea, 2);
        var div_11 = child(div_10);
        var button = child(div_11);
        var text_1 = child(button, true);
        reset(button);
        reset(div_11);
        var div_12 = sibling(div_11, 2);
        var button_1 = child(div_12);
        var text_2 = child(button_1, true);
        reset(button_1);
        var button_2 = sibling(button_1, 2);
        var text_3 = child(button_2, true);
        reset(button_2);
        reset(div_12);
        reset(div_10);
        reset(div_9);
        template_effect(
          ($0, $1, $2) => {
            set_attribute(textarea, "id", `message-edit-${(get$1(message), untrack(() => get$1(message).id)) ?? ""}`);
            set_text(text_1, $0);
            set_text(text_2, $1);
            set_text(text_3, $2);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Save As Copy"))),
            () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
            () => ($i18n(), untrack(() => $i18n().t("Save")))
          ]
        );
        bind_value(textarea, () => get$1(editedContent), ($$value) => set(editedContent, $$value));
        event("input", textarea, (e) => {
          e.target.style.height = "";
          e.target.style.height = `${e.target.scrollHeight}px`;
        });
        event("keydown", textarea, (e) => {
          var _a, _b;
          if (e.key === "Escape") {
            (_a = document.getElementById("close-edit-message-button")) == null ? void 0 : _a.click();
          }
          const isCmdOrCtrlPressed = e.metaKey || e.ctrlKey;
          const isEnterPressed = e.key === "Enter";
          if (isCmdOrCtrlPressed && isEnterPressed) {
            (_b = document.getElementById("confirm-edit-message-button")) == null ? void 0 : _b.click();
          }
        });
        event("click", button, () => {
          saveAsCopyHandler();
        });
        event("click", button_1, () => {
          cancelEditMessage();
        });
        event("click", button_2, () => {
          editMessageConfirmHandler();
        });
        append($$anchor3, div_9);
      };
      if_block(node_6, ($$render) => {
        if (get$1(edit) === true) $$render(consequent_3);
      });
    }
    var div_13 = sibling(node_6, 2);
    var node_7 = child(div_13);
    {
      var consequent_4 = ($$anchor3) => {
        Skeleton($$anchor3, {});
      };
      var alternate_1 = ($$anchor3) => {
        var fragment_4 = comment();
        var node_8 = first_child(fragment_4);
        {
          var consequent_5 = ($$anchor4) => {
            {
              let $0 = derived_safe_equal(() => (deep_read_state(chatId2()), get$1(message), untrack(() => `${chatId2()}-${get$1(message).id}`)));
              let $1 = derived_safe_equal(() => (get$1(message), deep_read_state(readOnly()), $settings(), untrack(() => {
                var _a, _b;
                return ((_a = get$1(message)) == null ? void 0 : _a.done) && !readOnly() && (((_b = $settings()) == null ? void 0 : _b.showFloatingActionButtons) ?? true);
              })));
              let $2 = derived_safe_equal(() => !readOnly());
              let $3 = derived_safe_equal(() => !readOnly());
              let $4 = derived_safe_equal(() => ($settings(), get$1(message), untrack(() => {
                var _a, _b;
                return ((_a = $settings()) == null ? void 0 : _a.chatFadeStreamingText) ?? true ? ((_b = get$1(message)) == null ? void 0 : _b.done) ?? false : true;
              })));
              ContentRenderer($$anchor4, {
                get id() {
                  return get$1($0);
                },
                get messageId() {
                  return get$1(message), untrack(() => get$1(message).id);
                },
                get history() {
                  return history();
                },
                get selectedModels() {
                  return selectedModels();
                },
                get content() {
                  return get$1(message), untrack(() => get$1(message).content);
                },
                get sources() {
                  return get$1(message), untrack(() => get$1(message).sources);
                },
                get floatingButtons() {
                  return get$1($1);
                },
                get save() {
                  return get$1($2);
                },
                get preview() {
                  return get$1($3);
                },
                get editCodeBlock() {
                  return editCodeBlock();
                },
                get topPadding() {
                  return topPadding();
                },
                get done() {
                  return get$1($4);
                },
                get model() {
                  return get$1(model);
                },
                onTaskClick: async (e) => {
                },
                onSourceClick: async (id) => {
                },
                onAddMessages: ({ modelId, parentId, messages }) => {
                  addMessages()({ modelId, parentId, messages });
                },
                onSave: ({ raw, oldContent, newContent }) => {
                  history(history().messages[get$1(message).id].content = history().messages[get$1(message).id].content.replace(raw, raw.replace(oldContent, newContent)), true);
                  updateChat()();
                }
              });
            }
          };
          if_block(
            node_8,
            ($$render) => {
              if (get$1(message), untrack(() => get$1(message).content && get$1(message).error !== true)) $$render(consequent_5);
            },
            true
          );
        }
        append($$anchor3, fragment_4);
      };
      if_block(node_7, ($$render) => {
        if (get$1(message), get$1(model), untrack(() => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          return get$1(message).content === "" && !get$1(message).error && (((_d = (_c = (_b = (_a = get$1(model)) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.status_updates) ?? true ? (((_e = get$1(message)) == null ? void 0 : _e.statusHistory) ?? [...((_f = get$1(message)) == null ? void 0 : _f.status) ? [(_g = get$1(message)) == null ? void 0 : _g.status] : []]).length === 0 || (((_j = (_i = (_h = get$1(message)) == null ? void 0 : _h.statusHistory) == null ? void 0 : _i.at(-1)) == null ? void 0 : _j.hidden) ?? false) : true);
        })) $$render(consequent_4);
        else $$render(alternate_1, false);
      });
    }
    var node_9 = sibling(node_7, 2);
    {
      var consequent_6 = ($$anchor3) => {
        {
          let $0 = derived_safe_equal(() => (get$1(message), untrack(() => {
            var _a, _b;
            return ((_b = (_a = get$1(message)) == null ? void 0 : _a.error) == null ? void 0 : _b.content) ?? get$1(message).content;
          })));
          Error$1($$anchor3, {
            get content() {
              return get$1($0);
            }
          });
        }
      };
      if_block(node_9, ($$render) => {
        if (get$1(message), untrack(() => {
          var _a;
          return (_a = get$1(message)) == null ? void 0 : _a.error;
        })) $$render(consequent_6);
      });
    }
    reset(div_13);
    bind_this(div_13, ($$value) => set(contentContainerElement, $$value), () => get$1(contentContainerElement));
    reset(div_4);
    reset(div_3);
    var node_10 = sibling(div_3, 2);
    {
      var consequent_25 = ($$anchor3) => {
        var div_14 = root_13$1();
        var node_11 = child(div_14);
        {
          var consequent_24 = ($$anchor4) => {
            var fragment_7 = root_14$2();
            var node_12 = first_child(fragment_7);
            {
              var consequent_8 = ($$anchor5) => {
                var div_15 = root_15$3();
                var button_3 = child(div_15);
                var node_13 = sibling(button_3, 2);
                {
                  var consequent_7 = ($$anchor6) => {
                    var div_16 = root_16$2();
                    var input_1 = child(div_16);
                    remove_input_defaults(input_1);
                    var text_4 = sibling(input_1);
                    reset(div_16);
                    template_effect(
                      ($0) => {
                        set_attribute(input_1, "id", `message-index-input-${(get$1(message), untrack(() => get$1(message).id)) ?? ""}`);
                        set_value(input_1, $0);
                        set_attribute(input_1, "max", (deep_read_state(siblings()), untrack(() => siblings().length)));
                        set_text(text_4, `/${(deep_read_state(siblings()), untrack(() => siblings().length)) ?? ""}`);
                      },
                      [
                        () => (deep_read_state(siblings()), get$1(message), untrack(() => siblings().indexOf(get$1(message).id) + 1))
                      ]
                    );
                    event("focus", input_1, (e) => {
                      e.target.select();
                    });
                    event("blur", input_1, (e) => {
                      gotoMessage()(get$1(message), e.target.value - 1);
                      set(messageIndexEdit, false);
                    });
                    event("keydown", input_1, (e) => {
                      if (e.key === "Enter") {
                        gotoMessage()(get$1(message), e.target.value - 1);
                        set(messageIndexEdit, false);
                      }
                    });
                    append($$anchor6, div_16);
                  };
                  var alternate_2 = ($$anchor6) => {
                    var div_17 = root_17$2();
                    var text_5 = child(div_17);
                    reset(div_17);
                    template_effect(
                      ($0) => set_text(text_5, `${$0 ?? ""}/${(deep_read_state(siblings()), untrack(() => siblings().length)) ?? ""}`),
                      [
                        () => (deep_read_state(siblings()), get$1(message), untrack(() => siblings().indexOf(get$1(message).id) + 1))
                      ]
                    );
                    event("dblclick", div_17, async () => {
                      set(messageIndexEdit, true);
                      await tick();
                      const input = document.getElementById(`message-index-input-${get$1(message).id}`);
                      if (input) {
                        input.focus();
                        input.select();
                      }
                    });
                    append($$anchor6, div_17);
                  };
                  if_block(node_13, ($$render) => {
                    if (get$1(messageIndexEdit)) $$render(consequent_7);
                    else $$render(alternate_2, false);
                  });
                }
                var button_4 = sibling(node_13, 2);
                reset(div_15);
                template_effect(
                  ($0, $1) => {
                    set_attribute(button_3, "aria-label", $0);
                    set_attribute(button_4, "aria-label", $1);
                    div_15.dir = div_15.dir;
                  },
                  [
                    () => ($i18n(), untrack(() => $i18n().t("Previous message"))),
                    () => ($i18n(), untrack(() => $i18n().t("Next message")))
                  ]
                );
                event("click", button_3, () => {
                  showPreviousMessage()(get$1(message));
                });
                event("click", button_4, () => {
                  showNextMessage()(get$1(message));
                });
                append($$anchor5, div_15);
              };
              if_block(node_12, ($$render) => {
                if (deep_read_state(siblings()), untrack(() => siblings().length > 1)) $$render(consequent_8);
              });
            }
            var node_14 = sibling(node_12, 2);
            {
              var consequent_23 = ($$anchor5) => {
                var fragment_8 = root_18$1();
                var node_15 = first_child(fragment_8);
                {
                  var consequent_10 = ($$anchor6) => {
                    var fragment_9 = comment();
                    var node_16 = first_child(fragment_9);
                    {
                      var consequent_9 = ($$anchor7) => {
                        var button_5 = root_20$1();
                        template_effect(
                          ($0) => {
                            set_attribute(button_5, "aria-label", $0);
                            set_class(button_5, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                              var _a;
                              return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                            })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                          },
                          [() => ($i18n(), untrack(() => $i18n().t("Edit")))]
                        );
                        event("click", button_5, () => {
                          editMessageHandler();
                        });
                        append($$anchor7, button_5);
                      };
                      if_block(node_16, ($$render) => {
                        if ($user(), untrack(() => {
                          var _a, _b, _c, _d;
                          return ((_a = $user()) == null ? void 0 : _a.role) === "user" ? ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.edit) ?? true : true;
                        })) $$render(consequent_9);
                      });
                    }
                    append($$anchor6, fragment_9);
                  };
                  if_block(node_15, ($$render) => {
                    if (!readOnly()) $$render(consequent_10);
                  });
                }
                var button_6 = sibling(node_15, 2);
                var node_17 = sibling(button_6, 2);
                {
                  var consequent_12 = ($$anchor6) => {
                    var button_7 = root_21();
                    var node_18 = child(button_7);
                    {
                      var consequent_11 = ($$anchor7) => {
                        var svg = root_22();
                        append($$anchor7, svg);
                      };
                      var alternate_3 = ($$anchor7) => {
                        var svg_1 = root_23$1();
                        append($$anchor7, svg_1);
                      };
                      if_block(node_18, ($$render) => {
                        if (get$1(generatingImage)) $$render(consequent_11);
                        else $$render(alternate_3, false);
                      });
                    }
                    reset(button_7);
                    template_effect(
                      ($0) => {
                        set_attribute(button_7, "aria-label", $0);
                        set_class(button_7, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                          var _a;
                          return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                        })) ?? ""}  p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                      },
                      [
                        () => ($i18n(), untrack(() => $i18n().t("Generate Image")))
                      ]
                    );
                    event("click", button_7, () => {
                      if (!get$1(generatingImage)) {
                        generateImage(get$1(message));
                      }
                    });
                    append($$anchor6, button_7);
                  };
                  if_block(node_17, ($$render) => {
                    if ($user(), deep_read_state(readOnly()), untrack(() => false)) $$render(consequent_12);
                  });
                }
                var node_19 = sibling(node_17, 2);
                {
                  var consequent_13 = ($$anchor6) => {
                    var button_8 = root_24$1();
                    template_effect(() => {
                      set_class(button_8, 1, ` ${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                        var _a;
                        return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                      })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap`);
                      set_attribute(button_8, "id", `info-${(get$1(message), untrack(() => get$1(message).id)) ?? ""}`);
                    });
                    event("click", button_8, () => {
                    });
                    append($$anchor6, button_8);
                  };
                  if_block(node_19, ($$render) => {
                    if (get$1(message), untrack(() => get$1(message).usage)) $$render(consequent_13);
                  });
                }
                var node_20 = sibling(node_19, 2);
                {
                  var consequent_22 = ($$anchor6) => {
                    var fragment_10 = root_25();
                    var node_21 = first_child(fragment_10);
                    {
                      var consequent_14 = ($$anchor7) => {
                        var fragment_11 = root_26();
                        var button_9 = first_child(fragment_11);
                        var button_10 = sibling(button_9, 2);
                        template_effect(
                          ($0, $1, $2, $3) => {
                            set_attribute(button_9, "aria-label", $0);
                            set_class(button_9, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                              var _a;
                              return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                            })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg ${$1 ?? ""} dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent`);
                            button_9.disabled = get$1(feedbackLoading);
                            set_attribute(button_10, "aria-label", $2);
                            set_class(button_10, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                              var _a;
                              return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                            })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg ${$3 ?? ""} dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent`);
                            button_10.disabled = get$1(feedbackLoading);
                          },
                          [
                            () => ($i18n(), untrack(() => $i18n().t("Good Response"))),
                            () => (get$1(message), untrack(() => {
                              var _a, _b;
                              return (((_b = (_a = get$1(message)) == null ? void 0 : _a.annotation) == null ? void 0 : _b.rating) ?? "").toString() === "1" ? "bg-gray-100 dark:bg-gray-800" : "";
                            })),
                            () => ($i18n(), untrack(() => $i18n().t("Bad Response"))),
                            () => (get$1(message), untrack(() => {
                              var _a, _b;
                              return (((_b = (_a = get$1(message)) == null ? void 0 : _a.annotation) == null ? void 0 : _b.rating) ?? "").toString() === "-1" ? "bg-gray-100 dark:bg-gray-800" : "";
                            }))
                          ]
                        );
                        event("click", button_9, async () => {
                          await feedbackHandler(1);
                          window.setTimeout(
                            () => {
                              var _a;
                              (_a = document.getElementById(`message-feedback-${get$1(message).id}`)) == null ? void 0 : _a.scrollIntoView();
                            },
                            0
                          );
                        });
                        event("click", button_10, async () => {
                          await feedbackHandler(-1);
                          window.setTimeout(
                            () => {
                              var _a;
                              (_a = document.getElementById(`message-feedback-${get$1(message).id}`)) == null ? void 0 : _a.scrollIntoView();
                            },
                            0
                          );
                        });
                        append($$anchor7, fragment_11);
                      };
                      if_block(node_21, ($$render) => {
                        if ($temporaryChatEnabled(), $config(), $user(), untrack(() => {
                          var _a, _b, _c, _d, _e;
                          return !$temporaryChatEnabled() && (((_a = $config()) == null ? void 0 : _a.features.enable_message_rating) ?? true) && (((_b = $user()) == null ? void 0 : _b.role) === "admin" || (((_e = (_d = (_c = $user()) == null ? void 0 : _c.permissions) == null ? void 0 : _d.chat) == null ? void 0 : _e.rate_response) ?? true));
                        })) $$render(consequent_14);
                      });
                    }
                    var node_22 = sibling(node_21, 2);
                    {
                      var consequent_15 = ($$anchor7) => {
                        var button_11 = root_27();
                        template_effect(
                          ($0) => {
                            set_attribute(button_11, "aria-label", $0);
                            set_class(button_11, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                              var _a;
                              return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                            })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                          },
                          [
                            () => ($i18n(), untrack(() => $i18n().t("Continue Response")))
                          ]
                        );
                        event("click", button_11, () => {
                          continueResponse()();
                        });
                        append($$anchor7, button_11);
                      };
                      if_block(node_22, ($$render) => {
                        if (deep_read_state(isLastMessage()), $user(), untrack(() => {
                          var _a, _b, _c, _d;
                          return isLastMessage() && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.continue_response) ?? true));
                        })) $$render(consequent_15);
                      });
                    }
                    var node_23 = sibling(node_22, 2);
                    {
                      var consequent_17 = ($$anchor7) => {
                        var fragment_12 = comment();
                        var node_24 = first_child(fragment_12);
                        {
                          var consequent_16 = ($$anchor8) => {
                            var fragment_13 = root_29();
                            var button_12 = first_child(fragment_13);
                            var node_25 = sibling(button_12, 2);
                            RegenerateMenu(node_25, {
                              onRegenerate: (prompt = null) => {
                                var _a;
                                regenerateResponse()(get$1(message), prompt);
                                (((_a = get$1(model)) == null ? void 0 : _a.actions) ?? []).forEach((action2) => {
                                  dispatch("action", {
                                    id: action2.id,
                                    event: {
                                      id: "regenerate-response",
                                      data: { messageId: get$1(message).id }
                                    }
                                  });
                                });
                              },
                              children: ($$anchor9, $$slotProps) => {
                                var div_18 = root_30();
                                template_effect(
                                  ($0) => {
                                    set_attribute(div_18, "aria-label", $0);
                                    set_class(div_18, 1, `${isLastMessage() ? "visible" : "invisible group-hover:visible"} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                                  },
                                  [() => ($i18n(), untrack(() => $i18n().t("Regenerate")))]
                                );
                                append($$anchor9, div_18);
                              },
                              $$slots: { default: true }
                            });
                            event("click", button_12, () => {
                              var _a;
                              regenerateResponse()(get$1(message));
                              (((_a = get$1(model)) == null ? void 0 : _a.actions) ?? []).forEach((action2) => {
                                dispatch("action", {
                                  id: action2.id,
                                  event: {
                                    id: "regenerate-response",
                                    data: { messageId: get$1(message).id }
                                  }
                                });
                              });
                            });
                            append($$anchor8, fragment_13);
                          };
                          var alternate_4 = ($$anchor8) => {
                            var button_13 = root_31();
                            template_effect(
                              ($0) => {
                                set_attribute(button_13, "aria-label", $0);
                                set_class(button_13, 1, `${isLastMessage() ? "visible" : "invisible group-hover:visible"} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button`);
                              },
                              [() => ($i18n(), untrack(() => $i18n().t("Regenerate")))]
                            );
                            event("click", button_13, () => {
                              var _a;
                              regenerateResponse()(get$1(message));
                              (((_a = get$1(model)) == null ? void 0 : _a.actions) ?? []).forEach((action2) => {
                                dispatch("action", {
                                  id: action2.id,
                                  event: {
                                    id: "regenerate-response",
                                    data: { messageId: get$1(message).id }
                                  }
                                });
                              });
                            });
                            append($$anchor8, button_13);
                          };
                          if_block(node_24, ($$render) => {
                            if ($settings(), untrack(() => {
                              var _a;
                              return ((_a = $settings()) == null ? void 0 : _a.regenerateMenu) ?? true;
                            })) $$render(consequent_16);
                            else $$render(alternate_4, false);
                          });
                        }
                        append($$anchor7, fragment_12);
                      };
                      if_block(node_23, ($$render) => {
                        if ($user(), untrack(() => {
                          var _a, _b, _c, _d;
                          return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.regenerate_response) ?? true);
                        })) $$render(consequent_17);
                      });
                    }
                    var node_26 = sibling(node_23, 2);
                    {
                      var consequent_19 = ($$anchor7) => {
                        var fragment_14 = comment();
                        var node_27 = first_child(fragment_14);
                        {
                          var consequent_18 = ($$anchor8) => {
                            var button_14 = root_33();
                            template_effect(
                              ($0) => {
                                set_attribute(button_14, "aria-label", $0);
                                set_class(button_14, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                                  var _a;
                                  return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                                })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                              },
                              [() => ($i18n(), untrack(() => $i18n().t("Delete")))]
                            );
                            event("click", button_14, () => {
                              set(showDeleteConfirm, true);
                            });
                            append($$anchor8, button_14);
                          };
                          if_block(node_27, ($$render) => {
                            if (deep_read_state(siblings()), untrack(() => siblings().length > 1)) $$render(consequent_18);
                          });
                        }
                        append($$anchor7, fragment_14);
                      };
                      if_block(node_26, ($$render) => {
                        if ($user(), untrack(() => {
                          var _a, _b, _c, _d;
                          return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.delete_message) ?? true);
                        })) $$render(consequent_19);
                      });
                    }
                    var node_28 = sibling(node_26, 2);
                    {
                      var consequent_21 = ($$anchor7) => {
                        var fragment_15 = comment();
                        var node_29 = first_child(fragment_15);
                        each(node_29, 1, () => (get$1(model), untrack(() => {
                          var _a;
                          return ((_a = get$1(model)) == null ? void 0 : _a.actions) ?? [];
                        })), index, ($$anchor8, action2) => {
                          var button_15 = root_35();
                          var node_30 = child(button_15);
                          {
                            var consequent_20 = ($$anchor9) => {
                              var div_19 = root_36();
                              var img = child(div_19);
                              reset(div_19);
                              template_effect(
                                ($0) => {
                                  set_attribute(img, "src", (get$1(action2), untrack(() => get$1(action2).icon)));
                                  set_class(img, 1, `w-4 h-4 ${$0 ?? ""}`);
                                  set_attribute(img, "alt", (get$1(action2), untrack(() => get$1(action2).name)));
                                },
                                [
                                  () => (get$1(action2), untrack(() => get$1(action2).icon.includes("svg") ? "dark:invert-[80%]" : ""))
                                ]
                              );
                              append($$anchor9, div_19);
                            };
                            var alternate_5 = ($$anchor9) => {
                            };
                            if_block(node_30, ($$render) => {
                              if (get$1(action2), untrack(() => {
                                var _a;
                                return (_a = get$1(action2)) == null ? void 0 : _a.icon;
                              })) $$render(consequent_20);
                              else $$render(alternate_5, false);
                            });
                          }
                          reset(button_15);
                          template_effect(() => {
                            set_attribute(button_15, "aria-label", (get$1(action2), untrack(() => get$1(action2).name)));
                            set_class(button_15, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                              var _a;
                              return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                            })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                          });
                          event("click", button_15, () => {
                            actionMessage()(get$1(action2).id, get$1(message));
                          });
                          append($$anchor8, button_15);
                        });
                        append($$anchor7, fragment_15);
                      };
                      if_block(node_28, ($$render) => {
                        if (isLastMessage()) $$render(consequent_21);
                      });
                    }
                    append($$anchor6, fragment_10);
                  };
                  if_block(node_20, ($$render) => {
                    if (!readOnly()) $$render(consequent_22);
                  });
                }
                template_effect(
                  ($0) => {
                    set_attribute(button_6, "aria-label", $0);
                    set_class(button_6, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                      var _a;
                      return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                    })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition copy-response-button`);
                  },
                  [() => ($i18n(), untrack(() => $i18n().t("Copy")))]
                );
                event("click", button_6, () => {
                  copyToClipboard$1(get$1(message).content);
                });
                append($$anchor5, fragment_8);
              };
              if_block(node_14, ($$render) => {
                if (get$1(message), untrack(() => get$1(message).done)) $$render(consequent_23);
              });
            }
            append($$anchor4, fragment_7);
          };
          if_block(node_11, ($$render) => {
            if (get$1(message), deep_read_state(siblings()), untrack(() => get$1(message).done || siblings().length > 1)) $$render(consequent_24);
          });
        }
        reset(div_14);
        bind_this(div_14, ($$value) => set(buttonsContainerElement, $$value), () => get$1(buttonsContainerElement));
        append($$anchor3, div_14);
      };
      if_block(node_10, ($$render) => {
        if (!get$1(edit)) $$render(consequent_25);
      });
    }
    reset(div_2);
    reset(div_1);
    reset(div);
    template_effect(() => {
      set_class(div, 1, ` flex w-full message-${(get$1(message), untrack(() => get$1(message).id)) ?? ""}`, "svelte-1qscqw6");
      set_attribute(div, "id", `message-${(get$1(message), untrack(() => get$1(message).id)) ?? ""}`);
      set_attribute(div, "dir", ($settings(), untrack(() => $settings().chatDirection)));
      set_class(div_3, 1, `chat-${(get$1(message), untrack(() => get$1(message).role)) ?? ""} w-full min-w-full markdown-prose`, "svelte-1qscqw6");
      set_class(div_13, 1, `w-full flex flex-col relative ${get$1(edit) ? "hidden" : ""}`);
      div.dir = div.dir;
    });
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$a = from_html(`<div class="flex w-full justify-end"><div class="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[70%] 2xl:max-w-[65%] rounded-2xl px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-800"><p class="text-gray-900 dark:text-gray-100 whitespace-pre-wrap text-sm sm:text-base"> </p></div></div>`);
var root$c = from_html(`<div role="listitem"><!></div>`);
function Message($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  createEventDispatcher();
  getContext("i18n");
  let chatId2 = prop($$props, "chatId", 8);
  let selectedModels = prop($$props, "selectedModels", 24, () => []);
  let history = prop($$props, "history", 8);
  let messageId = prop($$props, "messageId", 8);
  let setInputText = prop($$props, "setInputText", 8, () => {
  });
  let gotoMessage = prop($$props, "gotoMessage", 8);
  let showPreviousMessage = prop($$props, "showPreviousMessage", 8);
  let showNextMessage = prop($$props, "showNextMessage", 8);
  let updateChat = prop($$props, "updateChat", 8);
  let editMessage = prop($$props, "editMessage", 8);
  let saveMessage = prop($$props, "saveMessage", 8);
  let deleteMessage = prop($$props, "deleteMessage", 8);
  let rateMessage = prop($$props, "rateMessage", 8);
  let actionMessage = prop($$props, "actionMessage", 8);
  let submitMessage = prop($$props, "submitMessage", 8);
  let regenerateResponse = prop($$props, "regenerateResponse", 8);
  let continueResponse = prop($$props, "continueResponse", 8);
  let addMessages = prop($$props, "addMessages", 8);
  let readOnly = prop($$props, "readOnly", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  init();
  var div = root$c();
  var node = child(div);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          var div_1 = root_2$a();
          var div_2 = child(div_1);
          var p = child(div_2);
          var text2 = child(p, true);
          reset(p);
          reset(div_2);
          reset(div_1);
          template_effect(() => set_text(text2, (deep_read_state(history()), deep_read_state(messageId()), untrack(() => history().messages[messageId()].content))));
          append($$anchor3, div_1);
        };
        var alternate = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => (deep_read_state(messageId()), deep_read_state(history()), untrack(() => messageId() === history().currentId)));
            let $1 = derived_safe_equal(() => (deep_read_state(history()), deep_read_state(messageId()), untrack(() => {
              var _a;
              return ((_a = history().messages[history().messages[messageId()].parentId]) == null ? void 0 : _a.childrenIds) ?? [];
            })));
            ResponseMessage($$anchor3, {
              get chatId() {
                return chatId2();
              },
              get history() {
                return history();
              },
              get messageId() {
                return messageId();
              },
              get selectedModels() {
                return selectedModels();
              },
              get isLastMessage() {
                return get$1($0);
              },
              get siblings() {
                return get$1($1);
              },
              get setInputText() {
                return setInputText();
              },
              get gotoMessage() {
                return gotoMessage();
              },
              get showPreviousMessage() {
                return showPreviousMessage();
              },
              get showNextMessage() {
                return showNextMessage();
              },
              get updateChat() {
                return updateChat();
              },
              get editMessage() {
                return editMessage();
              },
              get saveMessage() {
                return saveMessage();
              },
              get rateMessage() {
                return rateMessage();
              },
              get actionMessage() {
                return actionMessage();
              },
              get submitMessage() {
                return submitMessage();
              },
              get deleteMessage() {
                return deleteMessage();
              },
              get continueResponse() {
                return continueResponse();
              },
              get regenerateResponse() {
                return regenerateResponse();
              },
              get addMessages() {
                return addMessages();
              },
              get readOnly() {
                return readOnly();
              },
              get editCodeBlock() {
                return editCodeBlock();
              },
              get topPadding() {
                return topPadding();
              }
            });
          }
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(history()), deep_read_state(messageId()), untrack(() => history().messages[messageId()].role === "user")) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(history()), deep_read_state(messageId()), untrack(() => history().messages[messageId()])) $$render(consequent_1);
    });
  }
  reset(div);
  template_effect(() => set_class(div, 1, `flex flex-col justify-between px-4 md:px-5 lg:px-6 mb-3 w-full ${($settings(), untrack(() => {
    var _a;
    return ((_a = $settings()) == null ? void 0 : _a.widescreenMode) ?? null ? "max-w-full" : "max-w-5xl xl:max-w-6xl 2xl:max-w-7xl";
  })) ?? ""} mx-auto rounded-lg group`));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key2) => `Invalid value for key ${key2}`;
const PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key2) => `Property 'weight' in key '${key2}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key2) => {
      let obj = createKey(key2);
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key2) => {
      key2.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function createKey(key2) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key2) || isArray(key2)) {
    src = key2;
    path = createKeyPath(key2);
    id = createKeyId(key2);
  } else {
    if (!hasOwn.call(key2, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key2.name;
    src = name;
    if (hasOwn.call(key2, "weight")) {
      weight = key2.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key2.getFn;
  }
  return { path, id, weight, src, getFn };
}
function createKeyPath(key2) {
  return isArray(key2) ? key2 : key2.split(".");
}
function createKeyId(key2) {
  return isArray(key2) ? key2.join(".") : key2;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index2) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index2]) {
      list.push(obj2);
    } else {
      let key2 = path2[index2];
      const value = obj2[key2];
      if (!isDefined(value)) {
        return;
      }
      if (index2 === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index2 + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index2 + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};
const SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key2, idx) => {
      this._keysMap[key2.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };
    this.keys.forEach((key2, keyIndex) => {
      let value = key2.getFn ? key2.getFn(doc) : this.getFn(doc, key2.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];
        while (stack.length) {
          const { nestedArrIndex, value: value2 } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
const MAX_BITS = 32;
function search(text2, pattern, patternAlphabet, {
  location: location2 = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text2.length;
  const expectedLocation = Math.max(0, Math.min(location2, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index2;
  while ((index2 = text2.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index2,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index2 + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index2 + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text2.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
const stripDiacritics = String.prototype.normalize ? (str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "") : (str) => str;
class BitapSearch {
  constructor(pattern, {
    location: location2 = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location: location2,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text2) {
    const { isCaseSensitive, ignoreDiacritics, includeMatches } = this.options;
    text2 = isCaseSensitive ? text2 : text2.toLowerCase();
    text2 = ignoreDiacritics ? stripDiacritics(text2) : text2;
    if (this.pattern === text2) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text2.length - 1]];
      }
      return result2;
    }
    const {
      location: location2,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text2, pattern, alphabet, {
        location: location2 + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
}
class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
}
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text2) {
    const isMatch = text2 === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text2) {
    const index2 = text2.indexOf(this.pattern);
    const isMatch = index2 === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text2.length - 1]
    };
  }
}
class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text2) {
    const isMatch = text2.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text2) {
    const isMatch = !text2.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text2.length - 1]
    };
  }
}
class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text2) {
    const isMatch = text2.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text2.length - this.pattern.length, text2.length - 1]
    };
  }
}
class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text2) {
    const isMatch = !text2.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text2.length - 1]
    };
  }
}
class FuzzyMatch extends BaseMatch {
  constructor(pattern, {
    location: location2 = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location: location2,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text2) {
    return this._bitapSearch.searchIn(text2);
  }
}
class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text2) {
    let location2 = 0;
    let index2;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index2 = text2.indexOf(this.pattern, location2)) > -1) {
      location2 = index2 + patternLen;
      indices.push([index2, location2 - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
}
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];
const searchersLen = searchers.length;
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
const MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
class ExtendedSearch {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location: location2 = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location: location2,
      threshold,
      distance
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  searchIn(text2) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const { includeMatches, isCaseSensitive, ignoreDiacritics } = this.options;
    text2 = isCaseSensitive ? text2 : text2.toLowerCase();
    text2 = ignoreDiacritics ? stripDiacritics(text2) : text2;
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers2 = query[i];
      allIndices.length = 0;
      numMatches = 0;
      for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
        const searcher = searchers2[j];
        const { isMatch, indices, score } = searcher.search(text2);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
}
const registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
const LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
const KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query) => !!query[KeyType.PATH];
const isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key2) => ({
    [key2]: query[key2]
  }))
});
function parse(query, options, { auto = true } = {}) {
  const next2 = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next2(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key2 = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key2];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key2));
      }
      const obj = {
        keyId: createKeyId(key2),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key2) => {
      const value = query2[key2];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next2(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next2(query);
}
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({ key: key2, norm: norm2, score }) => {
      const weight = key2 ? key2.weight : null;
      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
      );
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const { indices, value } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);
  return results.map((result) => {
    const { idx } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
class Fuse {
  constructor(docs, options = {}, index2) {
    this.options = { ...Config, ...options };
    if (this.options.useExtendedSearch && false) ;
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index2);
  }
  setCollection(docs, index2) {
    this._docs = docs;
    if (index2 && !(index2 instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index2 || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, { ignoreFieldNorm });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];
    records.forEach(({ v: text2, i: idx, n: norm2 }) => {
      if (!isDefined(text2)) {
        return;
      }
      const { isMatch, score, indices } = searcher.searchIn(text2);
      if (isMatch) {
        results.push({
          item: text2,
          idx,
          matches: [{ score, value: text2, norm: norm2, indices }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;
        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });
        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ];
        }
        return [];
      }
      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child2 = node.children[i];
        const result = evaluate(child2, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return;
      }
      let matches = [];
      keys.forEach((key2, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key: key2,
            value: item[keyIndex],
            searcher
          })
        );
      });
      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });
    return results;
  }
  _findMatches({ key: key2, value, searcher }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches = [];
    if (isArray(value)) {
      value.forEach(({ v: text2, i: idx, n: norm2 }) => {
        if (!isDefined(text2)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text2);
        if (isMatch) {
          matches.push({
            score,
            key: key2,
            value: text2,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const { v: text2, n: norm2 } = value;
      const { isMatch, score, indices } = searcher.searchIn(text2);
      if (isMatch) {
        matches.push({ score, key: key2, value: text2, norm: norm2, indices });
      }
    }
    return matches;
  }
}
Fuse.version = "7.1.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}
var root_2$9 = from_html(`<div> </div>`);
var root_5$6 = from_html(`<div class="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1 svelte-6tnq1o"> </div> <div class="text-xs text-gray-600 dark:text-gray-400 font-normal line-clamp-1 svelte-6tnq1o"> </div>`, 1);
var root_6$8 = from_html(`<div class="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1 svelte-6tnq1o"> </div> <div class="text-xs text-gray-600 dark:text-gray-400 font-normal line-clamp-1 svelte-6tnq1o"> </div>`, 1);
var root_4$3 = from_html(`<button role="listitem" class="waterfall flex flex-col flex-1 shrink-0 w-full justify-between
                                       px-3 py-2 rounded-xl bg-transparent hover:bg-black/5
                                       dark:hover:bg-white/5 transition group svelte-6tnq1o"><div class="flex flex-col text-left svelte-6tnq1o"><!></div></button>`);
var root_3$9 = from_html(`<div role="list"></div>`);
var root$b = from_html(`<div class="mb-1 flex gap-1 text-xs font-medium items-center text-gray-600 dark:text-gray-400 svelte-6tnq1o"><!></div> <div class="h-40 w-full svelte-6tnq1o"><!></div>`, 1);
function Suggestions($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let suggestionPrompts = prop($$props, "suggestionPrompts", 24, () => []);
  let className = prop($$props, "className", 8, "");
  let inputValue = prop($$props, "inputValue", 8, "");
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let sortedPrompts = mutable_source([]);
  const fuseOptions = { keys: ["content", "title"], threshold: 0.5 };
  let fuse = mutable_source();
  let filteredPrompts = mutable_source([]);
  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if ((a[i].id ?? a[i].content) !== (b[i].id ?? b[i].content)) {
        return false;
      }
    }
    return true;
  }
  const getFilteredPrompts = (inputValue2) => {
    if (inputValue2.length > 500) {
      set(filteredPrompts, []);
    } else {
      const newFilteredPrompts = inputValue2.trim() && get$1(fuse) ? get$1(fuse).search(inputValue2.trim()).map((result) => result.item) : get$1(sortedPrompts);
      if (!arraysEqual(get$1(filteredPrompts), newFilteredPrompts)) {
        set(filteredPrompts, newFilteredPrompts);
      }
    }
  };
  legacy_pre_effect(
    () => (deep_read_state(suggestionPrompts()), deep_read_state(inputValue())),
    () => {
      if (suggestionPrompts()) {
        set(sortedPrompts, [...suggestionPrompts() ?? []].sort(() => Math.random() - 0.5));
        getFilteredPrompts(inputValue());
      }
    }
  );
  legacy_pre_effect(() => get$1(sortedPrompts), () => {
    set(fuse, new Fuse(get$1(sortedPrompts), fuseOptions));
  });
  legacy_pre_effect(() => deep_read_state(inputValue()), () => {
    getFilteredPrompts(inputValue());
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$b();
  var div = first_child(fragment);
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var text$1 = text();
      template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Suggested")))]);
      append($$anchor2, text$1);
    };
    var alternate = ($$anchor2) => {
      var div_1 = root_2$9();
      var text_1 = child(div_1);
      reset(div_1);
      template_effect(() => {
        set_class(
          div_1,
          1,
          `flex w-full ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.landingPageMode) === "chat" ? " -mt-1" : "text-center items-center justify-center";
          })) ?? ""}  self-start text-gray-600 dark:text-gray-400`,
          "svelte-6tnq1o"
        );
        set_text(text_1, `${$WEBUI_NAME() ?? ""} ‧ v${WEBUI_VERSION}`);
      });
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (get$1(filteredPrompts), untrack(() => get$1(filteredPrompts).length > 0)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div);
  var div_2 = sibling(div, 2);
  var node_1 = child(div_2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_3 = root_3$9();
      each(div_3, 7, () => get$1(filteredPrompts), (prompt, idx) => prompt.id || `${prompt.content}-${idx}`, ($$anchor3, prompt, idx) => {
        var button = root_4$3();
        var div_4 = child(button);
        var node_2 = child(div_4);
        {
          var consequent_1 = ($$anchor4) => {
            var fragment_2 = root_5$6();
            var div_5 = first_child(fragment_2);
            var text_2 = child(div_5, true);
            reset(div_5);
            var div_6 = sibling(div_5, 2);
            var text_3 = child(div_6, true);
            reset(div_6);
            template_effect(() => {
              set_text(text_2, (get$1(prompt), untrack(() => get$1(prompt).title[0])));
              set_text(text_3, (get$1(prompt), untrack(() => get$1(prompt).title[1])));
            });
            append($$anchor4, fragment_2);
          };
          var alternate_1 = ($$anchor4) => {
            var fragment_3 = root_6$8();
            var div_7 = first_child(fragment_3);
            var text_4 = child(div_7, true);
            reset(div_7);
            var div_8 = sibling(div_7, 2);
            var text_5 = child(div_8, true);
            reset(div_8);
            template_effect(
              ($0) => {
                set_text(text_4, (get$1(prompt), untrack(() => get$1(prompt).content)));
                set_text(text_5, $0);
              },
              [() => ($i18n(), untrack(() => $i18n().t("Prompt")))]
            );
            append($$anchor4, fragment_3);
          };
          if_block(node_2, ($$render) => {
            if (get$1(prompt), untrack(() => get$1(prompt).title && get$1(prompt).title[0] !== "")) $$render(consequent_1);
            else $$render(alternate_1, false);
          });
        }
        reset(div_4);
        reset(button);
        template_effect(() => set_style(button, `animation-delay: ${get$1(idx) * 60}ms`));
        event("click", button, () => onSelect()({ type: "prompt", data: get$1(prompt).content }));
        append($$anchor3, button);
      });
      reset(div_3);
      template_effect(() => set_class(div_3, 1, `max-h-40 overflow-auto scrollbar-none items-start ${className() ?? ""}`, "svelte-6tnq1o"));
      append($$anchor2, div_3);
    };
    if_block(node_1, ($$render) => {
      if (get$1(filteredPrompts), untrack(() => get$1(filteredPrompts).length > 0)) $$render(consequent_2);
    });
  }
  reset(div_2);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$8 = from_html(`<button>')
                                                        )}
                                                        placement="right"
                                                > <img class=" size-[2.7rem] rounded-full border-[1px] border-gray-100 dark:border-none" alt="logo" draggable="false"/></button>`);
var root_3$8 = from_html(`<div class="flex items-center gap-2 text-gray-500 text-lg mt-2 w-fit"> </div>`);
var root_8$6 = from_html(`<a> </a>`);
var root_7$6 = from_html(`<div class="mt-0.5 text-sm font-normal text-gray-400 dark:text-gray-500">By <!></div>`);
var root_6$7 = from_html(`<div class="mt-0.5 text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-3 markdown"><!></div> <!>`, 1);
var root_10$4 = from_html(`<div class=" text-gray-400 dark:text-gray-500 line-clamp-1 font-p"> </div>`);
var root_1$7 = from_html(`<div class="m-auto w-full max-w-6xl px-8 lg:px-20"><div class="flex justify-start"><div class="flex -space-x-4 mb-0.5"></div></div> <!> <div class=" mt-2 mb-4 text-3xl text-gray-800 dark:text-gray-100 text-left flex items-center gap-4 font-primary"><div><div class=" capitalize line-clamp-1"><!></div> <div><!></div></div></div> <div class=" w-full font-primary"><!></div></div>`);
function ChatPlaceholder($$anchor, $$props) {
  push($$props, false);
  const $_models = () => store_get(models, "$_models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let modelIds = prop($$props, "modelIds", 24, () => []);
  let models$1 = prop($$props, "models", 28, () => []);
  let atSelectedModel = prop($$props, "atSelectedModel", 8);
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let mounted = mutable_source(false);
  let selectedModelIdx = mutable_source(0);
  onMount(() => {
    set(mounted, true);
  });
  legacy_pre_effect(() => (deep_read_state(modelIds()), $_models()), () => {
    models$1(modelIds().map((id) => $_models().find((m) => m.id === id)));
  });
  legacy_pre_effect(() => (deep_read_state(modelIds()), deep_read_state(models$1())), () => {
    if (modelIds().length > 0) {
      set(selectedModelIdx, models$1().length - 1);
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get$1(mounted), ($$anchor2) => {
    var div = root_1$7();
    var div_1 = child(div);
    var div_2 = child(div_1);
    each(div_2, 5, models$1, index, ($$anchor3, model, modelIdx) => {
      var button = root_2$8();
      var img = sibling(child(button));
      reset(button);
      template_effect(() => set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL$1), get$1(model), $i18n(), untrack(() => {
        var _a;
        return `${WEBUI_API_BASE_URL$1}/models/model/profile/image?id=${(_a = get$1(model)) == null ? void 0 : _a.id}&lang=${$i18n().language}`;
      }))));
      event("click", button, () => {
        set(selectedModelIdx, modelIdx);
      });
      append($$anchor3, button);
    });
    reset(div_2);
    reset(div_1);
    var node_1 = sibling(div_1, 2);
    {
      var consequent = ($$anchor3) => {
        var div_3 = root_3$8();
        var text2 = child(div_3, true);
        reset(div_3);
        template_effect(($0) => set_text(text2, $0), [
          () => ($i18n(), untrack(() => $i18n().t("Temporary Chat")))
        ]);
        append($$anchor3, div_3);
      };
      if_block(node_1, ($$render) => {
        if ($temporaryChatEnabled()) $$render(consequent);
      });
    }
    var div_4 = sibling(node_1, 2);
    var div_5 = child(div_4);
    var div_6 = child(div_5);
    var node_2 = child(div_6);
    {
      var consequent_1 = ($$anchor3) => {
        var text_1 = text();
        template_effect(() => set_text(text_1, (deep_read_state(models$1()), get$1(selectedModelIdx), untrack(() => {
          var _a;
          return (_a = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _a.name;
        }))));
        append($$anchor3, text_1);
      };
      var alternate = ($$anchor3) => {
        var text_2 = text();
        template_effect(($0) => set_text(text_2, $0), [
          () => ($i18n(), $user(), untrack(() => {
            var _a;
            return $i18n().t("Hello, {{name}}", { name: (_a = $user()) == null ? void 0 : _a.name });
          }))
        ]);
        append($$anchor3, text_2);
      };
      if_block(node_2, ($$render) => {
        if (deep_read_state(models$1()), get$1(selectedModelIdx), untrack(() => {
          var _a;
          return (_a = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _a.name;
        })) $$render(consequent_1);
        else $$render(alternate, false);
      });
    }
    reset(div_6);
    var div_7 = sibling(div_6, 2);
    var node_3 = child(div_7);
    {
      var consequent_4 = ($$anchor3) => {
        var fragment_3 = root_6$7();
        var div_8 = first_child(fragment_3);
        var node_4 = child(div_8);
        html(node_4, () => (deep_read_state(marked), deep_read_state(sanitizeResponseContent), deep_read_state(models$1()), get$1(selectedModelIdx), untrack(() => {
          var _a, _b, _c;
          return marked.parse(sanitizeResponseContent((_c = (_b = (_a = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description).replaceAll("\n", "<br>"));
        })));
        reset(div_8);
        var node_5 = sibling(div_8, 2);
        {
          var consequent_3 = ($$anchor4) => {
            var div_9 = root_7$6();
            var node_6 = sibling(child(div_9));
            {
              var consequent_2 = ($$anchor5) => {
                var a = root_8$6();
                var text_3 = child(a, true);
                reset(a);
                template_effect(() => {
                  set_attribute(a, "href", `https://openwebui.com/m/${(deep_read_state(models$1()), get$1(selectedModelIdx), untrack(() => {
                    var _a, _b, _c;
                    return (_c = (_b = (_a = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.username;
                  })) ?? ""}`);
                  set_text(text_3, (deep_read_state(models$1()), get$1(selectedModelIdx), untrack(() => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
                    return ((_c = (_b = (_a = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.name) ? (_f = (_e = (_d = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _d.info) == null ? void 0 : _e.meta) == null ? void 0 : _f.user.name : `@${(_i = (_h = (_g = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _g.info) == null ? void 0 : _h.meta) == null ? void 0 : _i.user.username}`;
                  })));
                });
                append($$anchor5, a);
              };
              var alternate_1 = ($$anchor5) => {
                var text_4 = text();
                template_effect(() => set_text(text_4, (deep_read_state(models$1()), get$1(selectedModelIdx), untrack(() => {
                  var _a, _b, _c;
                  return (_c = (_b = (_a = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.name;
                }))));
                append($$anchor5, text_4);
              };
              if_block(node_6, ($$render) => {
                if (deep_read_state(models$1()), get$1(selectedModelIdx), untrack(() => {
                  var _a, _b, _c;
                  return (_c = (_b = (_a = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.community;
                })) $$render(consequent_2);
                else $$render(alternate_1, false);
              });
            }
            reset(div_9);
            append($$anchor4, div_9);
          };
          if_block(node_5, ($$render) => {
            if (deep_read_state(models$1()), get$1(selectedModelIdx), untrack(() => {
              var _a, _b, _c;
              return (_c = (_b = (_a = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user;
            })) $$render(consequent_3);
          });
        }
        append($$anchor3, fragment_3);
      };
      var alternate_2 = ($$anchor3) => {
        var div_10 = root_10$4();
        var text_5 = child(div_10, true);
        reset(div_10);
        template_effect(($0) => set_text(text_5, $0), [
          () => ($i18n(), untrack(() => $i18n().t("How can I help you today?")))
        ]);
        append($$anchor3, div_10);
      };
      if_block(node_3, ($$render) => {
        if (deep_read_state(models$1()), get$1(selectedModelIdx), untrack(() => {
          var _a, _b, _c;
          return ((_c = (_b = (_a = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description) ?? null;
        })) $$render(consequent_4);
        else $$render(alternate_2, false);
      });
    }
    reset(div_7);
    reset(div_5);
    reset(div_4);
    var div_11 = sibling(div_4, 2);
    var node_7 = child(div_11);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(atSelectedModel()), deep_read_state(models$1()), get$1(selectedModelIdx), $config(), untrack(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        return ((_c = (_b = (_a = atSelectedModel()) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.suggestion_prompts) ?? ((_f = (_e = (_d = models$1()[get$1(selectedModelIdx)]) == null ? void 0 : _d.info) == null ? void 0 : _e.meta) == null ? void 0 : _f.suggestion_prompts) ?? ((_g = $config()) == null ? void 0 : _g.default_prompt_suggestions) ?? [];
      })));
      Suggestions(node_7, {
        className: "grid grid-cols-2",
        get suggestionPrompts() {
          return get$1($0);
        },
        get onSelect() {
          return onSelect();
        }
      });
    }
    reset(div_11);
    reset(div);
    transition(1, div_2, () => fade, () => ({ duration: 200 }));
    transition(1, div_6, () => fade, () => ({ duration: 200 }));
    transition(1, div_7, () => fade, () => ({ duration: 200, delay: 200 }));
    transition(1, div_11, () => fade, () => ({ duration: 200, delay: 300 }));
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_5$5 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_7$5 = from_html(`<div class="  pb-6"></div>`);
var root_3$7 = from_html(`<section class="w-full" aria-labelledby="chat-conversation"><h2 class="sr-only" id="chat-conversation"> </h2> <!> <ul role="log" aria-live="polite" aria-relevant="additions" aria-atomic="false"></ul></section> <div class="pb-18"></div> <!>`, 1);
var root_2$7 = from_html(`<div class="w-full pt-2"><!></div>`);
var root$a = from_html(`<div><!></div>`);
function Messages($$anchor, $$props) {
  push($$props, false);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  createEventDispatcher();
  const i18n = getContext("i18n");
  let className = prop($$props, "className", 8, "h-full flex pt-8");
  let chatId2 = prop($$props, "chatId", 8, "");
  let history = prop($$props, "history", 28, () => ({}));
  let selectedModels = prop($$props, "selectedModels", 8);
  let atSelectedModel = prop($$props, "atSelectedModel", 8);
  let messages = mutable_source([]);
  let setInputText = prop($$props, "setInputText", 8, () => {
  });
  let sendMessage = prop($$props, "sendMessage", 8);
  let continueResponse = prop($$props, "continueResponse", 8);
  let regenerateResponse = prop($$props, "regenerateResponse", 8);
  let chatActionHandler = prop($$props, "chatActionHandler", 8);
  let showMessage = prop($$props, "showMessage", 8, () => {
  });
  let submitMessage = prop($$props, "submitMessage", 8, () => {
  });
  let addMessages = prop($$props, "addMessages", 8, () => {
  });
  let readOnly = prop($$props, "readOnly", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let bottomPadding = prop($$props, "bottomPadding", 8, false);
  let autoScroll = prop($$props, "autoScroll", 12);
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let messagesCount = prop($$props, "messagesCount", 12, 20);
  let messagesLoading = mutable_source(false);
  const loadMoreMessages = async () => {
    const element2 = document.getElementById("messages-container");
    element2.scrollTop = element2.scrollTop + 100;
    set(messagesLoading, true);
    messagesCount(messagesCount() + 20);
    await tick();
    set(messagesLoading, false);
  };
  const scrollToBottom = () => {
    const element2 = document.getElementById("messages-container");
    element2.scrollTop = element2.scrollHeight;
  };
  const updateChat = async () => {
    if (!$temporaryChatEnabled()) {
      history(history());
      await tick();
      await updateChatById("static-token", chatId2(), { history: history(), messages: get$1(messages) });
      currentChatPage.set(1);
      await chats.set([]);
    }
  };
  const gotoMessage = async (message, idx) => {
    var _a;
    let siblings;
    if (message.parentId !== null) {
      siblings = history().messages[message.parentId].childrenIds;
    } else {
      siblings = Object.values(history().messages).filter((msg) => msg.parentId === null).map((msg) => msg.id);
    }
    idx = Math.max(0, Math.min(idx, siblings.length - 1));
    let messageId = siblings[idx];
    if (message.id !== messageId) {
      let messageChildrenIds = history().messages[messageId].childrenIds;
      while (messageChildrenIds.length !== 0) {
        messageId = messageChildrenIds.at(-1);
        messageChildrenIds = history().messages[messageId].childrenIds;
      }
      history(history().currentId = messageId, true);
    }
    await tick();
    if (((_a = $settings()) == null ? void 0 : _a.scrollOnBranchChange) ?? true) {
      const element2 = document.getElementById("messages-container");
      autoScroll(element2.scrollHeight - element2.scrollTop <= element2.clientHeight + 50);
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  const showPreviousMessage = async (message) => {
    var _a;
    if (message.parentId !== null) {
      let messageId = history().messages[message.parentId].childrenIds[Math.max(history().messages[message.parentId].childrenIds.indexOf(message.id) - 1, 0)];
      if (message.id !== messageId) {
        let messageChildrenIds = history().messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history().messages[messageId].childrenIds;
        }
        history(history().currentId = messageId, true);
      }
    } else {
      let childrenIds = Object.values(history().messages).filter((message2) => message2.parentId === null).map((message2) => message2.id);
      let messageId = childrenIds[Math.max(childrenIds.indexOf(message.id) - 1, 0)];
      if (message.id !== messageId) {
        let messageChildrenIds = history().messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history().messages[messageId].childrenIds;
        }
        history(history().currentId = messageId, true);
      }
    }
    await tick();
    if (((_a = $settings()) == null ? void 0 : _a.scrollOnBranchChange) ?? true) {
      const element2 = document.getElementById("messages-container");
      autoScroll(element2.scrollHeight - element2.scrollTop <= element2.clientHeight + 50);
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  const showNextMessage = async (message) => {
    var _a;
    if (message.parentId !== null) {
      let messageId = history().messages[message.parentId].childrenIds[Math.min(history().messages[message.parentId].childrenIds.indexOf(message.id) + 1, history().messages[message.parentId].childrenIds.length - 1)];
      if (message.id !== messageId) {
        let messageChildrenIds = history().messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history().messages[messageId].childrenIds;
        }
        history(history().currentId = messageId, true);
      }
    } else {
      let childrenIds = Object.values(history().messages).filter((message2) => message2.parentId === null).map((message2) => message2.id);
      let messageId = childrenIds[Math.min(childrenIds.indexOf(message.id) + 1, childrenIds.length - 1)];
      if (message.id !== messageId) {
        let messageChildrenIds = history().messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history().messages[messageId].childrenIds;
        }
        history(history().currentId = messageId, true);
      }
    }
    await tick();
    if (((_a = $settings()) == null ? void 0 : _a.scrollOnBranchChange) ?? true) {
      const element2 = document.getElementById("messages-container");
      autoScroll(element2.scrollHeight - element2.scrollTop <= element2.clientHeight + 50);
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  const rateMessage = async (messageId, rating) => {
    history(history().messages[messageId].annotation = { ...history().messages[messageId].annotation, rating }, true);
    await updateChat();
  };
  const editMessage = async (messageId, { content, files }, submit = true) => {
    if ((selectedModels() ?? []).filter((id) => id).length === 0) {
      toast.error($i18n().t("Model not selected"));
      return;
    }
    if (history().messages[messageId].role === "user") {
      if (submit) {
        let userPrompt = content;
        let userMessageId = v4();
        let userMessage = {
          id: userMessageId,
          parentId: history().messages[messageId].parentId,
          childrenIds: [],
          role: "user",
          content: userPrompt,
          ...files && { files },
          models: selectedModels(),
          timestamp: Math.floor(Date.now() / 1e3)
          // Unix epoch
        };
        let messageParentId = history().messages[messageId].parentId;
        if (messageParentId !== null) {
          history(
            history().messages[messageParentId].childrenIds = [
              ...history().messages[messageParentId].childrenIds,
              userMessageId
            ],
            true
          );
        }
        history(history().messages[userMessageId] = userMessage, true);
        history(history().currentId = userMessageId, true);
        await tick();
        await sendMessage()(history(), userMessageId);
      } else {
        history(history().messages[messageId].content = content, true);
        history(history().messages[messageId].files = files, true);
        await updateChat();
      }
    } else {
      if (submit) {
        const responseMessageId = v4();
        const message = history().messages[messageId];
        const parentId = message.parentId;
        const responseMessage = {
          ...message,
          id: responseMessageId,
          parentId,
          childrenIds: [],
          files: void 0,
          content,
          timestamp: Math.floor(Date.now() / 1e3)
          // Unix epoch
        };
        history(history().messages[responseMessageId] = responseMessage, true);
        history(history().currentId = responseMessageId, true);
        if (parentId !== null) {
          history(
            history().messages[parentId].childrenIds = [
              ...history().messages[parentId].childrenIds,
              responseMessageId
            ],
            true
          );
        }
        await updateChat();
      } else {
        history(history().messages[messageId].originalContent = history().messages[messageId].content, true);
        history(history().messages[messageId].content = content, true);
        await updateChat();
      }
    }
  };
  const actionMessage = async (actionId, message, event2 = null) => {
    await chatActionHandler()(chatId2(), actionId, message.model, message.id, event2);
  };
  const saveMessage = async (messageId, message) => {
    history(history().messages[messageId] = message, true);
    await updateChat();
  };
  const deleteMessage = async (messageId) => {
    const messageToDelete = history().messages[messageId];
    const parentMessageId = messageToDelete.parentId;
    const childMessageIds = messageToDelete.childrenIds ?? [];
    const grandchildrenIds = childMessageIds.flatMap((childId) => {
      var _a;
      return ((_a = history().messages[childId]) == null ? void 0 : _a.childrenIds) ?? [];
    });
    if (parentMessageId && history().messages[parentMessageId]) {
      history(
        history().messages[parentMessageId].childrenIds = [
          ...history().messages[parentMessageId].childrenIds.filter((id) => id !== messageId),
          ...grandchildrenIds
        ],
        true
      );
    }
    grandchildrenIds.forEach((grandchildId) => {
      if (history().messages[grandchildId]) {
        history(history().messages[grandchildId].parentId = parentMessageId, true);
      }
    });
    [messageId, ...childMessageIds].forEach((id) => {
      delete history().messages[id];
    });
    await tick();
    showMessage()({ id: parentMessageId });
    await updateChat();
  };
  legacy_pre_effect(
    () => (deep_read_state(history()), deep_read_state(messagesCount())),
    () => {
      if (history().currentId) {
        let _messages = [];
        let message = history().messages[history().currentId];
        while (message && (messagesCount() !== null ? _messages.length <= messagesCount() : true)) {
          _messages.unshift({ ...message });
          message = message.parentId !== null ? history().messages[message.parentId] : null;
        }
        set(messages, _messages);
      } else {
        set(messages, []);
      }
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(autoScroll()), deep_read_state(bottomPadding()), tick),
    () => {
      if (autoScroll() && bottomPadding()) {
        (async () => {
          await tick();
          scrollToBottom();
        })();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var div = root$a();
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      ChatPlaceholder($$anchor2, {
        get modelIds() {
          return selectedModels();
        },
        get atSelectedModel() {
          return atSelectedModel();
        },
        get onSelect() {
          return onSelect();
        }
      });
    };
    var alternate = ($$anchor2) => {
      var div_1 = root_2$7();
      var node_1 = child(div_1);
      key(node_1, chatId2, ($$anchor3) => {
        var fragment_1 = root_3$7();
        var section = first_child(fragment_1);
        var h2 = child(section);
        var text2 = child(h2, true);
        reset(h2);
        var node_2 = sibling(h2, 2);
        {
          var consequent_1 = ($$anchor4) => {
            Loader($$anchor4, {
              $$events: {
                visible: (e) => {
                  if (!get$1(messagesLoading)) {
                    loadMoreMessages();
                  }
                }
              },
              children: ($$anchor5, $$slotProps) => {
                var div_2 = root_5$5();
                var node_3 = child(div_2);
                Spinner(node_3, { className: " size-4" });
                var div_3 = sibling(node_3, 2);
                var text_1 = child(div_3, true);
                reset(div_3);
                reset(div_2);
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                append($$anchor5, div_2);
              },
              $$slots: { default: true }
            });
          };
          if_block(node_2, ($$render) => {
            if (get$1(messages), untrack(() => {
              var _a;
              return ((_a = get$1(messages).at(0)) == null ? void 0 : _a.parentId) !== null;
            })) $$render(consequent_1);
          });
        }
        var ul = sibling(node_2, 2);
        each(ul, 7, () => get$1(messages), (message) => message.id, ($$anchor4, message) => {
          Message($$anchor4, {
            get chatId() {
              return chatId2();
            },
            get selectedModels() {
              return selectedModels();
            },
            get messageId() {
              return get$1(message), untrack(() => get$1(message).id);
            },
            get setInputText() {
              return setInputText();
            },
            gotoMessage,
            showPreviousMessage,
            showNextMessage,
            updateChat,
            editMessage,
            deleteMessage,
            rateMessage,
            actionMessage,
            saveMessage,
            get submitMessage() {
              return submitMessage();
            },
            get regenerateResponse() {
              return regenerateResponse();
            },
            get continueResponse() {
              return continueResponse();
            },
            get addMessages() {
              return addMessages();
            },
            get readOnly() {
              return readOnly();
            },
            get editCodeBlock() {
              return editCodeBlock();
            },
            get topPadding() {
              return topPadding();
            },
            get history() {
              return history();
            },
            set history($$value) {
              history($$value);
            },
            $$legacy: true
          });
        });
        reset(ul);
        reset(section);
        var node_4 = sibling(section, 4);
        {
          var consequent_2 = ($$anchor4) => {
            var div_4 = root_7$5();
            append($$anchor4, div_4);
          };
          if_block(node_4, ($$render) => {
            if (bottomPadding()) $$render(consequent_2);
          });
        }
        template_effect(($0) => set_text(text2, $0), [
          () => ($i18n(), untrack(() => $i18n().t("Chat Conversation")))
        ]);
        append($$anchor3, fragment_1);
      });
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(history()), untrack(() => {
        var _a;
        return Object.keys(((_a = history()) == null ? void 0 : _a.messages) ?? {}).length == 0;
      })) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div);
  template_effect(() => set_class(div, 1, clsx(className())));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function safeOnDestroy(fn) {
  try {
    onDestroy(fn);
  } catch {
    return fn();
  }
}
function derivedWithUnsubscribe(stores, fn) {
  let unsubscribers = [];
  const onUnsubscribe = (cb) => {
    unsubscribers.push(cb);
  };
  const unsubscribe = () => {
    unsubscribers.forEach((fn2) => fn2());
    unsubscribers = [];
  };
  const derivedStore = derived(stores, ($storeValues) => {
    unsubscribe();
    return fn($storeValues, onUnsubscribe);
  });
  safeOnDestroy(unsubscribe);
  const subscribe = (...args) => {
    const unsub = derivedStore.subscribe(...args);
    return () => {
      unsub();
      unsubscribe();
    };
  };
  return {
    ...derivedStore,
    subscribe
  };
}
function clientEffect(stores, fn) {
  if (!isBrowser)
    return () => {
    };
  const unsub = derivedWithUnsubscribe(stores, (stores2, onUnsubscribe) => {
    return {
      stores: stores2,
      onUnsubscribe
    };
  }).subscribe(({ stores: stores2, onUnsubscribe }) => {
    const returned = fn(stores2);
    if (returned) {
      onUnsubscribe(returned);
    }
  });
  safeOnDestroy(unsub);
  return unsub;
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key2) => {
    const propertyKey = key2;
    const value = properties[propertyKey];
    result[propertyKey] = writable(value);
  });
  return result;
}
function getOptionUpdater(options) {
  return function(key2, value) {
    if (value === void 0)
      return;
    const store = options[key2];
    if (store) {
      store.set(value);
    }
  };
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key2) => {
    if (style[key2] === void 0)
      return str;
    return str + `${key2}:${style[key2]};`;
  }, "");
}
let currentState = null;
let element = null;
function getCursorStyle(state2) {
  switch (state2) {
    case "horizontal":
      return "ew-resize";
    case "horizontal-max":
      return "w-resize";
    case "horizontal-min":
      return "e-resize";
    case "vertical":
      return "ns-resize";
    case "vertical-max":
      return "n-resize";
    case "vertical-min":
      return "s-resize";
  }
}
function resetGlobalCursorStyle() {
  if (element === null)
    return;
  document.head.removeChild(element);
  currentState = null;
  element = null;
}
function setGlobalCursorStyle(state2) {
  if (currentState === state2)
    return;
  currentState = state2;
  const style = getCursorStyle(state2);
  if (element === null) {
    element = document.createElement("style");
    document.head.appendChild(element);
  }
  element.innerHTML = `*{cursor: ${style}!important;}`;
}
function computePaneFlexBoxStyle({ defaultSize, dragState, layout, paneData, paneIndex, precision = 3 }) {
  const size = layout[paneIndex];
  let flexGrow;
  if (size == null) {
    flexGrow = defaultSize ?? "1";
  } else if (paneData.length === 1) {
    flexGrow = "1";
  } else {
    flexGrow = size.toPrecision(precision);
  }
  return styleToString({
    "flex-basis": 0,
    "flex-grow": flexGrow,
    "flex-shrink": 1,
    // Without this, pane sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a pane during resize
    // This avoid edge cases like nested iframes
    "pointer-events": dragState !== null ? "none" : void 0
  });
}
function calculateAriaValues({ layout, panesArray, pivotIndices }) {
  let currentMinSize = 0;
  let currentMaxSize = 100;
  let totalMinSize = 0;
  let totalMaxSize = 0;
  const firstIndex = pivotIndices[0];
  for (let i = 0; i < panesArray.length; i++) {
    const { constraints } = panesArray[i];
    const { maxSize = 100, minSize = 0 } = constraints;
    if (i === firstIndex) {
      currentMinSize = minSize;
      currentMaxSize = maxSize;
    } else {
      totalMinSize += minSize;
      totalMaxSize += maxSize;
    }
  }
  const valueMax = Math.min(currentMaxSize, 100 - totalMinSize);
  const valueMin = Math.max(currentMinSize, 100 - totalMaxSize);
  const valueNow = layout[firstIndex];
  return {
    valueMax,
    valueMin,
    valueNow
  };
}
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let nanoid = (size = 21) => {
  let id = "";
  let i = size | 0;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
function generateId(idFromProps = null) {
  if (idFromProps == null)
    return nanoid(10);
  return idFromProps;
}
const LOCAL_STORAGE_DEBOUNCE_INTERVAL = 100;
const PRECISION = 10;
function initializeStorage(storageObject) {
  try {
    if (typeof localStorage === "undefined") {
      throw new Error("localStorage is not supported in this environment");
    }
    storageObject.getItem = (name) => localStorage.getItem(name);
    storageObject.setItem = (name, value) => localStorage.setItem(name, value);
  } catch (err) {
    console.error(err);
    storageObject.getItem = () => null;
    storageObject.setItem = () => {
    };
  }
}
function getPaneGroupKey(autoSaveId) {
  return `paneforge:${autoSaveId}`;
}
function getPaneKey(panes) {
  const sortedPaneIds = panes.map((pane) => {
    const { constraints, id, idIsFromProps, order } = pane;
    return idIsFromProps ? id : order ? `${order}:${JSON.stringify(constraints)}` : JSON.stringify(constraints);
  }).sort().join(",");
  return sortedPaneIds;
}
function loadSerializedPaneGroupState(autoSaveId, storage) {
  try {
    const paneGroupKey = getPaneGroupKey(autoSaveId);
    const serialized = storage.getItem(paneGroupKey);
    const parsed = JSON.parse(serialized || "");
    if (typeof parsed === "object" && parsed !== null) {
      return parsed;
    }
  } catch {
  }
  return null;
}
function loadPaneGroupState(autoSaveId, panes, storage) {
  const state2 = loadSerializedPaneGroupState(autoSaveId, storage) || {};
  const paneKey = getPaneKey(panes);
  return state2[paneKey] || null;
}
function savePaneGroupState(autoSaveId, panes, paneSizesBeforeCollapse, sizes, storage) {
  const paneGroupKey = getPaneGroupKey(autoSaveId);
  const paneKey = getPaneKey(panes);
  const state2 = loadSerializedPaneGroupState(autoSaveId, storage) || {};
  state2[paneKey] = {
    expandToSizes: Object.fromEntries(paneSizesBeforeCollapse.entries()),
    layout: sizes
  };
  try {
    storage.setItem(paneGroupKey, JSON.stringify(state2));
  } catch (error) {
    console.error(error);
  }
}
const debounceMap = {};
function debounce(callback, durationMs = 10) {
  let timeoutId = null;
  const callable = (...args) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, durationMs);
  };
  return callable;
}
function updateStorageValues({ autoSaveId, layout, storage, paneDataArrayStore, paneSizeBeforeCollapseStore }) {
  const $paneDataArray = get$2(paneDataArrayStore);
  if (layout.length === 0 || layout.length !== $paneDataArray.length)
    return;
  let debouncedSave = debounceMap[autoSaveId];
  if (debouncedSave == null) {
    debouncedSave = debounce(savePaneGroupState, LOCAL_STORAGE_DEBOUNCE_INTERVAL);
    debounceMap[autoSaveId] = debouncedSave;
  }
  const clonedPaneDataArray = [...$paneDataArray];
  const $paneSizeBeforeCollapse = get$2(paneSizeBeforeCollapseStore);
  const clonedPaneSizesBeforeCollapse = new Map($paneSizeBeforeCollapse);
  debouncedSave(autoSaveId, clonedPaneDataArray, clonedPaneSizesBeforeCollapse, layout, storage);
}
function removeUndefined(obj) {
  const result = {};
  for (const key2 in obj) {
    const value = obj[key2];
    if (value !== void 0) {
      result[key2] = value;
    }
  }
  return result;
}
function chain(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function addEventListener(target, event2, handler, options) {
  const events = Array.isArray(event2) ? event2 : [event2];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function areNumbersAlmostEqual(actual, expected, fractionDigits = PRECISION) {
  return compareNumbersWithTolerance(actual, expected, fractionDigits) === 0;
}
function compareNumbersWithTolerance(actual, expected, fractionDigits = PRECISION) {
  const roundedActual = roundTo(actual, fractionDigits);
  const roundedExpected = roundTo(expected, fractionDigits);
  return Math.sign(roundedActual - roundedExpected);
}
function areArraysEqual(arrA, arrB) {
  if (arrA.length !== arrB.length)
    return false;
  for (let index2 = 0; index2 < arrA.length; index2++) {
    if (arrA[index2] !== arrB[index2])
      return false;
  }
  return true;
}
function roundTo(value, decimals) {
  return parseFloat(value.toFixed(decimals));
}
function assert(expectedCondition, message = "Assertion failed!") {
  if (!expectedCondition) {
    console.error(message);
    throw Error(message);
  }
}
function resizePane({ paneConstraints: paneConstraintsArray, paneIndex, initialSize }) {
  const paneConstraints = paneConstraintsArray[paneIndex];
  assert(paneConstraints != null, "Pane constraints should not be null.");
  const { collapsedSize = 0, collapsible, maxSize = 100, minSize = 0 } = paneConstraints;
  let newSize = initialSize;
  if (compareNumbersWithTolerance(newSize, minSize) < 0) {
    newSize = getAdjustedSizeForCollapsible(newSize, collapsible, collapsedSize, minSize);
  }
  newSize = Math.min(maxSize, newSize);
  return parseFloat(newSize.toFixed(PRECISION));
}
function getAdjustedSizeForCollapsible(size, collapsible, collapsedSize, minSize) {
  if (!collapsible)
    return minSize;
  const halfwayPoint = (collapsedSize + minSize) / 2;
  return compareNumbersWithTolerance(size, halfwayPoint) < 0 ? collapsedSize : minSize;
}
function adjustLayoutByDelta({ delta, layout: prevLayout, paneConstraints: paneConstraintsArray, pivotIndices, trigger }) {
  if (areNumbersAlmostEqual(delta, 0))
    return prevLayout;
  const nextLayout = [...prevLayout];
  const [firstPivotIndex, secondPivotIndex] = pivotIndices;
  let deltaApplied = 0;
  {
    if (trigger === "keyboard") {
      {
        const index2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
        const paneConstraints = paneConstraintsArray[index2];
        assert(paneConstraints);
        if (paneConstraints.collapsible) {
          const prevSize = prevLayout[index2];
          assert(prevSize != null);
          const paneConstraints2 = paneConstraintsArray[index2];
          assert(paneConstraints2);
          const { collapsedSize = 0, minSize = 0 } = paneConstraints2;
          if (areNumbersAlmostEqual(prevSize, collapsedSize)) {
            const localDelta = minSize - prevSize;
            if (compareNumbersWithTolerance(localDelta, Math.abs(delta)) > 0) {
              delta = delta < 0 ? 0 - localDelta : localDelta;
            }
          }
        }
      }
      {
        const index2 = delta < 0 ? firstPivotIndex : secondPivotIndex;
        const paneConstraints = paneConstraintsArray[index2];
        assert(paneConstraints);
        const { collapsible } = paneConstraints;
        if (collapsible) {
          const prevSize = prevLayout[index2];
          assert(prevSize != null);
          const paneConstraints2 = paneConstraintsArray[index2];
          assert(paneConstraints2);
          const { collapsedSize = 0, minSize = 0 } = paneConstraints2;
          if (areNumbersAlmostEqual(prevSize, minSize)) {
            const localDelta = prevSize - collapsedSize;
            if (compareNumbersWithTolerance(localDelta, Math.abs(delta)) > 0) {
              delta = delta < 0 ? 0 - localDelta : localDelta;
            }
          }
        }
      }
    }
  }
  {
    const increment = delta < 0 ? 1 : -1;
    let index2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
    let maxAvailableDelta = 0;
    while (true) {
      const prevSize = prevLayout[index2];
      assert(prevSize != null);
      const maxSafeSize = resizePane({
        paneConstraints: paneConstraintsArray,
        paneIndex: index2,
        initialSize: 100
      });
      const delta2 = maxSafeSize - prevSize;
      maxAvailableDelta += delta2;
      index2 += increment;
      if (index2 < 0 || index2 >= paneConstraintsArray.length) {
        break;
      }
    }
    const minAbsDelta = Math.min(Math.abs(delta), Math.abs(maxAvailableDelta));
    delta = delta < 0 ? 0 - minAbsDelta : minAbsDelta;
  }
  {
    const pivotIndex = delta < 0 ? firstPivotIndex : secondPivotIndex;
    let index2 = pivotIndex;
    while (index2 >= 0 && index2 < paneConstraintsArray.length) {
      const deltaRemaining = Math.abs(delta) - Math.abs(deltaApplied);
      const prevSize = prevLayout[index2];
      assert(prevSize != null);
      const unsafeSize = prevSize - deltaRemaining;
      const safeSize = resizePane({
        paneConstraints: paneConstraintsArray,
        paneIndex: index2,
        initialSize: unsafeSize
      });
      if (!areNumbersAlmostEqual(prevSize, safeSize)) {
        deltaApplied += prevSize - safeSize;
        nextLayout[index2] = safeSize;
        if (deltaApplied.toPrecision(3).localeCompare(Math.abs(delta).toPrecision(3), void 0, {
          numeric: true
        }) >= 0) {
          break;
        }
      }
      if (delta < 0) {
        index2--;
      } else {
        index2++;
      }
    }
  }
  if (areNumbersAlmostEqual(deltaApplied, 0)) {
    return prevLayout;
  }
  {
    const pivotIndex = delta < 0 ? secondPivotIndex : firstPivotIndex;
    const prevSize = prevLayout[pivotIndex];
    assert(prevSize != null);
    const unsafeSize = prevSize + deltaApplied;
    const safeSize = resizePane({
      paneConstraints: paneConstraintsArray,
      paneIndex: pivotIndex,
      initialSize: unsafeSize
    });
    nextLayout[pivotIndex] = safeSize;
    if (!areNumbersAlmostEqual(safeSize, unsafeSize)) {
      let deltaRemaining = unsafeSize - safeSize;
      const pivotIndex2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
      let index2 = pivotIndex2;
      while (index2 >= 0 && index2 < paneConstraintsArray.length) {
        const prevSize2 = nextLayout[index2];
        assert(prevSize2 != null);
        const unsafeSize2 = prevSize2 + deltaRemaining;
        const safeSize2 = resizePane({
          paneConstraints: paneConstraintsArray,
          paneIndex: index2,
          initialSize: unsafeSize2
        });
        if (!areNumbersAlmostEqual(prevSize2, safeSize2)) {
          deltaRemaining -= safeSize2 - prevSize2;
          nextLayout[index2] = safeSize2;
        }
        if (areNumbersAlmostEqual(deltaRemaining, 0))
          break;
        delta > 0 ? index2-- : index2++;
      }
    }
  }
  const totalSize = nextLayout.reduce((total, size) => size + total, 0);
  if (!areNumbersAlmostEqual(totalSize, 100))
    return prevLayout;
  return nextLayout;
}
const isBrowser = typeof document !== "undefined";
function isHTMLElement(element2) {
  return element2 instanceof HTMLElement;
}
function isKeyDown(event2) {
  return event2.type === "keydown";
}
function isMouseEvent(event2) {
  return event2.type.startsWith("mouse");
}
function isTouchEvent(event2) {
  return event2.type.startsWith("touch");
}
const defaultStorage = {
  getItem: (name) => {
    initializeStorage(defaultStorage);
    return defaultStorage.getItem(name);
  },
  setItem: (name, value) => {
    initializeStorage(defaultStorage);
    defaultStorage.setItem(name, value);
  }
};
const defaultProps = {
  id: null,
  onLayout: null,
  keyboardResizeBy: null,
  autoSaveId: null,
  direction: "horizontal",
  storage: defaultStorage
};
function createPaneForge(props) {
  const withDefaults = {
    ...defaultProps,
    ...removeUndefined(props)
  };
  const options = toWritableStores(withDefaults);
  const { autoSaveId, direction, keyboardResizeBy, storage, onLayout } = options;
  const groupId = writable(generateId());
  const dragState = writable(null);
  const layout = writable([]);
  const paneDataArray = writable([]);
  const paneDataArrayChanged = writable(false);
  const paneIdToLastNotifiedSizeMap = writable({});
  const paneSizeBeforeCollapseMap = writable(/* @__PURE__ */ new Map());
  const prevDelta = writable(0);
  clientEffect([groupId, layout, paneDataArray], ([$groupId, $layout, $paneDataArray]) => {
    const unsub = updateResizeHandleAriaValues({
      groupId: $groupId,
      layout: $layout,
      paneDataArray: $paneDataArray
    });
    return unsub;
  });
  onMount(() => {
    const unsub = setResizeHandlerEventListeners();
    return unsub;
  });
  clientEffect([autoSaveId, layout, storage], ([$autoSaveId, $layout, $storage]) => {
    if (!$autoSaveId)
      return;
    updateStorageValues({
      autoSaveId: $autoSaveId,
      layout: $layout,
      storage: $storage,
      paneDataArrayStore: paneDataArray,
      paneSizeBeforeCollapseStore: paneSizeBeforeCollapseMap
    });
  });
  function collapsePane(paneData) {
    const $prevLayout = get$2(layout);
    const $paneDataArray = get$2(paneDataArray);
    if (!paneData.constraints.collapsible)
      return;
    const paneConstraintsArray = $paneDataArray.map((paneData2) => paneData2.constraints);
    const { collapsedSize = 0, paneSize, pivotIndices } = paneDataHelper($paneDataArray, paneData, $prevLayout);
    assert(paneSize != null);
    if (paneSize === collapsedSize)
      return;
    paneSizeBeforeCollapseMap.update((curr) => {
      curr.set(paneData.id, paneSize);
      return curr;
    });
    const isLastPane = findPaneDataIndex($paneDataArray, paneData) === $paneDataArray.length - 1;
    const delta = isLastPane ? paneSize - collapsedSize : collapsedSize - paneSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      layout: $prevLayout,
      paneConstraints: paneConstraintsArray,
      pivotIndices,
      trigger: "imperative-api"
    });
    if (areArraysEqual($prevLayout, nextLayout))
      return;
    layout.set(nextLayout);
    const $onLayout = get$2(onLayout);
    if ($onLayout) {
      $onLayout(nextLayout);
    }
    callPaneCallbacks($paneDataArray, nextLayout, get$2(paneIdToLastNotifiedSizeMap));
  }
  function getPaneSize(paneData) {
    const $layout = get$2(layout);
    const $paneDataArray = get$2(paneDataArray);
    const { paneSize } = paneDataHelper($paneDataArray, paneData, $layout);
    return paneSize;
  }
  const getPaneStyle = derived([paneDataArray, layout, dragState], ([$paneDataArray, $layout, $dragState]) => {
    return (paneData, defaultSize) => {
      const paneIndex = findPaneDataIndex($paneDataArray, paneData);
      return computePaneFlexBoxStyle({
        defaultSize,
        dragState: $dragState,
        layout: $layout,
        paneData: $paneDataArray,
        paneIndex
      });
    };
  });
  function isPaneExpanded(paneData) {
    const $paneDataArray = get$2(paneDataArray);
    const $layout = get$2(layout);
    const { collapsedSize = 0, collapsible, paneSize } = paneDataHelper($paneDataArray, paneData, $layout);
    return !collapsible || paneSize > collapsedSize;
  }
  function registerPane(paneData) {
    paneDataArray.update((curr) => {
      const newArr = [...curr, paneData];
      newArr.sort((paneA, paneB) => {
        const orderA = paneA.order;
        const orderB = paneB.order;
        if (orderA == null && orderB == null) {
          return 0;
        } else if (orderA == null) {
          return -1;
        } else if (orderB == null) {
          return 1;
        } else {
          return orderA - orderB;
        }
      });
      return newArr;
    });
    paneDataArrayChanged.set(true);
  }
  clientEffect([paneDataArrayChanged], ([$paneDataArrayChanged]) => {
    if (!$paneDataArrayChanged)
      return;
    paneDataArrayChanged.set(false);
    const $autoSaveId = get$2(autoSaveId);
    const $storage = get$2(storage);
    const $prevLayout = get$2(layout);
    const $paneDataArray = get$2(paneDataArray);
    let unsafeLayout = null;
    if ($autoSaveId) {
      const state2 = loadPaneGroupState($autoSaveId, $paneDataArray, $storage);
      if (state2) {
        paneSizeBeforeCollapseMap.set(new Map(Object.entries(state2.expandToSizes)));
        unsafeLayout = state2.layout;
      }
    }
    if (unsafeLayout == null) {
      unsafeLayout = getUnsafeDefaultLayout({
        paneDataArray: $paneDataArray
      });
    }
    const nextLayout = validatePaneGroupLayout({
      layout: unsafeLayout,
      paneConstraints: $paneDataArray.map((paneData) => paneData.constraints)
    });
    if (areArraysEqual($prevLayout, nextLayout))
      return;
    layout.set(nextLayout);
    const $onLayout = get$2(onLayout);
    if ($onLayout) {
      $onLayout(nextLayout);
    }
    callPaneCallbacks($paneDataArray, nextLayout, get$2(paneIdToLastNotifiedSizeMap));
  });
  function registerResizeHandle(dragHandleId) {
    return function resizeHandler(event2) {
      event2.preventDefault();
      const $direction = get$2(direction);
      const $dragState = get$2(dragState);
      const $groupId = get$2(groupId);
      const $keyboardResizeBy = get$2(keyboardResizeBy);
      const $prevLayout = get$2(layout);
      const $paneDataArray = get$2(paneDataArray);
      const { initialLayout } = $dragState ?? {};
      const pivotIndices = getPivotIndices($groupId, dragHandleId);
      let delta = getDeltaPercentage(event2, dragHandleId, $direction, $dragState, $keyboardResizeBy);
      if (delta === 0)
        return;
      const isHorizontal = $direction === "horizontal";
      if (document.dir === "rtl" && isHorizontal) {
        delta = -delta;
      }
      const paneConstraints = $paneDataArray.map((paneData) => paneData.constraints);
      const nextLayout = adjustLayoutByDelta({
        delta,
        layout: initialLayout ?? $prevLayout,
        paneConstraints,
        pivotIndices,
        trigger: isKeyDown(event2) ? "keyboard" : "mouse-or-touch"
      });
      const layoutChanged = !areArraysEqual($prevLayout, nextLayout);
      if (isMouseEvent(event2) || isTouchEvent(event2)) {
        const $prevDelta = get$2(prevDelta);
        if ($prevDelta != delta) {
          prevDelta.set(delta);
          if (!layoutChanged) {
            if (isHorizontal) {
              setGlobalCursorStyle(delta < 0 ? "horizontal-min" : "horizontal-max");
            } else {
              setGlobalCursorStyle(delta < 0 ? "vertical-min" : "vertical-max");
            }
          } else {
            setGlobalCursorStyle(isHorizontal ? "horizontal" : "vertical");
          }
        }
      }
      if (layoutChanged) {
        layout.set(nextLayout);
        const $onLayout = get$2(onLayout);
        if ($onLayout) {
          $onLayout(nextLayout);
        }
        callPaneCallbacks($paneDataArray, nextLayout, get$2(paneIdToLastNotifiedSizeMap));
      }
    };
  }
  function resizePane2(paneData, unsafePaneSize) {
    const $prevLayout = get$2(layout);
    const $paneDataArray = get$2(paneDataArray);
    const paneConstraintsArr = $paneDataArray.map((paneData2) => paneData2.constraints);
    const { paneSize, pivotIndices } = paneDataHelper($paneDataArray, paneData, $prevLayout);
    assert(paneSize != null);
    const isLastPane = findPaneDataIndex($paneDataArray, paneData) === $paneDataArray.length - 1;
    const delta = isLastPane ? paneSize - unsafePaneSize : unsafePaneSize - paneSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      layout: $prevLayout,
      paneConstraints: paneConstraintsArr,
      pivotIndices,
      trigger: "imperative-api"
    });
    if (areArraysEqual($prevLayout, nextLayout))
      return;
    layout.set(nextLayout);
    const $onLayout = get$2(onLayout);
    $onLayout == null ? void 0 : $onLayout(nextLayout);
    callPaneCallbacks($paneDataArray, nextLayout, get$2(paneIdToLastNotifiedSizeMap));
  }
  function startDragging(dragHandleId, event2) {
    const $direction = get$2(direction);
    const $layout = get$2(layout);
    const handleElement = getResizeHandleElement(dragHandleId);
    assert(handleElement);
    const initialCursorPosition = getResizeEventCursorPosition($direction, event2);
    dragState.set({
      dragHandleId,
      dragHandleRect: handleElement.getBoundingClientRect(),
      initialCursorPosition,
      initialLayout: $layout
    });
  }
  function stopDragging() {
    resetGlobalCursorStyle();
    dragState.set(null);
  }
  function unregisterPane(paneData) {
    const $paneDataArray = get$2(paneDataArray);
    const index2 = findPaneDataIndex($paneDataArray, paneData);
    if (index2 < 0)
      return;
    paneDataArray.update((curr) => {
      curr.splice(index2, 1);
      paneIdToLastNotifiedSizeMap.update((curr2) => {
        delete curr2[paneData.id];
        return curr2;
      });
      paneDataArrayChanged.set(true);
      return curr;
    });
  }
  function isPaneCollapsed(paneData) {
    const $paneDataArray = get$2(paneDataArray);
    const $layout = get$2(layout);
    const { collapsedSize = 0, collapsible, paneSize } = paneDataHelper($paneDataArray, paneData, $layout);
    return collapsible === true && paneSize === collapsedSize;
  }
  function expandPane(paneData) {
    const $prevLayout = get$2(layout);
    const $paneDataArray = get$2(paneDataArray);
    if (!paneData.constraints.collapsible)
      return;
    const paneConstraintsArray = $paneDataArray.map((paneData2) => paneData2.constraints);
    const { collapsedSize = 0, paneSize, minSize = 0, pivotIndices } = paneDataHelper($paneDataArray, paneData, $prevLayout);
    if (paneSize !== collapsedSize)
      return;
    const prevPaneSize = get$2(paneSizeBeforeCollapseMap).get(paneData.id);
    const baseSize = prevPaneSize != null && prevPaneSize >= minSize ? prevPaneSize : minSize;
    const isLastPane = findPaneDataIndex($paneDataArray, paneData) === $paneDataArray.length - 1;
    const delta = isLastPane ? paneSize - baseSize : baseSize - paneSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      layout: $prevLayout,
      paneConstraints: paneConstraintsArray,
      pivotIndices,
      trigger: "imperative-api"
    });
    if (areArraysEqual($prevLayout, nextLayout))
      return;
    layout.set(nextLayout);
    const $onLayout = get$2(onLayout);
    $onLayout == null ? void 0 : $onLayout(nextLayout);
    callPaneCallbacks($paneDataArray, nextLayout, get$2(paneIdToLastNotifiedSizeMap));
  }
  const paneGroupStyle = derived([direction], ([$direction]) => {
    return styleToString({
      display: "flex",
      "flex-direction": $direction === "horizontal" ? "row" : "column",
      height: "100%",
      overflow: "hidden",
      width: "100%"
    });
  });
  const paneGroupSelectors = derived([direction, groupId], ([$direction, $groupId]) => {
    return {
      "data-pane-group": "",
      "data-direction": $direction,
      "data-pane-group-id": $groupId
    };
  });
  const paneGroupAttrs = derived([paneGroupStyle, paneGroupSelectors], ([$style, $selectors]) => {
    return {
      style: $style,
      ...$selectors
    };
  });
  function setResizeHandlerEventListeners() {
    const $groupId = get$2(groupId);
    const handles = getResizeHandleElementsForGroup($groupId);
    const unsubHandlers = handles.map((handle) => {
      const handleId = handle.getAttribute("data-pane-resizer-id");
      if (!handleId)
        return noop;
      const [idBefore, idAfter] = getResizeHandlePaneIds($groupId, handleId, get$2(paneDataArray));
      if (idBefore == null || idAfter == null)
        return noop;
      const onKeydown = (e) => {
        if (e.defaultPrevented || e.key !== "Enter")
          return;
        e.preventDefault();
        const $paneDataArray = get$2(paneDataArray);
        const index2 = $paneDataArray.findIndex((paneData2) => paneData2.id === idBefore);
        if (index2 < 0)
          return;
        const paneData = $paneDataArray[index2];
        assert(paneData);
        const $layout = get$2(layout);
        const size = $layout[index2];
        const { collapsedSize = 0, collapsible, minSize = 0 } = paneData.constraints;
        if (!(size != null && collapsible))
          return;
        const nextLayout = adjustLayoutByDelta({
          delta: areNumbersAlmostEqual(size, collapsedSize) ? minSize - size : collapsedSize - size,
          layout: $layout,
          paneConstraints: $paneDataArray.map((paneData2) => paneData2.constraints),
          pivotIndices: getPivotIndices($groupId, handleId),
          trigger: "keyboard"
        });
        if ($layout !== nextLayout) {
          layout.set(nextLayout);
        }
      };
      const unsubListener = addEventListener(handle, "keydown", onKeydown);
      return () => {
        unsubListener();
      };
    });
    return () => {
      unsubHandlers.forEach((unsub) => unsub());
    };
  }
  function setLayout(newLayout) {
    layout.set(newLayout);
  }
  function getLayout() {
    return get$2(layout);
  }
  return {
    methods: {
      collapsePane,
      expandPane,
      getSize: getPaneSize,
      getPaneStyle,
      isCollapsed: isPaneCollapsed,
      isExpanded: isPaneExpanded,
      registerPane,
      registerResizeHandle,
      resizePane: resizePane2,
      startDragging,
      stopDragging,
      unregisterPane,
      setLayout,
      getLayout
    },
    states: {
      direction,
      dragState,
      groupId,
      paneGroupAttrs,
      paneGroupSelectors,
      paneGroupStyle,
      layout
    },
    options
  };
}
function updateResizeHandleAriaValues({ groupId, layout, paneDataArray }) {
  const resizeHandleElements = getResizeHandleElementsForGroup(groupId);
  for (let index2 = 0; index2 < paneDataArray.length - 1; index2++) {
    const { valueMax, valueMin, valueNow } = calculateAriaValues({
      layout,
      panesArray: paneDataArray,
      pivotIndices: [index2, index2 + 1]
    });
    const resizeHandleEl = resizeHandleElements[index2];
    if (isHTMLElement(resizeHandleEl)) {
      const paneData = paneDataArray[index2];
      resizeHandleEl.setAttribute("aria-controls", paneData.id);
      resizeHandleEl.setAttribute("aria-valuemax", "" + Math.round(valueMax));
      resizeHandleEl.setAttribute("aria-valuemin", "" + Math.round(valueMin));
      resizeHandleEl.setAttribute("aria-valuenow", valueNow != null ? "" + Math.round(valueNow) : "");
    }
  }
  return () => {
    resizeHandleElements.forEach((resizeHandleElement) => {
      resizeHandleElement.removeAttribute("aria-controls");
      resizeHandleElement.removeAttribute("aria-valuemax");
      resizeHandleElement.removeAttribute("aria-valuemin");
      resizeHandleElement.removeAttribute("aria-valuenow");
    });
  };
}
function getResizeHandleElementsForGroup(groupId) {
  if (!isBrowser)
    return [];
  return Array.from(document.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${groupId}"]`));
}
function getPaneGroupElement(id) {
  if (!isBrowser)
    return null;
  const element2 = document.querySelector(`[data-pane-group][data-pane-group-id="${id}"]`);
  if (element2) {
    return element2;
  }
  return null;
}
function noop() {
}
function getResizeHandlePaneIds(groupId, handleId, panesArray) {
  var _a, _b;
  const handle = getResizeHandleElement(handleId);
  const handles = getResizeHandleElementsForGroup(groupId);
  const index2 = handle ? handles.indexOf(handle) : -1;
  const idBefore = ((_a = panesArray[index2]) == null ? void 0 : _a.id) ?? null;
  const idAfter = ((_b = panesArray[index2 + 1]) == null ? void 0 : _b.id) ?? null;
  return [idBefore, idAfter];
}
function getResizeHandleElement(id) {
  if (!isBrowser)
    return null;
  const element2 = document.querySelector(`[data-pane-resizer-id="${id}"]`);
  if (element2) {
    return element2;
  }
  return null;
}
function getResizeHandleElementIndex(groupId, id) {
  if (!isBrowser)
    return null;
  const handles = getResizeHandleElementsForGroup(groupId);
  const index2 = handles.findIndex((handle) => handle.getAttribute("data-pane-resizer-id") === id);
  return index2 ?? null;
}
function getPivotIndices(groupId, dragHandleId) {
  const index2 = getResizeHandleElementIndex(groupId, dragHandleId);
  return index2 != null ? [index2, index2 + 1] : [-1, -1];
}
function paneDataHelper(paneDataArray, paneData, layout) {
  const paneConstraintsArray = paneDataArray.map((paneData2) => paneData2.constraints);
  const paneIndex = findPaneDataIndex(paneDataArray, paneData);
  const paneConstraints = paneConstraintsArray[paneIndex];
  const isLastPane = paneIndex === paneDataArray.length - 1;
  const pivotIndices = isLastPane ? [paneIndex - 1, paneIndex] : [paneIndex, paneIndex + 1];
  const paneSize = layout[paneIndex];
  return {
    ...paneConstraints,
    paneSize,
    pivotIndices
  };
}
function findPaneDataIndex(paneDataArray, paneData) {
  return paneDataArray.findIndex((prevPaneData) => prevPaneData.id === paneData.id);
}
function callPaneCallbacks(paneArray, layout, paneIdToLastNotifiedSizeMap) {
  layout.forEach((size, index2) => {
    const paneData = paneArray[index2];
    assert(paneData);
    const { callbacks, constraints, id: paneId } = paneData;
    const { collapsedSize = 0, collapsible } = constraints;
    const lastNotifiedSize = paneIdToLastNotifiedSizeMap[paneId];
    if (!(lastNotifiedSize == null || size !== lastNotifiedSize))
      return;
    paneIdToLastNotifiedSizeMap[paneId] = size;
    const { onCollapse, onExpand, onResize } = callbacks;
    onResize == null ? void 0 : onResize(size, lastNotifiedSize);
    if (collapsible && (onCollapse || onExpand)) {
      if (onExpand && (lastNotifiedSize == null || lastNotifiedSize === collapsedSize) && size !== collapsedSize) {
        onExpand();
      }
      if (onCollapse && (lastNotifiedSize == null || lastNotifiedSize !== collapsedSize) && size === collapsedSize) {
        onCollapse();
      }
    }
  });
}
function getUnsafeDefaultLayout({ paneDataArray }) {
  const layout = Array(paneDataArray.length);
  const paneConstraintsArray = paneDataArray.map((paneData) => paneData.constraints);
  let numPanesWithSizes = 0;
  let remainingSize = 100;
  for (let index2 = 0; index2 < paneDataArray.length; index2++) {
    const paneConstraints = paneConstraintsArray[index2];
    assert(paneConstraints);
    const { defaultSize } = paneConstraints;
    if (defaultSize != null) {
      numPanesWithSizes++;
      layout[index2] = defaultSize;
      remainingSize -= defaultSize;
    }
  }
  for (let index2 = 0; index2 < paneDataArray.length; index2++) {
    const paneConstraints = paneConstraintsArray[index2];
    assert(paneConstraints);
    const { defaultSize } = paneConstraints;
    if (defaultSize != null) {
      continue;
    }
    const numRemainingPanes = paneDataArray.length - numPanesWithSizes;
    const size = remainingSize / numRemainingPanes;
    numPanesWithSizes++;
    layout[index2] = size;
    remainingSize -= size;
  }
  return layout;
}
function validatePaneGroupLayout({ layout: prevLayout, paneConstraints }) {
  const nextLayout = [...prevLayout];
  const nextLayoutTotalSize = nextLayout.reduce((accumulated, current) => accumulated + current, 0);
  if (nextLayout.length !== paneConstraints.length) {
    throw Error(`Invalid ${paneConstraints.length} pane layout: ${nextLayout.map((size) => `${size}%`).join(", ")}`);
  } else if (!areNumbersAlmostEqual(nextLayoutTotalSize, 100)) {
    for (let index2 = 0; index2 < paneConstraints.length; index2++) {
      const unsafeSize = nextLayout[index2];
      assert(unsafeSize != null);
      const safeSize = 100 / nextLayoutTotalSize * unsafeSize;
      nextLayout[index2] = safeSize;
    }
  }
  let remainingSize = 0;
  for (let index2 = 0; index2 < paneConstraints.length; index2++) {
    const unsafeSize = nextLayout[index2];
    assert(unsafeSize != null);
    const safeSize = resizePane({
      paneConstraints,
      paneIndex: index2,
      initialSize: unsafeSize
    });
    if (unsafeSize != safeSize) {
      remainingSize += unsafeSize - safeSize;
      nextLayout[index2] = safeSize;
    }
  }
  if (!areNumbersAlmostEqual(remainingSize, 0)) {
    for (let index2 = 0; index2 < paneConstraints.length; index2++) {
      const prevSize = nextLayout[index2];
      assert(prevSize != null);
      const unsafeSize = prevSize + remainingSize;
      const safeSize = resizePane({
        paneConstraints,
        paneIndex: index2,
        initialSize: unsafeSize
      });
      if (prevSize !== safeSize) {
        remainingSize -= safeSize - prevSize;
        nextLayout[index2] = safeSize;
        if (areNumbersAlmostEqual(remainingSize, 0)) {
          break;
        }
      }
    }
  }
  return nextLayout;
}
function getDeltaPercentage(e, dragHandleId, dir, initialDragState, keyboardResizeBy) {
  if (isKeyDown(e)) {
    const isHorizontal = dir === "horizontal";
    let delta = 0;
    if (e.shiftKey) {
      delta = 100;
    } else if (keyboardResizeBy != null) {
      delta = keyboardResizeBy;
    } else {
      delta = 10;
    }
    let movement = 0;
    switch (e.key) {
      case "ArrowDown":
        movement = isHorizontal ? 0 : delta;
        break;
      case "ArrowLeft":
        movement = isHorizontal ? -delta : 0;
        break;
      case "ArrowRight":
        movement = isHorizontal ? delta : 0;
        break;
      case "ArrowUp":
        movement = isHorizontal ? 0 : -delta;
        break;
      case "End":
        movement = 100;
        break;
      case "Home":
        movement = -100;
        break;
    }
    return movement;
  } else {
    if (initialDragState == null)
      return 0;
    return getDragOffsetPercentage(e, dragHandleId, dir, initialDragState);
  }
}
function getDragOffsetPercentage(e, dragHandleId, dir, initialDragState) {
  const isHorizontal = dir === "horizontal";
  const handleElement = getResizeHandleElement(dragHandleId);
  assert(handleElement);
  const groupId = handleElement.getAttribute("data-pane-group-id");
  assert(groupId);
  const { initialCursorPosition } = initialDragState;
  const cursorPosition = getResizeEventCursorPosition(dir, e);
  const groupElement = getPaneGroupElement(groupId);
  assert(groupElement);
  const groupRect = groupElement.getBoundingClientRect();
  const groupSizeInPixels = isHorizontal ? groupRect.width : groupRect.height;
  const offsetPixels = cursorPosition - initialCursorPosition;
  const offsetPercentage = offsetPixels / groupSizeInPixels * 100;
  return offsetPercentage;
}
function getResizeEventCursorPosition(dir, e) {
  const isHorizontal = dir === "horizontal";
  if (isMouseEvent(e)) {
    return isHorizontal ? e.clientX : e.clientY;
  } else if (isTouchEvent(e)) {
    const firstTouch = e.touches[0];
    assert(firstTouch);
    return isHorizontal ? firstTouch.screenX : firstTouch.screenY;
  } else {
    throw Error(`Unsupported event type "${e.type}"`);
  }
}
const PF_GROUP_CTX = Symbol("PF_GROUP_CTX");
function setCtx(props) {
  const paneForge = createPaneForge(removeUndefined(props));
  const updateOption = getOptionUpdater(paneForge.options);
  const ctxValue = { ...paneForge, updateOption };
  setContext(PF_GROUP_CTX, ctxValue);
  return ctxValue;
}
function getCtx(componentName) {
  if (!hasContext(PF_GROUP_CTX)) {
    throw new Error(`${componentName} components must be rendered with a <PaneGroup> container`);
  }
  return getContext(PF_GROUP_CTX);
}
var root$9 = from_html(`<div><!></div>`);
function Pane_group($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "autoSaveId",
    "direction",
    "id",
    "keyboardResizeBy",
    "onLayoutChange",
    "storage",
    "el",
    "paneGroup",
    "style"
  ]);
  push($$props, false);
  const $groupId = () => store_get(groupId, "$groupId", $$stores);
  const $paneGroupStyle = () => store_get(paneGroupStyle, "$paneGroupStyle", $$stores);
  const $paneGroupSelectors = () => store_get(paneGroupSelectors, "$paneGroupSelectors", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const style = mutable_source();
  let autoSaveId = prop($$props, "autoSaveId", 8, null);
  let direction = prop($$props, "direction", 8);
  let id = prop($$props, "id", 8, null);
  let keyboardResizeBy = prop($$props, "keyboardResizeBy", 8, null);
  let onLayoutChange = prop($$props, "onLayoutChange", 8, null);
  let storage = prop($$props, "storage", 8, defaultStorage);
  let el = prop($$props, "el", 28, () => void 0);
  let paneGroup = prop($$props, "paneGroup", 28, () => void 0);
  let styleFromProps = prop($$props, "style", 24, () => void 0);
  const {
    states: { paneGroupStyle, paneGroupSelectors, groupId },
    methods: { setLayout, getLayout },
    updateOption
  } = setCtx({
    autoSaveId: autoSaveId(),
    direction: direction(),
    id: id(),
    keyboardResizeBy: keyboardResizeBy(),
    onLayout: onLayoutChange(),
    storage: storage()
  });
  paneGroup({ getLayout, setLayout, getId: () => $groupId() });
  legacy_pre_effect(() => deep_read_state(autoSaveId()), () => {
    updateOption("autoSaveId", autoSaveId());
  });
  legacy_pre_effect(() => deep_read_state(direction()), () => {
    updateOption("direction", direction());
  });
  legacy_pre_effect(() => deep_read_state(id()), () => {
    updateOption("id", id());
  });
  legacy_pre_effect(() => deep_read_state(keyboardResizeBy()), () => {
    updateOption("keyboardResizeBy", keyboardResizeBy());
  });
  legacy_pre_effect(() => deep_read_state(onLayoutChange()), () => {
    updateOption("onLayout", onLayoutChange());
  });
  legacy_pre_effect(() => deep_read_state(storage()), () => {
    updateOption("storage", storage());
  });
  legacy_pre_effect(() => ($paneGroupStyle(), deep_read_state(styleFromProps())), () => {
    set(style, $paneGroupStyle() + (styleFromProps() ?? ""));
  });
  legacy_pre_effect_reset();
  init();
  var div = root$9();
  attribute_effect(div, () => ({
    id: $groupId(),
    ...$paneGroupSelectors(),
    style: get$1(style),
    ...$$restProps
  }));
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => el($$value), () => el());
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$8 = from_html(`<div><!></div>`);
function Pane($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "collapsedSize",
    "collapsible",
    "defaultSize",
    "maxSize",
    "minSize",
    "onCollapse",
    "onExpand",
    "onResize",
    "order",
    "el",
    "pane",
    "id",
    "style"
  ]);
  push($$props, false);
  const $getPaneStyle = () => store_get(getPaneStyle, "$getPaneStyle", $$stores);
  const $groupId = () => store_get(groupId, "$groupId", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const style = mutable_source();
  const attrs = mutable_source();
  let collapsedSize = prop($$props, "collapsedSize", 24, () => void 0);
  let collapsible = prop($$props, "collapsible", 24, () => void 0);
  let defaultSize = prop($$props, "defaultSize", 24, () => void 0);
  let maxSize = prop($$props, "maxSize", 24, () => void 0);
  let minSize = prop($$props, "minSize", 24, () => void 0);
  let onCollapse = prop($$props, "onCollapse", 24, () => void 0);
  let onExpand = prop($$props, "onExpand", 24, () => void 0);
  let onResize = prop($$props, "onResize", 24, () => void 0);
  let order = prop($$props, "order", 24, () => void 0);
  let el = prop($$props, "el", 28, () => void 0);
  let pane = prop($$props, "pane", 28, () => void 0);
  let idFromProps = prop($$props, "id", 24, () => void 0);
  let styleFromProps = prop($$props, "style", 24, () => void 0);
  const {
    methods: {
      getPaneStyle,
      registerPane,
      unregisterPane,
      collapsePane,
      expandPane,
      getSize,
      isCollapsed,
      isExpanded,
      resizePane: resizePane2
    },
    states: { groupId }
  } = getCtx("Pane");
  const paneId = generateId(idFromProps());
  let paneData = mutable_source();
  pane({
    collapse: () => {
      collapsePane(get$1(paneData));
    },
    expand: () => expandPane(get$1(paneData)),
    getSize: () => getSize(get$1(paneData)),
    isCollapsed: () => isCollapsed(get$1(paneData)),
    isExpanded: () => isExpanded(get$1(paneData)),
    resize: (size) => resizePane2(get$1(paneData), size),
    getId: () => paneId
  });
  onMount(() => {
    registerPane(get$1(paneData));
    return () => {
      unregisterPane(get$1(paneData));
    };
  });
  legacy_pre_effect(
    () => (deep_read_state(onCollapse()), deep_read_state(onExpand()), deep_read_state(onResize()), deep_read_state(collapsedSize()), deep_read_state(collapsible()), deep_read_state(defaultSize()), deep_read_state(maxSize()), deep_read_state(minSize()), deep_read_state(idFromProps()), deep_read_state(order())),
    () => {
      set(paneData, {
        callbacks: {
          onCollapse: onCollapse(),
          onExpand: onExpand(),
          onResize: onResize()
        },
        constraints: {
          collapsedSize: collapsedSize(),
          collapsible: collapsible(),
          defaultSize: defaultSize(),
          maxSize: maxSize(),
          minSize: minSize()
        },
        id: paneId,
        idIsFromProps: idFromProps() !== void 0,
        order: order()
      });
    }
  );
  legacy_pre_effect(
    () => ($getPaneStyle(), get$1(paneData), deep_read_state(defaultSize()), deep_read_state(styleFromProps())),
    () => {
      set(style, $getPaneStyle()(get$1(paneData), defaultSize()) + (styleFromProps() ?? ""));
    }
  );
  legacy_pre_effect(() => $groupId(), () => {
    set(attrs, {
      "data-pane": "",
      "data-pane-id": paneId,
      "data-pane-group-id": $groupId()
    });
  });
  legacy_pre_effect_reset();
  init();
  var div = root$8();
  attribute_effect(div, () => ({ style: get$1(style), ...get$1(attrs), ...$$restProps }));
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => el($$value), () => el());
  append($$anchor, div);
  pop();
  $$cleanup();
}
function resizeHandleAction(node, params) {
  let unsub = () => {
  };
  function update(params2) {
    unsub();
    const { disabled, resizeHandler, isDragging, stopDragging, onDragging = void 0 } = params2;
    if (disabled || resizeHandler === null || !isDragging)
      return;
    const onMove = (event2) => {
      resizeHandler(event2);
    };
    const onMouseLeave = (event2) => {
      resizeHandler(event2);
    };
    const stopDraggingAndBlur = () => {
      node.blur();
      stopDragging();
      if (onDragging) {
        onDragging(false);
      }
    };
    unsub = chain(addEventListener(document.body, "contextmenu", stopDraggingAndBlur), addEventListener(document.body, "mousemove", onMove), addEventListener(document.body, "touchmove", onMove, { passive: false }), addEventListener(document.body, "mouseleave", onMouseLeave), addEventListener(window, "mouseup", stopDraggingAndBlur), addEventListener(window, "touchend", stopDraggingAndBlur));
  }
  update(params);
  return {
    update,
    onDestroy() {
      unsub();
    }
  };
}
var root$7 = from_html(`<div><!></div>`);
function Pane_resizer($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "disabled",
    "onDraggingChange",
    "tabIndex",
    "el",
    "id",
    "style"
  ]);
  push($$props, false);
  const $dragState = () => store_get(dragState, "$dragState", $$stores);
  const $groupId = () => store_get(groupId, "$groupId", $$stores);
  const $direction = () => store_get(direction, "$direction", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isDragging = mutable_source();
  const style = mutable_source();
  const attrs = mutable_source();
  let disabled = prop($$props, "disabled", 8, false);
  let onDraggingChange = prop($$props, "onDraggingChange", 24, () => void 0);
  let tabIndex = prop($$props, "tabIndex", 8, 0);
  let el = prop($$props, "el", 12, null);
  let idFromProps = prop($$props, "id", 24, () => void 0);
  let styleFromProps = prop($$props, "style", 24, () => void 0);
  const {
    methods: { registerResizeHandle, startDragging, stopDragging },
    states: { direction, dragState, groupId }
  } = getCtx("PaneResizer");
  const resizeHandleId = generateId(idFromProps());
  let isFocused = mutable_source(false);
  let resizeHandler = mutable_source(null);
  function stopDraggingAndBlur() {
    var _a;
    const element2 = el();
    if (!element2) return;
    element2.blur();
    stopDragging();
    (_a = onDraggingChange()) == null ? void 0 : _a(false);
  }
  onMount(() => {
    if (disabled()) {
      set(resizeHandler, null);
    } else {
      set(resizeHandler, registerResizeHandle(resizeHandleId));
    }
  });
  function handleKeydown(event2) {
    if (disabled() || !get$1(resizeHandler) || event2.defaultPrevented) return;
    const resizeKeys = [
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "End",
      "Home"
    ];
    if (resizeKeys.includes(event2.key)) {
      event2.preventDefault();
      get$1(resizeHandler)(event2);
      return;
    }
    if (event2.key !== "F6") return;
    event2.preventDefault();
    const handles = getResizeHandleElementsForGroup($groupId());
    const index2 = getResizeHandleElementIndex($groupId(), resizeHandleId);
    if (index2 === null) return;
    const nextIndex = event2.shiftKey ? index2 > 0 ? index2 - 1 : handles.length - 1 : index2 + 1 < handles.length ? index2 + 1 : 0;
    const nextHandle = handles[nextIndex];
    nextHandle.focus();
  }
  legacy_pre_effect(() => $dragState(), () => {
    var _a;
    set(isDragging, ((_a = $dragState()) == null ? void 0 : _a.dragHandleId) === resizeHandleId);
  });
  legacy_pre_effect(() => deep_read_state(disabled()), () => {
    if (disabled()) {
      set(resizeHandler, null);
    } else {
      set(resizeHandler, registerResizeHandle(resizeHandleId));
    }
  });
  legacy_pre_effect(
    () => ($direction(), deep_read_state(styleFromProps())),
    () => {
      set(style, styleToString({
        cursor: getCursorStyle($direction()),
        "touch-action": "none",
        "user-select": "none",
        "-webkit-user-select": "none",
        "-webkit-touch-callout": "none"
      }) + styleFromProps());
    }
  );
  legacy_pre_effect(
    () => ($direction(), $groupId(), get$1(isDragging), get$1(isFocused), deep_read_state(disabled())),
    () => {
      set(attrs, {
        "data-direction": $direction(),
        "data-pane-group-id": $groupId(),
        "data-active": get$1(isDragging) ? "pointer" : get$1(isFocused) ? "keyboard" : void 0,
        "data-enabled": !disabled(),
        "data-pane-resizer-id": resizeHandleId,
        "data-pane-resizer": ""
      });
    }
  );
  legacy_pre_effect_reset();
  init();
  var div = root$7();
  attribute_effect(div, () => ({
    role: "separator",
    style: get$1(style),
    tabindex: tabIndex(),
    ...get$1(attrs),
    ...$$restProps
  }));
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => el($$value), () => el());
  action(div, ($$node, $$action_arg) => resizeHandleAction == null ? void 0 : resizeHandleAction($$node, $$action_arg), () => ({
    disabled: disabled(),
    resizeHandler: get$1(resizeHandler),
    stopDragging,
    isDragging: get$1(isDragging),
    onDragging: onDraggingChange()
  }));
  effect(() => event("keydown", div, handleKeydown));
  effect(() => event("blur", div, () => set(isFocused, false)));
  effect(() => event("focus", div, () => set(isFocused, true)));
  effect(() => event("mousedown", div, (e) => {
    var _a;
    e.preventDefault();
    startDragging(resizeHandleId, e);
    (_a = onDraggingChange()) == null ? void 0 : _a(true);
  }));
  effect(() => event("mouseup", div, stopDraggingAndBlur));
  effect(() => event("touchcancel", div, stopDraggingAndBlur));
  effect(() => event("touchend", div, stopDraggingAndBlur));
  effect(() => event("touchstart", div, (e) => {
    var _a;
    e.preventDefault();
    startDragging(resizeHandleId, e);
    (_a = onDraggingChange()) == null ? void 0 : _a(true);
  }));
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$6 = from_html(`<div class="flex items-center min-h-14"><textarea rows="1"></textarea></div>`);
function RichTextInput($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let oncompositionstart = prop($$props, "oncompositionstart", 8, (e) => {
  });
  let oncompositionend = prop($$props, "oncompositionend", 8, (e) => {
  });
  let onChange = prop($$props, "onChange", 8, (e) => {
  });
  let id = prop($$props, "id", 8, "");
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 24, () => $i18n().t("Type here..."));
  let className = prop($$props, "className", 8, "input-prose");
  let textareaElement = mutable_source();
  onMount(() => {
    if (get$1(textareaElement)) {
      adjustHeight();
    }
  });
  function adjustHeight() {
    if (get$1(textareaElement)) {
      mutate(textareaElement, get$1(textareaElement).style.height = "auto");
      mutate(textareaElement, get$1(textareaElement).style.height = get$1(textareaElement).scrollHeight + "px");
    }
  }
  function handleInput(e) {
    value(e.target.value);
    adjustHeight();
    onChange()({ md: value(), text: value() });
  }
  function handleKeydown(e) {
    dispatch("keydown", { event: e });
  }
  function focus() {
    var _a;
    (_a = get$1(textareaElement)) == null ? void 0 : _a.focus();
  }
  function blur() {
    var _a;
    (_a = get$1(textareaElement)) == null ? void 0 : _a.blur();
  }
  function setText(text2) {
    value(text2);
    if (get$1(textareaElement)) {
      mutate(textareaElement, get$1(textareaElement).value = text2);
      adjustHeight();
    }
    onChange()({ md: value(), text: value() });
  }
  function getText() {
    return value();
  }
  function getMarkdown() {
    return value();
  }
  function insertContent(text2) {
    if (!get$1(textareaElement)) return;
    const start = get$1(textareaElement).selectionStart;
    const end = get$1(textareaElement).selectionEnd;
    const before = value().substring(0, start);
    const after = value().substring(end);
    value(before + text2 + after);
    mutate(textareaElement, get$1(textareaElement).value = value());
    tick().then(() => {
      mutate(textareaElement, get$1(textareaElement).selectionStart = mutate(textareaElement, get$1(textareaElement).selectionEnd = start + text2.length));
      adjustHeight();
    });
    onChange()({ md: value(), text: value() });
  }
  function replaceVariables(variables) {
    let newValue = value();
    for (const [key2, val] of Object.entries(variables)) {
      newValue = newValue.replace(new RegExp(`{{${key2}}}`, "g"), val);
    }
    setText(newValue);
  }
  function getWordAtDocPos() {
    if (!get$1(textareaElement)) return "";
    const pos = get$1(textareaElement).selectionStart;
    const text2 = value();
    let start = pos;
    let end = pos;
    while (start > 0 && !/\s/.test(text2[start - 1])) {
      start--;
    }
    while (end < text2.length && !/\s/.test(text2[end])) {
      end++;
    }
    return text2.substring(start, end);
  }
  function replaceCommandWithText(text2) {
    if (!get$1(textareaElement)) return;
    const pos = get$1(textareaElement).selectionStart;
    const currentText = value();
    let start = pos;
    while (start > 0 && currentText[start - 1] !== "/") {
      start--;
    }
    if (start > 0) start--;
    const before = currentText.substring(0, start);
    const after = currentText.substring(pos);
    value(before + text2 + after);
    mutate(textareaElement, get$1(textareaElement).value = value());
    tick().then(() => {
      mutate(textareaElement, get$1(textareaElement).selectionStart = mutate(textareaElement, get$1(textareaElement).selectionEnd = start + text2.length));
      adjustHeight();
    });
    onChange()({ md: value(), text: value() });
  }
  function clear() {
    setText("");
  }
  var $$exports = {
    focus,
    blur,
    setText,
    getText,
    getMarkdown,
    insertContent,
    replaceVariables,
    getWordAtDocPos,
    replaceCommandWithText,
    clear
  };
  init();
  var div = root$6();
  var textarea = child(div);
  remove_textarea_child(textarea);
  bind_this(textarea, ($$value) => set(textareaElement, $$value), () => get$1(textareaElement));
  reset(div);
  template_effect(() => {
    set_attribute(textarea, "id", id());
    set_class(textarea, 1, `w-full bg-transparent border-none outline-none resize-none overflow-hidden text-xl leading-normal !text-black dark:!text-white ${className() ?? ""}`);
    set_attribute(textarea, "placeholder", placeholder());
  });
  bind_value(textarea, value);
  event("input", textarea, handleInput);
  event("keydown", textarea, handleKeydown);
  event("compositionstart", textarea, function(...$$args) {
    var _a;
    (_a = oncompositionstart()) == null ? void 0 : _a.apply(this, $$args);
  });
  event("compositionend", textarea, function(...$$args) {
    var _a;
    (_a = oncompositionend()) == null ? void 0 : _a.apply(this, $$args);
  });
  event("focus", textarea, function($$arg) {
    bubble_event.call(this, $$props, $$arg);
  });
  event("blur", textarea, function($$arg) {
    bubble_event.call(this, $$props, $$arg);
  });
  append($$anchor, div);
  bind_prop($$props, "focus", focus);
  bind_prop($$props, "blur", blur);
  bind_prop($$props, "setText", setText);
  bind_prop($$props, "getText", getText);
  bind_prop($$props, "getMarkdown", getMarkdown);
  bind_prop($$props, "insertContent", insertContent);
  bind_prop($$props, "replaceVariables", replaceVariables);
  bind_prop($$props, "getWordAtDocPos", getWordAtDocPos);
  bind_prop($$props, "replaceCommandWithText", replaceCommandWithText);
  bind_prop($$props, "clear", clear);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root_2$6 = from_html(`<div class=" absolute -top-12 left-0 right-0 flex justify-center z-30 pointer-events-none"><button class=" bg-white border border-gray-100 dark:border-none dark:bg-white/20 p-1.5 rounded-full pointer-events-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd"></path></svg></button></div>`);
var root_3$6 = from_html(`<div class="px-3 pt-3 text-left w-full flex flex-col z-10"><div class="flex items-center justify-between w-full"><div class="pl-[1px] flex items-center gap-2 text-sm dark:text-gray-500"><img alt="model profile" class="size-3.5 max-w-[28px] object-cover rounded-full"/> <div class="translate-y-[0.5px]"><span> </span></div></div> <div><button class="flex items-center dark:text-gray-500"><!></button></div></div></div>`);
var root_7$4 = from_svg(
  `!visionCapableModels.includes(id))
                                                                                                                                        .join(', ')
                                                                                                                        })}
                                                                                                                > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-4 fill-yellow-300"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd"></path></svg>`,
  1
);
var root_6$6 = from_html(`<div class=" relative group"><div class="relative flex items-center"><!> <!></div> <div class=" absolute -top-1 -right-1"><button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div></div>`);
var root_4$2 = from_html(`<div class="mx-2 mt-2.5 pb-1.5 flex items-center flex-wrap gap-2"></div>`);
var root_11$4 = from_html(`<div class=" text-xs text-gray-500 text-center line-clamp-1 marked"><!></div>`);
var root_12$4 = from_html(`<div class="mb-1"></div>`);
var root_1$6 = from_html(`<div class="w-full font-primary"><div class=" mx-auto inset-x-0 bg-transparent flex justify-center"><div><div class="relative"><!></div></div></div> <div class="bg-transparent"><div><div><input type="file" hidden="" multiple/> <form><button id="generate-message-pair-button" class="hidden"></button> <div id="message-input-container" class="w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto bg-white dark:bg-[#212121] cursor-text overflow-clip bg-clip-padding p-2.5 shadow-lg border border-gray-200 dark:border-transparent transition-all duration-200 rounded-[28px] grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto]" style="grid-template-areas: 'header header header' 'leading primary trailing' '. footer .';"><!> <!> <div class="flex" style="grid-area: leading;"><button type="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 h-9 w-9 rounded-full"><!></button></div> <div class="flex min-h-14 items-center overflow-x-hidden px-1.5 -my-2.5 text-left" style="grid-area: primary;"><div class="flex-1 overflow-auto max-h-52"><!></div></div> <div class="flex items-center" style="grid-area: trailing;"><div class="flex items-center"><button id="send-message-button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 size-9 h-9 w-9 rounded-full"><!></button></div></div></div> <!></form></div></div></div></div>`);
function MessageInput($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $_user = () => store_get(user, "$_user", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $tools = () => store_get(tools, "$tools", $$stores);
  const $toolServers = () => store_get(toolServers, "$toolServers", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let createMessagePair = prop($$props, "createMessagePair", 8);
  let stopResponse = prop($$props, "stopResponse", 8);
  let autoScroll = prop($$props, "autoScroll", 12, false);
  let generating = prop($$props, "generating", 8, false);
  let atSelectedModel = prop($$props, "atSelectedModel", 12, void 0);
  let selectedModels = prop($$props, "selectedModels", 8);
  let selectedModelIds = mutable_source([]);
  let history = prop($$props, "history", 8);
  let prompt = prop($$props, "prompt", 12, "");
  let files = prop($$props, "files", 28, () => []);
  let selectedToolIds = prop($$props, "selectedToolIds", 28, () => []);
  let selectedFilterIds = prop($$props, "selectedFilterIds", 28, () => []);
  let imageGenerationEnabled = prop($$props, "imageGenerationEnabled", 12, false);
  let webSearchEnabled = prop($$props, "webSearchEnabled", 12, false);
  let codeInterpreterEnabled = prop($$props, "codeInterpreterEnabled", 12, false);
  const inputVariableHandler = async (text2) => {
    return text2;
  };
  const textVariableHandler = async (text2) => {
    if (text2.includes("{{CLIPBOARD}}")) {
      const clipboardText = await navigator.clipboard.readText().catch((err) => {
        toast.error($i18n().t("Failed to read clipboard contents"));
        return "{{CLIPBOARD}}";
      });
      const clipboardItems = await navigator.clipboard.read().catch((err) => {
        console.error("Failed to read clipboard items:", err);
        return [];
      });
      for (const item of clipboardItems) {
        for (const type of item.types) {
          if (type.startsWith("image/")) {
            const blob = await item.getType(type);
            const reader = new FileReader();
            reader.onload = (event2) => {
              files([...files(), { type: "image", url: event2.target.result }]);
            };
            reader.readAsDataURL(blob);
          }
        }
      }
      text2 = text2.replaceAll("{{CLIPBOARD}}", clipboardText);
    }
    if (text2.includes("{{USER_LOCATION}}")) {
      let location2;
      try {
        location2 = await getUserPosition();
      } catch (error) {
        toast.error($i18n().t("Location access not allowed"));
        location2 = "LOCATION_UNKNOWN";
      }
      text2 = text2.replaceAll("{{USER_LOCATION}}", String(location2));
    }
    const sessionUser = $_user();
    if (text2.includes("{{USER_NAME}}")) {
      const name = (sessionUser == null ? void 0 : sessionUser.name) || "User";
      text2 = text2.replaceAll("{{USER_NAME}}", name);
    }
    if (text2.includes("{{USER_BIO}}")) ;
    if (text2.includes("{{USER_GENDER}}")) ;
    if (text2.includes("{{USER_BIRTH_DATE}}")) ;
    if (text2.includes("{{USER_AGE}}")) ;
    if (text2.includes("{{USER_LANGUAGE}}")) {
      const language = "pl-PL";
      text2 = text2.replaceAll("{{USER_LANGUAGE}}", language);
    }
    if (text2.includes("{{CURRENT_DATE}}")) {
      const date = getFormattedDate();
      text2 = text2.replaceAll("{{CURRENT_DATE}}", date);
    }
    if (text2.includes("{{CURRENT_TIME}}")) {
      const time = getFormattedTime();
      text2 = text2.replaceAll("{{CURRENT_TIME}}", time);
    }
    if (text2.includes("{{CURRENT_DATETIME}}")) {
      const dateTime = getCurrentDateTime();
      text2 = text2.replaceAll("{{CURRENT_DATETIME}}", dateTime);
    }
    if (text2.includes("{{CURRENT_TIMEZONE}}")) {
      const timezone = getUserTimezone();
      text2 = text2.replaceAll("{{CURRENT_TIMEZONE}}", timezone);
    }
    if (text2.includes("{{CURRENT_WEEKDAY}}")) {
      const weekday = getWeekday();
      text2 = text2.replaceAll("{{CURRENT_WEEKDAY}}", weekday);
    }
    return text2;
  };
  const setText = async (text2, cb) => {
    var _a, _b;
    const chatInput = document.getElementById("chat-input");
    if (chatInput) {
      if (text2 !== "") {
        text2 = await textVariableHandler(text2 || "");
      }
      (_a = get$1(chatInputElement)) == null ? void 0 : _a.setText(text2);
      (_b = get$1(chatInputElement)) == null ? void 0 : _b.focus();
      if (text2 !== "") {
        text2 = await inputVariableHandler(text2);
      }
      await tick();
      if (cb) await cb(text2);
    }
  };
  const getCommand = () => {
    var _a;
    const chatInput = document.getElementById("chat-input");
    let word = "";
    if (chatInput) {
      word = (_a = get$1(chatInputElement)) == null ? void 0 : _a.getWordAtDocPos();
    }
    return word;
  };
  let command = mutable_source("");
  let showCommands = prop($$props, "showCommands", 12, false);
  let loaded = mutable_source(false);
  let isComposing = mutable_source(false);
  let compositionEndedAt = mutable_source(-2e8);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  function inOrNearComposition(event2) {
    if (get$1(isComposing)) {
      return true;
    }
    if (isSafari && Math.abs(event2.timeStamp - get$1(compositionEndedAt)) < 500) {
      set(compositionEndedAt, -2e8);
      return true;
    }
    return false;
  }
  let chatInputElement = mutable_source();
  let filesInputElement = mutable_source();
  let inputFiles = mutable_source();
  let placeholder = prop($$props, "placeholder", 8, "");
  let visionCapableModels = mutable_source([]);
  let fileUploadCapableModels = mutable_source([]);
  let webSearchCapableModels = mutable_source([]);
  let imageGenerationCapableModels = mutable_source([]);
  let codeInterpreterCapableModels = mutable_source([]);
  let toggleFilters = mutable_source([]);
  let showToolsButton = mutable_source(false);
  let showCodeInterpreterButton = mutable_source(false);
  const scrollToBottom = () => {
    const element2 = document.getElementById("messages-container");
    element2.scrollTo({ top: element2.scrollHeight, behavior: "smooth" });
  };
  const uploadFileHandler = async (file, fullContext = false) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    if (((_a = $_user()) == null ? void 0 : _a.role) !== "admin" && !(((_d = (_c = (_b = $_user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.file_upload) ?? true)) {
      toast.error($i18n().t("You do not have permission to upload files."));
      return null;
    }
    if (get$1(fileUploadCapableModels).length !== selectedModels().length) {
      toast.error($i18n().t("Model(s) do not support file upload"));
      return null;
    }
    const tempItemId = v4();
    const fileItem = {
      type: "file",
      file: "",
      id: null,
      url: "",
      name: file.name,
      collection_name: "",
      status: "uploading",
      size: file.size,
      error: "",
      itemId: tempItemId,
      ...fullContext ? { context: "full" } : {}
    };
    if (fileItem.size == 0) {
      toast.error($i18n().t("You cannot upload an empty file."));
      return null;
    }
    files([...files(), fileItem]);
    if (!$temporaryChatEnabled()) {
      try {
        let metadata = null;
        if ((file.type.startsWith("audio/") || file.type.startsWith("video/")) && ((_g = (_f = (_e = $settings()) == null ? void 0 : _e.audio) == null ? void 0 : _f.stt) == null ? void 0 : _g.language)) {
          metadata = { language: (_j = (_i = (_h = $settings()) == null ? void 0 : _h.audio) == null ? void 0 : _i.stt) == null ? void 0 : _j.language };
        }
        const uploadedFile = { id: crypto.randomUUID(), filename: "file", name: "file" };
        if (uploadedFile) {
          if (uploadedFile.error) {
            toast.warning(uploadedFile.error);
          }
          fileItem.status = "uploaded";
          fileItem.file = uploadedFile;
          fileItem.id = uploadedFile.id;
          fileItem.collection_name = ((_k = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _k.collection_name) || (uploadedFile == null ? void 0 : uploadedFile.collection_name);
          fileItem.url = `${WEBUI_API_BASE_URL$1}/files/${uploadedFile.id}`;
          files(files());
        } else {
          files(files().filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
        }
      } catch (e) {
        toast.error(`${e}`);
        files(files().filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
      }
    } else {
      const content = await extractContentFromFile(file).catch((error) => {
        toast.error($i18n().t("Failed to extract content from the file: {{error}}", { error }));
        return null;
      });
      if (content === null) {
        toast.error($i18n().t("Failed to extract content from the file."));
        files(files().filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
        return null;
      } else {
        fileItem.status = "uploaded";
        fileItem.type = "text";
        fileItem.content = content;
        fileItem.id = v4();
        files(files());
      }
    }
  };
  const inputFilesHandler = async (inputFiles2) => {
    var _a, _b, _c, _d, _e, _f;
    if ((((_b = (_a = $config()) == null ? void 0 : _a.file) == null ? void 0 : _b.max_count) ?? null) !== null && files().length + inputFiles2.length > ((_d = (_c = $config()) == null ? void 0 : _c.file) == null ? void 0 : _d.max_count)) {
      toast.error($i18n().t(`You can only chat with a maximum of {{maxCount}} file(s) at a time.`, { maxCount: (_f = (_e = $config()) == null ? void 0 : _e.file) == null ? void 0 : _f.max_count }));
      return;
    }
    inputFiles2.forEach(async (file) => {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      if ((((_b2 = (_a2 = $config()) == null ? void 0 : _a2.file) == null ? void 0 : _b2.max_size) ?? null) !== null && file.size > (((_d2 = (_c2 = $config()) == null ? void 0 : _c2.file) == null ? void 0 : _d2.max_size) ?? 0) * 1024 * 1024) {
        toast.error($i18n().t(`File size should not exceed {{maxSize}} MB.`, { maxSize: (_f2 = (_e2 = $config()) == null ? void 0 : _e2.file) == null ? void 0 : _f2.max_size }));
        return;
      }
      if (file["type"].startsWith("image/")) {
        if (get$1(visionCapableModels).length === 0) {
          toast.error($i18n().t("Selected model(s) do not support image inputs"));
          return;
        }
        const compressImageHandler = async (imageUrl, settings2 = {}, config2 = {}) => {
          var _a3, _b3, _c3, _d3, _e3, _f3;
          const settingsCompression = (settings2 == null ? void 0 : settings2.imageCompression) ?? false;
          const configWidth = ((_b3 = (_a3 = config2 == null ? void 0 : config2.file) == null ? void 0 : _a3.image_compression) == null ? void 0 : _b3.width) ?? null;
          const configHeight = ((_d3 = (_c3 = config2 == null ? void 0 : config2.file) == null ? void 0 : _c3.image_compression) == null ? void 0 : _d3.height) ?? null;
          if (!settingsCompression && !configWidth && !configHeight) {
            return imageUrl;
          }
          let width = null;
          let height = null;
          if (settingsCompression) {
            width = ((_e3 = settings2 == null ? void 0 : settings2.imageCompressionSize) == null ? void 0 : _e3.width) ?? null;
            height = ((_f3 = settings2 == null ? void 0 : settings2.imageCompressionSize) == null ? void 0 : _f3.height) ?? null;
          }
          if (configWidth && (width === null || width > configWidth)) {
            width = configWidth;
          }
          if (configHeight && (height === null || height > configHeight)) {
            height = configHeight;
          }
          if (width || height) {
            return await compressImage(imageUrl, width, height);
          }
          return imageUrl;
        };
        let reader = new FileReader();
        reader.onload = async (event2) => {
          let imageUrl = event2.target.result;
          imageUrl = await compressImageHandler(imageUrl, $settings(), $config());
          files([...files(), { type: "image", url: `${imageUrl}` }]);
        };
        reader.readAsDataURL(file["type"] === "image/heic" ? await convertHeicToJpeg(file) : file);
      } else {
        uploadFileHandler(file);
      }
    });
  };
  const onDragOver = (e) => {
    var _a, _b;
    e.preventDefault();
    if ((_b = (_a = e.dataTransfer) == null ? void 0 : _a.types) == null ? void 0 : _b.includes("Files")) ;
  };
  const onDragLeave = () => {
  };
  const onDrop = async (e) => {
    var _a, _b;
    e.preventDefault();
    if ((_a = e.dataTransfer) == null ? void 0 : _a.files) {
      const inputFiles2 = Array.from((_b = e.dataTransfer) == null ? void 0 : _b.files);
      if (inputFiles2 && inputFiles2.length > 0) {
        inputFilesHandler(inputFiles2);
      }
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "Shift") ;
    if (e.key === "Escape") ;
  };
  const onKeyUp = (e) => {
    if (e.key === "Shift") ;
  };
  const onFocus = () => {
  };
  const onBlur = () => {
  };
  onMount(async () => {
    set(loaded, true);
    window.setTimeout(
      () => {
        const chatInput = document.getElementById("chat-input");
        chatInput == null ? void 0 : chatInput.focus();
      },
      0
    );
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    await tick();
    const dropzoneElement = document.getElementById("chat-container");
    dropzoneElement == null ? void 0 : dropzoneElement.addEventListener("dragover", onDragOver);
    dropzoneElement == null ? void 0 : dropzoneElement.addEventListener("drop", onDrop);
    dropzoneElement == null ? void 0 : dropzoneElement.addEventListener("dragleave", onDragLeave);
    await tools.set([]);
  });
  onDestroy(() => {
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    window.removeEventListener("focus", onFocus);
    window.removeEventListener("blur", onBlur);
    const dropzoneElement = document.getElementById("chat-container");
    if (dropzoneElement) {
      dropzoneElement == null ? void 0 : dropzoneElement.removeEventListener("dragover", onDragOver);
      dropzoneElement == null ? void 0 : dropzoneElement.removeEventListener("drop", onDrop);
      dropzoneElement == null ? void 0 : dropzoneElement.removeEventListener("dragleave", onDragLeave);
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(atSelectedModel()), deep_read_state(selectedModels())),
    () => {
      set(selectedModelIds, atSelectedModel() !== void 0 ? [atSelectedModel().id] : selectedModels());
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(onChange()), deep_read_state(prompt()), deep_read_state(files()), deep_read_state(selectedToolIds()), deep_read_state(selectedFilterIds()), deep_read_state(imageGenerationEnabled()), deep_read_state(webSearchEnabled()), deep_read_state(codeInterpreterEnabled())),
    () => {
      onChange()({
        prompt: prompt(),
        files: files().filter((file) => file.type !== "image").map((file) => {
          return { ...file, user: void 0, access_control: void 0 };
        }),
        selectedToolIds: selectedToolIds(),
        selectedFilterIds: selectedFilterIds(),
        imageGenerationEnabled: imageGenerationEnabled(),
        webSearchEnabled: webSearchEnabled(),
        codeInterpreterEnabled: codeInterpreterEnabled()
      });
    }
  );
  legacy_pre_effect(() => get$1(command), () => {
    var _a, _b;
    showCommands(["/", "#", "@"].includes((_a = get$1(command)) == null ? void 0 : _a.charAt(0)) || "\\#" === ((_b = get$1(command)) == null ? void 0 : _b.slice(0, 2)));
  });
  legacy_pre_effect(
    () => (deep_read_state(atSelectedModel()), deep_read_state(selectedModels()), $models()),
    () => {
      var _a;
      set(visionCapableModels, (((_a = atSelectedModel()) == null ? void 0 : _a.id) ? [atSelectedModel().id] : selectedModels()).filter((model) => {
        var _a2, _b, _c, _d;
        return ((_d = (_c = (_b = (_a2 = $models().find((m) => m.id === model)) == null ? void 0 : _a2.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.vision) ?? true;
      }));
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(atSelectedModel()), deep_read_state(selectedModels()), $models()),
    () => {
      var _a;
      set(fileUploadCapableModels, (((_a = atSelectedModel()) == null ? void 0 : _a.id) ? [atSelectedModel().id] : selectedModels()).filter((model) => {
        var _a2, _b, _c, _d;
        return ((_d = (_c = (_b = (_a2 = $models().find((m) => m.id === model)) == null ? void 0 : _a2.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.file_upload) ?? true;
      }));
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(atSelectedModel()), deep_read_state(selectedModels()), $models()),
    () => {
      var _a;
      set(webSearchCapableModels, (((_a = atSelectedModel()) == null ? void 0 : _a.id) ? [atSelectedModel().id] : selectedModels()).filter((model) => {
        var _a2, _b, _c, _d;
        return ((_d = (_c = (_b = (_a2 = $models().find((m) => m.id === model)) == null ? void 0 : _a2.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.web_search) ?? true;
      }));
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(atSelectedModel()), deep_read_state(selectedModels()), $models()),
    () => {
      var _a;
      set(imageGenerationCapableModels, (((_a = atSelectedModel()) == null ? void 0 : _a.id) ? [atSelectedModel().id] : selectedModels()).filter((model) => {
        var _a2, _b, _c, _d;
        return ((_d = (_c = (_b = (_a2 = $models().find((m) => m.id === model)) == null ? void 0 : _a2.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.image_generation) ?? true;
      }));
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(atSelectedModel()), deep_read_state(selectedModels()), $models()),
    () => {
      var _a;
      set(codeInterpreterCapableModels, (((_a = atSelectedModel()) == null ? void 0 : _a.id) ? [atSelectedModel().id] : selectedModels()).filter((model) => {
        var _a2, _b, _c, _d;
        return ((_d = (_c = (_b = (_a2 = $models().find((m) => m.id === model)) == null ? void 0 : _a2.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.code_interpreter) ?? true;
      }));
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(atSelectedModel()), deep_read_state(selectedModels()), $models()),
    () => {
      var _a;
      set(toggleFilters, (((_a = atSelectedModel()) == null ? void 0 : _a.id) ? [atSelectedModel().id] : selectedModels()).map((id) => {
        var _a2;
        return ((_a2 = $models().find((model) => model.id === id) || {}) == null ? void 0 : _a2.filters) ?? [];
      }).reduce((acc, filters) => acc.filter((f1) => filters.some((f2) => f2.id === f1.id))));
    }
  );
  legacy_pre_effect(() => ($tools(), $toolServers()), () => {
    set(showToolsButton, ($tools() ?? []).length > 0 || ($toolServers() ?? []).length > 0);
  });
  legacy_pre_effect(
    () => (deep_read_state(atSelectedModel()), deep_read_state(selectedModels()), get$1(codeInterpreterCapableModels), $config(), $_user()),
    () => {
      var _a, _b, _c, _d, _e, _f;
      set(showCodeInterpreterButton, (((_a = atSelectedModel()) == null ? void 0 : _a.id) ? [atSelectedModel().id] : selectedModels()).length === get$1(codeInterpreterCapableModels).length && ((_c = (_b = $config()) == null ? void 0 : _b.features) == null ? void 0 : _c.enable_code_interpreter) && ($_user().role === "admin" || ((_f = (_e = (_d = $_user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.code_interpreter)));
    }
  );
  legacy_pre_effect_reset();
  var $$exports = { setText };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_7 = ($$anchor2) => {
      var div = root_1$6();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var node_1 = child(div_3);
      {
        var consequent = ($$anchor3) => {
          var div_4 = root_2$6();
          var button = child(div_4);
          reset(div_4);
          event("click", button, () => {
            autoScroll(true);
            scrollToBottom();
          });
          append($$anchor3, div_4);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(autoScroll()), deep_read_state(history()), untrack(() => {
            var _a;
            return autoScroll() === false && ((_a = history()) == null ? void 0 : _a.currentId);
          })) $$render(consequent);
        });
      }
      reset(div_3);
      reset(div_2);
      reset(div_1);
      var div_5 = sibling(div_1, 2);
      var div_6 = child(div_5);
      var div_7 = child(div_6);
      var input = child(div_7);
      bind_this(input, ($$value) => set(filesInputElement, $$value), () => get$1(filesInputElement));
      var form = sibling(input, 2);
      set_class(form, 1, "w-full flex flex-col gap-1.5 ");
      var button_1 = child(form);
      var div_8 = sibling(button_1, 2);
      var node_2 = child(div_8);
      {
        var consequent_1 = ($$anchor3) => {
          var div_9 = root_3$6();
          var div_10 = child(div_9);
          var div_11 = child(div_10);
          var img = child(div_11);
          var div_12 = sibling(img, 2);
          var span = child(div_12);
          var text_1 = child(span, true);
          reset(span);
          reset(div_12);
          reset(div_11);
          var div_13 = sibling(div_11, 2);
          var button_2 = child(div_13);
          var node_3 = child(button_2);
          Icon$1(node_3, { name: "XMark" });
          reset(button_2);
          reset(div_13);
          reset(div_10);
          reset(div_9);
          template_effect(
            ($0) => {
              set_attribute(img, "src", $0);
              set_text(text_1, (deep_read_state(atSelectedModel()), untrack(() => atSelectedModel().name)));
            },
            [
              () => (deep_read_state(WEBUI_API_BASE_URL$1), $models(), deep_read_state(atSelectedModel()), $i18n(), untrack(() => `${WEBUI_API_BASE_URL$1}/models/model/profile/image?id=${$models().find((model) => model.id === atSelectedModel().id).id}&lang=${$i18n().language}`))
            ]
          );
          event("click", button_2, () => {
            atSelectedModel(void 0);
          });
          append($$anchor3, div_9);
        };
        if_block(node_2, ($$render) => {
          if (atSelectedModel() !== void 0) $$render(consequent_1);
        });
      }
      var node_4 = sibling(node_2, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_14 = root_4$2();
          each(div_14, 5, files, index, ($$anchor4, file, fileIdx) => {
            var fragment_1 = comment();
            var node_5 = first_child(fragment_1);
            {
              var consequent_3 = ($$anchor5) => {
                var div_15 = root_6$6();
                var div_16 = child(div_15);
                var node_6 = child(div_16);
                Image$1(node_6, {
                  get src() {
                    return get$1(file), untrack(() => get$1(file).url);
                  },
                  alt: "",
                  imageClassName: " size-10 rounded-xl object-cover"
                });
                var node_7 = sibling(node_6, 2);
                {
                  var consequent_2 = ($$anchor6) => {
                    var fragment_2 = root_7$4();
                    next();
                    append($$anchor6, fragment_2);
                  };
                  if_block(node_7, ($$render) => {
                    if (deep_read_state(atSelectedModel()), get$1(visionCapableModels), deep_read_state(selectedModels()), untrack(() => atSelectedModel() ? get$1(visionCapableModels).length === 0 : selectedModels().length !== get$1(visionCapableModels).length)) $$render(consequent_2);
                  });
                }
                reset(div_16);
                var div_17 = sibling(div_16, 2);
                var button_3 = child(div_17);
                reset(div_17);
                reset(div_15);
                template_effect(
                  ($0) => {
                    set_class(button_3, 1, ` bg-white text-black border border-white rounded-full ${($settings(), untrack(() => {
                      var _a;
                      return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden focus:outline-hidden group-hover:visible invisible transition";
                    })) ?? ""}`);
                    set_attribute(button_3, "aria-label", $0);
                  },
                  [() => ($i18n(), untrack(() => $i18n().t("Remove file")))]
                );
                event("click", button_3, () => {
                  files().splice(fileIdx, 1);
                  files(files());
                });
                append($$anchor5, div_15);
              };
              var alternate = ($$anchor5) => {
                {
                  let $0 = derived_safe_equal(() => (get$1(file), untrack(() => {
                    var _a;
                    return (_a = get$1(file)) == null ? void 0 : _a.size;
                  })));
                  let $1 = derived_safe_equal(() => (get$1(file), untrack(() => get$1(file).status === "uploading")));
                  let $2 = derived_safe_equal(() => (get$1(file), untrack(() => {
                    var _a;
                    return ["file", "collection"].includes((_a = get$1(file)) == null ? void 0 : _a.type);
                  })));
                  FileItem($$anchor5, {
                    get item() {
                      return get$1(file);
                    },
                    get name() {
                      return get$1(file), untrack(() => get$1(file).name);
                    },
                    get type() {
                      return get$1(file), untrack(() => get$1(file).type);
                    },
                    get size() {
                      return get$1($0);
                    },
                    get loading() {
                      return get$1($1);
                    },
                    dismissible: true,
                    edit: true,
                    small: true,
                    get modal() {
                      return get$1($2);
                    },
                    $$events: {
                      dismiss: async () => {
                        files().splice(fileIdx, 1);
                        files(files());
                      },
                      click: () => {
                      }
                    }
                  });
                }
              };
              if_block(node_5, ($$render) => {
                if (get$1(file), untrack(() => get$1(file).type === "image")) $$render(consequent_3);
                else $$render(alternate, false);
              });
            }
            append($$anchor4, fragment_1);
          });
          reset(div_14);
          append($$anchor3, div_14);
        };
        if_block(node_4, ($$render) => {
          if (deep_read_state(files()), untrack(() => files().length > 0)) $$render(consequent_4);
        });
      }
      var div_18 = sibling(node_4, 2);
      var button_4 = child(div_18);
      var node_8 = child(button_4);
      Icon$1(node_8, { name: "Plus", className: "size-6 text-muted-foreground" });
      reset(button_4);
      reset(div_18);
      var div_19 = sibling(div_18, 2);
      var div_20 = child(div_19);
      var node_9 = child(div_20);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(placeholder()), $i18n(), untrack(() => placeholder() ? placeholder() : $i18n().t("Send a Message"))));
        bind_this(
          RichTextInput(node_9, {
            id: "chat-input",
            onChange: (e) => {
              prompt(e.md);
              set(command, getCommand());
            },
            get placeholder() {
              return get$1($0);
            },
            oncompositionstart: () => set(isComposing, true),
            oncompositionend: (e) => {
              set(compositionEndedAt, e.timeStamp);
              set(isComposing, false);
            },
            $$events: {
              keydown: async (e) => {
                var _a, _b, _c;
                e = e.detail.event;
                const isCtrlPressed = e.ctrlKey || e.metaKey;
                if (e.key === "Escape") {
                  stopResponse()();
                  atSelectedModel(void 0);
                  selectedToolIds([]);
                  selectedFilterIds([]);
                  webSearchEnabled(false);
                  imageGenerationEnabled(false);
                  codeInterpreterEnabled(false);
                }
                if (prompt() === "" && e.key == "ArrowUp") {
                  e.preventDefault();
                  const userMessageElement = (_a = [...document.getElementsByClassName("user-message")]) == null ? void 0 : _a.at(-1);
                  if (userMessageElement) {
                    userMessageElement.scrollIntoView({ block: "center" });
                    const editButton = (_b = [
                      ...document.getElementsByClassName("edit-user-message-button")
                    ]) == null ? void 0 : _b.at(-1);
                    editButton == null ? void 0 : editButton.click();
                  }
                }
                if (!$mobile() || !("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) {
                  if (inOrNearComposition(e)) {
                    return;
                  }
                  const enterPressed = ((_c = $settings()) == null ? void 0 : _c.ctrlEnterToSend) ?? false ? (e.key === "Enter" || e.keyCode === 13) && isCtrlPressed : (e.key === "Enter" || e.keyCode === 13) && !e.shiftKey;
                  if (enterPressed) {
                    e.preventDefault();
                    if (prompt() !== "" || files().length > 0) {
                      dispatch("submit", prompt());
                    }
                  }
                }
              }
            },
            $$legacy: true
          }),
          ($$value) => set(chatInputElement, $$value),
          () => get$1(chatInputElement)
        );
      }
      reset(div_20);
      reset(div_19);
      var div_21 = sibling(div_19, 2);
      var div_22 = child(div_21);
      var button_5 = child(div_22);
      var node_10 = child(button_5);
      {
        var consequent_5 = ($$anchor3) => {
          Square($$anchor3, { size: 22, fill: "currentColor", class: "size-5" });
        };
        var alternate_1 = ($$anchor3) => {
          Arrow_up($$anchor3, { size: 22, class: "size-5" });
        };
        if_block(node_10, ($$render) => {
          if (generating()) $$render(consequent_5);
          else $$render(alternate_1, false);
        });
      }
      reset(button_5);
      reset(div_22);
      reset(div_21);
      reset(div_8);
      var node_11 = sibling(div_8, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var div_23 = root_11$4();
          var node_12 = child(div_23);
          html(node_12, () => (deep_read_state(marked), $config(), untrack(() => {
            var _a, _b;
            return marked((_b = (_a = $config()) == null ? void 0 : _a.license_metadata) == null ? void 0 : _b.input_footer);
          })));
          reset(div_23);
          append($$anchor3, div_23);
        };
        var alternate_2 = ($$anchor3) => {
          var div_24 = root_12$4();
          append($$anchor3, div_24);
        };
        if_block(node_11, ($$render) => {
          if ($config(), untrack(() => {
            var _a, _b;
            return (_b = (_a = $config()) == null ? void 0 : _a.license_metadata) == null ? void 0 : _b.input_footer;
          })) $$render(consequent_6);
          else $$render(alternate_2, false);
        });
      }
      reset(form);
      reset(div_7);
      reset(div_6);
      reset(div_5);
      reset(div);
      template_effect(() => {
        set_class(div_2, 1, `flex flex-col px-3 md:px-4 lg:px-5 ${($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.widescreenMode) ?? null ? "max-w-full" : "max-w-3xl xl:max-w-4xl 2xl:max-w-5xl";
        })) ?? ""} w-full`);
        set_class(div_6, 1, `${($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.widescreenMode) ?? null ? "max-w-full" : "max-w-3xl xl:max-w-4xl 2xl:max-w-5xl";
        })) ?? ""} px-2.5 md:px-3 lg:px-4 mx-auto inset-x-0`);
        set_attribute(div_8, "dir", ($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.chatDirection) ?? "auto";
        })));
        set_attribute(button_5, "type", generating() ? "button" : "submit");
        button_5.disabled = (deep_read_state(generating()), deep_read_state(prompt()), deep_read_state(files()), untrack(() => !generating() && (prompt() === "" && files().length === 0)));
        div_8.dir = div_8.dir;
      });
      bind_files(input, () => get$1(inputFiles), ($$value) => set(inputFiles, $$value));
      event("change", input, async () => {
        if (get$1(inputFiles) && get$1(inputFiles).length > 0) {
          const _inputFiles = Array.from(get$1(inputFiles));
          inputFilesHandler(_inputFiles);
        } else {
          toast.error($i18n().t(`File not found.`));
        }
        mutate(filesInputElement, get$1(filesInputElement).value = "");
      });
      event(
        "click",
        button_1,
        // check if selectedModels support image input
        () => createMessagePair()(prompt())
      );
      event(
        "click",
        button_4,
        // Remove from UI state
        () => {
          get$1(filesInputElement).click();
        }
      );
      event("click", button_5, () => {
        if (generating()) {
          stopResponse()();
        }
      });
      event("submit", form, preventDefault(() => {
        dispatch("submit", prompt());
      }));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get$1(loaded)) $$render(consequent_7);
    });
  }
  append($$anchor, fragment);
  bind_prop($$props, "setText", setText);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root_2$5 = from_html(`<div class="flex items-center translate-y-[0.5px]"><span class=" text-xs font-medium text-gray-600 dark:text-gray-400 line-clamp-1"> </span></div>`);
var root_3$5 = from_html(`<div class="flex items-center translate-y-[0.5px] px-0.5"><div class=" flex items-center"><span class="relative flex size-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full size-2 bg-green-500"></span></span></div></div>`);
var root_1$5 = from_html(`<!> <!>`, 1);
var root_5$4 = from_html(`<div class="translate-y-[1px]"></div>`);
var root_6$5 = from_html(`<div class="translate-y-[1px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2C8.963 2 14 7.037 14 13.25a.75.75 0 0 1-1.5 0c0-5.385-4.365-9.75-9.75-9.75A.75.75 0 0 1 2 2.75Zm0 4.5a.75.75 0 0 1 .75-.75 6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8 10.35 5.65 8 2.75 8A.75.75 0 0 1 2 7.25ZM3.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" clip-rule="evenodd"></path></svg></div>`);
var root_8$5 = from_html(`<div class="translate-y-[1px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path></svg></div>`);
var root_9$3 = from_html(
  `')
                                                )}\`}
                                        > <div class=" translate-y-[1px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg></div>`,
  1
);
var root_10$3 = from_html(`<div><!></div>`);
var root$5 = from_html(`<button aria-roledescription="model-item"><div class="flex flex-col flex-1 gap-1.5"><div class="flex items-center gap-2"><div class="flex items-center"><div class="line-clamp-1"> </div></div> <div class=" shrink-0 flex items-center gap-2"><!> <!> <!> <!></div></div></div> <div class="ml-auto pl-2 pr-1 flex items-center gap-1.5 shrink-0"><!></div></button>`);
function ModelItem($$anchor, $$props) {
  push($$props, false);
  const [$$stores, $$cleanup] = setup_stores();
  getContext("i18n");
  let selectedModelIdx = prop($$props, "selectedModelIdx", 24, () => -1);
  let item = prop($$props, "item", 24, () => ({}));
  let index2 = prop($$props, "index", 24, () => -1);
  let value = prop($$props, "value", 8, "");
  let onClick = prop($$props, "onClick", 8, () => {
  });
  init();
  var button = root$5();
  var div = child(button);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var text2 = child(div_3, true);
  reset(div_3);
  reset(div_2);
  var div_4 = sibling(div_2, 2);
  var node = child(div_4);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment = root_1$5();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          var div_5 = root_2$5();
          var span = child(div_5);
          var text_1 = child(span, true);
          reset(span);
          reset(div_5);
          template_effect(() => set_text(text_1, (deep_read_state(item()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = item().model.ollama) == null ? void 0 : _a.details) == null ? void 0 : _b.parameter_size) ?? "";
          }))));
          append($$anchor3, div_5);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a, _b;
            return (((_b = (_a = item().model.ollama) == null ? void 0 : _a.details) == null ? void 0 : _b.parameter_size) ?? "") !== "";
          })) $$render(consequent);
        });
      }
      var node_2 = sibling(node_1, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_6 = root_3$5();
          append($$anchor3, div_6);
        };
        if_block(node_2, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a, _b;
            return ((_a = item().model.ollama) == null ? void 0 : _a.expires_at) && new Date(((_b = item().model.ollama) == null ? void 0 : _b.expires_at) * 1e3) > /* @__PURE__ */ new Date();
          })) $$render(consequent_1);
        });
      }
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(item()), untrack(() => item().model.owned_by === "ollama")) $$render(consequent_2);
    });
  }
  var node_3 = sibling(node, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_4 = first_child(fragment_1);
      key(node_4, () => (deep_read_state(item()), untrack(() => item().model.id)), ($$anchor3) => {
        var div_7 = root_5$4();
        append($$anchor3, div_7);
      });
      append($$anchor2, fragment_1);
    };
    if_block(node_3, ($$render) => {
      if (deep_read_state(item()), untrack(() => {
        var _a, _b;
        return (((_b = (_a = item()) == null ? void 0 : _a.model) == null ? void 0 : _b.tags) ?? []).length > 0;
      })) $$render(consequent_3);
    });
  }
  var node_5 = sibling(node_3, 2);
  {
    var consequent_4 = ($$anchor2) => {
      var div_8 = root_6$5();
      append($$anchor2, div_8);
    };
    var alternate = ($$anchor2) => {
      var fragment_2 = comment();
      var node_6 = first_child(fragment_2);
      {
        var consequent_5 = ($$anchor3) => {
          var div_9 = root_8$5();
          append($$anchor3, div_9);
        };
        if_block(
          node_6,
          ($$render) => {
            if (deep_read_state(item()), untrack(() => item().model.connection_type === "external")) $$render(consequent_5);
          },
          true
        );
      }
      append($$anchor2, fragment_2);
    };
    if_block(node_5, ($$render) => {
      if (deep_read_state(item()), untrack(() => {
        var _a;
        return (_a = item().model) == null ? void 0 : _a.direct;
      })) $$render(consequent_4);
      else $$render(alternate, false);
    });
  }
  var node_7 = sibling(node_5, 2);
  {
    var consequent_6 = ($$anchor2) => {
      var fragment_3 = root_9$3();
      next();
      append($$anchor2, fragment_3);
    };
    if_block(node_7, ($$render) => {
      if (deep_read_state(item()), untrack(() => {
        var _a, _b, _c;
        return (_c = (_b = (_a = item().model) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description;
      })) $$render(consequent_6);
    });
  }
  reset(div_4);
  reset(div_1);
  reset(div);
  var div_10 = sibling(div, 2);
  var node_8 = child(div_10);
  {
    var consequent_7 = ($$anchor2) => {
      var div_11 = root_10$3();
      var node_9 = child(div_11);
      Icon$1(node_9, { name: "Check", className: "size-3" });
      reset(div_11);
      append($$anchor2, div_11);
    };
    if_block(node_8, ($$render) => {
      if (deep_read_state(value()), deep_read_state(item()), untrack(() => value() === item().value)) $$render(consequent_7);
    });
  }
  reset(div_10);
  reset(button);
  template_effect(() => {
    set_attribute(button, "aria-label", (deep_read_state(item()), untrack(() => item().label)));
    set_class(button, 1, `flex group/item w-full text-left font-medium line-clamp-1 select-none items-center rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer data-highlighted:bg-muted ${index2() === selectedModelIdx() ? "bg-gray-100 dark:bg-gray-800 group-hover:bg-transparent" : ""}`);
    set_attribute(button, "data-arrow-selected", index2() === selectedModelIdx());
    set_attribute(button, "data-value", (deep_read_state(item()), untrack(() => item().value)));
    set_text(text2, (deep_read_state(item()), untrack(() => item().label)));
  });
  event("click", button, () => {
    onClick()();
  });
  append($$anchor, button);
  pop();
  $$cleanup();
}
var root_2$4 = from_html(`<div><!> <!></div>`);
var root_8$4 = from_html(`<button> </button>`);
var root_9$2 = from_html(`<button> </button>`);
var root_10$2 = from_html(`<button> </button>`);
var root_11$3 = from_html(`<button> </button>`);
var root_12$3 = from_html(`<button> </button>`);
var root_7$3 = from_html(`<div class=" flex w-full bg-white dark:bg-gray-850 overflow-x-auto scrollbar-none font-[450] mb-0.5"><div class="flex gap-1 w-fit text-center text-sm rounded-full bg-transparent px-1.5 whitespace-nowrap"><!> <!> <!> <!> <!></div></div>`);
var root_14$1 = from_html(`<div><div class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-100"> </div></div>`);
var root_15$2 = from_html(`<button class="flex w-full font-medium line-clamp-1 select-none items-center rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer data-highlighted:bg-muted"><div class=" truncate"> </div></button>`);
var root_17$1 = from_html(`<div class="-mt-1 h-fit text-[0.7rem] dark:text-gray-500 line-clamp-1"> </div>`);
var root_16$1 = from_html(`<div class="flex w-full justify-between font-medium select-none rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 rounded-xl cursor-pointer data-highlighted:bg-muted"><div class="flex"><div class="mr-2.5 translate-y-0.5"><!></div> <div class="flex flex-col self-start"><div class="flex gap-1"><div class="line-clamp-1"> </div> <div class="shrink-0"> </div></div> <!></div></div> <div class="mr-2 ml-1 translate-y-0.5"><button class="text-gray-800 dark:text-gray-100"><svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"></path></svg></button></div></div>`);
var root_6$4 = from_html(`<div><!></div> <div class="px-2.5 max-h-64 overflow-y-auto group relative"><!> <!> <!></div> <div class="mb-2.5"></div> <div class="hidden w-[42rem]"></div> <div class="hidden w-[32rem]"></div>`, 1);
var root_1$4 = from_html(`<!> <!>`, 1);
function Selector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $MODEL_DOWNLOAD_POOL = () => store_get(MODEL_DOWNLOAD_POOL, "$MODEL_DOWNLOAD_POOL", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const filteredItems = mutable_source();
  const i18n = getContext("i18n");
  createEventDispatcher();
  let id = prop($$props, "id", 8, "");
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 24, () => $i18n().t("Select a model"));
  let items = prop($$props, "items", 24, () => []);
  let className = prop($$props, "className", 8, "min-w-fit");
  let tagsContainerElement = mutable_source();
  let show = mutable_source(false);
  let tags2 = mutable_source([]);
  let selectedModel = mutable_source("");
  let searchValue = mutable_source("");
  let selectedTag = mutable_source("");
  let selectedConnectionType = mutable_source("");
  let ollamaVersion = mutable_source(null);
  let selectedModelIdx = mutable_source(0);
  const fuse = new Fuse(
    items().map((item) => {
      var _a, _b, _c, _d, _e;
      const _item = {
        ...item,
        modelName: (_a = item.model) == null ? void 0 : _a.name,
        tags: (((_b = item.model) == null ? void 0 : _b.tags) ?? []).map((tag) => tag.name).join(" "),
        desc: (_e = (_d = (_c = item.model) == null ? void 0 : _c.info) == null ? void 0 : _d.meta) == null ? void 0 : _e.description
      };
      return _item;
    }),
    { keys: ["value", "tags", "modelName"], threshold: 0.4 }
  );
  const updateFuse = () => {
    if (fuse) {
      fuse.setCollection(items().map((item) => {
        var _a, _b, _c, _d, _e;
        const _item = {
          ...item,
          modelName: (_a = item.model) == null ? void 0 : _a.name,
          tags: (((_b = item.model) == null ? void 0 : _b.tags) ?? []).map((tag) => tag.name).join(" "),
          desc: (_e = (_d = (_c = item.model) == null ? void 0 : _c.info) == null ? void 0 : _d.meta) == null ? void 0 : _e.description
        };
        return _item;
      }));
    }
  };
  const resetView = async () => {
    await tick();
    const selectedInFiltered = get$1(filteredItems).findIndex((item2) => item2.value === value());
    if (selectedInFiltered >= 0) {
      set(selectedModelIdx, selectedInFiltered);
    } else {
      set(selectedModelIdx, 0);
    }
    await tick();
    const item = document.querySelector(`[data-arrow-selected="true"]`);
    item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
  };
  const pullModelHandler = async () => {
    const sanitizedModelTag = get$1(searchValue).trim().replace(/^ollama\s+(run|pull)\s+/, "");
    if ($MODEL_DOWNLOAD_POOL()[sanitizedModelTag]) {
      toast.error($i18n().t(`Model '{{modelTag}}' is already in queue for downloading.`, { modelTag: sanitizedModelTag }));
      return;
    }
    if (Object.keys($MODEL_DOWNLOAD_POOL()).length === 3) {
      toast.error($i18n().t("Maximum of 3 models can be downloaded simultaneously. Please try again later."));
      return;
    }
    const [res, controller] = await pullModel("static-token", sanitizedModelTag, "0").catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      const reader = res.body.pipeThrough(new TextDecoderStream()).pipeThrough(splitStream("\n")).getReader();
      MODEL_DOWNLOAD_POOL.set({
        ...$MODEL_DOWNLOAD_POOL(),
        [sanitizedModelTag]: {
          ...$MODEL_DOWNLOAD_POOL()[sanitizedModelTag],
          abortController: controller,
          reader,
          done: false
        }
      });
      while (true) {
        try {
          const { value: value2, done } = await reader.read();
          if (done) break;
          let lines = value2.split("\n");
          for (const line of lines) {
            if (line !== "") {
              let data = JSON.parse(line);
              if (data.error) {
                throw data.error;
              }
              if (data.detail) {
                throw data.detail;
              }
              if (data.status) {
                if (data.digest) {
                  let downloadProgress = 0;
                  if (data.completed) {
                    downloadProgress = Math.round(data.completed / data.total * 1e3) / 10;
                  } else {
                    downloadProgress = 100;
                  }
                  MODEL_DOWNLOAD_POOL.set({
                    ...$MODEL_DOWNLOAD_POOL(),
                    [sanitizedModelTag]: {
                      ...$MODEL_DOWNLOAD_POOL()[sanitizedModelTag],
                      pullProgress: downloadProgress,
                      digest: data.digest
                    }
                  });
                } else {
                  toast.success(data.status);
                  MODEL_DOWNLOAD_POOL.set({
                    ...$MODEL_DOWNLOAD_POOL(),
                    [sanitizedModelTag]: {
                      ...$MODEL_DOWNLOAD_POOL()[sanitizedModelTag],
                      done: data.status === "success"
                    }
                  });
                }
              }
            }
          }
        } catch (error) {
          if (typeof error !== "string") {
            error = error.message;
          }
          toast.error(`${error}`);
          break;
        }
      }
      if ($MODEL_DOWNLOAD_POOL()[sanitizedModelTag].done) {
        toast.success($i18n().t(`Model '{{modelName}}' has been successfully downloaded.`, { modelName: sanitizedModelTag }));
      } else {
        toast.error($i18n().t("Download canceled"));
      }
      delete $MODEL_DOWNLOAD_POOL()[sanitizedModelTag];
      MODEL_DOWNLOAD_POOL.set({ ...$MODEL_DOWNLOAD_POOL() });
    }
  };
  const setOllamaVersion = async () => {
    set(ollamaVersion, await getOllamaVersion("static-token").catch((error) => false));
  };
  onMount(async () => {
    if (items()) {
      set(tags2, items().filter((item) => {
        var _a, _b, _c;
        return !(((_c = (_b = (_a = item.model) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.hidden) ?? false);
      }).flatMap((item) => {
        var _a;
        return ((_a = item.model) == null ? void 0 : _a.tags) ?? [];
      }).map((tag) => tag.name.toLowerCase()));
      set(tags2, Array.from(new Set(get$1(tags2))).sort((a, b) => a.localeCompare(b)));
    }
  });
  const cancelModelPullHandler = async (model) => {
    const { reader, abortController } = $MODEL_DOWNLOAD_POOL()[model];
    if (abortController) {
      abortController.abort();
    }
    if (reader) {
      await reader.cancel();
      delete $MODEL_DOWNLOAD_POOL()[model];
      MODEL_DOWNLOAD_POOL.set({ ...$MODEL_DOWNLOAD_POOL() });
      await deleteModel("static-token", model);
      toast.success($i18n().t("{{model}} download has been canceled", { model }));
    }
  };
  legacy_pre_effect(() => (deep_read_state(items()), deep_read_state(value())), () => {
    set(selectedModel, items().find((item) => item.value === value()) ?? "");
  });
  legacy_pre_effect(() => deep_read_state(items()), () => {
    if (items()) {
      updateFuse();
    }
  });
  legacy_pre_effect(
    () => (get$1(searchValue), get$1(selectedTag), get$1(selectedConnectionType), deep_read_state(items())),
    () => {
      set(filteredItems, (get$1(searchValue) ? fuse.search(get$1(searchValue)).map((e) => {
        return e.item;
      }).filter((item) => {
        var _a;
        if (get$1(selectedTag) === "") {
          return true;
        }
        return (((_a = item.model) == null ? void 0 : _a.tags) ?? []).map((tag) => tag.name.toLowerCase()).includes(get$1(selectedTag).toLowerCase());
      }).filter((item) => {
        var _a, _b, _c;
        if (get$1(selectedConnectionType) === "") {
          return true;
        } else if (get$1(selectedConnectionType) === "local") {
          return ((_a = item.model) == null ? void 0 : _a.connection_type) === "local";
        } else if (get$1(selectedConnectionType) === "external") {
          return ((_b = item.model) == null ? void 0 : _b.connection_type) === "external";
        } else if (get$1(selectedConnectionType) === "direct") {
          return (_c = item.model) == null ? void 0 : _c.direct;
        }
      }) : items().filter((item) => {
        var _a;
        if (get$1(selectedTag) === "") {
          return true;
        }
        return (((_a = item.model) == null ? void 0 : _a.tags) ?? []).map((tag) => tag.name.toLowerCase()).includes(get$1(selectedTag).toLowerCase());
      }).filter((item) => {
        var _a, _b, _c;
        if (get$1(selectedConnectionType) === "") {
          return true;
        } else if (get$1(selectedConnectionType) === "local") {
          return ((_a = item.model) == null ? void 0 : _a.connection_type) === "local";
        } else if (get$1(selectedConnectionType) === "external") {
          return ((_b = item.model) == null ? void 0 : _b.connection_type) === "external";
        } else if (get$1(selectedConnectionType) === "direct") {
          return (_c = item.model) == null ? void 0 : _c.direct;
        }
      })).filter((item) => {
        var _a, _b, _c;
        return !(((_c = (_b = (_a = item.model) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.hidden) ?? false);
      }));
    }
  );
  legacy_pre_effect(() => (get$1(selectedTag), get$1(selectedConnectionType)), () => {
    if (get$1(selectedTag) || get$1(selectedConnectionType)) {
      resetView();
    } else {
      resetView();
    }
  });
  legacy_pre_effect(() => get$1(show), () => {
    if (get$1(show)) {
      setOllamaVersion();
    }
  });
  legacy_pre_effect_reset();
  init();
  Menu$1($$anchor, {
    onOpenChange: async () => {
      set(searchValue, "");
      window.setTimeout(() => {
        var _a;
        return (_a = document.getElementById("model-search-input")) == null ? void 0 : _a.focus();
      }, 0);
      resetView();
    },
    closeFocus: false,
    get open() {
      return get$1(show);
    },
    set open($$value) {
      set(show, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$4();
      var node = first_child(fragment_1);
      {
        let $0 = derived_safe_equal(() => ($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden focus:outline-hidden";
        })));
        Menu_trigger(node, {
          get class() {
            return `relative w-full ${get$1($0) ?? ""}`;
          },
          get "aria-label"() {
            return placeholder();
          },
          get id() {
            return `model-selector-${id() ?? ""}-button`;
          },
          children: ($$anchor3, $$slotProps2) => {
            var div = root_2$4();
            var node_1 = child(div);
            {
              var consequent = ($$anchor4) => {
                var text$1 = text();
                template_effect(() => set_text(text$1, (get$1(selectedModel), untrack(() => get$1(selectedModel).label))));
                append($$anchor4, text$1);
              };
              var alternate = ($$anchor4) => {
                var text_1 = text();
                template_effect(() => set_text(text_1, placeholder()));
                append($$anchor4, text_1);
              };
              if_block(node_1, ($$render) => {
                if (get$1(selectedModel)) $$render(consequent);
                else $$render(alternate, false);
              });
            }
            var node_2 = sibling(node_1, 2);
            Icon$1(node_2, {
              name: "ChevronDown",
              className: " self-center ml-2 size-3",
              strokeWidth: "2.5"
            });
            reset(div);
            template_effect(() => set_class(div, 1, `flex w-auto text-left bg-transparent whitespace-nowrap text-[17px] font-medium justify-between ${($settings(), untrack(() => {
              var _a;
              return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:placeholder-gray-100 placeholder-gray-800" : "placeholder-gray-400";
            })) ?? ""}`));
            event("mouseenter", div, async () => {
            });
            append($$anchor3, div);
          },
          $$slots: { default: true }
        });
      }
      var node_3 = sibling(node, 2);
      {
        let $0 = derived_safe_equal(() => $mobile() ? "bottom" : "bottom-start");
        Dropdown_menu_content(node_3, {
          get class() {
            return `${className() ?? ""} max-w-[calc(100vw-1rem)] rounded-2xl p-2 border border-gray-100 dark:border-gray-800 z-40 bg-white dark:bg-gray-850 dark:text-white shadow-lg outline-hidden`;
          },
          get transition() {
            return flyAndScale;
          },
          get side() {
            return get$1($0);
          },
          sideOffset: 4,
          alignOffset: -1,
          children: ($$anchor3, $$slotProps2) => {
            var fragment_4 = comment();
            var node_4 = first_child(fragment_4);
            slot(node_4, $$props, "default", {}, ($$anchor4) => {
              var fragment_5 = root_6$4();
              var div_1 = first_child(fragment_5);
              var node_5 = child(div_1);
              {
                var consequent_5 = ($$anchor5) => {
                  var div_2 = root_7$3();
                  var div_3 = child(div_2);
                  var node_6 = child(div_3);
                  {
                    var consequent_1 = ($$anchor6) => {
                      var button = root_8$4();
                      var text_2 = child(button, true);
                      reset(button);
                      template_effect(
                        ($02) => {
                          set_class(button, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get$1(selectedTag) === "" && get$1(selectedConnectionType) === "" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                          set_attribute(button, "aria-pressed", get$1(selectedTag) === "" && get$1(selectedConnectionType) === "");
                          set_text(text_2, $02);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("All")))]
                      );
                      event("click", button, () => {
                        set(selectedConnectionType, "");
                        set(selectedTag, "");
                      });
                      append($$anchor6, button);
                    };
                    if_block(node_6, ($$render) => {
                      if (deep_read_state(items()), get$1(tags2), untrack(() => items().find((item) => {
                        var _a;
                        return ((_a = item.model) == null ? void 0 : _a.connection_type) === "local";
                      }) || items().find((item) => {
                        var _a;
                        return ((_a = item.model) == null ? void 0 : _a.connection_type) === "external";
                      }) || items().find((item) => {
                        var _a;
                        return (_a = item.model) == null ? void 0 : _a.direct;
                      }) || get$1(tags2).length > 0)) $$render(consequent_1);
                    });
                  }
                  var node_7 = sibling(node_6, 2);
                  {
                    var consequent_2 = ($$anchor6) => {
                      var button_1 = root_9$2();
                      var text_3 = child(button_1, true);
                      reset(button_1);
                      template_effect(
                        ($02) => {
                          set_class(button_1, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get$1(selectedConnectionType) === "local" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                          set_attribute(button_1, "aria-pressed", get$1(selectedConnectionType) === "local");
                          set_text(text_3, $02);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("Local")))]
                      );
                      event("click", button_1, () => {
                        set(selectedTag, "");
                        set(selectedConnectionType, "local");
                      });
                      append($$anchor6, button_1);
                    };
                    if_block(node_7, ($$render) => {
                      if (deep_read_state(items()), untrack(() => items().find((item) => {
                        var _a;
                        return ((_a = item.model) == null ? void 0 : _a.connection_type) === "local";
                      }))) $$render(consequent_2);
                    });
                  }
                  var node_8 = sibling(node_7, 2);
                  {
                    var consequent_3 = ($$anchor6) => {
                      var button_2 = root_10$2();
                      var text_4 = child(button_2, true);
                      reset(button_2);
                      template_effect(
                        ($02) => {
                          set_class(button_2, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get$1(selectedConnectionType) === "external" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                          set_attribute(button_2, "aria-pressed", get$1(selectedConnectionType) === "external");
                          set_text(text_4, $02);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("External")))]
                      );
                      event("click", button_2, () => {
                        set(selectedTag, "");
                        set(selectedConnectionType, "external");
                      });
                      append($$anchor6, button_2);
                    };
                    if_block(node_8, ($$render) => {
                      if (deep_read_state(items()), untrack(() => items().find((item) => {
                        var _a;
                        return ((_a = item.model) == null ? void 0 : _a.connection_type) === "external";
                      }))) $$render(consequent_3);
                    });
                  }
                  var node_9 = sibling(node_8, 2);
                  {
                    var consequent_4 = ($$anchor6) => {
                      var button_3 = root_11$3();
                      var text_5 = child(button_3, true);
                      reset(button_3);
                      template_effect(
                        ($02) => {
                          set_class(button_3, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get$1(selectedConnectionType) === "direct" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                          set_attribute(button_3, "aria-pressed", get$1(selectedConnectionType) === "direct");
                          set_text(text_5, $02);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("Direct")))]
                      );
                      event("click", button_3, () => {
                        set(selectedTag, "");
                        set(selectedConnectionType, "direct");
                      });
                      append($$anchor6, button_3);
                    };
                    if_block(node_9, ($$render) => {
                      if (deep_read_state(items()), untrack(() => items().find((item) => {
                        var _a;
                        return (_a = item.model) == null ? void 0 : _a.direct;
                      }))) $$render(consequent_4);
                    });
                  }
                  var node_10 = sibling(node_9, 2);
                  each(node_10, 1, () => get$1(tags2), index, ($$anchor6, tag) => {
                    var button_4 = root_12$3();
                    var text_6 = child(button_4, true);
                    reset(button_4);
                    template_effect(
                      ($02) => {
                        set_class(button_4, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get$1(selectedTag) === get$1(tag) ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                        set_attribute(button_4, "aria-pressed", get$1(selectedTag) === get$1(tag));
                        set_text(text_6, $02);
                      },
                      [
                        () => (get$1(tag), untrack(() => get$1(tag).length > 16 ? `${get$1(tag).slice(0, 16)}...` : get$1(tag)))
                      ]
                    );
                    event("click", button_4, () => {
                      set(selectedConnectionType, "");
                      set(selectedTag, get$1(tag));
                    });
                    append($$anchor6, button_4);
                  });
                  reset(div_3);
                  bind_this(div_3, ($$value) => set(tagsContainerElement, $$value), () => get$1(tagsContainerElement));
                  reset(div_2);
                  event("wheel", div_2, (e) => {
                    if (e.deltaY !== 0) {
                      e.preventDefault();
                      e.currentTarget.scrollLeft += e.deltaY;
                    }
                  });
                  append($$anchor5, div_2);
                };
                if_block(node_5, ($$render) => {
                  if (get$1(tags2), deep_read_state(items()), untrack(() => get$1(tags2) && items().filter((item) => {
                    var _a, _b, _c;
                    return !(((_c = (_b = (_a = item.model) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.hidden) ?? false);
                  }).length > 0)) $$render(consequent_5);
                });
              }
              reset(div_1);
              var div_4 = sibling(div_1, 2);
              var node_11 = child(div_4);
              each(
                node_11,
                1,
                () => get$1(filteredItems),
                index,
                ($$anchor5, item, index2) => {
                  ModelItem($$anchor5, {
                    get selectedModelIdx() {
                      return get$1(selectedModelIdx);
                    },
                    get item() {
                      return get$1(item);
                    },
                    index: index2,
                    get value() {
                      return value();
                    },
                    onClick: () => {
                      value(get$1(item).value);
                      set(selectedModelIdx, index2);
                      set(show, false);
                    }
                  });
                },
                ($$anchor5) => {
                  var div_5 = root_14$1();
                  var div_6 = child(div_5);
                  var text_7 = child(div_6, true);
                  reset(div_6);
                  reset(div_5);
                  template_effect(($02) => set_text(text_7, $02), [
                    () => ($i18n(), untrack(() => $i18n().t("No results found")))
                  ]);
                  append($$anchor5, div_5);
                }
              );
              var node_12 = sibling(node_11, 2);
              {
                var consequent_6 = ($$anchor5) => {
                  var button_5 = root_15$2();
                  var div_7 = child(button_5);
                  var text_8 = child(div_7, true);
                  reset(div_7);
                  reset(button_5);
                  template_effect(($02) => set_text(text_8, $02), [
                    () => ($i18n(), get$1(searchValue), untrack(() => $i18n().t(`Pull "{{searchValue}}" from Ollama.com`, { searchValue: get$1(searchValue) })))
                  ]);
                  event("click", button_5, () => {
                    pullModelHandler();
                  });
                  append($$anchor5, button_5);
                };
                if_block(node_12, ($$render) => {
                  if (get$1(searchValue), $MODEL_DOWNLOAD_POOL(), get$1(ollamaVersion), $user(), untrack(() => {
                    var _a;
                    return !(get$1(searchValue).trim() in $MODEL_DOWNLOAD_POOL()) && get$1(searchValue) && get$1(ollamaVersion) && ((_a = $user()) == null ? void 0 : _a.role) === "admin";
                  })) $$render(consequent_6);
                });
              }
              var node_13 = sibling(node_12, 2);
              each(
                node_13,
                1,
                () => ($MODEL_DOWNLOAD_POOL(), untrack(() => Object.keys($MODEL_DOWNLOAD_POOL()))),
                index,
                ($$anchor5, model) => {
                  var div_8 = root_16$1();
                  var div_9 = child(div_8);
                  var div_10 = child(div_9);
                  var node_14 = child(div_10);
                  Spinner(node_14, {});
                  reset(div_10);
                  var div_11 = sibling(div_10, 2);
                  var div_12 = child(div_11);
                  var div_13 = child(div_12);
                  var text_9 = child(div_13);
                  reset(div_13);
                  var div_14 = sibling(div_13, 2);
                  var text_10 = child(div_14, true);
                  reset(div_14);
                  reset(div_12);
                  var node_15 = sibling(div_12, 2);
                  {
                    var consequent_7 = ($$anchor6) => {
                      var div_15 = root_17$1();
                      var text_11 = child(div_15, true);
                      reset(div_15);
                      template_effect(() => set_text(text_11, ($MODEL_DOWNLOAD_POOL(), get$1(model), untrack(() => $MODEL_DOWNLOAD_POOL()[get$1(model)].digest))));
                      append($$anchor6, div_15);
                    };
                    if_block(node_15, ($$render) => {
                      if ($MODEL_DOWNLOAD_POOL(), get$1(model), untrack(() => "digest" in $MODEL_DOWNLOAD_POOL()[get$1(model)] && $MODEL_DOWNLOAD_POOL()[get$1(model)].digest)) $$render(consequent_7);
                    });
                  }
                  reset(div_11);
                  reset(div_9);
                  var div_16 = sibling(div_9, 2);
                  var button_6 = child(div_16);
                  reset(div_16);
                  reset(div_8);
                  template_effect(() => {
                    set_text(text_9, `Downloading "${get$1(model) ?? ""}"`);
                    set_text(text_10, ($MODEL_DOWNLOAD_POOL(), get$1(model), untrack(() => "pullProgress" in $MODEL_DOWNLOAD_POOL()[get$1(model)] ? `(${$MODEL_DOWNLOAD_POOL()[get$1(model)].pullProgress}%)` : "")));
                  });
                  event("click", button_6, () => {
                    cancelModelPullHandler(get$1(model));
                  });
                  append($$anchor5, div_8);
                }
              );
              reset(div_4);
              next(6);
              append($$anchor4, fragment_5);
            });
            append($$anchor3, fragment_4);
          },
          $$slots: { default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_1$3 = from_html(`<div class="flex w-full max-w-fit"><div class="overflow-hidden w-full"><div><!></div></div></div>`);
var root$4 = from_html(`<div class="flex flex-col w-full items-start"></div>`);
function ModelSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let selectedModels = prop($$props, "selectedModels", 28, () => [""]);
  legacy_pre_effect(() => (deep_read_state(selectedModels()), $models()), () => {
    if (selectedModels().length > 0 && $models().length > 0) {
      const _selectedModels = selectedModels().map((model) => $models().map((m) => m.id).includes(model) ? model : "");
      if (JSON.stringify(_selectedModels) !== JSON.stringify(selectedModels())) {
        selectedModels(_selectedModels);
      }
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root$4();
  each(div, 5, selectedModels, index, ($$anchor2, selectedModel, selectedModelIdx) => {
    var div_1 = root_1$3();
    var div_2 = child(div_1);
    var div_3 = child(div_2);
    var node = child(div_3);
    {
      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Select a model"))));
      let $1 = derived_safe_equal(() => ($models(), untrack(() => $models().map((model) => ({ value: model.id, label: model.name, model })))));
      Selector(node, {
        id: `${selectedModelIdx}`,
        get placeholder() {
          return get$1($0);
        },
        get items() {
          return get$1($1);
        },
        get value() {
          return selectedModels()[selectedModelIdx];
        },
        set value($$value) {
          selectedModels()[selectedModelIdx] = $$value, invalidate_inner_signals(() => selectedModels());
        },
        $$legacy: true
      });
    }
    reset(div_3);
    reset(div_2);
    reset(div_1);
    template_effect(() => set_class(div_3, 1, `max-w-full ${($settings(), untrack(() => {
      var _a;
      return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "m-1" : "mr-1";
    })) ?? ""}`));
    append($$anchor2, div_1);
  });
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_6$3 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_8$3 = from_html(`<div class="flex items-center"> </div>`);
var root_10$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_12$2 = from_html(`<div class="flex items-center"> </div>`);
var root_15$1 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_16 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_13 = from_html(`<!> <!>`, 1);
var root_11$2 = from_html(`<!> <!>`, 1);
var root_17 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_20 = from_html(`<div class="flex items-center"> </div>`);
var root_23 = from_html(`<div class="flex items-center"> </div>`);
var root_19 = from_html(`<!> <!>`, 1);
var root_24 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_18 = from_html(`<hr class="border-gray-50 dark:border-gray-800 my-1"/> <!> <!>`, 1);
var root_4$1 = from_html(`<!> <!> <hr class="border-gray-50 dark:border-gray-800 my-1"/> <!> <!> <!> <!>`, 1);
var root_3$4 = from_html(`<div slot="content"><!></div>`);
var root$3 = from_html(`<!> <!>`, 1);
function Menu($$anchor, $$props) {
  push($$props, false);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $artifactContents = () => store_get(artifactContents, "$artifactContents", $$stores);
  const $folders = () => store_get(folders, "$folders", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let shareHandler = prop($$props, "shareHandler", 8);
  let moveChatHandler = prop($$props, "moveChatHandler", 8);
  let archiveChatHandler = prop($$props, "archiveChatHandler", 8);
  let chat = prop($$props, "chat", 8);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  const getChatAsText = async () => {
    const history = chat().chat.history;
    const messages = createMessagesList(history, history.currentId);
    const chatText = messages.reduce(
      (a, message, i, arr) => {
        return `${a}### ${message.role.toUpperCase()}
${message.content}

`;
      },
      ""
    );
    return chatText.trim();
  };
  const downloadTxt = async () => {
    const chatText = await getChatAsText();
    let blob = new Blob([chatText], { type: "text/plain" });
    {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `chat-${chat().chat.title}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };
  const downloadJSONExport = async () => {
    var _a;
    if (chat().id) {
      let chatObj = null;
      if ((((_a = chat()) == null ? void 0 : _a.id) ?? "").startsWith("local") || $temporaryChatEnabled()) {
        chatObj = chat();
      } else {
        chatObj = null;
      }
      let blob = new Blob([JSON.stringify([chatObj])], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `chat-export-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };
  init();
  var fragment = root$3();
  var node = first_child(fragment);
  {
    if_block(node, ($$render) => {
    });
  }
  var node_2 = sibling(node, 2);
  Dropdown(node_2, {
    $$events: {
      change: (e) => {
        if (e.detail === false) {
          onClose()();
        }
      }
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node_3 = first_child(fragment_1);
      slot(node_3, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div_2 = root_3$4();
        var node_4 = child(div_2);
        Dropdown_menu_content(node_4, {
          class: "w-full max-w-[200px] rounded-2xl px-1 py-1  border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg transition",
          sideOffset: 8,
          side: "bottom",
          align: "end",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_4$1();
            var node_5 = first_child(fragment_2);
            {
              var consequent_1 = ($$anchor4) => {
                Menu_item($$anchor4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                  id: "chat-controls-button",
                  $$events: {
                    click: async () => {
                      await showControls.set(true);
                      await showArtifacts.set(false);
                      await showEmbeds.set(false);
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_4 = root_6$3();
                    var node_6 = first_child(fragment_4);
                    Icon$1(node_6, {
                      name: "AdjustmentsHorizontal",
                      className: " size-4",
                      strokeWidth: "1.5"
                    });
                    var div_3 = sibling(node_6, 2);
                    var text2 = child(div_3, true);
                    reset(div_3);
                    template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Controls")))]);
                    append($$anchor5, fragment_4);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_5, ($$render) => {
                if ($mobile(), $user(), untrack(() => {
                  var _a, _b, _c;
                  return $mobile() && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user()) == null ? void 0 : _b.permissions.chat) == null ? void 0 : _c.controls) ?? true));
                })) $$render(consequent_1);
              });
            }
            var node_7 = sibling(node_5, 2);
            {
              var consequent_2 = ($$anchor4) => {
                Menu_item($$anchor4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                  id: "chat-artifacts-button",
                  $$events: {
                    click: async () => {
                      await showControls.set(true);
                      await showArtifacts.set(true);
                      await showEmbeds.set(false);
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var div_4 = root_8$3();
                    var text_1 = child(div_4, true);
                    reset(div_4);
                    template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Artifacts")))]);
                    append($$anchor5, div_4);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_7, ($$render) => {
                if ($artifactContents(), untrack(() => ($artifactContents() ?? []).length > 0)) $$render(consequent_2);
              });
            }
            var node_8 = sibling(node_7, 4);
            {
              var consequent_3 = ($$anchor4) => {
                Menu_item($$anchor4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                  id: "chat-share-button",
                  $$events: {
                    click: () => {
                      shareHandler()();
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_7 = root_10$1();
                    var node_9 = first_child(fragment_7);
                    Icon$1(node_9, { name: "Share", strokeWidth: "1.5" });
                    var div_5 = sibling(node_9, 2);
                    var text_2 = child(div_5, true);
                    reset(div_5);
                    template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
                    append($$anchor5, fragment_7);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_8, ($$render) => {
                if ($temporaryChatEnabled(), $user(), untrack(() => {
                  var _a, _b, _c;
                  return !$temporaryChatEnabled() && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user().permissions) == null ? void 0 : _b.chat) == null ? void 0 : _c.share) ?? true));
                })) $$render(consequent_3);
              });
            }
            var node_10 = sibling(node_8, 2);
            Menu_sub(node_10, {
              children: ($$anchor4, $$slotProps3) => {
                var fragment_8 = root_11$2();
                var node_11 = first_child(fragment_8);
                Menu_sub_trigger(node_11, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                  children: ($$anchor5, $$slotProps4) => {
                    var div_6 = root_12$2();
                    var text_3 = child(div_6, true);
                    reset(div_6);
                    template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Download")))]);
                    append($$anchor5, div_6);
                  },
                  $$slots: { default: true }
                });
                var node_12 = sibling(node_11, 2);
                Menu_sub_content(node_12, {
                  class: "w-full rounded-2xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white border border-gray-100  dark:border-gray-800 shadow-lg max-h-52 overflow-y-auto scrollbar-hidden",
                  get transition() {
                    return flyAndScale;
                  },
                  sideOffset: 8,
                  children: ($$anchor5, $$slotProps4) => {
                    var fragment_9 = root_13();
                    var node_13 = first_child(fragment_9);
                    {
                      var consequent_4 = ($$anchor6) => {
                        Menu_item($$anchor6, {
                          class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                          $$events: {
                            click: () => {
                              downloadJSONExport();
                            }
                          },
                          children: ($$anchor7, $$slotProps5) => {
                            var div_7 = root_15$1();
                            var text_4 = child(div_7, true);
                            reset(div_7);
                            template_effect(($0) => set_text(text_4, $0), [
                              () => ($i18n(), untrack(() => $i18n().t("Export chat (.json)")))
                            ]);
                            append($$anchor7, div_7);
                          },
                          $$slots: { default: true }
                        });
                      };
                      if_block(node_13, ($$render) => {
                        if ($user(), untrack(() => {
                          var _a, _b, _c;
                          return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user().permissions) == null ? void 0 : _b.chat) == null ? void 0 : _c.export) ?? true);
                        })) $$render(consequent_4);
                      });
                    }
                    var node_14 = sibling(node_13, 2);
                    Menu_item(node_14, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                      $$events: {
                        click: () => {
                          downloadTxt();
                        }
                      },
                      children: ($$anchor6, $$slotProps5) => {
                        var div_8 = root_16();
                        var text_5 = child(div_8, true);
                        reset(div_8);
                        template_effect(($0) => set_text(text_5, $0), [
                          () => ($i18n(), untrack(() => $i18n().t("Plain text (.txt)")))
                        ]);
                        append($$anchor6, div_8);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_9);
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_8);
              },
              $$slots: { default: true }
            });
            var node_15 = sibling(node_10, 2);
            Menu_item(node_15, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
              id: "chat-copy-button",
              $$events: {
                click: async () => {
                  const res = await copyToClipboard(await getChatAsText()).catch((e) => {
                    console.error(e);
                  });
                  if (res) {
                    toast.success($i18n().t("Copied to clipboard"));
                  }
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_11 = root_17();
                var node_16 = first_child(fragment_11);
                Icon$1(node_16, { name: "Clipboard", className: " size-4", strokeWidth: "1.5" });
                var div_9 = sibling(node_16, 2);
                var text_6 = child(div_9, true);
                reset(div_9);
                template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Copy")))]);
                append($$anchor4, fragment_11);
              },
              $$slots: { default: true }
            });
            var node_17 = sibling(node_15, 2);
            {
              var consequent_5 = ($$anchor4) => {
                var fragment_12 = root_18();
                var node_18 = sibling(first_child(fragment_12), 2);
                Menu_sub(node_18, {
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_13 = root_19();
                    var node_19 = first_child(fragment_13);
                    Menu_sub_trigger(node_19, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                      children: ($$anchor6, $$slotProps4) => {
                        var div_10 = root_20();
                        var text_7 = child(div_10, true);
                        reset(div_10);
                        template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Move")))]);
                        append($$anchor6, div_10);
                      },
                      $$slots: { default: true }
                    });
                    var node_20 = sibling(node_19, 2);
                    Menu_sub_content(node_20, {
                      class: "w-full rounded-2xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white border border-gray-100  dark:border-gray-800 shadow-lg max-h-52 overflow-y-auto scrollbar-hidden",
                      get transition() {
                        return flyAndScale;
                      },
                      sideOffset: 8,
                      children: ($$anchor6, $$slotProps4) => {
                        var fragment_14 = comment();
                        var node_21 = first_child(fragment_14);
                        each(
                          node_21,
                          1,
                          () => ($folders(), untrack(() => $folders().sort((a, b) => b.updated_at - a.updated_at))),
                          index,
                          ($$anchor7, folder) => {
                            Menu_item($$anchor7, {
                              class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                              $$events: {
                                click: () => {
                                  var _a, _b;
                                  moveChatHandler()((_a = chat()) == null ? void 0 : _a.id, (_b = get$1(folder)) == null ? void 0 : _b.id);
                                }
                              },
                              children: ($$anchor8, $$slotProps5) => {
                                var div_11 = root_23();
                                var text_8 = child(div_11, true);
                                reset(div_11);
                                template_effect(() => set_text(text_8, (get$1(folder), untrack(() => {
                                  var _a;
                                  return ((_a = get$1(folder)) == null ? void 0 : _a.name) ?? "Folder";
                                }))));
                                append($$anchor8, div_11);
                              },
                              $$slots: { default: true }
                            });
                          }
                        );
                        append($$anchor6, fragment_14);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_13);
                  },
                  $$slots: { default: true }
                });
                var node_22 = sibling(node_18, 2);
                Menu_item(node_22, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                  $$events: {
                    click: () => {
                      archiveChatHandler()();
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_16 = root_24();
                    var node_23 = first_child(fragment_16);
                    Icon$1(node_23, { name: "ArchiveBox", className: "size-4", strokeWidth: "1.5" });
                    var div_12 = sibling(node_23, 2);
                    var text_9 = child(div_12, true);
                    reset(div_12);
                    template_effect(($0) => set_text(text_9, $0), [() => ($i18n(), untrack(() => $i18n().t("Archive")))]);
                    append($$anchor5, fragment_16);
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_12);
              };
              if_block(node_17, ($$render) => {
                if ($temporaryChatEnabled(), deep_read_state(chat()), untrack(() => {
                  var _a;
                  return !$temporaryChatEnabled() && ((_a = chat()) == null ? void 0 : _a.id);
                })) $$render(consequent_5);
              });
            }
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        append($$anchor2, div_2);
      }
    }
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$2 = from_html(`<div class="-translate-x-0.5 mr-1 flex flex-none items-center text-gray-600 dark:text-gray-400"><button class=" cursor-pointer flex items-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition px-1 py-1.5"><div class="flex items-center justify-center shrink-0 "><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M6.83496 3.99992C6.38353 4.00411 6.01421 4.0122 5.69824 4.03801C5.31232 4.06954 5.03904 4.12266 4.82227 4.20012L4.62207 4.28606C4.18264 4.50996 3.81498 4.85035 3.55859 5.26848L3.45605 5.45207C3.33013 5.69922 3.25006 6.01354 3.20801 6.52824C3.16533 7.05065 3.16504 7.71885 3.16504 8.66301V11.3271C3.16504 12.2712 3.16533 12.9394 3.20801 13.4618C3.25006 13.9766 3.33013 14.2909 3.45605 14.538L3.55859 14.7216C3.81498 15.1397 4.18266 15.4801 4.62207 15.704L4.82227 15.79C5.03904 15.8674 5.31234 15.9205 5.69824 15.9521C6.01398 15.9779 6.383 15.986 6.83398 15.9902L6.83496 3.99992ZM18.165 11.3271C18.165 12.2493 18.1653 12.9811 18.1172 13.5702C18.0745 14.0924 17.9916 14.5472 17.8125 14.9648L17.7295 15.1415C17.394 15.8 16.8834 16.3511 16.2568 16.7353L15.9814 16.8896C15.5157 17.1268 15.0069 17.2285 14.4102 17.2773C13.821 17.3254 13.0893 17.3251 12.167 17.3251H7.83301C6.91071 17.3251 6.17898 17.3254 5.58984 17.2773C5.06757 17.2346 4.61294 17.1508 4.19531 16.9716L4.01855 16.8896C3.36014 16.5541 2.80898 16.0434 2.4248 15.4169L2.27051 15.1415C2.03328 14.6758 1.93158 14.167 1.88281 13.5702C1.83468 12.9811 1.83496 12.2493 1.83496 11.3271V8.66301C1.83496 7.74072 1.83468 7.00898 1.88281 6.41985C1.93157 5.82309 2.03329 5.31432 2.27051 4.84856L2.4248 4.57317C2.80898 3.94666 3.36012 3.436 4.01855 3.10051L4.19531 3.0175C4.61285 2.83843 5.06771 2.75548 5.58984 2.71281C6.17898 2.66468 6.91071 2.66496 7.83301 2.66496H12.167C13.0893 2.66496 13.821 2.66468 14.4102 2.71281C15.0069 2.76157 15.5157 2.86329 15.9814 3.10051L16.2568 3.25481C16.8833 3.63898 17.394 4.19012 17.7295 4.84856L17.8125 5.02531C17.9916 5.44285 18.0745 5.89771 18.1172 6.41985C18.1653 7.00898 18.165 7.74072 18.165 8.66301V11.3271ZM8.16406 15.995H12.167C13.1112 15.995 13.7794 15.9947 14.3018 15.9521C14.8164 15.91 15.1308 15.8299 15.3779 15.704L15.5615 15.6015C15.9797 15.3451 16.32 14.9774 16.5439 14.5381L16.6299 14.3379C16.7073 14.1212 16.7594 13.8478 16.791 13.4619C16.8336 12.9395 16.8349 12.2706 16.8349 11.3262V8.66309C16.8349 7.71888 16.8336 7.04973 16.791 6.52731C16.7594 6.11177 16.7073 5.83848 16.6299 5.62172L16.5439 5.42152C16.32 4.98213 15.9796 4.62255 15.5615 4.39868L15.3779 4.29614C15.1308 4.17023 14.8164 4.09014 14.3018 4.04809C13.7794 4.00543 13.1112 4.00513 12.167 4.00513H8.16504L8.16406 15.995Z"></path></svg></div></button></div>`);
var root_4 = from_html(`<button class="flex cursor-pointer px-2 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 transition" id="temporary-chat-button"><div class=" m-auto self-center"><!></div></button>`);
var root_8$2 = from_html(`<button class="flex cursor-pointer px-2 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 transition" id="save-temporary-chat-button"><div class=" m-auto self-center"><!></div></button>`);
var root_9$1 = from_html(`<button aria-label="New Chat"><div class=" m-auto self-center"><!></div></button>`);
var root_11$1 = from_html(`<button class="flex cursor-pointer px-2 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 transition" id="chat-context-menu-button"><div class=" m-auto self-center"><!></div></button>`);
var root_12$1 = from_html(`<button class=" flex cursor-pointer px-2 py-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="Controls"><div class=" m-auto self-center"></div></button>`);
var root_14 = from_html(`<div class="select-none flex rounded-xl p-1.5 w-full hover:bg-gray-50 dark:hover:bg-gray-850 transition"><div class=" self-center"><span class="sr-only"> </span> <!></div></div>`);
var root_15 = from_html(`<div class=" w-full z-30 text-center"><div class="text-xs text-gray-500"> </div></div>`);
var root$2 = from_html(`<button id="new-chat-button" class="hidden" aria-label="New Chat"></button> <nav><div class="flex items-center w-full pl-1.5 pr-1 pt-1 bg-white dark:bg-gray-900"><div id="navbar-bg-gradient-to-b"></div> <div class=" flex max-w-full w-full mx-auto px-1.5 md:px-2 pt-0.5 bg-transparent"><div class="flex items-center w-full max-w-full"><!> <div><!></div> <div class="self-start flex flex-none items-center text-gray-600 dark:text-gray-400"><!> <!> <!> <!> <!></div></div></div></div> <div class="w-full h-4 bg-transparent pointer-events-none"></div> <!></nav>`, 1);
function Navbar($$anchor, $$props) {
  push($$props, false);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $showControls = () => store_get(showControls, "$showControls", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let initNewChat = prop($$props, "initNewChat", 8);
  let shareEnabled = prop($$props, "shareEnabled", 8, false);
  let chat = prop($$props, "chat", 8);
  let selectedModels = prop($$props, "selectedModels", 12);
  let showModelSelector = prop($$props, "showModelSelector", 8, true);
  let onSaveTempChat = prop($$props, "onSaveTempChat", 8);
  let archiveChatHandler = prop($$props, "archiveChatHandler", 8);
  let moveChatHandler = prop($$props, "moveChatHandler", 8);
  init();
  var fragment = root$2();
  var button = first_child(fragment);
  var nav = sibling(button, 2);
  var div = child(nav);
  var div_1 = child(div);
  var div_2 = sibling(div_1, 2);
  var div_3 = child(div_2);
  var node = child(div_3);
  {
    var consequent = ($$anchor2) => {
      var div_4 = root_1$2();
      var button_1 = child(div_4);
      reset(div_4);
      event("click", button_1, () => {
        showSidebar.set(!$showSidebar());
      });
      append($$anchor2, div_4);
    };
    if_block(node, ($$render) => {
      if ($mobile() && !$showSidebar()) $$render(consequent);
    });
  }
  var div_5 = sibling(node, 2);
  var node_1 = child(div_5);
  {
    var consequent_1 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => !shareEnabled());
        ModelSelector($$anchor2, {
          get showSetDefault() {
            return get$1($0);
          },
          get selectedModels() {
            return selectedModels();
          },
          set selectedModels($$value) {
            selectedModels($$value);
          },
          $$legacy: true
        });
      }
    };
    if_block(node_1, ($$render) => {
      if (showModelSelector()) $$render(consequent_1);
    });
  }
  reset(div_5);
  var div_6 = sibling(div_5, 2);
  var node_2 = child(div_6);
  {
    var consequent_5 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_3 = first_child(fragment_2);
      {
        var consequent_3 = ($$anchor3) => {
          var button_2 = root_4();
          var div_7 = child(button_2);
          var node_4 = child(div_7);
          {
            var consequent_2 = ($$anchor4) => {
              Icon$1($$anchor4, {
                name: "ChatBubbleDottedChecked",
                className: " size-4.5",
                strokeWidth: "1.5"
              });
            };
            var alternate = ($$anchor4) => {
              Icon$1($$anchor4, {
                name: "ChatBubbleDotted",
                className: " size-4.5",
                strokeWidth: "1.5"
              });
            };
            if_block(node_4, ($$render) => {
              if ($temporaryChatEnabled()) $$render(consequent_2);
              else $$render(alternate, false);
            });
          }
          reset(div_7);
          reset(button_2);
          event("click", button_2, async () => {
            var _a;
            if ((((_a = $settings()) == null ? void 0 : _a.temporaryChatByDefault) ?? false) && $temporaryChatEnabled()) {
              await temporaryChatEnabled.set(null);
            } else {
              await temporaryChatEnabled.set(!$temporaryChatEnabled());
            }
            await goto("/");
            if ($temporaryChatEnabled()) {
              window.history.replaceState(null, "", "?temporary-chat=true");
            } else {
              window.history.replaceState(null, "", location.pathname);
            }
          });
          append($$anchor3, button_2);
        };
        var alternate_1 = ($$anchor3) => {
          var fragment_5 = comment();
          var node_5 = first_child(fragment_5);
          {
            var consequent_4 = ($$anchor4) => {
              var button_3 = root_8$2();
              var div_8 = child(button_3);
              var node_6 = child(div_8);
              Icon$1(node_6, {
                name: "ChatCheck",
                className: " size-4.5",
                strokeWidth: "1.5"
              });
              reset(div_8);
              reset(button_3);
              event("click", button_3, async () => {
                onSaveTempChat()();
              });
              append($$anchor4, button_3);
            };
            if_block(
              node_5,
              ($$render) => {
                if ($temporaryChatEnabled()) $$render(consequent_4);
              },
              true
            );
          }
          append($$anchor3, fragment_5);
        };
        if_block(node_3, ($$render) => {
          if (deep_read_state(chat()), untrack(() => {
            var _a;
            return !((_a = chat()) == null ? void 0 : _a.id);
          })) $$render(consequent_3);
          else $$render(alternate_1, false);
        });
      }
      append($$anchor2, fragment_2);
    };
    if_block(node_2, ($$render) => {
      if ($user(), untrack(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        return ((_a = $user()) == null ? void 0 : _a.role) === "user" ? (((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.temporary) ?? true) && !(((_g = (_f = (_e = $user()) == null ? void 0 : _e.permissions) == null ? void 0 : _f.chat) == null ? void 0 : _g.temporary_enforced) ?? false) : true;
      })) $$render(consequent_5);
    });
  }
  var node_7 = sibling(node_2, 2);
  {
    var consequent_6 = ($$anchor2) => {
      var button_4 = root_9$1();
      var div_9 = child(button_4);
      var node_8 = child(div_9);
      Icon$1(node_8, { name: "ChatPlus", className: " size-4.5", strokeWidth: "1.5" });
      reset(div_9);
      reset(button_4);
      template_effect(() => set_class(button_4, 1, ` flex ${$showSidebar() ? "md:hidden" : ""} cursor-pointer px-2 py-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 transition`));
      event("click", button_4, () => {
        initNewChat()();
      });
      append($$anchor2, button_4);
    };
    if_block(node_7, ($$render) => {
      if ($mobile(), $temporaryChatEnabled(), deep_read_state(chat()), untrack(() => $mobile() && !$temporaryChatEnabled() && chat() && chat().id)) $$render(consequent_6);
    });
  }
  var node_9 = sibling(node_7, 2);
  {
    var consequent_7 = ($$anchor2) => {
      Menu($$anchor2, {
        get chat() {
          return chat();
        },
        get shareEnabled() {
          return shareEnabled();
        },
        shareHandler: () => {
          showShareChatModal = !showShareChatModal;
        },
        archiveChatHandler: () => {
          archiveChatHandler()(chat().id);
        },
        get moveChatHandler() {
          return moveChatHandler();
        },
        children: ($$anchor3, $$slotProps) => {
          var button_5 = root_11$1();
          var div_10 = child(button_5);
          var node_10 = child(div_10);
          Icon$1(node_10, {
            name: "EllipsisHorizontal",
            className: " size-5",
            strokeWidth: "1.5"
          });
          reset(div_10);
          reset(button_5);
          append($$anchor3, button_5);
        },
        $$slots: { default: true }
      });
    };
    if_block(node_9, ($$render) => {
      if (deep_read_state(shareEnabled()), deep_read_state(chat()), $temporaryChatEnabled(), untrack(() => shareEnabled() && chat() && (chat().id || $temporaryChatEnabled()))) $$render(consequent_7);
    });
  }
  var node_11 = sibling(node_9, 2);
  {
    var consequent_8 = ($$anchor2) => {
      var button_6 = root_12$1();
      event("click", button_6, async () => {
        await showControls.set(!$showControls());
      });
      append($$anchor2, button_6);
    };
    if_block(node_11, ($$render) => {
      if ($user(), untrack(() => {
        var _a, _b, _c;
        return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user()) == null ? void 0 : _b.permissions.chat) == null ? void 0 : _c.controls) ?? true);
      })) $$render(consequent_8);
    });
  }
  var node_12 = sibling(node_11, 2);
  {
    var consequent_9 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a;
          return (_a = $user()) == null ? void 0 : _a.role;
        })));
        UserMenu($$anchor2, {
          className: "max-w-[240px]",
          get role() {
            return get$1($0);
          },
          help: true,
          $$events: {
            show: (e) => {
              if (e.detail === "archived-chat") {
                showArchivedChats.set(true);
              }
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var div_11 = root_14();
            var div_12 = child(div_11);
            var span = child(div_12);
            var text2 = child(span, true);
            reset(span);
            var node_13 = sibling(span, 2);
            Icon$1(node_13, { name: "UserGroup", className: "w-5 h-5", strokeWidth: "1.5" });
            reset(div_12);
            reset(div_11);
            template_effect(($02) => set_text(text2, $02), [() => ($i18n(), untrack(() => $i18n().t("User menu")))]);
            append($$anchor3, div_11);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_12, ($$render) => {
      if ($user() !== void 0 && $user() !== null) $$render(consequent_9);
    });
  }
  reset(div_6);
  reset(div_3);
  reset(div_2);
  reset(div);
  var node_14 = sibling(div, 4);
  {
    var consequent_10 = ($$anchor2) => {
      var div_13 = root_15();
      var div_14 = child(div_13);
      var text_1 = child(div_14, true);
      reset(div_14);
      reset(div_13);
      template_effect(($0) => set_text(text_1, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Temporary Chat")))
      ]);
      append($$anchor2, div_13);
    };
    if_block(node_14, ($$render) => {
      if ($temporaryChatEnabled(), $chatId(), untrack(() => $temporaryChatEnabled() && ($chatId() ?? "").startsWith("local:"))) $$render(consequent_10);
    });
  }
  reset(nav);
  template_effect(() => {
    set_class(nav, 1, `sticky top-0.5 z-30 w-full ${(deep_read_state(chat()), untrack(() => {
      var _a;
      return ((_a = chat()) == null ? void 0 : _a.id) ? "pb-1" : "pb-1";
    })) ?? ""} -mb-12 flex flex-col items-center drag-region`);
    set_class(div_1, 1, `${(deep_read_state(chat()), untrack(() => {
      var _a;
      return ((_a = chat()) == null ? void 0 : _a.id) ? "invisible" : "invisible";
    })) ?? ""} pointer-events-none absolute inset-0 -bottom-10 z-[-1]`);
    set_class(div_5, 1, `flex-1 overflow-hidden max-w-full self-center
                        ${$showSidebar() ? "ml-1" : ""}
                        `);
  });
  event("click", button, () => {
    initNewChat()();
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3$3 = from_html(`<div class="flex flex-col gap-1 mt-1.5" slot="content"></div>`);
var root_2$3 = from_html(`<!> <hr class="my-2 border-gray-50 dark:border-gray-700/10"/>`, 1);
var root_6$2 = from_html(`<div slot="content"><textarea rows="4"></textarea></div>`);
var root_5$3 = from_html(`<!> <hr class="my-2 border-gray-50 dark:border-gray-700/10"/>`, 1);
var root_1$1 = from_html(`<div class=" dark:text-gray-200 text-sm font-primary py-0.5 px-0.5"><!> <!></div>`);
var root$1 = from_html(`<div class=" dark:text-white"><div class=" flex items-center justify-between dark:text-gray-100 mb-2"><div class=" text-lg font-medium self-center font-primary"> </div> <button class="self-center"><!></button></div> <!></div>`);
function Controls($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let chatFiles = prop($$props, "chatFiles", 28, () => []);
  let params = prop($$props, "params", 28, () => ({}));
  init();
  var div = root$1();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  var button = sibling(div_2, 2);
  var node = child(button);
  Icon$1(node, { name: "XMark", className: "size-3.5" });
  reset(button);
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_3 = root_1$1();
      var node_2 = child(div_3);
      {
        var consequent = ($$anchor3) => {
          var fragment = root_2$3();
          var node_3 = first_child(fragment);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Files"))));
            Collapsible(node_3, {
              get title() {
                return get$1($0);
              },
              open: true,
              buttonClassName: "w-full",
              $$slots: {
                content: ($$anchor4, $$slotProps) => {
                  var div_4 = root_3$3();
                  each(div_4, 5, chatFiles, index, ($$anchor5, file, fileIdx) => {
                    {
                      let $02 = derived_safe_equal(() => (get$1(file), untrack(() => {
                        var _a;
                        return ((_a = get$1(file)) == null ? void 0 : _a.url) ? get$1(file).url : null;
                      })));
                      let $1 = derived_safe_equal(() => (get$1(file), untrack(() => {
                        var _a;
                        return (_a = get$1(file)) == null ? void 0 : _a.size;
                      })));
                      FileItem($$anchor5, {
                        className: "w-full",
                        get item() {
                          return get$1(file);
                        },
                        edit: true,
                        get url() {
                          return get$1($02);
                        },
                        get name() {
                          return get$1(file), untrack(() => get$1(file).name);
                        },
                        get type() {
                          return get$1(file), untrack(() => get$1(file).type);
                        },
                        get size() {
                          return get$1($1);
                        },
                        dismissible: true,
                        small: true,
                        $$events: {
                          dismiss: () => {
                            chatFiles().splice(fileIdx, 1);
                            chatFiles(chatFiles());
                          },
                          click: () => {
                          }
                        }
                      });
                    }
                  });
                  reset(div_4);
                  append($$anchor4, div_4);
                }
              }
            });
          }
          next(2);
          append($$anchor3, fragment);
        };
        if_block(node_2, ($$render) => {
          if (deep_read_state(chatFiles()), untrack(() => chatFiles().length > 0)) $$render(consequent);
        });
      }
      var node_4 = sibling(node_2, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var fragment_2 = root_5$3();
          var node_5 = first_child(fragment_2);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("System Prompt"))));
            Collapsible(node_5, {
              get title() {
                return get$1($0);
              },
              open: true,
              buttonClassName: "w-full",
              $$slots: {
                content: ($$anchor4, $$slotProps) => {
                  var div_5 = root_6$2();
                  var textarea = child(div_5);
                  remove_textarea_child(textarea);
                  reset(div_5);
                  template_effect(
                    ($02) => {
                      set_class(textarea, 1, `w-full text-xs outline-hidden resize-vertical ${($settings(), untrack(() => $settings().highContrastMode ? "border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 p-2.5" : "py-1.5 bg-transparent")) ?? ""}`);
                      set_attribute(textarea, "placeholder", $02);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("Enter system prompt")))
                    ]
                  );
                  bind_value(textarea, () => params().system, ($$value) => params(params().system = $$value, true));
                  append($$anchor4, div_5);
                }
              }
            });
          }
          next(2);
          append($$anchor3, fragment_2);
        };
        if_block(node_4, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user()) == null ? void 0 : _b.permissions.chat) == null ? void 0 : _c.system_prompt) ?? true);
          })) $$render(consequent_1);
        });
      }
      reset(div_3);
      append($$anchor2, div_3);
    };
    if_block(node_1, ($$render) => {
      if ($user(), untrack(() => {
        var _a, _b, _c;
        return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user()) == null ? void 0 : _b.permissions.chat) == null ? void 0 : _c.controls) ?? true);
      })) $$render(consequent_2);
    });
  }
  reset(div);
  template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Chat Controls")))]);
  event("click", button, () => {
    dispatch("close");
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2$2 = from_html(`<div class="fixed inset-0 z-50 bg-black/50" role="button" tabindex="0"><div class="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-850 shadow-lg" role="dialog" aria-modal="true"><div class="px-4 py-3 h-full"><!></div></div></div>`);
var root_5$2 = from_html(`<div class=" absolute -left-1.5 -right-1.5 -top-0 -bottom-0 z-20 cursor-col-resize bg-transparent"></div>`);
var root_7$2 = from_html(`<div class="flex max-h-full min-h-full"><div class="w-full px-4 py-3 bg-white dark:shadow-lg dark:bg-gray-850 z-40 pointer-events-auto overflow-y-auto scrollbar-hidden" id="controls-container"><!></div></div>`);
var root_3$2 = from_html(`<!> <!>`, 1);
function ChatControls($$anchor, $$props) {
  push($$props, false);
  const $showControls = () => store_get(showControls, "$showControls", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let models2 = prop($$props, "models", 24, () => []);
  let chatId2 = prop($$props, "chatId", 8, null);
  let chatFiles = prop($$props, "chatFiles", 28, () => []);
  let params = prop($$props, "params", 28, () => ({}));
  let pane = prop($$props, "pane", 12);
  let mediaQuery;
  let largeScreen = mutable_source(false);
  let minSize = mutable_source(0);
  const openPane = () => {
    pane().resize(get$1(minSize));
  };
  const handleMediaQuery = async (e) => {
    if (e.matches) {
      set(largeScreen, true);
    } else {
      set(largeScreen, false);
      pane(null);
    }
  };
  const onMouseDown = (event2) => {
  };
  const onMouseUp = (event2) => {
  };
  onMount(() => {
    mediaQuery = window.matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
    const container = document.getElementById("chat-container");
    set(minSize, Math.floor(350 / container.clientWidth * 100));
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        const percentage = 350 / width * 100;
        set(minSize, Math.floor(percentage));
        if ($showControls()) {
          if (pane() && pane().isExpanded() && pane().getSize() < get$1(minSize)) {
            pane().resize(get$1(minSize));
          }
        }
      }
    });
    resizeObserver.observe(container);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  });
  onDestroy(() => {
    showControls.set(false);
    mediaQuery.removeEventListener("change", handleMediaQuery);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  });
  const closeHandler = () => {
    showControls.set(false);
  };
  legacy_pre_effect(() => deep_read_state(chatId2()), () => {
    if (!chatId2()) {
      closeHandler();
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { openPane };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var div = root_2$2();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var node_2 = child(div_2);
          Controls(node_2, {
            get models() {
              return models2();
            },
            get chatFiles() {
              return chatFiles();
            },
            set chatFiles($$value) {
              chatFiles($$value);
            },
            get params() {
              return params();
            },
            set params($$value) {
              params($$value);
            },
            $$events: {
              close: () => {
                showControls.set(false);
              }
            },
            $$legacy: true
          });
          reset(div_2);
          reset(div_1);
          reset(div);
          event("click", div_1, stopPropagation(function($$arg) {
            bubble_event.call(this, $$props, $$arg);
          }));
          event("keydown", div_1, stopPropagation(function($$arg) {
            bubble_event.call(this, $$props, $$arg);
          }));
          event("click", div, () => showControls.set(false));
          event("keydown", div, (e) => e.key === "Escape" && showControls.set(false));
          append($$anchor3, div);
        };
        if_block(node_1, ($$render) => {
          if ($showControls()) $$render(consequent);
        });
      }
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var fragment_2 = root_3$2();
      var node_3 = first_child(fragment_2);
      {
        var consequent_2 = ($$anchor3) => {
          Pane_resizer($$anchor3, {
            class: "relative flex items-center justify-center group border-l border-gray-50 dark:border-gray-850 hover:border-gray-200 dark:hover:border-gray-800  transition z-20",
            id: "controls-resizer",
            children: ($$anchor4, $$slotProps) => {
              var div_3 = root_5$2();
              append($$anchor4, div_3);
            },
            $$slots: { default: true }
          });
        };
        if_block(node_3, ($$render) => {
          if ($showControls()) $$render(consequent_2);
        });
      }
      var node_4 = sibling(node_3, 2);
      Pane(node_4, {
        defaultSize: 0,
        onResize: (size) => {
          if ($showControls() && pane().isExpanded()) {
            if (size < get$1(minSize)) {
              pane().resize(get$1(minSize));
            }
          }
        },
        onCollapse: () => {
          showControls.set(false);
        },
        collapsible: true,
        class: " z-10 bg-white dark:bg-gray-850",
        get pane() {
          return pane();
        },
        set pane($$value) {
          pane($$value);
        },
        children: ($$anchor3, $$slotProps) => {
          var fragment_4 = comment();
          var node_5 = first_child(fragment_4);
          {
            var consequent_3 = ($$anchor4) => {
              var div_4 = root_7$2();
              var div_5 = child(div_4);
              var node_6 = child(div_5);
              Controls(node_6, {
                get models() {
                  return models2();
                },
                get chatFiles() {
                  return chatFiles();
                },
                set chatFiles($$value) {
                  chatFiles($$value);
                },
                get params() {
                  return params();
                },
                set params($$value) {
                  params($$value);
                },
                $$events: {
                  close: () => {
                    showControls.set(false);
                  }
                },
                $$legacy: true
              });
              reset(div_5);
              reset(div_4);
              append($$anchor4, div_4);
            };
            if_block(node_5, ($$render) => {
              if ($showControls()) $$render(consequent_3);
            });
          }
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true },
        $$legacy: true
      });
      append($$anchor2, fragment_2);
    };
    if_block(node, ($$render) => {
      if (!get$1(largeScreen)) $$render(consequent_1);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  bind_prop($$props, "openPane", openPane);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root_2$1 = from_html(`<div class="flex items-center justify-center gap-2 text-gray-500 text-base my-2 w-fit mx-auto"> </div>`);
var root_3$1 = from_html(`<span class="line-clamp-1"> </span>`);
var root_5$1 = from_html(
  `'))}
                                                                        placement="top"
                                                                > <div class="mt-0.5 px-2 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 max-w-xl markdown"><!></div>`,
  1
);
var root_1 = from_html(`<div class="flex flex-col h-full w-full"><div class="flex-1 flex flex-col justify-center overflow-auto px-2 text-center"><!> <div class="w-full text-3xl text-gray-800 dark:text-gray-100 text-center flex items-center gap-4 font-primary"><div class="w-full flex flex-col justify-center items-center"><div class="flex flex-row justify-center gap-3 w-fit px-5 max-w-xl"><div class="text-3xl line-clamp-1 flex items-center"><!></div></div> <div class="flex mt-1 mb-2"><div><!></div></div></div></div> <div class="mx-auto max-w-2xl font-primary mt-4"><div class="mx-4 md:mx-5 lg:mx-6"><!></div></div></div> <div class="flex-shrink-0 w-full px-2 pb-2 pt-2 bg-white dark:bg-gray-900"><div class="text-base font-normal w-full"><!></div></div></div>`);
var root_7$1 = from_html(`<div class="flex items-center gap-2 text-gray-500 text-base my-2 w-fit"> </div>`);
var root_8$1 = from_html(`<span class="line-clamp-1"> </span>`);
var root_12 = from_html(`<a> </a>`);
var root_11 = from_html(`<div class="mt-0.5 text-sm font-normal text-gray-400 dark:text-gray-500">By <!></div>`);
var root_10 = from_html(
  `')
                                                                )}
                                                                placement="top"
                                                        > <div class="mt-0.5 px-2 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 max-w-xl markdown"><!></div> <!>`,
  1
);
var root_6$1 = from_html(`<div class="m-auto w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 text-center"><!> <div class="w-full text-3xl text-gray-800 dark:text-gray-100 text-center flex items-center gap-4 font-primary"><div class="w-full flex flex-col justify-center items-center"><div class="flex flex-row justify-center gap-3 @sm:gap-3.5 w-fit px-5 max-w-xl"><div class=" text-3xl @sm:text-3xl line-clamp-1 flex items-center"><!></div></div> <div class="flex mt-1 mb-2"><div><!></div></div> <div><!></div></div></div> <div class="mx-auto max-w-2xl xl:max-w-3xl 2xl:max-w-4xl font-primary mt-2"><div class="mx-4 md:mx-5 lg:mx-6"><!></div></div></div>`);
function Placeholder($$anchor, $$props) {
  push($$props, false);
  const $_models = () => store_get(models, "$_models", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let createMessagePair = prop($$props, "createMessagePair", 8);
  let stopResponse = prop($$props, "stopResponse", 8);
  let autoScroll = prop($$props, "autoScroll", 12, false);
  let atSelectedModel = prop($$props, "atSelectedModel", 12);
  let selectedModels = prop($$props, "selectedModels", 8);
  let history = prop($$props, "history", 8);
  let prompt = prop($$props, "prompt", 12, "");
  let files = prop($$props, "files", 28, () => []);
  let messageInput = prop($$props, "messageInput", 12, null);
  let selectedToolIds = prop($$props, "selectedToolIds", 28, () => []);
  let selectedFilterIds = prop($$props, "selectedFilterIds", 28, () => []);
  let showCommands = prop($$props, "showCommands", 12, false);
  let imageGenerationEnabled = prop($$props, "imageGenerationEnabled", 12, false);
  let codeInterpreterEnabled = prop($$props, "codeInterpreterEnabled", 12, false);
  let webSearchEnabled = prop($$props, "webSearchEnabled", 12, false);
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let onChange = prop($$props, "onChange", 8, (e) => {
  });
  let toolServers2 = prop($$props, "toolServers", 24, () => []);
  let models$1 = mutable_source([]);
  let selectedModelIdx = mutable_source(0);
  legacy_pre_effect(() => (deep_read_state(selectedModels()), $_models()), () => {
    set(models$1, selectedModels().map((id) => $_models().find((m) => m.id === id)));
  });
  legacy_pre_effect(() => (deep_read_state(selectedModels()), get$1(models$1)), () => {
    if (selectedModels().length > 0) {
      set(selectedModelIdx, get$1(models$1).length - 1);
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_3 = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var node_1 = child(div_1);
      {
        var consequent = ($$anchor3) => {
          var div_2 = root_2$1();
          var text2 = child(div_2, true);
          reset(div_2);
          template_effect(($0) => set_text(text2, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Temporary Chat")))
          ]);
          append($$anchor3, div_2);
        };
        if_block(node_1, ($$render) => {
          if ($temporaryChatEnabled()) $$render(consequent);
        });
      }
      var div_3 = sibling(node_1, 2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var node_2 = child(div_6);
      {
        var consequent_1 = ($$anchor3) => {
          var span = root_3$1();
          var text_1 = child(span, true);
          reset(span);
          template_effect(() => set_text(text_1, (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
            var _a;
            return (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.name;
          }))));
          append($$anchor3, span);
        };
        var alternate = ($$anchor3) => {
          var text_2 = text();
          template_effect(($0) => set_text(text_2, $0), [
            () => ($i18n(), $user(), untrack(() => {
              var _a;
              return $i18n().t("Hello, {{name}}", { name: (_a = $user()) == null ? void 0 : _a.name });
            }))
          ]);
          append($$anchor3, text_2);
        };
        if_block(node_2, ($$render) => {
          if (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
            var _a;
            return (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.name;
          })) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      reset(div_6);
      reset(div_5);
      var div_7 = sibling(div_5, 2);
      var div_8 = child(div_7);
      var node_3 = child(div_8);
      {
        var consequent_2 = ($$anchor3) => {
          var fragment_2 = root_5$1();
          var div_9 = sibling(first_child(fragment_2));
          var node_4 = child(div_9);
          html(node_4, () => (deep_read_state(marked), deep_read_state(sanitizeResponseContent), get$1(models$1), get$1(selectedModelIdx), untrack(() => {
            var _a, _b, _c;
            return marked.parse(sanitizeResponseContent(((_c = (_b = (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description) ?? "").replaceAll("\n", "<br>"));
          })));
          reset(div_9);
          append($$anchor3, fragment_2);
        };
        if_block(node_3, ($$render) => {
          if (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
            var _a, _b, _c;
            return ((_c = (_b = (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description) ?? null;
          })) $$render(consequent_2);
        });
      }
      reset(div_8);
      reset(div_7);
      reset(div_4);
      reset(div_3);
      var div_10 = sibling(div_3, 2);
      var div_11 = child(div_10);
      var node_5 = child(div_11);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(atSelectedModel()), get$1(models$1), get$1(selectedModelIdx), $config(), untrack(() => {
          var _a, _b, _c, _d, _e, _f, _g;
          return ((_c = (_b = (_a = atSelectedModel()) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.suggestion_prompts) ?? ((_f = (_e = (_d = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _d.info) == null ? void 0 : _e.meta) == null ? void 0 : _f.suggestion_prompts) ?? ((_g = $config()) == null ? void 0 : _g.default_prompt_suggestions) ?? [];
        })));
        Suggestions(node_5, {
          get suggestionPrompts() {
            return get$1($0);
          },
          get inputValue() {
            return prompt();
          },
          get onSelect() {
            return onSelect();
          }
        });
      }
      reset(div_11);
      reset(div_10);
      reset(div_1);
      var div_12 = sibling(div_1, 2);
      var div_13 = child(div_12);
      var node_6 = child(div_13);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("How can I help you today?"))));
        bind_this(
          MessageInput(node_6, {
            get history() {
              return history();
            },
            get selectedModels() {
              return selectedModels();
            },
            get toolServers() {
              return toolServers2();
            },
            get stopResponse() {
              return stopResponse();
            },
            get createMessagePair() {
              return createMessagePair();
            },
            get placeholder() {
              return get$1($0);
            },
            get onChange() {
              return onChange();
            },
            get files() {
              return files();
            },
            set files($$value) {
              files($$value);
            },
            get prompt() {
              return prompt();
            },
            set prompt($$value) {
              prompt($$value);
            },
            get autoScroll() {
              return autoScroll();
            },
            set autoScroll($$value) {
              autoScroll($$value);
            },
            get selectedToolIds() {
              return selectedToolIds();
            },
            set selectedToolIds($$value) {
              selectedToolIds($$value);
            },
            get selectedFilterIds() {
              return selectedFilterIds();
            },
            set selectedFilterIds($$value) {
              selectedFilterIds($$value);
            },
            get imageGenerationEnabled() {
              return imageGenerationEnabled();
            },
            set imageGenerationEnabled($$value) {
              imageGenerationEnabled($$value);
            },
            get codeInterpreterEnabled() {
              return codeInterpreterEnabled();
            },
            set codeInterpreterEnabled($$value) {
              codeInterpreterEnabled($$value);
            },
            get webSearchEnabled() {
              return webSearchEnabled();
            },
            set webSearchEnabled($$value) {
              webSearchEnabled($$value);
            },
            get atSelectedModel() {
              return atSelectedModel();
            },
            set atSelectedModel($$value) {
              atSelectedModel($$value);
            },
            get showCommands() {
              return showCommands();
            },
            set showCommands($$value) {
              showCommands($$value);
            },
            $$events: {
              upload: (e) => {
                dispatch("upload", e.detail);
              },
              submit: (e) => {
                dispatch("submit", e.detail);
              }
            },
            $$legacy: true
          }),
          ($$value) => messageInput($$value),
          () => messageInput()
        );
      }
      reset(div_13);
      reset(div_12);
      reset(div);
      transition(1, div_6, () => fade, () => ({ duration: 100 }));
      transition(1, div_8, () => fade, () => ({ duration: 100, delay: 50 }));
      transition(1, div_10, () => fade, () => ({ duration: 200, delay: 200 }));
      append($$anchor2, div);
    };
    var alternate_3 = ($$anchor2) => {
      var div_14 = root_6$1();
      var node_7 = child(div_14);
      {
        var consequent_4 = ($$anchor3) => {
          var div_15 = root_7$1();
          var text_3 = child(div_15, true);
          reset(div_15);
          template_effect(($0) => set_text(text_3, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Temporary Chat")))
          ]);
          append($$anchor3, div_15);
        };
        if_block(node_7, ($$render) => {
          if ($temporaryChatEnabled()) $$render(consequent_4);
        });
      }
      var div_16 = sibling(node_7, 2);
      var div_17 = child(div_16);
      var div_18 = child(div_17);
      var div_19 = child(div_18);
      var node_8 = child(div_19);
      {
        var consequent_5 = ($$anchor3) => {
          var span_1 = root_8$1();
          var text_4 = child(span_1, true);
          reset(span_1);
          template_effect(() => set_text(text_4, (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
            var _a;
            return (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.name;
          }))));
          append($$anchor3, span_1);
        };
        var alternate_1 = ($$anchor3) => {
          var text_5 = text();
          template_effect(($0) => set_text(text_5, $0), [
            () => ($i18n(), $user(), untrack(() => {
              var _a;
              return $i18n().t("Hello, {{name}}", { name: (_a = $user()) == null ? void 0 : _a.name });
            }))
          ]);
          append($$anchor3, text_5);
        };
        if_block(node_8, ($$render) => {
          if (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
            var _a;
            return (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.name;
          })) $$render(consequent_5);
          else $$render(alternate_1, false);
        });
      }
      reset(div_19);
      reset(div_18);
      var div_20 = sibling(div_18, 2);
      var div_21 = child(div_20);
      var node_9 = child(div_21);
      {
        var consequent_8 = ($$anchor3) => {
          var fragment_4 = root_10();
          var div_22 = sibling(first_child(fragment_4));
          var node_10 = child(div_22);
          html(node_10, () => (deep_read_state(marked), deep_read_state(sanitizeResponseContent), get$1(models$1), get$1(selectedModelIdx), untrack(() => {
            var _a, _b, _c;
            return marked.parse(sanitizeResponseContent(((_c = (_b = (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description) ?? "").replaceAll("\n", "<br>"));
          })));
          reset(div_22);
          var node_11 = sibling(div_22, 2);
          {
            var consequent_7 = ($$anchor4) => {
              var div_23 = root_11();
              var node_12 = sibling(child(div_23));
              {
                var consequent_6 = ($$anchor5) => {
                  var a = root_12();
                  var text_6 = child(a, true);
                  reset(a);
                  template_effect(() => {
                    set_attribute(a, "href", `https://openwebui.com/m/${(get$1(models$1), get$1(selectedModelIdx), untrack(() => {
                      var _a, _b, _c;
                      return (_c = (_b = (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.username;
                    })) ?? ""}`);
                    set_text(text_6, (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
                      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
                      return ((_c = (_b = (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.name) ? (_f = (_e = (_d = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _d.info) == null ? void 0 : _e.meta) == null ? void 0 : _f.user.name : `@${(_i = (_h = (_g = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _g.info) == null ? void 0 : _h.meta) == null ? void 0 : _i.user.username}`;
                    })));
                  });
                  append($$anchor5, a);
                };
                var alternate_2 = ($$anchor5) => {
                  var text_7 = text();
                  template_effect(() => set_text(text_7, (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
                    var _a, _b, _c;
                    return (_c = (_b = (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.name;
                  }))));
                  append($$anchor5, text_7);
                };
                if_block(node_12, ($$render) => {
                  if (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
                    var _a, _b, _c;
                    return (_c = (_b = (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.community;
                  })) $$render(consequent_6);
                  else $$render(alternate_2, false);
                });
              }
              reset(div_23);
              append($$anchor4, div_23);
            };
            if_block(node_11, ($$render) => {
              if (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
                var _a, _b, _c;
                return (_c = (_b = (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user;
              })) $$render(consequent_7);
            });
          }
          append($$anchor3, fragment_4);
        };
        if_block(node_9, ($$render) => {
          if (get$1(models$1), get$1(selectedModelIdx), untrack(() => {
            var _a, _b, _c;
            return ((_c = (_b = (_a = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description) ?? null;
          })) $$render(consequent_8);
        });
      }
      reset(div_21);
      reset(div_20);
      var div_24 = sibling(div_20, 2);
      var node_13 = child(div_24);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("How can I help you today?"))));
        bind_this(
          MessageInput(node_13, {
            get history() {
              return history();
            },
            get selectedModels() {
              return selectedModels();
            },
            get toolServers() {
              return toolServers2();
            },
            get stopResponse() {
              return stopResponse();
            },
            get createMessagePair() {
              return createMessagePair();
            },
            get placeholder() {
              return get$1($0);
            },
            get onChange() {
              return onChange();
            },
            get files() {
              return files();
            },
            set files($$value) {
              files($$value);
            },
            get prompt() {
              return prompt();
            },
            set prompt($$value) {
              prompt($$value);
            },
            get autoScroll() {
              return autoScroll();
            },
            set autoScroll($$value) {
              autoScroll($$value);
            },
            get selectedToolIds() {
              return selectedToolIds();
            },
            set selectedToolIds($$value) {
              selectedToolIds($$value);
            },
            get selectedFilterIds() {
              return selectedFilterIds();
            },
            set selectedFilterIds($$value) {
              selectedFilterIds($$value);
            },
            get imageGenerationEnabled() {
              return imageGenerationEnabled();
            },
            set imageGenerationEnabled($$value) {
              imageGenerationEnabled($$value);
            },
            get codeInterpreterEnabled() {
              return codeInterpreterEnabled();
            },
            set codeInterpreterEnabled($$value) {
              codeInterpreterEnabled($$value);
            },
            get webSearchEnabled() {
              return webSearchEnabled();
            },
            set webSearchEnabled($$value) {
              webSearchEnabled($$value);
            },
            get atSelectedModel() {
              return atSelectedModel();
            },
            set atSelectedModel($$value) {
              atSelectedModel($$value);
            },
            get showCommands() {
              return showCommands();
            },
            set showCommands($$value) {
              showCommands($$value);
            },
            $$events: {
              upload: (e) => {
                dispatch("upload", e.detail);
              },
              submit: (e) => {
                dispatch("submit", e.detail);
              }
            },
            $$legacy: true
          }),
          ($$value) => messageInput($$value),
          () => messageInput()
        );
      }
      reset(div_24);
      reset(div_17);
      reset(div_16);
      var div_25 = sibling(div_16, 2);
      var div_26 = child(div_25);
      var node_14 = child(div_26);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(atSelectedModel()), get$1(models$1), get$1(selectedModelIdx), $config(), untrack(() => {
          var _a, _b, _c, _d, _e, _f, _g;
          return ((_c = (_b = (_a = atSelectedModel()) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.suggestion_prompts) ?? ((_f = (_e = (_d = get$1(models$1)[get$1(selectedModelIdx)]) == null ? void 0 : _d.info) == null ? void 0 : _e.meta) == null ? void 0 : _f.suggestion_prompts) ?? ((_g = $config()) == null ? void 0 : _g.default_prompt_suggestions) ?? [];
        })));
        Suggestions(node_14, {
          get suggestionPrompts() {
            return get$1($0);
          },
          get inputValue() {
            return prompt();
          },
          get onSelect() {
            return onSelect();
          }
        });
      }
      reset(div_26);
      reset(div_25);
      reset(div_14);
      template_effect(() => set_class(div_24, 1, `text-base font-normal @md:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl w-full py-3 ${atSelectedModel() ? "mt-2" : ""}`));
      transition(1, div_19, () => fade, () => ({ duration: 100 }));
      transition(1, div_21, () => fade, () => ({ duration: 100, delay: 50 }));
      transition(1, div_25, () => fade, () => ({ duration: 200, delay: 200 }));
      append($$anchor2, div_14);
    };
    if_block(node, ($$render) => {
      if ($mobile()) $$render(consequent_3);
      else $$render(alternate_3, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3 = from_html(`<div class="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat svelte-vhdo11"></div> <div class="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white to-white/85 dark:from-gray-900 dark:to-gray-900/90 z-0 svelte-vhdo11"></div>`, 1);
var root_5 = from_html(`<div class="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat svelte-vhdo11"></div> <div class="absolute top-0 left-0 w-full h-full bg-linear-to-t from-white to-white/85 dark:from-gray-900 dark:to-gray-900/90 z-0 svelte-vhdo11"></div>`, 1);
var root_8 = from_html(`<div class=" pb-2.5 flex flex-col justify-between flex-auto overflow-auto h-0 z-10 scrollbar-hidden svelte-vhdo11" id="messages-container"><div class=" h-full w-full flex flex-col svelte-vhdo11"><!></div></div> <div class=" pb-2 z-10 svelte-vhdo11"><!> <div class="absolute bottom-1 text-xs text-gray-500 text-center line-clamp-1 right-0 left-0 svelte-vhdo11"></div></div>`, 1);
var root_9 = from_html(`<div class="flex items-center h-full svelte-vhdo11"><!></div>`);
var root_7 = from_html(`<!> <div class="flex flex-col flex-auto z-10 w-full @container overflow-auto svelte-vhdo11"><!></div>`, 1);
var root_6 = from_html(`<!> <!>`, 1);
var root_2 = from_html(`<div class="w-full h-full flex flex-col svelte-vhdo11"><!> <!></div>`);
var root = from_html(`<audio id="audioElement" src="" style="display: none;" class="svelte-vhdo11"></audio> <!> <div class="h-screen max-h-[100dvh] transition-width duration-200 ease-in-out w-full max-w-full flex flex-col svelte-vhdo11" id="chat-container"><!></div>`, 1);
function Chat($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $tools = () => store_get(tools, "$tools", $$stores);
  const $functions = () => store_get(functions, "$functions", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const $selectedFolder = () => store_get(selectedFolder, "$selectedFolder", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $toolServers = () => store_get(toolServers, "$toolServers", $$stores);
  const $chatTitle = () => store_get(chatTitle, "$chatTitle", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let chatIdProp = prop($$props, "chatIdProp", 8, "");
  const eventTarget = new EventTarget();
  let controlPane = mutable_source();
  let controlPaneComponent = mutable_source();
  let messageInput = mutable_source();
  let autoScroll = mutable_source(true);
  let messagesContainerElement = mutable_source();
  let navbarElement = mutable_source();
  let showEventConfirmation = mutable_source(false);
  let eventConfirmationTitle = mutable_source("");
  let eventConfirmationMessage = mutable_source("");
  let eventConfirmationInput = mutable_source(false);
  let eventConfirmationInputPlaceholder = mutable_source("");
  let eventConfirmationInputValue = mutable_source("");
  let eventCallback = mutable_source(null);
  let chatIdUnsubscriber;
  let selectedModels = mutable_source([""]);
  let atSelectedModel = mutable_source();
  let selectedModelIds = mutable_source([]);
  let selectedToolIds = mutable_source([]);
  let selectedFilterIds = mutable_source([]);
  let imageGenerationEnabled = mutable_source(false);
  let webSearchEnabled = mutable_source(false);
  let codeInterpreterEnabled = mutable_source(false);
  let showCommands = mutable_source(false);
  let generating = mutable_source(false);
  let generationController = null;
  let nvidiaController = null;
  const SUPPORTED_MODEL_IDS = [
    "moonshotai/kimi-k2-thinking",
    "bytedance/seed-oss-36b-instruct",
    "deepseek-ai/deepseek-v3.1",
    "deepseek-ai/deepseek-r1-0528",
    "amazon/nova-2-lite-v1:free"
  ];
  function isSupportedModel(modelId) {
    return SUPPORTED_MODEL_IDS.includes(modelId);
  }
  async function chatCompletionStream(messages, model, params2, onUpdate, onStart, onEnd) {
    var _a, _b;
    const controller = new AbortController();
    onStart(controller);
    try {
      const { chatStream } = await __vitePreload(async () => {
        const { chatStream: chatStream2 } = await import("./g9haypIr.js");
        return { chatStream: chatStream2 };
      }, true ? [] : void 0, import.meta.url);
      const stream = await chatStream(messages, model);
      for await (const chunk of stream) {
        if (controller.signal.aborted) break;
        const content = ((_b = (_a = chunk.choices[0]) == null ? void 0 : _a.delta) == null ? void 0 : _b.content) || "";
        if (content) {
          onUpdate({ content });
        }
      }
      onUpdate({ done: true });
    } catch (error) {
      onUpdate({ error: error.message, done: true });
    } finally {
      onEnd();
    }
  }
  let chat = null;
  let history = mutable_source({ messages: {}, currentId: null });
  let taskIds = mutable_source(null);
  let prompt = mutable_source("");
  let chatFiles = mutable_source([]);
  let files = mutable_source([]);
  let params = mutable_source({});
  const navigateHandler = async () => {
    var _a;
    set(prompt, "");
    (_a = get$1(messageInput)) == null ? void 0 : _a.setText("");
    set(files, []);
    set(selectedToolIds, []);
    set(selectedFilterIds, []);
    set(webSearchEnabled, false);
    set(imageGenerationEnabled, false);
    if (chatIdProp() && await loadChat()) {
      await tick();
      window.setTimeout(() => scrollToBottom(), 0);
      await tick();
      await setDefaults();
      const chatInput = document.getElementById("chat-input");
      chatInput == null ? void 0 : chatInput.focus();
    } else {
      await goto("/");
    }
  };
  const onSelect = async (e) => {
    var _a;
    const { type, data } = e;
    if (type === "prompt") {
      (_a = get$1(messageInput)) == null ? void 0 : _a.setText(data, async () => {
        var _a2;
        if (!(((_a2 = $settings()) == null ? void 0 : _a2.insertSuggestionPrompt) ?? false)) {
          await tick();
          submitPrompt(get$1(prompt));
        }
      });
    }
  };
  let oldSelectedModelIds = mutable_source([""]);
  const onSelectedModelIdsChange = () => {
    resetInput();
    set(oldSelectedModelIds, JSON.parse(JSON.stringify(get$1(selectedModelIds))));
  };
  const resetInput = () => {
    set(selectedToolIds, []);
    set(selectedFilterIds, []);
    set(webSearchEnabled, false);
    set(imageGenerationEnabled, false);
    set(codeInterpreterEnabled, false);
    if (get$1(selectedModelIds).filter((id) => id).length > 0) {
      setDefaults();
    }
  };
  const setDefaults = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
    if (!$tools()) {
      tools.set([]);
    }
    if (!$functions()) {
      functions.set([]);
    }
    if (get$1(selectedModels).length !== 1 && !get$1(atSelectedModel)) {
      return;
    }
    const model = get$1(atSelectedModel) ?? $models().find((m) => m.id === get$1(selectedModels)[0]);
    if (model) {
      if ((_b = (_a = model == null ? void 0 : model.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.toolIds) {
        set(selectedToolIds, [
          ...new Set([...((_d = (_c = model == null ? void 0 : model.info) == null ? void 0 : _c.meta) == null ? void 0 : _d.toolIds) ?? []].filter((id) => $tools().find((t) => t.id === id)))
        ]);
      }
      if ((_f = (_e = model == null ? void 0 : model.info) == null ? void 0 : _e.meta) == null ? void 0 : _f.defaultFilterIds) {
        set(selectedFilterIds, model.info.meta.defaultFilterIds.filter((id) => {
          var _a2;
          return (_a2 = model == null ? void 0 : model.filters) == null ? void 0 : _a2.find((f) => f.id === id);
        }));
      }
      if ((_h = (_g = model == null ? void 0 : model.info) == null ? void 0 : _g.meta) == null ? void 0 : _h.defaultFeatureIds) {
        if ((_k = (_j = (_i = model.info) == null ? void 0 : _i.meta) == null ? void 0 : _j.capabilities) == null ? void 0 : _k["image_generation"]) {
          set(imageGenerationEnabled, model.info.meta.defaultFeatureIds.includes("image_generation"));
        }
        if ((_n = (_m = (_l = model.info) == null ? void 0 : _l.meta) == null ? void 0 : _m.capabilities) == null ? void 0 : _n["web_search"]) {
          set(webSearchEnabled, model.info.meta.defaultFeatureIds.includes("web_search"));
        }
        if ((_q = (_p = (_o = model.info) == null ? void 0 : _o.meta) == null ? void 0 : _p.capabilities) == null ? void 0 : _q["code_interpreter"]) {
          set(codeInterpreterEnabled, model.info.meta.defaultFeatureIds.includes("code_interpreter"));
        }
      }
    }
  };
  const showMessage = async (message, ignoreSettings = false) => {
    var _a;
    await tick();
    const _chatId = JSON.parse(JSON.stringify($chatId()));
    let _messageId = JSON.parse(JSON.stringify(message.id));
    let messageChildrenIds = [];
    if (_messageId === null) {
      messageChildrenIds = Object.keys(get$1(history).messages).filter((id) => get$1(history).messages[id].parentId === null);
    } else {
      messageChildrenIds = get$1(history).messages[_messageId].childrenIds;
    }
    while (messageChildrenIds.length !== 0) {
      _messageId = messageChildrenIds.at(-1);
      messageChildrenIds = get$1(history).messages[_messageId].childrenIds;
    }
    mutate(history, get$1(history).currentId = _messageId);
    await tick();
    await tick();
    await tick();
    if ((((_a = $settings()) == null ? void 0 : _a.scrollOnBranchChange) ?? true) || ignoreSettings) {
      const messageElement = document.getElementById(`message-${message.id}`);
      if (messageElement) {
        messageElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    await tick();
    saveChatHandler(_chatId, get$1(history));
  };
  const chatEventHandler = async (event2, cb) => {
    var _a, _b;
    if (event2.chat_id === $chatId()) {
      await tick();
      let message = get$1(history).messages[event2.message_id];
      if (message) {
        const type = ((_a = event2 == null ? void 0 : event2.data) == null ? void 0 : _a.type) ?? null;
        const data = ((_b = event2 == null ? void 0 : event2.data) == null ? void 0 : _b.data) ?? null;
        if (type === "status") {
          if (message == null ? void 0 : message.statusHistory) {
            message.statusHistory.push(data);
          } else {
            message.statusHistory = [data];
          }
        } else if (type === "chat:completion") {
          chatCompletionEventHandler(data, message, event2.chat_id);
        } else if (type === "chat:tasks:cancel") {
          set(taskIds, null);
          const responseMessage = get$1(history).messages[get$1(history).currentId];
          for (const messageId of get$1(history).messages[responseMessage.parentId].childrenIds) {
            mutate(history, get$1(history).messages[messageId].done = true);
          }
        } else if (type === "chat:message:delta" || type === "message") {
          message.content += data.content;
        } else if (type === "chat:message" || type === "replace") {
          message.content = data.content;
        } else if (type === "chat:message:files" || type === "files") {
          message.files = data.files;
        } else if (type === "chat:message:embeds" || type === "embeds") {
          message.embeds = data.embeds;
        } else if (type === "chat:message:error") {
          message.error = data.error;
        } else if (type === "chat:message:follow_ups") {
          message.followUps = data.follow_ups;
          if (get$1(autoScroll)) {
            scrollToBottom("smooth");
          }
        } else if (type === "chat:title") {
          chatTitle.set(data);
          currentChatPage.set(1);
          await chats.set([]);
        } else if (type === "chat:tags") {
          chat = null;
          tags.set([]);
        } else if (type === "source" || type === "citation") {
          if ((data == null ? void 0 : data.type) === "code_execution") {
            if (!(message == null ? void 0 : message.code_executions)) {
              message.code_executions = [];
            }
            const existingCodeExecutionIndex = message.code_executions.findIndex((execution) => execution.id === data.id);
            if (existingCodeExecutionIndex !== -1) {
              message.code_executions[existingCodeExecutionIndex] = data;
            } else {
              message.code_executions.push(data);
            }
            message.code_executions = message.code_executions;
          } else {
            if (message == null ? void 0 : message.sources) {
              message.sources.push(data);
            } else {
              message.sources = [data];
            }
          }
        } else if (type === "notification") {
          const toastType = (data == null ? void 0 : data.type) ?? "info";
          const toastContent = (data == null ? void 0 : data.content) ?? "";
          if (toastType === "success") {
            toast.success(toastContent);
          } else if (toastType === "error") {
            toast.error(toastContent);
          } else if (toastType === "warning") {
            toast.warning(toastContent);
          } else {
            toast.info(toastContent);
          }
        } else if (type === "confirmation") {
          set(eventCallback, cb);
          set(eventConfirmationInput, false);
          set(showEventConfirmation, true);
          set(eventConfirmationTitle, data.title);
          set(eventConfirmationMessage, data.message);
        } else if (type === "execute") {
          set(eventCallback, cb);
          try {
            const asyncFunction = new Function(`return (async () => { ${data.code} })()`);
            const result = await asyncFunction();
            if (cb) {
              cb(result);
            }
          } catch (error) {
            console.error("Error executing code:", error);
          }
        } else if (type === "input") {
          set(eventCallback, cb);
          set(eventConfirmationInput, true);
          set(showEventConfirmation, true);
          set(eventConfirmationTitle, data.title);
          set(eventConfirmationMessage, data.message);
          set(eventConfirmationInputPlaceholder, data.placeholder);
          set(eventConfirmationInputValue, (data == null ? void 0 : data.value) ?? "");
        }
        mutate(history, get$1(history).messages[event2.message_id] = message);
      }
    }
  };
  const onMessageHandler = async (event2) => {
    var _a;
    if (event2.origin !== window.origin) {
      return;
    }
    if (event2.data.type === "action:submit") {
      if (get$1(prompt) !== "") {
        await tick();
        submitPrompt(get$1(prompt));
      }
    }
    if (event2.data.type === "input:prompt") {
      const inputElement = document.getElementById("chat-input");
      if (inputElement) {
        (_a = get$1(messageInput)) == null ? void 0 : _a.setText(event2.data.text);
        inputElement.focus();
      }
    }
    if (event2.data.type === "input:prompt:submit") {
      if (event2.data.text !== "") {
        await tick();
        submitPrompt(event2.data.text);
      }
    }
  };
  const savedModelIds = async () => {
    var _a, _b;
    if ($selectedFolder() && get$1(selectedModels).filter((modelId) => modelId !== "").length > 0 && JSON.stringify((_b = (_a = $selectedFolder()) == null ? void 0 : _a.data) == null ? void 0 : _b.model_ids) !== JSON.stringify(get$1(selectedModels))) {
      await updateFolderById("static-token", $selectedFolder().id, { data: { model_ids: get$1(selectedModels) } });
    }
  };
  let pageSubscribe = null;
  let showControlsSubscribe = null;
  let selectedFolderSubscribe = null;
  const stopAudio = () => {
    try {
      speechSynthesis.cancel();
    } catch {
    }
  };
  onMount(async () => {
    var _a;
    window.addEventListener("message", onMessageHandler);
    (_a = $socket()) == null ? void 0 : _a.on("events", chatEventHandler);
    pageSubscribe = page.subscribe(async (p) => {
      if (p.url.pathname === "/") {
        await tick();
        initNewChat();
      }
      stopAudio();
    });
    if (!chatIdProp()) {
      await tick();
    }
    showControlsSubscribe = showControls.subscribe(async (value) => {
      if (get$1(controlPane) && !$mobile()) {
        try {
          if (value) {
            get$1(controlPaneComponent).openPane();
          } else {
            get$1(controlPane).collapse();
          }
        } catch (e) {
        }
      }
      if (!value) {
        showArtifacts.set(false);
        showEmbeds.set(false);
      }
    });
    selectedFolderSubscribe = selectedFolder.subscribe(async (folder) => {
      var _a2;
      if (((_a2 = folder == null ? void 0 : folder.data) == null ? void 0 : _a2.model_ids) && JSON.stringify(get$1(selectedModels)) !== JSON.stringify(folder.data.model_ids)) {
        set(selectedModels, folder.data.model_ids);
      }
    });
    const chatInput = document.getElementById("chat-input");
    chatInput == null ? void 0 : chatInput.focus();
  });
  onDestroy(() => {
    var _a;
    try {
      pageSubscribe();
      showControlsSubscribe();
      selectedFolderSubscribe();
      chatIdUnsubscriber == null ? void 0 : chatIdUnsubscriber();
      window.removeEventListener("message", onMessageHandler);
      (_a = $socket()) == null ? void 0 : _a.off("events", chatEventHandler);
    } catch (e) {
      console.error(e);
    }
  });
  const uploadGoogleDriveFile = async (fileData) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!(fileData == null ? void 0 : fileData.id) || !(fileData == null ? void 0 : fileData.name) || !(fileData == null ? void 0 : fileData.url) || !((_a = fileData == null ? void 0 : fileData.headers) == null ? void 0 : _a.Authorization)) {
      throw new Error("Invalid file data provided");
    }
    const tempItemId = v4();
    const fileItem = {
      type: "file",
      file: "",
      id: null,
      url: fileData.url,
      name: fileData.name,
      collection_name: "",
      status: "uploading",
      error: "",
      itemId: tempItemId,
      size: 0
    };
    try {
      set(files, [...get$1(files), fileItem]);
      const fetchOptions = {
        headers: { Authorization: fileData.headers.Authorization, Accept: "*/*" },
        method: "GET"
      };
      const fileResponse = await fetch(fileData.url, fetchOptions);
      if (!fileResponse.ok) {
        const errorText = await fileResponse.text();
        throw new Error(`Failed to fetch file (${fileResponse.status}): ${errorText}`);
      }
      const contentType = fileResponse.headers.get("content-type") || "application/octet-stream";
      const fileBlob = await fileResponse.blob();
      if (fileBlob.size === 0) {
        throw new Error("Retrieved file is empty");
      }
      const file = new File([fileBlob], fileData.name, { type: fileBlob.type || contentType });
      if (file.size === 0) {
        throw new Error("Created file is empty");
      }
      let metadata = null;
      if ((file.type.startsWith("audio/") || file.type.startsWith("video/")) && ((_d = (_c = (_b = $settings()) == null ? void 0 : _b.audio) == null ? void 0 : _c.stt) == null ? void 0 : _d.language)) {
        metadata = { language: (_g = (_f = (_e = $settings()) == null ? void 0 : _e.audio) == null ? void 0 : _f.stt) == null ? void 0 : _g.language };
      }
      const uploadedFile = { id: crypto.randomUUID(), filename: "file", name: "file" };
      if (!uploadedFile) {
        throw new Error("Server returned null response for file upload");
      }
      fileItem.status = "uploaded";
      fileItem.file = uploadedFile;
      fileItem.id = uploadedFile.id;
      fileItem.size = file.size;
      fileItem.collection_name = (_h = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _h.collection_name;
      fileItem.url = `${WEBUI_API_BASE_URL}/files/${uploadedFile.id}`;
      set(files, get$1(files));
      toast.success($i18n().t("File uploaded successfully"));
    } catch (e) {
      console.error("Error uploading file:", e);
      set(files, get$1(files).filter((f) => f.itemId !== tempItemId));
      toast.error($i18n().t("Error uploading file: {{error}}", { error: e.message || "Unknown error" }));
    }
  };
  const uploadWeb = async (url) => {
    const fileItem = {
      type: "text",
      name: url,
      collection_name: "",
      status: "uploading",
      url,
      error: ""
    };
    try {
      set(files, [...get$1(files), fileItem]);
      const res = null;
      if (res) ;
    } catch (e) {
      set(files, get$1(files).filter((f) => f.name !== url));
      toast.error(JSON.stringify(e));
    }
  };
  const uploadYoutubeTranscription = async (url) => {
    const fileItem = {
      type: "text",
      name: url,
      collection_name: "",
      status: "uploading",
      context: "full",
      url,
      error: ""
    };
    try {
      set(files, [...get$1(files), fileItem]);
      const res = null;
      if (res) ;
    } catch (e) {
      set(files, get$1(files).filter((f) => f.name !== url));
      toast.error(`${e}`);
    }
  };
  const getContents = () => {
    const messages = get$1(history) ? createMessagesList(get$1(history), get$1(history).currentId) : [];
    let contents = [];
    messages.forEach((message) => {
      if ((message == null ? void 0 : message.role) !== "user" && (message == null ? void 0 : message.content)) {
        const {
          codeBlocks,
          html: htmlContent,
          css: cssContent,
          js: jsContent
        } = getCodeBlockContents(message.content);
        if (htmlContent || cssContent || jsContent) {
          const renderedContent = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                                        <${""}style>
                                                                body {
                                                                        background-color: white; /* Ensure the iframe has a white background */
                                                                }

                                                                ${cssContent}
                                                        </${""}style>
                        </head>
                        <body>
                            ${htmlContent}

                                                        <${""}script>
                                ${jsContent}
                                                        </${""}script>
                        </body>
                        </html>
                    `;
          contents = [...contents, { type: "iframe", content: renderedContent }];
        } else {
          for (const block2 of codeBlocks) {
            if (block2.lang === "svg" || block2.lang === "xml" && block2.code.includes("<svg")) {
              contents = [...contents, { type: "svg", content: block2.code }];
            }
          }
        }
      }
    });
    artifactContents.set(contents);
  };
  const initNewChat = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin" && ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.temporary_enforced)) {
      await temporaryChatEnabled.set(true);
    }
    if (((_e = $settings()) == null ? void 0 : _e.temporaryChatByDefault) ?? false) {
      if ($temporaryChatEnabled() === false) {
        await temporaryChatEnabled.set(true);
      } else if ($temporaryChatEnabled() === null) {
        await temporaryChatEnabled.set(false);
      }
    }
    const availableModels = $models().filter((m) => {
      var _a2, _b2;
      return !(((_b2 = (_a2 = m == null ? void 0 : m.info) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.hidden) ?? false);
    }).map((m) => m.id);
    if ($page().url.searchParams.get("models") || $page().url.searchParams.get("model")) {
      const urlModels = (_f = $page().url.searchParams.get("models") || $page().url.searchParams.get("model") || "") == null ? void 0 : _f.split(",");
      if (urlModels.length === 1) {
        const m = $models().find((m2) => m2.id === urlModels[0]);
        if (!m) {
          const modelSelectorButton = document.getElementById("model-selector-0-button");
          if (modelSelectorButton) {
            modelSelectorButton.click();
            await tick();
            const modelSelectorInput = document.getElementById("model-search-input");
            if (modelSelectorInput) {
              modelSelectorInput.focus();
              modelSelectorInput.value = urlModels[0];
              modelSelectorInput.dispatchEvent(new Event("input"));
            }
          }
        } else {
          set(selectedModels, urlModels);
        }
      } else {
        set(selectedModels, urlModels);
      }
      set(selectedModels, get$1(selectedModels).filter((modelId) => $models().map((m) => m.id).includes(modelId)));
    } else {
      if ((_h = (_g = $selectedFolder()) == null ? void 0 : _g.data) == null ? void 0 : _h.model_ids) {
        set(selectedModels, (_j = (_i = $selectedFolder()) == null ? void 0 : _i.data) == null ? void 0 : _j.model_ids);
      } else {
        if ((_k = $settings()) == null ? void 0 : _k.models) {
          set(selectedModels, (_l = $settings()) == null ? void 0 : _l.models);
        } else if ((_m = $config()) == null ? void 0 : _m.default_models) {
          set(selectedModels, (_n = $config()) == null ? void 0 : _n.default_models.split(","));
        }
      }
      set(selectedModels, get$1(selectedModels).filter((modelId) => availableModels.includes(modelId)));
    }
    if (get$1(selectedModels).length === 0 || get$1(selectedModels).length === 1 && get$1(selectedModels)[0] === "") {
      if (availableModels.length > 0) {
        set(selectedModels, [(availableModels == null ? void 0 : availableModels.at(0)) ?? ""]);
      } else {
        set(selectedModels, [""]);
      }
    }
    await showControls.set(false);
    await showArtifacts.set(false);
    if ($page().url.pathname.includes("/c/")) {
      window.history.replaceState(get$1(history).state, "", `/`);
    }
    set(autoScroll, true);
    resetInput();
    await chatId.set("");
    await chatTitle.set("");
    set(history, { messages: {}, currentId: null });
    set(chatFiles, []);
    set(params, {});
    if ($page().url.searchParams.get("youtube")) {
      uploadYoutubeTranscription(`https://www.youtube.com/watch?v=${$page().url.searchParams.get("youtube")}`);
    }
    if ($page().url.searchParams.get("load-url")) {
      await uploadWeb($page().url.searchParams.get("load-url"));
    }
    if ($page().url.searchParams.get("web-search") === "true") {
      set(webSearchEnabled, true);
    }
    if ($page().url.searchParams.get("image-generation") === "true") {
      set(imageGenerationEnabled, true);
    }
    if ($page().url.searchParams.get("code-interpreter") === "true") {
      set(codeInterpreterEnabled, true);
    }
    if ($page().url.searchParams.get("tools")) {
      set(selectedToolIds, (_o = $page().url.searchParams.get("tools")) == null ? void 0 : _o.split(",").map((id) => id.trim()).filter((id) => id));
    } else if ($page().url.searchParams.get("tool-ids")) {
      set(selectedToolIds, (_p = $page().url.searchParams.get("tool-ids")) == null ? void 0 : _p.split(",").map((id) => id.trim()).filter((id) => id));
    }
    if ($page().url.searchParams.get("q")) {
      const q = $page().url.searchParams.get("q") ?? "";
      (_q = get$1(messageInput)) == null ? void 0 : _q.setText(q);
      if (q) {
        if (($page().url.searchParams.get("submit") ?? "true") === "true") {
          await tick();
          submitPrompt(q);
        }
      }
    }
    set(selectedModels, get$1(selectedModels).map((modelId) => $models().map((m) => m.id).includes(modelId) ? modelId : ""));
    const chatInput = document.getElementById("chat-input");
    setTimeout(() => chatInput == null ? void 0 : chatInput.focus(), 0);
  };
  const loadChat = async () => {
    var _a, _b, _c, _d;
    chatId.set(chatIdProp());
    if ($temporaryChatEnabled()) {
      temporaryChatEnabled.set(false);
    }
    chat = null.catch(async (error) => {
      await goto("/");
      return null;
    });
    if (chat) {
      [].catch(async (error) => {
        return [];
      });
      const chatContent = chat.chat;
      if (chatContent) {
        set(selectedModels, ((chatContent == null ? void 0 : chatContent.models) ?? void 0) !== void 0 ? chatContent.models : [chatContent.models ?? ""]);
        if (!(((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.multiple_models) ?? true))) {
          set(selectedModels, get$1(selectedModels).length > 0 ? [get$1(selectedModels)[0]] : [""]);
        }
        set(oldSelectedModelIds, JSON.parse(JSON.stringify(get$1(selectedModels))));
        set(history, ((chatContent == null ? void 0 : chatContent.history) ?? void 0) !== void 0 ? chatContent.history : convertMessagesToHistory(chatContent.messages));
        chatTitle.set(chatContent.title);
        set(params, (chatContent == null ? void 0 : chatContent.params) ?? {});
        set(chatFiles, (chatContent == null ? void 0 : chatContent.files) ?? []);
        set(autoScroll, true);
        await tick();
        if (get$1(history).currentId) {
          for (const message of Object.values(get$1(history).messages)) {
            if (message.role === "assistant") {
              message.done = true;
            }
          }
        }
        const taskRes = null.catch((error) => {
          return null;
        });
        if (taskRes) {
          set(taskIds, taskRes.task_ids);
        }
        await tick();
        return true;
      } else {
        return null;
      }
    }
  };
  const scrollToBottom = async (behavior = "auto") => {
    await tick();
    if (get$1(messagesContainerElement)) {
      get$1(messagesContainerElement).scrollTo({ top: get$1(messagesContainerElement).scrollHeight, behavior });
    }
  };
  const chatCompletedHandler = async (_chatId, modelId, responseMessageId, messages) => {
    var _a;
    const res = await chatCompleted("static-token", {
      model: modelId,
      messages: messages.map((m) => ({
        id: m.id,
        role: m.role,
        content: m.content,
        info: m.info ? m.info : void 0,
        timestamp: m.timestamp,
        ...m.usage ? { usage: m.usage } : {},
        ...m.sources ? { sources: m.sources } : {}
      })),
      filter_ids: get$1(selectedFilterIds).length > 0 ? get$1(selectedFilterIds) : void 0,
      model_item: $models().find((m) => m.id === modelId),
      chat_id: _chatId,
      session_id: (_a = $socket()) == null ? void 0 : _a.id,
      id: responseMessageId
    }).catch((error) => {
      toast.error(`${error}`);
      messages.at(-1).error = { content: error };
      return null;
    });
    if (res !== null && res.messages) {
      for (const message of res.messages) {
        if (message == null ? void 0 : message.id) {
          mutate(history, get$1(history).messages[message.id] = {
            ...get$1(history).messages[message.id],
            ...get$1(history).messages[message.id].content !== message.content ? { originalContent: get$1(history).messages[message.id].content } : {},
            ...message
          });
        }
      }
    }
    await tick();
    if ($chatId() == _chatId) {
      if (!$temporaryChatEnabled()) {
        chat = await updateChatById("static-token", _chatId, {
          models: get$1(selectedModels),
          messages,
          history: get$1(history),
          params: get$1(params),
          files: get$1(chatFiles)
        });
        currentChatPage.set(1);
        await chats.set([]);
      }
    }
    set(taskIds, null);
  };
  const chatActionHandler = async (_chatId, actionId, modelId, responseMessageId, event2 = null) => {
    var _a;
    const messages = createMessagesList(get$1(history), responseMessageId);
    const res = await chatAction("static-token", actionId, {
      model: modelId,
      messages: messages.map((m) => ({
        id: m.id,
        role: m.role,
        content: m.content,
        info: m.info ? m.info : void 0,
        timestamp: m.timestamp,
        ...m.sources ? { sources: m.sources } : {}
      })),
      ...event2 ? { event: event2 } : {},
      model_item: $models().find((m) => m.id === modelId),
      chat_id: _chatId,
      session_id: (_a = $socket()) == null ? void 0 : _a.id,
      id: responseMessageId
    }).catch((error) => {
      toast.error(`${error}`);
      messages.at(-1).error = { content: error };
      return null;
    });
    if (res !== null && res.messages) {
      for (const message of res.messages) {
        mutate(history, get$1(history).messages[message.id] = {
          ...get$1(history).messages[message.id],
          ...get$1(history).messages[message.id].content !== message.content ? { originalContent: get$1(history).messages[message.id].content } : {},
          ...message
        });
      }
    }
    if ($chatId() == _chatId) {
      if (!$temporaryChatEnabled()) {
        chat = await updateChatById("static-token", _chatId, {
          models: get$1(selectedModels),
          messages,
          history: get$1(history),
          params: get$1(params),
          files: get$1(chatFiles)
        });
        currentChatPage.set(1);
        await chats.set([]);
      }
    }
  };
  const getChatEventEmitter = async (modelId, chatId2 = "") => {
    return setInterval(
      () => {
        var _a;
        (_a = $socket()) == null ? void 0 : _a.emit("usage", { action: "chat", model: modelId, chat_id: chatId2 });
      },
      1e3
    );
  };
  const createMessagePair = async (userPrompt) => {
    var _a;
    (_a = get$1(messageInput)) == null ? void 0 : _a.setText("");
    if (get$1(selectedModels).length === 0) {
      toast.error($i18n().t("Model not selected"));
    } else {
      const modelId = get$1(selectedModels)[0];
      const model = $models().filter((m) => m.id === modelId).at(0);
      const messages = createMessagesList(get$1(history), get$1(history).currentId);
      const parentMessage = messages.length !== 0 ? messages.at(-1) : null;
      const userMessageId = v4();
      const responseMessageId = v4();
      const userMessage = {
        id: userMessageId,
        parentId: parentMessage ? parentMessage.id : null,
        childrenIds: [responseMessageId],
        role: "user",
        content: userPrompt ? userPrompt : `[PROMPT] ${userMessageId}`,
        timestamp: Math.floor(Date.now() / 1e3)
      };
      const responseMessage = {
        id: responseMessageId,
        parentId: userMessageId,
        childrenIds: [],
        role: "assistant",
        content: `[RESPONSE] ${responseMessageId}`,
        done: true,
        model: modelId,
        modelName: model.name ?? model.id,
        modelIdx: 0,
        timestamp: Math.floor(Date.now() / 1e3)
      };
      if (parentMessage) {
        parentMessage.childrenIds.push(userMessageId);
        mutate(history, get$1(history).messages[parentMessage.id] = parentMessage);
      }
      mutate(history, get$1(history).messages[userMessageId] = userMessage);
      mutate(history, get$1(history).messages[responseMessageId] = responseMessage);
      mutate(history, get$1(history).currentId = responseMessageId);
      await tick();
      if (get$1(autoScroll)) {
        scrollToBottom();
      }
      if (messages.length === 0) {
        await initChatHandler(get$1(history));
      } else {
        await saveChatHandler($chatId(), get$1(history));
      }
    }
  };
  const addMessages = async ({ modelId, parentId, messages }) => {
    const model = $models().filter((m) => m.id === modelId).at(0);
    let parentMessage = get$1(history).messages[parentId];
    let currentParentId = parentMessage ? parentMessage.id : null;
    for (const message of messages) {
      let messageId = v4();
      if (message.role === "user") {
        const userMessage = {
          id: messageId,
          parentId: currentParentId,
          childrenIds: [],
          timestamp: Math.floor(Date.now() / 1e3),
          ...message
        };
        if (parentMessage) {
          parentMessage.childrenIds.push(messageId);
          mutate(history, get$1(history).messages[parentMessage.id] = parentMessage);
        }
        mutate(history, get$1(history).messages[messageId] = userMessage);
        parentMessage = userMessage;
        currentParentId = messageId;
      } else {
        const responseMessage = {
          id: messageId,
          parentId: currentParentId,
          childrenIds: [],
          done: true,
          model: model.id,
          modelName: model.name ?? model.id,
          modelIdx: 0,
          timestamp: Math.floor(Date.now() / 1e3),
          ...message
        };
        if (parentMessage) {
          parentMessage.childrenIds.push(messageId);
          mutate(history, get$1(history).messages[parentMessage.id] = parentMessage);
        }
        mutate(history, get$1(history).messages[messageId] = responseMessage);
        parentMessage = responseMessage;
        currentParentId = messageId;
      }
    }
    mutate(history, get$1(history).currentId = currentParentId);
    await tick();
    if (get$1(autoScroll)) {
      scrollToBottom();
    }
    if (messages.length === 0) {
      await initChatHandler(get$1(history));
    } else {
      await saveChatHandler($chatId(), get$1(history));
    }
  };
  const chatCompletionEventHandler = async (data, message, chatId2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    const {
      id,
      done,
      choices,
      content,
      sources,
      selected_model_id,
      error,
      usage
    } = data;
    if (error) {
      await handleOpenAIError(error, message);
    }
    if (sources && !(message == null ? void 0 : message.sources)) {
      message.sources = sources;
    }
    if (choices) {
      if ((_b = (_a = choices[0]) == null ? void 0 : _a.message) == null ? void 0 : _b.content) {
        message.content += (_d = (_c = choices[0]) == null ? void 0 : _c.message) == null ? void 0 : _d.content;
      } else {
        let value = ((_f = (_e = choices[0]) == null ? void 0 : _e.delta) == null ? void 0 : _f.content) ?? "";
        if (message.content == "" && value == "\n") ;
        else {
          message.content += value;
          if (navigator.vibrate && (((_g = $settings()) == null ? void 0 : _g.hapticFeedback) ?? false)) {
            navigator.vibrate(5);
          }
          const messageContentParts = getMessageContentParts(removeAllDetails(message.content), ((_j = (_i = (_h = $config()) == null ? void 0 : _h.audio) == null ? void 0 : _i.tts) == null ? void 0 : _j.split_on) ?? "punctuation");
          messageContentParts.pop();
          if (messageContentParts.length > 0 && messageContentParts[messageContentParts.length - 1] !== message.lastSentence) {
            message.lastSentence = messageContentParts[messageContentParts.length - 1];
            eventTarget.dispatchEvent(new CustomEvent("chat", {
              detail: {
                id: message.id,
                content: messageContentParts[messageContentParts.length - 1]
              }
            }));
          }
        }
      }
    }
    if (content) {
      message.content = content;
      if (navigator.vibrate && (((_k = $settings()) == null ? void 0 : _k.hapticFeedback) ?? false)) {
        navigator.vibrate(5);
      }
      const messageContentParts = getMessageContentParts(removeAllDetails(message.content), ((_n = (_m = (_l = $config()) == null ? void 0 : _l.audio) == null ? void 0 : _m.tts) == null ? void 0 : _n.split_on) ?? "punctuation");
      messageContentParts.pop();
      if (messageContentParts.length > 0 && messageContentParts[messageContentParts.length - 1] !== message.lastSentence) {
        message.lastSentence = messageContentParts[messageContentParts.length - 1];
        eventTarget.dispatchEvent(new CustomEvent("chat", {
          detail: {
            id: message.id,
            content: messageContentParts[messageContentParts.length - 1]
          }
        }));
      }
    }
    if (selected_model_id) {
      message.selectedModelId = selected_model_id;
      message.arena = true;
    }
    if (usage) {
      message.usage = usage;
    }
    mutate(history, get$1(history).messages[message.id] = message);
    if (done) {
      message.done = true;
      if ($settings().responseAutoCopy) {
        copyToClipboard(message.content);
      }
      if ($settings().responseAutoPlayback) {
        await tick();
        (_o = document.getElementById(`speak-button-${message.id}`)) == null ? void 0 : _o.click();
      }
      let lastMessageContentPart = ((_s = getMessageContentParts(removeAllDetails(message.content), ((_r = (_q = (_p = $config()) == null ? void 0 : _p.audio) == null ? void 0 : _q.tts) == null ? void 0 : _r.split_on) ?? "punctuation")) == null ? void 0 : _s.at(-1)) ?? "";
      if (lastMessageContentPart) {
        eventTarget.dispatchEvent(new CustomEvent("chat", { detail: { id: message.id, content: lastMessageContentPart } }));
      }
      eventTarget.dispatchEvent(new CustomEvent("chat:finish", { detail: { id: message.id, content: message.content } }));
      mutate(history, get$1(history).messages[message.id] = message);
      await tick();
      if (get$1(autoScroll)) {
        scrollToBottom();
      }
      await chatCompletedHandler(chatId2, message.model, message.id, createMessagesList(get$1(history), message.id));
    }
    await tick();
    if (get$1(autoScroll)) {
      scrollToBottom();
    }
  };
  const submitPrompt = async (userPrompt, { _raw = false } = {}) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const _selectedModels = get$1(selectedModels).map((modelId) => $models().map((m) => m.id).includes(modelId) ? modelId : "");
    if (JSON.stringify(get$1(selectedModels)) !== JSON.stringify(_selectedModels)) {
      set(selectedModels, _selectedModels);
    }
    if (userPrompt === "" && get$1(files).length === 0) {
      toast.error($i18n().t("Please enter a prompt"));
      return;
    }
    if (get$1(selectedModels).includes("")) {
      toast.error($i18n().t("Model not selected"));
      return;
    }
    if (get$1(files).length > 0 && get$1(files).filter((file) => file.type !== "image" && file.status === "uploading").length > 0) {
      toast.error($i18n().t(`Oops! There are files still uploading. Please wait for the upload to complete.`));
      return;
    }
    if ((((_b = (_a = $config()) == null ? void 0 : _a.file) == null ? void 0 : _b.max_count) ?? null) !== null && get$1(files).length + get$1(chatFiles).length > ((_d = (_c = $config()) == null ? void 0 : _c.file) == null ? void 0 : _d.max_count)) {
      toast.error($i18n().t(`You can only chat with a maximum of {{maxCount}} file(s) at a time.`, { maxCount: (_f = (_e = $config()) == null ? void 0 : _e.file) == null ? void 0 : _f.max_count }));
      return;
    }
    if ((_g = get$1(history)) == null ? void 0 : _g.currentId) {
      const lastMessage = get$1(history).messages[get$1(history).currentId];
      if (lastMessage.done != true) {
        return;
      }
      if (lastMessage.error && !lastMessage.content) {
        toast.error($i18n().t(`Oops! There was an error in the previous response.`));
        return;
      }
    }
    (_h = get$1(messageInput)) == null ? void 0 : _h.setText("");
    set(prompt, "");
    const messages = createMessagesList(get$1(history), get$1(history).currentId);
    const _files = JSON.parse(JSON.stringify(get$1(files)));
    get$1(chatFiles).push(..._files.filter((item) => [
      "doc",
      "text",
      "file",
      "note",
      "chat",
      "folder",
      "collection"
    ].includes(item.type)));
    set(chatFiles, get$1(chatFiles).filter(
      // Remove duplicates
      (item, index2, array) => array.findIndex((i) => JSON.stringify(i) === JSON.stringify(item)) === index2
    ));
    set(files, []);
    (_i = get$1(messageInput)) == null ? void 0 : _i.setText("");
    let userMessageId = v4();
    let userMessage = {
      id: userMessageId,
      parentId: messages.length !== 0 ? messages.at(-1).id : null,
      childrenIds: [],
      role: "user",
      content: userPrompt,
      files: _files.length > 0 ? _files : void 0,
      timestamp: Math.floor(Date.now() / 1e3),
      // Unix epoch
      models: get$1(selectedModels)
    };
    mutate(history, get$1(history).messages[userMessageId] = userMessage);
    mutate(history, get$1(history).currentId = userMessageId);
    if (messages.length !== 0) {
      get$1(history).messages[messages.at(-1).id].childrenIds.push(userMessageId);
    }
    const chatInput = document.getElementById("chat-input");
    chatInput == null ? void 0 : chatInput.focus();
    await sendMessage(get$1(history), userMessageId, { newChat: true });
  };
  const sendMessage = async (_history, parentId, {
    messages = null,
    modelId = null,
    modelIdx = null,
    newChat = false
  } = {}) => {
    if (get$1(autoScroll)) {
      scrollToBottom();
    }
    let _chatId = JSON.parse(JSON.stringify($chatId()));
    _history = JSON.parse(JSON.stringify(_history));
    const responseMessageIds = {};
    let selectedModelIds2 = modelId ? [modelId] : get$1(atSelectedModel) !== void 0 ? [get$1(atSelectedModel).id] : get$1(selectedModels);
    for (const [_modelIdx, modelId2] of selectedModelIds2.entries()) {
      const model = $models().filter((m) => m.id === modelId2).at(0);
      if (model) {
        let responseMessageId = v4();
        let responseMessage = {
          parentId,
          id: responseMessageId,
          childrenIds: [],
          role: "assistant",
          content: "",
          model: model.id,
          modelName: model.name ?? model.id,
          modelIdx: modelIdx ? modelIdx : _modelIdx,
          timestamp: Math.floor(Date.now() / 1e3)
          // Unix epoch
        };
        mutate(history, get$1(history).messages[responseMessageId] = responseMessage);
        mutate(history, get$1(history).currentId = responseMessageId);
        if (parentId !== null && get$1(history).messages[parentId]) {
          mutate(history, get$1(history).messages[parentId].childrenIds = [
            ...get$1(history).messages[parentId].childrenIds,
            responseMessageId
          ]);
        }
        responseMessageIds[`${modelId2}-${modelIdx ? modelIdx : _modelIdx}`] = responseMessageId;
      }
    }
    set(history, get$1(history));
    if (newChat && _history.messages[_history.currentId].parentId === null) {
      _chatId = await initChatHandler(_history);
    }
    await tick();
    _history = JSON.parse(JSON.stringify(get$1(history)));
    await saveChatHandler(_chatId, _history);
    await Promise.all(selectedModelIds2.map(async (modelId2, _modelIdx) => {
      var _a, _b, _c;
      const model = $models().filter((m) => m.id === modelId2).at(0);
      if (model) {
        const hasImages = createMessagesList(_history, parentId).some((message) => {
          var _a2;
          return (_a2 = message.files) == null ? void 0 : _a2.some((file) => file.type === "image");
        });
        if (hasImages && !(((_c = (_b = (_a = model.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.capabilities) == null ? void 0 : _c.vision) ?? true)) {
          toast.error($i18n().t("Model {{modelName}} is not vision capable", { modelName: model.name ?? model.id }));
        }
        let responseMessageId = responseMessageIds[`${modelId2}-${modelIdx ? modelIdx : _modelIdx}`];
        const chatEventEmitter = await getChatEventEmitter(model.id, _chatId);
        scrollToBottom();
        await sendMessageSocket(
          model,
          messages && messages.length > 0 ? messages : createMessagesList(_history, responseMessageId),
          _history,
          responseMessageId,
          _chatId
        );
        if (chatEventEmitter) clearInterval(chatEventEmitter);
      } else {
        toast.error($i18n().t(`Model {{modelId}} not found`, { modelId: modelId2 }));
      }
    }));
    currentChatPage.set(1);
    chats.set([]);
  };
  const getFeatures = () => {
    var _a;
    let features = {
      voice: false,
      image_generation: false,
      code_interpreter: false,
      web_search: false
    };
    if (((_a = $settings()) == null ? void 0 : _a.memory) ?? false) {
      features = { ...features, memory: true };
    }
    return features;
  };
  const sendMessageSocket = async (model, _messages, _history, responseMessageId, _chatId) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const responseMessage = _history.messages[responseMessageId];
    const userMessage = _history.messages[responseMessage.parentId];
    const chatMessageFiles = _messages.filter((message) => message.files).flatMap((message) => message.files);
    set(chatFiles, get$1(chatFiles).filter((item) => {
      const fileExists = chatMessageFiles.some((messageFile) => messageFile.id === item.id);
      return fileExists;
    }));
    let files2 = JSON.parse(JSON.stringify(get$1(chatFiles)));
    files2.push(...((userMessage == null ? void 0 : userMessage.files) ?? []).filter((item) => ["doc", "text", "file", "note", "chat", "collection"].includes(item.type)));
    files2 = files2.filter((item, index2, array) => array.findIndex((i) => JSON.stringify(i) === JSON.stringify(item)) === index2);
    scrollToBottom();
    eventTarget.dispatchEvent(new CustomEvent("chat:start", { detail: { id: responseMessageId } }));
    await tick();
    let userLocation;
    if ((_a = $settings()) == null ? void 0 : _a.userLocation) {
      userLocation = void 0;
    }
    const stream = ((_c = (_b = model == null ? void 0 : model.info) == null ? void 0 : _b.params) == null ? void 0 : _c.stream_response) ?? ((_e = (_d = $settings()) == null ? void 0 : _d.params) == null ? void 0 : _e.stream_response) ?? ((_f = get$1(params)) == null ? void 0 : _f.stream_response) ?? true;
    let messages = [
      ((_g = get$1(params)) == null ? void 0 : _g.system) || $settings().system ? {
        role: "system",
        content: `${((_h = get$1(params)) == null ? void 0 : _h.system) ?? ((_i = $settings()) == null ? void 0 : _i.system) ?? ""}`
      } : void 0,
      ..._messages.map((message) => ({ ...message, content: processDetails(message.content) }))
    ].filter((message) => message);
    messages = messages.map((message, idx, arr) => {
      var _a2, _b2, _c2;
      return {
        role: message.role,
        ...((_a2 = message.files) == null ? void 0 : _a2.filter((file) => file.type === "image").length) > 0 && message.role === "user" ? {
          content: [
            {
              type: "text",
              text: ((_b2 = message == null ? void 0 : message.merged) == null ? void 0 : _b2.content) ?? message.content
            },
            ...message.files.filter((file) => file.type === "image").map((file) => ({ type: "image_url", image_url: { url: file.url } }))
          ]
        } : { content: ((_c2 = message == null ? void 0 : message.merged) == null ? void 0 : _c2.content) ?? message.content }
      };
    }).filter((message) => {
      var _a2;
      return (message == null ? void 0 : message.role) === "user" || ((_a2 = message == null ? void 0 : message.content) == null ? void 0 : _a2.trim());
    });
    if (isSupportedModel(model.id)) {
      const chatMessages = messages.map((msg) => {
        var _a2;
        return {
          role: msg.role,
          content: typeof msg.content === "string" ? msg.content : Array.isArray(msg.content) ? ((_a2 = msg.content.find((c) => c.type === "text")) == null ? void 0 : _a2.text) || "" : ""
        };
      });
      set(generating, true);
      chatCompletionStream(
        chatMessages,
        model.id,
        {
          temperature: (_k = (_j = $settings()) == null ? void 0 : _j.params) == null ? void 0 : _k.temperature,
          top_p: (_m = (_l = $settings()) == null ? void 0 : _l.params) == null ? void 0 : _m.top_p
        },
        async (data) => {
          var _a2, _b2, _c2, _d2;
          if (data.error) {
            toast.error(data.error);
            responseMessage.error = { content: data.error };
            responseMessage.done = true;
            mutate(history, get$1(history).messages[responseMessageId] = responseMessage);
            set(history, get$1(history));
            set(generating, false);
            nvidiaController = null;
            await tick();
            if (get$1(autoScroll)) {
              scrollToBottom();
            }
            return;
          }
          if (data.done) {
            responseMessage.done = true;
            set(generating, false);
            nvidiaController = null;
            if ($settings().responseAutoCopy) {
              copyToClipboard(responseMessage.content);
            }
            eventTarget.dispatchEvent(new CustomEvent("chat:finish", {
              detail: { id: responseMessage.id, content: responseMessage.content }
            }));
            mutate(history, get$1(history).messages[responseMessageId] = responseMessage);
            set(history, get$1(history));
            await saveChatHandler(_chatId, get$1(history));
            await tick();
            if (get$1(autoScroll)) {
              scrollToBottom();
            }
            return;
          }
          if (!data.done && !data.error && responseMessage.content === "" && data.content === "\n") {
            return;
          }
          if (data.content) {
            responseMessage.content += data.content;
          }
          if (navigator.vibrate && (((_a2 = $settings()) == null ? void 0 : _a2.hapticFeedback) ?? false)) {
            navigator.vibrate(5);
          }
          const messageContentParts = getMessageContentParts(removeAllDetails(responseMessage.content), ((_d2 = (_c2 = (_b2 = $config()) == null ? void 0 : _b2.audio) == null ? void 0 : _c2.tts) == null ? void 0 : _d2.split_on) ?? "punctuation");
          messageContentParts.pop();
          if (messageContentParts.length > 0 && messageContentParts[messageContentParts.length - 1] !== responseMessage.lastSentence) {
            responseMessage.lastSentence = messageContentParts[messageContentParts.length - 1];
            eventTarget.dispatchEvent(new CustomEvent("chat", {
              detail: {
                id: responseMessage.id,
                content: messageContentParts[messageContentParts.length - 1]
              }
            }));
          }
          mutate(history, get$1(history).messages[responseMessageId] = responseMessage);
          set(history, get$1(history));
          await tick();
          if (get$1(autoScroll)) {
            scrollToBottom();
          }
        },
        (controller) => {
          nvidiaController = controller;
          set(generating, true);
        },
        () => {
          set(generating, false);
          nvidiaController = null;
        }
      );
      await tick();
      scrollToBottom();
      return;
    }
    const toolIds = [];
    const toolServerIds = [];
    for (const toolId of get$1(selectedToolIds)) {
      if (toolId.startsWith("direct_server:")) {
        let serverId = toolId.replace("direct_server:", "");
        if (!isNaN(parseInt(serverId))) {
          toolServerIds.push(parseInt(serverId));
        } else {
          toolServerIds.push(serverId);
        }
      } else {
        toolIds.push(toolId);
      }
    }
    const res = await generateOpenAIChatCompletion(
      "static-token",
      {
        stream,
        model: model.id,
        messages,
        params: {
          ...(_n = $settings()) == null ? void 0 : _n.params,
          ...get$1(params),
          stop: ((_o = get$1(params)) == null ? void 0 : _o.stop) ?? ((_q = (_p = $settings()) == null ? void 0 : _p.params) == null ? void 0 : _q.stop) ?? void 0 ? (((_r = get$1(params)) == null ? void 0 : _r.stop.split(",").map((token) => token.trim())) ?? $settings().params.stop).map((str) => decodeURIComponent(JSON.parse('"' + str.replace(/\"/g, '\\"') + '"'))) : void 0
        },
        files: ((files2 == null ? void 0 : files2.length) ?? 0) > 0 ? files2 : void 0,
        filter_ids: get$1(selectedFilterIds).length > 0 ? get$1(selectedFilterIds) : void 0,
        tool_ids: toolIds.length > 0 ? toolIds : void 0,
        tool_servers: ($toolServers() ?? []).filter((server, idx) => toolServerIds.includes(idx) || toolServerIds.includes(server == null ? void 0 : server.id)),
        features: getFeatures(),
        variables: {
          ...getPromptVariables((_s = $user()) == null ? void 0 : _s.name, ((_t = $settings()) == null ? void 0 : _t.userLocation) ? userLocation : void 0)
        },
        model_item: $models().find((m) => m.id === model.id),
        session_id: (_u = $socket()) == null ? void 0 : _u.id,
        chat_id: $chatId(),
        id: responseMessageId,
        background_tasks: {
          ...!$temporaryChatEnabled() && (messages.length == 1 || messages.length == 2 && ((_v = messages.at(0)) == null ? void 0 : _v.role) === "system" && ((_w = messages.at(1)) == null ? void 0 : _w.role) === "user") && (get$1(selectedModels)[0] === model.id || get$1(atSelectedModel) !== void 0) ? {
            title_generation: ((_y = (_x = $settings()) == null ? void 0 : _x.title) == null ? void 0 : _y.auto) ?? true,
            tags_generation: ((_z = $settings()) == null ? void 0 : _z.autoTags) ?? true
          } : {},
          follow_up_generation: ((_A = $settings()) == null ? void 0 : _A.autoFollowUps) ?? true
        },
        ...stream && (((_D = (_C = (_B = model.info) == null ? void 0 : _B.meta) == null ? void 0 : _C.capabilities) == null ? void 0 : _D.usage) ?? false) ? { stream_options: { include_usage: true } } : {}
      },
      `${WEBUI_BASE_URL}/api`
    ).catch(async (error) => {
      var _a2;
      let errorMessage = error;
      if ((_a2 = error == null ? void 0 : error.error) == null ? void 0 : _a2.message) {
        errorMessage = error.error.message;
      } else if (error == null ? void 0 : error.message) {
        errorMessage = error.message;
      }
      if (typeof errorMessage === "object") {
        errorMessage = $i18n().t(`Uh-oh! There was an issue with the response.`);
      }
      toast.error(`${errorMessage}`);
      responseMessage.error = { content: error };
      responseMessage.done = true;
      mutate(history, get$1(history).messages[responseMessageId] = responseMessage);
      mutate(history, get$1(history).currentId = responseMessageId);
      return null;
    });
    if (res) {
      if (res.error) {
        await handleOpenAIError(res.error, responseMessage);
      } else {
        if (get$1(taskIds)) {
          get$1(taskIds).push(res.task_id);
        } else {
          set(taskIds, [res.task_id]);
        }
      }
    }
    await tick();
    scrollToBottom();
  };
  const handleOpenAIError = async (error, responseMessage) => {
    let errorMessage = "";
    let innerError;
    if (error) {
      innerError = error;
    }
    console.error(innerError);
    if ("detail" in innerError) {
      toast.error(innerError.detail);
      errorMessage = innerError.detail;
    } else if ("error" in innerError) {
      if ("message" in innerError.error) {
        toast.error(innerError.error.message);
        errorMessage = innerError.error.message;
      } else {
        toast.error(innerError.error);
        errorMessage = innerError.error;
      }
    } else if ("message" in innerError) {
      toast.error(innerError.message);
      errorMessage = innerError.message;
    }
    responseMessage.error = {
      content: $i18n().t(`Uh-oh! There was an issue with the response.`) + "\n" + errorMessage
    };
    responseMessage.done = true;
    if (responseMessage.statusHistory) {
      responseMessage.statusHistory = responseMessage.statusHistory.filter((status) => status.action !== "knowledge_search");
    }
    mutate(history, get$1(history).messages[responseMessage.id] = responseMessage);
  };
  const stopResponse = async () => {
    if (nvidiaController) {
      nvidiaController.abort();
      return;
    }
    if (get$1(taskIds)) {
      for (const taskId of get$1(taskIds)) {
        null.catch((error) => {
          toast.error(`${error}`);
          return null;
        });
      }
      set(taskIds, null);
      const responseMessage = get$1(history).messages[get$1(history).currentId];
      for (const messageId of get$1(history).messages[responseMessage.parentId].childrenIds) {
        mutate(history, get$1(history).messages[messageId].done = true);
      }
      mutate(history, get$1(history).messages[get$1(history).currentId] = responseMessage);
      if (get$1(autoScroll)) {
        scrollToBottom();
      }
    }
    if (get$1(generating)) {
      set(generating, false);
      generationController == null ? void 0 : generationController.abort();
      generationController = null;
    }
  };
  const submitMessage = async (parentId, prompt2) => {
    let userPrompt = prompt2;
    let userMessageId = v4();
    let userMessage = {
      id: userMessageId,
      parentId,
      childrenIds: [],
      role: "user",
      content: userPrompt,
      models: get$1(selectedModels),
      timestamp: Math.floor(Date.now() / 1e3)
      // Unix epoch
    };
    if (parentId !== null) {
      mutate(history, get$1(history).messages[parentId].childrenIds = [
        ...get$1(history).messages[parentId].childrenIds,
        userMessageId
      ]);
    }
    mutate(history, get$1(history).messages[userMessageId] = userMessage);
    mutate(history, get$1(history).currentId = userMessageId);
    await tick();
    if (get$1(autoScroll)) {
      scrollToBottom();
    }
    await sendMessage(get$1(history), userMessageId);
  };
  const regenerateResponse = async (message, suggestionPrompt = null) => {
    if (get$1(history).currentId) {
      let userMessage = get$1(history).messages[message.parentId];
      if (get$1(autoScroll)) {
        scrollToBottom();
      }
      await sendMessage(get$1(history), userMessage.id, {
        ...suggestionPrompt ? {
          messages: [
            ...createMessagesList(get$1(history), message.id),
            { role: "user", content: suggestionPrompt }
          ]
        } : {},
        ...((userMessage == null ? void 0 : userMessage.models) ?? [...get$1(selectedModels)]).length > 1 ? {
          // If multiple models are selected, use the model from the message
          modelId: message.model,
          modelIdx: message.modelIdx
        } : {}
      });
    }
  };
  const continueResponse = async () => {
    const _chatId = JSON.parse(JSON.stringify($chatId()));
    if (get$1(history).currentId && get$1(history).messages[get$1(history).currentId].done == true) {
      const responseMessage = get$1(history).messages[get$1(history).currentId];
      responseMessage.done = false;
      await tick();
      const model = $models().filter((m) => m.id === ((responseMessage == null ? void 0 : responseMessage.selectedModelId) ?? responseMessage.model)).at(0);
      if (model) {
        await sendMessageSocket(model, createMessagesList(get$1(history), responseMessage.id), get$1(history), responseMessage.id, _chatId);
      }
    }
  };
  const mergeResponses = async (messageId, responses, _chatId) => {
    const message = get$1(history).messages[messageId];
    const mergedResponse = { status: true, content: "" };
    message.merged = mergedResponse;
    mutate(history, get$1(history).messages[messageId] = message);
    try {
      set(generating, true);
      const [res, controller] = await generateMoACompletion("static-token", message.model, get$1(history).messages[message.parentId].content, responses);
      if (res && res.ok && res.body && get$1(generating)) {
        generationController = controller;
        const textStream = await createOpenAITextStream(res.body, $settings().splitLargeChunks);
        for await (const update of textStream) {
          const { value, done, sources, error, usage } = update;
          if (error || done) {
            set(generating, false);
            generationController = null;
            break;
          }
          if (mergedResponse.content == "" && value == "\n") {
            continue;
          } else {
            mergedResponse.content += value;
            mutate(history, get$1(history).messages[messageId] = message);
          }
          if (get$1(autoScroll)) {
            scrollToBottom();
          }
        }
        await saveChatHandler(_chatId, get$1(history));
      } else {
        console.error(res);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const initChatHandler = async (history2) => {
    var _a, _b;
    let _chatId = $chatId();
    if (!$temporaryChatEnabled()) {
      chat = await createNewChat(
        "static-token",
        {
          id: _chatId,
          title: $i18n().t("New Chat"),
          models: get$1(selectedModels),
          system: $settings().system ?? void 0,
          params: get$1(params),
          history: history2,
          messages: createMessagesList(history2, history2.currentId),
          tags: [],
          timestamp: Date.now()
        },
        (_a = $selectedFolder()) == null ? void 0 : _a.id
      );
      _chatId = chat.id;
      await chatId.set(_chatId);
      window.history.replaceState(history2.state, "", `/c/${_chatId}`);
      await tick();
      await chats.set([]);
      currentChatPage.set(1);
      selectedFolder.set(null);
    } else {
      _chatId = `local:${(_b = $socket()) == null ? void 0 : _b.id}`;
      await chatId.set(_chatId);
    }
    await tick();
    return _chatId;
  };
  const saveChatHandler = async (_chatId, history2) => {
    if ($chatId() == _chatId) {
      if (!$temporaryChatEnabled()) {
        chat = await updateChatById("static-token", _chatId, {
          models: get$1(selectedModels),
          history: history2,
          messages: createMessagesList(history2, history2.currentId),
          params: get$1(params),
          files: get$1(chatFiles)
        });
        currentChatPage.set(1);
        await chats.set([]);
      }
    }
  };
  const saveDraft = async (draft, chatId2 = null) => {
  };
  const clearDraft = async (chatId2 = null) => {
  };
  const moveChatHandler = async (chatId2, folderId) => {
    if (chatId2 && folderId) {
      const res = null.catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        currentChatPage.set(1);
        await chats.set([]);
        await pinnedChats.set([]);
        toast.success($i18n().t("Chat moved successfully"));
      }
    } else {
      toast.error($i18n().t("Failed to move chat"));
    }
  };
  legacy_pre_effect(() => (get$1(atSelectedModel), get$1(selectedModels)), () => {
    if (get$1(atSelectedModel) !== void 0) {
      set(selectedModelIds, [get$1(atSelectedModel).id]);
    } else {
      set(selectedModelIds, get$1(selectedModels));
    }
  });
  legacy_pre_effect(() => deep_read_state(chatIdProp()), () => {
    if (chatIdProp()) {
      navigateHandler();
    }
  });
  legacy_pre_effect(() => (get$1(selectedModelIds), get$1(oldSelectedModelIds)), () => {
    if (JSON.stringify(get$1(selectedModelIds)) !== JSON.stringify(get$1(oldSelectedModelIds))) {
      onSelectedModelIdsChange();
    }
  });
  legacy_pre_effect(() => get$1(selectedModels), () => {
    if (get$1(selectedModels) !== null) {
      savedModelIds();
    }
  });
  legacy_pre_effect(() => (get$1(history), artifactContents), () => {
    if (get$1(history)) {
      getContents();
    } else {
      artifactContents.set([]);
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root();
  head("vhdo11", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
                ${$0 ?? ""}
        `;
      },
      [
        () => ($settings(), $chatTitle(), $WEBUI_NAME(), untrack(() => $settings().showChatTitleInTab !== false && $chatTitle() ? `${$chatTitle().length > 30 ? `${$chatTitle().slice(0, 30)}...` : $chatTitle()} • ${$WEBUI_NAME()}` : `${$WEBUI_NAME()}`))
      ]
    );
  });
  var node = sibling(first_child(fragment), 2);
  ConfirmDialog(node, {
    get title() {
      return get$1(eventConfirmationTitle);
    },
    get message() {
      return get$1(eventConfirmationMessage);
    },
    get input() {
      return get$1(eventConfirmationInput);
    },
    get inputPlaceholder() {
      return get$1(eventConfirmationInputPlaceholder);
    },
    get inputValue() {
      return get$1(eventConfirmationInputValue);
    },
    get show() {
      return get$1(showEventConfirmation);
    },
    set show($$value) {
      set(showEventConfirmation, $$value);
    },
    $$events: {
      confirm: (e) => {
        if (e.detail) {
          get$1(eventCallback)(e.detail);
        } else {
          get$1(eventCallback)(true);
        }
      },
      cancel: () => {
        get$1(eventCallback)(false);
      }
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  {
    var consequent_3 = ($$anchor2) => {
      var div_1 = root_2();
      var node_2 = child(div_1);
      {
        var consequent = ($$anchor3) => {
          var fragment_1 = root_3();
          var div_2 = first_child(fragment_1);
          next(2);
          template_effect(() => set_style(div_2, `background-image: url(${($selectedFolder(), untrack(() => {
            var _a, _b;
            return (_b = (_a = $selectedFolder()) == null ? void 0 : _a.meta) == null ? void 0 : _b.background_image_url;
          })) ?? ""})  `));
          append($$anchor3, fragment_1);
        };
        var alternate = ($$anchor3) => {
          var fragment_2 = comment();
          var node_3 = first_child(fragment_2);
          {
            var consequent_1 = ($$anchor4) => {
              var fragment_3 = root_5();
              var div_3 = first_child(fragment_3);
              next(2);
              template_effect(() => set_style(div_3, `background-image: url(${($settings(), $config(), untrack(() => {
                var _a, _b, _c;
                return ((_a = $settings()) == null ? void 0 : _a.backgroundImageUrl) ?? ((_c = (_b = $config()) == null ? void 0 : _b.license_metadata) == null ? void 0 : _c.background_image_url);
              })) ?? ""})  `));
              append($$anchor4, fragment_3);
            };
            if_block(
              node_3,
              ($$render) => {
                if ($settings(), $config(), untrack(() => {
                  var _a, _b, _c;
                  return ((_a = $settings()) == null ? void 0 : _a.backgroundImageUrl) ?? ((_c = (_b = $config()) == null ? void 0 : _b.license_metadata) == null ? void 0 : _c.background_image_url) ?? null;
                })) $$render(consequent_1);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(node_2, ($$render) => {
          if ($selectedFolder(), untrack(() => {
            var _a, _b;
            return $selectedFolder() && ((_b = (_a = $selectedFolder()) == null ? void 0 : _a.meta) == null ? void 0 : _b.background_image_url);
          })) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      var node_4 = sibling(node_2, 2);
      Pane_group(node_4, {
        direction: "horizontal",
        class: "w-full h-full",
        children: ($$anchor3, $$slotProps) => {
          var fragment_4 = root_6();
          var node_5 = first_child(fragment_4);
          Pane(node_5, {
            defaultSize: 50,
            minSize: 30,
            class: "h-full flex relative max-w-full flex-col",
            children: ($$anchor4, $$slotProps2) => {
              var fragment_5 = root_7();
              var node_6 = first_child(fragment_5);
              {
                let $0 = derived_safe_equal(() => ($chatId(), $chatTitle(), get$1(selectedModels), $settings(), get$1(params), get$1(history), untrack(() => ({
                  id: $chatId(),
                  chat: {
                    title: $chatTitle(),
                    models: get$1(selectedModels),
                    system: $settings().system ?? void 0,
                    params: get$1(params),
                    history: get$1(history),
                    timestamp: Date.now()
                  }
                }))));
                let $1 = derived_safe_equal(() => (get$1(history), untrack(() => !!get$1(history).currentId)));
                bind_this(
                  Navbar(node_6, {
                    get chat() {
                      return get$1($0);
                    },
                    get history() {
                      return get$1(history);
                    },
                    get title() {
                      return $chatTitle();
                    },
                    get shareEnabled() {
                      return get$1($1);
                    },
                    initNewChat,
                    archiveChatHandler: () => {
                    },
                    moveChatHandler,
                    onSaveTempChat: async () => {
                      var _a, _b;
                      try {
                        if (!((_a = get$1(history)) == null ? void 0 : _a.currentId) || !Object.keys(get$1(history).messages).length) {
                          toast.error($i18n().t("No conversation to save"));
                          return;
                        }
                        const messages = createMessagesList(get$1(history), get$1(history).currentId);
                        const title = ((_b = messages.find((m) => m.role === "user")) == null ? void 0 : _b.content) ?? $i18n().t("New Chat");
                        const savedChat = await createNewChat(
                          "static-token",
                          {
                            id: v4(),
                            title: title.length > 50 ? `${title.slice(0, 50)}...` : title,
                            models: get$1(selectedModels),
                            history: get$1(history),
                            messages,
                            timestamp: Date.now()
                          },
                          null
                        );
                        if (savedChat) {
                          temporaryChatEnabled.set(false);
                          chatId.set(savedChat.id);
                          chats.set([]);
                          await goto(`/c/${savedChat.id}`);
                          toast.success($i18n().t("Conversation saved successfully"));
                        }
                      } catch (error) {
                        console.error("Error saving conversation:", error);
                        toast.error($i18n().t("Failed to save conversation"));
                      }
                    },
                    get selectedModels() {
                      return get$1(selectedModels);
                    },
                    set selectedModels($$value) {
                      set(selectedModels, $$value);
                    },
                    $$legacy: true
                  }),
                  ($$value) => set(navbarElement, $$value),
                  () => get$1(navbarElement)
                );
              }
              var div_4 = sibling(node_6, 2);
              var node_7 = child(div_4);
              {
                var consequent_2 = ($$anchor5) => {
                  var fragment_6 = root_8();
                  var div_5 = first_child(fragment_6);
                  var div_6 = child(div_5);
                  var node_8 = child(div_6);
                  {
                    let $0 = derived_safe_equal(() => (get$1(files), untrack(() => get$1(files).length > 0)));
                    Messages(node_8, {
                      get chatId() {
                        return $chatId();
                      },
                      setInputText: (text2) => {
                        var _a;
                        (_a = get$1(messageInput)) == null ? void 0 : _a.setText(text2);
                      },
                      get selectedModels() {
                        return get$1(selectedModels);
                      },
                      get atSelectedModel() {
                        return get$1(atSelectedModel);
                      },
                      sendMessage,
                      showMessage,
                      submitMessage,
                      continueResponse,
                      regenerateResponse,
                      mergeResponses,
                      chatActionHandler,
                      addMessages,
                      topPadding: true,
                      get bottomPadding() {
                        return get$1($0);
                      },
                      onSelect,
                      get history() {
                        return get$1(history);
                      },
                      set history($$value) {
                        set(history, $$value);
                      },
                      get autoScroll() {
                        return get$1(autoScroll);
                      },
                      set autoScroll($$value) {
                        set(autoScroll, $$value);
                      },
                      get prompt() {
                        return get$1(prompt);
                      },
                      set prompt($$value) {
                        set(prompt, $$value);
                      },
                      $$legacy: true
                    });
                  }
                  reset(div_6);
                  reset(div_5);
                  bind_this(div_5, ($$value) => set(messagesContainerElement, $$value), () => get$1(messagesContainerElement));
                  var div_7 = sibling(div_5, 2);
                  var node_9 = child(div_7);
                  bind_this(
                    MessageInput(node_9, {
                      get history() {
                        return get$1(history);
                      },
                      get taskIds() {
                        return get$1(taskIds);
                      },
                      get selectedModels() {
                        return get$1(selectedModels);
                      },
                      get toolServers() {
                        return $toolServers();
                      },
                      get generating() {
                        return get$1(generating);
                      },
                      stopResponse,
                      createMessagePair,
                      onChange: (data) => {
                        if (!$temporaryChatEnabled()) {
                          saveDraft(data, $chatId());
                        }
                      },
                      get files() {
                        return get$1(files);
                      },
                      set files($$value) {
                        set(files, $$value);
                      },
                      get prompt() {
                        return get$1(prompt);
                      },
                      set prompt($$value) {
                        set(prompt, $$value);
                      },
                      get autoScroll() {
                        return get$1(autoScroll);
                      },
                      set autoScroll($$value) {
                        set(autoScroll, $$value);
                      },
                      get selectedToolIds() {
                        return get$1(selectedToolIds);
                      },
                      set selectedToolIds($$value) {
                        set(selectedToolIds, $$value);
                      },
                      get selectedFilterIds() {
                        return get$1(selectedFilterIds);
                      },
                      set selectedFilterIds($$value) {
                        set(selectedFilterIds, $$value);
                      },
                      get imageGenerationEnabled() {
                        return get$1(imageGenerationEnabled);
                      },
                      set imageGenerationEnabled($$value) {
                        set(imageGenerationEnabled, $$value);
                      },
                      get codeInterpreterEnabled() {
                        return get$1(codeInterpreterEnabled);
                      },
                      set codeInterpreterEnabled($$value) {
                        set(codeInterpreterEnabled, $$value);
                      },
                      get webSearchEnabled() {
                        return get$1(webSearchEnabled);
                      },
                      set webSearchEnabled($$value) {
                        set(webSearchEnabled, $$value);
                      },
                      get atSelectedModel() {
                        return get$1(atSelectedModel);
                      },
                      set atSelectedModel($$value) {
                        set(atSelectedModel, $$value);
                      },
                      get showCommands() {
                        return get$1(showCommands);
                      },
                      set showCommands($$value) {
                        set(showCommands, $$value);
                      },
                      $$events: {
                        upload: async (e) => {
                          const { type, data } = e.detail;
                          if (type === "web") {
                            await uploadWeb(data);
                          } else if (type === "youtube") {
                            await uploadYoutubeTranscription(data);
                          } else if (type === "google-drive") {
                            await uploadGoogleDriveFile(data);
                          }
                        },
                        submit: async (e) => {
                          clearDraft();
                          if (e.detail || get$1(files).length > 0) {
                            await tick();
                            submitPrompt(e.detail.replaceAll("\n\n", "\n"));
                          }
                        }
                      },
                      $$legacy: true
                    }),
                    ($$value) => set(messageInput, $$value),
                    () => get$1(messageInput)
                  );
                  next(2);
                  reset(div_7);
                  event("scroll", div_5, (e) => {
                    set(autoScroll, get$1(messagesContainerElement).scrollHeight - get$1(messagesContainerElement).scrollTop <= get$1(messagesContainerElement).clientHeight + 5);
                  });
                  append($$anchor5, fragment_6);
                };
                var alternate_1 = ($$anchor5) => {
                  var div_8 = root_9();
                  var node_10 = child(div_8);
                  Placeholder(node_10, {
                    get history() {
                      return get$1(history);
                    },
                    get selectedModels() {
                      return get$1(selectedModels);
                    },
                    get toolServers() {
                      return $toolServers();
                    },
                    stopResponse,
                    createMessagePair,
                    onSelect,
                    onChange: (data) => {
                      if (!$temporaryChatEnabled()) {
                        saveDraft();
                      }
                    },
                    get messageInput() {
                      return get$1(messageInput);
                    },
                    set messageInput($$value) {
                      set(messageInput, $$value);
                    },
                    get files() {
                      return get$1(files);
                    },
                    set files($$value) {
                      set(files, $$value);
                    },
                    get prompt() {
                      return get$1(prompt);
                    },
                    set prompt($$value) {
                      set(prompt, $$value);
                    },
                    get autoScroll() {
                      return get$1(autoScroll);
                    },
                    set autoScroll($$value) {
                      set(autoScroll, $$value);
                    },
                    get selectedToolIds() {
                      return get$1(selectedToolIds);
                    },
                    set selectedToolIds($$value) {
                      set(selectedToolIds, $$value);
                    },
                    get selectedFilterIds() {
                      return get$1(selectedFilterIds);
                    },
                    set selectedFilterIds($$value) {
                      set(selectedFilterIds, $$value);
                    },
                    get imageGenerationEnabled() {
                      return get$1(imageGenerationEnabled);
                    },
                    set imageGenerationEnabled($$value) {
                      set(imageGenerationEnabled, $$value);
                    },
                    get codeInterpreterEnabled() {
                      return get$1(codeInterpreterEnabled);
                    },
                    set codeInterpreterEnabled($$value) {
                      set(codeInterpreterEnabled, $$value);
                    },
                    get webSearchEnabled() {
                      return get$1(webSearchEnabled);
                    },
                    set webSearchEnabled($$value) {
                      set(webSearchEnabled, $$value);
                    },
                    get atSelectedModel() {
                      return get$1(atSelectedModel);
                    },
                    set atSelectedModel($$value) {
                      set(atSelectedModel, $$value);
                    },
                    get showCommands() {
                      return get$1(showCommands);
                    },
                    set showCommands($$value) {
                      set(showCommands, $$value);
                    },
                    $$events: {
                      upload: async (e) => {
                        const { type, data } = e.detail;
                        if (type === "web") {
                          await uploadWeb(data);
                        } else if (type === "youtube") {
                          await uploadYoutubeTranscription(data);
                        }
                      },
                      submit: async (e) => {
                        clearDraft();
                        if (e.detail || get$1(files).length > 0) {
                          await tick();
                          submitPrompt(e.detail.replaceAll("\n\n", "\n"));
                        }
                      }
                    },
                    $$legacy: true
                  });
                  reset(div_8);
                  append($$anchor5, div_8);
                };
                if_block(node_7, ($$render) => {
                  if ($settings(), $selectedFolder(), deep_read_state(createMessagesList), get$1(history), untrack(() => {
                    var _a;
                    return ((_a = $settings()) == null ? void 0 : _a.landingPageMode) === "chat" && !$selectedFolder() || createMessagesList(get$1(history), get$1(history).currentId).length > 0;
                  })) $$render(consequent_2);
                  else $$render(alternate_1, false);
                });
              }
              reset(div_4);
              append($$anchor4, fragment_5);
            },
            $$slots: { default: true }
          });
          var node_11 = sibling(node_5, 2);
          {
            let $0 = derived_safe_equal(() => (get$1(selectedModelIds), untrack(() => {
              var _a;
              return ((_a = get$1(selectedModelIds)) == null ? void 0 : _a.at(0)) ?? null;
            })));
            let $1 = derived_safe_equal(() => (get$1(selectedModelIds), $models(), untrack(() => get$1(selectedModelIds).reduce(
              (a, e, i, arr) => {
                const model = $models().find((m) => m.id === e);
                if (model) {
                  return [...a, model];
                }
                return a;
              },
              []
            ))));
            bind_this(
              ChatControls(node_11, {
                get chatId() {
                  return $chatId();
                },
                get modelId() {
                  return get$1($0);
                },
                get models() {
                  return get$1($1);
                },
                submitPrompt,
                stopResponse,
                showMessage,
                get eventTarget() {
                  return eventTarget;
                },
                get history() {
                  return get$1(history);
                },
                set history($$value) {
                  set(history, $$value);
                },
                get chatFiles() {
                  return get$1(chatFiles);
                },
                set chatFiles($$value) {
                  set(chatFiles, $$value);
                },
                get params() {
                  return get$1(params);
                },
                set params($$value) {
                  set(params, $$value);
                },
                get files() {
                  return get$1(files);
                },
                set files($$value) {
                  set(files, $$value);
                },
                get pane() {
                  return get$1(controlPane);
                },
                set pane($$value) {
                  set(controlPane, $$value);
                },
                $$legacy: true
              }),
              ($$value) => set(controlPaneComponent, $$value),
              () => get$1(controlPaneComponent)
            );
          }
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true }
      });
      reset(div_1);
      transition(1, div_1, () => fade, () => ({ duration: 50 }));
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      $$render(consequent_3);
    });
  }
  reset(div);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  Chat as C
};
