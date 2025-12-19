import { s as setup_stores, c as store_get } from "../chunks/Dyq6N3Rz.js";
import { i as init } from "../chunks/ERhjC6zA.js";
import { p as push, o as onMount, a as pop } from "../chunks/Bd2P5WIS.js";
import { t as toast } from "../chunks/CVh7obxn.js";
import { C as Chat } from "../chunks/DOAKnnaA.js";
import { p as page } from "../chunks/DghAKJkW.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(() => {
    if ($page().url.searchParams.get("error")) {
      toast.error($page().url.searchParams.get("error") || "An unknown error occurred.");
    }
  });
  init();
  Chat($$anchor, {});
  pop();
  $$cleanup();
}
export {
  _page as component
};
