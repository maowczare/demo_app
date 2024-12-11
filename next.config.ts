import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "whc.unesco.org",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
