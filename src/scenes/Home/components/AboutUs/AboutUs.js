import React, { Component } from 'react';
import './AboutUs.scss';
import { HeadTitle } from "../../../../Components/index.components";
import localization from "../../../../localization";
import _ from "lodash";

class AboutUS extends Component {
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
              <h4>Branding & Grafhic Design</h4>
              <ul>
                <li>Brand Consulting</li>
                <li>Logo Design</li>
                <li>Branding Guiline</li>
                <li>Brouchures & Flyers</li>
                <li>Catalogue</li>
                <li>Packging</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content two">
              <h4>Web & App development</h4>
              <ul>
                <li>Resposive Website</li>
                <li>App IOS & Android</li>
                <li>Drupal or Custom CMS</li>
                <li>E-commerce</li>
                <li>Start-up Consulting</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content three">
              <h4>Digital Marketing</h4>
              <ul>
                <li>SEO & SEM</li>
                <li>Digital Growth</li>
                <li>Social Media Marketing</li>
                <li>Email Campaign</li>
                <li>Content Marketing</li>
                <li>Marketing Automation</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 what-we-do__frame">
            <div className="what-we-do__content four">
              <h4>Cloud & SaaS & More</h4>
              <ul>
                <li>Amazon Web Services</li>
                <li>Integrations</li>
                <li>Document Managment</li>
                <li>Business Analisys</li>
                <li>Finance Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUS;