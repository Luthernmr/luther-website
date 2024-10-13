import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

const CalendlyWidget = () => {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Charger le script Calendly si ce n'est pas déjà présent
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script lors du démontage
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
    mt={20}
      className="calendly-inline-widget"
      ref={widgetRef}
      id='calendly'
      data-url="https://calendly.com/nemorluther-pro/60min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=616161&text_color=ffffff&primary_color=0db3d0"
      style={{ minWidth: '320px', height: '700px' }}
      borderRadius={"xl"}
    />
  );
};

export default CalendlyWidget;
