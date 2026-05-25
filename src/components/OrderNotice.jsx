function OrderNotice({ content }) {
  return (
    <section className="content-section order-section" id="order">
      <div className="section-inner two-column">
        <div>
          <p className="eyebrow">{content.order.eyebrow}</p>
          <h2>{content.order.title}</h2>
          <p className="section-body">{content.order.body}</p>
        </div>
        <ol className="notice-list">
          {content.order.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default OrderNotice;
