import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Hammer } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'Services', href: '#services' },
    { title: 'About Us', href: '#about' },
    { title: 'Our Work', href: '#gallery' },
    { title: 'Reviews', href: '#reviews' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Contact Line */}
      <div className="bg-navy-950 text-gray-300 border-b border-navy-850 py-2.5 px-4 text-sm font-sans flex flex-col sm:flex-row justify-between items-center gap-2 z-50 relative">
        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Serving Bradford & Surrounding Areas
          </span>
          <span className="text-navy-500 font-medium hidden md:inline">|</span>
          <span className="hidden md:inline text-gray-400">Fully Insured & Certified Local Tradesmen</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:07405837953"
            className="flex items-center gap-1.5 text-gray-200 hover:text-emerald-400 transition-colors font-medium font-mono text-xs sm:text-sm"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500" />
            07405 837953
          </a>
          <span className="text-navy-500">|</span>
          <a
            href="https://wa.me/447405837953"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors text-xs sm:text-sm font-medium"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/10" />
            WhatsApp Chat
          </a>
        </div>
      </div>

      {/* Main Navigation bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-emerald-500/20 py-3'
            : 'bg-navy-900 border-b border-navy-850 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-2 rounded-md shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
              <Hammer className="w-5 h-5 text-navy-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white uppercase leading-none">
                JS <span className="text-emerald-500">Property</span>
              </span>
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-emerald-400 uppercase leading-none mt-1">
                Landscape & Maintenance
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-semibold text-gray-300 hover:text-white relative py-1 transition-colors before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-emerald-500 before:transition-all hover:before:w-full"
              >
                {item.href === '#home' ? 'Home' : item.title}
              </a>
            ))}
          </nav>

          {/* Nav CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:07405837953"
              className="bg-navy-850 hover:bg-navy-800 text-white font-mono font-bold text-sm px-4 py-2 rounded-md border border-navy-700 hover:border-emerald-500/40 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-500" />
              07405 837953
            </a>
            
            <button
              onClick={onQuoteClick}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-navy-950 font-display font-extrabold text-sm px-5 py-2 rounded-md shadow-md hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Free Quotes
            </button>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:07405837953"
              className="bg-navy-850 p-2 rounded-md border border-navy-700 flex sm:hidden items-center text-white"
              title="Call JS Property"
            >
              <Phone className="w-5 h-5 text-emerald-500" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-md hover:bg-navy-850 focus:outline-none transition-colors border border-navy-800"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden font-sans">
          <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-navy-900 border-l border-navy-800 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-500 p-1.5 rounded text-navy-950">
                    <Hammer className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="font-display font-black text-lg text-white">JS PROPERTY</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-navy-800 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-base font-bold text-gray-300 hover:text-emerald-400 py-2 border-b border-navy-850 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-navy-800">
              <a
                href="tel:07405837953"
                className="w-full bg-navy-850 hover:bg-navy-800 text-white font-mono font-bold text-center py-3 rounded-md border border-navy-700 flex items-center justify-center gap-2.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                07405 837953
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onQuoteClick();
                }}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-navy-950 font-display font-extrabold text-center py-3 rounded-md shadow-md transition-all uppercase tracking-wider text-sm"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
