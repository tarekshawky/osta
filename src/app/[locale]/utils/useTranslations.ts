import en from '../translations/en.json';
import ar from '../translations/ar.json';

const translations: Record<string, Record<string, unknown>> = {
    en,
    ar,
};

export const useTranslations = (locale: string) => (key: string): string =>
    <string>translations[locale]?.[key] ?? key;
