import path from "node:path";
import { loadEnv } from "vite";
import type { ConfigEnv, UserConfig } from "vite";
import { createVitePlugins } from "./build/vite";
import viewport from "postcss-mobile-forever";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: createVitePlugins(),

    server: {
      host: true,
      port: 3000,
      proxy: {
        "/Api": {
          target: env.VITE_APP_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/Api/, ""),
        },
      },
      hmr: {
        overlay: false,
      },
    },

    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
        "~": path.join(__dirname, "./src/assets"),
      },
    },

    css: {
      postcss: {
        plugins: [
          // https://github.com/wswmsword/postcss-mobile-forever
          viewport({
            appSelector: "#root",
            viewportWidth: 375,
            maxDisplayWidth: 600,
          }),
          autoprefixer(),
        ],
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${path.resolve(
            __dirname,
            "src/styles/variables.less"
          )}";`,
        },
      },
    },

    build: {
      sourcemap: false,
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
      outDir: mode === "development" ? "dist/dev" : "dist/prod",
    },
  };
};
