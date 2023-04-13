import * as path from 'path';
import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  experimental: {
    typedRoutes: true,
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join('./', 'styles')],
  },

};

export default withContentlayer(nextConfig);
