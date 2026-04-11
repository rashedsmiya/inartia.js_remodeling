import { Link } from '@inertiajs/react';
import React from 'react';



export function AboutHeroSection({banner}: any ) {
    return (
        <section className="bg-white text-gray-800 antialiased overflow-hidden">
            <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white text-center py-20 lg:py-28 px-6">
                <div className="max-w-4xl mx-auto">

                <h1 className="text-3xl md:text-3xl lg:text-4xl font-sf-pro font-bold mb-6 tracking-tight leading-tight">
                    Crafting spaces that feel like home
                </h1>

                <p className="text-blue-50 text-xl md:text-2xl font-inter font-normal mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
                    Tailored remodeling guided by your vision and lifestyle.
                </p>

                <div className="flex flex-col items-center gap-8">
                    <p className="text-blue-100/80 text-lg font-inter max-w-xl leading-relaxed">
                    From concept to completion, our team delivers detail-driven design and construction you can trust.
                    </p>


                </div>

                </div>
            </div>
        </section>
    );
}
