/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  serverRuntimeConfig: {
    secret: "pepe123", // replace with own secret for validating jwt tokens,
    mongoDbConnection: process.env.MONGODB_URI,
    smtp: {
      username: process.env.SMTP_USERNAME,
      password: process.env.SMTP_PASSWORD,
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT
    },
    postulation: {
      fromEmail: process.env.POSTULATION_EMAIL_FROM,
      toEmail: process.env.POSTULATION_EMAIL_TO
    }
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api' // development api
      : process.env.NEXT_PUBLIC_API_URL // production api
  }
};

module.exports = nextConfig;
