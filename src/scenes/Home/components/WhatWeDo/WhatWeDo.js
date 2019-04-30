import React, { Component } from 'react';
import { connect } from 'react-redux';

import './WhatWeDo.scss';
import { HeadTitle, ButtonDown, Button } from "../../../../Components/index.components";
import localization from "../../../../localization";
import _ from "lodash";
import zenscroll from 'zenscroll'
import { NavLink } from "react-router-dom";


const scrollToDown = () => {
  const wha_height = document.getElementsByClassName('what-we-do')
  zenscroll.toY(wha_height[0].offsetHeight * 2, 500)
}

class WhatWeDo extends Component {
  constructor(props) {
    super();

    this.state = {
      text: props.text,
      icon: props.icon
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      //Perform some operation
      console.log(nextProps)
      this.setState({ text: nextProps.text });
    }
  }
  render() {
    const grafhicData = localization.services.grafhic.servicies
    let grafhicArray = Object.keys(grafhicData).map(function (key) {
      return grafhicData[key];
    });

    const webData = localization.services.web.servicies
    let webArray = Object.keys(webData).map(function (key) {
      return webData[key];
    });

    const marketingData = localization.services.marketing.servicies
    let marketingArray = Object.keys(marketingData).map(function (key) {
      return marketingData[key];
    });

    const cloudData = localization.services.cloud.servicies
    let cloudArray = Object.keys(cloudData).map(function (key) {
      return cloudData[key];
    });
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
                {grafhicArray.map((grafic, idx) => (<li key={idx}>{grafic}</li>))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content two">
              <h4>{localization.services.web.title}</h4>
              <ul>
                {webArray.map((web, idx) => (<li key={idx}>{web}</li>))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content three">
              <h4>{localization.services.marketing.title}</h4>
              <ul>
                {marketingArray.map((marketing, idx) => (<li key={idx}>{marketing}</li>))}

              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content four">
              <h4>{localization.services.cloud.title}</h4>
              <ul>
                {cloudArray.map((cloud, idx) => (<li key={idx}>{cloud}</li>))}
              </ul>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <NavLink to="/services" className="d-flex justify-content-center">
              <Button text="Read more" />
            </NavLink>
          </div>
        </div>
        <ButtonDown handleClick={scrollToDown} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(WhatWeDo);