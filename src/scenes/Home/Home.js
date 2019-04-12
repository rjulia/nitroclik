import React, { Component } from 'react';
import { HeroImage, WhatWeDo, HowWeDo, ContactUs } from './components/index';
import InViewMonitor from '../../Components/InViewMonitor/InViewMonitor'

// imagesHome

class Home extends Component {
  render() {
    return (
      <div className="d-flex row flex-column">
        <HeroImage />
        <div className="container">
          <InViewMonitor
            classNameNotInView='vis-hidden'
            classNameInView='animated fadeInUp'>
            <WhatWeDo />

          </InViewMonitor>
        </div>
        <HowWeDo />
        <div className="container">
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default Home;