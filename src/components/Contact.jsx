function Contact({ content }) {
  return (
    <section className="content-section contact-section" id="contact">
      <div className="section-inner contact-panel">
        <div>
          <p className="eyebrow">{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <p className="section-body">{content.contact.body}</p>
        </div>
        <div className="contact-details">
          {content.contact.details.map((detail) => (
            <p key={detail.label}>
              <span>{detail.label}</span>
              {detail.value}
            </p>
          ))}
          <a href="mailto:hello@lumiere-dessert.example">{content.contact.button}</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
