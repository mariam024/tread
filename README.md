# Tread: Footwear Home Page

Responsive retail home page built with **React 18 + Vite** for the Moh Technology frontend assessment.
Business niche: **Footwear Store**. UI/UX only: all data is static mock data.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure
```
src/
  components/   Navbar, Hero, SearchBar, CategoryFilter, ProductGrid, ProductCard, Story, Footer, Button, ShoeArt
  data/         products.js (10 mock products)
  hooks/        useInView.js (scroll reveal)
  styles/       global.css (design tokens + responsive rules)
```

## Design notes
- Palette: paper `#F2F3EF`, ink `#13161C`, cobalt `#2B44FF`, lime accent `#D6F25C`.
- Type: Bricolage Grotesque (display) + Hanken Grotesk (body).
- Products are drawn as recolourable SVG (`ShoeArt`), so there are no image requests and the page loads fast.
- Motion: one hero load sequence, subtle scroll reveals on the grid and story band, hover tilt on cards. `prefers-reduced-motion` is respected.
- Search and category chips filter the static list in the UI only. No cart, auth or API.
- Breakpoints: 1024 / 860 / 720 / 460 px.

## Deploy
Import the repo in Vercel or Netlify (build command `npm run build`, output `dist`).
