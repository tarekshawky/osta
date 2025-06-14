'use client';

import { useTranslations } from '../utils/useTranslations';

export default function Hero({ lang }: { lang: string }) {
    const t = useTranslations(lang);
    return (
    <section className="lg:grid lg:h-screen lg:place-content-center relative"
             style={{
                 backgroundImage: 'url(hero-section.png)',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
             }}>
        <div className="absolute bg-black opacity-70 top-0 left-0 bottom-0 right-0 z-1"></div>

        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 z-20 relative">
            <div className="mx-auto max-w-prose text-center">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 md:leading-[3.5rem] dark:text-white">
                    {t('heroTitle')}
                </h1>
                <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                    <a
                        className="btn-primary text-center"
                        href="tel:+971568676036"
                    >
                        {t('contactNow')}
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}
