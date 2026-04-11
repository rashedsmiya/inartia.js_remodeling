import React from 'react';

export default function AboutInformation()  {
    return (
        <section className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center mb-16 text-gray-900 font-sf-pro font-bold tracking-tight">
            Our Story
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="hidden lg:block lg:col-span-1 border-l-4 border-blue-600 h-full opacity-20"></div>

            <div className="lg:col-span-11 space-y-8 text-gray-600 leading-relaxed text-lg font-inter font-normal">

            <div className="space-y-4">
                <p className="text-gray-900 font-medium text-xl">
                For over a decade, our team has partnered with homeowners to design and deliver spaces that blend function, comfort, and style.
                </p>
                <p>
                We listen first, plan meticulously, and build with precision. From kitchens to full-home renovations, we manage every detail so you enjoy a smooth experience and a stunning result.
                </p>
            </div>

            <div className="bg-blue-50/50 p-8 rounded-2xl border-l-4 border-blue-600">
                <p className="text-gray-700 italic">
                "That's why we developed our streamlined online estimate system. By combining modern technology with traditional craftsmanship, we've created a better way to remodel bathrooms."
                </p>
                <p className="mt-4">
                You can now request an estimate from the comfort of your home, track your project online, and enjoy transparent communication throughout the entire process.
                </p>
            </div>

            <p>
                Over the past <strong>15 years</strong>, we've completed more than <strong>500 bathroom remodels</strong>, earning a reputation for quality work, fair pricing, and exceptional customer service. Our team of licensed professionals treats every bathroom as if it were their own, ensuring the highest standards of workmanship on every project.
            </p>

            </div>
        </div>
        </section>
    );
}
