import React from 'react';
import "./HeadTitle.scss"


const HeadTitle = (props) => {
  const {title}  = props;
  return (
    <p className="headTitle">
      <span className="headTitle__text">{title}</span>
    </p>
  );
};

export default HeadTitle;