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
        "mint-opaque": "var(--color-mint-opaque)",
        "mint-light": "var(--color-mint-light)",
        mint: "var(--color-mint)",
        "navy-opaque": "var(--color-navy-opaque)",
        "navy-light": "var(--color-navy-light)",
        navy: "var(--color-navy)",
        "navy-dark": "var(--color-navy-dark)",
        lavender: "var(--color-lavender)",
      },
    },
  },
  plugins: [],
} satisfies Config;
