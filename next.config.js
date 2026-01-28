/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/anchor-hood',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
}

module.exports = nextConfig

