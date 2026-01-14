// CorewarPage.js
import { Link } from 'react-router-dom';
import './ProjectPage.css';
import { useLanguage } from './LanguageContext';

import organizedHero from './Asset/organized-hero.svg';
import organizedFlow from './Asset/organized-flow.svg';

function OrganizedPage() {
  const { content } = useLanguage();

  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="project-hero__copy">
          <p className="project-kicker">{content.pages.common.kicker}</p>
          <h1>{content.pages.organized.title}</h1>
          <p className="project-lede">{content.pages.organized.lede}</p>
          <div className="project-tags">
            {content.pages.organized.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="project-back" to="/">
            {content.pages.organized.return}
          </Link>
        </div>
        <div className="project-hero__media">
          <img src={organizedHero} alt={content.pages.organized.media.heroAlt} />
        </div>
      </section>

      <section className="project-sections">
        {content.pages.organized.sections.map((section) => (
          <article key={section.title} className="project-card">
            <h2>{section.title}</h2>
            {section.body.map((paragraph, index) => (
              <p key={`${section.title}-${index}`}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      <section className="project-gallery">
        <div className="project-gallery__item">
          <img src={organizedFlow} alt={content.pages.organized.media.secondaryAlt} />
        </div>
      </section>
    </div>
  );
}

export default OrganizedPage;
