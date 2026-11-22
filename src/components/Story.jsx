import useInView from "../hooks/useInView.js";

export default function Story() {
  const [ref, inView] = useInView();
  return (
    <section className={`story reveal ${inView ? "is-in" : ""}`} id="story" ref={ref}>
      <h2>Free returns for 30 days. Wear them on a real street first.</h2>
      <p>Every pair ships in recycled packaging, and every sole can be re-glued at any of our repair partners for free.</p>
    </section>
  );
}
