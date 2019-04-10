import React, { Component } from 'react';
import { HeaderSection } from "../../Components/index.components";
import localization from "../../localization";
import _ from "lodash";

const images = {
  small: './assets/images/nofound_340.jpg',
  medium: './assets/images/nofound.jpg',
  large: './assets/images/nofound.jpg',
  xlarge: './assets/images/nofound.jpg'
}

class NotFount extends Component {
  render() {
    return (
      <div className="sections d-flex">
        <HeaderSection
          images={images}
          title={_.toUpper(localization.notFound.title)}
          subtitle={_.toUpper(localization.notFound.subtitle)}
        />
      </div>
    );
  }
}

export default NotFount;