/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.it',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
