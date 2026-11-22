const cols = [
  ["Shop", ["Running", "Lifestyle", "Boots", "Sandals"]],
  ["Help", ["Shipping", "Returns", "Size guide", "Contact"]],
  ["Social", ["Instagram", "TikTok", "YouTube", "Pinterest"]],
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__brand">
        <span className="logo">tread<i /></span>
        <p>Everyday footwear, made to be worn out.</p>
      </div>
      {cols.map(([title, items]) => (
        <div key={title}>
          <h4>{title}</h4>
          <ul>{items.map((i) => <li key={i}><a href="#top">{i}</a></li>)}</ul>
        </div>
      ))}
      <small>&copy; {new Date().getFullYear()} Tread Footwear. Demo storefront for a frontend assessment.</small>
    </footer>
  );
}
