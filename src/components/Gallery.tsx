import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY } from '../data';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Clinic', 'Equipment', 'Treatment', 'Consultation'];

  // Filtered gallery items
  const filteredGallery = selectedCategory === 'All'
    ? GALLERY
    : GALLERY.filter(item => item.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === 0) return filteredGallery.length - 1;
      return (prev ?? 0) - 1;
    });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === filteredGallery.length - 1) return 0;
      return (prev ?? 0) + 1;
    });
  };

  return (
    <section id="gallery" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Title */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <span className="text-xs font-extrabold text-blue-600 tracking-wider uppercase">
            Clinic Gallery
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 sm:text-4xl">
            A Glimpse of Our Modern Environment
          </h2>
          <div className="mx-auto h-1 w-12 bg-blue-600 rounded-full" />
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Take a visual tour through our Unnao dental office, highlighting our sterilized diagnostic equipment and comforting consultation zones.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry/Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 shadow-xs border border-slate-100 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold tracking-widest text-blue-400 uppercase">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-1">
                        {item.title}
                      </h4>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/10 shadow-xs">
                      <Eye className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Gallery message */}
        {filteredGallery.length === 0 && (
          <p className="text-center text-sm text-slate-400 py-12">No media found in this category.</p>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Navigate */}
            <button
              onClick={handlePrev}
              className="absolute left-6 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors hidden sm:block"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Active Image and Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[75vh] overflow-hidden rounded-2xl flex flex-col items-center"
            >
              <img
                src={filteredGallery[lightboxIndex].imageUrl}
                alt={filteredGallery[lightboxIndex].title}
                className="max-h-[65vh] w-auto object-contain rounded-xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center">
                <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">
                  {filteredGallery[lightboxIndex].category}
                </span>
                <h5 className="text-sm font-semibold text-white mt-1">
                  {filteredGallery[lightboxIndex].title}
                </h5>
              </div>
            </motion.div>

            {/* Right Navigate */}
            <button
              onClick={handleNext}
              className="absolute right-6 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors hidden sm:block"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
