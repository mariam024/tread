export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="chips" role="tablist" aria-label="Filter by category">
      {categories.map((c) => (
        <button key={c} role="tab" aria-selected={active === c} className={`chip ${active === c ? "is-active" : ""}`} onClick={() => onSelect(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}
