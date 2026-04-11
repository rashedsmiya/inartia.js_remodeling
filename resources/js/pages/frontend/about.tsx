import React from 'react';

import { AboutHeroSection } from '@/components/frontend/about/about-hero-section';
import { Head } from '@inertiajs/react';
import FrontendLayout from '@/layouts/frontend-layout';
import AboutInformation from '@/components/frontend/about/about-information';
import { LpaFeaturedLogosSection } from '@/components/frontend/about/lpa-featured-logos-section';
import { ServiceAreaSection } from '@/components/frontend/about/service-area-section';
import { LicenseSection } from '@/components/frontend/about/license-section';
import { LpaSupportSection } from '@/components/frontend/about/lpa-support-section';

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
