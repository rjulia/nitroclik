import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css'; // This only needs to be imported once in your app
import PropTypes from 'prop-types';





class OwnLightbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
    };
  }


  render() {
    if (!this.props.show) {
      return null;
    }
    const { photoIndex } = this.state;
    const { images } = this.props

    return (
      <div>

        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => this.props.onClose()}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />

      </div>
    );
  }
}

OwnLightbox.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool
};

export default OwnLightbox
