import { Star, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="bg-navy-950 py-16 md:py-24 border-b border-navy-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-400 font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Client Testimonials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What Bradford Local Residents Say
          </h2>
          <p className="font-sans text-gray-400 mt-4 text-base sm:text-lg leading-relaxed">
            Don't just take our word for it. We pride ourselves on clean yards, secure fencing boundaries, and flat-laying stone craft. Read comments from local homeowners:
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-navy-900 border border-navy-850 hover:border-emerald-500/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden"
            >
              {/* Quotes decorative accent */}
              <div className="absolute right-6 top-4 font-display font-black text-6xl text-navy-800 pointer-events-none select-none">
                ”
              </div>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-navy-850 mt-6 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-extrabold text-white text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <span className="text-[10px] font-sans font-bold text-gray-500">
                    {t.date}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-gray-400 font-medium">{t.location}</span>
                  <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] bg-emerald-500/10 border border-emerald-500/15 rounded px-2 py-0.5">
                    {t.serviceCompleted}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Trust Pilot / Google reviews link */}
        <div className="mt-14 pt-10 border-t border-navy-850 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-center sm:text-left">
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                <span className="text-sm font-bold text-white">Rated Excellent</span>
                <span className="text-[#10b981]">★★★★★</span>
              </div>
              <p className="font-sans text-xs text-gray-500 font-medium">Over 50+ local reviews in West Yorkshire region</p>
            </div>
          </div>
          <p className="font-sans text-xs text-gray-500 text-center sm:text-right max-w-sm">
            All reviews represent direct residential checkups. Photos of completed work matching these projects can be found in our gallery portfolio section above.
          </p>
        </div>

      </div>
    </section>
  );
}
