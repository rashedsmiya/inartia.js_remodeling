import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

export function PreferToTalkSection() {



    return (
        <>

            <section className="bg-gray-50 py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-gray-900 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 text-gray-500 font-inter text-lg">
                    Everything you need to know about our modern remodeling process.
                </p>
                </div>

                <div className="space-y-4">

                <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300">
                    <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 font-inter">
                        How accurate are the online estimates?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path>
                        </svg>
                    </span>
                    </button>
                    <div className="px-6 pb-6">
                    <p className="text-base font-normal text-gray-600 font-inter leading-relaxed border-t border-gray-100 pt-4">
                        Our estimates are very accurate because they're based on your actual photos and specific selections. We review every detail before sending your quote. If any adjustments are needed after an in-person visit, we'll communicate them clearly before starting work.
                    </p>
                    </div>
                </div>

                <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300">
                    <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 font-inter">
                        What if I need to add or change something?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12M6 12h12"></path>
                        </svg>
                    </span>
                    </button>
                </div>

                <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300">
                    <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 font-inter">
                        What photos should I take?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12M6 12h12"></path>
                        </svg>
                    </span>
                    </button>
                </div>

                </div>
            </div>
            </section>
            
            <section className="bg-blue-600 lg:py-20 py-12 text-white text-center w-full">
                <div className="max-w-4xl mx-auto px-8">

                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-white mb-4 tracking-tight">
                    Ready to Get Started?
                    </h2>

                    <p className="text-blue-50/90 text-lg md:text-xl font-normal font-inter leading-relaxed mb-10 max-w-2xl mx-auto">
                    Request your free estimate now and receive your detailed quote within 24 hours. No strings attached.
                    </p>

                    <a href="/free-estimate" className="inline-flex items-center gap-3 justify-center bg-white text-blue-600 hover:bg-blue-50 font-inter font-medium text-md md:text-xl px-4 py-3 rounded-full transition-all hover:scale-105 shadow-xl">
                    Start Your Bathroom Remodel
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    </a>
                </div>
            </section>
        </>

    );
}
