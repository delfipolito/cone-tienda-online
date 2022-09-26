/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
