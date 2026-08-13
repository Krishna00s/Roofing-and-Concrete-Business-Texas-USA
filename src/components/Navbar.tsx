import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenEstimate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#171e1b]/95 backdrop-blur-md border-b border-[#2b3631] py-3.5 shadow-lg' 
          : 'bg-gradient-to-b from-[#171e1b]/90 via-[#171e1b]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Brand Logo [P] PRAIRIE CONCRETE CO. */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border-2 border-white/90 rounded flex items-center justify-center font-serif text-lg font-bold text-white group-hover:border-sage-500 transition-colors">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-lg tracking-wider text-white leading-none">
              {COMPANY_INFO.name}
            </span>
            <span className="font-sans font-medium text-[10px] tracking-widest text-slate-300 leading-tight uppercase">
              {COMPANY_INFO.subName}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-sans font-medium tracking-widest text-slate-200 uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sage-500 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenEstimate}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-white hover:bg-slate-100 text-charcoal-900 text-xs font-sans font-bold tracking-widest uppercase rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>GET A FREE ESTIMATE</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-sage-500 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-6 pt-4 pb-6 bg-[#171e1b] border-b border-[#2b3631] space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-sans font-medium text-slate-200 hover:text-sage-500 border-b border-[#25302c]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full flex items-center justify-center px-5 py-3 bg-sage-600 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full shadow"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
