import type { NextConfig } from "next";

// next.config.ts corre en Node puro, así que leer process.env acá siempre
// funciona (esto no depende del mecanismo de inlining para el cliente).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
