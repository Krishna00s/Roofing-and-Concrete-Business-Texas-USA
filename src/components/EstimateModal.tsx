import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, CheckCircle, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Driveways',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Frisco, TX',
    service: initialService || 'Driveways',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: 'Frisco, TX',
      service: 'Driveways',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-forest-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Main Modal Window */}
      <div className="relative w-full max-w-3xl bg-cream-100 border border-cream-300 rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-forest-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border border-sage-500 rounded flex items-center justify-center font-serif text-sm font-bold text-white">
              P
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal text-white">
                Request a Free Estimate
              </h3>
              <p className="text-[11px] text-slate-300 font-sans">
                North Texas Concrete Specialists • Frisco, Prosper, McKinney & surrounds
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-forest-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Side: Contact Form (Cols 7) */}
          <div className="md:col-span-7 p-6 sm:p-8 bg-white space-y-5">
            {submitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-2xl font-normal text-charcoal-900">
                    Estimate Request Received!
                  </h4>
                  <p className="text-xs text-charcoal-600 max-w-sm mx-auto leading-relaxed font-sans">
                    Thank you, <strong className="text-charcoal-900">{formData.name}</strong>. A Prairie Concrete specialist will call you at <strong className="text-sage-600">{formData.phone}</strong> to schedule your free on-site consultation.
                  </p>
                </div>

                <div className="p-3 bg-cream-100 rounded-xl border border-cream-300 text-xs text-charcoal-600 text-left space-y-1">
                  <div><strong>Service:</strong> {formData.service}</div>
                  <div><strong>Location:</strong> {formData.city}</div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-sage-600 hover:bg-sage-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full shadow"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-sans font-bold text-sage-600 uppercase tracking-widest">
                    GET STARTED
                  </span>
                  <h4 className="font-serif text-2xl font-normal text-charcoal-900">
                    Tell us about your project
                  </h4>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-sans font-bold text-charcoal-900 uppercase tracking-wider mb-1">
                    Full Name <span className="text-sage-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Miller"
                    className={`w-full px-3.5 py-2.5 bg-cream-50 border rounded-lg text-charcoal-900 text-sm focus:outline-none focus:border-sage-600 ${
                      errors.name ? 'border-red-500' : 'border-cream-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-[11px] mt-0.5">{errors.name}</p>}
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-sans font-bold text-charcoal-900 uppercase tracking-wider mb-1">
                      Phone Number <span className="text-sage-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(469) 555-0123"
                      className={`w-full px-3.5 py-2.5 bg-cream-50 border rounded-lg text-charcoal-900 text-sm focus:outline-none focus:border-sage-600 ${
                        errors.phone ? 'border-red-500' : 'border-cream-300'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] mt-0.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-charcoal-900 uppercase tracking-wider mb-1">
                      Email Address <span className="text-sage-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-3.5 py-2.5 bg-cream-50 border rounded-lg text-charcoal-900 text-sm focus:outline-none focus:border-sage-600 ${
                        errors.email ? 'border-red-500' : 'border-cream-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-0.5">{errors.email}</p>}
                  </div>
                </div>

                {/* City & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-sans font-bold text-charcoal-900 uppercase tracking-wider mb-1">
                      City / Area
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-cream-50 border border-cream-300 rounded-lg text-charcoal-900 text-sm focus:outline-none focus:border-sage-600"
                    >
                      <option value="Frisco, TX">Frisco, TX</option>
                      <option value="Prosper, TX">Prosper, TX</option>
                      <option value="McKinney, TX">McKinney, TX</option>
                      <option value="Celina, TX">Celina, TX</option>
                      <option value="Plano, TX">Plano, TX</option>
                      <option value="Allen, TX">Allen, TX</option>
                      <option value="Little Elm, TX">Little Elm, TX</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-charcoal-900 uppercase tracking-wider mb-1">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-cream-50 border border-cream-300 rounded-lg text-charcoal-900 text-sm focus:outline-none focus:border-sage-600"
                    >
                      <option value="Driveways">Driveway Pour / Replacement</option>
                      <option value="Patios & Walkways">Stamped Concrete Patio</option>
                      <option value="Pool Decks">Pool Deck Surround</option>
                      <option value="Retaining Walls">Retaining Wall</option>
                      <option value="Foundations & Slabs">Structural Slab / Foundation</option>
                      <option value="Commercial Concrete">Commercial Concrete</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-sans font-bold text-charcoal-900 uppercase tracking-wider mb-1">
                    Project Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, size, or timeline..."
                    className="w-full px-3.5 py-2 bg-cream-50 border border-cream-300 rounded-lg text-charcoal-900 text-sm focus:outline-none focus:border-sage-600 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-sage-600 hover:bg-sage-700 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-200 shadow-lg shadow-sage-600/20 flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT ESTIMATE REQUEST</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Side: Direct Contact Details & WhatsApp (Cols 5) */}
          <div className="md:col-span-5 bg-forest-900 text-white p-6 sm:p-8 space-y-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#27332e]">
            
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-sans font-bold text-sage-500 uppercase tracking-widest">
                  DIRECT CONTACT
                </span>
                <h4 className="font-serif text-2xl font-normal text-white">
                  We’re here to help.
                </h4>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs">
                
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-forest-950 border border-[#27332e] text-sage-500 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Phone Number</div>
                    <a href={`tel:${COMPANY_INFO.phoneFormatted}`} className="text-white hover:text-sage-400 font-bold text-sm">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-forest-950 border border-[#27332e] text-sage-500 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Email Address</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-sage-400 font-medium">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-forest-950 border border-[#27332e] text-sage-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Office Location</div>
                    <div className="text-slate-200 leading-relaxed">
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct Chat */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase">WhatsApp Direct Chat</div>
                    <a
                      href={`https://wa.me/14695558273?text=Hi%20Prairie%20Concrete,%20I'd%20like%20to%20get%20an%20estimate%20for%20my%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold text-xs mt-0.5 hover:underline"
                    >
                      <span>Chat on WhatsApp ({COMPANY_INFO.phone})</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Trust Badge */}
            <div className="pt-4 border-t border-[#27332e] text-[11px] text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sage-500 shrink-0" />
              <span>Licensed & Insured North Texas Concrete Contractor</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
