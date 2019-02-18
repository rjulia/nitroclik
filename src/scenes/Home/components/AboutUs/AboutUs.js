import React, { Component } from 'react';
import './AboutUs.scss';
import { HeadTitle } from "../../../../Components/index.components";

class AboutUS extends Component {
  render() {
    return (
      <div className="about-us col-12 d-flex justify-content-center flex-column">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
            <HeadTitle title={'WE ...'} color={'#FFA59E'} lineColor={'#FFA59E'}/>

          </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 about-us__img">
              <img className="about-us__img--img" src={'./assets/images/about.jpg'} alt="about us"></img>
            
            </div>
            <div className="col-12 col-md-6 about-us__txt">
                <h3>... are consulting</h3>
                <p className="about-us__txt--parf"> We transform businesses and help our clients outpace digital disruption—by designing new business models and enhancing existing ones.</p>
          
                <h3>... work end-to-end</h3>

                <p className="about-us__txt--parf"> We help clients develop more successful products and propositions</p>
                <p className="about-us__txt--parf"> Using an end-to-end process we call Meaningful Design that brings together the best of Design Thinking, Lean Startup and Agile.</p>
                
            
            </div>
        </div>
      </div>
    );
  }
}

export default AboutUS;