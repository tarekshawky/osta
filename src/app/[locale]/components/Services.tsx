'use client'
import {useTranslations} from "@/app/[locale]/utils/useTranslations";
import PlansTabs from "@/app/[locale]/components/PlansTabs";

export default function Services({ lang }: { lang: string }) {
    const t = useTranslations(lang);

    return (
        <section className="container mx-auto">
            <div className="py-8">
                <h2 className="text-center text-4xl font-bold secondary">{t('serviceTitle')}</h2>
            </div>
            <PlansTabs/>

        </section>
    )
}