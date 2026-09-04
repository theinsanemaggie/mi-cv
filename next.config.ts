import type { NextConfig } from "next";
import { basePath } from "./lib/basePath";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  devIndicators: false,
};

export default nextConfig;
