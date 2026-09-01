import React from 'react';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../config/site';
import { ShieldCheck, Award, Sparkles, HeartHandshake } from 'lucide-react';
import { FinalCTASection } from '../sections/FinalCTASection';

interface AboutPageProps {
  onOpenAppointmentModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAppointmentModal }) => {
  return (
    <>
      <SEO
        title="Sobre o Dr. Deibson Fernandes"
        description="Conheça a trajetória, formação e compromisso ético do Dr. Deibson Fernandes, cirurgião-dentista especialista em lentes em resina."
        canonicalPath="/sobre"
      />

      <main className="pt-32 pb-16">
        {/* Page Hero */}
        <section className="site-container mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="editorial-label">
                Trajetória & Autoridade
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0EA] font-normal leading-[1.1] mb-6">
                Dr. Deibson Fernandes:{' '}
                <span className="italic text-[#C5A880]">A sensibilidade do artesão aliada à ciência odontológica.</span>
              </h1>
              <p className="text-lg text-[#A0A0A5] font-light leading-relaxed mb-8">
                Cirurgião-dentista com atuação especializada em Odontologia Cosmética e Reabilitação Estética Direta. Com mais de <strong>{siteConfig.metrics.veneersCount} lentes esculpidas</strong>, seu foco constante é devolver autoestima, naturalidade e harmonia a cada sorriso.
              </p>

              <div className="p-4 rounded-xl bg-[#111116] border border-[rgba(197,168,128,0.3)] flex items-start gap-3 text-xs text-[#DFCAAB]">
                <ShieldCheck className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#F3F0EA]">{siteConfig.credentials.display}</div>
                  <div className="text-[11px] text-[#8E8E98] mt-0.5">
                    Conselho Regional de Odontologia de São Paulo (CRO/SP 168.482) e de Goiás (CRO/GO 24.676).
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[rgba(197,168,128,0.3)] shadow-2xl aspect-[4/5] bg-[#121217]">
                <img
                  src="/assets/dr-deibson-hero-portrait.avif"
                  alt="Dr. Deibson Fernandes"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="section-padding bg-[#070709] border-y border-[rgba(243,240,234,0.06)]">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="editorial-label justify-center">Nossos Pilares</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0EA] font-normal leading-snug">
                Compromisso com o paciente e respeito biológico.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: 'Escultura Anatômica Exclusiva',
                  description: 'Não trabalhamos com sorrisos padronizados ou artificiais. Cada dente é esculpido respeitando as características faciais do paciente.',
                },
                {
                  icon: Award,
                  title: 'Materiais de Alto Desempenho',
                  description: 'Utilização exclusiva de resinas compostas nano-híbridas de padrão internacional com excelente estabilidade de cor e polimento.',
                },
                {
                  icon: HeartHandshake,
                  title: 'Conduta Ética e Transparente',
                  description: 'Avaliação clínica minuciosa com indicação honesta. Nem todos os casos necessitam de lentes, e a preservação do dente é sempre prioridade.',
                },
              ].map((p, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-[#0E0E12] border border-[rgba(243,240,234,0.06)] space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#16161E] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-[#F3F0EA] font-normal">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9E9EA6] font-light leading-relaxed">{p.description}</p>
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
