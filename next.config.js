/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/team/',
        destination: '/about',
      },
    ];
  },
};

module.exports = nextConfig;
