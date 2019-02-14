import React from "react";
import { Link } from "react-router-dom";
//import '../scss/Header.scss';


const MainMenuDesktop = () => {
  return (
    <div className="header__menu--desktop">
        <ul className="menu__list">
          <li className="menu__list--item"><Link to="/"> Home</Link></li>
          <li className="menu__list--item"><Link to="/"> About Us</Link></li>
          <li className="menu__list--item"><Link to="/"> Services</Link></li>
          <li className="menu__list--item"><Link to="/"> Blog</Link></li>
          <li className="menu__list--item"><Link to="/"> Contact Us</Link></li>
        </ul>
    </div>
  );
};

export default MainMenuDesktop;