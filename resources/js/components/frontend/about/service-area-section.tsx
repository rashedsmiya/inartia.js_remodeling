import { Link } from '@inertiajs/react';
import { CircleCheckBig } from 'lucide-react';

export function ServiceAreaSection({ serviceArea }: any) {
    return (
     <section className="mx-auto max-w-7xl px-4 sm:px-8 py-20 text-center">
  <div className="mb-6 flex justify-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
      <svg className="h-10 w-10" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
      </svg>
    </div>
  </div>

  <h2 className="mb-4 text-3xl md:text-4xl xl:text-5xl font-bold font-sf-pro text-gray-900 tracking-tight">
    Service Area
  </h2>
  <p className="mb-12 font-inter font-normal text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
    Proudly providing expert bathroom remodeling to homeowners throughout Ohio.
  </p>

  <div className="rounded-3xl bg-blue-50/50 border border-blue-100 p-8 md:p-12">
    <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-gray-900 font-inter font-bold text-base">Columbus, OH</span>
      </div>

      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-gray-900 font-inter font-bold text-base">Cleveland, OH</span>
      </div>

      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-gray-900 font-inter font-bold text-base">Cincinnati, OH</span>
      </div>

      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-gray-900 font-inter font-bold text-base">Akron, OH</span>
      </div>

      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-gray-900 font-inter font-bold text-base">Dayton, OH</span>
      </div>

      <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-blue-50">
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-gray-900 font-inter font-bold text-base">Toledo, OH</span>
      </div>

    </div>

    <a className="inline-block text-base font-inter font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors" href="/contact">
      Don't see your city? Contact us to check availability in your area →
    </a>
  </div>
</section>
    );
}
