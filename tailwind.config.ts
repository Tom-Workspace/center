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
        Olive: {
          50: 'rgb(251, 251, 234)',
          200: '#e9eea8',
          500: 'rgb(164, 181, 45)',
          400: 'rgb(195, 209, 79)',
        },
        pistachio: {
          400: 'rgb(148, 201, 82)',
        },
        midNight: {
          900: '#125667',
          800: '#10697a',
          100: 'rgb(205, 255, 254)',
          950: 'rgb(6, 69, 86)',

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
