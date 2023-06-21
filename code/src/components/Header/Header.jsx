import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import "./Header.css";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };
  return (
    <>
      <div className={darkMode ? "header-container" : "header-container light"}>
        <input type="text" placeholder="Search movies..." />
        <Link className="logo" to="/">
          CineTrail
        </Link>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search movies..."
          />
        </div>

        <div className="header-buttons-container">
          <div className="theme-button-container">
            {darkMode ?
            <div className="theme-buttons">
              <button onClick={handleTheme} className="theme-icon">
                click here
              </button>
              <MdOutlineDarkMode className="theme-icon theme-icon-active" />
            </div>
            : <div className="theme-buttons">
              <MdOutlineLightMode className="theme-icon theme-icon-active" />
              <MdOutlineDarkMode className="theme-icon" onClick={handleTheme} />
            </div>}
          </div>
        </div>

        
        <button className="create-account">Create Account</button>
      </div>
    </>
  );
}

export default Header;
