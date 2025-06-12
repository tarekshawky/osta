import type { NextConfig } from "next";

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: false, // or true in production
            },
        ];
    },
};

export default nextConfig;
