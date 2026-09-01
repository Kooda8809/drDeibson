import React from 'react';
import { philosophyPillars } from '../data/philosophy';
import { Quote, Sparkles } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="section-padding bg-[#070708] border-t border-[rgba(243,240,234,0.06)] relative overflow-hidden">
      <div className="site-container">
        {/* Editorial Big Manifesto Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="editorial-label justify-center">
            Filosofia de Trabalho
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F0EA] font-normal leading-[1.18] mb-6">
            Não existe sorriso perfeito.{' '}
            <span className="italic text-[#C5A880] block mt-1">
              Existe o sorriso que faz sentido para você.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A0A0A5] font-light leading-relaxed">
            A verdadeira estética não impõe moldes padronizados. Ela nasce da harmonia sutil entre a anatomia do seu rosto, a dinâmica das suas expressões e a sua identidade.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {philosophyPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 rounded-md bg-[#0E0E11] border border-[rgba(243,240,234,0.08)] hover:border-[#C5A880]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl text-[#C5A880] font-light">
                    {pillar.number}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#18181D] flex items-center justify-center text-[#C5A880]/60">
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>

                <h3 className="font-serif text-xl text-[#F3F0EA] font-normal mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#8E8E93] leading-relaxed font-light mb-4">
                  {pillar.description}
                </p>
              </div>

              {pillar.quote && (
                <div className="pt-4 border-t border-[rgba(243,240,234,0.06)] flex items-start gap-2 text-xs italic text-[#DEC5A3] font-serif">
                  <Quote className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                  <span>"{pillar.quote}"</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
