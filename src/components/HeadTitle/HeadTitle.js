import React from 'react';
import "./HeadTitle.scss"


const HeadTitle = (props) => {
  const {title, color, lineColor}  = props;

  const divStyle = {
    borderColor: lineColor
  };

  const pStyle = {
    color: color,
  };
  
  return (
    <p className="headTitle" style={divStyle}>
      <span className="headTitle__text" style={pStyle}>{title}</span>
    </p>
  );
};

export default HeadTitle;