import { createPrismic } from "@prismicio/vue";

import { linkResolver } from "./link-resolver";

const endpoint = 'https://indfer.cdn.prismic.io/api/v2'

const prismic = createPrismic({
  endpoint: endpoint,
  linkResolver,
});

export default prismic;