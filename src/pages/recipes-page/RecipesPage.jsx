import "./RecipePage.css";
// import Search from "../../assets/icon-search.svg";

import RecipeCard from "../../components/recipe-card/RecipeCard";

const RecipesPage = () => {
  return (
    <div className="recipe-page">
      <section className="recipe-page-heading">
        <h1>Explore our simple, healthy recipes</h1>
        <p>
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </section>
      <section className="recipes-container">
        <RecipeCard />
      </section>
    </div>
  );
};

export default RecipesPage;
