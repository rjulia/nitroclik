import React from 'react';
import { HeadTitle } from "../../../Components/index.components";
import localization from "../../../localization";
import "../AboutUs.scss"
import _ from "lodash";

const WhoWeAre = () => {

  return (
    <div className="sections__texts container about-us">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
          <HeadTitle title={_.toUpper(localization.aboutUs.who)} color={'#FFA59E'} lineColor={'#FFA59E'} />

        </div>
      </div>
      <div className="row">
        jaksnldjx
      </div>
    </div>
  )

}

export default WhoWeAre;
