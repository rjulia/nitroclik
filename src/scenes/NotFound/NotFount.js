import React, { Component } from 'react';
import { HeaderSection } from "../../Components/index.components";

const images = {
  small: './assets/images/nofound_340.jpg',
  medium: './assets/images/nofound.jpg',
  large: './assets/images/nofound.jpg',
  xlarge: './assets/images/nofound.jpg'
}
const title = "Not found";
const subtitle = "This page is lost or not exist";

class NotFount extends Component {
  render() {
    return (
      <div className="sections d-flex">
        <HeaderSection 
        images={images}
        title={title}
        subtitle = {subtitle}
        />
      </div>
    );
  }
}

export default NotFount;