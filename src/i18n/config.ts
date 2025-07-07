const i18nextConfig = {
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    defaultNS: 'translation',
    detection: {
        order: ['cookie', 'header', 'htmlTag'],
        caches: ['cookie'],
    },
};

export default i18nextConfig;
