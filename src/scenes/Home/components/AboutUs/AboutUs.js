import React, { Component } from 'react';
import './AboutUs.scss';
import { HeadTitle } from "../../../../Components/index.components";
import localization from "../../../../localization";
import _ from "lodash";

class AboutUS extends Component {
  render() {
    return (
      <div className="about-us col-12 d-flex justify-content-center flex-column">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
            <HeadTitle title={_.toUpper(localization.home.about)} color={'#FFA59E'} lineColor={'#FFA59E'} />

          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 about-us__img">
            <img className="about-us__img--img" src={'./assets/images/about.jpg'} alt="about us"></img>

          </div>
          <div className="col-12 col-md-6 about-us__txt">
            <h3>{_.capitalize(localization.home.about_tl1)}</h3>
            <p className="about-us__txt--parf">{_.capitalize(localization.home.about_tx1)}</p>

            <h3>.{_.capitalize(localization.home.about_tl2)}</h3>

            <p className="about-us__txt--parf"> {_.capitalize(localization.home.about_tx2_a)}</p>
            <p className="about-us__txt--parf"> {_.capitalize(localization.home.about_tx2_b)}.</p>


          </div>
        </div>
      </div>
    );
  }
}

export default AboutUS;