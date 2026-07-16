import React from 'react';
import { Sparkles, MapPin, Phone, Clock, ArrowUp, Calendar } from 'lucide-react';
import { CLINIC_NAME, CLINIC_PHONE, CLINIC_ADDRESS, CLINIC_HOURS } from '../data';

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800">
      
      {/* Upper footer area */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-extrabold tracking-tight text-white uppercase">
                  MAX DENTAL
                </span>
                <span className="text-[9px] font-bold text-blue-400 tracking-wider uppercase -mt-1">
                  & Cosmetic Clinic
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Providing advanced dental care and high-end cosmetic smile enhancement with clinical excellence, extreme sterile standards, and personalized pathways in Unnao, Uttar Pradesh.
            </p>
            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold transition-all cursor-pointer"
              >
                <Calendar className="h-3.5 w-3.5" />
                Book Your Slot
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">About Doctor</a>
              </li>
              <li>
                <a href="#treatments" onClick={(e) => handleNavClick(e, '#treatments')} className="hover:text-white transition-colors">Treatments</a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleNavClick(e, '#why-choose-us')} className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleNavClick(e, '#reviews')} className="hover:text-white transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-white transition-colors">Clinic Gallery</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Featured Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Root Canal Treatment (RCT)</li>
              <li>Dental Implants & Restorations</li>
              <li>Clinical Teeth Whitening</li>
              <li>Smile Makeover & Veneers</li>
              <li>Minimally Invasive Laser Dentistry</li>
              <li>Pediatric Dental Care</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location details (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Ground Floor, Hotel Vishal Palace, Baipass, Gadan Khera, Unnao, UP 209801
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-blue-500 shrink-0" />
                <span>+91 {CLINIC_PHONE}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Clock className="h-4 w-4 text-blue-500 shrink-0" />
                <span>{CLINIC_HOURS}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower footer copyright & Back to top */}
      <div className="border-t border-slate-800 bg-slate-950/40 py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {currentYear} {CLINIC_NAME}. All rights reserved. Managed with clinical excellence in Unnao, Uttar Pradesh.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://maps.google.com/?q=Hotel+Vishal+Palace+Unnao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-slate-500 transition-colors"
            >
              Google Maps Location
            </a>
            <button
              onClick={handleScrollToTop}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
