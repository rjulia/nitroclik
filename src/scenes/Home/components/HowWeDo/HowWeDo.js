import React from 'react';
import { connect } from 'react-redux';

import './HowWeDo.scss';
import InViewMonitor from '../../../../Components/InViewMonitor/InViewMonitor';
import { HeadTitle, ButtonDown } from "../../../../Components/index.components";
import SquareHow from "./SquareHow";
import { Idea, Launch, Test } from "../../../../Assets/index.assets";
import _ from "lodash";
import localization from "../../../../localization";
import zenscroll from 'zenscroll'
import { Parallax } from 'react-parallax';



const images = {
  small: './assets/images/how_we_do.jpg',
  medium: './assets/images/how_we_do.jpg',
  large: './assets/images/how_we_do.jpg',
  xlarge: './assets/images/how_we_do.jpg'
}

const scrollToDown = () => {
  const how_height = document.getElementsByClassName('how-we-do')
  zenscroll.toY(how_height[0].offsetHeight * 3, 500)
}


const HowWeDo = () => {
  return (
    <div className="how-we-do justify-content-center d-flex">
      <Parallax
        blur={2}
        bgImage={images.medium}
        bgImageAlt="the cat"
        strength={400}>
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

      </Parallax>

    </div>
  );
};
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(HowWeDo);
