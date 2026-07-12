import "./RecipeDetailsPage.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import Servings from "../../assets/icon-servings.svg";
import PrepTime from "../../assets/icon-prep-time.svg";
import CookTime from "../../assets/icon-cook-time.svg";
import BulletPoint from "../../assets/icon-bullet-point.svg";
import RecipeCard from "../../components/recipe-card/RecipeCard";

const RecipeDetailsPage = () => {
  const { slug } = useParams();
  const [recipesData, setRecipesData] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipesData() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        const focusRecipe = result.find((recipe) => recipe.slug === slug);

        if (!focusRecipe) {
          setError(`Recipe with slug "${slug}" not found.`);
          return;
        }

        const filteredRecipes = result.filter((recipe) => recipe.slug !== slug);
        for (let i = filteredRecipes.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [filteredRecipes[i], filteredRecipes[j]] = [
            filteredRecipes[j],
            filteredRecipes[i],
          ];
        }
        const randomRecipes = filteredRecipes.slice(0, 3);

        setRecipesData(result);
        setSelectedRecipe(focusRecipe);
        setRandomRecipes(randomRecipes);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      }
    }

    getRecipesData();
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details-page">
      <div className="recipes-nav-and-">
        <div className="recipes-nav">
          <Link to="/recipes" className="back-link">
            Recipes &#47;
          </Link>
          <span>{selectedRecipe.title}</span>
        </div>
        <div className="selected-recipe-container">
          <div className="selected-recipe-image-and-details">
            <picture>
              <source
                srcSet={selectedRecipe.image.large}
                media="(min-width: 768px)"
              />
              <img
                className="selected-recipe-image"
                src={selectedRecipe.image.small}
                alt={selectedRecipe.slug}
              />
            </picture>
            <section className="selected-recipe-details">
              <h1>{selectedRecipe.title}</h1>
              <p>{selectedRecipe.overview}</p>
              <div className="recipe-yield">
                <div className="recipe-yield-item">
                  <img src={Servings} alt="Icon of a person." />
                  <span>Serving: {selectedRecipe.servings}</span>
                </div>
                <div className="recipe-yield-item">
                  <img src={PrepTime} alt="Icon of a clock." />
                  <span>Prep: {selectedRecipe.prepMinutes} mins</span>
                </div>
                <div className="recipe-yield-item">
                  <img src={CookTime} alt="Icon of a platter." />
                  <span>Cook: {selectedRecipe.cookMinutes} min</span>
                </div>
              </div>
              <article className="selected-recipe-ingredients">
                <h2>Ingredients:</h2>
                <ul className="selected-recipe-ingredients-list">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <img
                        src={BulletPoint}
                        alt="right arrow"
                        className="ingredient-list-arrow"
                      />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="selected-recipe-instructions">
                <h2>Instructions:</h2>
                <ul className="selected-recipe-instructions-list">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index}>
                      <img
                        src={BulletPoint}
                        alt="right arrow"
                        className="ingredient-list-arrow"
                      />
                      {instruction}
                    </li>
                  ))}
                </ul>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div className="more-recipes-container">
        <h2>More recipes</h2>
        <div className="recipe-cards">
          {randomRecipes &&
            randomRecipes.map((recipeData) => (
              <RecipeCard key={recipeData.id} {...recipeData} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
