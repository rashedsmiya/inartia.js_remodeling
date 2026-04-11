import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import FrontendLayout from '@/layouts/frontend-layout';
import Banner from '@/components/frontend/home/banner';

interface SiteSetting {
    site_title?: string;
}

export default function Home({banner, services}: any) {
    const {props} = usePage<{ siteSetting: SiteSetting }>();
    const siteSetting = props.siteSetting;
    return (
        <FrontendLayout>
            <Head title={siteSetting?.site_title} />            
            <Banner banner={banner} />              
        </FrontendLayout>
    );
}
