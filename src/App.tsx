import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MobileFloatingCTA } from './components/common/MobileFloatingCTA';
import { AppointmentModal } from './components/common/AppointmentModal';

import { HomePage } from './pages/HomePage';
import { ResinVeneersPage } from './pages/ResinVeneersPage';
import { CasesPage } from './pages/CasesPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App: React.FC = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleOpenAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0B0B0C] text-[#F3F0EA] selection:bg-[#C5A880]/30 selection:text-white">
        {/* Persistent Luxury Header */}
        <Header onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* Dynamic Route Pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/lentes-em-resina" element={<ResinVeneersPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/casos" element={<CasesPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/sobre" element={<AboutPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/duvidas" element={<FAQPage onOpenAppointmentModal={handleOpenAppointmentModal} />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/termos" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Action Bar */}
        <MobileFloatingCTA onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* Global Appointment Request Modal */}
        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={handleCloseAppointmentModal}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
