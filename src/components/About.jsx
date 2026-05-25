function About({ content }) {
  return (
    <section className="content-section about-section" id="about">
      <div className="section-inner two-column">
        <div>
          <p className="eyebrow">{content.about.eyebrow}</p>
          <h2>{content.about.title}</h2>
        </div>
        <div>
          <p className="section-body">{content.about.body}</p>
          <ul className="highlight-list">
            {content.about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
