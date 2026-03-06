import { MetadataRoute } from 'next';
import { AAA_CLAN_MEMBERS } from './data/data-biodata';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aaaclan.com';

    // Static routes
    const staticRoutes = ['', '/about', '/members', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic members routes
    const memberRoutes = AAA_CLAN_MEMBERS.map((member) => ({
        url: `${baseUrl}/members/${member.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...memberRoutes];
}
