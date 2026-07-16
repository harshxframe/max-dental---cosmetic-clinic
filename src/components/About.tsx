import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';
import { DOCTOR_INFO } from '../data';

export default function About() {
  const [imgSrc, setImgSrc] = useState('../assets/dr-priyanka.png');
  const values = [
    {
      title: "Patient-First Care",
      desc: "Every procedure is paced to your comfort, ensuring an completely stress-free experience.",
      icon: Heart,
      color: "text-rose-500 bg-rose-50"
    },
    {
      title: "Modern Treatments",
      desc: "Using state-of-the-art tools and materials to ensure long-lasting clinical success.",
      icon: Sparkles,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Comfortable Environment",
      desc: "A fully sanitized, temperature-controlled, calming clinic space built with care.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Personalized Plans",
      desc: "Care tailored exactly to your unique goals, dental structure, and budget preferences.",
      icon: Award,
      color: "text-indigo-600 bg-indigo-50"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-80 w-80 rounded-full bg-blue-50/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Doctor Portrait Image (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl border-8 border-slate-100">
              <img
                src={imgSrc}
                onError={() => setImgSrc(imgSrc)}
                alt="Dr. Priyanka Verma - Dental Surgeon & Cosmetic Dentist"
                className="h-full w-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-900/90 backdrop-blur-md p-4 text-white text-center">
                <p className="text-base font-bold font-display">{DOCTOR_INFO.name}</p>
                <p className="text-xs text-blue-400 font-medium">{DOCTOR_INFO.role}</p>
              </div>
            </div>
          </div>

          {/* Text content (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-blue-600 tracking-wider uppercase">
                Meet the Chief Specialist
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 sm:text-4xl">
                Dr. Priyanka Verma
              </h2>
              <p className="text-sm font-semibold text-slate-500 uppercase -mt-2">
                Dental Surgeon & Cosmetic Dentist
              </p>
              <div className="h-1 w-12 bg-blue-600 rounded-full mt-2" />
            </div>

            <p className="text-base text-slate-600 font-sans leading-relaxed">
              {DOCTOR_INFO.bio}
            </p>

            {/* Feature Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="flex gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${val.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{val.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
