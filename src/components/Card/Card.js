import React from 'react';
import { Link } from "react-router-dom";
import './Card.scss';

function Card ({id, category , title, image, sortdef })  {
  return (
    <div className="card card-blog">
      <img src={image} className="card-img-top" alt=".fasasfsf"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        <p className="card-text">{sortdef}</p>
        <Link to={`/blog/${id}`} className="btn">Read more</Link>
      </div>
    </div>
  );
}

export default Card;

