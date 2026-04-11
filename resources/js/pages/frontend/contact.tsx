import React from 'react';

import { ContactForm } from '@/components/frontend/contact/contact-consultation-section';
import { ContactFaqSection } from '@/components/frontend/contact/contact-faq-section';
import { ContactHeroSection } from '@/components/frontend/contact/contact-hero-section';
import FrontendLayout from '@/layouts/frontend-layout';


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
