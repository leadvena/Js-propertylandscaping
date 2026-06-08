import { Shield, CheckCircle, ThumbsUp } from 'lucide-react';

export default function TrustBadge() {
  return (
    <section className="bg-navy-950 py-10 border-b border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 rounded-xl p-6 md:p-8 border border-navy-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Trust Statement */}
            <div className="lg:col-span-4 space-y-2 text-center lg:text-left">
              <span className="text-emerald-500 font-bold uppercase tracking-wider text-xs">Vetted & Recommended</span>
              <h4 className="font-display font-black text-2xl text-white">Trustworthy Local Tradesmen</h4>
              <p className="font-sans text-sm text-gray-400">
                Bradford homeowners rely on us to deliver compliant fencing, clean patios, and pristine gardens.
              </p>
            </div>

            {/* Checkatrade Pure CSS Badge Block */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white text-navy-950 rounded-xl p-5 border border-gray-200 shadow-md w-full max-w-[280px] hover:scale-105 transition-transform flex flex-col justify-between relative overflow-hidden select-none">
                {/* Checkatrade red/blue banner strip */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600" />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    <span className="font-display font-black text-base tracking-tight leading-none text-[#1b2a47]">
                      Checkatrade
                    </span>
                    <span className="text-[9px] font-sans font-extrabold tracking-wider text-gray-500 uppercase leading-none mt-1">
                      Verified Member
                    </span>
                  </div>
                  <div className="bg-[#10b981] text-white p-1 rounded-full">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>

                <div className="my-3.5 border-t border-dashed border-gray-200" />

                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-sans font-bold text-gray-500 uppercase">Average Score</span>
                    <span className="font-display font-black text-4xl text-[#1e365c] tracking-tighter">9.9</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end">
                      <span className="text-xs font-bold text-[#10b981]">★★★★★</span>
                    </div>
                    <span className="text-[10px] font-sans font-bold text-gray-400">Bradford Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of the Badges */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="bg-navy-950 p-4 rounded-lg border border-navy-800 text-center flex flex-col items-center justify-center space-y-1">
                <Shield className="w-6 h-6 text-emerald-500 mb-1" />
                <span className="text-white font-display font-bold text-xs uppercase tracking-wider">£2M Insured</span>
                <span className="text-[10px] text-gray-500 font-sans">Full Public Liability</span>
              </div>
              
              <div className="bg-navy-950 p-4 rounded-lg border border-navy-800 text-center flex flex-col items-center justify-center space-y-1">
                <ThumbsUp className="w-6 h-6 text-emerald-500 mb-1" />
                <span className="text-white font-display font-bold text-xs uppercase tracking-wider">100% Honest</span>
                <span className="text-[10px] text-gray-500 font-sans">No Hidden Fees</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
