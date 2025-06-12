// 'use client';
//
// import { usePathname, useRouter } from 'next/navigation';
//
// export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
//     const router = useRouter();
//     const pathname = usePathname();
//
//     const changeLocale = (newLocale: string) => {
//         const segments = pathname.split('/');
//         segments[1] = newLocale;
//         router.push(segments.join('/'));
//     };
//
//     return (
//         <div className="flex items-center gap-2">
//             <button onClick={() => changeLocale('en')} disabled={currentLocale === 'en'}>
//                 English
//             </button>
//             <button onClick={() => changeLocale('ar')} disabled={currentLocale === 'ar'}>
//                 العربية
//             </button>
//         </div>
//     );
// }

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

