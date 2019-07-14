import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HeaderSection } from "../../Components/index.components";
import localization from "../../localization";
import WhatWeAre from './components/WhatWeAre';
import WhoWeAre from './components/WhoWeAre'
import "./AboutUs.scss"
import _ from "lodash";
import HowWeWork from './components/HowWeWork';
const images = {
  small: './assets/images/aboutusheader_340.jpg',
  medium: './assets/images/aboutusheader.jpg',
  large: './assets/images/aboutusheader.jpg',
  xlarge: './assets/images/aboutusheader.jpg'
}

class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="sections row">
        <HeaderSection
          images={images}
          title={_.toUpper(localization.aboutUs.title)}
          subtitle={_.toUpper(localization.aboutUs.subtitle)}
        />
        <div className="container about-us">
          <div className="row">
            <HowWeWork />
            {/* <p
              dangerouslySetInnerHTML={{ __html: localization.aboutUs.text }}
              className="about__description" /> */}
            <WhatWeAre />
            <WhoWeAre />

          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state

}

export default connect(mapStateToProps)(AboutUs);