import React, { Fragment } from 'react';
import { Menu } from '../../../Assets/index.assets';
import { connect } from 'react-redux';
import { isopen } from "../../../Services/Actions/Actions";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import LogoN from "./Logo_n";
import Close from './Close'
import localization from "../../../localization";
import _ from "lodash";

const IconMenu = styled(Menu)`
    svg{
      fill: #fff;
      width: 2.5rem;
    }  
`;

const MainMenuMobile = (props) => {
  let open = ''
  const toOpen = () => {
    props.dispatch(isopen(!props.isOpen))
  }
  if (props.isOpen) {
    open = 'open'
  } else {
    open = ''
  }
  return (
    <Fragment>
      <button className={props.className} onClick={toOpen}>
        <IconMenu />
      </button>
      <div className={`header__menu--mobile ${open}`}>
        <Close onClick={toOpen} />
        <LogoN />
        <ul className="menu__list">
          <li className="menu__list--item" onClick={toOpen}><Link to="/"> {_.toUpper(localization.menu.home)}</Link></li>
          <li className="menu__list--item" onClick={toOpen}><Link to="/aboutus"> {_.toUpper(localization.menu.aboutus)}</Link></li>
          <li className="menu__list--item" onClick={toOpen}><Link to="/services"> {_.toUpper(localization.menu.services)}</Link></li>
          {/* <li className="menu__list--item" onClick={toOpen}><Link to="/blog">{_.toUpper(localization.menu.blog)}</Link></li> */}
          <li className="menu__list--item" onClick={toOpen}><Link to="/contactus"> {_.toUpper(localization.menu.contact)}</Link></li>
        </ul>
      </div>
    </Fragment>
  );

}

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.isOpen
  }
}

export default connect(mapStateToProps)(MainMenuMobile);