import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { casesData } from '../data/cases';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ResinVeneersSectionProps {
  onOpenAppointmentModal: () => void;
}

export const ResinVeneersSection: React.FC<ResinVeneersSectionProps> = ({ onOpenAppointmentModal }) => {
  const featuredCase = casesData[0];

  const handleCta = () => {
    trackEvent('click_agendamento', { source: 'resin_veneers_section' });
    onOpenAppointmentModal();
  };

  const benefits = [
    {
      title: 'Preservação Máxima do Esmalte',
      description: 'Diferente de técnicas convencionais com desgastes agressivos, a resina direta adere à estrutura dental natural, conservando a integridade do dente.',
    },
    {
      title: 'Escultura Anatômica Dente a Dente',
      description: 'Camadas estratificadas de opacidade, fluorescência e translucidez recriam a textura orgânica e o brilho do esmalte jovem.',
    },
    {
      title: 'Reversibilidade & Manutenção Simples',
      description: 'Possibilidade total de reparos pontuais e polimentos periódicos que mantêm o brilho e a estabilidade cromática ao longo dos anos.',
    },
    {
      title: 'Planejamento Personalizado',
      description: 'Alinhamento com as linhas faciais e a curvatura do lábio do paciente para um resultado elegante e exclusivo.',
    },
  ];

  return (
    <section className="section-padding bg-[#09090B] relative overflow-hidden" id="lentes-em-resina">
      <div className="site-container">
        {/* Section Header */}
        <SectionHeading
          title="A arte e a ciência das"
          highlightedWord="Lentes em Resina."
          subtitle="Uma abordagem minimamente invasiva que une escultura à mão livre, biomimética e preservação da estrutura dental."
        />

        {/* 2-Column Grid: Visual Slider on Left, Editorial Benefits on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Before/After Showcase */}
          <div className="lg:col-span-7">
            {featuredCase && (
              <div className="p-4 md:p-6 rounded-none bg-[#0E0E12] border border-[rgba(243,240,234,0.08)] shadow-2xl">
                <BeforeAfterSlider
                  beforeImage={featuredCase.beforeImage}
                  afterImage={featuredCase.afterImage}
                  altBefore={`Antes - ${featuredCase.title}`}
                  altAfter={`Depois - ${featuredCase.title}`}
                  title={featuredCase.title}
                  category={featuredCase.category}
                  isPlaceholder={featuredCase.isPlaceholder}
                />
              </div>
            )}
          </div>

          {/* Right Column: Key Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-5 rounded-none bg-[#0D0D11] border border-[rgba(243,240,234,0.06)] hover:border-[rgba(197,168,128,0.3)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-lg text-[#F3F0EA] font-normal leading-snug group-hover:text-[#C5A880] transition-colors mb-1.5">
                        {benefit.title}
                      </h4>
                      <p className="text-xs md:text-sm text-[#9E9EA6] font-light leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={handleCta}
                className="btn-pill-bronze w-full sm:w-auto py-3.5 px-8 text-xs uppercase tracking-wider font-bold inline-flex items-center justify-center gap-2"
              >
                <span>Solicitar Avaliação de Sorriso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
