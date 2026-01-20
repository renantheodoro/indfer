import * as prismic from "@prismicio/client";

// Use the CDN endpoint shown in the Prismic dashboard
const endpoint = "https://indfer-v2.cdn.prismic.io/api/v2";

export function createPrismicClient({ fetchFn } = {}) {
  // o SDK do Prismic usará fetch (no Node 18+ globalThis.fetch existe)
  const client = prismic.createClient(endpoint, {
    fetch: fetchFn || globalThis.fetch,
    // Use a variável de ambiente PRISMIC_ACCESS_TOKEN para repositórios privados
    accessToken: process.env.PRISMIC_ACCESS_TOKEN || undefined,
  });

  return client;
}
