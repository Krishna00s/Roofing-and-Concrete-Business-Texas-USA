import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from '../data/siteData';

interface FooterProps {
  onOpenEstimate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimate }) => {
  return (
    <footer className="bg-cream-100 text-charcoal-500 font-sans border-t border-cream-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* 5-Column Grid matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-cream-300">
          
          {/* Col 1: Logo & Brand Description (Cols 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-charcoal-900 rounded flex items-center justify-center font-serif text-base font-bold text-charcoal-900">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-base tracking-wider text-charcoal-900 leading-none">
                  {COMPANY_INFO.name}
                </span>
                <span className="font-sans font-medium text-[9px] tracking-widest text-sage-600 leading-tight uppercase">
                  {COMPANY_INFO.subName}
                </span>
              </div>
            </a>

            <p className="text-xs text-charcoal-500 leading-relaxed max-w-sm">
              Concrete craftsmanship built on integrity, communication, and pride. Serving North Texas with quality that lasts.
            </p>

            {onOpenEstimate && (
              <div>
                <button
                  onClick={onOpenEstimate}
                  className="px-5 py-2 bg-sage-600 hover:bg-sage-700 text-white font-sans font-bold text-[11px] uppercase tracking-wider rounded-full shadow"
                >
                  Request a Free Estimate
                </button>
              </div>
            )}
          </div>

          {/* Col 2: SERVICES (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans font-bold text-charcoal-900 text-xs uppercase tracking-wider">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-sage-600 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: COMPANY (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans font-bold text-charcoal-900 text-xs uppercase tracking-wider">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-sage-600 transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-sage-600 transition-colors">Our Process</a></li>
              <li><a href="#projects" className="hover:text-sage-600 transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-sage-600 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-sage-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: SERVICE AREAS (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans font-bold text-charcoal-900 text-xs uppercase tracking-wider">
              SERVICE AREAS
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_AREAS.map((city, idx) => (
                <li key={idx} className="hover:text-sage-600 transition-colors">
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: CONTACT (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans font-bold text-charcoal-900 text-xs uppercase tracking-wider">
              CONTACT
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <a href={`tel:${COMPANY_INFO.phoneFormatted}`} className="flex items-center gap-2 text-charcoal-900 hover:text-sage-600 transition-colors font-medium">
                <Phone className="w-3.5 h-3.5 text-sage-600 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/14695558273?text=Hi%20Prairie%20Concrete,%20I'd%20like%20to%20get%20an%20estimate%20for%20my%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>WhatsApp Chat</span>
              </a>

              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-sage-600 transition-colors">
                <Mail className="w-3.5 h-3.5 text-sage-600 shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2 text-charcoal-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-sage-600 shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.fullTitle}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-sage-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sage-600 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
