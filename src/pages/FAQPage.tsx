import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { faqData } from '../data/faq';
import { Plus, X, Search, HelpCircle } from 'lucide-react';
import { FinalCTASection } from '../sections/FinalCTASection';
import { trackEvent } from '../utils/analytics';

interface FAQPageProps {
  onOpenAppointmentModal: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenAppointmentModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const categories = ['Todos', 'Tratamento', 'Indicação', 'Manutenção & Durabilidade', 'Agendamento'];

  const filteredFaq = faqData.filter((item) => {
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);
    if (isOpening) {
      trackEvent('faq_open', { faqId: id, source: 'faq_page' });
    }
  };

  return (
    <>
      <SEO
        title="Dúvidas Frequentes"
        description="Esclareça suas dúvidas sobre lentes em resina, consulta de avaliação, planejamento estético e cuidados com o Dr. Deibson Fernandes."
        canonicalPath="/duvidas"
      />

      <main className="pt-32 pb-20 bg-[#070709]">
        <div className="site-container max-w-4xl mb-12">
          <div className="editorial-label">
            Dúvidas & Esclarecimentos
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0EA] font-normal leading-[1.1] mb-6">
            Clareza em cada resposta,<br />
            <span className="italic text-[#C5A880]">precisão em cada detalhe.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9E9EA6] font-light leading-relaxed max-w-2xl">
            Tudo o que você precisa saber sobre o tratamento de lentes em resina direta, organizado de forma clara, ética e transparente.
          </p>
        </div>

        {/* Search & Filter Bar */}
        {/* Filter & Search Bar */}
        <div className="site-container max-w-4xl mb-10">
          <div className="p-4 md:p-6 rounded-none bg-[#0E0E12] border border-[rgba(243,240,234,0.08)] flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#8E8E98] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar dúvida clínica..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-none bg-[#15151C] border border-white/5 text-xs text-[#F3F0EA] focus:border-[#C5A880] focus:outline-none transition-colors placeholder:text-[#66666E]"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-none text-[11px] font-mono tracking-wider transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#C5A880] text-[#040405] font-bold shadow-md'
                      : 'bg-[#15151C] text-[#8E8E98] hover:text-[#F3F0EA] border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <section className="site-container max-w-4xl space-y-4 mb-20">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`rounded-none border transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? 'bg-[#121217] border-[rgba(197,168,128,0.4)] shadow-[0_12px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(197,168,128,0.1)]'
                      : 'bg-[#0E0E12]/80 border-[rgba(243,240,234,0.08)] hover:border-[rgba(197,168,128,0.25)] hover:bg-[#121216]'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <div className="p-6 md:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-grow">
                        <div
                          className={`w-10 h-10 rounded-none flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isOpen
                              ? 'bg-[#1C1C24] text-[#C5A880] border border-[#C5A880]/50 shadow-[0_0_12px_rgba(197,168,128,0.3)]'
                              : 'bg-[#15151C] text-[#8E8E98] border border-white/10 group-hover:text-[#F3F0EA]'
                          }`}
                        >
                          {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>

                        <h2 className="font-serif text-lg sm:text-xl text-[#F3F0EA] font-normal leading-snug">
                          {item.question}
                        </h2>
                      </div>

                      <span className="hidden sm:inline-block text-[11px] font-mono tracking-wider text-[#C5A880] uppercase">
                        {item.category}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="mt-4 pt-4 pl-14 text-sm sm:text-base text-[#9E9EA6] font-light leading-relaxed border-t border-[rgba(243,240,234,0.06)] animate-fade-in">
                        {item.answer}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-10 text-center bg-[#0E0E12] rounded-2xl border border-[rgba(243,240,234,0.08)] text-[#8E8E98]">
              <HelpCircle className="w-8 h-8 text-[#C5A880] mx-auto mb-3 opacity-60" />
              <p className="text-sm">Nenhuma dúvida clínica encontrada para sua busca.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
                className="mt-4 text-xs font-mono uppercase tracking-widest text-[#C5A880] underline font-semibold"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </section>

        <FinalCTASection onOpenAppointmentModal={onOpenAppointmentModal} />
      </main>
    </>
  );
};
