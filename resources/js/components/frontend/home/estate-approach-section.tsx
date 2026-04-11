import { Link } from "@inertiajs/react";
import React from "react";

import { useReveal } from "@/hooks/use-reveal";

export default function EstateApproachSection() {

  return (
      <section className="max-w-7xl mx-auto lg:py-20 py-10 px-4 sm:px-8 bg-gray-50">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-semibold text-gray-900 text-3xl md:text-4xl xl:text-5xl">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-3 text-lg sm:text-xl">
          Join hundreds of satisfied homeowners who transformed their bathrooms with us.
        </p>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="mb-3 text-yellow-500 text-xl">★★★★★</div>
          <p className="text-base italic text-gray-700 leading-relaxed mb-4">
            "The entire process was seamless! From the estimate to the final installation, everything was professional, and the results exceeded our expectations."
          </p>
          <div>
            <p className="font-bold text-gray-900">Sarah Johnson</p>
            <p className="text-sm text-gray-400">Columbus, OH</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="mb-3 text-yellow-500 text-xl">★★★★★</div>
          <p className="text-base italic text-gray-700 leading-relaxed mb-4">
            "They communicated via text beautifully. The team was punctual, clean, and the results exceeded our expectations and were completed on time."
          </p>
          <div>
            <p className="font-bold text-gray-900">Michael Chen</p>
            <p className="text-sm text-gray-400">Columbus, OH</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="mb-3 text-yellow-500 text-xl">★★★★★</div>
          <p className="text-base italic text-gray-700 leading-relaxed mb-4">
            "I loved being able to track the progress in real time. The estimates were accurate and there were no surprise costs – just a beautiful new bathroom!"
          </p>
          <div>
            <p className="font-bold text-gray-900">Emily Rodriguez</p>
            <p className="text-sm text-gray-400">Columbus, OH</p>
          </div>
        </div>

      </div>
      </section>
  );
}
