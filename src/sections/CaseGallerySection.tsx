import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/common/SectionHeading';
import { InteractiveGalleryModal } from '../components/common/InteractiveGalleryModal';
import { casesData, CaseStudy } from '../data/cases';
import { ArrowRight, ChevronsLeftRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const CaseGallerySection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCase = (item: CaseStudy, index: number) => {
    setSelectedCase(item);
    setSelectedIndex(index);
    setIsModalOpen(true);
    trackEvent('click_case', { caseId: item.id, title: item.title });
  };

  const handlePrev = () => {
    const newIndex = selectedIndex === 0 ? casesData.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedCase(casesData[newIndex]);
  };

  const handleNext = () => {
    const newIndex = selectedIndex === casesData.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedCase(casesData[newIndex]);
  };

  return (
    <section id="casos" className="section-padding bg-[#070709] border-t border-[rgba(243,240,234,0.06)] relative">
      <div className="site-container">
        {/* Clean Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            title="Resultados que contam histórias e"
            highlightedWord="revelam essência."
            subtitle="Explore nossa galeria de casos autorais. Clique em qualquer imagem para abrir o comparativo interativo de Antes & Depois."
            className="mb-0 md:mb-0"
          />

          <Link
            to="/casos"
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#C5A880] hover:text-[#DFCAAB] transition-colors mt-4 md:mt-0"
          >
            <span>Ver Todos os Casos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid Gallery with Tight Distance & Sharp Defined Corners */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-8">
          {/* Bento Item 1 - Wide Top Left (Span 7) */}
          {casesData[0] && (
            <div
              onClick={() => handleOpenCase(casesData[0], 0)}
              className="bento-card md:col-span-7 aspect-[16/10] group rounded-none relative overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpenCase(casesData[0], 0)}
              aria-label={`Abrir comparativo de antes e depois para ${casesData[0].title}`}
            >
              <img
                src={casesData[0].afterImage}
                alt={casesData[0].title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
                  {casesData[0].category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-[#F3F0EA] font-normal leading-snug group-hover:text-[#C5A880] transition-colors">
                  {casesData[0].title}
                </h3>
              </div>
            </div>
          )}

          {/* Bento Item 2 - Top Right (Span 5) */}
          {casesData[1] && (
            <div
              onClick={() => handleOpenCase(casesData[1], 1)}
              className="bento-card md:col-span-5 aspect-[4/3] md:aspect-auto group rounded-none relative overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpenCase(casesData[1], 1)}
              aria-label={`Abrir comparativo de antes e depois para ${casesData[1].title}`}
            >
              <img
                src={casesData[1].afterImage}
                alt={casesData[1].title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
                  {casesData[1].category}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-[#F3F0EA] font-normal leading-snug group-hover:text-[#C5A880] transition-colors">
                  {casesData[1].title}
                </h3>
              </div>
            </div>
          )}

          {/* Bento Item 3 - Bottom Left (Span 5) */}
          {casesData[2] && (
            <div
              onClick={() => handleOpenCase(casesData[2], 2)}
              className="bento-card md:col-span-5 aspect-[4/3] md:aspect-auto group rounded-none relative overflow-hidden"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpenCase(casesData[2], 2)}
              aria-label={`Abrir comparativo de antes e depois para ${casesData[2].title}`}
            >
              <img
                src={casesData[2].afterImage}
                alt={casesData[2].title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
                  {casesData[2].category}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-[#F3F0EA] font-normal leading-snug group-hover:text-[#C5A880] transition-colors">
                  {casesData[2].title}
                </h3>
              </div>
            </div>
          )}

          {/* Bento Item 4 - Wide Bottom Right (Span 7) */}
          <div
            onClick={() => handleOpenCase(casesData[0], 0)}
            className="bento-card md:col-span-7 aspect-[16/10] group bg-gradient-to-br from-[#121217] to-[#0A0A0E] p-8 flex flex-col justify-between rounded-none"
            role="button"
            tabIndex={0}
          >
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#F3F0EA] font-normal leading-snug mb-3">
                Analise a precisão de cada microdetalhe.
              </h3>
              <p className="text-sm text-[#A0A0A5] font-light max-w-lg leading-relaxed">
                Nossos planejamentos são esculpidos à mão livre com resinas nano-híbridas de padrão internacional. Clique para comparar o antes e depois com slider dinâmico.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[rgba(243,240,234,0.06)]">
              <span className="btn-pill-bronze text-xs py-2.5 px-5 flex items-center gap-2">
                <ChevronsLeftRight className="w-3.5 h-3.5" />
                <span>Explorar Comparativo Interativo</span>
              </span>
              <span className="text-xs text-[#8E8E98] font-mono">
                +3.000 lentes esculpidas
              </span>
            </div>
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 text-center md:hidden">
          <Link
            to="/casos"
            className="btn-pill-secondary text-xs py-3.5 px-6 inline-flex items-center gap-2 w-full justify-center"
          >
            <span>Ver Todos os Casos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Interactive Modal (Allows navigating between all 9 cases) */}
      <InteractiveGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        caseStudy={selectedCase}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
