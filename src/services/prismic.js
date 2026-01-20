import { createPrismic } from "@prismicio/vue";

import { linkResolver } from "./link-resolver";

// LEGACY VERSION
// const endpoint = 'https://indfer.cdn.prismic.io/api/v2';

// CURRENT VERSION (v2)
const endpoint = "https://indfer-v2.prismic.io/api/v2";

const prismic = createPrismic({
  endpoint: endpoint,
  linkResolver,
});

export default prismic;