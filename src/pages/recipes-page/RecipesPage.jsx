import "./RecipePage.css";
import Search from "../../assets/icon-search.svg";
import ChevronDown from "../../assets/icon-chevron-down.svg";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import { useEffect, useRef, useState } from "react";

const RecipesPage = () => {
  const [prepTimeToggled, setPrepTimeToggled] = useState(false);
  const [cookTimeToggled, setCookTimeToggled] = useState(false);
  const [maxPrepTime, setMaxPrepTime] = useState(0);
  const [maxCookTime, setMaxCookTime] = useState(0);
  const prepTimeMenuRef = useRef(null);
  const cookTimeMenuRef = useRef(null);

  console.log(maxPrepTime);
  console.log(maxCookTime);

  function handleMaxPrepClick(event) {
    event.stopPropagation();
    setPrepTimeToggled((prev) => !prev);
  }

  function handleMaxCookClick() {
    event.stopPropagation();
    setCookTimeToggled((prev) => !prev);
  }

  function handleMaxPrepSelect(event) {
    setMaxPrepTime(parseInt(event.target.value));
    setPrepTimeToggled(false);
  }

  function handleMaxCookSelect(event) {
    setMaxCookTime(parseInt(event.target.value));
    setCookTimeToggled(false);
  }

  function clearMaxPrepTime() {
    setMaxPrepTime(0);
    setPrepTimeToggled(false);
  }

  function clearMaxCookTime() {
    setMaxCookTime(0);
    setCookTimeToggled(false);
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (prepTimeToggled && !prepTimeMenuRef.current.contains(event.target)) {
        setPrepTimeToggled(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [prepTimeToggled]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (cookTimeToggled && !cookTimeMenuRef.current.contains(event.target)) {
        setCookTimeToggled(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [cookTimeToggled]);

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
              <button onClick={handleMaxPrepClick} className="prep-time-button">
                Max Prep Time{" "}
                <img src={ChevronDown} alt="Upside down carat symbol." />
              </button>
              <div
                ref={prepTimeMenuRef}
                className={`prep-time-options-and-reset-button ${prepTimeToggled ? "yield-menu" : ""}`}
              >
                <div className="prep-time-options">
                  <div className="prep-time-option">
                    <input
                      type="radio"
                      name="prep-time"
                      id="prep-0-minutes"
                      value={0}
                      checked={0 === maxPrepTime}
                      onChange={(e) => handleMaxPrepSelect(e)}
                    />
                    <label htmlFor="prep-0-minutes">0 minutes</label>
                  </div>
                  <div className="prep-time-option">
                    <input
                      type="radio"
                      name="prep-time"
                      id="prep-5-minutes"
                      value={5}
                      checked={5 === maxPrepTime}
                      onChange={(e) => handleMaxPrepSelect(e)}
                    />
                    <label htmlFor="prep-5-minutes">5 minutes</label>
                  </div>
                  <div className="prep-time-option">
                    <input
                      type="radio"
                      name="prep-time"
                      id="prep-10-minutes"
                      value={10}
                      checked={10 === maxPrepTime}
                      onChange={(e) => handleMaxPrepSelect(e)}
                    />
                    <label htmlFor="prep-10-minutes">10 minutes</label>
                  </div>
                </div>
                <button
                  className="prep-time-reset-button"
                  onClick={clearMaxPrepTime}
                >
                  Clear
                </button>
              </div>
            </div>
            <div className="cook-time-container">
              <button onClick={handleMaxCookClick} className="cook-time-button">
                Max Cook Time{" "}
                <img src={ChevronDown} alt="Upside down carat symbol." />
              </button>
              <div
                ref={cookTimeMenuRef}
                className={`cook-time-options-and-reset-button ${cookTimeToggled ? "yield-menu" : ""}`}
              >
                <div className="cook-time-options">
                  <div className="cook-time-option">
                    <input
                      type="radio"
                      name="cook-time"
                      id="0-minutes"
                      value={0}
                      checked={0 === maxCookTime}
                      onChange={(e) => handleMaxCookSelect(e)}
                    />
                    <label htmlFor="0-minutes">0 minutes</label>
                  </div>
                  <div className="cook-time-option">
                    <input
                      type="radio"
                      name="cook-time"
                      id="cook-5-minutes"
                      value={5}
                      checked={5 === maxCookTime}
                      onChange={(e) => handleMaxCookSelect(e)}
                    />
                    <label htmlFor="cook-5-minutes">5 minutes</label>
                  </div>
                  <div className="cook-time-option">
                    <input
                      type="radio"
                      name="cook-time"
                      id="cook-10-minutes"
                      value={10}
                      checked={10 === maxCookTime}
                      onChange={(e) => handleMaxCookSelect(e)}
                    />
                    <label htmlFor="cook-10-minutes">10 minutes</label>
                  </div>
                  <div className="cook-time-option">
                    <input
                      type="radio"
                      name="cook-time"
                      id="cook-15-minutes"
                      value={15}
                      checked={15 === maxCookTime}
                      onChange={(e) => handleMaxCookSelect(e)}
                    />
                    <label htmlFor="cook-15-minutes">15 minutes</label>
                  </div>
                  <div className="cook-time-option">
                    <input
                      type="radio"
                      name="cook-time"
                      id="cook-20-minutes"
                      value={20}
                      checked={20 === maxCookTime}
                      onChange={(e) => handleMaxCookSelect(e)}
                    />
                    <label htmlFor="cook-20-minutes">20 minutes</label>
                  </div>
                </div>
                <button
                  className="cook-time-reset-button"
                  onClick={clearMaxCookTime}
                >
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
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </section>
    </div>
  );
};

export default RecipesPage;
