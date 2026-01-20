export const siteMetaDefaults = {
  title: 'INDFER - Ferramentas diamantadas',
  htmlAttrs: { lang: 'pt-br' },
  description:
    'Atuamos no ramo de ferramentas diamantadas com negócios focados em metalurgia e ferramentas ouro.',
  image:
    'https://firebasestorage.googleapis.com/v0/b/indfer-822a1.appspot.com/o/indfer-thumbnail.jpg?alt=media&token=8d7b9650-b918-4ced-811e-4c0a595f6a45',
  url: 'https://www.indfer.com.br',
};

export default siteMetaDefaults;

export function buildBaseHead({ type = 'website', ...overrides } = {}) {
  const defaults = Object.assign({}, siteMetaDefaults, overrides);

  return {
    title: defaults.title,
    htmlAttrs: defaults.htmlAttrs,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'title', content: defaults.title },
      { name: 'description', content: defaults.description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: defaults.url },
      { property: 'og:title', content: defaults.title },
      { property: 'og:description', content: defaults.description },
      { property: 'og:image', content: defaults.image },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: defaults.url },
      { property: 'twitter:title', content: defaults.title },
      { property: 'twitter:description', content: defaults.description },
      { property: 'twitter:image', content: defaults.image },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=AW-1009093109', async: true },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-1009093109');",
        type: 'text/javascript',
      },
      { children: "window.neuroleadId = 66333;", type: 'text/javascript' },
      { src: 'https://cdn.leadster.com.br/neurolead/neurolead.min.js', defer: true, type: 'text/javascript' },
    ],
  };
}
