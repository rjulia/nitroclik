import React from 'react';
import './ContactUs.scss';
import { HeadTitle, ContactForm } from "../../../../Components/index.components";
import _ from "lodash";
import localization from "../../../../localization";

const ContactUs = () => {
  return (
    <div className="contact-us col-12 d-flex justify-content-center flex-column">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-3 mb-md-5">
          <HeadTitle
            title={_.toUpper(localization.home.conctact)}
            color={'#FFA59E'}
            lineColor={'#FFA59E'} />

        </div>
        <div className="col-12  d-flex justify-content-center">
          <p className="contact-us__txt">{_.capitalize(localization.home.conctact_text)}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 contact-us__form">
          <ContactForm />
        </div>
        <div className="col-12 col-md-6 contact-us__img">
          <img className="contact-us__img--img" src={'./assets/images/contact.jpg'} alt="about us"></img>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;