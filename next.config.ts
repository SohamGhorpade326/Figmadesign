/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co', 'images.pexels.com'], // Whitelist both domains
  },
}

module.exports = nextConfig