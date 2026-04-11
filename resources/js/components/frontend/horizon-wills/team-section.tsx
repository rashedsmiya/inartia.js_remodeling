
import { Link } from '@inertiajs/react';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';



export function TeamSection() {
    return (
        <>
        <section className="lg:py-20 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="font-sf-pro font-bold text-gray-900 text-3xl md:text-4xl xl:text-5xl">Remodeling Options</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500 font-inter font-normal text-lg md:text-xl">
                From minor updates to complete transformations, we handle it all.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col sm:flex-row gap-6 items-start p-8 md:p-10 bg-gray-50 rounded-2xl border border-transparent hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                <img alt="Shower icon" src="https://drorange.maktechlaravel.cloud/storage/images/remodeling_option_1775273412_RVNWPRyU.png" className="w-full h-full object-contain" />
                </div>
                <div>
                <h3 className="font-inter font-bold text-gray-900 text-2xl mb-2">Tub to Shower Conversion</h3>
                <p className="font-inter font-normal text-gray-600 text-base leading-relaxed">
                    Replace your old bathtub with a modern, accessible walk-in shower. Perfect for improving safety and creating more space.
                </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start p-8 md:p-10 bg-gray-50 rounded-2xl border border-transparent hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                <img alt="Remodel icon" src="https://drorange.maktechlaravel.cloud/storage/images/remodeling_option_1775273424_5EzUuWo7.png" className="w-full h-full object-contain" />
                </div>
                <div>
                <h3 className="font-inter font-bold text-gray-900 text-2xl mb-2">Complete Remodel</h3>
                <p className="font-inter font-normal text-gray-600 text-base leading-relaxed">
                    Full bathroom transformation including flooring, walls, fixtures, and lighting. Start fresh with a brand new bathroom.
                </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start p-8 md:p-10 bg-gray-50 rounded-2xl border border-transparent hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                <img alt="Vanity icon" src="https://drorange.maktechlaravel.cloud/storage/images/remodeling_option_1775273434_REzhRd6c.png" className="w-full h-full object-contain" />
                </div>
                <div>
                <h3 className="font-inter font-bold text-gray-900 text-2xl mb-2">Vanity & Fixture Upgrade</h3>
                <p className="font-inter font-normal text-gray-600 text-base leading-relaxed">
                    Update your bathroom with new vanities, sinks, toilets, and faucets without the need for a full teardown.
                </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start p-8 md:p-10 bg-gray-50 rounded-2xl border border-transparent hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                <img alt="Tile icon" src="https://drorange.maktechlaravel.cloud/storage/images/remodeling_option_1775273442_WrGIIH5U.png" className="w-full h-full object-contain" />
                </div>
                <div>
                <h3 className="font-inter font-bold text-gray-900 text-2xl mb-2">Tile Installation</h3>
                <p className="font-inter font-normal text-gray-600 text-base leading-relaxed">
                    Beautiful tile work for floors, shower walls, and backsplashes. Choose from countless styles and patterns.
                </p>
                </div>
            </div>

            </div>
        </div>
        </section>

        <section className="w-full bg-blue-600 lg:py-24 py-12 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">

            <div className="mb-16">
            <h2 className="font-sf-pro font-bold text-white text-3xl md:text-4xl xl:text-5xl mb-4">
                Why Choose BathPro Remodeling?
            </h2>
            <p className="mx-auto max-w-2xl text-blue-100 font-inter font-normal text-lg md:text-xl opacity-90">
                Professional service, quality craftsmanship, and customer satisfaction guaranteed.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

            <div className="group">
                <div className="mb-6 mx-auto flex items-center justify-center w-20 h-20 bg-white/10 rounded-3xl shadow-xl backdrop-blur-sm border border-white/20 transition-transform group-hover:-translate-y-2 duration-300">
                <img
                    alt="Licensed icon"
                    className="h-10 w-10 object-contain filter brightness-0 invert"
                    src="https://drorange.maktechlaravel.cloud/storage/images/remodeling_why_choose_1775273531_kG7LTBsp.png"
                />
                </div>
                <h3 className="font-inter font-bold text-white text-2xl mb-3">Licensed & Insured</h3>
                <p className="font-inter font-normal text-blue-50 text-base leading-relaxed max-w-xs mx-auto opacity-80">
                Fully licensed contractors with comprehensive insurance for your total protection.
                </p>
            </div>

            <div className="group">
                <div className="mb-6 mx-auto flex items-center justify-center w-20 h-20 bg-white/10 rounded-3xl shadow-xl backdrop-blur-sm border border-white/20 transition-transform group-hover:-translate-y-2 duration-300">
                <img
                    alt="Fast turnaround icon"
                    className="h-10 w-10 object-contain filter brightness-0 invert"
                    src="https://drorange.maktechlaravel.cloud/storage/images/remodeling_why_choose_1775273540_SuGeYMFh.png"
                />
                </div>
                <h3 className="font-inter font-bold text-white text-2xl mb-3">Fast Turnaround</h3>
                <p className="font-inter font-normal text-blue-50 text-base leading-relaxed max-w-xs mx-auto opacity-80">
                Most bathroom remodels are completed in 5-10 days, not months.
                </p>
            </div>

            <div className="group">
                <div className="mb-6 mx-auto flex items-center justify-center w-20 h-20 bg-white/10 rounded-3xl shadow-xl backdrop-blur-sm border border-white/20 transition-transform group-hover:-translate-y-2 duration-300">
                <img
                    alt="Warranty icon"
                    className="h-10 w-10 object-contain filter brightness-0 invert"
                    src="https://drorange.maktechlaravel.cloud/storage/images/remodeling_why_choose_1775273548_ZWBMNMYH.png"
                />
                </div>
                <h3 className="font-inter font-bold text-white text-2xl mb-3">10-Year Warranty</h3>
                <p className="font-inter font-normal text-blue-50 text-base leading-relaxed max-w-xs mx-auto opacity-80">
                Industry-leading warranty on all workmanship and high-end materials.
                </p>
            </div>

            </div>
        </div>
        </section>

        <section className="lg:py-24 py-16 bg-white text-center px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
            <h2 className="font-sf-pro font-bold text-gray-900 text-3xl md:text-5xl mb-6 tracking-tight">
            Ready to Start Your Bathroom Remodel?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500 font-inter font-normal text-lg md:text-xl mb-10 leading-relaxed">
            Get a free estimate in 24 hours. Simply upload photos, select your options, and receive a detailed quote via text message.
            </p>

            <div className="mb-10">
            <a href="/free-estimate" className="inline-flex items-center gap-3 justify-center bg-blue-600 hover:bg-blue-700 text-white font-inter font-bold text-xl px-6 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-blue-200">
                Request Free Estimate
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-4">
            <span className="flex items-center gap-2 font-inter font-medium text-gray-600 text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                No obligation
            </span>
            <span className="flex items-center gap-2 font-inter font-medium text-gray-600 text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                24-hr response
            </span>
            <span className="flex items-center gap-2 font-inter font-medium text-gray-600 text-sm md:text-base">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Licensed professionals
            </span>
            </div>
        </div>
        </section>

        </>
    );
}
