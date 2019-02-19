import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
      const {id, category , title, image, sortdef } = this.props
      return (
        <div className="card">
          <img src={image} className="card-img-top" alt=".fasasfsf"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
            <p className="card-text">{sortdef}</p>
            <Link to={`/blog/${id}`} className="btn btn-primary">Read more</Link>
          </div>
        </div>
      );
    
  }
}

export default Card;
