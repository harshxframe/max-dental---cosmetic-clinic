import { Star, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 bg-slate-50/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Overall Rating Block (4 columns) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-extrabold text-blue-600 tracking-wider uppercase">
                Patient Testimonials
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight font-display text-slate-900">
                What Our Patients Say
              </h2>
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
            </div>

            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              Real opinions from real patients treated in our Unnao clinic. We take pride in building healthy smiles and lifelong trust.
            </p>

            {/* Overall Rating Box */}
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm space-y-6">
              <div>
                <span className="text-5xl font-extrabold text-slate-900 font-display">4.7</span>
                <span className="text-sm font-semibold text-slate-400 ml-1">/ 5</span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} 
                  />
                ))}
                <span className="text-xs font-bold text-slate-800 ml-2">Very Good</span>
              </div>

              <p className="text-xs text-slate-400 font-medium">
                Based on 49 verified Google Business reviews in Unnao.
              </p>

              {/* Star Distribution Visualizers */}
              <div className="space-y-2 border-t border-slate-50 pt-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-3 text-slate-400">5★</span>
                  <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '88%' }} />
                  </div>
                  <span className="w-8 text-right text-slate-500 font-medium">88%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-3 text-slate-400">4★</span>
                  <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-blue-600/60 rounded-full" style={{ width: '10%' }} />
                  </div>
                  <span className="w-8 text-right text-slate-500 font-medium">10%</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-3 text-slate-400">3★</span>
                  <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-slate-200 rounded-full" style={{ width: '2%' }} />
                  </div>
                  <span className="w-8 text-right text-slate-500 font-medium">2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Testimonials Cards (8 columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="group flex flex-col justify-between rounded-3xl border border-slate-150/60 bg-white p-8 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Rating Stars & Verified Logo */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase">
                      Google Review
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-600 italic font-sans leading-relaxed text-left">
                    "{review.text}"
                  </p>
                </div>

                {/* Reviewer Profile */}
                <div className="flex items-center gap-3.5 mt-8 pt-4 border-t border-slate-50">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 font-display text-xs font-bold text-slate-700 uppercase">
                    {review.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900">{review.author}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
