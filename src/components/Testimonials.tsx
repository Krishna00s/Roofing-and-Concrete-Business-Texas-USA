import React, { useState } from 'react';
import { Quote, Star, MapPin } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/siteData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cream-100 relative border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <span className="text-xs font-sans font-bold text-sage-600 uppercase tracking-widest">
            TRUSTED ACROSS NORTH TEXAS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 leading-tight">
            Homeowners trust us for a reason.
          </h2>
        </div>

        {/* Split Grid: Quote Left, Photo & Stats Floating Box Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Testimonial Quote Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-cream-300 shadow-xl relative space-y-6">
              <Quote className="w-10 h-10 text-sage-600/30" />
              
              <p className="font-sans text-charcoal-900 text-base md:text-lg leading-relaxed italic">
                "{DEMO_TESTIMONIALS[activeIndex].quote}"
              </p>

              <div className="pt-2 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <div className="font-sans font-bold text-charcoal-900 text-sm">
                    — {DEMO_TESTIMONIALS[activeIndex].author}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-charcoal-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-sage-600" />
                    <span>{DEMO_TESTIMONIALS[activeIndex].location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Dot Indicators */}
            <div className="flex items-center gap-2 pl-2">
              {DEMO_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === idx ? 'bg-sage-600 w-6' : 'bg-cream-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: House Photo with Floating Proof Stats Box */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-cream-300 relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Texas suburban home with professional concrete driveway"
                className="w-full h-[400px] md:h-[460px] object-cover object-center filter brightness-95"
              />
              
              {/* Floating White Stats Card matching reference image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-cream-300 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 text-center divide-x divide-cream-200">
                  <div>
                    <div className="font-serif text-3xl font-bold text-charcoal-900">15+</div>
                    <div className="text-[11px] font-sans font-medium text-charcoal-500 mt-1">Years Experience</div>
                  </div>
                  <div>
                    <div className="font-serif text-3xl font-bold text-charcoal-900">1,200+</div>
                    <div className="text-[11px] font-sans font-medium text-charcoal-500 mt-1">Projects Completed</div>
                  </div>
                  <div>
                    <div className="font-serif text-3xl font-bold text-charcoal-900 flex items-center justify-center gap-1">
                      <span>4.9</span>
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <div className="text-[11px] font-sans font-medium text-charcoal-500 mt-1">Average Rating</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
