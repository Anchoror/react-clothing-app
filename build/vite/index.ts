import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import legacy from "@vitejs/plugin-legacy";
// import AutoImport from "unplugin-auto-import/vite";
// import Icons from "unplugin-icons/vite";
// import IconsResolver from "unplugin-icons/resolver";

export function createVitePlugins() {
  return [
    react(),

    // https://github.com/antfu/unplugin-auto-import
    // AutoImport({
    //   include: [/\.[tj]sx?$/],
    //   imports: ["react", "react-router-dom", "react-i18next", "ahooks", {}],
    //   dts: "src/auto-imports.d.ts",
    //   dirs: ["src/composables"],
    //   eslintrc: {
    //     enabled: true,
    //   },
    //   defaultExportByFilename: true,
    //   resolvers: [
    //     IconsResolver({
    //       componentPrefix: "Icon",
    //     }),
    //   ],
    // }),

    legacy({
      targets: ["defaults", "not IE 11"],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ];
}
