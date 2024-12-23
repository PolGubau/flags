import createMdx from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optionally, add any other Next.js config below
};

const withMdx = createMdx({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMdx(nextConfig);
