import { s as setup_stores, c as store_get } from "../chunks/Dyq6N3Rz.js";
import { i as init } from "../chunks/ERhjC6zA.js";
import { p as push, a as pop } from "../chunks/Bd2P5WIS.js";
import { p as page } from "../chunks/DghAKJkW.js";
import { C as Chat } from "../chunks/DOAKnnaA.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  Chat($$anchor, {
    get chatIdProp() {
      return $page().params.id;
    }
  });
  pop();
  $$cleanup();
}
export {
  _page as component
};
