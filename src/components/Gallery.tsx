import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Image, MapPin, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'All' | 'Garden Turnarounds' | 'Paving & Driveways' | 'Fencing' | 'Tree Surgery & Care'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tabs: ('All' | 'Garden Turnarounds' | 'Paving & Driveways' | 'Fencing' | 'Tree Surgery & Care')[] = [
    'All',
    'Garden Turnarounds',
    'Paving & Driveways',
    'Fencing',
    'Tree Surgery & Care',
  ];

  // Filter gallery items
  const filteredGallery = activeTab === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeTab);

  const openLightbox = (id: string) => {
    const originalIndex = GALLERY_DATA.findIndex((item) => item.id === id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (lightboxIndex === null) return;
    
    let newIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;
    if (newIndex >= GALLERY_DATA.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = GALLERY_DATA.length - 1;
    }
    setLightboxIndex(newIndex);
  };

  const activeLightboxItem: GalleryItem | null = lightboxIndex !== null
    ? GALLERY_DATA[lightboxIndex]
    : null;

  return (
    <section id="gallery" className="bg-navy-900 py-16 md:py-24 border-b border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-400 font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <Image className="w-3.5 h-3.5" />
            Our Portfolio
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proof of Our High-Class Work
          </h2>
          <p className="font-sans text-gray-400 mt-4 text-base sm:text-lg leading-relaxed">
            Take a look at garden transformations, closeboard fencing, and paving installations we have completed right here in Bradford. 
          </p>
        </div>

        {/* Filters Row */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 custom-scrollbar justify-start md:justify-center border-b border-navy-850/80">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-sans text-xs sm:text-sm font-bold rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/40 shadow-inner'
                  : 'bg-navy-950 text-gray-400 border-navy-850 hover:text-white hover:border-navy-700'
              }`}
            >
              {tab === 'All' ? 'View All Works' : tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid of Placeholder images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative bg-navy-950 rounded-xl overflow-hidden border border-navy-850 hover:border-emerald-500/30 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/30 transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-95 transition-opacity" />

                {/* Hover Quick Eye Indicator */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-emerald-500 text-navy-950 p-3 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Floating category marker */}
                <span className="absolute top-4 left-4 bg-navy-950/90 backdrop-blur-sm text-emerald-400 font-sans font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded border border-navy-850">
                  {item.category}
                </span>
              </div>

              {/* Title Content */}
              <div className="p-5 space-y-1">
                <p className="font-sans text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-500" />
                  Bradford Area
                </p>
                <h3 className="font-display font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-gray-400 line-clamp-2 pt-1 font-medium leading-normal">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="font-sans text-gray-400 text-base">Coming soon! Client is providing more project photos.</p>
          </div>
        )}

        {/* Gallery Trust footer line */}
        <div className="mt-12 text-center bg-navy-950 rounded-xl p-5 border border-navy-850 max-w-2xl mx-auto">
          <p className="font-sans text-xs sm:text-sm text-gray-400">
            🌳 <strong className="text-white">Note to client:</strong> Our layout serves as a high-performance, responsive placeholder framework. Once your portfolio photos are ready, they will sync directly into this beautiful layout instantly.
          </p>
        </div>

      </div>

      {/* STUNNING LIGHTBOX MODAL */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-[#030712]/98 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-fadeIn">
          
          {/* Header Bar */}
          <div className="w-full flex justify-between items-center z-10">
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-[9px] text-emerald-400 uppercase tracking-[0.2em]">
                {activeLightboxItem.category}
              </span>
              <span className="font-display font-black text-sm sm:text-base text-white">
                {activeLightboxItem.title}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="bg-navy-900 border border-navy-800 p-2 sm:p-3 rounded-full text-gray-400 hover:text-white hover:bg-navy-800 active:scale-95 transition-all cursor-pointer"
              title="Close gallery"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Main Visual Frame with Navigation */}
          <div className="flex-grow flex items-center justify-between w-full max-w-5xl mx-auto py-4 relative">
            
            {/* Left Nav Button */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="bg-navy-900/90 border border-navy-800 hover:border-emerald-500/50 p-2.5 sm:p-3.5 rounded-full text-white hover:bg-navy-800 active:scale-90 transition-all cursor-pointer z-10"
              title="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white stroke-[2.5]" />
            </button>

            {/* Central Large Image */}
            <div className="relative max-h-[65vh] md:max-h-[75vh] max-w-[85%] mx-auto shadow-2xl rounded-lg overflow-hidden border border-navy-800">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="max-h-[65vh] md:max-h-[75vh] w-auto max-w-full object-contain mx-auto select-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Nav Button */}
            <button
              onClick={() => navigateLightbox('next')}
              className="bg-navy-900/90 border border-navy-800 hover:border-emerald-500/50 p-2.5 sm:p-3.5 rounded-full text-white hover:bg-navy-800 active:scale-90 transition-all cursor-pointer z-10"
              title="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white stroke-[2.5]" />
            </button>

          </div>

          {/* Bottom Captions & Location indicators */}
          <div className="w-full text-center max-w-2xl mx-auto z-10">
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed bg-navy-900/60 p-4 rounded-xl border border-navy-850">
              {activeLightboxItem.description}
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>Idle, Baildon, Shipley & Bradford Areas Covered</span>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
