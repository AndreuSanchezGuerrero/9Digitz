import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'ca';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Navbar
    'nav.services': 'Servicios',
    'nav.security': 'Seguridad',
    'nav.process': 'Proceso',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    
    // Language selector
    'lang.spanish': 'Español',
    'lang.catalan': 'Català',
    
    // Hero
    'hero.title.main': 'Servicios',
    'hero.title.highlight': 'digitales',
    'hero.title.suffix': 'avanzados',
    'hero.subtitle': 'Transformamos tu negocio con tecnología de vanguardia. Desde cloud computing hasta marketing digital, somos tu socio tecnológico integral.',
    'hero.button.primary': 'Comenzar proyecto',
    'hero.button.secondary': 'Ver servicios',
    'hero.footer': 'Profesionales altamente cualificados a tu servicio',
    
    // WhatsApp Button
    'whatsapp.message': 'Hola! Me interesa conocer más sobre los servicios de 9DIGITZ. ¿Podrían ayudarme?',
    'whatsapp.button': '¿Cómo podemos ayudarte?',
    'whatsapp.tooltip': 'Chatea con nosotros',
    'whatsapp.greeting': '¡Hola! 👋 ¿En qué podemos ayudarte hoy?',
    
    // Services Section
    'services.title.main': 'Nuestros',
    'services.title.highlight': 'servicios',
    'services.subtitle': 'Soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital.',
    'services.cta': 'Solicitar consulta gratuita',
    
    // Individual Services
    'services.apps.name': 'DESARROLLO DE APPs Y WEBS',
    'services.apps.description': 'Desarrollo a medida',
    'services.marketing.name': 'MARKETING DIGITAL',
    'services.marketing.description': 'Estrategias online',
    'services.cloud.name': 'SERVIDORES CLOUD',
    'services.cloud.description': 'Infraestructura escalable y segura',
    'services.security.name': 'CIBERSEGURIDAD',
    'services.security.description': 'Protección integral',
    'services.voip.name': 'CENTRALITAS VOIP/SIP',
    'services.voip.description': 'Comunicaciones empresariales',
    'services.internet.name': 'OPERADOR DE INTERNET',
    'services.internet.description': 'Soluciones de conectividad',
    'services.digital.name': 'CARTELERÍA DIGITAL',
    'services.digital.description': 'Señalización inteligente',
    'services.interactive.name': 'PANTALLAS INTERACTIVAS',
    'services.interactive.description': 'Interfaces interactivas',
    'services.audiovisual.name': 'PRODUCCIÓN AUDIOVISUAL',
    'services.audiovisual.description': 'Contenido audiovisual',
    'services.microsoft.name': 'PARTNER MICROSOFT 365',
    'services.microsoft.description': 'Transformación completa',
  },
  ca: {
    // Navbar
    'nav.services': 'Serveis',
    'nav.security': 'Seguretat',
    'nav.process': 'Procés',
    'nav.team': 'Equip',
    'nav.contact': 'Contacte',
    
    // Language selector
    'lang.spanish': 'Español',
    'lang.catalan': 'Català',
    
    // Hero
    'hero.title.main': 'Serveis',
    'hero.title.highlight': 'digitals',
    'hero.title.suffix': 'avançats',
    'hero.subtitle': 'Transformem el teu negoci amb tecnologia d\'avantguarda. Des de cloud computing fins a màrqueting digital, som el teu soci tecnològic integral.',
    'hero.button.primary': 'Començar projecte',
    'hero.button.secondary': 'Veure serveis',
    'hero.footer': 'Professionals altament qualificats al teu servei',
    
    // WhatsApp Button
    'whatsapp.message': 'Hola! M\'interessa conèixer més sobre els serveis de 9DIGITZ. Podríeu ajudar-me?',
    'whatsapp.button': 'Com podem ajudar-te?',
    'whatsapp.tooltip': 'Xateja amb nosaltres',
    'whatsapp.greeting': 'Hola! 👋 En què podem ajudar-te avui?',
    
    // Services Section
    'services.title.main': 'Els nostres',
    'services.title.highlight': 'serveis',
    'services.subtitle': 'Solucions tecnològiques integrals per impulsar el teu negoci cap al futur digital.',
    'services.cta': 'Sol·licitar consulta gratuïta',
    
    // Individual Services
    'services.apps.name': 'DESENVOLUPAMENT D\'APPs I WEBS',
    'services.apps.description': 'Desenvolupament a mida',
    'services.marketing.name': 'MÀRQUETING DIGITAL',
    'services.marketing.description': 'Estratègies online',
    'services.cloud.name': 'SERVIDORS CLOUD',
    'services.cloud.description': 'Infraestructura escalable i segura',
    'services.security.name': 'CIBERSEGURETAT',
    'services.security.description': 'Protecció integral',
    'services.voip.name': 'CENTRALETES VOIP/SIP',
    'services.voip.description': 'Comunicacions empresarials',
    'services.internet.name': 'OPERADOR D\'INTERNET',
    'services.internet.description': 'Solucions de connectivitat',
    'services.digital.name': 'CARTELLERIA DIGITAL',
    'services.digital.description': 'Senyalització intel·ligent',
    'services.interactive.name': 'PANTALLES INTERACTIVES',
    'services.interactive.description': 'Interfícies interactives',
    'services.audiovisual.name': 'PRODUCCIÓ AUDIOVISUAL',
    'services.audiovisual.description': 'Contingut audiovisual',
    'services.microsoft.name': 'PARTNER MICROSOFT 365',
    'services.microsoft.description': 'Transformació completa',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};