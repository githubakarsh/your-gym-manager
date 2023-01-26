export const Card = ({
    cardTitle,
    children,
    cardFooter,
    size
}) => {
    const sizeSelector = (size) => ({
        'sm' : "card-main-container__sm",
        'md' : "card-main-container__md",
        'lg' : "card-main-container__lg",
    })[size];
  return (
    <article className={`card-main-container ${size && sizeSelector(size)}`}>
      {cardTitle && <section className="card-title-container">
        <div className="card-title">{cardTitle}</div>
      </section >}
      {children && <section className="card-body-container">
        <div className="card-body">{children}</div>
      </section>}
      {cardFooter && <section className="card-footer-container">
        <div className="card-footer">{cardFooter}</div>
      </section>}
    </article>
  );
};
