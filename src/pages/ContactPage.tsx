import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { MessageCircle, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from '../components/common/InstagramIcon';
import { trackEvent } from '../utils/analytics';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredShift, setPreferredShift] = useState('Manhã');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Olá Dr. Deibson Fernandes!\n\n` +
      `Gostaria de solicitar um agendamento de avaliação para Lentes em Resina pelo formulário do site.\n` +
      `• Nome: ${name.trim() || 'Não informado'}\n` +
      `• WhatsApp: ${phone.trim() || 'Não informado'}\n` +
      (email.trim() ? `• E-mail: ${email.trim()}\n` : '') +
      `• Período de preferência: ${preferredShift}\n` +
      (message.trim() ? `• Observações: ${message.trim()}\n` : '') +
      `\nAguardando confirmação de datas disponíveis. Obrigado!`;

    trackEvent('click_agendamento', {
      source: 'contact_page_form',
      preferredShift,
      hasEmail: !!email.trim(),
    });

    const targetUrl = getWhatsAppUrl(formattedMessage);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Agendamento & Contato"
        description="Solicite sua consulta de avaliação com o Dr. Deibson Fernandes. Atendimento personalizado em lentes em resina e design de sorrisos."
        canonicalPath="/contato"
      />

      <main className="pt-32 pb-20">
        {/* Page Hero */}
        <div className="site-container mb-16">
          <div className="max-w-3xl">
            <div className="editorial-label">
              Agendamento & Atendimento
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0EA] font-normal leading-[1.12] mb-6">
              Inicie a experiência de{' '}
              <span className="italic text-[#C5A880]">esculpir seu novo sorriso.</span>
            </h1>
            <p className="text-lg text-[#A0A0A5] font-light leading-relaxed">
              Preencha o formulário abaixo ou fale diretamente com a equipe do consultório via WhatsApp para agendar sua avaliação individual.
            </p>
          </div>
        </div>

        {/* Form and Direct Contact Grid */}
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7 p-8 md:p-10 rounded-md bg-[#0F0F12] border border-[rgba(197,168,128,0.25)] shadow-2xl">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-1">
                  Solicitação Online
                </span>
                <h2 className="font-serif text-2xl text-[#F3F0EA] font-normal">
                  Formulário de Pré-Agendamento
                </h2>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center bg-[#141418] rounded border border-[#C5A880]/30 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-[#F3F0EA] mb-2">Mensagem Encaminhada!</h3>
                  <p className="text-xs text-[#A0A0A5] max-w-sm mx-auto mb-6">
                    A conversa no WhatsApp foi aberta. Nossa equipe entrará em contato para verificar horários compatíveis.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary text-xs py-2 px-6"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F3F0EA] mb-2">
                      Seu Nome Completo <span className="text-[#C5A880]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Como você prefere ser chamado(a)"
                      className="w-full px-4 py-3 rounded-none bg-[#16161B] border border-[rgba(243,240,234,0.1)] text-sm text-[#F3F0EA] focus:border-[#C5A880] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F3F0EA] mb-2">
                        WhatsApp / Celular <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(DDD) 99999-9999"
                        className="w-full px-4 py-3 rounded-none bg-[#16161B] border border-[rgba(243,240,234,0.1)] text-sm text-[#F3F0EA] focus:border-[#C5A880] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A0A0A5] mb-2">
                        E-mail (Opcional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 rounded-none bg-[#16161B] border border-[rgba(243,240,234,0.1)] text-sm text-[#F3F0EA] focus:border-[#C5A880] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F3F0EA] mb-2">
                      Preferência de Período para Atendimento
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Manhã', 'Tarde', 'Flexível'].map((shift) => (
                        <button
                          type="button"
                          key={shift}
                          onClick={() => setPreferredShift(shift)}
                          className={`py-2.5 text-xs font-medium rounded-none border transition-all ${
                            preferredShift === shift
                              ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#DEC5A3] font-semibold'
                              : 'bg-[#16161B] border-[rgba(243,240,234,0.06)] text-[#A0A0A5] hover:text-[#F3F0EA]'
                          }`}
                        >
                          {shift}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A0A0A5] mb-2">
                      Mensagem ou Desejo Estético (Opcional)
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Conte um pouco sobre suas expectativas em relação ao seu sorriso..."
                      className="w-full px-4 py-3 rounded-none bg-[#16161B] border border-[rgba(243,240,234,0.1)] text-sm text-[#F3F0EA] focus:border-[#C5A880] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* LGPD Consent */}
                  <div className="p-3 rounded-sm bg-[#141418] border border-[rgba(243,240,234,0.06)] flex items-start gap-2.5 text-[11px] text-[#8E8E93]">
                    <ShieldCheck className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
                    <span>
                      Em conformidade com a LGPD, seus dados cadastrais são tratados com estrito sigilo e utilizados exclusivamente pela equipe do Dr. Deibson Fernandes para agendamento.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn-bronze w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>Solicitar Avaliação via WhatsApp Oficial</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Channels & Credentials */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct WhatsApp Card */}
              <div className="p-6 rounded-md bg-[#0F0F12] border border-[rgba(243,240,234,0.08)]">
                <div className="w-10 h-10 rounded-full bg-[#18181D] text-[#C5A880] flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F3F0EA] mb-2">WhatsApp Direto</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed mb-4">
                  Se preferir uma resposta imediata para esclarecimentos e checagem de horários:
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_whatsapp', { source: 'contact_page_card' })}
                  className="btn-primary text-xs py-3 px-4 w-full justify-center flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{siteConfig.contact.whatsappDisplay}</span>
                </a>
              </div>

              {/* Instagram Card */}
              <div className="p-6 rounded-md bg-[#0F0F12] border border-[rgba(243,240,234,0.08)]">
                <div className="w-10 h-10 rounded-full bg-[#18181D] text-[#C5A880] flex items-center justify-center mb-4">
                  <InstagramIcon className="w-5 h-5 text-[#C5A880]" />
                </div>
                <h3 className="font-serif text-xl text-[#F3F0EA] mb-2">Instagram Oficial</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed mb-4">
                  Acompanhe transformações reais, rotina clínica e bastidores da odontologia estética:
                </p>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('click_instagram', { source: 'contact_page_card' })}
                  className="btn-secondary text-xs py-3 px-4 w-full justify-center flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C5A880]" />
                  <span>{siteConfig.contact.instagramHandle}</span>
                </a>
              </div>

              {/* Legal & Registrations */}
              <div className="p-6 rounded-md bg-[#070708] border border-[rgba(243,240,234,0.06)] text-xs text-[#8E8E93] space-y-3">
                <div className="text-[#F3F0EA] font-serif text-base">Identificação Profissional:</div>
                <div className="text-[#C5A880] font-medium">
                  {siteConfig.name} • {siteConfig.credentials.display}
                </div>
                <p className="text-[11px] leading-relaxed pt-2 border-t border-[rgba(243,240,234,0.06)]">
                  {siteConfig.ethics.cfoDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
