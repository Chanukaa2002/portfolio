/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          bg: "#070b19",
          card: "#0b1126",
          cardBorder: "#1e293b",
          primary: "#38bdf8",
          secondary: "#818cf8",
          purple: "#9333ea",
          violet: "#7c3aed",
          accent: "#00d2ff",
        },
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(147, 51, 234, 0.4)",
        glowCyan: "0 0 20px -5px rgba(56, 189, 248, 0.4)",
        glowLg: "0 0 35px -5px rgba(124, 58, 237, 0.5)",
      },
      animation: {
        pulseGlow: "pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

