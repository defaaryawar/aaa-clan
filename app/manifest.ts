import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'AAA Clan',
        short_name: 'AAA Clan',
        description: 'AAA Clan is a collective of streamers, gamers, and creators who collaborate, stream, and entertain millions through live content, gaming culture, and digital creativity. Led by Reza Arap.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fafaf8',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
