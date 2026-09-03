import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Microscope } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const MethodologySection: React.FC = () => {
  return (
    <section className="section-padding bg-[#0A0A0D] border-t border-[rgba(243,240,234,0.06)] relative overflow-hidden" id="metodologia">
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(197,168,128,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="editorial-label justify-center mb-3">
            Metodologia Autoral
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F0EA] font-normal leading-[1.14] mb-6 tracking-tight">
            A arte e a ciência do{' '}
            <span className="italic text-[#C5A880] block sm:inline">sorriso sob medida.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A0A0A5] font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Um processo estruturado em 5 etapas rigorosas — do diagnóstico fotográfico digital à escultura direta à mão livre e polimento vítreo — projetado para garantir máxima preservação biológica e harmonia facial única.
          </p>

          {/* Quick Micro-Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-left">
            {[
              { icon: Microscope, label: 'Diagnóstico 3D', sub: 'Mapeamento facial' },
              { icon: Layers, label: 'Estratificação', sub: 'Camadas ópticas' },
              { icon: Sparkles, label: 'Escultura Viva', sub: 'Mão livre anatômica' },
              { icon: ShieldCheck, label: 'Conservação', sub: 'Mínimo desgaste' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-none bg-[#111116] border border-[rgba(243,240,234,0.06)] flex flex-col justify-between"
              >
                <item.icon className="w-4 h-4 text-[#C5A880] mb-2" />
                <div>
                  <div className="text-xs font-semibold text-[#F3F0EA]">{item.label}</div>
                  <div className="text-[11px] text-[#7E7E88]">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Action directing to Lentes em Resina full process */}
          <div>
            <Link
              to="/lentes-em-resina#processo"
              onClick={() => trackEvent('click_methodology_cta', { target: 'lentes_em_resina_page' })}
              className="btn-bronze text-xs py-4 px-8 font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl group"
            >
              <span>Conheça nosso processo passo a passo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

