'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTranslations } from "@/app/[locale]/utils/useTranslations";
type Plan = {
    name: string;
    price: string;
    includes: string;
    rooms?: string;
    size?: string;
    area?: string;
};
export default function PlansTabs() {
    const { locale } = useParams();
    const t = useTranslations(locale as string);

    const tabs = t('tabs') as unknown as { key: string; label: string }[];
    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        if (tabs?.length > 0) {
            setActiveTab(tabs[0].key);
        }
    }, [tabs]);

    const renderCards = (plans: Plan[], type: string) => {
        if (!plans) return null;

        return (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {plans.map((plan, index) => (
                    <div key={index} className="rounded-2xl border shadow-sm divide-y">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold">{plan.name}</h3>
                            <p className="mt-2 text-gray-700">
                                {type === 'apartment' && (locale === 'ar' ? `عدد الغرف: ${plan.rooms}` : `Rooms: ${plan.rooms}`)}
                                {type === 'villa' && (locale === 'ar' ? `المساحة: ${plan.size}` : `Size: ${plan.size}`)}
                                {type === 'office' && (locale === 'ar' ? `المساحة: ${plan.area}` : `Area: ${plan.area}`)}
                            </p>
                            <p className="mt-2">
                                <strong className="text-2xl">{plan.price}</strong>
                                <span className="text-sm text-gray-600"> {t('month')}</span>
                            </p>
                            <a href="#" className="mt-4 inline-block bg-[#150F3B] text-white py-2 px-4 rounded-md">
                                {t('getStarted')}
                            </a>
                        </div>
                        <div className="p-6">
                            <p className="font-medium">{t('includes')}</p>
                            <ul className="mt-2 space-y-2 text-sm">
                                {plan.includes.split('+').map((item: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-[#150F3B]">✓</span>
                                        <span>{item.trim()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    if (!tabs || !activeTab) return null;

    const currentPlans = t(activeTab) as unknown as Plan[];

    return (
        <section className="max-w-7xl mx-auto py-12 px-4">
            <div className="flex flex-wrap gap-2 justify-center mb-10">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                            tab.key === activeTab ? 'bg-[#150F3B] text-white' : 'bg-gray-100 text-gray-800'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {renderCards(currentPlans, activeTab)}
        </section>
    );
}
