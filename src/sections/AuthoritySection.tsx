import React from 'react';
import { ShieldCheck, Award, Sparkles, MapPin } from 'lucide-react';
import { siteConfig } from '../config/site';

interface AuthorityStat {
  value: string;
  label: string;
  description: string;
  source: string;
}

const authorityStats: AuthorityStat[] = [
  {
    value: '+3.000',
    label: 'Lentes Esculpidas',
    description: 'Transformações de sorriso realizadas com técnica artesanal direta à mão livre.',
    source: 'Registro Clínico',
  },
  {
    value: '100%',
    label: 'Estratificação Autoral',
    description: 'Planejamento biomimético individualizado para cada formato facial.',
    source: 'Técnica Direta',
  },
  {
    value: 'SP & GO',
    label: 'Atendimento Concierge',
    description: 'Consultórios exclusivos em São Paulo (SP) e Goiânia (GO).',
    source: 'Presencial',
  },
  {
    value: '0%',
    label: 'Desgaste Excessivo',
    description: 'Máxima preservação do esmalte biológico saudável sem agressão.',
    source: 'Biomimética',
  },
];

const getStatIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
    case 1:
      return <Award className="w-5 h-5 text-[#C5A880]" />;
    case 2:
      return <MapPin className="w-5 h-5 text-[#C5A880]" />;
    default:
      return <ShieldCheck className="w-5 h-5 text-[#C5A880]" />;
  }
};

export const AuthoritySection: React.FC = () => {
  return (
    <section className="relative bg-[#09090C] py-14 border-y border-[rgba(243,240,234,0.06)] overflow-hidden">
      <div className="site-container">
        {/* Metric Cards Grid - Sharp Defined Corners & Tight Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {authorityStats.map((item: AuthorityStat, index: number) => (
            <div
              key={index}
              className="p-6 md:p-7 rounded-none bg-[#0E0E12]/90 border border-[rgba(243,240,234,0.08)] hover:border-[rgba(197,168,128,0.3)] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-none bg-[#15151A] border border-white/5 group-hover:border-[#C5A880]/30 transition-colors">
                  {getStatIcon(index)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E7E88]">
                  {item.source}
                </span>
              </div>

              <div className="font-serif text-3xl md:text-4xl text-[#F3F0EA] font-normal leading-none mb-2 tracking-tight group-hover:text-[#C5A880] transition-colors">
                {item.value}
              </div>

              <div className="text-xs uppercase font-mono tracking-wider text-[#C5A880] mb-2 font-semibold">
                {item.label}
              </div>

              <p className="text-xs text-[#8E8E98] font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CFO Ethics Disclaimer */}
        <div className="mt-8 pt-4 border-t border-[rgba(243,240,234,0.04)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-[#6E6E75]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
            <span>Responsável Técnico: Dr. Deibson Fernandes • {siteConfig.credentials.display}</span>
          </div>
          <span>Em conformidade com o Código de Ética Odontológica (CFO).</span>
        </div>
      </div>
    </section>
  );
};
