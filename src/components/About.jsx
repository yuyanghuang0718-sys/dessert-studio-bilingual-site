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
        </div>
      </div>

      <div className="section-inner chef-timeline-section">
        <div className="timeline-heading">
          <p className="eyebrow">{content.chef.timelineEyebrow}</p>
          <h2>{content.chef.timelineTitle}</h2>
        </div>
        <div className="chef-timeline">
          {content.chef.timeline.map((item) => (
            <article className="timeline-item" key={`${item.year}-${item.title}`}>
              <time>{item.year}</time>
              <span aria-hidden="true" />
              <p>{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
