import { Link } from "react-router";
import ForkSquiggle from "../../assets/pattern-fork.svg";
import KnifeSquiggle from "../../assets/pattern-knife.svg";
import "./BrowseRecipes.css";

const BrowseRecipes = () => {
  return (
    <section className="action-section">
      <h2>Ready to cook smarter?</h2>
      <p>
        Hit the button, pick a recipe, and get dinner on the table&#8212;fast.
      </p>
      <Link to="/recipes" className="action-button">
        Browse recipes
      </Link>
      <img className="fork-icon" src={ForkSquiggle} alt="Icon of a fork" />
      <img className="knife-icon" src={KnifeSquiggle} alt="Icon of a knife" />
    </section>
  );
};

export default BrowseRecipes;
