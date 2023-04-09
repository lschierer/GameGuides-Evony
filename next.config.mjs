import * as path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'avatar.vercel.sh']
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@tremor/react']
  },
  sassOptions: {
    includePaths: [path.join('./', 'styles')],
  },
  reactStrictMode: true,

};

export default nextConfig;
