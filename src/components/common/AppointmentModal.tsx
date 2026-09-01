import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../config/site';
import { trackEvent } from '../../utils/analytics';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredShift, setPreferredShift] = useState('Manhã');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Olá Dr. Deibson Fernandes!\n\n` +
      `Gostaria de solicitar um agendamento de avaliação para Lentes em Resina.\n` +
      `• Nome: ${name.trim() || 'Não informado'}\n` +
      `• WhatsApp: ${phone.trim() || 'Não informado'}\n` +
      (email.trim() ? `• E-mail: ${email.trim()}\n` : '') +
      `• Período de preferência: ${preferredShift}\n` +
      (message.trim() ? `• Observações: ${message.trim()}\n` : '') +
      `\nAguardando confirmação de horários. Obrigado!`;

    trackEvent('click_agendamento', {
      source: 'modal_form_submit',
      hasEmail: !!email.trim(),
      preferredShift,
    });

    const targetUrl = getWhatsAppUrl(formattedMessage);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-appointment-title"
    >
      {/* Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content (BottomSheet on Mobile, Centered Card on Desktop) */}
      <div className="relative w-full max-w-lg max-h-[94dvh] overflow-y-auto bg-[#0E0E12] border border-[rgba(197,168,128,0.3)] rounded-none shadow-2xl z-10 safe-padding-bottom">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#16161D] via-[#101014] to-[#16161D] p-5 sm:p-6 border-b border-[rgba(243,240,234,0.08)] flex items-start justify-between sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="editorial-label mb-1">Concierge de Atendimento</div>
            <h3 id="modal-appointment-title" className="font-serif text-xl sm:text-2xl text-[#F3F0EA] font-normal">
              Solicitar Avaliação Exclusiva
            </h3>
            <p className="text-[11px] sm:text-xs text-[#A0A0A5] mt-0.5 font-sans">
              {siteConfig.name} • {siteConfig.credentials.display}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#A0A0A5] hover:text-[#F3F0EA] p-2.5 rounded-none hover:bg-[#202026] active:scale-95 transition-all"
            aria-label="Fechar formulário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#F3F0EA] mb-1.5">
              Seu Nome Completo <span className="text-[#C5A880]">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Como prefere ser chamado(a)"
              autoComplete="name"
              className="w-full px-4 py-3 rounded-none bg-[#16161C] border border-[rgba(243,240,234,0.1)] text-[#F3F0EA] text-base focus:border-[#C5A880] focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F3F0EA] mb-1.5">
                WhatsApp / Telefone <span className="text-[#C5A880]">*</span>
              </label>
              <input
                type="tel"
                required
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(DDD) 99999-9999"
                autoComplete="tel"
                className="w-full px-4 py-3 rounded-none bg-[#16161C] border border-[rgba(243,240,234,0.1)] text-[#F3F0EA] text-base focus:border-[#C5A880] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A0A0A5] mb-1.5">
                E-mail (Opcional)
              </label>
              <input
                type="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                autoComplete="email"
                className="w-full px-4 py-3 rounded-none bg-[#16161C] border border-[rgba(243,240,234,0.1)] text-[#F3F0EA] text-base focus:border-[#C5A880] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#F3F0EA] mb-1.5">
              Melhor Período para Atendimento
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Manhã', 'Tarde', 'Flexível'].map((shift) => (
                <button
                  type="button"
                  key={shift}
                  onClick={() => setPreferredShift(shift)}
                  className={`py-2.5 text-xs font-medium rounded-none border transition-all active:scale-95 ${
                    preferredShift === shift
                      ? 'bg-[#C5A880]/20 border-[#C5A880] text-[#DFCAAB] font-semibold'
                      : 'bg-[#16161C] border-[rgba(243,240,234,0.08)] text-[#A0A0A5] hover:text-[#F3F0EA]'
                  }`}
                >
                  {shift}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#A0A0A5] mb-1.5">
              Conte sobre seu desejo ou expectativa (Opcional)
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ex: Gostaria de harmonizar proporções, fechar pequenos espaços ou melhorar a estética do sorriso..."
              className="w-full px-4 py-3 rounded-none bg-[#16161C] border border-[rgba(243,240,234,0.1)] text-[#F3F0EA] text-base focus:border-[#C5A880] focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Privacy Note */}
          <div className="flex items-start gap-2 pt-1 text-[10px] sm:text-[11px] text-[#6E6E75]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
            <span>
              Seus dados são protegidos em conformidade com a LGPD e serão utilizados unicamente para contato da equipe do consultório.
            </span>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="btn-pill-bronze w-full py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4 active:scale-97"
          >
            <Send className="w-4 h-4" />
            <span>Enviar Solicitação via WhatsApp Oficial</span>
          </button>
        </form>
      </div>
    </div>
  );
};
