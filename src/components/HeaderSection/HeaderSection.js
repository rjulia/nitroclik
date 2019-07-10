import React, { Component } from 'react';
import { ResponsiveImage, HeadTitle } from "../index.components";
import styled from 'styled-components';
import "./HeaderSection.scss";


const ResponsiveImageW100 = styled(ResponsiveImage)`

    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    @media (min-width: 576px) {
      width: 100%;
      height: auto;

    }
`;

class HeaderSection extends Component {
  render() {
    const { images, title, subtitle } = this.props;
    return (
      <div className="header-section__container">
        <ResponsiveImageW100 images={images} />
        <div className="header-section__title">
          <HeadTitle color={''} lineColor={''} title={title} />
          <h1>{subtitle}</h1>
        </div>
      </div>
    );
  }
}

export default HeaderSection;