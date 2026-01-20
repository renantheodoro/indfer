import { getCurrentInstance } from "vue";

// grava um valor no objeto global de ssrState para ser serializado no server
export function setSsrState(key, value) {
  const vm = getCurrentInstance();
  // somente grava no app (quando há instância disponível)
  if (vm) {
    const app = vm.appContext.app;
    if (!app.config.globalProperties.$ssrState) app.config.globalProperties.$ssrState = {};
    app.config.globalProperties.$ssrState[key] = value;
  }
  // se não houver instância (ex: onServerPrefetch), tente gravar no app exposto durante SSR
  try {
    if (typeof globalThis !== 'undefined' && globalThis.__VUE_SSR_APP__) {
      const app = globalThis.__VUE_SSR_APP__;
      if (app && app.config) {
        if (!app.config.globalProperties.$ssrState) app.config.globalProperties.$ssrState = {};
        app.config.globalProperties.$ssrState[key] = value;
      }
    }
  } catch (e) {
    // noop
  }
  // se ainda não gravou (nenhum app exposto), mantenha um fallback temporário no processo
  try {
    if (typeof globalThis !== 'undefined' && !globalThis.__VUE_SSR_APP__) {
      if (!globalThis.__SSR_STATE_TEMP__) globalThis.__SSR_STATE_TEMP__ = {};
      globalThis.__SSR_STATE_TEMP__[key] = value;
    }
  } catch (e) {
    // noop
  }
}

// lê o estado inicial já serializado no cliente (window.__SSR_STATE__)
export function getInitialSsrState(key) {
  if (typeof window === "undefined") return undefined;
  const s = window.__SSR_STATE__ || {};
  return s[key];
}
