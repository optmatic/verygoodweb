import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["GeistSans", "sans-serif"],
        mono: ["GeistMono", "monospace"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        deepBlue: "#080a13"
      },
    },
  },
  plugins: [],
} satisfies Config;
