"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => void;
    };
    vlibrasInitialized?: boolean;
  }
}

export default function VLibras() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const initVLibras = () => {
      if (typeof window !== "undefined" && window.VLibras && !window.vlibrasInitialized) {
        try {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
          window.vlibrasInitialized = true;
        } catch (error) {
          console.error("Erro ao inicializar VLibras:", error);
        }
      }
    };

    if (scriptLoaded) {
      initVLibras();
    }
  }, [scriptLoaded]);

  return (
    <>
      <div {...{ vw: "true" }} className="enabled">
        <div {...{ "vw-access-button": "true" }} className="active"></div>
        <div {...{ "vw-plugin-wrapper": "true" }}>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>

      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
    </>
  );
}