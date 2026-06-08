import { Phone, MessageSquare, ShieldCheck, Star, Award, ChevronRight } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section id="home" className="relative bg-navy-950 overflow-hidden pt-8 pb-16 md:py-24 lg:py-32 border-b border-navy-850">
      
      {/* Background Graphic overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa8c1a68f6a?auto=format&fit=crop&w=1600&q=80"
          alt="Lawn roller and professional gardening service"
          className="w-full h-full object-cover select-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#142747_1px,transparent_1px),linear-gradient(to_bottom,#142747_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-emerald-400 font-sans text-xs sm:text-sm font-bold tracking-wide uppercase">
              <Award className="w-4 h-4" />
              Bradford's Top-Rated Landscaping Crew
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Professional <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                Landscaping & Property
              </span>
              <br />
              Maintenance in Bradford
            </h1>

            <p className="font-sans text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              "No Job Too Big, No Job Too Small." From dangerous tree removal to premium flagging, durable fencing, and garden transformations, we carry out dependable trade work that lasts.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onQuoteClick}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-navy-950 font-display font-black text-base px-8 py-4 rounded-md shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <span>Get a Free Quote</span>
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <a
                href="tel:07405837953"
                className="w-full sm:w-auto bg-navy-850 hover:bg-navy-800 text-white font-mono font-bold text-base px-8 py-4 rounded-md border border-navy-700 hover:border-emerald-500/40 transition-all flex items-center justify-center gap-3 shadow-md"
              >
                <Phone className="w-5 h-5 text-emerald-500 animate-bounce" />
                <span>07405 837953</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 border-t border-navy-850">
              <div className="text-center lg:text-left">
                <p className="font-display font-bold text-2xl text-white">£2M</p>
                <p className="font-sans text-xs text-gray-400 font-medium">Public Liability Insured</p>
              </div>
              <div className="text-center lg:text-left border-l border-navy-850 pl-4">
                <p className="font-display font-bold text-2xl text-white">100%</p>
                <p className="font-sans text-xs text-gray-400 font-medium">Reliable Local Work</p>
              </div>
              <div className="text-center lg:text-left border-l border-navy-850 pl-4">
                <p className="font-display font-bold text-2xl text-white">5★</p>
                <p className="font-sans text-xs text-gray-400 font-medium">Customer Reviews</p>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Dynamic Feature Box */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl filter blur-3xl z-0" />
            
            <div className="relative z-10 bg-gradient-to-b from-navy-850 to-navy-900 border border-navy-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
                Why Bradford Trusts JS
              </h3>
              
              <ul className="space-y-4 font-sans text-sm sm:text-base text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-500/10 p-1 rounded mt-0.5">
                    <span className="block w-2-h-2 rounded bg-emerald-500 font-sans font-bold text-xs px-1 text-navy-950">✓</span>
                  </div>
                  <div>
                    <strong className="text-white">Bradford Born & Bred:</strong> Family-run crew committed to transforming West Yorkshire gardens with pride.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-500/10 p-1 rounded mt-0.5">
                    <span className="block w-2-h-2 rounded bg-emerald-500 font-sans font-bold text-xs px-1 text-navy-950">✓</span>
                  </div>
                  <div>
                    <strong className="text-white">Robust Guarantee:</strong> We do not cut corners. Paving stones sit on concrete beds; posts are dug deep with steel concrete mixes.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-emerald-500/10 p-1 rounded mt-0.5">
                    <span className="block w-2-h-2 rounded bg-emerald-500 font-sans font-bold text-xs px-1 text-navy-950">✓</span>
                  </div>
                  <div>
                    <strong className="text-white">Transparent Pricing:</strong> Friendly on-the-spot quotes, zero pressure, local Bradford rates.
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-navy-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
                <span className="text-xs uppercase font-sans tracking-widest text-emerald-400 font-black">
                  100% Reliable Service
                </span>
              </div>
            </div>

            {/* Floating Quick Banner */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-gradient-to-r from-emerald-600 to-emerald-500 text-navy-950 font-display font-extrabold px-6 py-3 rounded-lg shadow-xl hidden md:flex items-center gap-3">
              <MessageSquare className="w-5 h-5 fill-navy-950" />
              <span>Response in under 2 hours!</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
