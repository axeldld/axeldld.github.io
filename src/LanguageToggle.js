import React from 'react';
import './LanguageToggle.css';
import { useLanguage } from './LanguageContext';

function LanguageToggle({ variant = 'default' }) {
  const { language, setLanguage } = useLanguage();
  const isCompact = variant === 'compact';

  return (
    <div
      className={`language-toggle${isCompact ? ' language-toggle--compact' : ''}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        className={language === 'en' ? 'is-active' : ''}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={language === 'fr' ? 'is-active' : ''}
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
      >
        FR
      </button>
    </div>
  );
}

export default LanguageToggle;
