import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";
import { onRequest } from "firebase-functions/v2/https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// (opcional) servir assets (Hosting já serve, mas não atrapalha)
app.use("/assets", express.static(path.join(__dirname, "./ssr/client/assets")));

app.get("*", async (req, res) => {
  try {
    // importa o bundle SSR (agora dentro da pasta functions/ssr)
    const { render } = await import("./ssr/server/entry-server.js");

    // execute render fornecendo a req (para preview/cookies)
    const result = await render(req.originalUrl, { req });

    // lê o template index.html do client build
    const template = await fs.readFile(
      path.join(__dirname, "./ssr/client/index.html"),
      "utf-8",
    );

    // serialize ssrState com segurança básica para evitar fechamento prematuro do script
    const ssrState = result.ssrState || {};
    const safeState = JSON.stringify(ssrState).replace(/</g, "\\u003c");
    const stateScript = `<script>window.__SSR_STATE__ = ${safeState};</script>`;

    // fallback: se renderHeadToString não gerou headTags, tente mapear por rota
    let injectedHead = (result.headTags || "").trim();
    if (!injectedHead) {
      try {
        const pathOnly = req.originalUrl ? req.originalUrl.split("?")[0] : "/";
        const map = {
          "/": { title: "INDFER - Ferramentas diamantadas", description: "Atuamos no ramo de ferramentas diamantadas com foco em metalurgia e ferramentas ouro." },
          "/sobre": { title: "Sobre a INDFER - Ferramentas diamantadas", description: "Conheça a INDFER: inovação e qualidade em ferramentas diamantadas desde 1993." },
          "/contato": { title: "Entre em contato! Solicite um orçamento | INDFER - Ferramentas diamantadas", description: "Solicite um orçamento ou esclareça dúvidas — nossa equipe técnica responde rapidamente." },
          "/produtos": { title: "Produtos | INDFER - Ferramentas diamantadas", description: "Nossos produtos: soluções diamantadas para metalurgia e ferramentas ouro." },
          "/catalogo": { title: "Catálogo de Produtos | INDFER - Ferramentas diamantadas", description: "Baixe nosso catálogo e conheça as soluções INDFER para sua produção." }
        };
        const meta = map[pathOnly];
        if (meta) {
          const esc = (s) => String(s).replace(/[&"'<>]/g, (c) => ({ '&': '&amp;', '"': '&quot;', "'": '&#39;', '<': '&lt;', '>': '&gt;' })[c]);
          injectedHead = `<title>${esc(meta.title)}</title>\n<meta name="description" content="${esc(meta.description)}">`;
        }
      } catch (e) {
        // noop
      }
    }

    let htmlFinal = template
      .replace("<html", `<html ${result.htmlAttrs || ""}`)
      .replace("<body", `<body ${result.bodyAttrs || ""}`)
      .replace("<!--head-outlet-->", injectedHead + "\n" + stateScript)
      .replace("<!--ssr-outlet-->", result.html || "");

    res.status(200).set("Content-Type", "text/html").send(htmlFinal);
  } catch (e) {
    console.error("[SSR] ERROR:", e);
    res.status(500).send("Erro no SSR");
  }
});

export const ssrServer = onRequest(app);
