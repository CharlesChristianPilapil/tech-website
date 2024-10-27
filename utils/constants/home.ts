type nav_links = {
    label: string;
    href: string;
}[];

export const home_constants = {
    nav_links: <nav_links>[
        {
            label: 'Feature',
            href: '/feature',
        },
        {
            label: 'Management',
            href: '/management',
        },
        {
            label: 'Client',
            href: '/client',
        },
        {
            label: 'Sales',
            href: '/sales',
        },
        {
            label: 'Blog',
            href: '/blog',
        },
    ],

    hero: {
        head: 'The CRM Platform help to Keep your team focused',
        subscript: 'Make your work easier with an ecosystem that lets all departments work properly together.',
    },

    images: {
        logo: {
            src: '/images/hero/tech-logo.svg',
            alt: 'logo'
        },
        banner: {
            src: '/images/hero/home-banner-p-130x130q80.png',
            alt: 'banner'
        },
        support_left: {
            src: '/images/hero/best-support-left.svg',
            alt: 'best support left'
        },
        support_right: {
            src: '/images/hero/best-support-right.svg',
            alt: 'best support right'
        },
        support_center: {
            src: '/images/hero/best-support-center.png',
            alt: 'best support center'
        },
        star: {
            src: '/images/hero/star.svg',
            alt: 'star'
        },
        banner_bg: {
            src: '/images/hero/banner-bg-p-130x130q80.png',
            alt: 'banner background'
        },
    }
};