import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';
import config from './config';

i18n
    .use(initReactI18next)
    .init({
        ...config,
        lng: 'en',
        resources: {
            en: { translation: en },
            ar: { translation: ar },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
