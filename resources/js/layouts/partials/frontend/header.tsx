import { Link } from '@inertiajs/react';

import AppLogo from '@/components/app-logo';

export function FrontendHeader() {
    return (
        <div className="bg-gray-50">
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <a
                    className="text-blue-700 tracking-tight whitespace-nowrap font-inter font-bold text-2xl"
                    href="/"
                >
                    BathPro Remodeling
                </a>
                <nav className="hidden min-[992px]:flex items-center gap-2 lg:gap-5 xl:gap-7 text-base font-bold text-gray-800 font-inter ">
                    <a
                    className="transition-colors duration-150 text-sm font-normal text-blue-600"
                    href="/"
                    >
                    Home
                    </a>
                    <a
                    className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600"
                    href="/bathroom"
                    >
                    Bathroom Remodeling
                    </a>
                    <a
                    className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600"
                    href="/how-it-works"
                    >
                    How It Works
                    </a>
                    <a
                    className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600"
                    href="/about"
                    >
                    About
                    </a>
                    <a
                    className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600"
                    href="/contact"
                    >
                    Contact
                    </a>
                    <a
                    className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600"
                    href="/track-orders"
                    >
                    Track Order
                    </a>
                </nav>
                <a
                    className="hidden min-[992px]:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white  text-base font-bold font-inter shadow-sm active:bg-blue-900 transition-colors duration-150 whitespace-nowrap"
                    href="https://drorange.maktechlaravel.cloud/free-estimate"
                >
                    Get Free Estimates
                </a>
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded="false"
                    className="min-[992px]:hidden p-1.5 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                </div>
                <div className="min-[992px]:hidden border-t border-gray-100 bg-white px-6 pb-5 pt-3 flex flex-col gap-1 hidden">
                <a
                    className="py-2 text-sm font-medium transition-colors duration-150 text-blue-600"
                    href="/"
                >
                    Home
                </a>
                <a
                    className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600"
                    href="/bathroom"
                >
                    Bathroom Remodeling
                </a>
                <a
                    className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600"
                    href="/how-it-works"
                >
                    How It Works
                </a>
                <a
                    className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600"
                    href="/about"
                >
                    About
                </a>
                <a
                    className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600"
                    href="/contact"
                >
                    Contact
                </a>
                <a
                    className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600"
                    href="/track-orders"
                >
                    Track Order
                </a>
                <a
                    className="mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors duration-150"
                    href="https://drorange.maktechlaravel.cloud/free-estimate"
                >
                    Get Free Estimates
                </a>
                </div>
            </header>
        </div>

    );
}
