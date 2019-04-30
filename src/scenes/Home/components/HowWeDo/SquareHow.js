import React, { PureComponent } from 'react';

class SquareHow extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      text: props.text,
      icon: props.icon
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      this.setState({ text: nextProps.text });
    }
  }
  render() {
    return (
      <div className="square-how">
        <div className="square-how__block">
          <div className="square-how__frame">
            {this.state.icon}
            <p className="square-how__text">
              {this.state.text}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SquareHow;