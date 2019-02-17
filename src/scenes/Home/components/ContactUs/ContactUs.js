import React from 'react';
import './ContactUs.scss';
import { HeadTitle, ContactForm } from "../../../../Components/index.components";

const ContactUs = () => {
  return (
    <div className="contact-us col-12 d-flex justify-content-center flex-column">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
            <HeadTitle title={'Contact Us'} color={'#FFA59E'} lineColor={'#FFA59E'}/>

          </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 contact-us__txt">
              <ContactForm/> 
            </div>
            <div className="col-12 col-md-6 contact-us__img">
              <img className="contact-us__img--img" src={'./assets/images/contact.jpg'} alt="about us"></img>
            
            </div>
        </div>
      </div>
  );
};

export default ContactUs;