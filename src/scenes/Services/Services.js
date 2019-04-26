import React, { Component } from 'react';
import { HeaderSection } from "../../Components/index.components";
import { AppIcon, ServerIcon, GraphicIcon, MegaPhone } from "../../Assets/index.assets";
import ScrollAnimateInLineSvg from "./components/IconFrame";
import _ from "lodash";
import localization from '../../localization/index';
import './Services.scss';
const images = {
  small: './assets/images/servicesheader_340.jpg',
  medium: './assets/images/servicesheader.jpg',
  large: './assets/images/servicesheader.jpg',
  xlarge: './assets/images/servicesheader.jpg'
}

class Services extends Component {
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
      <div className="sections row">
        <HeaderSection
          images={images}
          title={_.toUpper(localization.services.title)}
          subtitle={_.toUpper(localization.services.subtitle)}
        />
        <div className="container services__container row">
          <p
            dangerouslySetInnerHTML={{ __html: localization.services.text }}
            className="services__description" />
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="services__iconbox">
                  <ScrollAnimateInLineSvg SvgElement={GraphicIcon()} />
                  {/* <GraphicIcon className={"services__iconbox--icon"} /> */}
                </div>
              </div>
              <div className="col-12 col-md-8 services__list">
                <h3 className="services__title--text">{localization.services.grafhic.title}</h3>
                {grafhicArray.map((grafic, idx) => (<span key={idx}>{grafic}</span>))}

                <p>{localization.services.grafhic.text}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 order-2 order-md-1 col-md-8 services__list">
                <h3 className="services__title--text">{localization.services.web.title}</h3>
                {webArray.map((grafic, idx) => (<span key={idx}>{grafic}</span>))}
                <p>{localization.services.web.text}</p>
              </div>
              <div className="col-12 order-1 order-md-2 col-md-4">
                <div className="services__iconbox">

                  <ScrollAnimateInLineSvg SvgElement={AppIcon()} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="services__iconbox">
                  <ScrollAnimateInLineSvg SvgElement={MegaPhone()} />

                </div>
              </div>
              <div className="col-12 col-md-8 services__list">
                <h3 className="services__title--text">{localization.services.marketing.title}</h3>
                {marketingArray.map((grafic, idx) => (<span key={idx}>{grafic}</span>))}
                <p>{localization.services.marketing.text}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 order-2 order-md-1 col-md-8 services__list">
                <h3 className="services__title--text">{localization.services.cloud.title} </h3>
                {cloudArray.map((grafic, idx) => (<span key={idx}>{grafic}</span>))}
                <p>{localization.services.cloud.text}</p>

              </div>
              <div className="col-12 col-md-4 order-1 order-md-2">
                <div className="services__iconbox">
                  <ScrollAnimateInLineSvg SvgElement={ServerIcon()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;