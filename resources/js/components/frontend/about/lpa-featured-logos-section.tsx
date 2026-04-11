import React from 'react';

const featuredLogos = ['The Telegraph', 'Social Enterprise UK', 'Financial Times', 'Manchester Evening News'];

export function LpaFeaturedLogosSection() {
    return (
       <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <p className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-blue-700">15+</p>
                <p className="text-sm md:text-base font-medium text-gray-500 mt-2 font-inter uppercase tracking-wide">Years in Business</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <p className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-blue-700">500+</p>
                <p className="text-sm md:text-base font-medium text-gray-500 mt-2 font-inter uppercase tracking-wide">Bathrooms Completed</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <p className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-blue-700">98%</p>
                <p className="text-sm md:text-base font-medium text-gray-500 mt-2 font-inter uppercase tracking-wide">Satisfaction Rate</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <p className="text-3xl md:text-4xl xl:text-5xl font-sf-pro font-bold text-blue-700">4.9<span className="text-xl opacity-60">/5</span></p>
                <p className="text-sm md:text-base font-medium text-gray-500 mt-2 font-inter uppercase tracking-wide">Average Rating</p>
            </div>

            </div>
        </div>
        </section>
    );
}
