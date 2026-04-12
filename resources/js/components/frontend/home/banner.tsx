import { useReveal } from '@/hooks/use-reveal';
import { CheckIcon } from 'lucide-react';

export default function Banner({ banner }: any) {
    const [headingRef, headingVisible] = useReveal<HTMLDivElement>();
    const [listRef, listVisible] = useReveal<HTMLUListElement>(0.1);
    const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>(0.1);

    const heroImage = banner?.background_image_url;
    const primaryUrl = banner?.button1_url || '#';
    const secondaryUrl = banner?.button2_url || '#';

    return (
        <section
            aria-label="Hero section"
            className="text-white"
            style={{
                backgroundImage: heroImage ? `url('${heroImage}')` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '600px',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-600/70 from-black/70 via-black/50 to-black/30"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-6 lg:py-32">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-3xl leading-[1.2] font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
                        Transform Your Bathroom in Days, Not Weeks
                    </h1>

                    <p className="mb-8 text-base text-white/80 sm:text-xl">
                        Get a free estimate in 24 hours. Submit photos, choose
                        your options, and track your project online.
                    </p>

                    {/* Buttons */}
                    <div className="mb-10 flex flex-wrap gap-3">
                        <a
                            href="https://drorange.maktechlaravel.cloud/free-estimate"
                            className="text-md inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-100 px-2 py-3 font-bold text-gray-900 transition-all duration-300 hover:scale-105 sm:w-auto"
                        >
                            Get Your Free Estimate
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>

                        <a
                            href="https://drorange.maktechlaravel.cloud/how-it-works"
                            className="btn-gray-100 inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 p-3 px-2 text-lg font-bold text-gray-100 transition-all duration-300 hover:scale-105 sm:w-auto"
                        >
                            How It Works
                        </a>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-4 text-white/80">
                        <div className="flex items-center gap-2 rounded bg-amber-300 px-3 py-1 text-black">
                            <CheckIcon />
                            <span className="text-base">
                                Licensed & Insured
                            </span>
                        </div>

                        <div className="flex items-center gap-2 rounded bg-amber-300 px-3 py-1 text-black">
                            <CheckIcon />
                            <span className="text-base">Free Estimates</span>
                        </div>

                        <div className="flex items-center gap-2 rounded bg-amber-300 px-3 py-1 text-black">
                            <CheckIcon />
                            <span className="text-base">Quick Turnaround</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
