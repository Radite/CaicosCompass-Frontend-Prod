/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'api.caicoscompass.com',
      'localhost'
    ],
  },
  // Important for Netlify
  output: 'standalone',
}

module.exports = nextConfig