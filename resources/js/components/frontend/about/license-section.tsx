import { CircleCheckBig } from "lucide-react";
import React from "react";


export function LicenseSection({ licenses }: any) {
    return (
        <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl font-sf-pro font-bold text-gray-900 tracking-tight">
                Licenses & Certifications
            </h2>
            <p className="font-inter font-normal text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
                Fully licensed, bonded, and insured for your total protection and peace of mind.
            </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 rounded-3xl border border-gray-100 bg-white p-8 md:p-12 shadow-sm">

            <div className="flex items-start gap-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                </div>
                <div>
                <h3 className="text-base font-bold font-inter text-gray-900 leading-tight">Ohio State Contractor</h3>
                <p className="text-sm font-normal font-inter text-gray-500 mt-1">License #12345678</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                </div>
                <div>
                <h3 className="text-base font-bold font-inter text-gray-900 leading-tight">General Liability</h3>
                <p className="text-sm font-normal font-inter text-gray-500 mt-1">$2M Comprehensive Coverage</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                </div>
                <div>
                <h3 className="text-base font-bold font-inter text-gray-900 leading-tight">Workers' Compensation</h3>
                <p className="text-sm font-normal font-inter text-gray-500 mt-1">All employees fully covered</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                </div>
                <div>
                <h3 className="text-base font-bold font-inter text-gray-900 leading-tight">BBB Accredited</h3>
                <p className="text-sm font-normal font-inter text-gray-500 mt-1">A+ Rating for Excellence</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                </div>
                <div>
                <h3 className="text-base font-bold font-inter text-gray-900 leading-tight">EPA Lead-Safe Certified</h3>
                <p className="text-sm font-normal font-inter text-gray-500 mt-1">Firm #12345</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                </div>
                <div>
                <h3 className="text-base font-bold font-inter text-gray-900 leading-tight">10-Year Warranty</h3>
                <p className="text-sm font-normal font-inter text-gray-500 mt-1">On all workmanship & materials</p>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}
