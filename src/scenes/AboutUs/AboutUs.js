import React, { Component } from 'react';
import { HeaderSection, HeadTitle } from "../../Components/index.components";
import localization from "../../localization";

import _ from "lodash";

const images = {
  small: './assets/images/aboutusheader_340.jpg',
  medium: './assets/images/aboutusheader.jpg',
  large: './assets/images/aboutusheader.jpg',
  xlarge: './assets/images/aboutusheader.jpg'
}

class AboutUs extends Component {
  render() {
    return (
      <div className="sections row">
        <HeaderSection
          images={images}
          title={_.toUpper(localization.aboutUs.title)}
          subtitle={_.toUpper(localization.aboutUs.subtitle)}
        />
        <div className="sections__texts container about-us">
          <div className="row">
            <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
              <HeadTitle title={_.toUpper(localization.aboutUs.about)} color={'#FFA59E'} lineColor={'#FFA59E'} />

            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 about-us__img">
              <img className="about-us__img--img" src={'./assets/images/about.jpg'} alt="about us"></img>

            </div>
            <div className="col-12 col-md-6 about-us__txt">
              <h3>{_.capitalize(localization.aboutUs.about_tl1)}</h3>
              <p className="about-us__txt--parf">{_.capitalize(localization.aboutUs.about_tx1)}</p>

              <h3>.{_.capitalize(localization.aboutUs.about_tl2)}</h3>

              <p className="about-us__txt--parf"> {_.capitalize(localization.aboutUs.about_tx2_a)}</p>
              <p className="about-us__txt--parf"> {_.capitalize(localization.aboutUs.about_tx2_b)}.</p>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;