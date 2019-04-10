import React, { Component } from 'react';
import { HeaderSection } from "../../Components/index.components";
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
        <div className="sections__texts container">
          <p>{_.capitalize(localization.aboutUs.text)}</p>

          <p>{_.capitalize(localization.aboutUs.text)}</p>
          <p>{_.capitalize(localization.aboutUs.text)}</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;