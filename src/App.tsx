import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';

const App: React.FC = () => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const handleOpenEstimate = () => {
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream-100 text-charcoal-900 font-sans selection:bg-sage-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenEstimate={handleOpenEstimate} />

      {/* Main Sections */}
      <main>
        {/* 01 — Hero */}
        <Hero onOpenEstimate={handleOpenEstimate} />

        {/* 02 — Brand Statement / Intro */}
        <BrandStatement />

        {/* 03 — Services */}
        <Services />

        {/* 04 — Recent Projects */}
        <Projects />

        {/* 05 — Our Process */}
        <Process />

        {/* 06 — Testimonials & Proof */}
        <Testimonials />

        {/* 07 — Contact & CTA Banner */}
        <CTASection onOpenEstimate={handleOpenEstimate} />
      </main>

      {/* 08 — Footer */}
      <Footer onOpenEstimate={handleOpenEstimate} />

      {/* Dedicated Free Estimate & Contact Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
      />
    </div>
  );
};

export default App;
