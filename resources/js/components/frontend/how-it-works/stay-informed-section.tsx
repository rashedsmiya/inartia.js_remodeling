import React from 'react';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';


export function StayInformedSection() {

    return (
        <section className="bg-white py-12 lg:py-20 border-t border-gray-50">
        <div className="mx-auto max-w-7xl px-4">
            <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-inter tracking-tight">
                Stay Informed Every Step
            </h2>
            <p className="text-lg md:text-xl font-normal text-gray-500 font-inter max-w-2xl mx-auto">
                Our digital platform keeps you updated throughout your entire bathroom remodel journey.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="group flex flex-col items-center text-center md:items-start md:text-left border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                <img alt="Project Tracking" className="h-full w-full object-contain" src="https://drorange.maktechlaravel.cloud/storage/images/stay_informed_1775273677_a86yf07j.png" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900 font-inter">Track Your Project</h4>
                <p className="text-base font-normal text-gray-600 font-inter leading-relaxed">
                Use your unique order ID to check status anytime, view progress updates, and see your current stage.
                </p>
            </div>

            <div className="group flex flex-col items-center text-center md:items-start md:text-left border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                <img alt="Reminders" className="h-full w-full object-contain" src="https://drorange.maktechlaravel.cloud/storage/images/stay_informed_1775273683_Wg3fevyE.png" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900 font-inter">Action Reminders</h4>
                <p className="text-base font-normal text-gray-600 font-inter leading-relaxed">
                If we need additional photos, you'll see clear alerts on your dashboard with easy upload options.
                </p>
            </div>

            <div className="group flex flex-col items-center text-center md:items-start md:text-left border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                <img alt="SMS" className="h-full w-full object-contain" src="https://drorange.maktechlaravel.cloud/storage/images/stay_informed_1775273691_LzHV7pLe.png" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900 font-inter">SMS Notifications</h4>
                <p className="text-base font-normal text-gray-600 font-inter leading-relaxed">
                Get real-time text updates at key milestones: estimate sent, work scheduled, and project completion.
                </p>
            </div>

            <div className="group flex flex-col items-center text-center md:items-start md:text-left border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                <img alt="Transparency" className="h-full w-full object-contain" src="https://drorange.maktechlaravel.cloud/storage/images/stay_informed_1775273699_oZNUXveJ.png" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900 font-inter">Zero Surprises</h4>
                <p className="text-base font-normal text-gray-600 font-inter leading-relaxed">
                Detailed estimates include all labor and materials. What we quote is what you pay—no hidden fees.
                </p>
            </div>

            </div>
        </div>
        </section>
    );
}
