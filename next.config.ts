import type { NextConfig } from "next";

// Check if the project is building inside a GitHub Actions environment
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Replace 'Aethrion' with your exact, case-sensitive GitHub repository name
  basePath: isProd ? "/Aethrion" : "", 
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
