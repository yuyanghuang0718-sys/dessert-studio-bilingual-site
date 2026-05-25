import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';

function HomePage({ content }) {
  return (
    <>
      <Hero content={content} />
      <section className="content-section home-intro-section">
        <div className="section-inner home-intro">
          <p className="eyebrow">{content.homeIntro.eyebrow}</p>
          <h2>{content.homeIntro.title}</h2>
          <p className="section-body">{content.homeIntro.body}</p>
          <Link to="/about">{content.homeIntro.link}</Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
