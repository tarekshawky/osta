'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const newLocale = currentLocale === 'en' ? 'ar' : 'en';

        // Replace locale in the current pathname
        const segments = pathname.split('/');
        segments[1] = newLocale;

        const newPath = segments.join('/');
        router.push(newPath);
    };

    return (
        <button
            onClick={toggleLocale}
            className="text-sm font-medium hover:underline"
        >
            {currentLocale === 'en' ? 'العربية' : 'English'}
        </button>
    );
}

