import { inject } from "vue";
import { createPrismicClient } from "@/services/prismic-client";

export const SSR_REQ_KEY = "ssrReq";

export function usePrismic(options = {}) {
  // se o entry-server injetou a req via provide('ssrReq', req), conseguimos pegar aqui
  const ssrReq = inject(SSR_REQ_KEY, null);

  // em SSR você pode precisar passar um fetch específico (node-fetch) via options.fetch
  const fetchFn = options.fetch || null;

  const client = createPrismicClient({ fetchFn });

  return { client, ssrReq };
}
