/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/wydarzenia',
        destination: '/events',
        permanent: true,
      }
    ];
  },
}

module.exports = nextConfig
