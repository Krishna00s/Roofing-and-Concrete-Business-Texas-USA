import React from 'react';
import { PROOF_STATS } from '../data/siteData';

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {PROOF_STATS.map((s, i) => (
        <div key={i} className="p-4 bg-white rounded border border-cream-300">
          <div className="font-serif text-2xl font-bold text-charcoal-900">{s.value}</div>
          <div className="text-xs text-charcoal-500">{s.label}</div>
        </div>
      ))}
    </div>
  );
};
