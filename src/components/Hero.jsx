import Button from "./Button.jsx";
import ShoeArt from "./ShoeArt.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <h1>
          <span>Shoes for</span> <span>the miles</span> <span>nobody counts.</span>
        </h1>
        <p>Light, durable pairs for the commute, the long walk and the sudden 5K. Designed in small runs, priced like we mean it.</p>
        <div className="hero__cta">
          <a href="#shop"><Button>Shop the range</Button></a>
          <a href="#story"><Button variant="ghost">Our story</Button></a>
        </div>
      </div>
      <div className="hero__stage" aria-hidden="true">
        <ShoeArt body="#F2F3EF" accent="#D6F25C" sole="#13161C" className="hero__shoe" />
        <span className="hero__tag">Aero Run 02<b>$128</b></span>
      </div>
    </section>
  );
}
