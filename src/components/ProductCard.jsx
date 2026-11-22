import ShoeArt from "./ShoeArt.jsx";

export default function ProductCard({ product, index, visible }) {
  const { name, category, price, tint, body, accent, sole } = product;
  return (
    <article className={`card ${visible ? "is-in" : ""}`} style={{ "--tint": tint, transitionDelay: `${(index % 4) * 60}ms` }}>
      <div className="card__media">
        <ShoeArt body={body} accent={accent} sole={sole} />
      </div>
      <div className="card__info">
        <div>
          <h3>{name}</h3>
          <p>{category}</p>
        </div>
        <strong>${price}</strong>
      </div>
    </article>
  );
}
