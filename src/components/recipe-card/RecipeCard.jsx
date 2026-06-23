import "./RecipeCard.css";
import Servings from "../../assets/icon-servings.svg";
import PrepTime from "../../assets/icon-prep-time.svg";
import CookTime from "../../assets/icon-cook-time.svg";
import ChickpeaSalad from "/mediterranean-chickpea-salad-small.webp";

const RecipeCard = () => {
  return (
    <div className="recipe-card">
      <div className="recipe-image-details-and-button">
        <div className="recipe-image-and-details">
          <img
            className="recipe-image"
            src={ChickpeaSalad}
            alt="Mediterranean chickpea salad."
          />
          <div className="recipe-details">
            <h2>Mediterranean Chickpea Salad</h2>
            <p>
              A refreshing, protein-packed salad tossed in a lemon-olive oil
              dressing.
            </p>
            <div className="recipe-yield">
              <div className="recipe-yield-item">
                <img src={Servings} alt="Icon of a person." />
                <span>Serving: 2</span>
              </div>
              <div className="recipe-yield-item">
                <img src={PrepTime} alt="Icon of a clock." />
                <span>Prep: 10 mins</span>
              </div>
              <div className="recipe-yield-item">
                <img src={CookTime} alt="Icon of a platter." />
                <span>Cook: 0 min</span>
              </div>
            </div>
          </div>
        </div>
        <a className="recipe-button" href="#">
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
