import blackLogo from "../assets/github-black-logo.png";
import whiteLogo from "../assets/github-white-logo.png";
import "../styles/Header.css";
import Themes from "./Themes";
import { useThemeMode } from "../ThemeProvider";

const Header = () => {
  const { isLight, toggleTheme } = useThemeMode();

  return (
    <div className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="logo"
          src={isLight ? blackLogo : whiteLogo}
          alt="GitHub Logo"
        />
        <div className="heading">
          <h2>GitHub Searcher</h2>
          <p>Search users or repositories below</p>
        </div>
      </div>
      <div className="switch-theme-btn">
        <Themes theme={isLight} setTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Header;
