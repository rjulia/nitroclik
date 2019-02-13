import React, { Component } from 'react';
import './scss/Header.scss';
import Logo from "./components/Logo";
import MainMenu from "./components/MainMenu";
import styled from 'styled-components';

const LogoHeader = styled(Logo)`
    width: 50%;
    top: 10px;
    position: absolute;
    left: 10px;

    @media (min-width: 576px) {
      width: 25%;
    }
`;

const MainMenuHeader = styled(MainMenu)`
    width: 48px;
    height: 48px
    top: 10px;
    position: absolute;
    right: 20px;
    display: inline-block;
    border: none;
    margin: 0;
    text-decoration: none;
    background: transparent;
    color: transparent:
    -webkit-appearance: none;
    -moz-appearance: none;
`;

class Header extends Component {
  render() {
    return (
      <div className="header">
        <LogoHeader/>
        <MainMenuHeader/>
      </div>
    );
  }
}

export default Header;