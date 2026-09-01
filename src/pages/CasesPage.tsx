import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { InteractiveGalleryModal } from '../components/common/InteractiveGalleryModal';
import { casesData, CaseStudy } from '../data/cases';
import { ShieldCheck, ChevronsLeftRight, Sparkles } from 'lucide-react';
import { FinalCTASection } from '../sections/FinalCTASection';
import { trackEvent } from '../utils/analytics';

interface CasesPageProps {
  onOpenAppointmentModal: () => void;
}

export const CasesPage: React.FC<CasesPageProps> = ({ onOpenAppointmentModal }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Casos' },
    { id: 'Lentes em Resina Composta', label: 'Lentes em Resina' },
    { id: 'Design de Sorriso Superior', label: 'Design de Sorriso' },
    { id: 'Harmonização do Arco Dental', label: 'Harmonização' },
  ];

  const filteredCases =
    activeCategory === 'todos'
      ? casesData
      : casesData.filter((c) =>
          c.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          c.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const handleOpenCase = (item: CaseStudy, index: number) => {
    setSelectedCase(item);
    setSelectedIndex(index);
    setIsModalOpen(true);
    trackEvent('click_case', { caseId: item.id, title: item.title, source: 'cases_page' });
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
    <>
      <SEO
        title="Galeria de Casos"
        description="Conheça a galeria de transformações e casos clínicos em lentes em resina do Dr. Deibson Fernandes. Análise comparativa e resultados autorais."
        canonicalPath="/casos"
      />

      <main className="pt-32 pb-16">
        {/* Page Hero */}
        <div className="site-container mb-12">
          <div className="max-w-3xl">
            <div className="editorial-label mb-3">
              Galeria Autoral
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0EA] font-normal leading-[1.12] mb-5">
              Casos Clínicos:{' '}
              <span className="italic text-[#C5A880]">Precisão e harmonia em cada detalhe.</span>
            </h1>
            <p className="text-lg text-[#A0A0A5] font-light leading-relaxed">
              Registros comparativos demonstrando o impacto do planejamento anatômico e da escultura artesanal dente a dente. Clique em qualquer caso para abrir o comparativo interativo de Antes & Depois com slider dinâmico.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="site-container mb-8">
          <div className="p-4 rounded-none bg-[#111114] border border-[rgba(197,168,128,0.3)] flex items-start gap-3 text-xs text-[#8E8E93]">
            <ShieldCheck className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px]">
              <strong>Conformidade Ética CFO:</strong> As imagens divulgadas possuem finalidade exclusivamente elucidativa e educativa, conforme os termos da Resolução CFO-196/2019. Cada caso clínico apresenta características biológicas únicas e os resultados não podem ser interpretados como garantia de resultado prévio.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="site-container mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all flex-shrink-0 border ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A880] text-[#070709] border-[#C5A880] font-semibold'
                    : 'bg-[#121217] text-[#A0A0A5] border-white/5 hover:border-[#C5A880]/40 hover:text-[#F3F0EA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Gallery with All 9 Cases */}
        <section className="site-container mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCases.map((item) => {
              const caseIndex = casesData.findIndex((c) => c.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => handleOpenCase(item, caseIndex)}
                  className="bento-card group rounded-none flex flex-col bg-[#0D0D12] border border-[rgba(243,240,234,0.08)] hover:border-[#C5A880]/50 transition-all duration-300"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleOpenCase(item, caseIndex)}
                  aria-label={`Abrir comparativo de ${item.title}`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <img
                      src={item.afterImage}
                      alt={`Resultado de ${item.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Interactive Prompt Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="btn-pill-bronze text-xs py-2 px-4 flex items-center gap-2 pointer-events-none">
                        <ChevronsLeftRight className="w-3.5 h-3.5" />
                        <span>Comparar Antes & Depois</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-grow justify-between bg-[#111116]">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
                        {item.category}
                      </span>

                      <h2 className="font-serif text-lg text-[#F3F0EA] font-normal leading-snug group-hover:text-[#C5A880] transition-colors mb-2">
                        {item.title}
                      </h2>

                      <p className="text-xs text-[#9E9EA6] line-clamp-2 font-light leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-[rgba(243,240,234,0.06)] text-[11px] text-[#DEC5A3]">
                      <span className="flex items-center gap-1.5 font-mono">
                        <Sparkles className="w-3 h-3 text-[#C5A880]" />
                        Escultura Direta
                      </span>
                      <span className="text-xs font-semibold text-[#C5A880] group-hover:translate-x-1 transition-transform">
                        Ver detalhes →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <FinalCTASection onOpenAppointmentModal={onOpenAppointmentModal} />
      </main>

      {/* Interactive Modal */}
      <InteractiveGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        caseStudy={selectedCase}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
};
