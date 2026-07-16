import { motion } from 'motion/react';
import { Calendar, PhoneCall, Star, Award, HeartPulse, Sparkles } from 'lucide-react';
import { CLINIC_PHONE } from '../data';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 flex items-center bg-radial from-slate-50 to-slate-100 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Text Content (7 cols on large desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex max-w-max items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 border border-blue-100"
            >
              <Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                #1 Dental & Cosmetic Center in Unnao
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
              >
                Your Smile Deserves <br />
                <span className="text-blue-600 font-extrabold">Expert Care.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-xl text-base md:text-lg text-slate-600 font-sans leading-relaxed"
              >
                Providing advanced dental and cosmetic treatments with modern technology and compassionate care in Unnao.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 hover:bg-blue-700 hover:shadow-blue-700/20 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </button>
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 active:scale-95 transition-all"
              >
                <PhoneCall className="h-4 w-4 text-blue-600" />
                Call Now
              </a>
            </motion.div>

            {/* Premium Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-200/60 max-w-2xl"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">⭐ 4.7 Rating</p>
                    <p className="text-[10px] text-slate-500 font-medium">On Google Maps</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">49+ Reviews</p>
                    <p className="text-[10px] text-slate-500 font-medium">Verified Patients</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Modern Tech</p>
                    <p className="text-[10px] text-slate-500 font-medium">Advanced Clinic</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <HeartPulse className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Expert Care</p>
                    <p className="text-[10px] text-slate-500 font-medium">Top Dentists</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual Imagery (5 cols on large desktop) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative aspect-square sm:aspect-4/3 lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200"
                alt="Smiling healthy patient at Max Dental Unnao"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Glass Overlays for Professional look */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/70 backdrop-blur-md p-4 border border-white/20 shadow-lg">
                <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  Max Dental & Cosmetic Clinic Unnao
                </p>
                <p className="text-[10px] text-slate-600 font-medium mt-0.5">
                  Offering a full suite of cosmetic and medical dentistry under strict sanitization standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
