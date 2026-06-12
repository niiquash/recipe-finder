import HamburgerIcon from "../../assets/icon-hamburger-menu.svg";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleMenuButtonClick() {
    console.log("menu toggled!", toggleMenu);
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  }

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth > 1440) {
        setToggleMenu(false);
      }
    }
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav className="navigation">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="An image of two flower petals." />
      </Link>
      <div className={`menu-list-container ${toggleMenu ? "is-open" : ""}`}>
        <ul className="menu-list">
          <li className="menu-list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-item-link active" : "menu-item-link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-item-link active" : "menu-item-link"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="menu-list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-item-link active" : "menu-item-link"
              }
              to="/recipes"
            >
              Recipes
            </NavLink>
          </li>
        </ul>
        <button className="browse-recipes-button">Browse recipes</button>
      </div>
      <button
        className="menu-button"
        aria-label="Hamburger menu button"
        aria-expanded={toggleMenu}
        onClick={handleMenuButtonClick}
      >
        <img className="menu-button-icon" src={HamburgerIcon} alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
