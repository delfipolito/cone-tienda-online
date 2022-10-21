/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } },
  i18n:{
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
};

module.exports = nextConfig;
