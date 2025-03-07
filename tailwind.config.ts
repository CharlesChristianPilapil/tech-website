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
        primary: "#49deff",
        seconday: "#4fffdf",
        title_color: "#303030",
        content_color: "#4e4e4e",
        background_grey: "#dedede",
        background_smoke: "#f4f4f4",
        background_light: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
export default config;
