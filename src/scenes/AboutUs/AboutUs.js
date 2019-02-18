import React, { Component } from 'react';
import { HeaderSection } from "../../Components/index.components";

const images = {
  small: './assets/images/aboutusheader_340.jpg',
  medium: './assets/images/aboutusheader.jpg',
  large: './assets/images/aboutusheader.jpg',
  xlarge: './assets/images/aboutusheader.jpg'
}
const title = "About us";
const subtitle = "Let's start today to build tomorrow";

class AboutUs extends Component {
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

export default AboutUs;