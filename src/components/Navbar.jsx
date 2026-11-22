import { useState } from "react";
import SearchBar from "./SearchBar.jsx";

const links = [
  ["Shop", "#shop"],
  ["Story", "#story"],
  ["Visit", "#footer"],
];

export default function Navbar({ query, onQuery }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="logo" aria-label="Tread home">tread<i /></a>
      <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <SearchBar value={query} onChange={onQuery} id="nav-search" />
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
    </header>
  );
}
