'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
  }
}

export function VlibrasWidget() {
  useEffect(() => {
    const scriptId = 'vlibras-widget-script';
    const initKey = 'vlibras-widget-initialized';

    const initializeWidget = () => {
      const VLibras = window.VLibras;
      if (!VLibras?.Widget) {
        return;
      }

      const globalState = window as typeof window & { [key: string]: unknown };
      if (!globalState[initKey]) {
        globalState[initKey] = true;
        new VLibras.Widget('https://vlibras.gov.br/app');
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://vlibras.gov.br/app/script.js';
      script.async = true;
      script.onload = initializeWidget;
      document.body.appendChild(script);
      return;
    }

    initializeWidget();
  }, []);

  return null;
}
