/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/landing-page',
  images: {
    unoptimized: true,
    domains: ["ovion-dev.github.io"],
  },
};

export default nextConfig;
