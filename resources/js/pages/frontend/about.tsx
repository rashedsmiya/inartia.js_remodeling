
import { Head } from '@inertiajs/react';
import React from 'react';

import { AboutHeroSection } from '@/components/frontend/about/about-hero-section';
import AboutInformation from '@/components/frontend/about/about-information';
import { LicenseSection } from '@/components/frontend/about/license-section';
import { LpaFeaturedLogosSection } from '@/components/frontend/about/lpa-featured-logos-section';
import { LpaSupportSection } from '@/components/frontend/about/lpa-support-section';
import { ServiceAreaSection } from '@/components/frontend/about/service-area-section';
import FrontendLayout from '@/layouts/frontend-layout';

export default function About({banner, about, aboutLicense, aboutServiceArea, aboutWhyChoose}: any) {
    return (
        <FrontendLayout>
            <Head title={'About Us'} />
            <main >
                <AboutHeroSection />
                <AboutInformation />
                <LpaFeaturedLogosSection />
                <ServiceAreaSection />
                <LicenseSection />
                <ServiceAreaSection />
                <LpaSupportSection />

            </main>
        </FrontendLayout>
    );
}
