import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#050608",
          900: "#08090d",
          850: "#0d0f15",
          800: "#121622",
          700: "#181e2e",
          600: "#222a3d",
        },
        surface: {
          base: "#08090d",
          card: "#0f131c",
          cardHover: "#151b27",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(56, 189, 248, 0.3)",
          glow: "rgba(56, 189, 248, 0.12)",
        },
        brand: {
          cyan: "#38bdf8",
          sky: "#0ea5e9",
          blue: "#2563eb",
          electric: "#00f0ff",
          webflow: "#146EF5",
          accent: "#38bdf8",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        arabic: [
          "var(--font-arabic)",
          "IBM Plex Sans Arabic",
          "Tajawal",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(56, 189, 248, 0.25)",
        "glow-lg": "0 0 60px -10px rgba(56, 189, 248, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
        "card-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 25px -5px rgba(56, 189, 248, 0.15)",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
