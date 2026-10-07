import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Match the live site's URLs exactly (/about-us/), so existing links and rankings carry over.
  trailingSlash: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 80],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2400],
    // YouTube thumbnails for the click-to-load video embeds.
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
