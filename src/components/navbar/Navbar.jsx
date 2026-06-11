import HamburgerIcon from "../../assets/icon-hamburger-menu.svg";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleMenuButtonClick() {
    console.log("menu toggled!", toggleMenu);
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  }

  return (
    <nav className="navigation">
      <div className="logo-container">
        <img src={Logo} alt="An image of two flower petals." />
      </div>
      <div className={`menu-list-container ${toggleMenu ? "is-open" : ""}`}>
        <ul className="menu-list">
          <li className="menu-list-item">
            <a className="menu-item-link" href="#">
              Home
            </a>
          </li>
          <li className="menu-list-item">
            <a className="menu-item-link" href="#">
              About
            </a>
          </li>
          <li className="menu-list-item">
            <a className="menu-item-link" href="#">
              Recipes
            </a>
          </li>
        </ul>
        <button className="browse-recipes-button">Browse recipes</button>
      </div>
      <button
        className="menu-button"
        aria-label="Hamburger menu button"
        onClick={handleMenuButtonClick}
      >
        <img
          className="menu-button-icon"
          src={HamburgerIcon}
          alt="Three short horizontal lines stacked vertically."
        />
      </button>
    </nav>
  );
};

export default Navbar;
