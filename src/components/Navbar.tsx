import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { CLINIC_NAME } from '../data';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-all group-hover:scale-105 shadow-md shadow-blue-600/10">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-extrabold tracking-tight text-slate-900 uppercase">
                  MAX DENTAL
                </span>
                <span className="text-[10px] font-semibold text-blue-600 tracking-wider uppercase -mt-1">
                  & Cosmetic Clinic
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors focus:outline-none"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Book Appointment CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100 focus:outline-none lg:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-slate-950/30 backdrop-blur-sm lg:hidden"
            />

            {/* Navigation Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed bottom-0 right-0 top-0 z-30 w-full max-w-xs bg-white p-8 shadow-xl lg:hidden flex flex-col justify-between"
            >
              <div className="space-y-8 pt-10">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block font-sans text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
