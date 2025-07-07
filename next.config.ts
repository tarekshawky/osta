const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    // i18n: {
    //     locales: ['en', 'ar'],
    //     defaultLocale: 'en',
    //     localeDetection: true,
    // },
};

module.exports = nextConfig;
