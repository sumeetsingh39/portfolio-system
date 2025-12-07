/** @type {import('tailwindcss/tailwind-config')} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Spline Sans Mono", "Maple Mono", "monospace"],
      },
      colors: {
        void: "var(--bg)",
        signal: "var(--text-main)",
        muted: "var(--text-muted)",
        border: "var(--border)",
        accent: "var(--accent)",
      },
      gridTemplateColumns: {
        layout: "280px 1fr",
      },
    },
  },
  plugins: [],
};
