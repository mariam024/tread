import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Story from "./components/Story.jsx";
import Footer from "./components/Footer.jsx";
import { products, categories } from "./data/products.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  // UI-only filtering over static data
  const visible = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          p.name.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [query, category]
  );

  return (
    <>
      <Navbar query={query} onQuery={setQuery} />
      <main>
        <Hero />
        <section className="shop" id="shop">
          <div className="shop__head">
            <h2>The current range</h2>
            <CategoryFilter categories={categories} active={category} onSelect={setCategory} />
          </div>
          <ProductGrid key={category + query} items={visible} />
        </section>
        <Story />
      </main>
      <Footer />
    </>
  );
}
