import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'assets.example.com',
        port: '',
        pathname: 'localhost/',
        search: '',
      },
    ],
    domains: ['localhost'], // Add this line
  },
};

export default nextConfig;