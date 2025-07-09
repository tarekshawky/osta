'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import osta from "../../../../public/osta.jpg"
import { useTranslations } from '../utils/useTranslations';
export default function Navbar({ locale }: { locale: string }) {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const t = useTranslations(locale);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const closeMenu = () => setOpenMenu(false);
    return (
        <header>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-200 backdrop-blur-2xl ${
                scrolled ? 'bg-white text-[#150F3B] shadow' : 'bg-[#150F3B] text-white'
            }`}>
                <div className="container mx-auto flex justify-between items-center px-6 py-4">
                    <div className="text-xl font-bold">
                        <Link href={`/${locale}`} className="flex items-center gap-4">
                            <Image src={osta} alt="Osta Logo" width={56} height={56} />
                            <div>
                                <h2 className="text-xs">OSTA Services | خدمات آسطا</h2>
                                <p className="text-xs hidden md:block">صيانة منزلية متكاملة واحترافية بأسعار تنافسية وسرعة تنفيذ عالية في عجمان ودبي والشارقة</p>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href={`/${locale}/about-us`} className="hover:text-[#FF9803]">
                            {String(t('aboutHeading'))}
                        </Link>
                        <LanguageSwitcher currentLocale={locale} />
                        <Link href={`/${locale}/contact-us`} className="bg-[#FF9803] hover:opacity-80 px-4 py-2 rounded-md text-white font-bold">
                            {String(t('contactUs'))}
                        </Link>
                    </div>
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setOpenMenu((p) => !p)}
                        className="md:hidden"
                    >
                        {openMenu ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>
            {/* Slide‑down mobile panel */}
            <div
                className={`fixed inset-0 z-40 flex flex-col items-center gap-8 pt-[10rem] pb-8 transition-transform duration-300 ease-out md:hidden bg-[#150F3B] text-white
                ${openMenu ? 'translate-y-0' : '-translate-y-full'}
                 `}
            >
                <Link href={`/${locale}/about-us`} onClick={closeMenu} className="text-lg font-semibold hover:text-[#FF9803]">
                    {String(t('aboutHeading'))}
                </Link>
                <LanguageSwitcher currentLocale={locale} />
                <Link
                    href={`/${locale}/contact`}
                    onClick={closeMenu}
                    className="rounded-md bg-[#FF9803] px-6 py-3 font-bold text-white hover:opacity-80"
                >
                    {String(t('contactUs'))}
                </Link>
            </div>
        </header>



    );
}
