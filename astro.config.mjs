import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import XMLLoader from "./xml-loader";
import nodejs from "@astrojs/node";
import compress from "astro-compress";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    compress(),
    tailwind({
      applyBaseStyles: true,
    }),
    react(),
  ],
  output: "hybrid",
  server: {
    host: "0.0.0.0"
  },
  adapter: nodejs({
    mode: "standalone"
  }),
  vite: {
    plugins: [XMLLoader({
      ignoreAttributes: false
    })],
    ssr: {
      noExternal: ["@radix-ui/*"],
    }
  }
});