import React from 'react'


class ResponsiveImage extends React.Component {
  
  render () {
    const { small, medium, large, xlarge } = this.props.images; 
    let sizeImge;
    const size = document.body.clientWidth;
    switch (true) {
      case (size > 1280):
        sizeImge = xlarge
        break;
      case (size > 768):
        sizeImge = large
        break;
      case (size > 376):
        sizeImge = medium
        break;
      default:
        sizeImge = small
        break;
    }
    return (
        <img {...this.props} src={sizeImge} alt="nothing"/>
    );
  }
}

export default ResponsiveImage;
