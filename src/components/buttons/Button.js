import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: #FFA59E;
  border-radius: none;
  border: none;
`
const Button = ({ handleClose, text }) => {
  return (

    <ButtonStyle onClick={handleClose}>{text}</ButtonStyle>

  );
};

export default Button