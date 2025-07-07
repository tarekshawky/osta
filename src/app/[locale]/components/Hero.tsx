'use client'
import { useTranslations } from '../utils/useTranslations';
import Image from "next/image";
import HeroImage from "../../../../public/hero-section.png"
import Link from "next/link";
export default function Hero({ lang }: { lang: string }) {
    const t = useTranslations(lang);
    return (
    <section className="bg-[#150F3B]">
        <div className="container mx-auto px-4 flex flex-col-reverse gap-4 lg:flex-row items-center justify-center lg:justify-between h-screen ">
            <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white md:leading-[3.5rem] lg:w-[600px]">
                    {t('heroTitle')}
                </h1>
                <div className="mt-4 flex gap-4 sm:mt-6">
                    <Link
                        className="bg-[#FF9803] text-white hover:opacity-80 font-bold px-8 py-4 rounded-md text-center"
                        href="tel:+971568676036"
                    >
                        {t('contactNow')}
                    </Link>
                </div>
            </div>
            <div>
                <Image src={HeroImage} alt="Osta Image" width={380} height={380}  className="rounded-full shadow-2xl shadow-white"/>
            </div>
        </div>
    </section>
    );
}
