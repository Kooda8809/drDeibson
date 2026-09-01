import React from 'react';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../config/site';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Termos de Uso"
        description="Termos e condições de uso do site institucional do Dr. Deibson Fernandes."
        canonicalPath="/termos"
      />

      <main className="pt-32 pb-20">
        <div className="site-container max-w-4xl">
          <div className="mb-10">
            <div className="editorial-label">
              Termos de Uso
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F0EA] font-normal mb-4">
              Termos e Condições de Uso
            </h1>
            <p className="text-sm text-[#8E8E93]">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="p-8 rounded-md bg-[#0F0F12] border border-[rgba(243,240,234,0.08)] space-y-6 text-sm text-[#A0A0A5] leading-relaxed font-light">
            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#F3F0EA] font-normal">1. Finalidade Informativa e Institucional</h2>
              <p>
                Este website tem como objetivo apresentar o perfil profissional, a filosofia clínica e os procedimentos estéticos em lentes de resina realizados pelo <strong className="text-[#F3F0EA]">{siteConfig.name}</strong> ({siteConfig.credentials.display}). As informações aqui contidas possuem caráter exclusivamente informativo e educativo.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#F3F0EA] font-normal">2. Ausência de Diagnóstico à Distância</h2>
              <p>
                Nenhuma informação disponibilizada neste site substitui a consulta odontológica presencial, o exame clínico detalhado e o diagnóstico individualizado realizado por profissional legalmente habilitado.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#F3F0EA] font-normal">3. Conformidade com o CFO</h2>
              <p>
                As divulgações de imagens e dados técnicos respeitam estritamente a Resolução CFO-196/2019 e as diretrizes do Conselho Federal de Odontologia, garantindo o direito à informação verídica, sem promessa de resultados e com identificação profissional obrigatória.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#F3F0EA] font-normal">4. Propriedade Intelectual</h2>
              <p>
                Todos os textos, fotografias autorizadas, elementos visuais e códigos presentes neste website são protegidos pelas leis de propriedade intelectual e direitos autorais. É vedada a reprodução total ou parcial sem autorização prévia por escrito.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
