import { useState, useEffect } from "react";
import blackLogo from "../assets/github-black-logo.png";
import whiteLogo from "../assets/github-white-logo.png";
import "../styles/Header.css";
import Themes from "./Themes";

const Header = () => {
  const [theme, setTheme] = useState<boolean>(false); // true = light theme

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "light");
    }
  }, []);

  useEffect(() => {
    document.body.className = theme ? "light-theme" : "dark-theme";
    localStorage.setItem("theme", theme ? "light" : "dark");
  }, [theme]);

  return (
    <div className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="logo"
          src={theme ? blackLogo : whiteLogo}
          alt="GitHub Logo"
        />
        <div className="heading">
          <h2>GitHub Searcher</h2>
          <p>Search users or repositories below</p>
        </div>
      </div>
      <div className="switch-theme-btn">
        <Themes theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Header;
