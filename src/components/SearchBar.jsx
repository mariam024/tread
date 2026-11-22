/** Controlled search input. Filters the visible mock products only. */
export default function SearchBar({ value, onChange, id = "search" }) {
  return (
    <label className="search" htmlFor={id}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
      <input id={id} type="search" placeholder="Search shoes" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
