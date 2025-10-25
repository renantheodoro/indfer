// import-produtos.mjs
import fs from "fs/promises";
import path from "path";
import puppeteer from "puppeteer";

/**
 * URLs da UI do Prismic
 */
const PRISMIC_WORK_URL = "https://indfer-v2.prismic.io/builder/working";

/**
 * Helpers básicos
 */
async function waitAndClick(page, selector, opts = {}) {
  await page.waitForSelector(selector, { visible: true, ...opts });
  await page.click(selector);
}

async function clearAndType(page, selector, text) {
  const el = await page.waitForSelector(selector, { visible: true });
  await el.click({ clickCount: 3 });
  await el.press("Backspace");
  if (text) await el.type(String(text));
}

/**
 * TipTap (contenteditable): limpa tudo e digita como usuário
 */
async function setContentEditable(page, selector, text) {
  const el = await page.waitForSelector(selector, { visible: true });
  await el.focus();

  // Select All + Backspace (Mac/Win)
  const mod = process.platform === "darwin" ? "Meta" : "Control";
  await page.keyboard.down(mod);
  await page.keyboard.press("KeyA");
  await page.keyboard.up(mod);
  await page.keyboard.press("Backspace");

  if (!text) return;

  // Digita respeitando quebras de linha
  const lines = String(text).split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i]) await page.keyboard.type(lines[i]);
    if (i < lines.length - 1) {
      // Shift+Enter cria nova linha no mesmo bloco (evita novos blocos TipTap)
      await page.keyboard.down("Shift");
      await page.keyboard.press("Enter");
      await page.keyboard.up("Shift");
    }
  }
}

/**
 * Combobox de Categoria (Radix): botão com id="category"
 */
async function selectCategoria(page, categoriaAlvo) {
  if (!categoriaAlvo) return;

  // Se já estiver igual, não muda
  const current = (
    await page.$eval("#category", (el) => el.textContent || "")
  )
    .trim()
    .toLowerCase();
  if (current === categoriaAlvo.toLowerCase()) return;

  await waitAndClick(page, "#category");

  // Procura opção por texto visível (o menu do Radix usa roles; mantemos amplo)
  const optionXpath = `//div[@role="option" or @role="menuitem" or @role="radio"]//*[normalize-space(text())="${categoriaAlvo}"]/ancestor-or-self::*[@role="option" or @role="menuitem" or @role="radio"]`;
  await page.waitForXPath(optionXpath, { visible: true, timeout: 8000 });
  const [opt] = await page.$x(optionXpath);
  await opt.click();
}

/**
 * Espera mudança de URL contendo um substring
 */
async function waitForUrlIncludes(page, piece, timeout = 15000) {
  await page.waitForFunction(
    (p) => location.href.includes(p),
    { timeout },
    piece
  );
}

/**
 * Cria uma nova página e preenche os campos
 */
async function createAndFillProduct(page, item, index) {
  // 1) clica em "Create a new page"
  // seletor robusto via XPath (funciona mesmo com variações de markup)
  const createBtnXPath =
    `//button[.//span[contains(normalize-space(.), "Create a new page")] or contains(normalize-space(.), "Create a new page")]` +
    `| //a[.//span[contains(normalize-space(.), "Create a new page")] or contains(normalize-space(.), "Create a new page")]`;

  let clicked = false;
  try {
    await page.waitForXPath(createBtnXPath, { visible: true, timeout: 7000 });
    const [btn] = await page.$x(createBtnXPath);
    await btn.click();
    clicked = true;
  } catch (_) {
    // deixa o fallback cuidar
  }

  // 2) aguarda navegar para /builder/pages/...
  if (clicked) {
    try {
      await page.waitForNavigation({ waitUntil: "networkidle2", timeout: 15000 });
    } catch (_) {
      // às vezes a navegação é SPA; garante pelo trecho de URL
      await waitForUrlIncludes(page, "/builder/pages/");
    }
  } else {
    // fallback: força abrir "página nova" (mesmo endpoint que o botão usa)
    // Se o tenant bloquear acesso direto, este passo será inofensivo.
    await page.goto("https://indfer-v2.prismic.io/builder/pages/new?s=unclassified", {
      waitUntil: "networkidle2",
    });
    await waitForUrlIncludes(page, "/builder/pages/");
  }

  // 3) preenche os campos
  // --- UID ---
  await clearAndType(
    page,
    'input[data-tag="UIDField"]',
    item.uid || item.slugs?.[0] || `produto-${index + 1}`
  );

  // --- Categoria ---
  await selectCategoria(page, item.category || "metalurgia");

  // --- Título ---
  await setContentEditable(page, "#title", item.title || "");

  // --- Subtítulo ---
  await setContentEditable(page, "#subtitle", item.subtitle || "");

  // --- Descrição ---
  await setContentEditable(page, "#description", item.description_text || "");

  // --- Detalhes ---
  await setContentEditable(page, "#details", item.details_text || "");

  // 4) espera o auto-save ("Saved" no topo)
  try {
    await page.waitForFunction(
      () =>
        !![...document.querySelectorAll("p, span")].find((n) =>
          /Saved/i.test(n.textContent || "")
        ),
      { timeout: 8000 }
    );
  } catch {
    // segue sem travar
  }
}

/**
 * Main
 */
(async () => {
  // 0) lê produtos.json
  const jsonPath = path.resolve(process.cwd(), "produtos.json");
  const raw = await fs.readFile(jsonPath, "utf8");
  const produtos = JSON.parse(raw);

  if (!Array.isArray(produtos) || produtos.length === 0) {
    console.error("produtos.json não tem itens.");
    process.exit(1);
  }

  // 1) inicia o navegador
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    // Se quiser usar seu Chrome local (recomendado, já logado):
    // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  const [page] = await browser.pages();

  // 2) abre a lista de documentos
  await page.goto(PRISMIC_WORK_URL, { waitUntil: "networkidle2" });

  // 3) cria e preenche um por um
  for (let i = 0; i < produtos.length; i++) {
    const item = produtos[i];
    try {
      await createAndFillProduct(page, item, i);
      // volta para a lista para criar o próximo
      await page.goto(PRISMIC_WORK_URL, { waitUntil: "networkidle2" });
    } catch (err) {
      console.error(
        `Falha ao criar/preencher item ${item.uid || i + 1}:`,
        err?.message || err
      );
      // tenta voltar à lista e continua
      try {
        await page.goto(PRISMIC_WORK_URL, { waitUntil: "networkidle2" });
      } catch {}
    }
  }

  console.log("Concluído.");
  // Deixo aberto para você validar; se preferir, descomente:
  // await browser.close();
})();
