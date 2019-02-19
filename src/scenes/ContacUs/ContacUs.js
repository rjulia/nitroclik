import React, { Component } from 'react';
import { HeaderSection, ContactForm } from "../../Components/index.components";

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
        <div className="container justify-content-md-center py-5 row">
            <div className="col-12 col-md-6 justify-content-center">
                <p>Here some text</p>
            </div>
        </div>
        <div className="container justify-content-md-center py-5 row">
            <div className="col-12 col-md-6">
                <ContactForm/> 
            </div>
        </div>
      </div>
    );
  }
}

export default ContacUs;