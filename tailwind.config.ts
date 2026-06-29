import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#020207",
        "surface-deep": "#080A1A",
        surface: "#111338",
        "indigo-900": "#0C11A2",
        "indigo-700": "#141BD4",
        "blue-muted": "#4D5DB3",
        "text-primary": "#F4F7FF",
        "text-secondary": "#B9C3D6",
        "text-muted": "#7B8197",
        "accent-warm": "#B16258"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Sora", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 24px 80px rgba(20, 27, 212, 0.16)",
        glow: "0 0 60px rgba(20, 27, 212, 0.28)",
        "inner-glow":
          "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(77,93,179,0.16)"
      },
      backgroundImage: {
        "cyber-radial":
          "radial-gradient(circle at 18% 18%, rgba(20,27,212,0.34), transparent 28rem), radial-gradient(circle at 84% 10%, rgba(77,93,179,0.22), transparent 24rem), radial-gradient(circle at 50% 95%, rgba(177,98,88,0.14), transparent 30rem)",
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
