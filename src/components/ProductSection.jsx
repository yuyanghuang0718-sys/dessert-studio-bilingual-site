import { products } from '../data/products.js';

function formatPrice(price, language) {
  if (language !== 'en') {
    return price;
  }

  return price.replace('／個', ' / each').replace('／盒', ' / box');
}

function ProductSection({ content, language }) {
  const secondaryLanguage = language === 'zh' ? 'en' : 'zh';

  return (
    <section className="content-section product-section" id="products">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">{content.products.eyebrow}</p>
          <h2>{content.products.title}</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img
                className={`product-image product-image-${product.id}`}
                src={product.image}
                alt={product.name[language]}
              />
              <div className="product-card-body">
                <h3>{product.name[language]}</h3>
                <p className="product-secondary-name">{product.name[secondaryLanguage]}</p>
                <dl className="product-meta">
                  <div>
                    <dt>{content.products.priceLabel}</dt>
                    <dd>{formatPrice(product.price, language)}</dd>
                  </div>
                  <div>
                    <dt>{content.products.storageLabel}</dt>
                    <dd>{product.storage[language]}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
