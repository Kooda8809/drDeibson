import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  initialSliderPosition?: number; // 0 to 100
  title?: string;
  category?: string;
  isPlaceholder?: boolean;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  altBefore = 'Condição inicial antes do procedimento',
  altAfter = 'Resultado finalizado com lentes em resina',
  initialSliderPosition = 50,
  title,
  category,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialSliderPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  // Modern Pointer Events for 120Hz smooth dragging on iOS Safari & Android Chrome
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture already lost
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Visual Slider Container with Native Pointer Lock */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-none border border-[rgba(243,240,234,0.12)] select-none bg-[#070709] cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#C5A880] shadow-2xl group touch-none"
        style={{ touchAction: 'none', WebkitUserSelect: 'none', userSelect: 'none' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label="Controle de visualização de Antes e Depois do sorriso"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Layer 1: AFTER (Full Image Background) */}
        <img
          src={afterImage}
          alt={altAfter}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          draggable={false}
        />

        {/* Layer 2: BEFORE (Clipped dynamically based on slider position) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none select-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={altBefore}
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            draggable={false}
          />
        </div>

        {/* Center Vertical Divider Line & Glowing Handle */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Neon Divider Line */}
          <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-gradient-to-b from-transparent via-[#DFCAAB] via-[#C5A880] to-transparent shadow-[0_0_12px_rgba(197,168,128,0.8),0_0_24px_rgba(197,168,128,0.6)]" />

          {/* Central Square/Diamond Glowing Handle */}
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-[#0E0E12] border-2 border-[#C5A880] text-[#DFCAAB] flex items-center justify-center shadow-[0_0_20px_rgba(197,168,128,0.6),0_0_35px_rgba(197,168,128,0.3)] backdrop-blur-lg transform transition-transform group-hover:scale-110 group-active:scale-95">
            <ChevronsLeftRight className="w-4 h-4 text-[#DFCAAB]" />
          </div>
        </div>
      </div>

      {/* Case Details Caption */}
      {(title || category) && (
        <div className="flex items-center justify-between gap-4 pt-1">
          <div>
            {category && (
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] block mb-0.5">
                {category}
              </span>
            )}
            {title && (
              <h4 className="font-serif text-sm sm:text-base md:text-lg text-[#F3F0EA] font-normal leading-snug">
                {title}
              </h4>
            )}
          </div>
          <span className="text-[11px] sm:text-xs text-[#7E7E88] whitespace-nowrap self-center font-sans tracking-wide">
            ← Arraste para comparar →
          </span>
        </div>
      )}
    </div>
  );
};
