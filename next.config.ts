import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'www.autovinlookup.com',
      'www.chassisvin.com', // Include this if you're also using images from this domain
    ],
  },
  async redirects() {
    return [
      {
        source: '/window-sticker',
        destination: '/window-sticker-by-vin',
        permanent: true, // set to false if it's a temporary redirect
      },
    ];
  },
};

export default nextConfig;