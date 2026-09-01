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
      {/* FULL-BLEED HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/assets/imagem-hero-full.avif"
          alt="Dr. Deibson Fernandes - Especialista em Lentes em Resina"
          className="w-full h-full object-cover object-[75%_top] sm:object-[70%_center] md:object-right-center lg:object-center brightness-[0.95] contrast-[1.05]"
          loading="eager"
        />

        {/* Sophisticated Editorial Gradient Masks - High Contrast & Depth */}
        {/* Mobile Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/85 via-60% to-[#070709]/40 md:hidden" />
        
        {/* Desktop Gradient Mask (Left Solid Readability Zone fading gracefully to the Right) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/90 via-45% to-transparent w-full lg:w-[65%]" />
        
        {/* Top Header Dark Vignette for navigation legibility */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#070709]/90 via-[#070709]/50 to-transparent pointer-events-none" />
        
        {/* Bottom Section Blend */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070709] to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="site-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Direct Editorial Headline & Actions */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start pt-6 md:pt-0 animate-fade-in">
            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-[#FFFFFF] font-normal leading-[1.12] mb-6 tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              A harmonia perfeita entre a sua essência e o{' '}
              <span className="italic text-[#DFCAAB] font-normal block sm:inline drop-shadow-[0_2px_12px_rgba(197,168,128,0.4)]">
                seu sorriso.
              </span>
            </h1>

            {/* Subhead with High Contrast & Luminosity */}
            <p className="text-base sm:text-lg lg:text-xl text-[#F3F0EA] font-sans font-normal leading-relaxed mb-9 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Mais do que estética, entregamos confiança. Planejamentos visagistas exclusivos que respeitam os traços do seu rosto e revelam a sua melhor versão com máxima discrição.
            </p>

            {/* Pill Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleAppointmentClick}
                className="btn-pill-bronze flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(197,168,128,0.35)]"
              >
                <span>Agendar Avaliação</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={handleExploreClick}
                className="btn-pill-secondary bg-[#0E0E12]/90 border-white/25 text-[#FFFFFF] hover:text-[#DFCAAB] flex items-center justify-center gap-2 backdrop-blur-md shadow-lg"
              >
                <span>Conheça o Trabalho</span>
              </button>
            </div>

            {/* Credentials Microbar */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-[rgba(243,240,234,0.2)] w-full text-xs text-[#F3F0EA] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#DFCAAB]" />
                <span className="font-bold text-[#FFFFFF] text-sm">{siteConfig.metrics.veneersCount}</span>
                <span className="text-[#DFCAAB] font-medium tracking-wide">Lentes Esculpidas</span>
              </div>

              <div className="hidden sm:block w-[1px] h-4 bg-white/30" />

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#DFCAAB]" />
                <span className="text-[#EAE6DF] font-medium tracking-wide">{siteConfig.credentials.display}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <button
            onClick={handleExploreClick}
            className="flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#EAE6DF] hover:text-[#DFCAAB] transition-colors group drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            aria-label="Rolar para explorar"
          >
            <span className="font-medium">Scroll to explore</span>
            <div className="w-5 h-8 rounded-none border border-white/40 bg-black/40 backdrop-blur-sm flex items-start justify-center p-1 group-hover:border-[#DFCAAB] transition-colors shadow-lg">
              <div className="w-1 h-2 rounded-none bg-[#DFCAAB] animate-scroll-dot" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
