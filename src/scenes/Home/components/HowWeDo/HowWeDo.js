import React from 'react';
import './HowWeDo.scss';
import InViewMonitor from '../../../../Components/InViewMonitor/InViewMonitor';
import { ResponsiveImage, HeadTitle, ButtonDown } from "../../../../Components/index.components";
import styled from 'styled-components';
import SquareHow from "./SquareHow";
import { Idea, Launch, Test } from "../../../../Assets/index.assets";
import _ from "lodash";
import localization from "../../../../localization";
import zenscroll from 'zenscroll'



const images = {
  small: './assets/images/how_we_do.jpg',
  medium: './assets/images/how_we_do.jpg',
  large: './assets/images/how_we_do.jpg',
  xlarge: './assets/images/how_we_do.jpg'
}


const ResponsiveImageW100 = styled(ResponsiveImage)`
    width: 100vw;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    @media (min-width: 576px) {
      width: 100%;
    }
`;
const scrollToDown = () => {
  const how_height = document.getElementsByClassName('how-we-do')
  zenscroll.toY(how_height[0].offsetHeight * 3, 500)
}


const HowWeDo = () => {
  return (

    <div className="how-we-do justify-content-center d-flex">
      <ResponsiveImageW100 images={images} />
      <div className="container how-we-do__container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
            <HeadTitle title={localization.home.howwedo} color={'#FFA59E'} lineColor={'#FFA59E'} />

          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <InViewMonitor
              classNameNotInView='vis-hidden'
              classNameInView='animated fadeInLeft' // fadeInLeft, or fadeInRight
            >
              <SquareHow
                icon={<Idea className={'icon'} />}
                text={_.toUpper(localization.home.planning)} />
              <div className="how-we-do__commet">
                <p> {localization.home.planning_text}</p>
              </div>
            </InViewMonitor>
          </div>

          <div className="col-12 col-md-4">
            <InViewMonitor
              classNameNotInView='vis-hidden'
              classNameInView='animated fadeInUp' // fadeInLeft, or fadeInRight
            >
              <SquareHow
                icon={<Launch className={'icon'} />}
                text={_.toUpper(localization.home.building)} />
              <div className="how-we-do__commet">
                <p> {localization.home.building_text}</p>
              </div>

            </InViewMonitor>
          </div>
          <div className="col-12 col-md-4">
            <InViewMonitor
              classNameNotInView='vis-hidden'
              classNameInView='animated fadeInRight' // fadeInLeft, or fadeInRight
            >
              <SquareHow
                icon={<Test className={'icon'} />}
                text={_.toUpper(localization.home.testing)} />
              <div className="how-we-do__commet">
                <p> {localization.home.testing_text}</p>

              </div>
            </InViewMonitor>
          </div>
        </div>
      </div>
      <ButtonDown handleClick={scrollToDown} />
    </div>
  );
};

export default HowWeDo;