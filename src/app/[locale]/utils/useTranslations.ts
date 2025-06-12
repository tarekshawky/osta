import en from '../translations/en.json';
import ar from '../translations/ar.json';

const translations: Record<string, Record<string, string>> = {
    en,
    ar,
};

export const useTranslations = (locale: string) => (key: string) =>
    translations[locale]?.[key] ?? key;
