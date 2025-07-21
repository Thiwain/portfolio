import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://thwain.com",
  output: "static", // Keep this
  adapter: vercel({
    mode: "static", // ✅ IMPORTANT: Tell Astro you're using static build with this adapter
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind()],
});
