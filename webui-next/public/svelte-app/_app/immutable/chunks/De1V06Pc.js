import { b as create_text, d as block, H as HEAD_EFFECT, h as hydrating, g as get_first_child, C as COMMENT_NODE, e as get_next_sibling, s as set_hydrating, f as set_hydrate_node, i as hydrate_node } from "./Bd2P5WIS.js";
function head(hash, render_fn) {
  let previous_hydrate_node = null;
  let was_hydrating = hydrating;
  var anchor;
  if (hydrating) {
    previous_hydrate_node = hydrate_node;
    var head_anchor = (
      /** @type {TemplateNode} */
      get_first_child(document.head)
    );
    while (head_anchor !== null && (head_anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    head_anchor.data !== hash)) {
      head_anchor = /** @type {TemplateNode} */
      get_next_sibling(head_anchor);
    }
    if (head_anchor === null) {
      set_hydrating(false);
    } else {
      var start = (
        /** @type {TemplateNode} */
        get_next_sibling(head_anchor)
      );
      head_anchor.remove();
      set_hydrate_node(start);
    }
  }
  if (!hydrating) {
    anchor = document.head.appendChild(create_text());
  }
  try {
    block(() => render_fn(anchor), HEAD_EFFECT);
  } finally {
    if (was_hydrating) {
      set_hydrating(true);
      set_hydrate_node(
        /** @type {TemplateNode} */
        previous_hydrate_node
      );
    }
  }
}
export {
  head as h
};
