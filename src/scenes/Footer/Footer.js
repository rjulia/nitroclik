import React, { Component } from 'react';
import "./scss/footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        <div className="container d-flex">
          <div className="col-12 col-md-4 pt-5"> 
            <h5>Nitroclik - Hong Kong</h5>
            <p>Tin Chung CRT., Tin SHui Wai, NT</p>
            <p>+852 5348 4245</p>
            <span>copyright ® 2019 NITROCLIK</span>
          </div>
          <div className="col-12 col-md-8 pt-5"> 
            <h5>Last post</h5>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;