import React from 'react';
import { Palette, Eye, Sparkles, Feather } from 'lucide-react';

export const SculptingArtSection: React.FC = () => {
  return (
    <section className="section-padding bg-[#0B0B0C] relative overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Artwork */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-md overflow-hidden bg-[#101013] border border-[rgba(197,168,128,0.2)] shadow-2xl">
              <img
                src="/assets/sculpture-art.svg"
                alt="Escultura artesanal de dentes com estratificação nano-híbrida"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
              {/* Floating Artistic Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#0B0B0C]/90 backdrop-blur-md border border-[rgba(243,240,234,0.08)] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block">
                    Conceito Autoral
                  </span>
                  <span className="font-serif text-sm text-[#F3F0EA]">
                    Escultura à mão livre dente a dente
                  </span>
                </div>
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Pillar Cards */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            <div className="editorial-label">
              Conceito & Artesanato
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F0EA] font-normal leading-[1.15] mb-6">
              Esculpir um sorriso é mais do que{' '}
              <span className="italic text-[#C5A880] font-normal">transformar dentes.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A0A0A5] font-light leading-relaxed mb-8">
              O objetivo não é criar um sorriso padronizado ou artificial. É compreender proporções, características faciais e expectativas para construir um resultado harmônico que faça sentido para cada pessoa.
            </p>

            {/* Micro Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-sm bg-[#121215] border border-[rgba(243,240,234,0.06)]">
                <div className="w-7 h-7 rounded-full bg-[#18181D] flex items-center justify-center text-[#C5A880] mb-2.5">
                  <Palette className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif text-base text-[#F3F0EA] mb-1">Mimetismo Óptico</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed">
                  Reprodução de nuances cromáticas, opalescência e luminosidade do esmalte natural.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#121215] border border-[rgba(243,240,234,0.06)]">
                <div className="w-7 h-7 rounded-full bg-[#18181D] flex items-center justify-center text-[#C5A880] mb-2.5">
                  <Eye className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif text-base text-[#F3F0EA] mb-1">Harmonia Facial</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed">
                  Alinhamento com a curvatura dos lábios, linha do sorriso e traços faciais individuais.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#121215] border border-[rgba(243,240,234,0.06)]">
                <div className="w-7 h-7 rounded-full bg-[#18181D] flex items-center justify-center text-[#C5A880] mb-2.5">
                  <Feather className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif text-base text-[#F3F0EA] mb-1">Microtexturização</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed">
                  Sulcos e reflexos superficiais que eliminam o aspecto liso e artificial.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#121215] border border-[rgba(243,240,234,0.06)]">
                <div className="w-7 h-7 rounded-full bg-[#18181D] flex items-center justify-center text-[#C5A880] mb-2.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-serif text-base text-[#F3F0EA] mb-1">Exclusividade</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed">
                  Trabalho 100% artesanal, adaptado sob medida para cada paciente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
