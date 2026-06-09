import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["github.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: [
      "@fortawesome/react-fontawesome",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
