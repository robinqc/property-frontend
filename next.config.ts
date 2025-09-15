process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
