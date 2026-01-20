// ESM
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // during SSR build, alias materialize to a server-safe shim
      "materialize-css": fileURLToPath(new URL("./src/ssr-shims/materialize-server-shim.js", import.meta.url)),
    },
  },
  build: {
    ssr: "src/entry-server.js", // entry SSR
    outDir: "dist/server",
    // rollupOptions: {}, // se precisar marcar externals
  },
  ssr: {
    // marque libs DOM-only aqui se alguma quebrar no SSR
    noExternal: [],
  },
});
