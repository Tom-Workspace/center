import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primSky: {
          300: 'rgb(9, 111, 144)',
          500: 'rgb(17, 186, 240)',
          800: 'rgb(159, 227, 249)',
          900: 'rgb(231, 248, 253)',
          950: 'rgb(231, 248, 253)',
        },
        pistachio: {
          400: 'rgb(148, 201, 82)',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
