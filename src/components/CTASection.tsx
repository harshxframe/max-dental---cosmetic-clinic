import { MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { CLINIC_PHONE } from '../data';

export default function CTASection() {
  const getWhatsAppLink = () => {
    const text = `Hello Max Dental & Cosmetic Clinic,\n\nI would like to query about your dental or cosmetic dental treatments in Unnao. Please let me know what details are needed to proceed. Thanks!`;
    return `https://wa.me/91${CLINIC_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative py-20 bg-blue-600 text-white overflow-hidden">
      {/* Subtle background circles */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 h-80 w-80 rounded-full bg-sky-500/10 blur-2xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1 border border-white/10 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-sky-200" />
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-100">Take the First Step</span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight font-display sm:text-4xl max-w-2xl mx-auto">
          Ready to Transform Your Smile?
        </h2>

        <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-sans leading-relaxed">
          Reach out today to discuss your aesthetic goals or schedule an urgent dental check-up with Dr. Priyanka Verma in Unnao.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <a
            href={`tel:${CLINIC_PHONE}`}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-lg hover:bg-slate-50 active:scale-95 transition-all"
          >
            <PhoneCall className="h-4 w-4" />
            Call Now: {CLINIC_PHONE}
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-emerald-600 active:scale-95 transition-all"
          >
            <MessageSquare className="h-4 w-4" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
