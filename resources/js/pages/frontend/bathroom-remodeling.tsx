import React from 'react';

import { HorizonHeroSection } from '@/components/frontend/horizon-wills/hero-section';
import FrontendLayout from '@/layouts/frontend-layout';
import { MissionSection } from '@/components/frontend/horizon-wills/mission-section';
import { JobSection } from '@/components/frontend/horizon-wills/job-section';
import { TeamSection } from '@/components/frontend/horizon-wills/team-section';

export default function BathroomRemodeling({banner}: any) {
    return (
        <FrontendLayout>
            <main className="flex flex-col">
                <HorizonHeroSection />
                <MissionSection />
                <JobSection />
                <TeamSection />
            </main>
        </FrontendLayout>
    );
}
