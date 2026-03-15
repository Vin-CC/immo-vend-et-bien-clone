/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/original.html',
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.immovendetbien.com' },
      { protocol: 'https', hostname: 'lottie.host' },
      { protocol: 'https', hostname: 'fonts.cdnfonts.com' },
    ],
  },
};

module.exports = nextConfig;
