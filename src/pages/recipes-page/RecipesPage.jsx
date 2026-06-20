import "./RecipePage.css";
import Search from "../../assets/icon-search.svg";
import Servings from "../../assets/icon-servings.svg";
import PrepTime from "../../assets/icon-prep-time.svg";
import CookTime from "../../assets/icon-cook-time.svg";
import ChickpeaSalad from "/mediterranean-chickpea-salad-small.webp";

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
      <section>
        <div>
          <div>
            <select name="prep-time" id="prep-time-select">
              <option value="">Max Prep Time</option>
              <option value="0">0 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
            </select>
            <select name="cook-time" id="cook-time-select">
              <option value="">Max Cook Time</option>
              <option value="0">0 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="10">15 minutes</option>
              <option value="10">20 minutes</option>
            </select>
          </div>
          <div>
            <img src={Search} alt="A magnifying glass" />
            <input
              type="search"
              placeholder="Search by name or ingredient..."
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={ChickpeaSalad} alt="Mediterranean chickpea salad." />
              <div>
                <h2>Mediterranean Chickpea Salad</h2>
                <p>
                  A refreshing, protein-packed salad tossed in a lemon-olive oil
                  dressing.
                </p>
                <div>
                  <span>
                    <img src={Servings} alt="Icon of a person." /> Serving: 2
                  </span>
                  <span>
                    <img src={PrepTime} alt="Icon of a clock." />
                    Prep: 10 mins
                  </span>
                  <span>
                    <img src={CookTime} alt="Icon of a platter." />
                    Cook: 0 min
                  </span>
                </div>
              </div>
            </div>
            <a href="#">View Recipe</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipesPage;
