import type { NextConfig } from "next";

const repo = process.env.NEXT_PUBLIC_REPO_NAME || "chaitanya-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio",
  images: { unoptimized: true }
};

export default nextConfig;
