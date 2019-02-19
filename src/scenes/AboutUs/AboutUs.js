import React, { Component } from 'react';
import { HeaderSection } from "../../Components/index.components";

const images = {
  small: './assets/images/aboutusheader_340.jpg',
  medium: './assets/images/aboutusheader.jpg',
  large: './assets/images/aboutusheader.jpg',
  xlarge: './assets/images/aboutusheader.jpg'
}
const title = "About us";
const subtitle = "Let's start today to build tomorrow";

class AboutUs extends Component {
  render() {
    return (
      <div className="sections d-flex">
        <HeaderSection 
        images={images}
        title={title}
        subtitle = {subtitle}
        />
        <div className="sections__texts container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nunc nec leo tempor consequat. Nunc ac dapibus mauris. Curabitur a velit at eros iaculis gravida. Integer id porta mauris. Nullam pharetra tortor quis orci ornare mollis. Suspendisse potenti. Sed ut dictum risus, id sodales purus.</p>

          <p>Donec malesuada erat sed purus hendrerit, non gravida risus tristique. Suspendisse accumsan rutrum lorem quis ornare. Aenean efficitur hendrerit sem, quis dapibus nisi elementum vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae nisl non nulla congue bibendum. Cras consequat nisi tristique elit vulputate, sed tincidunt libero porta. Suspendisse eget est nunc. Ut id mauris ut orci maximus ullamcorper sed eget diam. Nunc tincidunt vulputate tincidunt.
</p>
          <p>Mauris ultricies auctor diam, vitae venenatis ipsum semper sed. Ut diam magna, gravida faucibus elit sed, blandit euismod est. Nullam nec gravida sapien. Nam ultricies lacus in lectus aliquet varius. Curabitur at sem non velit rutrum dictum. Nulla mollis fermentum felis. Ut posuere accumsan erat, a iaculis est ultrices vel. Pellentesque feugiat ante vel laoreet lobortis. Maecenas hendrerit purus at urna placerat, ac malesuada neque aliquet.</p>

          <p>Praesent aliquam finibus nunc a tristique. Morbi luctus efficitur sem ut semper. Sed non nibh sed nisi egestas porta. Donec condimentum mollis ex accumsan mollis. In cursus et libero sed egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam ipsum libero, lacinia ut feugiat non, tincidunt ac diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus eu urna eget commodo.</p>

          <p>Sed molestie iaculis viverra. Donec urna nisi, aliquet nec ligula eget, pellentesque venenatis metus. Suspendisse at odio tristique, vulputate massa non, porttitor sem. Integer sed risus dapibus, condimentum arcu ut, congue leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam est nisi, fringilla ac quam a, rhoncus sollicitudin diam. Etiam hendrerit volutpat ex, at ornare tellus lacinia a. Donec eu luctus turpis. Praesent consequat aliquet ornare. Morbi libero lacus, accumsan vel neque non, porta hendrerit quam. Proin laoreet, ligula at sagittis suscipit, nisi ex auctor odio, et auctor magna nunc vitae enim. Proin gravida porta nisi, at posuere massa tristique id. Nullam maximus, ligula id euismod bibendum, velit metus varius sem, eget rhoncus metus mi vehicula orci. Suspendisse iaculis sapien orci, id cursus orci molestie ac. Sed placerat venenatis facilisis.</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;