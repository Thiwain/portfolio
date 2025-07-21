import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://thwain.com",
  output: "static", // Important
  adapter: vercel({
    mode: "static", // ✅ THIS MUST BE HERE
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind()],
});
