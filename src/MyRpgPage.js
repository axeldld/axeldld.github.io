import { Link } from 'react-router-dom';
import './ProjectPage.css';
import './MyRpgPage.css';
import rpgmap from './Asset/map1.png';
import menuimage from './Asset/back3.png';
import { useLanguage } from './LanguageContext';

function MyRpg() {
  const { content } = useLanguage();

  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="project-hero__copy">
          <p className="project-kicker">{content.pages.common.kicker}</p>
          <h1>{content.pages.myRpg.title}</h1>
          <p className="project-lede">{content.pages.myRpg.lede}</p>
          <div className="project-tags">
            {content.pages.myRpg.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="project-back" to="/">
            {content.pages.myRpg.return}
          </Link>
        </div>
        <div className="project-hero__media">
          <div className="scroll-container">
            <img src={rpgmap} alt={content.pages.myRpg.media.heroAlt} className="scrollable-image" />
          </div>
        </div>
      </section>

      <section className="project-sections">
        {content.pages.myRpg.sections.map((section) => (
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
          <img src={menuimage} alt={content.pages.myRpg.media.secondaryAlt} />
        </div>
      </section>
    </div>
  );
}

export default MyRpg;
