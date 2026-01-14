// CorewarPage.js
import { Link } from 'react-router-dom';
import './ProjectPage.css';
import { useLanguage } from './LanguageContext';

import corewareImage from './Asset/corewarArena.png';
import corewareImage2 from './Asset/ares300.png';

function CorewarPage() {
  const { content } = useLanguage();

  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="project-hero__copy">
          <p className="project-kicker">{content.pages.common.kicker}</p>
          <h1>{content.pages.corewar.title}</h1>
          <p className="project-lede">{content.pages.corewar.lede}</p>
          <div className="project-tags">
            {content.pages.corewar.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="project-back" to="/">
            {content.pages.corewar.return}
          </Link>
        </div>
        <div className="project-hero__media">
          <img src={corewareImage} alt={content.pages.corewar.media.heroAlt} />
        </div>
      </section>

      <section className="project-sections">
        {content.pages.corewar.sections.map((section) => (
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
          <img src={corewareImage2} alt={content.pages.corewar.media.secondaryAlt} />
        </div>
      </section>
    </div>
  );
}

export default CorewarPage;
