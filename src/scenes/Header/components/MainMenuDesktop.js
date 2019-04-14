import React from "react";
import { Link, NavLink } from "react-router-dom";
//import '../scss/Header.scss';
import localization from "../../../localization";
import _ from "lodash";

const MainMenuDesktop = () => {
  return (
    <div className="header__menu--desktop">
      <ul className="menu__list">
        <NavLink activeClassName='is-active' to="/" className="menu__list--item">
          {_.toUpper(localization.menu.home)}
        </NavLink>
        <NavLink activeClassName='is-active' className="menu__list--item" to="/aboutus">
          {_.toUpper(localization.menu.aboutus)}
        </NavLink>
        <NavLink activeClassName='is-active' className="menu__list--item" to="/services">
          {_.toUpper(localization.menu.services)}
        </NavLink>
        {/* <NavLink activeClassName='is-active' className="menu__list--item">
        <p to="/blog">{_.toUpper(localization.menu.blog)}
        </p></NavLink> */}
        <NavLink activeClassName='is-active' className="menu__list--item" to="/contactus">
          {_.toUpper(localization.menu.contact)}
        </NavLink>
      </ul>
    </div>
  );
};

export default MainMenuDesktop;