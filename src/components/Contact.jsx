import InstagramIcon from './InstagramIcon.jsx';

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
          {content.contact.details.map((detail) =>
            detail.label === 'Instagram' ? (
              <p key={detail.label}>
                <span>{detail.label}</span>
                <a
                  className="contact-instagram-icon"
                  href={content.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={content.instagram.label}
                >
                  <InstagramIcon />
                </a>
              </p>
            ) : (
              <p key={detail.label}>
                <span>{detail.label}</span>
                {detail.value}
              </p>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
