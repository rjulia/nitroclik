import React from 'react';
import './Buttons.scss'

const BoxTitle = (props) => {
  return (
    <div className="item">
      <div className="mouse" onClick={props.handleClick}></div>
    </div>
  );
};

export default BoxTitle;