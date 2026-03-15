/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://www.immovendetbien.com/principale-2/',
      },
      {
        source: '/wp-content/:path*',
        destination: 'https://www.immovendetbien.com/wp-content/:path*',
      },
      {
        source: '/wp-includes/:path*',
        destination: 'https://www.immovendetbien.com/wp-includes/:path*',
      },
      {
        source: '/wp-admin/:path*',
        destination: 'https://www.immovendetbien.com/wp-admin/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.immovendetbien.com' },
    ],
  },
};

module.exports = nextConfig;
