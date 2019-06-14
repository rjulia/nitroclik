import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

//import '../scss/Header.scss';
import localization from "../../../localization";
import _ from "lodash";
import { ButtonLanguage } from "../../../Components/index.components";

const isActive = (path, match, location) => !!(match || path === location.pathname);

class MainMenuDesktop extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {

    return (
      <div className="header__menu--desktop">
        <ul className="menu__list">
          <NavLink
            exact={true}
            to="/"
            className="menu__list--item"
          >
            {_.toUpper(localization.getString('homes'))}
          </NavLink>
          <NavLink exact={true} to="/porfolio" className="menu__list--item" isActive={isActive.bind(this, `/porfolio`)} >
            {_.toUpper(localization.menu.porfolio)}
          </NavLink>
          <NavLink exact={true} to="/services" className="menu__list--item" isActive={isActive.bind(this, `/services`)}>
            {_.toUpper(localization.menu.services)}
          </NavLink>
          <NavLink exact={true} to="/aboutus" className="menu__list--item" isActive={isActive.bind(this, `/aboutus`)}>
            {_.toUpper(localization.menu.aboutus)}
          </NavLink>
          {/* <NavLink className="menu__list--item">
          <p to="/blog">{_.toUpper(localization.menu.blog)}
          </p></NavLink> */}
          <NavLink exact={true} to="/contactus" className="menu__list--item" isActive={isActive.bind(this, `/contactus`)}>
            {_.toUpper(localization.menu.contact)}
          </NavLink>
          <ButtonLanguage />
        </ul>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainMenuDesktop));