import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  try {
    const modulePath = path.join(__dirname, "functions/ssr/server/entry-server.js");
    const mod = await import(modulePath);
    const render = mod.render || (mod.default && mod.default.render) || mod.default;
    if (!render) throw new Error("render() not exported from entry-server.js");

  // chama render para a rota de detalhe de produto para verificar título server-side
  // usando um produto existente no repositório (category: metalurgia, uid: rebolo-resinoide)
  const result = await render("/produtos/metalurgia/rebolo-resinoide", { req: { originalUrl: "/produtos/metalurgia/rebolo-resinoide", headers: {} } });

    console.log("--- HEAD (raw) ---");
    console.log(result.headTags || "(no headTags)");

    console.log("--- HEAD ATTRS ---");
    console.log("htmlAttrs:", result.htmlAttrs || {});
    console.log("bodyAttrs:", result.bodyAttrs || {});

    // try to extract a <title> from headTags if present
    const headStr = (result.headTags || "") + "";
    const titleMatch = headStr.match(/<title[^>]*>(.*?)<\/title>/i);
    console.log("--- EXTRACTED <title> ---");
    console.log(titleMatch ? titleMatch[1] : "(no <title> found in headTags)");

    console.log("--- HTML (start) ---");
    console.log((result.html || "").slice(0, 2000));

    console.log("--- SSR STATE (full) ---");
    try {
      console.log(JSON.stringify(result.ssrState || {}, null, 2));
    } catch (e) {
      console.log(result.ssrState || {});
    }
  } catch (e) {
    console.error("Error running SSR test:", e);
    process.exitCode = 1;
  }
}

run();
