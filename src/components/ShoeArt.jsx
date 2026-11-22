/** Vector sneaker illustration, recoloured per product. Keeps the project image-free and fast. */
export default function ShoeArt({ body, accent, sole, className = "" }) {
  return (
    <svg className={className} viewBox="0 0 304 160" role="img" aria-label="Sneaker illustration">
      <ellipse cx="152" cy="146" rx="128" ry="7" fill="#13161C" opacity=".12" />
      <path d="M40 100 L50 44 Q54 30 70 32 L98 38 Q112 62 142 64 L182 68 Q244 78 276 102 Z" fill={body} />
      <path d="M214 74 Q252 84 276 102 L212 102 Z" fill={accent} opacity=".9" />
      <path d="M52 78 Q120 92 196 70" stroke={accent} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M118 52 l16 12 M134 56 l14 10 M150 60 l12 8" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      <path d="M10 118 Q10 100 38 100 L272 100 Q296 100 296 118 L296 126 Q296 140 280 140 L26 140 Q10 140 10 126 Z" fill={sole} />
      <path d="M22 122 H284" stroke={accent} strokeWidth="2" opacity=".35" />
    </svg>
  );
}
