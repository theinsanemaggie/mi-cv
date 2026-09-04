import type { NextConfig } from "next";

const BASE_PATH = "/mi-cv";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  devIndicators: false,
};

export default nextConfig;
