import React, { useEffect, useRef } from 'react';

// global.d.ts
declare global {
  interface Window {
    Calendly: any; // Vous pouvez spécifier un type plus précis si nécessaire
  }
}

export {};

const CalendlyWidget = () => {
  const calendlyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Charger le script de Calendly
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialiser le widget
    const initCalendly = () => {
      if (calendlyRef.current) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/nemorluther-pro',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    // Vérifier si Calendly est chargé
    script.onload = initCalendly;

    // Nettoyer le script au démontage du composant
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      ref={calendlyRef} 
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export default CalendlyWidget;
