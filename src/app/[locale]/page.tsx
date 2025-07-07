import Hero from "@/app/[locale]/components/Hero";
import About from "@/app/[locale]/components/About";
import Services from "@/app/[locale]/components/Services";

export const dynamic = "force-static";

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ar" }];
}

export default async function Home(props: { params: Promise<{ locale: string }> }) {
    const params = await props.params;
    const locale = params.locale;
    return (
        <main dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <Hero lang={locale} />
            <About lang={locale} />
            <Services lang={locale} />
        </main>
    );
}
