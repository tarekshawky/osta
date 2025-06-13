import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import osta from "../../../../public/osta.jpg"
export default function Navbar({ locale }: { locale: string }) {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
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
