import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../sections/HeroSection';
import { ResinVeneersSection } from '../sections/ResinVeneersSection';
import { CaseGallerySection } from '../sections/CaseGallerySection';
import { MethodologySection } from '../sections/MethodologySection';
import { AboutSection } from '../sections/AboutSection';
import { FAQSection } from '../sections/FAQSection';
import { FinalCTASection } from '../sections/FinalCTASection';

interface HomePageProps {
  onOpenAppointmentModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAppointmentModal }) => {
  return (
    <>
      <SEO
        title="Início"
        canonicalPath="/"
      />

      <main>
        <HeroSection onOpenAppointmentModal={onOpenAppointmentModal} />
        <ResinVeneersSection onOpenAppointmentModal={onOpenAppointmentModal} />
        <CaseGallerySection />
        <MethodologySection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection onOpenAppointmentModal={onOpenAppointmentModal} />
      </main>
    </>
  );
};
