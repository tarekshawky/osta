import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import en from "./translations/en.json";
import ar from "./translations/ar.json";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = locale === "ar" ? ar : en;
    return { title: t.title, description: t.description };
}

export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar locale={locale} />
        {children}
        </body>
        </html>
    );
}
