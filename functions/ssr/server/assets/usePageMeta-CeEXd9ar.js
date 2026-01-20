import { useHead } from "@vueuse/head";
import { d as buildBaseHead } from "../entry-server.js";
import { unref } from "vue";
function usePageMeta({ title, description, image, url, type = "website" } = {}) {
  buildBaseHead({ title, description, image, url, type });
  useHead(() => {
    const t = unref(title) || void 0;
    const d = unref(description) || void 0;
    const i = unref(image) || void 0;
    const u = unref(url) || void 0;
    return buildBaseHead({ title: t, description: d, image: i, url: u, type });
  });
}
export {
  usePageMeta as u
};
