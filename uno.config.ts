import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWind4,
} from "unocss";

export default defineConfig({
  presets: [presetWind4(), presetAttributify(), presetTypography()],

  preflights: [
    {
      getCSS: () => `
      html {
      background-color: "oklch(96.8% 0.007 247.9)";
      font-family: Pretendard, sans-serif;}

      body {
        margin: 0 auto;
        width: 100%;
        max-width: 80ch;
        padding: 1rem;
        line-height: 1.5;
      }

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
    breakpoints: {
      nav: "636px",
    },

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

    // 모바일 메뉴 버튼
    menu: "bg-[#0d0950] border-none text-white text-[1.2rem] font-bold py-[5px] px-[10px] nav:hidden", 

    // 모바일 기본 네비게이션
    "nav-links":
      "w-full m-0 hidden nav:ml-[5em] nav:block nav:static nav:w-auto nav:bg-transparent",

    // 네비게이션 링크 기본 스타일
    "nav-link":
      "block text-center py-[10px] px-0 no-underline font-[1.2rem] font-bold uppercase text-[oklch(21.7%_0.12_272.5)] hover:bg-[oklch(77.8%_0.134_38.4)] focus:bg-[oklch(77.8%_0.134_38.4)] nav:inline-block nav:py-[15px] nav:px-5",

    // 메뉴 버튼을 클릭했을 때 모바일 네비게이션 표시
    "nav-menu": "[&:has(.menu[aria-expanded='true'])_.nav-links]:block",
  },
});
