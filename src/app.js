import { createSSRApp, createApp as createClientApp } from "vue";
import * as VueRouter from "vue-router";
import routes from "./routes";
import App from "./App.vue";
import { createHead } from '@vueuse/head';

// --- Plugins ---
// (SSR-safe) seu plugin prismic precisa exportar um objeto { install(app) { ... } }
import prismic from "./services/prismic";

// --- Ícones ---
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
  faStar,
  faAngleDown,
  faAngleLeft,
  faMagnifyingGlass,
  faGears,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleCheck,
  faFaceSadTear,
} from "@fortawesome/free-regular-svg-icons";

const icons = [
  faStar,
  faPhone,
  faEnvelopeOpen,
  faLocationDot,
  faAngleDown,
  faAngleLeft,
  faMagnifyingGlass,
  faGears,
  faWhatsapp,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXmark,
  faCircleCheck,
  faFaceSadTear,
  faBars,
];
library.add(...icons);

export function createApp(url = "/") {
  const isServer = typeof window === "undefined";

  const router = VueRouter.createRouter({
    history: isServer
      ? VueRouter.createMemoryHistory()
      : VueRouter.createWebHistory(),
    routes,
    linkActiveClass: "active",
    scrollBehavior() {
      return { top: 0 };
    },
  });

  // use createSSRApp on server, createApp on client
  const app = isServer ? createSSRApp(App) : createClientApp(App);

  // head
  const head = createHead();
  app.use(head);

  // Expor app globalmente durante SSR para que utilitários possam gravar ssrState
  if (isServer) {
    try {
      if (typeof globalThis !== 'undefined') globalThis.__VUE_SSR_APP__ = app;
    } catch (e) {
      // noop
    }
  }

  // Plugins
  app.use(router);
  app.use(prismic);

  // em SSR, empurra a rota recebida para o roteador (entry-server fará await/isReady)
  if (isServer && url) {
    try {
      router.push(url);
    } catch (e) {
      // não interrompe a criação do app aqui; entry-server deve lidar com erros de rota
      // console.debug("router.push erro no SSR:", e);
    }
  }

  // Components globais
  app.component("font-awesome-icon", FontAwesomeIcon);

  return { app, router, head };
}
