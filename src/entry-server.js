import { renderToString } from "@vue/server-renderer";
import { createApp } from "./app";

// render(url, { req }) -> usado pelo server (functions) para SSR
export async function render(url, { req } = {}) {
  const { app, router, head } = createApp(url);

  // expose request to composables (usePrismic will read this)
  if (req) app.provide("ssrReq", req);

  // aguarda o roteador ficar pronto (createApp já fez router.push(url) no server)
  await router.isReady();

  const appHtml = await renderToString(app);

  // renderiza head para string (title, metas, etc)
  let headTags = "";
  let htmlAttrs = "";
  let bodyAttrs = "";
  if (head && typeof head.renderHeadToString === "function") {
    const res = head.renderHeadToString();
    headTags = res.headTags;
    htmlAttrs = res.htmlAttrs;
    bodyAttrs = res.bodyAttrs;
  } else {
    // fallback: importa utilitário do pacote (algumas versões expõem renderHeadToString como função standalone)
    try {
      const mod = await import("@vueuse/head");
      if (mod && typeof mod.renderHeadToString === "function") {
        const res = mod.renderHeadToString(head || undefined);
        headTags = res.headTags || "";
        htmlAttrs = res.htmlAttrs || "";
        bodyAttrs = res.bodyAttrs || "";
      }
    } catch (e) {
      console.warn("[entry-server] could not render head to string:", e);
    }
  }

  // Se seus componentes gravaram estado para serializar (via setSsrState), recupere
  const ssrState = app.config.globalProperties.$ssrState || {};

  // combining any temp state written by components that couldn't access getCurrentInstance()
  try {
    const temp = (typeof globalThis !== 'undefined' && globalThis.__SSR_STATE_TEMP__) || {};
    const merged = Object.assign({}, temp, ssrState);
    // use merged state as the serialized state
    Object.keys(merged).forEach((k) => (ssrState[k] = merged[k]));
  } catch (e) {}
  // If headTags is empty, try a minimal fallback using ssrState.product
  try {
    const hasHead = headTags && String(headTags).trim().length > 0;
    if (!hasHead && ssrState && ssrState.product) {
      const product = ssrState.product;
      const extractPlain = (node) => {
        if (!node) return '';
        if (Array.isArray(node)) return node.map((r) => (r && (r.text || r.first_child?.text)) || '').join(' ').trim();
        if (typeof node === 'string') return node;
        if (node.text) return node.text;
        return '';
      };

      const rawTitle = extractPlain(product?.data?.title) || extractPlain(product?.data?.name) || product?.data?.title || 'Produto INDFER';
      const categoryRaw = product?.data?.category || (Array.isArray(product?.tags) && product.tags[0]) || '';
      const capitalize = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s || '');
      const categoryName = categoryRaw ? capitalize(String(categoryRaw)) : '';
      const titleStr = (categoryName ? `${categoryName}: ` : '') + `${rawTitle} | INDFER - Ferramentas diamantadas`;
      const escapeHtml = (str) => String(str).replace(/[&"'<>]/g, (s) => ({ '&': '&amp;', '"': '&quot;', "'": '&#39;', '<': '&lt;', '>': '&gt;' }[s]));
      headTags = `<title>${escapeHtml(titleStr)}</title>`;
    }
  } catch (e) {}

  return { html: appHtml, ssrState, headTags, htmlAttrs, bodyAttrs };
}
