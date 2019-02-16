import React, { Component } from 'react';
import { HeroImage, AboutUs, HowWeDo, ContactUs } from './components/index';


// imagesHome

class Home extends Component {
  render() {
    return (
      <div className="d-flex row flex-column">
          <HeroImage/>
        <div className="container">
          <AboutUs/>
        </div>
          <HowWeDo/>
        <div className="container">
          <ContactUs/>
        </div>   
      </div>
    );
  }
}

export default Home;