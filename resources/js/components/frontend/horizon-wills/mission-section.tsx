import { CircleCheckBig } from 'lucide-react';
import React from 'react';

import { useReveal } from '@/hooks/use-reveal';



export function MissionSection() {

    return (

        <section className="lg:py-20 py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="font-sf-pro font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl mb-2">Why Remodel Your Bathroom?
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-gray-500 font-inter font-normal text-xl mb-16">
                    A bathroom remodel is one of the best investments you can make in your home, offering both immediate enjoyment
                    and long-term value.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6   justify-center max-w-4xl mx-auto px-4">

                <div className="flex items-center justify-start gap-3 font-inter font-normal text-gray-900 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>Increase your home value by up to 70% ROI</span>
                </div>

                <div className="flex items-center justify-start gap-3 font-inter font-normal text-gray-900 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>Improve functionality and accessibility</span>
                </div>

                <div className="flex items-center justify-start gap-3 font-inter font-normal text-gray-900 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>Enhance aesthetics with modern designs</span>
                </div>

                <div className="flex items-center justify-start gap-3 font-inter font-normal text-gray-900 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>Better water efficiency and lower bills</span>
                </div>

                <div className="flex items-center justify-start gap-3 font-inter font-normal text-gray-900 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>Fix underlying plumbing issues</span>
                </div>

                <div className="flex items-center justify-start gap-3 font-inter font-normal text-gray-900 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>Create a personal retreat in your home</span>
                </div>

            </div>
            </div>
        </section>
    );
}
