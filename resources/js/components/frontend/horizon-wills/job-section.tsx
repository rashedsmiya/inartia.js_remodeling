import { CircleCheckBig } from "lucide-react";


export function JobSection() {

    return (
        <section className="lg:py-20 py-10 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="font-sf-pro font-bold text-gray-900 text-3xl md:text-4xl xl:text-5xl">What's Included</h2>
            <p className="mx-auto mt-4 text-gray-500 font-inter font-normal text-lg md:text-xl max-w-2xl">
                Everything you need for a complete, stress-free bathroom transformation.
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                </svg>
                </div>
                <h3 className="font-inter font-bold text-gray-900 text-xl mb-2">Design Consultation</h3>
                <p className="font-inter font-normal text-gray-600 text-base leading-relaxed">
                Work with our experts to plan your perfect bathroom layout and style.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                </svg>
                </div>
                <h3 className   ="font-inter font-bold text-gray-900 text-xl mb-2">Quality Materials</h3>
                <p className="font-inter font-normal text-gray-600 text-base leading-relaxed">
                Choose from premium fixtures, tiles, and sustainable finishes that last.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                </svg>
                </div>
                <h3 className="font-inter font-bold text-gray-900 text-xl mb-2">Expert Installation</h3>
                <p className="font-inter font-normal text-gray-600 text-base leading-relaxed">
                Our licensed professionals handle every detail from plumbing to electrical.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className    ="text-blue-600">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                </svg>
                </div>
                <h3 className="font-inter font-bold text-gray-900 text-xl mb-2">Project Management</h3>
                <p className="font-inter font-normal text-gray-600 text-base leading-relaxed">
                A dedicated manager ensures your project stays on schedule and budget.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className    ="text-blue-600">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                </svg>
                </div>
                <h3 className="font-inter font-bold text-gray-900 text-xl mb-2">Live Progress</h3>
                <p className        ="font-inter font-normal text-gray-600 text-base leading-relaxed">
                Track milestones and view photo updates through our online portal.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className    ="text-blue-600">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                </svg>
                </div>
                <h3 className="font-inter font-bold text-gray-900 text-xl mb-2">Full Warranty</h3>
                <p className="font-inter font-normal text-gray-600 text-base leading-relaxed">
                Peace of mind with a comprehensive warranty on all labor and materials.
                </p>
            </div>

            </div>
        </div>
        </section>
    );
}
