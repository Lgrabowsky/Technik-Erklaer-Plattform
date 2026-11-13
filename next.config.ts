import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Schlanker Produktions-Build für Docker (siehe deploy/README.md)
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
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
