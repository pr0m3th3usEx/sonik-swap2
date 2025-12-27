import type { NextConfig } from "next";
import packageJson from "./package.json" assert { type: "json" };

const nextConfig: NextConfig = {
  env: {
    NEXT_APP_VERSION: packageJson.version,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.ts",
      },
    },
  },
};

export default nextConfig;
