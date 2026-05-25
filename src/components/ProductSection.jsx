import { products } from '../data/products.js';

function ProductSection({ content, language }) {
  return (
    <section className="content-section product-section" id="products">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">{content.products.eyebrow}</p>
          <h2>{content.products.title}</h2>
          <p>{content.products.body}</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name[language]} />
              <div className="product-card-body">
                <h3>{product.name[language]}</h3>
                <p>{product.description[language]}</p>
                <span>
                  {content.products.priceLabel} {product.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
