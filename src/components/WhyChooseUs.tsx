import { UserCheck, Cpu, Smile, IndianRupee, ShieldCheck, Heart } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  // Map icons to corresponding components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="h-6 w-6 text-blue-600" />;
      case 'Laptop': return <Cpu className="h-6 w-6 text-blue-600" />;
      case 'Sparkles': return <Smile className="h-6 w-6 text-blue-600" />;
      case 'IndianRupee': return <IndianRupee className="h-6 w-6 text-blue-600" />;
      case 'ShieldCheck': return <ShieldCheck className="h-6 w-6 text-blue-600" />;
      case 'Heart': return <Heart className="h-6 w-6 text-blue-600" />;
      default: return <Heart className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header Title */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <span className="text-xs font-extrabold text-blue-600 tracking-wider uppercase">
            The Max Dental Advantage
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight font-display text-slate-900 sm:text-4xl">
            Why Patients in Unnao Trust Our Clinic
          </h2>
          <div className="mx-auto h-1 w-12 bg-blue-600 rounded-full" />
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            We are dedicated to maintaining the highest clinical standards of health, comfort, safety, and modern dental technology.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="group flex flex-col items-start rounded-3xl border border-slate-100 bg-slate-50/50 p-8 hover:bg-white hover:shadow-xl hover:border-slate-200/60 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xs border border-slate-100 group-hover:scale-105 group-hover:bg-blue-50 transition-all">
                {getIcon(item.icon)}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-slate-900 mt-6 mb-2 font-display">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
