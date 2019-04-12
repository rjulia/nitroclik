import React, { Component } from 'react';
import './WhatWeDo.scss';
import { HeadTitle, ButtonDown } from "../../../../Components/index.components";
import localization from "../../../../localization";
import _ from "lodash";

const scrollToDown = () => {
  const wha_height = document.getElementsByClassName('what-we-do')
  console.log(wha_height[0].offsetHeight)
  window.scrollTo({ top: wha_height[0].offsetHeight * 2, left: 0, behavior: 'smooth' });

}

class WhatWeDo extends Component {
  render() {
    return (
      <div className="what-we-do col-12 d-flex justify-content-center flex-column">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
            <HeadTitle title={_.toUpper(localization.home.whatwe_title)} color={'#FFA59E'} lineColor={'#FFA59E'} />

          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content one">
              <h4>{localization.services.grafhic.title}</h4>
              <ul>
                <li>{localization.services.grafhic.ser1}</li>
                <li>{localization.services.grafhic.ser2}</li>
                <li>{localization.services.grafhic.ser3}</li>
                <li>{localization.services.grafhic.ser4}</li>
                <li>{localization.services.grafhic.ser5}</li>
                <li>{localization.services.grafhic.ser6}</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content two">
              <h4>{localization.services.web.title}</h4>
              <ul>
                <li>{localization.services.web.ser1}</li>
                <li>{localization.services.web.ser2}</li>
                <li>{localization.services.web.ser3}</li>
                <li>{localization.services.web.ser4}</li>
                <li>{localization.services.web.ser5}</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content three">
              <h4>{localization.services.marketing.title}</h4>
              <ul>
                <li>{localization.services.marketing.ser1}</li>
                <li>{localization.services.marketing.ser2}</li>
                <li>{localization.services.marketing.ser3}</li>
                <li>{localization.services.marketing.ser4}</li>
                <li>{localization.services.marketing.ser5}</li>
                <li>{localization.services.marketing.ser6}</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content four">
              <h4>{localization.services.cloud.title}</h4>
              <ul>
                <li>{localization.services.cloud.ser1}</li>
                <li>{localization.services.cloud.ser2}</li>
                <li>{localization.services.cloud.ser3}</li>
                <li>{localization.services.cloud.ser4}</li>
                <li>{localization.services.cloud.ser5}</li>
              </ul>
            </div>
          </div>
        </div>
        <ButtonDown handleClick={scrollToDown} />
      </div>
    );
  }
}

export default WhatWeDo;