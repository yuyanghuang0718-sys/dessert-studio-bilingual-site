import heroImage from '../assets/hero-dessert.svg';

function Hero({ content }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-frame">
        <img src={heroImage} alt="" className="hero-image" />
        <div className="hero-copy">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.body}</p>
          <div className="hero-actions">
            <a href="#products">{content.hero.cta}</a>
            <a href="#order">{content.hero.secondaryCta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
