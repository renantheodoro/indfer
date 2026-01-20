import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  try {
    const mod = await import(path.join(__dirname, "src/services/prismic-client.js"));
    const createPrismicClient = mod.createPrismicClient || mod.default;
    if (!createPrismicClient) throw new Error("createPrismicClient not found");
    const client = createPrismicClient();

    console.log('Querying Prismic: getAllByType("produto") (may be empty if no documents)');
    if (typeof client.getAllByType === 'function') {
      const items = await client.getAllByType('produto');
      console.log('items:', items.length);
      if (items.length) console.log('first item id/title:', items[0].id, items[0].data?.title?.[0]?.text || '(no title)');
    } else if (typeof client.getByType === 'function') {
      const resp = await client.getByType('produto', { pageSize: 100, lang: '*' });
      console.log('getByType response results:', resp.results && resp.results.length);
      if (resp.results && resp.results.length) console.log('first item id/title:', resp.results[0].id, resp.results[0].data?.title?.[0]?.text || '(no title)');
    } else {
      console.log('Prismic client does not implement expected methods on this SDK version');
    }
  } catch (e) {
    console.error('Prismic test error:', e);
    process.exitCode = 1;
  }
}

run();
