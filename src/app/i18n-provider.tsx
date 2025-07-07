'use client';

import { ReactNode, useEffect } from 'react';
import i18n from '@/i18n';

export default function I18nProvider({
                                         children,
                                         locale,
                                     }: {
    children: ReactNode;
    locale: string;
}) {
    useEffect(() => {
        i18n.changeLanguage(locale);  // <-- change language on mount or locale change
    }, [locale]);

    return <>{children}</>;
}
