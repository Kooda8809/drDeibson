import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { Plus, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleItem = (id: string) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);
    if (isOpening) {
      trackEvent('faq_open', { faqId: id, source: 'faq_section' });
    }
  };

  return (
    <section className="section-padding bg-[#070709] border-t border-[rgba(243,240,234,0.06)] relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[radial-gradient(ellipse,rgba(197,168,128,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="site-container max-w-4xl relative z-10">
        {/* Header Block with Title & Subtitle */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F0EA] font-normal leading-[1.12] tracking-tight mb-4">
            Clareza em cada resposta,<br />
            <span className="italic text-[#C5A880] font-normal">precisão em cada detalhe.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9E9EA6] font-light leading-relaxed max-w-2xl">
            Tudo o que você precisa saber sobre a experiência e a técnica de lentes em resina direta, condensado com rigor técnico e acolhimento.
          </p>
        </div>

        {/* Accordion Cards List with Sharp Well-Defined Corners */}
        <div className="space-y-3">
          {faqData.map((item) => {
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
                  {/* Top Row: Icon Button + Question */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-grow">
                      {/* Left Square Toggle Icon (+ or X) */}
                      <div
                        className={`w-10 h-10 rounded-none flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-[#1C1C24] text-[#C5A880] border border-[#C5A880]/50 shadow-[0_0_12px_rgba(197,168,128,0.3)]'
                            : 'bg-[#15151C] text-[#8E8E98] border border-white/10 group-hover:text-[#F3F0EA]'
                        }`}
                      >
                        {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>

                      {/* Question Text */}
                      <h3 className="font-serif text-lg sm:text-xl text-[#F3F0EA] font-normal leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <span className="hidden sm:inline-block text-[11px] font-mono tracking-wider text-[#C5A880] uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Expanded Answer Content */}
                  {isOpen && (
                    <div className="mt-4 pt-4 pl-14 text-sm sm:text-base text-[#9E9EA6] font-light leading-relaxed border-t border-[rgba(243,240,234,0.06)] animate-fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
