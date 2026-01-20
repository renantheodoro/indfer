import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  try {
    const modulePath = path.join(__dirname, "functions/ssr/server/entry-server.js");
    const mod = await import(modulePath);
    const render = mod.render || (mod.default && mod.default.render) || mod.default;
    if (!render) throw new Error("render() not exported from entry-server.js");

    const result = await render("/produtos", { req: { originalUrl: "/produtos", headers: {} } });

    console.log("--- HEAD (raw) ---");
    console.log(result.headTags || "(no headTags)");

    console.log("--- EXTRACTED <title> ---");
    const headStr = (result.headTags || "") + "";
    const titleMatch = headStr.match(/<title[^>]*>(.*?)<\/title>/i);
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
