import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

//import '../scss/Header.scss';
import localization from "../../../localization";
import _ from "lodash";
import { ButtonLanguage } from "../../../Components/index.components";


class MainMenuDesktop extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="header__menu--desktop">
        <ul className="menu__list">
          <NavLink to="/" className="menu__list--item">
            {_.toUpper(localization.getString('homes'))}
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

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuDesktop);