import Hero from "@/app/[locale]/components/Hero";
import About from "@/app/[locale]/components/About";
export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ar' }];
}
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
  return (
    <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen">
      <Hero lang={locale} />
      <About lang={locale} />
    </main>
  );
}
