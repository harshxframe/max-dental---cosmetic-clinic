import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, Activity, Sparkles, Sun, Shield, Award, Layers, Flame,
  Droplet, HeartPulse, Scissors, AlertCircle, Smile, Stethoscope,
  Camera, Wrench, ShieldAlert, ArrowRight, Calendar, Info
} from 'lucide-react';
import { TREATMENTS } from '../data';
import { Treatment } from '../types';

interface TreatmentsProps {
  onBookTreatment: (id: string) => void;
}

export default function Treatments({ onBookTreatment }: TreatmentsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDetailTreatment, setActiveDetailTreatment] = useState<Treatment | null>(null);

  const categories = ['All', 'General', 'Cosmetic', 'Specialist', 'Preventive'];

  // Match icon name string to Lucide React component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="h-5 w-5" />;
      case 'Sparkles': return <Sparkles className="h-5 w-5" />;
      case 'Sun': return <Sun className="h-5 w-5" />;
      case 'Shield': return <Shield className="h-5 w-5" />;
      case 'Award': return <Award className="h-5 w-5" />;
      case 'Layers': return <Layers className="h-5 w-5" />;
      case 'Flame': return <Flame className="h-5 w-5" />;
      case 'Droplet': return <Droplet className="h-5 w-5" />;
      case 'HeartPulse': return <HeartPulse className="h-5 w-5" />;
      case 'Scissors': return <Scissors className="h-5 w-5" />;
      case 'AlertCircle': return <AlertCircle className="h-5 w-5" />;
      case 'Smile': return <Smile className="h-5 w-5" />;
      case 'Stethoscope': return <Stethoscope className="h-5 w-5" />;
      case 'Camera': return <Camera className="h-5 w-5" />;
      case 'Wrench': return <Wrench className="h-5 w-5" />;
      case 'ShieldAlert': return <ShieldAlert className="h-5 w-5" />;
      default: return <HeartPulse className="h-5 w-5" />;
    }
  };

  // Filtered treatment list
  const filteredTreatments = TREATMENTS.filter(t => {
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="treatments" className="relative py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Title */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <span className="text-xs font-extrabold text-blue-600 tracking-wider uppercase">
            Our Dental & Aesthetic Services
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 sm:text-4xl">
            Advanced Treatments, Masterfully Delivered
          </h2>
          <div className="mx-auto h-1 w-12 bg-blue-600 rounded-full" />
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            From essential routine check-ups to advanced reconstructive dental implants and smile cosmetic makeovers. Filter or search to explore our treatments.
          </p>
        </div>

        {/* Controls Grid (Search and Filter Tabs) */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Treatment Card Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((treatment) => (
              <motion.div
                key={treatment.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-6 shadow-xs hover:shadow-lg hover:border-slate-300/80 transition-all duration-300"
              >
                <div className="space-y-4 text-left">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                      {getIconComponent(treatment.icon)}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {treatment.description}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-50">
                  <button
                    onClick={() => setActiveDetailTreatment(treatment)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    <Info className="h-3.5 w-3.5 text-blue-600" />
                    Details
                  </button>
                  <button
                    onClick={() => onBookTreatment(treatment.id)}
                    className="ml-auto inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    Book Now
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
            <p className="text-sm font-medium text-slate-400">No services found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
            >
              Clear filters and search
            </button>
          </div>
        )}

      </div>

      {/* Individual Treatment Detail Modal */}
      <AnimatePresence>
        {activeDetailTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetailTreatment(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white p-8 shadow-2xl border border-slate-100 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {getIconComponent(activeDetailTreatment.icon)}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md">
                    {activeDetailTreatment.category} Service
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">{activeDetailTreatment.title}</h4>
                </div>
              </div>

              <div className="my-6">
                <h5 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">Treatment Overview</h5>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {activeDetailTreatment.longDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-50">
                <button
                  onClick={() => {
                    const tid = activeDetailTreatment.id;
                    setActiveDetailTreatment(null);
                    onBookTreatment(tid);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-600/10 hover:bg-blue-700 transition-all cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule Appointment
                </button>
                <button
                  onClick={() => setActiveDetailTreatment(null)}
                  className="w-full sm:w-auto rounded-xl border border-slate-200 px-5 py-3 text-xs font-medium text-slate-500 hover:text-slate-800 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
