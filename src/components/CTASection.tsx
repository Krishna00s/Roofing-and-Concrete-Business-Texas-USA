import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle, Mail, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface CTASectionProps {
  onOpenEstimate: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenEstimate }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Driveway' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-cream-100 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        
        {/* Split Box matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-cream-300 shadow-2xl">
          
          {/* Left Column: Form & Call-to-action (Warm Cream/Stone Background) */}
          <div className="lg:col-span-7 bg-[#eeebe3] p-8 sm:p-12 md:p-14 space-y-6 flex flex-col justify-center">
            
            <div className="space-y-2">
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 leading-tight">
                Ready to start <br />
                your project?
              </h2>
              <p className="font-sans text-charcoal-500 text-base">
                Let’s build something strong and beautiful together.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-white rounded-xl border border-sage-600/30 space-y-3">
                <div className="flex items-center gap-2 text-sage-600 font-bold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Estimate Request Submitted!</span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Thank you, <strong className="text-charcoal-900">{formData.name}</strong>. A Prairie Concrete specialist will call you at <strong className="text-sage-600">{formData.phone}</strong> shortly to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-cream-300 rounded-lg text-charcoal-900 text-sm focus:outline-none focus:border-sage-600"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-cream-300 rounded-lg text-charcoal-900 text-sm focus:outline-none focus:border-sage-600"
                  />
                </div>

                <div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-cream-300 rounded-lg text-charcoal-900 text-sm focus:outline-none focus:border-sage-600"
                  >
                    <option value="Driveway">Driveway Pour / Replacement</option>
                    <option value="Patio">Stamped Concrete Patio</option>
                    <option value="Pool Deck">Pool Deck Surround</option>
                    <option value="Retaining Wall">Retaining Wall</option>
                    <option value="Foundation">Structural Foundation Slab</option>
                    <option value="Commercial">Commercial Concrete</option>
                  </select>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-sage-600 hover:bg-sage-700 text-white text-xs font-sans font-bold tracking-widest uppercase rounded-full transition-all duration-200 shadow-xl shadow-sage-600/30 hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <span>GET A FREE ESTIMATE</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenEstimate}
                    className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 text-charcoal-900 border border-cream-300 text-xs font-sans font-bold tracking-widest uppercase rounded-full transition-all"
                  >
                    <span>OPEN ESTIMATE FORM</span>
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Direct Contact & WhatsApp Box */}
          <div className="lg:col-span-5 bg-forest-900 text-white p-8 sm:p-12 md:p-14 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              {/* Phone Icon Badge */}
              <div className="w-14 h-14 rounded-2xl bg-forest-950 border border-[#27332e] text-sage-500 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest">
                  OR CALL US DIRECTLY
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phoneFormatted}`}
                  className="block font-serif text-3xl sm:text-4xl font-normal text-white hover:text-sage-400 transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/14695558273?text=Hi%20Prairie%20Concrete,%20I'd%20like%20to%20get%20an%20estimate%20for%20my%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-950/90 border border-emerald-800/80 text-emerald-400 rounded-lg text-xs font-sans font-bold hover:bg-emerald-900/90 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat directly on WhatsApp ({COMPANY_INFO.phone})</span>
                </a>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Proudly serving Frisco, McKinney, Prosper, Celina, Plano, Allen & surrounding areas across North Texas.
              </p>
            </div>

            <div className="pt-6 border-t border-[#27332e] text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sage-500" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sage-500" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
