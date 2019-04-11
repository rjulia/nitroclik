import React, { Component } from 'react';

class SquareHow extends Component {
  render() {
    return (
      <div className="square-how">
        <div className="square-how__block">
          <div className="square-how__frame">
            {this.props.icon}
            <p className="square-how__text">
              {this.props.text}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SquareHow;