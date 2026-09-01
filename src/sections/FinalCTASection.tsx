import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../components/common/InstagramIcon';
import { siteConfig } from '../config/site';
import { trackEvent } from '../utils/analytics';

interface FinalCTASectionProps {
  onOpenAppointmentModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenAppointmentModal }) => {
  const handleModalClick = () => {
    trackEvent('click_agendamento', { source: 'final_cta_section' });
    onOpenAppointmentModal();
  };

  const handleInstagramClick = () => {
    trackEvent('click_instagram', { source: 'final_cta_section' });
  };

  return (
    <section className="section-padding bg-[#050507] border-t border-[rgba(243,240,234,0.06)] relative overflow-hidden text-center">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[radial-gradient(ellipse,rgba(197,168,128,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="site-container relative z-10 max-w-3xl mx-auto">
        <div className="editorial-label justify-center mb-4">
          Inicie sua Transformação
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F0EA] font-normal leading-[1.15] mb-6">
          Talvez o próximo sorriso a ser esculpido{' '}
          <span className="italic text-[#C5A880] block mt-1">seja o seu.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#A0A0A5] font-light leading-relaxed mb-10 max-w-xl mx-auto">
          Agende sua avaliação clínica individual e descubra as possibilidades reais de transformar seu sorriso com elegância, harmonia e naturalidade.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleModalClick}
            className="btn-pill-bronze flex items-center justify-center gap-2 w-full sm:w-auto shadow-2xl"
          >
            <span>Agendar Avaliação</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleInstagramClick}
            className="btn-pill-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <InstagramIcon className="w-4 h-4 text-[#C5A880]" />
            <span>Conhecer o Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
