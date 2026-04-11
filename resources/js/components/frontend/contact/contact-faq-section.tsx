import React from 'react';
export function ContactFaqSection({ faqs }: any) {
    return (
        <section>
               <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sf-pro text-gray-900 tracking-tight mb-4">
                    Common Questions
                    </h2>
                    <p className="text-gray-500 font-inter text-lg">
                    Everything you need to know about starting your project with BathPro.
                    </p>
                </div>

                <div className="space-y-4">

                    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-blue-300 hover:shadow-md">
                    <div className="px-6 py-6">
                        <div className="flex items-center gap-4 mb-2">
                        <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-sm">
                            ?
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">How quickly will I get a response?</h3>
                        </div>
                        <p className="pl-12 text-base text-gray-600 leading-relaxed">
                        We respond to all inquiries within <strong>24 hours</strong>, usually much faster. For urgent matters, please call us directly at <span className="text-blue-600 font-semibold">(555) 123-4567</span>.
                        </p>
                    </div>
                    </div>

                    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-blue-300 hover:shadow-md">
                    <div className="px-6 py-6">
                        <div className="flex items-center gap-4 mb-2">
                        <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-sm">
                            ?
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Can I schedule a consultation?</h3>
                        </div>
                        <p className="pl-12 text-base text-gray-600 leading-relaxed">
                        Yes! After submitting an estimate request, we can schedule an in-home consultation if needed. Most estimates can be completed accurately using your photos.
                        </p>
                    </div>
                    </div>

                    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-blue-300 hover:shadow-md">
                    <div className="px-6 py-6">
                        <div className="flex items-center gap-4 mb-2">
                        <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-sm">
                            ?
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Do you offer emergency services?</h3>
                        </div>
                        <p className="pl-12 text-base text-gray-600 leading-relaxed">
                        For emergency bathroom repairs (plumbing issues, water damage, etc.), please call us immediately at <span className="text-blue-600 font-semibold">(555) 123-4567</span>. We have emergency response teams available.
                        </p>
                    </div>
                    </div>

                    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-blue-300 hover:shadow-md">
                    <div className="px-6 py-6">
                        <div className="flex items-center gap-4 mb-2">
                        <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-sm">
                            ?
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">What's your service area?</h3>
                        </div>
                        <p className="pl-12 text-base text-gray-600 leading-relaxed">
                        We serve Columbus, Cleveland, Cincinnati, and surrounding Ohio communities. Check our <a href="/service-area" className="text-blue-600 hover:underline">Service Area page</a> to confirm we service your specific location.
                        </p>
                    </div>
                    </div>

                </div>
                </div>
        </section>
    );
}
