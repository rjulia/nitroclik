import React, { Component } from 'react'
import "./Porfolio.scss";
import { connect } from 'react-redux';
import { HeaderSection, OwnLightbox } from "../../Components/index.components";
import localization from "../../localization";
import _ from "lodash";


const images = {
  small: './assets/images/porfolio_340.jpg.jpg',
  medium: './assets/images/porfolioheader.jpg',
  large: './assets/images/porfolioheader.jpg',
  xlarge: './assets/images/porfolioheader.jpg'
}

const images_defalut = [
  './assets/images/home_one_340.jpg',
  './assets/images/home_one_768.jpg',
  './assets/images/home_one_1280.jpg',
  './assets/images/home_one_1280.jpg',
  './assets/images/home_two_340.jpg',
  './assets/images/home_two_768.jpg',
  './assets/images/home_two_1280.jpg',
  './assets/images/home_two_1280.jpg',
  './assets/images/home_three_340.jpg',
  './assets/images/home_three_768.jpg',
  './assets/images/home_three_1280.jpg',
  './assets/images/home_three_1280.jpg'
];


class Porfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }



  toggleLightbox() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
      <div className="sections porfolio row">
        <HeaderSection
          images={images}
          title={_.toUpper(localization.porfolio.title)}
          subtitle={_.toUpper(localization.porfolio.subtitle)}
        />
        <div className="porfolio__container py-5 ">
          <div className="container row">

            {myArray.map(my => (

              <div key={my} className="col-4">
                <div className="porfolio___card">
                  <div className="porfolio__image--container">
                    <img src="./assets/images/how_we_do.jpg" alt="" />
                  </div>
                  <div className="porfolio__text--contanier">
                    <h2>Tximak</h2>
                    <p className="porfolio__text--subtitle">web design</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet fugiat, ducimus vitae repellendus omnis recusandae!</p>
                    <button className="btn"><a href="http://google.es" target="_blank" rel="noopener noreferrer">LINK</a></button>

                    <button onClick={() => { this.toggleLightbox() }} className="btn">OPEN IMAGES</button>

                    <OwnLightbox
                      images={images_defalut}
                      show={this.state.isOpen}
                      onClose={() => { this.toggleLightbox() }}
                    />
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Porfolio);
