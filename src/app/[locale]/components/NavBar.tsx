import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ locale }: { locale: string }) {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <div className="text-xl font-bold">
                <Link href={`/${locale}`}>MyApp</Link>
            </div>

            <div className="flex items-center gap-8">
                <Link href={`/${locale}/about`} className="hover:underline">
                    About
                </Link>
                <Link href={`/${locale}/contact`} className="hover:underline">
                    Contact
                </Link>
                <LanguageSwitcher currentLocale={locale} />
            </div>
        </nav>
    );
}
