'use client';

import { useTranslations } from '../utils/useTranslations';

export default function Hero({ lang }: { lang: string }) {
    const t = useTranslations(lang);
    return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-prose text-center">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-[3rem] dark:text-white">
                    {t('heroTitle')}
                </h1>

                <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                    accusamus impedit minima harum corporis iusto.
                </p>

                <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                    <a
                        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                        href="#"
                    >
                        Get Started
                    </a>

                    <a
                        className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                        href="#"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
}
