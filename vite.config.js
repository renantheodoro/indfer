// ESM
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist/client",
    manifest: true,
    ssrManifest: true, // gera manifest p/ injetar CSS/JS no SSR se quiser
    // assetsDir: "assets", // opcional
  },
});
