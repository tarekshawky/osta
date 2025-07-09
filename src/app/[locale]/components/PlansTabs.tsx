'use client';

import { useEffect, useState } from 'react';
import {useTranslations} from "@/app/[locale]/utils/useTranslations";
import Link from "next/link";

type Plan = {
    name: string;
    price: string;
    includes: string;
    rooms?: string;
    size?: string;
    area?: string;
};

export default function PlansTabs({ lang }: { lang: string }) {
    const t = useTranslations(lang);

    const tabs = t('tabs') as unknown as { key: string; label: string }[];
    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        if (tabs?.length > 0 && activeTab === '') {
            setActiveTab(tabs[0].key);
        }
    }, [tabs, activeTab]);

    const currentPlans = t(activeTab) as unknown as Plan[];

    if (!tabs || !activeTab || !currentPlans) return <div>Loading...</div>;

    return (
        <div>
            <div className="flex gap-4 mb-6 items-center justify-center">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-4 py-2 ${activeTab === tab.key ? 'bg-black text-white' : 'bg-gray-200'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8 px-4">
                {currentPlans
                    .filter(
                        (plan): plan is Plan =>
                            plan !== null &&
                            typeof plan === 'object' &&
                            'name' in plan &&
                            'price' in plan &&
                            'includes' in plan
                    )
                    .map((plan, idx) => (
                        <div
                            key={idx}
                            className="border p-4 rounded py-8 flex flex-col gap-4 shadow-sm"
                        >
                            <h3 className="text-lg font-bold">{plan.name}</h3>
                            <p className="text-gray-700 font-medium">{plan.price}</p>
                            <p className="text-sm text-gray-600">{plan.includes}</p>

                            {plan.area && (
                                <p className="text-sm text-gray-500">
                                    {plan.area}
                                </p>
                            )}
                            {plan.rooms && (
                                <p className="text-sm text-gray-500">
                                    {plan.rooms}
                                </p>
                            )}
                            {plan.size && (
                                <p className="text-sm text-gray-500">
                                    {plan.size}
                                </p>
                            )}

                            <Link
                                href="tel:+971568676036"
                                className="bg-[#FF9803] text-white hover:opacity-90 font-bold px-8 py-2 rounded-md text-center mt-auto"
                            >
                                {String(t('contactNow'))}
                            </Link>
                        </div>
                    ))}

            </div>
        </div>
    );
}
