import React from 'react';
import { HeroImage, WhatWeDo, HowWeDo, ContactUs } from './components/index';
import Layout from '../../Components/Helmet/Helmet'
import InViewMonitor from '../../Components/InViewMonitor/InViewMonitor'
import { Parallax } from 'react-parallax';
import './components/Home.scss'
import localization from "../../localization";

// imagesHome

const Home = (props) => {

  return (
    <div className="home d-flex row flex-column">
      <HeroImage />
      <div className="col-12 p-0">
        <Parallax
          blur={10}
          bgImage={'./assets/images/white_color.jpg'}
          bgImageAlt="how we are"
          strength={600}
          bgClassName='home--image__paralax'

        >
          <div className="container d-flex justify-content-center">
            <div className="home__main--title">
              <h1> {localization.home.main_title} </h1>
            </div>
            <InViewMonitor
              classNameNotInView='vis-hidden'
              classNameInView='animated fadeInUp'>
              <WhatWeDo />

            </InViewMonitor>

          </div>

        </Parallax>
      </div>
      <HowWeDo />
      <div className="container">
        <ContactUs />
      </div>
    </div>
  );

}
const config_seo = {
  title: "Nitroclik - Web & App and Grafhic design in Hong Kong -  Home page",
  content: 'Web, App, and more in every page'
}
export default Layout(Home, config_seo);