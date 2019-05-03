import React from 'react';
import HeadTitle from "./HeadTitle";
import "./HeadTitle.scss"


const BoxTitle = (props) => {
  return (
    <div className={props.className}>
      <HeadTitle title={props.title} />
      <p className="headTitle__subtitle">{props.subtitle}</p>
    </div>
  );
};

export default BoxTitle;