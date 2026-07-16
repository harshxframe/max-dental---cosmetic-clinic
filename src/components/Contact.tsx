import { MapPin, Phone, Clock, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { CLINIC_NAME, CLINIC_PHONE, CLINIC_ADDRESS, CLINIC_HOURS } from '../data';

export default function Contact() {
  const getWhatsAppLink = () => {
    const text = `Hello Max Dental & Cosmetic Clinic,\n\nI am contacting you from the website and would like to request general information or coordinate a booking. Please let me know how to proceed. Thanks!`;
    return `https://wa.me/91${CLINIC_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Title */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <span className="text-xs font-extrabold text-blue-600 tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 sm:text-4xl">
            We'd Love to Welcome You
          </h2>
          <div className="mx-auto h-1 w-12 bg-blue-600 rounded-full" />
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Our clinic is centrally located in Unnao, easily accessible via the bypass. Visit us or reach out via direct phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct info, Hours, Call/WhatsApp cards (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            
            {/* Info Cards */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                {CLINIC_NAME}
              </h3>
              
              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</h4>
                    <p className="text-sm text-slate-700 font-semibold mt-1">
                      {CLINIC_ADDRESS.line1}
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">
                      {CLINIC_ADDRESS.line2}, {CLINIC_ADDRESS.city}, {CLINIC_ADDRESS.state} - {CLINIC_ADDRESS.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Directly</h4>
                    <p className="text-sm text-slate-700 font-semibold mt-1">
                      +91 {CLINIC_PHONE}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium">Click on call buttons below to dial instantly</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Hours</h4>
                    <p className="text-sm text-slate-700 font-semibold mt-1">
                      {CLINIC_HOURS}
                    </p>
                    <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Open Today
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Call & WhatsApp Buttons */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <a
                href={`tel:${CLINIC_PHONE}`}
                className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 hover:bg-blue-700 hover:shadow-blue-700/25 transition-all text-center cursor-pointer"
              >
                <PhoneCall className="h-5 w-5 animate-bounce" />
                Call +91 {CLINIC_PHONE}
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 py-4.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/15 hover:bg-emerald-700 hover:shadow-emerald-700/25 transition-all text-center cursor-pointer"
              >
                <MessageSquare className="h-5 w-5" />
                WhatsApp Chat Desk
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps (7 columns) */}
          <div className="lg:col-span-7 relative min-h-[350px] rounded-3xl overflow-hidden border border-slate-150 bg-slate-50 shadow-sm flex flex-col justify-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.4121577907577!2d80.4908053!3d26.5491173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39abf5555555%3A0x6b72a0887e1f40d!2sHotel%20Vishal%20Palace!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Max Dental Clinic Unnao Location Map"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
