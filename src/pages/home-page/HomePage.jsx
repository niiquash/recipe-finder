import "./HomePage.css";
import HomeHeroImage from "/image-home-hero-small.webp";
import HeroSquiggle from "../../assets/pattern-squiggle-1.svg";
const HomePage = () => {
  return (
    <main className="home-page-container">
      <section className="hero-section">
        <div className="hero-section-intro">
          <h1 className="intro-heading">Healthy meals. zero fuss</h1>
          <p className="intro-paragraph">
            Discover eight quick whole-food recipes that you can cook
            tonight&#8212;no processed junk, no guesswork.
          </p>
          <button className="hero-button">Start exploring</button>
        </div>
        <div className="hero-image-container">
          <img
            className="hero-image"
            src={HomeHeroImage}
            alt="A woman cooking in the kitchen."
          />
          <img
            className="hero-squiggle"
            src={HeroSquiggle}
            alt="A blue squiggly line."
          />
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
};

export default HomePage;
