'use client';

import React, { useEffect } from 'react';
import { useApp } from '@/context/AppContext';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            autoDisplay: boolean;
            layout?: number;
          },
          containerId: string
        ) => void;
      };
    };
  }
}

export const GoogleTranslate: React.FC = () => {
  const { language } = useApp();

  useEffect(() => {
    const applyTranslation = (langCode: string, attempts = 0) => {
      const targetLang = langCode === 'pt-BR' ? 'pt' : langCode;
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');

      if (select) {
        if (select.value !== targetLang) {
          select.value = targetLang;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
        return;
      }

      if (attempts < 30) {
        setTimeout(() => applyTranslation(langCode, attempts + 1), 100);
      }
    };

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ langCode?: string }>;
      const nextLang = customEvent.detail?.langCode ?? language;
      applyTranslation(nextLang, 0);
    };

    document.documentElement.lang = 'pt-BR';
    document.cookie = 'googtrans=/pt/pt; path=/;';
    document.cookie = `googtrans=/pt/pt; domain=${window.location.hostname}; path=/;`;

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'pt',
            autoDisplay: false,
          },
          'google_translate_element'
        );

        setTimeout(() => {
          const currentLang = document.documentElement.lang || 'pt-BR';
          applyTranslation(currentLang, 0);
          applyTranslation('pt-BR', 0);
        }, 150);
      }
    };

    window.addEventListener('ensine-slz:language-change', handleLanguageChange);

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    applyTranslation(language === 'pt-BR' ? 'pt-BR' : language, 0);
    applyTranslation('pt-BR', 0);

    return () => {
      window.removeEventListener('ensine-slz:language-change', handleLanguageChange);
    };
  }, [language]);

  return (
    <div
      id="google_translate_element"
      style={{
        position: 'fixed',
        left: '-9999px',
        top: '-9999px',
        width: '1px',
        height: '1px',
        opacity: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};
