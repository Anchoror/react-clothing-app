import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

// 刚使用unocss的朋友，可以借助这个工具： https://to-unocss.netlify.app

export default defineConfig({
  presets: [
    presetUno,
    presetAttributify,
    presetIcons(),
    presetRemToPx({ baseFontSize: 4 }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "DM Sans",
      },
    }),
    // presetMini(),
  ],
  rules: [
    [
      "bg-liner",
      {
        background:
          "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.14) 100%)",
        "background-color": "#F6F5F8",
      },
    ],
  ],
  shortcuts: [
    // shortcuts to multiple utilities
    { "footer-h": "h-[var(--footer-h)]", "header-h": "h-[var(--header-h)]" },
    {
      "flex-center": "flex justify-center items-center",
      "x-center": "left-1/2 translate-x--50%",
      "y-center": "top-1/2 translate-y--50%",
    },
    {
      "text-h1": "text-32 lh-40 fw-700",
      "text-h2": "text-24 lh-30 fw-700",
      "text-h3": "text-22 lh-27.5 fw-700",
      "text-content1": "text-16 color-#94A3B8 lh-24 fw-400",
      "text-content2": "text-14 color-#94A3B8 lh-20 fw-400",
      "text-content3": "text-12 color-#94A3B8 lh-16 fw-400",
      "text-label1": "text-12 lh-16 fw-500",
    },
  ],
  theme: {
    colors: {
      primary: "var(--primary-color)",
      corcal: "var(--corcal-color)",
      salmon: "var(--salmon-color)",
      "sub-primary": "var(--sub-primary-color)",
    },
  },
});
