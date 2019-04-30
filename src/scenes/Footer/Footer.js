import React, { Component } from 'react';
import "./scss/footer.scss";
import { LinkedinIcon, TwitterIcon } from '../../Assets/index.assets'
class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        <div className="container d-flex flex-column flex-sm-column ">
          <div className="col-12 col-md-4 pt-5">
            <h5>Nitroclik - Hong Kong</h5>
            <p>+852 8193 2105 / 6055 6621 </p>
            <p>info@nitroclik.com</p>
            <span>copyright ® 2019 NITROCLIK</span>
            <p className="footer__box--icons"><a href="https://www.linkedin.com/company/nitroclik/" target="_blank" rel="noopener noreferrer"> <LinkedinIcon></LinkedinIcon></a><a href="https://twitter.com/nitroclik?lang=en" target="_blank" rel="noopener noreferrer"> <TwitterIcon></TwitterIcon></a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;