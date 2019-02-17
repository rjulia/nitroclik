import React, { Component } from 'react';
import './AboutUs.scss';
import { HeadTitle } from "../../../../Components/index.components";

class AboutUS extends Component {
  render() {
    return (
      <div className="about-us col-12 d-flex justify-content-center flex-column">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
            <HeadTitle title={'About Us'} color={'#FFA59E'} lineColor={'#FFA59E'}/>

          </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 about-us__img">
              <img className="about-us__img--img" src={'./assets/images/about.jpg'} alt="about us"></img>
            
            </div>
            <div className="col-12 col-md-6 about-us__txt">
                <p className="about-us__txt--parf"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                <p className="about-us__txt--parf"> Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
                
            
            </div>
        </div>
      </div>
    );
  }
}

export default AboutUS;