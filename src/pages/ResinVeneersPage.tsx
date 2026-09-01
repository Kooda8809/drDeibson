import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { Check, ShieldAlert, Layers, RefreshCw, Zap } from 'lucide-react';
import { methodologySteps } from '../data/methodology';
import { FinalCTASection } from '../sections/FinalCTASection';

interface ResinVeneersPageProps {
  onOpenAppointmentModal: () => void;
}

export const ResinVeneersPage: React.FC<ResinVeneersPageProps> = ({ onOpenAppointmentModal }) => {
  return (
    <>
      <SEO
        title="Lentes em Resina"
        description="Conheça tudo sobre as Lentes em Resina Composta: tecnologia nano-híbrida, indicação individualizada, preservação dental e acabamento de alto padrão com o Dr. Deibson Fernandes."
        canonicalPath="/lentes-em-resina"
      />

      <main className="pt-32 pb-16">
        {/* Page Hero */}
        <div className="site-container mb-16">
          <div className="max-w-3xl">
            <div className="editorial-label">
              Especialidade em Foco
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0EA] font-normal leading-[1.12] mb-6">
              Lentes em Resina:{' '}
              <span className="italic text-[#C5A880]">Precisão, preservação e naturalidade.</span>
            </h1>
            <p className="text-lg text-[#A0A0A5] font-light leading-relaxed">
              Uma abordagem moderna da odontologia cosmética que permite recriar forma, cor e harmonia dental com mínima intervenção biológica e acabamento personalizado.
            </p>
          </div>
        </div>

        {/* Technical Deep Dive */}
        <section className="section-padding bg-[#070708] border-y border-[rgba(243,240,234,0.06)]">
          <div className="site-container">
            <SectionHeading
              label="Fundamentos Técnicos"
              title="A Ciência por trás da"
              highlightedWord="Resina Nano-Híbrida."
              subtitle="Materiais odontológicos de última geração desenvolvidos para mimetizar o esmalte humano com máxima resistência mecânica e estabilidade de cor."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="editorial-card">
                <div className="w-10 h-10 rounded-sm bg-[#1A1A20] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F3F0EA] mb-2">Estratificação Cromática</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light">
                  A aplicação é feita em camadas de diferentes opacidades (dentina, corpo e esmalte translúcido), reproduzindo a profundidade e o jogo de luz natural do dente.
                </p>
              </div>

              <div className="editorial-card">
                <div className="w-10 h-10 rounded-sm bg-[#1A1A20] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F3F0EA] mb-2">Microtextura & Polimento</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light">
                  O polimento multi-grão em etapas cria microestrias de superfície que quebram a reflexão de luz, eliminando o reflexo plástico e promovendo um brilho natural vítreo.
                </p>
              </div>

              <div className="editorial-card">
                <div className="w-10 h-10 rounded-sm bg-[#1A1A20] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F3F0EA] mb-2">Reversibilidade & Ajuste</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light">
                  Por não exigir desgastes agressivos na maioria das indicações clínicas, a resina oferece maior conservação de estrutura dental e facilidade de manutenção futura.
                </p>
              </div>
            </div>

            {/* Indication & Assessment Box */}
            <div className="p-8 rounded-md bg-[#101014] border border-[rgba(197,168,128,0.3)] shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-6 h-6 text-[#C5A880]" />
                <h3 className="font-serif text-2xl text-[#F3F0EA] font-normal">
                  Critérios de Indicação Clínica
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#A0A0A5] font-light leading-relaxed">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#DEC5A3] font-semibold mb-3">
                    Casos Frequentemente Favorecidos:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Fechamento de espaços entre os dentes (diastemas)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Dentes conoides ou com assimetrias de tamanho e largura</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Desgastes leves de bordo incisal por atrito</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Harmonização do arco do sorriso e proporções faciais</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#DEC5A3] font-semibold mb-3">
                    A Necessidade da Avaliação Presencial:
                  </h4>
                  <p className="text-xs text-[#8E8E93] leading-relaxed">
                    Pacientes com parafunções severas (bruxismo não controlado), desalinhamentos ósseos complexos ou comprometimento periodontal prévio necessitam de tratamentos preparatórios antes de qualquer procedimento estético.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete 5-Step Methodology Section */}
        <section className="section-padding bg-[#0B0B0C] border-t border-[rgba(243,240,234,0.06)]" id="processo">
          <div className="site-container">
            <SectionHeading
              label="Metodologia Autoral"
              title="Do planejamento ao"
              highlightedWord="sorriso exclusivo."
              subtitle="Um processo meticuloso estruturado em 5 etapas para transformar expectativas em um resultado com alto grau de naturalidade e rigor técnico."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 max-w-7xl mx-auto">
              {methodologySteps.map((step) => (
                <div
                  key={step.number}
                  className="p-6 rounded-none bg-[#111114] border border-[rgba(243,240,234,0.07)] hover:border-[#C5A880]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Step Number & Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-3xl font-light text-[#C5A880]/80 group-hover:text-[#C5A880] transition-colors">
                        {step.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-none bg-[#18181D] text-[#A0A0A5] border border-[rgba(243,240,234,0.06)]">
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

        <FinalCTASection onOpenAppointmentModal={onOpenAppointmentModal} />
      </main>
    </>
  );
};
