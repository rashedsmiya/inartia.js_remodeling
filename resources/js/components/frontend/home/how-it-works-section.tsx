import { Link } from '@inertiajs/react';
import { CheckIcon } from "lucide-react";
import { PoundSterling } from 'lucide-react';

import { useReveal } from '@/hooks/use-reveal';

export default function HowItWorksSection({howItWorks}: any) {
    return (
   <section id="how-it-works" className="lg:py-20 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">
            How It Works
          </h2>
          <p className="text-gray-600 mt-3 text-lg sm:text-xl">
            Our streamlined process makes bathroom remodeling easy and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Line */}
          <div
            className="hidden md:block absolute top-6 h-[2px] bg-gray-200"
            style={{ left: "16.66%", right: "16.66%" }}
          ></div>

          {/* Step 1 */}
          <div className="text-center relative">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-gray-900 mb-2 text-xl sm:text-2xl">
              Request Free Estimate
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              Submit photos and select your options online in just minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-gray-900 mb-2 text-xl sm:text-2xl">
              Get Your Quote
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              Receive a detailed estimate via text message within 24 hours.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-gray-900 mb-2 text-xl sm:text-2xl">
              Schedule &amp; Complete
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              Approve the estimate and we'll schedule your project.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://drorange.maktechlaravel.cloud/free-estimate"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:bg-blue-700"
          >
            Start Your Project Today
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
        </div>
      </div>
    </section>

    );
}
