import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  /**
   * Lets the dev server (`npm run dev`) be opened from other devices / your LAN IP.
   * Without this, Next.js blocks its JavaScript for non-localhost origins and the
   * page never becomes interactive. Add your own IP if it changes.
   */
  allowedDevOrigins: ["10.17.20.157"],
};

export default nextConfig;
