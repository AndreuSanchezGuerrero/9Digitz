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