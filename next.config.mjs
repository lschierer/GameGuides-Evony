import * as path from 'path';
import mdx from '@next/mdx';

const withMDX = mdx({

});

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

export default withMDX(nextConfig, {
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  }
});
