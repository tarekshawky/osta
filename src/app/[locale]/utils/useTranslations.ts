'use client';

import i18next from 'i18next';
import resources from '@/i18n/resources'; // your JSON translation object

export function useTranslations(locale: string) {
    if (!i18next.isInitialized) {
        i18next.init({
            lng: locale,
            fallbackLng: 'en',
            resources,
            interpolation: { escapeValue: false },
        });
    } else {
        i18next.changeLanguage(locale);
    }

    return (key: string) => i18next.t(key);
}
