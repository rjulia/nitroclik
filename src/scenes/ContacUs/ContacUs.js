import React, { Component } from 'react';
import { HeaderSection, ContactForm } from "../../Components/index.components";
import { connect } from 'react-redux';
import { getdata } from "../../Services/Actions/Actions";
import ServicesList from './components/ServicesList';
import ShortList from "./components/ShortList";
import './scss/contactus.scss'
import localization from "../../localization";
import _ from "lodash";

const images = {
  small: './assets/images/contactusheader_340.jpg',
  medium: './assets/images/contactusheader.jpg',
  large: './assets/images/contactusheader.jpg',
  xlarge: './assets/images/contactusheader.jpg'
}
const title = "Contact us";
const subtitle = "how may i help you today?";

class ContacUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favourites: []
    }
  }
  componentDidMount() {
    this.props.dispatch(getdata());
  }

  addFavourite(id) {
    const newSet = this.state.favourites.concat([id])
    this.setState({
      favourites: newSet
    })
  }

  // remove ID from the favourites array
  deleteFavourite(id) {
    const { favourites } = this.state
    const newList = [
      ...favourites.slice(0, id),
      ...favourites.slice(id + 1)
    ]
    this.setState({
      favourites: newList
    })
  }
  deleteFavourites() {
    this.setState({
      favourites: []
    })
  }

  render() {
    return (
      <div className="sections row">
        <HeaderSection
          images={images}
          title={_.toUpper(localization.contact.title)}
          subtitle={_.toUpper(localization.contact.subtitle)}
        />
        <div className="container justify-content-md-center py-5 row">
          <div className="col-12 col-md-6 justify-content-center">
            <p>Here some text</p>
          </div>
        </div>
        <div className="container justify-content-md-center py-5 row">
          <div className="col-12 col-md-6">
            <ContactForm
              data={this.props.data}
              favourites={this.state.favourites}
              deleteFavourites={this.deleteFavourites.bind(this)}
            />
          </div>
          <div className="col-12 col-md-6">
            <h3>You can choice what services you need too</h3>
            <ShortList
              data={this.props.data}
              favourites={this.state.favourites}
              deleteFavourite={this.deleteFavourite.bind(this)} />
            <ServicesList
              data={this.props.data}
              favourites={this.state.favourites}
              addFavourite={this.addFavourite.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(ContacUs);