import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/omar-sarah-wedding",
  assetPrefix: "/omar-sarah-wedding/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;