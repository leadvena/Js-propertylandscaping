import { Shield, Sparkles, MapPin, Users2, Hammer } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      title: 'Bradford Local & Proud',
      desc: 'Based right here in Bradford, West Yorkshire—covering Idle, Wrose, Baildon, Shipley, Clayton, and beyond with quick response times.',
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: 'Liability Protected',
      desc: 'We operate with comprehensive £2 Million Public Liability Insurance, providing total security and peace of mind during heavy excavation or rigging.',
    },
    {
      icon: <Users2 className="w-5 h-5 text-emerald-400" />,
      title: 'Professional & Reliable Crew',
      desc: 'No ghosting. We turn up on time, maintain clean safety yards, tidy up every leaf before leaving, and commit to friendly communications.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      title: 'Precision Trade Finish',
      desc: 'We are strict with subbase layers and mortar ratios. Hardcore aggregates are heavily compacted to ensure your driveway and patio stay level for years.',
    },
  ];

  return (
    <section id="about" className="bg-navy-950 py-16 md:py-24 border-b border-navy-850 relative overflow-hidden">
      {/* Background soft green circle gradient */}
      <div className="absolute right-0 top-1/4 w-[#400px] h-[#400px] rounded-full bg-emerald-500/5 blur-[120px] select-none pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Left Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl opacity-15 filter blur-lg" />
            <div className="relative bg-navy-900 border border-navy-800 p-3 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
                alt="Our reliable Bradford landscaping team"
                className="w-full h-auto rounded-xl object-cover select-none"
                referrerPolicy="no-referrer"
              />
              
              <div className="p-4 sm:p-5 mt-3 bg-navy-950/85 backdrop-blur-sm rounded-lg border border-navy-800">
                <blockquote className="italic font-sans text-sm text-gray-300">
                  "Absolutely stellar workmanship from the boys at JS. Finished our fencing and cleaned our front drive better than we ever thought possible."
                </blockquote>
                <p className="font-display font-bold text-xs text-emerald-400 uppercase tracking-widest mt-2">
                  — Resident in Idle, Bradford
                </p>
              </div>
            </div>
          </div>

          {/* About Right Context Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-emerald-500 font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              About JS Property Landscape
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Honest Bradford Tradesmen Serving West Yorkshire
            </h2>
            
            <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              JS Property Landscape is a recognized local business based in Bradford. Built on straightforward values, we combine robust landscaping with general property maintenance programs so you only ever have to hire one reliable crew.
            </p>

            <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed">
              Whether it is setting flat Indian sandstone flags, rebuilding gale-damaged fencing panels, felling risk-filled conifer trees, clean-sealing driveways, or clearing commercial estates, we have the tools, machinery, and dedication.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {values.map((v) => (
                <div key={v.title} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="bg-emerald-500/15 p-1.5 rounded text-emerald-500">
                      {v.icon}
                    </div>
                    <h4 className="font-display font-black text-sm text-white tracking-tight">
                      {v.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed pl-8">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call Action Panel */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl flex flex-col sm:flex-row items-center sm:justify-between gap-4 mt-8">
              <div className="text-center sm:text-left space-y-0.5">
                <span className="text-xs font-bold text-gray-400">Need immediate answers?</span>
                <p className="text-white font-display font-black text-sm tracking-tight">
                  Speak directly to our site foreman now!
                </p>
              </div>
              <a
                href="tel:07405837953"
                className="bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-display font-black text-xs sm:text-sm px-6 py-3 rounded-md transition-all uppercase tracking-wider shadow-md"
              >
                07405 837953
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
