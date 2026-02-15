
import React, { useEffect } from 'react';

// Calendly URL
const CALENDLY_URL = 'https://calendly.com/meeting-sprkcreative/30min';

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  className?: string;
  children: React.ReactNode;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({ className, children }) => {
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = () => {
    if (CALENDLY_URL === 'YOUR_CALENDLY_URL_HERE') {
      alert('Please configure your Calendly URL in components/CalendlyButton.tsx');
      return;
    }

    // Use Calendly popup widget if available
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL
      });
    } else {
      // Fallback: open in new tab if script hasn't loaded yet
      window.open(CALENDLY_URL, '_blank');
    }
  };

  return (
    <button onClick={openCalendly} className={className} type="button">
      {children}
    </button>
  );
};

export default CalendlyButton;

