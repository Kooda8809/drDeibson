import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { CaseStudy } from '../../data/cases';

interface InteractiveGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
  onPrev?: () => void;
  onNext?: () => void;
  hasNavigation?: boolean;
}

export const InteractiveGalleryModal: React.FC<InteractiveGalleryModalProps> = ({
  isOpen,
  onClose,
  caseStudy,
  onPrev,
  onNext,
  hasNavigation = true,
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
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
  }, [isOpen, onClose, onPrev, onNext]);

  // Mobile Swipe Gesture Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance && onNext) {
      // Swiped Left -> Next Case
      onNext();
    } else if (distance < -minSwipeDistance && onPrev) {
      // Swiped Right -> Prev Case
      onPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || !caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
    >
      {/* Backdrop overlay click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Spotlight Container (Sharp Defined Corners & Mobile-Friendly Scroll) */}
      <div
        className="relative w-full max-w-5xl max-h-[94dvh] overflow-y-auto bg-[#0C0C0F] border border-[rgba(197,168,128,0.3)] rounded-none shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 flex flex-col"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Bar with Case Navigation & Close Button */}
        <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-[rgba(243,240,234,0.08)] bg-[#111116]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880]">
              {caseStudy.category}
            </span>
            <span className="hidden sm:inline-block w-[1px] h-3 bg-white/20" />
            <span className="hidden sm:inline-block text-xs text-[#DEC5A3] font-serif">
              Transformação com Lentes em Resina
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {hasNavigation && (
              <div className="flex items-center gap-1 mr-1 sm:mr-2">
                <button
                  onClick={onPrev}
                  className="p-2 sm:p-2.5 rounded-none bg-[#181820] text-[#A0A0A5] hover:text-[#F3F0EA] hover:bg-[#22222C] active:scale-95 border border-white/5 transition-all"
                  aria-label="Caso anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={onNext}
                  className="p-2 sm:p-2.5 rounded-none bg-[#181820] text-[#A0A0A5] hover:text-[#F3F0EA] hover:bg-[#22222C] active:scale-95 border border-white/5 transition-all"
                  aria-label="Próximo caso"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-none bg-[#181820] text-[#A0A0A5] hover:text-[#F3F0EA] hover:bg-[#22222C] active:scale-95 border border-white/10 transition-all"
              aria-label="Fechar visualizador"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Interactive Slider & Case Typography */}
        <div className="p-3 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          <div className="w-full">
            <BeforeAfterSlider
              key={caseStudy.id}
              beforeImage={caseStudy.beforeImage}
              afterImage={caseStudy.afterImage}
              altBefore={`Antes - ${caseStudy.title}`}
              altAfter={`Depois - ${caseStudy.title}`}
              isPlaceholder={caseStudy.isPlaceholder}
            />
          </div>

          {/* Editorial Content Card */}
          <div className="p-4 sm:p-6 md:p-8 rounded-none bg-[#121217] border border-[rgba(243,240,234,0.06)] space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 id="modal-case-title" className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F3F0EA] font-normal leading-snug">
                {caseStudy.title}
              </h3>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#C5A880] px-2.5 py-1 bg-[#181820] border border-[#C5A880]/20 w-fit">
                Escultura Autoral
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-[#A0A0A5] font-light leading-relaxed">
              {caseStudy.description}
            </p>

            {/* Technical Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-4 border-t border-[rgba(243,240,234,0.06)]">
              {caseStudy.technicalHighlights.map((highlight, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 rounded-none bg-[#16161D] border border-white/5">
                  <span className="text-[11px] sm:text-xs text-[#DEC5A3] font-mono block mb-0.5">• Destaque Clínico</span>
                  <span className="text-[11px] sm:text-xs text-[#8E8E93] leading-snug">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CFO Legal Disclaimer */}
            <div className="flex items-start gap-2.5 pt-3 text-[10px] sm:text-[11px] text-[#6E6E75] border-t border-[rgba(243,240,234,0.04)]">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
              <span>
                {caseStudy.cfoTag} Os resultados de qualquer tratamento odontológico variam de acordo com as características biológicas e oclusais de cada indivíduo.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
