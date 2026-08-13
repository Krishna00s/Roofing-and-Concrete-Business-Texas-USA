import React from 'react';
import { ArrowRight, Shield, Award, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-0 overflow-hidden bg-forest-900">
      
      {/* Background Image with Cinematic Dusk Lighting & Dark Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="North Texas suburban home with concrete driveway and patio hardscape"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.05]"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-900/60 to-forest-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/50"></div>
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-8 pb-20 flex-1 flex items-center">
        <div className="max-w-2xl space-y-6">
          
          {/* Serif Architectural Headline matching reference image */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-white leading-[1.05] tracking-tight">
            Concrete <br />
            work that <br />
            stands the <br />
            test of time.
          </h1>

          {/* Subhead */}
          <p className="font-sans text-slate-200 text-base sm:text-lg font-normal max-w-lg leading-relaxed">
            {COMPANY_INFO.subTagline}
          </p>

          {/* Refined Pill Buttons matching reference image */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sage-600 hover:bg-sage-700 text-white text-xs font-sans font-bold tracking-widest uppercase rounded-full transition-all duration-200 shadow-xl shadow-sage-600/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>GET A FREE ESTIMATE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <a
              href="#projects"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-forest-950/60 hover:bg-forest-950/90 text-white border border-slate-400/40 text-xs font-sans font-bold tracking-widest uppercase rounded-full backdrop-blur-md transition-colors"
            >
              <span>VIEW OUR WORK</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Proof Bar matching reference image with thin dividers */}
      <div className="relative z-10 bg-forest-950/95 border-t border-[#27332e] py-6 px-6 md:px-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#27332e]">
          
          <div className="flex items-center gap-3.5 md:px-6">
            <div className="text-sage-500 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-sans font-bold text-white text-xs">15+ Years</div>
              <div className="text-[11px] text-slate-400">of Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:px-6">
            <div className="text-sage-500 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-sans font-bold text-white text-xs">Licensed & Insured</div>
              <div className="text-[11px] text-slate-400">Texas Proud</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:px-6">
            <div className="text-sage-500 shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-sans font-bold text-white text-xs">1,200+ Projects</div>
              <div className="text-[11px] text-slate-400">Completed</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 md:px-6">
            <div className="text-sage-500 shrink-0">
              <Award className="w-5 h-5 text-sage-500" />
            </div>
            <div>
              <div className="font-sans font-bold text-white text-xs">Top Rated</div>
              <div className="text-[11px] text-slate-400">by Homeowners</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
