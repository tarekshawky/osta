'use client';

import { useTranslations } from '../utils/useTranslations';

export default function About({ lang }: { lang: string }) {
    const t = useTranslations(lang);
    return (
        <section className="text-center py-12 px-4">
            <p className="text-lg">{t('aboutText')}</p>
        </section>
    );
}
