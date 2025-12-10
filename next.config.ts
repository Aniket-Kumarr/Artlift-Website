import type { NextConfig } from "next";
import { resolve } from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ['stripe'],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
