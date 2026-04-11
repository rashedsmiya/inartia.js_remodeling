import { Link } from '@inertiajs/react';
import React from 'react';

export function LpaSupportSection() {
    return (
       <section className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl my-12">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white text-center py-16 lg:py-24 px-6 sm:px-12">
            <div className="max-w-2xl mx-auto">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-white mb-6 tracking-tight">
                Ready to Work With Us?
            </h2>

            <p className="text-blue-50/90 mb-10 font-inter font-normal text-lg md:text-xl leading-relaxed">
                Join hundreds of satisfied homeowners who have transformed their bathrooms with <strong>BathPro Remodeling</strong>. Your dream bathroom is just a few clicks away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://drorange.maktechlaravel.cloud/free-estimate"
                className="w-full sm:w-auto bg-white text-blue-700 font-inter font-bold px-10 py-4 rounded-full hover:bg-blue-50 hover:scale-105 transition-all text-base shadow-xl">
                Get Free Estimate
                </a>

                <a href="https://drorange.maktechlaravel.cloud/contact"
                className="w-full sm:w-auto border-2 border-white/50 text-white font-inter font-bold px-10 py-4 rounded-full hover:bg-white hover:text-blue-700 hover:border-white transition-all text-base">
                Contact Us
                </a>
            </div>

            </div>
        </div>
        </section>
    );
}
