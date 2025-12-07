// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://sumeetsingh39.github.io/",
  base: "/portfolio-system",
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), mdx()],
});
