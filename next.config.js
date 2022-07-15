/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const images = {
  domains: ['reqres.in']
}

module.exports = {
  nextConfig,
  images
}
