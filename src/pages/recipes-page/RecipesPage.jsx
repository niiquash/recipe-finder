import "./RecipePage.css";
import Search from "../../assets/icon-search.svg";
import ChevronDown from "../../assets/icon-chevron-down.svg";
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
      <section className="recipes-section">
        <div className="yield-selections-and-search-bar">
          <div className="yield-selections">
            <div className="prep-time-container">
              <button className="prep-time-button">
                Max Prep Time{" "}
                <img src={ChevronDown} alt="Upside down carat symbol." />
              </button>
              <div className="prep-time-options-and-reset-button">
                <div className="prep-time-options">
                  <div className="prep-time-option">
                    <input type="radio" name="prep-time" id="0-minutes" />
                    <label htmlFor="0-minutes">0 minutes</label>
                  </div>
                  <div className="prep-time-option">
                    <input type="radio" name="prep-time" id="5-minutes" />
                    <label htmlFor="5-minutes">5 minutes</label>
                  </div>
                  <div className="prep-time-option">
                    <input type="radio" name="prep-time" id="10-minutes" />
                    <label htmlFor="10-minutes">10 minutes</label>
                  </div>
                </div>
                <button className="prep-time-reset-button" type="reset">
                  Clear
                </button>
              </div>
            </div>
            <div className="cook-time-container">
              <button className="cook-time-button">
                Max Cook Time{" "}
                <img src={ChevronDown} alt="Upside down carat symbol." />
              </button>
              <div className="cook-time-options-and-reset-button">
                <div className="cook-time-options">
                  <div className="cook-time-option">
                    <input type="radio" name="cook-time" id="0-minutes" />
                    <label htmlFor="0-minutes">0 minutes</label>
                  </div>
                  <div className="cook-time-option">
                    <input type="radio" name="cook-time" id="5-minutes" />
                    <label htmlFor="5-minutes">5 minutes</label>
                  </div>
                  <div className="cook-time-option">
                    <input type="radio" name="cook-time" id="10-minutes" />
                    <label htmlFor="10-minutes">10 minutes</label>
                  </div>
                  <div className="cook-time-option">
                    <input type="radio" name="cook-time" id="15-minutes" />
                    <label htmlFor="15-minutes">15 minutes</label>
                  </div>
                  <div className="cook-time-option">
                    <input type="radio" name="cook-time" id="20-minutes" />
                    <label htmlFor="20-minutes">20 minutes</label>
                  </div>
                </div>
                <button className="cook-time-reset-button" type="reset">
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div className="search-bar">
            <img src={Search} alt="A magnifying glass icon" />
            <input
              type="search"
              placeholder="Search by name or ingredient..."
              className="search-bar-input"
            />
          </div>
        </div>
        <div className="recipes-container">
          <RecipeCard />
          <RecipeCard />
        </div>
      </section>
    </div>
  );
};

export default RecipesPage;
