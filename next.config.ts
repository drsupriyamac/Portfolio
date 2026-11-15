import type { NextConfig } from "next";

// Static export: the site builds to plain HTML/CSS/JS in /out and can be
// hosted on Vercel, Netlify, GitHub Pages or any static host.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
