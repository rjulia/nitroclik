import React from 'react';
import './Buttons.scss'

const BoxTitle = (props) => {
  return (
    <div className="item">
      <p className="mouse" onClick={props.handleClick}></p>
    </div>
  );
};

export default BoxTitle;