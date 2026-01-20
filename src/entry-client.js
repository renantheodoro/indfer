import { createApp } from "./app";

// CSS globais só no client
import "materialize-css/dist/css/materialize.min.css";
import "./assets/styles/index.scss";

const { app, router } = createApp();

// injeta o estado serializado pelo SSR (se existir)
const initialState = typeof window !== "undefined" ? window.__SSR_STATE__ || {} : {};
if (initialState && Object.keys(initialState).length) {
  // expõe via provide para os composables pegarem (useSsrState/getInitialSsrState)
  app.provide("initialState", initialState);
  // também manter em config.globalProperties para compatibilidade
  app.config.globalProperties.$ssrState = initialState;
}

router.isReady().then(() => {
  app.mount("#app", true); // hidrata
});
