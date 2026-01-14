// src/Header.js
import React from 'react';
import './Header.css';
import getNavLinks from './navLinks';
import { useSectionNavigation } from './hooks/useSectionNavigation';
import { useLanguage } from './LanguageContext';
import LanguageToggle from './LanguageToggle';

function Header() {
  const navigateToSection = useSectionNavigation();
  const { content } = useLanguage();
  const navLinks = getNavLinks(content.nav);

  const handleClick = (event, section) => {
    event.preventDefault();
    navigateToSection(section);
  };

  return (
    <header className="header">
      <a href="#home" className="brand" onClick={(event) => handleClick(event, 'home')}>
        <span>Axel</span>
        <span className="brand-dot" />
        <span>Deliaud</span>
      </a>
      <div className="header-actions">
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.section}`}
              onClick={(event) => handleClick(event, link.section)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}

export default Header;
