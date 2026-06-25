import HamburgerIcon from "../../assets/icon-hamburger-menu.svg";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuRef = useRef(null);

  function handleMenuButtonClick(event) {
    event.stopPropagation();
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  }

  function handleMenuItemClick() {
    setToggleMenu(false);
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

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setToggleMenu(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (toggleMenu && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [toggleMenu]);

  return (
    <nav className="navigation">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="An image of two flower petals." />
      </Link>
      <div
        ref={menuRef}
        className={`menu-list-container ${toggleMenu ? "is-open" : ""}`}
      >
        <ul className="menu-list">
          <li className="menu-list-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu-item-link active" : "menu-item-link"
              }
              to="/"
              onClick={handleMenuItemClick}
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
              onClick={handleMenuItemClick}
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
              onClick={handleMenuItemClick}
            >
              Recipes
            </NavLink>
          </li>
        </ul>
        <Link
          to="/recipes"
          className="browse-recipes-button"
          onClick={handleMenuItemClick}
        >
          Browse recipes
        </Link>
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
