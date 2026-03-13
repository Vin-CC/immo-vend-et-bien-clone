/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.immovendetbien.com' },
      { protocol: 'https', hostname: 'lottie.host' },
      { protocol: 'https', hostname: 'fonts.cdnfonts.com' },
    ],
  },
};

module.exports = nextConfig;
