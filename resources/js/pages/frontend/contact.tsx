import React from 'react';

import { ContactHeroSection } from '@/components/frontend/contact/contact-hero-section';
import FrontendLayout from '@/layouts/frontend-layout';
import { ContactForm } from '@/components/frontend/contact/contact-consultation-section';
import { ContactFaqSection } from '@/components/frontend/contact/contact-faq-section';


export default function Contact({ banner, faqs }: any) {
    return (
        <FrontendLayout>
            <main className="bg-white">
                <ContactHeroSection/>
                <ContactForm  />
                <ContactFaqSection />
            </main>
        </FrontendLayout>
    );
}
