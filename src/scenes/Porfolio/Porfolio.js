import React, { Component } from 'react'
import "./Porfolio.scss";
import { connect } from 'react-redux';
import { HeaderSection, OwnLightbox } from "../../Components/index.components";
import { showWorks } from "../../Services/Actions/WorkActions";

import localization from "../../localization";
import _ from "lodash";

const images = {
  small: './assets/images/porfolio_340.jpg',
  medium: './assets/images/porfolioheader.jpg',
  large: './assets/images/porfolioheader.jpg',
  xlarge: './assets/images/porfolioheader.jpg'
}

class Porfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      id: '',
      works: []
    };
  }
  componentDidMount() {
    this.props.showWorks();
  }


  toggleLightbox(id = '') {
    this.setState({
      isOpen: !this.state.isOpen,
      id: id
    });
  }


  render() {
    return (
      <div className="sections porfolio row">
        <HeaderSection
          images={images}
          title={_.toUpper(localization.porfolio.title)}
          subtitle={_.toUpper(localization.porfolio.subtitle)}
        />
        <div className="porfolio__container py-5 ">
          <div className="container row">

            {this.props.works && this.props.works.map(item => (

              <div key={item.id} className="col-4">
                <div className="porfolio___card">
                  <div className="porfolio__image--container">
                    <img src={item.head} alt="" />
                  </div>
                  <div className="porfolio__text--contanier">
                    {item.category && item.category.map(category => (

                      <p key={category} className={`porfolio__text--subtitle ${category}`}>{category}</p>
                    ))}
                    <h2>{item.client}</h2>
                    <p>{item.description}</p>

                    {(item.url && item.url.length) ? <button className="btn"><a href={item.url} target="_blank" rel="noopener noreferrer">{localization.porfolio.link}</a></button> : ''}

                    {
                      (item.images && item.images.length > 0) ?
                        <button onClick={() => { this.toggleLightbox(item.id) }} className="btn">{localization.porfolio.info}</button>
                        : ''
                    }
                    {(item.id === this.state.id) ?
                      <OwnLightbox
                        images={item.images}
                        show={this.state.isOpen}
                        onClose={() => { this.toggleLightbox() }}
                      /> : ''
                    }

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
    works: state.works.works,
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showWorks: () => dispatch(showWorks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Porfolio);
