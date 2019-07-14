import React, { Component, Fragment } from 'react'
import { HeadTitle } from "../../../Components/index.components";
import _ from "lodash";

import localization from "../../../localization";
export class HowWeWork extends Component {
  render() {
    return (
      <div className="how__section d-flex">
        <div className="col-12 d-flex justify-content-center mb-1 mb-md-2">
          <HeadTitle title={_.toUpper(localization.aboutUs.how)} color={'#FFA59E'} lineColor={'#FFA59E'} />
        </div>
        <div className="col-12 d-flex justify-content-center about-us__txt">
          <p>We are guided by clear and long-term cooperation with clients. Look through the process of our work</p>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="how__box about-us__txt">
            <h3>RESEARCH</h3>
            <p>We thoroughly research and analyse the client's business, services, and products to clearly understand the business potential, its goals, and target audience. This information will be the key to determine the special design and functional requirements.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="how__box about-us__txt">
            <h3>STRATEGY</h3>
            <p>We plan customised content strategies to get the maximum from conversions. Particular attention is paid to setting the keys to the efficient user interface and determining the suitable user experience.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="how__box about-us__txt">
            <h3>DESIGN</h3>
            <p>We closely cooperate with our clients to create projects that completely demonstrate the proposed work. Mockups are regularly improved to satisfy all the objectives. Our work is finished only in case the client is absolutely satisfied.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="how__box about-us__txt">
            <h3>QUALITY ASSURANCE</h3>
            <p>Our professional QA team thoroughly examines every single page to ensure that all features perform perfectly on every platform, causing the most holistic user experience for any whimsical visitor.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="how__box about-us__txt">
            <h3>DEVELOPMENT</h3>
            <p>We integrate the entirely custom front-end theme with a solid back-end foundation. We realize that tailor-made solutions are the best way to satisfy the project's primary goals while providing maximum flexibility</p>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="how__box about-us__txt">
            <h3>DEVELOPMENT</h3>
            <p>We always do our best to offer the training required for a smooth transition for site administration. We provide post-launch to guarantee that everything runs easily and fits the client's needs and requirements.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default HowWeWork
