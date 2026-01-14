import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Header from './Header';
import BurgerMenu from './BurgerMenu';
import './App.css';
import CorewarPage from './CorewarPage';
import MyRpgPage from './MyRpgPage';
import OrganizedPage from './OrganizedPage';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ThemeToggle from './ThemeToggle';
import { LanguageProvider, useLanguage } from './LanguageContext';

import corewarImage from './Asset/corewar2.png';
import myRpgImage from './Asset/my_rpg.png';
import organizedImage from './Asset/organized.png';
import cvPdf from './Asset/cv.pdf';

const projectImages = {
  corewar: corewarImage,
  my_rpg: myRpgImage,
  organized: organizedImage,
};

const primarySkills = [
  { label: 'C', icon: 'c' },
  { label: 'C++', icon: 'cpp' },
  { label: 'React', icon: 'react' },
  { label: 'Python', icon: 'python' },
  { label: 'ASM', icon: 'asm' },
  { label: 'Bash', icon: 'bash' },
  { label: 'Haskell', icon: 'haskell' },
];

const HERO_TITLE = 'Axel Deliaud';

const SkillIcon = ({ type }) => {
  const iconProps = {
    width: 42,
    height: 42,
    viewBox: '0 0 48 48',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  };

  switch (type) {
    case 'c':
      return (
        <svg {...iconProps}>
          <circle cx="24" cy="24" r="24" fill="#1f6feb" />
          <text
            x="24"
            y="30"
            fontSize="20"
            fontWeight="700"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Space Grotesk, sans-serif"
          >
            C
          </text>
        </svg>
      );
    case 'cpp':
      return (
        <svg {...iconProps}>
          <circle cx="24" cy="24" r="24" fill="#0b5ab0" />
          <text
            x="24"
            y="29"
            fontSize="14"
            fontWeight="700"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Space Grotesk, sans-serif"
          >
            C++
          </text>
        </svg>
      );
    case 'react':
      return (
        <svg {...iconProps}>
          <circle cx="24" cy="24" r="24" fill="#0b1220" />
          <g stroke="#5ed3f3" strokeWidth="2.2" fill="none">
            <ellipse rx="10" ry="22" cx="24" cy="24" transform="rotate(60 24 24)" />
            <ellipse rx="10" ry="22" cx="24" cy="24" transform="rotate(-60 24 24)" />
            <ellipse rx="10" ry="22" cx="24" cy="24" />
          </g>
          <circle cx="24" cy="24" r="4" fill="#5ed3f3" />
        </svg>
      );
    case 'python':
      return (
        <svg {...iconProps}>
          <defs>
            <linearGradient id="pyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3772a6" />
              <stop offset="100%" stopColor="#ffd43b" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="24" fill="url(#pyGradient)" />
          <text
            x="24"
            y="30"
            fontSize="16"
            fontWeight="700"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Space Grotesk, sans-serif"
          >
            Py
          </text>
        </svg>
      );
    case 'asm':
      return (
        <svg {...iconProps}>
          <rect width="48" height="48" rx="12" fill="#161b33" />
          <path d="M10 30h28v4H10zM10 22h18v4H10zM10 14h12v4H10z" fill="#7c83ff" />
        </svg>
      );
    case 'bash':
      return (
        <svg {...iconProps}>
          <rect width="48" height="48" rx="12" fill="#0f172a" />
          <rect x="10" y="13" width="28" height="22" rx="6" fill="#1f2937" stroke="#38bdf8" />
          <path d="M16 24l4-5v10l4-5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'haskell':
      return (
        <svg {...iconProps}>
          <rect width="48" height="48" rx="12" fill="#2d0f44" />
          <path
            d="M11 33l6.5-9.5L11 14h5.5l6.5 9.5L16.5 33H11zm11 0l6.5-9.5L22 14h5.5L34 23.5 27.5 33H22zm7.5-7h7.5v4h-10l2.5-4zm4-6h3.5v4h-6l2.5-4z"
            fill="#c084fc"
          />
        </svg>
      );
    default:
      return null;
  }
};

function App() {
  return (
    <ParallaxProvider>
      <LanguageProvider>
        <Router>
          <div className="App">
            <ThemeToggle />
            <Header />
            <BurgerMenu />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/corewar" element={<CorewarPage />} />
              <Route path="/my_rpg" element={<MyRpgPage />} />
              <Route path="/organized" element={<OrganizedPage />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ParallaxProvider>
  );
}

function HomePage() {
  const { content } = useLanguage();
  const highlightedProjects = useMemo(
    () =>
      content.projects.cards.map((project) => ({
        ...project,
        image: projectImages[project.slug],
      })),
    [content.projects.cards]
  );
  const [activeProject, setActiveProject] = useState(highlightedProjects[0].slug);
  const [heroTitle, setHeroTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setHeroTitle(HERO_TITLE);
      return;
    }

    let frame = 0;
    const interval = setInterval(() => {
      frame += 1;
      setHeroTitle(HERO_TITLE.slice(0, frame));

      if (frame >= HERO_TITLE.length) {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [location]);

  useEffect(() => {
    setActiveProject(highlightedProjects[0].slug);
  }, [highlightedProjects]);

  return (
    <>
      <section id="home" className="section hero">
        <div className="hero-copy">
          <p className="section-kicker">{content.hero.kicker}</p>
          <h1 className="hero-title">
            <span className="text-ghost">{content.hero.greeting}</span>
            <span className="text-gradient">{heroTitle || HERO_TITLE}</span>
          </h1>
          <p className="hero-lede">{content.hero.lede}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              {content.hero.ctaExplore}
            </a>
            <a href={cvPdf} download="Axel-Deliaud-CV.pdf" className="btn btn-ghost">
              {content.hero.ctaDownload}
            </a>
          </div>
          <div className="hero-meta">
            {content.highlights.map((item) => (
              <span key={item.label}>
                {item.label}: <strong>{item.value}</strong>
              </span>
            ))}
          </div>
        </div>
        <div className="hero-panels">
          {highlightedProjects.map((project) => (
            <div key={project.slug} className="hero-panel">
              <p className="panel-label">{project.badge}</p>
              <p className="panel-title">{project.title}</p>
              <p className="panel-copy">{project.description}</p>
            </div>
          ))}
        </div>
        <Parallax speed={-18}>
          <div className="orb orb-one" />
        </Parallax>
        <Parallax speed={12}>
          <div className="orb orb-two" />
        </Parallax>
      </section>

      <section id="about" className="section about">
        <div className="panel about-panel">
          <p className="section-kicker">{content.about.kicker}</p>
          <h2>{content.about.title}</h2>
          <p>{content.about.body}</p>
        </div>
        <div className="panel stats">
          {content.stats.map((item) => (
            <div key={item.label}>
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section skills-section">
        <p className="section-kicker">{content.skills.kicker}</p>
        <h2>{content.skills.title}</h2>
        <div className="skills-grid">
          {primarySkills.map((skill) => (
            <div key={skill.label} className="skill-pill">
              <span className="skill-icon">
                <SkillIcon type={skill.icon} />
              </span>
              <span className="skill-label">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <p className="section-kicker">{content.projects.kicker}</p>
          <h2>{content.projects.title}</h2>
          <p>{content.projects.body}</p>
        </div>
        <div className="projects-grid">
          {highlightedProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/${project.slug}`}
              className={`project-card ${activeProject === project.slug ? 'active' : ''}`}
              onMouseEnter={() => setActiveProject(project.slug)}
            >
              <div
                className="project-art"
                style={{ backgroundImage: `url(${project.image})` }}
                aria-hidden="true"
              >
                <span className="project-badge">{project.badge}</span>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="project-link">{content.projects.link}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="panel contact-panel">
          <p className="section-kicker">{content.contact.kicker}</p>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.body}</p>
          <div className="contact-links">
            {content.contact.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Axel Deliaud — {content.footer}
        </p>
      </footer>
    </>
  );
}

export default App;
