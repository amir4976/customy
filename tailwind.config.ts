import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/pagination.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btnBg:'var(--btns-color)'
        ,PrimaryP:"var(--primary-pink)",
        primRed:'var(--primary-red)',
      },
      fontFamily: {
        y: "var(--font-y)",
        yBold: "var(--font-y-bold)",
      }
    },
  },
  plugins: [nextui()],
};
export default config;
