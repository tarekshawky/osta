import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import type { Locale } from "@/lib/i18n";
import I18nProvider from "@/app/i18n-provider";
import { getT } from '@/lib/getServerTranslation';

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
    const t = await getT(params.locale);
    return {
        title: t("title"),
        description: t("description"),
        keywords: t("metaKeywords"),
    };
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
    const resolvedParams = await params;  // <-- await here
    const locale = resolvedParams.locale;

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider locale={locale}>
            <NavBar locale={locale} />
            {children}
        </I18nProvider>
        <Footer />
        </body>
        </html>
    );
}
