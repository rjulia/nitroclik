import React from 'react';
import { HeadTitle } from "../../../Components/index.components";
import localization from "../../../localization";
import "../AboutUs.scss"
import _ from "lodash";
import staff from '../../../data/staff'
import Profile from "./Profile"
const WhoWeAre = () => {

  const list = _.sampleSize(staff, staff.length)
  console.log(list)
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
          <HeadTitle title={_.toUpper(localization.aboutUs.who)} color={'#FFA59E'} lineColor={'#FFA59E'} />

        </div>
      </div>
      <div className="row">
        {list.map((people, idx) => (

          <Profile key={idx} people={people} />

        ))}
      </div>
    </div>
  )

}

export default WhoWeAre;
