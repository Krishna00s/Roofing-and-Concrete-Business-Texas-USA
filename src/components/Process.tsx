import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-forest-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-sans font-bold text-sage-500 uppercase tracking-widest">
              OUR PROCESS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white leading-tight">
              Simple steps. <br />
              Solid results.
            </h2>
          </div>

          {/* Right Steps Grid (Matching Reference Stepper) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-forest-950/60 p-6 rounded-xl border border-[#27332e] hover:border-sage-500/50 transition-all duration-300 space-y-3 relative group"
              >
                {/* Step Number Circle */}
                <div className="w-10 h-10 rounded-full border border-sage-500/40 text-sage-500 font-sans font-bold text-sm flex items-center justify-center group-hover:bg-sage-600 group-hover:text-white transition-colors">
                  {step.number}
                </div>

                <h3 className="font-sans font-bold text-white text-base pt-1">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
