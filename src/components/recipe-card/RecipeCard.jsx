import "./RecipeCard.css";
import Servings from "../../assets/icon-servings.svg";
import PrepTime from "../../assets/icon-prep-time.svg";
import CookTime from "../../assets/icon-cook-time.svg";
import { Link } from "react-router";

const RecipeCard = ({ ...recipedata }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image-details-and-button">
        <div className="recipe-image-and-details">
          <picture>
            <source
              srcSet={recipedata.image.large}
              media="(min-width: 768px)"
            />
            <img
              className="recipe-image"
              src={recipedata.image.small}
              alt={recipedata.slug}
            />
          </picture>

          <div className="recipe-details">
            <h2>{recipedata.title}</h2>
            <p>{recipedata.overview}</p>
            <div className="recipe-yield">
              <div className="recipe-yield-item">
                <img src={Servings} alt="Icon of a person." />
                <span>Serving: {recipedata.servings}</span>
              </div>
              <div className="recipe-yield-item">
                <img src={PrepTime} alt="Icon of a clock." />
                <span>Prep: {recipedata.prepMinutes} mins</span>
              </div>
              <div className="recipe-yield-item">
                <img src={CookTime} alt="Icon of a platter." />
                <span>Cook: {recipedata.cookMinutes} min</span>
              </div>
            </div>
          </div>
        </div>
        <Link className="recipe-button" to={`/recipes/${recipedata.slug}`}>
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
