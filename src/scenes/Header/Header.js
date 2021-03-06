import React, { Component } from 'react';
import './scss/Header.scss';
import Logo from "./components/Logo";
import MainMenuMobile from "./components/MainMenuMobile";
import MainMenuDesktop from "./components/MainMenuDesktop";
import styled from 'styled-components';
import { NavLink, withRouter } from "react-router-dom";
import { ButtonLanguage } from '../../Components/index.components';


const MainMenuHeaderMobile = styled(MainMenuMobile)`
    width: 40px;
    height: 40px
    top: 20px;
    position: absolute;
    right: 20px;
    display: inline-block;
    border: none;
    margin: 0;
    padding: 0px;
    text-decoration: none;
    background-color: transparent;
    color: transparent:
    -webkit-appearance: none;
    -moz-appearance: none;
    
    @media (min-width: 576px) {
      display: none;
    }
`;


class Header extends Component {
  state = {
    classAdd: '',
    classUrl: '',
    screenHeight: ''
  }
  listenScrollEvent = e => {
    if (window.scrollY >= this.state.screenHeight) {
      this.setState({ classAdd: 'dark' })
    } else {
      this.setState({ classAdd: '' })
    }
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    if (pathname !== '/') {
      this.setState({ classUrl: 'dark' })
    } else {
      this.setState({ classUrl: '' })
    }

    window.addEventListener('scroll', this.listenScrollEvent)
    this.setState({
      screenHeight: window.innerHeight,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const { pathname } = nextProps.location;
      if (pathname !== '/') {
        this.setState({ classUrl: 'dark' })
      } else {
        this.setState({ classUrl: '' })
      }
    }
  }


  render() {
    return (
      <div className={`container__header d-flex justify-content-center row ${this.state.classAdd} ${this.state.classUrl}`} >
        <div className="header">
          <NavLink
            exact={true}
            to="/"
          >
            <Logo />

          </NavLink>
          <div className="btn-language__mobile">
            <ButtonLanguage />
          </div>
          <MainMenuHeaderMobile {...this.props} />
          <MainMenuDesktop />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);