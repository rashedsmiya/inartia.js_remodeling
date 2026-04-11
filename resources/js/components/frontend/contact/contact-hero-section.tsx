import React from 'react';

export function ContactHeroSection({ banner }: any) {
    return (
        <div className="bg-gray-50 text-gray-800">
            <section className="relative bg-blue-600 text-white px-4 sm:px-8 py-20 lg:py-32 overflow-hidden">

                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                <h1 className="font-sf-pro text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
                    Contact Us
                </h1>
                <p className="text-blue-100 text-xl sm:text-2xl font-normal font-inter max-w-3xl leading-relaxed">
                    Have questions about our process or pricing? We're here to help! Reach out via phone, email, or use the form below to get started.
                </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </section>
            </div>
    );
}
