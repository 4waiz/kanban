import type { Config } from "tailwindcss";

// NOTE: This project uses Tailwind v4, where tokens are primarily defined in
// app/globals.css via @theme. This file mirrors those tokens for editor/tooling
// awareness and any plugin that still reads a JS config.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kanban-bg": "#0A0612",
        "kanban-bg-2": "#110820",
        "kanban-violet": "#7B5BFF",
        "kanban-violet-soft": "#A78BFA",
        "kanban-violet-softer": "#C4B5FD",
        "kanban-text": "#F4F1FA",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
};

export default config;
