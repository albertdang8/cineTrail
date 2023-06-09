import React from "react";
import "./Header.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={darkMode ? "header-container" : "header-container light"}>
        <input type="text" placeholder="Search movies..." />
        <Link className="logo" to="/">
          CineTrail
        </Link>
        <h1>Header</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          Turn on dark mode
        </button>
        <button>Turn on light mode</button>
      <button className="create-account">Create Account</button>
      </div>
    </>
  );
}

export default Header;
