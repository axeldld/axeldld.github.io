// src/BurgerMenu.js
import React, { useState, useRef, useEffect } from 'react';
import './BurgerMenu.css';
import getNavLinks from './navLinks';
import { useSectionNavigation } from './hooks/useSectionNavigation';
import { useLanguage } from './LanguageContext';
import LanguageToggle from './LanguageToggle';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigateToSection = useSectionNavigation();
  const { content } = useLanguage();
  const navLinks = getNavLinks(content.nav);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (event, section) => {
    event.preventDefault();
    navigateToSection(section);
    setIsOpen(false);
  };

  return (
    <div className="burger-menu" ref={menuRef}>
      <button type="button" className="menu-icon" onClick={toggleMenu} aria-label="Open menu">
        ☰
      </button>
      {isOpen && (
        <nav className="menu-dropdown">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.section}`}
              onClick={(event) => handleLinkClick(event, link.section)}
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle variant="compact" />
        </nav>
      )}
    </div>
  );
}

export default BurgerMenu;
