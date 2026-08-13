import React from 'react';
import { Truck, Home, Layers, Shield, Sun, Building2, ArrowRight } from 'lucide-react';
import { SERVICES, type ServiceItem } from '../data/siteData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      default: return <Truck className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-cream-100 relative border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-sans font-bold text-sage-600 uppercase tracking-widest">
            WHAT WE DO
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 leading-tight">
            Concrete solutions for every space.
          </h2>
        </div>

        {/* Minimal Icon Row (Matching Reference Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-cream-300">
          {SERVICES.map((service: ServiceItem, idx: number) => (
            <div
              key={service.id}
              className={`flex flex-col items-center text-center p-4 pt-6 md:pt-4 transition-transform hover:-translate-y-1 ${
                idx > 0 ? 'md:pl-6' : ''
              }`}
            >
              {/* Line Art Icon Container */}
              <div className="w-12 h-12 rounded-full bg-cream-200 text-sage-600 flex items-center justify-center mb-4 border border-cream-300">
                {getIcon(service.iconName)}
              </div>

              <h3 className="font-sans font-bold text-charcoal-900 text-sm mb-1">
                {service.title}
              </h3>

              <p className="text-xs text-charcoal-500 leading-relaxed max-w-[160px]">
                {service.shortDesc}
              </p>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="mt-14 text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold text-charcoal-900 hover:text-sage-600 uppercase tracking-widest transition-colors group"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 text-sage-600 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
