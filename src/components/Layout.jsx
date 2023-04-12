import { Link, Outlet } from "react-router-dom";
import logoImage from "../assets/shared/logo.svg";
import facebookIcon from "../assets/shared/icon-facebook.svg";
import twitterIcon from "../assets/shared/icon-twitter.svg";
import instagramIcon from "../assets/shared/icon-instagram.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import { useState } from "react";

function Layout() {
  const [isLinksActive, setIsLinksActive] = useState(false);

  function ToggleLinks() {
    setIsLinksActive(!isLinksActive);
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/Coffeeroasters">
          <img src={logoImage} alt="logo" className="logo" />
        </Link>
        <div className={`links ${isLinksActive ? "active" : ""}`}>
          <Link className="link" to="/Coffeeroasters" onClick={ToggleLinks}>
            Home
          </Link>
          <Link className="link" to="about" onClick={ToggleLinks}>
            About Us
          </Link>
          <Link className="link" to="plan" onClick={ToggleLinks}>
            Create Your Plan
          </Link>
        </div>
        <img
          src={isLinksActive ? closeIcon : hamburgerIcon}
          alt="links-btn"
          className="links-btn"
          onClick={ToggleLinks}
        />
      </nav>
      <Outlet />
      <footer className="footer">
        <Link to="/Coffeeroasters">
          <img src={logoImage} alt="logo" className="logo" />
        </Link>
        <div className="links">
          <Link className="link" to="/Coffeeroasters">
            Home
          </Link>
          <Link className="link" to="about">
            About Us
          </Link>
          <Link className="link" to="plan">
            Create Your Plan
          </Link>
        </div>
        <div className="social-icons">
          <img src={facebookIcon} alt="facebook-icon" />
          <img src={twitterIcon} alt="twitter-icon" />
          <img src={instagramIcon} alt="instagram-icon" />
        </div>
      </footer>
    </>
  );
}

export default Layout;
