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
                <span>{localization.services.grafhic.ser1}</span>
                <span>{localization.services.grafhic.ser2}</span>
                <span>{localization.services.grafhic.ser3}</span>
                <span>{localization.services.grafhic.ser4}</span>
                <span>{localization.services.grafhic.ser5}</span>
                <span>{localization.services.grafhic.ser6}</span>
                <p>{localization.services.grafhic.text}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 order-2 order-md-1 col-md-8 services__list">
                <h3 className="services__title--text">{localization.services.web.title}</h3>
                <span>{localization.services.web.ser1}</span>
                <span>{localization.services.web.ser2}</span>
                <span>{localization.services.web.ser3}</span>
                <span>{localization.services.web.ser4}</span>
                <span>{localization.services.web.ser5}</span>
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
                <span>{localization.services.marketing.ser1}</span>
                <span>{localization.services.marketing.ser2}</span>
                <span>{localization.services.marketing.ser3}</span>
                <span>{localization.services.marketing.ser4}</span>
                <span>{localization.services.marketing.ser5}</span>
                <p>{localization.services.marketing.text}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 order-2 order-md-1 col-md-8 services__list">
                <h3 className="services__title--text">{localization.services.cloud.title} </h3>
                <span>{localization.services.cloud.ser1}</span>
                <span>{localization.services.cloud.ser2}</span>
                <span>{localization.services.cloud.ser3}</span>
                <span>{localization.services.cloud.ser4}</span>
                <span>{localization.services.cloud.ser5}</span>
                <p>{localization.services.marketing.text}</p>

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