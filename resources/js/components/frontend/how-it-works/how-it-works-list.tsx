export function HowItWorksList() {

    return (
        <section className="px-4 py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
            <h2 className="font-sf-pro font-bold text-gray-900 text-3xl md:text-4xl mb-4">Your Journey to a New Bathroom</h2>
            <p className="text-gray-500 font-inter text-lg">Simple, transparent, and professional every step of the way.</p>
            </div>

            <div className="relative space-y-6" id="steps-container">
            <div className="absolute left-9 top-10 bottom-10 w-0.5 bg-gray-200 hidden sm:block"></div>

            <div className="step-card relative flex flex-col sm:flex-row gap-6 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-xl group">
                <div className="flex-shrink-0 flex items-start justify-center">
                <div className="z-10 flex h-12 w-12 font-sf-pro font-bold text-2xl items-center justify-center rounded-full bg-blue-600 text-white ring-4 ring-white shadow-lg transition-transform group-hover:scale-110">1</div>
                </div>

                <div className="flex flex-1 flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                    <h3 className="mb-1 font-sf-pro font-bold text-xl sm:text-2xl text-gray-900">Submit Your Request Online</h3>
                    <div className="mb-4 flex items-center gap-2 font-inter font-medium text-sm text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"></path></svg>
                    5 minutes
                    </div>
                    <p className="font-inter font-normal text-base leading-relaxed text-gray-600">
                    Fill out our simple form and upload 3-10 photos of your current space. Select your desired upgrades like new vanities, tile work, or a tub-to-shower conversion.
                    </p>
                </div>
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-50 p-3 group-hover:bg-blue-50 transition-colors">
                    <img alt="Request" className="object-contain h-full w-full" src="https://drorange.maktechlaravel.cloud/storage/images/how_it_works_1775273594_nLzOe5z3.png" />
                </div>
                </div>
            </div>

            <div className="step-card relative flex flex-col sm:flex-row gap-6 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-xl group">
                <div className="flex-shrink-0 flex items-start justify-center">
                <div className="z-10 flex h-12 w-12 font-sf-pro font-bold text-2xl items-center justify-center rounded-full bg-blue-600 text-white ring-4 ring-white shadow-lg transition-transform group-hover:scale-110">2</div>
                </div>
                <div className="flex flex-1 flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                    <h3 className="mb-1 font-sf-pro font-bold text-xl sm:text-2xl text-gray-900">Choose Your Options</h3>
                    <div className="mb-4 flex items-center gap-2 font-inter font-medium text-sm text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"></path></svg>
                    5 minutes
                    </div>
                    <p className="font-inter font-normal text-base leading-relaxed text-gray-600">
                    Select fixtures, tiles, and flooring from our curated catalog. Share your vision and specific size details so we can tailor the plan to your home.
                    </p>
                </div>
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-50 p-3 group-hover:bg-blue-50 transition-colors">
                    <img alt="Options" className="object-contain h-full w-full" src="https://drorange.maktechlaravel.cloud/storage/images/how_it_works_1775273605_5IDsCett.png" />
                </div>
                </div>
            </div>

            <div className="step-card relative flex flex-col sm:flex-row gap-6 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-xl group">
                <div className="flex-shrink-0 flex items-start justify-center">
                <div className="z-10 flex h-12 w-12 font-sf-pro font-bold text-2xl items-center justify-center rounded-full bg-blue-600 text-white ring-4 ring-white shadow-lg transition-transform group-hover:scale-110">4</div>
                </div>
                <div className="flex flex-1 flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                    <h3 className="mb-1 font-sf-pro font-bold text-xl sm:text-2xl text-gray-900">Receive Your Estimate</h3>
                    <div className="mb-4 flex items-center gap-2 font-inter font-medium text-sm text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2"></path></svg>
                    Within 24 hours
                    </div>
                    <p className="font-inter font-normal text-base leading-relaxed text-gray-600">
                    Our team reviews your photos and selections to create a detailed SMS quote. You'll get a full price breakdown and an estimated project timeline.
                    </p>
                </div>
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-50 p-3 group-hover:bg-blue-50 transition-colors">
                    <img alt="Estimate" className="object-contain h-full w-full" src="https://drorange.maktechlaravel.cloud/storage/images/how_it_works_1775273622_coi08XlL.png" />
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}
