import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from './i18n';

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  const stored = window.localStorage.getItem('portfolio-language');
  if (stored === 'fr' || stored === 'en') {
    return stored;
  }
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const content = translations[language] || translations.en;
    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'en' ? 'fr' : 'en')),
      content,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
