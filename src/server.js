// server.js
import fs from "node:fs";
import path from "node:path";
import express from "express";

const isProd = process.env.NODE_ENV === "production";
const __dirname = path.resolve();

async function createServer() {
  const app = express();

  let vite;
  if (!isProd) {
    // DEV: Vite como middleware
    const { createServer: createVite } = await import("vite");
    vite = await createVite({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    // PROD: serve estáticos gerados
    app.use("/assets", express.static(path.resolve(__dirname, "dist/client/assets"), { index: false }));
  }

  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;

      // 1) Carrega template
      let template;
      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(__dirname, "dist/client/index.html"), "utf-8");
      }

      // 2) SSR render
      let render;
      if (!isProd) {
        render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
      } else {
        render = (await import("./dist/server/entry-server.js")).render;
      }

      const { html, state } = await render(url);

      // 3) Injeta HTML e (opcional) estado
      const htmlFinal = template
        .replace("<!--ssr-outlet-->", html + `<script>window.__STATE__=${JSON.stringify(state||{})}</script>`);

      res.status(200).set({ "Content-Type": "text/html" }).end(htmlFinal);
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  const port = process.env.PORT || 5173;
  app.listen(port);
}

createServer();