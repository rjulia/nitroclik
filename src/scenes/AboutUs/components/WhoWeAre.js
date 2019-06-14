import React, { Fragment } from 'react';
import { HeadTitle } from "../../../Components/index.components";
import localization from "../../../localization";
import "../AboutUs.scss"
import _ from "lodash";
import staff from '../../../data/staff'
import Profile from "./Profile"
const WhoWeAre = () => {

  const list = _.sampleSize(staff, staff.length)

  return (
    <Fragment>
      <div className="col-12 mt-5 d-flex justify-content-center mb-3 mb-md-5">
        <HeadTitle title={_.toUpper(localization.aboutUs.who)} color={'#FFA59E'} lineColor={'#FFA59E'} />

      </div>

      <div className="col-12">
        <div className="row">
          {list.map((people, idx) => (

            <Profile key={idx} people={people} />

          ))}

        </div>
      </div>
    </Fragment>

  )

}

export default WhoWeAre;
