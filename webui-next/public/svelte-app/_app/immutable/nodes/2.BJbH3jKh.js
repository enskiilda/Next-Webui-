import { e as comment, a as append, f as from_html, c as store_get, b as set_text, s as setup_stores, g as event } from "../chunks/Dyq6N3Rz.js";
import { i as init } from "../chunks/ERhjC6zA.js";
import { ac as first_child, p as push, af as createEventDispatcher, ag as getContext, ah as legacy_pre_effect, v as get, a9 as mutable_source, ai as legacy_pre_effect_reset, ad as sibling, c as child, m as untrack, r as reset, t as template_effect, w as deep_read_state, W as set, a as pop, o as onMount, aj as onDestroy, ak as next, Y as derived_safe_equal, ab as tick, al as mutate } from "../chunks/Bd2P5WIS.js";
import { s as slot, e as each, i as index, u as user, f as folders, a as set_style, b as set_class, c as set_attribute, d as chatId, t as toast, g as tags, r as remove_input_defaults, h as selectedFolder, j as showSidebar, k as chatTitle, l as currentChatPage, m as chats, p as pinnedChats, n as mobile, o as scrollPaginationEnabled, q as temporaryChatEnabled, v as showSearch, w as showArchivedChats, W as WEBUI_NAME, x as tools, y as functions, z as toolServers, A as showSettings, B as showShortcuts } from "../chunks/CVh7obxn.js";
import { g as goto } from "../chunks/Bqawpx0t.js";
import { p as page } from "../chunks/DghAKJkW.js";
import { l as legacy_rest_props, s as spread_props, p as prop, i as if_block, b as bind_this } from "../chunks/CZqSbRSh.js";
import { I as Icon, D as Dropdown, a as Dropdown_menu_content, M as Menu_sub, b as Menu_sub_trigger, d as Menu_sub_content, e as Menu_item, f as flyAndScale, h as Icon$1, C as ConfirmDialog, i as bind_value, U as UserMenu, S as Spinner, L as Loader } from "../chunks/BJXpAMXr.js";
function Square_pen($$anchor, $$props) {
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
      "path",
      {
        "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      }
    ],
    [
      "path",
      {
        "d": "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
      }
    ]
  ];
  Icon($$anchor, spread_props({ name: "square-pen" }, () => $$sanitized_props, {
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
var root_6$2 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_8$2 = from_html(`<div class="flex items-center"> </div>`);
var root_11$1 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_12$1 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_9$2 = from_html(`<!> <!>`, 1);
var root_7 = from_html(`<!> <!>`, 1);
var root_13$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_15 = from_html(`<div class="flex items-center"> </div>`);
var root_16$1 = from_html(`<div class="flex items-center"> </div>`);
var root_17$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_20 = from_html(`<div class="flex items-center"> </div>`);
var root_23 = from_html(`<div class="flex items-center"> </div>`);
var root_19 = from_html(`<!> <!>`, 1);
var root_24 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_25 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_4$2 = from_html(`<!> <!> <!> <hr class="border-gray-50 dark:border-gray-800 my-1"/> <!> <!> <!> <!> <!>`, 1);
var root_3$2 = from_html(`<div slot="content"><!></div>`);
var root$5 = from_html(`<!> <!>`, 1);
function ChatMenu($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $folders = () => store_get(folders, "$folders", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let shareHandler = prop($$props, "shareHandler", 8);
  let moveChatHandler = prop($$props, "moveChatHandler", 8);
  let cloneChatHandler = prop($$props, "cloneChatHandler", 8);
  let archiveChatHandler = prop($$props, "archiveChatHandler", 8);
  let renameHandler = prop($$props, "renameHandler", 8);
  let deleteHandler = prop($$props, "deleteHandler", 8);
  let onClose = prop($$props, "onClose", 8);
  let chatId2 = prop($$props, "chatId", 8, "");
  let show = mutable_source(false);
  let pinned = mutable_source(false);
  const pinHandler = async () => {
    dispatch("change");
  };
  const checkPinned = async () => {
    set(pinned, false);
  };
  const downloadTxt = async () => {
    {
      return;
    }
  };
  const downloadJSONExport = async () => {
  };
  legacy_pre_effect(() => get(show), () => {
    if (get(show)) {
      checkPinned();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$5();
  var node = first_child(fragment);
  {
    if_block(node, ($$render) => {
    });
  }
  var node_2 = sibling(node, 2);
  Dropdown(node_2, {
    get show() {
      return get(show);
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
      var node_3 = first_child(fragment_1);
      slot(node_3, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div_2 = root_3$2();
        var node_4 = child(div_2);
        Dropdown_menu_content(node_4, {
          class: "w-full max-w-[200px] rounded-2xl px-1 py-1  border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg transition",
          sideOffset: -2,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_4$2();
            var node_5 = first_child(fragment_2);
            {
              var consequent_1 = ($$anchor4) => {
                Menu_item($$anchor4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800  rounded-xl",
                  $$events: {
                    click: () => {
                      shareHandler()();
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_4 = root_6$2();
                    var node_6 = first_child(fragment_4);
                    Icon$1(node_6, { name: "Share", strokeWidth: "1.5" });
                    var div_3 = sibling(node_6, 2);
                    var text = child(div_3, true);
                    reset(div_3);
                    template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
                    append($$anchor5, fragment_4);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_5, ($$render) => {
                if ($user(), untrack(() => {
                  var _a, _b, _c;
                  return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user().permissions) == null ? void 0 : _b.chat) == null ? void 0 : _c.share) ?? true);
                })) $$render(consequent_1);
              });
            }
            var node_7 = sibling(node_5, 2);
            Menu_sub(node_7, {
              children: ($$anchor4, $$slotProps3) => {
                var fragment_5 = root_7();
                var node_8 = first_child(fragment_5);
                Menu_sub_trigger(node_8, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                  children: ($$anchor5, $$slotProps4) => {
                    var div_4 = root_8$2();
                    var text_1 = child(div_4, true);
                    reset(div_4);
                    template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Download")))]);
                    append($$anchor5, div_4);
                  },
                  $$slots: { default: true }
                });
                var node_9 = sibling(node_8, 2);
                Menu_sub_content(node_9, {
                  class: "w-full rounded-2xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg border border-gray-100  dark:border-gray-800",
                  get transition() {
                    return flyAndScale;
                  },
                  sideOffset: 8,
                  children: ($$anchor5, $$slotProps4) => {
                    var fragment_6 = root_9$2();
                    var node_10 = first_child(fragment_6);
                    {
                      var consequent_2 = ($$anchor6) => {
                        Menu_item($$anchor6, {
                          class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                          $$events: {
                            click: () => {
                              downloadJSONExport();
                            }
                          },
                          children: ($$anchor7, $$slotProps5) => {
                            var div_5 = root_11$1();
                            var text_2 = child(div_5, true);
                            reset(div_5);
                            template_effect(($0) => set_text(text_2, $0), [
                              () => ($i18n(), untrack(() => $i18n().t("Export chat (.json)")))
                            ]);
                            append($$anchor7, div_5);
                          },
                          $$slots: { default: true }
                        });
                      };
                      if_block(node_10, ($$render) => {
                        if ($user(), untrack(() => {
                          var _a, _b, _c;
                          return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user().permissions) == null ? void 0 : _b.chat) == null ? void 0 : _c.export) ?? true);
                        })) $$render(consequent_2);
                      });
                    }
                    var node_11 = sibling(node_10, 2);
                    Menu_item(node_11, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                      $$events: {
                        click: () => {
                          downloadTxt();
                        }
                      },
                      children: ($$anchor6, $$slotProps5) => {
                        var div_6 = root_12$1();
                        var text_3 = child(div_6, true);
                        reset(div_6);
                        template_effect(($0) => set_text(text_3, $0), [
                          () => ($i18n(), untrack(() => $i18n().t("Plain text (.txt)")))
                        ]);
                        append($$anchor6, div_6);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_6);
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_5);
              },
              $$slots: { default: true }
            });
            var node_12 = sibling(node_7, 2);
            Menu_item(node_12, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  renameHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_8 = root_13$1();
                var node_13 = first_child(fragment_8);
                Square_pen(node_13, { class: "size-4" });
                var div_7 = sibling(node_13, 2);
                var text_4 = child(div_7, true);
                reset(div_7);
                template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Rename")))]);
                append($$anchor4, fragment_8);
              },
              $$slots: { default: true }
            });
            var node_14 = sibling(node_12, 4);
            Menu_item(node_14, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  pinHandler();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_9 = comment();
                var node_15 = first_child(fragment_9);
                {
                  var consequent_3 = ($$anchor5) => {
                    var div_8 = root_15();
                    var text_5 = child(div_8, true);
                    reset(div_8);
                    template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Unpin")))]);
                    append($$anchor5, div_8);
                  };
                  var alternate = ($$anchor5) => {
                    var div_9 = root_16$1();
                    var text_6 = child(div_9, true);
                    reset(div_9);
                    template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Pin")))]);
                    append($$anchor5, div_9);
                  };
                  if_block(node_15, ($$render) => {
                    if (get(pinned)) $$render(consequent_3);
                    else $$render(alternate, false);
                  });
                }
                append($$anchor4, fragment_9);
              },
              $$slots: { default: true }
            });
            var node_16 = sibling(node_14, 2);
            Menu_item(node_16, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  cloneChatHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_10 = root_17$1();
                var node_17 = first_child(fragment_10);
                Icon$1(node_17, { name: "DocumentDuplicate", strokeWidth: "1.5" });
                var div_10 = sibling(node_17, 2);
                var text_7 = child(div_10, true);
                reset(div_10);
                template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Clone")))]);
                append($$anchor4, fragment_10);
              },
              $$slots: { default: true }
            });
            var node_18 = sibling(node_16, 2);
            {
              var consequent_4 = ($$anchor4) => {
                Menu_sub($$anchor4, {
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_12 = root_19();
                    var node_19 = first_child(fragment_12);
                    Menu_sub_trigger(node_19, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                      children: ($$anchor6, $$slotProps4) => {
                        var div_11 = root_20();
                        var text_8 = child(div_11, true);
                        reset(div_11);
                        template_effect(($0) => set_text(text_8, $0), [() => ($i18n(), untrack(() => $i18n().t("Move")))]);
                        append($$anchor6, div_11);
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
                        var fragment_13 = comment();
                        var node_21 = first_child(fragment_13);
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
                                  moveChatHandler()(chatId2(), get(folder).id);
                                }
                              },
                              children: ($$anchor8, $$slotProps5) => {
                                var div_12 = root_23();
                                var text_9 = child(div_12, true);
                                reset(div_12);
                                template_effect(() => set_text(text_9, (get(folder), untrack(() => {
                                  var _a;
                                  return ((_a = get(folder)) == null ? void 0 : _a.name) ?? "Folder";
                                }))));
                                append($$anchor8, div_12);
                              },
                              $$slots: { default: true }
                            });
                          }
                        );
                        append($$anchor6, fragment_13);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_12);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_18, ($$render) => {
                if (deep_read_state(chatId2()), $folders(), untrack(() => chatId2() && $folders().length > 0)) $$render(consequent_4);
              });
            }
            var node_22 = sibling(node_18, 2);
            Menu_item(node_22, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  archiveChatHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_15 = root_24();
                var node_23 = first_child(fragment_15);
                Icon$1(node_23, { name: "ArchiveBox", strokeWidth: "1.5" });
                var div_13 = sibling(node_23, 2);
                var text_10 = child(div_13, true);
                reset(div_13);
                template_effect(($0) => set_text(text_10, $0), [() => ($i18n(), untrack(() => $i18n().t("Archive")))]);
                append($$anchor4, fragment_15);
              },
              $$slots: { default: true }
            });
            var node_24 = sibling(node_22, 2);
            Menu_item(node_24, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  deleteHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_16 = root_25();
                var node_25 = first_child(fragment_16);
                Icon$1(node_25, { name: "GarbageBin", strokeWidth: "1.5" });
                var div_14 = sibling(node_25, 2);
                var text_11 = child(div_14, true);
                reset(div_14);
                template_effect(($0) => set_text(text_11, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                append($$anchor4, fragment_16);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        append($$anchor2, div_2);
      }
    },
    $$legacy: true
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$4 = from_html(`<div class="fixed top-0 left-0 w-screen h-[100dvh] z-50 touch-none pointer-events-none"><div class=" absolute text-white z-99999"><!></div></div>`);
function DragGhost($$anchor, $$props) {
  push($$props, false);
  let x = prop($$props, "x", 8);
  let y = prop($$props, "y", 8);
  let popupElement = mutable_source(null);
  onMount(() => {
    document.body.appendChild(get(popupElement));
    document.body.style.overflow = "hidden";
  });
  onDestroy(() => {
    document.body.removeChild(get(popupElement));
    document.body.style.overflow = "unset";
  });
  init();
  var div = root$4();
  var div_1 = child(div);
  var node = child(div_1);
  slot(node, $$props, "default", {}, null);
  reset(div_1);
  reset(div);
  bind_this(div, ($$value) => set(popupElement, $$value), () => get(popupElement));
  template_effect(() => set_style(div_1, `top: ${y() + 10}px; left: ${x() + 10}px;`));
  append($$anchor, div);
  pop();
}
var root_1$1 = from_html(`<div class=" text-sm text-gray-500 flex-1 line-clamp-3"> <span class="  font-semibold"> </span>.</div>`);
var root_3$1 = from_html(`<div class=" bg-black/80 backdrop-blur-2xl px-2 py-1 rounded-lg w-fit max-w-40"><div class="flex items-center gap-1"><!> <div class=" text-xs text-white line-clamp-1"> </div></div></div>`);
var root_4$1 = from_html(`<div id="sidebar-chat-item"><input class=" bg-transparent w-full outline-hidden mr-10"/></div>`);
var root_5$1 = from_html(`<a id="sidebar-chat-item" draggable="false"><div class=" flex self-center flex-1 w-full"><div dir="auto" class=" text-left self-center overflow-hidden w-full h-[20px] truncate"> </div></div></a>`);
var root_6$1 = from_html(`<div class="flex self-center items-center space-x-1.5 z-10 translate-y-[0.5px] -translate-x-[0.5px]"><button class=" self-center dark:hover:text-white transition disabled:cursor-not-allowed" id="generate-title-button"></button></div>`);
var root_8$1 = from_html(`<div class=" flex items-center self-center space-x-1.5"><button class=" self-center dark:hover:text-white transition" type="button"><!></button> <button class=" self-center dark:hover:text-white transition" type="button"><!></button></div>`);
var root_10$1 = from_html(`<button aria-label="Chat Menu" class=" self-center dark:hover:text-white transition m-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg></button>`);
var root_11 = from_html(`<button id="delete-chat-button" class="hidden" aria-label="Delete chat"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg></button>`);
var root_9$1 = from_html(`<div class="flex self-center z-10 items-end"><!> <!></div>`);
var root$3 = from_html(`<!> <!> <div id="sidebar-chat-group"><!> <div id="sidebar-chat-item-menu"><!></div></div>`, 1);
function ChatItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const $selectedFolder = () => store_get(selectedFolder, "$selectedFolder", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let className = prop($$props, "className", 8, "");
  let id = prop($$props, "id", 8);
  let title = prop($$props, "title", 8);
  let selected = prop($$props, "selected", 8, false);
  let shiftKey = prop($$props, "shiftKey", 8, false);
  let onDragEnd = prop($$props, "onDragEnd", 8, () => {
  });
  let chat = null;
  let mouseOver = mutable_source(false);
  let draggable = mutable_source(false);
  const loadChat = async () => {
    if (!chat) {
      set(draggable, false);
      chat = null;
      set(draggable, true);
    }
  };
  let confirmEdit = mutable_source(false);
  let chatTitle$1 = mutable_source(title());
  const editChatTitle = async (id2, title2) => {
    if (title2 === "") {
      toast.error($i18n().t("Title cannot be an empty string."));
    } else {
      await updateChatById("static-token", id2, { title: title2 });
      if (id2 === $chatId()) {
        chatTitle.set(title2);
      }
      currentChatPage.set(1);
      await chats.set([]);
      await pinnedChats.set([]);
      dispatch("change");
    }
  };
  const cloneChatHandler = async (id2) => {
    const res = await cloneChatById("static-token", id2, $i18n().t("Clone of {{TITLE}}", { TITLE: title() })).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      goto(`/c/${res.id}`);
      currentChatPage.set(1);
      await chats.set([]);
      await pinnedChats.set([]);
    }
  };
  const deleteChatHandler = async (id2) => {
    const res = true.catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      tags.set([]);
      if ($chatId() === id2) {
        await goto("/");
        await chatId.set("");
        await tick();
      }
      dispatch("change");
    }
  };
  const archiveChatHandler = async (id2) => {
    dispatch("change");
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
        dispatch("change");
        toast.success($i18n().t("Chat moved successfully"));
      }
    } else {
      toast.error($i18n().t("Failed to move chat"));
    }
  };
  let itemElement = mutable_source();
  let generating = mutable_source(false);
  let ignoreBlur = mutable_source(false);
  let doubleClicked = mutable_source(false);
  let dragged = mutable_source(false);
  let x = mutable_source(0);
  let y = mutable_source(0);
  const dragImage = new Image();
  dragImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  const onDragStart = (event2) => {
    event2.stopPropagation();
    event2.dataTransfer.setDragImage(dragImage, 0, 0);
    event2.dataTransfer.setData("text/plain", JSON.stringify({ type: "chat", id: id(), item: chat }));
    set(dragged, true);
    mutate(
      itemElement,
      // Optional: Visual cue to show it's being dragged
      get(itemElement).style.opacity = "0.5"
    );
  };
  const onDrag = (event2) => {
    event2.stopPropagation();
    set(x, event2.clientX);
    set(y, event2.clientY);
  };
  const onDragEndHandler = (event2) => {
    event2.stopPropagation();
    mutate(
      itemElement,
      // Reset visual cue after drag
      get(itemElement).style.opacity = "1"
    );
    set(dragged, false);
    onDragEnd()(event2);
  };
  const onClickOutside = (event2) => {
    if (get(confirmEdit) && !event2.target.closest(`#chat-title-input-${id()}`)) {
      set(confirmEdit, false);
      set(ignoreBlur, false);
      set(chatTitle$1, "");
    }
  };
  onMount(() => {
    if (get(itemElement)) {
      document.addEventListener("click", onClickOutside, true);
      get(itemElement).addEventListener("dragstart", onDragStart);
      get(itemElement).addEventListener("drag", onDrag);
      get(itemElement).addEventListener("dragend", onDragEndHandler);
    }
  });
  onDestroy(() => {
    if (get(itemElement)) {
      document.removeEventListener("click", onClickOutside, true);
      get(itemElement).removeEventListener("dragstart", onDragStart);
      get(itemElement).removeEventListener("drag", onDrag);
      get(itemElement).removeEventListener("dragend", onDragEndHandler);
    }
  });
  let showDeleteConfirm = mutable_source(false);
  const chatTitleInputKeydownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTimeout(
        () => {
          const input = document.getElementById(`chat-title-input-${id()}`);
          if (input) input.blur();
        },
        0
      );
    } else if (e.key === "Escape") {
      e.preventDefault();
      set(confirmEdit, false);
      set(chatTitle$1, "");
    }
  };
  const renameHandler = async () => {
    set(chatTitle$1, title());
    set(confirmEdit, true);
    await tick();
    setTimeout(
      () => {
        const input = document.getElementById(`chat-title-input-${id()}`);
        if (input) {
          input.focus();
          input.select();
        }
      },
      0
    );
  };
  const generateTitleHandler = async () => {
    var _a;
    set(generating, true);
    if (!chat) {
      chat = null;
    }
    const messages = (((_a = chat.chat) == null ? void 0 : _a.messages) ?? []).map((message) => {
      return { role: message.role, content: message.content };
    });
    const model = chat.chat.models.at(0) ?? chat.models.at(0) ?? "";
    set(chatTitle$1, "");
    const generatedTitle = await generateTitle("static-token", model, messages).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (generatedTitle) {
      if (generatedTitle !== title()) {
        editChatTitle(id(), generatedTitle);
      }
      set(confirmEdit, false);
    } else {
      set(chatTitle$1, title());
    }
    set(generating, false);
  };
  legacy_pre_effect(() => get(mouseOver), () => {
    if (get(mouseOver)) {
      loadChat();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$3();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete chat?"))));
    ConfirmDialog(node, {
      get title() {
        return get($0);
      },
      get show() {
        return get(showDeleteConfirm);
      },
      set show($$value) {
        set(showDeleteConfirm, $$value);
      },
      $$events: {
        confirm: () => {
          deleteChatHandler(id());
        }
      },
      children: ($$anchor2, $$slotProps) => {
        var div = root_1$1();
        var text = child(div);
        var span = sibling(text);
        var text_1 = child(span, true);
        reset(span);
        next();
        reset(div);
        template_effect(
          ($02) => {
            set_text(text, `${$02 ?? ""} `);
            set_text(text_1, title());
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("This will delete")))
          ]
        );
        append($$anchor2, div);
      },
      $$slots: { default: true },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent = ($$anchor2) => {
      DragGhost($$anchor2, {
        get x() {
          return get(x);
        },
        get y() {
          return get(y);
        },
        children: ($$anchor3, $$slotProps) => {
          var div_1 = root_3$1();
          var div_2 = child(div_1);
          var node_2 = child(div_2);
          Icon$1(node_2, {
            name: "Document",
            className: " size-[18px]",
            strokeWidth: "2"
          });
          var div_3 = sibling(node_2, 2);
          var text_2 = child(div_3, true);
          reset(div_3);
          reset(div_2);
          reset(div_1);
          template_effect(() => set_text(text_2, title()));
          append($$anchor3, div_1);
        },
        $$slots: { default: true }
      });
    };
    if_block(node_1, ($$render) => {
      if (get(dragged) && get(x) && get(y)) $$render(consequent);
    });
  }
  var div_4 = sibling(node_1, 2);
  var node_3 = child(div_4);
  {
    var consequent_1 = ($$anchor2) => {
      var div_5 = root_4$1();
      var input_1 = child(div_5);
      remove_input_defaults(input_1);
      reset(div_5);
      template_effect(
        ($0) => {
          set_class(div_5, 1, ` w-full flex justify-between rounded-xl px-[11px] py-[6px] ${id() === $chatId() || get(confirmEdit) ? "bg-gray-100 dark:bg-gray-900 selected" : selected() ? "bg-gray-100 dark:bg-gray-950 selected" : "group-hover:bg-gray-100 dark:group-hover:bg-gray-950"}  whitespace-nowrap text-ellipsis relative ${get(generating) ? "cursor-not-allowed" : ""}`);
          set_attribute(input_1, "id", `chat-title-input-${id() ?? ""}`);
          set_attribute(input_1, "placeholder", $0);
          input_1.disabled = get(generating);
        },
        [
          () => (get(generating), $i18n(), untrack(() => get(generating) ? $i18n().t("Generating...") : ""))
        ]
      );
      bind_value(input_1, () => get(chatTitle$1), ($$value) => set(chatTitle$1, $$value));
      event("keydown", input_1, chatTitleInputKeydownHandler);
      event("blur", input_1, async (e) => {
        var _a;
        if (get(ignoreBlur)) {
          set(ignoreBlur, false);
          if (((_a = e.relatedTarget) == null ? void 0 : _a.id) === "generate-title-button") {
            generateTitleHandler();
          }
          return;
        }
        if (get(doubleClicked)) {
          e.preventDefault();
          e.stopPropagation();
          await tick();
          setTimeout(
            () => {
              const input = document.getElementById(`chat-title-input-${id()}`);
              if (input) input.focus();
            },
            0
          );
          set(doubleClicked, false);
          return;
        }
        if (get(chatTitle$1) !== title()) {
          editChatTitle(id(), get(chatTitle$1));
        }
        set(confirmEdit, false);
        set(chatTitle$1, "");
      });
      append($$anchor2, div_5);
    };
    var alternate = ($$anchor2) => {
      var a = root_5$1();
      var div_6 = child(a);
      var div_7 = child(div_6);
      var text_3 = child(div_7, true);
      reset(div_7);
      reset(div_6);
      reset(a);
      template_effect(() => {
        set_class(a, 1, ` w-full flex justify-between rounded-xl px-[11px] py-[6px] ${id() === $chatId() || get(confirmEdit) ? "bg-gray-100 dark:bg-gray-900 selected" : selected() ? "bg-gray-100 dark:bg-gray-950 selected" : " group-hover:bg-gray-100 dark:group-hover:bg-gray-950"}  whitespace-nowrap text-ellipsis`);
        set_attribute(a, "href", `/c/${id() ?? ""}`);
        set_text(text_3, title());
        div_7.dir = div_7.dir;
      });
      event("click", a, () => {
        dispatch("select");
        if ($selectedFolder()) {
          selectedFolder.set(null);
        }
        if ($mobile()) {
          showSidebar.set(false);
        }
      });
      event("dblclick", a, async (e) => {
        e.preventDefault();
        e.stopPropagation();
        set(doubleClicked, true);
        renameHandler();
      });
      event("mouseenter", a, (e) => {
        set(mouseOver, true);
      });
      event("mouseleave", a, (e) => {
        set(mouseOver, false);
      });
      event("focus", a, (e) => {
      });
      append($$anchor2, a);
    };
    if_block(node_3, ($$render) => {
      if (get(confirmEdit)) $$render(consequent_1);
      else $$render(alternate, false);
    });
  }
  var div_8 = sibling(node_3, 2);
  var node_4 = child(div_8);
  {
    var consequent_2 = ($$anchor2) => {
      var div_9 = root_6$1();
      var button = child(div_9);
      reset(div_9);
      template_effect(() => button.disabled = get(generating));
      event("mouseenter", button, () => {
        set(ignoreBlur, true);
      });
      append($$anchor2, div_9);
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_5 = first_child(fragment_2);
      {
        var consequent_3 = ($$anchor3) => {
          var div_10 = root_8$1();
          var button_1 = child(div_10);
          var node_6 = child(button_1);
          Icon$1(node_6, {
            name: "ArchiveBox",
            className: "size-4  translate-y-[0.5px]",
            strokeWidth: "2"
          });
          reset(button_1);
          var button_2 = sibling(button_1, 2);
          var node_7 = child(button_2);
          Icon$1(node_7, { name: "GarbageBin", strokeWidth: "2" });
          reset(button_2);
          reset(div_10);
          event("click", button_1, () => {
            archiveChatHandler(id());
          });
          event("click", button_2, () => {
            deleteChatHandler(id());
          });
          append($$anchor3, div_10);
        };
        var alternate_1 = ($$anchor3) => {
          var div_11 = root_9$1();
          var node_8 = child(div_11);
          ChatMenu(node_8, {
            get chatId() {
              return id();
            },
            cloneChatHandler: () => {
              cloneChatHandler(id());
            },
            shareHandler: () => {
            },
            moveChatHandler,
            archiveChatHandler: () => {
              archiveChatHandler(id());
            },
            renameHandler,
            deleteHandler: () => {
              set(showDeleteConfirm, true);
            },
            onClose: () => {
              dispatch("unselect");
            },
            $$events: {
              change: async () => {
                dispatch("change");
              },
              tag: (e) => {
                dispatch("tag", e.detail);
              }
            },
            children: ($$anchor4, $$slotProps) => {
              var button_3 = root_10$1();
              event("click", button_3, () => {
                dispatch("select");
              });
              append($$anchor4, button_3);
            },
            $$slots: { default: true }
          });
          var node_9 = sibling(node_8, 2);
          {
            var consequent_4 = ($$anchor4) => {
              var button_4 = root_11();
              event("click", button_4, () => {
                set(showDeleteConfirm, true);
              });
              append($$anchor4, button_4);
            };
            if_block(node_9, ($$render) => {
              if (id() === $chatId()) $$render(consequent_4);
            });
          }
          reset(div_11);
          append($$anchor3, div_11);
        };
        if_block(
          node_5,
          ($$render) => {
            if (shiftKey() && get(mouseOver)) $$render(consequent_3);
            else $$render(alternate_1, false);
          },
          true
        );
      }
      append($$anchor2, fragment_2);
    };
    if_block(node_4, ($$render) => {
      if (get(confirmEdit)) $$render(consequent_2);
      else $$render(alternate_2, false);
    });
  }
  reset(div_8);
  reset(div_4);
  bind_this(div_4, ($$value) => set(itemElement, $$value), () => get(itemElement));
  template_effect(() => {
    set_class(div_4, 1, ` w-full ${className() ?? ""} relative group`);
    set_attribute(div_4, "draggable", get(draggable) && !get(confirmEdit));
    set_class(div_8, 1, `
        ${id() === $chatId() || get(confirmEdit) ? "from-gray-100 dark:from-gray-900 selected" : selected() ? "from-gray-100 dark:from-gray-950 selected" : "invisible group-hover:visible from-gray-100 dark:from-gray-950"}
            absolute ${className() === "pr-2" ? "right-[8px]" : "right-1"} top-[4px] py-1 pr-0.5 mr-1.5 pl-5 bg-linear-to-l from-80%

              to-transparent`);
  });
  event("mouseenter", div_8, (e) => {
    set(mouseOver, true);
  });
  event("mouseleave", div_8, (e) => {
    set(mouseOver, false);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$2 = from_html(`<div> </div>`);
function Avatar($$anchor, $$props) {
  push($$props, false);
  let name = prop($$props, "name", 8, "");
  let size = prop($$props, "size", 8, "md");
  let className = prop($$props, "className", 8, "");
  const getInitial = (fullName) => {
    if (!fullName) return "?";
    return fullName.charAt(0).toUpperCase();
  };
  const sizeClasses = {
    sm: "w-5 h-5 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base"
  };
  init();
  var div = root$2();
  var text = child(div, true);
  reset(div);
  template_effect(
    ($0) => {
      set_class(div, 1, `rounded-full flex items-center justify-center font-semibold bg-[#ededed] text-black dark:bg-gray-700 dark:text-white ${(deep_read_state(size()), untrack(() => sizeClasses[size()])) ?? ""} ${className() ?? ""}`);
      set_text(text, $0);
    },
    [
      () => (deep_read_state(name()), untrack(() => getInitial(name())))
    ]
  );
  append($$anchor, div);
  pop();
}
var root_2 = from_html(`<a href="/" class="flex flex-1 items-center px-1.5 mt-0.5"><div id="sidebar-webui-name" class="text-base font-medium text-gray-850 dark:text-white font-primary"> </div></a>`);
var root_3 = from_html(`<div class="flex flex-1 items-center"><div class="text-[15px] font-primary text-gray-800 dark:text-gray-200"> </div> <div class="flex-1"></div></div>`);
var root_4 = from_html(`<div class="flex flex-1 items-center"><div class="text-[15px] font-primary text-gray-800 dark:text-gray-200"> </div> <div class="flex-1"></div></div>`);
var root_6 = from_html(`<div class="mb-1"><div class="flex flex-col space-y-1 rounded-xl"><div class="ml-3 pl-1 mt-[1px] flex flex-col overflow-y-auto scrollbar-hidden border-s border-gray-100 dark:border-gray-900 text-gray-900 dark:text-gray-200"></div></div></div>`);
var root_10 = from_html(`<div> </div>`);
var root_9 = from_html(`<!> <!>`, 1);
var root_12 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_8 = from_html(`<!> <!>`, 1);
var root_13 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_5 = from_html(`<div id="sidebar-chats" class="px-2 mt-0.5"><!> <div class=" flex-1 flex flex-col overflow-y-auto scrollbar-hidden"><div class="pt-1.5"><!></div></div></div>`);
var root_14 = from_html(`<div class="sidebar-bg-gradient-to-t bg-linear-to-t from-gray-50 dark:from-gray-950 to-transparent from-50% pointer-events-none absolute inset-0 -z-10 -mt-6"></div>`);
var root_17 = from_html(`<div class="self-center font-medium ml-3"> </div>`);
var root_16 = from_html(`<div><div class="self-center shrink-0"><!></div> <!></div>`);
var root_1 = from_html(`<div id="sidebar"><div><div class="sidebar px-1.5 pt-1.5 pb-1.5 flex flex-col text-gray-600 dark:text-gray-400 sticky top-0 z-10"><div class="flex items-center"><button class="cursor-pointer flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition no-drag-region shrink-0 size-9"><div class="flex items-center justify-center size-9 shrink-0"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M6.83496 3.99992C6.38353 4.00411 6.01421 4.0122 5.69824 4.03801C5.31232 4.06954 5.03904 4.12266 4.82227 4.20012L4.62207 4.28606C4.18264 4.50996 3.81498 4.85035 3.55859 5.26848L3.45605 5.45207C3.33013 5.69922 3.25006 6.01354 3.20801 6.52824C3.16533 7.05065 3.16504 7.71885 3.16504 8.66301V11.3271C3.16504 12.2712 3.16533 12.9394 3.20801 13.4618C3.25006 13.9766 3.33013 14.2909 3.45605 14.538L3.55859 14.7216C3.81498 15.1397 4.18266 15.4801 4.62207 15.704L4.82227 15.79C5.03904 15.8674 5.31234 15.9205 5.69824 15.9521C6.01398 15.9779 6.383 15.986 6.83398 15.9902L6.83496 3.99992ZM18.165 11.3271C18.165 12.2493 18.1653 12.9811 18.1172 13.5702C18.0745 14.0924 17.9916 14.5472 17.8125 14.9648L17.7295 15.1415C17.394 15.8 16.8834 16.3511 16.2568 16.7353L15.9814 16.8896C15.5157 17.1268 15.0069 17.2285 14.4102 17.2773C13.821 17.3254 13.0893 17.3251 12.167 17.3251H7.83301C6.91071 17.3251 6.17898 17.3254 5.58984 17.2773C5.06757 17.2346 4.61294 17.1508 4.19531 16.9716L4.01855 16.8896C3.36014 16.5541 2.80898 16.0434 2.4248 15.4169L2.27051 15.1415C2.03328 14.6758 1.93158 14.167 1.88281 13.5702C1.83468 12.9811 1.83496 12.2493 1.83496 11.3271V8.66301C1.83496 7.74072 1.83468 7.00898 1.88281 6.41985C1.93157 5.82309 2.03329 5.31432 2.27051 4.84856L2.4248 4.57317C2.80898 3.94666 3.36012 3.436 4.01855 3.10051L4.19531 3.0175C4.61285 2.83843 5.06771 2.75548 5.58984 2.71281C6.17898 2.66468 6.91071 2.66496 7.83301 2.66496H12.167C13.0893 2.66496 13.821 2.66468 14.4102 2.71281C15.0069 2.76157 15.5157 2.86329 15.9814 3.10051L16.2568 3.25481C16.8833 3.63898 17.394 4.19012 17.7295 4.84856L17.8125 5.02531C17.9916 5.44285 18.0745 5.89771 18.1172 6.41985C18.1653 7.00898 18.165 7.74072 18.165 8.66301V11.3271ZM8.16406 15.995H12.167C13.1112 15.995 13.7794 15.9947 14.3018 15.9521C14.8164 15.91 15.1308 15.8299 15.3779 15.704L15.5615 15.6015C15.9797 15.3451 16.32 14.9774 16.5439 14.5381L16.6299 14.3379C16.7073 14.1212 16.7594 13.8478 16.791 13.4619C16.8336 12.9395 16.8349 12.2706 16.8349 11.3262V8.66309C16.8349 7.71888 16.8336 7.04973 16.791 6.52731C16.7594 6.11177 16.7073 5.83848 16.6299 5.62172L16.5439 5.42152C16.32 4.98213 15.9796 4.62255 15.5615 4.39868L15.3779 4.29614C15.1308 4.17023 14.8164 4.09014 14.3018 4.04809C13.7794 4.00543 13.1112 4.00513 12.167 4.00513H8.16504L8.16406 15.995Z"></path></svg></div></button> <!></div> <div></div></div> <div class="px-1.5 pt-0.5 pb-1 flex flex-col gap-0 text-gray-600 dark:text-gray-400"><a id="sidebar-new-chat-button" href="/" draggable="false"><div class="flex items-center justify-center size-9 shrink-0"><!></div> <!></a> <button id="sidebar-search-button" draggable="false"><div class="flex items-center justify-center size-9 shrink-0"><!></div> <!></button></div> <div class="relative flex flex-col flex-1 overflow-y-auto scrollbar-hidden pb-3"><!></div> <div class="px-1.5 pt-1.5 pb-2 sticky bottom-0 z-10 sidebar"><!> <div class="flex flex-col font-primary"><!></div></div></div></div>`);
var root$1 = from_html(`<button id="sidebar-new-chat-button" class="hidden"></button> <!>`, 1);
function Sidebar($$anchor, $$props) {
  push($$props, false);
  const $selectedFolder = () => store_get(selectedFolder, "$selectedFolder", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $pinnedChats = () => store_get(pinnedChats, "$pinnedChats", $$stores);
  const $chats = () => store_get(chats, "$chats", $$stores);
  const $scrollPaginationEnabled = () => store_get(scrollPaginationEnabled, "$scrollPaginationEnabled", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let scrollTop = mutable_source(0);
  let navElement = mutable_source();
  let shiftKey = mutable_source(false);
  let selectedChatId = mutable_source(null);
  let chatListLoading = mutable_source(false);
  let allChatsLoaded = mutable_source(false);
  const initFolders = async () => {
    folders.set([]);
  };
  const initChatList = async () => {
    currentChatPage.set(1);
    set(allChatsLoaded, true);
    scrollPaginationEnabled.set(false);
    initFolders();
    tags.set([]);
    pinnedChats.set([]);
    chats.set([]);
    scrollPaginationEnabled.set(true);
  };
  const loadMoreChats = async () => {
    set(chatListLoading, true);
    set(allChatsLoaded, true);
    set(chatListLoading, false);
  };
  const importChatHandler = async (items, pinned = false, folderId = null) => {
    toast.info($i18n().t("Chat import not available in this version."));
  };
  const inputFilesHandler = async (files) => {
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target.result;
        try {
          const chatItems = JSON.parse(content);
          importChatHandler(chatItems);
        } catch {
          toast.error($i18n().t(`Invalid file format.`));
        }
      };
      reader.readAsText(file);
    }
  };
  const tagEventHandler = async (type, tagName, chatId2) => {
    if (type === "delete") {
      initChatList();
    } else if (type === "add") {
      initChatList();
    }
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
      const inputFiles = Array.from((_b = e.dataTransfer) == null ? void 0 : _b.files);
      if (inputFiles && inputFiles.length > 0) {
        inputFilesHandler(inputFiles);
      }
    }
  };
  let touchstart;
  let touchend;
  function checkDirection() {
    if (!$mobile()) return;
    const screenWidth = window.innerWidth;
    const swipeDistance = Math.abs(touchend.screenX - touchstart.screenX);
    const swipeThreshold = screenWidth / 8;
    if (swipeDistance >= swipeThreshold) {
      if (touchend.screenX > touchstart.screenX && !$showSidebar()) {
        showSidebar.set(true);
      }
      if (touchend.screenX < touchstart.screenX && $showSidebar()) {
        showSidebar.set(false);
      }
    }
  }
  const onTouchStart = (e) => {
    touchstart = e.changedTouches[0];
  };
  const onTouchEnd = (e) => {
    touchend = e.changedTouches[0];
    checkDirection();
  };
  const onKeyDown = (e) => {
    if (e.key === "Shift") {
      set(shiftKey, true);
    }
  };
  const onKeyUp = (e) => {
    if (e.key === "Shift") {
      set(shiftKey, false);
    }
  };
  const onFocus = () => {
  };
  const onBlur = () => {
    set(shiftKey, false);
    set(selectedChatId, null);
  };
  let unsubscribers = [];
  onMount(async () => {
    await showSidebar.set(!$mobile() ? false : false);
    unsubscribers = [
      mobile.subscribe((value) => {
        if ($showSidebar() && value) {
          showSidebar.set(false);
        }
        if ($showSidebar() && !value) {
          const navElement2 = document.getElementsByTagName("nav")[0];
          if (navElement2) {
            navElement2.style["-webkit-app-region"] = "drag";
          }
        }
      }),
      showSidebar.subscribe(async (value) => {
        const navElement2 = document.getElementsByTagName("nav")[0];
        if (navElement2) {
          if ($mobile()) {
            if (!value) {
              navElement2.style["-webkit-app-region"] = "drag";
            } else {
              navElement2.style["-webkit-app-region"] = "no-drag";
            }
          } else {
            navElement2.style["-webkit-app-region"] = "drag";
          }
        }
        if (value) {
          await initChatList();
        }
      })
    ];
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    const dropZone = document.getElementById("sidebar");
    dropZone == null ? void 0 : dropZone.addEventListener("dragover", onDragOver);
    dropZone == null ? void 0 : dropZone.addEventListener("drop", onDrop);
    dropZone == null ? void 0 : dropZone.addEventListener("dragleave", onDragLeave);
  });
  onDestroy(() => {
    if (unsubscribers && unsubscribers.length > 0) {
      unsubscribers.forEach((unsubscriber) => {
        if (unsubscriber) {
          unsubscriber();
        }
      });
    }
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("focus", onFocus);
    window.removeEventListener("blur", onBlur);
    const dropZone = document.getElementById("sidebar");
    dropZone == null ? void 0 : dropZone.removeEventListener("dragover", onDragOver);
    dropZone == null ? void 0 : dropZone.removeEventListener("drop", onDrop);
    dropZone == null ? void 0 : dropZone.removeEventListener("dragleave", onDragLeave);
  });
  const newChatHandler = async () => {
    var _a, _b, _c, _d;
    set(selectedChatId, null);
    selectedFolder.set(null);
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin" && ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.temporary_enforced)) {
      await temporaryChatEnabled.set(true);
    } else {
      await temporaryChatEnabled.set(false);
    }
    setTimeout(
      () => {
        if ($mobile()) {
          showSidebar.set(false);
        }
      },
      0
    );
  };
  legacy_pre_effect(() => $selectedFolder(), () => {
    if ($selectedFolder()) {
      initFolders();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$1();
  var button = first_child(fragment);
  var node = sibling(button, 2);
  {
    var consequent_11 = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var button_1 = child(div_3);
      var node_1 = sibling(button_1, 2);
      {
        var consequent = ($$anchor3) => {
          var a = root_2();
          var div_4 = child(a);
          var text = child(div_4, true);
          reset(div_4);
          reset(a);
          template_effect(() => set_text(text, $WEBUI_NAME()));
          event("click", a, newChatHandler);
          append($$anchor3, a);
        };
        if_block(node_1, ($$render) => {
          if ($showSidebar()) $$render(consequent);
        });
      }
      reset(div_3);
      var div_5 = sibling(div_3, 2);
      reset(div_2);
      var div_6 = sibling(div_2, 2);
      var a_1 = child(div_6);
      var div_7 = child(a_1);
      var node_2 = child(div_7);
      Icon$1(node_2, { name: "PencilSquare", className: "size-5" });
      reset(div_7);
      var node_3 = sibling(div_7, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_8 = root_3();
          var div_9 = child(div_8);
          var text_1 = child(div_9, true);
          reset(div_9);
          next(2);
          reset(div_8);
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("New Chat")))]);
          append($$anchor3, div_8);
        };
        if_block(node_3, ($$render) => {
          if ($showSidebar()) $$render(consequent_1);
        });
      }
      reset(a_1);
      var button_2 = sibling(a_1, 2);
      var div_10 = child(button_2);
      var node_4 = child(div_10);
      Icon$1(node_4, { name: "Search", strokeWidth: "2", className: "size-5" });
      reset(div_10);
      var node_5 = sibling(div_10, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_11 = root_4();
          var div_12 = child(div_11);
          var text_2 = child(div_12, true);
          reset(div_12);
          next(2);
          reset(div_11);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Search")))]);
          append($$anchor3, div_11);
        };
        if_block(node_5, ($$render) => {
          if ($showSidebar()) $$render(consequent_2);
        });
      }
      reset(button_2);
      reset(div_6);
      var div_13 = sibling(div_6, 2);
      var node_6 = child(div_13);
      {
        var consequent_7 = ($$anchor3) => {
          var div_14 = root_5();
          var node_7 = child(div_14);
          {
            var consequent_3 = ($$anchor4) => {
              var div_15 = root_6();
              var div_16 = child(div_15);
              var div_17 = child(div_16);
              each(div_17, 7, $pinnedChats, (chat, idx) => `pinned-chat-${idx}-${(chat == null ? void 0 : chat.id) ?? "unknown"}`, ($$anchor5, chat) => {
                {
                  let $0 = derived_safe_equal(() => (get(selectedChatId), get(chat), untrack(() => get(selectedChatId) === get(chat).id)));
                  ChatItem($$anchor5, {
                    className: "",
                    get id() {
                      return get(chat), untrack(() => get(chat).id);
                    },
                    get title() {
                      return get(chat), untrack(() => get(chat).title);
                    },
                    get shiftKey() {
                      return get(shiftKey);
                    },
                    get selected() {
                      return get($0);
                    },
                    $$events: {
                      select: () => {
                        set(selectedChatId, get(chat).id);
                      },
                      unselect: () => {
                        set(selectedChatId, null);
                      },
                      change: async () => {
                        initChatList();
                      },
                      tag: (e) => {
                        const { type, name } = e.detail;
                        tagEventHandler(type, name, get(chat).id);
                      }
                    }
                  });
                }
              });
              reset(div_17);
              reset(div_16);
              reset(div_15);
              append($$anchor4, div_15);
            };
            if_block(node_7, ($$render) => {
              if ($pinnedChats(), untrack(() => $pinnedChats().length > 0)) $$render(consequent_3);
            });
          }
          var div_18 = sibling(node_7, 2);
          var div_19 = child(div_18);
          var node_8 = child(div_19);
          {
            var consequent_6 = ($$anchor4) => {
              var fragment_2 = root_8();
              var node_9 = first_child(fragment_2);
              each(node_9, 3, $chats, (chat, idx) => `chat-${idx}-${(chat == null ? void 0 : chat.id) ?? "unknown"}`, ($$anchor5, chat, idx) => {
                var fragment_3 = root_9();
                var node_10 = first_child(fragment_3);
                {
                  var consequent_4 = ($$anchor6) => {
                    var div_20 = root_10();
                    var text_3 = child(div_20, true);
                    reset(div_20);
                    template_effect(
                      ($0) => {
                        set_class(div_20, 1, `w-full pl-2.5 text-xs text-gray-500 dark:text-gray-500 font-medium ${get(idx) === 0 ? "" : "pt-5"} pb-1.5`);
                        set_text(text_3, $0);
                      },
                      [
                        () => ($i18n(), get(chat), untrack(() => $i18n().t(get(chat).time_range)))
                      ]
                    );
                    append($$anchor6, div_20);
                  };
                  if_block(node_10, ($$render) => {
                    if (deep_read_state(get(idx)), get(chat), $chats(), untrack(() => get(idx) === 0 || get(idx) > 0 && get(chat).time_range !== $chats()[get(idx) - 1].time_range)) $$render(consequent_4);
                  });
                }
                var node_11 = sibling(node_10, 2);
                {
                  let $0 = derived_safe_equal(() => (get(selectedChatId), get(chat), untrack(() => get(selectedChatId) === get(chat).id)));
                  ChatItem(node_11, {
                    className: "",
                    get id() {
                      return get(chat), untrack(() => get(chat).id);
                    },
                    get title() {
                      return get(chat), untrack(() => get(chat).title);
                    },
                    get shiftKey() {
                      return get(shiftKey);
                    },
                    get selected() {
                      return get($0);
                    },
                    $$events: {
                      select: () => {
                        set(selectedChatId, get(chat).id);
                      },
                      unselect: () => {
                        set(selectedChatId, null);
                      },
                      change: async () => {
                        initChatList();
                      },
                      tag: (e) => {
                        const { type, name } = e.detail;
                        tagEventHandler(type, name, get(chat).id);
                      }
                    }
                  });
                }
                append($$anchor5, fragment_3);
              });
              var node_12 = sibling(node_9, 2);
              {
                var consequent_5 = ($$anchor5) => {
                  Loader($$anchor5, {
                    $$events: {
                      visible: (e) => {
                        if (!get(chatListLoading)) {
                          loadMoreChats();
                        }
                      }
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var div_21 = root_12();
                      var node_13 = child(div_21);
                      Spinner(node_13, { className: " size-4" });
                      var div_22 = sibling(node_13, 2);
                      var text_4 = child(div_22, true);
                      reset(div_22);
                      reset(div_21);
                      template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                      append($$anchor6, div_21);
                    },
                    $$slots: { default: true }
                  });
                };
                if_block(node_12, ($$render) => {
                  if ($scrollPaginationEnabled() && !get(allChatsLoaded)) $$render(consequent_5);
                });
              }
              append($$anchor4, fragment_2);
            };
            var alternate = ($$anchor4) => {
              var div_23 = root_13();
              var node_14 = child(div_23);
              Spinner(node_14, { className: " size-4" });
              var div_24 = sibling(node_14, 2);
              var text_5 = child(div_24, true);
              reset(div_24);
              reset(div_23);
              template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
              append($$anchor4, div_23);
            };
            if_block(node_8, ($$render) => {
              if ($chats()) $$render(consequent_6);
              else $$render(alternate, false);
            });
          }
          reset(div_19);
          reset(div_18);
          reset(div_14);
          append($$anchor3, div_14);
        };
        if_block(node_6, ($$render) => {
          if ($showSidebar()) $$render(consequent_7);
        });
      }
      reset(div_13);
      var div_25 = sibling(div_13, 2);
      var node_15 = child(div_25);
      {
        var consequent_8 = ($$anchor3) => {
          var div_26 = root_14();
          append($$anchor3, div_26);
        };
        if_block(node_15, ($$render) => {
          if ($showSidebar()) $$render(consequent_8);
        });
      }
      var div_27 = sibling(node_15, 2);
      var node_16 = child(div_27);
      {
        var consequent_10 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($user(), untrack(() => {
              var _a;
              return (_a = $user()) == null ? void 0 : _a.role;
            })));
            UserMenu($$anchor3, {
              get role() {
                return get($0);
              },
              $$events: {
                show: (e) => {
                  if (e.detail === "archived-chat") {
                    showArchivedChats.set(true);
                  }
                }
              },
              children: ($$anchor4, $$slotProps) => {
                var div_28 = root_16();
                var div_29 = child(div_28);
                var node_17 = child(div_29);
                {
                  let $02 = derived_safe_equal(() => ($user(), untrack(() => {
                    var _a;
                    return (_a = $user()) == null ? void 0 : _a.name;
                  })));
                  Avatar(node_17, {
                    get name() {
                      return get($02);
                    },
                    size: "md"
                  });
                }
                reset(div_29);
                var node_18 = sibling(div_29, 2);
                {
                  var consequent_9 = ($$anchor5) => {
                    var div_30 = root_17();
                    var text_6 = child(div_30, true);
                    reset(div_30);
                    template_effect(() => set_text(text_6, ($user(), untrack(() => {
                      var _a;
                      return (_a = $user()) == null ? void 0 : _a.name;
                    }))));
                    append($$anchor5, div_30);
                  };
                  if_block(node_18, ($$render) => {
                    if ($showSidebar()) $$render(consequent_9);
                  });
                }
                reset(div_28);
                template_effect(() => set_class(div_28, 1, `flex items-center rounded-2xl py-2 px-1 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition ${$showSidebar() ? "w-full" : ""}`));
                append($$anchor4, div_28);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_16, ($$render) => {
          if ($user() !== void 0 && $user() !== null) $$render(consequent_10);
        });
      }
      reset(div_27);
      reset(div_25);
      reset(div_1);
      reset(div);
      bind_this(div, ($$value) => set(navElement, $$value), () => get(navElement));
      template_effect(
        ($0, $1, $2) => {
          set_class(div, 1, `h-screen max-h-[100dvh] min-h-screen select-none flex-shrink-0 ${$showSidebar() ? "w-[260px]" : "w-[48px]"} ${$showSidebar() ? "bg-[#f9f9f9] dark:bg-[#181818]" : "bg-white dark:bg-[#212121]"} border-e border-[#f5f5f5] dark:border-[#2e2e2e] text-gray-900 dark:text-gray-200 text-sm overflow-x-hidden transition-all duration-500 ease-in-out ${$mobile() ? "fixed left-0 top-0 z-50" : ""} ${$mobile() ? $showSidebar() ? "translate-x-0" : "-translate-x-full" : ""}
        `);
          set_attribute(div, "data-state", $showSidebar());
          set_class(div_1, 1, `flex flex-col justify-between h-screen max-h-[100dvh] ${$showSidebar() ? "w-[260px]" : "w-[48px]"} overflow-x-hidden scrollbar-hidden z-50`);
          set_attribute(button_1, "aria-label", $0);
          set_class(div_5, 1, `${get(scrollTop) > 0 ? "visible" : "invisible"} sidebar-bg-gradient-to-b bg-linear-to-b from-gray-50 dark:from-gray-950 to-transparent from-50% pointer-events-none absolute inset-0 -z-10 -mb-6`);
          set_class(a_1, 1, `group flex items-center justify-center rounded-xl ${$showSidebar() ? "w-full" : "size-9"} hover:bg-gray-100 dark:hover:bg-gray-850 transition outline-none`);
          set_attribute(a_1, "aria-label", $1);
          set_class(button_2, 1, `group flex items-center justify-center rounded-xl ${$showSidebar() ? "w-full" : "size-9"} hover:bg-gray-100 dark:hover:bg-gray-850 transition outline-none text-left`);
          set_attribute(button_2, "aria-label", $2);
        },
        [
          () => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"))),
          () => ($i18n(), untrack(() => $i18n().t("New Chat"))),
          () => ($i18n(), untrack(() => $i18n().t("Search")))
        ]
      );
      event("click", button_1, () => {
        showSidebar.set(!$showSidebar());
      });
      event("click", a_1, newChatHandler);
      event("click", button_2, () => {
        showSearch.set(true);
      });
      event("scroll", div_13, (e) => {
        if (e.target.scrollTop === 0) {
          set(scrollTop, 0);
        } else {
          set(scrollTop, e.target.scrollTop);
        }
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($showSidebar() || !$mobile()) $$render(consequent_11);
    });
  }
  event("click", button, () => {
    goto("/");
    newChatHandler();
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var Shortcut = /* @__PURE__ */ ((Shortcut2) => {
  Shortcut2["NEW_CHAT"] = "newChat";
  Shortcut2["NEW_TEMPORARY_CHAT"] = "newTemporaryChat";
  Shortcut2["DELETE_CHAT"] = "deleteChat";
  Shortcut2["SEARCH"] = "search";
  Shortcut2["OPEN_SETTINGS"] = "openSettings";
  Shortcut2["SHOW_SHORTCUTS"] = "showShortcuts";
  Shortcut2["TOGGLE_SIDEBAR"] = "toggleSidebar";
  Shortcut2["CLOSE_MODAL"] = "closeModal";
  Shortcut2["FOCUS_INPUT"] = "focusInput";
  Shortcut2["ACCEPT_AUTOCOMPLETE"] = "acceptAutocomplete";
  Shortcut2["PREVENT_FILE_CREATION"] = "preventFileCreation";
  Shortcut2["NAVIGATE_PROMPT_HISTORY_UP"] = "navigatePromptHistoryUp";
  Shortcut2["ATTACH_FILE"] = "attachFile";
  Shortcut2["ADD_PROMPT"] = "addPrompt";
  Shortcut2["TALK_TO_MODEL"] = "talkToModel";
  Shortcut2["GENERATE_MESSAGE_PAIR"] = "generateMessagePair";
  Shortcut2["REGENERATE_RESPONSE"] = "regenerateResponse";
  Shortcut2["COPY_LAST_CODE_BLOCK"] = "copyLastCodeBlock";
  Shortcut2["COPY_LAST_RESPONSE"] = "copyLastResponse";
  Shortcut2["STOP_GENERATING"] = "stopGenerating";
  return Shortcut2;
})(Shortcut || {});
const shortcuts = {
  //Chat
  [
    "newChat"
    /* NEW_CHAT */
  ]: {
    name: "New Chat",
    keys: ["mod", "shift", "O"],
    category: "Chat"
  },
  [
    "newTemporaryChat"
    /* NEW_TEMPORARY_CHAT */
  ]: {
    name: "New Temporary Chat",
    keys: ["mod", "shift", `'`],
    category: "Chat"
  },
  [
    "deleteChat"
    /* DELETE_CHAT */
  ]: {
    name: "Delete Chat",
    keys: ["mod", "shift", "Backspace", "Delete"],
    category: "Chat"
  },
  //Global
  [
    "search"
    /* SEARCH */
  ]: {
    name: "Search",
    keys: ["mod", "K"],
    category: "Global"
  },
  [
    "openSettings"
    /* OPEN_SETTINGS */
  ]: {
    name: "Open Settings",
    keys: ["mod", "."],
    category: "Global"
  },
  [
    "showShortcuts"
    /* SHOW_SHORTCUTS */
  ]: {
    name: "Show Shortcuts",
    keys: ["mod", "/"],
    category: "Global"
  },
  [
    "toggleSidebar"
    /* TOGGLE_SIDEBAR */
  ]: {
    name: "Toggle Sidebar",
    keys: ["mod", "shift", "S"],
    category: "Global"
  },
  [
    "closeModal"
    /* CLOSE_MODAL */
  ]: {
    name: "Close Modal",
    keys: ["Escape"],
    category: "Global"
  },
  //Input
  [
    "focusInput"
    /* FOCUS_INPUT */
  ]: {
    name: "Focus Chat Input",
    keys: ["shift", "Escape"],
    category: "Input"
  },
  [
    "acceptAutocomplete"
    /* ACCEPT_AUTOCOMPLETE */
  ]: {
    name: "Accept Autocomplete Generation\nJump to Prompt Variable",
    keys: ["Tab"],
    category: "Input"
  },
  [
    "preventFileCreation"
    /* PREVENT_FILE_CREATION */
  ]: {
    name: "Prevent File Creation",
    keys: ["mod", "shift", "V"],
    category: "Input",
    tooltip: 'Only active when "Paste Large Text as File" setting is toggled on.'
  },
  [
    "attachFile"
    /* ATTACH_FILE */
  ]: {
    name: "Attach File From Knowledge",
    keys: ["#"],
    category: "Input"
  },
  [
    "addPrompt"
    /* ADD_PROMPT */
  ]: {
    name: "Add Custom Prompt",
    keys: ["/"],
    category: "Input"
  },
  [
    "talkToModel"
    /* TALK_TO_MODEL */
  ]: {
    name: "Talk to Model",
    keys: ["@"],
    category: "Input"
  },
  //Message
  [
    "generateMessagePair"
    /* GENERATE_MESSAGE_PAIR */
  ]: {
    name: "Generate Message Pair",
    keys: ["mod", "shift", "Enter"],
    category: "Message",
    tooltip: "Only active when the chat input is in focus."
  },
  [
    "regenerateResponse"
    /* REGENERATE_RESPONSE */
  ]: {
    name: "Regenerate Response",
    keys: ["mod", "R"],
    category: "Message"
  },
  [
    "stopGenerating"
    /* STOP_GENERATING */
  ]: {
    name: "Stop Generating",
    keys: ["Escape"],
    category: "Message",
    tooltip: "Only active when the chat input is in focus and an LLM is generating a response."
  },
  [
    "navigatePromptHistoryUp"
    /* NAVIGATE_PROMPT_HISTORY_UP */
  ]: {
    name: "Edit Last Message",
    keys: ["ArrowUp"],
    category: "Message",
    tooltip: "Only can be triggered when the chat input is in focus."
  },
  [
    "copyLastResponse"
    /* COPY_LAST_RESPONSE */
  ]: {
    name: "Copy Last Response",
    keys: ["mod", "shift", "C"],
    category: "Message"
  },
  [
    "copyLastCodeBlock"
    /* COPY_LAST_CODE_BLOCK */
  ]: {
    name: "Copy Last Code Block",
    keys: ["mod", "shift", ";"],
    category: "Message"
  }
};
var root = from_html(`<div class="app relative"><div class="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] flex flex-row transition-all duration-300 overflow-hidden"><style>:global(.app-content-wrapper) {
                                display: flex;
                                flex: 1 1 auto;
                                min-width: 0;
                                width: 100%;
                                overflow: visible;
                        }</style> <!> <div class="app-content-wrapper"><!></div></div></div>`);
function _layout($$anchor, $$props) {
  push($$props, false);
  const $showSearch = () => store_get(showSearch, "$showSearch", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $showSettings = () => store_get(showSettings, "$showSettings", $$stores);
  const $showShortcuts = () => store_get(showShortcuts, "$showShortcuts", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  getContext("i18n");
  onMount(async () => {
    tools.set([]);
    functions.set([]);
    tags.set([]);
    toolServers.set([]);
    const isShortcutMatch = (event2, shortcut) => {
      const keys = (shortcut == null ? void 0 : shortcut.keys) || [];
      const normalized = keys.map((k) => k.toLowerCase());
      const needCtrl = normalized.includes("ctrl") || normalized.includes("mod");
      const needShift = normalized.includes("shift");
      const needAlt = normalized.includes("alt");
      const mainKeys = normalized.filter((k) => !["ctrl", "shift", "alt", "mod"].includes(k));
      const keyPressed = event2.key.toLowerCase();
      if (needShift && !event2.shiftKey) return false;
      if (needCtrl && !(event2.ctrlKey || event2.metaKey)) return false;
      if (!needCtrl && (event2.ctrlKey || event2.metaKey)) return false;
      if (needAlt && !event2.altKey) return false;
      if (!needAlt && event2.altKey) return false;
      if (mainKeys.length && !mainKeys.includes(keyPressed)) return false;
      return true;
    };
    const setupKeyboardShortcuts = () => {
      document.addEventListener("keydown", async (event2) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
        if (isShortcutMatch(event2, shortcuts[Shortcut.SEARCH])) {
          event2.preventDefault();
          showSearch.set(!$showSearch());
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.NEW_CHAT])) {
          event2.preventDefault();
          (_a = document.getElementById("sidebar-new-chat-button")) == null ? void 0 : _a.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.FOCUS_INPUT])) {
          event2.preventDefault();
          (_b = document.getElementById("chat-input")) == null ? void 0 : _b.focus();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.COPY_LAST_CODE_BLOCK])) {
          event2.preventDefault();
          (_d = (_c = [...document.getElementsByClassName("copy-code-button")]) == null ? void 0 : _c.at(-1)) == null ? void 0 : _d.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.COPY_LAST_RESPONSE])) {
          event2.preventDefault();
          (_f = (_e = [...document.getElementsByClassName("copy-response-button")]) == null ? void 0 : _e.at(-1)) == null ? void 0 : _f.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.TOGGLE_SIDEBAR])) {
          event2.preventDefault();
          showSidebar.set(!$showSidebar());
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.DELETE_CHAT])) {
          event2.preventDefault();
          (_g = document.getElementById("delete-chat-button")) == null ? void 0 : _g.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.OPEN_SETTINGS])) {
          event2.preventDefault();
          showSettings.set(!$showSettings());
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.SHOW_SHORTCUTS])) {
          event2.preventDefault();
          showShortcuts.set(!$showShortcuts());
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.CLOSE_MODAL])) {
          event2.preventDefault();
          showSettings.set(false);
          showShortcuts.set(false);
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.NEW_TEMPORARY_CHAT])) {
          event2.preventDefault();
          if (((_h = $user()) == null ? void 0 : _h.role) !== "admin" && ((_k = (_j = (_i = $user()) == null ? void 0 : _i.permissions) == null ? void 0 : _j.chat) == null ? void 0 : _k.temporary_enforced)) {
            temporaryChatEnabled.set(true);
          } else {
            temporaryChatEnabled.set(!$temporaryChatEnabled());
          }
          await goto("/");
          setTimeout(
            () => {
              var _a2;
              (_a2 = document.getElementById("new-chat-button")) == null ? void 0 : _a2.click();
            },
            0
          );
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.GENERATE_MESSAGE_PAIR])) {
          event2.preventDefault();
          (_l = document.getElementById("generate-message-pair-button")) == null ? void 0 : _l.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.REGENERATE_RESPONSE])) {
          event2.preventDefault();
          (_n = (_m = [
            ...document.getElementsByClassName("regenerate-response-button")
          ]) == null ? void 0 : _m.at(-1)) == null ? void 0 : _n.click();
        }
      });
    };
    setupKeyboardShortcuts();
    if ($page().url.searchParams.get("temporary-chat") === "true") {
      temporaryChatEnabled.set(true);
    }
    await tick();
  });
  init();
  var div = root();
  var div_1 = child(div);
  var node = sibling(child(div_1), 2);
  Sidebar(node, {});
  var div_2 = sibling(node, 2);
  var node_1 = child(div_2);
  slot(node_1, $$props, "default", {}, null);
  reset(div_2);
  reset(div_1);
  reset(div);
  template_effect(() => {
    set_style(div_1, `--sidebar-width: ${$showSidebar() ? "260px" : "48px"}`);
    set_style(div_2, $mobile() && $showSidebar() ? "transform: translateX(260px); min-width: 100vw;" : "");
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  _layout as component
};
