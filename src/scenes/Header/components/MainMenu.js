import React, { Component } from 'react';
import { Menu } from '../../../assets/index.assets';
import { connect } from 'react-redux';
import { isopen } from "../../../services/actions/actions";
import styled from 'styled-components';

const IconMenu = styled(Menu)`
    svg {
      fill: #fff;
      width: 2rem;
    }
`;
class MainMenu extends Component {
  render() {
    return (
      <button {...this.props} onClick={isopen}>
        <IconMenu/>
      </button>
    );
  }
}


export default connect()(MainMenu);