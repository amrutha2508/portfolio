import type { NextConfig } from "next";
// const isProd = process.env.NODE_ENV = "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  // ⚠️ Replace with your GitHub repo name
  // basePath: isProd ? "/portfolio":"",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
};

export default nextConfig;
