import ProductCard from "./ProductCard.jsx";
import useInView from "../hooks/useInView.js";

export default function ProductGrid({ items }) {
  const [ref, inView] = useInView(0.08);
  if (!items.length) return <p className="empty">Nothing matches that search. Try another name or switch category.</p>;
  return (
    <div className="grid" ref={ref}>
      {items.map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} visible={inView} />
      ))}
    </div>
  );
}
