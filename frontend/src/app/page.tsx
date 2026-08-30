'use client';

import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { OQueVoceProcura } from '@/components/OQueVoceProcura';
import { UserJourney } from '@/components/UserJourney';
import { RecommendationsSection } from '@/components/RecommendationsSection';
import { ModoDDescoberta } from '@/components/ModoDDescoberta';
import { ModoAAprender } from '@/components/ModoAAprender';
import { ModoPProjetos } from '@/components/ModoPProjetos';
import { ModoOOportunidades } from '@/components/ModoOOportunidades';
import { ModoVVerificacao } from '@/components/ModoVVerificacao';
import { ModoSServicos } from '@/components/ModoSServicos';
import { SaoLuisMap } from '@/components/SaoLuisMap';
import { StudentDashboard } from '@/components/StudentDashboard';
import { StudentProfile } from '@/components/StudentProfile';
import { TeacherView } from '@/components/TeacherView';
import { AboutSection } from '@/components/AboutSection';
import { SearchModal } from '@/components/SearchModal';
import { AccessibilityModal } from '@/components/AccessibilityModal';
import { NotificationsDrawer } from '@/components/NotificationsDrawer';
import { AuthModal } from '@/components/AuthModal';
import { GoogleTranslate } from '@/components/GoogleTranslate';

export default function Home() {
  const { currentView, accessibility } = useApp();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('high-contrast', accessibility.highContrast);
    root.classList.toggle('reduce-motion', accessibility.reducedMotion);
    root.classList.toggle('senior-mode', accessibility.seniorMode);
    root.classList.remove('color-vision-protanopia', 'color-vision-deuteranopia', 'color-vision-tritanopia');
    if (accessibility.colorVisionMode !== 'normal') root.classList.add('color-vision-' + accessibility.colorVisionMode);
    root.style.setProperty('--font-scale', String(accessibility.seniorMode ? Math.max(accessibility.fontScale, 1.18) : accessibility.fontScale));
    root.style.setProperty('--letter-spacing', accessibility.letterSpacing === 'wide' ? '0.06em' : 'normal');
  }, [accessibility]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero />
            <OQueVoceProcura />
            <UserJourney />
            <RecommendationsSection />
          </>
        )}

        {currentView === 'descoberta' && <ModoDDescoberta />}
        {currentView === 'aprender' && <ModoAAprender />}
        {currentView === 'projetos' && <ModoPProjetos />}
        {currentView === 'oportunidades' && <ModoOOportunidades />}
        {currentView === 'verificacao' && <ModoVVerificacao />}
        {currentView === 'utilidades' && <ModoSServicos />}
        {currentView === 'mapa' && <SaoLuisMap />}
        {currentView === 'dashboard' && <StudentDashboard />}
        {currentView === 'perfil' && <StudentProfile />}
        {currentView === 'docente' && <TeacherView />}
        {currentView === 'sobre' && <AboutSection />}
      </main>

      <Footer />

      {/* Global Modals & Overlays */}
      <SearchModal />
      <AccessibilityModal />
      <NotificationsDrawer />
      <AuthModal />
      <GoogleTranslate />
    </div>
  );
}



