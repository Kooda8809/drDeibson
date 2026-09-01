import React from 'react';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../config/site';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Política de Privacidade (LGPD)"
        description="Termos de privacidade e proteção de dados do website do Dr. Deibson Fernandes em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018)."
        canonicalPath="/politica-de-privacidade"
      />

      <main className="pt-32 pb-20">
        <div className="site-container max-w-4xl">
          <div className="mb-10">
            <div className="editorial-label">
              Conformidade Legal & LGPD
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F0EA] font-normal mb-4">
              Política de Privacidade
            </h1>
            <p className="text-sm text-[#8E8E93]">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="p-8 rounded-md bg-[#0F0F12] border border-[rgba(243,240,234,0.08)] space-y-6 text-sm text-[#A0A0A5] leading-relaxed font-light">
            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#F3F0EA] font-normal">1. Compromisso com a Privacidade</h2>
              <p>
                O website do <strong className="text-[#F3F0EA]">{siteConfig.name}</strong> ({siteConfig.credentials.display}) preza pela segurança, confidencialidade e privacidade das informações fornecidas por seus visitantes e pacientes, em estrita observância à Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e ao Código de Ética Odontológica (CFO).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#F3F0EA] font-normal">2. Coleta e Finalidade dos Dados</h2>
              <p>
                Os únicos dados pessoais coletados neste website são aqueles fornecidos de forma voluntária e consciente pelo usuário através do formulário de contato e pré-agendamento (Nome, WhatsApp, E-mail opcional e Mensagem).
              </p>
              <p>
                Estes dados destinam-se única e exclusivamente a viabilizar o retorno para esclarecimento de dúvidas e agendamento de consultas de avaliação clínica pelo consultório.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#F3F0EA] font-normal">3. Não Compartilhamento com Terceiros</h2>
              <p>
                Não comercializamos, alugamos ou compartilhamos dados cadastrais de pacientes com terceiros para fins de marketing ou qualquer outra finalidade comercial. O tráfego de dados para o WhatsApp oficial segue as políticas de privacidade criptografadas da referida plataforma.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#F3F0EA] font-normal">4. Direitos do Titular dos Dados</h2>
              <p>
                O titular dos dados tem o direito de solicitar, a qualquer momento, a confirmação de existência de tratamento, a retificação ou a exclusão definitiva de seus dados de nossa base de contatos, mediante solicitação aos canais oficiais de atendimento.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl text-[#F3F0EA] font-normal">5. Sigilo Profissional e Ética Odontológica</h2>
              <p>
                Todas as comunicações envolvendo saúde bucal e histórico de procedimentos estão resguardadas pelo sigilo profissional inerente ao exercício da Odontologia, conforme normas do Conselho Federal de Odontologia.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
