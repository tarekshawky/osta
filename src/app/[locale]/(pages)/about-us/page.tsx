import { Locale } from '@/lib/i18n';
import { getT } from '@/lib/getServerTranslation';

export default async function AboutUsPage(props: { params: Promise<{ locale: Locale }> }) {
    const params = await props.params;
    const t = await getT(params.locale);

    return (
        <section className="container mx-auto px-4 py-28">
            <h1 className="text-4xl font-bold mb-4">{t("aboutHeading")}</h1>
            <p className="text-lg">{t("aboutTitle")}</p>
            <p className="text-lg">{t("aboutDesc")}</p>
            <p className="text-lg">{t("aboutDesc2")}</p>
        </section>
    );
}

export function generateStaticParams(): { locale: Locale }[] {
    return (['en', 'ar'] as Locale[]).map(locale => ({ locale }));
}
