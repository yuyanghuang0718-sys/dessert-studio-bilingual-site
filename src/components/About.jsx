import chefPhoto from '../assets/chef-photo.jpg';
import brandImage from '../assets/hero-dessert.svg';

function About({ content }) {
  return (
    <section className="content-section about-section" id="about">
      <div className="section-inner brand-introduction">
        <div className="brand-introduction-copy">
          <p className="eyebrow">{content.about.eyebrow}</p>
          <h2>{content.about.title}</h2>
          <div className="brand-divider" aria-hidden="true">
            <span />
            <i>✤</i>
            <span />
          </div>
          <div className="brand-paragraphs">
            {content.about.paragraphs.map((paragraph) => (
              <p className="section-body" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="brand-introduction-image">
          <img src={brandImage} alt={content.about.imageAlt} />
        </div>
      </div>
      <div className="section-inner chef-profile">
        <div className="chef-photo-frame">
          <img src={chefPhoto} alt={content.chef.photoAlt} />
        </div>
        <div className="chef-copy">
          <p className="eyebrow">{content.chef.eyebrow}</p>
          <h2>{content.chef.title}</h2>
          <p className="section-body">{content.chef.body}</p>
          <blockquote>{content.chef.philosophy}</blockquote>
          <div className="chef-credentials">
            {content.chef.credentials.map((item) => (
              <article key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
