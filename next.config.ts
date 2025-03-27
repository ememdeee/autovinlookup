import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'www.autovinlookup.com',
      'www.chassisvin.com', // Include this if you're also using images from this domain
    ],
  },
};

export default nextConfig;