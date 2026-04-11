import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link, useForm } from '@inertiajs/react';

export function ContactForm() {
    // 1. Initialize the Inertia form helper
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // 2. Handle form submission
   const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('contact.store'), {
        onSuccess: () => reset(), // Clear form on success
    });
};

    return (
        <div className="bg-[#F9FAFB] py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-6 sm:px-8">

            <div className="lg:col-span-1 space-y-10">
            <div>
                <h2 className="text-3xl font-bold font-inter mb-8 text-gray-900 tracking-tight">Get in Touch</h2>

                <div className="space-y-8">
                <div className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-2xl p-3 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v２.２５z"></path>
                    </svg>
                    </div>
                    <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:5551234567" className="text-blue-600 text-lg font-bold hover:underline">(555) 123-4567</a>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">Mon–Fri: 8am–6pm Sat: 9am–4pm</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-2xl p-3 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                    </svg>
                    </div>
                    <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:info@bathproremodeling.com" className="text-blue-600 text-lg font-bold hover:underline">info@bathproremodeling.com</a>
                    <p className="text-sm text-gray-500 mt-1">We respond within ２４ hours</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="font-bold text-gray-900">Hours of Operation</p>
                </div>
                <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Mon – Fri</span>
                    <span className="font-semibold text-gray-900">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-semibold text-gray-900">9:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                </div>
                </div>
            </div>
            </div>

            <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 p-8 md:p-12">
                <h2 className="text-2xl font-bold font-inter mb-8 text-gray-900">Send Us a Message</h2>
                <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="John Doe" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="john@example.com" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                    <input type="text" placeholder="Bathroom Remodel Inquiry" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                    <textarea rows={5} placeholder="Tell us about your project goals..." required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1">
                    Send Message
                </button>
                </form>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-100 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                <h3 className="text-amber-900 font-bold text-lg mb-1">Need a quote faster?</h3>
                <p className="text-amber-800 text-sm">Our online estimate tool gives you a detailed price within 24 hours.</p>
                </div>
                <a href="/free-estimate" className="whitespace-nowrap bg-amber-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors shadow-sm">
                Request Free Estimate →
                </a>
            </div>
            </div>

        </div>
        </div>
    );
}

