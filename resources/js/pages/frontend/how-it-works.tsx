import React from 'react';

import { HeroSection } from '@/components/frontend/how-it-works/hero-section';
import { HowItWorksList } from '@/components/frontend/how-it-works/how-it-works-list';
import { PreferToTalkSection } from '@/components/frontend/how-it-works/PreferToTalkSection';
import { StayInformedSection } from '@/components/frontend/how-it-works/stay-informed-section';
import { WhatIsProbateSection } from '@/components/frontend/how-it-works/what-is-probate-section';
import FrontendLayout from '@/layouts/frontend-layout';



export default function HowItWorks({howItWorks,stayInforms,faqs,banner}: any) {



    return (
        <FrontendLayout>
            <main>
                <HeroSection/>
                <HowItWorksList/>
                <WhatIsProbateSection/>
                <StayInformedSection/>
                <PreferToTalkSection  />
            </main>
        </FrontendLayout>
    );
}
