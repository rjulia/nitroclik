import React, { Component } from 'react';
import { HeaderSection, AppIcon, ServerIcon, SoftwareIcon, CloudIcon } from "../../Components/index.components";

const images = {
  small: './assets/images/servicesheader_340.jpg',
  medium: './assets/images/servicesheader.jpg',
  large: './assets/images/servicesheader.jpg',
  xlarge: './assets/images/servicesheader.jpg'
}
const title = "Services";
const subtitle = "we give you the simple solutions for your new project"; 

class Services extends Component {
  render() {
    return (
      <div className="sections d-flex">
        <HeaderSection 
        images={images}
        title={title}
        subtitle = {subtitle}
        />
        <div className="container services__container row">
            <div className="col-6">
                <div className="services__iconbox">
                  <AppIcon className={"services__iconbox--icon"}/>
                  <span className="services__iconbox--text">WEB & APP </span>
                </div> 
            </div>
            <div className="col-6">
                <div className="services__iconbox">
                  <ServerIcon className={"services__iconbox--icon"}/>
                  <span className="services__iconbox--text">CLOUD COMPUTING</span>
                </div> 
            </div>
            <div className="col-6">
                <div className="services__iconbox">
                  <CloudIcon className={"services__iconbox--icon"}/>
                  <span className="services__iconbox--text">SISTEMS</span>
                </div> 
            </div>
            <div className="col-6">
                <div className="services__iconbox">
                <SoftwareIcon className={"services__iconbox--icon"}/>
                  <span className="services__iconbox--text">SOFTWARE</span>
                </div> 
            </div>
        </div>
      </div>
    );
  }
}

export default Services;