import "./HomePage.css";
import HomeHeroImage from "/images/image-home-hero-small.webp";
import SectionImage from "/images/image-home-real-life-small.webp";
import HeroSquiggle from "../../assets/pattern-squiggle-1.svg";
import NoFuss from "../../assets/icon-minimum-fuss.svg";
import WholeFoods from "../../assets/icon-whole-food-recipes.svg";
import Search from "../../assets/icon-search-in-seconds.svg";

import { Link } from "react-router";
import BrowseRecipes from "../../components/browse-recipes/BrowseRecipes";
const HomePage = () => {
  return (
    <main className="home-page-container">
      <section className="hero-section">
        <div className="hero-section-intro">
          <h1 className="intro-heading">Healthy meals. zero fuss</h1>
          <p className="intro-paragraph">
            Discover eight quick whole-food recipes that you can cook tonight
            <span className="hero-text-wrap">
              &#8212;no processed junk, no guesswork.
            </span>
          </p>
          <Link to="/recipes" className="hero-button">
            Start exploring
          </Link>
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
      <section className="benefits-section">
        <div className="benefits-heading">
          <h2>What you&apos;ll get</h2>
        </div>
        <div className="benefits-content">
          <article className="benefits-details">
            <div className="benefits-image-container">
              <img src={WholeFoods} alt="An icon of a carrot." />
            </div>
            <h3>Whole-food recipes</h3>
            <p>Each dish uses everyday, unprocessed ingredients.</p>
          </article>
          <article className="benefits-details">
            <div className="benefits-image-container">
              <img src={NoFuss} alt="An icon of a peg." />
            </div>
            <h3>Minimum fuss</h3>
            <p>
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </article>
          <article className="benefits-details">
            <div className="benefits-image-container">
              <img src={Search} alt="An icon of a magnifying glass." />
            </div>
            <h3>Search in seconds</h3>
            <p>
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </article>
        </div>
      </section>
      <section className="support-section">
        <article className="support-section-content">
          <h2>Built for real life</h2>
          <p className="support-paragraph-1">
            Cooking shouldn&apos;t be complicated. These recipes come in under
            <b> 30 minutes</b> of active time, fit busy schedules, and taste
            good enough to repeat.
          </p>
          <p className="support-paragraph-2">
            Whether you&apos;re new to the kitchen or just need fresh ideas,
            we&apos;ve got you covered.
          </p>
        </article>
        <img
          className="support-section-image"
          src={SectionImage}
          alt="A person chopping veggies."
        />
      </section>
      <BrowseRecipes />
    </main>
  );
};

export default HomePage;
