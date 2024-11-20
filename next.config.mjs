/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/landing-page',
  images: {
    unoptimized: true,
    domains: ["https://ovion-dev.github.io/landing-page/"],
  },
};

export default nextConfig;
