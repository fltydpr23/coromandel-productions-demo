import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vumbnail.com" },
      { protocol: "https", hostname: "i.vimeocdn.com" },
    ],
  },
  // Allow Sanity studio to bundle correctly
  transpilePackages: ["next-sanity"],
};

export default nextConfig;
