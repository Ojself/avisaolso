import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"],
      },
      colors: {
        ared: "#B71918",
        agrey: "#E7E6E2",
        ablack: "#292827",
        adarkblue: "#0771D8",
        ablue: "#2A85DE",
      },
    },
  },
  plugins: [],
};
export default config;
