import React, { Component } from 'react';
import './scss/Header.scss';
import Logo from "./components/Logo";
import MainMenuMobile from "./components/MainMenuMobile";
import MainMenuDesktop from "./components/MainMenuDesktop";
import styled from 'styled-components';


const MainMenuHeaderMobile = styled(MainMenuMobile)`
    width: 48px;
    height: 48px
    top: 10px;
    position: absolute;
    right: 20px;
    display: inline-block;
    border: none;
    margin: 0;
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
    screenHeight: ''
  }
  listenScrollEvent = e => {
    if (window.scrollY >= this.state.screenHeight) {
      this.setState({classAdd: 'dark'})
    } else {
      this.setState({classAdd: ''})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    this.setState({
        screenHeight: window.innerHeight,
    })
  }

  render() {
    return (
      <div className={`container__header d-flex justify-content-center row ${this.state.classAdd}`} >
        <div className="header container">
          <Logo/>
          <MainMenuHeaderMobile {...this.props}/>
          <MainMenuDesktop/>
        </div>
      </div>
    );
  }
}

export default Header;