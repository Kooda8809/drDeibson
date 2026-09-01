import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/common/SectionHeading';
import { siteConfig, getWhatsAppUrl } from '../config/site';
import { InstagramIcon } from '../components/common/InstagramIcon';
import { ShieldCheck, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const AboutSection: React.FC = () => {
  return (
    <section className="section-padding bg-[#0A0A0D] border-t border-[rgba(243,240,234,0.06)] relative overflow-hidden" id="sobre">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Editorial Portrait Column on Left with Sharp Defined Corners */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full max-w-md mx-auto rounded-none overflow-hidden border border-[rgba(197,168,128,0.35)] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              {/* Doctor Clinical & Editorial Lifestyle Portrait */}
              <img
                src="/assets/doutor.avif"
                alt="Dr. Deibson Fernandes - Atendimento Clínico e Escultura Dental"
                loading="lazy"
                className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090C] via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          </div>

          {/* Editorial Biography Column on Right */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              title="A busca incansável pela"
              highlightedWord="harmonia e naturalidade."
              subtitle="Conheça a trajetória e o propósito do Dr. Deibson Fernandes na odontologia cosmética contemporânea."
              className="mb-6"
            />

            {/* Single Intro Paragraph */}
            <div className="text-sm md:text-base text-[#9E9EA6] font-light leading-relaxed">
              <p>
                O <strong className="text-[#F3F0EA] font-normal">Dr. Deibson Fernandes</strong> dedica sua carreira à reconstrução do sorriso por meio de técnicas adesivas diretas. Com mais de 3.000 lentes em resina realizadas, sua prática clínica baseia-se no equilíbrio perfeito entre rigor anatômico e sensibilidade estética.
              </p>
            </div>

            {/* Direct Link to Full Biography */}
            <div className="pt-1">
              <Link
                to="/sobre"
                onClick={() => trackEvent('click_about_cta', { target: 'sobre_page' })}
                className="btn-secondary text-xs py-3 px-6 inline-flex items-center gap-2 group"
              >
                <span>Ler trajetória completa</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Credentials Row */}
            <div className="pt-2 flex flex-wrap gap-6 items-center border-y border-[rgba(243,240,234,0.08)] py-4">
              <div className="flex items-center gap-2 text-xs text-[#DEC5A3] font-mono">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>{siteConfig.credentials.sp}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#DEC5A3] font-mono">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>{siteConfig.credentials.go}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#DEC5A3] font-mono">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span>+3.000 Lentes Realizadas</span>
              </div>
            </div>

            {/* Social Connection Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { source: 'about_section' })}
                className="btn-pill-bronze w-full sm:w-auto text-xs py-3.5 px-8 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_instagram', { source: 'about_section' })}
                className="btn-pill-secondary w-full sm:w-auto text-xs py-3.5 px-6 flex items-center justify-center gap-2"
              >
                <InstagramIcon className="w-4 h-4 text-[#C5A880]" />
                <span>{siteConfig.contact.instagramHandle}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
