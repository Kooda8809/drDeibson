import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionHeading } from '../components/common/SectionHeading';
import { Check, ShieldAlert, Layers, RefreshCw, Zap, ArrowUpRight, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { methodologySteps } from '../data/methodology';
import { FinalCTASection } from '../sections/FinalCTASection';
import { trackEvent } from '../utils/analytics';

interface ResinVeneersPageProps {
  onOpenAppointmentModal: () => void;
}

export const ResinVeneersPage: React.FC<ResinVeneersPageProps> = ({ onOpenAppointmentModal }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.85;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveStepIndex(Math.min(Math.max(index, 0), methodologySteps.length - 1));
  };

  const scrollToStep = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const itemWidth = container.offsetWidth * 0.85 + 16;
    container.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    setActiveStepIndex(index);
  };

  const handleNextStep = () => {
    if (activeStepIndex < methodologySteps.length - 1) {
      scrollToStep(activeStepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      scrollToStep(activeStepIndex - 1);
    }
  };

  return (
    <>
      <SEO
        title="Lentes em Resina"
        description="Conheça tudo sobre as Lentes em Resina Composta: tecnologia nano-híbrida, indicação individualizada, preservação dental e acabamento de alto padrão com o Dr. Deibson Fernandes."
        canonicalPath="/lentes-em-resina"
      />

      <main className="pt-24 sm:pt-28 pb-16">
        {/* Technical Deep Dive */}
        <section className="section-padding bg-[#070708] border-y border-[rgba(243,240,234,0.06)]">
          <div className="site-container">
            <SectionHeading
              label="Fundamentos Técnicos"
              title="A Ciência por trás da"
              highlightedWord="Resina Nano-Híbrida."
              subtitle="Materiais odontológicos de última geração desenvolvidos para mimetizar o esmalte humano com máxima resistência mecânica e estabilidade de cor."
            />

            {/* 3 Technical Explanation Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              <div className="editorial-card">
                <div className="w-10 h-10 rounded-none bg-[#1A1A20] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F3F0EA] mb-2">Estratificação Cromática</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light">
                  A aplicação é feita em camadas de diferentes opacidades (dentina, corpo e esmalte translúcido), reproduzindo a profundidade e o jogo de luz natural do dente.
                </p>
              </div>

              <div className="editorial-card">
                <div className="w-10 h-10 rounded-none bg-[#1A1A20] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F3F0EA] mb-2">Microtextura & Polimento</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light">
                  O polimento multi-grão em etapas cria microestrias de superfície que quebram a reflexão de luz, eliminando o reflexo plástico e promovendo um brilho natural vítreo.
                </p>
              </div>

              <div className="editorial-card">
                <div className="w-10 h-10 rounded-none bg-[#1A1A20] border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#F3F0EA] mb-2">Reversibilidade & Ajuste</h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-light">
                  Por não exigir desgastes agressivos na maioria das indicações clínicas, a resina oferece maior conservação de estrutura dental e facilidade de manutenção futura.
                </p>
              </div>
            </div>

            {/* Visual Breathing Room: High-Definition Macro Photography Showcase */}
            <div className="mb-16 pt-8 border-t border-[rgba(243,240,234,0.06)]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#DFCAAB] uppercase block mb-1">
                    Documentação Visual & Detalhes Anatômicos
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F3F0EA] font-normal">
                    A anatomia viva que os olhos sentem.
                  </h3>
                </div>
                <p className="text-xs text-[#8E8E93] max-w-md font-light leading-relaxed">
                  Registros em ultra-aproximação clínica revelando a precisão do trabalho artesanal: textura de esmalte, luz e estratificação.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Real Case 1: Estratificação e Mimetismo */}
                <div className="group overflow-hidden rounded-none border border-white/10 bg-[#121217] transition-all hover:border-[#DFCAAB]/40 shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0E]">
                    <img
                      src="/assets/cases/case-1-after.avif"
                      alt="Caso Clínico Real - Estratificação anatômica em resina composta pelo Dr. Deibson Fernandes"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-black/75 backdrop-blur-md px-2.5 py-1 text-[#DFCAAB] border border-white/10">
                      Caso Clínico Real • Dr. Deibson
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-serif text-base text-[#F3F0EA] mb-1">Estratificação & Mimetismo</h4>
                    <p className="text-xs text-[#8E8E93] font-light leading-relaxed">
                      Reprodução fidedigna das nuances ópticas, translucidez e profundidade do esmalte natural através de resinas nano-híbridas de alta tecnologia.
                    </p>
                  </div>
                </div>

                {/* Real Case 2: Microtextura & Brilho Natural */}
                <div className="group overflow-hidden rounded-none border border-white/10 bg-[#121217] transition-all hover:border-[#DFCAAB]/40 shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0E]">
                    <img
                      src="/assets/cases/case-2-after.avif"
                      alt="Caso Clínico Real - Microtextura e reflexão de luz em resina composta pelo Dr. Deibson Fernandes"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-black/75 backdrop-blur-md px-2.5 py-1 text-[#DFCAAB] border border-white/10">
                      Caso Clínico Real • Dr. Deibson
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-serif text-base text-[#F3F0EA] mb-1">Microtextura & Reflexão de Luz</h4>
                    <p className="text-xs text-[#8E8E93] font-light leading-relaxed">
                      Trabalho minucioso de textura superficial com estrias anatômicas que quebram o reflexo direto e garantem um brilho acetinado autêntico.
                    </p>
                  </div>
                </div>

                {/* Real Case 4: Harmonia & Acabamento Acetinado */}
                <div className="group overflow-hidden rounded-none border border-white/10 bg-[#121217] transition-all hover:border-[#DFCAAB]/40 shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0E]">
                    <img
                      src="/assets/cases/case-4-after.avif"
                      alt="Caso Clínico Real - Acabamento e proporção áurea pelo Dr. Deibson Fernandes"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-black/75 backdrop-blur-md px-2.5 py-1 text-[#DFCAAB] border border-white/10">
                      Caso Clínico Real • Dr. Deibson
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-serif text-base text-[#F3F0EA] mb-1">Harmonia & Selamento Marginal</h4>
                    <p className="text-xs text-[#8E8E93] font-light leading-relaxed">
                      Integração perfeita entre o dente e o material restaurador, respeitando a biologia periodontal e a anatomia individual do paciente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indication & Assessment Box (Harmonious Symmetrical Quick Scanning) */}
            <div id="indicacao" className="p-6 sm:p-8 rounded-none bg-[#101014] border border-[rgba(197,168,128,0.3)] shadow-2xl scroll-mt-28">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(243,240,234,0.06)]">
                <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-[#DFCAAB]" />
                <h3 className="font-serif text-xl sm:text-2xl text-[#F3F0EA] font-normal">
                  Critérios de Indicação Clínica
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#A0A0A5] font-light leading-relaxed">
                {/* Left Column: Favoráveis */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-[#DFCAAB] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#DFCAAB]" />
                    <span>Casos Frequentemente Favorecidos:</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#DFCAAB] font-bold">✔</span>
                      <span className="text-[#D5D2DA]">Fechamento de espaços entre os dentes (diastemas)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#DFCAAB] font-bold">✔</span>
                      <span className="text-[#D5D2DA]">Dentes conoides ou com assimetrias de tamanho e largura</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#DFCAAB] font-bold">✔</span>
                      <span className="text-[#D5D2DA]">Desgastes leves de bordo incisal por atrito ou tempo</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#DFCAAB] font-bold">✔</span>
                      <span className="text-[#D5D2DA]">Harmonização do arco do sorriso e proporções faciais</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column: Casos de Atenção Preparatória */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-[#DFCAAB] font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#DFCAAB]" />
                    <span>A Necessidade da Avaliação Presencial:</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#DFCAAB] font-bold">•</span>
                      <span className="text-[#D5D2DA]"><strong className="text-[#F3F0EA] font-medium">Bruxismo não controlado:</strong> necessita de ajuste oclusal e placa protetora</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#DFCAAB] font-bold">•</span>
                      <span className="text-[#D5D2DA]"><strong className="text-[#F3F0EA] font-medium">Desalinhamentos ósseos complexos:</strong> demanda alinhamento ortodôntico prévio</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#DFCAAB] font-bold">•</span>
                      <span className="text-[#D5D2DA]"><strong className="text-[#F3F0EA] font-medium">Comprometimento periodontal prévio:</strong> saúde gengival deve estar 100% restabelecida</span>
                    </li>
                  </ul>
                  <p className="text-[11px] text-[#8E8E93] italic pt-2 border-t border-white/5">
                    (Estes quadros exigem tratamento preparatório antes do procedimento estético).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete 5-Step Methodology Section */}
        <section className="section-padding bg-[#0B0B0C] border-t border-[rgba(243,240,234,0.06)]" id="processo">
          <div className="site-container">
            <SectionHeading
              label="Metodologia Autoral"
              title="Do planejamento ao"
              highlightedWord="sorriso exclusivo."
              subtitle="Um processo meticuloso estruturado em 5 etapas para transformar expectativas em um resultado com alto grau de naturalidade e rigor técnico."
            />

            {/* MOBILE ONLY: Horizontal Swipe Carousel with Navigation & Dots */}
            <div className="md:hidden">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-[10px] font-mono tracking-widest text-[#DFCAAB] uppercase">
                  Passo {activeStepIndex + 1} de {methodologySteps.length}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevStep}
                    disabled={activeStepIndex === 0}
                    className="p-1.5 bg-[#14141A] border border-white/10 text-white disabled:opacity-30"
                    aria-label="Passo anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={activeStepIndex === methodologySteps.length - 1}
                    className="p-1.5 bg-[#14141A] border border-white/10 text-white disabled:opacity-30"
                    aria-label="Próximo passo"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Horizontal Scroll Track */}
              <div
                ref={carouselRef}
                onScroll={handleMobileScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 scrollbar-none"
              >
                {methodologySteps.map((step) => (
                  <div
                    key={step.number}
                    className="w-[85vw] max-w-[320px] flex-shrink-0 snap-center p-5 rounded-none bg-[#111114] border border-[rgba(243,240,234,0.09)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-serif text-3xl font-light text-[#DFCAAB]">
                          {step.number}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-none bg-[#18181D] text-[#A0A0A5] border border-white/10">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg text-[#F3F0EA] font-normal mb-1">
                        {step.title}
                      </h3>
                      <div className="text-xs text-[#DFCAAB] font-sans font-medium mb-3">
                        {step.subtitle}
                      </div>

                      <p className="text-xs text-[#8E8E93] leading-relaxed font-light mb-4">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[rgba(243,240,234,0.05)] space-y-1.5">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#A0A0A5]">
                          <span className="text-[#DFCAAB] mt-0.5">•</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Step indicator pagination dots */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {methodologySteps.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => scrollToStep(dotIdx)}
                    className={`h-1.5 transition-all rounded-none ${
                      activeStepIndex === dotIdx ? 'w-6 bg-[#DFCAAB]' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Ir para passo ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP ONLY: 5-Column Clean Layout Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 max-w-7xl mx-auto">
              {methodologySteps.map((step) => (
                <div
                  key={step.number}
                  className="p-6 rounded-none bg-[#111114] border border-[rgba(243,240,234,0.07)] hover:border-[#DFCAAB]/40 transition-all flex flex-col justify-between group relative overflow-hidden shadow-lg"
                >
                  {/* Top Step Number & Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-3xl font-light text-[#DFCAAB]/80 group-hover:text-[#DFCAAB] transition-colors">
                        {step.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-none bg-[#18181D] text-[#A0A0A5] border border-[rgba(243,240,234,0.06)]">
                        {step.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg text-[#F3F0EA] font-normal mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs text-[#DFCAAB] font-sans font-medium mb-3">
                      {step.subtitle}
                    </div>

                    <p className="text-xs text-[#8E8E93] leading-relaxed font-light mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="pt-3 border-t border-[rgba(243,240,234,0.05)] space-y-1.5">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#A0A0A5]">
                        <span className="text-[#DFCAAB] mt-0.5">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Conversion Bridge to Cases Gallery (Proof of Concept Transition) */}
            <div className="mt-14 max-w-5xl mx-auto p-6 sm:p-8 rounded-none bg-gradient-to-r from-[#14141A] via-[#171722] to-[#121217] border border-[rgba(197,168,128,0.35)] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#DFCAAB] uppercase block">
                  Prova Social & Resultados Reais
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F3F0EA] font-normal">
                  Veja na prática como esse planejamento transforma sorrisos.
                </h4>
                <p className="text-xs sm:text-sm text-[#A0A0A8] font-light max-w-xl">
                  Casos clínicos reais documentados com rigor técnico, fotografia profissional e comparativo interativo de antes & depois.
                </p>
              </div>

              <Link
                to="/casos"
                onClick={() => trackEvent('click_cases_bridge', { source: 'resin_veneers_process' })}
                className="btn-pill-bronze whitespace-nowrap flex items-center justify-center gap-2 group flex-shrink-0 shadow-[0_10px_25px_rgba(197,168,128,0.25)] w-full md:w-auto"
              >
                <span>Acessar Galeria de Casos</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>

        <FinalCTASection onOpenAppointmentModal={onOpenAppointmentModal} />
      </main>
    </>
  );
};
