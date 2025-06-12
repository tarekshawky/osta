import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
        localeDetection: true,
    },
};

export default nextConfig;
