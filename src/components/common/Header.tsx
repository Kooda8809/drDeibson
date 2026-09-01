import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../../config/site';
import { mainNavItems } from '../../data/navigation';
import { trackEvent } from '../../utils/analytics';

interface HeaderProps {
  onOpenAppointmentModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Box appears as soon as user scrolls down
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleCtaClick = () => {
    trackEvent('click_agendamento', { source: 'header_cta' });
    onOpenAppointmentModal();
  };

  const hasBox = !isHomePage || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          hasBox
            ? 'bg-[#09090C]/95 backdrop-blur-xl border-b border-[rgba(243,240,234,0.08)] py-3 shadow-2xl'
            : 'bg-transparent border-b border-transparent backdrop-blur-none py-5 sm:py-6 shadow-none'
        }`}
      >
        <div className="site-container flex items-center justify-between lg:justify-center lg:gap-8 xl:gap-12">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none py-1 flex-shrink-0"
            aria-label="Dr. Deibson Fernandes - Página Inicial"
          >
            <div className="h-10 sm:h-11 md:h-12 flex items-center">
              <img
                src="/assets/dr-deibson-logo-cropped.avif"
                alt="Dr. Deibson Fernandes - Cirurgião Dentista"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] brightness-110"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Centered and Close to Logo */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegação principal">
            {mainNavItems
              .filter((item) => item.href !== '/')
              .map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all relative py-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] ${
                      isActive
                        ? 'text-[#DFCAAB] font-bold'
                        : hasBox
                        ? 'text-[#D5D2DA] hover:text-[#FFFFFF]'
                        : 'text-[#F8F6F2] hover:text-[#DFCAAB]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#DFCAAB] rounded-none shadow-[0_0_8px_rgba(223,202,171,0.6)]" />
                    )}
                  </Link>
                );
              })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#F3F0EA] hover:text-[#C5A880] transition-colors border border-[rgba(243,240,234,0.12)] rounded-none bg-[#141418]/80"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#09090C]/98 backdrop-blur-2xl flex flex-col justify-between p-6 animate-fade-in">
          {/* Drawer Top with Logo */}
          <div className="flex items-center justify-between border-b border-[rgba(243,240,234,0.1)] pb-4">
            <div className="h-10 flex items-center">
              <img
                src="/assets/dr-deibson-logo-cropped.avif"
                alt="Dr. Deibson Fernandes"
                className="h-full w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 text-[#F3F0EA] border border-[rgba(243,240,234,0.12)] rounded-none bg-[#141418]"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-4 my-auto py-6" aria-label="Menu móvel">
            {mainNavItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              const isHome = item.href === '/';

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xl font-serif tracking-wide py-2 flex items-center justify-between border-b border-[rgba(243,240,234,0.05)] ${
                    isActive ? 'text-[#C5A880]' : 'text-[#F3F0EA]'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {isHome ? (
                    <div className="h-6 flex items-center">
                      <img
                        src="/assets/dr-deibson-logo-cropped.avif"
                        alt="Início"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {isActive && <Sparkles className="w-4 h-4 text-[#C5A880]" />}
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer Actions */}
          <div className="flex flex-col gap-3 pt-4 border-t border-[rgba(243,240,234,0.1)]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="btn-pill-bronze w-full text-center justify-center py-4 text-xs uppercase tracking-wider font-bold"
            >
              Solicitar Avaliação
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { source: 'mobile_drawer' })}
              className="btn-pill-secondary w-full text-center justify-center py-3.5 text-xs tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A880]" />
              <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
