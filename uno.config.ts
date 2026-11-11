import { defineConfig, presetAttributify, presetTypography, presetWind4 } from "unocss";

export default defineConfig({
  presets: [presetWind4(), presetAttributify(), presetTypography()],

  preflights: [
    {
      getCSS: () => `
      html {
      background-color: oklch(96.8% 0.007 247.9);
      font-family: Pretendard, sans-serif;}

      body {
        margin: 0 auto;
        width: 100%;
        max-width: 80ch;
        padding: 1rem;
        line-height: 1.5;
      },

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
        h1 {
        margin: 1rem 0;
        font-size: 2.5rem;}
    `,
    },
  ],

  theme: {
    colors: {
      primary: "oklch(58.5% 0.204 277.1)",
      secondary: "oklch(96.8% 0.007 247.9)",
    },
    fontFamily: {
      sans: "Pretendard,sans-serif",
    },
  },
  shortcuts: {
    "page-container": "mx-auto w-full max-w-80ch p-4 leading-6",
    "heading-primary": "my-4 text-4xl font-bold",
    "link-button": "border border-slate-300 rounded-sm px-3 py-2",
  },
});
