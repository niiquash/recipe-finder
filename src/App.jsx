import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import AboutPage from "./pages/about-page/AboutPage";
import RecipesPage from "./pages/recipes-page/RecipesPage";
import RecipesDetailsPage from "./pages/recipe-details-page/RecipeDetailsPage";
import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="recipes/:slug" element={<RecipesDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
