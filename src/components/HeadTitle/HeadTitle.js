import React from 'react';
import "./HeadTitle.scss"


const HeadTitle = (props) => {
  let { styles, title, color, lineColor } = props;

  const divStyle = {
    borderColor: lineColor
  };

  const pStyle = {
    color: color,
  };

  return (
    <div className={styles + " headTitle"} style={divStyle}>
      <h2 className="headTitle__text" style={pStyle}>{title}</h2>
    </div>
  );
};

export default HeadTitle;