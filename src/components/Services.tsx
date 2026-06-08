import React, { useState } from 'react';
import { Search, Plus, Check, Info, Hammer } from 'lucide-react';
import { Service } from '../types';
import { SERVICES_DATA } from '../data';

interface ServicesProps {
  selectedServices: string[];
  onToggleService: (serviceName: string) => void;
  onQuoteClick: () => void;
}

type CategoryType = 'All' | 'Landscaping' | 'Property Maintenance' | 'Tree & Garden Care' | 'Paving & Fencing';

export default function Services({ selectedServices, onToggleService, onQuoteClick }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const categories: CategoryType[] = ['All', 'Paving & Fencing', 'Landscaping', 'Tree & Garden Care', 'Property Maintenance'];

  // Filter & search service items
  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (service.detailedDescription && service.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCardToggle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="services" className="bg-navy-900 py-16 md:py-24 border-b border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-400 font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <Hammer className="w-3.5 h-3.5" />
            Our Professional Lineup
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Landscaping & Trades
          </h2>
          <p className="font-sans text-gray-400 mt-4 text-base sm:text-lg leading-relaxed">
            From emergency stump clearing to driveway block paving structures, we handle every aspect of your outdoor spaces with precision.
          </p>
        </div>

        {/* Search & Category Filter Controls Row */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-navy-850">
          
          {/* Categories Slider */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 custom-scrollbar justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md font-sans text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-navy-950 border-emerald-400 shadow-md shadow-emerald-950/20'
                    : 'bg-navy-950 text-gray-400 border-navy-800 hover:text-white hover:border-navy-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Core Search bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search services (e.g. Fence)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-950 text-white placeholder-gray-500 font-sans text-sm rounded-md border border-navy-800 focus:border-emerald-500 pl-10 pr-4 py-2.5 outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
          </div>

        </div>

        {/* Selected Services Ribbon indicator */}
        {selectedServices.length > 0 && (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-4 py-3.5 rounded-lg mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
            <div className="text-center sm:text-left text-sm">
              <span className="font-bold text-white">Selected For Quote:</span> {selectedServices.length} {selectedServices.length === 1 ? 'service' : 'services'} ready to estimate.
            </div>
            <button
              onClick={onQuoteClick}
              className="bg-[#10b981] hover:bg-[#059669] text-navy-950 font-display font-black text-xs uppercase px-4 py-2 rounded transition-all cursor-pointer shadow-md tracking-wider"
            >
              Fill Estimate Now
            </button>
          </div>
        )}

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const isSelected = selectedServices.includes(service.name);
              const isExpanded = expandedCard === service.id;

              return (
                <div
                  key={service.id}
                  className={`bg-navy-950 rounded-xl border transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
                    isSelected
                      ? 'border-emerald-500 shadow-lg shadow-emerald-950/20 scale-[1.01]'
                      : 'border-navy-850 hover:border-navy-700 hover:shadow-xl hover:shadow-black/20'
                  }`}
                >
                  {/* Service Image and Tag */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-90" />
                    
                    {/* Category Stamp Tag */}
                    <span className="absolute top-4 left-4 bg-navy-900/90 backdrop-blur-sm text-emerald-400 font-sans font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border border-navy-800">
                      {service.category}
                    </span>

                    {service.featured && (
                      <span className="absolute top-4 right-4 bg-emerald-600 text-navy-950 font-display font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                        Our Signature
                      </span>
                    )}

                    <h3 className="absolute bottom-4 left-4 right-4 font-display font-extrabold text-lg text-white group-hover:text-emerald-400 transition-colors leading-snug">
                      {service.name}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <p className="font-sans text-sm text-gray-400 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Expanded Section toggle */}
                      {isExpanded && service.detailedDescription && (
                        <div className="pt-2 border-t border-navy-850 mt-2 text-xs text-gray-300 leading-snug space-y-1 animate-slideDown">
                          <p className="font-sans italic text-emerald-400 font-medium">How we do it:</p>
                          <p className="font-sans">{service.detailedDescription}</p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-navy-850/80 flex items-center justify-between gap-2.5 mt-auto">
                      {/* More info trigger */}
                      {service.detailedDescription ? (
                        <button
                          onClick={(e) => handleCardToggle(service.id, e)}
                          className="text-xs font-semibold text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer py-1"
                        >
                          <Info className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{isExpanded ? 'Less info' : 'Learn process'}</span>
                        </button>
                      ) : (
                        <div />
                      )}

                      {/* Add to Quote Button */}
                      <button
                        onClick={() => onToggleService(service.name)}
                        className={`text-xs font-display font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40'
                            : 'bg-navy-900 border border-navy-800 text-gray-300 hover:text-white hover:border-emerald-500/50'
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-gray-400" />
                            <span>Add to Quote</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center bg-navy-950 rounded-xl p-12 border border-navy-850">
            <p className="font-sans text-gray-400 text-lg">No services found matching your query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 bg-emerald-500 text-navy-950 text-xs font-display font-bold px-4 py-2 rounded"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Footer Subtitle */}
        <div className="mt-14 text-center">
          <p className="font-sans text-sm text-gray-500">
            Can't find a specific commercial garden turnaround or property repair program? <br className="hidden sm:inline" />
            <span className="text-gray-300 font-semibold selection:text-white hover:text-emerald-400 transition-colors cursor-pointer" onClick={onQuoteClick}>
              Call or message with your requirements — we cover all trade aspects.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
