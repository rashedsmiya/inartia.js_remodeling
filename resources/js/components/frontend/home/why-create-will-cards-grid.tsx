
import { Link } from '@inertiajs/react';
import { CheckIcon } from "lucide-react";
import { PoundSterling } from 'lucide-react';
import React from 'react';


export default function WhyCreateWillCardsGrid({ services }: any) {
    return (
        <section id="services" className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-20 bg-gray-50 rounded-2xl">

                {/* Header */}
                <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-900">
                    Our Services
                </h2>
                <p className="mt-4 max-w-xl mx-auto text-gray-500 text-lg sm:text-xl">
                    From complete renovations to targeted upgrades, we handle every aspect of your bathroom transformation.
                </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex justify-center mb-4">
                    <img
                        src="https://drorange.maktechlaravel.cloud/storage/images/service_1775273211_D1khI7Ad.png"
                        alt="Complete Bathroom Remodeling"
                        className="w-16 h-16 object-contain"
                    />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Complete Bathroom Remodeling
                    </h3>
                    <p className="text-gray-500 text-base">
                    Full bathroom renovations from floor to ceiling with expert craftsmanship.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex justify-center mb-4">
                    <img
                        src="https://drorange.maktechlaravel.cloud/storage/images/service_1775273222_ZZXWy6u3.png"
                        alt="Tub to Shower Conversion"
                        className="w-16 h-16 object-contain"
                    />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tub to Shower Conversion
                    </h3>
                    <p className="text-gray-500 text-base">
                    Transform your old tub into a modern, accessible shower.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex justify-center mb-4">
                    <img
                        src="https://drorange.maktechlaravel.cloud/storage/images/service_1775273232_sgfnoQp7.png"
                        alt="Vanity & Fixture Upgrades"
                        className="w-16 h-16 object-contain"
                    />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Vanity &amp; Fixture Upgrades
                    </h3>
                    <p className="text-gray-500 text-base">
                    New vanities, toilets, sinks, and fixtures to match your style.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex justify-center mb-4">
                    <img
                        src="https://drorange.maktechlaravel.cloud/storage/images/service_1775273243_cD5pi0sl.png"
                        alt="Tile & Flooring Installation"
                        className="w-16 h-16 object-contain"
                    />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tile &amp; Flooring Installation
                    </h3>
                    <p className="text-gray-500 text-base">
                    Beautiful tile work and durable flooring options.
                    </p>
                </div>

                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                <a
                    href="https://drorange.maktechlaravel.cloud/bathroom"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-base transition-all duration-300 hover:gap-3"
                >
                    Learn More About Our Services
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
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

        </div>
        </section>
    );}
