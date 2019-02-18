import React, { Component } from 'react';
import { HeaderSection } from "../../../Components/index.components";

const images = {
  small: './assets/images/blogheader_340.jpg',
  medium: './assets/images/blogheader.jpg',
  large: './assets/images/blogheader.jpg',
  xlarge: './assets/images/blogheader.jpg'
}
const title = "Blog";
const subtitle = "we like to share with you our knowledge";

class HomeBlog extends Component {
  render() {
    return (
      <div className="sections d-flex">
        <HeaderSection 
        images={images}
        title={title}
        subtitle = {subtitle}
        />
      </div>
    );
  }
}

export default HomeBlog;