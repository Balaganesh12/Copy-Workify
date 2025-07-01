import type { NextConfig } from 'next';
import path from 'path';

// Use 'build' folder only when running husky:buildcheck
const script = process.env.npm_lifecycle_event;
const isHuskyCheck = script === 'husky:buildcheck';

const nextConfig: NextConfig = {
  distDir: isHuskyCheck ? 'build' : '.next', // Use `.next` for Vercel, `build` locally
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'dashboard.codeparrot.ai' }],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    additionalData: `@use "variables.scss" as vars;`, // injects global SCSS variables into every file
  },
};

export default nextConfig;
