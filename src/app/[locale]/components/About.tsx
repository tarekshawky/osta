'use client';

import { useTranslations } from '../utils/useTranslations';
import Image from "next/image";
import img from "../../../../public/osta-services.jpg"
export default function About({ lang }: { lang: string }) {
    const t = useTranslations(lang);
    return (
        <section className="container mx-auto py-12 px-4">
            <div className="pb-8">
                <h2 className="text-center text-4xl font-bold secondary">{t('aboutHeading')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl secondary font-bold pb-4 capitalize">{t('aboutTitle')}</h3>
                    <p className="text-md">{t('aboutDesc')}</p>
                    <h3 className="text-3xl secondary font-bold pb-4 capitalize">{t('aboutTitle2')}</h3>
                    <p className="text-md">{t('aboutDesc2')}</p>
                    <div className="mt-8">
                        <a className="btn-primary" href="tel:+971568676036">{t('contactNow')}</a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={img} alt="about us" width={400} height={400} className="w-full"/>
                </div>
            </div>
        </section>
    );
}
