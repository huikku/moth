import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/moth",
  assetPrefix: "/moth",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
