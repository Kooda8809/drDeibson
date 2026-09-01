import React from 'react';
import { SEO } from '../components/common/SEO';
import { philosophyPillars } from '../data/philosophy';
import { Quote } from 'lucide-react';
import { FinalCTASection } from '../sections/FinalCTASection';

interface PhilosophyPageProps {
  onOpenAppointmentModal: () => void;
}

export const PhilosophyPage: React.FC<PhilosophyPageProps> = ({ onOpenAppointmentModal }) => {
  return (
    <>
      <SEO
        title="Filosofia de Trabalho"
        description="A abordagem autoral e estética do Dr. Deibson Fernandes: individualidade, harmonia facial e respeito biológico na escultura de sorrisos."
        canonicalPath="/filosofia"
      />

      <main className="pt-32 pb-16">
        {/* Page Hero */}
        <div className="site-container mb-16">
          <div className="max-w-3xl">
            <div className="editorial-label">
              Manifesto Autoral
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0EA] font-normal leading-[1.12] mb-6">
              A odontologia estética como{' '}
              <span className="italic text-[#C5A880]">expressão de arte e identidade.</span>
            </h1>
            <p className="text-lg text-[#A0A0A5] font-light leading-relaxed">
              Sorrisos padronizados apagam a singularidade humana. Nossa filosofia é desenhar e esculpir cada detalhe para que o resultado pertença organicamente a você.
            </p>
          </div>
        </div>

        {/* Narrative Deep Dive */}
        <section className="section-padding bg-[#070708] border-y border-[rgba(243,240,234,0.06)]">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0EA] font-normal mb-6">
                  "Seu sorriso não precisa parecer feito. Precisa parecer seu."
                </h2>
                <div className="space-y-4 text-base text-[#A0A0A5] font-light leading-relaxed">
                  <p>
                    Durante anos, a odontologia estética convencional perseguiu uma simetria geométrica excessiva e uma tonalidade branca monocromática. O resultado foram sorrisos artificiais e descontextualizados da face humana.
                  </p>
                  <p>
                    Para o Dr. Deibson Fernandes, a verdadeira sofisticação está na naturalidade. Dentes naturais possuem microtexturas, zonas de maior e menor opacidade, reflexos tridimensionais e bordas levemente translúcidas.
                  </p>
                  <p>
                    Esculpir em resina composta é um ato artesanal: camada por camada, mimetizando a anatomia dental viva para criar um sorriso elegante, refinado e imperceptivelmente restaurado.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-md bg-[#101014] border border-[rgba(197,168,128,0.2)] shadow-2xl relative">
                  <div className="editorial-label mb-3">Os 4 Pilares da Filosofia</div>
                  <div className="space-y-6">
                    {philosophyPillars.map((p) => (
                      <div key={p.number} className="flex items-start gap-4">
                        <span className="font-serif text-xl text-[#C5A880]">{p.number}</span>
                        <div>
                          <h3 className="text-[#F3F0EA] font-medium text-sm font-sans">{p.title}</h3>
                          <p className="text-xs text-[#8E8E93] leading-relaxed font-light mt-1">{p.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="max-w-3xl mx-auto p-8 rounded-md bg-[#121215] border-l-2 border-[#C5A880] text-center">
              <Quote className="w-8 h-8 text-[#C5A880] mx-auto mb-4 opacity-70" />
              <p className="font-serif text-xl md:text-2xl text-[#F3F0EA] italic font-normal leading-relaxed mb-4">
                "Não criamos um sorriso novo para substituir quem você é. Esculpimos a melhor versão do seu sorriso para valorizar a sua essência."
              </p>
              <div className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                Dr. Deibson Fernandes
              </div>
            </div>
          </div>
        </section>

        <FinalCTASection onOpenAppointmentModal={onOpenAppointmentModal} />
      </main>
    </>
  );
};
