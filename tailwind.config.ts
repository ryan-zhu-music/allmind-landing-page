import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--color-navy)",
        secondary: "var(--secondary)",
        "mint-light": "var(--color-mint-light)",
        mint: "var(--color-mint)",
        "navy-light": "var(--color-navy-light)",
        navy: "var(--color-navy)",
        "navy-dark": "var(--color-navy-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
