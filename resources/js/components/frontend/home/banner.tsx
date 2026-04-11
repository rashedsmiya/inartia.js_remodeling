import { CheckIcon } from "lucide-react";


export default function Banner({ banner }: any) {
  return (

    <section
      aria-label="Hero section"
      className="relative text-white"
      style={{
        backgroundImage:
          'url("https://drorange.maktechlaravel.cloud/storage/images/hero_1775815473_hNvQnnOW.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-600/70 from-black/70 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-16 sm:py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.2] tracking-tight mb-5">
            Transform Your Bathroom in Days, Not Weeks
          </h1>

          <p className="text-base sm:text-xl text-white/80 mb-8">
            Get a free estimate in 24 hours. Submit photos, choose your options,
            and track your project online.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://drorange.maktechlaravel.cloud/free-estimate"
              className="bg-gray-100 inline-flex items-center justify-center gap-2 w-full sm:w-auto font-bold text-md transition-all duration-300 hover:scale-105 text-gray-900 py-3 px-2 rounded-lg"
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
              className="btn-gray-100 inline-flex items-center justify-center gap-2 w-full sm:w-auto font-bold text-lg transition-all duration-300 hover:scale-105 text-gray-100 p-3 px-2 rounded-md border border-gray-300"
            >
              How It Works
            </a>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 text-white/80">
            <div className="flex items-center gap-2 bg-amber-300 text-black px-3 py-1 rounded">
              <CheckIcon />
              <span className="text-base">Licensed & Insured</span>
            </div>

            <div className="flex items-center gap-2 bg-amber-300 text-black px-3 py-1 rounded">
              <CheckIcon />
              <span className="text-base">Free Estimates</span>
            </div>

            <div className="flex items-center gap-2 bg-amber-300 text-black px-3 py-1 rounded">
              <CheckIcon />
              <span className="text-base">Quick Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
