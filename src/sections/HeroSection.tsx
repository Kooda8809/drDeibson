import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';
import { trackEvent } from '../utils/analytics';

interface HeroSectionProps {
  onOpenAppointmentModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointmentModal }) => {
  const handleExploreClick = () => {
    trackEvent('scroll_hero_cta', { target: 'autoridade' });
    const target = document.getElementById('autoridade');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAppointmentClick = () => {
    trackEvent('click_agendamento', { source: 'hero_primary_cta' });
    onOpenAppointmentModal();
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen w-full flex items-center pt-20 md:pt-24 pb-16 overflow-hidden bg-[#0A0A0D]">
      {/* FULL-BLEED HERO BACKGROUND IMAGE (High-Resolution Original) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/assets/imagem-hero-full.avif"
          alt="Dr. Deibson Fernandes - Especialista em Lentes em Resina"
          className="w-full h-full object-cover object-[75%_top] sm:object-[70%_center] md:object-right-center lg:object-center brightness-[0.98] contrast-[1.02]"
          loading="eager"
        />

        {/* Sophisticated Editorial Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090C] via-[#09090C]/80 to-transparent md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#09090C]/90 via-[#09090C]/60 to-transparent w-full lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090C]/40 via-transparent to-[#09090C]/90 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="site-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Direct Editorial Headline & Actions */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start pt-6 md:pt-0 animate-fade-in">
            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-[#F3F0EA] font-normal leading-[1.1] mb-6 tracking-tight drop-shadow-md">
              A harmonia perfeita entre a sua essência e o{' '}
              <span className="italic text-[#C5A880] font-normal block sm:inline">seu sorriso.</span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg lg:text-xl text-[#D0CDD5] font-sans font-light leading-relaxed mb-9 max-w-xl drop-shadow">
              Mais do que estética, entregamos confiança. Planejamentos visagistas exclusivos que respeitam os traços do seu rosto e revelam a sua melhor versão com máxima discrição.
            </p>

            {/* Pill Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleAppointmentClick}
                className="btn-pill-bronze flex items-center justify-center gap-2 group shadow-2xl"
              >
                <span>Agendar Avaliação</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={handleExploreClick}
                className="btn-pill-secondary bg-[#09090C]/80 border-white/20 text-[#F3F0EA] flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>Conheça o Trabalho</span>
              </button>
            </div>

            {/* Credentials Microbar */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-[rgba(243,240,234,0.15)] w-full text-xs text-[#DFCAAB]/90 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="font-bold text-[#F3F0EA]">{siteConfig.metrics.veneersCount}</span>
                <span className="text-[#A0A0A5]">Lentes Esculpidas</span>
              </div>

              <div className="hidden sm:block w-[1px] h-3 bg-[rgba(243,240,234,0.25)]" />

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="text-[#A0A0A5]">{siteConfig.credentials.display}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <button
            onClick={handleExploreClick}
            className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#A0A0A5] hover:text-[#C5A880] transition-colors group"
            aria-label="Rolar para explorar"
          >
            <span>Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-[rgba(243,240,234,0.3)] flex items-start justify-center p-1 group-hover:border-[#C5A880]/70 transition-colors">
              <div className="w-1 h-2 rounded-full bg-[#C5A880] animate-scroll-dot" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
