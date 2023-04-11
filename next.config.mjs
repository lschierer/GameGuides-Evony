import * as path from 'path';
import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ['@tremor/react']
  },
  sassOptions: {
    includePaths: [path.join('./', 'styles')],
  },
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);
