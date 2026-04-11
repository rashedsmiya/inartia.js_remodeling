import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';


export function HorizonHeroSection() {
    return (
       <section className="hero bg-blue-800 overflow-hidden"> <div className="relative z-10 w-full max-w-7xl mx-auto lg:py-16 py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="flex-1 text-center md:text-left">
        <h1 className="text-white font-sf-pro font-bold leading-tight mb-5 text-4xl md:text-5xl xl:text-6xl">
            Professional Bathroom Remodeling
        </h1>
        <p className="text-white/80 mb-9 leading-relaxed text-lg sm:text-xl font-inter font-normal max-w-md mx-auto md:mx-0">
            Transform your outdated bathroom into a beautiful, functional space. Get a free estimate in 24 hours with our simple online process.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
            <a className="btn-primary inline-flex items-center justify-center gap-2 font-inter w-full sm:w-auto font-bold text-lg px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors" href="/bathroom">
            Get Free Estimate
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            </a>
            <a className="btn-outline-white inline-flex items-center justify-center gap-2 w-full sm:w-auto font-inter font-bold text-lg px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all" href="https://drorange.maktechlaravel.cloud/how-it-works">
            How It Works
            </a>
        </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-5/12">
        <div className="photo-card overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <img
            alt="Modern luxury bathroom"
            src="https://drorange.maktechlaravel.cloud/storage/images/remodeling_hero_1775273283_AgEwzeFN.jpg"
            className="w-full h-auto object-cover aspect-[4/3] md:aspect-square lg:aspect-[4/5]"
            />
        </div>
        </div>
  </div>
</section>
    );
}
