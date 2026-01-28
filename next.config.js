/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/anchor-hood',
  assetPrefix: '/anchor-hood/',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
}

module.exports = nextConfig

