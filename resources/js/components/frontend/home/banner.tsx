import { Link } from '@inertiajs/react';
import { CircleCheckBig } from 'lucide-react';

import { useReveal } from '@/hooks/use-reveal';

export default function Banner({ banner }: any) {
    const [headingRef, headingVisible] = useReveal<HTMLDivElement>();
    const [listRef, listVisible] = useReveal<HTMLUListElement>(0.1);
    const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>(0.1);

    const heroImage = banner?.background_image_url;
    const primaryUrl = banner?.button1_url || '#';
    const secondaryUrl = banner?.button2_url || '#';

    return (
        <>
            {/* Hero - background image: add public/images/hero-bg.jpg or set heroImageUrl prop */}
            <section
                className="hero-bg text-black"
                style={
                    heroImage
                        ? {
                              backgroundImage: `url('${heroImage}')`,
                          }
                        : {}
                    }
                >
                    <div className="relative mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-32">
                        <div className="max-w-3xl">
                            <h1 className="fade-up font-sf-pro mb-5 text-3xl leading-tight font-bold delay-2 sm:text-4xl md:text-5xl xl:text-6xl">
                                {banner?.title}
                            </h1>
                            <p className="mb-8 font-inter text-base font-normal text-black sm:text-2xl">
                                {banner?.subtitle}
                            </p>
                            <div className="fade-up mb-10 flex flex-wrap gap-3 delay-4">
                                <Link
                                    href={primaryUrl}
                                    className="btn-primary inline-flex w-full items-center justify-center gap-2 font-inter text-xl font-bold sm:w-auto"
                                >
                                    {banner?.button1_text}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href={secondaryUrl}
                                    className="btn-outline-white inline-flex w-full items-center justify-center gap-2 font-inter text-xl font-bold sm:w-auto"
                                >
                                    {banner?.button2_text}
                                </Link>
                            </div>
                            <div className="fade-up flex flex-wrap gap-3 text-sm text-black delay-4">
                                <CircleCheckBig className="h-6 w-6 text-black" />
                                <span className="flex items-center gap-1.5 font-inter text-base font-normal text-black">
                                    Licensed &amp; Insured
                                </span>
                                <CircleCheckBig className="h-6 w-6 text-black" />
                                <span className="flex items-center gap-1.5 font-inter text-base font-normal text-black">
                                    Free Estimates
                                </span>
                                <CircleCheckBig className="h-6 w-6 text-black" />
                                <span className="flex items-center gap-1.5 font-inter text-base font-normal text-black">
                                    Quick Turnaround
                                </span>
                            </div>

                            {/* {banner?.aditional_information ? (
                            <div
                            className="prose prose-invert prose-sm max-w-none mt-3 text-white/75 fade-up delay-4 [&_p]:text-white/75 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_ul]:text-white/75 [&_ol]:text-white/75 [&_li]:text-white/75 [&_strong]:text-white [&_em]:text-white [&_pre]:bg-gray-900 [&_pre]:text-white [&_pre]:p-4 [&_pre]:rounded-lg [&_code]:bg-gray-800 [&_code]:text-white [&_code]:px-2 [&_code]:py-1 [&_code]:rounded font-mono text-sm"
                            dangerouslySetInnerHTML={{ __html: banner.aditional_information || '' }}
                            ></div>
                        ) : null} */}

                        </div>
                    </div>
            </section>
        </>
    );
}
