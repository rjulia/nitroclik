import React from "react";
import { Link } from "react-router-dom";
//import '../scss/Header.scss';
import localization from "../../../localization";
import _ from "lodash";

const MainMenuDesktop = () => {
  return (
    <div className="header__menu--desktop">
      <ul className="menu__list">
        <li className="menu__list--item"><Link to="/"> {_.toUpper(localization.menu.home)}</Link></li>
        <li className="menu__list--item"><Link to="/aboutus">{_.toUpper(localization.menu.aboutus)} </Link></li>
        <li className="menu__list--item"><Link to="/services">{_.toUpper(localization.menu.services)}</Link></li>
        {/* <li className="menu__list--item"><Link to="/blog">{_.toUpper(localization.menu.blog)}</Link></li> */}
        <li className="menu__list--item"><Link to="/contactus">{_.toUpper(localization.menu.contact)}</Link></li>
      </ul>
    </div>
  );
};

export default MainMenuDesktop;