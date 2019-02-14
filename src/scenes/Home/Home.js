import React, { Component } from 'react';
import { HeroImage, AboutUs } from './components/index';


// imagesHome

class Home extends Component {
  render() {
    return (
      <div className="row">
        <HeroImage/>
        <AboutUs/>
      </div>
    );
  }
}

export default Home;