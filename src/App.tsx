import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadge from './components/TrustBadge';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import { Hammer, Phone, MessageSquare, MapPin, Mail, Clock, ArrowUp, Calendar } from 'lucide-react';

export default function App() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Smooth-scroll helper targeting Quote Form
  const handleScrollToQuote = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((name) => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  // Structured Schema data for SEO crawlers
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "name": "JS Property Landscape",
    "alternateName": "JS Property Landscape & Property Maintenance",
    "image": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
    "telephone": "07405 837953",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bradford",
      "addressRegion": "West Yorkshire",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.7959",
      "longitude": "-1.7518"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:30",
      "closes": "18:00"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Bradford" },
      { "@type": "AdministrativeArea", "name": "Idle" },
      { "@type": "AdministrativeArea", "name": "Wrose" },
      { "@type": "AdministrativeArea", "name": "Baildon" },
      { "@type": "AdministrativeArea", "name": "Shipley" },
      { "@type": "AdministrativeArea", "name": "Clayton" },
      { "@type": "AdministrativeArea", "name": "West Yorkshire" }
    ]
  };

  return (
    <div className="min-h-screen bg-navy-950 text-gray-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-navy-950 font-sans">
      
      {/* Dynamic business schema tag embedded for search spiders */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>

      {/* Header bar */}
      <Navbar onQuoteClick={handleScrollToQuote} />

      {/* Main layout contents */}
      <main className="flex-grow">
        <Hero onQuoteClick={handleScrollToQuote} />
        <TrustBadge />
        <Services
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
          onQuoteClick={handleScrollToQuote}
        />
        <About />
        <Gallery />
        <Reviews />
        <ContactForm
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
        />
      </main>

      {/* Footer block */}
      <footer className="bg-navy-950 border-t border-navy-850 pt-16 pb-8 text-sm font-sans z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-navy-850">
            
            {/* Column 1: Brand details */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-500 p-1.5 rounded text-navy-950">
                  <Hammer className="w-4.5 h-4.5 stroke-[2.5]" />
                </div>
                <span className="font-display font-black text-xl text-white uppercase tracking-tight">
                  JS <span className="text-emerald-500">Property</span>
                </span>
              </div>
              
              <p className="font-sans text-gray-400 font-medium leading-relaxed max-w-sm">
                Professional property maintenance & bespoke landscaping based in Bradford, UK. Trees, fencing, flags, block paved driveways, and total garden transformations.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="tel:07405837953"
                  className="bg-navy-900 border border-navy-800 p-2.5 rounded-md hover:border-emerald-500/50 hover:bg-navy-850 text-emerald-400 transition-colors"
                  title="Call Phone"
                >
                  <Phone className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://wa.me/447405837953"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#10b981]/10 border border-emerald-500/20 p-2.5 rounded-md hover:border-emerald-500/60 hover:bg-[#10b981]/20 text-emerald-400 transition-colors"
                  title="Message WhatsApp"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-display font-black text-white text-sm uppercase tracking-wider">
                Our Base Operations:
              </h4>
              <ul className="space-y-2.5 text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Bradford & Surrounds</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Mon - Sat: 07:30 - 18:00</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sunday: Emergency Calls</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Professional assurances */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-display font-black text-white text-sm uppercase tracking-wider">
                Official Certifications:
              </h4>
              <p className="text-gray-400 font-sans leading-relaxed">
                All property repairs, tree surgery felling, fencings, and excavations are guaranteed and fully protected under <strong className="text-white">£2M Public Liability Insurance cover</strong>.
              </p>
              <div className="p-3 bg-navy-900 border border-navy-850 rounded text-xs text-gray-500">
                Bradford, West Yorkshire municipal codes fully compliant. No job too big, no job too small.
              </div>
            </div>

          </div>

          {/* Copyright, return top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 font-sans text-xs text-center sm:text-left">
              JS Property Landscape © 2026. All rights reserved. Professional Landscaping & Property Maintenance. Bradford, UK.
            </p>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-white flex items-center gap-1 text-xs font-bold leading-none py-1 block cursor-pointer transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>
      </footer>

    </div>
  );
}

