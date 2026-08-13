import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-sans font-bold text-sage-600 uppercase tracking-widest">
                BUILT ON PURPOSE
              </span>
              
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 leading-[1.15] tracking-tight">
                We pour more than concrete. We build confidence.
              </h2>
            </div>

            <p className="font-sans text-charcoal-500 text-base leading-relaxed">
              From the first consultation to the final finish, we bring craftsmanship, communication, and care to every project we take on across North Texas.
            </p>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold text-charcoal-900 hover:text-sage-600 uppercase tracking-widest transition-colors group"
              >
                <span>LEARN MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-sage-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Widescreen Outdoor Living Image */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-cream-300 relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Widescreen patio hardscape with outdoor seating and fire pit in Texas"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center filter brightness-95"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
