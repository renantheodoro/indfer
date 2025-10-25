// dump-produtos.mjs
// Node 18+ (tem fetch nativo). Se usar Node 16, instale node-fetch e importe.

// ====== Config ======
const API_BASE = "https://indfer.cdn.prismic.io/api/v2";
const OUT_PATH = "./produtos.json";

// ====== Helpers ======
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const asText = (rich) =>
  Array.isArray(rich) ? rich.map(b => (b?.text ?? "").trim()).join("\n").trim() : "";

// ====== Passo 1: pegar o ref (master) do repo antigo ======
async function getMasterRef() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error(`Falha ao acessar ${API_BASE}: ${res.status}`);
  const json = await res.json();
  const master = (json.refs || []).find(r => r.isMasterRef) || (json.refs || [])[0];
  if (!master?.ref) throw new Error("Não encontrei o master ref na API v2.");
  return master.ref;
}

// ====== Passo 2: buscar todos os produtos, paginando ======
async function getAllProdutos(ref) {
  const query = '[[at(document.type,"produto")]]';
  const pageSize = 100;
  let page = 1;
  let next = true;
  const all = [];

  while (next) {
    const url = `${API_BASE}/documents/search?ref=${encodeURIComponent(ref)}&q=${encodeURIComponent(query)}&pageSize=${pageSize}&page=${page}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Falha ao buscar página ${page}: ${res.status}`);
    const data = await res.json();

    // Normaliza cada doc para o formato que o import usa
    for (const doc of data.results || []) {
      const d = doc.data || {};
      all.push({
        id: doc.id,
        uid: doc.uid,
        lang: doc.lang,
        category: d.category ?? null,
        // Mantém os arrays RichText originais (description/details) e também fornece versões plain text se precisar
        title: asText(d.title),
        subtitle: asText(d.subtitle),
        description: Array.isArray(d.description) ? d.description : [],
        description_text: asText(d.description),
        details: Array.isArray(d.details) ? d.details : [],
        details_text: asText(d.details),
        thumbnail: {
          url: d.thumbnail?.url ?? null,
          alt: d.thumbnail?.alt ?? null,
          id: d.thumbnail?.id ?? null,
          dimensions: d.thumbnail?.dimensions ?? null
        },
        // Mantém alguns metadados úteis
        first_publication_date: doc.first_publication_date,
        last_publication_date: doc.last_publication_date,
        slugs: doc.slugs || []
      });
    }

    // Avança a paginação
    next = Boolean(data.next_page);
    page += 1;

    // Só por educação com a API
    if (next) await sleep(150);
  }

  return all;
}

// ====== Passo 3: gravar o produtos.json ======
import fs from "node:fs";

(async () => {
  try {
    console.log("→ Descobrindo master ref do repositório legado…");
    const ref = await getMasterRef();

    console.log("→ Baixando produtos (type = \"produto\")…");
    const produtos = await getAllProdutos(ref);
    console.log(`✓ Encontrados ${produtos.length} produtos.`);

    fs.writeFileSync(OUT_PATH, JSON.stringify(produtos, null, 2), "utf8");
    console.log(`✓ Arquivo salvo em: ${OUT_PATH}`);
    console.log("Pronto! Agora rode seu importador que lê o produtos.json.");
  } catch (err) {
    console.error("Erro:", err.message);
    process.exit(1);
  }
})();
