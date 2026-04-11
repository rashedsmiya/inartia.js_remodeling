import React from 'react';

import { useReveal } from '@/hooks/use-reveal';

export default function FindingSupportSection() {

    return (
         <section id="estimate" className="text-white text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 bg-[#092abdd2] lg:py-20 py-10">

                {/* Heading */}
                <h2 className="font-semibold text-3xl md:text-4xl xl:text-5xl mb-4">
                Ready to Transform Your Bathroom?
                </h2>

                {/* Description */}
                <p className="mx-auto max-w-3xl text-blue-100 text-base sm:text-2xl mb-8 leading-relaxed">
                Get a free, no-obligation estimate in 24 hours. Upload photos, select your options, and we'll send you a detailed quote via text.
                </p>

                {/* CTA Button */}
                <a
                href="https://drorange.maktechlaravel.cloud/free-estimate"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold bg-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-100"
                >
                Get Your Free Estimate

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>

            </div>
        </section>
    );
}
