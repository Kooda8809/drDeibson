import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/site';
import { trackEvent } from '../../utils/analytics';

interface MobileFloatingCTAProps {
  onOpenAppointmentModal: () => void;
}

export const MobileFloatingCTA: React.FC<MobileFloatingCTAProps> = ({ onOpenAppointmentModal }) => {
  const handleDirectWhatsApp = () => {
    trackEvent('click_whatsapp', { source: 'mobile_floating_bar' });
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleModalClick = () => {
    trackEvent('click_agendamento', { source: 'mobile_floating_bar' });
    onOpenAppointmentModal();
  };

  return (
    <aside 
      aria-label="Ações rápidas de contato"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-[#0B0B0C]/95 backdrop-blur-lg border-t border-[rgba(243,240,234,0.12)] shadow-2xl"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={handleModalClick}
          className="flex-1 py-3 px-4 rounded-none bg-gradient-to-r from-[#DEC5A3] to-[#C5A880] text-[#050505] font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Solicitar Avaliação</span>
        </button>

        <button
          onClick={handleDirectWhatsApp}
          className="p-3 rounded-none bg-[#18181D] text-[#C5A880] border border-[#C5A880]/30 hover:bg-[#202026] active:scale-[0.98] transition-transform"
          aria-label="Falar diretamente no WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
