import type { NextConfig } from "next";

const repo = process.env.NEXT_PUBLIC_REPO_NAME || "Portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
