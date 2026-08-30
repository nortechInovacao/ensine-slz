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
    // 1. Function to apply translation when Google Translate element is ready
    const applyTranslation = (langCode: string) => {
      const targetLang = langCode === 'pt-BR' ? 'pt' : langCode;
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (select) {
        if (select.value !== targetLang) {
          select.value = targetLang;
          select.dispatchEvent(new Event('change'));
        }
      }
    };

    // 2. Define global callback for script
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'pt',
            autoDisplay: false,
          },
          'google_translate_element'
        );

        // Apply selected language after initialization delay
        setTimeout(() => {
          const currentLang = document.documentElement.lang || 'pt-BR';
          applyTranslation(currentLang);
        }, 300);
      }
    };

    // 3. Inject script if not present
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      applyTranslation(language);
    }
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
