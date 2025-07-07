// src/lib/getServerTranslation.ts
import i18next from 'i18next';
import path from 'path';
import fs from 'fs/promises';
import i18nConfig from '@/i18n/config';

export async function getT(locale: string) {
    const filePath = path.resolve(process.cwd(), `src/i18n/locales/${locale}.json`);
    const file = await fs.readFile(filePath, 'utf-8');
    const translation = JSON.parse(file);

    const instance = i18next.createInstance(); // create a fresh instance each time (to avoid conflicts)

    await instance.init({
        ...i18nConfig,
        lng: locale,
        resources: {
            [locale]: {
                translation,
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

    return instance.t.bind(instance);
}
