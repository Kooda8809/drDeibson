import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { methodologySteps } from '../data/methodology';

export const MethodologySection: React.FC = () => {
  return (
    <section className="section-padding bg-[#0B0B0C] relative">
      <div className="site-container">
        <SectionHeading
          label="Metodologia Autoral"
          title="Do planejamento ao"
          highlightedWord="sorriso exclusivo."
          subtitle="Um processo estruturado em 5 etapas para transformar expectativas em um resultado com alto grau de naturalidade e rigor técnico."
        />

        {/* Steps Timeline / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4">
          {methodologySteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-md bg-[#111114] border border-[rgba(243,240,234,0.07)] hover:border-[#C5A880]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Step Number & Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-light text-[#C5A880]/80 group-hover:text-[#C5A880] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-sm bg-[#18181D] text-[#A0A0A5] border border-[rgba(243,240,234,0.06)]">
                    {step.tag}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-[#F3F0EA] font-normal mb-1">
                  {step.title}
                </h3>
                <div className="text-xs text-[#C5A880] font-sans font-medium mb-3">
                  {step.subtitle}
                </div>

                <p className="text-xs text-[#8E8E93] leading-relaxed font-light mb-4">
                  {step.description}
                </p>
              </div>

              {/* Bullet points */}
              <div className="pt-3 border-t border-[rgba(243,240,234,0.05)] space-y-1.5">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#A0A0A5]">
                    <span className="text-[#C5A880] mt-0.5">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
