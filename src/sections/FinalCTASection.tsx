import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '../components/common/InstagramIcon';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { trackEvent } from '../utils/analytics';

interface FinalCTASectionProps {
  onOpenAppointmentModal: () => void;
  label?: string;
  title?: string;
  highlightedText?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  isWhatsAppSecondary?: boolean;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenAppointmentModal,
  label: customLabel,
  title: customTitle,
  highlightedText: customHighlightedText,
  description: customDescription,
  primaryButtonText: customPrimaryButtonText,
  secondaryButtonText: customSecondaryButtonText,
  secondaryButtonHref: customSecondaryButtonHref,
  isWhatsAppSecondary: customIsWhatsAppSecondary,
}) => {
  const location = useLocation();
  const path = location.pathname;

  // Contextual copy presets based on the current active tab/page
  const getContextualContent = () => {
    switch (path) {
      case '/duvidas':
        return {
          label: 'Ainda tem Dúvidas Clínicas?',
          title: 'Ficou com alguma pergunta específica sobre',
          highlightedText: 'o seu caso?',
          description:
            'Cada sorriso possui particularidades anatômicas únicas. Converse diretamente com nossa equipe ou agende uma avaliação presencial para um diagnóstico claro e detalhado.',
          primaryButtonText: 'Agendar Avaliação',
          secondaryButtonText: 'Tirar Dúvida via WhatsApp',
          secondaryButtonHref: getWhatsAppUrl('Olá! Estive lendo as dúvidas no site e gostaria de esclarecer algumas perguntas sobre meu caso com a equipe do Dr. Deibson.'),
          isWhatsApp: true,
        };

      case '/casos':
        return {
          label: 'Inicie sua Transformação',
          title: 'Inspirou-se nos resultados da galeria?',
          highlightedText: 'Descubra o potencial do seu sorriso.',
          description:
            'Assim como as transformações documentadas nesta galeria, o seu sorriso também pode alcançar máxima harmonia com naturalidade, discrição e excelência artesanal.',
          primaryButtonText: 'Planejar Meu Novo Sorriso',
          secondaryButtonText: 'Ver Mais Casos no Instagram',
          secondaryButtonHref: siteConfig.contact.instagramUrl,
          isWhatsApp: false,
        };

      case '/lentes-em-resina':
        return {
          label: 'Diagnóstico & Escultura',
          title: 'Pronto para transformar seu sorriso com',
          highlightedText: 'máxima preservação biológica?',
          description:
            'Descubra se a técnica de lentes em resina composta direta é a indicação ideal para suas proporções faciais e saúde bucal através de uma avaliação individualizada.',
          primaryButtonText: 'Solicitar Avaliação Clínica',
          secondaryButtonText: 'Acompanhar Resultados no Instagram',
          secondaryButtonHref: siteConfig.contact.instagramUrl,
          isWhatsApp: false,
        };

      case '/sobre':
        return {
          label: 'Atendimento Exclusivo',
          title: 'Um cuidado artesanal e minucioso',
          highlightedText: 'dedicado exclusivamente a você.',
          description:
            'Conheça de perto a abordagem estética e o rigor clínico do Dr. Deibson Fernandes em uma consulta inicial de diagnóstico presencial.',
          primaryButtonText: 'Agendar com Dr. Deibson',
          secondaryButtonText: 'Conhecer a Rotina no Instagram',
          secondaryButtonHref: siteConfig.contact.instagramUrl,
          isWhatsApp: false,
        };

      default:
        // Home page default
        return {
          label: 'Inicie sua Transformação',
          title: 'Talvez o próximo sorriso a ser esculpido',
          highlightedText: 'seja o seu.',
          description:
            'Agende sua avaliação clínica individual e descubra as possibilidades reais de transformar seu sorriso com elegância, harmonia e naturalidade.',
          primaryButtonText: 'Agendar Avaliação',
          secondaryButtonText: 'Conhecer o Instagram',
          secondaryButtonHref: siteConfig.contact.instagramUrl,
          isWhatsApp: false,
        };
    }
  };

  const current = getContextualContent();

  const label = customLabel || current.label;
  const title = customTitle || current.title;
  const highlightedText = customHighlightedText || current.highlightedText;
  const description = customDescription || current.description;
  const primaryButtonText = customPrimaryButtonText || current.primaryButtonText;
  const secondaryButtonText = customSecondaryButtonText || current.secondaryButtonText;
  const secondaryButtonHref = customSecondaryButtonHref || current.secondaryButtonHref;
  const isWhatsApp = customIsWhatsAppSecondary !== undefined ? customIsWhatsAppSecondary : current.isWhatsApp;

  const handleModalClick = () => {
    trackEvent('click_agendamento', { source: `final_cta_${path.replace('/', '') || 'home'}` });
    onOpenAppointmentModal();
  };

  const handleSecondaryClick = () => {
    if (isWhatsApp) {
      trackEvent('click_whatsapp', { source: `final_cta_${path.replace('/', '') || 'home'}` });
    } else {
      trackEvent('click_instagram', { source: `final_cta_${path.replace('/', '') || 'home'}` });
    }
  };

  return (
    <section className="section-padding bg-[#050507] border-t border-[rgba(243,240,234,0.06)] relative overflow-hidden text-center">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[radial-gradient(ellipse,rgba(197,168,128,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="site-container relative z-10 max-w-3xl mx-auto">
        <div className="editorial-label justify-center mb-4">
          {label}
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F0EA] font-normal leading-[1.15] mb-6">
          {title}{' '}
          <span className="italic text-[#C5A880] block mt-1">{highlightedText}</span>
        </h2>

        <p className="text-base sm:text-lg text-[#A0A0A5] font-light leading-relaxed mb-10 max-w-xl mx-auto">
          {description}
        </p>

        {/* Action Buttons with Sharp Defined Identity */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleModalClick}
            className="btn-pill-bronze flex items-center justify-center gap-2 w-full sm:w-auto shadow-2xl"
          >
            <span>{primaryButtonText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={secondaryButtonHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSecondaryClick}
            className="btn-pill-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            {isWhatsApp ? (
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            ) : (
              <InstagramIcon className="w-4 h-4 text-[#C5A880]" />
            )}
            <span>{secondaryButtonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
