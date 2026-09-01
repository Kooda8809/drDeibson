import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, getWhatsAppUrl } from '../../config/site';
import { InstagramIcon } from './InstagramIcon';
import { MessageCircle, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050507] pt-8 md:pt-10">
      {/* Expansive Horizontal Shell with Compact Vertical Architecture */}
      <div className="w-full max-w-[1680px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-none bg-[#0A0A0E] border-t border-x border-[rgba(243,240,234,0.12)] pt-8 md:pt-10 pb-8 md:pb-10 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.85)]">
          {/* Top Ambient Gradient Shimmer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[120px] bg-[radial-gradient(ellipse,rgba(197,168,128,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Top Brand & Compliance Section - Responsive Flex Row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 md:pb-8 border-b border-[rgba(243,240,234,0.08)] relative z-10">
            {/* Logo & Slogan */}
            <div className="flex flex-col items-start gap-2">
              <div className="h-10 sm:h-12 md:h-14 flex items-center">
                <img
                  src="/assets/dr-deibson-logo-cropped.avif"
                  alt="Dr. Deibson Fernandes - Cirurgião Dentista"
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="text-[11px] sm:text-xs uppercase font-mono tracking-[0.2em] text-[#C5A880] font-semibold">
                Design de Sorrisos Exclusivos • Escultura Anatômica em Resina Direta
              </div>
            </div>

            {/* Copyright & CFO Tagline */}
            <div className="text-xs md:text-sm text-[#8E8E98] font-light lg:text-right space-y-1">
              <p className="font-normal text-[#D0CDD5]">© {currentYear} Dr. Deibson Fernandes. Todos os direitos reservados.</p>
              <p className="text-[11px] md:text-xs text-[#7A7A84] flex items-center lg:justify-end gap-1.5 pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                <span>{siteConfig.credentials.display} • Em estrita conformidade com CFO e LGPD.</span>
              </p>
            </div>
          </div>

          {/* 4 Clean Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 md:pt-8 relative z-10">
            {/* Column 1: Tratamento */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#F3F0EA]">
                Tratamento
              </h4>
              <ul className="space-y-2 text-sm text-[#A0A0A8] font-light">
                <li>
                  <Link to="/lentes-em-resina" className="hover:text-[#DFCAAB] transition-colors flex items-center gap-1.5 group">
                    <span>Lentes em Resina Direta</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A880]" />
                  </Link>
                </li>
                <li>
                  <Link to="/casos" className="hover:text-[#DFCAAB] transition-colors">
                    Galeria de Casos Clínicos
                  </Link>
                </li>
                <li>
                  <Link to="/lentes-em-resina#processo" className="hover:text-[#DFCAAB] transition-colors">
                    Processo Passo a Passo
                  </Link>
                </li>
                <li>
                  <Link to="/casos" className="hover:text-[#DFCAAB] transition-colors">
                    Harmonização do Sorriso
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Institucional */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#F3F0EA]">
                Institucional
              </h4>
              <ul className="space-y-2 text-sm text-[#A0A0A8] font-light">
                <li>
                  <Link to="/sobre" className="hover:text-[#DFCAAB] transition-colors">
                    Sobre o Dr. Deibson
                  </Link>
                </li>
                <li>
                  <Link to="/duvidas" className="hover:text-[#DFCAAB] transition-colors">
                    Dúvidas Frequentes
                  </Link>
                </li>
                <li>
                  <Link to="/politica-de-privacidade" className="hover:text-[#DFCAAB] transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="/termos" className="hover:text-[#DFCAAB] transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="hover:text-[#DFCAAB] transition-colors">
                    Localização & Atendimento
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Esclarecimentos */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#F3F0EA]">
                Esclarecimentos
              </h4>
              <ul className="space-y-2 text-sm text-[#A0A0A8] font-light">
                <li>
                  <Link to="/duvidas" className="hover:text-[#DFCAAB] transition-colors">
                    Perguntas Frequentes (FAQ)
                  </Link>
                </li>
                <li>
                  <Link to="/duvidas" className="hover:text-[#DFCAAB] transition-colors">
                    Critérios de Indicação
                  </Link>
                </li>
                <li>
                  <Link to="/duvidas" className="hover:text-[#DFCAAB] transition-colors">
                    Durabilidade & Manutenção
                  </Link>
                </li>
                <li>
                  <Link to="/duvidas" className="hover:text-[#DFCAAB] transition-colors">
                    Regulamentação CFO
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="hover:text-[#DFCAAB] transition-colors">
                    Atendimento Concierge
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Redes & Conexões */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#F3F0EA]">
                Redes & Contato
              </h4>
              <ul className="space-y-2 text-sm text-[#A0A0A8] font-light">
                <li>
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click_instagram', { source: 'footer' })}
                    className="hover:text-[#DFCAAB] transition-colors flex items-center gap-2"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#C5A880]" />
                    <span>Instagram Oficial</span>
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click_whatsapp', { source: 'footer' })}
                    className="hover:text-[#DFCAAB] transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                    <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
                  </a>
                </li>
                <li className="pt-1">
                  <div className="space-y-0.5">
                    <span className="text-[11px] uppercase font-mono tracking-wider text-[#C5A880] block font-semibold">
                      Atendimento com Hora Marcada
                    </span>
                    <span className="text-xs text-[#8E8E98] block font-light">
                      São Paulo • SP | Goiânia • GO
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
