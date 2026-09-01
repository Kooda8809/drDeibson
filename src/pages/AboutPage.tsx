import React from 'react';
import { SEO } from '../components/common/SEO';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { ShieldCheck, Award, Sparkles, HeartHandshake, MessageCircle } from 'lucide-react';
import { FinalCTASection } from '../sections/FinalCTASection';
import { trackEvent } from '../utils/analytics';

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
        {/* Page Hero: Introduction & Portrait */}
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
              <p className="text-lg text-[#A0A0A5] font-light leading-relaxed mb-6">
                Cirurgião-dentista com atuação especializada em Odontologia Cosmética e Reabilitação Estética Direta. Com mais de <strong>{siteConfig.metrics.veneersCount} lentes esculpidas</strong>, seu foco constante é devolver autoestima, naturalidade e harmonia a cada sorriso.
              </p>

              <div className="p-4 rounded-none bg-[#111116] border border-[rgba(197,168,128,0.3)] flex items-start gap-3 text-xs text-[#DFCAAB] mb-8">
                <ShieldCheck className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#F3F0EA]">{siteConfig.credentials.display}</div>
                  <div className="text-[11px] text-[#8E8E98] mt-0.5">
                    Conselho Regional de Odontologia de São Paulo (CRO/SP 168.482) e de Goiás (CRO/GO 24.676).
                  </div>
                </div>
              </div>

              {/* Quick Action Links */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => {
                    trackEvent('click_agendamento', { source: 'about_page_hero' });
                    onOpenAppointmentModal();
                  }}
                  className="btn-bronze w-full sm:w-auto text-xs py-3.5 px-8 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Agendar Avaliação</span>
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_whatsapp', { source: 'about_page_hero' })}
                  className="btn-secondary w-full sm:w-auto text-xs py-3.5 px-6 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-none overflow-hidden border border-[rgba(197,168,128,0.3)] shadow-2xl aspect-[4/5] bg-[#121217]">
                <img
                  src="/assets/dr-deibson-hero-portrait.avif"
                  alt="Dr. Deibson Fernandes"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Full Narrative Biography */}
        <section className="section-padding bg-[#070709] border-y border-[rgba(243,240,234,0.06)] mb-20">
          <div className="site-container max-w-4xl">
            <div className="text-center mb-12">
              <div className="editorial-label justify-center">A Trajetória Completa</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0EA] font-normal leading-snug">
                A busca incansável pela perfeição que não parece artificial.
              </h2>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-[#9E9EA6] font-light leading-relaxed">
              <p>
                O <strong className="text-[#F3F0EA] font-normal">Dr. Deibson Fernandes</strong> iniciou sua carreira movido pela convicção de que um sorriso transformador não deve ser uma cópia genérica, mas uma extensão fiel da personalidade e da morfologia facial de cada paciente.
              </p>
              <p>
                Ao longo de anos de dedicação exclusiva às resinas compostas nano-híbridas e técnicas de estratificação biomimética, aperfeiçoou um método autoral que une o rigor da proporção áurea com a destreza artesanal da escultura à mão livre. Mais de 3.000 lentes foram concluídas com foco obsessivo em três pilares fundamentais:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="p-5 rounded-none bg-[#0E0E12] border border-[rgba(243,240,234,0.08)]">
                  <div className="text-[#C5A880] font-serif text-2xl mb-1">01</div>
                  <h4 className="text-sm font-semibold text-[#F3F0EA] mb-2">Preservação Máxima</h4>
                  <p className="text-xs text-[#8E8E93]">
                    Trabalho adesivo que prioriza a integridade do esmalte dentário sem desgastes invasivos.
                  </p>
                </div>

                <div className="p-5 rounded-none bg-[#0E0E12] border border-[rgba(243,240,234,0.08)]">
                  <div className="text-[#C5A880] font-serif text-2xl mb-1">02</div>
                  <h4 className="text-sm font-semibold text-[#F3F0EA] mb-2">Translucidez Óptica</h4>
                  <p className="text-xs text-[#8E8E93]">
                    Mimetização perfeita da textura, opalescência e reflexão de luz presentes nos dentes naturais.
                  </p>
                </div>

                <div className="p-5 rounded-none bg-[#0E0E12] border border-[rgba(243,240,234,0.08)]">
                  <div className="text-[#C5A880] font-serif text-2xl mb-1">03</div>
                  <h4 className="text-sm font-semibold text-[#F3F0EA] mb-2">Relação Humana</h4>
                  <p className="text-xs text-[#8E8E93]">
                    Atendimento calmo, minucioso e individualizado, onde cada detalhe do plano é compartilhado.
                  </p>
                </div>
              </div>

              <p>
                Com registros ativos em São Paulo (CRO/SP 168.482) e Goiás (CRO/GO 24.676), o Dr. Deibson recebe pacientes de todo o Brasil que buscam refinamento técnico e estética de alto nível, mantendo sempre o princípio ético inegociável de que a saúde biológica vem em primeiro lugar.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="site-container mb-20">
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
              <div key={idx} className="p-8 rounded-none bg-[#0E0E12] border border-[rgba(243,240,234,0.06)] space-y-4">
                <div className="w-12 h-12 rounded-none bg-[#16161E] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#F3F0EA] font-normal">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#9E9EA6] font-light leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <FinalCTASection onOpenAppointmentModal={onOpenAppointmentModal} />
      </main>
    </>
  );
};

