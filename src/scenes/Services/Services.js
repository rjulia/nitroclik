import React, { Component } from 'react';
import { HeaderSection } from "../../Components/index.components";

const images = {
  small: './assets/images/servicesheader_340.jpg',
  medium: './assets/images/servicesheader.jpg',
  large: './assets/images/servicesheader.jpg',
  xlarge: './assets/images/servicesheader.jpg'
}
const title = "Services";
const subtitle = "we give you the simple solutions for your new project"; 

class Services extends Component {
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

export default Services;