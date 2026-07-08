import "./RecipeDetailsPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const RecipeDetailsPage = () => {
  const { slug } = useParams();
  const [recipesData, setRecipesData] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    async function getRecipesData() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        const focusRecipe = result.find((recipe) => recipe.slug === slug);

        setRecipesData(result);
        setSelectedRecipe(focusRecipe);
      } catch (err) {
        console.error(err.message);
      }
    }

    getRecipesData();
  }, [slug]);

  if (!selectedRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details-page">
      <div>placholder</div>
      <div>placeholder</div>
    </div>
  );
};

export default RecipeDetailsPage;
