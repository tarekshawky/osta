// import en from '../translations/en.json';
// import ar from '../translations/ar.json';
// import type { Locale } from '@/lib/i18n'; // Make sure this type exists
//
// const translations: Record<Locale, Record<string, string>> = {
//     en,
//     ar,
// };
//
// export const useTranslations = (locale: Locale) => (key: string): string => {
//     return translations[locale]?.[key] ?? key;
// };

// src/app/[locale]/utils/useTranslations.ts
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
