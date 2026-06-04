import chefPhoto from '../assets/chef-photo.png';
import brandVisual from '../assets/timmy-dessert-logo-cropped.png';

function Timeline({ content }) {
  return (
    <div className="chef-timeline-block">
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
  );
}

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
        <div className="brand-introduction-image brand-visual-card">
          <img src={brandVisual} alt={content.about.imageAlt} />
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
          <Timeline content={content} />
        </div>
      </div>
    </section>
  );
}

export default About;
