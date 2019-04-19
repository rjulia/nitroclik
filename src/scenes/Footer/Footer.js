import React, { Component } from 'react';
import "./scss/footer.scss";
import { LinkedinIcon } from '../../Assets/index.assets'
class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        <div className="container d-flex flex-column flex-sm-column ">
          <div className="col-12 col-md-4 pt-5">
            <h5>Nitroclik - Hong Kong</h5>
            <p>+852 9321 0542 / 5348 4245 </p>
            <p>info@nitroclik.com</p>
            <span>copyright ® 2019 NITROCLIK</span>
            <p><a href="https://www.linkedin.com/company/nitroclik/" target="_blank" rel="noopener noreferrer"> <LinkedinIcon></LinkedinIcon></a></p>
          </div>
          {/* <div className="col-12 col-md-8 pt-5 d-none d-sm-inline-flex"> 
            <h5>Last post</h5>
          
          </div> */}
        </div>
      </div>
    );
  }
}

export default Footer;