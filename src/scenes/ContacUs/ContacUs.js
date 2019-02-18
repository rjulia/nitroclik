import React, { Component } from 'react';
import { HeaderSection } from "../../Components/index.components";
const images = {
  small: './assets/images/contactusheader_340.jpg',
  medium: './assets/images/contactusheader.jpg',
  large: './assets/images/contactusheader.jpg',
  xlarge: './assets/images/contactusheader.jpg'
}
const title = "Contact us";
const subtitle = "how may i help you today?";

class ContacUs extends Component {
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

export default ContacUs;