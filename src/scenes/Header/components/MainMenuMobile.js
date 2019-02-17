import React from 'react';
import { Menu } from '../../../Assets/index.assets';
import { connect } from 'react-redux';
import { isopen } from "../../../Services/Actions/Actions";
import styled from 'styled-components';

const IconMenu = styled(Menu)`
    svg{
      fill: #fff;
      width: 2.5rem;
    }  
`;

const MainMenuMobile = (props) => {
  
    const toOpen = () => props.dispatch(isopen(true))

    return (
      <button className={props.className} onClick={toOpen}>
        <IconMenu/>
      </button>
    );
  
}


export default connect()(MainMenuMobile);