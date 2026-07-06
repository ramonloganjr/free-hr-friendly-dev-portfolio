import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") ?? "";
const basePath = isGithubActions ? `/${repo}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
