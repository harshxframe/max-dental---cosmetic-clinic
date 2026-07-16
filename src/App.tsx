import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (treatmentId?: string) => {
    setSelectedTreatmentId(treatmentId);
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
    setSelectedTreatmentId(undefined);
  };

  return (
    <div className="relative min-h-screen bg-slate-50/40 text-slate-800 antialiased font-sans">
      
      {/* Sticky Premium Navigation Bar */}
      <Navbar onBookClick={() => handleOpenAppointment()} />

      {/* Main Core Layout Sections */}
      <main>
        {/* Hero Section */}
        <Hero onBookClick={() => handleOpenAppointment()} />

        {/* About Section */}
        <About />

        {/* Treatments Catalog (with category filters and dynamic selection callbacks) */}
        <Treatments onBookTreatment={(id) => handleOpenAppointment(id)} />

        {/* Core Value Proposers */}
        <WhyChooseUs />

        {/* Verified Google Reviews */}
        <Reviews />

        {/* Immersive Clinic Media Gallery */}
        <Gallery />

        {/* Middle Conversion CTA */}
        <CTASection />

        {/* Direct Contact, Map, & Hours */}
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer onBookClick={() => handleOpenAppointment()} />

      {/* Premium Interactive Modal Window */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        selectedTreatmentId={selectedTreatmentId}
      />

    </div>
  );
}
