import { Link } from '@inertiajs/react';

import AppLogo from '@/components/app-logo';

export function FrontendFooter() {
    return (
        <footer className="bg-[#0b1120] text-gray-400 py-12 px-6 font-sans">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
                <h3 className="text-white text-xl font-bold">BathPro Remodeling</h3>
                <p className="text-sm leading-relaxed max-w-xs">
                Professional bathroom remodeling services with quality craftsmanship.
                </p>
                <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                    <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                    </svg>
                    <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                    <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                    </svg>
                    <a
                    href="mailto:info@bathproremodeling.com"
                    className="hover:text-white transition-colors"
                    >
                    info@bathproremodeling.com
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    </svg>
                    <span>Serving Your Area</span>
                </div>
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    Home
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    Bathroom Remodeling
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    How It Works
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    About Us
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    Contact
                    </a>
                </li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold">Get Started</h3>
                <ul className="space-y-3 text-sm">
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    Bathroom Remodeling
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    Tub to Shower Conversion
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    Tile Installation
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    Vanity Replacement
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-white transition-colors">
                    Plumbing Updates
                    </a>
                </li>
                </ul>
            </div>
            </div>
            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2025 BathPro Remodeling. All Rights Reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                Terms of Service
                </a>
            </div>
            </div>
         </div>
        </footer>
    );
}
